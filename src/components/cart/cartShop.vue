<template>
	<section class="cartShop">
		<div class="top">
			<cart-btn @click.native="selectAllInShop" :checked="false"></cart-btn>
			<h1 class="shopName">xxx官方旗舰店</h1>
		</div>
		<div class="main">
			<cart-item></cart-item>
			<cart-item></cart-item>
			<cart-item></cart-item>
		</div>
		<div class="bottom">
			<p class="total">本店总计：￥<span class="money">0.00</span></p>
		</div>
	</section>
</template>

<script>
	import CartBtn from '@/components/cart/cartBtn.vue';
	import CartItem from '@/components/cart/cartItem.vue';

	export default {
		components: {
			CartBtn,
			CartItem
		},
		data() {
			return {
				
			}
		},
		methods: {
			selectAllInShop() {

			}
		}
	}
</script>

<style scoped lang="less">
	.cartShop {
		margin-bottom: 0.2rem;
		padding: 0 10px;
		background-color: #fff;
		.top {
			height: 1.5rem;
			line-height: 1.5rem;

			.cartBtn {
				position: relative;
				top: 0.1rem;
			}

			.shopName {
				display: inline-block;
				margin-left: 0.5rem;
				font-size: 0.6rem;
				font-weight: 400;
			}
		}

		.bottom {
			.total {
				font-size: 0.5rem;
				text-align: right;

				.money {
					color: #F72E2E;
					font-weight: 600;
				}
			}
		}
		
	}
</style>