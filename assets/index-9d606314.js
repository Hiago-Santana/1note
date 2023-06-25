(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function sa(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Q={},Tt=[],Fe=()=>{},Ps=()=>!1,Is=/^on[^a-z]/,Zn=e=>Is.test(e),la=e=>e.startsWith("onUpdate:"),ce=Object.assign,fa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ss=Object.prototype.hasOwnProperty,W=(e,t)=>Ss.call(e,t),F=Array.isArray,Nt=e=>Qn(e)==="[object Map]",to=e=>Qn(e)==="[object Set]",j=e=>typeof e=="function",le=e=>typeof e=="string",ca=e=>typeof e=="symbol",ne=e=>e!==null&&typeof e=="object",no=e=>ne(e)&&j(e.then)&&j(e.catch),ro=Object.prototype.toString,Qn=e=>ro.call(e),Ts=e=>Qn(e).slice(8,-1),ao=e=>Qn(e)==="[object Object]",ua=e=>le(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ln=sa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),er=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ns=/-(\w)/g,We=er(e=>e.replace(Ns,(t,n)=>n?n.toUpperCase():"")),Ms=/\B([A-Z])/g,$t=er(e=>e.replace(Ms,"-$1").toLowerCase()),tr=er(e=>e.charAt(0).toUpperCase()+e.slice(1)),vr=er(e=>e?`on${tr(e)}`:""),Qt=(e,t)=>!Object.is(e,t),Fn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Hn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Nr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ka;const Mr=()=>Ka||(Ka=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function da(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=le(r)?Ds(r):da(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(le(e))return e;if(ne(e))return e}}const Ls=/;(?![^(]*\))/g,Fs=/:([^]+)/,Rs=/\/\*[^]*?\*\//g;function Ds(e){const t={};return e.replace(Rs,"").split(Ls).forEach(n=>{if(n){const r=n.split(Fs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ma(e){let t="";if(le(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=ma(e[n]);r&&(t+=r+" ")}else if(ne(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const zs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",js=sa(zs);function io(e){return!!e||e===""}const gn=e=>le(e)?e:e==null?"":F(e)||ne(e)&&(e.toString===ro||!j(e.toString))?JSON.stringify(e,oo,2):String(e),oo=(e,t)=>t&&t.__v_isRef?oo(e,t.value):Nt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:to(t)?{[`Set(${t.size})`]:[...t.values()]}:ne(t)&&!F(t)&&!ao(t)?String(t):t;let Se;class $s{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Se,!t&&Se&&(this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Se;try{return Se=this,t()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Bs(e,t=Se){t&&t.active&&t.effects.push(e)}function Us(){return Se}const pa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},so=e=>(e.w&st)>0,lo=e=>(e.n&st)>0,Hs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=st},Ws=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];so(a)&&!lo(a)?a.delete(e):t[n++]=a,a.w&=~st,a.n&=~st}t.length=n}},Lr=new WeakMap;let Kt=0,st=1;const Fr=30;let Ne;const xt=Symbol(""),Rr=Symbol("");class ha{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Bs(this,r)}run(){if(!this.active)return this.fn();let t=Ne,n=at;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ne,Ne=this,at=!0,st=1<<++Kt,Kt<=Fr?Hs(this):Va(this),this.fn()}finally{Kt<=Fr&&Ws(this),st=1<<--Kt,Ne=this.parent,at=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ne===this?this.deferStop=!0:this.active&&(Va(this),this.onStop&&this.onStop(),this.active=!1)}}function Va(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let at=!0;const fo=[];function Bt(){fo.push(at),at=!1}function Ut(){const e=fo.pop();at=e===void 0?!0:e}function _e(e,t,n){if(at&&Ne){let r=Lr.get(e);r||Lr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=pa()),co(a)}}function co(e,t){let n=!1;Kt<=Fr?lo(e)||(e.n|=st,n=!so(e)):n=!e.has(Ne),n&&(e.add(Ne),Ne.deps.push(e))}function Xe(e,t,n,r,a,i){const o=Lr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&F(e)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":F(e)?ua(n)&&s.push(o.get("length")):(s.push(o.get(xt)),Nt(e)&&s.push(o.get(Rr)));break;case"delete":F(e)||(s.push(o.get(xt)),Nt(e)&&s.push(o.get(Rr)));break;case"set":Nt(e)&&s.push(o.get(xt));break}if(s.length===1)s[0]&&Dr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Dr(pa(l))}}function Dr(e,t){const n=F(e)?e:[...e];for(const r of n)r.computed&&Xa(r);for(const r of n)r.computed||Xa(r)}function Xa(e,t){(e!==Ne||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Ys=sa("__proto__,__v_isRef,__isVue"),uo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ca)),Ks=ga(),Vs=ga(!1,!0),Xs=ga(!0),qa=qs();function qs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=V(this);for(let i=0,o=this.length;i<o;i++)_e(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(V)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Bt();const r=V(this)[t].apply(this,n);return Ut(),r}}),e}function Js(e){const t=V(this);return _e(t,"has",e),t.hasOwnProperty(e)}function ga(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?dl:vo:t?go:ho).get(r))return r;const o=F(r);if(!e){if(o&&W(qa,a))return Reflect.get(qa,a,i);if(a==="hasOwnProperty")return Js}const s=Reflect.get(r,a,i);return(ca(a)?uo.has(a):Ys(a))||(e||_e(r,"get",a),t)?s:ge(s)?o&&ua(a)?s:s.value:ne(s)?e?bo(s):ya(s):s}}const Gs=mo(),Zs=mo(!0);function mo(e=!1){return function(n,r,a,i){let o=n[r];if(Rt(o)&&ge(o)&&!ge(a))return!1;if(!e&&(!Wn(a)&&!Rt(a)&&(o=V(o),a=V(a)),!F(n)&&ge(o)&&!ge(a)))return o.value=a,!0;const s=F(n)&&ua(r)?Number(r)<n.length:W(n,r),l=Reflect.set(n,r,a,i);return n===V(i)&&(s?Qt(a,o)&&Xe(n,"set",r,a):Xe(n,"add",r,a)),l}}function Qs(e,t){const n=W(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Xe(e,"delete",t,void 0),r}function el(e,t){const n=Reflect.has(e,t);return(!ca(t)||!uo.has(t))&&_e(e,"has",t),n}function tl(e){return _e(e,"iterate",F(e)?"length":xt),Reflect.ownKeys(e)}const po={get:Ks,set:Gs,deleteProperty:Qs,has:el,ownKeys:tl},nl={get:Xs,set(e,t){return!0},deleteProperty(e,t){return!0}},rl=ce({},po,{get:Vs,set:Zs}),va=e=>e,nr=e=>Reflect.getPrototypeOf(e);function vn(e,t,n=!1,r=!1){e=e.__v_raw;const a=V(e),i=V(t);n||(t!==i&&_e(a,"get",t),_e(a,"get",i));const{has:o}=nr(a),s=r?va:n?wa:en;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function bn(e,t=!1){const n=this.__v_raw,r=V(n),a=V(e);return t||(e!==a&&_e(r,"has",e),_e(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function yn(e,t=!1){return e=e.__v_raw,!t&&_e(V(e),"iterate",xt),Reflect.get(e,"size",e)}function Ja(e){e=V(e);const t=V(this);return nr(t).has.call(t,e)||(t.add(e),Xe(t,"add",e,e)),this}function Ga(e,t){t=V(t);const n=V(this),{has:r,get:a}=nr(n);let i=r.call(n,e);i||(e=V(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Qt(t,o)&&Xe(n,"set",e,t):Xe(n,"add",e,t),this}function Za(e){const t=V(this),{has:n,get:r}=nr(t);let a=n.call(t,e);a||(e=V(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Xe(t,"delete",e,void 0),i}function Qa(){const e=V(this),t=e.size!==0,n=e.clear();return t&&Xe(e,"clear",void 0,void 0),n}function xn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=V(o),l=t?va:e?wa:en;return!e&&_e(s,"iterate",xt),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function wn(e,t,n){return function(...r){const a=this.__v_raw,i=V(a),o=Nt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?va:t?wa:en;return!t&&_e(i,"iterate",l?Rr:xt),{next(){const{value:m,done:h}=c.next();return h?{value:m,done:h}:{value:s?[d(m[0]),d(m[1])]:d(m),done:h}},[Symbol.iterator](){return this}}}}function tt(e){return function(...t){return e==="delete"?!1:this}}function al(){const e={get(i){return vn(this,i)},get size(){return yn(this)},has:bn,add:Ja,set:Ga,delete:Za,clear:Qa,forEach:xn(!1,!1)},t={get(i){return vn(this,i,!1,!0)},get size(){return yn(this)},has:bn,add:Ja,set:Ga,delete:Za,clear:Qa,forEach:xn(!1,!0)},n={get(i){return vn(this,i,!0)},get size(){return yn(this,!0)},has(i){return bn.call(this,i,!0)},add:tt("add"),set:tt("set"),delete:tt("delete"),clear:tt("clear"),forEach:xn(!0,!1)},r={get(i){return vn(this,i,!0,!0)},get size(){return yn(this,!0)},has(i){return bn.call(this,i,!0)},add:tt("add"),set:tt("set"),delete:tt("delete"),clear:tt("clear"),forEach:xn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=wn(i,!1,!1),n[i]=wn(i,!0,!1),t[i]=wn(i,!1,!0),r[i]=wn(i,!0,!0)}),[e,n,t,r]}const[il,ol,sl,ll]=al();function ba(e,t){const n=t?e?ll:sl:e?ol:il;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(W(n,a)&&a in r?n:r,a,i)}const fl={get:ba(!1,!1)},cl={get:ba(!1,!0)},ul={get:ba(!0,!1)},ho=new WeakMap,go=new WeakMap,vo=new WeakMap,dl=new WeakMap;function ml(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pl(e){return e.__v_skip||!Object.isExtensible(e)?0:ml(Ts(e))}function ya(e){return Rt(e)?e:xa(e,!1,po,fl,ho)}function hl(e){return xa(e,!1,rl,cl,go)}function bo(e){return xa(e,!0,nl,ul,vo)}function xa(e,t,n,r,a){if(!ne(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=pl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Mt(e){return Rt(e)?Mt(e.__v_raw):!!(e&&e.__v_isReactive)}function Rt(e){return!!(e&&e.__v_isReadonly)}function Wn(e){return!!(e&&e.__v_isShallow)}function yo(e){return Mt(e)||Rt(e)}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function xo(e){return Hn(e,"__v_skip",!0),e}const en=e=>ne(e)?ya(e):e,wa=e=>ne(e)?bo(e):e;function wo(e){at&&Ne&&(e=V(e),co(e.dep||(e.dep=pa())))}function _o(e,t){e=V(e);const n=e.dep;n&&Dr(n)}function ge(e){return!!(e&&e.__v_isRef===!0)}function ue(e){return gl(e,!1)}function gl(e,t){return ge(e)?e:new vl(e,t)}class vl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:V(t),this._value=n?t:en(t)}get value(){return wo(this),this._value}set value(t){const n=this.__v_isShallow||Wn(t)||Rt(t);t=n?t:V(t),Qt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:en(t),_o(this))}}function bl(e){return ge(e)?e.value:e}const yl={get:(e,t,n)=>bl(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ge(a)&&!ge(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function ko(e){return Mt(e)?e:new Proxy(e,yl)}class xl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ha(t,()=>{this._dirty||(this._dirty=!0,_o(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=V(this);return wo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function wl(e,t,n=!1){let r,a;const i=j(e);return i?(r=e,a=Fe):(r=e.get,a=e.set),new xl(r,a,i||!a,n)}function it(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){rr(i,t,n)}return a}function Re(e,t,n,r){if(j(e)){const i=it(e,t,n,r);return i&&no(i)&&i.catch(o=>{rr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Re(e[i],t,n,r));return a}function rr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){it(l,null,10,[e,o,s]);return}}_l(e,n,a,r)}function _l(e,t,n,r=!0){console.error(e)}let tn=!1,zr=!1;const he=[];let Ue=0;const Lt=[];let Ke=null,ht=0;const Ao=Promise.resolve();let _a=null;function kl(e){const t=_a||Ao;return e?t.then(this?e.bind(this):e):t}function Al(e){let t=Ue+1,n=he.length;for(;t<n;){const r=t+n>>>1;nn(he[r])<e?t=r+1:n=r}return t}function ka(e){(!he.length||!he.includes(e,tn&&e.allowRecurse?Ue+1:Ue))&&(e.id==null?he.push(e):he.splice(Al(e.id),0,e),Eo())}function Eo(){!tn&&!zr&&(zr=!0,_a=Ao.then(Co))}function El(e){const t=he.indexOf(e);t>Ue&&he.splice(t,1)}function Ol(e){F(e)?Lt.push(...e):(!Ke||!Ke.includes(e,e.allowRecurse?ht+1:ht))&&Lt.push(e),Eo()}function ei(e,t=tn?Ue+1:0){for(;t<he.length;t++){const n=he[t];n&&n.pre&&(he.splice(t,1),t--,n())}}function Oo(e){if(Lt.length){const t=[...new Set(Lt)];if(Lt.length=0,Ke){Ke.push(...t);return}for(Ke=t,Ke.sort((n,r)=>nn(n)-nn(r)),ht=0;ht<Ke.length;ht++)Ke[ht]();Ke=null,ht=0}}const nn=e=>e.id==null?1/0:e.id,Cl=(e,t)=>{const n=nn(e)-nn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Co(e){zr=!1,tn=!0,he.sort(Cl);const t=Fe;try{for(Ue=0;Ue<he.length;Ue++){const n=he[Ue];n&&n.active!==!1&&it(n,null,14)}}finally{Ue=0,he.length=0,Oo(),tn=!1,_a=null,(he.length||Lt.length)&&Co()}}function Pl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Q;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[d]||Q;h&&(a=n.map(w=>le(w)?w.trim():w)),m&&(a=n.map(Nr))}let s,l=r[s=vr(t)]||r[s=vr(We(t))];!l&&i&&(l=r[s=vr($t(t))]),l&&Re(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Re(c,e,6,a)}}function Po(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!j(e)){const l=c=>{const d=Po(c,t,!0);d&&(s=!0,ce(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(ne(e)&&r.set(e,null),null):(F(i)?i.forEach(l=>o[l]=null):ce(o,i),ne(e)&&r.set(e,o),o)}function ar(e,t){return!e||!Zn(t)?!1:(t=t.slice(2).replace(/Once$/,""),W(e,t[0].toLowerCase()+t.slice(1))||W(e,$t(t))||W(e,t))}let Oe=null,Io=null;function Yn(e){const t=Oe;return Oe=e,Io=e&&e.type.__scopeId||null,t}function Il(e,t=Oe,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&di(-1);const i=Yn(t);let o;try{o=e(...a)}finally{Yn(i),r._d&&di(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function br(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:h,setupState:w,ctx:R,inheritAttrs:S}=e;let U,_;const A=Yn(e);try{if(n.shapeFlag&4){const C=a||r;U=Be(d.call(C,C,m,i,w,h,R)),_=l}else{const C=t;U=Be(C.length>1?C(i,{attrs:l,slots:s,emit:c}):C(i,null)),_=t.props?l:Sl(l)}}catch(C){Jt.length=0,rr(C,e,1),U=ie(_t)}let L=U;if(_&&S!==!1){const C=Object.keys(_),{shapeFlag:Y}=L;C.length&&Y&7&&(o&&C.some(la)&&(_=Tl(_,o)),L=Dt(L,_))}return n.dirs&&(L=Dt(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),U=L,Yn(A),U}const Sl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Zn(n))&&((t||(t={}))[n]=e[n]);return t},Tl=(e,t)=>{const n={};for(const r in e)(!la(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Nl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ti(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const h=d[m];if(o[h]!==r[h]&&!ar(c,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ti(r,o,c):!0:!!o;return!1}function ti(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!ar(n,i))return!0}return!1}function Ml({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Ll=e=>e.__isSuspense;function Fl(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):Ol(e)}const _n={};function Rn(e,t,n){return So(e,t,n)}function So(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=Q){var s;const l=Us()===((s=de)==null?void 0:s.scope)?de:null;let c,d=!1,m=!1;if(ge(e)?(c=()=>e.value,d=Wn(e)):Mt(e)?(c=()=>e,r=!0):F(e)?(m=!0,d=e.some(C=>Mt(C)||Wn(C)),c=()=>e.map(C=>{if(ge(C))return C.value;if(Mt(C))return vt(C);if(j(C))return it(C,l,2)})):j(e)?t?c=()=>it(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),Re(e,l,3,[w])}:c=Fe,t&&r){const C=c;c=()=>vt(C())}let h,w=C=>{h=A.onStop=()=>{it(C,l,4)}},R;if(an)if(w=Fe,t?n&&Re(t,l,3,[c(),m?[]:void 0,w]):c(),a==="sync"){const C=Nf();R=C.__watcherHandles||(C.__watcherHandles=[])}else return Fe;let S=m?new Array(e.length).fill(_n):_n;const U=()=>{if(A.active)if(t){const C=A.run();(r||d||(m?C.some((Y,oe)=>Qt(Y,S[oe])):Qt(C,S)))&&(h&&h(),Re(t,l,3,[C,S===_n?void 0:m&&S[0]===_n?[]:S,w]),S=C)}else A.run()};U.allowRecurse=!!t;let _;a==="sync"?_=U:a==="post"?_=()=>we(U,l&&l.suspense):(U.pre=!0,l&&(U.id=l.uid),_=()=>ka(U));const A=new ha(c,_);t?n?U():S=A.run():a==="post"?we(A.run.bind(A),l&&l.suspense):A.run();const L=()=>{A.stop(),l&&l.scope&&fa(l.scope.effects,A)};return R&&R.push(L),L}function Rl(e,t,n){const r=this.proxy,a=le(e)?e.includes(".")?To(r,e):()=>r[e]:e.bind(r,r);let i;j(t)?i=t:(i=t.handler,n=t);const o=de;zt(this);const s=So(a,i.bind(r),n);return o?zt(o):wt(),s}function To(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function vt(e,t){if(!ne(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ge(e))vt(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)vt(e[n],t);else if(to(e)||Nt(e))e.forEach(n=>{vt(n,t)});else if(ao(e))for(const n in e)vt(e[n],t);return e}function kn(e,t){const n=Oe;if(n===null)return e;const r=lr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=Q]=t[i];o&&(j(o)&&(o={mounted:o,updated:o}),o.deep&&vt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function dt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Bt(),Re(l,n,8,[e.el,s,e,t]),Ut())}}function Dl(e,t){return j(e)?(()=>ce({name:e.name},t,{setup:e}))():e}const Dn=e=>!!e.type.__asyncLoader,No=e=>e.type.__isKeepAlive;function zl(e,t){Mo(e,"a",t)}function jl(e,t){Mo(e,"da",t)}function Mo(e,t,n=de){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(ir(t,r,n),n){let a=n.parent;for(;a&&a.parent;)No(a.parent.vnode)&&$l(r,t,n,a),a=a.parent}}function $l(e,t,n,r){const a=ir(t,e,r,!0);Fo(()=>{fa(r[t],a)},n)}function ir(e,t,n=de,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Bt(),zt(n);const s=Re(t,n,e,o);return wt(),Ut(),s});return r?a.unshift(i):a.push(i),i}}const Ze=e=>(t,n=de)=>(!an||e==="sp")&&ir(e,(...r)=>t(...r),n),Bl=Ze("bm"),Lo=Ze("m"),Ul=Ze("bu"),Hl=Ze("u"),Wl=Ze("bum"),Fo=Ze("um"),Yl=Ze("sp"),Kl=Ze("rtg"),Vl=Ze("rtc");function Xl(e,t=de){ir("ec",e,t)}const Ro="components";function ql(e,t){return Gl(Ro,e,!0,t)||e}const Jl=Symbol.for("v-ndc");function Gl(e,t,n=!0,r=!1){const a=Oe||de;if(a){const i=a.type;if(e===Ro){const s=Pf(i,!1);if(s&&(s===t||s===We(t)||s===tr(We(t))))return i}const o=ni(a[e]||i[e],t)||ni(a.appContext[e],t);return!o&&r?i:o}}function ni(e,t){return e&&(e[t]||e[We(t)]||e[tr(We(t))])}function ri(e,t,n,r){let a;const i=n&&n[r];if(F(e)||le(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(ne(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const jr=e=>e?Vo(e)?lr(e)||e.proxy:jr(e.parent):null,qt=ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>jr(e.parent),$root:e=>jr(e.root),$emit:e=>e.emit,$options:e=>Aa(e),$forceUpdate:e=>e.f||(e.f=()=>ka(e.update)),$nextTick:e=>e.n||(e.n=kl.bind(e.proxy)),$watch:e=>Rl.bind(e)}),yr=(e,t)=>e!==Q&&!e.__isScriptSetup&&W(e,t),Zl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const w=o[t];if(w!==void 0)switch(w){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(yr(r,t))return o[t]=1,r[t];if(a!==Q&&W(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&W(c,t))return o[t]=3,i[t];if(n!==Q&&W(n,t))return o[t]=4,n[t];$r&&(o[t]=0)}}const d=qt[t];let m,h;if(d)return t==="$attrs"&&_e(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==Q&&W(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,W(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return yr(a,t)?(a[t]=n,!0):r!==Q&&W(r,t)?(r[t]=n,!0):W(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==Q&&W(e,o)||yr(t,o)||(s=i[0])&&W(s,o)||W(r,o)||W(qt,o)||W(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:W(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ai(e){return F(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let $r=!0;function Ql(e){const t=Aa(e),n=e.proxy,r=e.ctx;$r=!1,t.beforeCreate&&ii(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:h,beforeUpdate:w,updated:R,activated:S,deactivated:U,beforeDestroy:_,beforeUnmount:A,destroyed:L,unmounted:C,render:Y,renderTracked:oe,renderTriggered:se,errorCaptured:ve,serverPrefetch:me,expose:Ce,inheritAttrs:ut,components:X,directives:M,filters:B}=t;if(c&&ef(c,r,null),o)for(const $ in o){const K=o[$];j(K)&&(r[$]=K.bind(n))}if(a){const $=a.call(n,n);ne($)&&(e.data=ya($))}if($r=!0,i)for(const $ in i){const K=i[$],De=j(K)?K.bind(n,n):j(K.get)?K.get.bind(n,n):Fe,et=!j(K)&&j(K.set)?K.set.bind(n):Fe,Pe=pt({get:De,set:et});Object.defineProperty(r,$,{enumerable:!0,configurable:!0,get:()=>Pe.value,set:Ee=>Pe.value=Ee})}if(s)for(const $ in s)Do(s[$],r,n,$);if(l){const $=j(l)?l.call(n):l;Reflect.ownKeys($).forEach(K=>{sf(K,$[K])})}d&&ii(d,e,"c");function q($,K){F(K)?K.forEach(De=>$(De.bind(n))):K&&$(K.bind(n))}if(q(Bl,m),q(Lo,h),q(Ul,w),q(Hl,R),q(zl,S),q(jl,U),q(Xl,ve),q(Vl,oe),q(Kl,se),q(Wl,A),q(Fo,C),q(Yl,me),F(Ce))if(Ce.length){const $=e.exposed||(e.exposed={});Ce.forEach(K=>{Object.defineProperty($,K,{get:()=>n[K],set:De=>n[K]=De})})}else e.exposed||(e.exposed={});Y&&e.render===Fe&&(e.render=Y),ut!=null&&(e.inheritAttrs=ut),X&&(e.components=X),M&&(e.directives=M)}function ef(e,t,n=Fe){F(e)&&(e=Br(e));for(const r in e){const a=e[r];let i;ne(a)?"default"in a?i=zn(a.from||r,a.default,!0):i=zn(a.from||r):i=zn(a),ge(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function ii(e,t,n){Re(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Do(e,t,n,r){const a=r.includes(".")?To(n,r):()=>n[r];if(le(e)){const i=t[e];j(i)&&Rn(a,i)}else if(j(e))Rn(a,e.bind(n));else if(ne(e))if(F(e))e.forEach(i=>Do(i,t,n,r));else{const i=j(e.handler)?e.handler.bind(n):t[e.handler];j(i)&&Rn(a,i,e)}}function Aa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Kn(l,c,o,!0)),Kn(l,t,o)),ne(t)&&i.set(t,l),l}function Kn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Kn(e,i,n,!0),a&&a.forEach(o=>Kn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=tf[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const tf={data:oi,props:si,emits:si,methods:Vt,computed:Vt,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:Vt,directives:Vt,watch:rf,provide:oi,inject:nf};function oi(e,t){return t?e?function(){return ce(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function nf(e,t){return Vt(Br(e),Br(t))}function Br(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ye(e,t){return e?[...new Set([].concat(e,t))]:t}function Vt(e,t){return e?ce(Object.create(null),e,t):t}function si(e,t){return e?F(e)&&F(t)?[...new Set([...e,...t])]:ce(Object.create(null),ai(e),ai(t??{})):t}function rf(e,t){if(!e)return t;if(!t)return e;const n=ce(Object.create(null),e);for(const r in t)n[r]=ye(e[r],t[r]);return n}function zo(){return{app:null,config:{isNativeTag:Ps,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let af=0;function of(e,t){return function(r,a=null){j(r)||(r=ce({},r)),a!=null&&!ne(a)&&(a=null);const i=zo(),o=new Set;let s=!1;const l=i.app={_uid:af++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Mf,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&j(c.install)?(o.add(c),c.install(l,...d)):j(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const h=ie(r,a);return h.appContext=i,d&&t?t(h,c):e(h,c,m),s=!0,l._container=c,c.__vue_app__=l,lr(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){Vn=l;try{return c()}finally{Vn=null}}};return l}}let Vn=null;function sf(e,t){if(de){let n=de.provides;const r=de.parent&&de.parent.provides;r===n&&(n=de.provides=Object.create(r)),n[e]=t}}function zn(e,t,n=!1){const r=de||Oe;if(r||Vn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Vn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&j(t)?t.call(r&&r.proxy):t}}function lf(e,t,n,r=!1){const a={},i={};Hn(i,sr,1),e.propsDefaults=Object.create(null),jo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:hl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function ff(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=V(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let h=d[m];if(ar(e.emitsOptions,h))continue;const w=t[h];if(l)if(W(i,h))w!==i[h]&&(i[h]=w,c=!0);else{const R=We(h);a[R]=Ur(l,s,R,w,e,!1)}else w!==i[h]&&(i[h]=w,c=!0)}}}else{jo(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!W(t,m)&&((d=$t(m))===m||!W(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Ur(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!W(t,m))&&(delete i[m],c=!0)}c&&Xe(e,"set","$attrs")}function jo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Ln(l))continue;const c=t[l];let d;a&&W(a,d=We(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:ar(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=V(n),c=s||Q;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Ur(a,l,m,c[m],e,!W(c,m))}}return o}function Ur(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=W(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&j(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(zt(a),r=c[n]=l.call(null,t),wt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===$t(n))&&(r=!0))}return r}function $o(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!j(e)){const d=m=>{l=!0;const[h,w]=$o(m,t,!0);ce(o,h),w&&s.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return ne(e)&&r.set(e,Tt),Tt;if(F(i))for(let d=0;d<i.length;d++){const m=We(i[d]);li(m)&&(o[m]=Q)}else if(i)for(const d in i){const m=We(d);if(li(m)){const h=i[d],w=o[m]=F(h)||j(h)?{type:h}:ce({},h);if(w){const R=ui(Boolean,w.type),S=ui(String,w.type);w[0]=R>-1,w[1]=S<0||R<S,(R>-1||W(w,"default"))&&s.push(m)}}}const c=[o,s];return ne(e)&&r.set(e,c),c}function li(e){return e[0]!=="$"}function fi(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ci(e,t){return fi(e)===fi(t)}function ui(e,t){return F(t)?t.findIndex(n=>ci(n,e)):j(t)&&ci(t,e)?0:-1}const Bo=e=>e[0]==="_"||e==="$stable",Ea=e=>F(e)?e.map(Be):[Be(e)],cf=(e,t,n)=>{if(t._n)return t;const r=Il((...a)=>Ea(t(...a)),n);return r._c=!1,r},Uo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Bo(a))continue;const i=e[a];if(j(i))t[a]=cf(a,i,r);else if(i!=null){const o=Ea(i);t[a]=()=>o}}},Ho=(e,t)=>{const n=Ea(t);e.slots.default=()=>n},uf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=V(t),Hn(t,"_",n)):Uo(t,e.slots={})}else e.slots={},t&&Ho(e,t);Hn(e.slots,sr,1)},df=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=Q;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ce(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Uo(t,a)),o=t}else t&&(Ho(e,t),o={default:1});if(i)for(const s in a)!Bo(s)&&!(s in o)&&delete a[s]};function Hr(e,t,n,r,a=!1){if(F(e)){e.forEach((h,w)=>Hr(h,t&&(F(t)?t[w]:t),n,r,a));return}if(Dn(r)&&!a)return;const i=r.shapeFlag&4?lr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===Q?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(le(c)?(d[c]=null,W(m,c)&&(m[c]=null)):ge(c)&&(c.value=null)),j(l))it(l,s,12,[o,d]);else{const h=le(l),w=ge(l);if(h||w){const R=()=>{if(e.f){const S=h?W(m,l)?m[l]:d[l]:l.value;a?F(S)&&fa(S,i):F(S)?S.includes(i)||S.push(i):h?(d[l]=[i],W(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else h?(d[l]=o,W(m,l)&&(m[l]=o)):w&&(l.value=o,e.k&&(d[e.k]=o))};o?(R.id=-1,we(R,n)):R()}}}const we=Fl;function mf(e){return pf(e)}function pf(e,t){const n=Mr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:h,setScopeId:w=Fe,insertStaticContent:R}=e,S=(f,u,p,v=null,g=null,x=null,E=!1,y=null,k=!!u.dynamicChildren)=>{if(f===u)return;f&&!Yt(f,u)&&(v=hn(f),Ee(f,g,x,!0),f=null),u.patchFlag===-2&&(k=!1,u.dynamicChildren=null);const{type:b,ref:T,shapeFlag:P}=u;switch(b){case or:U(f,u,p,v);break;case _t:_(f,u,p,v);break;case xr:f==null&&A(u,p,v,E);break;case Te:X(f,u,p,v,g,x,E,y,k);break;default:P&1?Y(f,u,p,v,g,x,E,y,k):P&6?M(f,u,p,v,g,x,E,y,k):(P&64||P&128)&&b.process(f,u,p,v,g,x,E,y,k,Et)}T!=null&&g&&Hr(T,f&&f.ref,x,u||f,!u)},U=(f,u,p,v)=>{if(f==null)r(u.el=s(u.children),p,v);else{const g=u.el=f.el;u.children!==f.children&&c(g,u.children)}},_=(f,u,p,v)=>{f==null?r(u.el=l(u.children||""),p,v):u.el=f.el},A=(f,u,p,v)=>{[f.el,f.anchor]=R(f.children,u,p,v,f.el,f.anchor)},L=({el:f,anchor:u},p,v)=>{let g;for(;f&&f!==u;)g=h(f),r(f,p,v),f=g;r(u,p,v)},C=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=h(f),a(f),f=p;a(u)},Y=(f,u,p,v,g,x,E,y,k)=>{E=E||u.type==="svg",f==null?oe(u,p,v,g,x,E,y,k):me(f,u,g,x,E,y,k)},oe=(f,u,p,v,g,x,E,y)=>{let k,b;const{type:T,props:P,shapeFlag:N,transition:D,dirs:H}=f;if(k=f.el=o(f.type,x,P&&P.is,P),N&8?d(k,f.children):N&16&&ve(f.children,k,null,v,g,x&&T!=="foreignObject",E,y),H&&dt(f,null,v,"created"),se(k,f,f.scopeId,E,v),P){for(const J in P)J!=="value"&&!Ln(J)&&i(k,J,null,P[J],x,f.children,v,g,Ye);"value"in P&&i(k,"value",null,P.value),(b=P.onVnodeBeforeMount)&&$e(b,v,f)}H&&dt(f,null,v,"beforeMount");const Z=(!g||g&&!g.pendingBranch)&&D&&!D.persisted;Z&&D.beforeEnter(k),r(k,u,p),((b=P&&P.onVnodeMounted)||Z||H)&&we(()=>{b&&$e(b,v,f),Z&&D.enter(k),H&&dt(f,null,v,"mounted")},g)},se=(f,u,p,v,g)=>{if(p&&w(f,p),v)for(let x=0;x<v.length;x++)w(f,v[x]);if(g){let x=g.subTree;if(u===x){const E=g.vnode;se(f,E,E.scopeId,E.slotScopeIds,g.parent)}}},ve=(f,u,p,v,g,x,E,y,k=0)=>{for(let b=k;b<f.length;b++){const T=f[b]=y?rt(f[b]):Be(f[b]);S(null,T,u,p,v,g,x,E,y)}},me=(f,u,p,v,g,x,E)=>{const y=u.el=f.el;let{patchFlag:k,dynamicChildren:b,dirs:T}=u;k|=f.patchFlag&16;const P=f.props||Q,N=u.props||Q;let D;p&&mt(p,!1),(D=N.onVnodeBeforeUpdate)&&$e(D,p,u,f),T&&dt(u,f,p,"beforeUpdate"),p&&mt(p,!0);const H=g&&u.type!=="foreignObject";if(b?Ce(f.dynamicChildren,b,y,p,v,H,x):E||K(f,u,y,null,p,v,H,x,!1),k>0){if(k&16)ut(y,u,P,N,p,v,g);else if(k&2&&P.class!==N.class&&i(y,"class",null,N.class,g),k&4&&i(y,"style",P.style,N.style,g),k&8){const Z=u.dynamicProps;for(let J=0;J<Z.length;J++){const ae=Z[J],Ie=P[ae],Ot=N[ae];(Ot!==Ie||ae==="value")&&i(y,ae,Ie,Ot,g,f.children,p,v,Ye)}}k&1&&f.children!==u.children&&d(y,u.children)}else!E&&b==null&&ut(y,u,P,N,p,v,g);((D=N.onVnodeUpdated)||T)&&we(()=>{D&&$e(D,p,u,f),T&&dt(u,f,p,"updated")},v)},Ce=(f,u,p,v,g,x,E)=>{for(let y=0;y<u.length;y++){const k=f[y],b=u[y],T=k.el&&(k.type===Te||!Yt(k,b)||k.shapeFlag&70)?m(k.el):p;S(k,b,T,null,v,g,x,E,!0)}},ut=(f,u,p,v,g,x,E)=>{if(p!==v){if(p!==Q)for(const y in p)!Ln(y)&&!(y in v)&&i(f,y,p[y],null,E,u.children,g,x,Ye);for(const y in v){if(Ln(y))continue;const k=v[y],b=p[y];k!==b&&y!=="value"&&i(f,y,b,k,E,u.children,g,x,Ye)}"value"in v&&i(f,"value",p.value,v.value)}},X=(f,u,p,v,g,x,E,y,k)=>{const b=u.el=f?f.el:s(""),T=u.anchor=f?f.anchor:s("");let{patchFlag:P,dynamicChildren:N,slotScopeIds:D}=u;D&&(y=y?y.concat(D):D),f==null?(r(b,p,v),r(T,p,v),ve(u.children,p,T,g,x,E,y,k)):P>0&&P&64&&N&&f.dynamicChildren?(Ce(f.dynamicChildren,N,p,g,x,E,y),(u.key!=null||g&&u===g.subTree)&&Wo(f,u,!0)):K(f,u,p,T,g,x,E,y,k)},M=(f,u,p,v,g,x,E,y,k)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?g.ctx.activate(u,p,v,E,k):B(u,p,v,g,x,E,k):z(f,u,k)},B=(f,u,p,v,g,x,E)=>{const y=f.component=kf(f,v,g);if(No(f)&&(y.ctx.renderer=Et),Af(y),y.asyncDep){if(g&&g.registerDep(y,q),!f.el){const k=y.subTree=ie(_t);_(null,k,u,p)}return}q(y,f,u,p,g,x,E)},z=(f,u,p)=>{const v=u.component=f.component;if(Nl(f,u,p))if(v.asyncDep&&!v.asyncResolved){$(v,u,p);return}else v.next=u,El(v.update),v.update();else u.el=f.el,v.vnode=u},q=(f,u,p,v,g,x,E)=>{const y=()=>{if(f.isMounted){let{next:T,bu:P,u:N,parent:D,vnode:H}=f,Z=T,J;mt(f,!1),T?(T.el=H.el,$(f,T,E)):T=H,P&&Fn(P),(J=T.props&&T.props.onVnodeBeforeUpdate)&&$e(J,D,T,H),mt(f,!0);const ae=br(f),Ie=f.subTree;f.subTree=ae,S(Ie,ae,m(Ie.el),hn(Ie),f,g,x),T.el=ae.el,Z===null&&Ml(f,ae.el),N&&we(N,g),(J=T.props&&T.props.onVnodeUpdated)&&we(()=>$e(J,D,T,H),g)}else{let T;const{el:P,props:N}=u,{bm:D,m:H,parent:Z}=f,J=Dn(u);if(mt(f,!1),D&&Fn(D),!J&&(T=N&&N.onVnodeBeforeMount)&&$e(T,Z,u),mt(f,!0),P&&gr){const ae=()=>{f.subTree=br(f),gr(P,f.subTree,f,g,null)};J?u.type.__asyncLoader().then(()=>!f.isUnmounted&&ae()):ae()}else{const ae=f.subTree=br(f);S(null,ae,p,v,f,g,x),u.el=ae.el}if(H&&we(H,g),!J&&(T=N&&N.onVnodeMounted)){const ae=u;we(()=>$e(T,Z,ae),g)}(u.shapeFlag&256||Z&&Dn(Z.vnode)&&Z.vnode.shapeFlag&256)&&f.a&&we(f.a,g),f.isMounted=!0,u=p=v=null}},k=f.effect=new ha(y,()=>ka(b),f.scope),b=f.update=()=>k.run();b.id=f.uid,mt(f,!0),b()},$=(f,u,p)=>{u.component=f;const v=f.vnode.props;f.vnode=u,f.next=null,ff(f,u.props,v,p),df(f,u.children,p),Bt(),ei(),Ut()},K=(f,u,p,v,g,x,E,y,k=!1)=>{const b=f&&f.children,T=f?f.shapeFlag:0,P=u.children,{patchFlag:N,shapeFlag:D}=u;if(N>0){if(N&128){et(b,P,p,v,g,x,E,y,k);return}else if(N&256){De(b,P,p,v,g,x,E,y,k);return}}D&8?(T&16&&Ye(b,g,x),P!==b&&d(p,P)):T&16?D&16?et(b,P,p,v,g,x,E,y,k):Ye(b,g,x,!0):(T&8&&d(p,""),D&16&&ve(P,p,v,g,x,E,y,k))},De=(f,u,p,v,g,x,E,y,k)=>{f=f||Tt,u=u||Tt;const b=f.length,T=u.length,P=Math.min(b,T);let N;for(N=0;N<P;N++){const D=u[N]=k?rt(u[N]):Be(u[N]);S(f[N],D,p,null,g,x,E,y,k)}b>T?Ye(f,g,x,!0,!1,P):ve(u,p,v,g,x,E,y,k,P)},et=(f,u,p,v,g,x,E,y,k)=>{let b=0;const T=u.length;let P=f.length-1,N=T-1;for(;b<=P&&b<=N;){const D=f[b],H=u[b]=k?rt(u[b]):Be(u[b]);if(Yt(D,H))S(D,H,p,null,g,x,E,y,k);else break;b++}for(;b<=P&&b<=N;){const D=f[P],H=u[N]=k?rt(u[N]):Be(u[N]);if(Yt(D,H))S(D,H,p,null,g,x,E,y,k);else break;P--,N--}if(b>P){if(b<=N){const D=N+1,H=D<T?u[D].el:v;for(;b<=N;)S(null,u[b]=k?rt(u[b]):Be(u[b]),p,H,g,x,E,y,k),b++}}else if(b>N)for(;b<=P;)Ee(f[b],g,x,!0),b++;else{const D=b,H=b,Z=new Map;for(b=H;b<=N;b++){const ke=u[b]=k?rt(u[b]):Be(u[b]);ke.key!=null&&Z.set(ke.key,b)}let J,ae=0;const Ie=N-H+1;let Ot=!1,Ha=0;const Wt=new Array(Ie);for(b=0;b<Ie;b++)Wt[b]=0;for(b=D;b<=P;b++){const ke=f[b];if(ae>=Ie){Ee(ke,g,x,!0);continue}let ze;if(ke.key!=null)ze=Z.get(ke.key);else for(J=H;J<=N;J++)if(Wt[J-H]===0&&Yt(ke,u[J])){ze=J;break}ze===void 0?Ee(ke,g,x,!0):(Wt[ze-H]=b+1,ze>=Ha?Ha=ze:Ot=!0,S(ke,u[ze],p,null,g,x,E,y,k),ae++)}const Wa=Ot?hf(Wt):Tt;for(J=Wa.length-1,b=Ie-1;b>=0;b--){const ke=H+b,ze=u[ke],Ya=ke+1<T?u[ke+1].el:v;Wt[b]===0?S(null,ze,p,Ya,g,x,E,y,k):Ot&&(J<0||b!==Wa[J]?Pe(ze,p,Ya,2):J--)}}},Pe=(f,u,p,v,g=null)=>{const{el:x,type:E,transition:y,children:k,shapeFlag:b}=f;if(b&6){Pe(f.component.subTree,u,p,v);return}if(b&128){f.suspense.move(u,p,v);return}if(b&64){E.move(f,u,p,Et);return}if(E===Te){r(x,u,p);for(let P=0;P<k.length;P++)Pe(k[P],u,p,v);r(f.anchor,u,p);return}if(E===xr){L(f,u,p);return}if(v!==2&&b&1&&y)if(v===0)y.beforeEnter(x),r(x,u,p),we(()=>y.enter(x),g);else{const{leave:P,delayLeave:N,afterLeave:D}=y,H=()=>r(x,u,p),Z=()=>{P(x,()=>{H(),D&&D()})};N?N(x,H,Z):Z()}else r(x,u,p)},Ee=(f,u,p,v=!1,g=!1)=>{const{type:x,props:E,ref:y,children:k,dynamicChildren:b,shapeFlag:T,patchFlag:P,dirs:N}=f;if(y!=null&&Hr(y,null,p,f,!0),T&256){u.ctx.deactivate(f);return}const D=T&1&&N,H=!Dn(f);let Z;if(H&&(Z=E&&E.onVnodeBeforeUnmount)&&$e(Z,u,f),T&6)Cs(f.component,p,v);else{if(T&128){f.suspense.unmount(p,v);return}D&&dt(f,null,u,"beforeUnmount"),T&64?f.type.remove(f,u,p,g,Et,v):b&&(x!==Te||P>0&&P&64)?Ye(b,u,p,!1,!0):(x===Te&&P&384||!g&&T&16)&&Ye(k,u,p),v&&pn(f)}(H&&(Z=E&&E.onVnodeUnmounted)||D)&&we(()=>{Z&&$e(Z,u,f),D&&dt(f,null,u,"unmounted")},p)},pn=f=>{const{type:u,el:p,anchor:v,transition:g}=f;if(u===Te){pr(p,v);return}if(u===xr){C(f);return}const x=()=>{a(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:E,delayLeave:y}=g,k=()=>E(p,x);y?y(f.el,x,k):k()}else x()},pr=(f,u)=>{let p;for(;f!==u;)p=h(f),a(f),f=p;a(u)},Cs=(f,u,p)=>{const{bum:v,scope:g,update:x,subTree:E,um:y}=f;v&&Fn(v),g.stop(),x&&(x.active=!1,Ee(E,f,u,p)),y&&we(y,u),we(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Ye=(f,u,p,v=!1,g=!1,x=0)=>{for(let E=x;E<f.length;E++)Ee(f[E],u,p,v,g)},hn=f=>f.shapeFlag&6?hn(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),Ua=(f,u,p)=>{f==null?u._vnode&&Ee(u._vnode,null,null,!0):S(u._vnode||null,f,u,null,null,null,p),ei(),Oo(),u._vnode=f},Et={p:S,um:Ee,m:Pe,r:pn,mt:B,mc:ve,pc:K,pbc:Ce,n:hn,o:e};let hr,gr;return t&&([hr,gr]=t(Et)),{render:Ua,hydrate:hr,createApp:of(Ua,hr)}}function mt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Wo(e,t,n=!1){const r=e.children,a=t.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=rt(a[i]),s.el=o.el),n||Wo(o,s)),s.type===or&&(s.el=o.el)}}function hf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const gf=e=>e.__isTeleport,Te=Symbol.for("v-fgt"),or=Symbol.for("v-txt"),_t=Symbol.for("v-cmt"),xr=Symbol.for("v-stc"),Jt=[];let Me=null;function pe(e=!1){Jt.push(Me=e?null:[])}function vf(){Jt.pop(),Me=Jt[Jt.length-1]||null}let rn=1;function di(e){rn+=e}function Yo(e){return e.dynamicChildren=rn>0?Me||Tt:null,vf(),rn>0&&Me&&Me.push(e),e}function be(e,t,n,r,a,i){return Yo(G(e,t,n,r,a,i,!0))}function bf(e,t,n,r,a){return Yo(ie(e,t,n,r,a,!0))}function Wr(e){return e?e.__v_isVNode===!0:!1}function Yt(e,t){return e.type===t.type&&e.key===t.key}const sr="__vInternal",Ko=({key:e})=>e??null,jn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?le(e)||ge(e)||j(e)?{i:Oe,r:e,k:t,f:!!n}:e:null);function G(e,t=null,n=null,r=0,a=null,i=e===Te?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ko(t),ref:t&&jn(t),scopeId:Io,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Oe};return s?(Oa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=le(n)?8:16),rn>0&&!o&&Me&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Me.push(l),l}const ie=yf;function yf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Jl)&&(e=_t),Wr(e)){const s=Dt(e,t,!0);return n&&Oa(s,n),rn>0&&!i&&Me&&(s.shapeFlag&6?Me[Me.indexOf(e)]=s:Me.push(s)),s.patchFlag|=-2,s}if(If(e)&&(e=e.__vccOpts),t){t=xf(t);let{class:s,style:l}=t;s&&!le(s)&&(t.class=ma(s)),ne(l)&&(yo(l)&&!F(l)&&(l=ce({},l)),t.style=da(l))}const o=le(e)?1:Ll(e)?128:gf(e)?64:ne(e)?4:j(e)?2:0;return G(e,t,n,r,a,o,i,!0)}function xf(e){return e?yo(e)||sr in e?ce({},e):e:null}function Dt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?$n(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Ko(s),ref:t&&t.ref?n&&a?F(a)?a.concat(jn(t)):[a,jn(t)]:jn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Te?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Dt(e.ssContent),ssFallback:e.ssFallback&&Dt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Yr(e=" ",t=0){return ie(or,null,e,t)}function je(e="",t=!1){return t?(pe(),bf(_t,null,e)):ie(_t,null,e)}function Be(e){return e==null||typeof e=="boolean"?ie(_t):F(e)?ie(Te,null,e.slice()):typeof e=="object"?rt(e):ie(or,null,String(e))}function rt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Dt(e)}function Oa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Oa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(sr in t)?t._ctx=Oe:a===3&&Oe&&(Oe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:Oe},n=32):(t=String(t),r&64?(n=16,t=[Yr(t)]):n=8);e.children=t,e.shapeFlag|=n}function $n(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=ma([t.class,r.class]));else if(a==="style")t.style=da([t.style,r.style]);else if(Zn(a)){const i=t[a],o=r[a];o&&i!==o&&!(F(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function $e(e,t,n,r=null){Re(e,t,7,[n,r])}const wf=zo();let _f=0;function kf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||wf,i={uid:_f++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new $s(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$o(r,a),emitsOptions:Po(r,a),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:r.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Pl.bind(null,i),e.ce&&e.ce(i),i}let de=null,Ca,Ct,mi="__VUE_INSTANCE_SETTERS__";(Ct=Mr()[mi])||(Ct=Mr()[mi]=[]),Ct.push(e=>de=e),Ca=e=>{Ct.length>1?Ct.forEach(t=>t(e)):Ct[0](e)};const zt=e=>{Ca(e),e.scope.on()},wt=()=>{de&&de.scope.off(),Ca(null)};function Vo(e){return e.vnode.shapeFlag&4}let an=!1;function Af(e,t=!1){an=t;const{props:n,children:r}=e.vnode,a=Vo(e);lf(e,n,a,t),uf(e,r);const i=a?Ef(e,t):void 0;return an=!1,i}function Ef(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=xo(new Proxy(e.ctx,Zl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Cf(e):null;zt(e),Bt();const i=it(r,e,0,[e.props,a]);if(Ut(),wt(),no(i)){if(i.then(wt,wt),t)return i.then(o=>{pi(e,o,t)}).catch(o=>{rr(o,e,0)});e.asyncDep=i}else pi(e,i,t)}else Xo(e,t)}function pi(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ne(t)&&(e.setupState=ko(t)),Xo(e,n)}let hi;function Xo(e,t,n){const r=e.type;if(!e.render){if(!t&&hi&&!r.render){const a=r.template||Aa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ce(ce({isCustomElement:i,delimiters:s},o),l);r.render=hi(a,c)}}e.render=r.render||Fe}zt(e),Bt(),Ql(e),Ut(),wt()}function Of(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return _e(e,"get","$attrs"),t[n]}}))}function Cf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Of(e)},slots:e.slots,emit:e.emit,expose:t}}function lr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ko(xo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in qt)return qt[n](e)},has(t,n){return n in t||n in qt}}))}function Pf(e,t=!0){return j(e)?e.displayName||e.name:e.name||t&&e.__name}function If(e){return j(e)&&"__vccOpts"in e}const pt=(e,t)=>wl(e,t,an);function Sf(e,t,n){const r=arguments.length;return r===2?ne(t)&&!F(t)?Wr(t)?ie(e,null,[t]):ie(e,t):ie(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Wr(n)&&(n=[n]),ie(e,t,n))}const Tf=Symbol.for("v-scx"),Nf=()=>zn(Tf),Mf="3.3.4",Lf="http://www.w3.org/2000/svg",gt=typeof document<"u"?document:null,gi=gt&&gt.createElement("template"),Ff={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?gt.createElementNS(Lf,e):gt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>gt.createTextNode(e),createComment:e=>gt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>gt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{gi.innerHTML=r?`<svg>${e}</svg>`:e;const s=gi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Rf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Df(e,t,n){const r=e.style,a=le(n);if(n&&!a){if(t&&!le(t))for(const i in t)n[i]==null&&Kr(r,i,"");for(const i in n)Kr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const vi=/\s*!important$/;function Kr(e,t,n){if(F(n))n.forEach(r=>Kr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=zf(e,t);vi.test(n)?e.setProperty($t(r),n.replace(vi,""),"important"):e[r]=n}}const bi=["Webkit","Moz","ms"],wr={};function zf(e,t){const n=wr[t];if(n)return n;let r=We(t);if(r!=="filter"&&r in e)return wr[t]=r;r=tr(r);for(let a=0;a<bi.length;a++){const i=bi[a]+r;if(i in e)return wr[t]=i}return t}const yi="http://www.w3.org/1999/xlink";function jf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(yi,t.slice(6,t.length)):e.setAttributeNS(yi,t,n);else{const i=js(t);n==null||i&&!io(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function $f(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=io(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Pt(e,t,n,r){e.addEventListener(t,n,r)}function Bf(e,t,n,r){e.removeEventListener(t,n,r)}function Uf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Hf(t);if(r){const c=i[t]=Kf(r,a);Pt(e,s,c,l)}else o&&(Bf(e,s,o,l),i[t]=void 0)}}const xi=/(?:Once|Passive|Capture)$/;function Hf(e){let t;if(xi.test(e)){t={};let r;for(;r=e.match(xi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):$t(e.slice(2)),t]}let _r=0;const Wf=Promise.resolve(),Yf=()=>_r||(Wf.then(()=>_r=0),_r=Date.now());function Kf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Re(Vf(r,n.value),t,5,[r])};return n.value=e,n.attached=Yf(),n}function Vf(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const wi=/^on[a-z]/,Xf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Rf(e,r,a):t==="style"?Df(e,n,r):Zn(t)?la(t)||Uf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):qf(e,t,r,a))?$f(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),jf(e,t,r,a))};function qf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&wi.test(t)&&j(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||wi.test(t)&&le(n)?!1:t in e}const _i=e=>{const t=e.props["onUpdate:modelValue"]||!1;return F(t)?n=>Fn(t,n):t};function Jf(e){e.target.composing=!0}function ki(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const An={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=_i(a);const i=r||a.props&&a.props.type==="number";Pt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=Nr(s)),e._assign(s)}),n&&Pt(e,"change",()=>{e.value=e.value.trim()}),t||(Pt(e,"compositionstart",Jf),Pt(e,"compositionend",ki),Pt(e,"change",ki))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=_i(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&Nr(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},Gf=ce({patchProp:Xf},Ff);let Ai;function Zf(){return Ai||(Ai=mf(Gf))}const Qf=(...e)=>{const t=Zf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=ec(r);if(!a)return;const i=t._component;!j(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function ec(e){return le(e)?document.querySelector(e):e}const tc=(e,t)=>t.some(n=>e instanceof n);let Ei,Oi;function nc(){return Ei||(Ei=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rc(){return Oi||(Oi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qo=new WeakMap,Vr=new WeakMap,Jo=new WeakMap,kr=new WeakMap,Pa=new WeakMap;function ac(e){const t=new Promise((n,r)=>{const a=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(ot(e.result)),a()},o=()=>{r(e.error),a()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&qo.set(n,e)}).catch(()=>{}),Pa.set(t,e),t}function ic(e){if(Vr.has(e))return;const t=new Promise((n,r)=>{const a=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),a()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Vr.set(e,t)}let Xr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Vr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Jo.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ot(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function oc(e){Xr=e(Xr)}function sc(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ar(this),t,...n);return Jo.set(r,t.sort?t.sort():[t]),ot(r)}:rc().includes(e)?function(...t){return e.apply(Ar(this),t),ot(qo.get(this))}:function(...t){return ot(e.apply(Ar(this),t))}}function lc(e){return typeof e=="function"?sc(e):(e instanceof IDBTransaction&&ic(e),tc(e,nc())?new Proxy(e,Xr):e)}function ot(e){if(e instanceof IDBRequest)return ac(e);if(kr.has(e))return kr.get(e);const t=lc(e);return t!==e&&(kr.set(e,t),Pa.set(t,e)),t}const Ar=e=>Pa.get(e);function fc(e,t,{blocked:n,upgrade:r,blocking:a,terminated:i}={}){const o=indexedDB.open(e,t),s=ot(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ot(o.result),l.oldVersion,l.newVersion,ot(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),s.then(l=>{i&&l.addEventListener("close",()=>i()),a&&l.addEventListener("versionchange",c=>a(c.oldVersion,c.newVersion,c))}).catch(()=>{}),s}const cc=["get","getKey","getAll","getAllKeys","count"],uc=["put","add","delete","clear"],Er=new Map;function Ci(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Er.get(t))return Er.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,a=uc.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(a||cc.includes(n)))return;const i=async function(o,...s){const l=this.transaction(o,a?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(s.shift())),(await Promise.all([c[n](...s),a&&l.done]))[0]};return Er.set(t,i),i}oc(e=>({...e,get:(t,n,r)=>Ci(t,n)||e.get(t,n,r),has:(t,n)=>!!Ci(t,n)||e.has(t,n)}));function fr(){return new Promise((e,t)=>{const n=fc("noteDB",1,{upgrade(r){r.createObjectStore("note",{keyPath:"id",autoIncrement:!0}).createIndex("strengthIndex","strength")}});e(n)})}async function dc(e,t){new Date().getTime();const r=await fr();r.add("note",{title:e,description:t}),await r.transaction("note").store.openCursor()}async function Or(){return await(await fr()).getAll("note")}async function mc(e){(await fr()).delete("note",e)}async function pc(e,t,n){await(await fr()).put("note",{id:e,title:t,description:n})}const hc={key:0,class:"w-full sticky top-0 bg-white p-5 drop-shadow shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] dark:bg-zinc-900 mb-2"},gc={class:"flex justify-center bg-gray-100 p-2 rounded-md dark:bg-zinc-700 mb-2"},vc={key:0},bc=["value"],yc={key:1,class:"h-screen flex flex-col w-full dark:bg-zinc-900 p-[2rem]"},xc={class:""},wc={class:"grid xl:grid-cols-9 xl:gap-4 md:grid-cols-5 md:gap-3 ph:grid-cols-2 ph:gap-2 dark:bg-zinc-900"},_c=["onClick"],kc={class:"font-normal text-center dark:bg-zinc-900"},Ac={key:0},Ec={key:0,class:"flex justify-center"},Oc={class:"w-[30rem] shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] hover:shadow-[0_7px_15px_1px_rgba(0,0,0,0.5)] p-2 rounded-md dark:bg-zinc-900 mb-2"},Cc={key:0,class:"grid grid-cols-2"},Pc={key:1},Ic={class:""},Sc={class:"grid xl:grid-cols-7 xl:gap-4 md:grid-cols-5 md:gap-3 ph:grid-cols-2 ph:gap-2 dark:bg-zinc-900"},Tc=["onClick"],Nc={class:"font-normal text-left dark:bg-zinc-900"},Mc={key:1,class:"sticky bottom-0 grid justify-items-end content-end h-full pb-8"},Lc={key:2,class:"p-[2rem]"},Fc={class:"grid grid-cols-2"},Rc=["value"],Dc=["value"],zc={key:3,class:"p-[2rem]"},jc={__name:"App",setup(e){const t=ue(""),n=ue(""),r=ue([]),a=ue(!1),i=ue([]),o=ue([]),s=ue(!1),l=ue(!1),c=ue(!1),d=ue(window.innerWidth),m=ue(""),h=ue(""),w=ue([]),R=ue([]),S=ue(!1),U=ue(),_=ue(!1);async function A(){w.value=[];const X=[await Or()],M=X[0].length;for(let B=0;M>B;B++){const z=X[0][B].title,$=z.toLowerCase(z).normalize("NFD").replace(/[\u0300-\u036f]/g,""),K=X[0][B].description,et=K.toLowerCase(K).normalize("NFD").replace(/[\u0300-\u036f]/g,""),Pe=X[0][B].id;w.value.push([{title:$,description:et,id:Pe}])}}const L=()=>{if(U.value!=h.value){const X=h.value.length;if(X>0){S.value=!0;const M=w.value.length,B=h.value,q=B.toLowerCase(B).normalize("NFD").replace(/[\u0300-\u036f]/g,"");R.value=[];for(let $=0;$<M;$++){const K=w.value[$][0].title,De=w.value[$][0].description,et=K.indexOf(q),Pe=De.indexOf(q);if(et>=0||Pe>=0){const Ee=o.value[$][0].title,pn=o.value[$][0].description,pr=w.value[$][0].id;R.value.push([{id:pr,title:Ee,description:pn}])}}}else R.value.length>0&&(S.value=!0,console.log("content",X),console.log("toggleSearch",S.value));U.value=h.value}},C=()=>{R.value="",h.value="",S.value=!1};function Y(){d.value=window.innerWidth,d.value<500?m.value=!0:m.value=!1}const oe=()=>{r.value[1]!=i.value[1]||r.value[2]!=i.value[2]?(setTimeout(()=>{l.value=!0},150),c.value=!0):(l.value=!1,c.value=!1)},se=X=>{const M=o.value.length;for(let B=0;B<M;B++)if(o.value[B][0].id===X){r.value="";const q=o.value[B][0].title,$=o.value[B][0].description;r.value=[X,q,$],i.value=[X,q,$],a.value=!0}};async function ve(){o.value=[];const X=[await Or()],M=X[0].length;for(let B=0;M>B;B++){const z=X[0][B].title,q=X[0][B].description,$=X[0][B].id;o.value.push([{title:z,description:q,id:$}])}}async function me(X){const M=t.value,B=n.value;if(M!=""||B!=""){await dc(M,B);const z=[await Or()],q=z[0].length-1,$=z[0][q].id;o.value.push([{title:M,description:B,id:$}]),t.value="",n.value="",s.value=!1,A()}_.value=!1,console.log(_)}const Ce=()=>{const X=r.value[0];mc(X),ve(),a.value=!1},ut=()=>{const X=r.value[0],M=r.value[1],B=r.value[2];pc(X,M,B),ve(),A(),a.value=!1};return Lo(()=>{ve(),A(),window.addEventListener("resize",Y),Y()}),(X,M)=>{const B=ql("font-awesome-icon");return pe(),be("section",null,[a.value?je("",!0):(pe(),be("nav",hc,[G("div",gc,[S.value?(pe(),be("span",vc,[G("button",{onClick:C},[ie(B,{icon:"fa-solid fa-arrow-left"})])])):je("",!0),G("input",$n(L(),{value:h.value,onInput:M[0]||(M[0]=z=>h.value=z.target.value),placeholder:"Pesquise suas notas",class:"bg-gray-100 break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-600"}),null,16,bc)])])),!_.value&&!a.value?(pe(),be("div",yc,[G("div",null,[G("div",xc,[G("div",wc,[(pe(!0),be(Te,null,ri(R.value,z=>(pe(),be("div",{class:"container shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] p-2 rounded-md mt-2 content-start break-words font-semibold hover:shadow-[0_7px_15px_1px_rgba(0,0,0,0.5)] dark:bg-zinc-900",key:z,onClick:q=>(se(z[0].id),s.value=!1)},[Yr(gn(z[0].title)+" ",1),G("p",kc,gn(z[0].description),1)],8,_c))),128))])])]),S.value?je("",!0):(pe(),be("div",Ac,[m.value?je("",!0):(pe(),be("div",Ec,[G("div",Oc,[s.value?(pe(),be("div",Cc,[G("button",{class:"place-self-start",onClick:M[1]||(M[1]=z=>(me(X.index),s.value=!1,a.value=!1))},[ie(B,{icon:"fa-solid fa-arrow-left"})]),G("button",{onClick:M[2]||(M[2]=z=>(s.value=!1,t.value=null,n.value=null)),class:"place-self-end"},[ie(B,{icon:"fa-solid fa-trash",style:{color:"#707070"}})])])):je("",!0),kn(G("input",{onClick:M[3]||(M[3]=z=>s.value=!0),id:"title",type:"text","onUpdate:modelValue":M[4]||(M[4]=z=>t.value=z),placeholder:"Título",class:"text-2xl font-bold break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900"},null,512),[[An,t.value]]),s.value?(pe(),be("div",Pc,[kn(G("textarea",{"onUpdate:modelValue":M[5]||(M[5]=z=>n.value=z),rows:"5",autoResize:"",class:"m-1 overflow-auto focus:outline-none w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-zinc-900",placeholder:"Criar uma nota",required:"",style:{}},null,512),[[An,n.value]])])):je("",!0)])])),G("div",Ic,[G("div",Sc,[(pe(!0),be(Te,null,ri(o.value,z=>(pe(),be("div",{class:"container shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] p-2 rounded-md mt-2 content-start break-words font-semibold hover:shadow-[0_7px_15px_1px_rgba(0,0,0,0.5)] dark:bg-zinc-900",key:z,onClick:q=>(se(z[0].id),s.value=!1)},[Yr(gn(z[0].title)+" ",1),G("p",Nc,gn(z[0].description),1)],8,Tc))),128))])])])),m.value&&!S.value?(pe(),be("footer",Mc,[G("button",{onClick:M[6]||(M[6]=z=>(_.value=!0,a.value=!0))},[ie(B,{icon:"fa-solid fa-circle-plus",size:"2xl"})])])):je("",!0)])):je("",!0),a.value?(pe(),be("div",Lc,[G("div",Fc,[G("button",{class:"place-self-start",onClick:M[7]||(M[7]=z=>(me(X.index),ut(),a.value=!1))},[ie(B,{icon:"fa-solid fa-arrow-left"})]),G("button",{onClick:M[8]||(M[8]=z=>(a.value=!1,Ce())),class:"place-self-end"},[ie(B,{icon:"fa-solid fa-trash",style:{color:"#707070"}})])]),G("input",$n(oe(),{value:r.value[1],onInput:M[9]||(M[9]=z=>r.value[1]=z.target.value),placeholder:"Título",class:"text-2xl font-bold break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900"}),null,16,Rc),G("textarea",$n(oe(),{value:r.value[2],onInput:M[10]||(M[10]=z=>r.value[2]=z.target.value),rows:"35",class:"overflow-auto focus:outline-none w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-zinc-900",placeholder:"Nota",required:"",style:{}}),null,16,Dc)])):je("",!0),_.value?(pe(),be("div",zc,[G("div",null,[G("button",{onClick:M[11]||(M[11]=z=>me(X.index))},[ie(B,{icon:"fa-solid fa-arrow-left"})])]),kn(G("input",{type:"text","onUpdate:modelValue":M[12]||(M[12]=z=>t.value=z),placeholder:"Título",class:"text-2xl font-bold break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900"},null,512),[[An,t.value]]),kn(G("textarea",{"onUpdate:modelValue":M[13]||(M[13]=z=>n.value=z),rows:"35",class:"overflow-auto focus:outline-none w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-zinc-900",placeholder:"Nota",required:"",style:{}},null,512),[[An,n.value]])])):je("",!0)])}}};function Pi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pi(Object(n),!0).forEach(function(r){fe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Xn(e){"@babel/helpers - typeof";return Xn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xn(e)}function $c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ii(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Bc(e,t,n){return t&&Ii(e.prototype,t),n&&Ii(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ia(e,t){return Hc(e)||Yc(e,t)||Go(e,t)||Vc()}function un(e){return Uc(e)||Wc(e)||Go(e)||Kc()}function Uc(e){if(Array.isArray(e))return qr(e)}function Hc(e){if(Array.isArray(e))return e}function Wc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Yc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Go(e,t){if(e){if(typeof e=="string")return qr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return qr(e,t)}}function qr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Kc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Si=function(){},Sa={},Zo={},Qo=null,es={mark:Si,measure:Si};try{typeof window<"u"&&(Sa=window),typeof document<"u"&&(Zo=document),typeof MutationObserver<"u"&&(Qo=MutationObserver),typeof performance<"u"&&(es=performance)}catch{}var Xc=Sa.navigator||{},Ti=Xc.userAgent,Ni=Ti===void 0?"":Ti,lt=Sa,te=Zo,Mi=Qo,En=es;lt.document;var Qe=!!te.documentElement&&!!te.head&&typeof te.addEventListener=="function"&&typeof te.createElement=="function",ts=~Ni.indexOf("MSIE")||~Ni.indexOf("Trident/"),On,Cn,Pn,In,Sn,qe="___FONT_AWESOME___",Jr=16,ns="fa",rs="svg-inline--fa",kt="data-fa-i2svg",Gr="data-fa-pseudo-element",qc="data-fa-pseudo-element-pending",Ta="data-prefix",Na="data-icon",Li="fontawesome-i2svg",Jc="async",Gc=["HTML","HEAD","STYLE","SCRIPT"],as=function(){try{return!0}catch{return!1}}(),ee="classic",re="sharp",Ma=[ee,re];function dn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ee]}})}var on=dn((On={},fe(On,ee,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),fe(On,re,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),On)),sn=dn((Cn={},fe(Cn,ee,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),fe(Cn,re,{solid:"fass",regular:"fasr",light:"fasl"}),Cn)),ln=dn((Pn={},fe(Pn,ee,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),fe(Pn,re,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Pn)),Zc=dn((In={},fe(In,ee,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),fe(In,re,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),In)),Qc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,is="fa-layers-text",eu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,tu=dn((Sn={},fe(Sn,ee,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),fe(Sn,re,{900:"fass",400:"fasr",300:"fasl"}),Sn)),os=[1,2,3,4,5,6,7,8,9,10],nu=os.concat([11,12,13,14,15,16,17,18,19,20]),ru=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],bt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},fn=new Set;Object.keys(sn[ee]).map(fn.add.bind(fn));Object.keys(sn[re]).map(fn.add.bind(fn));var au=[].concat(Ma,un(fn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",bt.GROUP,bt.SWAP_OPACITY,bt.PRIMARY,bt.SECONDARY]).concat(os.map(function(e){return"".concat(e,"x")})).concat(nu.map(function(e){return"w-".concat(e)})),Gt=lt.FontAwesomeConfig||{};function iu(e){var t=te.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ou(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(te&&typeof te.querySelector=="function"){var su=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];su.forEach(function(e){var t=Ia(e,2),n=t[0],r=t[1],a=ou(iu(n));a!=null&&(Gt[r]=a)})}var ss={styleDefault:"solid",familyDefault:"classic",cssPrefix:ns,replacementClass:rs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Gt.familyPrefix&&(Gt.cssPrefix=Gt.familyPrefix);var jt=O(O({},ss),Gt);jt.autoReplaceSvg||(jt.observeMutations=!1);var I={};Object.keys(ss).forEach(function(e){Object.defineProperty(I,e,{enumerable:!0,set:function(n){jt[e]=n,Zt.forEach(function(r){return r(I)})},get:function(){return jt[e]}})});Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(t){jt.cssPrefix=t,Zt.forEach(function(n){return n(I)})},get:function(){return jt.cssPrefix}});lt.FontAwesomeConfig=I;var Zt=[];function lu(e){return Zt.push(e),function(){Zt.splice(Zt.indexOf(e),1)}}var nt=Jr,He={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function fu(e){if(!(!e||!Qe)){var t=te.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=te.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return te.head.insertBefore(t,r),e}}var cu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function cn(){for(var e=12,t="";e-- >0;)t+=cu[Math.random()*62|0];return t}function Ht(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function La(e){return e.classList?Ht(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ls(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function uu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ls(e[n]),'" ')},"").trim()}function cr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Fa(e){return e.size!==He.size||e.x!==He.x||e.y!==He.y||e.rotate!==He.rotate||e.flipX||e.flipY}function du(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function mu(e){var t=e.transform,n=e.width,r=n===void 0?Jr:n,a=e.height,i=a===void 0?Jr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&ts?l+="translate(".concat(t.x/nt-r/2,"em, ").concat(t.y/nt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/nt,"em), calc(-50% + ").concat(t.y/nt,"em)) "):l+="translate(".concat(t.x/nt,"em, ").concat(t.y/nt,"em) "),l+="scale(".concat(t.size/nt*(t.flipX?-1:1),", ").concat(t.size/nt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var pu=`:root, :host {
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
}`;function fs(){var e=ns,t=rs,n=I.cssPrefix,r=I.replacementClass,a=pu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Fi=!1;function Cr(){I.autoAddCss&&!Fi&&(fu(fs()),Fi=!0)}var hu={mixout:function(){return{dom:{css:fs,insertCss:Cr}}},hooks:function(){return{beforeDOMElementCreation:function(){Cr()},beforeI2svg:function(){Cr()}}}},Je=lt||{};Je[qe]||(Je[qe]={});Je[qe].styles||(Je[qe].styles={});Je[qe].hooks||(Je[qe].hooks={});Je[qe].shims||(Je[qe].shims=[]);var Le=Je[qe],cs=[],gu=function e(){te.removeEventListener("DOMContentLoaded",e),qn=1,cs.map(function(t){return t()})},qn=!1;Qe&&(qn=(te.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(te.readyState),qn||te.addEventListener("DOMContentLoaded",gu));function vu(e){Qe&&(qn?setTimeout(e,0):cs.push(e))}function mn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?ls(e):"<".concat(t," ").concat(uu(r),">").concat(i.map(mn).join(""),"</").concat(t,">")}function Ri(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var bu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Pr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?bu(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function yu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Zr(e){var t=yu(e);return t.length===1?t[0].toString(16):null}function xu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Di(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Qr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Di(t);typeof Le.hooks.addPack=="function"&&!a?Le.hooks.addPack(e,Di(t)):Le.styles[e]=O(O({},Le.styles[e]||{}),i),e==="fas"&&Qr("fa",t)}var Tn,Nn,Mn,It=Le.styles,wu=Le.shims,_u=(Tn={},fe(Tn,ee,Object.values(ln[ee])),fe(Tn,re,Object.values(ln[re])),Tn),Ra=null,us={},ds={},ms={},ps={},hs={},ku=(Nn={},fe(Nn,ee,Object.keys(on[ee])),fe(Nn,re,Object.keys(on[re])),Nn);function Au(e){return~au.indexOf(e)}function Eu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Au(a)?a:null}var gs=function(){var t=function(i){return Pr(It,function(o,s,l){return o[l]=Pr(s,i,{}),o},{})};us=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),ds=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),hs=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in It||I.autoFetchSvg,r=Pr(wu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});ms=r.names,ps=r.unicodes,Ra=ur(I.styleDefault,{family:I.familyDefault})};lu(function(e){Ra=ur(e.styleDefault,{family:I.familyDefault})});gs();function Da(e,t){return(us[e]||{})[t]}function Ou(e,t){return(ds[e]||{})[t]}function yt(e,t){return(hs[e]||{})[t]}function vs(e){return ms[e]||{prefix:null,iconName:null}}function Cu(e){var t=ps[e],n=Da("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ft(){return Ra}var za=function(){return{prefix:null,iconName:null,rest:[]}};function ur(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ee:n,a=on[r][e],i=sn[r][e]||sn[r][a],o=e in Le.styles?e:null;return i||o||null}var zi=(Mn={},fe(Mn,ee,Object.keys(ln[ee])),fe(Mn,re,Object.keys(ln[re])),Mn);function dr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},fe(t,ee,"".concat(I.cssPrefix,"-").concat(ee)),fe(t,re,"".concat(I.cssPrefix,"-").concat(re)),t),o=null,s=ee;(e.includes(i[ee])||e.some(function(c){return zi[ee].includes(c)}))&&(s=ee),(e.includes(i[re])||e.some(function(c){return zi[re].includes(c)}))&&(s=re);var l=e.reduce(function(c,d){var m=Eu(I.cssPrefix,d);if(It[d]?(d=_u[s].includes(d)?Zc[s][d]:d,o=d,c.prefix=d):ku[s].indexOf(d)>-1?(o=d,c.prefix=ur(d,{family:s})):m?c.iconName=m:d!==I.replacementClass&&d!==i[ee]&&d!==i[re]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var h=o==="fa"?vs(c.iconName):{},w=yt(c.prefix,c.iconName);h.prefix&&(o=null),c.iconName=h.iconName||w||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!It.far&&It.fas&&!I.autoFetchSvg&&(c.prefix="fas")}return c},za());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===re&&(It.fass||I.autoFetchSvg)&&(l.prefix="fass",l.iconName=yt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=ft()||"fas"),l}var Pu=function(){function e(){$c(this,e),this.definitions={}}return Bc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),Qr(s,o[s]);var l=ln[ee][s];l&&Qr(l,o[s]),gs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),ji=[],St={},Ft={},Iu=Object.keys(Ft);function Su(e,t){var n=t.mixoutsTo;return ji=e,St={},Object.keys(Ft).forEach(function(r){Iu.indexOf(r)===-1&&delete Ft[r]}),ji.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Xn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){St[o]||(St[o]=[]),St[o].push(i[o])})}r.provides&&r.provides(Ft)}),n}function ea(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=St[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function At(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=St[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ge(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ft[e]?Ft[e].apply(null,t):void 0}function ta(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ft();if(t)return t=yt(n,t)||t,Ri(bs.definitions,n,t)||Ri(Le.styles,n,t)}var bs=new Pu,Tu=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,At("noAuto")},Nu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Qe?(At("beforeI2svg",t),Ge("pseudoElements2svg",t),Ge("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,vu(function(){Lu({autoReplaceSvgRoot:n}),At("watch",t)})}},Mu={icon:function(t){if(t===null)return null;if(Xn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:yt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ur(t[0]);return{prefix:r,iconName:yt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(I.cssPrefix,"-"))>-1||t.match(Qc))){var a=dr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||ft(),iconName:yt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=ft();return{prefix:i,iconName:yt(i,t)||t}}}},Ae={noAuto:Tu,config:I,dom:Nu,parse:Mu,library:bs,findIconDefinition:ta,toHtml:mn},Lu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?te:n;(Object.keys(Le.styles).length>0||I.autoFetchSvg)&&Qe&&I.autoReplaceSvg&&Ae.dom.i2svg({node:r})};function mr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return mn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Qe){var r=te.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Fu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Fa(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=cr(O(O({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Ru(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(I.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function ja(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,h=e.watchable,w=h===void 0?!1:h,R=r.found?r:n,S=R.width,U=R.height,_=a==="fak",A=[I.replacementClass,i?"".concat(I.cssPrefix,"-").concat(i):""].filter(function(me){return m.classes.indexOf(me)===-1}).filter(function(me){return me!==""||!!me}).concat(m.classes).join(" "),L={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:A,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(U)})},C=_&&!~m.classes.indexOf("fa-fw")?{width:"".concat(S/U*16*.0625,"em")}:{};w&&(L.attributes[kt]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(d||cn())},children:[l]}),delete L.attributes.title);var Y=O(O({},L),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:O(O({},C),m.styles)}),oe=r.found&&n.found?Ge("generateAbstractMask",Y)||{children:[],attributes:{}}:Ge("generateAbstractIcon",Y)||{children:[],attributes:{}},se=oe.children,ve=oe.attributes;return Y.children=se,Y.attributes=ve,s?Ru(Y):Fu(Y)}function $i(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[kt]="");var d=O({},o.styles);Fa(a)&&(d.transform=mu({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=cr(d);m.length>0&&(c.style=m);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Du(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=cr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ir=Le.styles;function na(e){var t=e[0],n=e[1],r=e.slice(4),a=Ia(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(I.cssPrefix,"-").concat(bt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(bt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(bt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var zu={found:!1,width:512,height:512};function ju(e,t){!as&&!I.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ra(e,t){var n=t;return t==="fa"&&I.styleDefault!==null&&(t=ft()),new Promise(function(r,a){if(Ge("missingIconAbstract"),n==="fa"){var i=vs(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Ir[t]&&Ir[t][e]){var o=Ir[t][e];return r(na(o))}ju(e,t),r(O(O({},zu),{},{icon:I.showMissingIcons&&e?Ge("missingIconAbstract")||{}:{}}))})}var Bi=function(){},aa=I.measurePerformance&&En&&En.mark&&En.measure?En:{mark:Bi,measure:Bi},Xt='FA "6.4.0"',$u=function(t){return aa.mark("".concat(Xt," ").concat(t," begins")),function(){return ys(t)}},ys=function(t){aa.mark("".concat(Xt," ").concat(t," ends")),aa.measure("".concat(Xt," ").concat(t),"".concat(Xt," ").concat(t," begins"),"".concat(Xt," ").concat(t," ends"))},$a={begin:$u,end:ys},Bn=function(){};function Ui(e){var t=e.getAttribute?e.getAttribute(kt):null;return typeof t=="string"}function Bu(e){var t=e.getAttribute?e.getAttribute(Ta):null,n=e.getAttribute?e.getAttribute(Na):null;return t&&n}function Uu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(I.replacementClass)}function Hu(){if(I.autoReplaceSvg===!0)return Un.replace;var e=Un[I.autoReplaceSvg];return e||Un.replace}function Wu(e){return te.createElementNS("http://www.w3.org/2000/svg",e)}function Yu(e){return te.createElement(e)}function xs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Wu:Yu:n;if(typeof e=="string")return te.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(xs(o,{ceFn:r}))}),a}function Ku(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Un={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(xs(a),n)}),n.getAttribute(kt)===null&&I.keepOriginalSource){var r=te.createComment(Ku(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~La(n).indexOf(I.replacementClass))return Un.replace(t);var a=new RegExp("".concat(I.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===I.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return mn(s)}).join(`
`);n.setAttribute(kt,""),n.innerHTML=o}};function Hi(e){e()}function ws(e,t){var n=typeof t=="function"?t:Bn;if(e.length===0)n();else{var r=Hi;I.mutateApproach===Jc&&(r=lt.requestAnimationFrame||Hi),r(function(){var a=Hu(),i=$a.begin("mutate");e.map(a),i(),n()})}}var Ba=!1;function _s(){Ba=!0}function ia(){Ba=!1}var Jn=null;function Wi(e){if(Mi&&I.observeMutations){var t=e.treeCallback,n=t===void 0?Bn:t,r=e.nodeCallback,a=r===void 0?Bn:r,i=e.pseudoElementsCallback,o=i===void 0?Bn:i,s=e.observeMutationsRoot,l=s===void 0?te:s;Jn=new Mi(function(c){if(!Ba){var d=ft();Ht(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ui(m.addedNodes[0])&&(I.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&I.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ui(m.target)&&~ru.indexOf(m.attributeName))if(m.attributeName==="class"&&Bu(m.target)){var h=dr(La(m.target)),w=h.prefix,R=h.iconName;m.target.setAttribute(Ta,w||d),R&&m.target.setAttribute(Na,R)}else Uu(m.target)&&a(m.target)})}}),Qe&&Jn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Vu(){Jn&&Jn.disconnect()}function Xu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function qu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=dr(La(e));return a.prefix||(a.prefix=ft()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Ou(a.prefix,e.innerText)||Da(a.prefix,Zr(e.innerText))),!a.iconName&&I.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Ju(e){var t=Ht(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return I.autoA11y&&(n?t["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||cn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Gu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:He,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Yi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=qu(e),r=n.iconName,a=n.prefix,i=n.rest,o=Ju(e),s=ea("parseNodeAttributes",{},e),l=t.styleParser?Xu(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:He,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Zu=Le.styles;function ks(e){var t=I.autoReplaceSvg==="nest"?Yi(e,{styleParser:!1}):Yi(e);return~t.extra.classes.indexOf(is)?Ge("generateLayersText",e,t):Ge("generateSvgReplacementMutation",e,t)}var ct=new Set;Ma.map(function(e){ct.add("fa-".concat(e))});Object.keys(on[ee]).map(ct.add.bind(ct));Object.keys(on[re]).map(ct.add.bind(ct));ct=un(ct);function Ki(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Qe)return Promise.resolve();var n=te.documentElement.classList,r=function(m){return n.add("".concat(Li,"-").concat(m))},a=function(m){return n.remove("".concat(Li,"-").concat(m))},i=I.autoFetchSvg?ct:Ma.map(function(d){return"fa-".concat(d)}).concat(Object.keys(Zu));i.includes("fa")||i.push("fa");var o=[".".concat(is,":not([").concat(kt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(kt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ht(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=$a.begin("onTree"),c=s.reduce(function(d,m){try{var h=ks(m);h&&d.push(h)}catch(w){as||w.name==="MissingIcon"&&console.error(w)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(h){ws(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(h){l(),m(h)})})}function Qu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ks(e).then(function(n){n&&ws([n],t)})}function ed(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ta(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ta(a||{})),e(r,O(O({},n),{},{mask:a}))}}var td=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?He:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,h=m===void 0?null:m,w=n.titleId,R=w===void 0?null:w,S=n.classes,U=S===void 0?[]:S,_=n.attributes,A=_===void 0?{}:_,L=n.styles,C=L===void 0?{}:L;if(t){var Y=t.prefix,oe=t.iconName,se=t.icon;return mr(O({type:"icon"},t),function(){return At("beforeDOMElementCreation",{iconDefinition:t,params:n}),I.autoA11y&&(h?A["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(R||cn()):(A["aria-hidden"]="true",A.focusable="false")),ja({icons:{main:na(se),mask:l?na(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:oe,transform:O(O({},He),a),symbol:o,title:h,maskId:d,titleId:R,extra:{attributes:A,styles:C,classes:U}})})}},nd={mixout:function(){return{icon:ed(td)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ki,n.nodeCallback=Qu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?te:r,i=n.callback,o=i===void 0?function(){}:i;return Ki(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,h=r.extra;return new Promise(function(w,R){Promise.all([ra(a,s),d.iconName?ra(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var U=Ia(S,2),_=U[0],A=U[1];w([n,ja({icons:{main:_,mask:A},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:h,watchable:!0})])}).catch(R)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=cr(s);l.length>0&&(a.style=l);var c;return Fa(o)&&(c=Ge("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},rd={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return mr({type:"layer"},function(){At("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(I.cssPrefix,"-layers")].concat(un(i)).join(" ")},children:o}]})}}}},ad={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return mr({type:"counter",content:n},function(){return At("beforeDOMElementCreation",{content:n,params:r}),Du({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(I.cssPrefix,"-layers-counter")].concat(un(s))}})})}}}},id={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?He:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,h=r.styles,w=h===void 0?{}:h;return mr({type:"text",content:n},function(){return At("beforeDOMElementCreation",{content:n,params:r}),$i({content:n,transform:O(O({},He),i),title:s,extra:{attributes:m,styles:w,classes:["".concat(I.cssPrefix,"-layers-text")].concat(un(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(ts){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return I.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,$i({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},od=new RegExp('"',"ug"),Vi=[1105920,1112319];function sd(e){var t=e.replace(od,""),n=xu(t,0),r=n>=Vi[0]&&n<=Vi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Zr(a?t[0]:t),isSecondary:r||a}}function Xi(e,t){var n="".concat(qc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ht(e.children),o=i.filter(function(se){return se.getAttribute(Gr)===t})[0],s=lt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(eu),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?re:ee,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?sn[h][l[2].toLowerCase()]:tu[h][c],R=sd(m),S=R.value,U=R.isSecondary,_=l[0].startsWith("FontAwesome"),A=Da(w,S),L=A;if(_){var C=Cu(S);C.iconName&&C.prefix&&(A=C.iconName,w=C.prefix)}if(A&&!U&&(!o||o.getAttribute(Ta)!==w||o.getAttribute(Na)!==L)){e.setAttribute(n,L),o&&e.removeChild(o);var Y=Gu(),oe=Y.extra;oe.attributes[Gr]=t,ra(A,w).then(function(se){var ve=ja(O(O({},Y),{},{icons:{main:se,mask:za()},prefix:w,iconName:L,extra:oe,watchable:!0})),me=te.createElement("svg");t==="::before"?e.insertBefore(me,e.firstChild):e.appendChild(me),me.outerHTML=ve.map(function(Ce){return mn(Ce)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function ld(e){return Promise.all([Xi(e,"::before"),Xi(e,"::after")])}function fd(e){return e.parentNode!==document.head&&!~Gc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Gr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function qi(e){if(Qe)return new Promise(function(t,n){var r=Ht(e.querySelectorAll("*")).filter(fd).map(ld),a=$a.begin("searchPseudoElements");_s(),Promise.all(r).then(function(){a(),ia(),t()}).catch(function(){a(),ia(),n()})})}var cd={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=qi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?te:r;I.searchPseudoElements&&qi(a)}}},Ji=!1,ud={mixout:function(){return{dom:{unwatch:function(){_s(),Ji=!0}}}},hooks:function(){return{bootstrap:function(){Wi(ea("mutationObserverCallbacks",{}))},noAuto:function(){Vu()},watch:function(n){var r=n.observeMutationsRoot;Ji?ia():Wi(ea("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Gi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},dd={mixout:function(){return{parse:{transform:function(n){return Gi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Gi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},h={transform:"translate(".concat(o/2*-1," -256)")},w={outer:s,inner:m,path:h};return{tag:"g",attributes:O({},w.outer),children:[{tag:"g",attributes:O({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),w.path)}]}]}}}},Sr={x:0,y:0,width:"100%",height:"100%"};function Zi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function md(e){return e.tag==="g"?e.children:[e]}var pd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?dr(a.split(" ").map(function(o){return o.trim()})):za();return i.prefix||(i.prefix=ft()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,h=o.icon,w=du({transform:l,containerWidth:m,iconWidth:c}),R={tag:"rect",attributes:O(O({},Sr),{},{fill:"white"})},S=d.children?{children:d.children.map(Zi)}:{},U={tag:"g",attributes:O({},w.inner),children:[Zi(O({tag:d.tag,attributes:O(O({},d.attributes),w.path)},S))]},_={tag:"g",attributes:O({},w.outer),children:[U]},A="mask-".concat(s||cn()),L="clip-".concat(s||cn()),C={tag:"mask",attributes:O(O({},Sr),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[R,_]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:md(h)},C]};return r.push(Y,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(A,")")},Sr)}),{children:r,attributes:a}}}},hd={provides:function(t){var n=!1;lt.matchMedia&&(n=lt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},gd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},vd=[hu,nd,rd,ad,id,cd,ud,dd,pd,hd,gd];Su(vd,{mixoutsTo:Ae});Ae.noAuto;Ae.config;var bd=Ae.library;Ae.dom;var oa=Ae.parse;Ae.findIconDefinition;Ae.toHtml;var yd=Ae.icon;Ae.layer;Ae.text;Ae.counter;function Qi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ve(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qi(Object(n),!0).forEach(function(r){xe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Gn(e){"@babel/helpers - typeof";return Gn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Gn(e)}function xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xd(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function wd(e,t){if(e==null)return{};var n=xd(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var _d=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},As={exports:{}};(function(e){(function(t){var n=function(_,A,L){if(!c(A)||m(A)||h(A)||w(A)||l(A))return A;var C,Y=0,oe=0;if(d(A))for(C=[],oe=A.length;Y<oe;Y++)C.push(n(_,A[Y],L));else{C={};for(var se in A)Object.prototype.hasOwnProperty.call(A,se)&&(C[_(se,L)]=n(_,A[se],L))}return C},r=function(_,A){A=A||{};var L=A.separator||"_",C=A.split||/(?=[A-Z])/;return _.split(C).join(L)},a=function(_){return R(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(A,L){return L?L.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},i=function(_){var A=a(_);return A.substr(0,1).toUpperCase()+A.substr(1)},o=function(_,A){return r(_,A).toLowerCase()},s=Object.prototype.toString,l=function(_){return typeof _=="function"},c=function(_){return _===Object(_)},d=function(_){return s.call(_)=="[object Array]"},m=function(_){return s.call(_)=="[object Date]"},h=function(_){return s.call(_)=="[object RegExp]"},w=function(_){return s.call(_)=="[object Boolean]"},R=function(_){return _=_-0,_===_},S=function(_,A){var L=A&&"process"in A?A.process:A;return typeof L!="function"?_:function(C,Y){return L(C,_,Y)}},U={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(_,A){return n(S(a,A),_)},decamelizeKeys:function(_,A){return n(S(o,A),_,A)},pascalizeKeys:function(_,A){return n(S(i,A),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=U:t.humps=U})(_d)})(As);var kd=As.exports,Ad=["class","style"];function Ed(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=kd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Od(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Es(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Es(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=Od(d);break;case"style":l.style=Ed(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=wd(n,Ad);return Sf(e.tag,Ve(Ve(Ve({},t),{},{class:a.class,style:Ve(Ve({},a.style),o)},a.attrs),s),r)}var Os=!1;try{Os=!0}catch{}function Cd(){if(!Os&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Tr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?xe({},e,t):{}}function Pd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},xe(t,"fa-".concat(e.size),e.size!==null),xe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),xe(t,"fa-pull-".concat(e.pull),e.pull!==null),xe(t,"fa-swap-opacity",e.swapOpacity),xe(t,"fa-bounce",e.bounce),xe(t,"fa-shake",e.shake),xe(t,"fa-beat",e.beat),xe(t,"fa-fade",e.fade),xe(t,"fa-beat-fade",e.beatFade),xe(t,"fa-flash",e.flash),xe(t,"fa-spin-pulse",e.spinPulse),xe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function eo(e){if(e&&Gn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(oa.icon)return oa.icon(e);if(e===null)return null;if(Gn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Id=Dl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=pt(function(){return eo(t.icon)}),i=pt(function(){return Tr("classes",Pd(t))}),o=pt(function(){return Tr("transform",typeof t.transform=="string"?oa.transform(t.transform):t.transform)}),s=pt(function(){return Tr("mask",eo(t.mask))}),l=pt(function(){return yd(a.value,Ve(Ve(Ve(Ve({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Rn(l,function(d){if(!d)return Cd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=pt(function(){return l.value?Es(l.value.abstract[0],{},r):null});return function(){return c.value}}}),Sd={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},Td={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},Nd={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},Md={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Ld={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]};bd.add(Nd,Md,Sd,Ld,Td);Qf(jc).component("font-awesome-icon",Id).mount("#app");
