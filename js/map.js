/**
 * Created by Administrator on 2016/9/21 0021.
 */
    // 百度地图API功能
var map = new BMap.Map('map');
var poi = new BMap.Point(118.744118, 32.036349);
map.centerAndZoom(poi, 13.5);
map.enableKeyboard();
map.enableDragging();
map.enableScrollWheelZoom();
map.enableDoubleClickZoom();
/*var top_left_navigation = new BMap.NavigationControl(); */ //左上角，添加默认缩放平移控件
var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
    '<img src="img/qsjqjlogo1.png"/*tpa=http://www.qsjqj.com/js/img/qsjqjlogo1.png*/ alt="" style="float:right;zoom:1;overflow:hidden;width:60px;height:64px;margin-left:3px;"/>' +
    '地址：南京河西万达广场F座812室<br/>电话：025-66911667<br/>萝卜特甜科技，成立于2015年，是一家极具包容性与创新性的创客型公司。致力于以前沿科技应用为核心，为全球企业及个人提供高效、创新型解决方案，定制极具个性化的互联网技术与应用服务。' +
    '</div>';
/*map.addControl(top_left_navigation);*/
//创建检索信息窗口对象
var searchInfoWindow = null;
searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
    title: "南京萝卜特甜信息科技有限公司",      //标题
    width: 290,             //宽度
    height: 150,              //高度
    panel: "panel",         //检索结果面板
    enableAutoPan: true,     //自动平移
    searchTypes: [
        BMAPLIB_TAB_SEARCH,   //周边检索
        BMAPLIB_TAB_TO_HERE,  //到这里去
        BMAPLIB_TAB_FROM_HERE //从这里出发
    ]
});
var marker = new BMap.Marker(poi); //创建marker对象
marker.enableDragging(); //marker可拖拽
marker.addEventListener("click", function () {
    searchInfoWindow.open(marker);
});
map.addOverlay(marker); //在地图中添加marker