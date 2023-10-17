// 支持自定义 数据、颜色
const pieChart = (data, color) => {
  const defaultConfig = {
    color,
    tooltip: {
      trigger: 'item',
    },
    legend: {
      top: '5%',
      left: 'center',
    },
    label: { show: true },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: data || [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
        ],
      },
    ],
  };

  const opt: any = Object.assign({}, defaultConfig);

  return opt;
};

//饼图标签对齐
const pieChart2 = () => {
  const data = [
    {
      name: 'Apples',
      value: 70,
    },
    {
      name: 'Strawberries',
      value: 68,
    },
    {
      name: 'Bananas',
      value: 48,
    },
    {
      name: 'Oranges',
      value: 40,
    },
    {
      name: 'Pears',
      value: 32,
    },
    {
      name: 'Pineapples',
      value: 27,
    },
    {
      name: 'Grapes',
      value: 18,
    },
  ];
  let option = {
    title: [
      {
        text: 'Pie label alignTo -- 饼图标签对齐',
        left: 'center',
      },
      {
        subtext: 'alignTo: "none" (default)',
        left: '16.67%',
        top: '75%',
        textAlign: 'center',
      },
      {
        subtext: 'alignTo: "labelLine"',
        left: '50%',
        top: '75%',
        textAlign: 'center',
      },
      {
        subtext: 'alignTo: "edge"',
        left: '83.33%',
        top: '75%',
        textAlign: 'center',
      },
    ],
    series: [
      {
        type: 'pie',
        radius: '25%',
        center: ['50%', '50%'],
        data: data,
        label: {
          position: 'outer',
          alignTo: 'none',
          bleedMargin: 5,
        },
        left: 0,
        right: '66.6667%',
        top: 0,
        bottom: 0,
      },
      {
        type: 'pie',
        radius: '25%',
        center: ['50%', '50%'],
        data: data,
        label: {
          position: 'outer',
          alignTo: 'labelLine',
          bleedMargin: 5,
        },
        left: '33.3333%',
        right: '33.3333%',
        top: 0,
        bottom: 0,
      },
      {
        type: 'pie',
        radius: '25%',
        center: ['50%', '50%'],
        data: data,
        label: {
          position: 'outer',
          alignTo: 'edge',
          margin: 20,
        },
        left: '66.6667%',
        right: 0,
        top: 0,
        bottom: 0,
      },
    ],
  };
  return option;
};

//饼图引导线调整
const pieChart3 = (chartRef) => {
  let datas = [
    ////////////////////////////////////////
    [
      { name: '圣彼得堡来客', value: 5.6 },
      { name: '陀思妥耶夫斯基全集', value: 1 },
      { name: '史记精注全译（全6册）', value: 0.8 },
      { name: '加德纳艺术通史', value: 0.5 },
      { name: '表象与本质', value: 0.5 },
      { name: '其它', value: 3.8 },
    ],
    // ////////////////////////////////////////
    [
      { name: '银河帝国5：迈向基地', value: 3.8 },
      { name: '俞军产品方法论', value: 2.3 },
      { name: '艺术的逃难', value: 2.2 },
      { name: '第一次世界大战回忆录（全五卷）', value: 1.3 },
      { name: 'Scrum 精髓', value: 1.2 },
      { name: '其它', value: 5.7 },
    ],
    ////////////////////////////////////////
    [
      { name: '克莱因壶', value: 3.5 },
      { name: '投资最重要的事', value: 2.8 },
      { name: '简读中国史', value: 1.7 },
      { name: '你当像鸟飞往你的山', value: 1.4 },
      { name: '表象与本质', value: 0.5 },
      { name: '其它', value: 3.8 },
    ],
  ];
  let option = {
    title: {
      text: '阅读书籍分布',
      left: 'center',
      textStyle: {
        color: '#999',
        fontWeight: 'normal',
        fontSize: 14,
      },
    },
    series: datas.map(function (data, idx) {
      var top = idx * 33.3;
      return {
        type: 'pie',
        radius: [20, 60],
        top: top + '%',
        height: '33.33%',
        left: 'center',
        width: 400,
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1,
        },
        label: {
          alignTo: 'edge',
          formatter: '{name|{b}}\n{time|{c} 小时}',
          minMargin: 5,
          edgeDistance: 10,
          lineHeight: 15,
          rich: {
            time: {
              fontSize: 10,
              color: '#999',
            },
          },
        },
        labelLine: {
          length: 15,
          length2: 0,
          maxSurfaceAngle: 80,
        },
        labelLayout: function (params) {
          const isLeft = params.labelRect.x < chartRef?.getWidth?.() / 2;
          const points = params.labelLinePoints;
          // Update the end point.
          points[2][0] = isLeft ? params.labelRect.x : params.labelRect.x + params.labelRect.width;
          return {
            labelLinePoints: points,
          };
        },
        data: data,
      };
    }),
  };
  return option;
};

