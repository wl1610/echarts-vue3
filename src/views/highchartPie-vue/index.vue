<template>
  <highcharts :options="chartOptions" class="pieChart" id="pieChart"></highcharts>
</template>
<script>
  import Highcharts from 'highcharts';
  import highcharts3d from 'highcharts/highcharts-3d';
  highcharts3d(Highcharts);
  export default {
    name: 'HighchartsPie3d',
    data() {
      return {
        option: {},
        myChart: null,
        optionData: [
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
        chartOptions: {
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
            text: '产品规模',
          },
          plotOptions: {
            pie: {
              innerSize: 100,
              depth: 45,
            },
          },
          colors: ['#0AADFF', '#EB3095', '#3371FF'],
          series: [
            {
              data: [
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
            },
          ],
          credits: {
            enabled: false, //不显示LOGO
          },
        },
      };
    },
    created() {},
    mounted() {},
    methods: {},
  };
</script>

<style scoped>
  .pieChart {
    width: 100%;
    height: 400px;
  }
</style>
