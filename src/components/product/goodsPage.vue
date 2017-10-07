<template>
	<section class="goodsPage">
		<div class="carousel">
			<mt-swipe :auto="4000000">
				<mt-swipe-item>
					<img class="response_img" src="~@/assets/005.jpg">
				</mt-swipe-item>
				<mt-swipe-item>
					<img class="response_img" src="~@/assets/005.jpg">
				</mt-swipe-item>
				<mt-swipe-item>
					<img class="response_img" src="~@/assets/005.jpg">
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="main">
			<div class="name">
				天猫超市 可口可乐 碳酸饮料拉罐330ml*6连罐装 可口可乐
			</div>
			<div class="price">
				￥43.8
			</div>
			<span class="line"></span>
			<div class="address card" @click="selectAddress">
				<span>配送至：天河区</span>
				<i class="fa fa-angle-right"></i>
			</div>
			<div class="goodsOption card">
				<span>产品参数</span>
				<i class="fa fa-angle-right"></i>
			</div>
		</div>
		<div class="popup">
			<mt-popup v-model="popupVisible" position="bottom">
				<div class="addressPage">
					<v-distpicker type="mobile" @selected="onSelectedAddress"></v-distpicker>
				</div>
			</mt-popup>
		</div>
		<div class="footer">
			<div class="home" @click="toClassify">
				<i class="fa fa-home"></i>
				<br>
				<span class="text">商 城</span>
			</div>
			<div class="cart">
				<i class="fa fa-opencart"></i>
				<br>
				<span class="text">总价：<span class="price">￥12</span></span>
			</div>
			<div class="addToCart">
				<span class="text">加入购物车</span>
			</div>
		</div>
	</section>
</template>

<script>
	import Vue from 'vue';
	import { Swipe, SwipeItem, Popup  } from 'mint-ui';
	import VDistpicker from 'v-distpicker';
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
	Vue.component(Popup.name, Popup);
	Vue.component('v-distpicker', VDistpicker);
	
	export default {
		data() {
			return {
				popupVisible: false
			}
		},
		methods: {
			toClassify() {
				this.$router.push('/index/classify/bargainPrice')
			},
			selectAddress() {
				this.popupVisible = true;
			},
			onSelectedAddress(data) {
				
			}
		}
	}
</script>

<style scoped lang="less">
	.goodsPage {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #fff;

		.carousel {
			height: 14rem;
			border-bottom: 2px solid #D8D5D5;
			box-shadow: 10px 0 10px #888888;
		}
		
		.main {
			margin-bottom: 3rem;

			.name {
				margin: 0.5rem;
				font-size: 0.6rem;
				font-weight: 500;
				line-height: 1rem;
			}

			.price {
				margin: 0.5rem;
				font-size: 0.8rem;
				color: #F72E2E;
				margin-top: 0.3rem;
				text-align: right;
			}

			.line {
				display: block;
				height: 10px;
				background-color: #F0EEEE;
			}

			.card {
				height: 1.5rem;
				line-height: 1.5rem;
				border-bottom: 1px solid #EDE9E9;
				padding: 0 0.5rem;
				font-size: 0.55rem;

				.fa {
					float: right;
					position: relative;
					top: 50%;
					margin-top: -0.5rem;
					font-size: 1rem;
					color: #999;
				}
			}
		}

		.footer {
			position: fixed;
			bottom: 0;
			width: 100%;
			height: 2rem;
			line-height: 0.8rem;
			border-top: 1px solid #EDE9E9;
			text-align: center;
			overflow: hidden;
			color: #686464;

			.fa {
				font-size: 0.8rem;
				margin-top: 0.2rem;
				position: relative;
				left: 0.1rem;
			}

			.text {
				font-size: 0.5rem;
			}

			.home {
				width: 3.5rem;
				height: 100%;
				float: left;
				border-right: 1px solid #F0EDED;
				background-color: #fff;
			}

			.cart {
				width: 4.5rem;
				height: 100%;
				float: left;
				background-color: #fff;

				.text {
					display: inline-block;
					margin-top: 0.08rem;

					.price {
						color: #F49256;
					}
				}
			}

			.addToCart {
				margin-left: 8rem;
				line-height: 2rem;
				color: #fff;
				background-color: #F72E2E;

				.text {
					font-size: 0.6rem;
				}
			}
		}
		
		.popup {
			.mint-popup {
				width: 100%;
				height: 15rem;
				overflow-y: scroll;

				.address-header {
					position: fixed;
				}
			}
		}
	}
</style>