<template>
	<section class="home">
		<div class="recommend">
			<mt-swipe :auto="4000">
				<mt-swipe-item>
					<img class="img response_img" src="~@/assets/001.jpg">
				</mt-swipe-item>
				<mt-swipe-item>
					<img class="img response_img" src="~@/assets/002.jpg">
				</mt-swipe-item>
				<mt-swipe-item>
					<img class="response_img" src="~@/assets/003.jpg">
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="bargainPrice">
			<div class="nav">
				<span class="bar"></span>
				<span class="title">特价商品</span>
				<span class="more">更多...</span>
			</div>
		</div>
		<div class="originalPrice"></div>
	</section>
</template>

<script>
	import Vue from 'vue';
	import { Swipe, SwipeItem } from 'mint-ui';
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);

	export default {
		
	}

</script>

<style scoped lang="less">
	.home {
		width: 100%;
		height: 100%;

		.recommend {
			height: 8rem;
			background-color: #D6D0D0;
			text-align: center;
		}

		.bargainPrice {
			margin-top: 0.3rem;
			background-color: #fff;

			.nav {
				height: 1.5rem;
				font-size: 0.7rem;
				line-height: 0rem;
				overflow: hidden;

				.bar {
					display: inline-block;
					width: 4px;
					height: 1.5rem;
					background-color: #26a2ff;
				}

				.title {
					position: relative;
					top: -0.45rem;
					margin-left: 0.2rem;
				}

				.more {
					float: right;
					position: relative;
					top: 0.8rem;
					margin-right: 0.5rem;
				}
			}
		}

	}

</style>