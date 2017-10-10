<template>
	<section class="login">
		<div class="header">
			<mt-header fixed title="门店入驻"></mt-header>
		</div>
		<div class="main">
			<mt-field label="用户名" placeholder="请输入用户名" v-model="userName"></mt-field>
			<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
			<mt-field label="门店名" placeholder="请输入门店名" v-model="storeName"></mt-field>
			<mt-field label="地 址" placeholder="请输入详细地址" v-model="address"></mt-field>
			<div class="upload">
				<div class="text">
					请上传营业执照
				</div>
				<div class="uploadImg">
					<el-upload
					ref="uploadLicenseImageUrl"
					class="avatar-uploader"
					action="https://jsonplaceholder.typicode.com/posts/"
					:show-file-list="false"
					:on-success="handleLicenseSuccess"
					:before-upload="beforeLicenseUpload">
					<img ref="licenseImage" v-if="licenseImageUrl" :src="licenseImageUrl" class="avatar">
					<i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
			</div>
		</div>
		<div class="upload">
			<div class="text">
				请上传门店照片
			</div>
			<div class="uploadImg">
				<el-upload
				ref="uploadStoreImage"
				class="avatar-uploader"
				action="https://jsonplaceholder.typicode.com/posts/"
				:show-file-list="false"
				:on-success="handleStoreSuccess"
				:before-upload="beforeStoreUpload">
				<img ref="storeImage" v-if="storeImageUrl" :src="storeImageUrl" class="avatar">
				<i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
		</div>
	</div>
	<div class="submit">
		<mt-button type="primary" @click="register">注 册</mt-button>
	</div>
</div>
</section>
</template>

<script>
	import Vue from 'vue';
	import { Field } from 'mint-ui';
	import { Upload, Button } from 'element-ui'
	Vue.component(Field.name, Field);
	Vue.use(Upload);
	Vue.use(Button);

	export default {
		name: 'login',
		data() {
			return {
				userName: '',
				phone: '',
				storeName: '',
				address: '',
				licenseImageUrl: '',
				storeImageUrl: '',
				licenseImage_fd: null,
				storeImage_fd: null
			};
		},
		methods: {
			handleLicenseSuccess(res, file) {
				this.licenseImageUrl = URL.createObjectURL(file.raw);
			},
			beforeLicenseUpload(file) {
				console.log(file);
				this.licenseImage_fd = new FormData();
				this.licenseImage_fd.append('license_img', file, file.name);

				// return false; // 返回false不会自动上传
			},
			handleStoreSuccess(res, file) {
				this.storeImageUrl = URL.createObjectURL(file.raw);
			},
			beforeStoreUpload(file) {
				this.storeImage_fd = new FormData();
				this.storeImage_fd.append('store_img', file, file.name);

				// return false; // 返回false不会自动上传
			},
			register() {
				console.log(this.licenseImage_fd);
				this.$store.dispatch('login/register', {
					licenseImage_fd: this.licenseImage_fd,
					storeImage_fd: this.storeImage_fd
				});
			}
		}
	}
</script>

<style scoped lang="less">
	.login {
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