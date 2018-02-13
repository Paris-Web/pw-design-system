/*
 * Everything except initStyleguide should be usable
 * for ParisWeb's site.
 * TODO : Update webpack.conf.js in order to generate
 * two separate bundles
 */

import "./util/polyfill"
import initTypography from "./util/typography";
import initNavigation from './pages/nav'
import initSponsorSections from './pages/sponsors'
import initPresentations from './pages/presentations'
import initStyleguide from "./styleguide";

initTypography();
initNavigation();
initSponsorSections();
initPresentations();
initStyleguide();
