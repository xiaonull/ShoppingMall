export default {
	state: {
		profile: {},
		loadProfile: false
	},

	mutations: {
		setProfile(state, data) {
			state.profile = data.profile;
			state.loadProfile = true;
		}
	},

	actions: {
		setProfile(context) {
			return new Promise((resolve, reject) => {
				let option = {
					url: 'frontend/store/profile',
					type: 'GET',
					success(result, status, xhr) {
						if(result.status_code === 0) {
							context.commit('setProfile', result.data);
							resolve(result);
						}
					}
				};

				myAjax(option);
			});
		},
		modifyProfile(context, data) {
			return new Promise((resolve, reject) => {
				let option = {
					url: 'frontend/store/profile/update',
					type: 'POST',
					data: data,
					success(result, status, xhr) {
						if(result.status_code === 0) {
							resolve(result);
						}
					}
				};

				myAjax(option);
			});
		}
	}
}