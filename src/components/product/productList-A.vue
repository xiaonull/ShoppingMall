<template>
	<section class="productListA">
		<el-row :gutter="3">
			<el-col :xs="12" :sm="12" :md="8" :lg="8" v-for="item in items" :key="item.id">
				<productItemA :imgUrl="item.imgUrl" :name="item.name" :price="item.price" :id="item.id"></productItemA>
			</el-col>
		</el-row>
	</section>
</template>

<script>
	import productItemA from '@/components/product/productItem-A.vue'
	import Vue from 'vue'
	import { Row, Col } from 'element-ui'

	Vue.use(Row)
	Vue.use(Col)

	export default {
		props: ['items'],
		data() {
			return {
			}
		},
		components: {
			productItemA
		}
	}
</script>

<style scoped lang="less">
	.productListA {
		overflow-x: hidden;
	}
</style>