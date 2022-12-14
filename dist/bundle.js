(()=>{"use strict";var n={426:(n,e,o)=>{o.d(e,{Z:()=>s});var t=o(81),r=o.n(t),a=o(645),i=o.n(a)()(r());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Thasadith:wght@400&display=swap);"]),i.push([n.id,'*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}\n\n:root {\n  --shadow-color: 0deg 0% 58%;\n  --shadow-elevation-low: 0.3px 0.8px 1px hsl(var(--shadow-color) / 0.39),\n    0.6px 1.4px 1.7px -1.2px hsl(var(--shadow-color) / 0.39),\n    1.5px 3.5px 4.3px -2.5px hsl(var(--shadow-color) / 0.39);\n  --shadow-elevation-medium: 0.3px 0.8px 1px hsl(var(--shadow-color) / 0.41),\n    1.2px 2.8px 3.4px -0.8px hsl(var(--shadow-color) / 0.41),\n    3px 7.1px 8.7px -1.7px hsl(var(--shadow-color) / 0.41),\n    7.3px 17.3px 21.1px -2.5px hsl(var(--shadow-color) / 0.41);\n  --shadow-elevation-high: 0.3px 0.8px 1px hsl(var(--shadow-color) / 0.38),\n    2.2px 5.3px 6.5px -0.4px hsl(var(--shadow-color) / 0.38),\n    4.2px 9.9px 12.1px -0.7px hsl(var(--shadow-color) / 0.38),\n    6.9px 16.3px 19.9px -1.1px hsl(var(--shadow-color) / 0.38),\n    11px 26.1px 31.9px -1.4px hsl(var(--shadow-color) / 0.38),\n    17.2px 40.9px 49.9px -1.8px hsl(var(--shadow-color) / 0.38),\n    26.2px 62.3px 76px -2.1px hsl(var(--shadow-color) / 0.38),\n    38.7px 91.8px 112.1px -2.5px hsl(var(--shadow-color) / 0.38);\n\n  --color-text-lowest-freq: rgb(168, 168, 168);\n}\n\n.shadow-low {\n  box-shadow: var(--shadow-elevation-low);\n}\n\n.shadow-medium {\n  box-shadow: var(--shadow-elevation-medium);\n}\n\n.shadow-high {\n  box-shadow: var(--shadow-elevation-high);\n}\n\n/* Styling Now */\n\n#container {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\n.project {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: end;\n\n  background-color: white;\n  padding: 25px;\n}\n\n.task {\n  width: 300px;\n  background-color: gainsboro;\n\n  display: flex;\n  align-items: center;\n\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-weight: 400;\n  font-size: 0.85rem;\n\n  box-shadow: var(--shadow-elevation-low);\n}\n\n.task:hover {\n  background-color: rgb(225, 225, 225);\n}\n\n.text-container {\n  flex-grow: 1;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  align-items: end;\n}\n\n.task-lg {\n  height: 50px;\n  margin-top: 6px;\n  margin-bottom: 8px;\n  border-radius: 8px;\n}\n\n.task-md {\n  width: 265px;\n  height: 38px;\n  margin-bottom: 8px;\n  border-radius: 8px;\n}\n\n.task-sm {\n  width: 245px;\n  height: 28px;\n  margin-bottom: 6px;\n  border-radius: 8px;\n}\n\n.checkbox {\n  border-radius: 6px;\n  background-color: white;\n  flex-shrink: 0;\n\n  cursor: pointer;\n}\n\n.checkmark {\n  display: inline-block;\n  width: 20px;\n  height: 14px;\n  transform: rotate(45deg);\n}\n\n.checkmark:before {\n  content: "";\n  position: absolute;\n  width: 2px;\n  height: 14px;\n  background-color: black;\n  left: 14px;\n  top: 0px;\n}\n\n.checkmark:after {\n  content: "";\n  position: absolute;\n  width: 6px;\n  height: 2px;\n  background-color: black;\n  left: 8px;\n  top: 12px;\n}\n\n.task-lg > .checkbox {\n  width: 23.1px;\n  height: 22px;\n\n  margin-left: 11px;\n  margin-right: 7px;\n}\n\n.task-md > .checkbox {\n  width: 21px;\n  height: 20px;\n\n  margin: 0 9px;\n  margin-right: 6px;\n}\n\n.task-sm > .checkbox {\n  width: 18.9px;\n  height: 18px;\n\n  margin: 0 5px;\n}\n\n.text-field {\n  border: none;\n  background-color: initial;\n  cursor: pointer;\n}\n\n.text-field:focus {\n  outline: none;\n  text-decoration-line: underline;\n  text-decoration-color: rgb(220, 220, 220);\n}\n\n.task-title {\n  font-weight: 500;\n  font-size: 0.85rem;\n  width: 95%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  grid-column: 1 / span 2;\n}\n\n.date {\n  font-weight: 300;\n  font-size: 0.75rem;\n  text-align: right;\n  white-space: nowrap;\n}\n\n.completed {\n  color: var(--color-text-lowest-freq);\n  text-decoration: line-through;\n}\n\n.editing {\n  visibility: visible;\n}\n\n.color-code {\n  height: 8px;\n  width: 8px;\n  border-radius: 100%;\n  margin-left: auto;\n  position: relative;\n  align-self: start;\n  top: 6px;\n  right: 6px;\n  flex-shrink: 0;\n}\n\n.color-code--none {\n  background-color: initial;\n}\n\n.color-code--red {\n  background-color: red;\n}\n\n.color-code--orange {\n  background-color: orange;\n}\n\n.color-code--yellow {\n  background-color: yellow;\n}\n\n.color-code--green {\n  background-color: green;\n}\n\n.color-code--blue {\n  background-color: blue;\n}\n\n.color-code--purple {\n  background-color: purple;\n}\n\n.color-code--gray {\n  background-color: gray;\n}\n\n.addtask {\n  width: 90%;\n  padding: 15px;\n}\n\n.addtask__form {\n  display: flex;\n  gap: 5px;\n\n  align-items: center;\n}\n\n.addtask__form > input[type="text"] {\n  width: 80%;\n  font-family: sans-serif;\n  font-size: 16px;\n}\n\n.addtask__form > input[type="submit"] {\n}\n',""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var o="",t=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),t&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=n(e),t&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(n,o,t,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<n.length;c++){var p=[].concat(n[c]);t&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),o&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=o):p[2]=o),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function o(n){for(var o=-1,t=0;t<e.length;t++)if(e[t].identifier===n){o=t;break}return o}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var l=n[s],c=t.base?l[0]+t.base:l[0],p=a[c]||0,d="".concat(c," ").concat(p);a[c]=p+1;var h=o(d),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)e[h].references++,e[h].updater(u);else{var x=r(u,t);t.byIndex=s,e.splice(s,0,{identifier:d,updater:x,references:1})}i.push(d)}return i}function r(n,e){var o=e.domAPI(e);o.update(n);return function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;o.update(n=e)}else o.remove()}}n.exports=function(n,r){var a=t(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=o(a[i]);e[s].references--}for(var l=t(n,r),c=0;c<a.length;c++){var p=o(a[c]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=l}}},569:n=>{var e={};n.exports=function(n,o){var t=function(n){if(void 0===e[n]){var o=document.querySelector(n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}e[n]=o}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(o)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,o)=>{n.exports=function(n){var e=o.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(o){!function(n,e,o){var t="";o.supports&&(t+="@supports (".concat(o.supports,") {")),o.media&&(t+="@media ".concat(o.media," {"));var r=void 0!==o.layer;r&&(t+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),t+=o.css,r&&(t+="}"),o.media&&(t+="}"),o.supports&&(t+="}");var a=o.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,o)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function o(t){var r=e[t];if(void 0!==r)return r.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,o),a.exports}o.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return o.d(e,{a:e}),e},o.d=(n,e)=>{for(var t in e)o.o(e,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},o.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),o.nc=void 0,(()=>{var n=o(379),e=o.n(n),t=o(795),r=o.n(t),a=o(569),i=o.n(a),s=o(565),l=o.n(s),c=o(216),p=o.n(c),d=o(589),h=o.n(d),u=o(426),x={};x.styleTagTransform=h(),x.setAttributes=l(),x.insert=i().bind(null,"head"),x.domAPI=r(),x.insertStyleElement=p();e()(u.Z,x);u.Z&&u.Z.locals&&u.Z.locals;const f=class{get element(){const n=document.createElement("div");n.setAttribute("class","addtask");const e=document.createElement("form");e.setAttribute("class","addtask__form"),n.append(e);const o=document.createElement("input");o.type="text",o.placeholder="Add a new task...",e.append(o);const t=document.createElement("input");return t.type="submit",t.value="Add to To-Do List",t.addEventListener("click",(n=>{n.preventDefault(),console.log(o.value),o.value=""})),e.append(t),n}};document.body.appendChild(function(){const n=document.getElementById("container"),e=new f;return n.append(e.element),n}())})()})();