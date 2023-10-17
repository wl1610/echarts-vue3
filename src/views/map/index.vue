<template>
  <chart-view class="chart-content" :chart-option="chartOpt" :auto-resize="true" height="800px" />
</template>
<script>
  export default {
    name: 'chartTestView',
    data() {
      return {
        chartOpt: {},
      };
    },
    mounted() {},
    created() {
      // this.chartOpt = this.$eChartFn.chinaMapChart();
      this.chartOpt = this.$eChartFn.chinaMapChart5();
    },
    methods: {},
    watch: {},
  };
</script>
