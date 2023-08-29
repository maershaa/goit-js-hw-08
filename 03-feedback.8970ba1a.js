!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i="Expected a function",r=0/0,o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),m=Object.prototype.toString,p=Math.max,v=Math.min,g=function(){return s.Date.now()};/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */function b(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==m.call(t))return r;if(y(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var i=u.test(e);return i||f.test(e)?l(e.slice(2),i?2:8):a.test(e)?r:+e}n=/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */function(e,t,n){var r,o,a,u,f,l,c=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw TypeError(i);function h(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function S(e){var n=e-l,i=e-c;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===l||n>=t||n<0||s&&i>=a}function j(){var e,n,i,r=g();if(S(r))return O(r);// Restart the timer.
f=setTimeout(j,(e=r-l,n=r-c,i=t-e,s?v(i,a-n):i))}function O(e){return(// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
(f=void 0,m&&r)?h(e):(r=o=void 0,u))}function T(){var e,n=g(),i=S(n);if(r=arguments,o=this,l=n,i){if(void 0===f)return(// Reset any `maxWait` timer.
c=e=l,// Start the timer for the trailing edge.
f=setTimeout(j,t),d?h(e):u);if(s)return(// Handle invocations in a tight loop.
f=setTimeout(j,t),h(l))}return void 0===f&&(f=setTimeout(j,t)),u}return t=b(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?p(b(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},T.flush=function(){return void 0===f?u:O(g())},T}(e,t,{leading:r,maxWait:t,trailing:o})};// Определение константы STORAGE_KEY, которая будет использоваться в качестве ключа для сохранения и извлечения данных из локального хранилища.
let h="feedback-data",S={form:document.querySelector(".feedback-form"),input:document.querySelector('[name="email"]'),textarea:document.querySelector('[name="message"]')},j={};// Функция saveDataToLocalStorage записывает данные из объекта formData в локальное хранилище с помощью localStorage.setItem.
function O(){localStorage.setItem(h,JSON.stringify(j))}// Добавление обработчика события submit на форму. Когда форма отправляется, вызывается функция onFormSubmit.
S.form.addEventListener("submit",// Внутри функции onFormSubmit сначала предотвращается стандартное поведение формы с помощью evt.preventDefault(). Затем проверяется, заполнены ли оба поля ввода (email и message). Если хотя бы одно из полей не заполнено, выводится предупреждающее сообщение с помощью alert и функция завершается с помощью return, чтобы остальные действия не выполнялись.
function(e){// Здесь вы проверяете, заполнены ли оба поля email и message в форме. Если хотя бы одно из полей пустое, выводится alert с предупреждением.
if(e.preventDefault(),""===S.input.value||""===S.textarea.value){alert("Please fill in all the fields!");return}//Функция populateFormFields используется для восстановления данных из локального хранилища при загрузке страницы. Она получает сохраненные данные, разбирает их с помощью JSON.parse, затем обновляет значения соответствующих полей формы и объекта formData.
(function(){let e=localStorage.getItem(h);if(e){let t=JSON.parse(e);for(let e in t)if(t.hasOwnProperty(e)){let n=S.form.querySelector(`[name="${e}"]`);n&&(n.value=t[e]||"",j[e]=t[e])}}})(),// После этого выполняется сброс значений полей формы с помощью evt.currentTarget.reset(), и данные удаляются из локального хранилища с помощью localStorage.removeItem(STORAGE_KEY).
e.currentTarget.reset(),localStorage.removeItem(h)}),S.input.addEventListener("input",/*@__PURE__*/e(n)(// Далее, определены функции onInput и onTextareaInput, которые вызываются при вводе данных в поля ввода email и message. Внутри этих функций значения записываются в объект formData, а затем вызывается функция saveDataToLocalStorage, чтобы сохранить обновленные данные в локальное хранилище.
function(e){let t=e.target.getAttribute("name");j[t]=e.target.value,O()},500)),S.textarea.addEventListener("input",/*@__PURE__*/e(n)(function(e){let t=e.target.getAttribute("name");j[t]=e.target.value,O()},500))}();//# sourceMappingURL=03-feedback.8970ba1a.js.map

//# sourceMappingURL=03-feedback.8970ba1a.js.map
