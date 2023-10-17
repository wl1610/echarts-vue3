<template>
  <chart-view
    ref="chartViewRef"
    class="chart-content"
    :chart-option="chartOpt"
    :auto-resize="true"
    height="500px"
  />
</template>
<script>
  export default {
    name: 'Pie3DChart',
    data() {
      return {
        chartOpt: {},
      };
    },
    mounted() {
      // this.init();
    },
    created() {
      let color = ['#36CBCB', '#FAD337', '#F2637B', '#975FE4'];
      let pie3dData = [
        {
          name: '长期限分红类产品',
          value: 1600.0,
          itemStyle: {
            opacity: 1,
            color: '#0AADFF',
          },
        },
        {
          name: '流动性管理类产品',
          value: 340.0,
          itemStyle: {
            opacity: 1,
            color: '#EB3095',
          },
        },
        {
          name: '投资增值类产品',
          value: 123.0,
          itemStyle: {
            opacity: 1,
            color: '#3371FF',
          },
        },
      ];
      this.chartOpt = this.$eChartFn.pie3dChart(pie3dData, 2, 240, 28, 16, 1, color);
    },
    methods: {
      init() {
        const echartsRef = this.$refs.chartViewRef?.chart;
        this.chartOpt = this.$eChartFn.pie3dChart(echartsRef);
      },
    },
    watch: {},
  };
</script>
