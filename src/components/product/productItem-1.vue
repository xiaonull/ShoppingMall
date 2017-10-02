<template>
	<section class="productItem-1">
		<div class="imgContainer">
			<img class="img response_img" src="~@/assets/004.jpg">
		</div>
		<div class="info">
			<span class="name">name</span>
			<span class="price">￥100</span>
		</div>
	</section>
</template>

<script>
	export default {
		props: ['imgUrl', 'name', 'price'],
		data() {
			return {

			}
		}
	}
</script>