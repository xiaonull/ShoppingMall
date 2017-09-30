<template>
	<section class="index">
		<router-view></router-view>
		<mt-tabbar v-model="selected">
			<mt-tab-item id="homeTab">
				<img slot="icon" src="~@/assets/logo.png">
				首页
			</mt-tab-item>
			<mt-tab-item id="classifyTab">
				<img slot="icon" src="~@/assets/logo.png">
				分类
			</mt-tab-item>
			<mt-tab-item id="cartTab">
				<img slot="icon" src="~@/assets/logo.png">
				购物车
			</mt-tab-item>
			<mt-tab-item id="meTab">
				<img slot="icon" src="~@/assets/logo.png">
				我的
			</mt-tab-item>
		</mt-tabbar>
	</section>
</template>

<script>
import Vue from 'vue';
	import { Tabbar, TabItem } from 'mint-ui';

	Vue.component(Tabbar.name, Tabbar);
	Vue.component(TabItem.name, TabItem);

	export default {
		name: 'index',
		data() {
			return {
				selected: 'homeTab'
			}
		}
	}

</script>