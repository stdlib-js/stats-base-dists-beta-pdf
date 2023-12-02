"use strict";var q=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=q(function(E,s){
var g=require('@stdlib/math-base-special-betaln/dist'),f=require('@stdlib/math-base-assert-is-nan/dist'),I=require('@stdlib/math-base-special-log1p/dist'),P=require('@stdlib/math-base-special-exp/dist'),m=require('@stdlib/math-base-special-ln/dist'),o=require('@stdlib/constants-float64-pinf/dist');function A(e,r,u){var n;return f(e)||f(r)||f(u)||r<=0||u<=0?NaN:e<0||e>1?0:e===0?r<1?o:r>1?0:u:e===1?u<1?o:u>1?0:r:(n=(r-1)*m(e),n+=(u-1)*I(-e),n-=g(r,u),P(n))}s.exports=A
});var d=q(function(G,y){
var B=require('@stdlib/utils-constant-function/dist'),O=require('@stdlib/math-base-special-betaln/dist'),v=require('@stdlib/math-base-assert-is-nan/dist'),R=require('@stdlib/math-base-special-log1p/dist'),j=require('@stdlib/math-base-special-exp/dist'),k=require('@stdlib/math-base-special-ln/dist'),N=require('@stdlib/constants-float64-pinf/dist');function w(e,r){var u;if(v(e)||v(r)||e<=0||r<=0)return B(NaN);return u=O(e,r),n;function n(i){var t;return v(i)?NaN:i<0||i>1?0:i===0?e<1?N:e>1?0:r:i===1?r<1?N:r>1?0:e:(t=-u,t+=(e-1)*k(i),t+=(r-1)*R(-i),j(t))}}y.exports=w
});var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=c(),C=d();z(F,"factory",C);module.exports=F;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
