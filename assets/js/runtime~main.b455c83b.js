(()=>{"use strict";var e,t,r,a,o,d={},f={};function n(e){var t=f[e];if(void 0!==t)return t.exports;var r=f[e]={id:e,loaded:!1,exports:{}};return d[e].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=d,n.c=f,e=[],n.O=(t,r,a,o)=>{if(!r){var d=1/0;for(b=0;b<e.length;b++){r=e[b][0],a=e[b][1],o=e[b][2];for(var f=!0,c=0;c<r.length;c++)(!1&o||d>=o)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(f=!1,o<d&&(d=o));if(f){e.splice(b--,1);var i=a();void 0!==i&&(t=i)}}return t}o=o||0;for(var b=e.length;b>0&&e[b-1][2]>o;b--)e[b]=e[b-1];e[b]=[r,a,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);n.r(o);var d={};t=t||[null,r({}),r([]),r(r)];for(var f=2&a&&e;"object"==typeof f&&!~t.indexOf(f);f=r(f))Object.getOwnPropertyNames(f).forEach((t=>d[t]=()=>e[t]));return d.default=()=>e,n.d(o,d),o},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"assets/js/"+({21:"5d9848b9",26:"5d67eb20",53:"935f2afb",58:"80590a7c",84:"e4a89e5e",224:"dffb0d05",241:"dd01be43",247:"3ed3f7f1",398:"e7524685",465:"2e346f97",509:"22f23ae6",514:"1be78505",585:"68b35913",591:"774b80a7",653:"4bab43c7",661:"3abf6cbd",671:"0e384e19",781:"ed1ad825",842:"d10563a5",856:"2d2f7a8f",918:"17896441",920:"1a4e3797",924:"e321c40d",998:"17dd72af"}[e]||e)+"."+{21:"f750e935",26:"4b40d504",53:"0012f562",58:"360808c5",84:"80b8c55a",224:"cc5079d8",241:"0588c93f",247:"b540ba3b",398:"d94e626b",443:"96a6eeb7",465:"161fdc1c",509:"2e507798",514:"8c47d721",525:"35e30ac6",585:"420c2c16",591:"e2c9c343",653:"f325f00f",661:"efff885e",671:"c5b0f098",781:"48c45bdb",842:"3f8bf0ad",856:"95c64950",918:"d01b0ae8",920:"7ef4ed74",924:"c3aacd9c",972:"307e8346",998:"ad35c879"}[e]+".js",n.miniCssF=e=>{},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="docs:",n.l=(e,t,r,d)=>{if(a[e])a[e].push(t);else{var f,c;if(void 0!==r)for(var i=document.getElementsByTagName("script"),b=0;b<i.length;b++){var u=i[b];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+r){f=u;break}}f||(c=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,n.nc&&f.setAttribute("nonce",n.nc),f.setAttribute("data-webpack",o+r),f.src=e),a[e]=[t];var l=(t,r)=>{f.onerror=f.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],f.parentNode&&f.parentNode.removeChild(f),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),c&&document.head.appendChild(f)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/readergata-plugin-typings/",n.gca=function(e){return e={17896441:"918","5d9848b9":"21","5d67eb20":"26","935f2afb":"53","80590a7c":"58",e4a89e5e:"84",dffb0d05:"224",dd01be43:"241","3ed3f7f1":"247",e7524685:"398","2e346f97":"465","22f23ae6":"509","1be78505":"514","68b35913":"585","774b80a7":"591","4bab43c7":"653","3abf6cbd":"661","0e384e19":"671",ed1ad825:"781",d10563a5:"842","2d2f7a8f":"856","1a4e3797":"920",e321c40d:"924","17dd72af":"998"}[e]||e,n.p+n.u(e)},(()=>{var e={303:0,532:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var d=n.p+n.u(t),f=new Error;n.l(d,(r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),d=r&&r.target&&r.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+d+")",f.name="ChunkLoadError",f.type=o,f.request=d,a[1](f)}}),"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,d=r[0],f=r[1],c=r[2],i=0;if(d.some((t=>0!==e[t]))){for(a in f)n.o(f,a)&&(n.m[a]=f[a]);if(c)var b=c(n)}for(t&&t(r);i<d.length;i++)o=d[i],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(b)},r=self.webpackChunkdocs=self.webpackChunkdocs||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();