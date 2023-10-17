<template>
	<chart-view ref="chartViewRef" class="chart-content" :chart-option="chartOpt" :auto-resize="true" height="500px" />
</template>
<script>
export default {
	name: "PieChart",
	data() {
		return {
			chartOpt: {},
		};
	},
	mounted() {
		// this.init();
	},
	created() {
		// this.chartOpt = this.$eChartFn.pieChart(
		//   [100, 23, 43, 65],
		//   ['#36CBCB', '#FAD337', '#F2637B', '#975FE4'],
		// );
		// this.chartOpt = this.$eChartFn.pieChart2();
		this.chartOpt = this.$eChartFn.pieChart4();
	},
	methods: {
		init() {
			const echartsRef = this.$refs.chartViewRef?.chart;
			this.chartOpt = this.$eChartFn.pieChart3(echartsRef);
		},
	},
	watch: {},
};
</script>
