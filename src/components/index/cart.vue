<template>
	<section class="cart">
		<div class="header">
			<mt-header fixed title="购物车"></mt-header>
		</div>
		<div class="main">
			<cart-shop v-for="shop in shops" :key="shop.id" :shop="shop" @refreshshop="refreshshop"></cart-shop>
		</div>
		<div class="footer">
			<div class="left">
				<!-- <cart-btn @change="changeAllSelectInShops" :checked="selectAll"></cart-btn>
				<span class="selectAll">全选</span> -->
			</div>
			<div class="right" @click="balance">
				结 算
			</div>
			<div class="footer-main">
				<p class="total">总价：{{allTotal.toFixed(2)}}</p>
				<!-- <p class="derate">减免：3.00</p> -->
			</div>
		</div>
	</section>
</template>

<script>
	import Vue from 'vue';
	import { Header, MessageBox } from 'mint-ui';
	import CartShop from '@/components/cart/cartShop.vue';
	import CartBtn from '@/components/cart/cartBtn.vue';
	Vue.component(Header.name, Header);

	export default {
		components: {
			CartShop,
			CartBtn
		},
		data() {
			console.log(this.$store.state.cart.allTotal);
			return {
				popupVisible: false,
				pickerValue: '',
				shops: this.$store.state.cart.shops,
				// allTotal: this.$store.state.cart.allTotal
			}
		},
		computed: {
			// shops() {
			// 	return this.$store.state.cart.shops;
			// },
			allTotal() {
				return this.$store.state.cart.allTotal;
			},
			selectAll() {
				console.log('1:' + this.$store.state.cart.selectAll);
				return this.$store.state.cart.selectAll;
			}
		},
		mounted() {
			this.shops = {};
			this.$store.commit('cart/resetAllTotal');

			this.$store.dispatch('cart/setCartData')
			.then((data) => {
				console.log('ok: ' + data);
				this.shops = data.shops;
			})
			.catch(response => {

			});	
		},
		methods: {
			changeAllSelectInShops() {
				// console.log(this.selectAll);
				this.refreshshop();
				this.$store.commit('cart/changeAllSelectInShops');
				console.log('2:' + this.selectAll);
			},
			refreshshop() {
				this.shops = {};
				setTimeout(() => {
					this.shops = this.$store.state.cart.shops
				}, 0);
			},
			balance() {
				if(this.$store.state.cart.allTotal > 0) {
					this.$router.push('/balance');
				} else {
					MessageBox('提示', '您还没选择需要购买的商品');
				}
			},
		}
	}
</script>

<style scoped lang="less">
	.cart {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #F2F0F0;

		.main {
			margin-top: 45px;
			margin-bottom: 6rem;
			border-bottom: 2px solid #D8D5D5;
			box-shadow: 10px 0 15px #888888;
		}

		.footer {
			position: fixed;
			bottom: 2.3rem;
			width: 100%;
			height: 2rem;
			background-color: #fff;
			border-top: 1px solid #F3F2F2;
			overflow: hidden;

			.left {
				float: left;
				margin-left: 10px;
				height: 2rem;
				line-height: 2rem;

				.cartBtn {
					position: relative;
					top: 0.1rem;
					margin-right: 0.3rem;
				}

				.selectAll {
					font-size: 0.5rem;
				}

			}
			
			.right {
				float: right;
				width: 4rem;
				height: 2rem;
				line-height: 2rem;
				text-align: center;
				font-size: 0.6rem;
				background-color: #F72E2E;
				color: #fff;
			}

			.footer-main {
				width: 6rem;
				margin-left: auto;
				margin-right: auto;

				.total {
					margin-top: 0.5rem;
					font-size: 0.6rem;
					font-weight: 500;
				}

				.derate {
					font-size: 0.5rem;
					margin-top: 0.05rem;
				}
			}

		}
	}
</style>