webpackJsonp([14],{VvqR:function(t,e){},b2gL:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=i("a2vD"),a=i("zNUS"),s=i.n(a);s.a.Random;s.a.mock("/discover_tag",[{tagname:"@cword(2)"},{tagname:"@cword(2)"},{tagname:"@cword(2)"},{tagname:"@cword(2)"},{tagname:"@cword(2)"},{tagname:"@cword(2)"},{tagname:"@cword(2)"},{tagname:"@cword(2)"},{tagname:"@cword(2)"},{tagname:"@cword(2)"},{tagname:"@cword(2)"},{tagname:"@cword(2)"},{tagname:"@cword(2)"},{tagname:"@cword(2)"}]),s.a.mock("/independent",[{title:"@ctitle",titlepic:"@img('130x130','@color()','png','@ctitle')",titleurl:"@url('http')",tag:"@cword(2),@cword(2),@cword(2)"},{title:"@ctitle",titlepic:"@img('130x130','@color()','png','@ctitle')",titleurl:"@url('http')",tag:"@cword(2),@cword(2),@cword(2)"},{title:"@ctitle",titlepic:"@img('130x130','@color()','png','@ctitle')",titleurl:"@url('http')",tag:"@cword(2),@cword(2),@cword(2)"},{title:"@ctitle",titlepic:"@img('130x130','@color()','png','@ctitle')",titleurl:"@url('http')",tag:"@cword(2),@cword(2),@cword(2)"},{title:"@ctitle",titlepic:"@img('130x130','@color()','png','@ctitle')",titleurl:"@url('http')",tag:"@cword(2),@cword(2),@cword(2)"},{title:"@ctitle",titlepic:"@img('130x130','@color()','png','@ctitle')",titleurl:"@url('http')",tag:"@cword(2),@cword(2),@cword(2)"}]),s.a.mock("/discoveries",[{title:"@ctitle",titlepic:"@img('150x150', '@color()', 'png', '@ctitle')",dpic:"@dataImage('720x420')",titleurl:"@url('http')",vendor:"@ctitle(6)",smalltext:"@cparagraph(1, 200)",tag:"@cword(2),@cword(2),@cword(2)",score:"@float(3,4,1,1)"},{title:"@ctitle",titlepic:"@img('150x150', '@color()', 'png', '@ctitle')",dpic:"@dataImage('720x420')",titleurl:"@url('http')",vendor:"@ctitle(6)",smalltext:"@cparagraph(1, 200)",tag:"@cword(2),@cword(2),@cword(2)",score:"@float(3,4,1,1)"},{title:"@ctitle",titlepic:"@img('150x150', '@color()', 'png', '@ctitle')",dpic:"@dataImage('720x420')",titleurl:"@url('http')",vendor:"@ctitle(6)",smalltext:"@cparagraph(1, 200)",tag:"@cword(2),@cword(2),@cword(2)",score:"@float(3,4,1,1)"}]),s.a.mock("/reserved",[{title:"@ctitle",titlepic:"@img('130x130','@color()','png','@ctitle')",titleurl:"@url('http')"},{title:"@ctitle",titlepic:"@img('130x130','@color()','png','@ctitle')",titleurl:"@url('http')"},{title:"@ctitle",titlepic:"@img('130x130','@color()','png','@ctitle')",titleurl:"@url('http')"},{title:"@ctitle",titlepic:"@img('130x130','@color()','png','@ctitle')",titleurl:"@url('http')"}]),s.a.mock("/recom_project",[{title:"@ctitle(10,50)",titlepic:"@img('386x242','@color()','png','@ctitle')",titleurl:"@url('http')"},{title:"@ctitle(10,50)",titlepic:"@img('386x242','@color()','png','@ctitle')",titleurl:"@url('http')"},{title:"@ctitle(10,50)",titlepic:"@img('386x242','@color()','png','@ctitle')",titleurl:"@url('http')"}]),s.a.mock("/type/game",[{title:"@ctitle",titlepic:"@image('75x75',@color(),'png')",titleurl:"@url('http')",type:"@pick(['动作', '模拟', '角色扮演', '音乐', '休闲','冒险','塔防策略','卡牌','益智','竞速','射击'])",score:"@float(3,4,1,1)"},{title:"@ctitle",titlepic:"@image('75x75',@color(),'png')",titleurl:"@url('http')",type:"@pick(['动作', '模拟', '角色扮演', '音乐', '休闲','冒险','塔防策略','卡牌','益智','竞速','射击'])",score:"@float(3,4,1,1)"},{title:"@ctitle",titlepic:"@image('75x75',@color(),'png')",titleurl:"@url('http')",type:"@pick(['动作', '模拟', '角色扮演', '音乐', '休闲','冒险','塔防策略','卡牌','益智','竞速','射击'])",score:"@float(3,4,1,1)"},{title:"@ctitle",titlepic:"@image('75x75',@color(),'png')",titleurl:"@url('http')",type:"@pick(['动作', '模拟', '角色扮演', '音乐', '休闲','冒险','塔防策略','卡牌','益智','竞速','射击'])",score:"@float(3,4,1,1)"},{title:"@ctitle",titlepic:"@image('75x75',@color(),'png')",titleurl:"@url('http')",type:"@pick(['动作', '模拟', '角色扮演', '音乐', '休闲','冒险','塔防策略','卡牌','益智','竞速','射击'])",score:"@float(3,4,1,1)"},{title:"@ctitle",titlepic:"@image('75x75',@color(),'png')",titleurl:"@url('http')",type:"@pick(['动作', '模拟', '角色扮演', '音乐', '休闲','冒险','塔防策略','卡牌','益智','竞速','射击'])",score:"@float(3,4,1,1)"}]);var r={name:"Recom",data:function(){return{rootUrl:l.a.getRootUrl(),slideList:[{id:0,url:"#",title:"最强蜗牛",image:"//willern.gitee.io/9lala/static/img/月圆之夜.jpg"},{id:1,url:"#",title:"香肠派对",image:"//willern.gitee.io/9lala/static/img/月圆之夜.jpg"},{id:2,url:"#",title:"失落城堡",image:"//willern.gitee.io/9lala/static/img/月圆之夜.jpg"}],currentIndex:0,timer:null,tagboxlist:[],independlist:[],independtag:[],discoveries:[],discoveries_tag:[],reservedlist:[],recom_project:[],typegamelist:[]}},created:function(){this.TagBoxList(),this.autoPlay(),this.IndePendList(),this.Discoveries(),this.Reserved(),this.Recom_Project(),this.TypeGameList()},methods:{TagBoxList:function(){var t=this;this.$axios({url:"/discover_tag"}).then(function(e){200==e.status&&(t.tagboxlist=e.data)}).catch(function(t){console.log(t)})},play:function(){this.currentIndex++,this.currentIndex==this.slideList.length&&(this.currentIndex=0)},autoPlay:function(){this.timer=setInterval(this.play,3e3)},change:function(t){this.currentIndex=t},stop:function(){clearInterval(this.timer)},move:function(){this.timer=setInterval(this.autoPlay,3e3)},IndePendList:function(){var t=this;this.$axios({method:"get",url:"/independent"}).then(function(e){if(e){t.independlist=e.data;for(var i=0;i<t.independlist.length;i++){var l=t.independlist[i].tag.split(",");t.independtag=l}}}).catch(function(t){console.log(t)})},Discoveries:function(){var t=this;this.$axios({method:"get",url:"/discoveries"}).then(function(e){if(e){t.discoveries=e.data;for(var i=0;i<t.discoveries.length;i++){var l=t.discoveries[i].tag.split(",");t.discoveries_tag=l}}}).catch(function(t){console.log(t)})},Reserved:function(){var t=this;this.$axios({method:"get",url:"/reserved"}).then(function(e){e&&(t.reservedlist=e.data)}).catch(function(t){console.log(t)})},Recom_Project:function(){var t=this;this.$axios({method:"get",url:"/recom_project"}).then(function(e){e&&(t.recom_project=e.data)}).catch(function(t){console.log(t)})},TypeGameList:function(){var t=this;this.$axios({method:"get",url:"/type/game"}).then(function(e){e&&(t.typegamelist=e.data)}).catch(function(t){console.log(t)})}}},c={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"recom"},[l("div",{staticClass:"position_Box"},[l("div",{staticClass:"w_1200 position"},[l("p",[l("span",[t._v("你的位置 ：")]),t._v(" "),l("router-link",{attrs:{to:{path:t.rootUrl}}},[t._v("\n          首页\n          "),l("i")]),t._v(" "),l("router-link",{attrs:{to:{path:this.$route.path}}},[t._v("发现")])],1)])]),t._v(" "),l("div",{staticClass:"w_1200"},[t.slideList?l("div",{staticClass:"recommend_lb",attrs:{id:"recommend_lb"},on:{mouseover:t.stop,mouseout:t.autoPlay}},[l("transition-group",{staticClass:"slide-ul",attrs:{tag:"ul",name:"image"}},t._l(t.slideList,function(e){return l("li",{directives:[{name:"show",rawName:"v-show",value:e.id==t.currentIndex,expression:"item.id==currentIndex"}],key:e.id},[l("a",{attrs:{href:e.url,title:e.title}},[l("img",{attrs:{src:e.image}})]),t._v(" "),l("p",[t._v(t._s(e.title))])])}),0),t._v(" "),l("div",{staticClass:"carousel-items"},t._l(t.slideList.length,function(e,i){return l("span",{key:i,class:t.currentIndex==i?"active":"",on:{click:function(e){return t.change(i)}}})}),0)],1):t._e(),t._v(" "),t.tagboxlist?l("div",{staticClass:"label_box"},[t._m(0),t._v(" "),l("ul",{staticClass:"tag_ul"},t._l(t.tagboxlist,function(e){return l("li",{key:e.index,staticClass:"tag"},[l("a",{attrs:{href:"/tag/"+e.tagname}},[t._v(t._s(e.tagname))])])}),0)]):t._e(),t._v(" "),t.independlist?l("div",{staticClass:"Independent_box"},[t._m(1),t._v(" "),l("ul",{staticClass:"Independent_ul"},t._l(t.independlist,function(e,a){return l("li",{key:a},[l("a",{attrs:{href:e.titleurl}},[l("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.titlepic,expression:"item.titlepic"}],attrs:{src:i("zuCU"),alt:e.title}}),t._v(" "),l("p",{staticClass:"tit"},[t._v(t._s(e.title))]),t._v(" "),l("p",t._l(t.independtag,function(e,i){return l("a",{key:i,attrs:{href:"/tag/"+e}},[l("span",[t._v(t._s(e))])])}),0)])])}),0)]):t._e(),t._v(" "),t.discoveries?l("div",{staticClass:"ranking_list"},[t._m(2),t._v(" "),l("ul",{staticClass:"ranking_ul"},t._l(t.discoveries,function(e,a){return l("li",{key:a},[t._m(3,!0),t._v(" "),l("a",{staticClass:"floatleft tx box_shadow",attrs:{href:e.titleurl}},[l("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.titlepic,expression:"item.titlepic"}],attrs:{src:i("zuCU"),alt:e.title}})]),t._v(" "),l("div",{staticClass:"gameInfo floatleft"},[l("a",{attrs:{href:e.titleurl}},[l("h4",[t._v(t._s(e.title))])]),t._v(" "),l("div",{staticClass:"ranking_star grade_box clearfix"},[l("em",[t._v(t._s(e.score))]),t._v(" "),t._m(4,!0)]),t._v(" "),l("p",[t._v("\n              厂商\n              "),l("a",{attrs:{href:e.titleurl}},[t._v(t._s(e.vendor))])]),t._v(" "),l("p",{staticClass:"tab"},[l("span",[t._v("标签：")]),t._v(" "),t._l(t.discoveries_tag,function(e){return l("a",{key:e.index,attrs:{href:"/tag/"+e}},[t._v(t._s(e))])})],2),t._v(" "),l("p",{staticClass:"tit"},[t._v(t._s(e.smalltext))])]),t._v(" "),l("div",{staticClass:"ranking_list_img floatright"},[l("ul",[l("li",[l("a",{attrs:{href:e.titleurl}},[l("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.dpic,expression:"item.dpic"}],attrs:{src:i("zuCU"),alt:e.title}})])])])])])}),0)]):t._e(),t._v(" "),t.reservedlist?l("div",{staticClass:"Coming_soon"},[t._m(5),t._v(" "),l("div",{staticClass:"Coming_soon_ul"},[l("ul",{staticClass:"clearfix"},t._l(t.reservedlist,function(e,a){return l("li",{key:a},[l("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.titlepic,expression:"item.titlepic"}],attrs:{src:i("zuCU"),alt:e.title}}),t._v(" "),l("div",{staticClass:"Coming_soon_div"},[l("p",{staticClass:"ovhi"},[t._v(t._s(e.title))]),t._v(" "),l("a",{attrs:{href:e.titleurl}},[t._v("开始预约")])])])}),0)])]):t._e(),t._v(" "),l("div",{staticClass:"Recom_topics"},[t._m(6),t._v(" "),l("div",{staticClass:"Recom_topics_ul"},[l("ul",t._l(t.recom_project,function(e,a){return l("li",{key:a},[l("a",{attrs:{href:e.titleurl,title:e.title}},[l("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.titlepic,expression:"item.titlepic"}],attrs:{src:i("zuCU"),alt:e.title}})]),t._v(" "),l("p",[t._v(t._s(e.title))])])}),0)])]),t._v(" "),l("div",{attrs:{id:"All_kinds_of_games"}},[l("div",{staticClass:"Independent_box"},[t._m(7),t._v(" "),l("ul",{staticClass:"Independent_ul"},t._l(t.typegamelist,function(e,a){return l("li",{key:a},[l("a",{attrs:{href:e.titleurl}},[l("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.titlepic,expression:"item.titlepic"}],attrs:{src:i("zuCU"),alt:e.title}}),t._v(" "),l("p",{staticClass:"tit"},[t._v(t._s(e.title))])]),t._v(" "),l("div",{staticClass:"Independent_bot"},[l("a",{attrs:{href:"/type/"+e.type}},[t._v(t._s(e.type))]),t._v(" "),l("span",{staticClass:"grade_ash"},[l("i",{staticClass:"compound"}),t._v("\n                "+t._s(e.score)+"\n              ")])])])}),0)]),t._v(" "),l("div",{staticClass:"Independent_box"},[t._m(8),t._v(" "),l("ul",{staticClass:"Independent_ul"},t._l(t.typegamelist,function(e,a){return l("li",{key:a},[l("a",{attrs:{href:e.titleurl}},[l("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.titlepic,expression:"item.titlepic"}],attrs:{alt:e.title,src:i("zuCU")}}),t._v(" "),l("p",{staticClass:"tit"},[t._v(t._s(e.title))])]),t._v(" "),l("div",{staticClass:"Independent_bot"},[l("a",{attrs:{href:"/type/"+e.type}},[t._v(t._s(e.type))]),t._v(" "),l("span",{staticClass:"grade_ash"},[l("i",{staticClass:"compound"}),t._v("\n                "+t._s(e.score)+"\n              ")])])])}),0)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"follow_me_tit change_"},[e("p",[e("i"),this._v("标签\n        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"follow_me_tit change_"},[e("p",[e("i"),this._v("独立游戏\n        ")]),this._v(" "),e("a",{staticClass:"change_a",attrs:{href:"list.html"}},[this._v("更多")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"follow_me_tit change_"},[e("p",[e("i"),this._v("每日新发现\n        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"download",attrs:{href:""}},[this._v("\n            游戏   下载\n            "),e("i")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"star star_1 clearfix"},[e("span",{staticClass:"star star_2",staticStyle:{"'width":"'+(item.score)*20+'%'"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"follow_me_tit change_"},[e("p",[e("i"),this._v("预约游戏\n        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"follow_me_tit change_"},[e("p",[e("i"),this._v("推荐专题\n        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"follow_me_tit change_"},[e("p",[e("i"),this._v("动作\n          ")]),this._v(" "),e("a",{staticClass:"change_a",attrs:{href:"list.html"}},[this._v("更多")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"follow_me_tit change_"},[e("p",[e("i"),this._v("模拟\n          ")]),this._v(" "),e("a",{staticClass:"change_a",attrs:{href:"list.html"}},[this._v("更多")])])}]};var n=i("VU/8")(r,c,!1,function(t){i("VvqR")},"data-v-0f07ba80",null);e.default=n.exports}});