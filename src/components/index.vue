<template>
	<section class="index">
		<router-view></router-view>
		<mt-tabbar v-model="selected">
			<mt-tab-item id="homeTab" class="tab" @click.native="changePage('homeTab')">
				<i class="fa fa-home fa-xx"></i>
				首页
			</mt-tab-item>
			<!-- <mt-tab-item id="classifyTab" class="tab" @click.native="changePage('classifyTab')">
				<i class="fa fa-cubes fa-xx"></i>
				分类
			</mt-tab-item> -->
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
				selected: 'homeTab'
			}
		},
		methods: {
			changePage(index) {
				if(index === 'homeTab') {
					this.$router.push('/index/home');
				}else if(index === 'classifyTab') {
					this.$router.push('/index/classify');
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
		.tab {
			i.fa {
				display: block;
				margin-bottom: 0.2rem;
			}

			i.fa-xx {
				font-size: 1rem;
			}

			i.fa-cubes, i.fa-user-o {
				font-size: 0.8rem;
				margin-top: 0.1rem;
				margin-bottom: 0.3rem;
			}

		}
	}
</style>