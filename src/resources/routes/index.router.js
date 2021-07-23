
const homeRouter = require('./home.router');

function route(app) {

    app.use('/', homeRouter);

    app.use('/store', homeRouter);
}

module.exports = route;
