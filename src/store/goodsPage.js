import axios from 'axios';

export default {
	state: {
		goods: {
			carousel : {
				imgUrls:['/static/img/005.720238a.jpg', '/static/img/005.720238a.jpg', '/static/img/005.720238a.jpg']
			},
			id: 0,
			name: '天猫超市 可口可乐 碳酸饮料拉罐330ml*6连罐装 可口可乐 饮料',
			stock: 40972,
			price: 43.8,
			address: {
				province: '广东省',
				city: '广州市',
				area: '天河区',
				street: '五山',
				house: '华南农业大学创客空间'
			},
			// 产品参数不知道要不要做
			goodsOption: {

			},
			// 该商品的总价，前端计算就行了,点击加入购物车，需要加入到后台数据库
			total: 0
		}
	},

	mutations: {
		setTotal(state, subTotal) {
			state.goods.total += subTotal;
		}
	},

	actions: {

	}

}