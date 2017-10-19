<template>
	<section class="login">
		<div class="header">
			<mt-header fixed title="门店入驻">
				<router-link to="/index/home" slot="left">
					<mt-button icon="back">返回商城</mt-button>
				</router-link>
			</mt-header>
		</div>
		<div class="main">
			<div class="prompt1">请在门店附近进行注册，以获取准确的门店位置</div>
			<div class="prompt2">注册成功后需要审核，审核成功将会自动登录</div>
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
					action="no"
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
				action="no"
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
	import { Field, MessageBox } from 'mint-ui';
	import { Upload, Button } from 'element-ui'
	Vue.component(Field.name, Field);
	Vue.use(Upload);
	Vue.use(Button);
	
	let reg = /^1[0-9]{10}$/;

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
				storeImage_fd: null,
				latitude: -1,
				longitude: -1,
				formData: new FormData(),
				is_login: this.$store.state.login.is_login.key
			};
		},
		mounted() {
			// 百度api获取地理位置
			let self = this;
			var geolocation = new BMap.Geolocation();
			geolocation.getCurrentPosition(function(r){
				if(this.getStatus() == BMAP_STATUS_SUCCESS){
					// alert('您的位置：'+r.point.lng+','+r.point.lat);
					self.latitude = r.point.lat;
					self.longitude = r.point.lng;	
				}
				else {
					// alert('failed'+this.getStatus());
					MessageBox('提示', '未能获取您的地理位置，请稍等或稍后重试！');
				}        
			},{enableHighAccuracy: true});

		},
		methods: {
			handleLicenseSuccess(res, file) {
				// this.licenseImageUrl = URL.createObjectURL(file.raw);
			},
			beforeLicenseUpload(file) {
				this.licenseImage_fd = true;
				this.formData.append('license_img', file, file.name);
				this.licenseImageUrl = URL.createObjectURL(file);

				return false; // 返回false不会自动上传
			},
			handleStoreSuccess(res, file) {
				// this.storeImageUrl = URL.createObjectURL(file.raw);
			},
			beforeStoreUpload(file) {
				this.storeImage_fd = true;
				this.formData.append('store_img', file, file.name);
				this.storeImageUrl = URL.createObjectURL(file);

				return false; // 返回false不会自动上传
			},
			register() {
				if(this.userName !== '' && this.phone !== '' && this.storeName !== '' && this.address !== '' && this.licenseImage_fd !== null && this.storeImage_fd !== null) {
					if(!reg.test(this.phone)) {
						MessageBox('提示', '请填写正确的手机号码');
						return;
					}

					if(this.latitude === -1 && this.longitude === -1) {
						MessageBox('提示', '未能获取您的地理位置，请稍等或稍后重试！');
						return;
					}

					this.formData.append('identity', this.userName);
					this.formData.append('phone', this.phone);
					this.formData.append('name', this.storeName);
					this.formData.append('address', this.address);
					this.formData.append('latitude', this.latitude);
					this.formData.append('longitude', this.longitude);
					getToken((result, status, xhr) => {
						this.formData.append('_token', result.data._token);		
						this.$store.dispatch('login/register', this.formData)
						.then((response) => {
							
						})
						.catch(response => {

						});			
					});
				}else {
					MessageBox('提示', '请填写完整信息');
				}
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
			padding: 2rem 10px 0 10px;

			.prompt1 {
				height: 1.4rem;
				line-height: 1.4rem;
				color: #EB3737;
				font-size: 0.6rem;
				text-align: center;
			}

			.prompt2 {
				height: 1.4rem;
				line-height: 1.4rem;
				color: #EB3737;
				font-size: 0.6rem;
				text-align: center;
				margin-bottom: 1rem;
			}
			
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