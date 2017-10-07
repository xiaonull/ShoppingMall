<template>
	<section class="emptyOrder">
		<div class="no-data-div">
			<div class="no-data-img">
				<img src="~@/assets/bgImg/bg_empty_list.png">
			</div>
			<dl>
				<dt>您还没有相关的订单</dt>
				<dd>可以去看看哪些想买的</dd>
			</dl>
			<a href="javascript: void(0)" class="no-data-btn" @click="goToBuy">立即去购买</a>
		</div>
	</section>
</template>

<script>
	export default {
		methods: {
			goToBuy() {
				this.$router.push('/index/classify/bargainPrice')
			}
		}
	}
</script>

<style scoped lang="less">
	.emptyOrder {
		.no-data-div {
			width: 90%;
			margin: 0rem auto 0;
			padding-top: 2rem;
			text-align: center;

			.no-data-img {
				margin: 0 auto;

				img {
					height: 5rem;
				}
			}

			dl {
				height: 1.75rem;
				margin: 0.15rem auto;
				text-align: center;

				dt {
					display: block;
					height: .5rem;
					font-size: 0.6rem;
					line-height: .5rem;
					color: #777;
				}

				dd {
					display: block;
					margin-top: 0.3rem;
					font-size: 0.5rem;
					color: #999;
				}
			}

			.no-data-btn {
				background: #f23030;
				display: block;
				width: 8rem;
				height: 1.5rem;
				margin: 1rem auto;
				font-size: 0.5rem;
				color: #fff;
				line-height: 1.5rem;
				text-align: center;
				border-radius: 0.3rem;
			}
		}
	}
</style>