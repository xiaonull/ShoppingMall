<template>
	<section class="orderPage">
		<div class="header">
			<mt-header title="订单详情">
				<router-link to="/index/me" slot="left">
					<mt-button icon="back">返回</mt-button>
				</router-link>
			</mt-header>
		</div>
		<div class="main">
			<div class="order">
				<div class="header">
					<span class="shopName">XXX旗舰店</span>
					<span class="orderState">待发货</span>
				</div>
				<div class="goods">
					<div class="left">
						<img src="~@/assets/1.jpg" class="img">
					</div>
					<div class="right">
						<p class="goodsName">名字名字名字名字名字名字名字名字</p>
						<p class="price">￥100.00</p>
						<p class="quantity">x 2</p>
					</div>
				</div>
				<div class="goods">
					<div class="left">
						<img src="~@/assets/1.jpg" class="img">
					</div>
					<div class="right">
						<p class="goodsName">名字名字名字名字名字名字名字名字</p>
						<p class="price">￥100.00</p>
						<p class="quantity">x 2</p>
					</div>
				</div>
				<div class="goods">
					<div class="left">
						<img src="~@/assets/1.jpg" class="img">
					</div>
					<div class="right">
						<p class="goodsName">名字名字名字名字名字名字名字名字</p>
						<p class="price">￥100.00</p>
						<p class="quantity">x 2</p>
					</div>
				</div>
				<div class="footer">
					<span class="total">合计：￥600.00</span>
					<div class="complain">投诉</div>
				</div>
			</div>
			<div class="order">
				<div class="header">
					<span class="shopName">XXX旗舰店</span>
					<span class="orderState">待发货</span>
				</div>
				<div class="goods">
					<div class="left">
						<img src="~@/assets/1.jpg" class="img">
					</div>
					<div class="right">
						<p class="goodsName">名字名字名字名字名字名字名字名字</p>
						<p class="price">￥100.00</p>
						<p class="quantity">x 2</p>
					</div>
				</div>
				<div class="goods">
					<div class="left">
						<img src="~@/assets/1.jpg" class="img">
					</div>
					<div class="right">
						<p class="goodsName">名字名字名字名字名字名字名字名字</p>
						<p class="price">￥100.00</p>
						<p class="quantity">x 2</p>
					</div>
				</div>
				<div class="goods">
					<div class="left">
						<img src="~@/assets/1.jpg" class="img">
					</div>
					<div class="right">
						<p class="goodsName">名字名字名字名字名字名字名字名字</p>
						<p class="price">￥100.00</p>
						<p class="quantity">x 2</p>
					</div>
				</div>
				<div class="footer">
					<span class="total">合计：￥600.00</span>
					<div class="complain">投诉</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import { Header, Button } from 'mint-ui';

	export default {

	}
</script>

<style scoped lang="less">
	.orderPage {
		padding-bottom: 2rem;

		.header {
			height: 40px;
		}

		.main {
			padding-top: 10px;
			background-color: #fff;
			font-size: 0.58rem;

			.order {
				margin-bottom: 0.5rem;

				.header {
					height: 1.3rem;
					line-height: 1.3rem;
					overflow: hidden;
					border-top: 1px solid #E2DDDD;
					/* border-bottom: 1px solid #F6F4F4; */

					.shopName {
						display: inline-block;
						margin-left: 0.4rem;
					}

					.orderState {
						float: right;
						display: inline-block;
						margin-right: 0.4rem;
						color: #F52222;
					}
				}

				.goods {
					overflow: hidden;
					margin-top: 0.2rem;

					.left {
						float: left;
						width: 3.8rem;
						height: 3.8rem;
						margin-left: 0.4rem;
						margin-bottom: 0.4rem;

						.img {
							width: 100%;
							height: 100%;
						}
					}

					.right {
						margin-left: 4.5rem;

						.goodsName {
							width: 7rem;
							overflow: hidden;
							text-overflow:ellipsis;
							white-space: nowrap;
						}

						.price {
							text-align: right;
							margin-right: 0.4rem;
						}

						.quantity {
							text-align: right;
							margin-right: 0.4rem;
							color: #A4A4A4;
						}

						p {
							height: 1rem;
							line-height: 1rem;
						}
					}
				}

				.footer {
					padding-top: 0.2rem;
					padding-bottom: 0.4rem;
					position: relative;
					border-bottom: 1px solid #E2DDDD;

					.total {
						display: inline-block;
						margin-left: 0.4rem;
					}

					.complain {
						display: inline-block;
						position: absolute;
						top: 50%;
						right: 0.4rem;
						width: 1.8rem;
						height: 0.8rem;
						text-align: center;
						line-height: 0.8rem;
						margin-top: -0.4rem;
						border: 1px solid #8A8888;
						border-radius: 3rem;
						color: #8A8888;
					}
				}
			}
		}
	}
</style>