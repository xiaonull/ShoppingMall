<template>
	<section class="nearbyShops">
		<mt-loadmore :top-method="refresh" ref="loadmore">
			<div class="shop" v-for="shop in shops" :key="shop.id">
				<p class="container">
					<span class="shopName">{{shop.name}}</span>
					<span class="phone">{{shop.phone}}</span>
				</p>
				<p class="address">地址：{{shop.address}}</p>
				<p class="container">
					<span class="distance">距离：{{shop.distance}}米</span>
					<span class="exploited" v-if="shop.exploited">已被开发</span>
					<span class="exploited" v-else>未被开发</span>
				</p>
			</div>
		</mt-loadmore>
	</section>
</template>

<script>
	import Vue from 'vue';
	import { Loadmore } from 'mint-ui';
	Vue.component(Loadmore.name, Loadmore);

	export default {
		data() {
			return {
				shops: []
			}
		},
		mounted() {
			// 百度api获取地理位置
			let self = this;
			var geolocation = new BMap.Geolocation();
			geolocation.getCurrentPosition(function(r){
				if(this.getStatus() == BMAP_STATUS_SUCCESS){
					self.loadShops(r.point.lat, r.point.lng);
				}
				else {
					MessageBox('提示', '未能获取您的地理位置，请稍等或稍后重试！');
				}        
			},{enableHighAccuracy: true});
		},
		methods: {
			loadShops(latitude, longitude) {
				let self = this;
				getToken((result, status, xhr) => {
					let option = {
						url: 'frontend/clerk/stores/nearby',
						type: 'POST',
						data: {
							_token: result.data._token,
							latitude: latitude,
							longitude: longitude,
							scope: 3000
						},
						success(result, status, xhr) {
							if(result.status_code === 0) {
								self.shops = [];
								self.shops = result.data;
								self.$refs.loadmore.onTopLoaded();
							}
						}
					};

					myAjax(option);
				});
			},
			refresh() {
				// 百度api获取地理位置
				let self = this;
				var geolocation = new BMap.Geolocation();
				geolocation.getCurrentPosition(function(r){
					if(this.getStatus() == BMAP_STATUS_SUCCESS){
						self.loadShops(r.point.lat, r.point.lng);
					}
					else {
						MessageBox('提示', '未能获取您的地理位置，请稍等或稍后重试！');
					}        
				},{enableHighAccuracy: true});
			}
		}
	}
</script>

<style scoped lang="less">
	.nearbyShops {
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