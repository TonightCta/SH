import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'

Vue.use(Router)

const router=new Router({
  routes: [
    {
      path: '/',
      name: 'Page',
      component: resolve=>require(['@/page/page'],resolve)
    },
    {
      path:'/introduce',//产品介绍
      name:'Introduce',
      component:resolve=>require(['@/page/introduce'],resolve)
    },
    {
      path:'/case',//典型案例
      name:'Case',
      component:resolve=>require(['@/page/case'],resolve)
    },
    {
      path:'/aboutUs',//关于我们
      name:'AboutUs',
      component:resolve=>require(['@/page/aboutUs'],resolve)
    }
  ]
});
router.beforeEach((to,from,next)=>{
  NProgress.start();
  next()
});
router.afterEach(() => {
    NProgress.done()
})
export default router;
