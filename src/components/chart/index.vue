<template>
  <div class="chart">
    <div ref="chartRef" :style="{ width, height }"></div>
  </div>
</template>
<script>
  import * as echarts from 'echarts';

  export default {
    name: 'ChartView',
    props: {
      width: {
        type: String,
        default: '100%',
      },
      height: {
        type: String,
        default: '100%',
      },
      autoResize: {
        type: Boolean,
        default: true,
      },
      chartOption: {
        type: Object,
        required: true,
      },
      type: {
        type: String,
        default: 'canvas',
      },
    },
    data() {
      return {
        chart: null,
      };
    },
    methods: {
      initChart() {
        this.chart = echarts.init(this.$refs.chartRef, '', {
          renderer: this.type,
        });
        this.chart.setOption(this.chartOption);
        this.chart.on('click', this.handleClick);
      },
      resizeHandler() {
        this.chart.resize();
      },
      setOptions(option) {
        this.clearChart();
        this.resizeHandler();
        if (this.chart) {
          this.chart.setOption(option);
        }
      },
      refresh() {
        this.setOptions(this.chartOption);
      },
      clearChart() {
        this.chart && this.chart.clear();
      },
      handleClick(params) {
        this.$emit('click', params);
      },
    },
    watch: {
      chartOption: {
        deep: true,
        handler(newValue) {
          this.setOptions(newValue);
        },
      },
    },
    mounted() {
      this.initChart();
      if (this.autoResize) {
        window.addEventListener('resize', this.resizeHandler);
      }
    },
    beforeDestroy() {
      if (!this.chart) {
        return;
      }
      if (this.autoResize) {
        window.removeEventListener('resize', this.resizeHandler);
      }
      this.chart.dispose();
      this.chart = null;
    },
  };
</script>
<style lang="scss" scoped></style>
