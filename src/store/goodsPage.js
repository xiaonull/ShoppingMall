import { MessageBox } from 'mint-ui';

export default {
	state: {
		goods: {
			carousel: {
				imgUrls: []
			},
			id: 0,
			name: '',
			stock: 0,
			price: 0,
			address: '',
			goodsOption: {

			},
			total: 0,
			introduction: ''
		},
		skus: []
		// goods: {
		// 	carousel : {
		// 		imgUrls:['https://img.alicdn.com/imgextra/i3/725677994/TB2v828cYFlpuFjy0FgXXbRBVXa_!!725677994.jpg', 'https://img.alicdn.com/imgextra/i3/725677994/TB2v828cYFlpuFjy0FgXXbRBVXa_!!725677994.jpg', 'https://img.alicdn.com/imgextra/i3/725677994/TB2v828cYFlpuFjy0FgXXbRBVXa_!!725677994.jpg']
		// 	},
		// 	id: 0,
		// 	name: '天猫超市 可口可乐 碳酸饮料拉罐330ml*6连罐装 可口可乐 饮料',
		// 	stock: 40972,
		// 	price: 43.8,
		// 	address: {
		// 		province: '广东省',
		// 		city: '广州市',
		// 		area: '天河区',
		// 		street: '五山',
		// 		house: '华南农业大学创客空间'
		// 	},
		// 	// 产品参数不知道要不要做
		// 	goodsOption: {

		// 	},
		// 	// 该商品的总价，前端计算就行了,点击加入购物车，需要加入到后台数据库
		// 	total: 0,
		// 	introduction: ''
		// }
	},

	mutations: {
		setTotal(state, subTotal) {
			state.goods.total += subTotal;
		},
		setGoodsPage(state, {data, id}) {
			state.goods.carousel.imgUrls = data.goods.carousel;
			state.goods.id = id;
			state.goods.name = data.goods.name;
			state.goods.introduction = data.goods.introduction;
			if(data.skus[0].price) {
				state.goods.price = data.skus[0].current_price;
			}
			if(data.skus[0].stock) {
				state.goods.stock = data.skus[0].stock;
			}
			state.skus = data.skus;
		}
	},

	actions: {
		setGoodsPage(context, id) {
			return new Promise((resolve, reject) => {
				let option = {
					url: 'frontend/store/commodities/' + id,
					type: 'GET',
					success(result, status, xhr) {
						if(result.status_code === 0) {
							console.log('success: ' + result.data);
							context.commit('setGoodsPage', {
								data: result.data,
								id: id
							});
							resolve();
						}
					}
				};

				myAjax(option);
			});
		},
		addToCart(context, data) {
			return new Promise((resolve, reject) => {
				let option = {
					url: 'frontend/store/cart/add',
					type: 'POST',
					data: data,
					success(result, status, xhr) {
						if(result.status_code === 0) {
							console.log('success: ' + result.data);
							resolve();
						}
						if(result.status_code === 6) {
							MessageBox('提示', result.message);
							setTimeout(() => {
								reject(result.message);
							}, 3000);
						}
					}
				};

				myAjax(option);
			});
		}
	}

}