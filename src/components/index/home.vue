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
		<div class="subNav">
			<div class="nav_item"><img class="img" src=""><br><span class="title">特价</span></div>
			<div class="nav_item"><img class="img" src=""><br><span class="title">原价</span></div>
			<div class="nav_item"><img class="img" src=""><br><span class="title">---</span></div>
			<div class="nav_item"><img class="img" src=""><br><span class="title">排行榜</span></div>
		</div>
		<div class="newProduct">
			<p class="title"><span class="line"></span><span class="text">新品上市</span><span class="line"></span></p>
		</div>
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

		.subNav {
			width: 100%;
			height: 3rem;
			display: flex;
			text-align: center;

			.nav_item {
				flex: 1;

				.img {
					width: 1.5rem;
					height: 1.5rem;
					margin-top: 0.2rem;
					background-color: #D7D4D4;
					border-radius: 50%;
				}

				.title {
					font-size: 0.5rem;
				}
			}
		}

		.newProduct {
			.title {
				text-align: center;

				.text {
					display: inline-block;
					width: 20%;
					font-size: 0.5rem;
				}

				.line {
					display: inline-block;
					width: 40%;
					height: 1px;
					background-color: #C9C5C5;
					position: relative;
					top: -0.18rem;
				}
			}
		}

	}

</style>