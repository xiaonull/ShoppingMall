export default {
	state: {
		code_Img: ''
	},

	mutations: {
		setCode(state, data) {
			state.code_Img = data;
		}
	},

	actions: {
		setCode(context) {
			let self = this;
			let option = {
				url: 'frontend/clerk/qrcode/get',
				type: 'GET',
				success(result, status, xhr) {
					context.commit('setCode', result);
				}
			};

			myAjax(option);
		}
	}
}