<template>
	<section class="productListC">
		<product-item-c v-for="item in items" :key="item.id" :item="item"></product-item-c>
	</section>
</template>

<script>
	import ProductItemC from '@/components/product/productItem-C.vue';
	
	export default {
		props: ['items'],
		components: {
			ProductItemC
		}
	}
</script>



