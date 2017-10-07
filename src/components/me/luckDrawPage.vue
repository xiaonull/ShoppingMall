<template>
	<section class="luckDrawPage">
		<div class="header">
			<mt-header fixed title="抽奖活动">
				<router-link to="/index/me" slot="left">
					<mt-button icon="back">返回</mt-button>
				</router-link>
			</mt-header>
		</div>
		<div class="page-main">
			<header class="header"><img src="~@/assets/draw/draw-logo.png" alt="" /></header>
			<section class="main">
				<div class="turntable">	<!--转盘-->				
					<div class="rotate wheel-list" id="rotate" ref="rotate">
						<!-- <img id="rotate" src="~@/assets/draw/draw-bg.png"> -->
						<div class="wheel-item wheel-item-1">
							<div class="wheel-icontent">
								<p class="wheel-iicon">
									<i class="icono-headphone"></i>
								</p>
								<p class="wheel-itext">无</p>
								<p class="wheel-itext-num"></p>
							</div>
						</div>
						<div class="wheel-item wheel-item-2">
							<div class="wheel-icontent">
								<p class="wheel-iicon">
									<i class="icono-headphone"></i>
								</p>
								<p class="wheel-itext">无</p>
								<p class="wheel-itext-num"></p>
							</div>
						</div>
						<div class="wheel-item wheel-item-3">
							<div class="wheel-icontent">
								<p class="wheel-iicon">
									<i class="icono-headphone"></i>
								</p>
								<p class="wheel-itext">无</p>
								<p class="wheel-itext-num"></p>
							</div>
						</div>
						<div class="wheel-item wheel-item-4">
							<div class="wheel-icontent">
								<p class="wheel-iicon">
									<i class="icono-headphone"></i>
								</p>
								<p class="wheel-itext">无</p>
								<p class="wheel-itext-num"></p>
							</div>
						</div>
						<div class="wheel-item wheel-item-5">
							<div class="wheel-icontent">
								<p class="wheel-iicon">
									<i class="icono-headphone"></i>
								</p>
								<p class="wheel-itext">无</p>
								<p class="wheel-itext-num"></p>
							</div>
						</div>
						<div class="wheel-item wheel-item-6">
							<div class="wheel-icontent">
								<p class="wheel-iicon">
									<i class="icono-headphone"></i>
								</p>
								<p class="wheel-itext">无</p>
								<p class="wheel-itext-num"></p>
							</div>
						</div>
						<div class="wheel-item wheel-item-7">
							<div class="wheel-icontent">
								<p class="wheel-iicon">
									<i class="icono-headphone"></i>
								</p>
								<p class="wheel-itext">无</p>
								<p class="wheel-itext-num"></p>
							</div>
						</div>
						<div class="wheel-item wheel-item-8">
							<div class="wheel-icontent">
								<p class="wheel-iicon">
									<i class="icono-headphone"></i>
								</p>
								<p class="wheel-itext">无</p>
								<p class="wheel-itext-num"></p>
							</div>
						</div>
						<img class="turntableBgImg" src="~@/assets/draw/draw-bg.png">
					</div>
					<div class="pointer" @click="startDraw"><img src="~@/assets/draw/draw.png" alt="pointer"></div>				
				</div>
				<div class="turntable-bottom"><img src="~@/assets/draw/column.png" alt="" /></div>
				<div class="rules">
					<div class="ruleimg"><img src="~@/assets/draw/rules.png"/></div>
				</div>
				<div class="rulestext"></div>
			</section>
			<!--弹窗-->
			<section class="mark" ref="mark">
				<div class="box">
					<!-- <div class="close"><img src="~@/assets/draw/close.png"/></div> -->
					<div class="award">
						<p class="award-top"></p>
						<p class="award-bottom">恭喜获得</p>
					</div>
					<div class="sure" @click="sure">我知道了</div>
				</div>
			</section>
		</div>
	</section>
</template>

<script>
	import Vue from 'vue';
	import { Header, Button } from 'mint-ui'; 
	Vue.component(Header.name, Header);
	Vue.component(Button.name, Button);
	
	export default {
		data() {
			return {
				bRotate: false
			}
		},
		methods: {
			rotateTimeOut() {
				let rotate = this.$refs.rotate;
				$(rotate).rotate({
					angle: 0,
					animateTo: 2160,
					duration: 8000,
					callback: function() {
						alert('网络超时，请检查您的网络设置！');
					}
				});
			},
			rotateFn(index, angles) {
				this.bRotate = !this.bRotate;
				let rotate = this.$refs.rotate;
				$(rotate).stopRotate();
				$(rotate).rotate({
					angle: 0,
					animateTo: angles + 1800,
					duration: 8000,
					callback: function() {
						let mark = this.$refs.mark;
						$(mark).css('display','block');
						// $('.award .award-top').html(
						// 	$('.turntable .wheel-item').eq(index).find('.wheel-itext').text() + 
						// 	'&nbsp;' + 
						// 	$('.turntable .wheel-item').eq(index).find('.wheel-itext-num').text() +
						// 	'个'
						// 	);
						this.bRotate = !this.bRotate;
					}.bind(this)
				})
			},
			startDraw() {
				if(this.bRotate) return;

				var item = 3;

				switch(item) {
					case 0:
					this.rotateFn(0, 360);
					break;
					case 1:
					this.rotateFn(1, -45);
					break;
					case 2:
					this.rotateFn(2, -90);
					break;
					case 3:
					this.rotateFn(3, -135);
					break;
					case 4:
					this.rotateFn(4, -180);
					break;
					case 5:
					this.rotateFn(5, -225);
					break;
					case 6:
					this.rotateFn(6, -270);
					break;
					case 7:
					this.rotateFn(7, -315);
					break;
				}
			},
			sure() {
				let mark = this.$refs.mark;
				$(mark).css('display','none');
			}
		}
	}
