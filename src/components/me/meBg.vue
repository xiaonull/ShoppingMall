<template>
	<section class="meBg">
		<div class="member-info">
			<div class="user-avatar "><img class="img" src="~@/assets/bgImg/headImg.jpg"></div>
			<div class="user-name"><span>SZY187TBNZ3959</span></div>
		</div>
		<div class="footer">
			<div class="left">
				<p class="money">0 元</p>
				<p class="text">账户余额</p>
			</div>
			<div class="right">
				<p class="redPacketNum">0</p>
				<p class="text">我的红包</p>
			</div>
		</div>
	</section>
</template>

<script>
	export default {

	}
</script>

<style scoped lang="less">
	.meBg {
		width: 100%;
		height: 100%;
		position: relative;
		background-image: url('~@/assets/bgImg/bg.png');
		background-size: cover;
		background-position: center center;

		.member-info {
			width: 300px;
			height: 150px;
			margin: -100px 0 0 -150px;
			position: absolute;
			z-index: 1;
			top: 50%;
			left: 50%;
			text-align: center;

			.user-avatar {
				background-color: #FFF;
				width: 100px;
				height: 100px;
				margin: 0 auto;
				border-radius: 100%;

				.img {
					width: 100%;
					height: 100%;
					border-radius: 100%;
				}
			}

			.user-name {
				color: #FFF;
				font-weight: lighter;
				font-size: 20px;
				line-height: 35px;
				height: 35px;
				position: relative;
				z-index: 1;
			}
		}

		.footer {
			position: absolute;
			bottom: 0;
			width: 100%;
			height: 3rem;
			background-color: rgba(0,0,0,0.1);
			font-size: 0;
			overflow: hidden;

			.left {
				display: inline-block;
				float: left;
				width: 50%;
				height: 100%;
				text-align: center;
				color: #fff;

				.money {
					font-size: 1rem;
					margin-top: 0.5rem;
				}

				.text {
					font-size: 0.6rem;
					margin-top: 0.5rem;
				}
			}

			.right {
				display: inline-block;
				float: left;
				width: 50%;
				height: 100%;
				text-align: center;
				color: #fff;

				.redPacketNum {
					font-size: 1rem;
					margin-top: 0.5rem;
				}

				.text {
					font-size: 0.6rem;
					margin-top: 0.5rem;
				}
			}
		}
	}
</style>