//富文本标签--可拖拽
const pieChart4 = () => {
  let ROOT_PATH = 'https://echarts.apache.org/examples';

  const weatherIcons = {
    Sunny: ROOT_PATH + '/data/asset/img/weather/sunny_128.png',
    Cloudy: ROOT_PATH + '/data/asset/img/weather/cloudy_128.png',
    Showers: ROOT_PATH + '/data/asset/img/weather/showers_128.png',
  };

  let option = {
    title: {
      text: 'Weather Statistics',
      subtext: 'Fake Data',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      bottom: 10,
      left: 'center',
      data: ['CityA', 'CityB', 'CityD', 'CityC', 'CityE'],
    },
    series: [
      {
        type: 'pie',
        radius: '65%',
        center: ['50%', '50%'],
        selectedMode: 'single',
        data: [
          {
            value: 1548,
            name: 'CityE',
            label: {
              formatter: [
                '{title|{b}}{abg|}',
                '  {weatherHead|Weather}{valueHead|Days}{rateHead|Percent}',
                '{hr|}',
                '  {Sunny|}{value|202}{rate|55.3%}',
                '  {Cloudy|}{value|142}{rate|38.9%}',
                '  {Showers|}{value|21}{rate|5.8%}',
              ].join('\n'),
              backgroundColor: '#eee',
              borderColor: '#777',
              borderWidth: 1,
              borderRadius: 4,
              rich: {
                title: {
                  color: '#eee',
                  align: 'center',
                },
                abg: {
                  backgroundColor: '#333',
                  width: '100%',
                  align: 'right',
                  height: 25,
                  borderRadius: [4, 4, 0, 0],
                },
                Sunny: {
                  height: 30,
                  align: 'left',
                  backgroundColor: {
                    image: weatherIcons.Sunny,
                  },
                },
                Cloudy: {
                  height: 30,
                  align: 'left',
                  backgroundColor: {
                    image: weatherIcons.Cloudy,
                  },
                },
                Showers: {
                  height: 30,
                  align: 'left',
                  backgroundColor: {
                    image: weatherIcons.Showers,
                  },
                },
                weatherHead: {
                  color: '#333',
                  height: 24,
                  align: 'left',
                },
                hr: {
                  borderColor: '#777',
                  width: '100%',
                  borderWidth: 0.5,
                  height: 0,
                },
                value: {
                  width: 20,
                  padding: [0, 20, 0, 30],
                  align: 'left',
                },
                valueHead: {
                  color: '#333',
                  width: 20,
                  padding: [0, 20, 0, 30],
                  align: 'center',
                },
                rate: {
                  width: 40,
                  align: 'right',
                  padding: [0, 10, 0, 0],
                },
                rateHead: {
                  color: '#333',
                  width: 40,
                  align: 'center',
                  padding: [0, 10, 0, 0],
                },
              },
            },
          },
          { value: 735, name: 'CityC' },
          { value: 510, name: 'CityD' },
          { value: 434, name: 'CityB' },
          { value: 335, name: 'CityA' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
        //可拖拽
        labelLayout: {
          draggable: true,
        },
      },
    ],
  };
  return option;
};

export default {
  pieChart,
  pieChart2,
  pieChart3,
  pieChart4,
};
