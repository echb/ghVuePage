(function(e){function t(t){for(var a,o,u=t[0],i=t[1],s=t[2],d=0,p=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&p.push(c[o][0]),c[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);l&&l(t);while(p.length)p.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,u=1;u<n.length;u++){var i=n[u];0!==c[i]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},c={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function c(e,t,n,c,r,o){var u=Object(a["i"])("search");return Object(a["e"])(),Object(a["c"])(u)}n("fb6a");var r=Object(a["n"])("data-v-64bb154c"),o=r((function(e,t,n,c,r,o){return Object(a["e"])(),Object(a["c"])("div",null,[Object(a["m"])(Object(a["d"])("button",{onClick:t[1]||(t[1]=function(){return o.pageBefore&&o.pageBefore.apply(o,arguments)})},"load less",512),[[a["l"],1!=r.page]]),Object(a["m"])(Object(a["d"])("button",{onClick:t[2]||(t[2]=function(){return o.pageAfter&&o.pageAfter.apply(o,arguments)})}," load more ",512),[[a["l"],r.page<r.getDataPlaceholder.length/r.page]]),Object(a["d"])("ul",null,[(Object(a["e"])(!0),Object(a["c"])(a["a"],null,Object(a["h"])(r.pages.slice(r.page-1,r.page+4),(function(e){return Object(a["e"])(),Object(a["c"])("li",{class:"vas",onClick:function(t){return r.page=e},key:e},Object(a["j"])(e),9,["onClick"])})),128))]),(Object(a["e"])(!0),Object(a["c"])(a["a"],null,Object(a["h"])(o.displayedArticles,(function(e){return Object(a["e"])(),Object(a["c"])("span",{key:e.id},Object(a["j"])(e.id)+" - "+Object(a["j"])(e.title),1)})),128))])})),u=(n("d3b7"),n("159b"),{name:"pagination",data:function(){return{getDataPlaceholder:[],page:1,perPage:10,pages:[],test:null}},created:function(){this.createData()},methods:{pageBefore:function(){this.page--},pageAfter:function(){this.page++},createData:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(t){return e.getDataPlaceholder=t})).then((function(){e.setPages()})).catch((function(e){return console.log(e.message)}))},paginate:function(e){var t=this.page,n=this.perPage,a=t*n-n,c=t*n;return e.slice(a,c)},setPages:function(){for(var e=this.getDataPlaceholder.length,t=this.perPage,n=Math.ceil(e/t),a=1;a<=n;a++)this.pages.push(a)},addActive:function(){var e=this.page,t=document.querySelectorAll(".vas");t.forEach((function(t){e==t.textContent?t.classList.add("active"):t.classList.remove("active")}))}},watch:{articles:function(){}},computed:{displayedArticles:function(){return this.paginate(this.getDataPlaceholder)}},updated:function(){this.addActive()}});n("adfc");u.render=o,u.__scopeId="data-v-64bb154c";var i=u,s=(n("b0c0"),Object(a["n"])("data-v-0c490a8a")),l=s((function(e,t,n,c,r,o){return Object(a["e"])(),Object(a["c"])("div",null,[Object(a["d"])("ul",null,[(Object(a["e"])(!0),Object(a["c"])(a["a"],null,Object(a["h"])(r.pages,(function(e){return Object(a["e"])(),Object(a["c"])("li",{key:e.id},[Object(a["d"])("a",{href:e.url,target:"blank"},[Object(a["d"])("img",{src:r.image,alt:e.name},null,8,["src","alt"])],8,["href"]),Object(a["d"])("span",null,Object(a["j"])(e.name),1),Object(a["d"])("p",null,Object(a["j"])(e.text)+" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, nemo inventore obcaecati rerum, illo quos, sint dolorem recusandae ad tempora fuga dicta doloribus ducimus repudiandae eius voluptate sit a omnis? ",1)])})),128))])])})),d={name:"pages",data:function(){return{pages:[{url:"https://github.com/FaztWeb/vuejs-node-pagination/blob/master/client/src/App.vue",name:"webFazt",text:"1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, nemo inventore obcaecati rerum, illo quos, sint dolorem recusandae ad tempora fuga dicta doloribus ducimus repudiandae eius voluptate sit a omnis?"},{url:"https://www.youtube.com/watch?v=et4t5yS9Hgk",name:"youtube",text:"2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, nemo inventore obcaecati rerum, illo quos, sint dolorem recusandae ad tempora fuga dicta doloribus ducimus repudiandae eius voluptate sit a omnis?"},{url:"http://localhost:8066/",name:"localhost",text:"3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, nemo inventore obcaecati rerum, illo quos, sint dolorem recusandae ad tempora fuga dicta doloribus ducimus repudiandae eius voluptate sit a omnis?"}],image:"https://v3.vuejs.org/logo.png?__WB_REVISION__=cf23526f451784ff137f161b8fe18d5a"}},created:function(){},methods:{}};n("db2a");d.render=l,d.__scopeId="data-v-0c490a8a";var p=d,b=(n("ac1f"),n("841c"),Object(a["n"])("data-v-197fbbe3"));Object(a["g"])("data-v-197fbbe3");var f=Object(a["d"])("br",null,null,-1);Object(a["f"])();var m=b((function(e,t,n,c,r,o){return Object(a["e"])(),Object(a["c"])("div",null,[Object(a["d"])("span",null,"los que buscas es "+Object(a["j"])(o.getInputValue),1),f,Object(a["m"])(Object(a["d"])("input",{type:"text",name:"search",id:"search","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.search=e})},null,512),[[a["k"],r.search]]),Object(a["d"])("ul",null,[(Object(a["e"])(!0),Object(a["c"])(a["a"],null,Object(a["h"])(o.filterSearch,(function(e){return Object(a["e"])(),Object(a["c"])("li",{key:e.id,"data-name":e},Object(a["j"])(e),9,["data-name"])})),128))])])})),h=(n("4de4"),n("466d"),{name:"search",data:function(){return{names:["miguel","raul","sander","mike"],search:""}},methods:{},computed:{getInputValue:function(){return this.search.toUpperCase()},filterSearch:function(){var e=this;return this.names.filter((function(t){return t.match(e.search)}))}}});n("7b6f");h.render=m,h.__scopeId="data-v-197fbbe3";var j=h,g={name:"App",components:{Counter:i,Pages:p,Search:j}};n("974d");g.render=c;var O=g;Object(a["b"])(O).mount("#app")},"6c3e":function(e,t,n){},"7b6f":function(e,t,n){"use strict";n("c467")},"974d":function(e,t,n){"use strict";n("9fa4")},"9fa4":function(e,t,n){},adfc:function(e,t,n){"use strict";n("6c3e")},c467:function(e,t,n){},d077:function(e,t,n){},db2a:function(e,t,n){"use strict";n("d077")}});