import * as echarts from 'echarts';
import { chinaGeoCoordMap, geoCoordMap } from './geoZH';
import chinaProvinceGeo from './province/index';

//基础版地图
const chinaMapChart = (data) => {
  let color = ['#FDCCC6', '#FC7975', '#D3414B', '#F22F31'];
  let areaColor = '#FDCCC6';
  let borderColor = '#fff';
  let textColor = '#000';
  let areaHoverColor = '#488DDB';

  const defaultConfig = {
    title: {
      text: 'APP客户注册地域分布图',
      left: 'left',
    },
    // backgroundColor: '#01215c', //画布背景颜色
    labelLine: {
      show: false,
      showAbove: true,
      length: 200,
      length2: 400,
      minTurnAngle: 130,
      lineStyle: {
        color: '#000',
      },
    },
    tooltip: {
      trigger: 'item',
      textStyle: {
        color: '#FFF',
        fontSize: 18,
      },
      confine: true,
      backgroundColor: 'rgba(5,34,74,0.8)',
      borderColor: '#277DF5',
      formatter: function (params) {
        const { data, name } = params;
        if (data) return name + '(亿元)' + '  :' + data['value'];
      },
    },
    visualMap: {
      calculable: false, //是否显示拖拽用的手柄
      left: '10%',
      bottom: '15%',
      type: 'piecewise',
      align: 'left',
      textStyle: {
        color: textColor,
        fontSize: 16,
      },
      pieces: [{ min: 2000 }, { min: 500, max: 2000 }, { max: 500 }],
      inRange: {
        color: color, //整体颜色
      },
      itemHeight: 18,
      formatter: function (value: number, value2: number) {
        if (!Number.isFinite(value)) {
          return `${value2}万以下`;
        } else if (!Number.isFinite(value2)) {
          return `${value}万以上`;
        } else {
          return `${value}-${value2}万`;
        }
      },
    },
    geo: {
      show: true,
      map: 'china',
      label: {
        show: false,
      },
      roam: false,
      itemStyle: {
        borderWidth: 2, //设置外层边框
        borderColor: '#FC7975',
      },
    },
    series: [
      {
        name: '',
        type: 'map',
        mapType: 'china',
        roam: false,
        itemStyle: {
          borderWidth: 1, //边际线大小
          borderColor, //边界线颜色
          areaColor, //默认区域颜色
          textColor,
        },
        emphasis: {
          disabled: true,
          itemStyle: {
            areaColor: areaHoverColor, //hover区域颜色
          },
        },
        label: {
          show: true,
        },
        data: [
          { name: '湖北', value: 0 },
          { name: '湖南', value: 0 },
          { name: '浙江', value: 0 },
          { name: '江西', value: 0 },
          { name: '上海', value: 0 },
          { name: '新疆', value: 1300 },
          { name: '广东', value: 1200 },
          { name: '广西', value: 1200 },
          { name: '山东', value: 2343 },
        ],
      },
    ],
  };

  const opt = Object.assign({}, defaultConfig);

  return opt;
};

