<template>
	<section class="productListA">
		<el-row :gutter="3">
			<el-col :xs="12" :sm="12" :md="8" :lg="8">
				<productItemA :imgUrl="imgUrl" :name="name" :price="price"></productItemA>
			</el-col>
			<el-col :xs="12" :sm="12" :md="8" :lg="8">
				<productItemA :imgUrl="imgUrl" :name="name" :price="price"></productItemA>
			</el-col>
			<el-col :xs="12" :sm="12" :md="8" :lg="8">
				<productItemA :imgUrl="imgUrl" :name="name" :price="price"></productItemA>
			</el-col>
			<el-col :xs="12" :sm="12" :md="8" :lg="8">
				<productItemA :imgUrl="imgUrl" :name="name" :price="price"></productItemA>
			</el-col>
			<el-col :xs="12" :sm="12" :md="8" :lg="8">
				<productItemA :imgUrl="imgUrl" :name="name" :price="price"></productItemA>
			</el-col>
			<el-col :xs="12" :sm="12" :md="8" :lg="8">
				<productItemA :imgUrl="imgUrl" :name="name" :price="price"></productItemA>
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
				imgUrl: '~@/assets/004.jpg',
				name: 'testtesttesttesttesttesttesttesttesttesttesttest',
				price: '￥100'
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