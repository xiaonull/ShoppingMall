<template>
	<section class="cartBtn">
		<span @click="change"><i class="fa" :class="{'fa-circle-o': checked_ === false, 'check-circle': checked_}"></i></span>
	</section>
</template>

<script>
	export default {
		props: ['checked'],
		data() {
			return {
				checked_ : false
			}
		},
		create() {
			this.checked_ = this.checked;
		},
		methods: {
			change() {
				this.checked_ = !this.checked_;
				this.$emit('change');
			}
		}
	}
</script>

<style scoped lang="less">
	.cartBtn {
		display: inline-block;

		.fa {
			font-size: 10px;
			color: #26a2ff;
		}
	}
</style>