//移动端
const chinaMapChart5 = () => {
  let color = ['#FDCCC6', '#FC7975', '#D3414B', '#F22F31'];
  let areaColor = '#FDCCC6';
  let borderColor = '#fff';
  let borderColor2 = '#FC7975';
  let textColor = '#000';
  let areaHoverColor = '#488DDB';

  var convertLineData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var dataItem = data[i];
      var coordS = dataItem.lineS; //线起点
      var coordM = dataItem.lineM; //线中间点
      var coordE = dataItem.lineE; //线尾点
      if (coordS && coordM && coordE) {
        res.push({
          coords: [coordS, coordM, coordE],
          lineStyle: {
            type: 'dashed',
            color: '#F22F31',
            width: 1,
            opacity: 0.6,
            cap: 'round',
          },
        });
      }
    }
    return res;
  };

  var convertValData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var dataItem = data[i];
      res.push({
        name: dataItem.areaName,
        value: dataItem.lineE.concat(dataItem.value),
      });
    }
    return res;
  };

  let demoData = [
    {
      areaName: '辽宁',
      value: 1.2,
      lineS: [123.429096, 41.796767],
      lineM: [123.429096, 41.796767],
      lineE: [133.429096, 41.796767],
    },
    {
      areaName: '河北',
      value: 1.2,
      lineS: [115.502461, 38.045474],
      lineM: [115.502461, 38.045474],
      lineE: [125.502461, 38.045474],
    },
    {
      areaName: '山东',
      value: 4.1,
      lineS: [117.7402, 36.4307],
      lineM: [117.7402, 33.4307],
      lineE: [127.7402, 33.4307],
    },
    {
      areaName: '广西',
      value: 2.2,
      lineS: [108.7813, 23.6426],
      lineM: [108.7813, 20.6426],
      lineE: [90.7813, 20.6426],
    },
    {
      areaName: '广东',
      value: 1,
      lineS: [113.880637, 22.7],
      lineM: [113.880637, 20.7],
      lineE: [123.880637, 20.7],
    },
  ];

  const defaultConfig = {
    title: {
      text: 'APP客户注册地域分布图',
      left: 20,
      top: 15,
      textStyle: {
        fontSize: 16,
        color: '#323846',
      },
    },
    backgroundColor: '#fff', //画布背景颜色
    labelLine: {
      show: false,
      showAbove: true,
      length: 200,
      length2: 400,
      minTurnAngle: 130,
      lineStyle: {
        color: '#000',
      },
    },
    tooltip: {
      show: false,
      trigger: 'item',
      textStyle: {
        color: '#FFF',
        fontSize: 12,
      },
      confine: true,
      backgroundColor: 'rgba(5,34,74,0.8)',
      borderColor: '#277DF5',
      formatter: function (params) {
        const { data, name } = params;
        if (data) return name + '(万)' + '  :' + data['value'];
      },
    },
    visualMap: {
      calculable: false, //是否显示拖拽用的手柄
      left: 20,
      bottom: 15,
      type: 'piecewise',
      align: 'left',
      textStyle: {
        color: textColor,
        fontSize: 10,
      },
      pieces: [{ min: 2000 }, { min: 500, max: 2000 }, { max: 500 }],
      inRange: {
        color: color, //整体颜色
      },
      itemHeight: 12,
      formatter: function (value: number, value2: number) {
        if (!Number.isFinite(value)) {
          return `${value2}万以下`;
        } else if (!Number.isFinite(value2)) {
          return `${value}万以上`;
        } else {
          return `${value}-${value2}万`;
        }
      },
    },
    geo: {
      show: true,
      map: 'china',
      roam: false,
      regions: [
        {
          name: '山东',
          itemStyle: {
            areaColor: '#D3414B',
          },
        },
        {
          name: '南海诸岛',
          itemStyle: {
            borderWidth: 1,
            borderColor: borderColor2,
          },
        },
      ],
    },
    series: [
      {
        type: 'map',
        mapType: 'china',
        roam: false,
        itemStyle: {
          borderWidth: 0.8, //边际线大小
          borderColor, //边界线颜色
          areaColor, //默认区域颜色
          textColor,
        },
        emphasis: {
          disabled: true,
          itemStyle: {
            areaColor: areaHoverColor, //hover区域颜色
          },
        },
        label: {
          show: false,
          color: '#323846' || '#fff',
          fontSize: 10,
        },
        data: [
          { name: '湖北', value: 0 },
          { name: '湖南', value: 0 },
          { name: '浙江', value: 0 },
          { name: '江西', value: 0 },
          { name: '上海', value: 0 },
          { name: '新疆', value: 1300 },
          { name: '广东', value: 1200 },
          { name: '广西', value: 1200 },
          { name: '山东', value: 2343 },
        ],
      },
      // {
      //   type: 'lines',
      //   zlevel: 1,
      //   effect: {
      //     show: false,
      //   },
      //   polyline: true, //支持多点连线
      //   lineStyle: {
      //     type: 'dashed',
      //     color: '#F22F31',
      //     width: 1.5,
      //     opacity: 1,
      //     cap: 'round',
      //   },
      //   animation: false,
      //   data: convertLineData(demoData),
      // },
      // {
      //   type: 'scatter',
      //   coordinateSystem: 'geo',
      //   zlevel: 1,
      //   symbolSize: 8,
      //   label: {
      //     show: true,
      //     formatter: '{name|{b}}  {value|{@[2]} 万}',
      //     color: '#323846',
      //     fontSize: 10,
      //     fontWeight: 500,
      //     rich: {},
      //     position: 'top',
      //   },
      //   itemStyle: {
      //     color: '#F22F31',
      //     shadowBlur: 3,
      //     shadowColor: '#F22F31',
      //     shadowOffsetX: 1,
      //     shadowOffsetY: 2,
      //   },
      //   data: convertValData(demoData),
      // },
    ],
  };

  const opt = Object.assign({}, defaultConfig);

  return opt;
};

