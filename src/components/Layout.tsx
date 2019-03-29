import * as React from "react";
import Helmet from "react-helmet";

import { LayoutProps } from "../common/interfaces/LayoutComp";
import { DESCRIPTION, TITLE, KEYWORDS, SITEURL, AUTHOR, LANG } from "../common/constant";
import Header from "./Header";
import Crumb from "./Crumb";
import Footer from "./Footer";
import favicon from "../assets/img/favicon.ico";
import "../assets/styles/all.sass";

const Layout: React.FC<LayoutProps> = ({ name, title, description, keywords, isHeader, isCrumb, tags, isFooter, children }) => {
    const CrumbElement = isCrumb ? <Crumb title={title} tags={tags} /> : <></>;
    title = name ? title + " | " + name : title + " | " + TITLE;
    description = description || DESCRIPTION;
    keywords = keywords || KEYWORDS.join();
    const HeaderElement = isHeader == false ? <></> : <Header />;
    const FooterElement = isFooter == false ? <></> : <Footer />;

    return (
        <>
            <Helmet htmlAttributes={{ lang: LANG }}>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="hostname" content={SITEURL} />
                <meta name="author" content={AUTHOR} />
                <link rel="icon" type="image/x-icon" href={favicon} />
            </Helmet>
            {HeaderElement}
            {CrumbElement}
            {children}
            {FooterElement}
        </>
    );
};

export default Layout;
