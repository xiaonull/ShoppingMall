<template>
	<section class="orderPage">
		<div class="header">
			<mt-header fixed title="订单列表">
				<router-link to="/index/me" slot="left">
					<mt-button icon="back">返回</mt-button>
				</router-link>
			</mt-header>
		</div>
		<div class="main">
			<div class="order" v-for="order in orders" :key="order.id">
				<div class="header">
					<span class="shopName">{{order.dealer}}</span>
					<span class="orderState">{{order.transportation}}</span>
				</div>
				<div class="goods" v-for="goods in order.goods" :key="goods.commodity_id" @click="toOrderDetails(order.id)">
					<div class="left">
						<img :src="goods.img" class="img">
					</div>
					<div class="right">
						<p class="goodsName">{{goods.name}}</p>
						<p class="price">￥{{goods.price}}</p>
						<p class="quantity">x {{goods.number}}</p>
					</div>
				</div>
				<div class="footer">
					<span class="total">合计：￥{{order.fee}}</span>
					<div class="receipt" @click="sureReceipt(order.id, order.transportation)">确认收货</div>
					<div class="complain" @click="complain(order.id)">投诉</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import { Header, Button, Toast, MessageBox } from 'mint-ui';


	export default {
		data() {
			return {
				orders: []
			}
		},
		mounted() {
			this.loadOrders();
		},
		methods: {
			toOrderDetails(id) {
				this.$router.push('/orderDetails/' + id);
			},
			loadOrders() {
				let self = this;
				let option = {
					url: 'frontend/store/orders',
					type: 'GET',
					success(result, status, xhr) {
						if(result.status_code === 0) {
							self.orders = [];
							self.orders = result.data;
						}
					}
				};

				myAjax(option);
			},
			complain(order_id) {
				this.$router.push('/complainPage/' + order_id);
			},
			sureReceipt(order_id, transportation) {
				if(transportation === '确认收货') {
					Toast({
						message: '您已确认收货',
						position: 'middle',
						duration: 3000
					});
					return;
				}

				let self = this;

				MessageBox.confirm('是否确定收货?').then(action => {
					getToken((result, status, xhr) => {
						let option = {
							url: 'frontend/store/orders/confirm',
							type: 'POST',
							data: {
								_token: result.data._token,
								order_id: order_id
							},
							success(result, status, xhr) {
								if(result.status_code === 0) {
									Toast({
										message: result.message,
										position: 'middle',
										duration: 3000
									});
								}
								self.loadOrders();
							}
						};

						myAjax(option);
					});
				},
				(err) => {
					console.log('暂时不确定收货');
				});
			}
		}
	}
</script>

<style scoped lang="less">
	.orderPage {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #fff;
		
		.header {
			/* height: 40px; */
		}

		.main {
			margin-top: 50px;
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

					.receipt {
						display: inline-block;
						position: absolute;
						top: 50%;
						right: 0.4rem;
						width: 3.5rem;
						height: 0.8rem;
						text-align: center;
						line-height: 0.8rem;
						margin-top: -0.4rem;
						border: 1px solid #26a2ff;
						border-radius: 3rem;
						color: #26a2ff;
					}

					.complain {
						display: inline-block;
						position: absolute;
						top: 50%;
						right: 4.2rem;
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