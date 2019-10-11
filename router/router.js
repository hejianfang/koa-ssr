const Router = require('koa-router');

let router = new Router();
// 首页路由
router.get('/', async ctx => {
    await ctx.render('view/admin');
});
// 登录页路由
router.get('/login', async ctx => {
    await ctx.render('view/login');
});
// 详情页路由
router.get('/details', async ctx => {
    await ctx.render('view/details');
});

router.use(router.routes());

module.exports = router.routes();