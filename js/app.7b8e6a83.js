(function(t){function e(e){for(var o,r,a=e[0],u=e[1],c=e[2],p=0,d=[];p<a.length;p++)r=a[p],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&d.push(n[r][0]),n[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],o=!0,a=1;a<i.length;a++){var u=i[a];0!==n[u]&&(o=!1)}o&&(s.splice(e--,1),t=r(r.s=i[0]))}return t}var o={},n={app:0},s=[];function r(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=o,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(i,o,function(e){return t[e]}.bind(null,o));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=u;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);var o=i("2b0e"),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"out"},[e("div",{staticClass:"door"},[e("div",{class:`door-left ${t.doorMove} ${t.doorOpen}`},[e("img",{attrs:{src:i("d124"),alt:""}})])])]),e("div",{staticClass:"content"},[t.svgShow?e("svg",{staticClass:"text-svg"},[e("text",{attrs:{x:"50%",y:"50","text-anchor":"middle"}},[t._v(" 七夕节快乐 ")])]):t._e(),e("img",{class:"bg "+(t.bgShow&&"active"),attrs:{src:i("7475"),alt:""}}),e("div",{class:`verse-content ${t.verseShow&&"active"} ${(t.playing2||t.playing)&&"light"}`},[t._m(0),t._m(1),t._m(2),t._m(3)]),t.bgShow?e("div",{staticClass:"leaf"},[t._m(4),t._m(5),t._m(6)]):t._e(),e("div",{class:"music-btn "+(!t.playing&&"active"),attrs:{id:"musicBtn"},on:{click:t.onPlay}},[e("img",{attrs:{src:i("b95d"),alt:""}})]),t.bgShow?e("div",{staticClass:"music2",on:{click:t.onPlay2}},[e("span",[t._v("❤️")])]):t._e()]),e("audio",{attrs:{id:"audio",src:"https://gc-sycdn.kuwo.cn/fe4f7f5fa8dffb03971afaee6fd83f5d/62ecbac2/resource/n3/3/56/2725845154.mp3",loop:""}}),e("audio",{attrs:{id:"audio1",src:t.twoAudio,loop:""}})])},s=[function(){var t=this,e=t._self._c;return e("div",[e("span",[t._v("金风玉露一相逢")])])},function(){var t=this,e=t._self._c;return e("div",[e("span",[t._v("便胜却人间无数")])])},function(){var t=this,e=t._self._c;return e("div",[e("span",[t._v("两情若是久长时")])])},function(){var t=this,e=t._self._c;return e("div",[e("span",[t._v("又岂在朝朝暮暮")])])},function(){var t=this,e=t._self._c;return e("div",[e("img",{attrs:{src:i("ac8a")}})])},function(){var t=this,e=t._self._c;return e("div",[e("img",{attrs:{src:i("8fa9")}})])},function(){var t=this,e=t._self._c;return e("div",[e("img",{attrs:{src:i("8c3f")}})])}];const r=i("6349");var a={name:"App",components:{},data(){return{doorMove:"",doorOpen:"",svgShow:!1,bgShow:!1,verseShow:!1,audio:"",audio1:"",twoAudio:r,playing:!1,timer:0,rotate:0,playing2:!1}},methods:{onPlay(){this.playing?(this.audio.pause(),clearInterval(this.timer)):(this.audio.play(),this.setRotate(),this.audio1.pause(),this.playing2=!1),this.playing=!this.playing},onPlay2(){this.playing2?this.audio1.pause():(this.audio1.play(),this.audio.pause(),clearInterval(this.timer),this.playing=!1),this.playing2=!this.playing2},openDoor(){setTimeout(()=>{this.doorOpen="active",this.doorMove="",this.showVerse()},2500)},showSvg(){setTimeout(()=>{this.svgShow=!0},4500)},showVerse(){setTimeout(()=>{this.verseShow=!0,this.showSvg()},700)},setRotate(){this.timer=setInterval(()=>{this.rotate+=72,this.rotate>=36e3&&(this.rotate=0),document.getElementById("musicBtn").style.transform=`rotate(${this.rotate/100}deg)`},20)}},mounted(){this.$nextTick(()=>{setTimeout(()=>{this.doorMove="move",this.openDoor(),setTimeout(()=>{this.bgShow=!0},2600)},0),this.audio=document.getElementById("audio"),this.audio1=document.getElementById("audio1")})}},u=a,c=(i("9564"),i("2877")),l=Object(c["a"])(u,n,s,!1,null,null,null),p=l.exports;o["a"].config.productionTip=!1,new o["a"]({render:t=>t(p)}).$mount("#app")},6349:function(t,e,i){t.exports=i.p+"media/like.22f46a21.mp3"},7475:function(t,e,i){t.exports=i.p+"img/bg.6eef22ab.jpeg"},"8c3f":function(t,e,i){t.exports=i.p+"img/leaf6.6d1d33f4.png"},"8fa9":function(t,e,i){t.exports=i.p+"img/leaf5.e6cf85b4.png"},9564:function(t,e,i){"use strict";i("d70e")},ac8a:function(t,e,i){t.exports=i.p+"img/leaf4.1d1257af.png"},b95d:function(t,e,i){t.exports=i.p+"img/music.800bbf70.png"},d124:function(t,e,i){t.exports=i.p+"img/bg1.0e2e25a0.jpg"},d70e:function(t,e,i){}});
//# sourceMappingURL=app.7b8e6a83.js.map