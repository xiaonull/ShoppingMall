<template>
	<section class="countBtnGroup">
		<span class="count-btn">-</span>
		<span class="count-btn counter">{{counter}}</span>
		<span class="count-btn">+</span>
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
				if(this.counter > 0) {
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

		.count-btn {
			display: inline-block;
			width: 20px;
			height: 20px;
			text-align: center;
			line-height: 20px;
			border: 1px solid #D9D5D5;
			color: #26a2ff;
		}

		.counter {
			color: #000;
		}
	}
</style>