import axios from 'axios';

export default {
	state: {
		data:{
			itemsName: '', // 这个后台可以不给
			items:[{
				id: 0,
				imgUrl: 'https://img.alicdn.com/imgextra/i3/725677994/TB2v828cYFlpuFjy0FgXXbRBVXa_!!725677994.jpg',
				name: '新疆红提',
				infos: ['1kg', '满28包邮'], //最多两个其他信息，不够两个用空字符串
				price: '13.8'
			}, {
				id: 0,
				imgUrl: 'https://img.alicdn.com/imgextra/i3/725677994/TB2v828cYFlpuFjy0FgXXbRBVXa_!!725677994.jpg',
				name: '新疆红提',
				infos: ['其他信息', ''], 
				price: '13.8'
			}, {
				id: 0,
				imgUrl: 'https://img.alicdn.com/imgextra/i3/725677994/TB2v828cYFlpuFjy0FgXXbRBVXa_!!725677994.jpg',
				name: '新疆红提',
				infos: ['', ''], 
				price: '13.8'
			}, {
				id: 0,
				imgUrl: 'https://img.alicdn.com/imgextra/i3/725677994/TB2v828cYFlpuFjy0FgXXbRBVXa_!!725677994.jpg',
				name: '新疆红提',
				infos: ['其他信息', '其他信息'], 
				price: '13.8'
			}, {
				id: 0,
				imgUrl: 'https://img.alicdn.com/imgextra/i3/725677994/TB2v828cYFlpuFjy0FgXXbRBVXa_!!725677994.jpg',
				name: '新疆红提',
				infos: ['其他信息', '其他信息'], 
				price: '13.8'
			}, {
				id: 0,
				imgUrl: 'https://img.alicdn.com/imgextra/i3/725677994/TB2v828cYFlpuFjy0FgXXbRBVXa_!!725677994.jpg',
				name: '新疆红提',
				infos: ['其他信息', '其他信息'], 
				price: '13.8'
			}, {
				id: 0,
				imgUrl: 'https://img.alicdn.com/imgextra/i3/725677994/TB2v828cYFlpuFjy0FgXXbRBVXa_!!725677994.jpg',
				name: '新疆红提',
				infos: ['其他信息', '其他信息'], 
				price: '13.8'
			}, {
				id: 0,
				imgUrl: 'https://img.alicdn.com/imgextra/i3/725677994/TB2v828cYFlpuFjy0FgXXbRBVXa_!!725677994.jpg',
				name: '新疆红提',
				infos: ['其他信息', '其他信息'], 
				price: '13.8'
			}]
		}
	},

	mutations: {
		setItemsName(state, itemsName) {
			state.data.itemsName = itemsName;
			sessionStorage.itemsName = itemsName;
		}
	},

	actions: {

	}

}
