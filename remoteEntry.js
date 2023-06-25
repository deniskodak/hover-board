var HoverBoardApp;(()=>{"use strict";var e,r,t,o,n,a,i,l,u,d,s,f,h,p,v,c={414:(e,r,t)=>{var o={"./HoverBoard":()=>Promise.all([t.e(47),t.e(416),t.e(51),t.e(187)]).then((()=>()=>t(187)))},n=(e,r)=>(t.R=r,r=t.o(o,e)?o[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var o="default",n=t.S[o];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[o]=e,t.I(o,r)}};t.d(r,{get:()=>n,init:()=>a})}},m={};function g(e){var r=m[e];if(void 0!==r)return r.exports;var t=m[e]={exports:{}};return c[e](t,t.exports,g),t.exports}g.m=c,g.c=m,g.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return g.d(r,{a:r}),r},g.d=(e,r)=>{for(var t in r)g.o(r,t)&&!g.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},g.f={},g.e=e=>Promise.all(Object.keys(g.f).reduce(((r,t)=>(g.f[t](e,r),r)),[])),g.u=e=>e+".hover-board.js",g.miniCssF=e=>"style.4618530bdaf9fe6ced05.css",g.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="hover-board:",g.l=(t,o,n,a)=>{if(e[t])e[t].push(o);else{var i,l;if(void 0!==n)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var s=u[d];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+n){i=s;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,g.nc&&i.setAttribute("nonce",g.nc),i.setAttribute("data-webpack",r+n),i.src=t),e[t]=[o];var f=(r,o)=>{i.onerror=i.onload=null,clearTimeout(h);var n=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(o))),r)return r(o)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}},g.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{g.S={};var e={},r={};g.I=(t,o)=>{o||(o=[]);var n=r[t];if(n||(n=r[t]={}),!(o.indexOf(n)>=0)){if(o.push(n),e[t])return e[t];g.o(g.S,t)||(g.S[t]={});var a=g.S[t],i="hover-board",l=(e,r,t,o)=>{var n=a[e]=a[e]||{},l=n[r];(!l||!l.loaded&&(!o!=!l.eager?o:i>l.from))&&(n[r]={get:t,from:i,eager:!!o})},u=[];return"default"===t&&(l("react-dom","18.2.0",(()=>Promise.all([g.e(935),g.e(416)]).then((()=>()=>g(935))))),l("react","18.2.0",(()=>g.e(294).then((()=>()=>g(976)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),g.p="https://deniskodak.github.io/hover-board/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),o=t[1]?r(t[1]):[];return t[2]&&(o.length++,o.push.apply(o,r(t[2]))),t[3]&&(o.push([]),o.push.apply(o,r(t[3]))),o},o=(e,r)=>{e=t(e),r=t(r);for(var o=0;;){if(o>=e.length)return o<r.length&&"u"!=(typeof r[o])[0];var n=e[o],a=(typeof n)[0];if(o>=r.length)return"u"==a;var i=r[o],l=(typeof i)[0];if(a!=l)return"o"==a&&"n"==l||"s"==l||"u"==a;if("o"!=a&&"u"!=a&&n!=i)return n<i;o++}},n=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,t+="u"==(typeof(l=e[a]))[0]?"-":(o>0?".":"")+(o=2,l);return t}var i=[];for(a=1;a<e.length;a++){var l=e[a];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():n(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var o=e[0],n=o<0;n&&(o=-o-1);for(var i=0,l=1,u=!0;;l++,i++){var d,s,f=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(s=(typeof(d=r[i]))[0]))return!u||("u"==f?l>o&&!n:""==f!=n);if("u"==s){if(!u||"u"!=f)return!1}else if(u)if(f==s)if(l<=o){if(d!=e[l])return!1}else{if(n?d>e[l]:d<e[l])return!1;d!=e[l]&&(u=!1)}else if("s"!=f&&"n"!=f){if(n||l<=o)return!1;u=!1,l--}else{if(l<=o||s<f!=n)return!1;u=!1}else"s"!=f&&"n"!=f&&(u=!1,l--)}}var h=[],p=h.pop.bind(h);for(i=1;i<e.length;i++){var v=e[i];h.push(1==v?p()|p():2==v?p()&p():v?a(v,r):!p())}return!!p()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&o(e,r)?r:e),0)},l=(e,r,t,o)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+n(o)+")",u=(e,r,t,o)=>{var n=i(e,t);return a(o,n)||d(l(e,t,n,o)),s(e[t][n])},d=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},s=e=>(e.loaded=1,e.get()),f=(e=>function(r,t,o,n){var a=g.I(r);return a&&a.then?a.then(e.bind(e,r,g.S[r],t,o,n)):e(0,g.S[r],t,o,n)})(((e,r,t,o,n)=>r&&g.o(r,t)?u(r,0,t,o):n())),h={},p={416:()=>f("default","react",[1,18,2,0],(()=>g.e(294).then((()=>()=>g(976))))),51:()=>f("default","react-dom",[1,18,2,0],(()=>g.e(935).then((()=>()=>g(935)))))},v={51:[51],416:[416]},g.f.consumes=(e,r)=>{g.o(v,e)&&v[e].forEach((e=>{if(g.o(h,e))return r.push(h[e]);var t=r=>{h[e]=0,g.m[e]=t=>{delete g.c[e],t.exports=r()}},o=r=>{delete h[e],g.m[e]=t=>{throw delete g.c[e],r}};try{var n=p[e]();n.then?r.push(h[e]=n.then(t).catch(o)):t(n)}catch(e){o(e)}}))},(()=>{if("undefined"!=typeof document){var e={15:0};g.f.miniCss=(r,t)=>{e[r]?t.push(e[r]):0!==e[r]&&{187:1}[r]&&t.push(e[r]=(e=>new Promise(((r,t)=>{var o=g.miniCssF(e),n=g.p+o;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var n=(i=t[o]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(n===e||n===r))return i}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){var i;if((n=(i=a[o]).getAttribute("data-href"))===e||n===r)return i}})(o,n))return r();((e,r,t,o,n)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=t=>{if(a.onerror=a.onload=null,"load"===t.type)o();else{var i=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.href||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=l,a.parentNode&&a.parentNode.removeChild(a),n(u)}},a.href=r,document.head.appendChild(a)})(e,n,0,r,t)})))(r).then((()=>{e[r]=0}),(t=>{throw delete e[r],t})))}}})(),(()=>{var e={15:0};g.f.j=(r,t)=>{var o=g.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else if(/^(416|51)$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=n);var a=g.p+g.u(r),i=new Error;g.l(a,(t=>{if(g.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var o,n,[a,i,l]=t,u=0;if(a.some((r=>0!==e[r]))){for(o in i)g.o(i,o)&&(g.m[o]=i[o]);l&&l(g)}for(r&&r(t);u<a.length;u++)n=a[u],g.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunkhover_board=self.webpackChunkhover_board||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),g.nc=void 0;var b=g(414);HoverBoardApp=b})();