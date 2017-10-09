import axios from 'axios';

export default {
	state: {
		carousel : {
			imgUrls:['https://img.alicdn.com/imgextra/i3/725677994/TB2v828cYFlpuFjy0FgXXbRBVXa_!!725677994.jpg', 'https://img.alicdn.com/imgextra/i3/725677994/TB2v828cYFlpuFjy0FgXXbRBVXa_!!725677994.jpg', 'https://img.alicdn.com/imgextra/i3/725677994/TB2v828cYFlpuFjy0FgXXbRBVXa_!!725677994.jpg']
		},
		// 从特价商品中取6个最新的特价商品
		bargainPriceGoods: [{
			id: 0,
			name: '可口可乐可口可乐可口可乐可口可乐',
			price: '13.8',
			imgUrl: 'https://img.alicdn.com/imgextra/i3/725677994/TB2v828cYFlpuFjy0FgXXbRBVXa_!!725677994.jpg'
		}, {
			id: 0,
			name: '可口可乐',
			price: '13.8',
			imgUrl: 'https://img.alicdn.com/imgextra/i3/725677994/TB2v828cYFlpuFjy0FgXXbRBVXa_!!725677994.jpg'
		}, {
			id: 0,
			name: '可口可乐',
			price: '13.8',
			imgUrl: 'https://img.alicdn.com/imgextra/i3/725677994/TB2v828cYFlpuFjy0FgXXbRBVXa_!!725677994.jpg'
		}, {
			id: 0,
			name: '可口可乐',
			price: '13.8',
			imgUrl: 'https://img.alicdn.com/imgextra/i3/725677994/TB2v828cYFlpuFjy0FgXXbRBVXa_!!725677994.jpg'
		}, {
			id: 0,
			name: '可口可乐',
			price: '13.8',
			imgUrl: 'https://img.alicdn.com/imgextra/i3/725677994/TB2v828cYFlpuFjy0FgXXbRBVXa_!!725677994.jpg'
		}, {
			id: 0,
			name: '可口可乐',
			price: '16.8',
			imgUrl: 'https://img.alicdn.com/imgextra/i3/725677994/TB2v828cYFlpuFjy0FgXXbRBVXa_!!725677994.jpg'
		}],
		// 从原价商品中取6个最新的原价商品
		originalPriceGoods: [{
			id: 0,
			name: '可口可乐',
			price: '16.8',
			imgUrl: 'https://img.alicdn.com/imgextra/i3/725677994/TB2v828cYFlpuFjy0FgXXbRBVXa_!!725677994.jpg'
		}, {
			id: 0,
			name: '可口可乐',
			price: '16.8',
			imgUrl: 'https://img.alicdn.com/imgextra/i3/725677994/TB2v828cYFlpuFjy0FgXXbRBVXa_!!725677994.jpg'
		}, {
			id: 0,
			name: '可口可乐',
			price: '16.8',
			imgUrl: 'https://img.alicdn.com/imgextra/i3/725677994/TB2v828cYFlpuFjy0FgXXbRBVXa_!!725677994.jpg'
		}, {
			id: 0,
			name: '可口可乐',
			price: '16.8',
			imgUrl: 'https://img.alicdn.com/imgextra/i3/725677994/TB2v828cYFlpuFjy0FgXXbRBVXa_!!725677994.jpg'
		}, {
			id: 0,
			name: '可口可乐',
			price: '16.8',
			imgUrl: 'https://img.alicdn.com/imgextra/i3/725677994/TB2v828cYFlpuFjy0FgXXbRBVXa_!!725677994.jpg'
		}, {
			id: 0,
			name: '可口可乐',
			price: '16.8',
			imgUrl: 'https://img.alicdn.com/imgextra/i3/725677994/TB2v828cYFlpuFjy0FgXXbRBVXa_!!725677994.jpg'
		}],
	},

	mutations: {
		
	},

	actions: {

	}

}