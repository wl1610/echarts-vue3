<template>
	<div class="main">
		<div class="treeBox">
			<el-input size="mini" v-model="searchValue" placeholder="输入关键字进行过滤" clearable></el-input>
			<vue-easy-tree ref="veTree" node-key="id" show-checkbox height="720px" :data="renderTreeData" :props="props" :default-checked-keys="checkedKeys" :filter-node-method="filterNode" @check="handleCheckedNodeKey" default-expand-all>
				<!-- :filter-node-method="filterNode" -->
				<div class="custom-tree-node" slot-scope="{ node, data }">
					<span class="custom-tree-node-menuName">
						<i :class="data.children ? 'el-icon-folder-opened' : 'el-icon-document'"></i>
						<span v-if="!searchValue">{{ node.label }}</span>
						<span v-if="searchValue" v-html="node.label.replace(new RegExp(searchValue, 'g'), `<font style='color:#26a8ff'>${searchValue}</font>`)"></span>
					</span>
				</div>
			</vue-easy-tree>
		</div>
		<div class="tagBox"></div>
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
						children: [
							{
								id: "3_3",
								guid: "3",
								name: "产品主数据",
								enName: null,
								description: "描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字文字描述文字描述文字描述文字描述文字文字描述文字描述文字描述文字描述文字文字描述文字描述文字描述文字描述文字文字描述文字描述文字描述文字描述文字文字描述文字描述文字描述文字描述文字文字描述文字描述文字描述文字描述文字文字描述文字描述文字描述文字描述文字文字描述文字描述文字描述文字描述文字",
								type: "Catalog",
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
			this.treeData = res?.data;
			this.renderTreeData = res?.data;
		},
		filterNode(value, data, node) {
			console.log(value, "value");
			console.log(data, "data");
			console.log(node, "node");

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
			console.log(checkedData, "checkedData");
			this.checkedKeys = checkedKeys || [];
			this.checkedNodes = checkedNodes || [];
			// this.$refs.tree.setCheckedKeys([3]);
		},
	},
	watch: {
		searchValue(val) {
			this.$refs.veTree.filter(val);
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
	background-color: #ddd;

	.treeBox {
		width: 300px;
		height: 100%;
		padding: 16px;
		background-color: #fff;
		.tree {
			height: 100%;

			.custom-tree-node {
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: calc(100% - 24px);

				&-tool {
					position: relative;
					visibility: hidden;
				}
				&:hover {
					.custom-tree-node-tool {
						visibility: visible;
					}
				}
				&-menuName {
					display: flex;
					align-items: center;
					width: 80%;
					> i {
						margin-right: 8px;
					}
				}
				&-routePath {
					display: inline-block;
					min-width: 45%;
					margin-left: 8px;
					color: #c0c4cc;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.search-value {
					color: rgb(38, 168, 255);
				}
			}
		}
	}

	.tagBox {
		flex: 1;
		height: 100%;
		background-color: #fff;
	}
}
</style>
