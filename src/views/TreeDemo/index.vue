<template>
	<div class="main">
		<div class="treeBox">
			<div class="treeBox-top">
				<el-input size="mini" v-model="searchValue" placeholder="输入关键字进行过滤" clearable></el-input>
			
				<el-button size="mini" icon="el-icon-collection-tag"></el-button>
			</div>
			<vue-easy-tree ref="treeRef" class="treeBox-tree" node-key="id" show-checkbox height="660px" :data="renderTreeData" :props="props" :default-checked-keys="checkedKeys" :filter-node-method="filterNode" @check="handleCheckedNodeKey" default-expand-all>
				<!-- :filter-node-method="filterNode" -->
				<div class="custom-tree-node" slot-scope="{ node, data }" :title="node.label">
					<i :class="data.children ? (node.expanded ? 'el-icon-folder-opened' : 'el-icon-folder') : 'el-icon-document'"></i>
					<span v-if="!searchValue">{{ node.label }}</span>
					<span v-if="searchValue" v-html="node.label.replace(new RegExp(searchValue, 'g'), `<font style='color:#26a8ff'>${searchValue}</font>`)"></span>
				</div>
			</vue-easy-tree>

			<div class="treeBox-bottom">
				<el-button size="mini" type="primary" @click="drawer = !drawer">批量提交预览</el-button>
				<el-tooltip effect="dark" content="已下线/测试中的表暂不支持申请，无法勾选" placement="top">
					<i class="el-icon-info"></i>
				</el-tooltip>
			</div>
		</div>
		<div class="rightBox">
			<div class="drawer">
				<el-drawer title="我是标题" :visible.sync="drawer" :with-header="false" direction="ltr" :modal-append-to-body="false" :modal="false">
					<span>我来啦!</span>
				</el-drawer>
			</div>
		</div>
	</div>
</template>

