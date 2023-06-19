(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Qr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const K={},At=[],Ee=()=>{},Cs=()=>!1,Ps=/^on[^a-z]/,Yn=e=>Ps.test(e),ea=e=>e.startsWith("onUpdate:"),ae=Object.assign,ta=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Is=Object.prototype.hasOwnProperty,B=(e,t)=>Is.call(e,t),L=Array.isArray,Et=e=>Kn(e)==="[object Map]",Zi=e=>Kn(e)==="[object Set]",D=e=>typeof e=="function",ne=e=>typeof e=="string",na=e=>typeof e=="symbol",J=e=>e!==null&&typeof e=="object",Qi=e=>J(e)&&D(e.then)&&D(e.catch),eo=Object.prototype.toString,Kn=e=>eo.call(e),Ss=e=>Kn(e).slice(8,-1),to=e=>Kn(e)==="[object Object]",ra=e=>ne(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Pn=Qr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ts=/-(\w)/g,Fe=Vn(e=>e.replace(Ts,(t,n)=>n?n.toUpperCase():"")),Ns=/\B([A-Z])/g,Mt=Vn(e=>e.replace(Ns,"-$1").toLowerCase()),Xn=Vn(e=>e.charAt(0).toUpperCase()+e.slice(1)),cr=Vn(e=>e?`on${Xn(e)}`:""),Xt=(e,t)=>!Object.is(e,t),In=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Rn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ar=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let $a;const Er=()=>$a||($a=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function aa(e){if(L(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ne(r)?Rs(r):aa(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ne(e))return e;if(J(e))return e}}const Ms=/;(?![^(]*\))/g,Fs=/:([^]+)/,Ls=/\/\*[^]*?\*\//g;function Rs(e){const t={};return e.replace(Ls,"").split(Ms).forEach(n=>{if(n){const r=n.split(Fs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function qn(e){let t="";if(ne(e))t=e;else if(L(e))for(let n=0;n<e.length;n++){const r=qn(e[n]);r&&(t+=r+" ")}else if(J(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ds="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",js=Qr(Ds);function no(e){return!!e||e===""}const Ba=e=>ne(e)?e:e==null?"":L(e)||J(e)&&(e.toString===eo||!D(e.toString))?JSON.stringify(e,ro,2):String(e),ro=(e,t)=>t&&t.__v_isRef?ro(e,t.value):Et(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Zi(t)?{[`Set(${t.size})`]:[...t.values()]}:J(t)&&!L(t)&&!to(t)?String(t):t;let we;class zs{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=we,!t&&we&&(this.index=(we.scopes||(we.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=we;try{return we=this,t()}finally{we=n}}}on(){we=this}off(){we=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function $s(e,t=we){t&&t.active&&t.effects.push(e)}function Bs(){return we}const ia=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ao=e=>(e.w&Qe)>0,io=e=>(e.n&Qe)>0,Us=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Qe},Hs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];ao(a)&&!io(a)?a.delete(e):t[n++]=a,a.w&=~Qe,a.n&=~Qe}t.length=n}},Or=new WeakMap;let Bt=0,Qe=1;const Cr=30;let _e;const mt=Symbol(""),Pr=Symbol("");class oa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,$s(this,r)}run(){if(!this.active)return this.fn();let t=_e,n=Je;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=_e,_e=this,Je=!0,Qe=1<<++Bt,Bt<=Cr?Us(this):Ua(this),this.fn()}finally{Bt<=Cr&&Hs(this),Qe=1<<--Bt,_e=this.parent,Je=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_e===this?this.deferStop=!0:this.active&&(Ua(this),this.onStop&&this.onStop(),this.active=!1)}}function Ua(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Je=!0;const oo=[];function Ft(){oo.push(Je),Je=!1}function Lt(){const e=oo.pop();Je=e===void 0?!0:e}function me(e,t,n){if(Je&&_e){let r=Or.get(e);r||Or.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=ia()),so(a)}}function so(e,t){let n=!1;Bt<=Cr?io(e)||(e.n|=Qe,n=!ao(e)):n=!e.has(_e),n&&(e.add(_e),_e.deps.push(e))}function $e(e,t,n,r,a,i){const o=Or.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&L(e)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":L(e)?ra(n)&&s.push(o.get("length")):(s.push(o.get(mt)),Et(e)&&s.push(o.get(Pr)));break;case"delete":L(e)||(s.push(o.get(mt)),Et(e)&&s.push(o.get(Pr)));break;case"set":Et(e)&&s.push(o.get(mt));break}if(s.length===1)s[0]&&Ir(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Ir(ia(l))}}function Ir(e,t){const n=L(e)?e:[...e];for(const r of n)r.computed&&Ha(r);for(const r of n)r.computed||Ha(r)}function Ha(e,t){(e!==_e||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Ws=Qr("__proto__,__v_isRef,__isVue"),lo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(na)),Ys=sa(),Ks=sa(!1,!0),Vs=sa(!0),Wa=Xs();function Xs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)me(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ft();const r=U(this)[t].apply(this,n);return Lt(),r}}),e}function qs(e){const t=U(this);return me(t,"has",e),t.hasOwnProperty(e)}function sa(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?ul:po:t?mo:uo).get(r))return r;const o=L(r);if(!e){if(o&&B(Wa,a))return Reflect.get(Wa,a,i);if(a==="hasOwnProperty")return qs}const s=Reflect.get(r,a,i);return(na(a)?lo.has(a):Ws(a))||(e||me(r,"get",a),t)?s:se(s)?o&&ra(a)?s:s.value:J(s)?e?ho(s):ca(s):s}}const Js=fo(),Gs=fo(!0);function fo(e=!1){return function(n,r,a,i){let o=n[r];if(It(o)&&se(o)&&!se(a))return!1;if(!e&&(!Dn(a)&&!It(a)&&(o=U(o),a=U(a)),!L(n)&&se(o)&&!se(a)))return o.value=a,!0;const s=L(n)&&ra(r)?Number(r)<n.length:B(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(s?Xt(a,o)&&$e(n,"set",r,a):$e(n,"add",r,a)),l}}function Zs(e,t){const n=B(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&$e(e,"delete",t,void 0),r}function Qs(e,t){const n=Reflect.has(e,t);return(!na(t)||!lo.has(t))&&me(e,"has",t),n}function el(e){return me(e,"iterate",L(e)?"length":mt),Reflect.ownKeys(e)}const co={get:Ys,set:Js,deleteProperty:Zs,has:Qs,ownKeys:el},tl={get:Vs,set(e,t){return!0},deleteProperty(e,t){return!0}},nl=ae({},co,{get:Ks,set:Gs}),la=e=>e,Jn=e=>Reflect.getPrototypeOf(e);function mn(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(t!==i&&me(a,"get",t),me(a,"get",i));const{has:o}=Jn(a),s=r?la:n?da:qt;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function pn(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(e!==a&&me(r,"has",e),me(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function hn(e,t=!1){return e=e.__v_raw,!t&&me(U(e),"iterate",mt),Reflect.get(e,"size",e)}function Ya(e){e=U(e);const t=U(this);return Jn(t).has.call(t,e)||(t.add(e),$e(t,"add",e,e)),this}function Ka(e,t){t=U(t);const n=U(this),{has:r,get:a}=Jn(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Xt(t,o)&&$e(n,"set",e,t):$e(n,"add",e,t),this}function Va(e){const t=U(this),{has:n,get:r}=Jn(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&$e(t,"delete",e,void 0),i}function Xa(){const e=U(this),t=e.size!==0,n=e.clear();return t&&$e(e,"clear",void 0,void 0),n}function gn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=t?la:e?da:qt;return!e&&me(s,"iterate",mt),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function vn(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),o=Et(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?la:t?da:qt;return!t&&me(i,"iterate",l?Pr:mt),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function Ke(e){return function(...t){return e==="delete"?!1:this}}function rl(){const e={get(i){return mn(this,i)},get size(){return hn(this)},has:pn,add:Ya,set:Ka,delete:Va,clear:Xa,forEach:gn(!1,!1)},t={get(i){return mn(this,i,!1,!0)},get size(){return hn(this)},has:pn,add:Ya,set:Ka,delete:Va,clear:Xa,forEach:gn(!1,!0)},n={get(i){return mn(this,i,!0)},get size(){return hn(this,!0)},has(i){return pn.call(this,i,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:gn(!0,!1)},r={get(i){return mn(this,i,!0,!0)},get size(){return hn(this,!0)},has(i){return pn.call(this,i,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:gn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=vn(i,!1,!1),n[i]=vn(i,!0,!1),t[i]=vn(i,!1,!0),r[i]=vn(i,!0,!0)}),[e,n,t,r]}const[al,il,ol,sl]=rl();function fa(e,t){const n=t?e?sl:ol:e?il:al;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(B(n,a)&&a in r?n:r,a,i)}const ll={get:fa(!1,!1)},fl={get:fa(!1,!0)},cl={get:fa(!0,!1)},uo=new WeakMap,mo=new WeakMap,po=new WeakMap,ul=new WeakMap;function dl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ml(e){return e.__v_skip||!Object.isExtensible(e)?0:dl(Ss(e))}function ca(e){return It(e)?e:ua(e,!1,co,ll,uo)}function pl(e){return ua(e,!1,nl,fl,mo)}function ho(e){return ua(e,!0,tl,cl,po)}function ua(e,t,n,r,a){if(!J(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=ml(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Ot(e){return It(e)?Ot(e.__v_raw):!!(e&&e.__v_isReactive)}function It(e){return!!(e&&e.__v_isReadonly)}function Dn(e){return!!(e&&e.__v_isShallow)}function go(e){return Ot(e)||It(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function vo(e){return Rn(e,"__v_skip",!0),e}const qt=e=>J(e)?ca(e):e,da=e=>J(e)?ho(e):e;function bo(e){Je&&_e&&(e=U(e),so(e.dep||(e.dep=ia())))}function yo(e,t){e=U(e);const n=e.dep;n&&Ir(n)}function se(e){return!!(e&&e.__v_isRef===!0)}function xe(e){return hl(e,!1)}function hl(e,t){return se(e)?e:new gl(e,t)}class gl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:U(t),this._value=n?t:qt(t)}get value(){return bo(this),this._value}set value(t){const n=this.__v_isShallow||Dn(t)||It(t);t=n?t:U(t),Xt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:qt(t),yo(this))}}function vl(e){return se(e)?e.value:e}const bl={get:(e,t,n)=>vl(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return se(a)&&!se(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function xo(e){return Ot(e)?e:new Proxy(e,bl)}class yl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new oa(t,()=>{this._dirty||(this._dirty=!0,yo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return bo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function xl(e,t,n=!1){let r,a;const i=D(e);return i?(r=e,a=Ee):(r=e.get,a=e.set),new yl(r,a,i||!a,n)}function Ge(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Gn(i,t,n)}return a}function Oe(e,t,n,r){if(D(e)){const i=Ge(e,t,n,r);return i&&Qi(i)&&i.catch(o=>{Gn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Oe(e[i],t,n,r));return a}function Gn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Ge(l,null,10,[e,o,s]);return}}wl(e,n,a,r)}function wl(e,t,n,r=!0){console.error(e)}let Jt=!1,Sr=!1;const oe=[];let Ne=0;const Ct=[];let je=null,lt=0;const wo=Promise.resolve();let ma=null;function _l(e){const t=ma||wo;return e?t.then(this?e.bind(this):e):t}function kl(e){let t=Ne+1,n=oe.length;for(;t<n;){const r=t+n>>>1;Gt(oe[r])<e?t=r+1:n=r}return t}function pa(e){(!oe.length||!oe.includes(e,Jt&&e.allowRecurse?Ne+1:Ne))&&(e.id==null?oe.push(e):oe.splice(kl(e.id),0,e),_o())}function _o(){!Jt&&!Sr&&(Sr=!0,ma=wo.then(Ao))}function Al(e){const t=oe.indexOf(e);t>Ne&&oe.splice(t,1)}function El(e){L(e)?Ct.push(...e):(!je||!je.includes(e,e.allowRecurse?lt+1:lt))&&Ct.push(e),_o()}function qa(e,t=Jt?Ne+1:0){for(;t<oe.length;t++){const n=oe[t];n&&n.pre&&(oe.splice(t,1),t--,n())}}function ko(e){if(Ct.length){const t=[...new Set(Ct)];if(Ct.length=0,je){je.push(...t);return}for(je=t,je.sort((n,r)=>Gt(n)-Gt(r)),lt=0;lt<je.length;lt++)je[lt]();je=null,lt=0}}const Gt=e=>e.id==null?1/0:e.id,Ol=(e,t)=>{const n=Gt(e)-Gt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Ao(e){Sr=!1,Jt=!0,oe.sort(Ol);const t=Ee;try{for(Ne=0;Ne<oe.length;Ne++){const n=oe[Ne];n&&n.active!==!1&&Ge(n,null,14)}}finally{Ne=0,oe.length=0,ko(),Jt=!1,ma=null,(oe.length||Ct.length)&&Ao()}}function Cl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||K;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||K;v&&(a=n.map(A=>ne(A)?A.trim():A)),m&&(a=n.map(Ar))}let s,l=r[s=cr(t)]||r[s=cr(Fe(t))];!l&&i&&(l=r[s=cr(Mt(t))]),l&&Oe(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Oe(c,e,6,a)}}function Eo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!D(e)){const l=c=>{const d=Eo(c,t,!0);d&&(s=!0,ae(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(J(e)&&r.set(e,null),null):(L(i)?i.forEach(l=>o[l]=null):ae(o,i),J(e)&&r.set(e,o),o)}function Zn(e,t){return!e||!Yn(t)?!1:(t=t.slice(2).replace(/Once$/,""),B(e,t[0].toLowerCase()+t.slice(1))||B(e,Mt(t))||B(e,t))}let ve=null,Oo=null;function jn(e){const t=ve;return ve=e,Oo=e&&e.type.__scopeId||null,t}function Pl(e,t=ve,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&si(-1);const i=jn(t);let o;try{o=e(...a)}finally{jn(i),r._d&&si(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ur(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:A,ctx:j,inheritAttrs:T}=e;let $,E;const x=jn(e);try{if(n.shapeFlag&4){const _=a||r;$=Te(d.call(_,_,m,i,A,v,j)),E=l}else{const _=t;$=Te(_.length>1?_(i,{attrs:l,slots:s,emit:c}):_(i,null)),E=t.props?l:Il(l)}}catch(_){Yt.length=0,Gn(_,e,1),$=ce(ht)}let C=$;if(E&&T!==!1){const _=Object.keys(E),{shapeFlag:F}=C;_.length&&F&7&&(o&&_.some(ea)&&(E=Sl(E,o)),C=St(C,E))}return n.dirs&&(C=St(C),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),$=C,jn(x),$}const Il=e=>{let t;for(const n in e)(n==="class"||n==="style"||Yn(n))&&((t||(t={}))[n]=e[n]);return t},Sl=(e,t)=>{const n={};for(const r in e)(!ea(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Tl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ja(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Zn(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ja(r,o,c):!0:!!o;return!1}function Ja(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Zn(n,i))return!0}return!1}function Nl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Ml=e=>e.__isSuspense;function Fl(e,t){t&&t.pendingBranch?L(e)?t.effects.push(...e):t.effects.push(e):El(e)}const bn={};function Sn(e,t,n){return Co(e,t,n)}function Co(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=K){var s;const l=Bs()===((s=ie)==null?void 0:s.scope)?ie:null;let c,d=!1,m=!1;if(se(e)?(c=()=>e.value,d=Dn(e)):Ot(e)?(c=()=>e,r=!0):L(e)?(m=!0,d=e.some(_=>Ot(_)||Dn(_)),c=()=>e.map(_=>{if(se(_))return _.value;if(Ot(_))return ct(_);if(D(_))return Ge(_,l,2)})):D(e)?t?c=()=>Ge(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return v&&v(),Oe(e,l,3,[A])}:c=Ee,t&&r){const _=c;c=()=>ct(_())}let v,A=_=>{v=x.onStop=()=>{Ge(_,l,4)}},j;if(Qt)if(A=Ee,t?n&&Oe(t,l,3,[c(),m?[]:void 0,A]):c(),a==="sync"){const _=Nf();j=_.__watcherHandles||(_.__watcherHandles=[])}else return Ee;let T=m?new Array(e.length).fill(bn):bn;const $=()=>{if(x.active)if(t){const _=x.run();(r||d||(m?_.some((F,q)=>Xt(F,T[q])):Xt(_,T)))&&(v&&v(),Oe(t,l,3,[_,T===bn?void 0:m&&T[0]===bn?[]:T,A]),T=_)}else x.run()};$.allowRecurse=!!t;let E;a==="sync"?E=$:a==="post"?E=()=>de($,l&&l.suspense):($.pre=!0,l&&($.id=l.uid),E=()=>pa($));const x=new oa(c,E);t?n?$():T=x.run():a==="post"?de(x.run.bind(x),l&&l.suspense):x.run();const C=()=>{x.stop(),l&&l.scope&&ta(l.scope.effects,x)};return j&&j.push(C),C}function Ll(e,t,n){const r=this.proxy,a=ne(e)?e.includes(".")?Po(r,e):()=>r[e]:e.bind(r,r);let i;D(t)?i=t:(i=t.handler,n=t);const o=ie;Tt(this);const s=Co(a,i.bind(r),n);return o?Tt(o):pt(),s}function Po(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function ct(e,t){if(!J(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),se(e))ct(e.value,t);else if(L(e))for(let n=0;n<e.length;n++)ct(e[n],t);else if(Zi(e)||Et(e))e.forEach(n=>{ct(n,t)});else if(to(e))for(const n in e)ct(e[n],t);return e}function Ga(e,t){const n=ve;if(n===null)return e;const r=nr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=K]=t[i];o&&(D(o)&&(o={mounted:o,updated:o}),o.deep&&ct(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function it(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Ft(),Oe(l,n,8,[e.el,s,e,t]),Lt())}}function Rl(e,t){return D(e)?(()=>ae({name:e.name},t,{setup:e}))():e}const Tn=e=>!!e.type.__asyncLoader,Io=e=>e.type.__isKeepAlive;function Dl(e,t){So(e,"a",t)}function jl(e,t){So(e,"da",t)}function So(e,t,n=ie){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Qn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Io(a.parent.vnode)&&zl(r,t,n,a),a=a.parent}}function zl(e,t,n,r){const a=Qn(t,e,r,!0);No(()=>{ta(r[t],a)},n)}function Qn(e,t,n=ie,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ft(),Tt(n);const s=Oe(t,n,e,o);return pt(),Lt(),s});return r?a.unshift(i):a.push(i),i}}const We=e=>(t,n=ie)=>(!Qt||e==="sp")&&Qn(e,(...r)=>t(...r),n),$l=We("bm"),To=We("m"),Bl=We("bu"),Ul=We("u"),Hl=We("bum"),No=We("um"),Wl=We("sp"),Yl=We("rtg"),Kl=We("rtc");function Vl(e,t=ie){Qn("ec",e,t)}const Mo="components";function Xl(e,t){return Jl(Mo,e,!0,t)||e}const ql=Symbol.for("v-ndc");function Jl(e,t,n=!0,r=!1){const a=ve||ie;if(a){const i=a.type;if(e===Mo){const s=Pf(i,!1);if(s&&(s===t||s===Fe(t)||s===Xn(Fe(t))))return i}const o=Za(a[e]||i[e],t)||Za(a.appContext[e],t);return!o&&r?i:o}}function Za(e,t){return e&&(e[t]||e[Fe(t)]||e[Xn(Fe(t))])}function Gl(e,t,n,r){let a;const i=n&&n[r];if(L(e)||ne(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(J(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Tr=e=>e?Yo(e)?nr(e)||e.proxy:Tr(e.parent):null,Wt=ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Tr(e.parent),$root:e=>Tr(e.root),$emit:e=>e.emit,$options:e=>ha(e),$forceUpdate:e=>e.f||(e.f=()=>pa(e.update)),$nextTick:e=>e.n||(e.n=_l.bind(e.proxy)),$watch:e=>Ll.bind(e)}),dr=(e,t)=>e!==K&&!e.__isScriptSetup&&B(e,t),Zl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const A=o[t];if(A!==void 0)switch(A){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(dr(r,t))return o[t]=1,r[t];if(a!==K&&B(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&B(c,t))return o[t]=3,i[t];if(n!==K&&B(n,t))return o[t]=4,n[t];Nr&&(o[t]=0)}}const d=Wt[t];let m,v;if(d)return t==="$attrs"&&me(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==K&&B(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,B(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return dr(a,t)?(a[t]=n,!0):r!==K&&B(r,t)?(r[t]=n,!0):B(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==K&&B(e,o)||dr(t,o)||(s=i[0])&&B(s,o)||B(r,o)||B(Wt,o)||B(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:B(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Qa(e){return L(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Nr=!0;function Ql(e){const t=ha(e),n=e.proxy,r=e.ctx;Nr=!1,t.beforeCreate&&ei(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:A,updated:j,activated:T,deactivated:$,beforeDestroy:E,beforeUnmount:x,destroyed:C,unmounted:_,render:F,renderTracked:q,renderTriggered:G,errorCaptured:be,serverPrefetch:ge,expose:Le,inheritAttrs:Dt,components:fn,directives:cn,filters:sr}=t;if(c&&ef(c,r,null),o)for(const Z in o){const W=o[Z];D(W)&&(r[Z]=W.bind(n))}if(a){const Z=a.call(n,n);J(Z)&&(e.data=ca(Z))}if(Nr=!0,i)for(const Z in i){const W=i[Z],rt=D(W)?W.bind(n,n):D(W.get)?W.get.bind(n,n):Ee,un=!D(W)&&D(W.set)?W.set.bind(n):Ee,at=st({get:rt,set:un});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>at.value,set:Ce=>at.value=Ce})}if(s)for(const Z in s)Fo(s[Z],r,n,Z);if(l){const Z=D(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(W=>{sf(W,Z[W])})}d&&ei(d,e,"c");function le(Z,W){L(W)?W.forEach(rt=>Z(rt.bind(n))):W&&Z(W.bind(n))}if(le($l,m),le(To,v),le(Bl,A),le(Ul,j),le(Dl,T),le(jl,$),le(Vl,be),le(Kl,q),le(Yl,G),le(Hl,x),le(No,_),le(Wl,ge),L(Le))if(Le.length){const Z=e.exposed||(e.exposed={});Le.forEach(W=>{Object.defineProperty(Z,W,{get:()=>n[W],set:rt=>n[W]=rt})})}else e.exposed||(e.exposed={});F&&e.render===Ee&&(e.render=F),Dt!=null&&(e.inheritAttrs=Dt),fn&&(e.components=fn),cn&&(e.directives=cn)}function ef(e,t,n=Ee){L(e)&&(e=Mr(e));for(const r in e){const a=e[r];let i;J(a)?"default"in a?i=Nn(a.from||r,a.default,!0):i=Nn(a.from||r):i=Nn(a),se(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function ei(e,t,n){Oe(L(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Fo(e,t,n,r){const a=r.includes(".")?Po(n,r):()=>n[r];if(ne(e)){const i=t[e];D(i)&&Sn(a,i)}else if(D(e))Sn(a,e.bind(n));else if(J(e))if(L(e))e.forEach(i=>Fo(i,t,n,r));else{const i=D(e.handler)?e.handler.bind(n):t[e.handler];D(i)&&Sn(a,i,e)}}function ha(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>zn(l,c,o,!0)),zn(l,t,o)),J(t)&&i.set(t,l),l}function zn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&zn(e,i,n,!0),a&&a.forEach(o=>zn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=tf[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const tf={data:ti,props:ni,emits:ni,methods:Ut,computed:Ut,beforeCreate:fe,created:fe,beforeMount:fe,mounted:fe,beforeUpdate:fe,updated:fe,beforeDestroy:fe,beforeUnmount:fe,destroyed:fe,unmounted:fe,activated:fe,deactivated:fe,errorCaptured:fe,serverPrefetch:fe,components:Ut,directives:Ut,watch:rf,provide:ti,inject:nf};function ti(e,t){return t?e?function(){return ae(D(e)?e.call(this,this):e,D(t)?t.call(this,this):t)}:t:e}function nf(e,t){return Ut(Mr(e),Mr(t))}function Mr(e){if(L(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function fe(e,t){return e?[...new Set([].concat(e,t))]:t}function Ut(e,t){return e?ae(Object.create(null),e,t):t}function ni(e,t){return e?L(e)&&L(t)?[...new Set([...e,...t])]:ae(Object.create(null),Qa(e),Qa(t??{})):t}function rf(e,t){if(!e)return t;if(!t)return e;const n=ae(Object.create(null),e);for(const r in t)n[r]=fe(e[r],t[r]);return n}function Lo(){return{app:null,config:{isNativeTag:Cs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let af=0;function of(e,t){return function(r,a=null){D(r)||(r=ae({},r)),a!=null&&!J(a)&&(a=null);const i=Lo(),o=new Set;let s=!1;const l=i.app={_uid:af++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Mf,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&D(c.install)?(o.add(c),c.install(l,...d)):D(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const v=ce(r,a);return v.appContext=i,d&&t?t(v,c):e(v,c,m),s=!0,l._container=c,c.__vue_app__=l,nr(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){$n=l;try{return c()}finally{$n=null}}};return l}}let $n=null;function sf(e,t){if(ie){let n=ie.provides;const r=ie.parent&&ie.parent.provides;r===n&&(n=ie.provides=Object.create(r)),n[e]=t}}function Nn(e,t,n=!1){const r=ie||ve;if(r||$n){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:$n._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&D(t)?t.call(r&&r.proxy):t}}function lf(e,t,n,r=!1){const a={},i={};Rn(i,tr,1),e.propsDefaults=Object.create(null),Ro(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:pl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function ff(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=U(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Zn(e.emitsOptions,v))continue;const A=t[v];if(l)if(B(i,v))A!==i[v]&&(i[v]=A,c=!0);else{const j=Fe(v);a[j]=Fr(l,s,j,A,e,!1)}else A!==i[v]&&(i[v]=A,c=!0)}}}else{Ro(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!B(t,m)&&((d=Mt(m))===m||!B(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Fr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!B(t,m))&&(delete i[m],c=!0)}c&&$e(e,"set","$attrs")}function Ro(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Pn(l))continue;const c=t[l];let d;a&&B(a,d=Fe(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Zn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=U(n),c=s||K;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Fr(a,l,m,c[m],e,!B(c,m))}}return o}function Fr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=B(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&D(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Tt(a),r=c[n]=l.call(null,t),pt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Mt(n))&&(r=!0))}return r}function Do(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!D(e)){const d=m=>{l=!0;const[v,A]=Do(m,t,!0);ae(o,v),A&&s.push(...A)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return J(e)&&r.set(e,At),At;if(L(i))for(let d=0;d<i.length;d++){const m=Fe(i[d]);ri(m)&&(o[m]=K)}else if(i)for(const d in i){const m=Fe(d);if(ri(m)){const v=i[d],A=o[m]=L(v)||D(v)?{type:v}:ae({},v);if(A){const j=oi(Boolean,A.type),T=oi(String,A.type);A[0]=j>-1,A[1]=T<0||j<T,(j>-1||B(A,"default"))&&s.push(m)}}}const c=[o,s];return J(e)&&r.set(e,c),c}function ri(e){return e[0]!=="$"}function ai(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ii(e,t){return ai(e)===ai(t)}function oi(e,t){return L(t)?t.findIndex(n=>ii(n,e)):D(t)&&ii(t,e)?0:-1}const jo=e=>e[0]==="_"||e==="$stable",ga=e=>L(e)?e.map(Te):[Te(e)],cf=(e,t,n)=>{if(t._n)return t;const r=Pl((...a)=>ga(t(...a)),n);return r._c=!1,r},zo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(jo(a))continue;const i=e[a];if(D(i))t[a]=cf(a,i,r);else if(i!=null){const o=ga(i);t[a]=()=>o}}},$o=(e,t)=>{const n=ga(t);e.slots.default=()=>n},uf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),Rn(t,"_",n)):zo(t,e.slots={})}else e.slots={},t&&$o(e,t);Rn(e.slots,tr,1)},df=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=K;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ae(a,t),!n&&s===1&&delete a._):(i=!t.$stable,zo(t,a)),o=t}else t&&($o(e,t),o={default:1});if(i)for(const s in a)!jo(s)&&!(s in o)&&delete a[s]};function Lr(e,t,n,r,a=!1){if(L(e)){e.forEach((v,A)=>Lr(v,t&&(L(t)?t[A]:t),n,r,a));return}if(Tn(r)&&!a)return;const i=r.shapeFlag&4?nr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===K?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(ne(c)?(d[c]=null,B(m,c)&&(m[c]=null)):se(c)&&(c.value=null)),D(l))Ge(l,s,12,[o,d]);else{const v=ne(l),A=se(l);if(v||A){const j=()=>{if(e.f){const T=v?B(m,l)?m[l]:d[l]:l.value;a?L(T)&&ta(T,i):L(T)?T.includes(i)||T.push(i):v?(d[l]=[i],B(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,B(m,l)&&(m[l]=o)):A&&(l.value=o,e.k&&(d[e.k]=o))};o?(j.id=-1,de(j,n)):j()}}}const de=Fl;function mf(e){return pf(e)}function pf(e,t){const n=Er();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:A=Ee,insertStaticContent:j}=e,T=(f,u,p,g=null,h=null,w=null,O=!1,y=null,k=!!u.dynamicChildren)=>{if(f===u)return;f&&!zt(f,u)&&(g=dn(f),Ce(f,h,w,!0),f=null),u.patchFlag===-2&&(k=!1,u.dynamicChildren=null);const{type:b,ref:N,shapeFlag:I}=u;switch(b){case er:$(f,u,p,g);break;case ht:E(f,u,p,g);break;case mr:f==null&&x(u,p,g,O);break;case Se:fn(f,u,p,g,h,w,O,y,k);break;default:I&1?F(f,u,p,g,h,w,O,y,k):I&6?cn(f,u,p,g,h,w,O,y,k):(I&64||I&128)&&b.process(f,u,p,g,h,w,O,y,k,bt)}N!=null&&h&&Lr(N,f&&f.ref,w,u||f,!u)},$=(f,u,p,g)=>{if(f==null)r(u.el=s(u.children),p,g);else{const h=u.el=f.el;u.children!==f.children&&c(h,u.children)}},E=(f,u,p,g)=>{f==null?r(u.el=l(u.children||""),p,g):u.el=f.el},x=(f,u,p,g)=>{[f.el,f.anchor]=j(f.children,u,p,g,f.el,f.anchor)},C=({el:f,anchor:u},p,g)=>{let h;for(;f&&f!==u;)h=v(f),r(f,p,g),f=h;r(u,p,g)},_=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=v(f),a(f),f=p;a(u)},F=(f,u,p,g,h,w,O,y,k)=>{O=O||u.type==="svg",f==null?q(u,p,g,h,w,O,y,k):ge(f,u,h,w,O,y,k)},q=(f,u,p,g,h,w,O,y)=>{let k,b;const{type:N,props:I,shapeFlag:M,transition:R,dirs:z}=f;if(k=f.el=o(f.type,w,I&&I.is,I),M&8?d(k,f.children):M&16&&be(f.children,k,null,g,h,w&&N!=="foreignObject",O,y),z&&it(f,null,g,"created"),G(k,f,f.scopeId,O,g),I){for(const H in I)H!=="value"&&!Pn(H)&&i(k,H,null,I[H],w,f.children,g,h,Re);"value"in I&&i(k,"value",null,I.value),(b=I.onVnodeBeforeMount)&&Ie(b,g,f)}z&&it(f,null,g,"beforeMount");const Y=(!h||h&&!h.pendingBranch)&&R&&!R.persisted;Y&&R.beforeEnter(k),r(k,u,p),((b=I&&I.onVnodeMounted)||Y||z)&&de(()=>{b&&Ie(b,g,f),Y&&R.enter(k),z&&it(f,null,g,"mounted")},h)},G=(f,u,p,g,h)=>{if(p&&A(f,p),g)for(let w=0;w<g.length;w++)A(f,g[w]);if(h){let w=h.subTree;if(u===w){const O=h.vnode;G(f,O,O.scopeId,O.slotScopeIds,h.parent)}}},be=(f,u,p,g,h,w,O,y,k=0)=>{for(let b=k;b<f.length;b++){const N=f[b]=y?qe(f[b]):Te(f[b]);T(null,N,u,p,g,h,w,O,y)}},ge=(f,u,p,g,h,w,O)=>{const y=u.el=f.el;let{patchFlag:k,dynamicChildren:b,dirs:N}=u;k|=f.patchFlag&16;const I=f.props||K,M=u.props||K;let R;p&&ot(p,!1),(R=M.onVnodeBeforeUpdate)&&Ie(R,p,u,f),N&&it(u,f,p,"beforeUpdate"),p&&ot(p,!0);const z=h&&u.type!=="foreignObject";if(b?Le(f.dynamicChildren,b,y,p,g,z,w):O||W(f,u,y,null,p,g,z,w,!1),k>0){if(k&16)Dt(y,u,I,M,p,g,h);else if(k&2&&I.class!==M.class&&i(y,"class",null,M.class,h),k&4&&i(y,"style",I.style,M.style,h),k&8){const Y=u.dynamicProps;for(let H=0;H<Y.length;H++){const te=Y[H],ye=I[te],yt=M[te];(yt!==ye||te==="value")&&i(y,te,ye,yt,h,f.children,p,g,Re)}}k&1&&f.children!==u.children&&d(y,u.children)}else!O&&b==null&&Dt(y,u,I,M,p,g,h);((R=M.onVnodeUpdated)||N)&&de(()=>{R&&Ie(R,p,u,f),N&&it(u,f,p,"updated")},g)},Le=(f,u,p,g,h,w,O)=>{for(let y=0;y<u.length;y++){const k=f[y],b=u[y],N=k.el&&(k.type===Se||!zt(k,b)||k.shapeFlag&70)?m(k.el):p;T(k,b,N,null,g,h,w,O,!0)}},Dt=(f,u,p,g,h,w,O)=>{if(p!==g){if(p!==K)for(const y in p)!Pn(y)&&!(y in g)&&i(f,y,p[y],null,O,u.children,h,w,Re);for(const y in g){if(Pn(y))continue;const k=g[y],b=p[y];k!==b&&y!=="value"&&i(f,y,b,k,O,u.children,h,w,Re)}"value"in g&&i(f,"value",p.value,g.value)}},fn=(f,u,p,g,h,w,O,y,k)=>{const b=u.el=f?f.el:s(""),N=u.anchor=f?f.anchor:s("");let{patchFlag:I,dynamicChildren:M,slotScopeIds:R}=u;R&&(y=y?y.concat(R):R),f==null?(r(b,p,g),r(N,p,g),be(u.children,p,N,h,w,O,y,k)):I>0&&I&64&&M&&f.dynamicChildren?(Le(f.dynamicChildren,M,p,h,w,O,y),(u.key!=null||h&&u===h.subTree)&&Bo(f,u,!0)):W(f,u,p,N,h,w,O,y,k)},cn=(f,u,p,g,h,w,O,y,k)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?h.ctx.activate(u,p,g,O,k):sr(u,p,g,h,w,O,k):Fa(f,u,k)},sr=(f,u,p,g,h,w,O)=>{const y=f.component=kf(f,g,h);if(Io(f)&&(y.ctx.renderer=bt),Af(y),y.asyncDep){if(h&&h.registerDep(y,le),!f.el){const k=y.subTree=ce(ht);E(null,k,u,p)}return}le(y,f,u,p,h,w,O)},Fa=(f,u,p)=>{const g=u.component=f.component;if(Tl(f,u,p))if(g.asyncDep&&!g.asyncResolved){Z(g,u,p);return}else g.next=u,Al(g.update),g.update();else u.el=f.el,g.vnode=u},le=(f,u,p,g,h,w,O)=>{const y=()=>{if(f.isMounted){let{next:N,bu:I,u:M,parent:R,vnode:z}=f,Y=N,H;ot(f,!1),N?(N.el=z.el,Z(f,N,O)):N=z,I&&In(I),(H=N.props&&N.props.onVnodeBeforeUpdate)&&Ie(H,R,N,z),ot(f,!0);const te=ur(f),ye=f.subTree;f.subTree=te,T(ye,te,m(ye.el),dn(ye),f,h,w),N.el=te.el,Y===null&&Nl(f,te.el),M&&de(M,h),(H=N.props&&N.props.onVnodeUpdated)&&de(()=>Ie(H,R,N,z),h)}else{let N;const{el:I,props:M}=u,{bm:R,m:z,parent:Y}=f,H=Tn(u);if(ot(f,!1),R&&In(R),!H&&(N=M&&M.onVnodeBeforeMount)&&Ie(N,Y,u),ot(f,!0),I&&fr){const te=()=>{f.subTree=ur(f),fr(I,f.subTree,f,h,null)};H?u.type.__asyncLoader().then(()=>!f.isUnmounted&&te()):te()}else{const te=f.subTree=ur(f);T(null,te,p,g,f,h,w),u.el=te.el}if(z&&de(z,h),!H&&(N=M&&M.onVnodeMounted)){const te=u;de(()=>Ie(N,Y,te),h)}(u.shapeFlag&256||Y&&Tn(Y.vnode)&&Y.vnode.shapeFlag&256)&&f.a&&de(f.a,h),f.isMounted=!0,u=p=g=null}},k=f.effect=new oa(y,()=>pa(b),f.scope),b=f.update=()=>k.run();b.id=f.uid,ot(f,!0),b()},Z=(f,u,p)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,ff(f,u.props,g,p),df(f,u.children,p),Ft(),qa(),Lt()},W=(f,u,p,g,h,w,O,y,k=!1)=>{const b=f&&f.children,N=f?f.shapeFlag:0,I=u.children,{patchFlag:M,shapeFlag:R}=u;if(M>0){if(M&128){un(b,I,p,g,h,w,O,y,k);return}else if(M&256){rt(b,I,p,g,h,w,O,y,k);return}}R&8?(N&16&&Re(b,h,w),I!==b&&d(p,I)):N&16?R&16?un(b,I,p,g,h,w,O,y,k):Re(b,h,w,!0):(N&8&&d(p,""),R&16&&be(I,p,g,h,w,O,y,k))},rt=(f,u,p,g,h,w,O,y,k)=>{f=f||At,u=u||At;const b=f.length,N=u.length,I=Math.min(b,N);let M;for(M=0;M<I;M++){const R=u[M]=k?qe(u[M]):Te(u[M]);T(f[M],R,p,null,h,w,O,y,k)}b>N?Re(f,h,w,!0,!1,I):be(u,p,g,h,w,O,y,k,I)},un=(f,u,p,g,h,w,O,y,k)=>{let b=0;const N=u.length;let I=f.length-1,M=N-1;for(;b<=I&&b<=M;){const R=f[b],z=u[b]=k?qe(u[b]):Te(u[b]);if(zt(R,z))T(R,z,p,null,h,w,O,y,k);else break;b++}for(;b<=I&&b<=M;){const R=f[I],z=u[M]=k?qe(u[M]):Te(u[M]);if(zt(R,z))T(R,z,p,null,h,w,O,y,k);else break;I--,M--}if(b>I){if(b<=M){const R=M+1,z=R<N?u[R].el:g;for(;b<=M;)T(null,u[b]=k?qe(u[b]):Te(u[b]),p,z,h,w,O,y,k),b++}}else if(b>M)for(;b<=I;)Ce(f[b],h,w,!0),b++;else{const R=b,z=b,Y=new Map;for(b=z;b<=M;b++){const pe=u[b]=k?qe(u[b]):Te(u[b]);pe.key!=null&&Y.set(pe.key,b)}let H,te=0;const ye=M-z+1;let yt=!1,Da=0;const jt=new Array(ye);for(b=0;b<ye;b++)jt[b]=0;for(b=R;b<=I;b++){const pe=f[b];if(te>=ye){Ce(pe,h,w,!0);continue}let Pe;if(pe.key!=null)Pe=Y.get(pe.key);else for(H=z;H<=M;H++)if(jt[H-z]===0&&zt(pe,u[H])){Pe=H;break}Pe===void 0?Ce(pe,h,w,!0):(jt[Pe-z]=b+1,Pe>=Da?Da=Pe:yt=!0,T(pe,u[Pe],p,null,h,w,O,y,k),te++)}const ja=yt?hf(jt):At;for(H=ja.length-1,b=ye-1;b>=0;b--){const pe=z+b,Pe=u[pe],za=pe+1<N?u[pe+1].el:g;jt[b]===0?T(null,Pe,p,za,h,w,O,y,k):yt&&(H<0||b!==ja[H]?at(Pe,p,za,2):H--)}}},at=(f,u,p,g,h=null)=>{const{el:w,type:O,transition:y,children:k,shapeFlag:b}=f;if(b&6){at(f.component.subTree,u,p,g);return}if(b&128){f.suspense.move(u,p,g);return}if(b&64){O.move(f,u,p,bt);return}if(O===Se){r(w,u,p);for(let I=0;I<k.length;I++)at(k[I],u,p,g);r(f.anchor,u,p);return}if(O===mr){C(f,u,p);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(w),r(w,u,p),de(()=>y.enter(w),h);else{const{leave:I,delayLeave:M,afterLeave:R}=y,z=()=>r(w,u,p),Y=()=>{I(w,()=>{z(),R&&R()})};M?M(w,z,Y):Y()}else r(w,u,p)},Ce=(f,u,p,g=!1,h=!1)=>{const{type:w,props:O,ref:y,children:k,dynamicChildren:b,shapeFlag:N,patchFlag:I,dirs:M}=f;if(y!=null&&Lr(y,null,p,f,!0),N&256){u.ctx.deactivate(f);return}const R=N&1&&M,z=!Tn(f);let Y;if(z&&(Y=O&&O.onVnodeBeforeUnmount)&&Ie(Y,u,f),N&6)Os(f.component,p,g);else{if(N&128){f.suspense.unmount(p,g);return}R&&it(f,null,u,"beforeUnmount"),N&64?f.type.remove(f,u,p,h,bt,g):b&&(w!==Se||I>0&&I&64)?Re(b,u,p,!1,!0):(w===Se&&I&384||!h&&N&16)&&Re(k,u,p),g&&La(f)}(z&&(Y=O&&O.onVnodeUnmounted)||R)&&de(()=>{Y&&Ie(Y,u,f),R&&it(f,null,u,"unmounted")},p)},La=f=>{const{type:u,el:p,anchor:g,transition:h}=f;if(u===Se){Es(p,g);return}if(u===mr){_(f);return}const w=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:O,delayLeave:y}=h,k=()=>O(p,w);y?y(f.el,w,k):k()}else w()},Es=(f,u)=>{let p;for(;f!==u;)p=v(f),a(f),f=p;a(u)},Os=(f,u,p)=>{const{bum:g,scope:h,update:w,subTree:O,um:y}=f;g&&In(g),h.stop(),w&&(w.active=!1,Ce(O,f,u,p)),y&&de(y,u),de(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Re=(f,u,p,g=!1,h=!1,w=0)=>{for(let O=w;O<f.length;O++)Ce(f[O],u,p,g,h)},dn=f=>f.shapeFlag&6?dn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Ra=(f,u,p)=>{f==null?u._vnode&&Ce(u._vnode,null,null,!0):T(u._vnode||null,f,u,null,null,null,p),qa(),ko(),u._vnode=f},bt={p:T,um:Ce,m:at,r:La,mt:sr,mc:be,pc:W,pbc:Le,n:dn,o:e};let lr,fr;return t&&([lr,fr]=t(bt)),{render:Ra,hydrate:lr,createApp:of(Ra,lr)}}function ot({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Bo(e,t,n=!1){const r=e.children,a=t.children;if(L(r)&&L(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=qe(a[i]),s.el=o.el),n||Bo(o,s)),s.type===er&&(s.el=o.el)}}function hf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const gf=e=>e.__isTeleport,Se=Symbol.for("v-fgt"),er=Symbol.for("v-txt"),ht=Symbol.for("v-cmt"),mr=Symbol.for("v-stc"),Yt=[];let ke=null;function De(e=!1){Yt.push(ke=e?null:[])}function vf(){Yt.pop(),ke=Yt[Yt.length-1]||null}let Zt=1;function si(e){Zt+=e}function Uo(e){return e.dynamicChildren=Zt>0?ke||At:null,vf(),Zt>0&&ke&&ke.push(e),e}function Ve(e,t,n,r,a,i){return Uo(Q(e,t,n,r,a,i,!0))}function bf(e,t,n,r,a){return Uo(ce(e,t,n,r,a,!0))}function Rr(e){return e?e.__v_isVNode===!0:!1}function zt(e,t){return e.type===t.type&&e.key===t.key}const tr="__vInternal",Ho=({key:e})=>e??null,Mn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ne(e)||se(e)||D(e)?{i:ve,r:e,k:t,f:!!n}:e:null);function Q(e,t=null,n=null,r=0,a=null,i=e===Se?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ho(t),ref:t&&Mn(t),scopeId:Oo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:ve};return s?(va(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ne(n)?8:16),Zt>0&&!o&&ke&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ke.push(l),l}const ce=yf;function yf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===ql)&&(e=ht),Rr(e)){const s=St(e,t,!0);return n&&va(s,n),Zt>0&&!i&&ke&&(s.shapeFlag&6?ke[ke.indexOf(e)]=s:ke.push(s)),s.patchFlag|=-2,s}if(If(e)&&(e=e.__vccOpts),t){t=xf(t);let{class:s,style:l}=t;s&&!ne(s)&&(t.class=qn(s)),J(l)&&(go(l)&&!L(l)&&(l=ae({},l)),t.style=aa(l))}const o=ne(e)?1:Ml(e)?128:gf(e)?64:J(e)?4:D(e)?2:0;return Q(e,t,n,r,a,o,i,!0)}function xf(e){return e?go(e)||tr in e?ae({},e):e:null}function St(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Dr(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Ho(s),ref:t&&t.ref?n&&a?L(a)?a.concat(Mn(t)):[a,Mn(t)]:Mn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Se?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&St(e.ssContent),ssFallback:e.ssFallback&&St(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Wo(e=" ",t=0){return ce(er,null,e,t)}function $t(e="",t=!1){return t?(De(),bf(ht,null,e)):ce(ht,null,e)}function Te(e){return e==null||typeof e=="boolean"?ce(ht):L(e)?ce(Se,null,e.slice()):typeof e=="object"?qe(e):ce(er,null,String(e))}function qe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:St(e)}function va(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(L(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),va(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(tr in t)?t._ctx=ve:a===3&&ve&&(ve.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else D(t)?(t={default:t,_ctx:ve},n=32):(t=String(t),r&64?(n=16,t=[Wo(t)]):n=8);e.children=t,e.shapeFlag|=n}function Dr(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=qn([t.class,r.class]));else if(a==="style")t.style=aa([t.style,r.style]);else if(Yn(a)){const i=t[a],o=r[a];o&&i!==o&&!(L(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ie(e,t,n,r=null){Oe(e,t,7,[n,r])}const wf=Lo();let _f=0;function kf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||wf,i={uid:_f++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new zs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Do(r,a),emitsOptions:Eo(r,a),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Cl.bind(null,i),e.ce&&e.ce(i),i}let ie=null,ba,xt,li="__VUE_INSTANCE_SETTERS__";(xt=Er()[li])||(xt=Er()[li]=[]),xt.push(e=>ie=e),ba=e=>{xt.length>1?xt.forEach(t=>t(e)):xt[0](e)};const Tt=e=>{ba(e),e.scope.on()},pt=()=>{ie&&ie.scope.off(),ba(null)};function Yo(e){return e.vnode.shapeFlag&4}let Qt=!1;function Af(e,t=!1){Qt=t;const{props:n,children:r}=e.vnode,a=Yo(e);lf(e,n,a,t),uf(e,r);const i=a?Ef(e,t):void 0;return Qt=!1,i}function Ef(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=vo(new Proxy(e.ctx,Zl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Cf(e):null;Tt(e),Ft();const i=Ge(r,e,0,[e.props,a]);if(Lt(),pt(),Qi(i)){if(i.then(pt,pt),t)return i.then(o=>{fi(e,o,t)}).catch(o=>{Gn(o,e,0)});e.asyncDep=i}else fi(e,i,t)}else Ko(e,t)}function fi(e,t,n){D(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:J(t)&&(e.setupState=xo(t)),Ko(e,n)}let ci;function Ko(e,t,n){const r=e.type;if(!e.render){if(!t&&ci&&!r.render){const a=r.template||ha(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ae(ae({isCustomElement:i,delimiters:s},o),l);r.render=ci(a,c)}}e.render=r.render||Ee}Tt(e),Ft(),Ql(e),Lt(),pt()}function Of(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return me(e,"get","$attrs"),t[n]}}))}function Cf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Of(e)},slots:e.slots,emit:e.emit,expose:t}}function nr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(xo(vo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Wt)return Wt[n](e)},has(t,n){return n in t||n in Wt}}))}function Pf(e,t=!0){return D(e)?e.displayName||e.name:e.name||t&&e.__name}function If(e){return D(e)&&"__vccOpts"in e}const st=(e,t)=>xl(e,t,Qt);function Sf(e,t,n){const r=arguments.length;return r===2?J(t)&&!L(t)?Rr(t)?ce(e,null,[t]):ce(e,t):ce(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Rr(n)&&(n=[n]),ce(e,t,n))}const Tf=Symbol.for("v-scx"),Nf=()=>Nn(Tf),Mf="3.3.4",Ff="http://www.w3.org/2000/svg",ft=typeof document<"u"?document:null,ui=ft&&ft.createElement("template"),Lf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?ft.createElementNS(Ff,e):ft.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ft.createTextNode(e),createComment:e=>ft.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ft.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ui.innerHTML=r?`<svg>${e}</svg>`:e;const s=ui.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Rf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Df(e,t,n){const r=e.style,a=ne(n);if(n&&!a){if(t&&!ne(t))for(const i in t)n[i]==null&&jr(r,i,"");for(const i in n)jr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const di=/\s*!important$/;function jr(e,t,n){if(L(n))n.forEach(r=>jr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=jf(e,t);di.test(n)?e.setProperty(Mt(r),n.replace(di,""),"important"):e[r]=n}}const mi=["Webkit","Moz","ms"],pr={};function jf(e,t){const n=pr[t];if(n)return n;let r=Fe(t);if(r!=="filter"&&r in e)return pr[t]=r;r=Xn(r);for(let a=0;a<mi.length;a++){const i=mi[a]+r;if(i in e)return pr[t]=i}return t}const pi="http://www.w3.org/1999/xlink";function zf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(pi,t.slice(6,t.length)):e.setAttributeNS(pi,t,n);else{const i=js(t);n==null||i&&!no(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function $f(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=no(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function wt(e,t,n,r){e.addEventListener(t,n,r)}function Bf(e,t,n,r){e.removeEventListener(t,n,r)}function Uf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Hf(t);if(r){const c=i[t]=Kf(r,a);wt(e,s,c,l)}else o&&(Bf(e,s,o,l),i[t]=void 0)}}const hi=/(?:Once|Passive|Capture)$/;function Hf(e){let t;if(hi.test(e)){t={};let r;for(;r=e.match(hi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Mt(e.slice(2)),t]}let hr=0;const Wf=Promise.resolve(),Yf=()=>hr||(Wf.then(()=>hr=0),hr=Date.now());function Kf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Oe(Vf(r,n.value),t,5,[r])};return n.value=e,n.attached=Yf(),n}function Vf(e,t){if(L(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const gi=/^on[a-z]/,Xf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Rf(e,r,a):t==="style"?Df(e,n,r):Yn(t)?ea(t)||Uf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):qf(e,t,r,a))?$f(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),zf(e,t,r,a))};function qf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&gi.test(t)&&D(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||gi.test(t)&&ne(n)?!1:t in e}const vi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return L(t)?n=>In(t,n):t};function Jf(e){e.target.composing=!0}function bi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const yi={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=vi(a);const i=r||a.props&&a.props.type==="number";wt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=Ar(s)),e._assign(s)}),n&&wt(e,"change",()=>{e.value=e.value.trim()}),t||(wt(e,"compositionstart",Jf),wt(e,"compositionend",bi),wt(e,"change",bi))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=vi(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&Ar(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},Gf=ae({patchProp:Xf},Lf);let xi;function Zf(){return xi||(xi=mf(Gf))}const Qf=(...e)=>{const t=Zf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=ec(r);if(!a)return;const i=t._component;!D(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function ec(e){return ne(e)?document.querySelector(e):e}const tc=(e,t)=>t.some(n=>e instanceof n);let wi,_i;function nc(){return wi||(wi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rc(){return _i||(_i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vo=new WeakMap,zr=new WeakMap,Xo=new WeakMap,gr=new WeakMap,ya=new WeakMap;function ac(e){const t=new Promise((n,r)=>{const a=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Ze(e.result)),a()},o=()=>{r(e.error),a()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Vo.set(n,e)}).catch(()=>{}),ya.set(t,e),t}function ic(e){if(zr.has(e))return;const t=new Promise((n,r)=>{const a=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),a()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});zr.set(e,t)}let $r={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return zr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Xo.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ze(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function oc(e){$r=e($r)}function sc(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(vr(this),t,...n);return Xo.set(r,t.sort?t.sort():[t]),Ze(r)}:rc().includes(e)?function(...t){return e.apply(vr(this),t),Ze(Vo.get(this))}:function(...t){return Ze(e.apply(vr(this),t))}}function lc(e){return typeof e=="function"?sc(e):(e instanceof IDBTransaction&&ic(e),tc(e,nc())?new Proxy(e,$r):e)}function Ze(e){if(e instanceof IDBRequest)return ac(e);if(gr.has(e))return gr.get(e);const t=lc(e);return t!==e&&(gr.set(e,t),ya.set(t,e)),t}const vr=e=>ya.get(e);function fc(e,t,{blocked:n,upgrade:r,blocking:a,terminated:i}={}){const o=indexedDB.open(e,t),s=Ze(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ze(o.result),l.oldVersion,l.newVersion,Ze(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),s.then(l=>{i&&l.addEventListener("close",()=>i()),a&&l.addEventListener("versionchange",c=>a(c.oldVersion,c.newVersion,c))}).catch(()=>{}),s}const cc=["get","getKey","getAll","getAllKeys","count"],uc=["put","add","delete","clear"],br=new Map;function ki(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(br.get(t))return br.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,a=uc.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(a||cc.includes(n)))return;const i=async function(o,...s){const l=this.transaction(o,a?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(s.shift())),(await Promise.all([c[n](...s),a&&l.done]))[0]};return br.set(t,i),i}oc(e=>({...e,get:(t,n,r)=>ki(t,n)||e.get(t,n,r),has:(t,n)=>!!ki(t,n)||e.has(t,n)}));function xa(){return new Promise((e,t)=>{const n=fc("noteDB",1,{upgrade(r){r.createObjectStore("note",{keyPath:"id",autoIncrement:!0}).createIndex("strengthIndex","strength")}});e(n)})}async function dc(e,t){new Date().getTime();const r=await xa();r.add("note",{title:e,description:t}),await r.transaction("note").store.openCursor()}async function Ai(){return await(await xa()).getAll("note")}async function mc(e,t,n){await(await xa()).put("note",{id:e,title:t,description:n})}const pc={class:"h-screen flex flex-col w-full dark:bg-zinc-900"},hc={class:"flex justify-center"},gc={class:"container shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] hover:shadow-[0_7px_15px_1px_rgba(0,0,0,0.5)] p-2 rounded-md dark:bg-zinc-900 mb-2"},vc={key:0,class:""},bc={class:""},yc={class:"grid xl:grid-cols-9 xl:gap-4 md:grid-cols-5 md:gap-3 ph:grid-cols-2 ph:gap-2 dark:bg-zinc-900"},xc=["onClick"],wc={class:"font-normal text-center dark:bg-zinc-900"},_c={key:0,class:"items-baseline place-self-end"},kc=Q("button",null,"Criar Nota",-1),Ac=[kc],Ec={key:0,class:"fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50 overscroll-none"},Oc={class:"relative wx-auto max-w-2xl w-96 max-h-full my-20"},Cc={class:"bg-white dark:bg-zinc-900 w-full rounded shadow-2xl flex flex-col pt-0 pb-4 px-4"},Pc={class:"place-self-end"},Ic=["value"],Sc=["value"],Tc={class:"items-baseline place-self-end"},Nc={key:0,class:"{ buttonSave }"},Mc={class:"rounded-full hover:bg-gray-100 p-1 w-[30px] m-3 mb-5 h-30px"},Fc={key:1,class:"absolute z-40 inset-0 opacity-25 bg-black overscroll-none"},Lc={__name:"App",setup(e){const t=xe(""),n=xe(""),r=xe([]),a=xe(!1),i=xe([]),o=xe([]),s=xe(!1),l=xe(!1),c=xe(!1),d=xe(window.innerWidth),m=xe(!1);function v(){console.log(d.value),d.value<500?(m.value=!0,console.log("largura da tela",d.value)):(m.value=!1,console.log("largura da tela >500",d.value)),console.log("toggleWidth",m)}const A=()=>{r.value[1]!=i.value[1]||r.value[2]!=i.value[2]?(setTimeout(()=>{l.value=!0},150),c.value=!0):(l.value=!1,c.value=!1)},j=x=>{const C=o.value.length;for(let _=0;_<C;_++)if(o.value[_][0].id===x){r.value="";const q=o.value[_][0].title,G=o.value[_][0].description;r.value=[x,q,G],i.value=[x,q,G],a.value=!0}};async function T(){o.value=[];const x=[await Ai()],C=x[0].length;for(let _=0;C>_;_++){const F=x[0][_].title,q=x[0][_].description,G=x[0][_].id;o.value.push([{title:F,description:q,id:G}])}}async function $(x){const C=t.value,_=n.value;await dc(C,_);const F=[await Ai()],q=F[0].length-1,G=F[0][q].id;o.value.push([{title:C,description:_,id:G}]),t.value="",n.value="",s.value=!1}const E=()=>{const x=r.value[0],C=r.value[1],_=r.value[2];mc(x,C,_),T(),a.value=!1};return To(T(),v()),(x,C)=>{const _=Xl("font-awesome-icon");return De(),Ve("section",pc,[Q("div",hc,[Q("div",gc,[Ga(Q("input",{onClick:C[0]||(C[0]=F=>s.value=!0),id:"title",type:"text","onUpdate:modelValue":C[1]||(C[1]=F=>t.value=F),placeholder:"Título",class:"break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900"},null,512),[[yi,t.value]]),s.value?(De(),Ve("div",vc,[Ga(Q("input",{id:"description",type:"text","onUpdate:modelValue":C[2]||(C[2]=F=>n.value=F),placeholder:"Escreva uma nota",class:"break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900"},null,512),[[yi,n.value]]),Q("button",{id:"btnsave",onClick:C[3]||(C[3]=F=>$(x.index)),class:"bg-blue-500 hover:bg-blue-700 text-white-950 font-bold py-2 px-4 rounded"},"Salvar")])):$t("",!0)])]),Q("div",bc,[Q("div",yc,[(De(!0),Ve(Se,null,Gl(o.value,F=>(De(),Ve("div",{class:"container shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] p-2 rounded-md mt-2 content-start break-words font-semibold hover:shadow-[0_7px_15px_1px_rgba(0,0,0,0.5)] dark:bg-zinc-900",key:F,onClick:q=>(j(F[0].id),s.value=!1)},[Wo(Ba(F[0].title)+" ",1),Q("p",wc,Ba(F[0].description),1)],8,xc))),128))])]),v?(De(),Ve("div",_c,Ac)):$t("",!0),Q("div",null,[a.value?(De(),Ve("div",Ec,[Q("div",Oc,[Q("div",Cc,[Q("div",Pc,[Q("button",{class:"rounded-full hover:bg-gray-100 p-1 w-[30px] h-30px",onClick:C[4]||(C[4]=F=>a.value=!1)},[ce(_,{icon:"fa-solid fa-xmark",style:{color:"#707070"}})])]),Q("input",Dr(A(),{value:r.value[1],onInput:C[5]||(C[5]=F=>r.value[1]=F.target.value),class:"text-2xl font-bold focus:outline-none dark:bg-zinc-900"}),null,16,Ic),Q("input",Dr(A(),{value:r.value[2],onInput:C[6]||(C[6]=F=>r.value[2]=F.target.value),class:"overflow-auto focus:outline-none dark:bg-zinc-900"}),null,16,Sc),Q("div",Tc,[l.value?(De(),Ve("span",Nc,[Q("button",{id:"buttonSave",class:"rounded-full hover:bg-gray-100 text-gray px-2 my-0 py-0 w-12/12 mx-3",onClick:E},"Save")])):$t("",!0),Q("div",{class:qn({shake:c.value})},[Q("span",Mc,[ce(_,{icon:"fa-solid fa-trash",style:{color:"#707070"}})])],2)])])])])):$t("",!0),a.value?(De(),Ve("div",Fc)):$t("",!0)])])}}};function Ei(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ei(Object(n),!0).forEach(function(r){re(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ei(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Bn(e){"@babel/helpers - typeof";return Bn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bn(e)}function Rc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Oi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Dc(e,t,n){return t&&Oi(e.prototype,t),n&&Oi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wa(e,t){return zc(e)||Bc(e,t)||qo(e,t)||Hc()}function on(e){return jc(e)||$c(e)||qo(e)||Uc()}function jc(e){if(Array.isArray(e))return Br(e)}function zc(e){if(Array.isArray(e))return e}function $c(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Bc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function qo(e,t){if(e){if(typeof e=="string")return Br(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Br(e,t)}}function Br(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Uc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ci=function(){},_a={},Jo={},Go=null,Zo={mark:Ci,measure:Ci};try{typeof window<"u"&&(_a=window),typeof document<"u"&&(Jo=document),typeof MutationObserver<"u"&&(Go=MutationObserver),typeof performance<"u"&&(Zo=performance)}catch{}var Wc=_a.navigator||{},Pi=Wc.userAgent,Ii=Pi===void 0?"":Pi,et=_a,X=Jo,Si=Go,yn=Zo;et.document;var Ye=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",Qo=~Ii.indexOf("MSIE")||~Ii.indexOf("Trident/"),xn,wn,_n,kn,An,Be="___FONT_AWESOME___",Ur=16,es="fa",ts="svg-inline--fa",gt="data-fa-i2svg",Hr="data-fa-pseudo-element",Yc="data-fa-pseudo-element-pending",ka="data-prefix",Aa="data-icon",Ti="fontawesome-i2svg",Kc="async",Vc=["HTML","HEAD","STYLE","SCRIPT"],ns=function(){try{return!0}catch{return!1}}(),V="classic",ee="sharp",Ea=[V,ee];function sn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[V]}})}var en=sn((xn={},re(xn,V,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),re(xn,ee,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),xn)),tn=sn((wn={},re(wn,V,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),re(wn,ee,{solid:"fass",regular:"fasr",light:"fasl"}),wn)),nn=sn((_n={},re(_n,V,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),re(_n,ee,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),_n)),Xc=sn((kn={},re(kn,V,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),re(kn,ee,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),kn)),qc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,rs="fa-layers-text",Jc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Gc=sn((An={},re(An,V,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),re(An,ee,{900:"fass",400:"fasr",300:"fasl"}),An)),as=[1,2,3,4,5,6,7,8,9,10],Zc=as.concat([11,12,13,14,15,16,17,18,19,20]),Qc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ut={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},rn=new Set;Object.keys(tn[V]).map(rn.add.bind(rn));Object.keys(tn[ee]).map(rn.add.bind(rn));var eu=[].concat(Ea,on(rn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ut.GROUP,ut.SWAP_OPACITY,ut.PRIMARY,ut.SECONDARY]).concat(as.map(function(e){return"".concat(e,"x")})).concat(Zc.map(function(e){return"w-".concat(e)})),Kt=et.FontAwesomeConfig||{};function tu(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function nu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var ru=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ru.forEach(function(e){var t=wa(e,2),n=t[0],r=t[1],a=nu(tu(n));a!=null&&(Kt[r]=a)})}var is={styleDefault:"solid",familyDefault:"classic",cssPrefix:es,replacementClass:ts,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Kt.familyPrefix&&(Kt.cssPrefix=Kt.familyPrefix);var Nt=P(P({},is),Kt);Nt.autoReplaceSvg||(Nt.observeMutations=!1);var S={};Object.keys(is).forEach(function(e){Object.defineProperty(S,e,{enumerable:!0,set:function(n){Nt[e]=n,Vt.forEach(function(r){return r(S)})},get:function(){return Nt[e]}})});Object.defineProperty(S,"familyPrefix",{enumerable:!0,set:function(t){Nt.cssPrefix=t,Vt.forEach(function(n){return n(S)})},get:function(){return Nt.cssPrefix}});et.FontAwesomeConfig=S;var Vt=[];function au(e){return Vt.push(e),function(){Vt.splice(Vt.indexOf(e),1)}}var Xe=Ur,Me={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function iu(e){if(!(!e||!Ye)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var ou="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function an(){for(var e=12,t="";e-- >0;)t+=ou[Math.random()*62|0];return t}function Rt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Oa(e){return e.classList?Rt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function os(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function su(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(os(e[n]),'" ')},"").trim()}function rr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ca(e){return e.size!==Me.size||e.x!==Me.x||e.y!==Me.y||e.rotate!==Me.rotate||e.flipX||e.flipY}function lu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function fu(e){var t=e.transform,n=e.width,r=n===void 0?Ur:n,a=e.height,i=a===void 0?Ur:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Qo?l+="translate(".concat(t.x/Xe-r/2,"em, ").concat(t.y/Xe-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Xe,"em), calc(-50% + ").concat(t.y/Xe,"em)) "):l+="translate(".concat(t.x/Xe,"em, ").concat(t.y/Xe,"em) "),l+="scale(".concat(t.size/Xe*(t.flipX?-1:1),", ").concat(t.size/Xe*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var cu=`:root, :host {
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
}`;function ss(){var e=es,t=ts,n=S.cssPrefix,r=S.replacementClass,a=cu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Ni=!1;function yr(){S.autoAddCss&&!Ni&&(iu(ss()),Ni=!0)}var uu={mixout:function(){return{dom:{css:ss,insertCss:yr}}},hooks:function(){return{beforeDOMElementCreation:function(){yr()},beforeI2svg:function(){yr()}}}},Ue=et||{};Ue[Be]||(Ue[Be]={});Ue[Be].styles||(Ue[Be].styles={});Ue[Be].hooks||(Ue[Be].hooks={});Ue[Be].shims||(Ue[Be].shims=[]);var Ae=Ue[Be],ls=[],du=function e(){X.removeEventListener("DOMContentLoaded",e),Un=1,ls.map(function(t){return t()})},Un=!1;Ye&&(Un=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),Un||X.addEventListener("DOMContentLoaded",du));function mu(e){Ye&&(Un?setTimeout(e,0):ls.push(e))}function ln(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?os(e):"<".concat(t," ").concat(su(r),">").concat(i.map(ln).join(""),"</").concat(t,">")}function Mi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var pu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},xr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?pu(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function hu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Wr(e){var t=hu(e);return t.length===1?t[0].toString(16):null}function gu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Fi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Yr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Fi(t);typeof Ae.hooks.addPack=="function"&&!a?Ae.hooks.addPack(e,Fi(t)):Ae.styles[e]=P(P({},Ae.styles[e]||{}),i),e==="fas"&&Yr("fa",t)}var En,On,Cn,_t=Ae.styles,vu=Ae.shims,bu=(En={},re(En,V,Object.values(nn[V])),re(En,ee,Object.values(nn[ee])),En),Pa=null,fs={},cs={},us={},ds={},ms={},yu=(On={},re(On,V,Object.keys(en[V])),re(On,ee,Object.keys(en[ee])),On);function xu(e){return~eu.indexOf(e)}function wu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!xu(a)?a:null}var ps=function(){var t=function(i){return xr(_t,function(o,s,l){return o[l]=xr(s,i,{}),o},{})};fs=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),cs=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),ms=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in _t||S.autoFetchSvg,r=xr(vu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});us=r.names,ds=r.unicodes,Pa=ar(S.styleDefault,{family:S.familyDefault})};au(function(e){Pa=ar(e.styleDefault,{family:S.familyDefault})});ps();function Ia(e,t){return(fs[e]||{})[t]}function _u(e,t){return(cs[e]||{})[t]}function dt(e,t){return(ms[e]||{})[t]}function hs(e){return us[e]||{prefix:null,iconName:null}}function ku(e){var t=ds[e],n=Ia("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function tt(){return Pa}var Sa=function(){return{prefix:null,iconName:null,rest:[]}};function ar(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?V:n,a=en[r][e],i=tn[r][e]||tn[r][a],o=e in Ae.styles?e:null;return i||o||null}var Li=(Cn={},re(Cn,V,Object.keys(nn[V])),re(Cn,ee,Object.keys(nn[ee])),Cn);function ir(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},re(t,V,"".concat(S.cssPrefix,"-").concat(V)),re(t,ee,"".concat(S.cssPrefix,"-").concat(ee)),t),o=null,s=V;(e.includes(i[V])||e.some(function(c){return Li[V].includes(c)}))&&(s=V),(e.includes(i[ee])||e.some(function(c){return Li[ee].includes(c)}))&&(s=ee);var l=e.reduce(function(c,d){var m=wu(S.cssPrefix,d);if(_t[d]?(d=bu[s].includes(d)?Xc[s][d]:d,o=d,c.prefix=d):yu[s].indexOf(d)>-1?(o=d,c.prefix=ar(d,{family:s})):m?c.iconName=m:d!==S.replacementClass&&d!==i[V]&&d!==i[ee]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=o==="fa"?hs(c.iconName):{},A=dt(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||A||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!_t.far&&_t.fas&&!S.autoFetchSvg&&(c.prefix="fas")}return c},Sa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ee&&(_t.fass||S.autoFetchSvg)&&(l.prefix="fass",l.iconName=dt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=tt()||"fas"),l}var Au=function(){function e(){Rc(this,e),this.definitions={}}return Dc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=P(P({},n.definitions[s]||{}),o[s]),Yr(s,o[s]);var l=nn[V][s];l&&Yr(l,o[s]),ps()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),Ri=[],kt={},Pt={},Eu=Object.keys(Pt);function Ou(e,t){var n=t.mixoutsTo;return Ri=e,kt={},Object.keys(Pt).forEach(function(r){Eu.indexOf(r)===-1&&delete Pt[r]}),Ri.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Bn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){kt[o]||(kt[o]=[]),kt[o].push(i[o])})}r.provides&&r.provides(Pt)}),n}function Kr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=kt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function vt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=kt[e]||[];a.forEach(function(i){i.apply(null,n)})}function He(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Pt[e]?Pt[e].apply(null,t):void 0}function Vr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||tt();if(t)return t=dt(n,t)||t,Mi(gs.definitions,n,t)||Mi(Ae.styles,n,t)}var gs=new Au,Cu=function(){S.autoReplaceSvg=!1,S.observeMutations=!1,vt("noAuto")},Pu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ye?(vt("beforeI2svg",t),He("pseudoElements2svg",t),He("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;S.autoReplaceSvg===!1&&(S.autoReplaceSvg=!0),S.observeMutations=!0,mu(function(){Su({autoReplaceSvgRoot:n}),vt("watch",t)})}},Iu={icon:function(t){if(t===null)return null;if(Bn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:dt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ar(t[0]);return{prefix:r,iconName:dt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(S.cssPrefix,"-"))>-1||t.match(qc))){var a=ir(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||tt(),iconName:dt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=tt();return{prefix:i,iconName:dt(i,t)||t}}}},he={noAuto:Cu,config:S,dom:Pu,parse:Iu,library:gs,findIconDefinition:Vr,toHtml:ln},Su=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(Ae.styles).length>0||S.autoFetchSvg)&&Ye&&S.autoReplaceSvg&&he.dom.i2svg({node:r})};function or(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ln(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ye){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Tu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ca(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=rr(P(P({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Nu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(S.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:P(P({},a),{},{id:o}),children:r}]}]}function Ta(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,A=v===void 0?!1:v,j=r.found?r:n,T=j.width,$=j.height,E=a==="fak",x=[S.replacementClass,i?"".concat(S.cssPrefix,"-").concat(i):""].filter(function(ge){return m.classes.indexOf(ge)===-1}).filter(function(ge){return ge!==""||!!ge}).concat(m.classes).join(" "),C={children:[],attributes:P(P({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:x,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(T," ").concat($)})},_=E&&!~m.classes.indexOf("fa-fw")?{width:"".concat(T/$*16*.0625,"em")}:{};A&&(C.attributes[gt]=""),l&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(d||an())},children:[l]}),delete C.attributes.title);var F=P(P({},C),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:P(P({},_),m.styles)}),q=r.found&&n.found?He("generateAbstractMask",F)||{children:[],attributes:{}}:He("generateAbstractIcon",F)||{children:[],attributes:{}},G=q.children,be=q.attributes;return F.children=G,F.attributes=be,s?Nu(F):Tu(F)}function Di(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=P(P(P({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[gt]="");var d=P({},o.styles);Ca(a)&&(d.transform=fu({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=rr(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Mu(e){var t=e.content,n=e.title,r=e.extra,a=P(P(P({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=rr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var wr=Ae.styles;function Xr(e){var t=e[0],n=e[1],r=e.slice(4),a=wa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(S.cssPrefix,"-").concat(ut.GROUP)},children:[{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(ut.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(ut.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Fu={found:!1,width:512,height:512};function Lu(e,t){!ns&&!S.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function qr(e,t){var n=t;return t==="fa"&&S.styleDefault!==null&&(t=tt()),new Promise(function(r,a){if(He("missingIconAbstract"),n==="fa"){var i=hs(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&wr[t]&&wr[t][e]){var o=wr[t][e];return r(Xr(o))}Lu(e,t),r(P(P({},Fu),{},{icon:S.showMissingIcons&&e?He("missingIconAbstract")||{}:{}}))})}var ji=function(){},Jr=S.measurePerformance&&yn&&yn.mark&&yn.measure?yn:{mark:ji,measure:ji},Ht='FA "6.4.0"',Ru=function(t){return Jr.mark("".concat(Ht," ").concat(t," begins")),function(){return vs(t)}},vs=function(t){Jr.mark("".concat(Ht," ").concat(t," ends")),Jr.measure("".concat(Ht," ").concat(t),"".concat(Ht," ").concat(t," begins"),"".concat(Ht," ").concat(t," ends"))},Na={begin:Ru,end:vs},Fn=function(){};function zi(e){var t=e.getAttribute?e.getAttribute(gt):null;return typeof t=="string"}function Du(e){var t=e.getAttribute?e.getAttribute(ka):null,n=e.getAttribute?e.getAttribute(Aa):null;return t&&n}function ju(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(S.replacementClass)}function zu(){if(S.autoReplaceSvg===!0)return Ln.replace;var e=Ln[S.autoReplaceSvg];return e||Ln.replace}function $u(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function Bu(e){return X.createElement(e)}function bs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?$u:Bu:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(bs(o,{ceFn:r}))}),a}function Uu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Ln={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(bs(a),n)}),n.getAttribute(gt)===null&&S.keepOriginalSource){var r=X.createComment(Uu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Oa(n).indexOf(S.replacementClass))return Ln.replace(t);var a=new RegExp("".concat(S.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===S.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return ln(s)}).join(`
`);n.setAttribute(gt,""),n.innerHTML=o}};function $i(e){e()}function ys(e,t){var n=typeof t=="function"?t:Fn;if(e.length===0)n();else{var r=$i;S.mutateApproach===Kc&&(r=et.requestAnimationFrame||$i),r(function(){var a=zu(),i=Na.begin("mutate");e.map(a),i(),n()})}}var Ma=!1;function xs(){Ma=!0}function Gr(){Ma=!1}var Hn=null;function Bi(e){if(Si&&S.observeMutations){var t=e.treeCallback,n=t===void 0?Fn:t,r=e.nodeCallback,a=r===void 0?Fn:r,i=e.pseudoElementsCallback,o=i===void 0?Fn:i,s=e.observeMutationsRoot,l=s===void 0?X:s;Hn=new Si(function(c){if(!Ma){var d=tt();Rt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!zi(m.addedNodes[0])&&(S.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&S.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&zi(m.target)&&~Qc.indexOf(m.attributeName))if(m.attributeName==="class"&&Du(m.target)){var v=ir(Oa(m.target)),A=v.prefix,j=v.iconName;m.target.setAttribute(ka,A||d),j&&m.target.setAttribute(Aa,j)}else ju(m.target)&&a(m.target)})}}),Ye&&Hn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Hu(){Hn&&Hn.disconnect()}function Wu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Yu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=ir(Oa(e));return a.prefix||(a.prefix=tt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=_u(a.prefix,e.innerText)||Ia(a.prefix,Wr(e.innerText))),!a.iconName&&S.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Ku(e){var t=Rt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return S.autoA11y&&(n?t["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(r||an()):(t["aria-hidden"]="true",t.focusable="false")),t}function Vu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Me,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ui(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Yu(e),r=n.iconName,a=n.prefix,i=n.rest,o=Ku(e),s=Kr("parseNodeAttributes",{},e),l=t.styleParser?Wu(e):[];return P({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Me,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Xu=Ae.styles;function ws(e){var t=S.autoReplaceSvg==="nest"?Ui(e,{styleParser:!1}):Ui(e);return~t.extra.classes.indexOf(rs)?He("generateLayersText",e,t):He("generateSvgReplacementMutation",e,t)}var nt=new Set;Ea.map(function(e){nt.add("fa-".concat(e))});Object.keys(en[V]).map(nt.add.bind(nt));Object.keys(en[ee]).map(nt.add.bind(nt));nt=on(nt);function Hi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ye)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(Ti,"-").concat(m))},a=function(m){return n.remove("".concat(Ti,"-").concat(m))},i=S.autoFetchSvg?nt:Ea.map(function(d){return"fa-".concat(d)}).concat(Object.keys(Xu));i.includes("fa")||i.push("fa");var o=[".".concat(rs,":not([").concat(gt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(gt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Rt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Na.begin("onTree"),c=s.reduce(function(d,m){try{var v=ws(m);v&&d.push(v)}catch(A){ns||A.name==="MissingIcon"&&console.error(A)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){ys(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function qu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ws(e).then(function(n){n&&ys([n],t)})}function Ju(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Vr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Vr(a||{})),e(r,P(P({},n),{},{mask:a}))}}var Gu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Me:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,A=n.titleId,j=A===void 0?null:A,T=n.classes,$=T===void 0?[]:T,E=n.attributes,x=E===void 0?{}:E,C=n.styles,_=C===void 0?{}:C;if(t){var F=t.prefix,q=t.iconName,G=t.icon;return or(P({type:"icon"},t),function(){return vt("beforeDOMElementCreation",{iconDefinition:t,params:n}),S.autoA11y&&(v?x["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(j||an()):(x["aria-hidden"]="true",x.focusable="false")),Ta({icons:{main:Xr(G),mask:l?Xr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:F,iconName:q,transform:P(P({},Me),a),symbol:o,title:v,maskId:d,titleId:j,extra:{attributes:x,styles:_,classes:$}})})}},Zu={mixout:function(){return{icon:Ju(Gu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Hi,n.nodeCallback=qu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return Hi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(A,j){Promise.all([qr(a,s),d.iconName?qr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(T){var $=wa(T,2),E=$[0],x=$[1];A([n,Ta({icons:{main:E,mask:x},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(j)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=rr(s);l.length>0&&(a.style=l);var c;return Ca(o)&&(c=He("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Qu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return or({type:"layer"},function(){vt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(S.cssPrefix,"-layers")].concat(on(i)).join(" ")},children:o}]})}}}},ed={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return or({type:"counter",content:n},function(){return vt("beforeDOMElementCreation",{content:n,params:r}),Mu({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(S.cssPrefix,"-layers-counter")].concat(on(s))}})})}}}},td={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Me:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,A=v===void 0?{}:v;return or({type:"text",content:n},function(){return vt("beforeDOMElementCreation",{content:n,params:r}),Di({content:n,transform:P(P({},Me),i),title:s,extra:{attributes:m,styles:A,classes:["".concat(S.cssPrefix,"-layers-text")].concat(on(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Qo){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return S.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Di({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},nd=new RegExp('"',"ug"),Wi=[1105920,1112319];function rd(e){var t=e.replace(nd,""),n=gu(t,0),r=n>=Wi[0]&&n<=Wi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Wr(a?t[0]:t),isSecondary:r||a}}function Yi(e,t){var n="".concat(Yc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Rt(e.children),o=i.filter(function(G){return G.getAttribute(Hr)===t})[0],s=et.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Jc),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?ee:V,A=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?tn[v][l[2].toLowerCase()]:Gc[v][c],j=rd(m),T=j.value,$=j.isSecondary,E=l[0].startsWith("FontAwesome"),x=Ia(A,T),C=x;if(E){var _=ku(T);_.iconName&&_.prefix&&(x=_.iconName,A=_.prefix)}if(x&&!$&&(!o||o.getAttribute(ka)!==A||o.getAttribute(Aa)!==C)){e.setAttribute(n,C),o&&e.removeChild(o);var F=Vu(),q=F.extra;q.attributes[Hr]=t,qr(x,A).then(function(G){var be=Ta(P(P({},F),{},{icons:{main:G,mask:Sa()},prefix:A,iconName:C,extra:q,watchable:!0})),ge=X.createElement("svg");t==="::before"?e.insertBefore(ge,e.firstChild):e.appendChild(ge),ge.outerHTML=be.map(function(Le){return ln(Le)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function ad(e){return Promise.all([Yi(e,"::before"),Yi(e,"::after")])}function id(e){return e.parentNode!==document.head&&!~Vc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Hr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ki(e){if(Ye)return new Promise(function(t,n){var r=Rt(e.querySelectorAll("*")).filter(id).map(ad),a=Na.begin("searchPseudoElements");xs(),Promise.all(r).then(function(){a(),Gr(),t()}).catch(function(){a(),Gr(),n()})})}var od={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ki,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;S.searchPseudoElements&&Ki(a)}}},Vi=!1,sd={mixout:function(){return{dom:{unwatch:function(){xs(),Vi=!0}}}},hooks:function(){return{bootstrap:function(){Bi(Kr("mutationObserverCallbacks",{}))},noAuto:function(){Hu()},watch:function(n){var r=n.observeMutationsRoot;Vi?Gr():Bi(Kr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Xi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},ld={mixout:function(){return{parse:{transform:function(n){return Xi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Xi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},A={outer:s,inner:m,path:v};return{tag:"g",attributes:P({},A.outer),children:[{tag:"g",attributes:P({},A.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:P(P({},r.icon.attributes),A.path)}]}]}}}},_r={x:0,y:0,width:"100%",height:"100%"};function qi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function fd(e){return e.tag==="g"?e.children:[e]}var cd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?ir(a.split(" ").map(function(o){return o.trim()})):Sa();return i.prefix||(i.prefix=tt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,v=o.icon,A=lu({transform:l,containerWidth:m,iconWidth:c}),j={tag:"rect",attributes:P(P({},_r),{},{fill:"white"})},T=d.children?{children:d.children.map(qi)}:{},$={tag:"g",attributes:P({},A.inner),children:[qi(P({tag:d.tag,attributes:P(P({},d.attributes),A.path)},T))]},E={tag:"g",attributes:P({},A.outer),children:[$]},x="mask-".concat(s||an()),C="clip-".concat(s||an()),_={tag:"mask",attributes:P(P({},_r),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[j,E]},F={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:fd(v)},_]};return r.push(F,{tag:"rect",attributes:P({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(x,")")},_r)}),{children:r,attributes:a}}}},ud={provides:function(t){var n=!1;et.matchMedia&&(n=et.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:P(P({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=P(P({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:P(P({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:P(P({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:P(P({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:P(P({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:P(P({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:P(P({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:P(P({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},dd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},md=[uu,Zu,Qu,ed,td,od,sd,ld,cd,ud,dd];Ou(md,{mixoutsTo:he});he.noAuto;he.config;var pd=he.library;he.dom;var Zr=he.parse;he.findIconDefinition;he.toHtml;var hd=he.icon;he.layer;he.text;he.counter;function Ji(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ze(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ji(Object(n),!0).forEach(function(r){ue(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ji(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Wn(e){"@babel/helpers - typeof";return Wn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wn(e)}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gd(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function vd(e,t){if(e==null)return{};var n=gd(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var bd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_s={exports:{}};(function(e){(function(t){var n=function(E,x,C){if(!c(x)||m(x)||v(x)||A(x)||l(x))return x;var _,F=0,q=0;if(d(x))for(_=[],q=x.length;F<q;F++)_.push(n(E,x[F],C));else{_={};for(var G in x)Object.prototype.hasOwnProperty.call(x,G)&&(_[E(G,C)]=n(E,x[G],C))}return _},r=function(E,x){x=x||{};var C=x.separator||"_",_=x.split||/(?=[A-Z])/;return E.split(_).join(C)},a=function(E){return j(E)?E:(E=E.replace(/[\-_\s]+(.)?/g,function(x,C){return C?C.toUpperCase():""}),E.substr(0,1).toLowerCase()+E.substr(1))},i=function(E){var x=a(E);return x.substr(0,1).toUpperCase()+x.substr(1)},o=function(E,x){return r(E,x).toLowerCase()},s=Object.prototype.toString,l=function(E){return typeof E=="function"},c=function(E){return E===Object(E)},d=function(E){return s.call(E)=="[object Array]"},m=function(E){return s.call(E)=="[object Date]"},v=function(E){return s.call(E)=="[object RegExp]"},A=function(E){return s.call(E)=="[object Boolean]"},j=function(E){return E=E-0,E===E},T=function(E,x){var C=x&&"process"in x?x.process:x;return typeof C!="function"?E:function(_,F){return C(_,E,F)}},$={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(E,x){return n(T(a,x),E)},decamelizeKeys:function(E,x){return n(T(o,x),E,x)},pascalizeKeys:function(E,x){return n(T(i,x),E)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=$:t.humps=$})(bd)})(_s);var yd=_s.exports,xd=["class","style"];function wd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=yd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function _d(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ks(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ks(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=_d(d);break;case"style":l.style=wd(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=vd(n,xd);return Sf(e.tag,ze(ze(ze({},t),{},{class:a.class,style:ze(ze({},a.style),o)},a.attrs),s),r)}var As=!1;try{As=!0}catch{}function kd(){if(!As&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function kr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ue({},e,t):{}}function Ad(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ue(t,"fa-".concat(e.size),e.size!==null),ue(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ue(t,"fa-pull-".concat(e.pull),e.pull!==null),ue(t,"fa-swap-opacity",e.swapOpacity),ue(t,"fa-bounce",e.bounce),ue(t,"fa-shake",e.shake),ue(t,"fa-beat",e.beat),ue(t,"fa-fade",e.fade),ue(t,"fa-beat-fade",e.beatFade),ue(t,"fa-flash",e.flash),ue(t,"fa-spin-pulse",e.spinPulse),ue(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Gi(e){if(e&&Wn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Zr.icon)return Zr.icon(e);if(e===null)return null;if(Wn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Ed=Rl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=st(function(){return Gi(t.icon)}),i=st(function(){return kr("classes",Ad(t))}),o=st(function(){return kr("transform",typeof t.transform=="string"?Zr.transform(t.transform):t.transform)}),s=st(function(){return kr("mask",Gi(t.mask))}),l=st(function(){return hd(a.value,ze(ze(ze(ze({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Sn(l,function(d){if(!d)return kd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=st(function(){return l.value?ks(l.value.abstract[0],{},r):null});return function(){return c.value}}}),Od={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},Cd={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},Pd={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]};pd.add(Cd,Pd,Od);Qf(Lc).component("font-awesome-icon",Ed).mount("#app");
