<template>
	<section class="cartShop">
		<div class="top">
		<cart-btn @change="changeAllSelectInShop" :checked="shop.selectedAll"></cart-btn>
			<h1 class="shopName">{{shop.shopName}}</h1>
		</div>
		<div class="main">
		<cart-item v-for="goods in shop.goods" :key="goods.id" :item="goods" :shopId="shop.id" @refreshshop="refreshshop"></cart-item>
		</div>
		<div class="bottom">
			<p class="total">本店总计：￥<span class="money">{{shop.total.toFixed(2)}}</span></p>
		</div>
	</section>
</template>

<script>
	import CartBtn from '@/components/cart/cartBtn.vue';
	import CartItem from '@/components/cart/cartItem.vue';

	export default {
		props: ['shop'],
		components: {
			CartBtn,
			CartItem
		},
		data() {
			return {
				
			}
		},
		methods: {
			changeAllSelectInShop() {
				this.$emit('refreshshop');
				this.$store.commit('cart/changeAllSelectInShop', {
					shopId: this.shop.id
				});
			},
			refreshshop() {
				this.$emit('refreshshop');
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