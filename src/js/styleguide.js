import "./util/polyfill";
import initTypography from "./util/typography";
import initNavigation from "./pages/nav";
import initSponsorSections from "./pages/sponsors";
import initPresentations from "./pages/presentations";
import initVideos from "./pages/video";
import initToggleContainers from "./pages/toggle";

import initStyleguide from "./styleguide/index.js";

initTypography();
initNavigation();
initSponsorSections();
initPresentations();
initVideos();
initToggleContainers();
initStyleguide();
