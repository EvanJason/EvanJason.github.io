webpackJsonp([4],{Jepj:function(t,a,e){"use strict";(function(t){a.a={name:"reserve",data:function(){return{show:!0,RankTop3:[],RankList:[],r_tagname:[],pageIndex:1,pageSize:10,loading:!1}},created:function(){this.ranktop3(),window.addEventListener("scroll",this.getScrollHeight)},mounted:function(){this.getRankList()},methods:{ranktop3:function(){var t=this;this.$axios({url:"/ranktop3"}).then(function(a){200==a.status&&(t.RankTop3=a.data)}).catch(function(t){console.log(t)})},getRankList:function(){var a=this;this.pageIndex<=10&&(t(".more .loading").css("display","block"),t(".more span").hide(),setTimeout(function(){t(".more .loading").hide(),a.loading=!0,a.$axios.post("//localhost:4567/ranklist",{pageIndex:a.pageIndex,pageSize:a.pageSize}).then(function(t){for(var e=t.data.data.ranklist,s=0;s<e.length;s++){var i=e[s].tag.split(",");a.r_tagname=i,a.RankList.push(e[s])}a.pageIndex++,a.loading=!1}).catch(function(t){console.log(t)}),t(".more span").show()},1e3))},getScrollHeight:function(){document.documentElement.offsetHeight-document.documentElement.scrollTop-window.innerHeight<=200&&0==this.loading&&(this.getRankList(),this.loading=!0)}}}}).call(a,e("7t+N"))},XGgj:function(t,a){},wsDf:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("Jepj"),i={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"reserve"}},[s("div",{staticClass:"ranking_min_nav"},[s("ul",[s("router-link",{attrs:{to:{name:"download"},tag:"li"}},[s("a",[t._v("热门榜")]),t._v("/\n      ")]),t._v(" "),s("router-link",{attrs:{to:{name:"new"},tag:"li"}},[s("a",[t._v("新品榜")]),t._v("/\n      ")]),t._v(" "),s("router-link",{attrs:{to:{name:"reserve"},tag:"li"}},[s("a",[t._v("预约榜")]),t._v("/\n      ")]),t._v(" "),s("router-link",{attrs:{to:{name:"sell"},tag:"li"}},[s("a",[t._v("热卖榜")]),t._v("/\n      ")]),t._v(" "),s("router-link",{attrs:{to:{name:"played"},tag:"li"}},[s("a",[t._v("热玩榜")]),t._v("/\n      ")])],1)]),t._v(" "),s("div",{staticClass:"ranking_top3"},t._l(t.RankTop3,function(a,i){return s("div",{key:i,staticClass:"ranking_num",class:"rank_num"+(i+1)},[s("div",{staticClass:"ranking_img"},[s("i",{staticClass:"compound"}),t._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.titlepic,expression:"item.titlepic"}],attrs:{src:e("zuCU"),alt:a.title}})]),t._v(" "),s("p",{staticClass:"reser"},[t._v(t._s(a.title))]),t._v(" "),s("p",{staticClass:"down"},[t._v(t._s(a.download)+" 热度")]),t._v(" "),s("a",{attrs:{href:a.titleurl}},[t._v("\n        下载\n        "),s("i")])])}),0),t._v(" "),s("div",{staticClass:"ranking_list"},[s("ul",{staticClass:"ranking_ul"},t._l(t.RankList,function(a,i){return s("li",{key:i},[s("span",{staticClass:"rank-num",class:"num"+parseInt(i+1)},[t._v(t._s(i+1))]),t._v(" "),t._m(0,!0),t._v(" "),s("a",{staticClass:"floatleft tx box_shadow",attrs:{href:a.titleurl}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.titlepic,expression:"item.titlepic"}],attrs:{src:e("zuCU"),alt:a.title}})]),t._v(" "),s("div",{staticClass:"gameInfo floatleft"},[s("a",{attrs:{href:a.titleurl}},[s("h4",[t._v(t._s(a.title))])]),t._v(" "),s("div",{staticClass:"ranking_star grade_box clearfix"},[s("em",[t._v(t._s(a.score))]),t._v(" "),s("span",{staticClass:"star star_1 clearfix"},[s("span",{staticClass:"star star_2",style:"width:"+20*a.score+"%"})])]),t._v(" "),s("p",[t._v("\n            厂商\n            "),s("a",{attrs:{href:a.titleurl}},[t._v(t._s(a.vendor))])]),t._v(" "),s("p",{staticClass:"tab"},[s("span",[t._v("标签：")]),t._v(" "),t._l(t.r_tagname,function(a){return s("a",{key:a.index,attrs:{href:"/tag/"+a}},[t._v(t._s(a))])})],2),t._v(" "),s("p",{staticClass:"tit"},[t._v(t._s(a.smalltext))])]),t._v(" "),s("div",{staticClass:"ranking_list_img floatright"},[s("ul",[s("li",[s("a",{attrs:{href:a.titleurl}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.dpic,expression:"item.dpic"}],attrs:{src:e("zuCU"),alt:""}})])])])])])}),0)]),t._v(" "),t.pageIndex<=10?s("div",{staticClass:"more"},[s("i",{staticClass:"loading"}),t._v(" "),s("span",{on:{click:t.getRankList}},[t._v("更多")])]):s("div",{staticClass:"more"},[t._v("没有更多了")])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"download",attrs:{href:""}},[this._v("\n          游戏 下载\n          "),a("i")])}]};var n=function(t){e("XGgj")},l=e("VU/8")(s.a,i,!1,n,"data-v-120e18ee",null);a.default=l.exports}});