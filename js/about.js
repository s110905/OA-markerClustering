/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

$(function () {
  // Demo 用的座標點
  var points = [[21.994235, 120.863729],[22.037142, 120.837261],[22.143732, 120.70039],[22.337672, 120.370291],[22.349427, 120.367965],[22.431737, 120.51579],[22.441757, 120.492007],[22.483866, 120.516487],[22.495073, 120.546497],[22.535255, 120.589615],[22.557199, 120.470708],[22.564768, 120.33741],[22.569472, 120.363261],[22.58814, 120.309174],[22.588813, 120.420808],[22.594668, 120.389113],[22.594761, 120.488552],[22.606163, 120.307629],[22.606975, 120.306963],[22.608542, 120.272208],[22.614466, 120.300463],[22.614723, 120.361454],[22.621687, 120.525305],[22.623386, 120.326916],[22.623601, 120.30124],[22.624715, 120.281539],[22.625392, 120.266576],[22.625622, 120.281986],[22.627489, 120.324803],[22.628189, 120.328294],[22.628546, 120.316824],[22.629515, 120.304569],[22.630342, 120.31953],[22.63347, 120.348492],[22.634193, 120.262135],[22.636206, 120.325169],[22.638633, 120.298423],[22.645427, 120.341444],[22.645475, 120.61076],[22.646509, 120.304805],[22.646925, 120.289084],[22.647312, 120.616663],[22.650045, 120.287466],[22.651637, 120.302906],[22.659086, 120.283035],[22.660919, 120.294767],[22.661174, 120.479439],[22.661455, 121.473805],[22.662723, 120.361335],[22.66568, 120.505108],[22.669242, 120.572146],[22.671778, 120.484417],[22.673807, 120.361284],[22.675386, 120.306854],[22.694066, 120.552722],[22.706395, 120.297048],[22.707294, 120.643791],[22.717019, 120.283842],[22.71797, 120.346523],[22.719463, 120.306164],[22.725922, 120.407494],[22.730993, 120.351567],[22.736348, 120.309959],[22.74078, 120.520939],[22.752305, 121.14823],[22.753982, 120.27628],[22.755242, 120.445864],[22.756159, 120.313817],[22.758235, 121.154975],[22.760476, 120.580354],[22.768183, 121.103526],[22.772621, 120.495395],[22.790782, 120.289098],[22.791262, 121.123664],[22.795744, 121.1975],[22.833121, 120.263995],[22.847923, 120.448479],[22.88119, 120.577161],[22.886096, 120.388942],[22.898698, 120.180023],[22.901726, 120.541705],[22.909861, 120.714496],[22.926225, 120.185507],[22.93778, 120.176355],[22.94562, 120.417561],[22.959183, 120.225543],[22.970375, 120.283056],[22.973841, 120.223773],[22.976027, 120.190956],[22.977235, 120.2117],[22.978316, 120.210982],[22.983151, 120.21971],[22.988661, 120.221353],[22.989024, 120.19212],[22.990302, 120.227601],[22.990661, 120.202219],[22.992278, 120.217737],[22.994759, 120.220328],[22.996651, 120.216308],[22.997073, 120.210095],[22.998009, 120.194041],[23.000266, 120.164265],[23.00072, 120.194936],[23.001195, 120.26598],[23.009092, 120.219456],[23.015096, 120.212821],[23.0151, 120.240242],[23.018181, 120.192909],[23.027884, 120.562947],[23.029641, 120.308357],[23.041018, 120.277541],[23.041467, 120.187669],[23.049385, 121.164075],[23.069647, 120.222895],[23.07517, 120.294572],[23.098045, 120.285077],[23.106498, 120.294837],[23.120039, 120.236248],[23.133366, 120.28842],[23.137982, 120.114956],[23.18642, 120.373722],[23.200602, 120.368618],[23.222046, 121.317042],[23.233081, 120.265351],[23.243594, 120.160305],[23.279325, 120.226984],[23.294305, 120.276944],[23.302623, 120.304149],[23.311928, 120.26009],[23.322392, 120.311438],[23.339025, 121.31006],[23.348147, 120.445719],[23.3595, 121.323795],[23.384633, 120.155272],[23.421609, 120.182436],[23.429643, 120.472957],[23.433618, 120.317959],[23.446088, 120.585806],[23.45228, 120.432225],[23.463712, 120.247352],[23.46783, 120.46616],[23.476116, 120.430667],[23.477136, 120.468088],[23.477488, 120.449794],[23.477687, 120.455745],[23.480975, 120.488633],[23.487265, 120.45524],[23.492093, 120.469935],[23.496535, 120.386001],[23.499905, 121.358767],[23.510957, 120.124575],[23.519104, 119.594083],[23.55583, 120.43423],[23.560024, 119.629301],[23.567075, 120.31934],[23.572669, 120.420955],[23.595225, 119.505374],[23.596774, 120.458056],[23.606616, 120.454835],[23.61439, 120.163603],[23.62137, 120.577327],[23.649965, 119.603555],[23.654733, 120.279128],[23.658731, 121.421129],[23.689794, 120.533495],[23.716821, 120.53741],[23.745823, 121.449572],[23.750407, 120.251182],[23.798234, 120.364005],[23.80967, 120.727739],[23.811832, 120.61647],[23.826376, 120.795366],[23.834146, 120.637023],[23.841046, 121.507886],[23.848426, 120.914184],[23.85141, 120.685391],[23.86891, 120.494677],[23.869712, 120.947851],[23.888804, 120.63285],[23.892875, 120.732701],[23.894282, 120.571373],[23.895922, 120.935367],[23.917703, 120.502542],[23.921699, 120.668085],[23.9223, 121.601021],[23.937983, 120.513592],[23.943691, 120.985236],[23.947557, 120.623152],[23.949305, 120.937626],[23.950484, 120.482206],[23.952695, 121.583393],[23.954166, 120.575548],[23.960577, 120.966276],[23.962327, 120.684679],[23.962643, 120.999779],[23.970911, 120.949014],[23.971905, 121.611926],[23.972254, 121.585318],[23.978465, 121.608438],[23.979413, 120.689806],[23.987544, 120.562418],[23.987959, 121.606044],[23.988111, 121.628258],[23.992431, 121.602812],[23.994297, 121.032954],[23.996677, 121.586279],[23.998644, 120.601474],[24.010856, 121.633889],[24.01648, 120.626432],[24.021307, 120.431649],[24.040177, 120.510955],[24.041751, 120.701137],[24.05361, 120.698927],[24.056511, 121.162703],[24.059088, 120.744525],[24.059188, 120.547481],[24.065357, 120.45262],[24.076754, 120.726047],[24.07916, 120.538285],[24.080712, 120.559549],[24.081732, 120.643568],[24.087114, 120.549212],[24.09048, 120.538327],[24.09364, 120.689353],[24.107322, 120.775687],[24.107367, 120.631286],[24.109167, 120.686721],[24.11316, 120.493566],[24.114919, 120.669854],[24.117223, 120.631118],[24.118926, 120.657182],[24.120133, 120.672659],[24.12086, 120.720499],[24.123094, 120.67677],[24.128673, 120.685038],[24.131264, 120.50326],[24.131281, 120.650083],[24.133711, 120.609895],[24.133796, 120.700599],[24.136043, 120.650383],[24.138811, 120.663142],[24.139015, 120.67759],[24.144759, 120.673748],[24.145896, 120.644457],[24.146886, 120.681568],[24.146912, 120.688713],[24.147764, 120.680137],[24.148747, 120.663063],[24.149617, 120.681213],[24.150649, 120.733374],[24.152166, 120.684771],[24.153501, 120.653566],[24.153976, 120.660607],[24.155388, 120.691315],[24.155659, 120.662784],[24.156714, 120.649584],[24.160419, 120.644323],[24.167544, 120.672409],[24.16764, 120.633958],[24.168964, 120.694305],[24.169068, 120.574146],[24.170966, 120.685488],[24.174175, 120.8001],[24.176714, 120.645258],[24.17852, 120.677088],[24.180538, 120.610795],[24.181126, 121.494038],[24.181594, 120.594363],[24.183198, 120.622786],[24.183273, 120.59169],[24.187777, 120.730555],[24.188969, 120.644583],[24.191306, 120.681911],[24.19594, 120.806115],[24.197375, 120.563918],[24.207743, 120.601058],[24.214519, 120.710902],[24.221574, 120.659331],[24.225026, 120.576967],[24.233001, 120.66749],[24.234203, 120.560049],[24.236751, 120.955696],[24.24131, 120.557354],[24.2456, 120.709034],[24.245941, 120.833835],[24.250352, 120.706434],[24.256567, 120.646937],[24.256897, 120.731097],[24.257, 120.829215],[24.265126, 120.533756],[24.26588, 120.546163],[24.270388, 120.791258],[24.270686, 120.659375],[24.272541, 120.576442],[24.282574, 120.871158],[24.298239, 120.633002],[24.298239, 121.753224],[24.315482, 120.722948],[24.321764, 120.837626],[24.341397, 120.768504],[24.35429, 121.311507],[24.360326, 120.774406],[24.384093, 120.80101],[24.390324, 120.781591],[24.41404, 118.333574],[24.424253, 120.871277],[24.426794, 118.31523],[24.43038, 118.245214],[24.438605, 118.41891],[24.444246, 118.319663],[24.458678, 118.364747],[24.462348, 118.45341],[24.481097, 118.430106],[24.484132, 120.820477],[24.509705, 120.690924],[24.544449, 120.814725],[24.554337, 120.815663],[24.57338, 120.735532],[24.587722, 120.890709],[24.59654, 121.849732],[24.608514, 121.81518],[24.645942, 121.834213],[24.653896, 120.955376],[24.663444, 121.746549],[24.667204, 120.84544],[24.671991, 121.813778],[24.672103, 121.771764],[24.675253, 120.861328],[24.682043, 120.948918],[24.682254, 121.753419],[24.683543, 120.911322],[24.687078, 120.893151],[24.690222, 121.737212],[24.692621, 120.912554],[24.698306, 120.887903],[24.699984, 120.996577],[24.71488, 121.734377],[24.726803, 121.034972],[24.733753, 121.091492],[24.738836, 120.904581],[24.739967, 121.75781],[24.746562, 121.785489],[24.751934, 121.748152],[24.763637, 121.724956],[24.767407, 120.979562],[24.773926, 121.046135],[24.774839, 120.972162],[24.775991, 120.997441],[24.776825, 121.006152],[24.779944, 121.000977],[24.783961, 121.022251],[24.788933, 120.995836],[24.789334, 121.719912],[24.790022, 120.978027],[24.791345, 120.995269],[24.792791, 120.964765],[24.793977, 120.992345],[24.794329, 121.010032],[24.797486, 120.956042],[24.800924, 121.035567],[24.801178, 120.962775],[24.801727, 120.916948],[24.802967, 121.134435],[24.804623, 120.993602],[24.806063, 120.974487],[24.808087, 121.766837],[24.810992, 121.049121],[24.813883, 121.033203],[24.815074, 120.995084],[24.815135, 121.016415],[24.815322, 121.240912],[24.815702, 121.014746],[24.817942, 120.966498],[24.821149, 121.181183],[24.826821, 121.775091],[24.83432, 121.01978],[24.837907, 120.975093],[24.848779, 121.055762],[24.85537, 120.943232],[24.85996, 121.209501],[24.863232, 120.990555],[24.865148, 121.222392],[24.872034, 121.165436],[24.877563, 120.949901],[24.878567, 121.011434],[24.882917, 121.287466],[24.892351, 121.283853],[24.895651, 120.984375],[24.897112, 121.143986],[24.911019, 121.1492],[24.911597, 120.966526],[24.919347, 121.209372],[24.92105, 121.549329],[24.929426, 121.373827],[24.930614, 121.560601],[24.932137, 121.454617],[24.933578, 121.350085],[24.933954, 121.37938],[24.938153, 121.371196],[24.940048, 121.375606],[24.945067, 121.230617],[24.951783, 121.263672],[24.952372, 121.533554],[24.953291, 121.2566],[24.955048, 121.241351],[24.955562, 121.336897],[24.955875, 121.218274],[24.95623, 121.212975],[24.956376, 121.541043],[24.959127, 121.359342],[24.959716, 121.226497],[24.961077, 121.507665],[24.961648, 121.478091],[24.966807, 121.426688],[24.966905, 121.389174],[24.967105, 121.587249],[24.970035, 121.596548],[24.97437, 121.319653],[24.974391, 121.251603],[24.976329, 121.546186],[24.976715, 121.368398],[24.97809, 121.520339],[24.979093, 121.321414],[24.980196, 121.561072],[24.984808, 121.285273],[24.985296, 121.557331],[24.985388, 121.517213],[24.986463, 121.553809],[24.987083, 121.278975],[24.987588, 121.499662],[24.98779, 121.426505],[24.988138, 121.181708],[24.988332, 121.46611],[24.988574, 121.449434],[24.988732, 121.508606],[24.989276, 121.566893],[24.989637, 121.433493],[24.991944, 121.546111],[24.992405, 121.499274],[24.994638, 121.221301],[24.994922, 121.451453],[24.995123, 121.522007],[24.995219, 121.568795],[24.996407, 121.462102],[24.997799, 121.412555],[24.99788, 121.547281],[24.997902, 121.478495],[24.998058, 121.485457],[24.998725, 121.86542],[24.999755, 121.517666],[24.99979, 121.541184],[25.000607, 121.512038],[25.00164, 121.523503],[25.002063, 121.462049],[25.002615, 121.55303],[25.002717, 121.487902],[25.002779, 121.514708],[25.003034, 121.586746],[25.004384, 121.567559],[25.005515, 121.524668],[25.006131, 121.326096],[25.006577, 121.341393],[25.007531, 121.456606],[25.00778, 121.470043],[25.00947, 121.316079],[25.009635, 121.42514],[25.010115, 121.460943],[25.010638, 121.486139],[25.012084, 121.432838],[25.012464, 121.521032],[25.014466, 121.458371],[25.015105, 121.947011],[25.015376, 121.534283],[25.016081, 121.551459],[25.016096, 121.54833],[25.016506, 121.574862],[25.016537, 121.53542],[25.016737, 121.515406],[25.018508, 121.315953],[25.019227, 121.47665],[25.019499, 121.505298],[25.022095, 121.535826],[25.022613, 121.469344],[25.022698, 121.260383],[25.023713, 121.940203],[25.024312, 121.581682],[25.024782, 121.545979],[25.025503, 121.317859],[25.026107, 121.425586],[25.026328, 121.509915],[25.02648, 121.476411],[25.026484, 121.482451],[25.027074, 121.527985],[25.028487, 121.567426],[25.028555, 121.107373],[25.028606, 121.543348],[25.028939, 121.755722],[25.029114, 121.538704],[25.029516, 121.410982],[25.029881, 121.470303],[25.030062, 121.474252],[25.030486, 121.480088],[25.031457, 121.53812],[25.032073, 121.591719],[25.032566, 121.568438],[25.033086, 121.513522],[25.033239, 121.534776],[25.033726, 121.389462],[25.033925, 121.523678],[25.037404, 121.43308],[25.037612, 121.576619],[25.038898, 121.549671],[25.039331, 121.507797],[25.039856, 121.546319],[25.039983, 121.508013],[25.040276, 121.576962],[25.040718, 121.624454],[25.04, 121.507222],[25.0421, 121.55648],[25.042704, 121.444578],[25.043537, 121.546598],[25.043614, 121.502834],[25.044359, 121.520395],[25.044404, 121.532258],[25.044672, 121.580234],[25.044693, 121.617927],[25.045098, 121.293248],[25.045222, 121.53486],[25.04666, 121.478239],[25.047072, 121.54862],[25.047465, 121.448474],[25.047772, 121.563836],[25.047799, 121.426051],[25.049293, 121.578008],[25.049329, 121.543786],[25.050486, 121.91893],[25.050595, 121.448486],[25.050981, 121.294001],[25.051338, 121.451873],[25.051911, 121.428182],[25.052464, 121.532942],[25.05415, 121.514972],[25.054322, 121.605587],[25.054468, 121.487969],[25.055589, 121.46146],[25.055884, 121.582625],[25.055896, 121.549989],[25.05632, 121.555719],[25.05671, 121.30011],[25.056728, 121.515404],[25.056967, 121.36261],[25.057088, 121.450845],[25.057599, 121.559751],[25.05775, 121.483593],[25.057968, 121.569428],[25.058655, 121.544385],[25.058689, 121.585317],[25.059345, 121.563692],[25.059427, 121.610267],[25.059486, 121.367592],[25.059946, 121.531114],[25.061584, 121.515675],[25.061702, 121.548607],[25.061742, 121.523791],[25.06493, 121.822647],[25.0653, 121.193404],[25.065476, 121.571926],[25.06609, 121.489319],[25.066492, 121.493364],[25.066802, 121.374685],[25.067346, 121.658465],[25.067686, 121.53148],[25.069806, 121.628093],[25.069828, 121.524108],[25.071204, 121.203493],[25.071652, 121.574667],[25.074273, 121.491739],[25.074601, 121.479744],[25.075743, 121.518481],[25.076077, 121.607726],[25.076434, 121.579321],[25.076719, 121.501426],[25.077061, 121.485638],[25.077094, 121.525632],[25.077466, 121.541396],[25.079784, 121.371102],[25.080517, 121.562395],[25.081081, 121.350292],[25.081339, 121.58148],[25.08173, 121.555813],[25.081768, 121.520308],[25.081979, 121.668529],[25.082632, 121.567937],[25.082709, 121.601834],[25.08352, 121.400635],[25.083724, 121.556006],[25.083769, 121.382077],[25.083775, 121.464144],[25.083833, 121.594333],[25.085352, 121.517721],[25.089841, 121.458243],[25.090076, 121.467697],[25.090245, 121.597519],[25.090966, 121.37953],[25.09119, 121.515013],[25.092131, 121.700054],[25.092245, 121.508727],[25.099059, 121.525777],[25.099383, 121.530285],[25.102973, 121.536243],[25.105551, 121.54217],[25.10774, 121.804722],[25.111307, 121.819656],[25.112526, 121.512059],[25.114344, 121.525637],[25.11599, 121.489382],[25.116557, 121.537612],[25.118866, 121.552719],[25.120759, 121.508081],[25.121965, 121.741599],[25.123886, 121.461403],[25.126885, 121.719118],[25.127937, 121.727708],[25.131676, 121.575383],[25.131778, 121.514353],[25.132307, 121.732761],[25.133181, 121.503215],[25.133324, 121.75236],[25.134992, 121.469287],[25.136496, 121.539776],[25.141623, 121.463523],[25.145635, 121.769267],[25.146518, 121.784412],[25.151527, 121.442236],[25.156112, 121.645173],[25.156119, 121.438044],[25.156125, 121.76668],[25.157138, 121.419801],[25.167694, 121.540016],[25.170841, 121.484189],[25.171754, 121.440953],[25.171854, 121.584465],[25.177892, 121.429687],[25.179522, 121.429602],[25.182788, 121.405745],[25.184661, 121.685978],[25.198486, 121.594438],[25.225167, 121.515807],[25.228117, 121.644316],[25.239791, 121.561569],[25.245547, 121.612325],[25.247036, 121.473896],[25.289754, 121.548846],[25.293453, 121.539854]];

  // 載入地圖
  google.maps.event.addDomListener (window, 'load', function () {
    

// 使用 google.maps.LatLng 為陣列元素 ========================================================================
    // 初始化地圖 1
    var maps1 = new google.maps.Map ($('#maps1').get (0), { zoom: 8, center: new google.maps.LatLng (23.8, 120.8), zoomControl: true, scrollwheel: true, scaleControl: true, mapTypeControl: false, navigationControl: true, streetViewControl: false, disableDoubleClickZoom: true});
    maps1.mapTypes.set ('map_style', new google.maps.StyledMapType ([{featureType: 'all', stylers: [{ visibility: 'on' }]}, {featureType: 'administrative', stylers: [{ visibility: 'simplified' }]}, {featureType: 'landscape', stylers: [{ visibility: 'simplified' }]}, {featureType: 'poi', stylers: [{ visibility: 'simplified' }]}, {featureType: 'road', stylers: [{ visibility: 'simplified' }]}, {featureType: 'road.arterial', stylers: [{ visibility: 'simplified' }]}, {featureType: 'transit', stylers: [{ visibility: 'simplified' }]}, {featureType: 'water', stylers: [{ color: '#b3d1ff', visibility: 'simplified' }]}, {elementType: "labels.icon", stylers:[{ visibility: 'off' }]}]));
    maps1.setMapTypeId ('map_style');

    // 宣告 OAMarkerClustering 物件
      // moveRun  -  當地圖移動時，重新針對範圍內做計算再合併。(較快，但會閃娑)
      // runAll   -  先算所有不同 zoom 時要顯示的結果，當地圖移動時，直接顯示。(較慢，但畫面不易閃娑)
    var cluster1 = new OAMarkerClustering ({
      maps: maps1,
      type: 'moveRun' // 分別有 moveRun、runAll
    });

    // 產生 LatLng 物件陣列
    var latLngs = points.map (function (t) {
      return new google.maps.LatLng (t[0], t[1]);
    });

    // 設置 LatLng 物件陣列
    cluster1.setLatLngs (latLngs);
    
    // 設置 多個 Marker 集合樣式，第一個參數為該點資訊，第二個參數為集合了多少點
    cluster1.setClusteringMarker (function (e, count) {
      return new MarkerWithLabel ({
          map: maps1,
          position: e,
          labelContent: count,
          labelAnchor: new google.maps.Point (40 / 2, 40 / 2),
          labelClass: 'clustering',
          icon: {path: 'M 0 0'},
        });
    });

    // 設置 單個 Marker 樣式，第一個參數為該點資訊
    cluster1.setMarker (function (e) {
      return new google.maps.Marker ({
          map: maps1,
          position: e,
        });
    });
    
// 使用 二維陣列，第一個元素為 lat,第二為 lng ========================================================================

    // 初始化地圖 2
    var maps2 = new google.maps.Map ($('#maps2').get (0), { zoom: 8, center: new google.maps.LatLng (23.8, 120.8), zoomControl: true, scrollwheel: true, scaleControl: true, mapTypeControl: false, navigationControl: true, streetViewControl: false, disableDoubleClickZoom: true});
    maps2.mapTypes.set ('map_style', new google.maps.StyledMapType ([{featureType: 'all', stylers: [{ visibility: 'on' }]}, {featureType: 'administrative', stylers: [{ visibility: 'simplified' }]}, {featureType: 'landscape', stylers: [{ visibility: 'simplified' }]}, {featureType: 'poi', stylers: [{ visibility: 'simplified' }]}, {featureType: 'road', stylers: [{ visibility: 'simplified' }]}, {featureType: 'road.arterial', stylers: [{ visibility: 'simplified' }]}, {featureType: 'transit', stylers: [{ visibility: 'simplified' }]}, {featureType: 'water', stylers: [{ color: '#b3d1ff', visibility: 'simplified' }]}, {elementType: "labels.icon", stylers:[{ visibility: 'off' }]}]));
    maps2.setMapTypeId ('map_style');

    // 宣告 OAMarkerClustering 物件
      // moveRun  -  當地圖移動時，重新針對範圍內做計算再合併。(較快，但會閃娑)
      // runAll   -  先算所有不同 zoom 時要顯示的結果，當地圖移動時，直接顯示。(較慢，但畫面不易閃娑)
    var cluster2 = new OAMarkerClustering ({
      maps: maps2,
      type: 'runAll' // 分別有 moveRun、runAll
    });

    // 設置 座標陣列
    cluster2.setArrays (points);
    
    // 設置 多個 Marker 集合樣式，第一個參數為該點資訊，第二個參數為集合了多少點
    cluster2.setClusteringMarker (function (e, count) {
      return new MarkerWithLabel ({
          map: maps2,
          position: new google.maps.LatLng (e[0], e[1]),
          labelContent: count,
          labelAnchor: new google.maps.Point (50 / 2, 50 / 2),
          labelClass: 'clustering',
          icon: {path: 'M 0 0'},
        });
    });
    
    // 設置 單個 Marker 樣式，第一個參數為該點資訊
    cluster2.setMarker (function (e) {
      return new google.maps.Marker ({
          map: maps2,
          position: new google.maps.LatLng (e[0], e[1]),
        });
    });
  });
});