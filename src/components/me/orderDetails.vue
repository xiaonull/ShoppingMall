<template>
	<section class="orderDetails">
		<div class="header">
			<mt-header fixed title="订单详情">
				<router-link to="/orderPage" slot="left">
					<mt-button icon="back">返回</mt-button>
				</router-link>
			</mt-header>
		</div>
		<div class="main">
			<div class="info">
				<p class="receiver">收货人： {{orderDetails.store_name}} <span class="phone">{{orderDetails.store_phone}}</span></p>
				<p class="address">收货地址:  {{orderDetails.address}}</p>
			</div>
			<div class="order">
				<div class="header">
					<span class="shopName">{{orderDetails.dealer}}</span>
					<span class="orderState">{{orderDetails.transportation}}</span>
				</div>
				<div class="goods" v-for="goods in orderDetails.goods" :key="goods.commodity_id" @click="toGoodsPage(goods.commodity_id)">
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
					<span class="total">合计：￥{{orderDetails.fee}}</span>
					<div class="receipt" @click="sureReceipt(orderDetails.id, orderDetails.transportation)">确认收货</div>
					<div class="complain" @click="complain(orderDetails.id)">投诉</div>
				</div>
			</div>
			<div class="orderSteps">
				<h2 class="orderState">订单状态</h2>
				<el-steps :space="80" direction="vertical" :active="1">
					<el-step :title="step.status +  ' : ' + step.time" v-for="(step, index) in orderDetails.transportation_time" :key="index"></el-step>
				</el-steps>
			</div>
		</div>
	</section>
</template>

<script>
	import Vue from 'vue';
	import { Header, Button, Toast, MessageBox } from 'mint-ui';
	import { Step, Steps } from 'element-ui'
	
	Vue.use(Step);
	Vue.use(Steps);

	export default {
		data() {
			return {
				orderDetails: {}
			}
		},
		mounted() {
			this.loadOrderDetails();
		},
		methods: {
			loadOrderDetails() {
				let id = this.$route.params.id;
				let self = this;
				let option = {
					url: '/frontend/store/order/get?id=' + id,
					type: 'GET',
					success(result, status, xhr) {
						if(result.status_code === 0) {
							self.orderDetails = {};
							self.orderDetails = result.data;
						}
					}
				};

				myAjax(option);
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
								self.loadOrderDetails();
							}
						};

						myAjax(option);
					});
				},
				(err) => {
					console.log('暂时不确定收货');
				});
			},
			complain(order_id) {
				this.$router.push('/complainPage/' + order_id);
			},
			toGoodsPage(id) {
				this.$store.dispatch('goodsPage/setGoodsPage', id)
				.then((data) => {
					this.$router.push('/goodsPage/' + id + '/fromOrderDetails');
				})
				.catch(response => {

				});	
			}
		}
	}
</script>

<style scoped lang="less">
	.orderDetails {
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

			.info {
				padding: 0.5rem;
				margin-bottom: 0.8rem;
				border-top: 1px solid #E2DDDD;
				border-bottom: 1px solid #E2DDDD;

				.receiver {
					height: 1.2rem;
					line-height: 1.2rem;

					.phone {
						float: right;
					}
				}

				.address {
					line-height: 1rem;
				}
			}

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

			.orderSteps {
				padding: 0.8rem;

				.orderState {
					font-size: 0.6rem;
					margin-bottom: 0.8rem;
				}

			}
		}
	}

	.el-step__icon div {
		display: none !important;
	}
</style>

