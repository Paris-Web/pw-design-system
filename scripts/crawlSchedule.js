const fs = require("fs");
const { JSDOM } = require("jsdom");
const fetch = require("isomorphic-fetch");

var mainPage, byDayPages;
if (process.env.ENV === "styleguide") {
  mainPage = "http://localhost:4000/pages/programme/";
  byDayPages = ["http://localhost:4000/pages/programme-jour"];
} else {
  mainPage = "https://www.paris-web.fr/2018/";
  byDayPages = [
    "https://www.paris-web.fr/2018/04.php",
    "https://www.paris-web.fr/2018/05.php",
    "https://www.paris-web.fr/2018/06.php"
  ];
}

const toArray = nodeList => {
  const array = [];
  for (var i = 0; i < nodeList.length; i++) {
    array.push(nodeList[i]);
  }
  return array;
};

const extractPresentationInfo = element => {
  const title = element.querySelector("h3 > a");
  const time = element.querySelector("time");
  const format = element.querySelector(".presentation__info dd:nth-child(2)")
    .childNodes[0].wholeText;
  const room = element.querySelector(".room");
  const tags = toArray(element.querySelectorAll(".tag"));
  const services = toArray(
    element.querySelectorAll(".presentation__services dd")
  );
  const description = element.querySelector(
    ".presentation__description > :last-child"
  );
  const authors = toArray(element.querySelectorAll(".portrait"));

  return {
    url: title.attributes.href.value,
    title: title.innerHTML,
    datetime: time ? time.attributes.datetime.value : null,
    format: format.split("(")[0].trim(),
    length: 60 * parseInt(format.split("(")[1], 10),
    room: room ? room.innerHTML : null,
    tags: tags.map(element => ({
      tag: element.innerHTML,
      url: `https://www.paris-web.fr${element.attributes.href.value}`
    })),
    services: services.map(element => element.innerHTML),
    description: description.innerHTML,
    authors: authors.map(author => {
      const avatar = author.querySelector("img");
      const name = author.querySelector("a");
      return {
        name: name.innerHTML,
        avatar: avatar ? avatar.attributes.src.value : null,
        url: name.attributes.href.value
      };
    })
  };
};

const crawlSchedule = () => {
  return fetch(mainPage)
    .then(response => response.text())
    .then(html => new JSDOM(html))
    .then(dom => dom.window.document.querySelectorAll(".presentation"))
    .then(presentationElements => {
      const presentations = [];
      for (var i = 0; i < presentationElements.length; i++) {
        presentations.push(extractPresentationInfo(presentationElements[i]));
      }
      return presentations;
    })
    .then(presentations => presentations);
};

const schedulePath =
  process.env.ENV === "styleguide"
    ? "dist/styleguide-schedule.json"
    : "dist/schedule.json";
const saveSchedule = schedule => {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      schedulePath,
      JSON.stringify({ mainPage, byDayPages, schedule }),
      err => {
        if (err) {
          return reject(err);
        }
        return resolve();
      }
    );
  });
};

crawlSchedule()
  .then(saveSchedule)
  .then(() => {
    console.log(`Schedule saved at ${schedulePath}`);
  });
