/*
 * Everything except initStyleguide should be usable
 * for ParisWeb's site.
 * TODO : Update webpack.conf.js in order to generate
 * two separate bundles
 */
import initTypography from "./util/typography";
import initNavigation from './pages/nav'
import initStyleguide from "./styleguide";

initTypography();
initNavigation();
initStyleguide();
