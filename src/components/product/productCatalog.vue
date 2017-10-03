<template>
	<section class="productCatalog">
		<ul class="list">
			<li class="item" :class="{first: index === 0, active: index === currentCatalog}" v-for="(item, index) in testData" @click="changeCatalog(index)">
				{{item.text+index}}
			</li>
		</ul>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				testData: [{
					text: '水果蔬菜',
					id: 0
				},{
					text: '水果蔬菜',
					id: 1
				},{
					text: '水果蔬菜',
					id: 2
				},{
					text: '水果蔬菜',
					id: 3
				},{
					text: '水果蔬菜',
					id: 4
				},{
					text: '水果蔬菜',
					id: 5
				},{
					text: '水果蔬菜',
					id: 6
				}],
				currentCatalog: 0
			}
		},
		methods: {
			changeCatalog(index) {
				this.currentCatalog = index;
			}
		}
	}
</script>

<style scoped lang="less">
	.productCatalog {

		.list {
			font-size: 0.6rem;
			width: 4rem;
			border-right: 2px solid #26a2ff;

			.first {
				
			}

			.item {
				display: inline-block;
				width: 4rem;
				height: 2rem;
				line-height: 2rem;
				text-align: center;
				border-bottom: 1px solid #E8E6E6;
			}

			.active:before {
				content: '';
				float: left;
				display: inline-block;
				width: 2px;
				height: 2rem;
				background-color: #26a2ff;
			}

			.active {
				color: #26a2ff;
			}

			.active:after {
				content: '';
				float: right;
				display: inline-block;
				width: 2px;
				height: 2rem;
				background-color: #fff;
				position: relative;
				left: 2px;
			}
		}
	}
</style>