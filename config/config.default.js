/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1612688271012_1933';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    dmall: {
      cookie: '', // cookie信息
      userAgent: '', // 用户代理
      origin: 'https://static.dmall.com', // 由谁发起的请求
      httpClient: {

      }
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
