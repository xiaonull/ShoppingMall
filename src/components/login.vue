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
					class="avatar-uploader"
					action="https://jsonplaceholder.typicode.com/posts/"
					:show-file-list="false"
					:on-success="handleAvatarSuccess"
					:before-upload="beforeAvatarUpload">
					<img v-if="imageUrl" :src="imageUrl" class="avatar">
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
				class="avatar-uploader"
				action="https://jsonplaceholder.typicode.com/posts/"
				:show-file-list="false"
				:on-success="handleAvatarSuccess"
				:before-upload="beforeAvatarUpload">
				<img v-if="imageUrl" :src="imageUrl" class="avatar">
				<i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
		</div>
	</div>
	<div class="submit">
		<mt-button type="primary">注 册</mt-button>
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
				imageUrl: ''
			};
		},
		methods: {
			handleAvatarSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if (!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if (!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
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