<template>
	<section class="goodsPage">
		<div class="carousel">
			<mt-swipe :auto="4000000">
				<mt-swipe-item v-for="imgUrl in goods.carousel.imgUrls" :key="imgUrl">
					<img class="response_img" :src="imgUrl">
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="main">
			<div class="name">
				{{goods.name}}
			</div>
			<div class="info">
				<span class="stock">库存：{{goods.stock}}</span>
				<span class="price">￥{{goods.price}}</span>
			</div>
			<span class="line"></span>
			<div class="address card">
				<span>配送至：{{goods.address.area}}</span>
				<i class="fa fa-angle-right"></i>
			</div>
			<div class="goodsOption card">
				<span>产品参数</span>
				<i class="fa fa-angle-right"></i>
			</div>
			<div class="quantity card">
				<span>购买数量</span>
				<div class="btnGroup">
					<count-btn-group @plus="plus" @minus="minus"></count-btn-group>
				</div>
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
			<div class="home" @click="toGoodsListPage">
				<i class="fa fa-home"></i>
				<br>
				<span class="text">商 城</span>
			</div>
			<div class="cart">
				<i class="fa fa-opencart"></i>
				<br>
				<span class="text">总价：<span class="price">￥{{goods.total.toFixed(2)}}</span></span>
			</div>
			<div class="addToCart" @click="addToCart">
				<span class="text">加入购物车</span>
			</div>
		</div>
	</section>
</template>

<script>
	import Vue from 'vue';
	import { Swipe, SwipeItem, Popup  } from 'mint-ui';
	import VDistpicker from 'v-distpicker';
	import CountBtnGroup from '@/components/cart/countBtnGroup.vue';
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
	Vue.component(Popup.name, Popup);
	Vue.component('v-distpicker', VDistpicker);
	
	export default {
		data() {
			return {
				popupVisible: false,
				goods: this.$store.state.goodsPage.goods,
				counter: 1
			}
		},
		components: {
			CountBtnGroup
		},
		methods: {
			toGoodsListPage() {
				if(sessionStorage.itemsName && sessionStorage.itemsName !== '') {
					this.$router.push('/goodsList/' + sessionStorage.itemsName );
				}else {
					this.$router.push('/goodsList/' + this.$store.state.goodsList.data.itemsName);
				}
			},
			selectAddress() {
				this.popupVisible = true;
			},
			onSelectedAddress(data) {
				
			},
			plus() {
				this.counter++;
			},
			minus() {
				if(this.counter > 1) {
					this.counter--;
				}
			},
			addToCart() {
				let subTotal = this.goods.price * this.counter;
				this.$store.commit('goodsPage/setTotal', subTotal);
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

			.info {
				margin: 0.5rem;
				margin-top: 0.3rem;
				overflow: hidden;

				.stock {
					float: left;
					font-size: 0.6rem;
					color: #5C5959;
				}

				.price {
					float: right;
					font-size: 0.8rem;
					color: #F72E2E;
				}
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

			.quantity {
				overflow: hidden;

				.btnGroup {
					float: right;
					height: 1.5rem;

					section.countBtnGroup {
						height: 22px;
						margin-top: 0.3rem;
					}
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
				overflow: hidden;

				.text {
					display: inline-block;
					width: 4.5rem;
					margin-top: 0.08rem;
					white-space: nowrap;

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