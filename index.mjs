// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-betaln@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.8-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";function a(t,d,a){var l;return e(t)||e(d)||e(a)||d<=0||a<=0?NaN:t<0||t>1?0:0===t?d<1?m:d>1?0:a:1===t?a<1?m:a>1?0:d:(l=(d-1)*r(t),l+=(a-1)*n(-t),l-=s(d,a),i(l))}function l(t,a){var l;return e(t)||e(a)||t<=0||a<=0?d(NaN):(l=s(t,a),function(s){var d;if(e(s))return NaN;if(s<0||s>1)return 0;if(0===s)return t<1?m:t>1?0:a;if(1===s)return a<1?m:a>1?0:t;return d=-l,d+=(t-1)*r(s),d+=(a-1)*n(-s),i(d)})}t(a,"factory",l);export{a as default,l as factory};
//# sourceMappingURL=index.mjs.map
