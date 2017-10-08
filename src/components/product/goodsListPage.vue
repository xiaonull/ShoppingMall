<template>
	<section class="goodsListPage">
		<div class="header">
			<mt-header fixed :title="goodsName">
				<router-link to="/index/classify/bargainPrice" slot="left">
					<mt-button icon="back">返回</mt-button>
				</router-link>
			</mt-header>
		</div>
		<div class="main">
			<product-list-c :items="items"></product-list-c>
		</div>
	</section>
</template>

<script>
	import Vue from 'vue';
	import { Header } from 'mint-ui';
	import productListC from '@/components/product/productList-C.vue';
	Vue.component(Header.name, Header);

	export default {
		props: ['goodsName'],
		components: {
			productListC
		},
		data() {
			return {
				items: this.$store.state.goodsList.data.items
			}
		},
		mounted() {
			this.$store.commit('setItemsName', this.goodsName);
		}
	}
</script>

<style scoped lang="less">
	.goodsListPage {
		background-color: #fff;
		.main {
			margin-top: 55px;
		}
	}
</style>