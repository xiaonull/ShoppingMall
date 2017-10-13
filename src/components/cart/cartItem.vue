<template>
	<section class="cartItem">
		<div class="left">
			<cart-btn @change="change" :checked="item.selected"></cart-btn>
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
					<span class="price">￥{{item.current_price.toFixed(2)}}</span>
					<count-btn-group :quantity="item.quantity" @plus="plus" @minus="minus"></count-btn-group>
				</div>
			</div>
		</div>
		<div class="delBtn" @click="delGoods">
			<i class="fa fa-trash"></i>
		</div>
	</section>
</template>

<script>
	import CartBtn from '@/components/cart/cartBtn.vue';
	import CountBtnGroup from '@/components/cart/countBtnGroup.vue';

	export default {
		props: ['item', 'shopId'],
		components: {
			CartBtn,
			CountBtnGroup
		},
		methods: {
			change() {
				this.$emit('refreshshop');
				this.$store.commit('cart/changeGoodsSelected', {
					shopId: this.shopId,
					goodsId: this.item.id
				});
			},
			plus() {
				this.$store.commit('cart/plus', {
					shopId: this.shopId,
					goodsId: this.item.id
				});
				getToken((result, status, xhr) => {
					this.$store.dispatch('cart/plus', {
						_token: result.data._token,
						commodity_sku_id: this.item.id,
						number: 1
					});
				});
			},
			minus() {
				this.$store.commit('cart/minus', {
					shopId: this.shopId,
					goodsId: this.item.id
				});
				getToken((result, status, xhr) => {
					this.$store.dispatch('cart/minus', {
						_token: result.data._token,
						commodity_sku_id: this.item.id,
						number: 1
					});
				});
			},
			delGoods() {
				
			}
		}
	}
</script>

<style scoped lang="less">
	.cartItem {
		height: 3.8rem;
		overflow: hidden;
		margin-bottom: 0.5rem;
		position: relative;

		.delBtn {
			display: inline-block;
			position: absolute;
			top: 0;
			right: 0;
			font-size: 0.8rem;

			.fa {
				color: #848484;
			}
		}

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
					width: 5rem;
					height: 1.5rem;
					font-size: 0.5rem;
					line-height: 0.8rem;
					overflow: hidden;
					text-overflow:ellipsis;
					white-space: nowrap;
				}

				.info {
					height: 0.8rem;
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