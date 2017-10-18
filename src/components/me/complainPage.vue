<template>
	<section class="complainPage">
		<div class="header">
			<mt-header title="投诉订单">
				<router-link to="/orderPage" slot="left">
					<mt-button icon="back">返回</mt-button>
				</router-link>
			</mt-header>
		</div>
		<div class="main">
			<mt-field label="投诉内容" placeholder="当然是选择原谅他啦" type="textarea" rows="4" v-model="content"></mt-field>
		</div>
		<div class="btn" @click="complain">残忍投诉</div>
	</section>
</template>

<script>
	import Vue from 'vue';
	import { Header, Field, MessageBox, Toast } from 'mint-ui';

	Vue.component(Header.name, Header);
	Vue.component(Field.name, Field);

	export default {
		data() {
			return {
				content: ''
			}
		},
		methods: {
			complain() {
				if(this.content === '' || this.content === null) {
					MessageBox('提示', '请填写投诉内容');
					return;
				}

				let order_id = this.$route.params.id;
				getToken((result, status, xhr) => {
					let option = {
						url: 'frontend/store/complain',
						type: 'POST',
						data: {
							_token: result.data._token,
							order_id: order_id,
							title: '投诉订单',
							content: this.content
						},
						success(result, status, xhr) {
							if(result.status_code === 0) {
								Toast({
									message: result.message,
									position: 'middle',
									duration: 3000
								});
							}
						}
					};

					myAjax(option);
				});
			}
		}
	}
</script>

<style scoped lang="less">
	.complainPage {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #fff;
		text-align: center;

		.main {
			margin-top: 1rem;
		}

		.btn {
			display: inline-block;
			width: 4rem;
			height: 1rem;
			line-height: 1rem;
			border: 1px solid #F61D1D;
			border-radius: 3rem;
			font-size: 0.6rem;
			color: #F61D1D;
			margin-top: 1rem;
		}
	}
</style>