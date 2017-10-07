<template>
	<section class="index">
		<router-view></router-view>
		<mt-tabbar v-model="selected" :fixed="fixed">
			<mt-tab-item id="homeTab" class="tab" @click.native="changePage('homeTab')">
				<i class="fa fa-home fa-xx"></i>
				首页
			</mt-tab-item>
			<mt-tab-item id="classifyTab" class="tab" @click.native="changePage('classifyTab')">
				<i class="fa fa-th-large fa-1x"></i>
				分类
			</mt-tab-item>
			<mt-tab-item id="cartTab" class="tab" @click.native="changePage('cartTab')">
				<i class="fa fa-cart-plus fa-xx"></i>
				购物车
			</mt-tab-item>
			<mt-tab-item id="meTab" class="tab" @click.native="changePage('meTab')">
				<i class="fa fa-user-o fa-xx"></i>
				我的
			</mt-tab-item>
		</mt-tabbar>
	</section>
</template>

<script>
	import Vue from 'vue';
	import { Tabbar, TabItem } from 'mint-ui';

	Vue.component(Tabbar.name, Tabbar);
	Vue.component(TabItem.name, TabItem);

	export default {
		name: 'index',
		data() {
			return {
				selected: '',
				fixed: true
			}
		},
		mounted() {
			let path = this.$route.path;
			if(path === '/index/home') {
				this.selected = 'homeTab';
			}else if(path.match('/index/classify')) {
				this.selected = 'classifyTab';
			}else if(path === '/index/cart') {
				this.selected = 'cartTab';
			}else if(path === '/index/me') {
				this.selected = 'meTab';
			}
		},
		methods: {
			changePage(index) {
				if(index === 'homeTab') {
					this.$router.push('/index/home');
				}else if(index === 'classifyTab') {
					this.$router.push('/index/classify/bargainPrice');
				}else if(index === 'cartTab') {
					this.$router.push('/index/cart');
				}else if(index === 'meTab') {
					this.$router.push('/index/me');
				}
			}
		}
		
	}

</script>

<style scoped lang="less">
	.index {
		/* padding-bottom: 3rem; */

		.mint-tabbar {
			height: 2.3rem;
			background-color: #fff;
			border-top: 1px solid #E6E2E2;

			a {
				color: #757171;
			}

			.mint-tab-item.is-selected {
				background-color: #fff;
				color: #26a2ff;
			}
		}

		.tab {
			i.fa {
				display: block;
				margin-bottom: 0.2rem;
			}

			i.fa-xx {
				font-size: 1rem;
			}

			i.fa-1x {
				font-size: 0.9rem;
				margin-top: 0.15rem;
			}

			i.fa-cubes, i.fa-user-o {
				font-size: 0.8rem;
				margin-top: 0.1rem;
				margin-bottom: 0.3rem;
			}

		}
	}
</style>