const chinaMapChart2 = () => {
  let areaColor = 'transparent';
  let borderColor = '#2F88F6';
  let textColor = '#FFF';
  let areaHoverColor = '#488DDB';

  let iconRQ =
    'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNCRkRBMEJBQzgwRjExRUFBNUI0RTMyMThEN0UxMzFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNCRkRBMEJCQzgwRjExRUFBNUI0RTMyMThEN0UxMzFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0JGREEwQjhDODBGMTFFQUE1QjRFMzIxOEQ3RTEzMUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0JGREEwQjlDODBGMTFFQUE1QjRFMzIxOEQ3RTEzMUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5mT42iAAABQ0lEQVR42mL8LabOQCQIBOL1xChkItJAkLp+IBajpqFWQCwPxJ7UNDQCSgdQy1BmIA6Bsl2AmJMahjoAsTiUzQPETtQwNAKN709IAwvUayZQ/hcg/o0k/x6Ig9D0+ABxKJT9HYh/oMm/BBm6GYitgTgfiBmJcLkkEK/CIXcGiGNB3v8JxIVQF31gIA/8AeIWaNK7gRymG4BYH4hPkGjgXSC2A+JaWNChR9QjqIJeIP5PhIGzgdgAiI8Tin2QbSVAvIOAgROBOA0auUQlKV4gtidgqBGp6RSUFrmIKA/ESDEUPcGfBOIUIH6Lln29iTVUCIjdkJJKExDbAPFcqJdPEMpd2AwF5TBWaFKxBeJ6qOHIqaMbmjrcsBUw2AwNh7rKAEeaBaWOMiD2BeJvQOxOyFBuaFJJwZZU0MBWaHCIo0sABBgAetA4Jx5t/ToAAAAASUVORK5CYII=';

  let data = [
    {
      name: '北京',
      value: [116.24, 39.55, 100],
    },
    {
      name: '深圳',
      value: [114.271522, 22.753644],
    },

    {
      name: '重庆',
      value: [106.54, 29.59],
    },
    {
      name: '浙江',
      value: [120.19, 30.26],
    },
  ];
  let LableData = [
    {
      name: '北京',
      coords: [
        [116.24, 39.55, 100],
        [120.24, 46.55, 100],
      ], // 线条位置[开始位置，结束位置]
      value: [10.21, 1.2],
    },
    {
      name: '深圳',
      coords: [
        [114.271522, 22.753644],
        [118.24, 18.55, 100],
      ], // 线条位置[开始位置，结束位置]
      value: [10.21, 1.2],
    },
    {
      name: '重庆',
      coords: [
        [106.54, 29.59],
        [100.24, 40.55],
      ], // 线条位置[开始位置，结束位置]
      value: [10.21, 1.2],
    },
    {
      name: '浙江',
      coords: [
        [120.19, 30.26],
        [128.24, 35.55, 100],
      ], // 线条位置[开始位置，结束位置]
      value: [10.21, 1.2],
    },
  ];

  const defaultConfig = {
    backgroundColor: '#000f1e',
    geo: {
      map: 'china',
      aspectScale: 0.85,
      layoutCenter: ['50%', '50%'], //地图位置
      layoutSize: '100%',
      itemStyle: {
        opacity: 0.5,
        areaColor: '#276fce',
      },
      regions: [
        {
          name: '南海诸岛',
          itemStyle: {
            areaColor: 'rgba(0, 10, 52, 1)',

            borderColor: 'rgba(0, 10, 52, 1)',
            normal: {
              opacity: 0,
              label: {
                show: false,
                // color: '#009cc9',
                color: '#FFF',
              },
            },
          },
          label: {
            show: false,
            color: '#FFFFFF',
            fontSize: 12,
          },
        },
      ],
    },
    series: [
      {
        type: 'map',
        mapType: 'china',
        // aspectScale: 0.85,
        // layoutCenter: ['50%', '50%'], //地图位置
        // layoutSize: '100%',
        zoom: 1, //当前视角的缩放比例
        // roam: true, //是否开启平游或缩放
        scaleLimit: {
          //滚轮缩放的极限控制
          min: 1,
          max: 2,
        },
        itemStyle: {
          normal: {
            areaColor: '#0c274b',
            borderColor: '#1cccff',
            borderWidth: 1.5,
          },
          emphasis: {
            areaColor: '#02102b',
            label: {
              color: '#fff',
            },
          },
        },
      },
      {
        //首都星图标
        name: '首都',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: [
          {
            name: '首都',
            value: [116.24, 41.55, 100],
          },
        ],
        symbol: iconRQ,
        symbolSize: 20,
        label: {
          normal: {
            show: false,
          },
          emphasis: {
            show: false,
          },
        },
      },
      // 区域散点图
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        symbolSize: 10,
        rippleEffect: {
          //坐标点动画
          period: 3,
          scale: 5,
          brushType: 'fill',
        },
        label: {
          normal: {
            show: true,
            position: 'right',
            formatter: '{b}',
            color: '#b3e2f2',
            fontWeight: 'bold',
            fontSize: 18,
          },
        },

        data: data,
        itemStyle: {
          //坐标点颜色
          normal: {
            show: true,
            color: 'green',
            shadowBlur: 20,
            shadowColor: '#fff',
          },
          emphasis: {
            areaColor: '#f00',
          },
        },
      },
      // 线 和 点
      {
        type: 'lines',
        zlevel: 1, //设置这个才会有轨迹线的小尾巴
        polyline: true,
        effect: {
          show: true,
          period: 10,
          trailLength: 0.7,
          color: '#fff', //流动点颜色
          symbol: 'arrow',
          symbolSize: 6,
        },
        lineStyle: {
          normal: {
            color: '#fff', //线条颜色
            width: 1.5,
            curveness: 0.2,
            shadowColor: '#fff',
          },
        },
        data: [
          {
            fromName: '深圳',
            toName: '北京',
            coords: [
              [114.271522, 22.753644],
              [116.24, 39.55],
              [114.271522, 22.753644],
            ],
          },
          {
            fromName: '深圳',
            toName: '浙江',
            coords: [
              [114.271522, 22.753644],
              [120.19, 30.26],
              [114.271522, 22.753644],
            ],
          },
          {
            fromName: '深圳',
            toName: '重庆',
            coords: [
              [114.271522, 22.753644],
              [106.54, 29.59],
              [114.271522, 22.753644],
            ],
          },
        ],
      },
      {
        type: 'lines',
        zlevel: 3,
        symbol: 'circle',
        symbolSize: [5, 5],
        color: '#ff8003',
        opacity: 1,
        label: {
          show: true,
          padding: [10, 20],
          color: '#fff',
          backgroundColor: '#1a3961',
          borderColor: '#aee9fb',
          borderWidth: 1,
          borderRadius: 6,
          formatter(params) {
            console.log(params);
            let arr = [
              params.name,
              '上行：' + params.value[1] + 'G/s',
              '下行：' + params.value[0] + 'G/s',
            ];
            return arr.join('\n');
          },
          textStyle: {
            align: 'left',
            lineHeight: 20,
          },
        },
        lineStyle: {
          type: 'solid',
          color: '#fff',
          width: 0.5,
          opacity: 1,
        },
        data: LableData,
      },
    ],
  };

  const opt = Object.assign({}, defaultConfig);

  return opt;
};