<script>
import { cloneDeep } from "lodash";
export default {
	data() {
		return {
			props: {
				label: "name",
				children: "children",
			},
			treeData: [],
			renderTreeData: [],
			checkedKeys: [],
			checkedNodes: [],
			searchValue: "",
			drawer: false,
		};
	},
	components: {},
	created() {
		this.init();
	},
	methods: {
		init() {
			const data = [],
				root = 8,
				children = 3,
				base = 1000;
			for (let i = 0; i < root; i++) {
				data.push({
					id: `${i}`,
					name: `test-${i}`,
					children: [],
				});
				for (let j = 0; j < children; j++) {
					data[i].children.push({
						id: `${i}-${j}`,
						name: `test-${i}-${j}`,
						children: [],
					});
					for (let k = 0; k < base; k++) {
						data[i].children[j].children.push({
							id: `${i}-${j}-${k}`,
							name: `test-${i}-${j}-${k}`,
						});
					}
				}
			}

			const res = {
				status: 200,
				bizCode: "DM-200-00000",
				message: "数据返回正常",
				data: [
					{
						id: "1_1",
						guid: "1",
						name: "内部数据",
						enName: null,
						description: "casldk阿斯顿拉上来的casldk阿斯顿拉上来的casldk阿斯顿拉上来的casldk阿斯顿拉上来的casldk阿斯顿拉上来的casldk阿斯顿拉上来的casldk阿斯顿拉上来的casldk阿斯顿拉上来的casldk阿斯顿拉上来的casldk阿斯顿拉上来的casldk阿斯顿拉上来的casldk阿斯顿拉上来的casldk阿斯顿拉上来的casldk阿斯顿拉上来的casldk阿斯顿拉上来的casld",
						type: "Catalog",
						disabled: true,
						children: [
							{
								id: "3_3",
								guid: "3",
								name: "产品主数据",
								enName: null,
								description: "描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字文字描述文字描述文字描述文字描述文字文字描述文字描述文字描述文字描述文字文字描述文字描述文字描述文字描述文字文字描述文字描述文字描述文字描述文字文字描述文字描述文字描述文字描述文字文字描述文字描述文字描述文字描述文字文字描述文字描述文字描述文字描述文字文字描述文字描述文字描述文字描述文字",
								type: "Catalog",
								disabled: true,
								children: [
									{
										id: "51_51",
										guid: "51",
										name: "测试根节点1",
										enName: null,
										description: null,
										type: "Catalog",
										children: null,
										status: 0,
									},
									{
										id: "63_63",
										guid: "63",
										name: "ceshi",
										enName: null,
										description: null,
										type: "Catalog",
										children: [
											{
												id: "81_81",
												guid: "81",
												name: "11",
												enName: null,
												description: "11",
												type: "Catalog",
												children: null,
												status: 0,
											},
										],
										status: 0,
									},
									{
										id: "64_64",
										guid: "64",
										name: "test",
										enName: null,
										description: null,
										type: "Catalog",
										children: null,
										status: 0,
									},
									{
										id: "65_65",
										guid: "65",
										name: "test1",
										enName: null,
										description: null,
										type: "Catalog",
										children: null,
										status: 0,
									},
									{
										id: "66_66",
										guid: "66",
										name: "test2",
										enName: null,
										description: null,
										type: "Catalog",
										children: null,
										status: 0,
									},
									{
										id: "67_67",
										guid: "67",
										name: "test3",
										enName: null,
										description: null,
										type: "Catalog",
										children: null,
										status: 0,
									},
									{
										id: "68_68",
										guid: "68",
										name: "test4",
										enName: null,
										description: null,
										type: "Catalog",
										children: null,
										status: 0,
									},
									{
										id: "74_74",
										guid: "74",
										name: "test20221214",
										enName: null,
										description: null,
										type: "Catalog",
										children: null,
										status: 0,
									},
									{
										id: "75_75",
										guid: "75",
										name: "test23",
										enName: null,
										description: null,
										type: "Catalog",
										children: null,
										status: 0,
									},
									{
										id: "86_86",
										guid: "86",
										name: "yh测试",
										enName: null,
										description: null,
										type: "Catalog",
										children: null,
										status: 0,
									},
								],
								status: 0,
							},
							{
								id: "4_4",
								guid: "4",
								name: "机构主数据",
								enName: null,
								description: "描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字",
								type: "Catalog",
								children: [
									{
										id: "5_5",
										guid: "5",
										name: "产品1",
										enName: "product1",
										description: null,
										type: "Catalog",
										children: null,
										status: 0,
									},
									{
										id: "61_61",
										guid: "61",
										name: "测试test",
										enName: null,
										description: null,
										type: "Catalog",
										children: [
											{
												id: "94_94",
												guid: "94",
												name: "test0530",
												enName: null,
												description: "测试对方水电费第三方第三方电风扇辅导费的范德萨范德萨范德萨地方递四方速递佛挡杀佛第三方第三方第三方的发的事实上事实上事实上是撒是撒是撒是撒是撒是撒的范德萨范德萨范德萨放大说法大幅度GV电饭锅电饭锅代发广发的更大方刚丰东股份的点点滴滴哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒多大懂法守法第三方第三方的算法的算法的算法的算法的算法打撒地方第三方水电费第三方的是",
												type: "Catalog",
												children: null,
												status: 0,
											},
										],
										status: 0,
									},
								],
								status: 0,
							},
							{
								id: "26_26",
								guid: "26",
								name: "账户主数据",
								enName: null,
								description: "描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字",
								type: "Catalog",
								children: null,
								status: 0,
							},
							{
								id: "82_82",
								guid: "82",
								name: "公共主数据",
								enName: null,
								description: "描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字",
								type: "Catalog",
								children: null,
								status: 0,
							},
							{
								id: "83_83",
								guid: "83",
								name: "组合主数据",
								enName: null,
								description: "描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字",
								type: "Catalog",
								children: null,
								status: 0,
							},
							{
								id: "84_84",
								guid: "84",
								name: "客户主数据",
								enName: null,
								description: "描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字",
								type: "Catalog",
								children: null,
								status: 0,
							},
						],
						status: 0,
					},
					{
						id: "2_2",
						guid: "2",
						name: "外部数据",
						enName: null,
						description: "sssssssssssssssss",
						type: "Catalog",
						children: [
							{
								id: "23_23",
								guid: "23",
								name: "万得",
								enName: null,
								description: "万得描述信息万得描述信息万得描述信息万得描述信息万得描述信息万得描述信息万得描述信息",
								type: "Catalog",
								children: null,
								status: 0,
							},
						],
						status: 0,
					},
					{
						id: "87_87",
						guid: "87",
						name: "数据建模数据",
						enName: null,
						description: null,
						type: "Catalog",
						children: [
							{
								id: "88_88",
								guid: "88",
								name: "数据建模二级",
								enName: null,
								description: null,
								type: "Catalog",
								children: null,
								status: 0,
							},
						],
						status: 0,
					},
				],
			};
			this.treeData = [
				{
					id: "000",
					name: "所有节点",
					children: data,
				},
			];
			this.renderTreeData = [
				{
					id: "000",
					name: "所有节点",
					children: data,
				},
			];
		},
		filterNode(value, data) {
			if (!value) return true;
			return data.name.indexOf(value) !== -1;
		},
		findRecord(treeData, key, value, eq = false, notIncluded = true) {
			const arr = [];
			for (const node of treeData) {
				let flag = false;
				const val = node[key];
				if (Array.isArray(value)) {
					if (eq) {
						if (val && value.includes(val)) {
							flag = true;
						}
						if (!notIncluded && val && !value.includes(val)) {
							flag = true;
						} else if (!notIncluded) {
							flag = false;
						}
					} else {
						if (val && value.findIndex((item) => item.indexOf(val) > -1) > 0) {
							flag = true;
						}
						if (!notIncluded && val && value.findIndex((item) => item.indexOf(val) === -1) > 0) {
							flag = true;
						} else if (!notIncluded) {
							flag = false;
						}
					}
				} else {
					if (eq) {
						if (val && val === value) {
							flag = true;
						}
						if (!notIncluded && val && val !== value) {
							flag = true;
						} else if (!notIncluded) {
							flag = false;
						}
					} else {
						if (val && val.indexOf(value) > -1) {
							flag = true;
						}
						if (!notIncluded && val && val.indexOf(value) === -1) {
							flag = true;
						} else if (!notIncluded) {
							flag = false;
						}
					}
				}
				if (flag) {
					arr.push(node);
				} else if (node.children && node.children.length) {
					const subArr = this.findRecord(node.children, key, value, eq, notIncluded);
					if (subArr && subArr.length > 0) {
						node.children = subArr;
						arr.push(node);
					}
				}
			}
			return arr;
		},
		handleCheckedNodeKey(data, checkedData) {
			const { checkedKeys, checkedNodes } = checkedData || {};
			this.checkedKeys = checkedKeys || [];
			this.checkedNodes = checkedNodes || [];
		},

		handleNodeClick(node, data) {
			console.log(node, "node");
			console.log(data, "data");
		},
		changeSplitBlock(left, right) {
			console.log(left, "left");
			console.log(right, "right");
		},
	},
	watch: {
		searchValue(val) {
			this.$refs.treeRef.filter(val);
			// console.log(val, 'val--777');
			// const newTree = this.findRecord(cloneDeep(this.treeData), 'name', val);
			// console.log(newTree, 'newTree');
			// this.renderTreeData = newTree;
		},
	},
};
</script>

