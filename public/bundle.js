!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,r){var o=new XMLHttpRequest;for(var u in o.open(t.method||"get",e,!0),t.headers)o.setRequestHeader(u,t.headers[u]);function s(){var e,t=[],n=[],r={};return o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(o,u,s){t.push(u=u.toLowerCase()),n.push([u,s]),r[u]=(e=r[u])?e+","+s:s}),{ok:2==(o.status/100|0),status:o.status,statusText:o.statusText,url:o.responseURL,clone:s,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}o.withCredentials="include"==t.credentials,o.onload=function(){n(s())},o.onerror=r,o.send(t.body||null)})}},function(e,t,n){"use strict";var r=s(n(2)),o=s(n(3)),u=s(n(4));function s(e){return e&&e.__esModule?e:{default:e}}window.addEventListener("DOMContentLoaded",()=>{(0,r.default)(),(0,o.default)(),(0,u.default)()})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(()=>{if(document.querySelector(".applicants-filters")){const e=document.querySelector(".applicants-filters"),t=e.querySelector("select[name=sort]"),n=e.querySelector("select[name=branch]");e.addEventListener("change",()=>{window.location=`/?sort=${t.value}&branch=${n.value}`})}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(()=>{if(document.querySelector("#launch-modal")){const e=document.querySelector("#launch-modal"),t=document.querySelector(".overlay"),n=document.querySelector(".reschedule-modal");e.addEventListener("click",()=>{t.classList.add("visible"),n.classList.add("visible"),document.body.style.overflow="hidden"}),t.addEventListener("click",()=>{r()}),document.addEventListener("keyup",e=>{27===e.keyCode&&r()});const r=()=>{t.classList.remove("visible"),n.classList.remove("visible"),document.body.style.overflow=""}}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(5),u=(r=o)&&r.__esModule?r:{default:r};t.default=(()=>{if(document.querySelector(".kpis")){const e=document.querySelector("#kpi-applicants"),t=document.querySelector("#kpi-unbooked-slots"),n=document.querySelector("#kpi-avg-waiting-time");let r=s(window.location.search);i(r.branch).then(r=>{e.innerHTML=r.applicantCount,t.innerHTML=r.unbookedSlots,n.innerHTML=r.avgWaitingTime?`${r.avgWaitingTime} days`:"?"}).catch(r=>{e.innerHTML="?",t.innerHTML="?",n.innerHTML="?"})}});const s=e=>{var t=e.substr(1),n={};return t.split("&").forEach(function(e){var t=e.split("=");n[t[0]]=decodeURIComponent(t[1])}),n},i=async e=>{let t="/api/kpis";e&&(t=`/api/kpis/${e}`);const n=await(0,u.default)(t);return await n.json()}},function(e,t,n){e.exports=window.fetch||(window.fetch=n(0).default||n(0))}]);