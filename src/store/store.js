import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import login from './login.js';
import home from './home.js';
import classify from './classify.js';
import goodsList from './goodsList.js';
import goodsPage from './goodsPage.js';
import cart from './cart.js';
import Option from './axiosOption.js';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		login: {
			namespaced: true,
			state: login.state,
			mutations: login.mutations,
			actions: login.actions
		},
		home,
		classify,
		goodsList: {
			namespaced: true,
			state: goodsList.state,
			mutations: goodsList.mutations,
			actions: goodsList.actions
		},
		goodsPage: {
			namespaced: true,
			state: goodsPage.state,
			mutations: goodsPage.mutations,
			actions: goodsPage.actions
		},
		cart: {
			namespaced: true,
			state: cart.state,
			mutations: cart.mutations,
			actions: cart.actions
		}
	}
})

