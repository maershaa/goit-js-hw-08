function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,m=Math.min,p=function(){return l.Date.now()};function v(t,e,n){var r,i,o,a,u,f,c=0,l=!1,d=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=r,o=i;return r=i=void 0,c=e,a=t.apply(o,n)}function S(t){return c=t,u=setTimeout(j,e),l?b(t):a}function h(t){var n=t-f;return void 0===f||n>=e||n<0||d&&t-c>=o}function j(){var t=p();if(h(t))return w(t);u=setTimeout(j,function(t){var n=e-(t-f);return d?m(n,o-(t-c)):n}(t))}function w(t){return u=void 0,v&&r?b(t):(r=i=void 0,a)}function O(){var t=p(),n=h(t);if(r=arguments,i=this,f=t,n){if(void 0===u)return S(f);if(d)return u=setTimeout(j,e),b(f)}return void 0===u&&(u=setTimeout(j,e)),a}return e=y(e)||0,g(n)&&(l=!!n.leading,o=(d="maxWait"in n)?s(y(n.maxWait)||0,e):o,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=i=u=void 0},O.flush=function(){return void 0===u?a:w(p())},O}function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=o.test(t);return n||a.test(t)?u(t.slice(2),n?2:8):i.test(t)?NaN:+t}e=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),v(t,e,{leading:r,maxWait:e,trailing:i})};const b={form:document.querySelector(".feedback-form"),input:document.querySelector('[name="email"]'),textarea:document.querySelector('[name="message"]')},S={};function h(){localStorage.setItem("feedback-data",JSON.stringify(S))}b.form.addEventListener("submit",(function(t){t.preventDefault(),t.currentTarget.reset(),localStorage.removeItem("feedback-data")})),b.input.addEventListener("input",t(e)((function(t){const e=t.target.getAttribute("name");S[e]=t.target.value,h()}),500)),b.textarea.addEventListener("input",t(e)((function(t){const e=t.target.getAttribute("name");S[e]=t.target.value,h()}),500)),function(){const t=localStorage.getItem("feedback-data");if(t){const e=JSON.parse(t);for(const t in e)if(e.hasOwnProperty(t)){const n=b.form.querySelector(`[name="${t}"]`);n&&(n.value=e[t],S[t]=e[t])}}}();
//# sourceMappingURL=03-feedback.4921c1fa.js.map
