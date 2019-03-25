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

-   [config.yml](./static/admin/config.yml)

## 本地调试

```yaml
backend:
    name: github
    branch: master
    repo: boy12371/gatsby-netlify-cms
    base_url: https://api.netlify.com
```

## 远程部署

```yaml
backend:
    name: git-gateway
    branch: master
```
