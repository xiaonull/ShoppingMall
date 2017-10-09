import axios from 'axios';

export default {
	state: {
		shops: [{
			id: 0,
			shopName: 'xxx官方旗舰店',
			total: 300,
			// 这个后台不用提供
			selectedAll: false,
			goods: [{
				id: 0,
				imgUrl: '/static/img/004.1ea6ac2.jpg',
				name: '天猫超市 可口可乐 碳酸饮料拉罐330ml*6连罐装 可口可乐 饮料',
				infos: ['1kg', '满28包邮'], //最多两个其他信息，不够两个用空字符串
				price: 100,
				// 之前累计加入到购物车的数量
				quantity: 2,
				// 这个后台不用提供
				selected: false
			}, {
				id: 0,
				imgUrl: '/static/img/004.1ea6ac2.jpg',
				name: '天猫超市 可口可乐 碳酸饮料拉罐330ml*6连罐装 可口可乐 饮料',
				infos: ['', ''], //最多两个其他信息，不够两个用空字符串
				price: 100,
				// 之前累计加入到购物车的数量
				quantity: 5,
				// 这个后台不用提供
				selected: false
			}, {
				id: 0,
				imgUrl: '/static/img/004.1ea6ac2.jpg',
				name: '天猫超市 可口可乐 碳酸饮料拉罐330ml*6连罐装 可口可乐 饮料',
				infos: ['1kg', ''], //最多两个其他信息，不够两个用空字符串
				price: 100,
				// 之前累计加入到购物车的数量
				quantity: 5,
				// 这个后台不用提供
				selected: false
			}]
		}, {
			id: 0,
			shopName: 'xxx官方旗舰店',
			total: 200,
			// 这个后台不用提供
			selectedAll: false,
			goods: [{
				id: 0,
				imgUrl: '/static/img/004.1ea6ac2.jpg',
				name: '天猫超市 可口可乐 碳酸饮料拉罐330ml*6连罐装 可口可乐 饮料',
				infos: ['1kg', '满28包邮'], //最多两个其他信息，不够两个用空字符串
				price: 100,
				// 之前累计加入到购物车的数量
				quantity: 5,
				// 这个后台不用提供
				selected: false
			}, {
				id: 0,
				imgUrl: '/static/img/004.1ea6ac2.jpg',
				name: '天猫超市 可口可乐 碳酸饮料拉罐330ml*6连罐装 可口可乐 饮料',
				infos: ['1kg', '满28包邮'], //最多两个其他信息，不够两个用空字符串
				price: 100,
				// 之前累计加入到购物车的数量
				quantity: 5,
				// 这个后台不用提供
				selected: false
			}]
		}]
	},

	mutations: {
		
	},

	actions: {

	}

}