import './assets/main.css'

import { createApp } from 'vue'
import router from './router';
import App from './App.vue';

import HighchartsVue from 'highcharts-vue';
import * as echarts from 'echarts';
import 'echarts-gl';
import chinaGeo from '@/components/chart/options/map/china.geo';
// import chinaProvinceGeo from '@/components/chart/options/map/province/index';

import eChartFn from '@/components/chart/index';
import hightChartFn from '@/components/highcharts/index';
import ChartPanel from '@/components/chart/index.vue';

const app = createApp(App);

app.use(router);
app.use(HighchartsVue);
app.component(ChartPanel.name, ChartPanel);
app.config.globalProperties.$eChartFn = eChartFn;
app.config.globalProperties.$highChartFn = hightChartFn;
echarts.registerMap('china', chinaGeo, {
  // 南海诸岛: {
  //   left: 120,
  //   top: 10,
  //   width:8
  // },
});

app.mount('#app');