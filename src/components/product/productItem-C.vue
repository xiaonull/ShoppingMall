<template>
	<section class="productItemC" @click="toGoodsPage">
		<div class="imgContainer">
			<img class="response_img" :src="item.imgUrl">
		</div>
		<div class="goodsList">
			<p class="name">{{item.name}}</p>
			<p class="info">
				<span v-if="item.infos[0] !== ''">{{item.infos[0]}}</span>
				<span v-if="item.infos[1] !== ''">{{item.infos[1]}}</span>
			</p>
			<p class="price">￥{{item.price}}</p>
		</div>
	</section>
</template>

<script>
	export default {
		props: ['item'],
		methods: {
			toGoodsPage() {
				this.$router.push('/goodsPage');
			}
		}
	}
</script>

<style scoped lang="less">
	.productItemC {
		height: 4rem;
		padding: 0 0.8rem 0.5rem 0.5rem;
		border-bottom: 1px solid #F1F1F1;
		margin-bottom: 0.5rem;
		overflow: hidden;

		.imgContainer {
			width: 4rem;
			height: 4rem;
			float: left;
		}

		.goodsList {
			margin-left: 5rem;
			.name {
				margin-top: 0.5rem;
			}

			.info {
				margin-top: 0.5rem;

				span {
					display: inline-block;
					background-color: #DBDADA;
					color: #5D5959;
					padding: 0.1rem 0.3rem;
					font-size: 0.4rem;
					border-radius: 1rem;
					margin-right: 0.5rem;
				}
			}

			.price {
				margin-top: 0.1rem;
				color: #F72E2E;
				text-align: right;
			}
		}
	}
</style>