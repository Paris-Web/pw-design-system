const fs = require("fs");
const { JSDOM } = require("jsdom");
const fetch = require("isomorphic-fetch");

const mainPage = "http://localhost:4000/pages/programme/";
const byDayPages = ["http://localhost:4000/pages/programme-jour"];

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

const saveSchedule = schedule => {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      "dist/schedule.json",
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

crawlSchedule().then(saveSchedule);
