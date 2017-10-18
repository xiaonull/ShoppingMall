<template>
	<section class="bindWeChat">
		<div class="title">
			<h2 class="mark">如果已经绑定，则不要再次绑定</h2>
		</div>
		<div class="main">
			<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
		</div>
		<div class="btn" @click="bindWeChat">确定绑定</div>
	</section>
</template>

<script>
	import Vue from 'vue';
	import { Field, MessageBox } from 'mint-ui';
	Vue.component(Field.name, Field);

	let reg = /^1[0-9]{10}$/;

	export default {
		data() {
			return {
				phone: ''
			}
		},
		methods: {
			bindWeChat() {
				if(!reg.test(this.phone)) {
					MessageBox('提示', '请填写正确的手机号码');
					return;
				}

				getToken((result, status, xhr) => {
					let option = {
						url: 'frontend/clerk/register',
						type: 'POST',
						data: {
							_token: result.data._token,
							phone: this.phone
						},
						success(result, status, xhr) {
							MessageBox('提示', result.message);
						}
					};

					myAjax(option);
				});
			}
		}
	}
</script>

<style scoped lang="less">
	.bindWeChat {
		text-align: center;

		.title {
			margin-top: 4rem;
			text-align: center;

			.mark {
				font-size: 0.6rem;
				color: #F21818;
				font-weight: 500;
			}
		}

		.main {
			margin-top: 2rem;
		}

		.btn {
			display: inline-block;
			width: 4rem;
			height: 1rem;
			line-height: 1rem;
			border: 1px solid #26a2ff;
			border-radius: 3rem;
			font-size: 0.6rem;
			color: #26a2ff;
			margin-top: 2rem;
		}
	}
</style>