const chinaMapChart3 = () => {
  let originGeo = [117.1582, 36.8701];
  let chinaGeoCoordMap = {
    江苏: [118.8062, 31.9208],
    黑龙江: [127.9688, 45.368],
    内蒙古: [110.3467, 41.4899],
    吉林: [125.8154, 44.2584],
    北京市: [116.4551, 40.2539],
    辽宁: [123.1238, 42.1216],
    河北: [114.4995, 38.1006],
    天津: [117.4219, 39.4189],
    山西: [112.3352, 37.9413],
    陕西: [109.1162, 34.2004],
    甘肃: [103.5901, 36.3043],
    宁夏: [106.3586, 38.1775],
    青海: [101.4038, 36.8207],
    新疆: [87.9236, 43.5883],
    四川: [103.9526, 30.7617],
    重庆: [108.384366, 30.439702],
    山东: [117.1582, 36.8701],
    河南: [113.4668, 34.6234],
    安徽: [117.29, 32.0581],
    湖北: [114.3896, 30.6628],
    浙江: [119.5313, 29.8773],
    福建: [119.4543, 25.9222],
    江西: [116.0046, 28.6633],
    湖南: [113.0823, 28.2568],
    贵州: [106.6992, 26.7682],
    云南: [102.9199, 25.4663],
    广东: [113.12244, 23.009505],
    广西: [108.479, 23.1152],
    海南: [110.3893, 19.8516],
    上海: [121.4648, 31.2891],
  };

  let d3 = {
    江苏: 11788,
    黑龙江: 1944,
    内蒙古: 2954,
    吉林: 3482,
    北京市: 1808,
    辽宁: 5488,
    河北: 27035,
    天津: 2270,
    山西: 13623,
    陕西: 4221,
    甘肃: 754,
    宁夏: 1783,
    青海: 91,
    新疆: 1907,
    四川: 4905,
    重庆: 1420,
    山东: 39781,
    河南: 16154,
    安徽: 7914,
    湖北: 6802,
    浙江: 5812,
    福建: 3345,
    江西: 4996,
    湖南: 5627,
    贵州: 1504,
    云南: 2725,
    广东: 6339,
    广西: 1009,
    海南: 0,
    上海: 1988,
  };

  let colors = ['#FFDB5C'];

  let origin = ['青岛'];
  let mapData = [];

  for (let key in chinaGeoCoordMap) {
    mapData.push({
      origin: '青岛',
      name: key,
      value: d3[key] / 100,
    });
  }
  console.log(mapData, 'mapData');

  let convertData = function (data) {
    let res = [];
    for (let i = 0; i < data.length; i++) {
      let geoCoord = chinaGeoCoordMap[data[i].name];
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value),
        });
      }
    }
    console.log(res, 'res');
    return res;
  };

  let convertToLineData = function (data, gps) {
    let res = [];
    for (let i = 0; i < data.length; i++) {
      let dataItem = data[i];
      let toCoord = chinaGeoCoordMap[dataItem.name];
      let fromCoord = gps; //青岛
      if (fromCoord && toCoord) {
        res.push([
          {
            coord: fromCoord,
            value: dataItem.value,
          },
          {
            coord: toCoord,
          },
        ]);
      }
    }
    return res;
  };

  let defaultConfig = {
    timeline: {
      data: origin,
      axisType: 'category',
      autoPlay: true,
      playInterval: 3000,
      left: '10%',
      right: '10%',
      bottom: '3%',
      width: '80%',
      //  height: null,
      label: {
        normal: {
          textStyle: {
            color: '#ddd',
          },
        },
        emphasis: {
          textStyle: {
            color: '#fff',
          },
        },
      },
      symbolSize: 10,
      lineStyle: {
        color: '#555',
      },
      checkpointStyle: {
        borderColor: '#777',
        borderWidth: 2,
      },
      controlStyle: {
        showNextBtn: true,
        showPrevBtn: true,
        normal: {
          color: '#666',
          borderColor: '#666',
        },
        emphasis: {
          color: '#aaa',
          borderColor: '#aaa',
        },
      },
    },
    baseOption: {
      animation: true,
      animationDuration: 1000,
      animationEasing: 'cubicInOut',
      animationDurationUpdate: 1000,
      animationEasingUpdate: 'cubicInOut',
      grid: {
        right: '1%',
        top: '15%',
        bottom: '10%',
        width: '20%',
      },
      tooltip: {
        trigger: 'axis', // hover触发器
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          shadowStyle: {
            color: 'rgba(150,150,150,0.1)', //hover颜色
          },
        },
      },
      geo: {
        show: true,
        map: 'china',
        roam: true,
        zoom: 1,
        label: {
          // show:true,
          emphasis: {
            show: false,
          },
        },
        itemStyle: {
          normal: {
            borderColor: 'rgba(147, 235, 248, 1)',
            borderWidth: 1,
            areaColor: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.8,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(147, 235, 248, 0)', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: 'rgba(147, 235, 248, .2)', // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            },
          },
          emphasis: {
            areaColor: '#389BB7',
            borderWidth: 0,
          },
        },
      },
    },
    options: [
      {
        backgroundColor: '#013954',
        title: [
          {
            text: '整车物流平台',
            subtext: '   数据由整车物流部提供',
            left: '35%',
            top: '15%',
            textStyle: {
              color: '#fff',
              fontSize: 25,
            },
          },
        ],

        series: [
          //未知作用
          // {
          //   //文字和标志
          //   name: 'light',
          //   type: 'scatter',
          //   coordinateSystem: 'geo',
          //   data: convertData(mapData),
          //   symbolSize: function (val) {
          //     return val[2] / 10;
          //   },
          //   label: {
          //     normal: {
          //       formatter: '{b}',
          //       position: 'right',
          //       show: true,
          //     },
          //     emphasis: {
          //       show: true,
          //     },
          //   },
          //   itemStyle: {
          //     normal: {
          //       color: colors,
          //     },
          //   },
          // },
          //地图？
          {
            type: 'map',
            map: 'china',
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: false,
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: '#fff',
                },
              },
            },
            roam: true,
            itemStyle: {
              normal: {
                areaColor: '#031525',
                borderColor: '#FFFFFF',
              },
              emphasis: {
                areaColor: '#2B91B7',
              },
            },
            animation: false,
            data: mapData,
          },
          //地图点的动画效果
          {
            //  name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(
              mapData
                .sort(function (a, b) {
                  return b.value - a.value;
                })
                .slice(0, 20),
            ),
            symbolSize: function (val) {
              return val[2] / 10;
            },
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke',
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: true,
              },
            },
            itemStyle: {
              normal: {
                color: colors,
                shadowBlur: 10,
                shadowColor: colors,
              },
            },
            zlevel: 1,
          },
          //地图线的动画效果
          {
            type: 'lines',
            zlevel: 2,
            effect: {
              show: true,
              period: 4, //箭头指向速度，值越小速度越快
              trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
              symbol: 'arrow', //箭头图标
              symbolSize: 3, //图标大小
            },
            lineStyle: {
              normal: {
                color: colors,
                width: 0.1, //尾迹线条宽度
                opacity: 0.5, //尾迹线条透明度
                curveness: 0.3, //尾迹线条曲直度
              },
            },
            data: convertToLineData(mapData, originGeo),
          },
        ],
      },
    ],
  };

  const opt = Object.assign({}, defaultConfig);

  return opt;
};

