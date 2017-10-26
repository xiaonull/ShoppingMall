<template>
	<section class="salesman">
		<mt-header fixed title="业务员中心"></mt-header>
		<router-view></router-view>
		<mt-tabbar v-model="selected" :fixed="fixed">
			<mt-tab-item id="codeTab" class="tab" @click.native="changePage('codeTab')">
				<i class="fa fa-camera fa-xx"></i>
				二维码
			</mt-tab-item>
			<mt-tab-item id="bindWeChatTab" class="tab" @click.native="changePage('bindWeChatTab')">
				<i class="fa fa-wechat fa-1x"></i>
				绑定微信
			</mt-tab-item>
			<mt-tab-item id="myDevelopmentTab" class="tab" @click.native="changePage('myDevelopmentTab')">
				<i class="fa fa-home fa-1x"></i>
				我的开发
			</mt-tab-item>
			<mt-tab-item id="nearbyShopsTab" class="tab" @click.native="changePage('nearbyShopsTab')">
				<i class="fa fa-wifi fa-xx"></i>
				附近的门店
			</mt-tab-item>
		</mt-tabbar>
	</section>
</template>

<script>
	import Vue from 'vue';
	import { Tabbar, TabItem, Header } from 'mint-ui';
	
	Vue.component(Header.name, Header);
	Vue.component(Tabbar.name, Tabbar);
	Vue.component(TabItem.name, TabItem);

	export default {
		name: 'index',
		data() {
			return {
				selected: '',
				fixed: true
			}
		},
		mounted() {
			let path = this.$route.path;
			if(path === '/salesman/code') {
				this.selected = 'codeTab';
			}else if(path === '/salesman/bindWeChat') {
				this.selected = 'bindWeChatTab';
			}else if(path === '/salesman/nearbyShops') {
				this.selected = 'nearbyShopsTab';
			}else if(path === '/salesman/myDevelopment') {
				this.selected = 'myDevelopmentTab';
			}
		},
		methods: {
			changePage(index) {
				if(index === 'codeTab') {
					this.$router.push('/salesman/code');
				}else if(index === 'bindWeChatTab') {
					this.$router.push('/salesman/bindWeChat');
				}else if(index === 'nearbyShopsTab') {
					this.$router.push('/salesman/nearbyShops');
				}else if(index === 'myDevelopmentTab') {
					this.$router.push('/salesman/myDevelopment');
				}
			}
		}
		
	}
</script>

<style scoped lang="less">
	.salesman {
		/* padding-bottom: 3rem; */
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #fff;

		.mint-tabbar {
			height: 2.3rem;
			background-color: #fff;
			border-top: 1px solid #E6E2E2;

			a {
				color: #757171;
			}

			.mint-tab-item.is-selected {
				background-color: #fff;
				color: #26a2ff;
			}
		}

		.tab {
			i.fa {
				display: block;
				margin-bottom: 0.2rem;
			}

			i.fa-xx {
				font-size: 1rem;
			}

			i.fa-1x {
				font-size: 1.1rem;
				margin-top: -0.1rem;
			}

			i.fa-cubes, i.fa-user-o {
				font-size: 0.8rem;
				margin-top: 0.1rem;
				margin-bottom: 0.3rem;
			}

		}
	}
</style>