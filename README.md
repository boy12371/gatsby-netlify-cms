# 上海匡架网络

```
上海匡架网络科技有限公司作为领先的移动互联网应用服务提供商，致力于将先进的营销理念、客户服务理念和通信信息服务平台相结合，为企业提供基于移动互联网的创新的应用解决方案与服务。帮助企业利用移动互联网和客户、员工、合作伙伴更有效地沟通互动，创造营销、客服新价值。
```

# 安装

```
git clone https://github.com/boy12371/gatsby-starter-netlify-cms.git
cd gatsby-starter-netlify-cms
npm i
npm run develop
# 忽略警告
npm start
```

# dependencies

```
bulma gatsby gatsby-image gatsby-plugin-feed gatsby-plugin-manifest gatsby-plugin-netlify gatsby-plugin-netlify-cms gatsby-plugin-no-sourcemaps gatsby-plugin-offline gatsby-plugin-purgecss gatsby-plugin-react-css-modules gatsby-plugin-react-helmet gatsby-plugin-sass gatsby-plugin-sharp gatsby-plugin-typescript gatsby-remark-copy-linked-files gatsby-remark-images gatsby-remark-relative-images gatsby-remark-responsive-iframe gatsby-source-filesystem gatsby-transformer-remark gatsby-transformer-sharp lodash lodash-webpack-plugin netlify-cms node-sass parcel-bundler prop-types react react-dom react-helmet react-redux react-responsive-carousel redux uuid
```

# devDependencies

```
@types/lodash @types/node @types/react @types/react-dom @types/react-helmet @types/uuid cpy-cli gh-pages prettier rimraf source-map-support ts-node tsconfig-paths tslint typescript
```

## 注意：不要理睬安装依赖时的警告

-   [config.yml](./static/kuang/config.yml)

*   [管理后台登录验证](https://www.netlifycms.org/docs/authentication-backends/)

*   github 验证

    1. config.yml 添加 backend 配置

    ```yaml
    backend:
        name: github
        repo: boy12371/gatsby-netlify-cms
        branch: master
        api_root: https://api.github.com
        base_url: https://api.netlify.com
        auth_endpoint: auth
    ```

    2. github 注册新应用
        - [github 注册地址](https://github.com/settings/developers)
    3. netlify 控台配置 github 验证
        - [netlify 控台地址](https://app.netlify.com)
    4. 详细教程
        - [netlify 教程](https://www.netlify.com/docs/authentication-providers/)

*   netlify 用户验证

    1. config.yml 添加 backend 配置

    ```yaml
    backend:
        name: git-gateway
        branch: master
    ```

    2. 激活 ID 认证
        - [netlify 教程](https://www.netlify.com/docs/identity)

## GraphiQL

```graphiql
{
  allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "FooterSettings"}}}) {
    edges {
      node {
        html
      }
    }
  }
}
```

-   [使用第三方 GraphQL API](https://www.gatsbyjs.org/docs/third-party-graphql)
-   [客户端远程获取数据](https://www.gatsbyjs.org/docs/client-data-fetching)
