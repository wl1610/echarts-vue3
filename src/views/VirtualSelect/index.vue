<template>
	<div class="main">
		<el-select popper-class="virtualSelect" v-model="value" placeholder="请选择" @visible-change="visibleVirtualoptions" filterable remote :remote-method="remoteMethod" clearable>
			<virtual-list
				ref="virtualList"
				style="max-height: 245px; overflow-y: auto"
				:data-key="'id'"
				:data-sources="list"
				:data-component="itemComponent"
				:keeps="20"
				:extra-props="{
					label: 'label',
					value: 'value',
				}"
			/>
		</el-select>
	</div>
</template>

<script>
// import VirtualList from "vue-virtual-scroll-list";
import OptionItem from "./option.vue";

export default {
	// components: { "virtual-list": VirtualList },
	data() {
		return {
			value: "",
			list: [],
			virtualoptions: [], // 在定义个存全量数据的数组
			itemComponent: OptionItem,
		};
	},

	created() {
		this.init();
	},
	methods: {
		init() {
			const data = [],
				root = 1000;
			for (let i = 0; i < root; i++) {
				data.push({
					id: `${i}`,
					value: `${i}`,
					label: `test-${i}`,
				});
			}
			this.list = data || [];
			this.virtualoptions = data || [];
		},
		remoteMethod(query) {
			if (query !== "") {
				this.list = this.virtualoptions.filter((item) => item.label.includes(query));
			} else {
				this.list = this.virtualoptions;
			}
		},
		visibleVirtualoptions(bool) {
			console.log(bool, "bool");
			if (!bool) {
				this.$refs.virtualList.reset();
				setTimeout(() => {
					this.list = this.virtualoptions;
				}, 200);
			}
		},
	},
	// watch: {
	//   searchValue(val) {
	//   },
	// },
};
</script>

<style lang="scss" scoped>
.main {
	display: flex;
	height: 100%;
	padding: 16px;
	background-color: #f5f5f9;
	.virtualSelect {
		::v-deep .el-scrollbar .el-scrollbar__bar.is-vertical {
			width: 0;
		}
	}
}
::v-deep.el-select-dropdown {
	width: 120px !important;
}
</style>
