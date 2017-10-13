<template>
	<section class="profile">
		<div class="header">
			<mt-header fixed title="门店信息">
				<router-link to="/index/me" slot="left">
					<mt-button icon="back">返回</mt-button>
				</router-link>
			</mt-header>
		</div>
		<div class="main">
			<mt-field label="用户名" placeholder="" v-model="userName" disabled></mt-field>
			<mt-field label="门店名" placeholder="" v-model="storeName" disabled></mt-field>
			<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
			<mt-field label="地 址" placeholder="请输入详细地址" v-model="address"></mt-field>
			<div class="submit">
				<mt-button type="primary" @click="modify">确认修改</mt-button>
			</div>
		</div>
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
				// userName: this.$store.state.me.profile.identity || '',
				// phone: this.$store.state.me.profile.phone || '',
				// storeName: this.$store.state.me.profile.name || '',
				// address: this.$store.state.me.profile.address || '',
			};
		},
		computed: {
			userName: function() {
				return this.$store.state.me.profile.identity || '';
			},
			phone: function() {
				return this.$store.state.me.profile.phone || '';
			},
			storeName: function() {
				return this.$store.state.me.profile.name || '';
			},
			address: function() {
				return this.$store.state.me.profile.address || '';
			}
		},
		mounted() {
			if(this.$store.state.me.loadProfile === false) {
				this.$store.dispatch('me/setProfile');
			}
		},
		methods: {
			modify() {
				if(this.phone !== '' && this.address !== '') {
					if(!reg.test(this.phone)) {
						MessageBox('提示', '请填写正确的手机号码');
						return;
					}

					// getToken((result, status, xhr) => {
					// 	this.$store.dispatch('login/register', this.formData)
					// 	.then((response) => {
					// 		setTimeout(() => {
					// 			this.$router.push('/index/home');
					// 		}, 3000);
					// 	})
					// 	.catch(response => {

					// 	});			
					// });
				}else {
					MessageBox('提示', '请填写完整信息');
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.profile {
		position: relative;
		width: 100%;
		height: 100%;
		background-color: #FAF5F5;
		
		.main {
			padding: 3rem 10px 0 10px;
			
			.upload {
				overflow: hidden;
				background-color: #fff;

				.text {
					height: 2rem;
					line-height: 2rem;
					float: left;
					padding-left: 10px;
				}

				.uploadImg {
					width: 2rem;
					height: 2rem;
					float: right;

					.avatar-uploader .el-upload {
						border: 1px dashed #d9d9d9;
						border-radius: 6px;
						cursor: pointer;
						position: relative;
						overflow: hidden;
					}
					.avatar-uploader .el-upload:hover {
						border-color: #20a0ff;
					}
					.avatar-uploader-icon {
						font-size: 28px;
						color: #8c939d;
						width: 2rem;
						height: 2rem;
						line-height: 2rem;
						text-align: center;
					}
					.avatar {
						width: 2rem;
						height: 2rem;
						display: block;
						float: right;
					}
					.el-upload {
						float: right;
					}
				}
			}

			.submit {
				margin: 0 0 1rem 0;
				padding-top: 0.2rem;
				background-color: #fff;

				button {
					width: 100%;
				}
			}

		}
	}
</style>