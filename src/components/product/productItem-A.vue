<template>
	<!-- 首页的产品展示 -->
	<section class="productItemA" @click="toGoodsPage">
		<div class="imgContainer">
			<img class="img response_img" :src="imgUrl">
		</div>
		<div class="info">
			<div class="nameContainer"><span class="name">{{name.length < 17 ? name : name.substring(0, 17) + '...'}}</span></div>
			<div class="priceContainer"><span class="price"><span class="cu" v-if="currentPrice < price">促</span>￥{{currentPrice}}</span></div>
		</div>
	</section>
</template>

<script>
	export default {
		props: ['imgUrl', 'name', 'price', 'currentPrice', 'id'],
		data() {
			return {

			}
		},
		methods: {
			toGoodsPage() {
				this.$store.dispatch('goodsPage/setGoodsPage', this.id)
				.then((data) => {
					this.$router.push('/goodsPage/' + this.id + '/fromHome');
				})
				.catch(response => {

				});	
				// this.$router.push('/goodsPage/' + this.item.id);
			}
		}
	}
</script>

<style scoped lang="less">
	.productItemA {
		background-color: #fff;
		margin-bottom: 0.2rem;

		.imgContainer {
			height: 8rem;
		}

		.info {
			position: relative;
			width: 100%;
			height: 2.2rem;
			font-size: 0.6rem;
			border-bottom: 1px solid #F6F4F4;

			.nameContainer {
				display: inline-block;
				width: 100%;
				height: 1.5rem;
				line-height: 1rem;
				padding-left: 0.2rem;
				margin-top: 0.1rem;
			}

			.priceContainer {
				color: #F72E2E;
				padding-right: 0.2rem;
				position: absolute;
				bottom: 0.2rem;
				right: 0.2rem;

				.cu {
					display: inline-block;
					width: 0.7rem;
					height: 0.7rem;
					line-height: 0.7rem;
					text-align: center;
					font-size: 0.5rem;
					background-color: #C31313;
					color: #fff;
				}

			}
		}
	}
</style>