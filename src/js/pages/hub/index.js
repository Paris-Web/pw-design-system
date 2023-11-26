import { detailsData } from './details-data'
import { darkModeSwitchHandler } from './dark-mode';


const initHub = () => {
  detailsData('details_welcome');
  detailsData('details_programme_jeudi');
  detailsData('details_programme_vendredi');

  // enable dark mode switcher
  darkModeSwitchHandler();
}

export default initHub;
