<template>
	<section class="cartItem">
		<div class="left">
			<cart-btn></cart-btn>
		</div>
		<div class="right">
			<div class="subLeft">
				<img class="img response_img" :src="item.imgUrl">
			</div>
			<div class="subRight">
				<p class="name">{{item.name}}</p>
				<p class="info">
					<span class="weight" v-if="item.infos[0] !== ''">{{item.infos[0]}}</span>
					<span class="color" v-if="item.infos[1] !== ''">{{item.infos[1]}}</span>
				</p>
				<div class="bottom">
					<span class="price">￥{{item.price.toFixed(2)}}</span>
					<count-btn-group :quantity="item.quantity"></count-btn-group>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import CartBtn from '@/components/cart/cartBtn.vue';
	import CountBtnGroup from '@/components/cart/countBtnGroup.vue';

	export default {
		props: ['item'],
		components: {
			CartBtn,
			CountBtnGroup
		}
	}
</script>

<style scoped lang="less">
	.cartItem {
		height: 3.8rem;
		overflow: hidden;
		margin-bottom: 0.5rem;

		.left {
			line-height: 3.8rem;
			float: left;
		}

		.right {
			display: block;
			margin-left: 1.2rem;
			overflow: hidden;

			.subLeft {
				float: left;
				display: inline-block;
				width: 3.8rem;
				height: 3.8rem;
			}

			.subRight {
				margin-left: 4.2rem;
				height: 3.8rem;

				.name {
					height: 1.5rem;
					font-size: 0.5rem;
					line-height: 0.8rem;
					overflow: hidden;
				}

				.info {
					font-size: 0.5rem;
					color: #81838e;
					margin-top: 0.1rem;

					.color {
						margin-left: 0.5rem;
					}
				}

				.bottom {
					margin-top: 0.2rem;

					.price {
						font-size: 0.6rem;
						font-weight: 600;
						color: #F72E2E;
					}

					.countBtnGroup {
						float: right;
					}
				}

			}
		}
	}
</style>