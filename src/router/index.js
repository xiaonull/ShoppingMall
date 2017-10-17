import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login.vue'
import Index from '@/components/index.vue'
import Salesman from '@/components/salesman.vue'
import Home from '@/components/index/home.vue'
import Classify from '@/components/index/classify.vue'
import Cart from '@/components/index/cart.vue'
import Me from '@/components/index/me.vue'
import OrderPage from '@/components/me/orderPage.vue'
import LuckDrawPage from '@/components/me/luckDrawPage.vue'
import GoodsPage from '@/components/product/goodsPage.vue'
import goodsListPage from '@/components/product/goodsListPage.vue'
import Balance from '@/components/cart/balance.vue'
import Profile from '@/components/me/profile.vue'
import OrderDetails from '@/components/me/orderDetails.vue'
import Code from '@/components/salesman/code.vue'
import MyShops from '@/components/salesman/myShops.vue'
import NearbyShops from '@/components/salesman/nearbyShops.vue'

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
		path: '/orderPage',
		component: OrderPage
	}, {
		path: '/luckDraw',
		component: LuckDrawPage
	}, {
		path: '/goodsPage/:goodsId',
		component: GoodsPage
	}, {
		path: '/goodsPage/:goodsId/:from',
		component: GoodsPage
	}, {
		path: '/goodsList/:goodsName',
		component: goodsListPage,
		props: true
	}, {
		path: '/balance',
		component: Balance
	}, {
		path: '/profile',
		component: Profile
	}, {
		path: '/orderDetails',
		component: OrderDetails
	}, {
		path: '/salesman',
		component: Salesman,
		children: [{
			path: 'code',
			component: Code
		}, {
			path: 'myShops',
			component: MyShops
		}, {
			path: 'nearbyShops',
			component: NearbyShops
		}]
	}]
})
