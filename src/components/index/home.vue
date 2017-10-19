<template>
	<section class="home">
		<div class="recommend">
			<div class="recommendContainer">
				<mt-swipe :auto="4000">
					<mt-swipe-item v-for="img in carousel" :key="img.commodity_id">
						<img class="img response_img" :src="img.img" @click="toGoodsPage(img.commodity_id)">
					</mt-swipe-item>
				</mt-swipe>
			</div>
		</div>
		<div class="function">
			<div class="box">
				<div class="icon">
					<img src="~@/assets/home/icon1.png" class="img" @click="toBargainPrice">
				</div>
				<p class="text">特卖商品</p>
			</div>
			<div class="box">
				<div class="icon">
					<img src="~@/assets/home/icon2.png" class="img" @click="toLuckDraw">
				</div>
				<p class="text">抽奖活动</p>
			</div>
			<div class="box">
				<div class="icon">
					<img src="~@/assets/home/icon3.png" class="img" @click="toOriginalPrice">
				</div>
				<p class="text">推广商品</p>
			</div>
		</div>
		<div class="bargainPrice">
			<div class="price-nav">
				<span class="bar"></span>
				<span class="title">特价商品</span>
				<span class="more" @click="toBargainPrice">更多...</span>
			</div>
			<div class="content">
				<productListA :items="bargainPriceGoods"></productListA>
			</div>
		</div>
		<div class="originalPrice">
			<div class="price-nav">
				<span class="bar"></span>
				<span class="title">推广商品</span>
				<span class="more" @click="toOriginalPrice">更多...</span>
			</div>
			<div class="content">
				<productListA :items="originalPriceGoods"></productListA>
			</div>
		</div>
	</section>
</template>

<script>
	import Vue from 'vue';
	import { Swipe, SwipeItem } from 'mint-ui';
	import productListA from '@/components/product/productList-A.vue';
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);

	export default {
		components: {
			productListA
		},
		data() {
			return {
				carousel: this.$store.state.home.carousel.imgUrls,
				bargainPriceGoods: this.$store.state.home.bargainPriceGoods,
				originalPriceGoods: this.$store.state.home.originalPriceGoods,
			}
		},
		methods: {
			toGoodsPage(id) {
				if(id === 0) {
					return;
				}

				this.$store.dispatch('goodsPage/setGoodsPage', id)
				.then((data) => {
					this.$router.push('/goodsPage/' + id + '/fromHome');
				})
				.catch(response => {

				});	
			},
			toBargainPrice() {
				this.$router.push('/index/classify/bargainPrice');
			},
			toOriginalPrice() {
				this.$router.push('/index/classify/originalPrice');
			},
			toLuckDraw() {
				this.$router.push('/luckDraw');
			}
		},
		mounted() {
			this.$store.dispatch('home/getData')
			.then((data) => {
				console.log(data);
				this.carousel = [];
				this.carousel= data.carrousel;
				this.bargainPriceGoods = [];
				this.bargainPriceGoods = data.bargainPriceGoods;
				this.originalPriceGoods = [];
				this.originalPriceGoods = data.originalPriceGoods;
			})
			.catch(response => {

			});		
		}
	}

</script>

<style scoped lang="less">
	.home {
		width: 100%;
		height: 100%;
		padding-bottom: 3rem;

		.recommend {
			height: 8rem;
			overflow: hidden;
			background-color: #fff;

			.recommendContainer {
				width: 200%;
				position: relative;
				z-index: 1;
				left: -50%;
				height: 8rem;
				text-align: center;
				border-radius: 0 0 50% 50%;
				background-color: #DDD9D9;
				overflow: hidden;

				.img {
					width: 50%;
					height: 100%;
				}
			}
		}

		.function {
			width:100%;
			height:3.4rem;
			display:flex;
			background-color: #fff;
			border-bottom: 1px solid #D3D3D3;

			.box {
				flex: 1;
				text-align: center;

				.icon {
					display: inline-block;
					width: 1.8rem;
					height: 1.8rem;
					margin-top: 0.4rem;
					background-color: #7D59E2;
					border-radius: 50%;

					.img {
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
				}

				.text {
					font-size: 0.5rem;
				}
			}
		}

		.price-nav {
			height: 1.5rem;
			font-size: 0.7rem;
			line-height: 0rem;
			overflow: hidden;
			border-top: 1px solid #F6F4F4;

			.bar {
				display: inline-block;
				width: 4px;
				height: 1.5rem;
				background-color: #26a2ff;
			}

			.title {
				position: relative;
				top: -0.45rem;
				margin-left: 0.2rem;
			}

			.more {
				float: right;
				position: relative;
				top: 0.78rem;
				margin-right: 0.5rem;
				font-size: 0.6rem;
			}
		}

		.bargainPrice, .originalPrice {
			margin-top: 0.3rem;
			background-color: #fff;
			width: 100%;
			height: auto;
		}

	}

</style>