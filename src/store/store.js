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
		home: {
			namespaced: true,
			state: home.state,
			mutations: home.mutations,
			actions: home.actions
		},
		classify: {
			namespaced: true,
			state: classify.state,
			mutations: classify.mutations,
			actions: classify.actions
		},
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

window.myAjax = function(option) {
	let domainName = 'http://yuandianzixun.com/';

	$.ajax({
		url: domainName + option.url,
		type: option.type || 'GET',
		data: option.data,
		dataType: option.dataType,
		contentType: option.contentType,
		processData: option.processData,
		cache: option.cache,
		success: function(result, status, xhr) {
			option.success(result, status, xhr);  	
		},
		beforeSend: function(xhr) {
			if(option.beforeSend) {
				option.beforeSend(xhr);
			}
		},
		complete : function(xhr){
			if(option.complete) {
				option.complete(xhr);
			}
		},
		error: function() {

		}
	});
};

window.getToken = function(callback) {
	let option = {
		url: 'csrftoken/get',
		type: 'GET',
		success(result, status, xhr) {
			callback(result, status, xhr);
		}
	};
	myAjax(option);
};
