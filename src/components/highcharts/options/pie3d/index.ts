import * as Highcharts from 'highcharts';
//等高 3d 环图
const pie3dHighchart = (pie3dData, color) => {
  let defaultConfig = {
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
      text: '产品规模- 环图等高-2',
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
  const opt: any = Object.assign({}, defaultConfig);

  return opt;
};

//不等高 3d 环图
const pie3dHighchart3 = () => {
  let option = {
    pane: {
      background: [{ backgroundColor: 'red' }],
    },
    colors: ['#fe6265', '#58d6fc', '#ffcc00', '#3dbc6a'],
    // tooltip: {
    //   formatter: function () {
    //     return this.point.name + ':' + this.y;
    //   },
    //   style: { fontWeight: 700 },
    // },
    // 定时显示文本框配置， 可按照自身内容修改
    tooltip: {
      enabled: true,
      shared: true,
      backgroundColor: 'rgba(0, 33, 90, 0.8)',
      borderColor: '#4289D0',
      borderRadius: 0,
      followPointer: true,
      useHTML: true,
      style: {
        fontSize: 14,
        color: '#D9E8FF',
      },
      headerFormat: '<div style="width: auto;height: 50px;padding: 5px 2px;position: relative;">',
      pointFormat:
        '<div style="position:absolute;left: -10px; top: -10px;width:15px;height: 15px;border: 2px solid #4289D0;border-bottom:none;border-right: none;"></div>' +
        '<div style="position:absolute;right: -10px; top: -10px;width:15px;height: 15px;border: 2px solid #4289D0;border-bottom:none;border-left: none;"></div>' +
        '<div style="position:absolute;left: -10px; bottom: -10px;width:15px;height: 15px;border: 2px solid #4289D0;border-top:none;border-right: none;"></div>' +
        '<div style="position:absolute;right: -10px; bottom: -10px;width:15px;height: 15px;border: 2px solid #4289D0;border-top:none;border-left: none;"></div>' +
        '<p style="padding-bottom: 3px;letter-spacing: 2px;">{point.name}：' +
        '<span style="color: #01DEFF;">{point.y}个</span></p>',
      footerFormat: '</div>',
    },
    title: {
      text: '',
    },
    // 千以上的数字去掉空格
    lang: {
      thousandsSep: '',
    },
    credits: {
      enabled: false, // 隐藏版权信息
    },
    chart: {
      type: 'pie',
      animation: false,
      events: {
        load: function () {
          var each = Highcharts.each,
            points = this.series[0].points;
          each(points, function (p, i) {
            p.graphic.attr({
              translateY: -p.shapeArgs.ran,
            });
            p.graphic.side1.attr({
              translateY: -p.shapeArgs.ran,
            });
            p.graphic.side2.attr({
              translateY: -p.shapeArgs.ran,
            });
          });
        },
      },
      options3d: {
        enabled: true,
        alpha: 55,
        beta: 0,
      },
      backgroundColor: 'transparent',
    },
    plotOptions: {
      pie: {
        // size: 230,
        innerSize: 180,
        depth: 40, //饼图厚度
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true, //是否显示饼图的线形tip
          // format: " {point.percentage:.1f} %<br/>{point.name}",
          formatter: function () {
            //设置图的字体颜色和饼状图保存一致
            return (
              '<p style="color:' +
              this.color +
              '">' +
              this.point.name +
              '</p><br><p style="color:' +
              this.color +
              '">' +
              this.percentage.toFixed(1) +
              '%</p>'
            );
          },
          // connectorColor: 'white', //连接线颜色，默认是扇区颜色
          // distance: 10, // 数据标签与扇区距离
          // connectorPadding: 15, // 数据标签与连接线的距离
          style: {
            // fontFamily:'',
            // color: '#fff',
            // fontSize: '15px',
          },
        },
        showInLegend: true,
        point: {
          events: {
            legendItemClick: function (event) {
              return false; //return true 则表示允许切换
            },
          },
        },
      },
    },
    series: [
      {
        type: 'pie',
        name: '占比',
        zIndex: 1,
        size: '95%', // 设置饼图的大小
        center: ['50%', '50%'], // 设置饼图的位置
        allowPointSelect: false,
        dataLabels: {
          enabled: true,
        },
        data: [
          {
            name: '电气工程',
            y: 40,
            h: 40,
          },
          {
            name: '道路工程',
            y: 15,
            h: 20,
          },
          {
            name: '交通工程',
            y: 10,
            h: 10,
          },
          {
            name: '绿化工程',
            y: 35,
            h: 30,
          },
        ],
      },
    ],
  };
  return option;
};

export default {
  pie3dHighchart,
  pie3dHighchart3,
};
