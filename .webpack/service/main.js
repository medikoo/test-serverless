(()=>{"use strict";var e={220:e=>{const o=e=>new Promise((o=>{setTimeout(o,e)}));e.exports.handler=async e=>(console.log("Line 1"),console.log("Line 2"),console.log("Line 3"),console.log("Line 4"),await o(2e3),console.log("Line 5"),console.log("Line 6"),console.log("Line 7"),console.log("Line 8"),await o(2e3),console.log("Line 9"),console.log("Line 10"),console.log("Line 11"),console.log("Line 12"),{statusCode:200,headers:e.headers,body:"end"})}},o={},n=function n(s){var l=o[s];if(void 0!==l)return l.exports;var i=o[s]={exports:{}};return e[s](i,i.exports,n),i.exports}(220),s=exports;for(var l in n)s[l]=n[l];n.__esModule&&Object.defineProperty(s,"__esModule",{value:!0})})();