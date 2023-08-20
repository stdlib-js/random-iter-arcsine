// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.0.14-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.0.8-esm/index.mjs";import{factory as j}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-arcsine@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function u(c,g,b){var v,x,w,y,N;if(!o(c)||d(c))throw new TypeError(f("0pF6v,NI",c));if(!o(g)||d(g))throw new TypeError(f("0pF6w,NJ",g));if(c>=g)throw new RangeError(f("0pFNK",c,g));if(arguments.length>2){if(!m(b))throw new TypeError(f("0pF2V,FD",b));if(v=i({},b),p(v,"iter")){if(!l(v.iter))throw new TypeError(f("0pF2t,G9","iter",v.iter))}else v.iter=h;w=j(c,g,v),void 0===v.prng&&!1!==v.copy&&(v.state=w.state)}else w=j(c,g),v={iter:h,state:w.state};return N=0,e(x={},"next",G),e(x,"return",L),v&&v.prng?(e(x,"seed",null),e(x,"seedLength",null),s(x,"state",n(null),r),e(x,"stateLength",null),e(x,"byteLength",null)):(t(x,"seed",R),t(x,"seedLength",F),s(x,"state",D,I),t(x,"stateLength",E),t(x,"byteLength",T)),e(x,"PRNG",w.PRNG),a&&e(x,a,P),x;function G(){return N+=1,y||N>v.iter?{done:!0}:{value:w(),done:!1}}function L(e){return y=!0,arguments.length?{value:e,done:!0}:{done:!0}}function P(){return u(c,g,v)}function R(){return w.PRNG.seed}function F(){return w.PRNG.seedLength}function E(){return w.PRNG.stateLength}function T(){return w.PRNG.byteLength}function D(){return w.PRNG.state}function I(e){w.PRNG.state=e}}export{u as default};
//# sourceMappingURL=index.mjs.map