const chinaMapChart4 = (data) => {
  let origin = '青岛';
  let originGeo = geoCoordMap[origin];
  let geoColor = '#F40';
  let lineColor = '#FF8F28';
  let hoverAreaColor = '#FF8F28';

  let d3 = {
    新疆: 5,
    广东: 1,
    广西: 2,
    北京: 0,
    上海: 0,
    天津: 0,
    重庆: 0,
  };

  let mapData = [];

  for (let key in d3) {
    mapData.push({
      origin: '青岛',
      name: key,
      value: d3[key],
    });
  }
  console.log(mapData, 'mapData');

  let convertData = function (data) {
    let res = [];
    for (let i = 0; i < data.length; i++) {
      let geoCoord = chinaGeoCoordMap[data[i].name];
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value),
        });
      }
    }
    return res;
  };

  let convertToLineData = function (data, gps) {
    let res = [];
    for (let i = 0; i < data.length; i++) {
      let dataItem = data[i];
      let toCoord = chinaGeoCoordMap[dataItem.name];
      let fromCoord = gps; //青岛
      if (fromCoord && toCoord) {
        res.push([
          {
            coord: fromCoord,
            value: dataItem.value,
          },
          {
            coord: toCoord,
          },
        ]);
      }
    }
    console.log(res, 'dddddddddddd');
    return res;
  };

  let option = {
    backgroundColor: 'rgba(51,113,255,0.1)',
    // backgroundColor: '#FFF',
    title: [
      {
        text: 'APP客户注册地域分布图',
        left: '10%',
        top: '10%',
        textStyle: {
          color: '#fff',
          fontSize: 25,
        },
      },
    ],
    geo: {
      show: true,
      map: 'china',
      label: {
        show: true,
        color: '#fff',
        fontSize: 16,
      },
      roam: false,
      aspectScale: 0.75, // 长宽比例
      itemStyle: {
        borderWidth: 1, //设置外层边框
        borderColor: '#3371FF',
        areaColor: 'rgba(0,0,0,0)',
      },
      emphasis: {
        disabled: true,
        itemStyle: {
          areaColor: 'rgba(0,0,0,0)',
        },
        label: {
          color: '#fff',
        },
      },
      regions: [
        {
          name: '山东',
          itemStyle: {
            areaColor: 'rgba(255,143,40,0.14)' || hoverAreaColor || 'rgba(0,0,0,0)',
            borderColor: hoverAreaColor,
          },
        },
      ],
    },
    series: [
      {
        //青岛星图标
        name: origin,
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: [
          {
            name: origin,
            value: originGeo,
          },
        ],
        // symbol: iconRQ,
        symbolSize: 20,
        rippleEffect: {
          brushType: 'stroke',
        },
        label: {
          normal: {
            show: false,
          },
          emphasis: {
            show: false,
          },
        },
        itemStyle: {
          normal: {
            color: geoColor,
            shadowBlur: 20,
            shadowColor: geoColor,
          },
        },
      },
      //地图点的动画效果
      {
        // type: 'effectScatter',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData(
          mapData
            .sort(function (a, b) {
              return b.value - a.value;
            })
            .slice(0, 20),
        ),
        symbolSize: function (val) {
          return (val[2] || 1) * 20;
        },
        rippleEffect: {
          brushType: 'stroke',
        },
        hoverAnimation: true,
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: false,
          },
        },
        itemStyle: {
          normal: {
            // color: '#B3CAFF' || 'rgba(51, 113, 255, 1)' || geoColor,
            color: () => {
              return {
                // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.5,
                colorStops: [
                  {
                    offset: 0,
                    color: '#B3CAFF', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(179,202,255,0.1)' || 'rgba(0,0,0,0)', // 100% 处的颜色
                  },
                ],
                global: false,
              };
            },
            shadowBlur: (val) => {
              return (val[2] || 1) * 0.5;
            },
            shadowColor: geoColor,
          },
        },
        zlevel: -3,
      },
      //地图线的动画效果
      {
        type: 'lines',
        zlevel: 2,
        effect: {
          show: true,
          period: 4, //箭头指向速度，值越小速度越快
          trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
          symbol: 'rect', //箭头图标
          symbolSize: 3, //图标大小
        },
        lineStyle: {
          normal: {
            color: lineColor,
            width: 0.1, //尾迹线条宽度
            opacity: 0.5, //尾迹线条透明度
            curveness: 0.3, //尾迹线条曲直度
          },
        },
        data: convertToLineData(mapData, originGeo),
      },
    ],
  };

  const opt = Object.assign({}, option);

  return opt;
};

