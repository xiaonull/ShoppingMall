<template>
	<section class="luckDrawPage">
		<div class="header">
			<mt-header fixed title="抽奖活动">
				<router-link to="/index/me" slot="left">
					<mt-button icon="back">返回</mt-button>
				</router-link>
			</mt-header>
		</div>
		<div class="main">
			<div class="imgContainer">
				<img src="~@/assets/draw/hongbao.jpg" class="img" @click="startDraw">
			</div>
		</div>
		<!--弹窗获奖红包-->
		<div class="mark" ref="mark">
			<div class="box">
				<div class="award">
					<p class="award-top">{{money}}</p>
					<p class="award-bottom">恭喜获得</p>
				</div>
				<div class="sure" @click="sure">我知道了</div>
			</div>
		</div>
	</section>
</template>

<script>
	import Vue from 'vue';
	import { Header, Button, MessageBox } from 'mint-ui'; 
	Vue.component(Header.name, Header);
	Vue.component(Button.name, Button);
	
	export default {
		data() {
			return {
				money: ''
			}
		},
		methods: {
			startDraw() {
				let option = {
					url: 'frontend/store/luckydraw',
					type: 'GET',
					success: function(result, status, xhr) {
						if(result.status_code === 0) {
							this.money = result.data.number + '元';

							let mark = this.$refs.mark;
							$(mark).css('display','block');
						}else {
							MessageBox('提示', result.message);
						}
					}.bind(this)
				};

				myAjax(option);
			},
			sure() {
				let mark = this.$refs.mark;
				$(mark).css('display','none');

				this.money = '';
			}
		}
	}
</script>

<style scoped lang="less">
	.luckDrawPage {
		background-color: #fff;
		position: absolute;
		width: 100%;
		height: 100%;

		.main {
			margin-top: 50px;
			text-align: center;

			.imgContainer {
				display: inline-block;
				width: 200px;
				height: 200px;
				margin-top: 5rem;

				.img {
					width: 100%;
					height: 100%;
				}
			}
		}

		.mark {
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			background-color: rgba(0, 0, 0, 0.5);
			z-index: 11;
			overflow: hidden;
			display: none;
		}
		.mark .box {
			width: 11.86rem;
			height: 13.84rem;
			background-image: url("~@/assets/draw/box-bg.png");
			background-position: center center;
			background-repeat: no-repeat;
			background-size: cover;
			margin: auto;
			margin-top: 5.3rem;
			position: relative;
		}
		.mark .box .close {
			width: 1.68rem;
			height: 1.68rem;
			position: absolute;
			top: -0.6rem;
			right: 0rem;
		}
		.mark .box .close img {
			width: 100%;
			height: 100%;
		}
		.mark .box .award {
			width: 9rem;
			height: 4.2rem;
			margin: auto;
			color: #d0483a;
			text-align: center;
			padding-top: 3.8rem;
		}
		.mark .box .award .award-top {
			font-size: 1.2rem;
			font-weight: 600;
		}
		.mark .box .award .award-bottom {
			font-size: 1rem;
			margin-top: 1.6rem;
		}
		.mark .box .sure {
			width: 5.52rem;
			height: 2.04rem;
			line-height: 2.04rem;
			background-image: url("~@/assets/draw/gain-an.png");
			background-position: center center;
			background-repeat: no-repeat;
			background-size: cover;
			position: absolute;
			bottom: 2rem;
			left: 3.06rem;
			text-align: center;
			color: #d0483a;
			font-size: 0.7rem;
			font-weight: 600;
		}
	}
</style>