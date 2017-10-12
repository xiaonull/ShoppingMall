import axios from 'axios';

export default {
	state: {
		allTotal: 0,
		derate: 0,
		selectAll: false,
		shops: []
		// shops: [{
		// 	id: 0,
		// 	shopName: 'xxx官方旗舰店',
		// 	// 这个后台不用提供
		// 	total: 0,
		// 	// 这个后台不用提供
		// 	selectedAll: false,
		// 	goods: [{
		// 		id: 0,
		// 		imgUrl: 'https://img.alicdn.com/imgextra/i3/725677994/TB2v828cYFlpuFjy0FgXXbRBVXa_!!725677994.jpg',
		// 		name: '天猫超市 可口可乐 碳酸饮料拉罐330ml*6连罐装 可口可乐 饮料',
		// 		infos: ['1kg', '满28包邮'], //最多两个其他信息，不够两个用空字符串
		// 		price: 100,
		// 		// 之前累计加入到购物车的数量
		// 		quantity: 1,
		// 		// 这个后台不用提供
		// 		selected: false
		// 	}]
		// }]
	},

	mutations: {
		changeGoodsSelected(state, data) {
			findGoods(state, data, (index, i) => {
				state.shops[index].goods[i].selected = !state.shops[index].goods[i].selected;
				if(!state.shops[index].goods[i].selected) {
					state.shops[index].selectedAll = false;
					// console.log(state.selectAll);
					state.selectAll = false;
					console.log('3:' + state.selectAll);
				}
			});
			findShop(state, data, (index) => {
				state.shops[index].total = computeShopTotal(state.shops[index]);
			});
			state.allTotal = computeShopsTotal(state.shops);
		},
		changeAllSelectInShop(state, data) {
			findShop(state, data, (index) => {
				state.shops[index].selectedAll = !state.shops[index].selectedAll;
				for(let i = 0, j = state.shops[index].goods.length; i < j; i++) {
					state.shops[index].goods[i].selected = state.shops[index].selectedAll;
				}
				state.shops[index].total = computeShopTotal(state.shops[index]);
			});
			state.allTotal = computeShopsTotal(state.shops);
		},
		changeAllSelectInShops(state, data) {
			state.selectAll = !state.selectAll;
			console.log('4:' + state.selectAll)
			for(let i = 0, j = state.shops.length; i < j; i++) {
				state.shops[i].selectedAll = state.selectAll;
				for(let i2 = 0, j2 = state.shops[i].goods.length; i2 < j2; i2++) {
					state.shops[i].goods[i2].selected = state.selectAll;
				}
			}
		},
		plus(state, data) {
			findGoods(state, data, (index, i) => {
				state.shops[index].goods[i].quantity++;
			});
			findShop(state, data, (index) => {
				state.shops[index].total = computeShopTotal(state.shops[index]);
			});
			state.allTotal = computeShopsTotal(state.shops);
		},
		minus(state, data) {
			findGoods(state, data, (index, i) => {
				state.shops[index].goods[i].quantity--;
			});
			findShop(state, data, (index) => {
				state.shops[index].total = computeShopTotal(state.shops[index]);
			});
			state.allTotal = computeShopsTotal(state.shops);
		},
		setCartData(state, data) {
			state.shops = data.shops;
		},
		resetAllTotal(state) {
			state.allTotal = 0;
		}
	},

	actions: {
		setCartData(context) {
			return new Promise((resolve, reject) => {
				let option = {
					url: 'frontend/store/carts',
					type: 'GET',
					success(result, status, xhr) {
						if(result.status_code === 0) {
							context.commit('setCartData', result.data);
							resolve(result.data);
						}
					}
				};

				myAjax(option);
			});
		},
		sureOrder(context, data) {
			return new Promise((resolve, reject) => {
				let option = {
					url: 'frontend/store/carts/order',
					type: 'POST',
					data: data,
					success(result, status, xhr) {
						if(result.status_code === 0) {
							resolve(result.data);
						}else {
							reject();
						}
					}
				};

				myAjax(option);
			});
		},
		plus(context, data) {
			return new Promise((resolve, reject) => {
				let option = {
					url: 'frontend/store/cart/add',
					type: 'POST',
					data: data,
					success(result, status, xhr) {
						// if(result.status_code === 0) {
						// 	context.commit('setCartData', result.data);
						// 	resolve(result.data);
						// }
					}
				};

				myAjax(option);
			});
		},
		minus(context, data) {
			return new Promise((resolve, reject) => {
				let option = {
					url: 'frontend/store/cart/dec',
					type: 'POST',
					data: data,
					success(result, status, xhr) {
						// if(result.status_code === 0) {
						// 	context.commit('setCartData', result.data);
						// 	resolve(result.data);
						// }
					}
				};

				myAjax(option);
			});
		}
	}

}

function findGoods(state, data, handle) {
	let index = -1;
	for(let i = 0, j = state.shops.length; i < j; i++) {
		if(state.shops[i].id === data.shopId) {
			index = i;
			break;
		}
	}
	if(index !== -1) {
		for(let i = 0, j = state.shops[index].goods.length; i < j; i++) {
			if(state.shops[index].goods[i].id === data.goodsId) {
				handle(index, i);
				break;
			}
		}
	}
}

function findShop(state, data, handle) {
	for(let i = 0, j = state.shops.length; i < j; i++) {
		if(state.shops[i].id === data.shopId) {
			handle(i);
			break;
		}
	}
}

function computeShopTotal(shop) {
	let total = 0;
	for(let i = 0, j = shop.goods.length; i < j; i++) {
		if(shop.goods[i].selected) {
			total += shop.goods[i].current_price * shop.goods[i].quantity;
		}
	}
	return total;
}

function computeShopsTotal(shops) {
	let total = 0;
	for(let i = 0, j = shops.length; i < j; i++) {
		total += shops[i].total;
	}
	// console.log(total);
	return total;
}