<template>
	<section class="orderList">
		<div class="header">
			<mt-header fixed title="我的订单">
				<router-link to="/index/me" slot="left">
					<mt-button icon="back">返回</mt-button>
				</router-link>
			</mt-header>
		</div>
		<div class="navBar">
			<mt-navbar v-model="selected">
				<mt-tab-item id="1">全部</mt-tab-item>
				<mt-tab-item id="2">待付款</mt-tab-item>
				<mt-tab-item id="3">待发货</mt-tab-item>
				<mt-tab-item id="4">待收货</mt-tab-item>
				<mt-tab-item id="5">待评价</mt-tab-item>
			</mt-navbar>
		</div>
		<div class="tabContainer">
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
					<div class="orderContent">
						<empty-order></empty-order>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
					<div class="orderContent">
						<empty-order></empty-order>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="3">
					<div class="orderContent">
						<empty-order></empty-order>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="4">
					<div class="orderContent">
						<empty-order></empty-order>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="5">
					<div class="orderContent">
						<empty-order></empty-order>
					</div>
				</mt-tab-container-item>
			</mt-tab-container>
		</div>
	</section>
</template>

<script>
	import Vue from 'vue';
	import { Header, Button, Navbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui'; 
	import EmptyOrder from '@/components/me/orderList/emptyOrder.vue';
	Vue.component(Header.name, Header);
	Vue.component(Button.name, Button);
	Vue.component(Navbar.name, Navbar);
	Vue.component(TabItem.name, TabItem);
	Vue.component(TabContainer.name, TabContainer);
	Vue.component(TabContainerItem.name, TabContainerItem);

	export default {
		data() {
			return {
				selected: '1'
			}
		},
		components: {
			EmptyOrder
		}
	}
</script>

<style scoped lang="less">
	.orderList {
		padding-top: 40px;

		.navBar {
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
		}
	}
</style>