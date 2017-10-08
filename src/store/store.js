import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import home from './home.js';
import classify from './classify.js';
import goodsList from './goodsList.js';
import goodsPage from './goodsPage.js';
import cart from './cart.js';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		home,
		classify,
		goodsList,
		goodsPage,
		cart
	}
})

