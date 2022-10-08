/** @type {import('next').NextConfig} */

const path = require('path');
const loaderUtils = require('loader-utils');
const MangleCssClassPlugin = require('mangle-css-class-webpack-plugin');

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  webpack(config, { dev }) {
    const rules = config.module.rules.find(rule => typeof rule.oneOf === 'object').oneOf.filter(rule => Array.isArray(rule.use));

    if (!dev) {
      rules.forEach(rule => {
        rule.use.forEach(moduleLoader => {
          if (moduleLoader.loader?.includes('css-loader') && !moduleLoader.loader?.includes('postcss-loader'))
            moduleLoader.options.modules.getLocalIdent = (context, _, exportName) =>
              loaderUtils
                .getHashDigest(Buffer.from(`filePath:${path.relative(context.rootContext, context.resourcePath).replace(/\\+/g, '/')}#className:${exportName}`), 'md4', 'base64')
                .replace(/^(-?\d|--)/, '_$1');
        });
      });

      config.plugins.push(
        new MangleCssClassPlugin({
          classNameRegExp: '((hover|focus|sm|md|lg|xl|dark)[\\\\]*:)*(tw)-[a-zA-Z0-9-[#-_-]*',
          ignorePrefixRegExp: '',
          log: false,
          classGenerator: original => {
            const newClass = original
              .replace(/tw-/g, '')
              .replace(/grid/, 'g')
              .replace(/auto/, 'au')
              .replace(/border/g, 'b')
              .replace(/center/g, 'ctr')
              .replace(/rounded/g, 'rd')
              .replace(/max-content/, 'mc')
              .replace(/maxcontent/, 'mc')
              .replace(/-/g, '')
              .replace(/#/g, '')
              .replace(/sm:/, '1')
              .replace(/md:/, '2')
              .replace(/lg:/, '3')
              .replace(/xl:/, '4')
              .replace(/\[/, '')
              .replace(/\]/, '')
              .replace(/dark/, 'd');

            return btoa(newClass).replace(/=/g, '');
          }
        })
      );
    }

    return config;
  }
};
