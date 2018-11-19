const routes = require('./app/routes')
const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript({
    webpack(config, options) {
        return config
    },
    exportPathMap: function () {
        return routes
    }
})