//指示线 缩放有问题
const chinaMapChart6 = () => {
  var data = [
    { name: '重庆', value: Math.round(Math.random() * 1000) },
    { name: '河北', value: Math.round(Math.random() * 1000) },
    { name: '河南', value: Math.round(Math.random() * 1000) },
    { name: '云南', value: Math.round(Math.random() * 1000) },
    { name: '辽宁', value: Math.round(Math.random() * 1000), label: { show: true } },
    { name: '黑龙江', value: Math.round(Math.random() * 1000), label: { show: true } },
    { name: '湖南', value: Math.round(Math.random() * 1000) },
    { name: '安徽', value: Math.round(Math.random() * 1000) },
    { name: '山东', value: Math.round(Math.random() * 1000) },
    { name: '新疆', value: Math.round(Math.random() * 1000), label: { show: true } },
    { name: '江西', value: Math.round(Math.random() * 1000) },
    { name: '湖北', value: Math.round(Math.random() * 1000) },
    { name: '广西', value: Math.round(Math.random() * 1000) },
    { name: '甘肃', value: Math.round(Math.random() * 1000) },
    { name: '山西', value: Math.round(Math.random() * 1000) },
    { name: '内蒙古', value: Math.round(Math.random() * 1000), label: { show: true } },
    { name: '陕西', value: Math.round(Math.random() * 1000) },
    { name: '吉林', value: Math.round(Math.random() * 1000), label: { show: true } },
    { name: '福建', value: Math.round(Math.random() * 1000) },
    { name: '贵州', value: Math.round(Math.random() * 1000) },
    { name: '青海', value: Math.round(Math.random() * 1000), label: { show: true } },
    { name: '西藏', value: Math.round(Math.random() * 1000), label: { show: true } },
    { name: '四川', value: Math.round(Math.random() * 1000), label: { show: true } },
    { name: '宁夏', value: Math.round(Math.random() * 1000) },
    { name: '海南', value: Math.round(Math.random() * 1000) },
    { name: '南海诸岛', itemStyle: { normal: { opacity: 0 } } },
  ];

  let option = {
    legend: {},
    series: [
      {
        type: 'map',
        map: 'china',
        roam: false,
        label: {
          show: false,
        },
        data: data,
        markLine: {
          lineStyle: {
            type: 'dotted',
          },
          data: [
            [
              { name: '河北', x: '58%', y: '45%', symbol: 'none' },
              { x: '68.6%', y: '45%', symbol: 'circle', symbolSize: 5 },
            ],
            [
              { name: '山东', x: '59.6%', y: '48.1%', symbol: 'none' },
              { x: '74%', y: '48.1%', symbol: 'circle', symbolSize: 5 },
            ],
            [
              { name: '河南', x: '57.2%', y: '52.4%', symbol: 'none' },
              { x: '68.6%', y: '52.4%', symbol: 'circle', symbolSize: 5 },
            ],
            [
              { name: '安徽', x: '60%', y: '58.8%', symbol: 'none' },
              { x: '74%', y: '58.8%', symbol: 'circle', symbolSize: 5 },
            ],
            [
              { name: '湖北', x: '57.6%', y: '62%', symbol: 'none' },
              { x: '68.6%', y: '62%', symbol: 'circle', symbolSize: 5 },
            ],
            [
              { name: '江西', x: '58.6%', y: '66%', symbol: 'none' },
              { x: '74%', y: '66%', symbol: 'circle', symbolSize: 5 },
            ],
            [
              { name: '福建', x: '61.3%', y: '72%', symbol: 'none' },
              { x: '68.6%', y: '72%', symbol: 'circle', symbolSize: 5 },
            ],
            [
              { name: '海南', x: '54.6%', y: '85.8%', symbol: 'none' },
              { x: '62%', y: '85.8%', symbol: 'circle', symbolSize: 5 },
            ],
            [
              { name: '重庆', x: '51.5%', y: '64.3%', symbol: 'none' },
              { x: '30%', y: '64.3%', symbol: 'circle', symbolSize: 5 },
            ],
            [
              { name: '云南', x: '49%', y: '74.5%', symbol: 'none' },
              { x: '40%', y: '74.5%', symbol: 'circle', symbolSize: 5 },
            ],
            [
              { name: '广西', x: '53%', y: '79.3%', symbol: 'none' },
              { x: '30%', y: '79.3%', symbol: 'circle', symbolSize: 5 },
            ],
            [
              { name: '贵州', x: '52%', y: '71%', symbol: 'none' },
              { x: '52%', y: '93%', symbol: 'circle', symbolSize: 5 },
            ],
            [
              { name: '湖南', x: '57%', y: '68%', symbol: 'none' },
              { x: '57%', y: '93%', symbol: 'circle', symbolSize: 5 },
            ],
            [
              { name: '甘肃', x: '49.6%', y: '50%', symbol: 'none' },
              { x: '49.6%', y: '16%', symbol: 'circle', symbolSize: 5 },
            ],
            [
              { name: '宁夏', x: '51.6%', y: '44%', symbol: 'none' },
              { x: '51.6%', y: '27%', symbol: 'circle', symbolSize: 5 },
            ],
            [
              { name: '陕西', x: '53.8%', y: '53%', symbol: 'none' },
              { x: '53.8%', y: '16%', symbol: 'circle', symbolSize: 5 },
            ],
            [
              { name: '山西', x: '56.7%', y: '46%', symbol: 'none' },
              { x: '56.7%', y: '25%', symbol: 'circle', symbolSize: 5 },
            ],
          ],
        },
      },
    ],
  };
  return option;
};
//指示线 缩放没问题
const chinaMapChart7 = () => {
  const geoCoordMap = {
    江西: [115.892151, 28.676493],
    河南: [113.665412, 34.757975],
    四川: [104.065735, 30.659462],
    重庆: [106.504962, 29.533155],
    西藏: [91.132212, 29.660361],
    贵州: [106.713478, 26.578343],
    辽宁: [123.429096, 41.796767],
    新疆: [87.617733, 43.792818],
    山东: [117.000923, 36.675807],
    上海: [121.472644, 31.231706],
    澳門: [113.54909, 22.198951],
    山西: [112.549248, 37.857014],
    浙江: [120.153576, 30.287459],
    海南: [110.33119, 20.031971],
    福建: [119.306239, 26.075302],
    青海: [101.778916, 36.623178],
    宁夏: [106.278179, 38.46637],
    湖北: [114.298572, 30.584355],
    甘肃: [103.823557, 36.058039],
    安徽: [117.283042, 31.86119],
    台湾: [121.509062, 25.044332],
    陕西: [108.948024, 34.263161],
    广西: [108.320004, 22.82402],
    天津: [117.190182, 39.125596],
    云南: [102.712251, 25.040609],
    黑龙江: [126.642464, 45.756967],
    广东: [113.280637, 23.125178],
    湖南: [112.982279, 28.19409],
    河北: [114.502461, 38.045474],
    内蒙古: [111.670801, 40.818311],
    吉林: [125.3245, 43.886841],
    江苏: [118.767413, 32.041544],
    北京: [116.405285, 39.904989],
    香港: [114.173355, 22.320048],
  };

  var data = {
    江西: Math.round(Math.random() * 1000),
    河南: Math.round(Math.random() * 1000),
    四川: Math.round(Math.random() * 1000),
    重庆: Math.round(Math.random() * 1000),
    西藏: Math.round(Math.random() * 1000),
    贵州: Math.round(Math.random() * 1000),
    辽宁: Math.round(Math.random() * 1000),
    新疆: Math.round(Math.random() * 1000),
    山东: Math.round(Math.random() * 1000),
    山西: Math.round(Math.random() * 1000),
    海南: Math.round(Math.random() * 1000),
    福建: Math.round(Math.random() * 1000),
    青海: Math.round(Math.random() * 1000),
    宁夏: Math.round(Math.random() * 1000),
    湖北: Math.round(Math.random() * 1000),
    甘肃: Math.round(Math.random() * 1000),
    安徽: Math.round(Math.random() * 1000),
    陕西: Math.round(Math.random() * 1000),
    广西: Math.round(Math.random() * 1000),
    云南: Math.round(Math.random() * 1000),
    黑龙江: Math.round(Math.random() * 1000),
    湖南: Math.round(Math.random() * 1000),
    河北: Math.round(Math.random() * 1000),
    内蒙古: Math.round(Math.random() * 1000),
    吉林: Math.round(Math.random() * 1000),
    //江苏北京香港上海澳門浙江台湾天津广东 没数据
  };

  // 保存引导线末端的坐标
  var linesEndCoords = {
    山西: [geoCoordMap['山西'][0], geoCoordMap['山西'][1] + 8],
    陕西: [geoCoordMap['陕西'][0], geoCoordMap['陕西'][1] + 16],
    宁夏: [geoCoordMap['宁夏'][0], geoCoordMap['宁夏'][1] + 6],
    甘肃: [geoCoordMap['甘肃'][0], geoCoordMap['甘肃'][1] + 16],
    河北: [geoCoordMap['河北'][0] + 12, geoCoordMap['河北'][1]],
    山东: [geoCoordMap['山东'][0] + 20, geoCoordMap['山东'][1]],
    河南: [geoCoordMap['河南'][0] + 14, geoCoordMap['河南'][1]],
    安徽: [geoCoordMap['安徽'][0] + 20, geoCoordMap['安徽'][1]],
    湖北: [geoCoordMap['湖北'][0] + 14, geoCoordMap['湖北'][1]],
    江西: [geoCoordMap['江西'][0] + 22, geoCoordMap['江西'][1]],
    福建: [geoCoordMap['福建'][0] + 9, geoCoordMap['福建'][1]],
    海南: [geoCoordMap['海南'][0] + 9, geoCoordMap['海南'][1]],
    重庆: [geoCoordMap['重庆'][0] - 27, geoCoordMap['重庆'][1]],
    云南: [geoCoordMap['云南'][0] - 10, geoCoordMap['云南'][1]],
    广西: [geoCoordMap['广西'][0] - 30, geoCoordMap['广西'][1]],
    贵州: [geoCoordMap['贵州'][0], geoCoordMap['贵州'][1] - 10],
    湖南: [geoCoordMap['湖南'][0], geoCoordMap['湖南'][1] - 11],
  };

  // lines引导线数据和坐标
  function dataLines(province, data) {
    var res = [];
    province.forEach((name) => {
      res.push({
        name: name,
        value: data[name],
        coords: [geoCoordMap[name], linesEndCoords[name]],
      });
    });
    return res;
  }

  // 散点图数据，其中value属性值为地理坐标和value拼接
  function dataScatter(province, data) {
    var res = [];
    province.forEach((name) => {
      res.push({
        name: name,
        value: [geoCoordMap[name][0], geoCoordMap[name][1], data[name]],
      });
    });
    return res;
  }

  let option = {
    legend: {},
    geo: {
      type: 'map',
      map: 'china',
      label: {
        show: false,
      },
      emphasis: {
        label: {
          show: false,
        },
      },
      regions: [
        {
          // 隐藏南海诸岛
          name: '南海诸岛',
          itemStyle: {
            opacity: 0,
          },
        },
      ],
    },
    series: [
      {
        // 含引导线的省份，用lines实现
        type: 'lines',
        symbol: 'circle',
        symbolSize: [6, 4],
        label: {
          show: true,
          formatter: '{b}{c}份',
        },
        lineStyle: {
          type: 'dotted',
          shadowBlur: 3,
        },
        data: dataLines(
          [
            '山西',
            '陕西',
            '宁夏',
            '甘肃',
            '河北',
            '山东',
            '河南',
            '安徽',
            '湖北',
            '江西',
            '福建',
            '海南',
            '重庆',
            '云南',
            '广西',
            '贵州',
            '湖南',
          ],
          data,
        ),
        labelLayout: {
          draggable: true,
        },
      },
      {
        // 没有引导线的省份，用scatter实现
        type: 'scatter',
        coordinateSystem: 'geo',
        symbolSize: 6,
        label: {
          show: true,
          position: 'bottom',
          formatter: '{b}{@[2]}份',
        },
        itemStyle: {
          color: '#00f',
        },
        data: dataScatter(
          ['黑龙江', '吉林', '辽宁', '内蒙古', '四川', '青海', '新疆', '西藏'],
          data,
        ),
      },
    ],
  };

  return option;
};

