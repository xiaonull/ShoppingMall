<template>
	<section class="me">
		<div class="header">
			<me-bg></me-bg>
		</div>
		<div class="user-order-box">
			<order></order>
		</div>
		<div class="main">
			<ul class="list">
				<li class="item">
					<i class="icon icon-collect"></i>
					<span class="text">我的收藏</span>
					<i class="fa fa-angle-right"></i>
				</li>
				<li class="item">
					<i class="icon icon-address"></i>
					<span class="text">收货地址</span>
					<i class="fa fa-angle-right"></i>
				</li>
				<li class="item">
					<i class="icon icon-userInfo"></i>
					<span class="text">个人信息</span>
					<i class="fa fa-angle-right"></i>
				</li>
				<li class="item" @click="toLuckDrawPage">
					<i class="icon icon-luckDraw"></i>
					<span class="text">抽奖活动</span>
					<i class="fa fa-angle-right"></i>
				</li>
				<li class="item">
					<i class="icon icon-shopInfo"></i>
					<span class="text">门店信息</span>
					<i class="fa fa-angle-right"></i>
				</li>
				<li class="item">
					<i class="icon icon-logout"></i>
					<span class="text">注销登录</span>
					<i class="fa fa-angle-right"></i>
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
	import MeBg from '@/components/me/meBg.vue';
	import Order from '@/components/me/order.vue';

	export default {
		components: {
			MeBg,
			Order
		},
		methods: {
			toLuckDrawPage() {
				this.$router.push('/luckDraw');
			}
		}
	}
</script>

<style scoped lang="less">
	.me {
		padding-bottom: 3rem;

		.header {
			height: 10rem;
		}

		.main {
			margin-top: 0.5rem;
			background-color: #fff;

			.list {
				.item {
					height: 1.8rem;
					line-height: 1.8rem;
					padding-left: 0.8rem;
					border-bottom: 1px solid #F2EEEE;

					.fa {
						font-size: 0.75rem;
						color: #F71F1F;
						position: relative;
						top: 0.05rem;
						margin-right: 0.5rem;
					}

					.icon {
						display: block;
						float: left;
						width: 1.2rem;
						height: 1.8rem;
						margin-right: 0.2rem;
					}

					.icon-collect {
						background: url('~@/assets/btn_goods_collection.png') no-repeat -100% 50%;
						background-size: 90%;
					}
					.icon-address {
						background: url('~@/assets/btn_consignee_address.png') no-repeat -100% 50%;
						background-size: 90%;
					}
					.icon-userInfo {
						background: url('~@/assets/btn_user_info.png') no-repeat -100% 50%;
						background-size: 90%;
					}
					.icon-luckDraw {
						background: url('~@/assets/btn_draw.png') no-repeat -100% 50%;
						background-size: 90%;
					}
					.icon-shopInfo {
						background: url('~@/assets/shop_info_icon.png') no-repeat -30% 50%;
						background-size: 80%;
					}
					.icon-logout {
						background: url('~@/assets/btn_sign_off.png') no-repeat -100% 50%;
						background-size: 90%;
					}

					.text {
						display: inline-block;
						font-size: 0.6rem;
					}

					.fa-angle-right {
						float: right;
						font-size: 1.2rem;
						top: 50%;
						margin-top: -0.6rem;
						margin-right: 0.3rem;
						color: #999;
					}
				}

			}
		}
	}
</style>