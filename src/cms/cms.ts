import CMS from "netlify-cms";

import ArticlePostPreview from "./preview-templates/ArticlePostPreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import JobsPagePreview from "./preview-templates/JobsPagePreview";
import AboutPagePreview from "./preview-templates/AboutPagePreview";
import LogoSettingsPreview from "./preview-templates/LogoSettingsPreview";
import NavigationSettingsPreview from "./preview-templates/NavigationSettingsPreview";
import CarouselSettingsPreview from "./preview-templates/CarouselSettingsPreview";
import FooterSettingsPreview from "./preview-templates/FooterSettingsPreview";
import UnitsSettingsPreview from "./preview-templates/UnitsSettingsPreview";

CMS.registerPreviewTemplate("article", ArticlePostPreview);
CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("jobs", JobsPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("logo", LogoSettingsPreview);
CMS.registerPreviewTemplate("navigation", NavigationSettingsPreview);
CMS.registerPreviewTemplate("carousel", CarouselSettingsPreview);
CMS.registerPreviewTemplate("footer", FooterSettingsPreview);
CMS.registerPreviewTemplate("units", UnitsSettingsPreview);
