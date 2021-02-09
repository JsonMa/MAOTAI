class Dmall {
    constructor(app, params) {
        this.app = app
        this.params = params
        this.logger = app.logger
    }

    async sleep(time) {
        return new Promise((resolve) => {
            setTimeout(()=> {
                resolve()
            }, time)
        })
    }

    async submitOrder() {
        await this.app.curl()
    }

    async orderInfo() {

    }

    async queryQueue() {

    }

    async jumpQueue() {

    }

    async secKill() {
        const killTimer = setInterval(() => {
            this.logger.info('killing')
        }, 100)

        setTimeout(() => {
            clearInterval(killTimer)
            this.logger.info('stop killing')
        }, 5000);
    }
}

module.exports = {
    Dmall
}