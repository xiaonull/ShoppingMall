<template>
	<section class="code">
		<div class="imgContainer">
			<img :src="imgUrl" class="img" title="门店注册二维码">
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				imgUrl: ''
			}
		}
	}
</script>

<style scoped lang="less">
	.code {
		margin-top: 50px;
		text-align: center;

		.imgContainer {
			display: inline-block;
			width: 8rem;
			height: 8rem;
			margin-top: 5rem;

			.img {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>