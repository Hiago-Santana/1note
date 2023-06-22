(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function aa(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Z={},Tt=[],Re=()=>{},Ps=()=>!1,Is=/^on[^a-z]/,qn=e=>Is.test(e),ia=e=>e.startsWith("onUpdate:"),ce=Object.assign,oa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ss=Object.prototype.hasOwnProperty,W=(e,t)=>Ss.call(e,t),L=Array.isArray,Nt=e=>Jn(e)==="[object Map]",eo=e=>Jn(e)==="[object Set]",D=e=>typeof e=="function",se=e=>typeof e=="string",sa=e=>typeof e=="symbol",te=e=>e!==null&&typeof e=="object",to=e=>te(e)&&D(e.then)&&D(e.catch),no=Object.prototype.toString,Jn=e=>no.call(e),Ts=e=>Jn(e).slice(8,-1),ro=e=>Jn(e)==="[object Object]",la=e=>se(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Tn=aa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ns=/-(\w)/g,Ue=Gn(e=>e.replace(Ns,(t,n)=>n?n.toUpperCase():"")),Ms=/\B([A-Z])/g,$t=Gn(e=>e.replace(Ms,"-$1").toLowerCase()),Zn=Gn(e=>e.charAt(0).toUpperCase()+e.slice(1)),pr=Gn(e=>e?`on${Zn(e)}`:""),Qt=(e,t)=>!Object.is(e,t),Nn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},$n=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ir=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ua;const Sr=()=>Ua||(Ua=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fa(e){if(L(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=se(r)?Ds(r):fa(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(se(e))return e;if(te(e))return e}}const Ls=/;(?![^(]*\))/g,Fs=/:([^]+)/,Rs=/\/\*[^]*?\*\//g;function Ds(e){const t={};return e.replace(Rs,"").split(Ls).forEach(n=>{if(n){const r=n.split(Fs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Qn(e){let t="";if(se(e))t=e;else if(L(e))for(let n=0;n<e.length;n++){const r=Qn(e[n]);r&&(t+=r+" ")}else if(te(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const zs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",js=aa(zs);function ao(e){return!!e||e===""}const hn=e=>se(e)?e:e==null?"":L(e)||te(e)&&(e.toString===no||!D(e.toString))?JSON.stringify(e,io,2):String(e),io=(e,t)=>t&&t.__v_isRef?io(e,t.value):Nt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:eo(t)?{[`Set(${t.size})`]:[...t.values()]}:te(t)&&!L(t)&&!ro(t)?String(t):t;let Te;class $s{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Te,!t&&Te&&(this.index=(Te.scopes||(Te.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Te;try{return Te=this,t()}finally{Te=n}}}on(){Te=this}off(){Te=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Bs(e,t=Te){t&&t.active&&t.effects.push(e)}function Hs(){return Te}const ca=e=>{const t=new Set(e);return t.w=0,t.n=0,t},oo=e=>(e.w&st)>0,so=e=>(e.n&st)>0,Us=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=st},Ws=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];oo(a)&&!so(a)?a.delete(e):t[n++]=a,a.w&=~st,a.n&=~st}t.length=n}},Tr=new WeakMap;let Kt=0,st=1;const Nr=30;let Me;const yt=Symbol(""),Mr=Symbol("");class ua{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Bs(this,r)}run(){if(!this.active)return this.fn();let t=Me,n=at;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Me,Me=this,at=!0,st=1<<++Kt,Kt<=Nr?Us(this):Wa(this),this.fn()}finally{Kt<=Nr&&Ws(this),st=1<<--Kt,Me=this.parent,at=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Me===this?this.deferStop=!0:this.active&&(Wa(this),this.onStop&&this.onStop(),this.active=!1)}}function Wa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let at=!0;const lo=[];function Bt(){lo.push(at),at=!1}function Ht(){const e=lo.pop();at=e===void 0?!0:e}function _e(e,t,n){if(at&&Me){let r=Tr.get(e);r||Tr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=ca()),fo(a)}}function fo(e,t){let n=!1;Kt<=Nr?so(e)||(e.n|=st,n=!oo(e)):n=!e.has(Me),n&&(e.add(Me),Me.deps.push(e))}function Xe(e,t,n,r,a,i){const o=Tr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&L(e)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":L(e)?la(n)&&s.push(o.get("length")):(s.push(o.get(yt)),Nt(e)&&s.push(o.get(Mr)));break;case"delete":L(e)||(s.push(o.get(yt)),Nt(e)&&s.push(o.get(Mr)));break;case"set":Nt(e)&&s.push(o.get(yt));break}if(s.length===1)s[0]&&Lr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Lr(ca(l))}}function Lr(e,t){const n=L(e)?e:[...e];for(const r of n)r.computed&&Ya(r);for(const r of n)r.computed||Ya(r)}function Ya(e,t){(e!==Me||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Ys=aa("__proto__,__v_isRef,__isVue"),co=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(sa)),Ks=da(),Vs=da(!1,!0),Xs=da(!0),Ka=qs();function qs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=K(this);for(let i=0,o=this.length;i<o;i++)_e(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(K)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Bt();const r=K(this)[t].apply(this,n);return Ht(),r}}),e}function Js(e){const t=K(this);return _e(t,"has",e),t.hasOwnProperty(e)}function da(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?dl:go:t?ho:po).get(r))return r;const o=L(r);if(!e){if(o&&W(Ka,a))return Reflect.get(Ka,a,i);if(a==="hasOwnProperty")return Js}const s=Reflect.get(r,a,i);return(sa(a)?co.has(a):Ys(a))||(e||_e(r,"get",a),t)?s:he(s)?o&&la(a)?s:s.value:te(s)?e?vo(s):ha(s):s}}const Gs=uo(),Zs=uo(!0);function uo(e=!1){return function(n,r,a,i){let o=n[r];if(Rt(o)&&he(o)&&!he(a))return!1;if(!e&&(!Bn(a)&&!Rt(a)&&(o=K(o),a=K(a)),!L(n)&&he(o)&&!he(a)))return o.value=a,!0;const s=L(n)&&la(r)?Number(r)<n.length:W(n,r),l=Reflect.set(n,r,a,i);return n===K(i)&&(s?Qt(a,o)&&Xe(n,"set",r,a):Xe(n,"add",r,a)),l}}function Qs(e,t){const n=W(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Xe(e,"delete",t,void 0),r}function el(e,t){const n=Reflect.has(e,t);return(!sa(t)||!co.has(t))&&_e(e,"has",t),n}function tl(e){return _e(e,"iterate",L(e)?"length":yt),Reflect.ownKeys(e)}const mo={get:Ks,set:Gs,deleteProperty:Qs,has:el,ownKeys:tl},nl={get:Xs,set(e,t){return!0},deleteProperty(e,t){return!0}},rl=ce({},mo,{get:Vs,set:Zs}),ma=e=>e,er=e=>Reflect.getPrototypeOf(e);function gn(e,t,n=!1,r=!1){e=e.__v_raw;const a=K(e),i=K(t);n||(t!==i&&_e(a,"get",t),_e(a,"get",i));const{has:o}=er(a),s=r?ma:n?va:en;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function vn(e,t=!1){const n=this.__v_raw,r=K(n),a=K(e);return t||(e!==a&&_e(r,"has",e),_e(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function bn(e,t=!1){return e=e.__v_raw,!t&&_e(K(e),"iterate",yt),Reflect.get(e,"size",e)}function Va(e){e=K(e);const t=K(this);return er(t).has.call(t,e)||(t.add(e),Xe(t,"add",e,e)),this}function Xa(e,t){t=K(t);const n=K(this),{has:r,get:a}=er(n);let i=r.call(n,e);i||(e=K(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Qt(t,o)&&Xe(n,"set",e,t):Xe(n,"add",e,t),this}function qa(e){const t=K(this),{has:n,get:r}=er(t);let a=n.call(t,e);a||(e=K(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Xe(t,"delete",e,void 0),i}function Ja(){const e=K(this),t=e.size!==0,n=e.clear();return t&&Xe(e,"clear",void 0,void 0),n}function yn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=K(o),l=t?ma:e?va:en;return!e&&_e(s,"iterate",yt),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function xn(e,t,n){return function(...r){const a=this.__v_raw,i=K(a),o=Nt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?ma:t?va:en;return!t&&_e(i,"iterate",l?Mr:yt),{next(){const{value:m,done:h}=c.next();return h?{value:m,done:h}:{value:s?[d(m[0]),d(m[1])]:d(m),done:h}},[Symbol.iterator](){return this}}}}function et(e){return function(...t){return e==="delete"?!1:this}}function al(){const e={get(i){return gn(this,i)},get size(){return bn(this)},has:vn,add:Va,set:Xa,delete:qa,clear:Ja,forEach:yn(!1,!1)},t={get(i){return gn(this,i,!1,!0)},get size(){return bn(this)},has:vn,add:Va,set:Xa,delete:qa,clear:Ja,forEach:yn(!1,!0)},n={get(i){return gn(this,i,!0)},get size(){return bn(this,!0)},has(i){return vn.call(this,i,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:yn(!0,!1)},r={get(i){return gn(this,i,!0,!0)},get size(){return bn(this,!0)},has(i){return vn.call(this,i,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:yn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=xn(i,!1,!1),n[i]=xn(i,!0,!1),t[i]=xn(i,!1,!0),r[i]=xn(i,!0,!0)}),[e,n,t,r]}const[il,ol,sl,ll]=al();function pa(e,t){const n=t?e?ll:sl:e?ol:il;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(W(n,a)&&a in r?n:r,a,i)}const fl={get:pa(!1,!1)},cl={get:pa(!1,!0)},ul={get:pa(!0,!1)},po=new WeakMap,ho=new WeakMap,go=new WeakMap,dl=new WeakMap;function ml(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pl(e){return e.__v_skip||!Object.isExtensible(e)?0:ml(Ts(e))}function ha(e){return Rt(e)?e:ga(e,!1,mo,fl,po)}function hl(e){return ga(e,!1,rl,cl,ho)}function vo(e){return ga(e,!0,nl,ul,go)}function ga(e,t,n,r,a){if(!te(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=pl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Mt(e){return Rt(e)?Mt(e.__v_raw):!!(e&&e.__v_isReactive)}function Rt(e){return!!(e&&e.__v_isReadonly)}function Bn(e){return!!(e&&e.__v_isShallow)}function bo(e){return Mt(e)||Rt(e)}function K(e){const t=e&&e.__v_raw;return t?K(t):e}function yo(e){return $n(e,"__v_skip",!0),e}const en=e=>te(e)?ha(e):e,va=e=>te(e)?vo(e):e;function xo(e){at&&Me&&(e=K(e),fo(e.dep||(e.dep=ca())))}function wo(e,t){e=K(e);const n=e.dep;n&&Lr(n)}function he(e){return!!(e&&e.__v_isRef===!0)}function ge(e){return gl(e,!1)}function gl(e,t){return he(e)?e:new vl(e,t)}class vl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:K(t),this._value=n?t:en(t)}get value(){return xo(this),this._value}set value(t){const n=this.__v_isShallow||Bn(t)||Rt(t);t=n?t:K(t),Qt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:en(t),wo(this))}}function bl(e){return he(e)?e.value:e}const yl={get:(e,t,n)=>bl(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return he(a)&&!he(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function _o(e){return Mt(e)?e:new Proxy(e,yl)}class xl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ua(t,()=>{this._dirty||(this._dirty=!0,wo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=K(this);return xo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function wl(e,t,n=!1){let r,a;const i=D(e);return i?(r=e,a=Re):(r=e.get,a=e.set),new xl(r,a,i||!a,n)}function it(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){tr(i,t,n)}return a}function De(e,t,n,r){if(D(e)){const i=it(e,t,n,r);return i&&to(i)&&i.catch(o=>{tr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(De(e[i],t,n,r));return a}function tr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){it(l,null,10,[e,o,s]);return}}_l(e,n,a,r)}function _l(e,t,n,r=!0){console.error(e)}let tn=!1,Fr=!1;const pe=[];let Be=0;const Lt=[];let Ke=null,pt=0;const ko=Promise.resolve();let ba=null;function kl(e){const t=ba||ko;return e?t.then(this?e.bind(this):e):t}function Al(e){let t=Be+1,n=pe.length;for(;t<n;){const r=t+n>>>1;nn(pe[r])<e?t=r+1:n=r}return t}function ya(e){(!pe.length||!pe.includes(e,tn&&e.allowRecurse?Be+1:Be))&&(e.id==null?pe.push(e):pe.splice(Al(e.id),0,e),Ao())}function Ao(){!tn&&!Fr&&(Fr=!0,ba=ko.then(Oo))}function El(e){const t=pe.indexOf(e);t>Be&&pe.splice(t,1)}function Ol(e){L(e)?Lt.push(...e):(!Ke||!Ke.includes(e,e.allowRecurse?pt+1:pt))&&Lt.push(e),Ao()}function Ga(e,t=tn?Be+1:0){for(;t<pe.length;t++){const n=pe[t];n&&n.pre&&(pe.splice(t,1),t--,n())}}function Eo(e){if(Lt.length){const t=[...new Set(Lt)];if(Lt.length=0,Ke){Ke.push(...t);return}for(Ke=t,Ke.sort((n,r)=>nn(n)-nn(r)),pt=0;pt<Ke.length;pt++)Ke[pt]();Ke=null,pt=0}}const nn=e=>e.id==null?1/0:e.id,Cl=(e,t)=>{const n=nn(e)-nn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Oo(e){Fr=!1,tn=!0,pe.sort(Cl);const t=Re;try{for(Be=0;Be<pe.length;Be++){const n=pe[Be];n&&n.active!==!1&&it(n,null,14)}}finally{Be=0,pe.length=0,Eo(),tn=!1,ba=null,(pe.length||Lt.length)&&Oo()}}function Pl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Z;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[d]||Z;h&&(a=n.map(w=>se(w)?w.trim():w)),m&&(a=n.map(Ir))}let s,l=r[s=pr(t)]||r[s=pr(Ue(t))];!l&&i&&(l=r[s=pr($t(t))]),l&&De(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,De(c,e,6,a)}}function Co(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!D(e)){const l=c=>{const d=Co(c,t,!0);d&&(s=!0,ce(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(te(e)&&r.set(e,null),null):(L(i)?i.forEach(l=>o[l]=null):ce(o,i),te(e)&&r.set(e,o),o)}function nr(e,t){return!e||!qn(t)?!1:(t=t.slice(2).replace(/Once$/,""),W(e,t[0].toLowerCase()+t.slice(1))||W(e,$t(t))||W(e,t))}let Pe=null,Po=null;function Hn(e){const t=Pe;return Pe=e,Po=e&&e.type.__scopeId||null,t}function Il(e,t=Pe,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&ci(-1);const i=Hn(t);let o;try{o=e(...a)}finally{Hn(i),r._d&&ci(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function hr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:h,setupState:w,ctx:F,inheritAttrs:S}=e;let $,k;const A=Hn(e);try{if(n.shapeFlag&4){const C=a||r;$=$e(d.call(C,C,m,i,w,h,F)),k=l}else{const C=t;$=$e(C.length>1?C(i,{attrs:l,slots:s,emit:c}):C(i,null)),k=t.props?l:Sl(l)}}catch(C){Jt.length=0,tr(C,e,1),$=de(wt)}let M=$;if(k&&S!==!1){const C=Object.keys(k),{shapeFlag:Y}=M;C.length&&Y&7&&(o&&C.some(ia)&&(k=Tl(k,o)),M=Dt(M,k))}return n.dirs&&(M=Dt(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),$=M,Hn(A),$}const Sl=e=>{let t;for(const n in e)(n==="class"||n==="style"||qn(n))&&((t||(t={}))[n]=e[n]);return t},Tl=(e,t)=>{const n={};for(const r in e)(!ia(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Nl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Za(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const h=d[m];if(o[h]!==r[h]&&!nr(c,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Za(r,o,c):!0:!!o;return!1}function Za(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!nr(n,i))return!0}return!1}function Ml({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Ll=e=>e.__isSuspense;function Fl(e,t){t&&t.pendingBranch?L(e)?t.effects.push(...e):t.effects.push(e):Ol(e)}const wn={};function Mn(e,t,n){return Io(e,t,n)}function Io(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=Z){var s;const l=Hs()===((s=ue)==null?void 0:s.scope)?ue:null;let c,d=!1,m=!1;if(he(e)?(c=()=>e.value,d=Bn(e)):Mt(e)?(c=()=>e,r=!0):L(e)?(m=!0,d=e.some(C=>Mt(C)||Bn(C)),c=()=>e.map(C=>{if(he(C))return C.value;if(Mt(C))return gt(C);if(D(C))return it(C,l,2)})):D(e)?t?c=()=>it(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),De(e,l,3,[w])}:c=Re,t&&r){const C=c;c=()=>gt(C())}let h,w=C=>{h=A.onStop=()=>{it(C,l,4)}},F;if(an)if(w=Re,t?n&&De(t,l,3,[c(),m?[]:void 0,w]):c(),a==="sync"){const C=Nf();F=C.__watcherHandles||(C.__watcherHandles=[])}else return Re;let S=m?new Array(e.length).fill(wn):wn;const $=()=>{if(A.active)if(t){const C=A.run();(r||d||(m?C.some((Y,re)=>Qt(Y,S[re])):Qt(C,S)))&&(h&&h(),De(t,l,3,[C,S===wn?void 0:m&&S[0]===wn?[]:S,w]),S=C)}else A.run()};$.allowRecurse=!!t;let k;a==="sync"?k=$:a==="post"?k=()=>we($,l&&l.suspense):($.pre=!0,l&&($.id=l.uid),k=()=>ya($));const A=new ua(c,k);t?n?$():S=A.run():a==="post"?we(A.run.bind(A),l&&l.suspense):A.run();const M=()=>{A.stop(),l&&l.scope&&oa(l.scope.effects,A)};return F&&F.push(M),M}function Rl(e,t,n){const r=this.proxy,a=se(e)?e.includes(".")?So(r,e):()=>r[e]:e.bind(r,r);let i;D(t)?i=t:(i=t.handler,n=t);const o=ue;zt(this);const s=Io(a,i.bind(r),n);return o?zt(o):xt(),s}function So(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function gt(e,t){if(!te(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),he(e))gt(e.value,t);else if(L(e))for(let n=0;n<e.length;n++)gt(e[n],t);else if(eo(e)||Nt(e))e.forEach(n=>{gt(n,t)});else if(ro(e))for(const n in e)gt(e[n],t);return e}function Qa(e,t){const n=Pe;if(n===null)return e;const r=or(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=Z]=t[i];o&&(D(o)&&(o={mounted:o,updated:o}),o.deep&&gt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function ut(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Bt(),De(l,n,8,[e.el,s,e,t]),Ht())}}function Dl(e,t){return D(e)?(()=>ce({name:e.name},t,{setup:e}))():e}const Ln=e=>!!e.type.__asyncLoader,To=e=>e.type.__isKeepAlive;function zl(e,t){No(e,"a",t)}function jl(e,t){No(e,"da",t)}function No(e,t,n=ue){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(rr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)To(a.parent.vnode)&&$l(r,t,n,a),a=a.parent}}function $l(e,t,n,r){const a=rr(t,e,r,!0);Lo(()=>{oa(r[t],a)},n)}function rr(e,t,n=ue,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Bt(),zt(n);const s=De(t,n,e,o);return xt(),Ht(),s});return r?a.unshift(i):a.push(i),i}}const Ze=e=>(t,n=ue)=>(!an||e==="sp")&&rr(e,(...r)=>t(...r),n),Bl=Ze("bm"),Mo=Ze("m"),Hl=Ze("bu"),Ul=Ze("u"),Wl=Ze("bum"),Lo=Ze("um"),Yl=Ze("sp"),Kl=Ze("rtg"),Vl=Ze("rtc");function Xl(e,t=ue){rr("ec",e,t)}const Fo="components";function ql(e,t){return Gl(Fo,e,!0,t)||e}const Jl=Symbol.for("v-ndc");function Gl(e,t,n=!0,r=!1){const a=Pe||ue;if(a){const i=a.type;if(e===Fo){const s=Pf(i,!1);if(s&&(s===t||s===Ue(t)||s===Zn(Ue(t))))return i}const o=ei(a[e]||i[e],t)||ei(a.appContext[e],t);return!o&&r?i:o}}function ei(e,t){return e&&(e[t]||e[Ue(t)]||e[Zn(Ue(t))])}function ti(e,t,n,r){let a;const i=n&&n[r];if(L(e)||se(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(te(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Rr=e=>e?Ko(e)?or(e)||e.proxy:Rr(e.parent):null,qt=ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Rr(e.parent),$root:e=>Rr(e.root),$emit:e=>e.emit,$options:e=>xa(e),$forceUpdate:e=>e.f||(e.f=()=>ya(e.update)),$nextTick:e=>e.n||(e.n=kl.bind(e.proxy)),$watch:e=>Rl.bind(e)}),gr=(e,t)=>e!==Z&&!e.__isScriptSetup&&W(e,t),Zl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const w=o[t];if(w!==void 0)switch(w){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(gr(r,t))return o[t]=1,r[t];if(a!==Z&&W(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&W(c,t))return o[t]=3,i[t];if(n!==Z&&W(n,t))return o[t]=4,n[t];Dr&&(o[t]=0)}}const d=qt[t];let m,h;if(d)return t==="$attrs"&&_e(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==Z&&W(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,W(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return gr(a,t)?(a[t]=n,!0):r!==Z&&W(r,t)?(r[t]=n,!0):W(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==Z&&W(e,o)||gr(t,o)||(s=i[0])&&W(s,o)||W(r,o)||W(qt,o)||W(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:W(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ni(e){return L(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Dr=!0;function Ql(e){const t=xa(e),n=e.proxy,r=e.ctx;Dr=!1,t.beforeCreate&&ri(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:h,beforeUpdate:w,updated:F,activated:S,deactivated:$,beforeDestroy:k,beforeUnmount:A,destroyed:M,unmounted:C,render:Y,renderTracked:re,renderTriggered:fe,errorCaptured:ke,serverPrefetch:be,expose:U,inheritAttrs:B,components:H,directives:z,filters:me}=t;if(c&&ef(c,r,null),o)for(const G in o){const V=o[G];D(V)&&(r[G]=V.bind(n))}if(a){const G=a.call(n,n);te(G)&&(e.data=ha(G))}if(Dr=!0,i)for(const G in i){const V=i[G],Ie=D(V)?V.bind(n,n):D(V.get)?V.get.bind(n,n):Re,At=!D(V)&&D(V.set)?V.set.bind(n):Re,We=mt({get:Ie,set:At});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>We.value,set:Ce=>We.value=Ce})}if(s)for(const G in s)Ro(s[G],r,n,G);if(l){const G=D(l)?l.call(n):l;Reflect.ownKeys(G).forEach(V=>{sf(V,G[V])})}d&&ri(d,e,"c");function ae(G,V){L(V)?V.forEach(Ie=>G(Ie.bind(n))):V&&G(V.bind(n))}if(ae(Bl,m),ae(Mo,h),ae(Hl,w),ae(Ul,F),ae(zl,S),ae(jl,$),ae(Xl,ke),ae(Vl,re),ae(Kl,fe),ae(Wl,A),ae(Lo,C),ae(Yl,be),L(U))if(U.length){const G=e.exposed||(e.exposed={});U.forEach(V=>{Object.defineProperty(G,V,{get:()=>n[V],set:Ie=>n[V]=Ie})})}else e.exposed||(e.exposed={});Y&&e.render===Re&&(e.render=Y),B!=null&&(e.inheritAttrs=B),H&&(e.components=H),z&&(e.directives=z)}function ef(e,t,n=Re){L(e)&&(e=zr(e));for(const r in e){const a=e[r];let i;te(a)?"default"in a?i=Fn(a.from||r,a.default,!0):i=Fn(a.from||r):i=Fn(a),he(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function ri(e,t,n){De(L(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ro(e,t,n,r){const a=r.includes(".")?So(n,r):()=>n[r];if(se(e)){const i=t[e];D(i)&&Mn(a,i)}else if(D(e))Mn(a,e.bind(n));else if(te(e))if(L(e))e.forEach(i=>Ro(i,t,n,r));else{const i=D(e.handler)?e.handler.bind(n):t[e.handler];D(i)&&Mn(a,i,e)}}function xa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Un(l,c,o,!0)),Un(l,t,o)),te(t)&&i.set(t,l),l}function Un(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Un(e,i,n,!0),a&&a.forEach(o=>Un(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=tf[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const tf={data:ai,props:ii,emits:ii,methods:Vt,computed:Vt,beforeCreate:ve,created:ve,beforeMount:ve,mounted:ve,beforeUpdate:ve,updated:ve,beforeDestroy:ve,beforeUnmount:ve,destroyed:ve,unmounted:ve,activated:ve,deactivated:ve,errorCaptured:ve,serverPrefetch:ve,components:Vt,directives:Vt,watch:rf,provide:ai,inject:nf};function ai(e,t){return t?e?function(){return ce(D(e)?e.call(this,this):e,D(t)?t.call(this,this):t)}:t:e}function nf(e,t){return Vt(zr(e),zr(t))}function zr(e){if(L(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ve(e,t){return e?[...new Set([].concat(e,t))]:t}function Vt(e,t){return e?ce(Object.create(null),e,t):t}function ii(e,t){return e?L(e)&&L(t)?[...new Set([...e,...t])]:ce(Object.create(null),ni(e),ni(t??{})):t}function rf(e,t){if(!e)return t;if(!t)return e;const n=ce(Object.create(null),e);for(const r in t)n[r]=ve(e[r],t[r]);return n}function Do(){return{app:null,config:{isNativeTag:Ps,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let af=0;function of(e,t){return function(r,a=null){D(r)||(r=ce({},r)),a!=null&&!te(a)&&(a=null);const i=Do(),o=new Set;let s=!1;const l=i.app={_uid:af++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Mf,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&D(c.install)?(o.add(c),c.install(l,...d)):D(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const h=de(r,a);return h.appContext=i,d&&t?t(h,c):e(h,c,m),s=!0,l._container=c,c.__vue_app__=l,or(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){Wn=l;try{return c()}finally{Wn=null}}};return l}}let Wn=null;function sf(e,t){if(ue){let n=ue.provides;const r=ue.parent&&ue.parent.provides;r===n&&(n=ue.provides=Object.create(r)),n[e]=t}}function Fn(e,t,n=!1){const r=ue||Pe;if(r||Wn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Wn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&D(t)?t.call(r&&r.proxy):t}}function lf(e,t,n,r=!1){const a={},i={};$n(i,ir,1),e.propsDefaults=Object.create(null),zo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:hl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function ff(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=K(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let h=d[m];if(nr(e.emitsOptions,h))continue;const w=t[h];if(l)if(W(i,h))w!==i[h]&&(i[h]=w,c=!0);else{const F=Ue(h);a[F]=jr(l,s,F,w,e,!1)}else w!==i[h]&&(i[h]=w,c=!0)}}}else{zo(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!W(t,m)&&((d=$t(m))===m||!W(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=jr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!W(t,m))&&(delete i[m],c=!0)}c&&Xe(e,"set","$attrs")}function zo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Tn(l))continue;const c=t[l];let d;a&&W(a,d=Ue(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:nr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=K(n),c=s||Z;for(let d=0;d<i.length;d++){const m=i[d];n[m]=jr(a,l,m,c[m],e,!W(c,m))}}return o}function jr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=W(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&D(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(zt(a),r=c[n]=l.call(null,t),xt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===$t(n))&&(r=!0))}return r}function jo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!D(e)){const d=m=>{l=!0;const[h,w]=jo(m,t,!0);ce(o,h),w&&s.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return te(e)&&r.set(e,Tt),Tt;if(L(i))for(let d=0;d<i.length;d++){const m=Ue(i[d]);oi(m)&&(o[m]=Z)}else if(i)for(const d in i){const m=Ue(d);if(oi(m)){const h=i[d],w=o[m]=L(h)||D(h)?{type:h}:ce({},h);if(w){const F=fi(Boolean,w.type),S=fi(String,w.type);w[0]=F>-1,w[1]=S<0||F<S,(F>-1||W(w,"default"))&&s.push(m)}}}const c=[o,s];return te(e)&&r.set(e,c),c}function oi(e){return e[0]!=="$"}function si(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function li(e,t){return si(e)===si(t)}function fi(e,t){return L(t)?t.findIndex(n=>li(n,e)):D(t)&&li(t,e)?0:-1}const $o=e=>e[0]==="_"||e==="$stable",wa=e=>L(e)?e.map($e):[$e(e)],cf=(e,t,n)=>{if(t._n)return t;const r=Il((...a)=>wa(t(...a)),n);return r._c=!1,r},Bo=(e,t,n)=>{const r=e._ctx;for(const a in e){if($o(a))continue;const i=e[a];if(D(i))t[a]=cf(a,i,r);else if(i!=null){const o=wa(i);t[a]=()=>o}}},Ho=(e,t)=>{const n=wa(t);e.slots.default=()=>n},uf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=K(t),$n(t,"_",n)):Bo(t,e.slots={})}else e.slots={},t&&Ho(e,t);$n(e.slots,ir,1)},df=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=Z;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ce(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Bo(t,a)),o=t}else t&&(Ho(e,t),o={default:1});if(i)for(const s in a)!$o(s)&&!(s in o)&&delete a[s]};function $r(e,t,n,r,a=!1){if(L(e)){e.forEach((h,w)=>$r(h,t&&(L(t)?t[w]:t),n,r,a));return}if(Ln(r)&&!a)return;const i=r.shapeFlag&4?or(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===Z?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(se(c)?(d[c]=null,W(m,c)&&(m[c]=null)):he(c)&&(c.value=null)),D(l))it(l,s,12,[o,d]);else{const h=se(l),w=he(l);if(h||w){const F=()=>{if(e.f){const S=h?W(m,l)?m[l]:d[l]:l.value;a?L(S)&&oa(S,i):L(S)?S.includes(i)||S.push(i):h?(d[l]=[i],W(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else h?(d[l]=o,W(m,l)&&(m[l]=o)):w&&(l.value=o,e.k&&(d[e.k]=o))};o?(F.id=-1,we(F,n)):F()}}}const we=Fl;function mf(e){return pf(e)}function pf(e,t){const n=Sr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:h,setScopeId:w=Re,insertStaticContent:F}=e,S=(f,u,p,v=null,g=null,x=null,E=!1,y=null,_=!!u.dynamicChildren)=>{if(f===u)return;f&&!Yt(f,u)&&(v=pn(f),Ce(f,g,x,!0),f=null),u.patchFlag===-2&&(_=!1,u.dynamicChildren=null);const{type:b,ref:T,shapeFlag:P}=u;switch(b){case ar:$(f,u,p,v);break;case wt:k(f,u,p,v);break;case vr:f==null&&A(u,p,v,E);break;case Ne:H(f,u,p,v,g,x,E,y,_);break;default:P&1?Y(f,u,p,v,g,x,E,y,_):P&6?z(f,u,p,v,g,x,E,y,_):(P&64||P&128)&&b.process(f,u,p,v,g,x,E,y,_,Et)}T!=null&&g&&$r(T,f&&f.ref,x,u||f,!u)},$=(f,u,p,v)=>{if(f==null)r(u.el=s(u.children),p,v);else{const g=u.el=f.el;u.children!==f.children&&c(g,u.children)}},k=(f,u,p,v)=>{f==null?r(u.el=l(u.children||""),p,v):u.el=f.el},A=(f,u,p,v)=>{[f.el,f.anchor]=F(f.children,u,p,v,f.el,f.anchor)},M=({el:f,anchor:u},p,v)=>{let g;for(;f&&f!==u;)g=h(f),r(f,p,v),f=g;r(u,p,v)},C=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=h(f),a(f),f=p;a(u)},Y=(f,u,p,v,g,x,E,y,_)=>{E=E||u.type==="svg",f==null?re(u,p,v,g,x,E,y,_):be(f,u,g,x,E,y,_)},re=(f,u,p,v,g,x,E,y)=>{let _,b;const{type:T,props:P,shapeFlag:N,transition:R,dirs:j}=f;if(_=f.el=o(f.type,x,P&&P.is,P),N&8?d(_,f.children):N&16&&ke(f.children,_,null,v,g,x&&T!=="foreignObject",E,y),j&&ut(f,null,v,"created"),fe(_,f,f.scopeId,E,v),P){for(const X in P)X!=="value"&&!Tn(X)&&i(_,X,null,P[X],x,f.children,v,g,Ye);"value"in P&&i(_,"value",null,P.value),(b=P.onVnodeBeforeMount)&&je(b,v,f)}j&&ut(f,null,v,"beforeMount");const J=(!g||g&&!g.pendingBranch)&&R&&!R.persisted;J&&R.beforeEnter(_),r(_,u,p),((b=P&&P.onVnodeMounted)||J||j)&&we(()=>{b&&je(b,v,f),J&&R.enter(_),j&&ut(f,null,v,"mounted")},g)},fe=(f,u,p,v,g)=>{if(p&&w(f,p),v)for(let x=0;x<v.length;x++)w(f,v[x]);if(g){let x=g.subTree;if(u===x){const E=g.vnode;fe(f,E,E.scopeId,E.slotScopeIds,g.parent)}}},ke=(f,u,p,v,g,x,E,y,_=0)=>{for(let b=_;b<f.length;b++){const T=f[b]=y?rt(f[b]):$e(f[b]);S(null,T,u,p,v,g,x,E,y)}},be=(f,u,p,v,g,x,E)=>{const y=u.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:T}=u;_|=f.patchFlag&16;const P=f.props||Z,N=u.props||Z;let R;p&&dt(p,!1),(R=N.onVnodeBeforeUpdate)&&je(R,p,u,f),T&&ut(u,f,p,"beforeUpdate"),p&&dt(p,!0);const j=g&&u.type!=="foreignObject";if(b?U(f.dynamicChildren,b,y,p,v,j,x):E||V(f,u,y,null,p,v,j,x,!1),_>0){if(_&16)B(y,u,P,N,p,v,g);else if(_&2&&P.class!==N.class&&i(y,"class",null,N.class,g),_&4&&i(y,"style",P.style,N.style,g),_&8){const J=u.dynamicProps;for(let X=0;X<J.length;X++){const ie=J[X],Se=P[ie],Ot=N[ie];(Ot!==Se||ie==="value")&&i(y,ie,Se,Ot,g,f.children,p,v,Ye)}}_&1&&f.children!==u.children&&d(y,u.children)}else!E&&b==null&&B(y,u,P,N,p,v,g);((R=N.onVnodeUpdated)||T)&&we(()=>{R&&je(R,p,u,f),T&&ut(u,f,p,"updated")},v)},U=(f,u,p,v,g,x,E)=>{for(let y=0;y<u.length;y++){const _=f[y],b=u[y],T=_.el&&(_.type===Ne||!Yt(_,b)||_.shapeFlag&70)?m(_.el):p;S(_,b,T,null,v,g,x,E,!0)}},B=(f,u,p,v,g,x,E)=>{if(p!==v){if(p!==Z)for(const y in p)!Tn(y)&&!(y in v)&&i(f,y,p[y],null,E,u.children,g,x,Ye);for(const y in v){if(Tn(y))continue;const _=v[y],b=p[y];_!==b&&y!=="value"&&i(f,y,b,_,E,u.children,g,x,Ye)}"value"in v&&i(f,"value",p.value,v.value)}},H=(f,u,p,v,g,x,E,y,_)=>{const b=u.el=f?f.el:s(""),T=u.anchor=f?f.anchor:s("");let{patchFlag:P,dynamicChildren:N,slotScopeIds:R}=u;R&&(y=y?y.concat(R):R),f==null?(r(b,p,v),r(T,p,v),ke(u.children,p,T,g,x,E,y,_)):P>0&&P&64&&N&&f.dynamicChildren?(U(f.dynamicChildren,N,p,g,x,E,y),(u.key!=null||g&&u===g.subTree)&&Uo(f,u,!0)):V(f,u,p,T,g,x,E,y,_)},z=(f,u,p,v,g,x,E,y,_)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?g.ctx.activate(u,p,v,E,_):me(u,p,v,g,x,E,_):oe(f,u,_)},me=(f,u,p,v,g,x,E)=>{const y=f.component=kf(f,v,g);if(To(f)&&(y.ctx.renderer=Et),Af(y),y.asyncDep){if(g&&g.registerDep(y,ae),!f.el){const _=y.subTree=de(wt);k(null,_,u,p)}return}ae(y,f,u,p,g,x,E)},oe=(f,u,p)=>{const v=u.component=f.component;if(Nl(f,u,p))if(v.asyncDep&&!v.asyncResolved){G(v,u,p);return}else v.next=u,El(v.update),v.update();else u.el=f.el,v.vnode=u},ae=(f,u,p,v,g,x,E)=>{const y=()=>{if(f.isMounted){let{next:T,bu:P,u:N,parent:R,vnode:j}=f,J=T,X;dt(f,!1),T?(T.el=j.el,G(f,T,E)):T=j,P&&Nn(P),(X=T.props&&T.props.onVnodeBeforeUpdate)&&je(X,R,T,j),dt(f,!0);const ie=hr(f),Se=f.subTree;f.subTree=ie,S(Se,ie,m(Se.el),pn(Se),f,g,x),T.el=ie.el,J===null&&Ml(f,ie.el),N&&we(N,g),(X=T.props&&T.props.onVnodeUpdated)&&we(()=>je(X,R,T,j),g)}else{let T;const{el:P,props:N}=u,{bm:R,m:j,parent:J}=f,X=Ln(u);if(dt(f,!1),R&&Nn(R),!X&&(T=N&&N.onVnodeBeforeMount)&&je(T,J,u),dt(f,!0),P&&mr){const ie=()=>{f.subTree=hr(f),mr(P,f.subTree,f,g,null)};X?u.type.__asyncLoader().then(()=>!f.isUnmounted&&ie()):ie()}else{const ie=f.subTree=hr(f);S(null,ie,p,v,f,g,x),u.el=ie.el}if(j&&we(j,g),!X&&(T=N&&N.onVnodeMounted)){const ie=u;we(()=>je(T,J,ie),g)}(u.shapeFlag&256||J&&Ln(J.vnode)&&J.vnode.shapeFlag&256)&&f.a&&we(f.a,g),f.isMounted=!0,u=p=v=null}},_=f.effect=new ua(y,()=>ya(b),f.scope),b=f.update=()=>_.run();b.id=f.uid,dt(f,!0),b()},G=(f,u,p)=>{u.component=f;const v=f.vnode.props;f.vnode=u,f.next=null,ff(f,u.props,v,p),df(f,u.children,p),Bt(),Ga(),Ht()},V=(f,u,p,v,g,x,E,y,_=!1)=>{const b=f&&f.children,T=f?f.shapeFlag:0,P=u.children,{patchFlag:N,shapeFlag:R}=u;if(N>0){if(N&128){At(b,P,p,v,g,x,E,y,_);return}else if(N&256){Ie(b,P,p,v,g,x,E,y,_);return}}R&8?(T&16&&Ye(b,g,x),P!==b&&d(p,P)):T&16?R&16?At(b,P,p,v,g,x,E,y,_):Ye(b,g,x,!0):(T&8&&d(p,""),R&16&&ke(P,p,v,g,x,E,y,_))},Ie=(f,u,p,v,g,x,E,y,_)=>{f=f||Tt,u=u||Tt;const b=f.length,T=u.length,P=Math.min(b,T);let N;for(N=0;N<P;N++){const R=u[N]=_?rt(u[N]):$e(u[N]);S(f[N],R,p,null,g,x,E,y,_)}b>T?Ye(f,g,x,!0,!1,P):ke(u,p,v,g,x,E,y,_,P)},At=(f,u,p,v,g,x,E,y,_)=>{let b=0;const T=u.length;let P=f.length-1,N=T-1;for(;b<=P&&b<=N;){const R=f[b],j=u[b]=_?rt(u[b]):$e(u[b]);if(Yt(R,j))S(R,j,p,null,g,x,E,y,_);else break;b++}for(;b<=P&&b<=N;){const R=f[P],j=u[N]=_?rt(u[N]):$e(u[N]);if(Yt(R,j))S(R,j,p,null,g,x,E,y,_);else break;P--,N--}if(b>P){if(b<=N){const R=N+1,j=R<T?u[R].el:v;for(;b<=N;)S(null,u[b]=_?rt(u[b]):$e(u[b]),p,j,g,x,E,y,_),b++}}else if(b>N)for(;b<=P;)Ce(f[b],g,x,!0),b++;else{const R=b,j=b,J=new Map;for(b=j;b<=N;b++){const Ae=u[b]=_?rt(u[b]):$e(u[b]);Ae.key!=null&&J.set(Ae.key,b)}let X,ie=0;const Se=N-j+1;let Ot=!1,$a=0;const Wt=new Array(Se);for(b=0;b<Se;b++)Wt[b]=0;for(b=R;b<=P;b++){const Ae=f[b];if(ie>=Se){Ce(Ae,g,x,!0);continue}let ze;if(Ae.key!=null)ze=J.get(Ae.key);else for(X=j;X<=N;X++)if(Wt[X-j]===0&&Yt(Ae,u[X])){ze=X;break}ze===void 0?Ce(Ae,g,x,!0):(Wt[ze-j]=b+1,ze>=$a?$a=ze:Ot=!0,S(Ae,u[ze],p,null,g,x,E,y,_),ie++)}const Ba=Ot?hf(Wt):Tt;for(X=Ba.length-1,b=Se-1;b>=0;b--){const Ae=j+b,ze=u[Ae],Ha=Ae+1<T?u[Ae+1].el:v;Wt[b]===0?S(null,ze,p,Ha,g,x,E,y,_):Ot&&(X<0||b!==Ba[X]?We(ze,p,Ha,2):X--)}}},We=(f,u,p,v,g=null)=>{const{el:x,type:E,transition:y,children:_,shapeFlag:b}=f;if(b&6){We(f.component.subTree,u,p,v);return}if(b&128){f.suspense.move(u,p,v);return}if(b&64){E.move(f,u,p,Et);return}if(E===Ne){r(x,u,p);for(let P=0;P<_.length;P++)We(_[P],u,p,v);r(f.anchor,u,p);return}if(E===vr){M(f,u,p);return}if(v!==2&&b&1&&y)if(v===0)y.beforeEnter(x),r(x,u,p),we(()=>y.enter(x),g);else{const{leave:P,delayLeave:N,afterLeave:R}=y,j=()=>r(x,u,p),J=()=>{P(x,()=>{j(),R&&R()})};N?N(x,j,J):J()}else r(x,u,p)},Ce=(f,u,p,v=!1,g=!1)=>{const{type:x,props:E,ref:y,children:_,dynamicChildren:b,shapeFlag:T,patchFlag:P,dirs:N}=f;if(y!=null&&$r(y,null,p,f,!0),T&256){u.ctx.deactivate(f);return}const R=T&1&&N,j=!Ln(f);let J;if(j&&(J=E&&E.onVnodeBeforeUnmount)&&je(J,u,f),T&6)Cs(f.component,p,v);else{if(T&128){f.suspense.unmount(p,v);return}R&&ut(f,null,u,"beforeUnmount"),T&64?f.type.remove(f,u,p,g,Et,v):b&&(x!==Ne||P>0&&P&64)?Ye(b,u,p,!1,!0):(x===Ne&&P&384||!g&&T&16)&&Ye(_,u,p),v&&za(f)}(j&&(J=E&&E.onVnodeUnmounted)||R)&&we(()=>{J&&je(J,u,f),R&&ut(f,null,u,"unmounted")},p)},za=f=>{const{type:u,el:p,anchor:v,transition:g}=f;if(u===Ne){Os(p,v);return}if(u===vr){C(f);return}const x=()=>{a(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:E,delayLeave:y}=g,_=()=>E(p,x);y?y(f.el,x,_):_()}else x()},Os=(f,u)=>{let p;for(;f!==u;)p=h(f),a(f),f=p;a(u)},Cs=(f,u,p)=>{const{bum:v,scope:g,update:x,subTree:E,um:y}=f;v&&Nn(v),g.stop(),x&&(x.active=!1,Ce(E,f,u,p)),y&&we(y,u),we(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Ye=(f,u,p,v=!1,g=!1,x=0)=>{for(let E=x;E<f.length;E++)Ce(f[E],u,p,v,g)},pn=f=>f.shapeFlag&6?pn(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),ja=(f,u,p)=>{f==null?u._vnode&&Ce(u._vnode,null,null,!0):S(u._vnode||null,f,u,null,null,null,p),Ga(),Eo(),u._vnode=f},Et={p:S,um:Ce,m:We,r:za,mt:me,mc:ke,pc:V,pbc:U,n:pn,o:e};let dr,mr;return t&&([dr,mr]=t(Et)),{render:ja,hydrate:dr,createApp:of(ja,dr)}}function dt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Uo(e,t,n=!1){const r=e.children,a=t.children;if(L(r)&&L(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=rt(a[i]),s.el=o.el),n||Uo(o,s)),s.type===ar&&(s.el=o.el)}}function hf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const gf=e=>e.__isTeleport,Ne=Symbol.for("v-fgt"),ar=Symbol.for("v-txt"),wt=Symbol.for("v-cmt"),vr=Symbol.for("v-stc"),Jt=[];let Le=null;function ye(e=!1){Jt.push(Le=e?null:[])}function vf(){Jt.pop(),Le=Jt[Jt.length-1]||null}let rn=1;function ci(e){rn+=e}function Wo(e){return e.dynamicChildren=rn>0?Le||Tt:null,vf(),rn>0&&Le&&Le.push(e),e}function Ee(e,t,n,r,a,i){return Wo(q(e,t,n,r,a,i,!0))}function bf(e,t,n,r,a){return Wo(de(e,t,n,r,a,!0))}function Br(e){return e?e.__v_isVNode===!0:!1}function Yt(e,t){return e.type===t.type&&e.key===t.key}const ir="__vInternal",Yo=({key:e})=>e??null,Rn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?se(e)||he(e)||D(e)?{i:Pe,r:e,k:t,f:!!n}:e:null);function q(e,t=null,n=null,r=0,a=null,i=e===Ne?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Yo(t),ref:t&&Rn(t),scopeId:Po,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Pe};return s?(_a(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=se(n)?8:16),rn>0&&!o&&Le&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Le.push(l),l}const de=yf;function yf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Jl)&&(e=wt),Br(e)){const s=Dt(e,t,!0);return n&&_a(s,n),rn>0&&!i&&Le&&(s.shapeFlag&6?Le[Le.indexOf(e)]=s:Le.push(s)),s.patchFlag|=-2,s}if(If(e)&&(e=e.__vccOpts),t){t=xf(t);let{class:s,style:l}=t;s&&!se(s)&&(t.class=Qn(s)),te(l)&&(bo(l)&&!L(l)&&(l=ce({},l)),t.style=fa(l))}const o=se(e)?1:Ll(e)?128:gf(e)?64:te(e)?4:D(e)?2:0;return q(e,t,n,r,a,o,i,!0)}function xf(e){return e?bo(e)||ir in e?ce({},e):e:null}function Dt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Dn(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Yo(s),ref:t&&t.ref?n&&a?L(a)?a.concat(Rn(t)):[a,Rn(t)]:Rn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ne?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Dt(e.ssContent),ssFallback:e.ssFallback&&Dt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Hr(e=" ",t=0){return de(ar,null,e,t)}function tt(e="",t=!1){return t?(ye(),bf(wt,null,e)):de(wt,null,e)}function $e(e){return e==null||typeof e=="boolean"?de(wt):L(e)?de(Ne,null,e.slice()):typeof e=="object"?rt(e):de(ar,null,String(e))}function rt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Dt(e)}function _a(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(L(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),_a(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(ir in t)?t._ctx=Pe:a===3&&Pe&&(Pe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else D(t)?(t={default:t,_ctx:Pe},n=32):(t=String(t),r&64?(n=16,t=[Hr(t)]):n=8);e.children=t,e.shapeFlag|=n}function Dn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Qn([t.class,r.class]));else if(a==="style")t.style=fa([t.style,r.style]);else if(qn(a)){const i=t[a],o=r[a];o&&i!==o&&!(L(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function je(e,t,n,r=null){De(e,t,7,[n,r])}const wf=Do();let _f=0;function kf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||wf,i={uid:_f++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new $s(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jo(r,a),emitsOptions:Co(r,a),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Pl.bind(null,i),e.ce&&e.ce(i),i}let ue=null,ka,Ct,ui="__VUE_INSTANCE_SETTERS__";(Ct=Sr()[ui])||(Ct=Sr()[ui]=[]),Ct.push(e=>ue=e),ka=e=>{Ct.length>1?Ct.forEach(t=>t(e)):Ct[0](e)};const zt=e=>{ka(e),e.scope.on()},xt=()=>{ue&&ue.scope.off(),ka(null)};function Ko(e){return e.vnode.shapeFlag&4}let an=!1;function Af(e,t=!1){an=t;const{props:n,children:r}=e.vnode,a=Ko(e);lf(e,n,a,t),uf(e,r);const i=a?Ef(e,t):void 0;return an=!1,i}function Ef(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=yo(new Proxy(e.ctx,Zl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Cf(e):null;zt(e),Bt();const i=it(r,e,0,[e.props,a]);if(Ht(),xt(),to(i)){if(i.then(xt,xt),t)return i.then(o=>{di(e,o,t)}).catch(o=>{tr(o,e,0)});e.asyncDep=i}else di(e,i,t)}else Vo(e,t)}function di(e,t,n){D(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:te(t)&&(e.setupState=_o(t)),Vo(e,n)}let mi;function Vo(e,t,n){const r=e.type;if(!e.render){if(!t&&mi&&!r.render){const a=r.template||xa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ce(ce({isCustomElement:i,delimiters:s},o),l);r.render=mi(a,c)}}e.render=r.render||Re}zt(e),Bt(),Ql(e),Ht(),xt()}function Of(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return _e(e,"get","$attrs"),t[n]}}))}function Cf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Of(e)},slots:e.slots,emit:e.emit,expose:t}}function or(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(_o(yo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in qt)return qt[n](e)},has(t,n){return n in t||n in qt}}))}function Pf(e,t=!0){return D(e)?e.displayName||e.name:e.name||t&&e.__name}function If(e){return D(e)&&"__vccOpts"in e}const mt=(e,t)=>wl(e,t,an);function Sf(e,t,n){const r=arguments.length;return r===2?te(t)&&!L(t)?Br(t)?de(e,null,[t]):de(e,t):de(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Br(n)&&(n=[n]),de(e,t,n))}const Tf=Symbol.for("v-scx"),Nf=()=>Fn(Tf),Mf="3.3.4",Lf="http://www.w3.org/2000/svg",ht=typeof document<"u"?document:null,pi=ht&&ht.createElement("template"),Ff={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?ht.createElementNS(Lf,e):ht.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ht.createTextNode(e),createComment:e=>ht.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ht.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{pi.innerHTML=r?`<svg>${e}</svg>`:e;const s=pi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Rf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Df(e,t,n){const r=e.style,a=se(n);if(n&&!a){if(t&&!se(t))for(const i in t)n[i]==null&&Ur(r,i,"");for(const i in n)Ur(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const hi=/\s*!important$/;function Ur(e,t,n){if(L(n))n.forEach(r=>Ur(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=zf(e,t);hi.test(n)?e.setProperty($t(r),n.replace(hi,""),"important"):e[r]=n}}const gi=["Webkit","Moz","ms"],br={};function zf(e,t){const n=br[t];if(n)return n;let r=Ue(t);if(r!=="filter"&&r in e)return br[t]=r;r=Zn(r);for(let a=0;a<gi.length;a++){const i=gi[a]+r;if(i in e)return br[t]=i}return t}const vi="http://www.w3.org/1999/xlink";function jf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(vi,t.slice(6,t.length)):e.setAttributeNS(vi,t,n);else{const i=js(t);n==null||i&&!ao(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function $f(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=ao(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Pt(e,t,n,r){e.addEventListener(t,n,r)}function Bf(e,t,n,r){e.removeEventListener(t,n,r)}function Hf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Uf(t);if(r){const c=i[t]=Kf(r,a);Pt(e,s,c,l)}else o&&(Bf(e,s,o,l),i[t]=void 0)}}const bi=/(?:Once|Passive|Capture)$/;function Uf(e){let t;if(bi.test(e)){t={};let r;for(;r=e.match(bi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):$t(e.slice(2)),t]}let yr=0;const Wf=Promise.resolve(),Yf=()=>yr||(Wf.then(()=>yr=0),yr=Date.now());function Kf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;De(Vf(r,n.value),t,5,[r])};return n.value=e,n.attached=Yf(),n}function Vf(e,t){if(L(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const yi=/^on[a-z]/,Xf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Rf(e,r,a):t==="style"?Df(e,n,r):qn(t)?ia(t)||Hf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):qf(e,t,r,a))?$f(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),jf(e,t,r,a))};function qf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&yi.test(t)&&D(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||yi.test(t)&&se(n)?!1:t in e}const xi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return L(t)?n=>Nn(t,n):t};function Jf(e){e.target.composing=!0}function wi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const _i={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=xi(a);const i=r||a.props&&a.props.type==="number";Pt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=Ir(s)),e._assign(s)}),n&&Pt(e,"change",()=>{e.value=e.value.trim()}),t||(Pt(e,"compositionstart",Jf),Pt(e,"compositionend",wi),Pt(e,"change",wi))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=xi(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&Ir(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},Gf=ce({patchProp:Xf},Ff);let ki;function Zf(){return ki||(ki=mf(Gf))}const Qf=(...e)=>{const t=Zf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=ec(r);if(!a)return;const i=t._component;!D(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function ec(e){return se(e)?document.querySelector(e):e}const tc=(e,t)=>t.some(n=>e instanceof n);let Ai,Ei;function nc(){return Ai||(Ai=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rc(){return Ei||(Ei=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xo=new WeakMap,Wr=new WeakMap,qo=new WeakMap,xr=new WeakMap,Aa=new WeakMap;function ac(e){const t=new Promise((n,r)=>{const a=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(ot(e.result)),a()},o=()=>{r(e.error),a()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Xo.set(n,e)}).catch(()=>{}),Aa.set(t,e),t}function ic(e){if(Wr.has(e))return;const t=new Promise((n,r)=>{const a=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),a()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Wr.set(e,t)}let Yr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Wr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||qo.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ot(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function oc(e){Yr=e(Yr)}function sc(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(wr(this),t,...n);return qo.set(r,t.sort?t.sort():[t]),ot(r)}:rc().includes(e)?function(...t){return e.apply(wr(this),t),ot(Xo.get(this))}:function(...t){return ot(e.apply(wr(this),t))}}function lc(e){return typeof e=="function"?sc(e):(e instanceof IDBTransaction&&ic(e),tc(e,nc())?new Proxy(e,Yr):e)}function ot(e){if(e instanceof IDBRequest)return ac(e);if(xr.has(e))return xr.get(e);const t=lc(e);return t!==e&&(xr.set(e,t),Aa.set(t,e)),t}const wr=e=>Aa.get(e);function fc(e,t,{blocked:n,upgrade:r,blocking:a,terminated:i}={}){const o=indexedDB.open(e,t),s=ot(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ot(o.result),l.oldVersion,l.newVersion,ot(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),s.then(l=>{i&&l.addEventListener("close",()=>i()),a&&l.addEventListener("versionchange",c=>a(c.oldVersion,c.newVersion,c))}).catch(()=>{}),s}const cc=["get","getKey","getAll","getAllKeys","count"],uc=["put","add","delete","clear"],_r=new Map;function Oi(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(_r.get(t))return _r.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,a=uc.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(a||cc.includes(n)))return;const i=async function(o,...s){const l=this.transaction(o,a?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(s.shift())),(await Promise.all([c[n](...s),a&&l.done]))[0]};return _r.set(t,i),i}oc(e=>({...e,get:(t,n,r)=>Oi(t,n)||e.get(t,n,r),has:(t,n)=>!!Oi(t,n)||e.has(t,n)}));function sr(){return new Promise((e,t)=>{const n=fc("noteDB",1,{upgrade(r){r.createObjectStore("note",{keyPath:"id",autoIncrement:!0}).createIndex("strengthIndex","strength")}});e(n)})}async function dc(e,t){new Date().getTime();const r=await sr();r.add("note",{title:e,description:t}),await r.transaction("note").store.openCursor()}async function kr(){return await(await sr()).getAll("note")}async function mc(e){(await sr()).delete("note",e)}async function pc(e,t,n){await(await sr()).put("note",{id:e,title:t,description:n})}const hc={class:"h-screen flex flex-col w-full dark:bg-zinc-900"},gc={class:"flex justify-center shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] hover:shadow-[0_7px_15px_1px_rgba(0,0,0,0.5)] p-2 rounded-md dark:bg-zinc-900 mb-2"},vc={key:0},bc=["value"],yc={class:""},xc={class:"grid xl:grid-cols-9 xl:gap-4 md:grid-cols-5 md:gap-3 ph:grid-cols-2 ph:gap-2 dark:bg-zinc-900"},wc=["onClick"],_c={class:"font-normal text-center dark:bg-zinc-900"},kc={key:0},Ac={key:0,class:"flex justify-center"},Ec={class:"container shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] hover:shadow-[0_7px_15px_1px_rgba(0,0,0,0.5)] p-2 rounded-md dark:bg-zinc-900 mb-2"},Oc={key:0,class:""},Cc={class:""},Pc={class:"grid xl:grid-cols-7 xl:gap-4 md:grid-cols-5 md:gap-3 ph:grid-cols-2 ph:gap-2 dark:bg-zinc-900"},Ic=["onClick"],Sc={class:"font-normal text-center dark:bg-zinc-900"},Tc={key:1,class:"sticky bottom-0 grid justify-items-end content-end h-full pb-8"},Nc={class:"content-end"},Mc={key:0,class:"fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50 overscroll-none"},Lc={class:"relative wx-auto max-w-2xl w-96 max-h-full my-20"},Fc={class:"bg-white dark:bg-zinc-900 w-full rounded shadow-2xl flex flex-col pt-0 pb-4 px-4"},Rc={class:"place-self-end"},Dc=["value"],zc=["value"],jc={class:"items-baseline place-self-end"},$c={key:0,class:"{ buttonSave }"},Bc={class:"rounded-full hover:bg-gray-100 p-1 w-[30px] m-3 mb-5 h-30px"},Hc={key:1,class:"absolute z-40 inset-0 opacity-70 bg-black overscroll-none"},Uc={__name:"App",setup(e){const t=ge(""),n=ge(""),r=ge([]),a=ge(!1),i=ge([]),o=ge([]),s=ge(!1),l=ge(!1),c=ge(!1),d=ge(window.innerWidth),m=ge(""),h=ge(""),w=ge([]),F=ge([]),S=ge(!1);async function $(){w.value=[];const U=[await kr()],B=U[0].length;for(let H=0;B>H;H++){const z=U[0][H].title,oe=z.toLowerCase(z).normalize("NFD").replace(/[\u0300-\u036f]/g,""),ae=U[0][H].description,V=ae.toLowerCase(ae).normalize("NFD").replace(/[\u0300-\u036f]/g,""),Ie=U[0][H].id;w.value.push([{title:oe,description:V,id:Ie}])}}const k=()=>{const U=h.value.length;if(U>0){S.value=!0;const B=w.value.length,H=h.value,me=H.toLowerCase(H).normalize("NFD").replace(/[\u0300-\u036f]/g,"");F.value=[];for(let oe=0;oe<B;oe++){const ae=w.value[oe][0].title,G=w.value[oe][0].description,V=ae.indexOf(me),Ie=G.indexOf(me);if(V>=0||Ie>=0){const At=o.value[oe][0].title,We=o.value[oe][0].description,Ce=w.value[oe][0].id;F.value.push([{id:Ce,title:At,description:We}])}}}else F.value.length>0&&(S.value=!0,console.log("content",U),console.log("toggleSearch",S.value))},A=()=>{F.value="",h.value="",S.value=!1};function M(){d.value=window.innerWidth,console.log("screenWidth",d),d.value<500?m.value=!0:m.value=!1}const C=()=>{r.value[1]!=i.value[1]||r.value[2]!=i.value[2]?(setTimeout(()=>{l.value=!0},150),c.value=!0):(l.value=!1,c.value=!1)},Y=U=>{const B=o.value.length;for(let H=0;H<B;H++)if(o.value[H][0].id===U){r.value="";const me=o.value[H][0].title,oe=o.value[H][0].description;r.value=[U,me,oe],i.value=[U,me,oe],a.value=!0}};async function re(){o.value=[];const U=[await kr()],B=U[0].length;for(let H=0;B>H;H++){const z=U[0][H].title,me=U[0][H].description,oe=U[0][H].id;o.value.push([{title:z,description:me,id:oe}])}}async function fe(U){const B=t.value,H=n.value;await dc(B,H);const z=[await kr()],me=z[0].length-1,oe=z[0][me].id;o.value.push([{title:B,description:H,id:oe}]),t.value="",n.value="",s.value=!1}const ke=()=>{const U=r.value[0];mc(U),re(),a.value=!1},be=()=>{const U=r.value[0],B=r.value[1],H=r.value[2];pc(U,B,H),re(),a.value=!1};return Mo(()=>{re(),$(),window.addEventListener("resize",M),M()}),(U,B)=>{const H=ql("font-awesome-icon");return ye(),Ee("section",hc,[q("div",gc,[S.value?(ye(),Ee("span",vc,[q("button",{onClick:A},[de(H,{icon:"fa-solid fa-arrow-left"})])])):tt("",!0),q("input",Dn(k(),{value:h.value,onInput:B[0]||(B[0]=z=>h.value=z.target.value),placeholder:"Pesquise suas notas",class:"break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900"}),null,16,bc)]),q("div",yc,[q("div",xc,[(ye(!0),Ee(Ne,null,ti(F.value,z=>(ye(),Ee("div",{class:"container shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] p-2 rounded-md mt-2 content-start break-words font-semibold hover:shadow-[0_7px_15px_1px_rgba(0,0,0,0.5)] dark:bg-zinc-900",key:z,onClick:me=>(Y(z[0].id),s.value=!1)},[Hr(hn(z[0].title)+" ",1),q("p",_c,hn(z[0].description),1)],8,wc))),128))])]),S.value?tt("",!0):(ye(),Ee("div",kc,[m.value?tt("",!0):(ye(),Ee("div",Ac,[q("div",Ec,[Qa(q("input",{onClick:B[1]||(B[1]=z=>s.value=!0),id:"title",type:"text","onUpdate:modelValue":B[2]||(B[2]=z=>t.value=z),placeholder:"Título",class:"break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900"},null,512),[[_i,t.value]]),s.value?(ye(),Ee("div",Oc,[Qa(q("input",{id:"description",type:"text","onUpdate:modelValue":B[3]||(B[3]=z=>n.value=z),placeholder:"Escreva uma nota",class:"break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900"},null,512),[[_i,n.value]]),q("button",{id:"btnsave",onClick:B[4]||(B[4]=z=>fe(U.index)),class:"bg-blue-500 hover:bg-blue-700 text-white-950 font-bold py-2 px-4 rounded"},"Salvar")])):tt("",!0)])])),q("div",Cc,[q("div",Pc,[(ye(!0),Ee(Ne,null,ti(o.value,z=>(ye(),Ee("div",{class:"container shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] p-2 rounded-md mt-2 content-start break-words font-semibold hover:shadow-[0_7px_15px_1px_rgba(0,0,0,0.5)] dark:bg-zinc-900",key:z,onClick:me=>(Y(z[0].id),s.value=!1)},[Hr(hn(z[0].title)+" ",1),q("p",Sc,hn(z[0].description),1)],8,Ic))),128))])]),m.value?(ye(),Ee("footer",Tc,[q("button",Nc,[de(H,{icon:"fa-solid fa-circle-plus",size:"2xl"})])])):tt("",!0)])),q("div",null,[a.value?(ye(),Ee("div",Mc,[q("div",Lc,[q("div",Fc,[q("div",Rc,[q("button",{class:"rounded-full hover:bg-gray-100 p-1 w-[30px] h-30px",onClick:B[5]||(B[5]=z=>a.value=!1)},[de(H,{icon:"fa-solid fa-xmark",style:{color:"#707070"}})])]),q("input",Dn(C(),{value:r.value[1],onInput:B[6]||(B[6]=z=>r.value[1]=z.target.value),class:"text-2xl font-bold focus:outline-none dark:bg-zinc-900"}),null,16,Dc),q("input",Dn(C(),{value:r.value[2],onInput:B[7]||(B[7]=z=>r.value[2]=z.target.value),class:"overflow-auto focus:outline-none dark:bg-zinc-900"}),null,16,zc),q("div",jc,[l.value?(ye(),Ee("span",$c,[q("button",{id:"buttonSave",class:"rounded-full hover:bg-gray-100 text-gray px-2 my-0 py-0 w-12/12 mx-3",onClick:be},"Save")])):tt("",!0),q("div",{class:Qn({shake:c.value})},[q("span",Bc,[q("button",{onClick:ke},[de(H,{icon:"fa-solid fa-trash",style:{color:"#707070"}})])])],2)])])])])):tt("",!0),a.value?(ye(),Ee("div",Hc)):tt("",!0)])])}}};function Ci(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ci(Object(n),!0).forEach(function(r){le(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ci(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Yn(e){"@babel/helpers - typeof";return Yn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Yn(e)}function Wc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Pi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Yc(e,t,n){return t&&Pi(e.prototype,t),n&&Pi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ea(e,t){return Vc(e)||qc(e,t)||Jo(e,t)||Gc()}function un(e){return Kc(e)||Xc(e)||Jo(e)||Jc()}function Kc(e){if(Array.isArray(e))return Kr(e)}function Vc(e){if(Array.isArray(e))return e}function Xc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function qc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Jo(e,t){if(e){if(typeof e=="string")return Kr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Kr(e,t)}}function Kr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Jc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ii=function(){},Oa={},Go={},Zo=null,Qo={mark:Ii,measure:Ii};try{typeof window<"u"&&(Oa=window),typeof document<"u"&&(Go=document),typeof MutationObserver<"u"&&(Zo=MutationObserver),typeof performance<"u"&&(Qo=performance)}catch{}var Zc=Oa.navigator||{},Si=Zc.userAgent,Ti=Si===void 0?"":Si,lt=Oa,ee=Go,Ni=Zo,_n=Qo;lt.document;var Qe=!!ee.documentElement&&!!ee.head&&typeof ee.addEventListener=="function"&&typeof ee.createElement=="function",es=~Ti.indexOf("MSIE")||~Ti.indexOf("Trident/"),kn,An,En,On,Cn,qe="___FONT_AWESOME___",Vr=16,ts="fa",ns="svg-inline--fa",_t="data-fa-i2svg",Xr="data-fa-pseudo-element",Qc="data-fa-pseudo-element-pending",Ca="data-prefix",Pa="data-icon",Mi="fontawesome-i2svg",eu="async",tu=["HTML","HEAD","STYLE","SCRIPT"],rs=function(){try{return!0}catch{return!1}}(),Q="classic",ne="sharp",Ia=[Q,ne];function dn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Q]}})}var on=dn((kn={},le(kn,Q,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),le(kn,ne,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),kn)),sn=dn((An={},le(An,Q,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),le(An,ne,{solid:"fass",regular:"fasr",light:"fasl"}),An)),ln=dn((En={},le(En,Q,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),le(En,ne,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),En)),nu=dn((On={},le(On,Q,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),le(On,ne,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),On)),ru=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,as="fa-layers-text",au=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,iu=dn((Cn={},le(Cn,Q,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),le(Cn,ne,{900:"fass",400:"fasr",300:"fasl"}),Cn)),is=[1,2,3,4,5,6,7,8,9,10],ou=is.concat([11,12,13,14,15,16,17,18,19,20]),su=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],vt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},fn=new Set;Object.keys(sn[Q]).map(fn.add.bind(fn));Object.keys(sn[ne]).map(fn.add.bind(fn));var lu=[].concat(Ia,un(fn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",vt.GROUP,vt.SWAP_OPACITY,vt.PRIMARY,vt.SECONDARY]).concat(is.map(function(e){return"".concat(e,"x")})).concat(ou.map(function(e){return"w-".concat(e)})),Gt=lt.FontAwesomeConfig||{};function fu(e){var t=ee.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function cu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ee&&typeof ee.querySelector=="function"){var uu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];uu.forEach(function(e){var t=Ea(e,2),n=t[0],r=t[1],a=cu(fu(n));a!=null&&(Gt[r]=a)})}var os={styleDefault:"solid",familyDefault:"classic",cssPrefix:ts,replacementClass:ns,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Gt.familyPrefix&&(Gt.cssPrefix=Gt.familyPrefix);var jt=O(O({},os),Gt);jt.autoReplaceSvg||(jt.observeMutations=!1);var I={};Object.keys(os).forEach(function(e){Object.defineProperty(I,e,{enumerable:!0,set:function(n){jt[e]=n,Zt.forEach(function(r){return r(I)})},get:function(){return jt[e]}})});Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(t){jt.cssPrefix=t,Zt.forEach(function(n){return n(I)})},get:function(){return jt.cssPrefix}});lt.FontAwesomeConfig=I;var Zt=[];function du(e){return Zt.push(e),function(){Zt.splice(Zt.indexOf(e),1)}}var nt=Vr,He={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function mu(e){if(!(!e||!Qe)){var t=ee.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ee.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ee.head.insertBefore(t,r),e}}var pu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function cn(){for(var e=12,t="";e-- >0;)t+=pu[Math.random()*62|0];return t}function Ut(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Sa(e){return e.classList?Ut(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ss(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function hu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ss(e[n]),'" ')},"").trim()}function lr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ta(e){return e.size!==He.size||e.x!==He.x||e.y!==He.y||e.rotate!==He.rotate||e.flipX||e.flipY}function gu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function vu(e){var t=e.transform,n=e.width,r=n===void 0?Vr:n,a=e.height,i=a===void 0?Vr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&es?l+="translate(".concat(t.x/nt-r/2,"em, ").concat(t.y/nt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/nt,"em), calc(-50% + ").concat(t.y/nt,"em)) "):l+="translate(".concat(t.x/nt,"em, ").concat(t.y/nt,"em) "),l+="scale(".concat(t.size/nt*(t.flipX?-1:1),", ").concat(t.size/nt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var bu=`:root, :host {
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
}`;function ls(){var e=ts,t=ns,n=I.cssPrefix,r=I.replacementClass,a=bu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Li=!1;function Ar(){I.autoAddCss&&!Li&&(mu(ls()),Li=!0)}var yu={mixout:function(){return{dom:{css:ls,insertCss:Ar}}},hooks:function(){return{beforeDOMElementCreation:function(){Ar()},beforeI2svg:function(){Ar()}}}},Je=lt||{};Je[qe]||(Je[qe]={});Je[qe].styles||(Je[qe].styles={});Je[qe].hooks||(Je[qe].hooks={});Je[qe].shims||(Je[qe].shims=[]);var Fe=Je[qe],fs=[],xu=function e(){ee.removeEventListener("DOMContentLoaded",e),Kn=1,fs.map(function(t){return t()})},Kn=!1;Qe&&(Kn=(ee.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ee.readyState),Kn||ee.addEventListener("DOMContentLoaded",xu));function wu(e){Qe&&(Kn?setTimeout(e,0):fs.push(e))}function mn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?ss(e):"<".concat(t," ").concat(hu(r),">").concat(i.map(mn).join(""),"</").concat(t,">")}function Fi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var _u=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Er=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?_u(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function ku(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function qr(e){var t=ku(e);return t.length===1?t[0].toString(16):null}function Au(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ri(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Jr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Ri(t);typeof Fe.hooks.addPack=="function"&&!a?Fe.hooks.addPack(e,Ri(t)):Fe.styles[e]=O(O({},Fe.styles[e]||{}),i),e==="fas"&&Jr("fa",t)}var Pn,In,Sn,It=Fe.styles,Eu=Fe.shims,Ou=(Pn={},le(Pn,Q,Object.values(ln[Q])),le(Pn,ne,Object.values(ln[ne])),Pn),Na=null,cs={},us={},ds={},ms={},ps={},Cu=(In={},le(In,Q,Object.keys(on[Q])),le(In,ne,Object.keys(on[ne])),In);function Pu(e){return~lu.indexOf(e)}function Iu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Pu(a)?a:null}var hs=function(){var t=function(i){return Er(It,function(o,s,l){return o[l]=Er(s,i,{}),o},{})};cs=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),us=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),ps=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in It||I.autoFetchSvg,r=Er(Eu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});ds=r.names,ms=r.unicodes,Na=fr(I.styleDefault,{family:I.familyDefault})};du(function(e){Na=fr(e.styleDefault,{family:I.familyDefault})});hs();function Ma(e,t){return(cs[e]||{})[t]}function Su(e,t){return(us[e]||{})[t]}function bt(e,t){return(ps[e]||{})[t]}function gs(e){return ds[e]||{prefix:null,iconName:null}}function Tu(e){var t=ms[e],n=Ma("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ft(){return Na}var La=function(){return{prefix:null,iconName:null,rest:[]}};function fr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Q:n,a=on[r][e],i=sn[r][e]||sn[r][a],o=e in Fe.styles?e:null;return i||o||null}var Di=(Sn={},le(Sn,Q,Object.keys(ln[Q])),le(Sn,ne,Object.keys(ln[ne])),Sn);function cr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},le(t,Q,"".concat(I.cssPrefix,"-").concat(Q)),le(t,ne,"".concat(I.cssPrefix,"-").concat(ne)),t),o=null,s=Q;(e.includes(i[Q])||e.some(function(c){return Di[Q].includes(c)}))&&(s=Q),(e.includes(i[ne])||e.some(function(c){return Di[ne].includes(c)}))&&(s=ne);var l=e.reduce(function(c,d){var m=Iu(I.cssPrefix,d);if(It[d]?(d=Ou[s].includes(d)?nu[s][d]:d,o=d,c.prefix=d):Cu[s].indexOf(d)>-1?(o=d,c.prefix=fr(d,{family:s})):m?c.iconName=m:d!==I.replacementClass&&d!==i[Q]&&d!==i[ne]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var h=o==="fa"?gs(c.iconName):{},w=bt(c.prefix,c.iconName);h.prefix&&(o=null),c.iconName=h.iconName||w||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!It.far&&It.fas&&!I.autoFetchSvg&&(c.prefix="fas")}return c},La());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ne&&(It.fass||I.autoFetchSvg)&&(l.prefix="fass",l.iconName=bt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=ft()||"fas"),l}var Nu=function(){function e(){Wc(this,e),this.definitions={}}return Yc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),Jr(s,o[s]);var l=ln[Q][s];l&&Jr(l,o[s]),hs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),zi=[],St={},Ft={},Mu=Object.keys(Ft);function Lu(e,t){var n=t.mixoutsTo;return zi=e,St={},Object.keys(Ft).forEach(function(r){Mu.indexOf(r)===-1&&delete Ft[r]}),zi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Yn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){St[o]||(St[o]=[]),St[o].push(i[o])})}r.provides&&r.provides(Ft)}),n}function Gr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=St[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function kt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=St[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ge(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ft[e]?Ft[e].apply(null,t):void 0}function Zr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ft();if(t)return t=bt(n,t)||t,Fi(vs.definitions,n,t)||Fi(Fe.styles,n,t)}var vs=new Nu,Fu=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,kt("noAuto")},Ru={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Qe?(kt("beforeI2svg",t),Ge("pseudoElements2svg",t),Ge("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,wu(function(){zu({autoReplaceSvgRoot:n}),kt("watch",t)})}},Du={icon:function(t){if(t===null)return null;if(Yn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:bt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=fr(t[0]);return{prefix:r,iconName:bt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(I.cssPrefix,"-"))>-1||t.match(ru))){var a=cr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||ft(),iconName:bt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=ft();return{prefix:i,iconName:bt(i,t)||t}}}},Oe={noAuto:Fu,config:I,dom:Ru,parse:Du,library:vs,findIconDefinition:Zr,toHtml:mn},zu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ee:n;(Object.keys(Fe.styles).length>0||I.autoFetchSvg)&&Qe&&I.autoReplaceSvg&&Oe.dom.i2svg({node:r})};function ur(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return mn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Qe){var r=ee.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function ju(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ta(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=lr(O(O({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function $u(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(I.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function Fa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,h=e.watchable,w=h===void 0?!1:h,F=r.found?r:n,S=F.width,$=F.height,k=a==="fak",A=[I.replacementClass,i?"".concat(I.cssPrefix,"-").concat(i):""].filter(function(be){return m.classes.indexOf(be)===-1}).filter(function(be){return be!==""||!!be}).concat(m.classes).join(" "),M={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:A,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat($)})},C=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(S/$*16*.0625,"em")}:{};w&&(M.attributes[_t]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(d||cn())},children:[l]}),delete M.attributes.title);var Y=O(O({},M),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:O(O({},C),m.styles)}),re=r.found&&n.found?Ge("generateAbstractMask",Y)||{children:[],attributes:{}}:Ge("generateAbstractIcon",Y)||{children:[],attributes:{}},fe=re.children,ke=re.attributes;return Y.children=fe,Y.attributes=ke,s?$u(Y):ju(Y)}function ji(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[_t]="");var d=O({},o.styles);Ta(a)&&(d.transform=vu({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=lr(d);m.length>0&&(c.style=m);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Bu(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=lr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Or=Fe.styles;function Qr(e){var t=e[0],n=e[1],r=e.slice(4),a=Ea(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(I.cssPrefix,"-").concat(vt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(vt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(vt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Hu={found:!1,width:512,height:512};function Uu(e,t){!rs&&!I.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ea(e,t){var n=t;return t==="fa"&&I.styleDefault!==null&&(t=ft()),new Promise(function(r,a){if(Ge("missingIconAbstract"),n==="fa"){var i=gs(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Or[t]&&Or[t][e]){var o=Or[t][e];return r(Qr(o))}Uu(e,t),r(O(O({},Hu),{},{icon:I.showMissingIcons&&e?Ge("missingIconAbstract")||{}:{}}))})}var $i=function(){},ta=I.measurePerformance&&_n&&_n.mark&&_n.measure?_n:{mark:$i,measure:$i},Xt='FA "6.4.0"',Wu=function(t){return ta.mark("".concat(Xt," ").concat(t," begins")),function(){return bs(t)}},bs=function(t){ta.mark("".concat(Xt," ").concat(t," ends")),ta.measure("".concat(Xt," ").concat(t),"".concat(Xt," ").concat(t," begins"),"".concat(Xt," ").concat(t," ends"))},Ra={begin:Wu,end:bs},zn=function(){};function Bi(e){var t=e.getAttribute?e.getAttribute(_t):null;return typeof t=="string"}function Yu(e){var t=e.getAttribute?e.getAttribute(Ca):null,n=e.getAttribute?e.getAttribute(Pa):null;return t&&n}function Ku(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(I.replacementClass)}function Vu(){if(I.autoReplaceSvg===!0)return jn.replace;var e=jn[I.autoReplaceSvg];return e||jn.replace}function Xu(e){return ee.createElementNS("http://www.w3.org/2000/svg",e)}function qu(e){return ee.createElement(e)}function ys(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Xu:qu:n;if(typeof e=="string")return ee.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(ys(o,{ceFn:r}))}),a}function Ju(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var jn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(ys(a),n)}),n.getAttribute(_t)===null&&I.keepOriginalSource){var r=ee.createComment(Ju(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Sa(n).indexOf(I.replacementClass))return jn.replace(t);var a=new RegExp("".concat(I.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===I.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return mn(s)}).join(`
`);n.setAttribute(_t,""),n.innerHTML=o}};function Hi(e){e()}function xs(e,t){var n=typeof t=="function"?t:zn;if(e.length===0)n();else{var r=Hi;I.mutateApproach===eu&&(r=lt.requestAnimationFrame||Hi),r(function(){var a=Vu(),i=Ra.begin("mutate");e.map(a),i(),n()})}}var Da=!1;function ws(){Da=!0}function na(){Da=!1}var Vn=null;function Ui(e){if(Ni&&I.observeMutations){var t=e.treeCallback,n=t===void 0?zn:t,r=e.nodeCallback,a=r===void 0?zn:r,i=e.pseudoElementsCallback,o=i===void 0?zn:i,s=e.observeMutationsRoot,l=s===void 0?ee:s;Vn=new Ni(function(c){if(!Da){var d=ft();Ut(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Bi(m.addedNodes[0])&&(I.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&I.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Bi(m.target)&&~su.indexOf(m.attributeName))if(m.attributeName==="class"&&Yu(m.target)){var h=cr(Sa(m.target)),w=h.prefix,F=h.iconName;m.target.setAttribute(Ca,w||d),F&&m.target.setAttribute(Pa,F)}else Ku(m.target)&&a(m.target)})}}),Qe&&Vn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Gu(){Vn&&Vn.disconnect()}function Zu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Qu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=cr(Sa(e));return a.prefix||(a.prefix=ft()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Su(a.prefix,e.innerText)||Ma(a.prefix,qr(e.innerText))),!a.iconName&&I.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function ed(e){var t=Ut(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return I.autoA11y&&(n?t["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||cn()):(t["aria-hidden"]="true",t.focusable="false")),t}function td(){return{iconName:null,title:null,titleId:null,prefix:null,transform:He,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Wi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Qu(e),r=n.iconName,a=n.prefix,i=n.rest,o=ed(e),s=Gr("parseNodeAttributes",{},e),l=t.styleParser?Zu(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:He,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var nd=Fe.styles;function _s(e){var t=I.autoReplaceSvg==="nest"?Wi(e,{styleParser:!1}):Wi(e);return~t.extra.classes.indexOf(as)?Ge("generateLayersText",e,t):Ge("generateSvgReplacementMutation",e,t)}var ct=new Set;Ia.map(function(e){ct.add("fa-".concat(e))});Object.keys(on[Q]).map(ct.add.bind(ct));Object.keys(on[ne]).map(ct.add.bind(ct));ct=un(ct);function Yi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Qe)return Promise.resolve();var n=ee.documentElement.classList,r=function(m){return n.add("".concat(Mi,"-").concat(m))},a=function(m){return n.remove("".concat(Mi,"-").concat(m))},i=I.autoFetchSvg?ct:Ia.map(function(d){return"fa-".concat(d)}).concat(Object.keys(nd));i.includes("fa")||i.push("fa");var o=[".".concat(as,":not([").concat(_t,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(_t,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ut(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ra.begin("onTree"),c=s.reduce(function(d,m){try{var h=_s(m);h&&d.push(h)}catch(w){rs||w.name==="MissingIcon"&&console.error(w)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(h){xs(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(h){l(),m(h)})})}function rd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;_s(e).then(function(n){n&&xs([n],t)})}function ad(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Zr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Zr(a||{})),e(r,O(O({},n),{},{mask:a}))}}var id=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?He:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,h=m===void 0?null:m,w=n.titleId,F=w===void 0?null:w,S=n.classes,$=S===void 0?[]:S,k=n.attributes,A=k===void 0?{}:k,M=n.styles,C=M===void 0?{}:M;if(t){var Y=t.prefix,re=t.iconName,fe=t.icon;return ur(O({type:"icon"},t),function(){return kt("beforeDOMElementCreation",{iconDefinition:t,params:n}),I.autoA11y&&(h?A["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(F||cn()):(A["aria-hidden"]="true",A.focusable="false")),Fa({icons:{main:Qr(fe),mask:l?Qr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:re,transform:O(O({},He),a),symbol:o,title:h,maskId:d,titleId:F,extra:{attributes:A,styles:C,classes:$}})})}},od={mixout:function(){return{icon:ad(id)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Yi,n.nodeCallback=rd,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?ee:r,i=n.callback,o=i===void 0?function(){}:i;return Yi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,h=r.extra;return new Promise(function(w,F){Promise.all([ea(a,s),d.iconName?ea(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var $=Ea(S,2),k=$[0],A=$[1];w([n,Fa({icons:{main:k,mask:A},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:h,watchable:!0})])}).catch(F)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=lr(s);l.length>0&&(a.style=l);var c;return Ta(o)&&(c=Ge("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},sd={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return ur({type:"layer"},function(){kt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(I.cssPrefix,"-layers")].concat(un(i)).join(" ")},children:o}]})}}}},ld={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return ur({type:"counter",content:n},function(){return kt("beforeDOMElementCreation",{content:n,params:r}),Bu({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(I.cssPrefix,"-layers-counter")].concat(un(s))}})})}}}},fd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?He:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,h=r.styles,w=h===void 0?{}:h;return ur({type:"text",content:n},function(){return kt("beforeDOMElementCreation",{content:n,params:r}),ji({content:n,transform:O(O({},He),i),title:s,extra:{attributes:m,styles:w,classes:["".concat(I.cssPrefix,"-layers-text")].concat(un(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(es){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return I.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ji({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},cd=new RegExp('"',"ug"),Ki=[1105920,1112319];function ud(e){var t=e.replace(cd,""),n=Au(t,0),r=n>=Ki[0]&&n<=Ki[1],a=t.length===2?t[0]===t[1]:!1;return{value:qr(a?t[0]:t),isSecondary:r||a}}function Vi(e,t){var n="".concat(Qc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ut(e.children),o=i.filter(function(fe){return fe.getAttribute(Xr)===t})[0],s=lt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(au),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?ne:Q,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?sn[h][l[2].toLowerCase()]:iu[h][c],F=ud(m),S=F.value,$=F.isSecondary,k=l[0].startsWith("FontAwesome"),A=Ma(w,S),M=A;if(k){var C=Tu(S);C.iconName&&C.prefix&&(A=C.iconName,w=C.prefix)}if(A&&!$&&(!o||o.getAttribute(Ca)!==w||o.getAttribute(Pa)!==M)){e.setAttribute(n,M),o&&e.removeChild(o);var Y=td(),re=Y.extra;re.attributes[Xr]=t,ea(A,w).then(function(fe){var ke=Fa(O(O({},Y),{},{icons:{main:fe,mask:La()},prefix:w,iconName:M,extra:re,watchable:!0})),be=ee.createElement("svg");t==="::before"?e.insertBefore(be,e.firstChild):e.appendChild(be),be.outerHTML=ke.map(function(U){return mn(U)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function dd(e){return Promise.all([Vi(e,"::before"),Vi(e,"::after")])}function md(e){return e.parentNode!==document.head&&!~tu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Xr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Xi(e){if(Qe)return new Promise(function(t,n){var r=Ut(e.querySelectorAll("*")).filter(md).map(dd),a=Ra.begin("searchPseudoElements");ws(),Promise.all(r).then(function(){a(),na(),t()}).catch(function(){a(),na(),n()})})}var pd={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Xi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ee:r;I.searchPseudoElements&&Xi(a)}}},qi=!1,hd={mixout:function(){return{dom:{unwatch:function(){ws(),qi=!0}}}},hooks:function(){return{bootstrap:function(){Ui(Gr("mutationObserverCallbacks",{}))},noAuto:function(){Gu()},watch:function(n){var r=n.observeMutationsRoot;qi?na():Ui(Gr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ji=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},gd={mixout:function(){return{parse:{transform:function(n){return Ji(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ji(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},h={transform:"translate(".concat(o/2*-1," -256)")},w={outer:s,inner:m,path:h};return{tag:"g",attributes:O({},w.outer),children:[{tag:"g",attributes:O({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),w.path)}]}]}}}},Cr={x:0,y:0,width:"100%",height:"100%"};function Gi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function vd(e){return e.tag==="g"?e.children:[e]}var bd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?cr(a.split(" ").map(function(o){return o.trim()})):La();return i.prefix||(i.prefix=ft()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,h=o.icon,w=gu({transform:l,containerWidth:m,iconWidth:c}),F={tag:"rect",attributes:O(O({},Cr),{},{fill:"white"})},S=d.children?{children:d.children.map(Gi)}:{},$={tag:"g",attributes:O({},w.inner),children:[Gi(O({tag:d.tag,attributes:O(O({},d.attributes),w.path)},S))]},k={tag:"g",attributes:O({},w.outer),children:[$]},A="mask-".concat(s||cn()),M="clip-".concat(s||cn()),C={tag:"mask",attributes:O(O({},Cr),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[F,k]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:vd(h)},C]};return r.push(Y,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(A,")")},Cr)}),{children:r,attributes:a}}}},yd={provides:function(t){var n=!1;lt.matchMedia&&(n=lt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},xd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},wd=[yu,od,sd,ld,fd,pd,hd,gd,bd,yd,xd];Lu(wd,{mixoutsTo:Oe});Oe.noAuto;Oe.config;var _d=Oe.library;Oe.dom;var ra=Oe.parse;Oe.findIconDefinition;Oe.toHtml;var kd=Oe.icon;Oe.layer;Oe.text;Oe.counter;function Zi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ve(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zi(Object(n),!0).forEach(function(r){xe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Xn(e){"@babel/helpers - typeof";return Xn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xn(e)}function xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ad(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Ed(e,t){if(e==null)return{};var n=Ad(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Od=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ks={exports:{}};(function(e){(function(t){var n=function(k,A,M){if(!c(A)||m(A)||h(A)||w(A)||l(A))return A;var C,Y=0,re=0;if(d(A))for(C=[],re=A.length;Y<re;Y++)C.push(n(k,A[Y],M));else{C={};for(var fe in A)Object.prototype.hasOwnProperty.call(A,fe)&&(C[k(fe,M)]=n(k,A[fe],M))}return C},r=function(k,A){A=A||{};var M=A.separator||"_",C=A.split||/(?=[A-Z])/;return k.split(C).join(M)},a=function(k){return F(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(A,M){return M?M.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var A=a(k);return A.substr(0,1).toUpperCase()+A.substr(1)},o=function(k,A){return r(k,A).toLowerCase()},s=Object.prototype.toString,l=function(k){return typeof k=="function"},c=function(k){return k===Object(k)},d=function(k){return s.call(k)=="[object Array]"},m=function(k){return s.call(k)=="[object Date]"},h=function(k){return s.call(k)=="[object RegExp]"},w=function(k){return s.call(k)=="[object Boolean]"},F=function(k){return k=k-0,k===k},S=function(k,A){var M=A&&"process"in A?A.process:A;return typeof M!="function"?k:function(C,Y){return M(C,k,Y)}},$={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(k,A){return n(S(a,A),k)},decamelizeKeys:function(k,A){return n(S(o,A),k,A)},pascalizeKeys:function(k,A){return n(S(i,A),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=$:t.humps=$})(Od)})(ks);var Cd=ks.exports,Pd=["class","style"];function Id(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Cd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Sd(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function As(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return As(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=Sd(d);break;case"style":l.style=Id(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Ed(n,Pd);return Sf(e.tag,Ve(Ve(Ve({},t),{},{class:a.class,style:Ve(Ve({},a.style),o)},a.attrs),s),r)}var Es=!1;try{Es=!0}catch{}function Td(){if(!Es&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Pr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?xe({},e,t):{}}function Nd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},xe(t,"fa-".concat(e.size),e.size!==null),xe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),xe(t,"fa-pull-".concat(e.pull),e.pull!==null),xe(t,"fa-swap-opacity",e.swapOpacity),xe(t,"fa-bounce",e.bounce),xe(t,"fa-shake",e.shake),xe(t,"fa-beat",e.beat),xe(t,"fa-fade",e.fade),xe(t,"fa-beat-fade",e.beatFade),xe(t,"fa-flash",e.flash),xe(t,"fa-spin-pulse",e.spinPulse),xe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Qi(e){if(e&&Xn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ra.icon)return ra.icon(e);if(e===null)return null;if(Xn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Md=Dl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=mt(function(){return Qi(t.icon)}),i=mt(function(){return Pr("classes",Nd(t))}),o=mt(function(){return Pr("transform",typeof t.transform=="string"?ra.transform(t.transform):t.transform)}),s=mt(function(){return Pr("mask",Qi(t.mask))}),l=mt(function(){return kd(a.value,Ve(Ve(Ve(Ve({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Mn(l,function(d){if(!d)return Td("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=mt(function(){return l.value?As(l.value.abstract[0],{},r):null});return function(){return c.value}}}),Ld={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},Fd={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},Rd={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},Dd={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},zd={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]};_d.add(Rd,Dd,Ld,zd,Fd);Qf(Uc).component("font-awesome-icon",Md).mount("#app");
