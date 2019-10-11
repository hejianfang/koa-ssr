const Koa = require('koa');
const ejs = require('koa-ejs');
const path = require('path');
const router = require('./router/router.js')

let app = new Koa();

ejs(app, {
    root: path.resolve(__dirname, 'template'),
    layout: false,
    viewExt: 'ejs',
    cache: false,
    debug: false
})
app.use(router)

app.listen(3000);