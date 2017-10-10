import axios from 'axios';

export default {
	state: {

	},

	mutations: {
		
	},

	actions: {
		register(context, data) {
			// axios({
			// 	method:'post',
			// 	url:'/frontend/store/register',
			// 	data:{
			// 		_token: 'MOzzuHmgujGoPbEuitQ8Y51K0Q36MQwD8PJqnvcR',
			// 		identity: 'store',
			// 		phone: '13800138000',
			// 		name: 'test',
			// 		address: '华农',
			// 		license_img: data.licenseImage_fd,
			// 		store_img: data.storeImage_fd,
			// 		latitude: 12,
			// 		longitude: 232
			// 	}
			// })
			// .then(function(response){
			// 	console.log(response);
			// })
			// .catch(function(error){
			// 	console.log(error);
			// });

			$.ajax({
				url: 'http://yuandianzixun.com/frontend/store/register',
				type: 'POST',
				data: {
					_token: 'MOzzuHmgujGoPbEuitQ8Y51K0Q36MQwD8PJqnvcR',
					identity: 'store',
					phone: '13800138000',
					name: 'test',
					address: '华农',
					license_img: data.licenseImage_fd,
					store_img: data.storeImage_fd,
					latitude: 12,
					longitude: 232
				},
				// dataType: 'json',
				success: function(result, status, xhr) {
					console.log(result)
				},
				beforeSend: function(xhr) {
					// xhr.setRequestHeader("Cookie", '');
				},
			});
		}
	}

}