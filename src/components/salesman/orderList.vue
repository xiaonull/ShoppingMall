<template>
	<section class="orderList">
		<div class="header">
			<mt-header fixed title="订单列表">
				<router-link to="/salesman/myDevelopment" slot="left">
					<mt-button icon="back">返回</mt-button>
				</router-link>
			</mt-header>
		</div>
		<!-- <div class="navbar">
			<mt-navbar v-model="selected">
				<mt-tab-item id="1">未完成</mt-tab-item>
				<mt-tab-item id="2">已完成</mt-tab-item>
			</mt-navbar>
		</div>
		<div class="tabContainer">
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
					<div class="orderContent">
						
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
					<div class="orderContent">
						
					</div>
				</mt-tab-container-item>
			</mt-tab-container>
		</div> -->
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
				</div>
			</div>
		</div>
	</section>
</template>

<script type="text/javascript">
	import Vue from 'vue';
	import { Header, Navbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui';

	Vue.component(Navbar.name, Navbar);
	Vue.component(TabItem.name, TabItem);
	Vue.component(TabContainer.name, TabContainer);
	Vue.component(TabContainerItem.name, TabContainerItem);

	export default {
		data() {
			return {
				selected: '1',
				orders: []
			}
		},
		mounted() {
			this.loadOrders();
		},
		methods: {
			loadOrders() {
				let self = this;
				let option = {
					url: 'frontend/clerk/orders',
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
			toOrderDetails(id) {
				this.$router.push('/salesman_orderDetails/' + id);
			}
		}
	}
</script>

<style scoped lang="less">
	.orderList {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #fff;

		/* .navBar {
			position: fixed;
			z-index: 2;
			width: 100%;
			.mint-tab-item {
				color: #4C4949;
				font-size: 0.5rem;
				padding: 0.5rem 0;
		
			}
			a.is-selected {
				color: #26a2ff;
			}
		}
		
		.tabContainer {
			margin-top: 1.7rem;
		} */

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
					height: 1rem;

					.total {
						display: inline-block;
						float: right;
						margin-right: 0.4rem;
					}
				}
			}
		}
	}
</style>