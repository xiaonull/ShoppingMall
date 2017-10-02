<template>
	<el-row :gutter="0">
		<el-col :xs="6" :sm="6" :md="4" :lg="4" v-for="item in items">
			
		</el-col>
		<!-- <el-col :xs="6" :sm="6" :md="4" :lg="4"></el-col>
		<el-col :xs="6" :sm="6" :md="4" :lg="4"></el-col>
		<el-col :xs="6" :sm="6" :md="4" :lg="4"></el-col>
		<el-col :xs="6" :sm="6" :md="4" :lg="4"></el-col>
		<el-col :xs="6" :sm="6" :md="4" :lg="4"></el-col> -->
	</el-row>
</template>

<script>
	import productItemA from '@/components/product/productItem-1.vue'
	import { Button, Select } from 'element-ui'

	export default {
		props: ['items'],
		components: {
			productItemA
		}
	}
</script>