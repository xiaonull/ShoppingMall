<template>
	<section class="me">
		<div class="header">
			<me-bg></me-bg>
		</div>
	</section>
</template>

<script>
	import MeBg from '@/components/me/meBg.vue';
	export default {
		components: {
			MeBg
		}
	}
</script>

<style scoped lang="less">
	.me {
		.header {
			height: 10rem;
		}
	}
</style>