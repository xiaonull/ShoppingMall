import axios from 'axios';
import { MessageBox } from 'mint-ui';

export default {
	state: {
		is_login: {
			key: false
		}
	},

	mutations: {
		login(state) {
			state.is_login.key = true;
		}
	},

	actions: {
		register(context, data) {			
			return new Promise((resolve, reject) => {
				let option = {
					url: 'frontend/store/register',
					type: 'POST',
					data: data,
					dataType: 'json',
					cache: false,
					processData: false,
					contentType: false,
					success(result, status, xhr) {
						MessageBox('提示', result.message);
						if(result.status_code === 0) {
							context.commit('login');
							resolve();
						}
					}
				};

				myAjax(option);
			});
		},
		setUserInfo(context, data) {
			
		}
	}
}