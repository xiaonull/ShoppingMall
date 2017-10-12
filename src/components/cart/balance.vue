<template>
	<section class="balance">
		<div class="header">
			<mt-header fixed title="结 算">
				<router-link to="/index/cart" slot="left">
					<mt-button icon="back">返回</mt-button>
				</router-link>
			</mt-header>
		</div>
		<div class="main">
			<mt-field label="发货时间" placeholder="请选择最早发货时间" v-model="startTime" @click.native="selectStart"></mt-field>
			<mt-field label="收货时间" placeholder="请选择最迟发货时间" v-model="endTime" @click.native="selectEnd"></mt-field>
			<mt-field label="备 注" placeholder="客官有啥特别要求？？？" type="textarea" rows="3" v-model="comment"></mt-field>
			<mt-button type="primary" @click="sureOrder">确认下单</mt-button>
		</div>
		<mt-datetime-picker
		ref="startPicker"
		:startDate="startPickerTime"
		type="datetime"
		v-model="startPicker">
	</mt-datetime-picker>
	<mt-datetime-picker
	ref="endPicker"
	:startDate="startPickerTime"
	type="datetime"
	v-model="endPicker">
</mt-datetime-picker>
</section>
</template>

<script>
	import Vue from 'vue';
	import { Header, Field, DatetimePicker, Button, MessageBox } from 'mint-ui';
	Vue.component(Header.name, Header);
	Vue.component(Field.name, Field);
	Vue.component(DatetimePicker.name, DatetimePicker);

	export default {
		data() {
			return {
				startPickerTime: new Date(),
				endPickerTime: new Date(),
				startTime: '',
				endTime: '',
				startPicker: '',
				endPicker: '',
				comment: '',
			}
		},
		mounted() {
			this.$nextTick(() => {
				if(this.$store.state.cart.shops.length === 0) {
					this.$router.push('/index/cart');
				} 
			});
		},
		methods: {
			selectStart() {
				this.$refs.startPicker.open();
			},
			selectEnd() {
				this.$refs.endPicker.open();
			},
			sureOrder() {
				const shops = this.$store.state.cart.shops;
				let order = [];
				for(let i = 0, j = shops.length; i < j; i++) {
					let shop = shops[i];
					for(let n = 0, m = shop.goods.length; n < m; n++) {
						let goods = shop.goods[n];
						if(goods.selected === true) {
							order.push({
								commodity_sku_id: goods.id,
								number: goods.quantity
							});
						}
					}
				}
				if(shops.length > 0) {
					getToken((result, status, xhr) => {
						let data = {
							_token: result.data._token,
							arrive_early_at: this.startTime,
							arrive_late_at: this.endTime,
							comment: this.comment,
							goods: order
						};

						this.$store.dispatch('cart/sureOrder', data)
						.then(
							(data) => {
								MessageBox('提示', '您已成功下单！');
								setTimeout(() => {
									this.$router.push('/orderList');
								}, 2000);
							}, 
							(error) => {
								MessageBox('提示', '下单失败！');
							})
						.catch(response => {
							MessageBox('提示', '下单失败！');
						});	
					});
				}
			}
		},
		watch: {
			startPicker: function(val) {
				this.startTime = val.getFullYear() + '-' + (val.getMonth() + 1) + '-' + val.getDate() + ' ' + val.getHours() + ':' + val.getMinutes();
				this.endPicker = val;
			},
			endPicker: function(val) {
				this.endTime = val.getFullYear() + '-' + (val.getMonth() + 1) + '-' + val.getDate() + ' ' + val.getHours() + ':' + val.getMinutes();
			}
		}
	}
</script>

<style scoped lang="less">
	.balance {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #fff;

		.main {
			margin-top: 80px;
			text-align: center;

			.mint-button {
				width: 50%;
				margin-top: 2rem;
			}
		}
	}
</style>