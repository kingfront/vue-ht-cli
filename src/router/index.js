import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/'

Vue.use(Router)
const routes = [
		{
			path: "/",
			name: "index",
			component: () => import("@/views/index.vue"),
			meta: {
				backFlag: false,
				title: '商城首页'
			}
		},
    {
      path: '/cart/:id',
      name: "cart",
      component: () => import("@/views/cart.vue"),
      meta: {
        backFlag: true,
        title: '购物车'
      }
    },
    {
      path: "*",
      name: "404",
      component: () => import("@/views/common/404.vue"),
      meta: {
        backFlag: true,
        title: '404'
      }
    }
];

const router = new Router({ routes });
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
	store.commit('navbar/updateTitle',to.meta.title)
	store.commit('navbar/updateBackFlag',to.meta.backFlag)
  next();
})
export default router;