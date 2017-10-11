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
		</div>
		<mt-datetime-picker
		ref="startPicker"
		type="datetime"
		v-model="startPicker">
	</mt-datetime-picker>
	<mt-datetime-picker
	ref="endPicker"
	type="datetime"
	v-model="endPicker">
</mt-datetime-picker>
</section>
</template>

<script>
	import Vue from 'vue';
	import { Header, Field, DatetimePicker, Button } from 'mint-ui';
	Vue.component(Header.name, Header);
	Vue.component(Field.name, Field);
	Vue.component(DatetimePicker.name, DatetimePicker);

	export default {
		data() {
			return {
				startTime: '',
				endTime: '',
				startPicker: '',
				endPicker: ''
			}
		},
		methods: {
			selectStart() {
				this.$refs.startPicker.open();
			},
			selectEnd() {
				this.$refs.endPicker.open();
			}
		},
		watch: {
			startPicker: function(val) {
				this.startTime = val.getFullYear() + '-' + (val.getMonth() + 1) + '-' + val.getDate() + ' ' + val.getHours() + ':' + val.getMinutes();
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
		}
	}
</style>