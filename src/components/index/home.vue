<template>
	<section class="home">
		<div class="swipe">
			<mt-swipe :auto="4000">
				<mt-swipe-item>1</mt-swipe-item>
				<mt-swipe-item>2</mt-swipe-item>
				<mt-swipe-item>3</mt-swipe-item>
			</mt-swipe>
		</div>
	</section>
</template>

<script>
	import Vue from 'vue';
	import { Swipe, SwipeItem } from 'mint-ui';
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);

	export default {

	}

</script>

<style scoped lang="less">
	.home {
		width: 100%;
		height: 100%;

		.swipe {
			height: 200px;
			background-color: #D6D0D0;
			text-align: center;
		}
	}

</style>