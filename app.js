'use strict';

const { Dmall } = require('./lib/dmall');

class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  async didReady() {
    const dmall = new Dmall(this.app, this.app.config.dmall);
    await dmall.secKill(); // 启动秒杀
  }
}

module.exports = AppBootHook;