</script>

<style scoped lang="less">
	.luckDrawPage {
		background-color: #ffffcd;
		position: absolute;
		width: 100%;
		height: 100%;

		.page-main {
			margin-top: 40px;
			text-align: center;
			.header {
				width: 100%;
				height: 16.36rem;
				background-image: url("~@/assets/draw/dial-bg.jpg");
				background-size: cover;
				background-position: center center;
				background-repeat: no-repeat;
				overflow: hidden;
				position: relative;
				z-index: 1;
				img {
					width: 13.3rem;
					height: 4.04rem;
					margin: auto;
					margin-top: 1rem;
				}
			}
			.main {
				position: relative;
				width: 100%;
				z-index: 10;
			}
			.main .turntable {
				position: relative;
				width: 12rem;
				margin: auto;
				z-index: 10;
			}
			.main .turntable .rotate {
				position: absolute;
				left: 0;
				top: -9.2rem;
				width: 12rem;
				height: 12rem;
			}
			.main .turntable .rotate img {
				width: 100%;
				height: 100%;
			}
			.main .turntable .pointer {
				position: absolute;
				left: 4.64rem;
				top: -5.2rem;
				width: 2.84rem;
				height: 3.8rem;
			}
			.main .turntable .pointer img {
				width: 100%;
				height: 100%;
			}
			.main .turntable-bottom {
				position: relative;
				left: 0;
				top: -0.6rem;
				width: 100%;
				height: 5rem;
				margin: auto;
				z-index: 1;
			}
			.main .turntable-bottom img {
				width: 100%;
				height: 100%;
			}
			.main .rules {
				position: relative;
				left: 0;
				top: -0.6rem;
				width: 100%;
				height: auto;
			}
			.main .rules img {
				width: 5.46rem;
				height: 1.2rem;
				margin: auto;
			}
			.main .rulestext {
				width: 14rem;
				margin: auto;
				font-size: 0.7rem;
				line-height: 1.5;
				color: #BB7D36;
				font-family: "微软雅黑";
				/*text-indent: 2em;*/
				font-weight: 600;
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
				bottom: 1.14rem;
				left: 3.06rem;
				text-align: center;
				color: #d0483a;
				font-size: 0.7rem;
				font-weight: 600;
			}

			/* 转盘奖品 */
			.wheel-list {
				position: relative;
			}

			.wheel-item {
				position: absolute;
				z-index: 9999;
			}

			.wheel-item-1 {
				top: 17%;
				left: 52%;
				margin-top: -0.2rem;
				margin-left: -0.6rem;
			}

			.wheel-item-8 {
				top: 25%;
				left: 23%;
				transform:rotate(-45deg);
				-ms-transform:rotate(-45deg); 
				-webkit-transform:rotate(-45deg); 
			}

			.wheel-item-7 {
				top: 50%;
				left: 16%;
				margin-top: -0.2rem;
				margin-left: -0.2rem;
				transform:rotate(-90deg);
				-ms-transform:rotate(-90deg); 
				-webkit-transform:rotate(-90deg);
			}

			.wheel-item-6 {
				top: 76%;
				left: 25%;
				margin-top: -0.5rem;
				transform:rotate(-135deg);
				-ms-transform:rotate(-135deg); 
				-webkit-transform:rotate(-135deg);
			}

			.wheel-item-5 {
				top: 82%;
				left: 52%;
				margin-left: -0.5rem;
				margin-top: -0.2rem;
				transform:rotate(-180deg);
				-ms-transform:rotate(-180deg); 
				-webkit-transform:rotate(-180deg);
			}

			.wheel-item-4 {
				top: 75%;
				right: 23%;
				margin-top: -0.5rem;
				transform:rotate(135deg);
				-ms-transform:rotate(135deg); 
				-webkit-transform:rotate(135deg);
			}

			.wheel-item-3 {
				top: 51%;
				right: 12%;
				margin-top: -0.5rem;
				transform:rotate(90deg);
				-ms-transform:rotate(90deg); 
				-webkit-transform:rotate(90deg);
			}

			.wheel-item-2 {
				top: 24%;
				right: 24%;
				transform:rotate(45deg);
				-ms-transform:rotate(45deg); 
				-webkit-transform:rotate(45deg); 
			}

			.wheel-itext {
				/*text-align: center;*/
				max-width: 1.8rem;
			}

			.wheel-itext-num {
				display: none;
			}
		}
	}
</style>