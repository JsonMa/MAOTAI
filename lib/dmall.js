'use strict';

class Dmall {
  constructor(app, config) {
    this.app = app;
    this.config = config;
    this.logger = app.logger;
  }

  async sleep(time) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  }

  async submitOrder(skuId, skuCount) {
    const result = await this.app.curl('https://presale.dmall.com/maotai/orderSubmit', {
      method: 'POST',
      headers: this.config.httpHeaders,
      data: {
        ticketName: '85BD97A71C626139FF236CB03253D85E9ECBAF4CCA3482201F19AFBA3A81E85B2FBD6627A1B16FCDD04A5FC4F181AE10AF7F2CA58406206D71650A9C9C44A94B60E26683ED73A7D5B7356512E8D91F5D29EA45636FDF3AD0202273D1AF14ECD6A50022335D31B8F24E2816BE37ABFE63572EC057A2C55892C9595FF0F011F4FD',
        token: '97c8beed-3132-4f64-af38-482d3f6a947c',
        param: {
          vendorId: '69',
          erpStoreId: 76292,
          name: '马妮妮',
          phone: '13678474639',
          shipmentDate: '2021-02-09',
          shipmentStartTime: '11:00',
          shipmentEndTime: '16:00',
          skuId: 1000815503,
          skuCount: 2,
          price: 299800,
          deviceId: 'db3d4a2231ac077df572f90e7baf4a1b65b4154c',
          longitude: 106.49781412760417,
          latitude: 29.616258138020832,
          specialMark: 1,
          orderOrigin: 7,
          appName: 'com.dmall.dmall',
          dmTenantId: 1,
        },
      },
      dataType: 'json',
    });
    this.logger.info(result);
  }

  async orderInfo() {

  }

  async queryQueue() {

  }

  async jumpQueue() {

  }

  async secKill() {
    await this.submitOrder();
    // const killTimer = setInterval(() => {
    //   this.logger.info('killing');
    // }, 100);

    // setTimeout(() => {
    //   clearInterval(killTimer);
    //   this.logger.info('stop killing');
    // }, 5000);
  }
}

module.exports = {
  Dmall,
}
;
