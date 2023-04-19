(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(t,e,r){t.exports=r(41)},31:function(t,e,r){},33:function(t,e,r){},35:function(t,e,r){},37:function(t,e,r){},39:function(t,e,r){},41:function(t,e,r){"use strict";r.r(e);var n=r(3),o=r.n(n),a=r(21),i=r.n(a);r(31);function c(){var t=o.a.createElement("div",null,o.a.createElement("h1",null,"Pokemon PokeDex Viewer - Intermediate"),o.a.createElement("img",{src:"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",alt:"React Logo",id:"logo",height:"100",width:"100"}),o.a.createElement("p",null,"Developed as the Final Project for Software Saturdays Spring 2023"),o.a.createElement("p",null,"Find the Github repository ",o.a.createElement("a",{href:"https://github.com/Ranasinghe843/react-poke-dex/tree/master"},"here"))),e=o.a.createElement("div",{id:"instructions"},o.a.createElement("h3",null,"Instructions"),o.a.createElement("p",null,"Scoll Down to Load Pokemon from the Poke API Database where you will be shown facts about each Pokemon. You can add upto 6 pokemon to your team which will be stored in a FireBase database and can be retrieved.",o.a.createElement("br",null),o.a.createElement("br",null),"Create the Ultimate Pokemon Team!"));return o.a.createElement(o.a.Fragment,null,t,e)}var u=r(9),l=(r(33),r(22)),s=r(11),f=Object(l.a)({apiKey:"AIzaSyAhMijYIQJJe-nStZhr_w2L1wsN-yFt1wI",authDomain:"softwaresaturdays2023-82bdc.firebaseapp.com",databaseURL:"https://softwaresaturdays2023-82bdc-default-rtdb.firebaseio.com",projectId:"softwaresaturdays2023-82bdc",storageBucket:"softwaresaturdays2023-82bdc.appspot.com",messagingSenderId:"663767516822",appId:"1:663767516822:web:e8f1435469db13d4c564b7"}),h=Object(s.a)(f),p=r(8);r(35);function d(){d=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(P){u=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),c=new k(o||[]);return n(i,"_invoke",{value:x(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=l;var f={};function h(){}function p(){}function m(){}var v={};u(v,a,function(){return this});var y=Object.getPrototypeOf,g=y&&y(y(_([])));g&&g!==e&&r.call(g,a)&&(v=g);var w=m.prototype=h.prototype=Object.create(v);function b(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e(function(o,i){!function n(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(f).then(function(t){l.value=t,i(l)},function(t){return n("throw",t,i,c)})}c(u.arg)}(n,a,o,i)})}return o=o?o.then(i,i):i()}})}function x(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=m,n(w,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:p,configurable:!0}),p.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(E.prototype),u(E.prototype,i,function(){return this}),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(w),u(w,c,"Generator"),u(w,a,function(){return this}),u(w,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function m(t){var e=Object(n.useState)(null),r=Object(u.a)(e,2),a=r[0],i=r[1],c=function(){var e=Object(p.a)(d().mark(function e(){var r,n,a,c,u;return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.url,e.next=3,fetch(r);case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,c=a.types.map(function(t){return o.a.createElement("div",{className:"type"},"Type: ",t.type.name)}),u=o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"images"},o.a.createElement("img",{src:a.sprites.front_default,alt:"front_default"}),o.a.createElement("img",{src:a.sprites.front_shiny,alt:"front_default"})),o.a.createElement("h4",null,a.species.name),o.a.createElement("p",null,"Height: ",a.height),o.a.createElement("p",null,"Weight: ",a.weight),o.a.createElement("p",null,"Base XP: ",a.base_experience),c,o.a.createElement("p",null," ")),i(u);case 10:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){c()},[]),o.a.createElement(o.a.Fragment,null,a)}function v(t){return o.a.createElement("div",{className:"Card"},o.a.createElement(m,{url:t.url}),o.a.createElement("p",null,"Added at:"),o.a.createElement("p",null,t.timestamp),o.a.createElement("button",{onClick:function(){var e=Object(s.d)(h,t.keyPoke);Object(s.e)(e).then(function(){console.log("Remove was successful")}).catch(function(t){console.log("Remove failed"),console.log(t)})}},"Remove from My Team"),o.a.createElement("p",null))}function y(t){return o.a.createElement("div",{className:"Card"},o.a.createElement(m,{url:t.url}),o.a.createElement("button",{onClick:function(){var e={url:t.url,timestamp:(new Date).toISOString()},r=Math.round(1e6*Math.random()),n=Object(s.d)(h,r.toString());Object(s.f)(n,e).then(function(){console.log("Set was successful")}).catch(function(t){console.log("Set failed"),console.log(t)})}},"Add to My Team"),o.a.createElement("p",null))}function g(){var t=Object(n.useState)(null),e=Object(u.a)(t,2),r=e[0],a=e[1];Object(n.useEffect)(function(){var t=Object(s.d)(h,"/");return Object(s.c)(t,function(t){var e=[];for(var r in t.val()){for(var n in console.log(r,":"),t.val()[r])console.log("   ",n,":",t.val()[r][n]);console.log("-----------------"),e.push(o.a.createElement(v,{url:t.val()[r].url,keyPoke:r,timestamp:t.val()[r].timestamp}))}a(e)}),function(){var t=Object(s.d)(h,"/");Object(s.b)(t),console.log("Removed listener")}},[]);var i=o.a.createElement("div",{className:"wrapper"},r);return o.a.createElement(o.a.Fragment,null,o.a.createElement("hr",{className:"line"}),o.a.createElement("h2",{id:"title"},"My Team:"),i,o.a.createElement("hr",{className:"line"}))}r(37);function w(){w=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(P){u=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),c=new k(o||[]);return n(i,"_invoke",{value:x(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=l;var f={};function h(){}function p(){}function d(){}var m={};u(m,a,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(_([])));y&&y!==e&&r.call(y,a)&&(m=y);var g=d.prototype=h.prototype=Object.create(m);function b(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e(function(o,i){!function n(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(f).then(function(t){l.value=t,i(l)},function(t){return n("throw",t,i,c)})}c(u.arg)}(n,a,o,i)})}return o=o?o.then(i,i):i()}})}function x(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=d,n(g,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(E.prototype),u(E.prototype,i,function(){return this}),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(g),u(g,c,"Generator"),u(g,a,function(){return this}),u(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function b(){var t=Object(n.useState)(6),e=Object(u.a)(t,2),r=e[0],a=e[1],i=Object(n.useState)(null),c=Object(u.a)(i,2),l=c[0],s=c[1],f=function(){var t=Object(p.a)(w().mark(function t(){var e,n,a,i;return w().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://pokeapi.co/api/v2/pokemon?limit="+r.toString()+"&offset=0",t.next=3,fetch(e);case 3:return n=t.sent,t.next=6,n.json();case 6:a=t.sent,console.log(a),i=a.results.map(function(t){return o.a.createElement(y,{url:t.url})}),s(i);case 10:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)(function(){f()},[r]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"wrapper"},l),o.a.createElement("br",null),o.a.createElement("button",{type:"button",onClick:function(){return a(r+6)}},"Get More Pokemon"),o.a.createElement("br",null))}var E=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(c,null),o.a.createElement("br",null),o.a.createElement(g,null),o.a.createElement("br",null),o.a.createElement(b,null),o.a.createElement("footer",null,o.a.createElement("p",null,"Created by Samitha Ranasinghe")))};r(39);i.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)))}},[[23,2,1]]]);
//# sourceMappingURL=main.71abd00c.chunk.js.map