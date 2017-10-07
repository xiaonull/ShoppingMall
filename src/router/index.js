import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login.vue'
import Index from '@/components/index.vue'
import Home from '@/components/index/home.vue'
import Classify from '@/components/index/classify.vue'
import Cart from '@/components/index/cart.vue'
import Me from '@/components/index/me.vue'
import OrderList from '@/components/me/orderList.vue'
import LuckDrawPage from '@/components/me/luckDrawPage.vue'
import GoodsPage from '@/components/product/goodsPage.vue'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'login',
		component: Login
	},	{
		path: '/index',
		name: 'index',
		component: Index,
		children: [{
			path: 'home',
			component: Home
		}, {
			path: 'classify/:type',
			component: Classify
		}, {
			path: 'cart',
			component: Cart
		}, {
			path: 'me',
			component: Me
		}]
	}, {
		path: '/orderList',
		component: OrderList
	}, {
		path: '/luckDraw',
		component: LuckDrawPage
	}, {
		path: '/goodsPage',
		component: GoodsPage
	}]
})
