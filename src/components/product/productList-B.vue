<template>
	<section class="productListA">
		<el-row :gutter="3">
			<el-col :xs="12" :sm="12" :md="8" :lg="8" v-for="item in items" :key="item.id">
				<productItemB :imgUrl="item.img" :name="item.text" :id="item.id" @loadLevelThreeProduct="loadLevelThreeProduct"></productItemB>
			</el-col>
		</el-row>
	</section>
</template>

<script>
	import productItemB from '@/components/product/productItem-B.vue'
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
			productItemB
		},
		methods: {
			loadLevelThreeProduct(data) {
				console.log('loadLevelThreeProduct:' + data);
				this.$emit('loadLevelThreeProduct', data);
			}
		}
	}
</script>

<style scoped lang="less">
	.productListA {
		overflow-x: hidden;
	}
</style>