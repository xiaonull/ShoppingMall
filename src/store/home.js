import axios from 'axios';

export default {
	state: {
		carousel : {
			imgUrls:['/static/img/001.3368223.jpg', '/static/img/001.3368223.jpg', '/static/img/001.3368223.jpg']
		},
		// 从特价商品中取6个最新的特价商品
		bargainPriceGoods: [{
			id: 0,
			name: '可口可乐可口可乐可口可乐可口可乐',
			price: '13.8',
			imgUrl: '/static/img/004.1ea6ac2.jpg'
		}, {
			id: 0,
			name: '可口可乐',
			price: '13.8',
			imgUrl: '/static/img/004.1ea6ac2.jpg'
		}, {
			id: 0,
			name: '可口可乐',
			price: '13.8',
			imgUrl: '/static/img/004.1ea6ac2.jpg'
		}, {
			id: 0,
			name: '可口可乐',
			price: '13.8',
			imgUrl: '/static/img/004.1ea6ac2.jpg'
		}, {
			id: 0,
			name: '可口可乐',
			price: '13.8',
			imgUrl: '/static/img/004.1ea6ac2.jpg'
		}, {
			id: 0,
			name: '可口可乐',
			price: '16.8',
			imgUrl: '/static/img/004.1ea6ac2.jpg'
		}],
		// 从原价商品中取6个最新的原价商品
		originalPriceGoods: [{
			id: 0,
			name: '可口可乐',
			price: '16.8',
			imgUrl: '/static/img/004.1ea6ac2.jpg'
		}, {
			id: 0,
			name: '可口可乐',
			price: '16.8',
			imgUrl: '/static/img/004.1ea6ac2.jpg'
		}, {
			id: 0,
			name: '可口可乐',
			price: '16.8',
			imgUrl: '/static/img/004.1ea6ac2.jpg'
		}, {
			id: 0,
			name: '可口可乐',
			price: '16.8',
			imgUrl: '/static/img/004.1ea6ac2.jpg'
		}, {
			id: 0,
			name: '可口可乐',
			price: '16.8',
			imgUrl: '/static/img/004.1ea6ac2.jpg'
		}, {
			id: 0,
			name: '可口可乐',
			price: '16.8',
			imgUrl: '/static/img/004.1ea6ac2.jpg'
		}],
	},

	mutations: {
		
	},

	actions: {

	}

}