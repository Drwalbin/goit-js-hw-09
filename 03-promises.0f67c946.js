function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i);var r=i("eWCmQ");e(r).Notify.init({useIcon:!1});const l=document.querySelector("button"),s=document.querySelector(".form"),u=(e,t)=>new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.2?o({position:e,delay:t}):n({position:e,delay:t})}),t)}));l.addEventListener("click",(e=>{e.preventDefault();const t=Number(s.elements.delay.value),o=Number(s.elements.step.value),n=s.elements.amount.value;for(let e=1;e<=n;e++){const n=t+o*(e-1);u(e,n).then((({position:e,delay:t})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${t} ms`)})).catch((({position:e,delay:t})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${t} ms`)}))}}));
//# sourceMappingURL=03-promises.0f67c946.js.map
