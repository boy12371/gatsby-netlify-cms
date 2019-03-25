import { SiteMetadata } from "./interfaces";
import { GatsbyPlugin } from "./types";
import { ROOT } from "./constant";

export const siteMetadata: SiteMetadata = {
    title: "上海匡架网络",
    description:
        "上海匡架网络科技有限公司作为领先的移动互联网应用服务提供商，致力于将先进的营销理念、客户服务理念和通信信息服务平台相结合，为企业提供基于移动互联网的创新的应用解决方案与服务。帮助企业利用移动互联网和客户、员工、合作伙伴更有效地沟通互动，创造营销、客服新价值。",
    keywords: [
        "匡架",
        "设计",
        "建筑",
        "软件",
        "应用",
        "微信",
        "公众号",
        "小程序"
    ],
    author: "上海匡架网络"
};

export const plugins: GatsbyPlugin[] = [
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
        resolve: "gatsby-source-filesystem",
        options: { path: `${ROOT}/static/img`, name: "uploads" }
    },
    {
        resolve: "gatsby-source-filesystem",
        options: { path: `${ROOT}/src/pages`, name: "pages" }
    },
    {
        resolve: "gatsby-source-filesystem",
        options: { path: `${ROOT}/src/img`, name: "images" }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
        resolve: "gatsby-transformer-remark",
        options: {
            plugins: [
                {
                    resolve: "gatsby-remark-relative-images",
                    options: { name: "uploads" }
                },
                {
                    resolve: "gatsby-remark-images",
                    options: { maxWidth: 2048 }
                },
                {
                    resolve: "gatsby-remark-copy-linked-files",
                    options: { destinationDir: "static" }
                }
            ]
        }
    },
    {
        resolve: "gatsby-plugin-netlify-cms",
        options: { modulePath: `${ROOT}/src/cms/cms` }
    },
    `gatsby-plugin-no-sourcemaps`,
    {
        resolve: "gatsby-plugin-purgecss",
        options: { develop: true, purgeOnly: ["/all.sass"] }
    },
    "gatsby-plugin-netlify"
];
