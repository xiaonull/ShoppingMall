<template>
	<section class="classify">
		<div class="header">
			<mt-header fixed :title="currentTitle">
				<mt-button type="danger" slot="right" @click.native="changeType"><i class="fa fa-exchange fa-xx"></i></mt-button>
			</mt-header>
		</div>
		<div class="classify-top">
			<div class="topLeft">
				<mt-search v-model="searchContent"></mt-search>
			</div>
			<div class="topRight">
				<mt-button class="searchBtn">搜索</mt-button>
			</div>
		</div>
		<div class="classify-left">
			<Product-Catalog :items="productCatalog" @currentCatalog="currentCatalog"></Product-Catalog>
		</div>
		<div class="classify-right">
			<productListB :items="goodsList"></productListB>
		</div>
	</section>
</template>

<script>
	import Vue from 'vue';
	import ProductCatalog from '@/components/product/productCatalog.vue';
	import productListB from '@/components/product/productList-B.vue';
	import { Header, Button, Search  } from 'mint-ui';
	Vue.component(Header.name, Header);
	Vue.component(Button.name, Button);
	Vue.component(Search.name, Search);

	export default {
		data() {
			return {
				currentTitle: '',
				currentType: '',
				searchContent: '',
				currentCatalogId: 0,
				productCatalog: [],
				goodsList: []
				// productCatalog: this.$store.state.classify.productCatalog,
				// goodsList: this.$store.state.classify.goodsList,
			}
		},
		components: {
			ProductCatalog,
			productListB
		},
		mounted() {
			let path = this.$route.path;
			if(path === '/index/classify/originalPrice') {
				this.currentTitle = '原价商品';
				this.currentType = 'originalPrice';
				
				// this.loadProduct('frontend/store/commodities/origin/category/0');
			}else if(path === '/index/classify/bargainPrice') {
				this.currentTitle = '特价商品';
				this.currentType = 'bargainPrice';

				// this.loadProduct('frontend/store/commodities/bargain/category/0');
			}
			this.$store.commit('classify/setCurrentType', this.currentType);

			this.loadProductCatalog(0);
		},
		methods: {
			changeType() {
				if(this.currentType === 'bargainPrice') {
					this.currentTitle = '原价商品';
					this.currentType = 'originalPrice';
					this.$router.push('/index/classify/originalPrice');
					// 原价和特价的商品分类是一样的
					// this.loadProduct('frontend/store/commodities/origin/category/' + this.currentCatalogId);
				}else {
					this.currentTitle = '特价商品';
					this.currentType = 'bargainPrice';
					this.$router.push('/index/classify/bargainPrice');
					//原价和特价的商品分类是一样的
					// this.loadProduct('frontend/store/commodities/bargain/category/' + this.currentCatalogId);
				}
				this.$store.commit('classify/setCurrentType', this.currentType);
			},
			currentCatalog(id) {
				this.currentCatalogId = id;
				this.loadProduct('frontend/store/categories/parent/' + id);

				//原价和特价的商品分类是一样的
				// if(this.currentType === 'bargainPrice') {
				// 	this.loadProduct('frontend/store/commodities/bargain/category/' + id);
				// }else {
				// 	this.loadProduct('frontend/store/commodities/origin/category/' + id);
				// }
			},
			loadProductCatalog(id) {
				let url = 'frontend/store/categories/parent/' + id;

				this.$store.dispatch('classify/loadProductCatalog', url)
				.then((data) => {
					console.log(data);
					this.productCatalog = data.productCatalog;
					// 刚进来默认是第一个分类商品
					if(id === 0 && data.productCatalog[0].id) {
						this.loadProduct('frontend/store/categories/parent/' + data.productCatalog[0].id);
					}
				})
				.catch(response => {

				});		
			},
			loadProduct(url) {
				this.$store.dispatch('classify/loadProduct', url)
				.then((data) => {
					console.log(data);
					this.goodsList = data.productCatalog;
				})
				.catch(response => {

				});	
			}
		}
		// watch: {
		// 	currentType: function(val) {
		// 		// console.log(val);
		// 	}
		// }
	}
</script>

<style scoped lang="less">
	.classify {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #fff;

		.header {
			position: relative;
			z-index: 100;

			.fa-xx {
				font-size: 0.8rem;
			}
		}

		.classify-top {
			position: fixed;
			z-index: 100;
			width: 100%;
			margin-top: 40px;
			height: 50px;

			.topLeft {
				display: inline-block;
				width: 80%;
				float: left;

				.mint-search {
					height: 50px;
				}
			}

			.topRight {
				display: inline-block;
				float: right;
				width: 20%;
				height: 50px;
				line-height: 50px;
				background-color: #d9d9d9;
				
				.searchBtn {
					height: 35px;
					margin-top: 8px;
					font-size: 0.5rem;
					color: #fff;
					background-color: #26a2ff;
					float: right;
					margin-right: 0.2rem;
				}
			}

		}

		.classify-left {
			display: inline-block;
			float: left;
			width: 4.1rem;
			margin-top: 90px;
			background-color: #fff;
			overflow-y: scroll;
			position: fixed;
			overflow-y: hidden;
		}

		.classify-right {
			float: right;
			margin-left: 4.1rem;
			margin-top: 90px;
			padding-bottom: 70px;
			background-color: #fff;
			padding-left: 5px;
		}
	}
</style>