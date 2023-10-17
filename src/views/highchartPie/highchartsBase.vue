<template>
  <div class="container" id="container">
    <div :id="id" :option="option" class="echart-container"></div>
  </div>
</template>
<script>
  import HighCharts from 'highcharts';
  export default {
    props: {
      // id用于区分多处复用highcharts文件
      id: {
        type: String,
      },
      //option 是图表的配置数据
      option: {
        type: Object,
      },
    },
    data() {
      return {
        charts: null,
      };
    },
    mounted() {
      // 页面加载完成之后再渲染图表
      this.setOption();
    },
    methods: {
      setOption() {
        if (this.charts) {
          this.charts.destroy();
        }
        this.charts = HighCharts.chart(this.id, this.option);
        this.charts.reflow();
      },
    },
  };
</script>

<style lang="scss" scoped>
  /* 容器 */
  ::v-deep.container {
    width: 100%;
    height: 100%;
    .echart-container {
      width: 100%;
      height: 100%;
    }
    // 去除水印
    .highcharts-credits {
      display: none;
    }
  }
</style>
