(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Qr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const K={},At=[],Ae=()=>{},Cs=()=>!1,Ps=/^on[^a-z]/,Wn=e=>Ps.test(e),ea=e=>e.startsWith("onUpdate:"),ne=Object.assign,ta=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Is=Object.prototype.hasOwnProperty,$=(e,t)=>Is.call(e,t),L=Array.isArray,Et=e=>Kn(e)==="[object Map]",Zi=e=>Kn(e)==="[object Set]",D=e=>typeof e=="function",ee=e=>typeof e=="string",na=e=>typeof e=="symbol",q=e=>e!==null&&typeof e=="object",Qi=e=>q(e)&&D(e.then)&&D(e.catch),eo=Object.prototype.toString,Kn=e=>eo.call(e),Ss=e=>Kn(e).slice(8,-1),to=e=>Kn(e)==="[object Object]",ra=e=>ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Pn=Qr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ts=/-(\w)/g,Me=Vn(e=>e.replace(Ts,(t,n)=>n?n.toUpperCase():"")),Ns=/\B([A-Z])/g,Mt=Vn(e=>e.replace(Ns,"-$1").toLowerCase()),Xn=Vn(e=>e.charAt(0).toUpperCase()+e.slice(1)),cr=Vn(e=>e?`on${Xn(e)}`:""),Vt=(e,t)=>!Object.is(e,t),In=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Rn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ar=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let $a;const Er=()=>$a||($a=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function aa(e){if(L(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ee(r)?Rs(r):aa(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ee(e))return e;if(q(e))return e}}const Ms=/;(?![^(]*\))/g,Fs=/:([^]+)/,Ls=/\/\*[^]*?\*\//g;function Rs(e){const t={};return e.replace(Ls,"").split(Ms).forEach(n=>{if(n){const r=n.split(Fs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function qn(e){let t="";if(ee(e))t=e;else if(L(e))for(let n=0;n<e.length;n++){const r=qn(e[n]);r&&(t+=r+" ")}else if(q(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ds="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",js=Qr(Ds);function no(e){return!!e||e===""}const Ba=e=>ee(e)?e:e==null?"":L(e)||q(e)&&(e.toString===eo||!D(e.toString))?JSON.stringify(e,ro,2):String(e),ro=(e,t)=>t&&t.__v_isRef?ro(e,t.value):Et(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Zi(t)?{[`Set(${t.size})`]:[...t.values()]}:q(t)&&!L(t)&&!to(t)?String(t):t;let xe;class zs{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xe,!t&&xe&&(this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=xe;try{return xe=this,t()}finally{xe=n}}}on(){xe=this}off(){xe=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function $s(e,t=xe){t&&t.active&&t.effects.push(e)}function Bs(){return xe}const ia=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ao=e=>(e.w&Ze)>0,io=e=>(e.n&Ze)>0,Us=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ze},Hs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];ao(a)&&!io(a)?a.delete(e):t[n++]=a,a.w&=~Ze,a.n&=~Ze}t.length=n}},Or=new WeakMap;let $t=0,Ze=1;const Cr=30;let we;const mt=Symbol(""),Pr=Symbol("");class oa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,$s(this,r)}run(){if(!this.active)return this.fn();let t=we,n=qe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=we,we=this,qe=!0,Ze=1<<++$t,$t<=Cr?Us(this):Ua(this),this.fn()}finally{$t<=Cr&&Hs(this),Ze=1<<--$t,we=this.parent,qe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){we===this?this.deferStop=!0:this.active&&(Ua(this),this.onStop&&this.onStop(),this.active=!1)}}function Ua(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let qe=!0;const oo=[];function Ft(){oo.push(qe),qe=!1}function Lt(){const e=oo.pop();qe=e===void 0?!0:e}function me(e,t,n){if(qe&&we){let r=Or.get(e);r||Or.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=ia()),so(a)}}function so(e,t){let n=!1;$t<=Cr?io(e)||(e.n|=Ze,n=!ao(e)):n=!e.has(we),n&&(e.add(we),we.deps.push(e))}function ze(e,t,n,r,a,i){const o=Or.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&L(e)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":L(e)?ra(n)&&s.push(o.get("length")):(s.push(o.get(mt)),Et(e)&&s.push(o.get(Pr)));break;case"delete":L(e)||(s.push(o.get(mt)),Et(e)&&s.push(o.get(Pr)));break;case"set":Et(e)&&s.push(o.get(mt));break}if(s.length===1)s[0]&&Ir(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Ir(ia(l))}}function Ir(e,t){const n=L(e)?e:[...e];for(const r of n)r.computed&&Ha(r);for(const r of n)r.computed||Ha(r)}function Ha(e,t){(e!==we||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Ys=Qr("__proto__,__v_isRef,__isVue"),lo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(na)),Ws=sa(),Ks=sa(!1,!0),Vs=sa(!0),Ya=Xs();function Xs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=B(this);for(let i=0,o=this.length;i<o;i++)me(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(B)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ft();const r=B(this)[t].apply(this,n);return Lt(),r}}),e}function qs(e){const t=B(this);return me(t,"has",e),t.hasOwnProperty(e)}function sa(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?ul:po:t?mo:uo).get(r))return r;const o=L(r);if(!e){if(o&&$(Ya,a))return Reflect.get(Ya,a,i);if(a==="hasOwnProperty")return qs}const s=Reflect.get(r,a,i);return(na(a)?lo.has(a):Ys(a))||(e||me(r,"get",a),t)?s:se(s)?o&&ra(a)?s:s.value:q(s)?e?ho(s):ca(s):s}}const Js=fo(),Gs=fo(!0);function fo(e=!1){return function(n,r,a,i){let o=n[r];if(It(o)&&se(o)&&!se(a))return!1;if(!e&&(!Dn(a)&&!It(a)&&(o=B(o),a=B(a)),!L(n)&&se(o)&&!se(a)))return o.value=a,!0;const s=L(n)&&ra(r)?Number(r)<n.length:$(n,r),l=Reflect.set(n,r,a,i);return n===B(i)&&(s?Vt(a,o)&&ze(n,"set",r,a):ze(n,"add",r,a)),l}}function Zs(e,t){const n=$(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&ze(e,"delete",t,void 0),r}function Qs(e,t){const n=Reflect.has(e,t);return(!na(t)||!lo.has(t))&&me(e,"has",t),n}function el(e){return me(e,"iterate",L(e)?"length":mt),Reflect.ownKeys(e)}const co={get:Ws,set:Js,deleteProperty:Zs,has:Qs,ownKeys:el},tl={get:Vs,set(e,t){return!0},deleteProperty(e,t){return!0}},nl=ne({},co,{get:Ks,set:Gs}),la=e=>e,Jn=e=>Reflect.getPrototypeOf(e);function dn(e,t,n=!1,r=!1){e=e.__v_raw;const a=B(e),i=B(t);n||(t!==i&&me(a,"get",t),me(a,"get",i));const{has:o}=Jn(a),s=r?la:n?da:Xt;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function mn(e,t=!1){const n=this.__v_raw,r=B(n),a=B(e);return t||(e!==a&&me(r,"has",e),me(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function pn(e,t=!1){return e=e.__v_raw,!t&&me(B(e),"iterate",mt),Reflect.get(e,"size",e)}function Wa(e){e=B(e);const t=B(this);return Jn(t).has.call(t,e)||(t.add(e),ze(t,"add",e,e)),this}function Ka(e,t){t=B(t);const n=B(this),{has:r,get:a}=Jn(n);let i=r.call(n,e);i||(e=B(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Vt(t,o)&&ze(n,"set",e,t):ze(n,"add",e,t),this}function Va(e){const t=B(this),{has:n,get:r}=Jn(t);let a=n.call(t,e);a||(e=B(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&ze(t,"delete",e,void 0),i}function Xa(){const e=B(this),t=e.size!==0,n=e.clear();return t&&ze(e,"clear",void 0,void 0),n}function hn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=B(o),l=t?la:e?da:Xt;return!e&&me(s,"iterate",mt),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function gn(e,t,n){return function(...r){const a=this.__v_raw,i=B(a),o=Et(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?la:t?da:Xt;return!t&&me(i,"iterate",l?Pr:mt),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function We(e){return function(...t){return e==="delete"?!1:this}}function rl(){const e={get(i){return dn(this,i)},get size(){return pn(this)},has:mn,add:Wa,set:Ka,delete:Va,clear:Xa,forEach:hn(!1,!1)},t={get(i){return dn(this,i,!1,!0)},get size(){return pn(this)},has:mn,add:Wa,set:Ka,delete:Va,clear:Xa,forEach:hn(!1,!0)},n={get(i){return dn(this,i,!0)},get size(){return pn(this,!0)},has(i){return mn.call(this,i,!0)},add:We("add"),set:We("set"),delete:We("delete"),clear:We("clear"),forEach:hn(!0,!1)},r={get(i){return dn(this,i,!0,!0)},get size(){return pn(this,!0)},has(i){return mn.call(this,i,!0)},add:We("add"),set:We("set"),delete:We("delete"),clear:We("clear"),forEach:hn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=gn(i,!1,!1),n[i]=gn(i,!0,!1),t[i]=gn(i,!1,!0),r[i]=gn(i,!0,!0)}),[e,n,t,r]}const[al,il,ol,sl]=rl();function fa(e,t){const n=t?e?sl:ol:e?il:al;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get($(n,a)&&a in r?n:r,a,i)}const ll={get:fa(!1,!1)},fl={get:fa(!1,!0)},cl={get:fa(!0,!1)},uo=new WeakMap,mo=new WeakMap,po=new WeakMap,ul=new WeakMap;function dl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ml(e){return e.__v_skip||!Object.isExtensible(e)?0:dl(Ss(e))}function ca(e){return It(e)?e:ua(e,!1,co,ll,uo)}function pl(e){return ua(e,!1,nl,fl,mo)}function ho(e){return ua(e,!0,tl,cl,po)}function ua(e,t,n,r,a){if(!q(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=ml(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Ot(e){return It(e)?Ot(e.__v_raw):!!(e&&e.__v_isReactive)}function It(e){return!!(e&&e.__v_isReadonly)}function Dn(e){return!!(e&&e.__v_isShallow)}function go(e){return Ot(e)||It(e)}function B(e){const t=e&&e.__v_raw;return t?B(t):e}function vo(e){return Rn(e,"__v_skip",!0),e}const Xt=e=>q(e)?ca(e):e,da=e=>q(e)?ho(e):e;function bo(e){qe&&we&&(e=B(e),so(e.dep||(e.dep=ia())))}function yo(e,t){e=B(e);const n=e.dep;n&&Ir(n)}function se(e){return!!(e&&e.__v_isRef===!0)}function Re(e){return hl(e,!1)}function hl(e,t){return se(e)?e:new gl(e,t)}class gl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:B(t),this._value=n?t:Xt(t)}get value(){return bo(this),this._value}set value(t){const n=this.__v_isShallow||Dn(t)||It(t);t=n?t:B(t),Vt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Xt(t),yo(this))}}function vl(e){return se(e)?e.value:e}const bl={get:(e,t,n)=>vl(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return se(a)&&!se(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function xo(e){return Ot(e)?e:new Proxy(e,bl)}class yl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new oa(t,()=>{this._dirty||(this._dirty=!0,yo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=B(this);return bo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function xl(e,t,n=!1){let r,a;const i=D(e);return i?(r=e,a=Ae):(r=e.get,a=e.set),new yl(r,a,i||!a,n)}function Je(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Gn(i,t,n)}return a}function Ee(e,t,n,r){if(D(e)){const i=Je(e,t,n,r);return i&&Qi(i)&&i.catch(o=>{Gn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ee(e[i],t,n,r));return a}function Gn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Je(l,null,10,[e,o,s]);return}}wl(e,n,a,r)}function wl(e,t,n,r=!0){console.error(e)}let qt=!1,Sr=!1;const oe=[];let Te=0;const Ct=[];let De=null,lt=0;const wo=Promise.resolve();let ma=null;function _l(e){const t=ma||wo;return e?t.then(this?e.bind(this):e):t}function kl(e){let t=Te+1,n=oe.length;for(;t<n;){const r=t+n>>>1;Jt(oe[r])<e?t=r+1:n=r}return t}function pa(e){(!oe.length||!oe.includes(e,qt&&e.allowRecurse?Te+1:Te))&&(e.id==null?oe.push(e):oe.splice(kl(e.id),0,e),_o())}function _o(){!qt&&!Sr&&(Sr=!0,ma=wo.then(Ao))}function Al(e){const t=oe.indexOf(e);t>Te&&oe.splice(t,1)}function El(e){L(e)?Ct.push(...e):(!De||!De.includes(e,e.allowRecurse?lt+1:lt))&&Ct.push(e),_o()}function qa(e,t=qt?Te+1:0){for(;t<oe.length;t++){const n=oe[t];n&&n.pre&&(oe.splice(t,1),t--,n())}}function ko(e){if(Ct.length){const t=[...new Set(Ct)];if(Ct.length=0,De){De.push(...t);return}for(De=t,De.sort((n,r)=>Jt(n)-Jt(r)),lt=0;lt<De.length;lt++)De[lt]();De=null,lt=0}}const Jt=e=>e.id==null?1/0:e.id,Ol=(e,t)=>{const n=Jt(e)-Jt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Ao(e){Sr=!1,qt=!0,oe.sort(Ol);const t=Ae;try{for(Te=0;Te<oe.length;Te++){const n=oe[Te];n&&n.active!==!1&&Je(n,null,14)}}finally{Te=0,oe.length=0,ko(),qt=!1,ma=null,(oe.length||Ct.length)&&Ao()}}function Cl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||K;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||K;v&&(a=n.map(A=>ee(A)?A.trim():A)),m&&(a=n.map(Ar))}let s,l=r[s=cr(t)]||r[s=cr(Me(t))];!l&&i&&(l=r[s=cr(Mt(t))]),l&&Ee(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ee(c,e,6,a)}}function Eo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!D(e)){const l=c=>{const d=Eo(c,t,!0);d&&(s=!0,ne(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(q(e)&&r.set(e,null),null):(L(i)?i.forEach(l=>o[l]=null):ne(o,i),q(e)&&r.set(e,o),o)}function Zn(e,t){return!e||!Wn(t)?!1:(t=t.slice(2).replace(/Once$/,""),$(e,t[0].toLowerCase()+t.slice(1))||$(e,Mt(t))||$(e,t))}let ve=null,Oo=null;function jn(e){const t=ve;return ve=e,Oo=e&&e.type.__scopeId||null,t}function Pl(e,t=ve,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&si(-1);const i=jn(t);let o;try{o=e(...a)}finally{jn(i),r._d&&si(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ur(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:A,ctx:j,inheritAttrs:P}=e;let T,y;const x=jn(e);try{if(n.shapeFlag&4){const C=a||r;T=Se(d.call(C,C,m,i,A,v,j)),y=l}else{const C=t;T=Se(C.length>1?C(i,{attrs:l,slots:s,emit:c}):C(i,null)),y=t.props?l:Il(l)}}catch(C){Yt.length=0,Gn(C,e,1),T=ce(ht)}let F=T;if(y&&P!==!1){const C=Object.keys(y),{shapeFlag:U}=F;C.length&&U&7&&(o&&C.some(ea)&&(y=Sl(y,o)),F=St(F,y))}return n.dirs&&(F=St(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),T=F,jn(x),T}const Il=e=>{let t;for(const n in e)(n==="class"||n==="style"||Wn(n))&&((t||(t={}))[n]=e[n]);return t},Sl=(e,t)=>{const n={};for(const r in e)(!ea(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Tl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ja(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Zn(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ja(r,o,c):!0:!!o;return!1}function Ja(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Zn(n,i))return!0}return!1}function Nl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Ml=e=>e.__isSuspense;function Fl(e,t){t&&t.pendingBranch?L(e)?t.effects.push(...e):t.effects.push(e):El(e)}const vn={};function Sn(e,t,n){return Co(e,t,n)}function Co(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=K){var s;const l=Bs()===((s=re)==null?void 0:s.scope)?re:null;let c,d=!1,m=!1;if(se(e)?(c=()=>e.value,d=Dn(e)):Ot(e)?(c=()=>e,r=!0):L(e)?(m=!0,d=e.some(C=>Ot(C)||Dn(C)),c=()=>e.map(C=>{if(se(C))return C.value;if(Ot(C))return ct(C);if(D(C))return Je(C,l,2)})):D(e)?t?c=()=>Je(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return v&&v(),Ee(e,l,3,[A])}:c=Ae,t&&r){const C=c;c=()=>ct(C())}let v,A=C=>{v=x.onStop=()=>{Je(C,l,4)}},j;if(Zt)if(A=Ae,t?n&&Ee(t,l,3,[c(),m?[]:void 0,A]):c(),a==="sync"){const C=Nf();j=C.__watcherHandles||(C.__watcherHandles=[])}else return Ae;let P=m?new Array(e.length).fill(vn):vn;const T=()=>{if(x.active)if(t){const C=x.run();(r||d||(m?C.some((U,ae)=>Vt(U,P[ae])):Vt(C,P)))&&(v&&v(),Ee(t,l,3,[C,P===vn?void 0:m&&P[0]===vn?[]:P,A]),P=C)}else x.run()};T.allowRecurse=!!t;let y;a==="sync"?y=T:a==="post"?y=()=>de(T,l&&l.suspense):(T.pre=!0,l&&(T.id=l.uid),y=()=>pa(T));const x=new oa(c,y);t?n?T():P=x.run():a==="post"?de(x.run.bind(x),l&&l.suspense):x.run();const F=()=>{x.stop(),l&&l.scope&&ta(l.scope.effects,x)};return j&&j.push(F),F}function Ll(e,t,n){const r=this.proxy,a=ee(e)?e.includes(".")?Po(r,e):()=>r[e]:e.bind(r,r);let i;D(t)?i=t:(i=t.handler,n=t);const o=re;Tt(this);const s=Co(a,i.bind(r),n);return o?Tt(o):pt(),s}function Po(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function ct(e,t){if(!q(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),se(e))ct(e.value,t);else if(L(e))for(let n=0;n<e.length;n++)ct(e[n],t);else if(Zi(e)||Et(e))e.forEach(n=>{ct(n,t)});else if(to(e))for(const n in e)ct(e[n],t);return e}function Ga(e,t){const n=ve;if(n===null)return e;const r=nr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=K]=t[i];o&&(D(o)&&(o={mounted:o,updated:o}),o.deep&&ct(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function at(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Ft(),Ee(l,n,8,[e.el,s,e,t]),Lt())}}function Rl(e,t){return D(e)?(()=>ne({name:e.name},t,{setup:e}))():e}const Tn=e=>!!e.type.__asyncLoader,Io=e=>e.type.__isKeepAlive;function Dl(e,t){So(e,"a",t)}function jl(e,t){So(e,"da",t)}function So(e,t,n=re){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Qn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Io(a.parent.vnode)&&zl(r,t,n,a),a=a.parent}}function zl(e,t,n,r){const a=Qn(t,e,r,!0);No(()=>{ta(r[t],a)},n)}function Qn(e,t,n=re,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ft(),Tt(n);const s=Ee(t,n,e,o);return pt(),Lt(),s});return r?a.unshift(i):a.push(i),i}}const He=e=>(t,n=re)=>(!Zt||e==="sp")&&Qn(e,(...r)=>t(...r),n),$l=He("bm"),To=He("m"),Bl=He("bu"),Ul=He("u"),Hl=He("bum"),No=He("um"),Yl=He("sp"),Wl=He("rtg"),Kl=He("rtc");function Vl(e,t=re){Qn("ec",e,t)}const Mo="components";function Xl(e,t){return Jl(Mo,e,!0,t)||e}const ql=Symbol.for("v-ndc");function Jl(e,t,n=!0,r=!1){const a=ve||re;if(a){const i=a.type;if(e===Mo){const s=Pf(i,!1);if(s&&(s===t||s===Me(t)||s===Xn(Me(t))))return i}const o=Za(a[e]||i[e],t)||Za(a.appContext[e],t);return!o&&r?i:o}}function Za(e,t){return e&&(e[t]||e[Me(t)]||e[Xn(Me(t))])}function Gl(e,t,n,r){let a;const i=n&&n[r];if(L(e)||ee(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(q(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Tr=e=>e?Wo(e)?nr(e)||e.proxy:Tr(e.parent):null,Ht=ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Tr(e.parent),$root:e=>Tr(e.root),$emit:e=>e.emit,$options:e=>ha(e),$forceUpdate:e=>e.f||(e.f=()=>pa(e.update)),$nextTick:e=>e.n||(e.n=_l.bind(e.proxy)),$watch:e=>Ll.bind(e)}),dr=(e,t)=>e!==K&&!e.__isScriptSetup&&$(e,t),Zl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const A=o[t];if(A!==void 0)switch(A){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(dr(r,t))return o[t]=1,r[t];if(a!==K&&$(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&$(c,t))return o[t]=3,i[t];if(n!==K&&$(n,t))return o[t]=4,n[t];Nr&&(o[t]=0)}}const d=Ht[t];let m,v;if(d)return t==="$attrs"&&me(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==K&&$(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,$(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return dr(a,t)?(a[t]=n,!0):r!==K&&$(r,t)?(r[t]=n,!0):$(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==K&&$(e,o)||dr(t,o)||(s=i[0])&&$(s,o)||$(r,o)||$(Ht,o)||$(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Qa(e){return L(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Nr=!0;function Ql(e){const t=ha(e),n=e.proxy,r=e.ctx;Nr=!1,t.beforeCreate&&ei(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:A,updated:j,activated:P,deactivated:T,beforeDestroy:y,beforeUnmount:x,destroyed:F,unmounted:C,render:U,renderTracked:ae,renderTriggered:ie,errorCaptured:be,serverPrefetch:ge,expose:Fe,inheritAttrs:Dt,components:ln,directives:fn,filters:sr}=t;if(c&&ef(c,r,null),o)for(const J in o){const Y=o[J];D(Y)&&(r[J]=Y.bind(n))}if(a){const J=a.call(n,n);q(J)&&(e.data=ca(J))}if(Nr=!0,i)for(const J in i){const Y=i[J],nt=D(Y)?Y.bind(n,n):D(Y.get)?Y.get.bind(n,n):Ae,cn=!D(Y)&&D(Y.set)?Y.set.bind(n):Ae,rt=st({get:nt,set:cn});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>rt.value,set:Oe=>rt.value=Oe})}if(s)for(const J in s)Fo(s[J],r,n,J);if(l){const J=D(l)?l.call(n):l;Reflect.ownKeys(J).forEach(Y=>{sf(Y,J[Y])})}d&&ei(d,e,"c");function le(J,Y){L(Y)?Y.forEach(nt=>J(nt.bind(n))):Y&&J(Y.bind(n))}if(le($l,m),le(To,v),le(Bl,A),le(Ul,j),le(Dl,P),le(jl,T),le(Vl,be),le(Kl,ae),le(Wl,ie),le(Hl,x),le(No,C),le(Yl,ge),L(Fe))if(Fe.length){const J=e.exposed||(e.exposed={});Fe.forEach(Y=>{Object.defineProperty(J,Y,{get:()=>n[Y],set:nt=>n[Y]=nt})})}else e.exposed||(e.exposed={});U&&e.render===Ae&&(e.render=U),Dt!=null&&(e.inheritAttrs=Dt),ln&&(e.components=ln),fn&&(e.directives=fn)}function ef(e,t,n=Ae){L(e)&&(e=Mr(e));for(const r in e){const a=e[r];let i;q(a)?"default"in a?i=Nn(a.from||r,a.default,!0):i=Nn(a.from||r):i=Nn(a),se(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function ei(e,t,n){Ee(L(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Fo(e,t,n,r){const a=r.includes(".")?Po(n,r):()=>n[r];if(ee(e)){const i=t[e];D(i)&&Sn(a,i)}else if(D(e))Sn(a,e.bind(n));else if(q(e))if(L(e))e.forEach(i=>Fo(i,t,n,r));else{const i=D(e.handler)?e.handler.bind(n):t[e.handler];D(i)&&Sn(a,i,e)}}function ha(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>zn(l,c,o,!0)),zn(l,t,o)),q(t)&&i.set(t,l),l}function zn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&zn(e,i,n,!0),a&&a.forEach(o=>zn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=tf[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const tf={data:ti,props:ni,emits:ni,methods:Bt,computed:Bt,beforeCreate:fe,created:fe,beforeMount:fe,mounted:fe,beforeUpdate:fe,updated:fe,beforeDestroy:fe,beforeUnmount:fe,destroyed:fe,unmounted:fe,activated:fe,deactivated:fe,errorCaptured:fe,serverPrefetch:fe,components:Bt,directives:Bt,watch:rf,provide:ti,inject:nf};function ti(e,t){return t?e?function(){return ne(D(e)?e.call(this,this):e,D(t)?t.call(this,this):t)}:t:e}function nf(e,t){return Bt(Mr(e),Mr(t))}function Mr(e){if(L(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function fe(e,t){return e?[...new Set([].concat(e,t))]:t}function Bt(e,t){return e?ne(Object.create(null),e,t):t}function ni(e,t){return e?L(e)&&L(t)?[...new Set([...e,...t])]:ne(Object.create(null),Qa(e),Qa(t??{})):t}function rf(e,t){if(!e)return t;if(!t)return e;const n=ne(Object.create(null),e);for(const r in t)n[r]=fe(e[r],t[r]);return n}function Lo(){return{app:null,config:{isNativeTag:Cs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let af=0;function of(e,t){return function(r,a=null){D(r)||(r=ne({},r)),a!=null&&!q(a)&&(a=null);const i=Lo(),o=new Set;let s=!1;const l=i.app={_uid:af++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Mf,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&D(c.install)?(o.add(c),c.install(l,...d)):D(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const v=ce(r,a);return v.appContext=i,d&&t?t(v,c):e(v,c,m),s=!0,l._container=c,c.__vue_app__=l,nr(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){$n=l;try{return c()}finally{$n=null}}};return l}}let $n=null;function sf(e,t){if(re){let n=re.provides;const r=re.parent&&re.parent.provides;r===n&&(n=re.provides=Object.create(r)),n[e]=t}}function Nn(e,t,n=!1){const r=re||ve;if(r||$n){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:$n._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&D(t)?t.call(r&&r.proxy):t}}function lf(e,t,n,r=!1){const a={},i={};Rn(i,tr,1),e.propsDefaults=Object.create(null),Ro(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:pl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function ff(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=B(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Zn(e.emitsOptions,v))continue;const A=t[v];if(l)if($(i,v))A!==i[v]&&(i[v]=A,c=!0);else{const j=Me(v);a[j]=Fr(l,s,j,A,e,!1)}else A!==i[v]&&(i[v]=A,c=!0)}}}else{Ro(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!$(t,m)&&((d=Mt(m))===m||!$(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Fr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!$(t,m))&&(delete i[m],c=!0)}c&&ze(e,"set","$attrs")}function Ro(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Pn(l))continue;const c=t[l];let d;a&&$(a,d=Me(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Zn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=B(n),c=s||K;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Fr(a,l,m,c[m],e,!$(c,m))}}return o}function Fr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=$(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&D(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Tt(a),r=c[n]=l.call(null,t),pt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Mt(n))&&(r=!0))}return r}function Do(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!D(e)){const d=m=>{l=!0;const[v,A]=Do(m,t,!0);ne(o,v),A&&s.push(...A)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return q(e)&&r.set(e,At),At;if(L(i))for(let d=0;d<i.length;d++){const m=Me(i[d]);ri(m)&&(o[m]=K)}else if(i)for(const d in i){const m=Me(d);if(ri(m)){const v=i[d],A=o[m]=L(v)||D(v)?{type:v}:ne({},v);if(A){const j=oi(Boolean,A.type),P=oi(String,A.type);A[0]=j>-1,A[1]=P<0||j<P,(j>-1||$(A,"default"))&&s.push(m)}}}const c=[o,s];return q(e)&&r.set(e,c),c}function ri(e){return e[0]!=="$"}function ai(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ii(e,t){return ai(e)===ai(t)}function oi(e,t){return L(t)?t.findIndex(n=>ii(n,e)):D(t)&&ii(t,e)?0:-1}const jo=e=>e[0]==="_"||e==="$stable",ga=e=>L(e)?e.map(Se):[Se(e)],cf=(e,t,n)=>{if(t._n)return t;const r=Pl((...a)=>ga(t(...a)),n);return r._c=!1,r},zo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(jo(a))continue;const i=e[a];if(D(i))t[a]=cf(a,i,r);else if(i!=null){const o=ga(i);t[a]=()=>o}}},$o=(e,t)=>{const n=ga(t);e.slots.default=()=>n},uf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=B(t),Rn(t,"_",n)):zo(t,e.slots={})}else e.slots={},t&&$o(e,t);Rn(e.slots,tr,1)},df=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=K;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ne(a,t),!n&&s===1&&delete a._):(i=!t.$stable,zo(t,a)),o=t}else t&&($o(e,t),o={default:1});if(i)for(const s in a)!jo(s)&&!(s in o)&&delete a[s]};function Lr(e,t,n,r,a=!1){if(L(e)){e.forEach((v,A)=>Lr(v,t&&(L(t)?t[A]:t),n,r,a));return}if(Tn(r)&&!a)return;const i=r.shapeFlag&4?nr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===K?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(ee(c)?(d[c]=null,$(m,c)&&(m[c]=null)):se(c)&&(c.value=null)),D(l))Je(l,s,12,[o,d]);else{const v=ee(l),A=se(l);if(v||A){const j=()=>{if(e.f){const P=v?$(m,l)?m[l]:d[l]:l.value;a?L(P)&&ta(P,i):L(P)?P.includes(i)||P.push(i):v?(d[l]=[i],$(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,$(m,l)&&(m[l]=o)):A&&(l.value=o,e.k&&(d[e.k]=o))};o?(j.id=-1,de(j,n)):j()}}}const de=Fl;function mf(e){return pf(e)}function pf(e,t){const n=Er();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:A=Ae,insertStaticContent:j}=e,P=(f,u,p,g=null,h=null,_=null,E=!1,w=null,k=!!u.dynamicChildren)=>{if(f===u)return;f&&!zt(f,u)&&(g=un(f),Oe(f,h,_,!0),f=null),u.patchFlag===-2&&(k=!1,u.dynamicChildren=null);const{type:b,ref:N,shapeFlag:I}=u;switch(b){case er:T(f,u,p,g);break;case ht:y(f,u,p,g);break;case mr:f==null&&x(u,p,g,E);break;case Ie:ln(f,u,p,g,h,_,E,w,k);break;default:I&1?U(f,u,p,g,h,_,E,w,k):I&6?fn(f,u,p,g,h,_,E,w,k):(I&64||I&128)&&b.process(f,u,p,g,h,_,E,w,k,bt)}N!=null&&h&&Lr(N,f&&f.ref,_,u||f,!u)},T=(f,u,p,g)=>{if(f==null)r(u.el=s(u.children),p,g);else{const h=u.el=f.el;u.children!==f.children&&c(h,u.children)}},y=(f,u,p,g)=>{f==null?r(u.el=l(u.children||""),p,g):u.el=f.el},x=(f,u,p,g)=>{[f.el,f.anchor]=j(f.children,u,p,g,f.el,f.anchor)},F=({el:f,anchor:u},p,g)=>{let h;for(;f&&f!==u;)h=v(f),r(f,p,g),f=h;r(u,p,g)},C=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=v(f),a(f),f=p;a(u)},U=(f,u,p,g,h,_,E,w,k)=>{E=E||u.type==="svg",f==null?ae(u,p,g,h,_,E,w,k):ge(f,u,h,_,E,w,k)},ae=(f,u,p,g,h,_,E,w)=>{let k,b;const{type:N,props:I,shapeFlag:M,transition:R,dirs:z}=f;if(k=f.el=o(f.type,_,I&&I.is,I),M&8?d(k,f.children):M&16&&be(f.children,k,null,g,h,_&&N!=="foreignObject",E,w),z&&at(f,null,g,"created"),ie(k,f,f.scopeId,E,g),I){for(const H in I)H!=="value"&&!Pn(H)&&i(k,H,null,I[H],_,f.children,g,h,Le);"value"in I&&i(k,"value",null,I.value),(b=I.onVnodeBeforeMount)&&Pe(b,g,f)}z&&at(f,null,g,"beforeMount");const W=(!h||h&&!h.pendingBranch)&&R&&!R.persisted;W&&R.beforeEnter(k),r(k,u,p),((b=I&&I.onVnodeMounted)||W||z)&&de(()=>{b&&Pe(b,g,f),W&&R.enter(k),z&&at(f,null,g,"mounted")},h)},ie=(f,u,p,g,h)=>{if(p&&A(f,p),g)for(let _=0;_<g.length;_++)A(f,g[_]);if(h){let _=h.subTree;if(u===_){const E=h.vnode;ie(f,E,E.scopeId,E.slotScopeIds,h.parent)}}},be=(f,u,p,g,h,_,E,w,k=0)=>{for(let b=k;b<f.length;b++){const N=f[b]=w?Xe(f[b]):Se(f[b]);P(null,N,u,p,g,h,_,E,w)}},ge=(f,u,p,g,h,_,E)=>{const w=u.el=f.el;let{patchFlag:k,dynamicChildren:b,dirs:N}=u;k|=f.patchFlag&16;const I=f.props||K,M=u.props||K;let R;p&&it(p,!1),(R=M.onVnodeBeforeUpdate)&&Pe(R,p,u,f),N&&at(u,f,p,"beforeUpdate"),p&&it(p,!0);const z=h&&u.type!=="foreignObject";if(b?Fe(f.dynamicChildren,b,w,p,g,z,_):E||Y(f,u,w,null,p,g,z,_,!1),k>0){if(k&16)Dt(w,u,I,M,p,g,h);else if(k&2&&I.class!==M.class&&i(w,"class",null,M.class,h),k&4&&i(w,"style",I.style,M.style,h),k&8){const W=u.dynamicProps;for(let H=0;H<W.length;H++){const Q=W[H],ye=I[Q],yt=M[Q];(yt!==ye||Q==="value")&&i(w,Q,ye,yt,h,f.children,p,g,Le)}}k&1&&f.children!==u.children&&d(w,u.children)}else!E&&b==null&&Dt(w,u,I,M,p,g,h);((R=M.onVnodeUpdated)||N)&&de(()=>{R&&Pe(R,p,u,f),N&&at(u,f,p,"updated")},g)},Fe=(f,u,p,g,h,_,E)=>{for(let w=0;w<u.length;w++){const k=f[w],b=u[w],N=k.el&&(k.type===Ie||!zt(k,b)||k.shapeFlag&70)?m(k.el):p;P(k,b,N,null,g,h,_,E,!0)}},Dt=(f,u,p,g,h,_,E)=>{if(p!==g){if(p!==K)for(const w in p)!Pn(w)&&!(w in g)&&i(f,w,p[w],null,E,u.children,h,_,Le);for(const w in g){if(Pn(w))continue;const k=g[w],b=p[w];k!==b&&w!=="value"&&i(f,w,b,k,E,u.children,h,_,Le)}"value"in g&&i(f,"value",p.value,g.value)}},ln=(f,u,p,g,h,_,E,w,k)=>{const b=u.el=f?f.el:s(""),N=u.anchor=f?f.anchor:s("");let{patchFlag:I,dynamicChildren:M,slotScopeIds:R}=u;R&&(w=w?w.concat(R):R),f==null?(r(b,p,g),r(N,p,g),be(u.children,p,N,h,_,E,w,k)):I>0&&I&64&&M&&f.dynamicChildren?(Fe(f.dynamicChildren,M,p,h,_,E,w),(u.key!=null||h&&u===h.subTree)&&Bo(f,u,!0)):Y(f,u,p,N,h,_,E,w,k)},fn=(f,u,p,g,h,_,E,w,k)=>{u.slotScopeIds=w,f==null?u.shapeFlag&512?h.ctx.activate(u,p,g,E,k):sr(u,p,g,h,_,E,k):Fa(f,u,k)},sr=(f,u,p,g,h,_,E)=>{const w=f.component=kf(f,g,h);if(Io(f)&&(w.ctx.renderer=bt),Af(w),w.asyncDep){if(h&&h.registerDep(w,le),!f.el){const k=w.subTree=ce(ht);y(null,k,u,p)}return}le(w,f,u,p,h,_,E)},Fa=(f,u,p)=>{const g=u.component=f.component;if(Tl(f,u,p))if(g.asyncDep&&!g.asyncResolved){J(g,u,p);return}else g.next=u,Al(g.update),g.update();else u.el=f.el,g.vnode=u},le=(f,u,p,g,h,_,E)=>{const w=()=>{if(f.isMounted){let{next:N,bu:I,u:M,parent:R,vnode:z}=f,W=N,H;it(f,!1),N?(N.el=z.el,J(f,N,E)):N=z,I&&In(I),(H=N.props&&N.props.onVnodeBeforeUpdate)&&Pe(H,R,N,z),it(f,!0);const Q=ur(f),ye=f.subTree;f.subTree=Q,P(ye,Q,m(ye.el),un(ye),f,h,_),N.el=Q.el,W===null&&Nl(f,Q.el),M&&de(M,h),(H=N.props&&N.props.onVnodeUpdated)&&de(()=>Pe(H,R,N,z),h)}else{let N;const{el:I,props:M}=u,{bm:R,m:z,parent:W}=f,H=Tn(u);if(it(f,!1),R&&In(R),!H&&(N=M&&M.onVnodeBeforeMount)&&Pe(N,W,u),it(f,!0),I&&fr){const Q=()=>{f.subTree=ur(f),fr(I,f.subTree,f,h,null)};H?u.type.__asyncLoader().then(()=>!f.isUnmounted&&Q()):Q()}else{const Q=f.subTree=ur(f);P(null,Q,p,g,f,h,_),u.el=Q.el}if(z&&de(z,h),!H&&(N=M&&M.onVnodeMounted)){const Q=u;de(()=>Pe(N,W,Q),h)}(u.shapeFlag&256||W&&Tn(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&de(f.a,h),f.isMounted=!0,u=p=g=null}},k=f.effect=new oa(w,()=>pa(b),f.scope),b=f.update=()=>k.run();b.id=f.uid,it(f,!0),b()},J=(f,u,p)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,ff(f,u.props,g,p),df(f,u.children,p),Ft(),qa(),Lt()},Y=(f,u,p,g,h,_,E,w,k=!1)=>{const b=f&&f.children,N=f?f.shapeFlag:0,I=u.children,{patchFlag:M,shapeFlag:R}=u;if(M>0){if(M&128){cn(b,I,p,g,h,_,E,w,k);return}else if(M&256){nt(b,I,p,g,h,_,E,w,k);return}}R&8?(N&16&&Le(b,h,_),I!==b&&d(p,I)):N&16?R&16?cn(b,I,p,g,h,_,E,w,k):Le(b,h,_,!0):(N&8&&d(p,""),R&16&&be(I,p,g,h,_,E,w,k))},nt=(f,u,p,g,h,_,E,w,k)=>{f=f||At,u=u||At;const b=f.length,N=u.length,I=Math.min(b,N);let M;for(M=0;M<I;M++){const R=u[M]=k?Xe(u[M]):Se(u[M]);P(f[M],R,p,null,h,_,E,w,k)}b>N?Le(f,h,_,!0,!1,I):be(u,p,g,h,_,E,w,k,I)},cn=(f,u,p,g,h,_,E,w,k)=>{let b=0;const N=u.length;let I=f.length-1,M=N-1;for(;b<=I&&b<=M;){const R=f[b],z=u[b]=k?Xe(u[b]):Se(u[b]);if(zt(R,z))P(R,z,p,null,h,_,E,w,k);else break;b++}for(;b<=I&&b<=M;){const R=f[I],z=u[M]=k?Xe(u[M]):Se(u[M]);if(zt(R,z))P(R,z,p,null,h,_,E,w,k);else break;I--,M--}if(b>I){if(b<=M){const R=M+1,z=R<N?u[R].el:g;for(;b<=M;)P(null,u[b]=k?Xe(u[b]):Se(u[b]),p,z,h,_,E,w,k),b++}}else if(b>M)for(;b<=I;)Oe(f[b],h,_,!0),b++;else{const R=b,z=b,W=new Map;for(b=z;b<=M;b++){const pe=u[b]=k?Xe(u[b]):Se(u[b]);pe.key!=null&&W.set(pe.key,b)}let H,Q=0;const ye=M-z+1;let yt=!1,Da=0;const jt=new Array(ye);for(b=0;b<ye;b++)jt[b]=0;for(b=R;b<=I;b++){const pe=f[b];if(Q>=ye){Oe(pe,h,_,!0);continue}let Ce;if(pe.key!=null)Ce=W.get(pe.key);else for(H=z;H<=M;H++)if(jt[H-z]===0&&zt(pe,u[H])){Ce=H;break}Ce===void 0?Oe(pe,h,_,!0):(jt[Ce-z]=b+1,Ce>=Da?Da=Ce:yt=!0,P(pe,u[Ce],p,null,h,_,E,w,k),Q++)}const ja=yt?hf(jt):At;for(H=ja.length-1,b=ye-1;b>=0;b--){const pe=z+b,Ce=u[pe],za=pe+1<N?u[pe+1].el:g;jt[b]===0?P(null,Ce,p,za,h,_,E,w,k):yt&&(H<0||b!==ja[H]?rt(Ce,p,za,2):H--)}}},rt=(f,u,p,g,h=null)=>{const{el:_,type:E,transition:w,children:k,shapeFlag:b}=f;if(b&6){rt(f.component.subTree,u,p,g);return}if(b&128){f.suspense.move(u,p,g);return}if(b&64){E.move(f,u,p,bt);return}if(E===Ie){r(_,u,p);for(let I=0;I<k.length;I++)rt(k[I],u,p,g);r(f.anchor,u,p);return}if(E===mr){F(f,u,p);return}if(g!==2&&b&1&&w)if(g===0)w.beforeEnter(_),r(_,u,p),de(()=>w.enter(_),h);else{const{leave:I,delayLeave:M,afterLeave:R}=w,z=()=>r(_,u,p),W=()=>{I(_,()=>{z(),R&&R()})};M?M(_,z,W):W()}else r(_,u,p)},Oe=(f,u,p,g=!1,h=!1)=>{const{type:_,props:E,ref:w,children:k,dynamicChildren:b,shapeFlag:N,patchFlag:I,dirs:M}=f;if(w!=null&&Lr(w,null,p,f,!0),N&256){u.ctx.deactivate(f);return}const R=N&1&&M,z=!Tn(f);let W;if(z&&(W=E&&E.onVnodeBeforeUnmount)&&Pe(W,u,f),N&6)Os(f.component,p,g);else{if(N&128){f.suspense.unmount(p,g);return}R&&at(f,null,u,"beforeUnmount"),N&64?f.type.remove(f,u,p,h,bt,g):b&&(_!==Ie||I>0&&I&64)?Le(b,u,p,!1,!0):(_===Ie&&I&384||!h&&N&16)&&Le(k,u,p),g&&La(f)}(z&&(W=E&&E.onVnodeUnmounted)||R)&&de(()=>{W&&Pe(W,u,f),R&&at(f,null,u,"unmounted")},p)},La=f=>{const{type:u,el:p,anchor:g,transition:h}=f;if(u===Ie){Es(p,g);return}if(u===mr){C(f);return}const _=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:E,delayLeave:w}=h,k=()=>E(p,_);w?w(f.el,_,k):k()}else _()},Es=(f,u)=>{let p;for(;f!==u;)p=v(f),a(f),f=p;a(u)},Os=(f,u,p)=>{const{bum:g,scope:h,update:_,subTree:E,um:w}=f;g&&In(g),h.stop(),_&&(_.active=!1,Oe(E,f,u,p)),w&&de(w,u),de(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Le=(f,u,p,g=!1,h=!1,_=0)=>{for(let E=_;E<f.length;E++)Oe(f[E],u,p,g,h)},un=f=>f.shapeFlag&6?un(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Ra=(f,u,p)=>{f==null?u._vnode&&Oe(u._vnode,null,null,!0):P(u._vnode||null,f,u,null,null,null,p),qa(),ko(),u._vnode=f},bt={p:P,um:Oe,m:rt,r:La,mt:sr,mc:be,pc:Y,pbc:Fe,n:un,o:e};let lr,fr;return t&&([lr,fr]=t(bt)),{render:Ra,hydrate:lr,createApp:of(Ra,lr)}}function it({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Bo(e,t,n=!1){const r=e.children,a=t.children;if(L(r)&&L(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Xe(a[i]),s.el=o.el),n||Bo(o,s)),s.type===er&&(s.el=o.el)}}function hf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const gf=e=>e.__isTeleport,Ie=Symbol.for("v-fgt"),er=Symbol.for("v-txt"),ht=Symbol.for("v-cmt"),mr=Symbol.for("v-stc"),Yt=[];let _e=null;function Ve(e=!1){Yt.push(_e=e?null:[])}function vf(){Yt.pop(),_e=Yt[Yt.length-1]||null}let Gt=1;function si(e){Gt+=e}function Uo(e){return e.dynamicChildren=Gt>0?_e||At:null,vf(),Gt>0&&_e&&_e.push(e),e}function ot(e,t,n,r,a,i){return Uo(Z(e,t,n,r,a,i,!0))}function bf(e,t,n,r,a){return Uo(ce(e,t,n,r,a,!0))}function Rr(e){return e?e.__v_isVNode===!0:!1}function zt(e,t){return e.type===t.type&&e.key===t.key}const tr="__vInternal",Ho=({key:e})=>e??null,Mn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ee(e)||se(e)||D(e)?{i:ve,r:e,k:t,f:!!n}:e:null);function Z(e,t=null,n=null,r=0,a=null,i=e===Ie?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ho(t),ref:t&&Mn(t),scopeId:Oo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:ve};return s?(va(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ee(n)?8:16),Gt>0&&!o&&_e&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&_e.push(l),l}const ce=yf;function yf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===ql)&&(e=ht),Rr(e)){const s=St(e,t,!0);return n&&va(s,n),Gt>0&&!i&&_e&&(s.shapeFlag&6?_e[_e.indexOf(e)]=s:_e.push(s)),s.patchFlag|=-2,s}if(If(e)&&(e=e.__vccOpts),t){t=xf(t);let{class:s,style:l}=t;s&&!ee(s)&&(t.class=qn(s)),q(l)&&(go(l)&&!L(l)&&(l=ne({},l)),t.style=aa(l))}const o=ee(e)?1:Ml(e)?128:gf(e)?64:q(e)?4:D(e)?2:0;return Z(e,t,n,r,a,o,i,!0)}function xf(e){return e?go(e)||tr in e?ne({},e):e:null}function St(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Dr(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Ho(s),ref:t&&t.ref?n&&a?L(a)?a.concat(Mn(t)):[a,Mn(t)]:Mn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ie?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&St(e.ssContent),ssFallback:e.ssFallback&&St(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Yo(e=" ",t=0){return ce(er,null,e,t)}function bn(e="",t=!1){return t?(Ve(),bf(ht,null,e)):ce(ht,null,e)}function Se(e){return e==null||typeof e=="boolean"?ce(ht):L(e)?ce(Ie,null,e.slice()):typeof e=="object"?Xe(e):ce(er,null,String(e))}function Xe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:St(e)}function va(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(L(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),va(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(tr in t)?t._ctx=ve:a===3&&ve&&(ve.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else D(t)?(t={default:t,_ctx:ve},n=32):(t=String(t),r&64?(n=16,t=[Yo(t)]):n=8);e.children=t,e.shapeFlag|=n}function Dr(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=qn([t.class,r.class]));else if(a==="style")t.style=aa([t.style,r.style]);else if(Wn(a)){const i=t[a],o=r[a];o&&i!==o&&!(L(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Pe(e,t,n,r=null){Ee(e,t,7,[n,r])}const wf=Lo();let _f=0;function kf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||wf,i={uid:_f++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new zs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Do(r,a),emitsOptions:Eo(r,a),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Cl.bind(null,i),e.ce&&e.ce(i),i}let re=null,ba,xt,li="__VUE_INSTANCE_SETTERS__";(xt=Er()[li])||(xt=Er()[li]=[]),xt.push(e=>re=e),ba=e=>{xt.length>1?xt.forEach(t=>t(e)):xt[0](e)};const Tt=e=>{ba(e),e.scope.on()},pt=()=>{re&&re.scope.off(),ba(null)};function Wo(e){return e.vnode.shapeFlag&4}let Zt=!1;function Af(e,t=!1){Zt=t;const{props:n,children:r}=e.vnode,a=Wo(e);lf(e,n,a,t),uf(e,r);const i=a?Ef(e,t):void 0;return Zt=!1,i}function Ef(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=vo(new Proxy(e.ctx,Zl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Cf(e):null;Tt(e),Ft();const i=Je(r,e,0,[e.props,a]);if(Lt(),pt(),Qi(i)){if(i.then(pt,pt),t)return i.then(o=>{fi(e,o,t)}).catch(o=>{Gn(o,e,0)});e.asyncDep=i}else fi(e,i,t)}else Ko(e,t)}function fi(e,t,n){D(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:q(t)&&(e.setupState=xo(t)),Ko(e,n)}let ci;function Ko(e,t,n){const r=e.type;if(!e.render){if(!t&&ci&&!r.render){const a=r.template||ha(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ne(ne({isCustomElement:i,delimiters:s},o),l);r.render=ci(a,c)}}e.render=r.render||Ae}Tt(e),Ft(),Ql(e),Lt(),pt()}function Of(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return me(e,"get","$attrs"),t[n]}}))}function Cf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Of(e)},slots:e.slots,emit:e.emit,expose:t}}function nr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(xo(vo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ht)return Ht[n](e)},has(t,n){return n in t||n in Ht}}))}function Pf(e,t=!0){return D(e)?e.displayName||e.name:e.name||t&&e.__name}function If(e){return D(e)&&"__vccOpts"in e}const st=(e,t)=>xl(e,t,Zt);function Sf(e,t,n){const r=arguments.length;return r===2?q(t)&&!L(t)?Rr(t)?ce(e,null,[t]):ce(e,t):ce(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Rr(n)&&(n=[n]),ce(e,t,n))}const Tf=Symbol.for("v-scx"),Nf=()=>Nn(Tf),Mf="3.3.4",Ff="http://www.w3.org/2000/svg",ft=typeof document<"u"?document:null,ui=ft&&ft.createElement("template"),Lf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?ft.createElementNS(Ff,e):ft.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ft.createTextNode(e),createComment:e=>ft.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ft.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ui.innerHTML=r?`<svg>${e}</svg>`:e;const s=ui.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Rf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Df(e,t,n){const r=e.style,a=ee(n);if(n&&!a){if(t&&!ee(t))for(const i in t)n[i]==null&&jr(r,i,"");for(const i in n)jr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const di=/\s*!important$/;function jr(e,t,n){if(L(n))n.forEach(r=>jr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=jf(e,t);di.test(n)?e.setProperty(Mt(r),n.replace(di,""),"important"):e[r]=n}}const mi=["Webkit","Moz","ms"],pr={};function jf(e,t){const n=pr[t];if(n)return n;let r=Me(t);if(r!=="filter"&&r in e)return pr[t]=r;r=Xn(r);for(let a=0;a<mi.length;a++){const i=mi[a]+r;if(i in e)return pr[t]=i}return t}const pi="http://www.w3.org/1999/xlink";function zf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(pi,t.slice(6,t.length)):e.setAttributeNS(pi,t,n);else{const i=js(t);n==null||i&&!no(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function $f(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=no(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function wt(e,t,n,r){e.addEventListener(t,n,r)}function Bf(e,t,n,r){e.removeEventListener(t,n,r)}function Uf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Hf(t);if(r){const c=i[t]=Kf(r,a);wt(e,s,c,l)}else o&&(Bf(e,s,o,l),i[t]=void 0)}}const hi=/(?:Once|Passive|Capture)$/;function Hf(e){let t;if(hi.test(e)){t={};let r;for(;r=e.match(hi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Mt(e.slice(2)),t]}let hr=0;const Yf=Promise.resolve(),Wf=()=>hr||(Yf.then(()=>hr=0),hr=Date.now());function Kf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ee(Vf(r,n.value),t,5,[r])};return n.value=e,n.attached=Wf(),n}function Vf(e,t){if(L(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const gi=/^on[a-z]/,Xf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Rf(e,r,a):t==="style"?Df(e,n,r):Wn(t)?ea(t)||Uf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):qf(e,t,r,a))?$f(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),zf(e,t,r,a))};function qf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&gi.test(t)&&D(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||gi.test(t)&&ee(n)?!1:t in e}const vi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return L(t)?n=>In(t,n):t};function Jf(e){e.target.composing=!0}function bi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const yi={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=vi(a);const i=r||a.props&&a.props.type==="number";wt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=Ar(s)),e._assign(s)}),n&&wt(e,"change",()=>{e.value=e.value.trim()}),t||(wt(e,"compositionstart",Jf),wt(e,"compositionend",bi),wt(e,"change",bi))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=vi(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&Ar(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},Gf=ne({patchProp:Xf},Lf);let xi;function Zf(){return xi||(xi=mf(Gf))}const Qf=(...e)=>{const t=Zf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=ec(r);if(!a)return;const i=t._component;!D(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function ec(e){return ee(e)?document.querySelector(e):e}const tc=(e,t)=>t.some(n=>e instanceof n);let wi,_i;function nc(){return wi||(wi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rc(){return _i||(_i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vo=new WeakMap,zr=new WeakMap,Xo=new WeakMap,gr=new WeakMap,ya=new WeakMap;function ac(e){const t=new Promise((n,r)=>{const a=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Ge(e.result)),a()},o=()=>{r(e.error),a()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Vo.set(n,e)}).catch(()=>{}),ya.set(t,e),t}function ic(e){if(zr.has(e))return;const t=new Promise((n,r)=>{const a=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),a()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});zr.set(e,t)}let $r={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return zr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Xo.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ge(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function oc(e){$r=e($r)}function sc(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(vr(this),t,...n);return Xo.set(r,t.sort?t.sort():[t]),Ge(r)}:rc().includes(e)?function(...t){return e.apply(vr(this),t),Ge(Vo.get(this))}:function(...t){return Ge(e.apply(vr(this),t))}}function lc(e){return typeof e=="function"?sc(e):(e instanceof IDBTransaction&&ic(e),tc(e,nc())?new Proxy(e,$r):e)}function Ge(e){if(e instanceof IDBRequest)return ac(e);if(gr.has(e))return gr.get(e);const t=lc(e);return t!==e&&(gr.set(e,t),ya.set(t,e)),t}const vr=e=>ya.get(e);function fc(e,t,{blocked:n,upgrade:r,blocking:a,terminated:i}={}){const o=indexedDB.open(e,t),s=Ge(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ge(o.result),l.oldVersion,l.newVersion,Ge(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),s.then(l=>{i&&l.addEventListener("close",()=>i()),a&&l.addEventListener("versionchange",c=>a(c.oldVersion,c.newVersion,c))}).catch(()=>{}),s}const cc=["get","getKey","getAll","getAllKeys","count"],uc=["put","add","delete","clear"],br=new Map;function ki(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(br.get(t))return br.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,a=uc.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(a||cc.includes(n)))return;const i=async function(o,...s){const l=this.transaction(o,a?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(s.shift())),(await Promise.all([c[n](...s),a&&l.done]))[0]};return br.set(t,i),i}oc(e=>({...e,get:(t,n,r)=>ki(t,n)||e.get(t,n,r),has:(t,n)=>!!ki(t,n)||e.has(t,n)}));function xa(){return new Promise((e,t)=>{const n=fc("noteDB",1,{upgrade(r){r.createObjectStore("note",{keyPath:"id",autoIncrement:!0}).createIndex("strengthIndex","strength")}});e(n)})}async function dc(e,t){new Date().getTime();const r=await xa();r.add("note",{title:e,description:t}),await r.transaction("note").store.openCursor()}async function Ai(){return await(await xa()).getAll("note")}async function mc(e,t,n){await(await xa()).put("note",{id:e,title:t,description:n})}const pc={class:"h-screen flex flex-col w-full dark:bg-zinc-900"},hc={class:"flex justify-center"},gc={class:"container shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] hover:shadow-[0_7px_15px_1px_rgba(0,0,0,0.5)] p-2 rounded-md dark:bg-zinc-900 mb-2"},vc={key:0,class:""},bc={class:""},yc={class:"grid xl:grid-cols-9 xl:gap-4 md:grid-cols-5 md:gap-3 ph:grid-cols-2 ph:gap-2 dark:bg-zinc-900"},xc=["onClick"],wc={class:"font-normal text-center dark:bg-zinc-900"},_c={key:0,class:"fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50 overscroll-none"},kc={class:"relative wx-auto max-w-2xl w-96 max-h-full my-20"},Ac={class:"bg-white dark:bg-zinc-900 w-full rounded shadow-2xl flex flex-col pt-0 pb-4 px-4"},Ec={class:"place-self-end"},Oc=["value"],Cc=["value"],Pc={class:"items-baseline place-self-end"},Ic={key:0,class:"{ buttonSave }"},Sc={class:"rounded-full hover:bg-gray-100 p-1 w-[30px] m-3 mb-5 h-30px"},Tc={key:1,class:"absolute z-40 inset-0 opacity-25 bg-black overscroll-none"},Nc={__name:"App",setup(e){const t=Re(""),n=Re(""),r=Re([]),a=Re(!1),i=Re([]),o=Re([]),s=Re(!1),l=Re(!1),c=Re(!1),d=()=>{r.value[1]!=i.value[1]||r.value[2]!=i.value[2]?(setTimeout(()=>{l.value=!0},150),c.value=!0):(l.value=!1,c.value=!1)},m=P=>{const T=o.value.length;for(let y=0;y<T;y++)if(o.value[y][0].id===P){r.value="";const F=o.value[y][0].title,C=o.value[y][0].description;r.value=[P,F,C],i.value=[P,F,C],a.value=!0}};async function v(){o.value=[];const P=[await Ai()],T=P[0].length;for(let y=0;T>y;y++){const x=P[0][y].title,F=P[0][y].description,C=P[0][y].id;o.value.push([{title:x,description:F,id:C}])}}async function A(P){const T=t.value,y=n.value;await dc(T,y);const x=[await Ai()],F=x[0].length-1,C=x[0][F].id;o.value.push([{title:T,description:y,id:C}]),t.value="",n.value="",s.value=!1}const j=()=>{const P=r.value[0],T=r.value[1],y=r.value[2];mc(P,T,y),v(),a.value=!1};return To(v()),(P,T)=>{const y=Xl("font-awesome-icon");return Ve(),ot("section",pc,[Z("div",hc,[Z("div",gc,[Ga(Z("input",{onClick:T[0]||(T[0]=x=>s.value=!0),id:"title",type:"text","onUpdate:modelValue":T[1]||(T[1]=x=>t.value=x),placeholder:"Título",class:"break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900"},null,512),[[yi,t.value]]),s.value?(Ve(),ot("div",vc,[Ga(Z("input",{id:"description",type:"text","onUpdate:modelValue":T[2]||(T[2]=x=>n.value=x),placeholder:"Escreva uma nota",class:"break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900"},null,512),[[yi,n.value]]),Z("button",{id:"btnsave",onClick:T[3]||(T[3]=x=>A(P.index)),class:"bg-blue-500 hover:bg-blue-700 text-white-100 font-bold py-2 px-4 rounded"},"Salvar")])):bn("",!0)])]),Z("div",bc,[Z("div",yc,[(Ve(!0),ot(Ie,null,Gl(o.value,x=>(Ve(),ot("div",{class:"container shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] p-2 rounded-md mt-2 content-start break-words font-semibold hover:shadow-[0_7px_15px_1px_rgba(0,0,0,0.5)] dark:bg-zinc-900",key:x,onClick:F=>(m(x[0].id),s.value=!1)},[Yo(Ba(x[0].title)+" ",1),Z("p",wc,Ba(x[0].description),1)],8,xc))),128))])]),Z("div",null,[a.value?(Ve(),ot("div",_c,[Z("div",kc,[Z("div",Ac,[Z("div",Ec,[Z("button",{class:"rounded-full hover:bg-gray-100 p-1 w-[30px] h-30px",onClick:T[4]||(T[4]=x=>a.value=!1)},[ce(y,{icon:"fa-solid fa-xmark",style:{color:"#707070"}})])]),Z("input",Dr(d(),{value:r.value[1],onInput:T[5]||(T[5]=x=>r.value[1]=x.target.value),class:"text-2xl font-bold focus:outline-none dark:bg-zinc-900"}),null,16,Oc),Z("input",Dr(d(),{value:r.value[2],onInput:T[6]||(T[6]=x=>r.value[2]=x.target.value),class:"overflow-auto focus:outline-none dark:bg-zinc-900"}),null,16,Cc),Z("div",Pc,[l.value?(Ve(),ot("span",Ic,[Z("button",{id:"buttonSave",class:"rounded-full hover:bg-gray-100 text-gray px-2 my-0 py-0 w-12/12 mx-3",onClick:j},"Save")])):bn("",!0),Z("div",{class:qn({shake:c.value})},[Z("span",Sc,[ce(y,{icon:"fa-solid fa-trash",style:{color:"#707070"}})])],2)])])])])):bn("",!0),a.value?(Ve(),ot("div",Tc)):bn("",!0)])])}}};function Ei(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ei(Object(n),!0).forEach(function(r){te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ei(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Bn(e){"@babel/helpers - typeof";return Bn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bn(e)}function Mc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Oi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Fc(e,t,n){return t&&Oi(e.prototype,t),n&&Oi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wa(e,t){return Rc(e)||jc(e,t)||qo(e,t)||$c()}function an(e){return Lc(e)||Dc(e)||qo(e)||zc()}function Lc(e){if(Array.isArray(e))return Br(e)}function Rc(e){if(Array.isArray(e))return e}function Dc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function jc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function qo(e,t){if(e){if(typeof e=="string")return Br(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Br(e,t)}}function Br(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function zc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $c(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ci=function(){},_a={},Jo={},Go=null,Zo={mark:Ci,measure:Ci};try{typeof window<"u"&&(_a=window),typeof document<"u"&&(Jo=document),typeof MutationObserver<"u"&&(Go=MutationObserver),typeof performance<"u"&&(Zo=performance)}catch{}var Bc=_a.navigator||{},Pi=Bc.userAgent,Ii=Pi===void 0?"":Pi,Qe=_a,X=Jo,Si=Go,yn=Zo;Qe.document;var Ye=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",Qo=~Ii.indexOf("MSIE")||~Ii.indexOf("Trident/"),xn,wn,_n,kn,An,$e="___FONT_AWESOME___",Ur=16,es="fa",ts="svg-inline--fa",gt="data-fa-i2svg",Hr="data-fa-pseudo-element",Uc="data-fa-pseudo-element-pending",ka="data-prefix",Aa="data-icon",Ti="fontawesome-i2svg",Hc="async",Yc=["HTML","HEAD","STYLE","SCRIPT"],ns=function(){try{return!0}catch{return!1}}(),V="classic",G="sharp",Ea=[V,G];function on(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[V]}})}var Qt=on((xn={},te(xn,V,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),te(xn,G,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),xn)),en=on((wn={},te(wn,V,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),te(wn,G,{solid:"fass",regular:"fasr",light:"fasl"}),wn)),tn=on((_n={},te(_n,V,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),te(_n,G,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),_n)),Wc=on((kn={},te(kn,V,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),te(kn,G,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),kn)),Kc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,rs="fa-layers-text",Vc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Xc=on((An={},te(An,V,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),te(An,G,{900:"fass",400:"fasr",300:"fasl"}),An)),as=[1,2,3,4,5,6,7,8,9,10],qc=as.concat([11,12,13,14,15,16,17,18,19,20]),Jc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ut={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},nn=new Set;Object.keys(en[V]).map(nn.add.bind(nn));Object.keys(en[G]).map(nn.add.bind(nn));var Gc=[].concat(Ea,an(nn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ut.GROUP,ut.SWAP_OPACITY,ut.PRIMARY,ut.SECONDARY]).concat(as.map(function(e){return"".concat(e,"x")})).concat(qc.map(function(e){return"w-".concat(e)})),Wt=Qe.FontAwesomeConfig||{};function Zc(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Qc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var eu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];eu.forEach(function(e){var t=wa(e,2),n=t[0],r=t[1],a=Qc(Zc(n));a!=null&&(Wt[r]=a)})}var is={styleDefault:"solid",familyDefault:"classic",cssPrefix:es,replacementClass:ts,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Wt.familyPrefix&&(Wt.cssPrefix=Wt.familyPrefix);var Nt=O(O({},is),Wt);Nt.autoReplaceSvg||(Nt.observeMutations=!1);var S={};Object.keys(is).forEach(function(e){Object.defineProperty(S,e,{enumerable:!0,set:function(n){Nt[e]=n,Kt.forEach(function(r){return r(S)})},get:function(){return Nt[e]}})});Object.defineProperty(S,"familyPrefix",{enumerable:!0,set:function(t){Nt.cssPrefix=t,Kt.forEach(function(n){return n(S)})},get:function(){return Nt.cssPrefix}});Qe.FontAwesomeConfig=S;var Kt=[];function tu(e){return Kt.push(e),function(){Kt.splice(Kt.indexOf(e),1)}}var Ke=Ur,Ne={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function nu(e){if(!(!e||!Ye)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var ru="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function rn(){for(var e=12,t="";e-- >0;)t+=ru[Math.random()*62|0];return t}function Rt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Oa(e){return e.classList?Rt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function os(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function au(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(os(e[n]),'" ')},"").trim()}function rr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ca(e){return e.size!==Ne.size||e.x!==Ne.x||e.y!==Ne.y||e.rotate!==Ne.rotate||e.flipX||e.flipY}function iu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function ou(e){var t=e.transform,n=e.width,r=n===void 0?Ur:n,a=e.height,i=a===void 0?Ur:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Qo?l+="translate(".concat(t.x/Ke-r/2,"em, ").concat(t.y/Ke-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ke,"em), calc(-50% + ").concat(t.y/Ke,"em)) "):l+="translate(".concat(t.x/Ke,"em, ").concat(t.y/Ke,"em) "),l+="scale(".concat(t.size/Ke*(t.flipX?-1:1),", ").concat(t.size/Ke*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var su=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ss(){var e=es,t=ts,n=S.cssPrefix,r=S.replacementClass,a=su;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Ni=!1;function yr(){S.autoAddCss&&!Ni&&(nu(ss()),Ni=!0)}var lu={mixout:function(){return{dom:{css:ss,insertCss:yr}}},hooks:function(){return{beforeDOMElementCreation:function(){yr()},beforeI2svg:function(){yr()}}}},Be=Qe||{};Be[$e]||(Be[$e]={});Be[$e].styles||(Be[$e].styles={});Be[$e].hooks||(Be[$e].hooks={});Be[$e].shims||(Be[$e].shims=[]);var ke=Be[$e],ls=[],fu=function e(){X.removeEventListener("DOMContentLoaded",e),Un=1,ls.map(function(t){return t()})},Un=!1;Ye&&(Un=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),Un||X.addEventListener("DOMContentLoaded",fu));function cu(e){Ye&&(Un?setTimeout(e,0):ls.push(e))}function sn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?os(e):"<".concat(t," ").concat(au(r),">").concat(i.map(sn).join(""),"</").concat(t,">")}function Mi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var uu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},xr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?uu(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function du(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Yr(e){var t=du(e);return t.length===1?t[0].toString(16):null}function mu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Fi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Wr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Fi(t);typeof ke.hooks.addPack=="function"&&!a?ke.hooks.addPack(e,Fi(t)):ke.styles[e]=O(O({},ke.styles[e]||{}),i),e==="fas"&&Wr("fa",t)}var En,On,Cn,_t=ke.styles,pu=ke.shims,hu=(En={},te(En,V,Object.values(tn[V])),te(En,G,Object.values(tn[G])),En),Pa=null,fs={},cs={},us={},ds={},ms={},gu=(On={},te(On,V,Object.keys(Qt[V])),te(On,G,Object.keys(Qt[G])),On);function vu(e){return~Gc.indexOf(e)}function bu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!vu(a)?a:null}var ps=function(){var t=function(i){return xr(_t,function(o,s,l){return o[l]=xr(s,i,{}),o},{})};fs=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),cs=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),ms=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in _t||S.autoFetchSvg,r=xr(pu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});us=r.names,ds=r.unicodes,Pa=ar(S.styleDefault,{family:S.familyDefault})};tu(function(e){Pa=ar(e.styleDefault,{family:S.familyDefault})});ps();function Ia(e,t){return(fs[e]||{})[t]}function yu(e,t){return(cs[e]||{})[t]}function dt(e,t){return(ms[e]||{})[t]}function hs(e){return us[e]||{prefix:null,iconName:null}}function xu(e){var t=ds[e],n=Ia("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function et(){return Pa}var Sa=function(){return{prefix:null,iconName:null,rest:[]}};function ar(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?V:n,a=Qt[r][e],i=en[r][e]||en[r][a],o=e in ke.styles?e:null;return i||o||null}var Li=(Cn={},te(Cn,V,Object.keys(tn[V])),te(Cn,G,Object.keys(tn[G])),Cn);function ir(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},te(t,V,"".concat(S.cssPrefix,"-").concat(V)),te(t,G,"".concat(S.cssPrefix,"-").concat(G)),t),o=null,s=V;(e.includes(i[V])||e.some(function(c){return Li[V].includes(c)}))&&(s=V),(e.includes(i[G])||e.some(function(c){return Li[G].includes(c)}))&&(s=G);var l=e.reduce(function(c,d){var m=bu(S.cssPrefix,d);if(_t[d]?(d=hu[s].includes(d)?Wc[s][d]:d,o=d,c.prefix=d):gu[s].indexOf(d)>-1?(o=d,c.prefix=ar(d,{family:s})):m?c.iconName=m:d!==S.replacementClass&&d!==i[V]&&d!==i[G]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=o==="fa"?hs(c.iconName):{},A=dt(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||A||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!_t.far&&_t.fas&&!S.autoFetchSvg&&(c.prefix="fas")}return c},Sa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===G&&(_t.fass||S.autoFetchSvg)&&(l.prefix="fass",l.iconName=dt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=et()||"fas"),l}var wu=function(){function e(){Mc(this,e),this.definitions={}}return Fc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),Wr(s,o[s]);var l=tn[V][s];l&&Wr(l,o[s]),ps()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),Ri=[],kt={},Pt={},_u=Object.keys(Pt);function ku(e,t){var n=t.mixoutsTo;return Ri=e,kt={},Object.keys(Pt).forEach(function(r){_u.indexOf(r)===-1&&delete Pt[r]}),Ri.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Bn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){kt[o]||(kt[o]=[]),kt[o].push(i[o])})}r.provides&&r.provides(Pt)}),n}function Kr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=kt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function vt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=kt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ue(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Pt[e]?Pt[e].apply(null,t):void 0}function Vr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||et();if(t)return t=dt(n,t)||t,Mi(gs.definitions,n,t)||Mi(ke.styles,n,t)}var gs=new wu,Au=function(){S.autoReplaceSvg=!1,S.observeMutations=!1,vt("noAuto")},Eu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ye?(vt("beforeI2svg",t),Ue("pseudoElements2svg",t),Ue("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;S.autoReplaceSvg===!1&&(S.autoReplaceSvg=!0),S.observeMutations=!0,cu(function(){Cu({autoReplaceSvgRoot:n}),vt("watch",t)})}},Ou={icon:function(t){if(t===null)return null;if(Bn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:dt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ar(t[0]);return{prefix:r,iconName:dt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(S.cssPrefix,"-"))>-1||t.match(Kc))){var a=ir(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||et(),iconName:dt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=et();return{prefix:i,iconName:dt(i,t)||t}}}},he={noAuto:Au,config:S,dom:Eu,parse:Ou,library:gs,findIconDefinition:Vr,toHtml:sn},Cu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(ke.styles).length>0||S.autoFetchSvg)&&Ye&&S.autoReplaceSvg&&he.dom.i2svg({node:r})};function or(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return sn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ye){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Pu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ca(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=rr(O(O({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Iu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(S.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function Ta(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,A=v===void 0?!1:v,j=r.found?r:n,P=j.width,T=j.height,y=a==="fak",x=[S.replacementClass,i?"".concat(S.cssPrefix,"-").concat(i):""].filter(function(ge){return m.classes.indexOf(ge)===-1}).filter(function(ge){return ge!==""||!!ge}).concat(m.classes).join(" "),F={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:x,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(P," ").concat(T)})},C=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(P/T*16*.0625,"em")}:{};A&&(F.attributes[gt]=""),l&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(d||rn())},children:[l]}),delete F.attributes.title);var U=O(O({},F),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:O(O({},C),m.styles)}),ae=r.found&&n.found?Ue("generateAbstractMask",U)||{children:[],attributes:{}}:Ue("generateAbstractIcon",U)||{children:[],attributes:{}},ie=ae.children,be=ae.attributes;return U.children=ie,U.attributes=be,s?Iu(U):Pu(U)}function Di(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[gt]="");var d=O({},o.styles);Ca(a)&&(d.transform=ou({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=rr(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Su(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=rr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var wr=ke.styles;function Xr(e){var t=e[0],n=e[1],r=e.slice(4),a=wa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(S.cssPrefix,"-").concat(ut.GROUP)},children:[{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(ut.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(ut.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Tu={found:!1,width:512,height:512};function Nu(e,t){!ns&&!S.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function qr(e,t){var n=t;return t==="fa"&&S.styleDefault!==null&&(t=et()),new Promise(function(r,a){if(Ue("missingIconAbstract"),n==="fa"){var i=hs(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&wr[t]&&wr[t][e]){var o=wr[t][e];return r(Xr(o))}Nu(e,t),r(O(O({},Tu),{},{icon:S.showMissingIcons&&e?Ue("missingIconAbstract")||{}:{}}))})}var ji=function(){},Jr=S.measurePerformance&&yn&&yn.mark&&yn.measure?yn:{mark:ji,measure:ji},Ut='FA "6.4.0"',Mu=function(t){return Jr.mark("".concat(Ut," ").concat(t," begins")),function(){return vs(t)}},vs=function(t){Jr.mark("".concat(Ut," ").concat(t," ends")),Jr.measure("".concat(Ut," ").concat(t),"".concat(Ut," ").concat(t," begins"),"".concat(Ut," ").concat(t," ends"))},Na={begin:Mu,end:vs},Fn=function(){};function zi(e){var t=e.getAttribute?e.getAttribute(gt):null;return typeof t=="string"}function Fu(e){var t=e.getAttribute?e.getAttribute(ka):null,n=e.getAttribute?e.getAttribute(Aa):null;return t&&n}function Lu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(S.replacementClass)}function Ru(){if(S.autoReplaceSvg===!0)return Ln.replace;var e=Ln[S.autoReplaceSvg];return e||Ln.replace}function Du(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function ju(e){return X.createElement(e)}function bs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Du:ju:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(bs(o,{ceFn:r}))}),a}function zu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Ln={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(bs(a),n)}),n.getAttribute(gt)===null&&S.keepOriginalSource){var r=X.createComment(zu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Oa(n).indexOf(S.replacementClass))return Ln.replace(t);var a=new RegExp("".concat(S.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===S.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return sn(s)}).join(`
`);n.setAttribute(gt,""),n.innerHTML=o}};function $i(e){e()}function ys(e,t){var n=typeof t=="function"?t:Fn;if(e.length===0)n();else{var r=$i;S.mutateApproach===Hc&&(r=Qe.requestAnimationFrame||$i),r(function(){var a=Ru(),i=Na.begin("mutate");e.map(a),i(),n()})}}var Ma=!1;function xs(){Ma=!0}function Gr(){Ma=!1}var Hn=null;function Bi(e){if(Si&&S.observeMutations){var t=e.treeCallback,n=t===void 0?Fn:t,r=e.nodeCallback,a=r===void 0?Fn:r,i=e.pseudoElementsCallback,o=i===void 0?Fn:i,s=e.observeMutationsRoot,l=s===void 0?X:s;Hn=new Si(function(c){if(!Ma){var d=et();Rt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!zi(m.addedNodes[0])&&(S.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&S.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&zi(m.target)&&~Jc.indexOf(m.attributeName))if(m.attributeName==="class"&&Fu(m.target)){var v=ir(Oa(m.target)),A=v.prefix,j=v.iconName;m.target.setAttribute(ka,A||d),j&&m.target.setAttribute(Aa,j)}else Lu(m.target)&&a(m.target)})}}),Ye&&Hn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function $u(){Hn&&Hn.disconnect()}function Bu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Uu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=ir(Oa(e));return a.prefix||(a.prefix=et()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=yu(a.prefix,e.innerText)||Ia(a.prefix,Yr(e.innerText))),!a.iconName&&S.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Hu(e){var t=Rt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return S.autoA11y&&(n?t["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(r||rn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Yu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ne,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ui(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Uu(e),r=n.iconName,a=n.prefix,i=n.rest,o=Hu(e),s=Kr("parseNodeAttributes",{},e),l=t.styleParser?Bu(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ne,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Wu=ke.styles;function ws(e){var t=S.autoReplaceSvg==="nest"?Ui(e,{styleParser:!1}):Ui(e);return~t.extra.classes.indexOf(rs)?Ue("generateLayersText",e,t):Ue("generateSvgReplacementMutation",e,t)}var tt=new Set;Ea.map(function(e){tt.add("fa-".concat(e))});Object.keys(Qt[V]).map(tt.add.bind(tt));Object.keys(Qt[G]).map(tt.add.bind(tt));tt=an(tt);function Hi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ye)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(Ti,"-").concat(m))},a=function(m){return n.remove("".concat(Ti,"-").concat(m))},i=S.autoFetchSvg?tt:Ea.map(function(d){return"fa-".concat(d)}).concat(Object.keys(Wu));i.includes("fa")||i.push("fa");var o=[".".concat(rs,":not([").concat(gt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(gt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Rt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Na.begin("onTree"),c=s.reduce(function(d,m){try{var v=ws(m);v&&d.push(v)}catch(A){ns||A.name==="MissingIcon"&&console.error(A)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){ys(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function Ku(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ws(e).then(function(n){n&&ys([n],t)})}function Vu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Vr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Vr(a||{})),e(r,O(O({},n),{},{mask:a}))}}var Xu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ne:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,A=n.titleId,j=A===void 0?null:A,P=n.classes,T=P===void 0?[]:P,y=n.attributes,x=y===void 0?{}:y,F=n.styles,C=F===void 0?{}:F;if(t){var U=t.prefix,ae=t.iconName,ie=t.icon;return or(O({type:"icon"},t),function(){return vt("beforeDOMElementCreation",{iconDefinition:t,params:n}),S.autoA11y&&(v?x["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(j||rn()):(x["aria-hidden"]="true",x.focusable="false")),Ta({icons:{main:Xr(ie),mask:l?Xr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:ae,transform:O(O({},Ne),a),symbol:o,title:v,maskId:d,titleId:j,extra:{attributes:x,styles:C,classes:T}})})}},qu={mixout:function(){return{icon:Vu(Xu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Hi,n.nodeCallback=Ku,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return Hi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(A,j){Promise.all([qr(a,s),d.iconName?qr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(P){var T=wa(P,2),y=T[0],x=T[1];A([n,Ta({icons:{main:y,mask:x},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(j)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=rr(s);l.length>0&&(a.style=l);var c;return Ca(o)&&(c=Ue("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Ju={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return or({type:"layer"},function(){vt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(S.cssPrefix,"-layers")].concat(an(i)).join(" ")},children:o}]})}}}},Gu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return or({type:"counter",content:n},function(){return vt("beforeDOMElementCreation",{content:n,params:r}),Su({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(S.cssPrefix,"-layers-counter")].concat(an(s))}})})}}}},Zu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ne:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,A=v===void 0?{}:v;return or({type:"text",content:n},function(){return vt("beforeDOMElementCreation",{content:n,params:r}),Di({content:n,transform:O(O({},Ne),i),title:s,extra:{attributes:m,styles:A,classes:["".concat(S.cssPrefix,"-layers-text")].concat(an(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Qo){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return S.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Di({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Qu=new RegExp('"',"ug"),Yi=[1105920,1112319];function ed(e){var t=e.replace(Qu,""),n=mu(t,0),r=n>=Yi[0]&&n<=Yi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Yr(a?t[0]:t),isSecondary:r||a}}function Wi(e,t){var n="".concat(Uc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Rt(e.children),o=i.filter(function(ie){return ie.getAttribute(Hr)===t})[0],s=Qe.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Vc),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?G:V,A=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?en[v][l[2].toLowerCase()]:Xc[v][c],j=ed(m),P=j.value,T=j.isSecondary,y=l[0].startsWith("FontAwesome"),x=Ia(A,P),F=x;if(y){var C=xu(P);C.iconName&&C.prefix&&(x=C.iconName,A=C.prefix)}if(x&&!T&&(!o||o.getAttribute(ka)!==A||o.getAttribute(Aa)!==F)){e.setAttribute(n,F),o&&e.removeChild(o);var U=Yu(),ae=U.extra;ae.attributes[Hr]=t,qr(x,A).then(function(ie){var be=Ta(O(O({},U),{},{icons:{main:ie,mask:Sa()},prefix:A,iconName:F,extra:ae,watchable:!0})),ge=X.createElement("svg");t==="::before"?e.insertBefore(ge,e.firstChild):e.appendChild(ge),ge.outerHTML=be.map(function(Fe){return sn(Fe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function td(e){return Promise.all([Wi(e,"::before"),Wi(e,"::after")])}function nd(e){return e.parentNode!==document.head&&!~Yc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Hr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ki(e){if(Ye)return new Promise(function(t,n){var r=Rt(e.querySelectorAll("*")).filter(nd).map(td),a=Na.begin("searchPseudoElements");xs(),Promise.all(r).then(function(){a(),Gr(),t()}).catch(function(){a(),Gr(),n()})})}var rd={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ki,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;S.searchPseudoElements&&Ki(a)}}},Vi=!1,ad={mixout:function(){return{dom:{unwatch:function(){xs(),Vi=!0}}}},hooks:function(){return{bootstrap:function(){Bi(Kr("mutationObserverCallbacks",{}))},noAuto:function(){$u()},watch:function(n){var r=n.observeMutationsRoot;Vi?Gr():Bi(Kr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Xi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},id={mixout:function(){return{parse:{transform:function(n){return Xi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Xi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},A={outer:s,inner:m,path:v};return{tag:"g",attributes:O({},A.outer),children:[{tag:"g",attributes:O({},A.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),A.path)}]}]}}}},_r={x:0,y:0,width:"100%",height:"100%"};function qi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function od(e){return e.tag==="g"?e.children:[e]}var sd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?ir(a.split(" ").map(function(o){return o.trim()})):Sa();return i.prefix||(i.prefix=et()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,v=o.icon,A=iu({transform:l,containerWidth:m,iconWidth:c}),j={tag:"rect",attributes:O(O({},_r),{},{fill:"white"})},P=d.children?{children:d.children.map(qi)}:{},T={tag:"g",attributes:O({},A.inner),children:[qi(O({tag:d.tag,attributes:O(O({},d.attributes),A.path)},P))]},y={tag:"g",attributes:O({},A.outer),children:[T]},x="mask-".concat(s||rn()),F="clip-".concat(s||rn()),C={tag:"mask",attributes:O(O({},_r),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[j,y]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:od(v)},C]};return r.push(U,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(x,")")},_r)}),{children:r,attributes:a}}}},ld={provides:function(t){var n=!1;Qe.matchMedia&&(n=Qe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},fd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},cd=[lu,qu,Ju,Gu,Zu,rd,ad,id,sd,ld,fd];ku(cd,{mixoutsTo:he});he.noAuto;he.config;var ud=he.library;he.dom;var Zr=he.parse;he.findIconDefinition;he.toHtml;var dd=he.icon;he.layer;he.text;he.counter;function Ji(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ji(Object(n),!0).forEach(function(r){ue(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ji(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Yn(e){"@babel/helpers - typeof";return Yn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Yn(e)}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function md(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function pd(e,t){if(e==null)return{};var n=md(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var hd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_s={exports:{}};(function(e){(function(t){var n=function(y,x,F){if(!c(x)||m(x)||v(x)||A(x)||l(x))return x;var C,U=0,ae=0;if(d(x))for(C=[],ae=x.length;U<ae;U++)C.push(n(y,x[U],F));else{C={};for(var ie in x)Object.prototype.hasOwnProperty.call(x,ie)&&(C[y(ie,F)]=n(y,x[ie],F))}return C},r=function(y,x){x=x||{};var F=x.separator||"_",C=x.split||/(?=[A-Z])/;return y.split(C).join(F)},a=function(y){return j(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(x,F){return F?F.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var x=a(y);return x.substr(0,1).toUpperCase()+x.substr(1)},o=function(y,x){return r(y,x).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},c=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},v=function(y){return s.call(y)=="[object RegExp]"},A=function(y){return s.call(y)=="[object Boolean]"},j=function(y){return y=y-0,y===y},P=function(y,x){var F=x&&"process"in x?x.process:x;return typeof F!="function"?y:function(C,U){return F(C,y,U)}},T={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,x){return n(P(a,x),y)},decamelizeKeys:function(y,x){return n(P(o,x),y,x)},pascalizeKeys:function(y,x){return n(P(i,x),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=T:t.humps=T})(hd)})(_s);var gd=_s.exports,vd=["class","style"];function bd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=gd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function yd(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ks(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ks(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=yd(d);break;case"style":l.style=bd(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=pd(n,vd);return Sf(e.tag,je(je(je({},t),{},{class:a.class,style:je(je({},a.style),o)},a.attrs),s),r)}var As=!1;try{As=!0}catch{}function xd(){if(!As&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function kr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ue({},e,t):{}}function wd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ue(t,"fa-".concat(e.size),e.size!==null),ue(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ue(t,"fa-pull-".concat(e.pull),e.pull!==null),ue(t,"fa-swap-opacity",e.swapOpacity),ue(t,"fa-bounce",e.bounce),ue(t,"fa-shake",e.shake),ue(t,"fa-beat",e.beat),ue(t,"fa-fade",e.fade),ue(t,"fa-beat-fade",e.beatFade),ue(t,"fa-flash",e.flash),ue(t,"fa-spin-pulse",e.spinPulse),ue(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Gi(e){if(e&&Yn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Zr.icon)return Zr.icon(e);if(e===null)return null;if(Yn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var _d=Rl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=st(function(){return Gi(t.icon)}),i=st(function(){return kr("classes",wd(t))}),o=st(function(){return kr("transform",typeof t.transform=="string"?Zr.transform(t.transform):t.transform)}),s=st(function(){return kr("mask",Gi(t.mask))}),l=st(function(){return dd(a.value,je(je(je(je({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Sn(l,function(d){if(!d)return xd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=st(function(){return l.value?ks(l.value.abstract[0],{},r):null});return function(){return c.value}}}),kd={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},Ad={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},Ed={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]};ud.add(Ad,Ed,kd);Qf(Nc).component("font-awesome-icon",_d).mount("#app");