<style lang="scss" scoped>
.main {
	display: flex;
	height: 100%;
	padding: 16px;
	background-color: #f5f5f9;

	.treeBox {
		width: 100%;
		height: 100%;
		padding: 16px;
		background-color: #fff;

		&-top {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;

			button {
				margin: 0 8px;
			}
		}
		&-bottom {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;

			i {
				color: #5cb6ff;
				margin: 0 8px;
			}

			button {
				width: 100%;
			}
		}

		&-tree {
			.custom-tree-node {
				width: 100%;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				display: block;

				> i {
					margin-right: 4px;
				}
			}
			::v-deep .el-tree-node.is-current {
				background-color: rgb(229, 245, 255);
				&:hover {
					background-color: rgb(229, 245, 255);
				}

				.custom-tree-node > span {
					color: "#26a8ff";
				}
			}
		}
	}

	.rightBox {
		position: relative;
		overflow: hidden;
		flex: 1;
		height: 100%;
		background-color: #fff;

		.drawer {
			::v-deep .el-drawer__wrapper {
				position: absolute;
			}
		}
	}
}

::v-deep .divider {
	position: relative;
	border: none !important;
	width: 4px !important;
	background: #f5f5f9 !important;
	box-sizing: border-box !important;
	cursor: ew-resize !important;

	&:hover {
		background-color: #f5f5f9 !important;
	}
}

::v-deep .folding-content {
	top: 5% !important;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 16px !important;
	height: 44px;
	background: rgb(255, 255, 255);
	box-shadow: rgba(0, 0, 0, 0.2) 4px 2px 8px -2px;
	border-radius: 0px 3px 3px 0px;
	z-index: 1;
	cursor: pointer;

	.folding-icon:before {
		font-size: 14px;
		color: #3b3b3b;
	}
}
</style>
