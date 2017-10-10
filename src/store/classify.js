import axios from 'axios';

export default {
	state: {
		productCatalog: [{
			text: '水果蔬菜11',
			id: 0
		}],
		goodsList: [{
			id: 0,
			imgUrl: 'https://img.alicdn.com/imgextra/i3/725677994/TB2v828cYFlpuFjy0FgXXbRBVXa_!!725677994.jpg',
			name: '新疆提子',
			price: '120'
		}]
	},

	mutations: {
		
	},

	actions: {
		loadProductCatalog(context, url) {
			return new Promise((resolve, reject) => {
				let option = {
					url: url,
					type: 'GET',
					success(result, status, xhr) {
						if(result.status_code === 0) {
							resolve(result.data);
						}
					}
				};

				myAjax(option);
			});
		},
		loadProduct(context, url) {
			return new Promise((resolve, reject) => {
				let option = {
					url: url,
					type: 'GET',
					success(result, status, xhr) {
						if(result.status_code === 0) {
							resolve(result.data);
						}
					}
				};

				myAjax(option);
			});
		}
	}

}