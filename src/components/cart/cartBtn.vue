<template>
	<section class="cartBtn">
		<span @click="change"><i class="fa" :class="{'fa-circle-o': checked_ === false, 'fa-check-circle': checked_}"></i></span>
	</section>
</template>

<script>
	export default {
		props: ['checked', 'origin'],
		data() {
			return {
				checked_ : false
			}
		},
		mounted() {
			if(this.checked === true || this.checked === false) {
				this.checked_ = this.checked;
			}
			// if(this.checked === 'false') {
			// 	this.checked_ = false;
			// }
		},
		updated() {
			if(this.checked === true || this.checked === false) {
				this.checked_ = this.checked;
			}
			// if(this.checked === 'false') {
			// 	this.checked_ = false;
			// }
		},
		watch: {
			checked: function(val) {
				// console.log(this.origin + ': ' + val);
				this.checked_ = val;
				// if(val === 'false') {
				// 	this.checked_ = false;
				// }
			}
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
			font-size: 0.9rem;
			color: #26a2ff;
		}
	}
</style>