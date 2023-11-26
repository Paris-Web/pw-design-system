const itemName = (name) => (`is_${name}_open`);

const handleWelcomeDetail = (e) => {
  const isOpen = e.target.hasAttribute('open');
  localStorage.setItem(itemName(e.target.id), isOpen);
}

export const detailsData = (detailsElementId) => {
  const detailsEl = document.getElementById(detailsElementId);

  detailsEl.addEventListener('toggle', handleWelcomeDetail);

  const itemValue = localStorage.getItem(itemName(detailsElementId));

  if(itemValue === 'false') {
    detailsEl.removeAttribute('open');
  }
  if(itemValue === 'true') {
    detailsEl.setAttribute('open', true);
  }
}
