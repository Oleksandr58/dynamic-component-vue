(function(e){function t(t){for(var o,l,i=t[0],s=t[1],p=t[2],a=0,d=[];a<i.length;a++)l=i[a],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);u&&u(t);while(d.length)d.shift()();return c.push.apply(c,p||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(o=!1)}o&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={app:0},c=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var u=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},5222:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.select,expression:"select"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.select=t.target.multiple?n:n[0]}}},[n("option",[e._v("1-1")]),n("option",[e._v("1-2")]),n("option",[e._v("2")]),n("option",[e._v("3")])]),n("br"),n("br"),e.currentTabComponent?n(e.currentTabComponent,e._b({tag:"component",staticClass:"tab",model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},"component",e.props,!1)):e._e(),n("br"),n("div",[e._v(" Model: "),n("span",{staticClass:"model-value"},[e._v(e._s(e.model))])])],1)},c=[],l=(n("7db0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello",on:{click:e.emit}},[e._v(" COMPONENT 1 "+e._s(e.msg)+" ")])}),i=[],s={name:"HelloWorld",props:{msg:String},methods:{emit:function(){this.$emit("input","component 1 model")}}},p=s,u=(n("6d1d"),n("2877")),a=Object(u["a"])(p,l,i,!1,null,"67545852",null),d=a.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello",on:{click:e.emit}},[e._v(" COMPONENT 2 "+e._s(e.msg)+" ")])},m=[],v={name:"HelloWorld1",props:{msg:String},methods:{emit:function(){this.$emit("input","component 2 model")}}},b=v,y=(n("a63c"),Object(u["a"])(b,f,m,!1,null,"6ab0a581",null)),h=y.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello",on:{click:e.emit}},[e._v(" COMPONENT 3 "+e._s(e.msg)+" ")])},_=[],O={name:"HelloWorld2",props:{msg:String},methods:{emit:function(){this.$emit("input","component 3 model")}}},C=O,P=(n("8640"),Object(u["a"])(C,g,_,!1,null,"59e44e7e",null)),j=P.exports,w=[{type:"type1-1",component:d,props:[{key:"label",type:"type2",isComponentProp:!0,componentProps:{msg:"Field message"}}]},{type:"type1-2",component:d,props:[{key:"label",type:"type2",isComponentProp:!0,componentProps:{msg:"Field message - second"}}]},{type:"type2",component:h},{type:"type3",component:j}],x={name:"App",data:function(){return{select:"",model:""}},computed:{selectedConfig:function(){var e="type".concat(this.select);return w.find((function(t){return t.type===e}))||{}},currentTabComponent:function(){var e;return null===(e=this.selectedConfig)||void 0===e?void 0:e.component},props:function(){var e,t,n;return(null===(e=this.selectedConfig)||void 0===e||null===(t=e.props)||void 0===t||null===(n=t[0])||void 0===n?void 0:n.componentProps)||[]}}},k=x,T=(n("034f"),Object(u["a"])(k,r,c,!1,null,null,null)),M=T.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(M)}}).$mount("#app")},"6d1d":function(e,t,n){"use strict";n("5222")},"7dcb":function(e,t,n){},"85ec":function(e,t,n){},8640:function(e,t,n){"use strict";n("7dcb")},a63c:function(e,t,n){"use strict";n("accb")},accb:function(e,t,n){}});
//# sourceMappingURL=app.7913f915.js.map