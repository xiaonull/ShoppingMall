<template>
	<section class="myDevelopment">
		<div class="shop" v-for="shop in shops" :key="shop.id">
			<p class="container">
				<span class="shopName">{{shop.name}}</span>
				<span class="phone">{{shop.phone}}</span>
			</p>
			<p class="address">地址：{{shop.address}}</p>
		</div>
	</section>
</template>

<script>
	import Vue from 'vue';

	export default {
		data() {
			return {
				shops: []
			}
		},
		mounted() {
			this.loadShops();
		},
		methods: {
			loadShops() {
				let self = this;
				let option = {
					url: 'frontend/clerk/stores/owned',
					type: 'GET',
					success(result, status, xhr) {
						if(result.status_code === 0) {
							self.shops = [];
							self.shops = result.data;
						}
					}
				};

				myAjax(option);
			}
		}
	}
</script>

<style scoped lang="less">
	.myDevelopment {
		padding-top: 50px;
		padding-bottom: 3rem;

		.shop {
			font-size: 0.6rem;
			padding-bottom: 0.5rem;
			border-bottom: 1px solid #BBBBBB;

			.container {
				height: 1rem;
				line-height: 1rem;

				.shopName {
					display: inline-block;
					margin-left: 0.5rem;
				}

				.phone {
					float: right;
					display: inline-block;
					margin-right: 0.5rem;
				}

				.distance {
					display: inline-block;
					margin-left: 0.5rem;
				}

				.exploited {
					float: right;
					display: inline-block;
					margin-right: 0.5rem;
					color: #FA2020;
				}
			}

			.address {
				text-indent: 0.5rem;
			}
		}
	}
</style>