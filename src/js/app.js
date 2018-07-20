/*
 * Everything except initStyleguide should be usable
 * for ParisWeb's site.
 * TODO : Update webpack.conf.js in order to generate
 * two separate bundles
 */

import "./util/polyfill";
import initTypography from "./util/typography";
import initNavigation from "./pages/nav";
import initSponsorSections from "./pages/sponsors";
import initPresentations from "./pages/presentations";
import initVideos from "./pages/video";
import { register, unregister } from "./service-worker/client/registration";

initTypography();
initNavigation();
initSponsorSections();
initPresentations();
initVideos();

if (/serviceworker=on/.test(window.location.search)) {
  register();
} else {
  unregister();
}
