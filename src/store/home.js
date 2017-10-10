import axios from 'axios';

export default {
	state: {
		carousel : {
			imgUrls:[{
				brief: '1',
				commodity_id: 1,
				img: ''
			}]
		},
		// 从特价商品中取6个最新的特价商品
		bargainPriceGoods: [{
			id: 0,
			name: '可口可乐可口可乐可口可乐可口可乐',
			price: '13.8',
			imgUrl: ''
		}],
		// 从原价商品中取6个最新的原价商品
		originalPriceGoods: [{
			id: 0,
			name: '可口可乐',
			price: '16.8',
			imgUrl: ''
		}]
	},

	mutations: {
		setData(state, data) {
			state.carousel.imgUrls = [];
			state.carousel.imgUrls = data.carrousel;
			state.bargainPriceGoods = [];
			state.bargainPriceGoods = data.bargainPriceGoods;
			state.originalPriceGoods = [];
			state.originalPriceGoods = data.originalPriceGoods;
		}
	},

	actions: {
		getData(context) {
			return new Promise((resolve, reject) => {
				let option = {
					url: 'frontend/store',
					type: 'GET',
					success(result, status, xhr) {
						if(result.status_code === 0) {
							context.commit('setData', result.data);
							resolve(result.data);
						}
					}
				};

				myAjax(option);
			});
		}
	}

}