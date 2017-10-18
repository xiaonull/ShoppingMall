<template>
	<section class="goodsPage">
		<div class="carousel">
			<mt-swipe :auto="4000000">
				<mt-swipe-item v-for="imgUrl in goods.carousel.imgUrls" :key="imgUrl">
					<img class="response_img" :src="imgUrl">
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="backToGoodsList" @click="toGoodsListPage">
			<i class="fa fa-chevron-circle-left"></i>
		</div>
		<div class="main">
			<div class="name">
				{{goods.name}}
			</div>
			<div class="info">
				<span class="stock">库存：{{currentSKU.stock}}</span>
				<span class="price">￥{{currentSKU.current_price}}</span>
			</div>
			<span class="line"></span>
			<div class="address card">
				<span>配送至：{{address}}</span>
				<i class="fa fa-angle-right"></i>
			</div>
			<div class="goodsOption card" @click="selectGoodsOptions">
				<span>产品参数：{{currentSKU.specification}}</span>
				<i class="fa fa-angle-right"></i>
			</div>
			<!-- <div class="goodsDetail card" @click="openGoodsDetail">
				<span>产品详情</span>
				<i class="fa fa-angle-right"></i>
			</div> -->
			<div class="quantity card">
				<span>购买数量</span>
				<div class="btnGroup">
					<count-btn-group @plus="plus" @minus="minus"></count-btn-group>
				</div>
			</div>
		</div>
		<div class="popup">
			<mt-popup v-model="popupVisible" position="bottom">
				<div class="container">
					<div class="goodsOption_popup">
						<div class="optionContainer" v-for="sku in skus" :key="sku.sku_id">
							<div class="option" :class="{active: sku.sku_id === currentSKU.sku_id}" @click="changeCurrentSKU(sku)">
								<span v-for="(info, index) in sku.specification_arr" :key="index">{{info.key}}<span v-if="index !== sku.specification_arr.length-1">+</span><span v-else>:</span></span>
								<span v-for="(info, index) in sku.specification_arr" :key="index">{{info.value}}<span v-if="index !== sku.specification_arr.length-1">、</span></span>
							</div>
						</div>
					</div>
				</div>
			</mt-popup>
		</div>
		<div class="introduction">
			<h2 class="title">产品详情</h2>
			<div v-html="goods.introduction"></div>
		</div>
		<div class="footer">
			<div class="home" @click="toClassify">
				<i class="fa fa-home"></i>
				<br>
				<span class="text">商 城</span>
			</div>
			<div class="cart" @click="toCart">
				<i class="fa fa-opencart"></i>
				<br>
				<span class="text">总价：<span class="price">￥{{goods.total.toFixed(2)}}</span></span>
			</div>
			<div class="addToCart" @click="addToCart">
				<span class="text">加入购物车</span>
			</div>
		</div>
		<!-- <div class="popup">
			<mt-popup v-model="popupVisible2" position="right">
				<div class="container" v-html="goods.introduction">
				</div>
			</mt-popup>
		</div> -->
	</section>
</template>

<script>
	import Vue from 'vue';
	import { Swipe, SwipeItem, Popup  } from 'mint-ui';
	// import VDistpicker from 'v-distpicker';
	import CountBtnGroup from '@/components/cart/countBtnGroup.vue';
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
	Vue.component(Popup.name, Popup);
	// Vue.component('v-distpicker', VDistpicker);
	
	export default {
		data() {
			return {
				popupVisible: false,
				popupVisible2: false,
				goods: this.$store.state.goodsPage.goods,
				skus: this.$store.state.goodsPage.skus,
				currentSKU: {},
				counter: 1
				// address: ''
			}
		},
		components: {
			CountBtnGroup
		},
		mounted() {
			// let goodsId = this.$route.params.goodsId;
			// console.log('goodsId:' + goodsId);
			// this.$store.dispatch('goodsPage/setGoodsPage', goodsId)
			// .then((data) => {
			// 	this.currentSKU = this.skus[0];
			// 	console.log('ok');
			// })
			// .catch(response => {

			// });	
			if(this.$store.state.me.loadProfile === false) {
				this.$store.dispatch('me/setProfile');
			} 

			this.currentSKU = this.skus[0];

			this.$store.commit('goodsPage/resetTotal');
		},
		computed: {
			address: function() {
				return this.$store.state.me.profile.address;
			}
		},
		methods: {
			toGoodsListPage() {
				if(this.$route.params.from === 'fromHome') {
					this.$router.push('/index/home');
					return;
				}

				if(this.$route.params.from === 'fromCart') {
					this.$router.push('/index/cart');
					return;
				}

				if(this.$route.params.from === 'fromOrderDetails') {
					this.$router.push('/orderPage');
					return;
				}

				if(sessionStorage.itemsName && sessionStorage.itemsName !== '') {
					this.$router.push('/goodsList/' + sessionStorage.itemsName );
				}else {
					// this.$router.push('/goodsList/' + this.$store.state.goodsList.data.itemsName);
					this.$router.push('/index/home');
				}
			},
			toClassify() {
				this.$router.push('/index/classify/bargainPrice');
			},
			toCart() {
				this.$router.push('/index/cart');
			},
			selectGoodsOptions() {
				this.popupVisible = true;
			},
			openGoodsDetail() {
				this.popupVisible2 = true;
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
				getToken((result, status, xhr) => {
					this.$store.dispatch('goodsPage/addToCart', {commodity_sku_id: this.currentSKU.sku_id, number: this.counter, _token: result.data._token})
					.then(
						(data) => {
							let subTotal = this.goods.price * this.counter;
							this.$store.commit('goodsPage/setTotal', subTotal);
						}, 
						(err) => {
							console.log('addToCartErr: ' + err);
						})
					.catch(response => {

					});	
				});
			},
			changeCurrentSKU(sku) {
				this.currentSKU = sku;
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

		.backToGoodsList {
			position: absolute;
			font-size: 1.5rem;
			color: #bdbdbd;
			top: 0.8rem;
			left: .8rem;
		}
		
		.main {
			margin-bottom: 0.5rem;

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

		.introduction {
			padding: 1rem 0 0.5rem 0;
			margin-bottom: 3rem;
			text-align: center;

			.title {
				font-size: 0.7rem;
				font-weight: 500;
				display: inline-block;
				padding-bottom: 0.3rem;
				border-bottom: 1px solid #D6D2D2;
				margin-bottom: 0.5rem;
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
			width: 100%;

			.mint-popup {
				width: 100%;
				height: 15rem;
				overflow-y: scroll;

				.container {
					position: relative;

					.goodsOption_popup {
						position: absolute;
						width: 100%;
						min-height: 15rem;
						background-color: #fff;
						overflow-y: scroll;
						text-align: center;
						
						.optionContainer {
							display: inline-block;
							float: left;
							width: 50%;
							height: 1.5rem;
							line-height: 1.5rem;
							margin-top: 0.5rem;
							text-align: center;

							.option {
								display: inline-block;
								width: 90%;
								font-size: 0.5rem;
								background-color: #9C9898;
								color: #fff;
								border-radius: 1rem;
							}

							.active {
								background-color: #F17725;
							}
						}
					}
				}
			}
			
			
		}
	}
</style>