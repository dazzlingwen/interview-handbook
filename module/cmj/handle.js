const api = require('./api')

function handle(data, key) {
    return data.data[key];
}


module.exports = {
    api, handle
}
