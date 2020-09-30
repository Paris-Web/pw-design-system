import { checkEnabledAt } from './enabled-at';
import { detailsData } from './details-data'

const initHub = () => {
  // handle open/closed setting for details
  detailsData('details_welcome');

  // enable/disable Zoom buttons
  checkEnabledAt();

  // Global interval
  setInterval(() => {
    checkEnabledAt();
  }, 60 * 1000);
}

export default initHub;