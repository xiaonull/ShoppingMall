<template>
	<!-- 分类的产品展示 -->
	<section class="productItemA" @click="toGoodsList">
		<div class="imgContainer">
			<img class="img response_img" :src="imgUrl">
		</div>
		<div class="info">
			<div class="nameContainer"><span class="name">{{name}}</span></div>
			<!-- <div class="priceContainer"><span class="price">￥{{price}}</span></div> -->
		</div>
	</section>
</template>

<script>
	import { Toast } from 'mint-ui';

	export default {
		props: ['imgUrl', 'name', 'price', 'id'],
		data() {
			return {

			}
		},
		methods: {
			toGoodsList() {
				let level = this.$store.state.classify.currentLevel;
				console.log('level:' + level);
				if(level === 2) {
					this.$emit('loadLevelThreeProduct', {
						id: this.id,
						name: this.name
					});
				}else if(level === 3) {
					let currentType = this.$store.state.classify.currentType;
					this.$store.dispatch('goodsList/setGoodsList', {
						currentType: currentType,
						id: this.id
					})
					.then((goodsList) => {
						if(goodsList.length === 0) {
							Toast('暂时还没有该分类商品');
						}else {
							this.$router.push('/goodsList/' + this.name);
						}
					})
					.catch(response => {

					});	
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.productItemA {
		background-color: #fff;
		margin-bottom: 0.2rem;

		.imgContainer {
			height: 5.5rem;
		}

		.info {
			width: 100%;
			height: 1.5rem;
			font-size: 0.6rem;
			border-bottom: 1px solid #F6F4F4;

			.nameContainer {
				display: inline-block;
				width: 100%;
				height: 1.5rem;
				line-height: 1.5rem;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
				padding-left: 0.2rem;
				text-align: center;
			}

			.priceContainer {
				height: 1.5rem;
				line-height: 1.5rem;
				float: right;
				color: #F72E2E;
				padding-right: 0.2rem;
				position: relative;
			}
		}
	}
</style>