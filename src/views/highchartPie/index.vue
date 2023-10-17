<template>
  <!-- 等高 -->
  <!-- <highcharts :options="chartOptions" class="pieChart" id="pieChart"></highcharts> -->
  <!-- 不等高 -->
  <div id="pieChart" ref="pieChartRef" style="width: 100%; height: 500px"></div>
</template>
<script>
  import * as Highcharts from 'highcharts';
  import highcharts3d from 'highcharts/highcharts-3d';
  highcharts3d(Highcharts);

  export default {
    name: 'HighChart3D',
    data() {
      return {
        pie3dData: [
          {
            name: '长期限分红类产品',
            y: 160.0,
            h: 90,
            itemStyle: {
              opacity: 1,
              color: '#0AADFF',
            },
          },
          {
            name: '流动性管理类产品',
            y: 140.0,
            h: 58,
            itemStyle: {
              opacity: 1,
              color: '#EB3095',
            },
          },
          {
            name: '投资增值类产品',
            y: 123.0,
            h: 30,
            itemStyle: {
              opacity: 1,
              color: '#3371FF',
            },
          },
        ],
        chartOptions: {},
      };
    },
    mounted() {
      //不等高： 方式一
      this.initPie3D('pieChart');

      //不等高： 方式二
      // this.initPie3D2(this.$refs.pieChartRef);
    },
    created() {
      let colors = ['#36CBCB', '#FAD337', '#F2637B', '#975FE4'];
      //等高 方式一：
      // this.chartOptions = this.init(this.pie3dData, colors);
      //等高 方式二：
      // this.chartOptions = this.$highChartFn.pie3dHighchart(this.pie3dData, colors);
    },
    methods: {
      init(pie3dData, colors) {
        let option = {
          chart: {
            type: 'pie',
            options3d: {
              enabled: true,
              alpha: 45,
              // beta: 15,
              // depth: 50,
              // viewDistance: 25,
            },
          },
          title: {
            text: '产品规模- 环图等高',
          },
          plotOptions: {
            pie: {
              innerSize: 100,
              depth: 45,
            },
          },
          colors: color || ['#0AADFF', '#EB3095', '#3371FF'],
          series: [
            {
              data: pie3dData,
            },
          ],
          credits: {
            enabled: false, //不显示LOGO
          },
        };
        return option;
      },
      initPie3D(chartId, colors) {
        let each = Highcharts.each,
          round = Math.round,
          cos = Math.cos,
          sin = Math.sin,
          deg2rad = Math.deg2rad;
        Highcharts.wrap(Highcharts.seriesTypes.pie.prototype, 'translate', function (proceed) {
          proceed.apply(this, [].slice.call(arguments, 1));
          // Do not do this if the chart is not 3D
          if (!this.chart.is3d()) {
            return;
          }
          let series = this,
            chart = series.chart,
            options = chart.options,
            seriesOptions = series.options,
            depth = seriesOptions.depth || 0,
            options3d = options.chart.options3d,
            alpha = options3d.alpha,
            beta = options3d.beta,
            z = seriesOptions.stacking ? (seriesOptions.stack || 0) * depth : series._i * depth;
          z += depth / 2;
          if (seriesOptions.grouping !== false) {
            z = 0;
          }
          each(series.data, function (point) {
            let shapeArgs = point.shapeArgs,
              angle;
            point.shapeType = 'arc3d';
            let ran = point.options.h;
            shapeArgs.z = z;
            shapeArgs.depth = depth * 0.75 + ran;
            shapeArgs.alpha = alpha;
            shapeArgs.beta = beta;
            shapeArgs.center = series.center;
            shapeArgs.ran = ran;
            angle = (shapeArgs.end + shapeArgs.start) / 2;
            point.slicedTranslation = {
              translateX: round(cos(angle) * seriesOptions.slicedOffset * cos(alpha * deg2rad)),
              translateY: round(sin(angle) * seriesOptions.slicedOffset * cos(alpha * deg2rad)),
            };
          });
        });

        (function (H) {
          H.wrap(Highcharts.SVGRenderer.prototype, 'arc3dPath', function (proceed) {
            // Run original proceed method
            let ret = proceed.apply(this, [].slice.call(arguments, 1));
            ret.zTop = (ret.zOut + 0.5) / 100;
            return ret;
          });
        })(Highcharts);

        let option = this.$highChartFn.pie3dHighchart3(colors);
        Highcharts.chart(chartId, option);
      },
      initMultipleDepth() {
        let H = Object.assign({}, Highcharts);
        let each = H.each,
          round = Math.round,
          cos = Math.cos,
          sin = Math.sin,
          deg2rad = Math.deg2rad;
        H.wrap(H.seriesTypes.pie.prototype, 'translate', function (proceed) {
          proceed.apply(this, [].slice.call(arguments, 1));
          if (!this?.chart?.is3d()) {
            return;
          }
          let series = this,
            chart = series.chart,
            options = chart.options,
            seriesOptions = series.options,
            depth = seriesOptions.depth || 0,
            options3d = options.chart.options3d,
            alpha = options3d.alpha,
            beta = options3d.beta,
            z = seriesOptions.stacking ? (seriesOptions.stack || 0) * depth : series._i * depth;
          z += depth / 2;
          if (seriesOptions.grouping !== false) {
            z = 0;
          }
          each(series.data, (point) => {
            let shapeArgs = point.shapeArgs,
              angle;
            point.shapeType = 'arc3d';
            let ran = point.options.h;
            shapeArgs.z = z;
            shapeArgs.depth = depth * 0.75 + ran;
            shapeArgs.alpha = alpha;
            shapeArgs.beta = beta;
            shapeArgs.center = series.center;
            shapeArgs.ran = ran;
            angle = (shapeArgs.end + shapeArgs.start) / 2;
            point.slicedTranslation = {
              translateX: round(cos(angle) * seriesOptions.slicedOffset * cos(alpha * deg2rad)),
              translateY: round(sin(angle) * seriesOptions.slicedOffset * cos(alpha * deg2rad)),
            };
          });
        });

        H.wrap(H.SVGRenderer.prototype, 'arc3dPath', function (proceed) {
          let ret = proceed.apply(this, [].slice.call(arguments, 1));
          ret.zTop = (ret.zOut + 1) / 100;
          return ret;
        });
      },
      initPie3D2(chartId) {
        this.initMultipleDepth();

        // 获取配置参数
        let option = this.$highChartFn.pie3dHighchart3();

        Highcharts.chart(chartId, option);
      },
    },
    watch: {},
  };
</script>
