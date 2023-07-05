(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function pi(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const G={},Tt=[],Le=()=>{},Ws=()=>!1,Ys=/^on[^a-z]/,ir=e=>Ys.test(e),hi=e=>e.startsWith("onUpdate:"),ue=Object.assign,gi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ks=Object.prototype.hasOwnProperty,Y=(e,t)=>Ks.call(e,t),j=Array.isArray,Nt=e=>ar(e)==="[object Map]",go=e=>ar(e)==="[object Set]",$=e=>typeof e=="function",le=e=>typeof e=="string",vi=e=>typeof e=="symbol",ee=e=>e!==null&&typeof e=="object",vo=e=>ee(e)&&$(e.then)&&$(e.catch),bo=Object.prototype.toString,ar=e=>bo.call(e),qs=e=>ar(e).slice(8,-1),yo=e=>ar(e)==="[object Object]",bi=e=>le(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,jn=pi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),or=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Vs=/-(\w)/g,Ue=or(e=>e.replace(Vs,(t,n)=>n?n.toUpperCase():"")),Xs=/\B([A-Z])/g,$t=or(e=>e.replace(Xs,"-$1").toLowerCase()),sr=or(e=>e.charAt(0).toUpperCase()+e.slice(1)),_r=or(e=>e?`on${sr(e)}`:""),nn=(e,t)=>!Object.is(e,t),Dn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},qn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},jr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ea;const Dr=()=>ea||(ea=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function yi(e){if(j(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=le(r)?Qs(r):yi(r);if(i)for(const a in i)t[a]=i[a]}return t}else{if(le(e))return e;if(ee(e))return e}}const Js=/;(?![^(]*\))/g,Gs=/:([^]+)/,Zs=/\/\*[^]*?\*\//g;function Qs(e){const t={};return e.replace(Zs,"").split(Js).forEach(n=>{if(n){const r=n.split(Gs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function xi(e){let t="";if(le(e))t=e;else if(j(e))for(let n=0;n<e.length;n++){const r=xi(e[n]);r&&(t+=r+" ")}else if(ee(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const el="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tl=pi(el);function xo(e){return!!e||e===""}const yn=e=>le(e)?e:e==null?"":j(e)||ee(e)&&(e.toString===bo||!$(e.toString))?JSON.stringify(e,wo,2):String(e),wo=(e,t)=>t&&t.__v_isRef?wo(e,t.value):Nt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:go(t)?{[`Set(${t.size})`]:[...t.values()]}:ee(t)&&!j(t)&&!yo(t)?String(t):t;let Ie;class nl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ie,!t&&Ie&&(this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ie;try{return Ie=this,t()}finally{Ie=n}}}on(){Ie=this}off(){Ie=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function rl(e,t=Ie){t&&t.active&&t.effects.push(e)}function il(){return Ie}const wi=e=>{const t=new Set(e);return t.w=0,t.n=0,t},_o=e=>(e.w&at)>0,ko=e=>(e.n&at)>0,al=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=at},ol=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];_o(i)&&!ko(i)?i.delete(e):t[n++]=i,i.w&=~at,i.n&=~at}t.length=n}},$r=new WeakMap;let Vt=0,at=1;const Br=30;let Te;const yt=Symbol(""),Ur=Symbol("");class _i{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,rl(this,r)}run(){if(!this.active)return this.fn();let t=Te,n=nt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Te,Te=this,nt=!0,at=1<<++Vt,Vt<=Br?al(this):ta(this),this.fn()}finally{Vt<=Br&&ol(this),at=1<<--Vt,Te=this.parent,nt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Te===this?this.deferStop=!0:this.active&&(ta(this),this.onStop&&this.onStop(),this.active=!1)}}function ta(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let nt=!0;const Ao=[];function Bt(){Ao.push(nt),nt=!1}function Ut(){const e=Ao.pop();nt=e===void 0?!0:e}function ke(e,t,n){if(nt&&Te){let r=$r.get(e);r||$r.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=wi()),Oo(i)}}function Oo(e,t){let n=!1;Vt<=Br?ko(e)||(e.n|=at,n=!_o(e)):n=!e.has(Te),n&&(e.add(Te),Te.deps.push(e))}function qe(e,t,n,r,i,a){const o=$r.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&j(e)){const l=Number(r);o.forEach((f,u)=>{(u==="length"||u>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":j(e)?bi(n)&&s.push(o.get("length")):(s.push(o.get(yt)),Nt(e)&&s.push(o.get(Ur)));break;case"delete":j(e)||(s.push(o.get(yt)),Nt(e)&&s.push(o.get(Ur)));break;case"set":Nt(e)&&s.push(o.get(yt));break}if(s.length===1)s[0]&&Hr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Hr(wi(l))}}function Hr(e,t){const n=j(e)?e:[...e];for(const r of n)r.computed&&na(r);for(const r of n)r.computed||na(r)}function na(e,t){(e!==Te||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const sl=pi("__proto__,__v_isRef,__isVue"),Eo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(vi)),ll=ki(),fl=ki(!1,!0),cl=ki(!0),ra=ul();function ul(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=K(this);for(let a=0,o=this.length;a<o;a++)ke(r,"get",a+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(K)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Bt();const r=K(this)[t].apply(this,n);return Ut(),r}}),e}function dl(e){const t=K(this);return ke(t,"has",e),t.hasOwnProperty(e)}function ki(e=!1,t=!1){return function(r,i,a){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&a===(e?t?Pl:To:t?So:Io).get(r))return r;const o=j(r);if(!e){if(o&&Y(ra,i))return Reflect.get(ra,i,a);if(i==="hasOwnProperty")return dl}const s=Reflect.get(r,i,a);return(vi(i)?Eo.has(i):sl(i))||(e||ke(r,"get",i),t)?s:ge(s)?o&&bi(i)?s:s.value:ee(s)?e?No(s):Ei(s):s}}const ml=Co(),pl=Co(!0);function Co(e=!1){return function(n,r,i,a){let o=n[r];if(zt(o)&&ge(o)&&!ge(i))return!1;if(!e&&(!Vn(i)&&!zt(i)&&(o=K(o),i=K(i)),!j(n)&&ge(o)&&!ge(i)))return o.value=i,!0;const s=j(n)&&bi(r)?Number(r)<n.length:Y(n,r),l=Reflect.set(n,r,i,a);return n===K(a)&&(s?nn(i,o)&&qe(n,"set",r,i):qe(n,"add",r,i)),l}}function hl(e,t){const n=Y(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&qe(e,"delete",t,void 0),r}function gl(e,t){const n=Reflect.has(e,t);return(!vi(t)||!Eo.has(t))&&ke(e,"has",t),n}function vl(e){return ke(e,"iterate",j(e)?"length":yt),Reflect.ownKeys(e)}const Po={get:ll,set:ml,deleteProperty:hl,has:gl,ownKeys:vl},bl={get:cl,set(e,t){return!0},deleteProperty(e,t){return!0}},yl=ue({},Po,{get:fl,set:pl}),Ai=e=>e,lr=e=>Reflect.getPrototypeOf(e);function xn(e,t,n=!1,r=!1){e=e.__v_raw;const i=K(e),a=K(t);n||(t!==a&&ke(i,"get",t),ke(i,"get",a));const{has:o}=lr(i),s=r?Ai:n?Pi:rn;if(o.call(i,t))return s(e.get(t));if(o.call(i,a))return s(e.get(a));e!==i&&e.get(t)}function wn(e,t=!1){const n=this.__v_raw,r=K(n),i=K(e);return t||(e!==i&&ke(r,"has",e),ke(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function _n(e,t=!1){return e=e.__v_raw,!t&&ke(K(e),"iterate",yt),Reflect.get(e,"size",e)}function ia(e){e=K(e);const t=K(this);return lr(t).has.call(t,e)||(t.add(e),qe(t,"add",e,e)),this}function aa(e,t){t=K(t);const n=K(this),{has:r,get:i}=lr(n);let a=r.call(n,e);a||(e=K(e),a=r.call(n,e));const o=i.call(n,e);return n.set(e,t),a?nn(t,o)&&qe(n,"set",e,t):qe(n,"add",e,t),this}function oa(e){const t=K(this),{has:n,get:r}=lr(t);let i=n.call(t,e);i||(e=K(e),i=n.call(t,e)),r&&r.call(t,e);const a=t.delete(e);return i&&qe(t,"delete",e,void 0),a}function sa(){const e=K(this),t=e.size!==0,n=e.clear();return t&&qe(e,"clear",void 0,void 0),n}function kn(e,t){return function(r,i){const a=this,o=a.__v_raw,s=K(o),l=t?Ai:e?Pi:rn;return!e&&ke(s,"iterate",yt),o.forEach((f,u)=>r.call(i,l(f),l(u),a))}}function An(e,t,n){return function(...r){const i=this.__v_raw,a=K(i),o=Nt(a),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=i[e](...r),u=n?Ai:t?Pi:rn;return!t&&ke(a,"iterate",l?Ur:yt),{next(){const{value:m,done:p}=f.next();return p?{value:m,done:p}:{value:s?[u(m[0]),u(m[1])]:u(m),done:p}},[Symbol.iterator](){return this}}}}function Qe(e){return function(...t){return e==="delete"?!1:this}}function xl(){const e={get(a){return xn(this,a)},get size(){return _n(this)},has:wn,add:ia,set:aa,delete:oa,clear:sa,forEach:kn(!1,!1)},t={get(a){return xn(this,a,!1,!0)},get size(){return _n(this)},has:wn,add:ia,set:aa,delete:oa,clear:sa,forEach:kn(!1,!0)},n={get(a){return xn(this,a,!0)},get size(){return _n(this,!0)},has(a){return wn.call(this,a,!0)},add:Qe("add"),set:Qe("set"),delete:Qe("delete"),clear:Qe("clear"),forEach:kn(!0,!1)},r={get(a){return xn(this,a,!0,!0)},get size(){return _n(this,!0)},has(a){return wn.call(this,a,!0)},add:Qe("add"),set:Qe("set"),delete:Qe("delete"),clear:Qe("clear"),forEach:kn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=An(a,!1,!1),n[a]=An(a,!0,!1),t[a]=An(a,!1,!0),r[a]=An(a,!0,!0)}),[e,n,t,r]}const[wl,_l,kl,Al]=xl();function Oi(e,t){const n=t?e?Al:kl:e?_l:wl;return(r,i,a)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(Y(n,i)&&i in r?n:r,i,a)}const Ol={get:Oi(!1,!1)},El={get:Oi(!1,!0)},Cl={get:Oi(!0,!1)},Io=new WeakMap,So=new WeakMap,To=new WeakMap,Pl=new WeakMap;function Il(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Sl(e){return e.__v_skip||!Object.isExtensible(e)?0:Il(qs(e))}function Ei(e){return zt(e)?e:Ci(e,!1,Po,Ol,Io)}function Tl(e){return Ci(e,!1,yl,El,So)}function No(e){return Ci(e,!0,bl,Cl,To)}function Ci(e,t,n,r,i){if(!ee(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=i.get(e);if(a)return a;const o=Sl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function Mt(e){return zt(e)?Mt(e.__v_raw):!!(e&&e.__v_isReactive)}function zt(e){return!!(e&&e.__v_isReadonly)}function Vn(e){return!!(e&&e.__v_isShallow)}function Mo(e){return Mt(e)||zt(e)}function K(e){const t=e&&e.__v_raw;return t?K(t):e}function Lo(e){return qn(e,"__v_skip",!0),e}const rn=e=>ee(e)?Ei(e):e,Pi=e=>ee(e)?No(e):e;function Fo(e){nt&&Te&&(e=K(e),Oo(e.dep||(e.dep=wi())))}function zo(e,t){e=K(e);const n=e.dep;n&&Hr(n)}function ge(e){return!!(e&&e.__v_isRef===!0)}function pe(e){return Nl(e,!1)}function Nl(e,t){return ge(e)?e:new Ml(e,t)}class Ml{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:K(t),this._value=n?t:rn(t)}get value(){return Fo(this),this._value}set value(t){const n=this.__v_isShallow||Vn(t)||zt(t);t=n?t:K(t),nn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:rn(t),zo(this))}}function Xt(e){return ge(e)?e.value:e}const Ll={get:(e,t,n)=>Xt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return ge(i)&&!ge(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Ro(e){return Mt(e)?e:new Proxy(e,Ll)}class Fl{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new _i(t,()=>{this._dirty||(this._dirty=!0,zo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=K(this);return Fo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function zl(e,t,n=!1){let r,i;const a=$(e);return a?(r=e,i=Le):(r=e.get,i=e.set),new Fl(r,i,a||!i,n)}function rt(e,t,n,r){let i;try{i=r?e(...r):e()}catch(a){fr(a,t,n)}return i}function Fe(e,t,n,r){if($(e)){const a=rt(e,t,n,r);return a&&vo(a)&&a.catch(o=>{fr(o,t,n)}),a}const i=[];for(let a=0;a<e.length;a++)i.push(Fe(e[a],t,n,r));return i}function fr(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let a=t.parent;const o=t.proxy,s=n;for(;a;){const f=a.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](e,o,s)===!1)return}a=a.parent}const l=t.appContext.config.errorHandler;if(l){rt(l,null,10,[e,o,s]);return}}Rl(e,n,i,r)}function Rl(e,t,n,r=!0){console.error(e)}let an=!1,Wr=!1;const he=[];let $e=0;const Lt=[];let Ye=null,pt=0;const jo=Promise.resolve();let Ii=null;function jl(e){const t=Ii||jo;return e?t.then(this?e.bind(this):e):t}function Dl(e){let t=$e+1,n=he.length;for(;t<n;){const r=t+n>>>1;on(he[r])<e?t=r+1:n=r}return t}function Si(e){(!he.length||!he.includes(e,an&&e.allowRecurse?$e+1:$e))&&(e.id==null?he.push(e):he.splice(Dl(e.id),0,e),Do())}function Do(){!an&&!Wr&&(Wr=!0,Ii=jo.then(Bo))}function $l(e){const t=he.indexOf(e);t>$e&&he.splice(t,1)}function Bl(e){j(e)?Lt.push(...e):(!Ye||!Ye.includes(e,e.allowRecurse?pt+1:pt))&&Lt.push(e),Do()}function la(e,t=an?$e+1:0){for(;t<he.length;t++){const n=he[t];n&&n.pre&&(he.splice(t,1),t--,n())}}function $o(e){if(Lt.length){const t=[...new Set(Lt)];if(Lt.length=0,Ye){Ye.push(...t);return}for(Ye=t,Ye.sort((n,r)=>on(n)-on(r)),pt=0;pt<Ye.length;pt++)Ye[pt]();Ye=null,pt=0}}const on=e=>e.id==null?1/0:e.id,Ul=(e,t)=>{const n=on(e)-on(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Bo(e){Wr=!1,an=!0,he.sort(Ul);const t=Le;try{for($e=0;$e<he.length;$e++){const n=he[$e];n&&n.active!==!1&&rt(n,null,14)}}finally{$e=0,he.length=0,$o(),an=!1,Ii=null,(he.length||Lt.length)&&Bo()}}function Hl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||G;let i=n;const a=t.startsWith("update:"),o=a&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:p}=r[u]||G;p&&(i=n.map(g=>le(g)?g.trim():g)),m&&(i=n.map(jr))}let s,l=r[s=_r(t)]||r[s=_r(Ue(t))];!l&&a&&(l=r[s=_r($t(t))]),l&&Fe(l,e,6,i);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Fe(f,e,6,i)}}function Uo(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const a=e.emits;let o={},s=!1;if(!$(e)){const l=f=>{const u=Uo(f,t,!0);u&&(s=!0,ue(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!a&&!s?(ee(e)&&r.set(e,null),null):(j(a)?a.forEach(l=>o[l]=null):ue(o,a),ee(e)&&r.set(e,o),o)}function cr(e,t){return!e||!ir(t)?!1:(t=t.slice(2).replace(/Once$/,""),Y(e,t[0].toLowerCase()+t.slice(1))||Y(e,$t(t))||Y(e,t))}let Ce=null,Ho=null;function Xn(e){const t=Ce;return Ce=e,Ho=e&&e.type.__scopeId||null,t}function Wl(e,t=Ce,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&xa(-1);const a=Xn(t);let o;try{o=e(...i)}finally{Xn(a),r._d&&xa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function kr(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:a,propsOptions:[o],slots:s,attrs:l,emit:f,render:u,renderCache:m,data:p,setupState:g,ctx:A,inheritAttrs:E}=e;let R,_;const x=Xn(e);try{if(n.shapeFlag&4){const P=i||r;R=De(u.call(P,P,m,a,g,p,A)),_=l}else{const P=t;R=De(P.length>1?P(a,{attrs:l,slots:s,emit:f}):P(a,null)),_=t.props?l:Yl(l)}}catch(P){Qt.length=0,fr(P,e,1),R=te(wt)}let M=R;if(_&&E!==!1){const P=Object.keys(_),{shapeFlag:W}=M;P.length&&W&7&&(o&&P.some(hi)&&(_=Kl(_,o)),M=Rt(M,_))}return n.dirs&&(M=Rt(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),R=M,Xn(x),R}const Yl=e=>{let t;for(const n in e)(n==="class"||n==="style"||ir(n))&&((t||(t={}))[n]=e[n]);return t},Kl=(e,t)=>{const n={};for(const r in e)(!hi(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ql(e,t,n){const{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:l}=t,f=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?fa(r,o,f):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const p=u[m];if(o[p]!==r[p]&&!cr(f,p))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?fa(r,o,f):!0:!!o;return!1}function fa(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const a=r[i];if(t[a]!==e[a]&&!cr(n,a))return!0}return!1}function Vl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Xl=e=>e.__isSuspense;function Jl(e,t){t&&t.pendingBranch?j(e)?t.effects.push(...e):t.effects.push(e):Bl(e)}const On={};function $n(e,t,n){return Wo(e,t,n)}function Wo(e,t,{immediate:n,deep:r,flush:i,onTrack:a,onTrigger:o}=G){var s;const l=il()===((s=de)==null?void 0:s.scope)?de:null;let f,u=!1,m=!1;if(ge(e)?(f=()=>e.value,u=Vn(e)):Mt(e)?(f=()=>e,r=!0):j(e)?(m=!0,u=e.some(P=>Mt(P)||Vn(P)),f=()=>e.map(P=>{if(ge(P))return P.value;if(Mt(P))return gt(P);if($(P))return rt(P,l,2)})):$(e)?t?f=()=>rt(e,l,2):f=()=>{if(!(l&&l.isUnmounted))return p&&p(),Fe(e,l,3,[g])}:f=Le,t&&r){const P=f;f=()=>gt(P())}let p,g=P=>{p=x.onStop=()=>{rt(P,l,4)}},A;if(ln)if(g=Le,t?n&&Fe(t,l,3,[f(),m?[]:void 0,g]):f(),i==="sync"){const P=qf();A=P.__watcherHandles||(P.__watcherHandles=[])}else return Le;let E=m?new Array(e.length).fill(On):On;const R=()=>{if(x.active)if(t){const P=x.run();(r||u||(m?P.some((W,ae)=>nn(W,E[ae])):nn(P,E)))&&(p&&p(),Fe(t,l,3,[P,E===On?void 0:m&&E[0]===On?[]:E,g]),E=P)}else x.run()};R.allowRecurse=!!t;let _;i==="sync"?_=R:i==="post"?_=()=>we(R,l&&l.suspense):(R.pre=!0,l&&(R.id=l.uid),_=()=>Si(R));const x=new _i(f,_);t?n?R():E=x.run():i==="post"?we(x.run.bind(x),l&&l.suspense):x.run();const M=()=>{x.stop(),l&&l.scope&&gi(l.scope.effects,x)};return A&&A.push(M),M}function Gl(e,t,n){const r=this.proxy,i=le(e)?e.includes(".")?Yo(r,e):()=>r[e]:e.bind(r,r);let a;$(t)?a=t:(a=t.handler,n=t);const o=de;jt(this);const s=Wo(i,a.bind(r),n);return o?jt(o):xt(),s}function Yo(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function gt(e,t){if(!ee(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ge(e))gt(e.value,t);else if(j(e))for(let n=0;n<e.length;n++)gt(e[n],t);else if(go(e)||Nt(e))e.forEach(n=>{gt(n,t)});else if(yo(e))for(const n in e)gt(e[n],t);return e}function En(e,t){const n=Ce;if(n===null)return e;const r=pr(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[o,s,l,f=G]=t[a];o&&($(o)&&(o={mounted:o,updated:o}),o.deep&&gt(s),i.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:f}))}return e}function ut(e,t,n,r){const i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){const s=i[o];a&&(s.oldValue=a[o].value);let l=s.dir[r];l&&(Bt(),Fe(l,n,8,[e.el,s,e,t]),Ut())}}function Zl(e,t){return $(e)?(()=>ue({name:e.name},t,{setup:e}))():e}const Bn=e=>!!e.type.__asyncLoader,Ko=e=>e.type.__isKeepAlive;function Ql(e,t){qo(e,"a",t)}function ef(e,t){qo(e,"da",t)}function qo(e,t,n=de){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(ur(t,r,n),n){let i=n.parent;for(;i&&i.parent;)Ko(i.parent.vnode)&&tf(r,t,n,i),i=i.parent}}function tf(e,t,n,r){const i=ur(t,e,r,!0);Xo(()=>{gi(r[t],i)},n)}function ur(e,t,n=de,r=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Bt(),jt(n);const s=Fe(t,n,e,o);return xt(),Ut(),s});return r?i.unshift(a):i.push(a),a}}const Ge=e=>(t,n=de)=>(!ln||e==="sp")&&ur(e,(...r)=>t(...r),n),nf=Ge("bm"),Vo=Ge("m"),rf=Ge("bu"),af=Ge("u"),of=Ge("bum"),Xo=Ge("um"),sf=Ge("sp"),lf=Ge("rtg"),ff=Ge("rtc");function cf(e,t=de){ur("ec",e,t)}const Jo="components";function uf(e,t){return mf(Jo,e,!0,t)||e}const df=Symbol.for("v-ndc");function mf(e,t,n=!0,r=!1){const i=Ce||de;if(i){const a=i.type;if(e===Jo){const s=Hf(a,!1);if(s&&(s===t||s===Ue(t)||s===sr(Ue(t))))return a}const o=ca(i[e]||a[e],t)||ca(i.appContext[e],t);return!o&&r?a:o}}function ca(e,t){return e&&(e[t]||e[Ue(t)]||e[sr(Ue(t))])}function ua(e,t,n,r){let i;const a=n&&n[r];if(j(e)||le(e)){i=new Array(e.length);for(let o=0,s=e.length;o<s;o++)i[o]=t(e[o],o,void 0,a&&a[o])}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,a&&a[o])}else if(ee(e))if(e[Symbol.iterator])i=Array.from(e,(o,s)=>t(o,s,void 0,a&&a[s]));else{const o=Object.keys(e);i=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];i[s]=t(e[f],f,s,a&&a[s])}}else i=[];return n&&(n[r]=i),i}const Yr=e=>e?ls(e)?pr(e)||e.proxy:Yr(e.parent):null,Zt=ue(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Yr(e.parent),$root:e=>Yr(e.root),$emit:e=>e.emit,$options:e=>Ti(e),$forceUpdate:e=>e.f||(e.f=()=>Si(e.update)),$nextTick:e=>e.n||(e.n=jl.bind(e.proxy)),$watch:e=>Gl.bind(e)}),Ar=(e,t)=>e!==G&&!e.__isScriptSetup&&Y(e,t),pf={get({_:e},t){const{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else{if(Ar(r,t))return o[t]=1,r[t];if(i!==G&&Y(i,t))return o[t]=2,i[t];if((f=e.propsOptions[0])&&Y(f,t))return o[t]=3,a[t];if(n!==G&&Y(n,t))return o[t]=4,n[t];Kr&&(o[t]=0)}}const u=Zt[t];let m,p;if(u)return t==="$attrs"&&ke(e,"get",t),u(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==G&&Y(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,Y(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:a}=e;return Ar(i,t)?(i[t]=n,!0):r!==G&&Y(r,t)?(r[t]=n,!0):Y(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:a}},o){let s;return!!n[o]||e!==G&&Y(e,o)||Ar(t,o)||(s=a[0])&&Y(s,o)||Y(r,o)||Y(Zt,o)||Y(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Y(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function da(e){return j(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Kr=!0;function hf(e){const t=Ti(e),n=e.proxy,r=e.ctx;Kr=!1,t.beforeCreate&&ma(t.beforeCreate,e,"bc");const{data:i,computed:a,methods:o,watch:s,provide:l,inject:f,created:u,beforeMount:m,mounted:p,beforeUpdate:g,updated:A,activated:E,deactivated:R,beforeDestroy:_,beforeUnmount:x,destroyed:M,unmounted:P,render:W,renderTracked:ae,renderTriggered:oe,errorCaptured:J,serverPrefetch:I,expose:H,inheritAttrs:z,components:me,directives:He,filters:Wt}=t;if(f&&gf(f,r,null),o)for(const ne in o){const V=o[ne];$(V)&&(r[ne]=V.bind(n))}if(i){const ne=i.call(n,n);ee(ne)&&(e.data=Ei(ne))}if(Kr=!0,a)for(const ne in a){const V=a[ne],ft=$(V)?V.bind(n,n):$(V.get)?V.get.bind(n,n):Le,vn=!$(V)&&$(V.set)?V.set.bind(n):Le,ct=mt({get:ft,set:vn});Object.defineProperty(r,ne,{enumerable:!0,configurable:!0,get:()=>ct.value,set:ze=>ct.value=ze})}if(s)for(const ne in s)Go(s[ne],r,n,ne);if(l){const ne=$(l)?l.call(n):l;Reflect.ownKeys(ne).forEach(V=>{_f(V,ne[V])})}u&&ma(u,e,"c");function ve(ne,V){j(V)?V.forEach(ft=>ne(ft.bind(n))):V&&ne(V.bind(n))}if(ve(nf,m),ve(Vo,p),ve(rf,g),ve(af,A),ve(Ql,E),ve(ef,R),ve(cf,J),ve(ff,ae),ve(lf,oe),ve(of,x),ve(Xo,P),ve(sf,I),j(H))if(H.length){const ne=e.exposed||(e.exposed={});H.forEach(V=>{Object.defineProperty(ne,V,{get:()=>n[V],set:ft=>n[V]=ft})})}else e.exposed||(e.exposed={});W&&e.render===Le&&(e.render=W),z!=null&&(e.inheritAttrs=z),me&&(e.components=me),He&&(e.directives=He)}function gf(e,t,n=Le){j(e)&&(e=qr(e));for(const r in e){const i=e[r];let a;ee(i)?"default"in i?a=Un(i.from||r,i.default,!0):a=Un(i.from||r):a=Un(i),ge(a)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):t[r]=a}}function ma(e,t,n){Fe(j(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Go(e,t,n,r){const i=r.includes(".")?Yo(n,r):()=>n[r];if(le(e)){const a=t[e];$(a)&&$n(i,a)}else if($(e))$n(i,e.bind(n));else if(ee(e))if(j(e))e.forEach(a=>Go(a,t,n,r));else{const a=$(e.handler)?e.handler.bind(n):t[e.handler];$(a)&&$n(i,a,e)}}function Ti(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t);let l;return s?l=s:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(f=>Jn(l,f,o,!0)),Jn(l,t,o)),ee(t)&&a.set(t,l),l}function Jn(e,t,n,r=!1){const{mixins:i,extends:a}=t;a&&Jn(e,a,n,!0),i&&i.forEach(o=>Jn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=vf[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const vf={data:pa,props:ha,emits:ha,methods:Jt,computed:Jt,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:Jt,directives:Jt,watch:yf,provide:pa,inject:bf};function pa(e,t){return t?e?function(){return ue($(e)?e.call(this,this):e,$(t)?t.call(this,this):t)}:t:e}function bf(e,t){return Jt(qr(e),qr(t))}function qr(e){if(j(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function Jt(e,t){return e?ue(Object.create(null),e,t):t}function ha(e,t){return e?j(e)&&j(t)?[...new Set([...e,...t])]:ue(Object.create(null),da(e),da(t??{})):t}function yf(e,t){if(!e)return t;if(!t)return e;const n=ue(Object.create(null),e);for(const r in t)n[r]=be(e[r],t[r]);return n}function Zo(){return{app:null,config:{isNativeTag:Ws,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xf=0;function wf(e,t){return function(r,i=null){$(r)||(r=ue({},r)),i!=null&&!ee(i)&&(i=null);const a=Zo(),o=new Set;let s=!1;const l=a.app={_uid:xf++,_component:r,_props:i,_container:null,_context:a,_instance:null,version:Vf,get config(){return a.config},set config(f){},use(f,...u){return o.has(f)||(f&&$(f.install)?(o.add(f),f.install(l,...u)):$(f)&&(o.add(f),f(l,...u))),l},mixin(f){return a.mixins.includes(f)||a.mixins.push(f),l},component(f,u){return u?(a.components[f]=u,l):a.components[f]},directive(f,u){return u?(a.directives[f]=u,l):a.directives[f]},mount(f,u,m){if(!s){const p=te(r,i);return p.appContext=a,u&&t?t(p,f):e(p,f,m),s=!0,l._container=f,f.__vue_app__=l,pr(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,u){return a.provides[f]=u,l},runWithContext(f){Gn=l;try{return f()}finally{Gn=null}}};return l}}let Gn=null;function _f(e,t){if(de){let n=de.provides;const r=de.parent&&de.parent.provides;r===n&&(n=de.provides=Object.create(r)),n[e]=t}}function Un(e,t,n=!1){const r=de||Ce;if(r||Gn){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Gn._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&$(t)?t.call(r&&r.proxy):t}}function kf(e,t,n,r=!1){const i={},a={};qn(a,mr,1),e.propsDefaults=Object.create(null),Qo(e,t,i,a);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:Tl(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function Af(e,t,n,r){const{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=K(i),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let p=u[m];if(cr(e.emitsOptions,p))continue;const g=t[p];if(l)if(Y(a,p))g!==a[p]&&(a[p]=g,f=!0);else{const A=Ue(p);i[A]=Vr(l,s,A,g,e,!1)}else g!==a[p]&&(a[p]=g,f=!0)}}}else{Qo(e,t,i,a)&&(f=!0);let u;for(const m in s)(!t||!Y(t,m)&&((u=$t(m))===m||!Y(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(i[m]=Vr(l,s,m,void 0,e,!0)):delete i[m]);if(a!==s)for(const m in a)(!t||!Y(t,m))&&(delete a[m],f=!0)}f&&qe(e,"set","$attrs")}function Qo(e,t,n,r){const[i,a]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(jn(l))continue;const f=t[l];let u;i&&Y(i,u=Ue(l))?!a||!a.includes(u)?n[u]=f:(s||(s={}))[u]=f:cr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(a){const l=K(n),f=s||G;for(let u=0;u<a.length;u++){const m=a[u];n[m]=Vr(i,l,m,f[m],e,!Y(f,m))}}return o}function Vr(e,t,n,r,i,a){const o=e[n];if(o!=null){const s=Y(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&$(l)){const{propsDefaults:f}=i;n in f?r=f[n]:(jt(i),r=f[n]=l.call(null,t),xt())}else r=l}o[0]&&(a&&!s?r=!1:o[1]&&(r===""||r===$t(n))&&(r=!0))}return r}function es(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const a=e.props,o={},s=[];let l=!1;if(!$(e)){const u=m=>{l=!0;const[p,g]=es(m,t,!0);ue(o,p),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!a&&!l)return ee(e)&&r.set(e,Tt),Tt;if(j(a))for(let u=0;u<a.length;u++){const m=Ue(a[u]);ga(m)&&(o[m]=G)}else if(a)for(const u in a){const m=Ue(u);if(ga(m)){const p=a[u],g=o[m]=j(p)||$(p)?{type:p}:ue({},p);if(g){const A=ya(Boolean,g.type),E=ya(String,g.type);g[0]=A>-1,g[1]=E<0||A<E,(A>-1||Y(g,"default"))&&s.push(m)}}}const f=[o,s];return ee(e)&&r.set(e,f),f}function ga(e){return e[0]!=="$"}function va(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ba(e,t){return va(e)===va(t)}function ya(e,t){return j(t)?t.findIndex(n=>ba(n,e)):$(t)&&ba(t,e)?0:-1}const ts=e=>e[0]==="_"||e==="$stable",Ni=e=>j(e)?e.map(De):[De(e)],Of=(e,t,n)=>{if(t._n)return t;const r=Wl((...i)=>Ni(t(...i)),n);return r._c=!1,r},ns=(e,t,n)=>{const r=e._ctx;for(const i in e){if(ts(i))continue;const a=e[i];if($(a))t[i]=Of(i,a,r);else if(a!=null){const o=Ni(a);t[i]=()=>o}}},rs=(e,t)=>{const n=Ni(t);e.slots.default=()=>n},Ef=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=K(t),qn(t,"_",n)):ns(t,e.slots={})}else e.slots={},t&&rs(e,t);qn(e.slots,mr,1)},Cf=(e,t,n)=>{const{vnode:r,slots:i}=e;let a=!0,o=G;if(r.shapeFlag&32){const s=t._;s?n&&s===1?a=!1:(ue(i,t),!n&&s===1&&delete i._):(a=!t.$stable,ns(t,i)),o=t}else t&&(rs(e,t),o={default:1});if(a)for(const s in i)!ts(s)&&!(s in o)&&delete i[s]};function Xr(e,t,n,r,i=!1){if(j(e)){e.forEach((p,g)=>Xr(p,t&&(j(t)?t[g]:t),n,r,i));return}if(Bn(r)&&!i)return;const a=r.shapeFlag&4?pr(r.component)||r.component.proxy:r.el,o=i?null:a,{i:s,r:l}=e,f=t&&t.r,u=s.refs===G?s.refs={}:s.refs,m=s.setupState;if(f!=null&&f!==l&&(le(f)?(u[f]=null,Y(m,f)&&(m[f]=null)):ge(f)&&(f.value=null)),$(l))rt(l,s,12,[o,u]);else{const p=le(l),g=ge(l);if(p||g){const A=()=>{if(e.f){const E=p?Y(m,l)?m[l]:u[l]:l.value;i?j(E)&&gi(E,a):j(E)?E.includes(a)||E.push(a):p?(u[l]=[a],Y(m,l)&&(m[l]=u[l])):(l.value=[a],e.k&&(u[e.k]=l.value))}else p?(u[l]=o,Y(m,l)&&(m[l]=o)):g&&(l.value=o,e.k&&(u[e.k]=o))};o?(A.id=-1,we(A,n)):A()}}}const we=Jl;function Pf(e){return If(e)}function If(e,t){const n=Dr();n.__VUE__=!0;const{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:l,setText:f,setElementText:u,parentNode:m,nextSibling:p,setScopeId:g=Le,insertStaticContent:A}=e,E=(c,d,h,b=null,v=null,k=null,C=!1,w=null,O=!!d.dynamicChildren)=>{if(c===d)return;c&&!Kt(c,d)&&(b=bn(c),ze(c,v,k,!0),c=null),d.patchFlag===-2&&(O=!1,d.dynamicChildren=null);const{type:y,ref:L,shapeFlag:T}=d;switch(y){case dr:R(c,d,h,b);break;case wt:_(c,d,h,b);break;case Or:c==null&&x(d,h,b,C);break;case Se:me(c,d,h,b,v,k,C,w,O);break;default:T&1?W(c,d,h,b,v,k,C,w,O):T&6?He(c,d,h,b,v,k,C,w,O):(T&64||T&128)&&y.process(c,d,h,b,v,k,C,w,O,Ot)}L!=null&&v&&Xr(L,c&&c.ref,k,d||c,!d)},R=(c,d,h,b)=>{if(c==null)r(d.el=s(d.children),h,b);else{const v=d.el=c.el;d.children!==c.children&&f(v,d.children)}},_=(c,d,h,b)=>{c==null?r(d.el=l(d.children||""),h,b):d.el=c.el},x=(c,d,h,b)=>{[c.el,c.anchor]=A(c.children,d,h,b,c.el,c.anchor)},M=({el:c,anchor:d},h,b)=>{let v;for(;c&&c!==d;)v=p(c),r(c,h,b),c=v;r(d,h,b)},P=({el:c,anchor:d})=>{let h;for(;c&&c!==d;)h=p(c),i(c),c=h;i(d)},W=(c,d,h,b,v,k,C,w,O)=>{C=C||d.type==="svg",c==null?ae(d,h,b,v,k,C,w,O):I(c,d,v,k,C,w,O)},ae=(c,d,h,b,v,k,C,w)=>{let O,y;const{type:L,props:T,shapeFlag:F,transition:D,dirs:B}=c;if(O=c.el=o(c.type,k,T&&T.is,T),F&8?u(O,c.children):F&16&&J(c.children,O,null,b,v,k&&L!=="foreignObject",C,w),B&&ut(c,null,b,"created"),oe(O,c,c.scopeId,C,b),T){for(const q in T)q!=="value"&&!jn(q)&&a(O,q,null,T[q],k,c.children,b,v,We);"value"in T&&a(O,"value",null,T.value),(y=T.onVnodeBeforeMount)&&je(y,b,c)}B&&ut(c,null,b,"beforeMount");const X=(!v||v&&!v.pendingBranch)&&D&&!D.persisted;X&&D.beforeEnter(O),r(O,d,h),((y=T&&T.onVnodeMounted)||X||B)&&we(()=>{y&&je(y,b,c),X&&D.enter(O),B&&ut(c,null,b,"mounted")},v)},oe=(c,d,h,b,v)=>{if(h&&g(c,h),b)for(let k=0;k<b.length;k++)g(c,b[k]);if(v){let k=v.subTree;if(d===k){const C=v.vnode;oe(c,C,C.scopeId,C.slotScopeIds,v.parent)}}},J=(c,d,h,b,v,k,C,w,O=0)=>{for(let y=O;y<c.length;y++){const L=c[y]=w?tt(c[y]):De(c[y]);E(null,L,d,h,b,v,k,C,w)}},I=(c,d,h,b,v,k,C)=>{const w=d.el=c.el;let{patchFlag:O,dynamicChildren:y,dirs:L}=d;O|=c.patchFlag&16;const T=c.props||G,F=d.props||G;let D;h&&dt(h,!1),(D=F.onVnodeBeforeUpdate)&&je(D,h,d,c),L&&ut(d,c,h,"beforeUpdate"),h&&dt(h,!0);const B=v&&d.type!=="foreignObject";if(y?H(c.dynamicChildren,y,w,h,b,B,k):C||V(c,d,w,null,h,b,B,k,!1),O>0){if(O&16)z(w,d,T,F,h,b,v);else if(O&2&&T.class!==F.class&&a(w,"class",null,F.class,v),O&4&&a(w,"style",T.style,F.style,v),O&8){const X=d.dynamicProps;for(let q=0;q<X.length;q++){const ie=X[q],Pe=T[ie],Et=F[ie];(Et!==Pe||ie==="value")&&a(w,ie,Pe,Et,v,c.children,h,b,We)}}O&1&&c.children!==d.children&&u(w,d.children)}else!C&&y==null&&z(w,d,T,F,h,b,v);((D=F.onVnodeUpdated)||L)&&we(()=>{D&&je(D,h,d,c),L&&ut(d,c,h,"updated")},b)},H=(c,d,h,b,v,k,C)=>{for(let w=0;w<d.length;w++){const O=c[w],y=d[w],L=O.el&&(O.type===Se||!Kt(O,y)||O.shapeFlag&70)?m(O.el):h;E(O,y,L,null,b,v,k,C,!0)}},z=(c,d,h,b,v,k,C)=>{if(h!==b){if(h!==G)for(const w in h)!jn(w)&&!(w in b)&&a(c,w,h[w],null,C,d.children,v,k,We);for(const w in b){if(jn(w))continue;const O=b[w],y=h[w];O!==y&&w!=="value"&&a(c,w,y,O,C,d.children,v,k,We)}"value"in b&&a(c,"value",h.value,b.value)}},me=(c,d,h,b,v,k,C,w,O)=>{const y=d.el=c?c.el:s(""),L=d.anchor=c?c.anchor:s("");let{patchFlag:T,dynamicChildren:F,slotScopeIds:D}=d;D&&(w=w?w.concat(D):D),c==null?(r(y,h,b),r(L,h,b),J(d.children,h,L,v,k,C,w,O)):T>0&&T&64&&F&&c.dynamicChildren?(H(c.dynamicChildren,F,h,v,k,C,w),(d.key!=null||v&&d===v.subTree)&&is(c,d,!0)):V(c,d,h,L,v,k,C,w,O)},He=(c,d,h,b,v,k,C,w,O)=>{d.slotScopeIds=w,c==null?d.shapeFlag&512?v.ctx.activate(d,h,b,C,O):Wt(d,h,b,v,k,C,O):At(c,d,O)},Wt=(c,d,h,b,v,k,C)=>{const w=c.component=jf(c,b,v);if(Ko(c)&&(w.ctx.renderer=Ot),Df(w),w.asyncDep){if(v&&v.registerDep(w,ve),!c.el){const O=w.subTree=te(wt);_(null,O,d,h)}return}ve(w,c,d,h,v,k,C)},At=(c,d,h)=>{const b=d.component=c.component;if(ql(c,d,h))if(b.asyncDep&&!b.asyncResolved){ne(b,d,h);return}else b.next=d,$l(b.update),b.update();else d.el=c.el,b.vnode=d},ve=(c,d,h,b,v,k,C)=>{const w=()=>{if(c.isMounted){let{next:L,bu:T,u:F,parent:D,vnode:B}=c,X=L,q;dt(c,!1),L?(L.el=B.el,ne(c,L,C)):L=B,T&&Dn(T),(q=L.props&&L.props.onVnodeBeforeUpdate)&&je(q,D,L,B),dt(c,!0);const ie=kr(c),Pe=c.subTree;c.subTree=ie,E(Pe,ie,m(Pe.el),bn(Pe),c,v,k),L.el=ie.el,X===null&&Vl(c,ie.el),F&&we(F,v),(q=L.props&&L.props.onVnodeUpdated)&&we(()=>je(q,D,L,B),v)}else{let L;const{el:T,props:F}=d,{bm:D,m:B,parent:X}=c,q=Bn(d);if(dt(c,!1),D&&Dn(D),!q&&(L=F&&F.onVnodeBeforeMount)&&je(L,X,d),dt(c,!0),T&&wr){const ie=()=>{c.subTree=kr(c),wr(T,c.subTree,c,v,null)};q?d.type.__asyncLoader().then(()=>!c.isUnmounted&&ie()):ie()}else{const ie=c.subTree=kr(c);E(null,ie,h,b,c,v,k),d.el=ie.el}if(B&&we(B,v),!q&&(L=F&&F.onVnodeMounted)){const ie=d;we(()=>je(L,X,ie),v)}(d.shapeFlag&256||X&&Bn(X.vnode)&&X.vnode.shapeFlag&256)&&c.a&&we(c.a,v),c.isMounted=!0,d=h=b=null}},O=c.effect=new _i(w,()=>Si(y),c.scope),y=c.update=()=>O.run();y.id=c.uid,dt(c,!0),y()},ne=(c,d,h)=>{d.component=c;const b=c.vnode.props;c.vnode=d,c.next=null,Af(c,d.props,b,h),Cf(c,d.children,h),Bt(),la(),Ut()},V=(c,d,h,b,v,k,C,w,O=!1)=>{const y=c&&c.children,L=c?c.shapeFlag:0,T=d.children,{patchFlag:F,shapeFlag:D}=d;if(F>0){if(F&128){vn(y,T,h,b,v,k,C,w,O);return}else if(F&256){ft(y,T,h,b,v,k,C,w,O);return}}D&8?(L&16&&We(y,v,k),T!==y&&u(h,T)):L&16?D&16?vn(y,T,h,b,v,k,C,w,O):We(y,v,k,!0):(L&8&&u(h,""),D&16&&J(T,h,b,v,k,C,w,O))},ft=(c,d,h,b,v,k,C,w,O)=>{c=c||Tt,d=d||Tt;const y=c.length,L=d.length,T=Math.min(y,L);let F;for(F=0;F<T;F++){const D=d[F]=O?tt(d[F]):De(d[F]);E(c[F],D,h,null,v,k,C,w,O)}y>L?We(c,v,k,!0,!1,T):J(d,h,b,v,k,C,w,O,T)},vn=(c,d,h,b,v,k,C,w,O)=>{let y=0;const L=d.length;let T=c.length-1,F=L-1;for(;y<=T&&y<=F;){const D=c[y],B=d[y]=O?tt(d[y]):De(d[y]);if(Kt(D,B))E(D,B,h,null,v,k,C,w,O);else break;y++}for(;y<=T&&y<=F;){const D=c[T],B=d[F]=O?tt(d[F]):De(d[F]);if(Kt(D,B))E(D,B,h,null,v,k,C,w,O);else break;T--,F--}if(y>T){if(y<=F){const D=F+1,B=D<L?d[D].el:b;for(;y<=F;)E(null,d[y]=O?tt(d[y]):De(d[y]),h,B,v,k,C,w,O),y++}}else if(y>F)for(;y<=T;)ze(c[y],v,k,!0),y++;else{const D=y,B=y,X=new Map;for(y=B;y<=F;y++){const Ae=d[y]=O?tt(d[y]):De(d[y]);Ae.key!=null&&X.set(Ae.key,y)}let q,ie=0;const Pe=F-B+1;let Et=!1,Gi=0;const Yt=new Array(Pe);for(y=0;y<Pe;y++)Yt[y]=0;for(y=D;y<=T;y++){const Ae=c[y];if(ie>=Pe){ze(Ae,v,k,!0);continue}let Re;if(Ae.key!=null)Re=X.get(Ae.key);else for(q=B;q<=F;q++)if(Yt[q-B]===0&&Kt(Ae,d[q])){Re=q;break}Re===void 0?ze(Ae,v,k,!0):(Yt[Re-B]=y+1,Re>=Gi?Gi=Re:Et=!0,E(Ae,d[Re],h,null,v,k,C,w,O),ie++)}const Zi=Et?Sf(Yt):Tt;for(q=Zi.length-1,y=Pe-1;y>=0;y--){const Ae=B+y,Re=d[Ae],Qi=Ae+1<L?d[Ae+1].el:b;Yt[y]===0?E(null,Re,h,Qi,v,k,C,w,O):Et&&(q<0||y!==Zi[q]?ct(Re,h,Qi,2):q--)}}},ct=(c,d,h,b,v=null)=>{const{el:k,type:C,transition:w,children:O,shapeFlag:y}=c;if(y&6){ct(c.component.subTree,d,h,b);return}if(y&128){c.suspense.move(d,h,b);return}if(y&64){C.move(c,d,h,Ot);return}if(C===Se){r(k,d,h);for(let T=0;T<O.length;T++)ct(O[T],d,h,b);r(c.anchor,d,h);return}if(C===Or){M(c,d,h);return}if(b!==2&&y&1&&w)if(b===0)w.beforeEnter(k),r(k,d,h),we(()=>w.enter(k),v);else{const{leave:T,delayLeave:F,afterLeave:D}=w,B=()=>r(k,d,h),X=()=>{T(k,()=>{B(),D&&D()})};F?F(k,B,X):X()}else r(k,d,h)},ze=(c,d,h,b=!1,v=!1)=>{const{type:k,props:C,ref:w,children:O,dynamicChildren:y,shapeFlag:L,patchFlag:T,dirs:F}=c;if(w!=null&&Xr(w,null,h,c,!0),L&256){d.ctx.deactivate(c);return}const D=L&1&&F,B=!Bn(c);let X;if(B&&(X=C&&C.onVnodeBeforeUnmount)&&je(X,d,c),L&6)Hs(c.component,h,b);else{if(L&128){c.suspense.unmount(h,b);return}D&&ut(c,null,d,"beforeUnmount"),L&64?c.type.remove(c,d,h,v,Ot,b):y&&(k!==Se||T>0&&T&64)?We(y,d,h,!1,!0):(k===Se&&T&384||!v&&L&16)&&We(O,d,h),b&&Xi(c)}(B&&(X=C&&C.onVnodeUnmounted)||D)&&we(()=>{X&&je(X,d,c),D&&ut(c,null,d,"unmounted")},h)},Xi=c=>{const{type:d,el:h,anchor:b,transition:v}=c;if(d===Se){Us(h,b);return}if(d===Or){P(c);return}const k=()=>{i(h),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(c.shapeFlag&1&&v&&!v.persisted){const{leave:C,delayLeave:w}=v,O=()=>C(h,k);w?w(c.el,k,O):O()}else k()},Us=(c,d)=>{let h;for(;c!==d;)h=p(c),i(c),c=h;i(d)},Hs=(c,d,h)=>{const{bum:b,scope:v,update:k,subTree:C,um:w}=c;b&&Dn(b),v.stop(),k&&(k.active=!1,ze(C,c,d,h)),w&&we(w,d),we(()=>{c.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},We=(c,d,h,b=!1,v=!1,k=0)=>{for(let C=k;C<c.length;C++)ze(c[C],d,h,b,v)},bn=c=>c.shapeFlag&6?bn(c.component.subTree):c.shapeFlag&128?c.suspense.next():p(c.anchor||c.el),Ji=(c,d,h)=>{c==null?d._vnode&&ze(d._vnode,null,null,!0):E(d._vnode||null,c,d,null,null,null,h),la(),$o(),d._vnode=c},Ot={p:E,um:ze,m:ct,r:Xi,mt:Wt,mc:J,pc:V,pbc:H,n:bn,o:e};let xr,wr;return t&&([xr,wr]=t(Ot)),{render:Ji,hydrate:xr,createApp:wf(Ji,xr)}}function dt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function is(e,t,n=!1){const r=e.children,i=t.children;if(j(r)&&j(i))for(let a=0;a<r.length;a++){const o=r[a];let s=i[a];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=i[a]=tt(i[a]),s.el=o.el),n||is(o,s)),s.type===dr&&(s.el=o.el)}}function Sf(e){const t=e.slice(),n=[0];let r,i,a,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(i=n[n.length-1],e[i]<f){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<f?a=s+1:o=s;f<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}const Tf=e=>e.__isTeleport,Se=Symbol.for("v-fgt"),dr=Symbol.for("v-txt"),wt=Symbol.for("v-cmt"),Or=Symbol.for("v-stc"),Qt=[];let Ne=null;function se(e=!1){Qt.push(Ne=e?null:[])}function Nf(){Qt.pop(),Ne=Qt[Qt.length-1]||null}let sn=1;function xa(e){sn+=e}function as(e){return e.dynamicChildren=sn>0?Ne||Tt:null,Nf(),sn>0&&Ne&&Ne.push(e),e}function ce(e,t,n,r,i,a){return as(U(e,t,n,r,i,a,!0))}function Mf(e,t,n,r,i){return as(te(e,t,n,r,i,!0))}function Jr(e){return e?e.__v_isVNode===!0:!1}function Kt(e,t){return e.type===t.type&&e.key===t.key}const mr="__vInternal",os=({key:e})=>e??null,Hn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?le(e)||ge(e)||$(e)?{i:Ce,r:e,k:t,f:!!n}:e:null);function U(e,t=null,n=null,r=0,i=null,a=e===Se?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&os(t),ref:t&&Hn(t),scopeId:Ho,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ce};return s?(Mi(l,n),a&128&&e.normalize(l)):n&&(l.shapeFlag|=le(n)?8:16),sn>0&&!o&&Ne&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&Ne.push(l),l}const te=Lf;function Lf(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===df)&&(e=wt),Jr(e)){const s=Rt(e,t,!0);return n&&Mi(s,n),sn>0&&!a&&Ne&&(s.shapeFlag&6?Ne[Ne.indexOf(e)]=s:Ne.push(s)),s.patchFlag|=-2,s}if(Wf(e)&&(e=e.__vccOpts),t){t=Ff(t);let{class:s,style:l}=t;s&&!le(s)&&(t.class=xi(s)),ee(l)&&(Mo(l)&&!j(l)&&(l=ue({},l)),t.style=yi(l))}const o=le(e)?1:Xl(e)?128:Tf(e)?64:ee(e)?4:$(e)?2:0;return U(e,t,n,r,i,o,a,!0)}function Ff(e){return e?Mo(e)||mr in e?ue({},e):e:null}function Rt(e,t,n=!1){const{props:r,ref:i,patchFlag:a,children:o}=e,s=t?ss(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&os(s),ref:t&&t.ref?n&&i?j(i)?i.concat(Hn(t)):[i,Hn(t)]:Hn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Se?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Rt(e.ssContent),ssFallback:e.ssFallback&&Rt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Gr(e=" ",t=0){return te(dr,null,e,t)}function Oe(e="",t=!1){return t?(se(),Mf(wt,null,e)):te(wt,null,e)}function De(e){return e==null||typeof e=="boolean"?te(wt):j(e)?te(Se,null,e.slice()):typeof e=="object"?tt(e):te(dr,null,String(e))}function tt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Rt(e)}function Mi(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(j(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Mi(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(mr in t)?t._ctx=Ce:i===3&&Ce&&(Ce.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else $(t)?(t={default:t,_ctx:Ce},n=32):(t=String(t),r&64?(n=16,t=[Gr(t)]):n=8);e.children=t,e.shapeFlag|=n}function ss(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=xi([t.class,r.class]));else if(i==="style")t.style=yi([t.style,r.style]);else if(ir(i)){const a=t[i],o=r[i];o&&a!==o&&!(j(a)&&a.includes(o))&&(t[i]=a?[].concat(a,o):o)}else i!==""&&(t[i]=r[i])}return t}function je(e,t,n,r=null){Fe(e,t,7,[n,r])}const zf=Zo();let Rf=0;function jf(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||zf,a={uid:Rf++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new nl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:es(r,i),emitsOptions:Uo(r,i),emit:null,emitted:null,propsDefaults:G,inheritAttrs:r.inheritAttrs,ctx:G,data:G,props:G,attrs:G,slots:G,refs:G,setupState:G,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Hl.bind(null,a),e.ce&&e.ce(a),a}let de=null,Li,Ct,wa="__VUE_INSTANCE_SETTERS__";(Ct=Dr()[wa])||(Ct=Dr()[wa]=[]),Ct.push(e=>de=e),Li=e=>{Ct.length>1?Ct.forEach(t=>t(e)):Ct[0](e)};const jt=e=>{Li(e),e.scope.on()},xt=()=>{de&&de.scope.off(),Li(null)};function ls(e){return e.vnode.shapeFlag&4}let ln=!1;function Df(e,t=!1){ln=t;const{props:n,children:r}=e.vnode,i=ls(e);kf(e,n,i,t),Ef(e,r);const a=i?$f(e,t):void 0;return ln=!1,a}function $f(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Lo(new Proxy(e.ctx,pf));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?Uf(e):null;jt(e),Bt();const a=rt(r,e,0,[e.props,i]);if(Ut(),xt(),vo(a)){if(a.then(xt,xt),t)return a.then(o=>{_a(e,o,t)}).catch(o=>{fr(o,e,0)});e.asyncDep=a}else _a(e,a,t)}else fs(e,t)}function _a(e,t,n){$(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ee(t)&&(e.setupState=Ro(t)),fs(e,n)}let ka;function fs(e,t,n){const r=e.type;if(!e.render){if(!t&&ka&&!r.render){const i=r.template||Ti(e).template;if(i){const{isCustomElement:a,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=ue(ue({isCustomElement:a,delimiters:s},o),l);r.render=ka(i,f)}}e.render=r.render||Le}jt(e),Bt(),hf(e),Ut(),xt()}function Bf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ke(e,"get","$attrs"),t[n]}}))}function Uf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Bf(e)},slots:e.slots,emit:e.emit,expose:t}}function pr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ro(Lo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Zt)return Zt[n](e)},has(t,n){return n in t||n in Zt}}))}function Hf(e,t=!0){return $(e)?e.displayName||e.name:e.name||t&&e.__name}function Wf(e){return $(e)&&"__vccOpts"in e}const mt=(e,t)=>zl(e,t,ln);function Yf(e,t,n){const r=arguments.length;return r===2?ee(t)&&!j(t)?Jr(t)?te(e,null,[t]):te(e,t):te(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Jr(n)&&(n=[n]),te(e,t,n))}const Kf=Symbol.for("v-scx"),qf=()=>Un(Kf),Vf="3.3.4",Xf="http://www.w3.org/2000/svg",ht=typeof document<"u"?document:null,Aa=ht&&ht.createElement("template"),Jf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?ht.createElementNS(Xf,e):ht.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>ht.createTextNode(e),createComment:e=>ht.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ht.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,a){const o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Aa.innerHTML=r?`<svg>${e}</svg>`:e;const s=Aa.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Gf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Zf(e,t,n){const r=e.style,i=le(n);if(n&&!i){if(t&&!le(t))for(const a in t)n[a]==null&&Zr(r,a,"");for(const a in n)Zr(r,a,n[a])}else{const a=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=a)}}const Oa=/\s*!important$/;function Zr(e,t,n){if(j(n))n.forEach(r=>Zr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Qf(e,t);Oa.test(n)?e.setProperty($t(r),n.replace(Oa,""),"important"):e[r]=n}}const Ea=["Webkit","Moz","ms"],Er={};function Qf(e,t){const n=Er[t];if(n)return n;let r=Ue(t);if(r!=="filter"&&r in e)return Er[t]=r;r=sr(r);for(let i=0;i<Ea.length;i++){const a=Ea[i]+r;if(a in e)return Er[t]=a}return t}const Ca="http://www.w3.org/1999/xlink";function ec(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ca,t.slice(6,t.length)):e.setAttributeNS(Ca,t,n);else{const a=tl(t);n==null||a&&!xo(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function tc(e,t,n,r,i,a,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,i,a),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const f=s==="OPTION"?e.getAttribute("value"):e.value,u=n??"";f!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=xo(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Pt(e,t,n,r){e.addEventListener(t,n,r)}function nc(e,t,n,r){e.removeEventListener(t,n,r)}function rc(e,t,n,r,i=null){const a=e._vei||(e._vei={}),o=a[t];if(r&&o)o.value=r;else{const[s,l]=ic(t);if(r){const f=a[t]=sc(r,i);Pt(e,s,f,l)}else o&&(nc(e,s,o,l),a[t]=void 0)}}const Pa=/(?:Once|Passive|Capture)$/;function ic(e){let t;if(Pa.test(e)){t={};let r;for(;r=e.match(Pa);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):$t(e.slice(2)),t]}let Cr=0;const ac=Promise.resolve(),oc=()=>Cr||(ac.then(()=>Cr=0),Cr=Date.now());function sc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Fe(lc(r,n.value),t,5,[r])};return n.value=e,n.attached=oc(),n}function lc(e,t){if(j(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const Ia=/^on[a-z]/,fc=(e,t,n,r,i=!1,a,o,s,l)=>{t==="class"?Gf(e,r,i):t==="style"?Zf(e,n,r):ir(t)?hi(t)||rc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):cc(e,t,r,i))?tc(e,t,r,a,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ec(e,t,r,i))};function cc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ia.test(t)&&$(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ia.test(t)&&le(n)?!1:t in e}const Sa=e=>{const t=e.props["onUpdate:modelValue"]||!1;return j(t)?n=>Dn(t,n):t};function uc(e){e.target.composing=!0}function Ta(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Cn={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e._assign=Sa(i);const a=r||i.props&&i.props.type==="number";Pt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),a&&(s=jr(s)),e._assign(s)}),n&&Pt(e,"change",()=>{e.value=e.value.trim()}),t||(Pt(e,"compositionstart",uc),Pt(e,"compositionend",Ta),Pt(e,"change",Ta))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},a){if(e._assign=Sa(a),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(i||e.type==="number")&&jr(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},dc=ue({patchProp:fc},Jf);let Na;function mc(){return Na||(Na=Pf(dc))}const pc=(...e)=>{const t=mc().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=hc(r);if(!i)return;const a=t._component;!$(a)&&!a.render&&!a.template&&(a.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function hc(e){return le(e)?document.querySelector(e):e}const gc=(e,t)=>t.some(n=>e instanceof n);let Ma,La;function vc(){return Ma||(Ma=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bc(){return La||(La=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cs=new WeakMap,Qr=new WeakMap,us=new WeakMap,Pr=new WeakMap,Fi=new WeakMap;function yc(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",a),e.removeEventListener("error",o)},a=()=>{n(it(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",a),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&cs.set(n,e)}).catch(()=>{}),Fi.set(t,e),t}function xc(e){if(Qr.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",o),e.removeEventListener("abort",o)},a=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",a),e.addEventListener("error",o),e.addEventListener("abort",o)});Qr.set(e,t)}let ei={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Qr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||us.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return it(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function wc(e){ei=e(ei)}function _c(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ir(this),t,...n);return us.set(r,t.sort?t.sort():[t]),it(r)}:bc().includes(e)?function(...t){return e.apply(Ir(this),t),it(cs.get(this))}:function(...t){return it(e.apply(Ir(this),t))}}function kc(e){return typeof e=="function"?_c(e):(e instanceof IDBTransaction&&xc(e),gc(e,vc())?new Proxy(e,ei):e)}function it(e){if(e instanceof IDBRequest)return yc(e);if(Pr.has(e))return Pr.get(e);const t=kc(e);return t!==e&&(Pr.set(e,t),Fi.set(t,e)),t}const Ir=e=>Fi.get(e);function Ac(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const o=indexedDB.open(e,t),s=it(o);return r&&o.addEventListener("upgradeneeded",l=>{r(it(o.result),l.oldVersion,l.newVersion,it(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),s.then(l=>{a&&l.addEventListener("close",()=>a()),i&&l.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),s}const Oc=["get","getKey","getAll","getAllKeys","count"],Ec=["put","add","delete","clear"],Sr=new Map;function Fa(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Sr.get(t))return Sr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Ec.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Oc.includes(n)))return;const a=async function(o,...s){const l=this.transaction(o,i?"readwrite":"readonly");let f=l.store;return r&&(f=f.index(s.shift())),(await Promise.all([f[n](...s),i&&l.done]))[0]};return Sr.set(t,a),a}wc(e=>({...e,get:(t,n,r)=>Fa(t,n)||e.get(t,n,r),has:(t,n)=>!!Fa(t,n)||e.has(t,n)}));function hr(){return new Promise((e,t)=>{const n=Ac("noteDB",1,{upgrade(r){r.createObjectStore("note",{keyPath:"id",autoIncrement:!0}).createIndex("strengthIndex","strength")}});e(n)})}async function Cc(e,t){const n=await hr();n.add("note",{title:e,description:t}),await n.transaction("note").store.openCursor()}async function za(){return await(await hr()).getAll("note")}async function Pc(e){(await hr()).delete("note",e)}async function Ic(e,t,n){await(await hr()).put("note",{id:e,title:t,description:n})}function Tr(e,t){return typeof e>"u"?t:e}function Ra(e){const t=Array(e);for(let n=0;n<e;n++)t[n]=_e();return t}function Sc(e){return Object.keys(e)}function _e(){return Object.create(null)}function Tc(e){return[].concat.apply([],e)}function Nc(e,t){return t.length-e.length}function Mc(e){return e.constructor===Array}function Zn(e){return typeof e=="string"}function ti(e){return typeof e=="object"}function Lc(e){return typeof e=="function"}function Fc(e,t,n,r){if(e&&(t&&(e=Nr(e,t)),this.matcher&&(e=Nr(e,this.matcher)),this.stemmer&&1<e.length&&(e=Nr(e,this.stemmer)),r&&1<e.length&&(e=jc(e)),n||n==="")){const i=e.split(n);return this.filter?Dc(i,this.filter):i}return e}const zc=/[\p{Z}\p{S}\p{P}\p{C}]+/u;function Rc(e){const t=_e();for(let n=0,r=e.length;n<r;n++)t[e[n]]=1;return t}function ja(e,t){const n=Sc(e),r=n.length,i=[];let a="",o=0;for(let s,l,f=0;f<r;f++)s=n[f],l=e[s],l?(i[o++]=Da(t?"(?!\\b)"+s+"(\\b|_)":s),i[o++]=l):a+=(a?"|":"")+s;return a&&(i[o++]=Da(t?"(?!\\b)("+a+")(\\b|_)":"("+a+")"),i[o]=""),i}function Nr(e,t){for(let n=0,r=t.length;n<r&&(e=e.replace(t[n],t[n+1]),!!e);n+=2);return e}function Da(e){return new RegExp(e,"g")}function jc(e){let t="",n="";for(let r,i=0,a=e.length;i<a;i++)(r=e[i])!==n&&(t+=n=r);return t}function Dc(e,t){const n=e.length,r=[];for(let i=0,a=0;i<n;i++){const o=e[i];o&&!t[o]&&(r[a++]=o)}return r}function $c(e){return Fc.call(this,(""+e).toLowerCase(),!1,zc,!1)}const Bc={},Uc={};function Hc(e){qt(e,"add"),qt(e,"append"),qt(e,"search"),qt(e,"update"),qt(e,"remove")}function qt(e,t){e[t+"Async"]=function(){const n=this,r=arguments,i=r[r.length-1];let a;Lc(i)&&(a=i,delete r[r.length-1]);const o=new Promise(function(s){setTimeout(function(){n.async=!0;const l=n[t].apply(n,r);n.async=!1,s(l)})});return a?(o.then(a),this):o}}function Wc(e,t,n,r){const i=e.length;let a,o,s=[],l=0;r&&(r=[]);for(let f=i-1;0<=f;f--){const u=e[f],m=u.length,p=_e();let g=!a;for(let A=0;A<m;A++){const E=u[A],R=E.length;if(R)for(let _,x,M=0;M<R;M++)if(x=E[M],a){if(a[x]){if(!f){if(n)n--;else if(s[l++]=x,l===t)return s}(f||r)&&(p[x]=1),g=!0}if(r&&(_=(o[x]||0)+1,o[x]=_,_<i)){const P=r[_-2]||(r[_-2]=[]);P[P.length]=x}}else p[x]=1}if(r)a||(o=p);else if(!g)return[];a=p}if(r)for(let f,u,m=r.length-1;0<=m;m--){f=r[m],u=f.length;for(let p,g=0;g<u;g++)if(p=f[g],!a[p]){if(n)n--;else if(s[l++]=p,l===t)return s;a[p]=1}}return s}function Wn(e){this.limit=e!==!0&&e,this.cache=_e(),this.queue=[]}function Yc(e,t,n){ti(e)&&(e=e.query);let r=this.cache.get(e);return r||(r=this.search(e,t,n),this.cache.set(e,r)),r}Wn.prototype.set=function(e,t){if(!this.cache[e]){let n=this.queue.length;n===this.limit?delete this.cache[this.queue[n-1]]:n++;for(let r=n-1;0<r;r--)this.queue[r]=this.queue[r-1];this.queue[0]=e}this.cache[e]=t},Wn.prototype.get=function(e){const t=this.cache[e];if(this.limit&&t){const n=this.queue.indexOf(e);if(n){const r=this.queue[n-1];this.queue[n-1]=this.queue[n],this.queue[n]=r}}return t},Wn.prototype.del=function(e){for(let t,n,r=0;r<this.queue.length;r++)n=this.queue[r],t=this.cache[n],t.includes(e)&&(this.queue.splice(r--,1),delete this.cache[n])};const Kc={memory:{charset:"latin:extra",resolution:3,minlength:4,fastupdate:!1},performance:{resolution:3,minlength:3,optimize:!1,context:{depth:2,resolution:1}},match:{charset:"latin:extra",tokenize:"reverse"},score:{charset:"latin:advanced",resolution:20,minlength:3,context:{depth:3,resolution:9}},default:{}};function qc(e){if(Zn(e))e=Kc[e];else{const t=e.preset;t&&(e=Object.assign({},t[t],e))}return e}function Vc(e,t,n,r,i,a,o){setTimeout(function(){const s=e(n?n+"."+r:r,JSON.stringify(o));s&&s.then?s.then(function(){t.export(e,t,n,i,a+1)}):t.export(e,t,n,i,a+1)})}function Xc(e,t,n,r,i){let a,o;switch(i||(i=0)){case 0:if(a="reg",this.fastupdate)for(let s in o=_e(),this.register)o[s]=1;else o=this.register;break;case 1:a="cfg",o={doc:0,opt:this.optimize?1:0};break;case 2:a="map",o=this.map;break;case 3:a="ctx",o=this.ctx;break;default:return}return Vc(e,t||this,n,a,r,i,o),!0}function Jc(e,t){t&&(Zn(t)&&(t=JSON.parse(t)),e==="cfg"?this.optimize=!!t.opt:e==="reg"?(this.fastupdate=!1,this.register=t):e==="map"?this.map=t:e==="ctx"&&(this.ctx=t))}function ye(e,t){if(!(this instanceof ye))return new ye(e);let n,r,i;e?(e=qc(e),n=e.charset,r=e.lang,Zn(n)&&(n.indexOf(":")===-1&&(n+=":default"),n=Uc[n]),Zn(r)&&(r=Bc[r])):e={};let a,o,s=e.context||{};this.encode=e.encode||n&&n.encode||$c,this.register=t||_e(),this.resolution=a=e.resolution||9,this.tokenize=i=n&&n.tokenize||e.tokenize||"strict",this.depth=i==="strict"&&s.depth,this.bidirectional=Tr(s.bidirectional,!0),this.optimize=o=Tr(e.optimize,!0),this.fastupdate=Tr(e.fastupdate,!0),this.minlength=e.minlength||1,this.boost=e.boost,this.map=o?Ra(a):_e(),this.resolution_ctx=a=s.resolution||1,this.ctx=o?Ra(a):_e(),this.rtl=n&&n.rtl||e.rtl,this.matcher=(i=e.matcher||r&&r.matcher)&&ja(i,!1),this.stemmer=(i=e.stemmer||r&&r.stemmer)&&ja(i,!0),this.filter=(i=e.filter||r&&r.filter)&&Rc(i),this.cache=(i=e.cache)&&new Wn(i)}ye.prototype.append=function(e,t){return this.add(e,t,!0)},ye.prototype.add=function(e,t,n,r){if(t&&(e||e===0)){if(!r&&!n&&this.register[e])return this.update(e,t);t=this.encode(""+t);const i=t.length;if(i){const a=_e(),o=_e(),s=this.depth,l=this.resolution;for(let f=0;f<i;f++){let u=t[this.rtl?i-1-f:f],m=u.length;if(u&&m>=this.minlength&&(s||!o[u])){let p=Pn(l,i,f),g="";switch(this.tokenize){case"full":if(2<m){for(let A=0;A<m;A++)for(let E=m;E>A;E--)if(E-A>=this.minlength){const R=Pn(l,i,f,m,A);g=u.substring(A,E),this.push_index(o,g,R,e,n)}break}case"reverse":if(1<m){for(let A=m-1;0<A;A--)if(g=u[A]+g,g.length>=this.minlength){const E=Pn(l,i,f,m,A);this.push_index(o,g,E,e,n)}g=""}case"forward":if(1<m){for(let A=0;A<m;A++)g+=u[A],g.length>=this.minlength&&this.push_index(o,g,p,e,n);break}default:if(this.boost&&(p=Math.min(0|p/this.boost(t,u,f),l-1)),this.push_index(o,u,p,e,n),s&&1<i&&f<i-1){const A=_e(),E=this.resolution_ctx,R=u,_=Math.min(s+1,i-f);A[R]=1;for(let x=1;x<_;x++)if(u=t[this.rtl?i-1-f-x:f+x],u&&u.length>=this.minlength&&!A[u]){A[u]=1;const M=Pn(E+(i/2>E?0:1),i,f,_-1,x-1),P=this.bidirectional&&u>R;this.push_index(a,P?R:u,M,e,n,P?u:R)}}}}}this.fastupdate||(this.register[e]=1)}}return this};function Pn(e,t,n,r,i){return n&&1<e?t+(r||0)<=e?n+(i||0):0|(e-1)/(t+(r||0))*(n+(i||0))+1:0}ye.prototype.push_index=function(e,t,n,r,i,a){let o=a?this.ctx:this.map;if((!e[t]||a&&!e[t][a])&&(this.optimize&&(o=o[n]),a?(e=e[t]||(e[t]=_e()),e[a]=1,o=o[a]||(o[a]=_e())):e[t]=1,o=o[t]||(o[t]=[]),this.optimize||(o=o[n]||(o[n]=[])),(!i||!o.includes(r))&&(o[o.length]=r,this.fastupdate))){const s=this.register[r]||(this.register[r]=[]);s[s.length]=o}},ye.prototype.search=function(e,t,n){n||(!t&&ti(e)?(n=e,e=n.query):ti(t)&&(n=t));let r,i,a,o=[],s=0;if(n&&(e=n.query||e,t=n.limit,s=n.offset||0,i=n.context,a=n.suggest),e&&(e=this.encode(""+e),r=e.length,1<r)){const m=_e(),p=[];for(let g,A=0,E=0;A<r;A++)if(g=e[A],g&&g.length>=this.minlength&&!m[g]){if(!this.optimize&&!a&&!this.map[g])return o;p[E++]=g,m[g]=1}e=p,r=e.length}if(!r)return o;t||(t=100);let l,f=this.depth&&1<r&&i!==!1,u=0;f?(l=e[0],u=1):1<r&&e.sort(Nc);for(let m,p;u<r;u++){if(p=e[u],f?(m=this.add_result(o,a,t,s,r===2,p,l),(!a||m!==!1||!o.length)&&(l=p)):m=this.add_result(o,a,t,s,r===1,p),m)return m;if(a&&u==r-1){let g=o.length;if(!g){if(f){f=0,u=-1;continue}return o}if(g===1)return $a(o[0],t,s)}}return Wc(o,t,s,a)},ye.prototype.add_result=function(e,t,n,r,i,a,o){let s=[],l=o?this.ctx:this.map;if(this.optimize||(l=Ba(l,a,o,this.bidirectional)),l){let f=0;const u=Math.min(l.length,o?this.resolution_ctx:this.resolution);for(let m,p,g=0,A=0;g<u&&(m=l[g],!(m&&(this.optimize&&(m=Ba(m,a,o,this.bidirectional)),r&&m&&i&&(p=m.length,p<=r?(r-=p,m=null):(m=m.slice(r),r=0)),m&&(s[f++]=m,i&&(A+=m.length,A>=n)))));g++);if(f)return i?$a(s,n,0):void(e[e.length]=s)}return!t&&s};function $a(e,t,n){return e=e.length===1?e[0]:Tc(e),n||e.length>t?e.slice(n,n+t):e}function Ba(e,t,n,r){if(n){const i=r&&t>n;e=e[i?t:n],e=e&&e[i?n:t]}else e=e[t];return e}ye.prototype.contain=function(e){return!!this.register[e]},ye.prototype.update=function(e,t){return this.remove(e).add(e,t)},ye.prototype.remove=function(e,t){const n=this.register[e];if(n){if(this.fastupdate)for(let r,i=0;i<n.length;i++)r=n[i],r.splice(r.indexOf(e),1);else Qn(this.map,e,this.resolution,this.optimize),this.depth&&Qn(this.ctx,e,this.resolution_ctx,this.optimize);t||delete this.register[e],this.cache&&this.cache.del(e)}return this};function Qn(e,t,n,r,i){let a=0;if(Mc(e))if(i){const o=e.indexOf(t);o===-1?a++:1<e.length&&(e.splice(o,1),a++)}else{i=Math.min(e.length,n);for(let o,s=0;s<i;s++)o=e[s],o&&(a=Qn(o,t,n,r,i),!r&&!a&&delete e[s])}else for(let o in e)a=Qn(e[o],t,n,r,i),a||delete e[o];return a}ye.prototype.searchCache=Yc,ye.prototype.export=Xc,ye.prototype.import=Jc,Hc(ye.prototype);const Gc={key:0,class:"sticky w-full top-0 bg-white p-2 drop-shadow shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] dark:bg-zinc-900 mb-2"},Zc={class:"flex justify-center bg-gray-100 p-2 rounded-md dark:bg-zinc-800"},Qc={key:0},eu=["value"],tu={key:1,class:"h-screen flex flex-col w-full dark:bg-zinc-900 p-[2rem] py-0"},nu={class:"grid xl:grid-cols-9 xl:gap-4 md:grid-cols-5 md:gap-3 ph:grid-cols-2 ph:gap-2 dark:bg-zinc-900"},ru=["onClick"],iu={class:"font-normal text-start dark:bg-zinc-900"},au={key:0},ou={key:0,class:"flex justify-center"},su={class:"w-[30rem] shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] hover:shadow-[0_7px_15px_1px_rgba(0,0,0,0.5)] p-1 rounded-md dark:bg-zinc-900 mb-2"},lu={key:0,class:"grid grid-cols-2"},fu={key:1},cu={class:"grid xl:grid-cols-7 xl:gap-4 md:grid-cols-5 md:gap-3 ph:grid-cols-2 ph:gap-2 dark:bg-zinc-900 pb-4"},uu=["onClick"],du={class:"font-normal text-left dark:bg-zinc-900"},mu={key:1,class:"fixed bottom-0 rigth-0 pb-4 place-self-end"},pu={key:2,class:"p-[2rem]"},hu={class:"grid grid-cols-2"},gu=["value"],vu=["value"],bu={key:3,class:"p-[2rem]"},yu={class:"grid grid-cols-2"},xu={key:4,class:"relative z-10","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},wu=U("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),_u={class:"fixed inset-0 z-10 overflow-y-auto"},ku={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},Au={class:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"},Ou={class:"bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"},Eu={class:"sm:flex sm:items-start"},Cu={class:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"},Pu={class:"grid grid-cols-2"},Iu=["value"],Su=["value"],Tu=U("div",{class:"mt-2"},null,-1),Nu={__name:"App",setup(e){const t=pe(""),n=pe(""),r=pe([]),i=pe(!1),a=pe([]),o=pe([]),s=pe(!1);pe(!1),pe(!1);const l=pe(window.innerWidth),f=pe(""),u=pe(""),m=pe([]),p=pe(!1),g=pe(),A=pe(!1),E=new ye({tokenize:"full"});async function R(){if(g.value!=u.value)if(g.value=u.value,u.value.length>0){p.value=!0,m.value=[];const I=E.search(u.value),H=I.length;for(let z=0;z<H;z++){const me=I[z],He=o.value.find(At=>At.id==me).title,Wt=o.value.find(At=>At.id==me).description;m.value.push([{id:me,title:He,description:Wt}])}}else m.value.length>0&&(p.value=!0)}const _=()=>{m.value="",u.value="",p.value=!1};function x(){l.value=window.innerWidth,l.value<500?f.value=!0:f.value=!1}const M=J=>{const I=o.value.length;for(let H=0;H<I;H++)if(o.value[H].id===J){r.value="";const me=o.value[H].title,He=o.value[H].description;r.value=[J,me,He],a.value=[J,me,He],i.value=!0}};async function P(){o.value=await za();const J=o.value.length;for(let I=0;I<J;I++){const H=o.value[I].title,z=o.value[I].description,me=o.value[I].id;E.add(me,H),E.append(me,z)}}async function W(J){const I=t.value,H=n.value;if(I!=""||H!=""){await Cc(I,H);const z=await za();o.value=z,t.value="",n.value="",s.value=!1,P()}A.value=!1}const ae=()=>{const J=r.value[0];Pc(J),E.remove(J),P(),g.value=null,R(),i.value=!1},oe=()=>{const J=r.value[0],I=r.value[1],H=r.value[2];Ic(J,I,H),P(),R(),i.value=!1};return Vo(()=>{P(),window.addEventListener("resize",x),x()}),(J,I)=>{const H=uf("font-awesome-icon");return se(),ce("section",null,[i.value?Oe("",!0):(se(),ce("nav",Gc,[U("div",Zc,[p.value?(se(),ce("span",Qc,[U("button",{onClick:_},[te(H,{icon:"fa-solid fa-arrow-left"})])])):Oe("",!0),U("input",ss(R(),{value:u.value,onInput:I[0]||(I[0]=z=>u.value=z.target.value),placeholder:"Pesquise suas notas",class:"bg-gray-100 break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-800"}),null,16,eu)])])),!A.value&&!i.value?(se(),ce("div",tu,[U("div",nu,[(se(!0),ce(Se,null,ua(m.value,z=>(se(),ce("div",{class:"container shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] p-2 rounded-md mt-2 content-start break-words font-semibold hover:shadow-[0_7px_15px_1px_rgba(0,0,0,0.5)] dark:bg-zinc-900",key:z,onClick:me=>(M(z[0].id),s.value=!1)},[Gr(yn(z[0].title)+" ",1),U("p",iu,yn(z[0].description),1)],8,ru))),128))]),p.value?Oe("",!0):(se(),ce("div",au,[f.value?Oe("",!0):(se(),ce("div",ou,[U("div",su,[s.value?(se(),ce("div",lu,[U("button",{class:"place-self-start",onClick:I[1]||(I[1]=z=>(W(Xt(E)),s.value=!1,i.value=!1))},[te(H,{icon:"fa-solid fa-arrow-left"})]),t.value||n.value?(se(),ce("button",{key:0,onClick:I[2]||(I[2]=z=>(s.value=!1,t.value=null,n.value=null)),class:"place-self-end"},[te(H,{icon:"fa-solid fa-trash",style:{color:"#707070"}})])):Oe("",!0)])):Oe("",!0),En(U("input",{onClick:I[3]||(I[3]=z=>s.value=!0),id:"title",type:"text","onUpdate:modelValue":I[4]||(I[4]=z=>t.value=z),placeholder:"Título",class:"text-2xl font-bold break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900"},null,512),[[Cn,t.value]]),s.value?(se(),ce("div",fu,[En(U("textarea",{"onUpdate:modelValue":I[5]||(I[5]=z=>n.value=z),rows:"5",autoResize:"",class:"m-1 overflow-auto focus:outline-none w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-zinc-900",placeholder:"Criar uma nota",required:"",style:{}},null,512),[[Cn,n.value]])])):Oe("",!0)])])),U("div",cu,[(se(!0),ce(Se,null,ua(o.value,z=>(se(),ce("div",{class:"container shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] p-2 rounded-md mt-2 content-start break-words font-semibold hover:shadow-[0_7px_15px_1px_rgba(0,0,0,0.5)] dark:bg-zinc-900 dark:shadow-none dark:border-2 dark:border-gray-700",key:z,onClick:me=>(M(z.id),s.value=!1)},[Gr(yn(z.title)+" ",1),U("p",du,yn(z.description),1)],8,uu))),128))])])),f.value&&!p.value?(se(),ce("footer",mu,[U("button",{onClick:I[6]||(I[6]=z=>(A.value=!0,i.value=!0))},[te(H,{icon:"fa-solid fa-circle-plus",size:"2xl"})])])):Oe("",!0)])):Oe("",!0),i.value&&!A.value&&f.value?(se(),ce("div",pu,[U("div",hu,[U("button",{class:"place-self-start",onClick:I[7]||(I[7]=z=>(W(Xt(E)),oe(),i.value=!1))},[te(H,{icon:"fa-solid fa-arrow-left"})]),U("button",{onClick:I[8]||(I[8]=z=>(i.value=!1,ae())),class:"place-self-end"},[te(H,{icon:"fa-solid fa-trash",style:{color:"#707070"}})])]),U("input",{value:r.value[1],onInput:I[9]||(I[9]=z=>r.value[1]=z.target.value),placeholder:"Título",class:"text-2xl font-bold break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900"},null,40,gu),U("textarea",{value:r.value[2],onInput:I[10]||(I[10]=z=>r.value[2]=z.target.value),rows:"35",class:"overflow-auto focus:outline-none w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-zinc-900 m-1",placeholder:"Nota",required:"",style:{}},null,40,vu)])):Oe("",!0),A.value?(se(),ce("div",bu,[U("div",yu,[U("button",{onClick:I[11]||(I[11]=z=>(W(Xt(E)),i.value=!1)),class:"place-self-start"},[te(H,{icon:"fa-solid fa-arrow-left"})]),t.value||n.value?(se(),ce("button",{key:0,onClick:I[12]||(I[12]=z=>(A.value=!1,i.value=!1,t.value=null,n.value=null)),class:"place-self-end"},[te(H,{icon:"fa-solid fa-trash",style:{color:"#707070"}})])):Oe("",!0)]),En(U("input",{type:"text","onUpdate:modelValue":I[13]||(I[13]=z=>t.value=z),placeholder:"Título",class:"text-2xl font-bold break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900"},null,512),[[Cn,t.value]]),En(U("textarea",{"onUpdate:modelValue":I[14]||(I[14]=z=>n.value=z),rows:"35",class:"overflow-auto focus:outline-none w-full px-0 text-sm text-gray-900 m-2 bg-white border-0 dark:bg-zinc-900",placeholder:"Nota",required:"",style:{}},null,512),[[Cn,n.value]])])):Oe("",!0),i.value&&!A.value&&!f.value?(se(),ce("div",xu,[wu,U("div",_u,[U("div",ku,[U("div",Au,[U("div",Ou,[U("div",Eu,[U("div",Cu,[U("div",Pu,[U("button",{class:"place-self-start",onClick:I[15]||(I[15]=z=>(W(Xt(E)),oe(),i.value=!1))},[te(H,{icon:"fa-solid fa-arrow-left"})]),U("button",{onClick:I[16]||(I[16]=z=>(i.value=!1,ae())),class:"place-self-end"},[te(H,{icon:"fa-solid fa-trash",style:{color:"#707070"}})])]),U("input",{value:r.value[1],onInput:I[17]||(I[17]=z=>r.value[1]=z.target.value),placeholder:"Título",class:"text-2xl font-bold break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900"},null,40,Iu),U("textarea",{value:r.value[2],onInput:I[18]||(I[18]=z=>r.value[2]=z.target.value),rows:"35",class:"overflow-auto focus:outline-none w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-zinc-900 m-1",placeholder:"Nota",required:"",style:{}},null,40,Su),Tu])])])])])])])):Oe("",!0)])}}};function Ua(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ua(Object(n),!0).forEach(function(r){fe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ua(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function er(e){"@babel/helpers - typeof";return er=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},er(e)}function Mu(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ha(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Lu(e,t,n){return t&&Ha(e.prototype,t),n&&Ha(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zi(e,t){return zu(e)||ju(e,t)||ds(e,t)||$u()}function pn(e){return Fu(e)||Ru(e)||ds(e)||Du()}function Fu(e){if(Array.isArray(e))return ni(e)}function zu(e){if(Array.isArray(e))return e}function Ru(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ju(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function ds(e,t){if(e){if(typeof e=="string")return ni(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ni(e,t)}}function ni(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Du(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $u(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Wa=function(){},Ri={},ms={},ps=null,hs={mark:Wa,measure:Wa};try{typeof window<"u"&&(Ri=window),typeof document<"u"&&(ms=document),typeof MutationObserver<"u"&&(ps=MutationObserver),typeof performance<"u"&&(hs=performance)}catch{}var Bu=Ri.navigator||{},Ya=Bu.userAgent,Ka=Ya===void 0?"":Ya,ot=Ri,Q=ms,qa=ps,In=hs;ot.document;var Ze=!!Q.documentElement&&!!Q.head&&typeof Q.addEventListener=="function"&&typeof Q.createElement=="function",gs=~Ka.indexOf("MSIE")||~Ka.indexOf("Trident/"),Sn,Tn,Nn,Mn,Ln,Ve="___FONT_AWESOME___",ri=16,vs="fa",bs="svg-inline--fa",_t="data-fa-i2svg",ii="data-fa-pseudo-element",Uu="data-fa-pseudo-element-pending",ji="data-prefix",Di="data-icon",Va="fontawesome-i2svg",Hu="async",Wu=["HTML","HEAD","STYLE","SCRIPT"],ys=function(){try{return!0}catch{return!1}}(),Z="classic",re="sharp",$i=[Z,re];function hn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Z]}})}var fn=hn((Sn={},fe(Sn,Z,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),fe(Sn,re,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Sn)),cn=hn((Tn={},fe(Tn,Z,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),fe(Tn,re,{solid:"fass",regular:"fasr",light:"fasl"}),Tn)),un=hn((Nn={},fe(Nn,Z,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),fe(Nn,re,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Nn)),Yu=hn((Mn={},fe(Mn,Z,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),fe(Mn,re,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Mn)),Ku=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,xs="fa-layers-text",qu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Vu=hn((Ln={},fe(Ln,Z,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),fe(Ln,re,{900:"fass",400:"fasr",300:"fasl"}),Ln)),ws=[1,2,3,4,5,6,7,8,9,10],Xu=ws.concat([11,12,13,14,15,16,17,18,19,20]),Ju=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],vt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},dn=new Set;Object.keys(cn[Z]).map(dn.add.bind(dn));Object.keys(cn[re]).map(dn.add.bind(dn));var Gu=[].concat($i,pn(dn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",vt.GROUP,vt.SWAP_OPACITY,vt.PRIMARY,vt.SECONDARY]).concat(ws.map(function(e){return"".concat(e,"x")})).concat(Xu.map(function(e){return"w-".concat(e)})),en=ot.FontAwesomeConfig||{};function Zu(e){var t=Q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Qu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Q&&typeof Q.querySelector=="function"){var ed=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ed.forEach(function(e){var t=zi(e,2),n=t[0],r=t[1],i=Qu(Zu(n));i!=null&&(en[r]=i)})}var _s={styleDefault:"solid",familyDefault:"classic",cssPrefix:vs,replacementClass:bs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};en.familyPrefix&&(en.cssPrefix=en.familyPrefix);var Dt=S(S({},_s),en);Dt.autoReplaceSvg||(Dt.observeMutations=!1);var N={};Object.keys(_s).forEach(function(e){Object.defineProperty(N,e,{enumerable:!0,set:function(n){Dt[e]=n,tn.forEach(function(r){return r(N)})},get:function(){return Dt[e]}})});Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(t){Dt.cssPrefix=t,tn.forEach(function(n){return n(N)})},get:function(){return Dt.cssPrefix}});ot.FontAwesomeConfig=N;var tn=[];function td(e){return tn.push(e),function(){tn.splice(tn.indexOf(e),1)}}var et=ri,Be={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function nd(e){if(!(!e||!Ze)){var t=Q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Q.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return Q.head.insertBefore(t,r),e}}var rd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function mn(){for(var e=12,t="";e-- >0;)t+=rd[Math.random()*62|0];return t}function Ht(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Bi(e){return e.classList?Ht(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ks(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function id(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ks(e[n]),'" ')},"").trim()}function gr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ui(e){return e.size!==Be.size||e.x!==Be.x||e.y!==Be.y||e.rotate!==Be.rotate||e.flipX||e.flipY}function ad(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:f}}function od(e){var t=e.transform,n=e.width,r=n===void 0?ri:n,i=e.height,a=i===void 0?ri:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&gs?l+="translate(".concat(t.x/et-r/2,"em, ").concat(t.y/et-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/et,"em), calc(-50% + ").concat(t.y/et,"em)) "):l+="translate(".concat(t.x/et,"em, ").concat(t.y/et,"em) "),l+="scale(".concat(t.size/et*(t.flipX?-1:1),", ").concat(t.size/et*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var sd=`:root, :host {
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
}`;function As(){var e=vs,t=bs,n=N.cssPrefix,r=N.replacementClass,i=sd;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var Xa=!1;function Mr(){N.autoAddCss&&!Xa&&(nd(As()),Xa=!0)}var ld={mixout:function(){return{dom:{css:As,insertCss:Mr}}},hooks:function(){return{beforeDOMElementCreation:function(){Mr()},beforeI2svg:function(){Mr()}}}},Xe=ot||{};Xe[Ve]||(Xe[Ve]={});Xe[Ve].styles||(Xe[Ve].styles={});Xe[Ve].hooks||(Xe[Ve].hooks={});Xe[Ve].shims||(Xe[Ve].shims=[]);var Me=Xe[Ve],Os=[],fd=function e(){Q.removeEventListener("DOMContentLoaded",e),tr=1,Os.map(function(t){return t()})},tr=!1;Ze&&(tr=(Q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Q.readyState),tr||Q.addEventListener("DOMContentLoaded",fd));function cd(e){Ze&&(tr?setTimeout(e,0):Os.push(e))}function gn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?ks(e):"<".concat(t," ").concat(id(r),">").concat(a.map(gn).join(""),"</").concat(t,">")}function Ja(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ud=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},Lr=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=i!==void 0?ud(n,i):n,l,f,u;for(r===void 0?(l=1,u=t[a[0]]):(l=0,u=r);l<o;l++)f=a[l],u=s(u,t[f],f,t);return u};function dd(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function ai(e){var t=dd(e);return t.length===1?t[0].toString(16):null}function md(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Ga(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function oi(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Ga(t);typeof Me.hooks.addPack=="function"&&!i?Me.hooks.addPack(e,Ga(t)):Me.styles[e]=S(S({},Me.styles[e]||{}),a),e==="fas"&&oi("fa",t)}var Fn,zn,Rn,It=Me.styles,pd=Me.shims,hd=(Fn={},fe(Fn,Z,Object.values(un[Z])),fe(Fn,re,Object.values(un[re])),Fn),Hi=null,Es={},Cs={},Ps={},Is={},Ss={},gd=(zn={},fe(zn,Z,Object.keys(fn[Z])),fe(zn,re,Object.keys(fn[re])),zn);function vd(e){return~Gu.indexOf(e)}function bd(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!vd(i)?i:null}var Ts=function(){var t=function(a){return Lr(It,function(o,s,l){return o[l]=Lr(s,a,{}),o},{})};Es=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),Cs=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),Ss=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in It||N.autoFetchSvg,r=Lr(pd,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});Ps=r.names,Is=r.unicodes,Hi=vr(N.styleDefault,{family:N.familyDefault})};td(function(e){Hi=vr(e.styleDefault,{family:N.familyDefault})});Ts();function Wi(e,t){return(Es[e]||{})[t]}function yd(e,t){return(Cs[e]||{})[t]}function bt(e,t){return(Ss[e]||{})[t]}function Ns(e){return Ps[e]||{prefix:null,iconName:null}}function xd(e){var t=Is[e],n=Wi("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function st(){return Hi}var Yi=function(){return{prefix:null,iconName:null,rest:[]}};function vr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Z:n,i=fn[r][e],a=cn[r][e]||cn[r][i],o=e in Me.styles?e:null;return a||o||null}var Za=(Rn={},fe(Rn,Z,Object.keys(un[Z])),fe(Rn,re,Object.keys(un[re])),Rn);function br(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},fe(t,Z,"".concat(N.cssPrefix,"-").concat(Z)),fe(t,re,"".concat(N.cssPrefix,"-").concat(re)),t),o=null,s=Z;(e.includes(a[Z])||e.some(function(f){return Za[Z].includes(f)}))&&(s=Z),(e.includes(a[re])||e.some(function(f){return Za[re].includes(f)}))&&(s=re);var l=e.reduce(function(f,u){var m=bd(N.cssPrefix,u);if(It[u]?(u=hd[s].includes(u)?Yu[s][u]:u,o=u,f.prefix=u):gd[s].indexOf(u)>-1?(o=u,f.prefix=vr(u,{family:s})):m?f.iconName=m:u!==N.replacementClass&&u!==a[Z]&&u!==a[re]&&f.rest.push(u),!i&&f.prefix&&f.iconName){var p=o==="fa"?Ns(f.iconName):{},g=bt(f.prefix,f.iconName);p.prefix&&(o=null),f.iconName=p.iconName||g||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!It.far&&It.fas&&!N.autoFetchSvg&&(f.prefix="fas")}return f},Yi());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===re&&(It.fass||N.autoFetchSvg)&&(l.prefix="fass",l.iconName=bt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=st()||"fas"),l}var wd=function(){function e(){Mu(this,e),this.definitions={}}return Lu(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=S(S({},n.definitions[s]||{}),o[s]),oi(s,o[s]);var l=un[Z][s];l&&oi(l,o[s]),Ts()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,f=o.icon,u=f[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),Qa=[],St={},Ft={},_d=Object.keys(Ft);function kd(e,t){var n=t.mixoutsTo;return Qa=e,St={},Object.keys(Ft).forEach(function(r){_d.indexOf(r)===-1&&delete Ft[r]}),Qa.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),er(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){St[o]||(St[o]=[]),St[o].push(a[o])})}r.provides&&r.provides(Ft)}),n}function si(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=St[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function kt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=St[e]||[];i.forEach(function(a){a.apply(null,n)})}function Je(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ft[e]?Ft[e].apply(null,t):void 0}function li(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||st();if(t)return t=bt(n,t)||t,Ja(Ms.definitions,n,t)||Ja(Me.styles,n,t)}var Ms=new wd,Ad=function(){N.autoReplaceSvg=!1,N.observeMutations=!1,kt("noAuto")},Od={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ze?(kt("beforeI2svg",t),Je("pseudoElements2svg",t),Je("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,cd(function(){Cd({autoReplaceSvgRoot:n}),kt("watch",t)})}},Ed={icon:function(t){if(t===null)return null;if(er(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:bt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=vr(t[0]);return{prefix:r,iconName:bt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(N.cssPrefix,"-"))>-1||t.match(Ku))){var i=br(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||st(),iconName:bt(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=st();return{prefix:a,iconName:bt(a,t)||t}}}},Ee={noAuto:Ad,config:N,dom:Od,parse:Ed,library:Ms,findIconDefinition:li,toHtml:gn},Cd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Q:n;(Object.keys(Me.styles).length>0||N.autoFetchSvg)&&Ze&&N.autoReplaceSvg&&Ee.dom.i2svg({node:r})};function yr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return gn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ze){var r=Q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Pd(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Ui(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};i.style=gr(S(S({},a),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Id(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(N.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:S(S({},i),{},{id:o}),children:r}]}]}function Ki(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,u=e.titleId,m=e.extra,p=e.watchable,g=p===void 0?!1:p,A=r.found?r:n,E=A.width,R=A.height,_=i==="fak",x=[N.replacementClass,a?"".concat(N.cssPrefix,"-").concat(a):""].filter(function(I){return m.classes.indexOf(I)===-1}).filter(function(I){return I!==""||!!I}).concat(m.classes).join(" "),M={children:[],attributes:S(S({},m.attributes),{},{"data-prefix":i,"data-icon":a,class:x,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(R)})},P=_&&!~m.classes.indexOf("fa-fw")?{width:"".concat(E/R*16*.0625,"em")}:{};g&&(M.attributes[_t]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(u||mn())},children:[l]}),delete M.attributes.title);var W=S(S({},M),{},{prefix:i,iconName:a,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:S(S({},P),m.styles)}),ae=r.found&&n.found?Je("generateAbstractMask",W)||{children:[],attributes:{}}:Je("generateAbstractIcon",W)||{children:[],attributes:{}},oe=ae.children,J=ae.attributes;return W.children=oe,W.attributes=J,s?Id(W):Pd(W)}function eo(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=S(S(S({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(f[_t]="");var u=S({},o.styles);Ui(i)&&(u.transform=od({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=gr(u);m.length>0&&(f.style=m);var p=[];return p.push({tag:"span",attributes:f,children:[t]}),a&&p.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),p}function Sd(e){var t=e.content,n=e.title,r=e.extra,i=S(S(S({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=gr(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Fr=Me.styles;function fi(e){var t=e[0],n=e[1],r=e.slice(4),i=zi(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(N.cssPrefix,"-").concat(vt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(vt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(vt.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var Td={found:!1,width:512,height:512};function Nd(e,t){!ys&&!N.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ci(e,t){var n=t;return t==="fa"&&N.styleDefault!==null&&(t=st()),new Promise(function(r,i){if(Je("missingIconAbstract"),n==="fa"){var a=Ns(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Fr[t]&&Fr[t][e]){var o=Fr[t][e];return r(fi(o))}Nd(e,t),r(S(S({},Td),{},{icon:N.showMissingIcons&&e?Je("missingIconAbstract")||{}:{}}))})}var to=function(){},ui=N.measurePerformance&&In&&In.mark&&In.measure?In:{mark:to,measure:to},Gt='FA "6.4.0"',Md=function(t){return ui.mark("".concat(Gt," ").concat(t," begins")),function(){return Ls(t)}},Ls=function(t){ui.mark("".concat(Gt," ").concat(t," ends")),ui.measure("".concat(Gt," ").concat(t),"".concat(Gt," ").concat(t," begins"),"".concat(Gt," ").concat(t," ends"))},qi={begin:Md,end:Ls},Yn=function(){};function no(e){var t=e.getAttribute?e.getAttribute(_t):null;return typeof t=="string"}function Ld(e){var t=e.getAttribute?e.getAttribute(ji):null,n=e.getAttribute?e.getAttribute(Di):null;return t&&n}function Fd(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function zd(){if(N.autoReplaceSvg===!0)return Kn.replace;var e=Kn[N.autoReplaceSvg];return e||Kn.replace}function Rd(e){return Q.createElementNS("http://www.w3.org/2000/svg",e)}function jd(e){return Q.createElement(e)}function Fs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Rd:jd:n;if(typeof e=="string")return Q.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(Fs(o,{ceFn:r}))}),i}function Dd(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Kn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Fs(i),n)}),n.getAttribute(_t)===null&&N.keepOriginalSource){var r=Q.createComment(Dd(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Bi(n).indexOf(N.replacementClass))return Kn.replace(t);var i=new RegExp("".concat(N.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===N.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return gn(s)}).join(`
`);n.setAttribute(_t,""),n.innerHTML=o}};function ro(e){e()}function zs(e,t){var n=typeof t=="function"?t:Yn;if(e.length===0)n();else{var r=ro;N.mutateApproach===Hu&&(r=ot.requestAnimationFrame||ro),r(function(){var i=zd(),a=qi.begin("mutate");e.map(i),a(),n()})}}var Vi=!1;function Rs(){Vi=!0}function di(){Vi=!1}var nr=null;function io(e){if(qa&&N.observeMutations){var t=e.treeCallback,n=t===void 0?Yn:t,r=e.nodeCallback,i=r===void 0?Yn:r,a=e.pseudoElementsCallback,o=a===void 0?Yn:a,s=e.observeMutationsRoot,l=s===void 0?Q:s;nr=new qa(function(f){if(!Vi){var u=st();Ht(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!no(m.addedNodes[0])&&(N.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&N.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&no(m.target)&&~Ju.indexOf(m.attributeName))if(m.attributeName==="class"&&Ld(m.target)){var p=br(Bi(m.target)),g=p.prefix,A=p.iconName;m.target.setAttribute(ji,g||u),A&&m.target.setAttribute(Di,A)}else Fd(m.target)&&i(m.target)})}}),Ze&&nr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function $d(){nr&&nr.disconnect()}function Bd(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Ud(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=br(Bi(e));return i.prefix||(i.prefix=st()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=yd(i.prefix,e.innerText)||Wi(i.prefix,ai(e.innerText))),!i.iconName&&N.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Hd(e){var t=Ht(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return N.autoA11y&&(n?t["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||mn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Wd(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Be,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ao(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ud(e),r=n.iconName,i=n.prefix,a=n.rest,o=Hd(e),s=si("parseNodeAttributes",{},e),l=t.styleParser?Bd(e):[];return S({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Be,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var Yd=Me.styles;function js(e){var t=N.autoReplaceSvg==="nest"?ao(e,{styleParser:!1}):ao(e);return~t.extra.classes.indexOf(xs)?Je("generateLayersText",e,t):Je("generateSvgReplacementMutation",e,t)}var lt=new Set;$i.map(function(e){lt.add("fa-".concat(e))});Object.keys(fn[Z]).map(lt.add.bind(lt));Object.keys(fn[re]).map(lt.add.bind(lt));lt=pn(lt);function oo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ze)return Promise.resolve();var n=Q.documentElement.classList,r=function(m){return n.add("".concat(Va,"-").concat(m))},i=function(m){return n.remove("".concat(Va,"-").concat(m))},a=N.autoFetchSvg?lt:$i.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Yd));a.includes("fa")||a.push("fa");var o=[".".concat(xs,":not([").concat(_t,"])")].concat(a.map(function(u){return".".concat(u,":not([").concat(_t,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ht(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=qi.begin("onTree"),f=s.reduce(function(u,m){try{var p=js(m);p&&u.push(p)}catch(g){ys||g.name==="MissingIcon"&&console.error(g)}return u},[]);return new Promise(function(u,m){Promise.all(f).then(function(p){zs(p,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(p){l(),m(p)})})}function Kd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;js(e).then(function(n){n&&zs([n],t)})}function qd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:li(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:li(i||{})),e(r,S(S({},n),{},{mask:i}))}}var Vd=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Be:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,f=n.maskId,u=f===void 0?null:f,m=n.title,p=m===void 0?null:m,g=n.titleId,A=g===void 0?null:g,E=n.classes,R=E===void 0?[]:E,_=n.attributes,x=_===void 0?{}:_,M=n.styles,P=M===void 0?{}:M;if(t){var W=t.prefix,ae=t.iconName,oe=t.icon;return yr(S({type:"icon"},t),function(){return kt("beforeDOMElementCreation",{iconDefinition:t,params:n}),N.autoA11y&&(p?x["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(A||mn()):(x["aria-hidden"]="true",x.focusable="false")),Ki({icons:{main:fi(oe),mask:l?fi(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:ae,transform:S(S({},Be),i),symbol:o,title:p,maskId:u,titleId:A,extra:{attributes:x,styles:P,classes:R}})})}},Xd={mixout:function(){return{icon:qd(Vd)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=oo,n.nodeCallback=Kd,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?Q:r,a=n.callback,o=a===void 0?function(){}:a;return oo(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,u=r.mask,m=r.maskId,p=r.extra;return new Promise(function(g,A){Promise.all([ci(i,s),u.iconName?ci(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var R=zi(E,2),_=R[0],x=R[1];g([n,Ki({icons:{main:_,mask:x},prefix:s,iconName:i,transform:l,symbol:f,maskId:m,title:a,titleId:o,extra:p,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=gr(s);l.length>0&&(i.style=l);var f;return Ui(o)&&(f=Je("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(f||a.icon),{children:r,attributes:i}}}},Jd={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return yr({type:"layer"},function(){kt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(N.cssPrefix,"-layers")].concat(pn(a)).join(" ")},children:o}]})}}}},Gd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return yr({type:"counter",content:n},function(){return kt("beforeDOMElementCreation",{content:n,params:r}),Sd({content:n.toString(),title:a,extra:{attributes:f,styles:m,classes:["".concat(N.cssPrefix,"-layers-counter")].concat(pn(s))}})})}}}},Zd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Be:i,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,p=r.styles,g=p===void 0?{}:p;return yr({type:"text",content:n},function(){return kt("beforeDOMElementCreation",{content:n,params:r}),eo({content:n,transform:S(S({},Be),a),title:s,extra:{attributes:m,styles:g,classes:["".concat(N.cssPrefix,"-layers-text")].concat(pn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(gs){var f=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/f,l=u.height/f}return N.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,eo({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},Qd=new RegExp('"',"ug"),so=[1105920,1112319];function em(e){var t=e.replace(Qd,""),n=md(t,0),r=n>=so[0]&&n<=so[1],i=t.length===2?t[0]===t[1]:!1;return{value:ai(i?t[0]:t),isSecondary:r||i}}function lo(e,t){var n="".concat(Uu).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Ht(e.children),o=a.filter(function(oe){return oe.getAttribute(ii)===t})[0],s=ot.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(qu),f=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?re:Z,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?cn[p][l[2].toLowerCase()]:Vu[p][f],A=em(m),E=A.value,R=A.isSecondary,_=l[0].startsWith("FontAwesome"),x=Wi(g,E),M=x;if(_){var P=xd(E);P.iconName&&P.prefix&&(x=P.iconName,g=P.prefix)}if(x&&!R&&(!o||o.getAttribute(ji)!==g||o.getAttribute(Di)!==M)){e.setAttribute(n,M),o&&e.removeChild(o);var W=Wd(),ae=W.extra;ae.attributes[ii]=t,ci(x,g).then(function(oe){var J=Ki(S(S({},W),{},{icons:{main:oe,mask:Yi()},prefix:g,iconName:M,extra:ae,watchable:!0})),I=Q.createElement("svg");t==="::before"?e.insertBefore(I,e.firstChild):e.appendChild(I),I.outerHTML=J.map(function(H){return gn(H)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function tm(e){return Promise.all([lo(e,"::before"),lo(e,"::after")])}function nm(e){return e.parentNode!==document.head&&!~Wu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ii)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function fo(e){if(Ze)return new Promise(function(t,n){var r=Ht(e.querySelectorAll("*")).filter(nm).map(tm),i=qi.begin("searchPseudoElements");Rs(),Promise.all(r).then(function(){i(),di(),t()}).catch(function(){i(),di(),n()})})}var rm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=fo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Q:r;N.searchPseudoElements&&fo(i)}}},co=!1,im={mixout:function(){return{dom:{unwatch:function(){Rs(),co=!0}}}},hooks:function(){return{bootstrap:function(){io(si("mutationObserverCallbacks",{}))},noAuto:function(){$d()},watch:function(n){var r=n.observeMutationsRoot;co?di():io(si("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},uo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},am={mixout:function(){return{parse:{transform:function(n){return uo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=uo(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),f="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(u)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:m,path:p};return{tag:"g",attributes:S({},g.outer),children:[{tag:"g",attributes:S({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:S(S({},r.icon.attributes),g.path)}]}]}}}},zr={x:0,y:0,width:"100%",height:"100%"};function mo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function om(e){return e.tag==="g"?e.children:[e]}var sm={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?br(i.split(" ").map(function(o){return o.trim()})):Yi();return a.prefix||(a.prefix=st()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,f=a.width,u=a.icon,m=o.width,p=o.icon,g=ad({transform:l,containerWidth:m,iconWidth:f}),A={tag:"rect",attributes:S(S({},zr),{},{fill:"white"})},E=u.children?{children:u.children.map(mo)}:{},R={tag:"g",attributes:S({},g.inner),children:[mo(S({tag:u.tag,attributes:S(S({},u.attributes),g.path)},E))]},_={tag:"g",attributes:S({},g.outer),children:[R]},x="mask-".concat(s||mn()),M="clip-".concat(s||mn()),P={tag:"mask",attributes:S(S({},zr),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,_]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:om(p)},P]};return r.push(W,{tag:"rect",attributes:S({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(x,")")},zr)}),{children:r,attributes:i}}}},lm={provides:function(t){var n=!1;ot.matchMedia&&(n=ot.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:S(S({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=S(S({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:S(S({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:S(S({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:S(S({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:S(S({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:S(S({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:S(S({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:S(S({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},fm={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},cm=[ld,Xd,Jd,Gd,Zd,rm,im,am,sm,lm,fm];kd(cm,{mixoutsTo:Ee});Ee.noAuto;Ee.config;var um=Ee.library;Ee.dom;var mi=Ee.parse;Ee.findIconDefinition;Ee.toHtml;var dm=Ee.icon;Ee.layer;Ee.text;Ee.counter;function po(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ke(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?po(Object(n),!0).forEach(function(r){xe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):po(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function rr(e){"@babel/helpers - typeof";return rr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},rr(e)}function xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mm(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function pm(e,t){if(e==null)return{};var n=mm(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var hm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ds={exports:{}};(function(e){(function(t){var n=function(_,x,M){if(!f(x)||m(x)||p(x)||g(x)||l(x))return x;var P,W=0,ae=0;if(u(x))for(P=[],ae=x.length;W<ae;W++)P.push(n(_,x[W],M));else{P={};for(var oe in x)Object.prototype.hasOwnProperty.call(x,oe)&&(P[_(oe,M)]=n(_,x[oe],M))}return P},r=function(_,x){x=x||{};var M=x.separator||"_",P=x.split||/(?=[A-Z])/;return _.split(P).join(M)},i=function(_){return A(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(x,M){return M?M.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},a=function(_){var x=i(_);return x.substr(0,1).toUpperCase()+x.substr(1)},o=function(_,x){return r(_,x).toLowerCase()},s=Object.prototype.toString,l=function(_){return typeof _=="function"},f=function(_){return _===Object(_)},u=function(_){return s.call(_)=="[object Array]"},m=function(_){return s.call(_)=="[object Date]"},p=function(_){return s.call(_)=="[object RegExp]"},g=function(_){return s.call(_)=="[object Boolean]"},A=function(_){return _=_-0,_===_},E=function(_,x){var M=x&&"process"in x?x.process:x;return typeof M!="function"?_:function(P,W){return M(P,_,W)}},R={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(_,x){return n(E(i,x),_)},decamelizeKeys:function(_,x){return n(E(o,x),_,x)},pascalizeKeys:function(_,x){return n(E(a,x),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=R:t.humps=R})(hm)})(Ds);var gm=Ds.exports,vm=["class","style"];function bm(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=gm.camelize(n.slice(0,r)),a=n.slice(r+1).trim();return t[i]=a,t},{})}function ym(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function $s(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return $s(l)}),i=Object.keys(e.attributes||{}).reduce(function(l,f){var u=e.attributes[f];switch(f){case"class":l.class=ym(u);break;case"style":l.style=bm(u);break;default:l.attrs[f]=u}return l},{attrs:{},class:{},style:{}});n.class;var a=n.style,o=a===void 0?{}:a,s=pm(n,vm);return Yf(e.tag,Ke(Ke(Ke({},t),{},{class:i.class,style:Ke(Ke({},i.style),o)},i.attrs),s),r)}var Bs=!1;try{Bs=!0}catch{}function xm(){if(!Bs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Rr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?xe({},e,t):{}}function wm(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},xe(t,"fa-".concat(e.size),e.size!==null),xe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),xe(t,"fa-pull-".concat(e.pull),e.pull!==null),xe(t,"fa-swap-opacity",e.swapOpacity),xe(t,"fa-bounce",e.bounce),xe(t,"fa-shake",e.shake),xe(t,"fa-beat",e.beat),xe(t,"fa-fade",e.fade),xe(t,"fa-beat-fade",e.beatFade),xe(t,"fa-flash",e.flash),xe(t,"fa-spin-pulse",e.spinPulse),xe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ho(e){if(e&&rr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(mi.icon)return mi.icon(e);if(e===null)return null;if(rr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var _m=Zl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=mt(function(){return ho(t.icon)}),a=mt(function(){return Rr("classes",wm(t))}),o=mt(function(){return Rr("transform",typeof t.transform=="string"?mi.transform(t.transform):t.transform)}),s=mt(function(){return Rr("mask",ho(t.mask))}),l=mt(function(){return dm(i.value,Ke(Ke(Ke(Ke({},a.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});$n(l,function(u){if(!u)return xm("Could not find one or more icon(s)",i.value,s.value)},{immediate:!0});var f=mt(function(){return l.value?$s(l.value.abstract[0],{},r):null});return function(){return f.value}}}),km={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},Am={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},Om={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},Em={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Cm={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]};um.add(Om,Em,km,Cm,Am);pc(Nu).component("font-awesome-icon",_m).mount("#app");