//省份地图
const chinaMapChart8 = async () => {
  let province = '北京';

  await chinaProvinceGeo[province].then((res: any) => {
    echarts.registerMap(province, res.default);
  });

  let data = [
    {
      name: '海淀区',
      value: 500,
      group: '隆科多',
    },
    {
      name: '丰台区',
      value: 600,
      group: '成文运',
    },
  ];

  const COORDS_LINE = {
    海淀区: [
      [116.301234, 39.967085],
      [117.2, 39.94],
    ],
    丰台区: [
      [116.283699, 39.866367],
      [115.6, 40.8],
    ],
  };

  let option = {
    backgroundColor: '#ccc',
    series: [
      {
        type: 'map',
        zoom: 1.2,
        z: 2,
        mapType: province,
        label: {
          show: false,
        },
        emphasis: {
          label: {
            show: false,
          },
          itemStyle: {
            borderColor: '#EBF3F3',
            borderWidth: 2,
            areaColor: '#fff',
          },
        },
        itemStyle: {
          borderColor: '#ccc',
          borderWidth: 2,
          areaColor: '#fff',
        },
        data: data,
      },
      {
        type: 'lines',
        z: 3,
        coordinateSystem: 'geo',
        symbol:
          'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7',
        symbolSize: [10, 0], //只保留地图端标记
        opacity: 1,
        labelLayout: {
          draggable: true,
        },
        label: {
          show: true,
          position: 'end',
          formatter: function (params) {
            //文本提示框
            return (
              '{title|' +
              params.name +
              '}\n{value| 成员人数：' +
              params.value +
              '}\n{value| 责任人：' +
              params.data.group +
              '}'
            );
          },
          backgroundColor: '#eee',
          borderColor: '#FF0033',
          borderWidth: 1,
          borderRadius: 4,
          align: 'center',
          width: 100,
          rich: {
            //标题样式
            title: {
              align: 'center',
              lineHeight: 17,
              fontSize: 12,
              color: '#fff',
              backgroundColor: '#FF0033',
              width: 100,
              height: 25,
              borderRadius: [4, 4, 0, 0],
            },
            value: {
              //内容样式
              height: 25,
              width: 100,
              color: '#FF0033',
              backgroundColor: '#fff',
              borderRadius: [0, 0, 4, 4],
            },
          },
        },
        lineStyle: {
          //视觉引导线属性
          type: 'solid',
          opacity: 1,
          color: '#FF0033', //引导线颜色
          curveness: 0.1,
        },
        data: data.map((item) => {
          let label = {};
          if (true) {
            let width = 92;
            label = {
              formatter: function (params) {
                return (
                  '{title|' +
                  params.name +
                  '}\n{value| 成员人数：' +
                  params.value +
                  '}\n{value| 责任人：' +
                  params.data.group +
                  '}'
                );
              },
              backgroundColor: '#FFB569',
              borderColor: '#FFB569',
              width: 100,
              rich: {
                title_active: {
                  align: 'center',
                  lineHeight: 17,
                  fontSize: 12,
                  color: '#fff',
                  backgroundColor: '#FFB569',
                  width: 100,
                  height: 25,
                  borderRadius: [4, 4, 0, 0],
                },
                value_active: {
                  height: 25,
                  width: 100,
                  color: '#FFB569',
                  backgroundColor: '#fff',
                  borderRadius: [0, 0, 4, 4],
                },
              },
            };
          }
          return Object.assign(
            {
              coords: COORDS_LINE[item.name],
              label,
            },
            item,
          );
        }),
      },
    ],
    geo: {
      geoIndex: 1,
      map: province,
      label: {
        show: false,
      },
      zoom: 1.2,
    },
  };
  return option;
};

export default {
  chinaMapChart,
  chinaMapChart2,
  chinaMapChart3,
  chinaMapChart4,
  chinaMapChart5,
  chinaMapChart6,
  chinaMapChart7,
  chinaMapChart8,
};
