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
      httpHeaders: {
        cookie: 'tempid=C93ED37D4FC00002ADDD1CB0AE51CDB0; addr=%E9%87%8D%E5%BA%86%E5%B8%82%E6%B8%9D%E5%8C%97%E5%8C%BA%E6%B8%9D%E5%85%B4V%E5%AE%A2%E9%83%A8%E8%90%BD; appMode=online; appVersion=4.9.6; areaId=500112; businessCode=1; community=%E6%B8%9D%E5%85%B4V%E5%AE%A2%E9%83%A8%E8%90%BD; dmTenantId=1; env=app; first_session_time=26170; lat=29.616139; lng=106.497630; originBusinessFormat=1-4-8; platform=IOS; platformStoreGroupKey=c7e58d4978f93e48d6b21c3926b0dfe8@NDExLTM1MTAx; recommend=1; session_count=42; session_id=5C818862917D4F22AD953440C3F6F2AF; storeGroupKey=13f313f5634df0b851463ec24182cb3f@MS0xNDI0NS02OQ; storeId=14245; store_id=14245; tdc=26.17.0.104-3110844-3086078.1613095582112; ticketName=85BD97A71C626139FF236CB03253D85E9ECBAF4CCA3482201F19AFBA3A81E85B2FBD6627A1B16FCDD04A5FC4F181AE10AF7F2CA58406206D71650A9C9C44A94B60E26683ED73A7D5B7356512E8D91F5D29EA45636FDF3AD0202273D1AF14ECD6A50022335D31B8F24E2816BE37ABFE63572EC057A2C55892C9595FF0F011F4FD; token=97c8beed-3132-4f64-af38-482d3f6a947c; userId=93574005; uuid=db3d4a2231ac077df572f90e7baf4a1b65b4154c; venderId=69; vender_id=69; webViewType=wkwebview', // cookie信息
        origin: 'https://static.dmall.com',
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148Dmall/4.9.6', // 用户代理
      },
      skuCount: 2, // 抢购商品数量
      skuId: 1000815503, // 抢购商品id
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
