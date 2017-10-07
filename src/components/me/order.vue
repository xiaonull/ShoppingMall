<template>
	<section class="order">
		<dl>
			<a href="javascript: void(0)">
				<dt>
					<strong>我的订单</strong>
					<span  @click="toOrderList">查看更多订单<i class="fa fa-angle-right"></i></span>
				</dt>
			</a>
		</dl>
		<ul>
			<li>
				<a href="javascript: void(0)">
					<div class="user_order">
						<i class="fa fa-credit-card"></i>
					</div>
					<span>待付款</span>
				</a>
			</li>
			<li>
				<a href="javascript: void(0)">
					<div class="user_order">
						<i class="fa fa-suitcase"></i>
					</div>
					<span>待发货</span>
				</a>
			</li>
			<li>
				<a href="javascript: void(0)">
					<div class="user_order">
						<i class="fa fa-truck"></i>
					</div>
					<span>待收货</span>
				</a>
			</li>
			<li>
				<a href="javascript: void(0)">
					<div class="user_order">
						<i class="fa fa-star"></i>
					</div>
					<span>待评价</span>
				</a>
			</li>
			<li>
				<a href="javascript: void(0)">
					<div class="user_order">
						<i class="fa fa-rmb fa-xx"></i>
					</div>
					<span>退换货</span>
				</a>
			</li>
		</ul>
	</section>
</template>

<script>
	export default {
		methods: {
			toOrderList() {
				this.$router.push('/orderList');
			}
		}
	}
</script>

<style scoped lang="less">
	.order {
		width: 100%;
		background: #fff;
		overflow: hidden;
		margin-top: 10px;
		position: relative;

		a {
			color: black;
			text-decoration: none;
		}

		dl {
			width: 100%;
			height: 50px;
			line-height: 50px;
			position: relative;

			dt {
				width: 100%;

				strong {
					display: block;
					float: left;
					font-size: 16px;
					color: #222;
					font-weight: normal;
					margin-left: 3%;
				}

				span {
					display: block;
					float: right;
					background-size: auto 18px;
					font-size: 14px;
					color: #999;

					.fa {
						display: inline-block;
						margin-left: 10px;
						margin-right: 10px;
						font-size: 22px;
						position: relative;
						top: 2px;
					}
				}
			}
		}

		ul {
			width: 100%;
			height: 55px;
			padding: 5px 0;

			li {
				width: 20%;
				float: left;

				.user_order {
					width: 35px;
					margin: auto;
					position: relative;
					text-align: center;
					font-size: 0.8rem;
					margin-bottom: 8px;
					color: #26a2ff;

					.fa-xx {
						font-size: 0.9rem;
						position: relative;
						top: 0.1rem;
						margin-bottom: -2px;
					}
				}

				span {
					display: block;
					width: 50px;
					height: 20px;
					margin: auto;
					font-size: 14px;
					line-height: 20px;
					color: #222;
					text-align: center;
				}
			}
		}


	}
</style>