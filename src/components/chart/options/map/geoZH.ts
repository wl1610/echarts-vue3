import { chinaGeo } from './china.geo';

export const chinaGeoCoordMap = chinaGeo.reduce((p: object, c: any) => {
  const { properties } = c;
  const { name, cp } = properties;
  p[name] = cp;
  return p;
}, {});

export const geoCoordMap = {
  海门: [121.15, 31.89],
  鄂尔多斯: [109.781327, 39.608266],
  招远: [120.38, 37.35],
  舟山: [122.207216, 29.985295],
  齐齐哈尔: [123.97, 47.33],
  盐城: [120.13, 33.38],
  赤峰: [118.87, 42.28],
  青岛: [120.33, 36.07],
  乳山: [121.52, 36.89],
  金昌: [102.188043, 38.520089],
  泉州: [118.58, 24.93],
  莱西: [120.53, 36.86],
  日照: [119.46, 35.42],
  胶南: [119.97, 35.88],
  南通: [121.05, 32.08],
  拉萨: [91.11, 29.97],
  云浮: [112.02, 22.93],
  梅州: [116.1, 24.55],
  文登: [122.05, 37.2],

  攀枝花: [101.718637, 26.582347],
  威海: [122.1, 37.5],
  承德: [117.93, 40.97],
  厦门: [118.1, 24.46],
  汕尾: [115.375279, 22.786211],
  潮州: [116.63, 23.68],
  丹东: [124.37, 40.13],
  太仓: [121.1, 31.45],
  曲靖: [103.79, 25.51],
  烟台: [121.39, 37.52],
  福州: [119.3, 26.08],
  瓦房店: [121.979603, 39.627114],
  即墨: [120.45, 36.38],
  抚顺: [123.97, 41.97],
  玉溪: [102.52, 24.35],
  张家口: [114.87, 40.82],
  阳泉: [113.57, 37.85],
  莱州: [119.942327, 37.177017],
  湖州: [120.1, 30.86],
  汕头: [116.69, 23.39],
  昆山: [120.95, 31.39],
  宁波: [121.56, 29.86],
  湛江: [110.359377, 21.270708],
  揭阳: [116.35, 23.55],
  荣成: [122.41, 37.16],
  连云港: [119.16, 34.59],
  葫芦岛: [120.836932, 40.711052],
  常熟: [120.74, 31.64],
  东莞: [113.75, 23.04],
  河源: [114.68, 23.73],
  淮安: [119.15, 33.5],
  泰州: [119.9, 32.49],
  南宁: [108.33, 22.84],
  营口: [122.18, 40.65],
  惠州: [114.4, 23.09],
  江阴: [120.26, 31.91],
  蓬莱: [120.75, 37.8],
  韶关: [113.62, 24.84],
  嘉峪关: [98.289152, 39.77313],

  延安: [109.47, 36.6],
  太原: [112.53, 37.87],
  清远: [113.01, 23.7],
  中山: [113.38, 22.52],
  昆明: [102.73, 25.04],
  寿光: [118.73, 36.86],
  盘锦: [122.070714, 41.119997],
  长治: [113.08, 36.18],
  深圳: [114.07, 22.62],
  珠海: [113.52, 22.3],
  宿迁: [118.3, 33.96],
  咸阳: [108.72, 34.36],
  铜川: [109.11, 35.09],
  平度: [119.97, 36.77],
  佛山: [113.11, 23.05],
  海口: [110.35, 20.02],
  江门: [113.06, 22.61],
  章丘: [117.53, 36.72],
  肇庆: [112.44, 23.05],
  大连: [121.62, 38.92],
  临汾: [111.5, 36.08],
  吴江: [120.63, 31.16],
  石嘴山: [106.39, 39.04],
  沈阳: [123.38, 41.8],
  苏州: [120.62, 31.32],
  茂名: [110.88, 21.68],
  嘉兴: [120.76, 30.77],
  长春: [125.35, 43.88],
  胶州: [120.03336, 36.264622],
  银川: [106.27, 38.47],
  张家港: [120.555821, 31.875428],
  三门峡: [111.19, 34.76],
  锦州: [121.15, 41.13],
  南昌: [115.89, 28.68],
  柳州: [109.4, 24.33],
  三亚: [109.511909, 18.252847],
  自贡: [104.778442, 29.33903],

  阳江: [111.95, 21.85],
  泸州: [105.39, 28.91],
  西宁: [101.74, 36.56],

  宜宾: [104.56, 29.77],
  呼和浩特: [111.65, 40.82],
  成都: [104.06, 30.67],
  大同: [113.3, 40.12],
  镇江: [119.44, 32.2],
  桂林: [110.28, 25.29],
  张家界: [110.479191, 29.117096],
  宜兴: [119.82, 31.36],
  北海: [109.12, 21.49],
  西安: [108.95, 34.27],

  金坛: [119.56, 31.74],
  东营: [118.49, 37.46],
  牡丹江: [129.58, 44.6],
  遵义: [106.9, 27.7],
  绍兴: [120.58, 30.01],
  扬州: [119.42, 32.39],
  常州: [119.95, 31.79],
  潍坊: [119.1, 36.62],

  台州: [121.420757, 28.656386],
  南京: [118.78, 32.04],
  滨州: [118.03, 37.36],
  贵阳: [106.71, 26.57],
  无锡: [120.29, 31.59],
  本溪: [123.73, 41.3],
  克拉玛依: [84.77, 45.59],
  渭南: [109.5, 34.52],
  马鞍山: [118.48, 31.56],
  宝鸡: [107.15, 34.38],
  焦作: [113.21, 35.24],
  句容: [119.16, 31.95],
  徐州: [117.2, 34.26],
  衡水: [115.72, 37.72],
  包头: [110, 40.58],
  内蒙: [110, 40.58],
  绵阳: [104.73, 31.48],
  乌鲁木齐: [87.68, 43.77],
  枣庄: [117.57, 34.86],
  杭州: [120.19, 30.26],
  淄博: [118.05, 36.78],
  鞍山: [122.85, 41.12],
  溧阳: [119.48, 31.43],
  库尔勒: [86.06, 41.68],
  安阳: [114.35, 36.1],
  开封: [114.35, 34.79],
  济南: [117, 36.65],
  德阳: [104.37, 31.13],
  温州: [120.65, 28.01],
  九江: [115.97, 29.71],
  邯郸: [114.47, 36.6],
  临安: [119.72, 30.23],
  兰州: [103.73, 36.03],
  沧州: [116.83, 38.33],
  临沂: [118.35, 35.05],
  南充: [106.110698, 30.837793],

  富阳: [119.95, 30.07],
  泰安: [117.13, 36.18],
  诸暨: [120.23, 29.71],
  郑州: [113.65, 34.76],
  哈尔滨: [126.63, 45.75],
  聊城: [115.97, 36.45],
  芜湖: [118.38, 31.33],
  唐山: [118.02, 39.63],
  平顶山: [113.29, 33.75],
  邢台: [114.48, 37.05],
  德州: [116.29, 37.45],
  济宁: [116.59, 35.38],
  荆州: [112.239741, 30.335165],
  宜昌: [111.3, 30.7],
  义乌: [120.06, 29.32],
  丽水: [119.92, 28.45],
  洛阳: [112.44, 34.7],
  秦皇岛: [119.57, 39.95],
  株洲: [113.16, 27.83],
  石家庄: [114.48, 38.03],
  莱芜: [117.67, 36.19],
  常德: [111.69, 29.05],

  湘潭: [112.91, 27.87],
  金华: [119.64, 29.12],
  岳阳: [113.09, 29.37],
  长沙: [113, 28.21],
  衢州: [118.88, 28.97],
  廊坊: [116.7, 39.53],
  菏泽: [115.480656, 35.23375],
  合肥: [117.27, 31.86],
  武汉: [114.31, 30.52],
  大庆: [125.03, 46.58],

  台湾: [121.56541770000001, 25.0329694],
  山西: [112.5508635890553, 37.89027705396754],
  福建: [119.33022110712668, 26.04712549657293],
  贵州: [105.7091770961758, 26.62990674144093],

  湖南: [112.9793527876505, 28.21347823085322],
  湖北: [114.31620010268132, 30.58108412692075],
  广东: [114.30764967515182, 23.12004910207623],
  安徽: [117.28269909168304, 32.56694226068694],
  四川: [101.06792346330406, 30.679942845419564],
  江苏: [118.796877, 32.060255],
  新疆: [88.77, 41.59],
  澳门: [113.55751910182492, 22.204117988443336],
  河北: [114.52208184420766, 38.048958314615454],
  河南: [113.64964384986449, 34.756610064140254],
  西藏: [91.11189089598402, 29.662557062056536],
  海南: [110.3308018483363, 20.022071276952243],
  宁夏: [106.2064786078384, 38.50262101187604],

  重庆: [106.53063501341296, 29.54460610888615],
  江西: [115.89352754583604, 28.689578000141147],
  云南: [102.71460113878045, 25.049153100453157],
  广西: [108.29723355586638, 22.80649293560261],

  甘肃: [103.8233054407292, 36.06422552504259],
  内蒙古: [111.6603505200542, 40.828318873081585],
  陕西: [108.95, 34.27],
  吉林: [125.31364242720072, 43.89833760709784],
  山东: [117.02496706629023, 36.68278472716141],
  浙江: [120.2193754157201, 30.259244461536102],
  青海: [101.74, 36.56],
  天津: [117.21081309155257, 39.143929903310074],
  辽宁: [121.43279092160505, 41.708644783515746],
  黑龙江: [126.65771685544611, 46.832246332393],
  上海: [121.48789948569473, 31.24916171001514],
  北京: [116.4551, 40.2539],
  广州: [113.5107, 23.2196],
  保定: [113.23, 23.16],
  阿富汗: [67.709953, 33.93911],
  安哥拉: [17.873887, -11.202692],
  阿尔巴尼亚: [20.168331, 41.153332],
  阿联酋: [53.847818, 23.424076],

  亚美尼亚: [45.038189, 40.069099],
  法属南半球和南极领地: [69.348557, -49.280366],
  澳大利亚: [133.775136, -25.274398],
  奥地利: [14.550072, 47.516231],
  阿塞拜疆: [47.576927, 40.143105],
  布隆迪: [29.918886, -3.373056],
  比利时: [4.469936, 50.503887],
  贝宁: [2.315834, 9.30769],
  布基纳法索: [-1.561593, 12.238333],
  孟加拉国: [90.356331, 23.684994],
  保加利亚: [25.48583, 42.733883],
  巴哈马: [-77.39627999999999, 25.03428],
  波斯尼亚和黑塞哥维那: [17.679076, 43.915886],
  白俄罗斯: [27.953389, 53.709807],
  伯利兹: [-88.49765, 17.189877],
  百慕大: [-64.7505, 32.3078],

  多伦多: [-79.383184, 43.653226],
  维尔纽斯: [25.279651, 54.687156],
  华沙: [21.012229, 52.229676],
  维也纳: [16.373819, 48.208174],
  苏黎世: [8.541694, 47.376887],
  日内瓦: [6.143158, 46.204391],
  赫尔辛基: [24.938379, 60.169856],
  香港: [114.18612410257077, 22.29358599327966],
  伊斯坦布尔: [28.978359, 41.008238],
  雅加达: [106.845599, -6.208763],
  约翰内斯堡: [28.047305, -26.204103],

  基辅: [30.5234, 50.4501],
  哥本哈根: [12.568337, 55.676097],

  雅典: [-83.357567, 33.951935],
  奥克兰: [174.763332, -36.84846],

  巴塞罗那: [2.173403, 41.385064],
  柏林: [13.404954, 52.520007],
  波哥大: [-74.072092, 4.710989],
  布拉迪斯拉发: [17.107748, 48.148596],
  布鲁塞尔: [4.35171, 50.85034],
  布达佩斯: [19.040235, 47.497912],
  布宜诺斯艾利斯: [-58.381559, -34.603684],
  布加勒斯特: [26.102538, 44.426767],
  加拉加斯: [-66.903606, 10.480594],

  德里: [77.209021, 28.613939],
  多哈: [51.53104, 25.285447],
  迪拜: [55.270783, 25.204849],
  都柏林: [-6.26031, 53.349805],

  吉隆坡: [101.686855, 3.139003],
  利马: [-77.042793, -12.046374],
  里斯本: [-9.139337, 38.722252],
  卢布尔雅那: [14.505751, 46.056947],

  卢森堡公国: [6.129583, 49.815273],
  里昂: [4.835659, 45.764043],

  麦纳麦: [50.58605, 26.228516],
  墨西哥城: [260.133208, 19.432608],
  迈阿密: [-80.19179, 25.76168],
  首尔: [127.05, 37.5833],
  东京: [139.691706, 35.689487],
  新加坡: [103.75, 1.3667],
  印度尼西亚: [106.75, 6.1333],
  仁川: [126.6333, 37.05],
  长野: [138.1809557, 36.6512986],
  曼谷: [100.4833, 13.0833],
  河内: [105.8833, 21.0166],
  孟买: [72.85, 19.0833],
  马尼拉: [121.0, 14.6166],
  马来西亚: [120.984219, 14.599512],
  达拉斯: [-96.7833, 32.7833],
  旧金山: [-122.4333, 37.7666],
  纽约: [-73.9166, 37.7666],
  伦敦: [-0.127758, 51.507351],
  法兰克福: [8.682127, 50.110922],
  圣保罗: [-46.38, -23.34],
  阿根廷: [-58.05, -34.0333],
  蒙特利尔: [-73.5833, 45.05],
  悉尼: [151.28333333333333, -33.916666666666664],
  阿姆斯特丹: [4.895168, 52.370216],

  华盛顿: [-77.03333333333333, 38.88333333333333],
  巴黎: [2.033333333333333, 48.85],
  墨西哥: [260.133208, 19.432608],
  洛杉矶: [-118.243685, 34.052234],
  米兰: [9.185924, 45.465422],
  卢森堡: [6.129582999999999, 49.815273],

  立陶宛: [55.169438, 23.881275],
  罗马尼亚: [45.943161, 24.96676],
  芝加哥: [-87.629798, 41.878114],
  亚特兰大: [-84.41666666666667, 33.766666666666666],
  菲尼克斯: [-112.08333333333333, 33.05],
  盐湖城: [-111.8666666666666, 40.766666666666666],
  新泽西: [-74.011653, 40.8932469],
  曼彻斯特: [-2.234166666666667, 53.480555555555554],
  奥兰多: [-81.36666666666666, 28.05],

  硅谷: [-122.43, 37.76],
  土耳其: [43.243322, 38.963745],
  巴拿马: [80.782127, 8.537981],
  马德里: [-3.74922, 40.46366700000001],
  杜塞尔多夫: [6.783333333333333, 51.21666666666667],
  斯德哥尔摩: [18.643501, 60.12816100000001],
  莫斯科: [37.35, 55.45],
  捷克: [15.472962, 49.81749199999999],
  茨瓦内: [22.937506, -30.559482],
  开罗: [30.802498, 26.820553],

  玻利维亚: [-63.58865299999999, -16.290154],
  巴西: [-51.92528, -14.235004],
  文莱: [114.727669, 4.535277],
  不丹: [90.433601, 27.514162],
  博茨瓦纳: [24.684866, -22.328474],
  中非共和国: [20.939444, 6.611110999999999],
  加拿大: [-106.346771, 56.130366],
  瑞士: [8.227511999999999, 46.818188],
  智利: [-71.542969, -35.675147],
  中国: [104.195397, 35.86166],
  象牙海岸: [-5.547079999999999, 7.539988999999999],
  喀麦隆: [12.354722, 7.369721999999999],
  刚果民主共和国: [21.758664, -4.038333],
  刚果共和国: [15.827659, -0.228021],
  哥伦比亚: [-74.297333, 4.570868],
  哥斯达黎加: [-83.753428, 9.748916999999999],
  古巴: [-77.781167, 21.521757],
  北塞浦路斯: [33.429859, 35.126413],
  塞浦路斯: [33.429859, 35.126413],
  捷克共和国: [15.472962, 49.81749199999999],
  德国: [10.451526, 51.165691],
  吉布提: [42.590275, 11.825138],
  丹麦: [9.501785, 56.26392],
  多明尼加共和国: [-70.162651, 18.735693],
  阿尔及利亚: [1.659626, 28.033886],
  厄瓜多尔: [-78.18340599999999, -1.831239],
  埃及: [30.802498, 26.820553],
  厄立特里亚: [39.782334, 15.179384],
  西班牙: [-3.74922, 40.46366700000001],
  爱沙尼亚: [25.013607, 58.595272],
  埃塞俄比亚: [40.489673, 9.145000000000001],
  芬兰: [25.748151, 61.92410999999999],
  斐济: [178.065032, -17.713371],
  福克兰群岛: [-59.523613, -51.796253],
  法国: [2.213749, 46.227638],
  加蓬: [11.609444, -0.803689],
  英国: [-3.435973, 55.378051],
  格鲁吉亚: [-82.9000751, 32.1656221],
  加纳: [-1.023194, 7.946527],
  几内亚: [-9.696645, 9.945587],
  冈比亚: [-15.310139, 13.443182],
  几内亚比绍: [-15.180413, 11.803749],
  赤道几内亚: [10.267895, 1.650801],
  希腊: [21.824312, 39.074208],
  格陵兰: [-42.604303, 71.706936],
  危地马拉: [-90.23075899999999, 15.783471],
  法属圭亚那: [-53.125782, 3.933889],
  圭亚那: [-58.93018, 4.860416],
  洪都拉斯: [-86.241905, 15.199999],
  克罗地亚: [15.2, 45.1],
  海地: [-72.285215, 18.971187],
  匈牙利: [19.503304, 47.162494],
  印尼: [113.921327, -0.789275],
  印度: [78.96288, 20.593684],
  爱尔兰: [-8.24389, 53.41291],
  伊朗: [53.688046, 32.427908],
  伊拉克: [43.679291, 33.223191],
  冰岛: [-19.020835, 64.963051],
  以色列: [34.851612, 31.046051],
  意大利: [12.56738, 41.87194],
  牙买加: [-77.297508, 18.109581],
  约旦: [36.238414, 30.585164],
  日本: [138.252924, 36.204824],
  哈萨克斯坦: [66.923684, 48.019573],
  肯尼亚: [37.906193, -0.023559],
  吉尔吉斯斯坦: [74.766098, 41.20438],
  柬埔寨: [104.990963, 12.565679],
  韩国: [127.766922, 35.907757],
  科索沃: [20.902977, 42.6026359],
  科威特: [47.481766, 29.31166],
  老挝: [102.495496, 19.85627],
  黎巴嫩: [35.862285, 33.854721],
  利比里亚: [-9.429499000000002, 6.428055],
  利比亚: [17.228331, 26.3351],
  斯里兰卡: [80.77179699999999, 7.873053999999999],
  莱索托: [28.233608, -29.609988],
  拉脱维亚: [24.603189, 56.879635],
  摩洛哥: [-7.092619999999999, 31.791702],
  摩尔多瓦: [28.369885, 47.411631],
  马达加斯加: [46.869107, -18.766947],
  马其顿: [21.745275, 41.608635],
  马里: [-3.996166, 17.570692],
  缅甸: [95.956223, 21.913965],
  黑山: [19.37439, 42.708678],
  蒙古: [103.846656, 46.862496],
  莫桑比克: [35.529562, -18.665695],
  毛里塔尼亚: [-10.940835, 21.00789],
  马拉维: [34.301525, -13.254308],
  纳米比亚: [18.49041, -22.95764],
  新喀里多尼亚: [165.618042, -20.904305],
  尼日尔: [8.081666, 17.607789],
  尼日利亚: [8.675277, 9.081999],
  尼加拉瓜: [-85.207229, 12.865416],
  荷兰: [5.291265999999999, 52.132633],
  挪威: [8.468945999999999, 60.47202399999999],
  尼泊尔: [84.12400799999999, 28.394857],
  新西兰: [174.885971, -40.900557],
  阿曼: [55.923255, 21.512583],
  巴基斯坦: [69.34511599999999, 30.375321],
  秘鲁: [-75.015152, -9.189967],
  菲律宾: [121.774017, 12.879721],
  巴布亚新几内亚: [143.95555, -6.314992999999999],
  波兰: [19.145136, 51.919438],
  波多黎各: [-66.590149, 18.220833],
  北朝鲜: [127.510093, 40.339852],
  葡萄牙: [-8.224454, 39.39987199999999],
  巴拉圭: [-58.443832, -23.442503],
  卡塔尔: [51.183884, 25.354826],
  俄罗斯: [105.318756, 61.52401],
  卢旺达: [29.873888, -1.940278],
  西撒哈拉: [-12.885834, 24.215527],
  沙特阿拉伯: [45.079162, 23.885942],
  苏丹: [30.217636, 12.862807],
  南苏丹: [31.3069788, 6.876991899999999],
  塞内加尔: [-14.452362, 14.497401],
  所罗门群岛: [160.156194, -9.64571],
  塞拉利昂: [-11.779889, 8.460555],
  萨尔瓦多: [-88.89653, 13.794185],
  索马里兰: [46.8252838, 9.411743399999999],
  索马里: [46.199616, 5.152149],
  塞尔维亚共和国: [21.005859, 44.016521],
  苏里南: [-56.027783, 3.919305],
  斯洛伐克: [19.699024, 48.669026],
  斯洛文尼亚: [14.995463, 46.151241],
  瑞典: [18.643501, 60.12816100000001],
  斯威士兰: [31.465866, -26.522503],
  叙利亚: [38.996815, 34.80207499999999],
  乍得: [18.732207, 15.454166],
  多哥: [0.824782, 8.619543],
  泰国: [100.992541, 15.870032],
  塔吉克斯坦: [71.276093, 38.861034],
  土库曼斯坦: [59.556278, 38.969719],
  东帝汶: [125.727539, -8.874217],
  特里尼达和多巴哥: [-61.222503, 10.691803],
  突尼斯: [9.537499, 33.886917],
  坦桑尼亚联合共和国: [34.888822, -6.369028],
  乌干达: [32.290275, 1.373333],
  乌克兰: [31.16558, 48.379433],
  乌拉圭: [-55.765835, -32.522779],
  美国: [-95.712891, 37.09024],
  乌兹别克斯坦: [64.585262, 41.377491],
  委内瑞拉: [-66.58973, 6.42375],
  越南: [108.277199, 14.058324],
  瓦努阿图: [166.959158, -15.376706],
  西岸: [35.3027226, 31.9465703],
  也门: [48.516388, 15.552727],
  南非: [22.937506, -30.559482],
  赞比亚: [27.849332, -13.133897],
  津巴布韦: [29.154857, -19.015438],
  塞舌尔群岛: [5, 56],
  老挝人民民主共和国: [102.614429, 17.962769],
  大韩民国: [126.37, 37.28],
};
