<template>
	<section class="countBtnGroup">
		<span class="count-btn" @click="minus">-</span>
		<span class="count-btn counter">{{counter}}</span>
		<span class="count-btn" @click="plus">+</span>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				counter: 1
			}
		},
		methods: {
			plus() {
				this.counter++;
				this.$emit('plus');
			},
			minus() {
				if(this.counter > 1) {
					this.counter--;
					this.$emit('minus');
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.countBtnGroup {
		display: inline-block;
		font-size: 0;

		.count-btn {
			display: inline-block;
			width: 20px;
			height: 20px;
			text-align: center;
			line-height: 20px;
			border: 1px solid #D9D5D5;
			color: #26a2ff;
			font-size: 20px;
		}

		.counter {
			color: #000;
			border-left: none;
			border-right: none;
			width: 25px;
			font-size: 14px;
			position: relative;
			top: -3px;
		}
	}
</style>