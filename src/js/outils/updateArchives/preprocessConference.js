export default async conference => {
  if (conference.video) {
    conference.video.link = await fetch(
      `http://noembed.com/embed?url=${conference.video.url}`
    )
      .then(response => response.json())
      .then(response => response.thumbnail_url);
  }
  return conference;
};
