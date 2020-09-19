const getCookie = (name) => {
  const v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}

const cookieName = (name) => (`is_${name}_open`)

const handleWelcomeDetail = (e) => {
  const isOpen = e.target.hasAttribute('open');
  document.cookie = `${cookieName(e.target.id)}=${isOpen}`;
}

export const detailsCookie = (detailsElementId) => {
  const detailsEl = document.getElementById(detailsElementId);

  detailsEl.addEventListener('toggle', handleWelcomeDetail);

  const detailsCookieValue = getCookie(cookieName(detailsElementId));
  if(detailsCookieValue === 'false') {
    detailsEl.removeAttribute('open');
  }
  if(detailsCookieValue === 'true') {
    detailsEl.addAttribute('open');
  }
}