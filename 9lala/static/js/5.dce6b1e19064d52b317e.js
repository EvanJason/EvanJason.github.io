webpackJsonp([5],{"5I+a":function(t,a){},JrCn:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("SAB1"),i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"played"}},[e("div",{staticClass:"ranking_min_nav"},[e("ul",[e("router-link",{attrs:{to:{name:"download"},tag:"li"}},[e("a",[t._v("热门榜")]),t._v("/\n      ")]),t._v(" "),e("router-link",{attrs:{to:{name:"new"},tag:"li"}},[e("a",[t._v("新品榜")]),t._v("/\n      ")]),t._v(" "),e("router-link",{attrs:{to:{name:"reserve"},tag:"li"}},[e("a",[t._v("预约榜")]),t._v("/\n      ")]),t._v(" "),e("router-link",{attrs:{to:{name:"sell"},tag:"li"}},[e("a",[t._v("热卖榜")]),t._v("/\n      ")]),t._v(" "),e("router-link",{attrs:{to:{name:"played"},tag:"li"}},[e("a",[t._v("热玩榜")]),t._v("/\n      ")])],1)]),t._v(" "),e("div",{staticClass:"ranking_top3"},t._l(t.RankTop3,function(a,i){return e("div",{key:i,staticClass:"ranking_num",class:"rank_num"+(i+1)},[e("div",{staticClass:"ranking_img"},[e("i",{staticClass:"compound"}),t._v(" "),e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.titlepic,expression:"item.titlepic"}],attrs:{src:s("zuCU"),alt:a.title}})]),t._v(" "),e("p",{staticClass:"reser"},[t._v(t._s(a.title))]),t._v(" "),e("p",{staticClass:"down"},[t._v(t._s(a.download)+" 热度")]),t._v(" "),e("a",{attrs:{href:a.titleurl}},[t._v("\n        下载\n        "),e("i")])])}),0),t._v(" "),e("div",{staticClass:"ranking_list"},[e("ul",{staticClass:"ranking_ul"},t._l(t.RankList,function(a,i){return e("li",{key:i},[e("span",{staticClass:"rank-num",class:"num"+parseInt(i+1)},[t._v(t._s(i+1))]),t._v(" "),t._m(0,!0),t._v(" "),e("a",{staticClass:"floatleft tx box_shadow",attrs:{href:a.titleurl}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.titlepic,expression:"item.titlepic"}],attrs:{src:s("zuCU"),alt:a.title}})]),t._v(" "),e("div",{staticClass:"gameInfo floatleft"},[e("a",{attrs:{href:a.titleurl}},[e("h4",[t._v(t._s(a.title))])]),t._v(" "),e("div",{staticClass:"ranking_star grade_box clearfix"},[e("em",[t._v(t._s(a.score))]),t._v(" "),e("span",{staticClass:"star star_1 clearfix"},[e("span",{staticClass:"star star_2",style:"width:"+20*a.score+"%"})])]),t._v(" "),e("p",[t._v("\n            厂商\n            "),e("a",{attrs:{href:a.titleurl}},[t._v(t._s(a.vendor))])]),t._v(" "),e("p",{staticClass:"tab"},[e("span",[t._v("标签：")]),t._v(" "),t._l(t.r_tagname,function(a){return e("a",{key:a.index,attrs:{href:"/tag/"+a}},[t._v(t._s(a))])})],2),t._v(" "),e("p",{staticClass:"tit"},[t._v(t._s(a.smalltext))])]),t._v(" "),e("div",{staticClass:"ranking_list_img floatright"},[e("ul",[e("li",[e("a",{attrs:{href:a.titleurl}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.dpic,expression:"item.dpic"}],attrs:{src:s("zuCU"),alt:""}})])])])])])}),0)]),t._v(" "),t.pageIndex<=10?e("div",{staticClass:"more"},[e("i",{staticClass:"loading"}),t._v(" "),e("span",{on:{click:t.getRankList}},[t._v("更多")])]):e("div",{staticClass:"more"},[t._v("没有更多了")])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"download",attrs:{href:""}},[this._v("\n          游戏 下载\n          "),a("i")])}]};var n=function(t){s("5I+a")},l=s("VU/8")(e.a,i,!1,n,"data-v-4cc47589",null);a.default=l.exports},SAB1:function(t,a,s){"use strict";(function(t){a.a={name:"played",data:function(){return{show:!0,RankTop3:[],RankList:[],r_tagname:[],pageIndex:1,pageSize:10,loading:!1}},created:function(){this.ranktop3(),window.addEventListener("scroll",this.getScrollHeight)},mounted:function(){this.getRankList()},methods:{ranktop3:function(){var t=this;this.$axios({url:"/ranktop3"}).then(function(a){200==a.status&&(t.RankTop3=a.data)}).catch(function(t){console.log(t)})},getRankList:function(){var a=this;this.pageIndex<=10&&(t(".more .loading").css("display","block"),t(".more span").hide(),setTimeout(function(){t(".more .loading").hide(),a.loading=!0,a.$axios.post("//localhost:4567/ranklist",{pageIndex:a.pageIndex,pageSize:a.pageSize}).then(function(t){for(var s=t.data.data.ranklist,e=0;e<s.length;e++){var i=s[e].tag.split(",");a.r_tagname=i,a.RankList.push(s[e])}a.pageIndex++,a.loading=!1}).catch(function(t){console.log(t)}),t(".more span").show()},1e3))},getScrollHeight:function(){document.documentElement.offsetHeight-document.documentElement.scrollTop-window.innerHeight<=200&&0==this.loading&&(this.getRankList(),this.loading=!0)}}}}).call(a,s("7t+N"))}});