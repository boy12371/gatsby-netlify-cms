import CMS from "netlify-cms";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import ArticlePostPreview from "./preview-templates/ArticlePostPreview";
import CarouselSettingsPreview from "./preview-templates/CarouselSettingsPreview";
import FooterSettingsPreview from "./preview-templates/FooterSettingsPreview";
import HeaderSettingsPreview from "./preview-templates/HeaderSettingsPreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import JobsPagePreview from "./preview-templates/JobsPagePreview";
import UnitsSettingsPreview from "./preview-templates/UnitsSettingsPreview";

CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("article", ArticlePostPreview);
CMS.registerPreviewTemplate("carousel", CarouselSettingsPreview);
CMS.registerPreviewTemplate("footer", FooterSettingsPreview);
CMS.registerPreviewTemplate("header", HeaderSettingsPreview);
CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("jobs", JobsPagePreview);
CMS.registerPreviewTemplate("units", UnitsSettingsPreview);
