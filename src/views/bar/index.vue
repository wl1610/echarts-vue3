<template>
  <chart-view class="chart-content" :chart-option="chartOpt" :auto-resize="true" height="500px" />
</template>
<script>
  export default {
    name: 'BarChart',
    data() {
      return {
        chartOpt: {},
      };
    },
    mounted() {},
    created() {
      this.chartOpt = this.$eChartFn.barChart();
      // this.chartOpt = this.$eChartFn.barChart2();
    },
    methods: {},
    watch: {},
  };
</script>
