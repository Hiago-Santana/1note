(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function pi(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const G={},Tt=[],Fe=()=>{},Ws=()=>!1,Ys=/^on[^a-z]/,ir=e=>Ys.test(e),hi=e=>e.startsWith("onUpdate:"),de=Object.assign,gi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ks=Object.prototype.hasOwnProperty,W=(e,t)=>Ks.call(e,t),j=Array.isArray,Nt=e=>ar(e)==="[object Map]",go=e=>ar(e)==="[object Set]",$=e=>typeof e=="function",ce=e=>typeof e=="string",vi=e=>typeof e=="symbol",te=e=>e!==null&&typeof e=="object",vo=e=>te(e)&&$(e.then)&&$(e.catch),bo=Object.prototype.toString,ar=e=>bo.call(e),qs=e=>ar(e).slice(8,-1),yo=e=>ar(e)==="[object Object]",bi=e=>ce(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,jn=pi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),or=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Vs=/-(\w)/g,He=or(e=>e.replace(Vs,(t,n)=>n?n.toUpperCase():"")),Xs=/\B([A-Z])/g,$t=or(e=>e.replace(Xs,"-$1").toLowerCase()),sr=or(e=>e.charAt(0).toUpperCase()+e.slice(1)),_r=or(e=>e?`on${sr(e)}`:""),tn=(e,t)=>!Object.is(e,t),Dn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},qn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},jr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ea;const Dr=()=>ea||(ea=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function yi(e){if(j(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=ce(r)?Qs(r):yi(r);if(i)for(const a in i)t[a]=i[a]}return t}else{if(ce(e))return e;if(te(e))return e}}const Js=/;(?![^(]*\))/g,Gs=/:([^]+)/,Zs=/\/\*[^]*?\*\//g;function Qs(e){const t={};return e.replace(Zs,"").split(Js).forEach(n=>{if(n){const r=n.split(Gs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function xi(e){let t="";if(ce(e))t=e;else if(j(e))for(let n=0;n<e.length;n++){const r=xi(e[n]);r&&(t+=r+" ")}else if(te(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const el="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tl=pi(el);function xo(e){return!!e||e===""}const yn=e=>ce(e)?e:e==null?"":j(e)||te(e)&&(e.toString===bo||!$(e.toString))?JSON.stringify(e,wo,2):String(e),wo=(e,t)=>t&&t.__v_isRef?wo(e,t.value):Nt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:go(t)?{[`Set(${t.size})`]:[...t.values()]}:te(t)&&!j(t)&&!yo(t)?String(t):t;let Se;class nl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Se,!t&&Se&&(this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Se;try{return Se=this,t()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function rl(e,t=Se){t&&t.active&&t.effects.push(e)}function il(){return Se}const wi=e=>{const t=new Set(e);return t.w=0,t.n=0,t},_o=e=>(e.w&ot)>0,ko=e=>(e.n&ot)>0,al=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ot},ol=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];_o(i)&&!ko(i)?i.delete(e):t[n++]=i,i.w&=~ot,i.n&=~ot}t.length=n}},$r=new WeakMap;let qt=0,ot=1;const Br=30;let Ne;const xt=Symbol(""),Ur=Symbol("");class _i{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,rl(this,r)}run(){if(!this.active)return this.fn();let t=Ne,n=rt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ne,Ne=this,rt=!0,ot=1<<++qt,qt<=Br?al(this):ta(this),this.fn()}finally{qt<=Br&&ol(this),ot=1<<--qt,Ne=this.parent,rt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ne===this?this.deferStop=!0:this.active&&(ta(this),this.onStop&&this.onStop(),this.active=!1)}}function ta(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let rt=!0;const Ao=[];function Bt(){Ao.push(rt),rt=!1}function Ut(){const e=Ao.pop();rt=e===void 0?!0:e}function Oe(e,t,n){if(rt&&Ne){let r=$r.get(e);r||$r.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=wi()),Oo(i)}}function Oo(e,t){let n=!1;qt<=Br?ko(e)||(e.n|=ot,n=!_o(e)):n=!e.has(Ne),n&&(e.add(Ne),Ne.deps.push(e))}function qe(e,t,n,r,i,a){const o=$r.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&j(e)){const l=Number(r);o.forEach((f,u)=>{(u==="length"||u>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":j(e)?bi(n)&&s.push(o.get("length")):(s.push(o.get(xt)),Nt(e)&&s.push(o.get(Ur)));break;case"delete":j(e)||(s.push(o.get(xt)),Nt(e)&&s.push(o.get(Ur)));break;case"set":Nt(e)&&s.push(o.get(xt));break}if(s.length===1)s[0]&&Hr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Hr(wi(l))}}function Hr(e,t){const n=j(e)?e:[...e];for(const r of n)r.computed&&na(r);for(const r of n)r.computed||na(r)}function na(e,t){(e!==Ne||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const sl=pi("__proto__,__v_isRef,__isVue"),Eo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(vi)),ll=ki(),fl=ki(!1,!0),cl=ki(!0),ra=ul();function ul(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=K(this);for(let a=0,o=this.length;a<o;a++)Oe(r,"get",a+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(K)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Bt();const r=K(this)[t].apply(this,n);return Ut(),r}}),e}function dl(e){const t=K(this);return Oe(t,"has",e),t.hasOwnProperty(e)}function ki(e=!1,t=!1){return function(r,i,a){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&a===(e?t?Pl:To:t?So:Io).get(r))return r;const o=j(r);if(!e){if(o&&W(ra,i))return Reflect.get(ra,i,a);if(i==="hasOwnProperty")return dl}const s=Reflect.get(r,i,a);return(vi(i)?Eo.has(i):sl(i))||(e||Oe(r,"get",i),t)?s:ve(s)?o&&bi(i)?s:s.value:te(s)?e?No(s):Ei(s):s}}const ml=Co(),pl=Co(!0);function Co(e=!1){return function(n,r,i,a){let o=n[r];if(zt(o)&&ve(o)&&!ve(i))return!1;if(!e&&(!Vn(i)&&!zt(i)&&(o=K(o),i=K(i)),!j(n)&&ve(o)&&!ve(i)))return o.value=i,!0;const s=j(n)&&bi(r)?Number(r)<n.length:W(n,r),l=Reflect.set(n,r,i,a);return n===K(a)&&(s?tn(i,o)&&qe(n,"set",r,i):qe(n,"add",r,i)),l}}function hl(e,t){const n=W(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&qe(e,"delete",t,void 0),r}function gl(e,t){const n=Reflect.has(e,t);return(!vi(t)||!Eo.has(t))&&Oe(e,"has",t),n}function vl(e){return Oe(e,"iterate",j(e)?"length":xt),Reflect.ownKeys(e)}const Po={get:ll,set:ml,deleteProperty:hl,has:gl,ownKeys:vl},bl={get:cl,set(e,t){return!0},deleteProperty(e,t){return!0}},yl=de({},Po,{get:fl,set:pl}),Ai=e=>e,lr=e=>Reflect.getPrototypeOf(e);function xn(e,t,n=!1,r=!1){e=e.__v_raw;const i=K(e),a=K(t);n||(t!==a&&Oe(i,"get",t),Oe(i,"get",a));const{has:o}=lr(i),s=r?Ai:n?Pi:nn;if(o.call(i,t))return s(e.get(t));if(o.call(i,a))return s(e.get(a));e!==i&&e.get(t)}function wn(e,t=!1){const n=this.__v_raw,r=K(n),i=K(e);return t||(e!==i&&Oe(r,"has",e),Oe(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function _n(e,t=!1){return e=e.__v_raw,!t&&Oe(K(e),"iterate",xt),Reflect.get(e,"size",e)}function ia(e){e=K(e);const t=K(this);return lr(t).has.call(t,e)||(t.add(e),qe(t,"add",e,e)),this}function aa(e,t){t=K(t);const n=K(this),{has:r,get:i}=lr(n);let a=r.call(n,e);a||(e=K(e),a=r.call(n,e));const o=i.call(n,e);return n.set(e,t),a?tn(t,o)&&qe(n,"set",e,t):qe(n,"add",e,t),this}function oa(e){const t=K(this),{has:n,get:r}=lr(t);let i=n.call(t,e);i||(e=K(e),i=n.call(t,e)),r&&r.call(t,e);const a=t.delete(e);return i&&qe(t,"delete",e,void 0),a}function sa(){const e=K(this),t=e.size!==0,n=e.clear();return t&&qe(e,"clear",void 0,void 0),n}function kn(e,t){return function(r,i){const a=this,o=a.__v_raw,s=K(o),l=t?Ai:e?Pi:nn;return!e&&Oe(s,"iterate",xt),o.forEach((f,u)=>r.call(i,l(f),l(u),a))}}function An(e,t,n){return function(...r){const i=this.__v_raw,a=K(i),o=Nt(a),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=i[e](...r),u=n?Ai:t?Pi:nn;return!t&&Oe(a,"iterate",l?Ur:xt),{next(){const{value:m,done:p}=f.next();return p?{value:m,done:p}:{value:s?[u(m[0]),u(m[1])]:u(m),done:p}},[Symbol.iterator](){return this}}}}function et(e){return function(...t){return e==="delete"?!1:this}}function xl(){const e={get(a){return xn(this,a)},get size(){return _n(this)},has:wn,add:ia,set:aa,delete:oa,clear:sa,forEach:kn(!1,!1)},t={get(a){return xn(this,a,!1,!0)},get size(){return _n(this)},has:wn,add:ia,set:aa,delete:oa,clear:sa,forEach:kn(!1,!0)},n={get(a){return xn(this,a,!0)},get size(){return _n(this,!0)},has(a){return wn.call(this,a,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:kn(!0,!1)},r={get(a){return xn(this,a,!0,!0)},get size(){return _n(this,!0)},has(a){return wn.call(this,a,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:kn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=An(a,!1,!1),n[a]=An(a,!0,!1),t[a]=An(a,!1,!0),r[a]=An(a,!0,!0)}),[e,n,t,r]}const[wl,_l,kl,Al]=xl();function Oi(e,t){const n=t?e?Al:kl:e?_l:wl;return(r,i,a)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(W(n,i)&&i in r?n:r,i,a)}const Ol={get:Oi(!1,!1)},El={get:Oi(!1,!0)},Cl={get:Oi(!0,!1)},Io=new WeakMap,So=new WeakMap,To=new WeakMap,Pl=new WeakMap;function Il(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Sl(e){return e.__v_skip||!Object.isExtensible(e)?0:Il(qs(e))}function Ei(e){return zt(e)?e:Ci(e,!1,Po,Ol,Io)}function Tl(e){return Ci(e,!1,yl,El,So)}function No(e){return Ci(e,!0,bl,Cl,To)}function Ci(e,t,n,r,i){if(!te(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=i.get(e);if(a)return a;const o=Sl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function Mt(e){return zt(e)?Mt(e.__v_raw):!!(e&&e.__v_isReactive)}function zt(e){return!!(e&&e.__v_isReadonly)}function Vn(e){return!!(e&&e.__v_isShallow)}function Mo(e){return Mt(e)||zt(e)}function K(e){const t=e&&e.__v_raw;return t?K(t):e}function Lo(e){return qn(e,"__v_skip",!0),e}const nn=e=>te(e)?Ei(e):e,Pi=e=>te(e)?No(e):e;function Fo(e){rt&&Ne&&(e=K(e),Oo(e.dep||(e.dep=wi())))}function zo(e,t){e=K(e);const n=e.dep;n&&Hr(n)}function ve(e){return!!(e&&e.__v_isRef===!0)}function be(e){return Nl(e,!1)}function Nl(e,t){return ve(e)?e:new Ml(e,t)}class Ml{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:K(t),this._value=n?t:nn(t)}get value(){return Fo(this),this._value}set value(t){const n=this.__v_isShallow||Vn(t)||zt(t);t=n?t:K(t),tn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:nn(t),zo(this))}}function Vt(e){return ve(e)?e.value:e}const Ll={get:(e,t,n)=>Vt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return ve(i)&&!ve(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Ro(e){return Mt(e)?e:new Proxy(e,Ll)}class Fl{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new _i(t,()=>{this._dirty||(this._dirty=!0,zo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=K(this);return Fo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function zl(e,t,n=!1){let r,i;const a=$(e);return a?(r=e,i=Fe):(r=e.get,i=e.set),new Fl(r,i,a||!i,n)}function it(e,t,n,r){let i;try{i=r?e(...r):e()}catch(a){fr(a,t,n)}return i}function ze(e,t,n,r){if($(e)){const a=it(e,t,n,r);return a&&vo(a)&&a.catch(o=>{fr(o,t,n)}),a}const i=[];for(let a=0;a<e.length;a++)i.push(ze(e[a],t,n,r));return i}function fr(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let a=t.parent;const o=t.proxy,s=n;for(;a;){const f=a.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](e,o,s)===!1)return}a=a.parent}const l=t.appContext.config.errorHandler;if(l){it(l,null,10,[e,o,s]);return}}Rl(e,n,i,r)}function Rl(e,t,n,r=!0){console.error(e)}let rn=!1,Wr=!1;const ge=[];let Be=0;const Lt=[];let Ye=null,ht=0;const jo=Promise.resolve();let Ii=null;function jl(e){const t=Ii||jo;return e?t.then(this?e.bind(this):e):t}function Dl(e){let t=Be+1,n=ge.length;for(;t<n;){const r=t+n>>>1;an(ge[r])<e?t=r+1:n=r}return t}function Si(e){(!ge.length||!ge.includes(e,rn&&e.allowRecurse?Be+1:Be))&&(e.id==null?ge.push(e):ge.splice(Dl(e.id),0,e),Do())}function Do(){!rn&&!Wr&&(Wr=!0,Ii=jo.then(Bo))}function $l(e){const t=ge.indexOf(e);t>Be&&ge.splice(t,1)}function Bl(e){j(e)?Lt.push(...e):(!Ye||!Ye.includes(e,e.allowRecurse?ht+1:ht))&&Lt.push(e),Do()}function la(e,t=rn?Be+1:0){for(;t<ge.length;t++){const n=ge[t];n&&n.pre&&(ge.splice(t,1),t--,n())}}function $o(e){if(Lt.length){const t=[...new Set(Lt)];if(Lt.length=0,Ye){Ye.push(...t);return}for(Ye=t,Ye.sort((n,r)=>an(n)-an(r)),ht=0;ht<Ye.length;ht++)Ye[ht]();Ye=null,ht=0}}const an=e=>e.id==null?1/0:e.id,Ul=(e,t)=>{const n=an(e)-an(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Bo(e){Wr=!1,rn=!0,ge.sort(Ul);const t=Fe;try{for(Be=0;Be<ge.length;Be++){const n=ge[Be];n&&n.active!==!1&&it(n,null,14)}}finally{Be=0,ge.length=0,$o(),rn=!1,Ii=null,(ge.length||Lt.length)&&Bo()}}function Hl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||G;let i=n;const a=t.startsWith("update:"),o=a&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:p}=r[u]||G;p&&(i=n.map(g=>ce(g)?g.trim():g)),m&&(i=n.map(jr))}let s,l=r[s=_r(t)]||r[s=_r(He(t))];!l&&a&&(l=r[s=_r($t(t))]),l&&ze(l,e,6,i);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,ze(f,e,6,i)}}function Uo(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const a=e.emits;let o={},s=!1;if(!$(e)){const l=f=>{const u=Uo(f,t,!0);u&&(s=!0,de(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!a&&!s?(te(e)&&r.set(e,null),null):(j(a)?a.forEach(l=>o[l]=null):de(o,a),te(e)&&r.set(e,o),o)}function cr(e,t){return!e||!ir(t)?!1:(t=t.slice(2).replace(/Once$/,""),W(e,t[0].toLowerCase()+t.slice(1))||W(e,$t(t))||W(e,t))}let Pe=null,Ho=null;function Xn(e){const t=Pe;return Pe=e,Ho=e&&e.type.__scopeId||null,t}function Wl(e,t=Pe,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&xa(-1);const a=Xn(t);let o;try{o=e(...i)}finally{Xn(a),r._d&&xa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function kr(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:a,propsOptions:[o],slots:s,attrs:l,emit:f,render:u,renderCache:m,data:p,setupState:g,ctx:A,inheritAttrs:E}=e;let M,w;const x=Xn(e);try{if(n.shapeFlag&4){const P=i||r;M=$e(u.call(P,P,m,a,g,p,A)),w=l}else{const P=t;M=$e(P.length>1?P(a,{attrs:l,slots:s,emit:f}):P(a,null)),w=t.props?l:Yl(l)}}catch(P){Zt.length=0,fr(P,e,1),M=ee(_t)}let L=M;if(w&&E!==!1){const P=Object.keys(w),{shapeFlag:H}=L;P.length&&H&7&&(o&&P.some(hi)&&(w=Kl(w,o)),L=Rt(L,w))}return n.dirs&&(L=Rt(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),M=L,Xn(x),M}const Yl=e=>{let t;for(const n in e)(n==="class"||n==="style"||ir(n))&&((t||(t={}))[n]=e[n]);return t},Kl=(e,t)=>{const n={};for(const r in e)(!hi(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ql(e,t,n){const{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:l}=t,f=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?fa(r,o,f):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const p=u[m];if(o[p]!==r[p]&&!cr(f,p))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?fa(r,o,f):!0:!!o;return!1}function fa(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const a=r[i];if(t[a]!==e[a]&&!cr(n,a))return!0}return!1}function Vl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Xl=e=>e.__isSuspense;function Jl(e,t){t&&t.pendingBranch?j(e)?t.effects.push(...e):t.effects.push(e):Bl(e)}const On={};function $n(e,t,n){return Wo(e,t,n)}function Wo(e,t,{immediate:n,deep:r,flush:i,onTrack:a,onTrigger:o}=G){var s;const l=il()===((s=me)==null?void 0:s.scope)?me:null;let f,u=!1,m=!1;if(ve(e)?(f=()=>e.value,u=Vn(e)):Mt(e)?(f=()=>e,r=!0):j(e)?(m=!0,u=e.some(P=>Mt(P)||Vn(P)),f=()=>e.map(P=>{if(ve(P))return P.value;if(Mt(P))return vt(P);if($(P))return it(P,l,2)})):$(e)?t?f=()=>it(e,l,2):f=()=>{if(!(l&&l.isUnmounted))return p&&p(),ze(e,l,3,[g])}:f=Fe,t&&r){const P=f;f=()=>vt(P())}let p,g=P=>{p=x.onStop=()=>{it(P,l,4)}},A;if(sn)if(g=Fe,t?n&&ze(t,l,3,[f(),m?[]:void 0,g]):f(),i==="sync"){const P=qf();A=P.__watcherHandles||(P.__watcherHandles=[])}else return Fe;let E=m?new Array(e.length).fill(On):On;const M=()=>{if(x.active)if(t){const P=x.run();(r||u||(m?P.some((H,ae)=>tn(H,E[ae])):tn(P,E)))&&(p&&p(),ze(t,l,3,[P,E===On?void 0:m&&E[0]===On?[]:E,g]),E=P)}else x.run()};M.allowRecurse=!!t;let w;i==="sync"?w=M:i==="post"?w=()=>ke(M,l&&l.suspense):(M.pre=!0,l&&(M.id=l.uid),w=()=>Si(M));const x=new _i(f,w);t?n?M():E=x.run():i==="post"?ke(x.run.bind(x),l&&l.suspense):x.run();const L=()=>{x.stop(),l&&l.scope&&gi(l.scope.effects,x)};return A&&A.push(L),L}function Gl(e,t,n){const r=this.proxy,i=ce(e)?e.includes(".")?Yo(r,e):()=>r[e]:e.bind(r,r);let a;$(t)?a=t:(a=t.handler,n=t);const o=me;jt(this);const s=Wo(i,a.bind(r),n);return o?jt(o):wt(),s}function Yo(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function vt(e,t){if(!te(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ve(e))vt(e.value,t);else if(j(e))for(let n=0;n<e.length;n++)vt(e[n],t);else if(go(e)||Nt(e))e.forEach(n=>{vt(n,t)});else if(yo(e))for(const n in e)vt(e[n],t);return e}function En(e,t){const n=Pe;if(n===null)return e;const r=pr(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[o,s,l,f=G]=t[a];o&&($(o)&&(o={mounted:o,updated:o}),o.deep&&vt(s),i.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:f}))}return e}function dt(e,t,n,r){const i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){const s=i[o];a&&(s.oldValue=a[o].value);let l=s.dir[r];l&&(Bt(),ze(l,n,8,[e.el,s,e,t]),Ut())}}function Zl(e,t){return $(e)?(()=>de({name:e.name},t,{setup:e}))():e}const Bn=e=>!!e.type.__asyncLoader,Ko=e=>e.type.__isKeepAlive;function Ql(e,t){qo(e,"a",t)}function ef(e,t){qo(e,"da",t)}function qo(e,t,n=me){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(ur(t,r,n),n){let i=n.parent;for(;i&&i.parent;)Ko(i.parent.vnode)&&tf(r,t,n,i),i=i.parent}}function tf(e,t,n,r){const i=ur(t,e,r,!0);Xo(()=>{gi(r[t],i)},n)}function ur(e,t,n=me,r=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Bt(),jt(n);const s=ze(t,n,e,o);return wt(),Ut(),s});return r?i.unshift(a):i.push(a),a}}const Ge=e=>(t,n=me)=>(!sn||e==="sp")&&ur(e,(...r)=>t(...r),n),nf=Ge("bm"),Vo=Ge("m"),rf=Ge("bu"),af=Ge("u"),of=Ge("bum"),Xo=Ge("um"),sf=Ge("sp"),lf=Ge("rtg"),ff=Ge("rtc");function cf(e,t=me){ur("ec",e,t)}const Jo="components";function uf(e,t){return mf(Jo,e,!0,t)||e}const df=Symbol.for("v-ndc");function mf(e,t,n=!0,r=!1){const i=Pe||me;if(i){const a=i.type;if(e===Jo){const s=Hf(a,!1);if(s&&(s===t||s===He(t)||s===sr(He(t))))return a}const o=ca(i[e]||a[e],t)||ca(i.appContext[e],t);return!o&&r?a:o}}function ca(e,t){return e&&(e[t]||e[He(t)]||e[sr(He(t))])}function ua(e,t,n,r){let i;const a=n&&n[r];if(j(e)||ce(e)){i=new Array(e.length);for(let o=0,s=e.length;o<s;o++)i[o]=t(e[o],o,void 0,a&&a[o])}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,a&&a[o])}else if(te(e))if(e[Symbol.iterator])i=Array.from(e,(o,s)=>t(o,s,void 0,a&&a[s]));else{const o=Object.keys(e);i=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];i[s]=t(e[f],f,s,a&&a[s])}}else i=[];return n&&(n[r]=i),i}const Yr=e=>e?ls(e)?pr(e)||e.proxy:Yr(e.parent):null,Gt=de(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Yr(e.parent),$root:e=>Yr(e.root),$emit:e=>e.emit,$options:e=>Ti(e),$forceUpdate:e=>e.f||(e.f=()=>Si(e.update)),$nextTick:e=>e.n||(e.n=jl.bind(e.proxy)),$watch:e=>Gl.bind(e)}),Ar=(e,t)=>e!==G&&!e.__isScriptSetup&&W(e,t),pf={get({_:e},t){const{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else{if(Ar(r,t))return o[t]=1,r[t];if(i!==G&&W(i,t))return o[t]=2,i[t];if((f=e.propsOptions[0])&&W(f,t))return o[t]=3,a[t];if(n!==G&&W(n,t))return o[t]=4,n[t];Kr&&(o[t]=0)}}const u=Gt[t];let m,p;if(u)return t==="$attrs"&&Oe(e,"get",t),u(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==G&&W(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,W(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:a}=e;return Ar(i,t)?(i[t]=n,!0):r!==G&&W(r,t)?(r[t]=n,!0):W(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:a}},o){let s;return!!n[o]||e!==G&&W(e,o)||Ar(t,o)||(s=a[0])&&W(s,o)||W(r,o)||W(Gt,o)||W(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:W(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function da(e){return j(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Kr=!0;function hf(e){const t=Ti(e),n=e.proxy,r=e.ctx;Kr=!1,t.beforeCreate&&ma(t.beforeCreate,e,"bc");const{data:i,computed:a,methods:o,watch:s,provide:l,inject:f,created:u,beforeMount:m,mounted:p,beforeUpdate:g,updated:A,activated:E,deactivated:M,beforeDestroy:w,beforeUnmount:x,destroyed:L,unmounted:P,render:H,renderTracked:ae,renderTriggered:le,errorCaptured:we,serverPrefetch:V,expose:S,inheritAttrs:Y,components:R,directives:pe,filters:Qe}=t;if(f&&gf(f,r,null),o)for(const ne in o){const X=o[ne];$(X)&&(r[ne]=X.bind(n))}if(i){const ne=i.call(n,n);te(ne)&&(e.data=Ei(ne))}if(Kr=!0,a)for(const ne in a){const X=a[ne],ct=$(X)?X.bind(n,n):$(X.get)?X.get.bind(n,n):Fe,vn=!$(X)&&$(X.set)?X.set.bind(n):Fe,ut=pt({get:ct,set:vn});Object.defineProperty(r,ne,{enumerable:!0,configurable:!0,get:()=>ut.value,set:Re=>ut.value=Re})}if(s)for(const ne in s)Go(s[ne],r,n,ne);if(l){const ne=$(l)?l.call(n):l;Reflect.ownKeys(ne).forEach(X=>{_f(X,ne[X])})}u&&ma(u,e,"c");function fe(ne,X){j(X)?X.forEach(ct=>ne(ct.bind(n))):X&&ne(X.bind(n))}if(fe(nf,m),fe(Vo,p),fe(rf,g),fe(af,A),fe(Ql,E),fe(ef,M),fe(cf,we),fe(ff,ae),fe(lf,le),fe(of,x),fe(Xo,P),fe(sf,V),j(S))if(S.length){const ne=e.exposed||(e.exposed={});S.forEach(X=>{Object.defineProperty(ne,X,{get:()=>n[X],set:ct=>n[X]=ct})})}else e.exposed||(e.exposed={});H&&e.render===Fe&&(e.render=H),Y!=null&&(e.inheritAttrs=Y),R&&(e.components=R),pe&&(e.directives=pe)}function gf(e,t,n=Fe){j(e)&&(e=qr(e));for(const r in e){const i=e[r];let a;te(i)?"default"in i?a=Un(i.from||r,i.default,!0):a=Un(i.from||r):a=Un(i),ve(a)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):t[r]=a}}function ma(e,t,n){ze(j(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Go(e,t,n,r){const i=r.includes(".")?Yo(n,r):()=>n[r];if(ce(e)){const a=t[e];$(a)&&$n(i,a)}else if($(e))$n(i,e.bind(n));else if(te(e))if(j(e))e.forEach(a=>Go(a,t,n,r));else{const a=$(e.handler)?e.handler.bind(n):t[e.handler];$(a)&&$n(i,a,e)}}function Ti(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t);let l;return s?l=s:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(f=>Jn(l,f,o,!0)),Jn(l,t,o)),te(t)&&a.set(t,l),l}function Jn(e,t,n,r=!1){const{mixins:i,extends:a}=t;a&&Jn(e,a,n,!0),i&&i.forEach(o=>Jn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=vf[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const vf={data:pa,props:ha,emits:ha,methods:Xt,computed:Xt,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:Xt,directives:Xt,watch:yf,provide:pa,inject:bf};function pa(e,t){return t?e?function(){return de($(e)?e.call(this,this):e,$(t)?t.call(this,this):t)}:t:e}function bf(e,t){return Xt(qr(e),qr(t))}function qr(e){if(j(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ye(e,t){return e?[...new Set([].concat(e,t))]:t}function Xt(e,t){return e?de(Object.create(null),e,t):t}function ha(e,t){return e?j(e)&&j(t)?[...new Set([...e,...t])]:de(Object.create(null),da(e),da(t??{})):t}function yf(e,t){if(!e)return t;if(!t)return e;const n=de(Object.create(null),e);for(const r in t)n[r]=ye(e[r],t[r]);return n}function Zo(){return{app:null,config:{isNativeTag:Ws,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xf=0;function wf(e,t){return function(r,i=null){$(r)||(r=de({},r)),i!=null&&!te(i)&&(i=null);const a=Zo(),o=new Set;let s=!1;const l=a.app={_uid:xf++,_component:r,_props:i,_container:null,_context:a,_instance:null,version:Vf,get config(){return a.config},set config(f){},use(f,...u){return o.has(f)||(f&&$(f.install)?(o.add(f),f.install(l,...u)):$(f)&&(o.add(f),f(l,...u))),l},mixin(f){return a.mixins.includes(f)||a.mixins.push(f),l},component(f,u){return u?(a.components[f]=u,l):a.components[f]},directive(f,u){return u?(a.directives[f]=u,l):a.directives[f]},mount(f,u,m){if(!s){const p=ee(r,i);return p.appContext=a,u&&t?t(p,f):e(p,f,m),s=!0,l._container=f,f.__vue_app__=l,pr(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,u){return a.provides[f]=u,l},runWithContext(f){Gn=l;try{return f()}finally{Gn=null}}};return l}}let Gn=null;function _f(e,t){if(me){let n=me.provides;const r=me.parent&&me.parent.provides;r===n&&(n=me.provides=Object.create(r)),n[e]=t}}function Un(e,t,n=!1){const r=me||Pe;if(r||Gn){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Gn._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&$(t)?t.call(r&&r.proxy):t}}function kf(e,t,n,r=!1){const i={},a={};qn(a,mr,1),e.propsDefaults=Object.create(null),Qo(e,t,i,a);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:Tl(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function Af(e,t,n,r){const{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=K(i),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let p=u[m];if(cr(e.emitsOptions,p))continue;const g=t[p];if(l)if(W(a,p))g!==a[p]&&(a[p]=g,f=!0);else{const A=He(p);i[A]=Vr(l,s,A,g,e,!1)}else g!==a[p]&&(a[p]=g,f=!0)}}}else{Qo(e,t,i,a)&&(f=!0);let u;for(const m in s)(!t||!W(t,m)&&((u=$t(m))===m||!W(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(i[m]=Vr(l,s,m,void 0,e,!0)):delete i[m]);if(a!==s)for(const m in a)(!t||!W(t,m))&&(delete a[m],f=!0)}f&&qe(e,"set","$attrs")}function Qo(e,t,n,r){const[i,a]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(jn(l))continue;const f=t[l];let u;i&&W(i,u=He(l))?!a||!a.includes(u)?n[u]=f:(s||(s={}))[u]=f:cr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(a){const l=K(n),f=s||G;for(let u=0;u<a.length;u++){const m=a[u];n[m]=Vr(i,l,m,f[m],e,!W(f,m))}}return o}function Vr(e,t,n,r,i,a){const o=e[n];if(o!=null){const s=W(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&$(l)){const{propsDefaults:f}=i;n in f?r=f[n]:(jt(i),r=f[n]=l.call(null,t),wt())}else r=l}o[0]&&(a&&!s?r=!1:o[1]&&(r===""||r===$t(n))&&(r=!0))}return r}function es(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const a=e.props,o={},s=[];let l=!1;if(!$(e)){const u=m=>{l=!0;const[p,g]=es(m,t,!0);de(o,p),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!a&&!l)return te(e)&&r.set(e,Tt),Tt;if(j(a))for(let u=0;u<a.length;u++){const m=He(a[u]);ga(m)&&(o[m]=G)}else if(a)for(const u in a){const m=He(u);if(ga(m)){const p=a[u],g=o[m]=j(p)||$(p)?{type:p}:de({},p);if(g){const A=ya(Boolean,g.type),E=ya(String,g.type);g[0]=A>-1,g[1]=E<0||A<E,(A>-1||W(g,"default"))&&s.push(m)}}}const f=[o,s];return te(e)&&r.set(e,f),f}function ga(e){return e[0]!=="$"}function va(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ba(e,t){return va(e)===va(t)}function ya(e,t){return j(t)?t.findIndex(n=>ba(n,e)):$(t)&&ba(t,e)?0:-1}const ts=e=>e[0]==="_"||e==="$stable",Ni=e=>j(e)?e.map($e):[$e(e)],Of=(e,t,n)=>{if(t._n)return t;const r=Wl((...i)=>Ni(t(...i)),n);return r._c=!1,r},ns=(e,t,n)=>{const r=e._ctx;for(const i in e){if(ts(i))continue;const a=e[i];if($(a))t[i]=Of(i,a,r);else if(a!=null){const o=Ni(a);t[i]=()=>o}}},rs=(e,t)=>{const n=Ni(t);e.slots.default=()=>n},Ef=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=K(t),qn(t,"_",n)):ns(t,e.slots={})}else e.slots={},t&&rs(e,t);qn(e.slots,mr,1)},Cf=(e,t,n)=>{const{vnode:r,slots:i}=e;let a=!0,o=G;if(r.shapeFlag&32){const s=t._;s?n&&s===1?a=!1:(de(i,t),!n&&s===1&&delete i._):(a=!t.$stable,ns(t,i)),o=t}else t&&(rs(e,t),o={default:1});if(a)for(const s in i)!ts(s)&&!(s in o)&&delete i[s]};function Xr(e,t,n,r,i=!1){if(j(e)){e.forEach((p,g)=>Xr(p,t&&(j(t)?t[g]:t),n,r,i));return}if(Bn(r)&&!i)return;const a=r.shapeFlag&4?pr(r.component)||r.component.proxy:r.el,o=i?null:a,{i:s,r:l}=e,f=t&&t.r,u=s.refs===G?s.refs={}:s.refs,m=s.setupState;if(f!=null&&f!==l&&(ce(f)?(u[f]=null,W(m,f)&&(m[f]=null)):ve(f)&&(f.value=null)),$(l))it(l,s,12,[o,u]);else{const p=ce(l),g=ve(l);if(p||g){const A=()=>{if(e.f){const E=p?W(m,l)?m[l]:u[l]:l.value;i?j(E)&&gi(E,a):j(E)?E.includes(a)||E.push(a):p?(u[l]=[a],W(m,l)&&(m[l]=u[l])):(l.value=[a],e.k&&(u[e.k]=l.value))}else p?(u[l]=o,W(m,l)&&(m[l]=o)):g&&(l.value=o,e.k&&(u[e.k]=o))};o?(A.id=-1,ke(A,n)):A()}}}const ke=Jl;function Pf(e){return If(e)}function If(e,t){const n=Dr();n.__VUE__=!0;const{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:l,setText:f,setElementText:u,parentNode:m,nextSibling:p,setScopeId:g=Fe,insertStaticContent:A}=e,E=(c,d,h,b=null,v=null,k=null,C=!1,_=null,O=!!d.dynamicChildren)=>{if(c===d)return;c&&!Yt(c,d)&&(b=bn(c),Re(c,v,k,!0),c=null),d.patchFlag===-2&&(O=!1,d.dynamicChildren=null);const{type:y,ref:F,shapeFlag:T}=d;switch(y){case dr:M(c,d,h,b);break;case _t:w(c,d,h,b);break;case Or:c==null&&x(d,h,b,C);break;case Te:R(c,d,h,b,v,k,C,_,O);break;default:T&1?H(c,d,h,b,v,k,C,_,O):T&6?pe(c,d,h,b,v,k,C,_,O):(T&64||T&128)&&y.process(c,d,h,b,v,k,C,_,O,Ot)}F!=null&&v&&Xr(F,c&&c.ref,k,d||c,!d)},M=(c,d,h,b)=>{if(c==null)r(d.el=s(d.children),h,b);else{const v=d.el=c.el;d.children!==c.children&&f(v,d.children)}},w=(c,d,h,b)=>{c==null?r(d.el=l(d.children||""),h,b):d.el=c.el},x=(c,d,h,b)=>{[c.el,c.anchor]=A(c.children,d,h,b,c.el,c.anchor)},L=({el:c,anchor:d},h,b)=>{let v;for(;c&&c!==d;)v=p(c),r(c,h,b),c=v;r(d,h,b)},P=({el:c,anchor:d})=>{let h;for(;c&&c!==d;)h=p(c),i(c),c=h;i(d)},H=(c,d,h,b,v,k,C,_,O)=>{C=C||d.type==="svg",c==null?ae(d,h,b,v,k,C,_,O):V(c,d,v,k,C,_,O)},ae=(c,d,h,b,v,k,C,_)=>{let O,y;const{type:F,props:T,shapeFlag:z,transition:D,dirs:U}=c;if(O=c.el=o(c.type,k,T&&T.is,T),z&8?u(O,c.children):z&16&&we(c.children,O,null,b,v,k&&F!=="foreignObject",C,_),U&&dt(c,null,b,"created"),le(O,c,c.scopeId,C,b),T){for(const q in T)q!=="value"&&!jn(q)&&a(O,q,null,T[q],k,c.children,b,v,We);"value"in T&&a(O,"value",null,T.value),(y=T.onVnodeBeforeMount)&&De(y,b,c)}U&&dt(c,null,b,"beforeMount");const J=(!v||v&&!v.pendingBranch)&&D&&!D.persisted;J&&D.beforeEnter(O),r(O,d,h),((y=T&&T.onVnodeMounted)||J||U)&&ke(()=>{y&&De(y,b,c),J&&D.enter(O),U&&dt(c,null,b,"mounted")},v)},le=(c,d,h,b,v)=>{if(h&&g(c,h),b)for(let k=0;k<b.length;k++)g(c,b[k]);if(v){let k=v.subTree;if(d===k){const C=v.vnode;le(c,C,C.scopeId,C.slotScopeIds,v.parent)}}},we=(c,d,h,b,v,k,C,_,O=0)=>{for(let y=O;y<c.length;y++){const F=c[y]=_?nt(c[y]):$e(c[y]);E(null,F,d,h,b,v,k,C,_)}},V=(c,d,h,b,v,k,C)=>{const _=d.el=c.el;let{patchFlag:O,dynamicChildren:y,dirs:F}=d;O|=c.patchFlag&16;const T=c.props||G,z=d.props||G;let D;h&&mt(h,!1),(D=z.onVnodeBeforeUpdate)&&De(D,h,d,c),F&&dt(d,c,h,"beforeUpdate"),h&&mt(h,!0);const U=v&&d.type!=="foreignObject";if(y?S(c.dynamicChildren,y,_,h,b,U,k):C||X(c,d,_,null,h,b,U,k,!1),O>0){if(O&16)Y(_,d,T,z,h,b,v);else if(O&2&&T.class!==z.class&&a(_,"class",null,z.class,v),O&4&&a(_,"style",T.style,z.style,v),O&8){const J=d.dynamicProps;for(let q=0;q<J.length;q++){const se=J[q],Ie=T[se],Et=z[se];(Et!==Ie||se==="value")&&a(_,se,Ie,Et,v,c.children,h,b,We)}}O&1&&c.children!==d.children&&u(_,d.children)}else!C&&y==null&&Y(_,d,T,z,h,b,v);((D=z.onVnodeUpdated)||F)&&ke(()=>{D&&De(D,h,d,c),F&&dt(d,c,h,"updated")},b)},S=(c,d,h,b,v,k,C)=>{for(let _=0;_<d.length;_++){const O=c[_],y=d[_],F=O.el&&(O.type===Te||!Yt(O,y)||O.shapeFlag&70)?m(O.el):h;E(O,y,F,null,b,v,k,C,!0)}},Y=(c,d,h,b,v,k,C)=>{if(h!==b){if(h!==G)for(const _ in h)!jn(_)&&!(_ in b)&&a(c,_,h[_],null,C,d.children,v,k,We);for(const _ in b){if(jn(_))continue;const O=b[_],y=h[_];O!==y&&_!=="value"&&a(c,_,y,O,C,d.children,v,k,We)}"value"in b&&a(c,"value",h.value,b.value)}},R=(c,d,h,b,v,k,C,_,O)=>{const y=d.el=c?c.el:s(""),F=d.anchor=c?c.anchor:s("");let{patchFlag:T,dynamicChildren:z,slotScopeIds:D}=d;D&&(_=_?_.concat(D):D),c==null?(r(y,h,b),r(F,h,b),we(d.children,h,F,v,k,C,_,O)):T>0&&T&64&&z&&c.dynamicChildren?(S(c.dynamicChildren,z,h,v,k,C,_),(d.key!=null||v&&d===v.subTree)&&is(c,d,!0)):X(c,d,h,F,v,k,C,_,O)},pe=(c,d,h,b,v,k,C,_,O)=>{d.slotScopeIds=_,c==null?d.shapeFlag&512?v.ctx.activate(d,h,b,C,O):Qe(d,h,b,v,k,C,O):gn(c,d,O)},Qe=(c,d,h,b,v,k,C)=>{const _=c.component=jf(c,b,v);if(Ko(c)&&(_.ctx.renderer=Ot),Df(_),_.asyncDep){if(v&&v.registerDep(_,fe),!c.el){const O=_.subTree=ee(_t);w(null,O,d,h)}return}fe(_,c,d,h,v,k,C)},gn=(c,d,h)=>{const b=d.component=c.component;if(ql(c,d,h))if(b.asyncDep&&!b.asyncResolved){ne(b,d,h);return}else b.next=d,$l(b.update),b.update();else d.el=c.el,b.vnode=d},fe=(c,d,h,b,v,k,C)=>{const _=()=>{if(c.isMounted){let{next:F,bu:T,u:z,parent:D,vnode:U}=c,J=F,q;mt(c,!1),F?(F.el=U.el,ne(c,F,C)):F=U,T&&Dn(T),(q=F.props&&F.props.onVnodeBeforeUpdate)&&De(q,D,F,U),mt(c,!0);const se=kr(c),Ie=c.subTree;c.subTree=se,E(Ie,se,m(Ie.el),bn(Ie),c,v,k),F.el=se.el,J===null&&Vl(c,se.el),z&&ke(z,v),(q=F.props&&F.props.onVnodeUpdated)&&ke(()=>De(q,D,F,U),v)}else{let F;const{el:T,props:z}=d,{bm:D,m:U,parent:J}=c,q=Bn(d);if(mt(c,!1),D&&Dn(D),!q&&(F=z&&z.onVnodeBeforeMount)&&De(F,J,d),mt(c,!0),T&&wr){const se=()=>{c.subTree=kr(c),wr(T,c.subTree,c,v,null)};q?d.type.__asyncLoader().then(()=>!c.isUnmounted&&se()):se()}else{const se=c.subTree=kr(c);E(null,se,h,b,c,v,k),d.el=se.el}if(U&&ke(U,v),!q&&(F=z&&z.onVnodeMounted)){const se=d;ke(()=>De(F,J,se),v)}(d.shapeFlag&256||J&&Bn(J.vnode)&&J.vnode.shapeFlag&256)&&c.a&&ke(c.a,v),c.isMounted=!0,d=h=b=null}},O=c.effect=new _i(_,()=>Si(y),c.scope),y=c.update=()=>O.run();y.id=c.uid,mt(c,!0),y()},ne=(c,d,h)=>{d.component=c;const b=c.vnode.props;c.vnode=d,c.next=null,Af(c,d.props,b,h),Cf(c,d.children,h),Bt(),la(),Ut()},X=(c,d,h,b,v,k,C,_,O=!1)=>{const y=c&&c.children,F=c?c.shapeFlag:0,T=d.children,{patchFlag:z,shapeFlag:D}=d;if(z>0){if(z&128){vn(y,T,h,b,v,k,C,_,O);return}else if(z&256){ct(y,T,h,b,v,k,C,_,O);return}}D&8?(F&16&&We(y,v,k),T!==y&&u(h,T)):F&16?D&16?vn(y,T,h,b,v,k,C,_,O):We(y,v,k,!0):(F&8&&u(h,""),D&16&&we(T,h,b,v,k,C,_,O))},ct=(c,d,h,b,v,k,C,_,O)=>{c=c||Tt,d=d||Tt;const y=c.length,F=d.length,T=Math.min(y,F);let z;for(z=0;z<T;z++){const D=d[z]=O?nt(d[z]):$e(d[z]);E(c[z],D,h,null,v,k,C,_,O)}y>F?We(c,v,k,!0,!1,T):we(d,h,b,v,k,C,_,O,T)},vn=(c,d,h,b,v,k,C,_,O)=>{let y=0;const F=d.length;let T=c.length-1,z=F-1;for(;y<=T&&y<=z;){const D=c[y],U=d[y]=O?nt(d[y]):$e(d[y]);if(Yt(D,U))E(D,U,h,null,v,k,C,_,O);else break;y++}for(;y<=T&&y<=z;){const D=c[T],U=d[z]=O?nt(d[z]):$e(d[z]);if(Yt(D,U))E(D,U,h,null,v,k,C,_,O);else break;T--,z--}if(y>T){if(y<=z){const D=z+1,U=D<F?d[D].el:b;for(;y<=z;)E(null,d[y]=O?nt(d[y]):$e(d[y]),h,U,v,k,C,_,O),y++}}else if(y>z)for(;y<=T;)Re(c[y],v,k,!0),y++;else{const D=y,U=y,J=new Map;for(y=U;y<=z;y++){const Ee=d[y]=O?nt(d[y]):$e(d[y]);Ee.key!=null&&J.set(Ee.key,y)}let q,se=0;const Ie=z-U+1;let Et=!1,Gi=0;const Wt=new Array(Ie);for(y=0;y<Ie;y++)Wt[y]=0;for(y=D;y<=T;y++){const Ee=c[y];if(se>=Ie){Re(Ee,v,k,!0);continue}let je;if(Ee.key!=null)je=J.get(Ee.key);else for(q=U;q<=z;q++)if(Wt[q-U]===0&&Yt(Ee,d[q])){je=q;break}je===void 0?Re(Ee,v,k,!0):(Wt[je-U]=y+1,je>=Gi?Gi=je:Et=!0,E(Ee,d[je],h,null,v,k,C,_,O),se++)}const Zi=Et?Sf(Wt):Tt;for(q=Zi.length-1,y=Ie-1;y>=0;y--){const Ee=U+y,je=d[Ee],Qi=Ee+1<F?d[Ee+1].el:b;Wt[y]===0?E(null,je,h,Qi,v,k,C,_,O):Et&&(q<0||y!==Zi[q]?ut(je,h,Qi,2):q--)}}},ut=(c,d,h,b,v=null)=>{const{el:k,type:C,transition:_,children:O,shapeFlag:y}=c;if(y&6){ut(c.component.subTree,d,h,b);return}if(y&128){c.suspense.move(d,h,b);return}if(y&64){C.move(c,d,h,Ot);return}if(C===Te){r(k,d,h);for(let T=0;T<O.length;T++)ut(O[T],d,h,b);r(c.anchor,d,h);return}if(C===Or){L(c,d,h);return}if(b!==2&&y&1&&_)if(b===0)_.beforeEnter(k),r(k,d,h),ke(()=>_.enter(k),v);else{const{leave:T,delayLeave:z,afterLeave:D}=_,U=()=>r(k,d,h),J=()=>{T(k,()=>{U(),D&&D()})};z?z(k,U,J):J()}else r(k,d,h)},Re=(c,d,h,b=!1,v=!1)=>{const{type:k,props:C,ref:_,children:O,dynamicChildren:y,shapeFlag:F,patchFlag:T,dirs:z}=c;if(_!=null&&Xr(_,null,h,c,!0),F&256){d.ctx.deactivate(c);return}const D=F&1&&z,U=!Bn(c);let J;if(U&&(J=C&&C.onVnodeBeforeUnmount)&&De(J,d,c),F&6)Hs(c.component,h,b);else{if(F&128){c.suspense.unmount(h,b);return}D&&dt(c,null,d,"beforeUnmount"),F&64?c.type.remove(c,d,h,v,Ot,b):y&&(k!==Te||T>0&&T&64)?We(y,d,h,!1,!0):(k===Te&&T&384||!v&&F&16)&&We(O,d,h),b&&Xi(c)}(U&&(J=C&&C.onVnodeUnmounted)||D)&&ke(()=>{J&&De(J,d,c),D&&dt(c,null,d,"unmounted")},h)},Xi=c=>{const{type:d,el:h,anchor:b,transition:v}=c;if(d===Te){Us(h,b);return}if(d===Or){P(c);return}const k=()=>{i(h),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(c.shapeFlag&1&&v&&!v.persisted){const{leave:C,delayLeave:_}=v,O=()=>C(h,k);_?_(c.el,k,O):O()}else k()},Us=(c,d)=>{let h;for(;c!==d;)h=p(c),i(c),c=h;i(d)},Hs=(c,d,h)=>{const{bum:b,scope:v,update:k,subTree:C,um:_}=c;b&&Dn(b),v.stop(),k&&(k.active=!1,Re(C,c,d,h)),_&&ke(_,d),ke(()=>{c.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},We=(c,d,h,b=!1,v=!1,k=0)=>{for(let C=k;C<c.length;C++)Re(c[C],d,h,b,v)},bn=c=>c.shapeFlag&6?bn(c.component.subTree):c.shapeFlag&128?c.suspense.next():p(c.anchor||c.el),Ji=(c,d,h)=>{c==null?d._vnode&&Re(d._vnode,null,null,!0):E(d._vnode||null,c,d,null,null,null,h),la(),$o(),d._vnode=c},Ot={p:E,um:Re,m:ut,r:Xi,mt:Qe,mc:we,pc:X,pbc:S,n:bn,o:e};let xr,wr;return t&&([xr,wr]=t(Ot)),{render:Ji,hydrate:xr,createApp:wf(Ji,xr)}}function mt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function is(e,t,n=!1){const r=e.children,i=t.children;if(j(r)&&j(i))for(let a=0;a<r.length;a++){const o=r[a];let s=i[a];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=i[a]=nt(i[a]),s.el=o.el),n||is(o,s)),s.type===dr&&(s.el=o.el)}}function Sf(e){const t=e.slice(),n=[0];let r,i,a,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(i=n[n.length-1],e[i]<f){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<f?a=s+1:o=s;f<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}const Tf=e=>e.__isTeleport,Te=Symbol.for("v-fgt"),dr=Symbol.for("v-txt"),_t=Symbol.for("v-cmt"),Or=Symbol.for("v-stc"),Zt=[];let Me=null;function re(e=!1){Zt.push(Me=e?null:[])}function Nf(){Zt.pop(),Me=Zt[Zt.length-1]||null}let on=1;function xa(e){on+=e}function as(e){return e.dynamicChildren=on>0?Me||Tt:null,Nf(),on>0&&Me&&Me.push(e),e}function oe(e,t,n,r,i,a){return as(B(e,t,n,r,i,a,!0))}function Mf(e,t,n,r,i){return as(ee(e,t,n,r,i,!0))}function Jr(e){return e?e.__v_isVNode===!0:!1}function Yt(e,t){return e.type===t.type&&e.key===t.key}const mr="__vInternal",os=({key:e})=>e??null,Hn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ce(e)||ve(e)||$(e)?{i:Pe,r:e,k:t,f:!!n}:e:null);function B(e,t=null,n=null,r=0,i=null,a=e===Te?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&os(t),ref:t&&Hn(t),scopeId:Ho,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Pe};return s?(Mi(l,n),a&128&&e.normalize(l)):n&&(l.shapeFlag|=ce(n)?8:16),on>0&&!o&&Me&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&Me.push(l),l}const ee=Lf;function Lf(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===df)&&(e=_t),Jr(e)){const s=Rt(e,t,!0);return n&&Mi(s,n),on>0&&!a&&Me&&(s.shapeFlag&6?Me[Me.indexOf(e)]=s:Me.push(s)),s.patchFlag|=-2,s}if(Wf(e)&&(e=e.__vccOpts),t){t=Ff(t);let{class:s,style:l}=t;s&&!ce(s)&&(t.class=xi(s)),te(l)&&(Mo(l)&&!j(l)&&(l=de({},l)),t.style=yi(l))}const o=ce(e)?1:Xl(e)?128:Tf(e)?64:te(e)?4:$(e)?2:0;return B(e,t,n,r,i,o,a,!0)}function Ff(e){return e?Mo(e)||mr in e?de({},e):e:null}function Rt(e,t,n=!1){const{props:r,ref:i,patchFlag:a,children:o}=e,s=t?ss(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&os(s),ref:t&&t.ref?n&&i?j(i)?i.concat(Hn(t)):[i,Hn(t)]:Hn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Te?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Rt(e.ssContent),ssFallback:e.ssFallback&&Rt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Gr(e=" ",t=0){return ee(dr,null,e,t)}function he(e="",t=!1){return t?(re(),Mf(_t,null,e)):ee(_t,null,e)}function $e(e){return e==null||typeof e=="boolean"?ee(_t):j(e)?ee(Te,null,e.slice()):typeof e=="object"?nt(e):ee(dr,null,String(e))}function nt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Rt(e)}function Mi(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(j(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Mi(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(mr in t)?t._ctx=Pe:i===3&&Pe&&(Pe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else $(t)?(t={default:t,_ctx:Pe},n=32):(t=String(t),r&64?(n=16,t=[Gr(t)]):n=8);e.children=t,e.shapeFlag|=n}function ss(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=xi([t.class,r.class]));else if(i==="style")t.style=yi([t.style,r.style]);else if(ir(i)){const a=t[i],o=r[i];o&&a!==o&&!(j(a)&&a.includes(o))&&(t[i]=a?[].concat(a,o):o)}else i!==""&&(t[i]=r[i])}return t}function De(e,t,n,r=null){ze(e,t,7,[n,r])}const zf=Zo();let Rf=0;function jf(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||zf,a={uid:Rf++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new nl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:es(r,i),emitsOptions:Uo(r,i),emit:null,emitted:null,propsDefaults:G,inheritAttrs:r.inheritAttrs,ctx:G,data:G,props:G,attrs:G,slots:G,refs:G,setupState:G,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Hl.bind(null,a),e.ce&&e.ce(a),a}let me=null,Li,Ct,wa="__VUE_INSTANCE_SETTERS__";(Ct=Dr()[wa])||(Ct=Dr()[wa]=[]),Ct.push(e=>me=e),Li=e=>{Ct.length>1?Ct.forEach(t=>t(e)):Ct[0](e)};const jt=e=>{Li(e),e.scope.on()},wt=()=>{me&&me.scope.off(),Li(null)};function ls(e){return e.vnode.shapeFlag&4}let sn=!1;function Df(e,t=!1){sn=t;const{props:n,children:r}=e.vnode,i=ls(e);kf(e,n,i,t),Ef(e,r);const a=i?$f(e,t):void 0;return sn=!1,a}function $f(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Lo(new Proxy(e.ctx,pf));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?Uf(e):null;jt(e),Bt();const a=it(r,e,0,[e.props,i]);if(Ut(),wt(),vo(a)){if(a.then(wt,wt),t)return a.then(o=>{_a(e,o,t)}).catch(o=>{fr(o,e,0)});e.asyncDep=a}else _a(e,a,t)}else fs(e,t)}function _a(e,t,n){$(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:te(t)&&(e.setupState=Ro(t)),fs(e,n)}let ka;function fs(e,t,n){const r=e.type;if(!e.render){if(!t&&ka&&!r.render){const i=r.template||Ti(e).template;if(i){const{isCustomElement:a,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=de(de({isCustomElement:a,delimiters:s},o),l);r.render=ka(i,f)}}e.render=r.render||Fe}jt(e),Bt(),hf(e),Ut(),wt()}function Bf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Oe(e,"get","$attrs"),t[n]}}))}function Uf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Bf(e)},slots:e.slots,emit:e.emit,expose:t}}function pr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ro(Lo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Gt)return Gt[n](e)},has(t,n){return n in t||n in Gt}}))}function Hf(e,t=!0){return $(e)?e.displayName||e.name:e.name||t&&e.__name}function Wf(e){return $(e)&&"__vccOpts"in e}const pt=(e,t)=>zl(e,t,sn);function Yf(e,t,n){const r=arguments.length;return r===2?te(t)&&!j(t)?Jr(t)?ee(e,null,[t]):ee(e,t):ee(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Jr(n)&&(n=[n]),ee(e,t,n))}const Kf=Symbol.for("v-scx"),qf=()=>Un(Kf),Vf="3.3.4",Xf="http://www.w3.org/2000/svg",gt=typeof document<"u"?document:null,Aa=gt&&gt.createElement("template"),Jf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?gt.createElementNS(Xf,e):gt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>gt.createTextNode(e),createComment:e=>gt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>gt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,a){const o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Aa.innerHTML=r?`<svg>${e}</svg>`:e;const s=Aa.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Gf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Zf(e,t,n){const r=e.style,i=ce(n);if(n&&!i){if(t&&!ce(t))for(const a in t)n[a]==null&&Zr(r,a,"");for(const a in n)Zr(r,a,n[a])}else{const a=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=a)}}const Oa=/\s*!important$/;function Zr(e,t,n){if(j(n))n.forEach(r=>Zr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Qf(e,t);Oa.test(n)?e.setProperty($t(r),n.replace(Oa,""),"important"):e[r]=n}}const Ea=["Webkit","Moz","ms"],Er={};function Qf(e,t){const n=Er[t];if(n)return n;let r=He(t);if(r!=="filter"&&r in e)return Er[t]=r;r=sr(r);for(let i=0;i<Ea.length;i++){const a=Ea[i]+r;if(a in e)return Er[t]=a}return t}const Ca="http://www.w3.org/1999/xlink";function ec(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ca,t.slice(6,t.length)):e.setAttributeNS(Ca,t,n);else{const a=tl(t);n==null||a&&!xo(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function tc(e,t,n,r,i,a,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,i,a),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const f=s==="OPTION"?e.getAttribute("value"):e.value,u=n??"";f!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=xo(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Pt(e,t,n,r){e.addEventListener(t,n,r)}function nc(e,t,n,r){e.removeEventListener(t,n,r)}function rc(e,t,n,r,i=null){const a=e._vei||(e._vei={}),o=a[t];if(r&&o)o.value=r;else{const[s,l]=ic(t);if(r){const f=a[t]=sc(r,i);Pt(e,s,f,l)}else o&&(nc(e,s,o,l),a[t]=void 0)}}const Pa=/(?:Once|Passive|Capture)$/;function ic(e){let t;if(Pa.test(e)){t={};let r;for(;r=e.match(Pa);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):$t(e.slice(2)),t]}let Cr=0;const ac=Promise.resolve(),oc=()=>Cr||(ac.then(()=>Cr=0),Cr=Date.now());function sc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ze(lc(r,n.value),t,5,[r])};return n.value=e,n.attached=oc(),n}function lc(e,t){if(j(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const Ia=/^on[a-z]/,fc=(e,t,n,r,i=!1,a,o,s,l)=>{t==="class"?Gf(e,r,i):t==="style"?Zf(e,n,r):ir(t)?hi(t)||rc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):cc(e,t,r,i))?tc(e,t,r,a,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ec(e,t,r,i))};function cc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ia.test(t)&&$(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ia.test(t)&&ce(n)?!1:t in e}const Sa=e=>{const t=e.props["onUpdate:modelValue"]||!1;return j(t)?n=>Dn(t,n):t};function uc(e){e.target.composing=!0}function Ta(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Cn={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e._assign=Sa(i);const a=r||i.props&&i.props.type==="number";Pt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),a&&(s=jr(s)),e._assign(s)}),n&&Pt(e,"change",()=>{e.value=e.value.trim()}),t||(Pt(e,"compositionstart",uc),Pt(e,"compositionend",Ta),Pt(e,"change",Ta))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},a){if(e._assign=Sa(a),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(i||e.type==="number")&&jr(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},dc=de({patchProp:fc},Jf);let Na;function mc(){return Na||(Na=Pf(dc))}const pc=(...e)=>{const t=mc().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=hc(r);if(!i)return;const a=t._component;!$(a)&&!a.render&&!a.template&&(a.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function hc(e){return ce(e)?document.querySelector(e):e}const gc=(e,t)=>t.some(n=>e instanceof n);let Ma,La;function vc(){return Ma||(Ma=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bc(){return La||(La=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cs=new WeakMap,Qr=new WeakMap,us=new WeakMap,Pr=new WeakMap,Fi=new WeakMap;function yc(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",a),e.removeEventListener("error",o)},a=()=>{n(at(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",a),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&cs.set(n,e)}).catch(()=>{}),Fi.set(t,e),t}function xc(e){if(Qr.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",o),e.removeEventListener("abort",o)},a=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",a),e.addEventListener("error",o),e.addEventListener("abort",o)});Qr.set(e,t)}let ei={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Qr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||us.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return at(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function wc(e){ei=e(ei)}function _c(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ir(this),t,...n);return us.set(r,t.sort?t.sort():[t]),at(r)}:bc().includes(e)?function(...t){return e.apply(Ir(this),t),at(cs.get(this))}:function(...t){return at(e.apply(Ir(this),t))}}function kc(e){return typeof e=="function"?_c(e):(e instanceof IDBTransaction&&xc(e),gc(e,vc())?new Proxy(e,ei):e)}function at(e){if(e instanceof IDBRequest)return yc(e);if(Pr.has(e))return Pr.get(e);const t=kc(e);return t!==e&&(Pr.set(e,t),Fi.set(t,e)),t}const Ir=e=>Fi.get(e);function Ac(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const o=indexedDB.open(e,t),s=at(o);return r&&o.addEventListener("upgradeneeded",l=>{r(at(o.result),l.oldVersion,l.newVersion,at(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),s.then(l=>{a&&l.addEventListener("close",()=>a()),i&&l.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),s}const Oc=["get","getKey","getAll","getAllKeys","count"],Ec=["put","add","delete","clear"],Sr=new Map;function Fa(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Sr.get(t))return Sr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Ec.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Oc.includes(n)))return;const a=async function(o,...s){const l=this.transaction(o,i?"readwrite":"readonly");let f=l.store;return r&&(f=f.index(s.shift())),(await Promise.all([f[n](...s),i&&l.done]))[0]};return Sr.set(t,a),a}wc(e=>({...e,get:(t,n,r)=>Fa(t,n)||e.get(t,n,r),has:(t,n)=>!!Fa(t,n)||e.has(t,n)}));function hr(){return new Promise((e,t)=>{const n=Ac("noteDB",1,{upgrade(r){r.createObjectStore("note",{keyPath:"id",autoIncrement:!0}).createIndex("strengthIndex","strength")}});e(n)})}async function Cc(e,t){const n=await hr();n.add("note",{title:e,description:t}),await n.transaction("note").store.openCursor()}async function za(){return await(await hr()).getAll("note")}async function Pc(e){(await hr()).delete("note",e)}async function Ic(e,t,n){await(await hr()).put("note",{id:e,title:t,description:n})}function Tr(e,t){return typeof e>"u"?t:e}function Ra(e){const t=Array(e);for(let n=0;n<e;n++)t[n]=Ae();return t}function Sc(e){return Object.keys(e)}function Ae(){return Object.create(null)}function Tc(e){return[].concat.apply([],e)}function Nc(e,t){return t.length-e.length}function Mc(e){return e.constructor===Array}function Zn(e){return typeof e=="string"}function ti(e){return typeof e=="object"}function Lc(e){return typeof e=="function"}function Fc(e,t,n,r){if(e&&(t&&(e=Nr(e,t)),this.matcher&&(e=Nr(e,this.matcher)),this.stemmer&&1<e.length&&(e=Nr(e,this.stemmer)),r&&1<e.length&&(e=jc(e)),n||n==="")){const i=e.split(n);return this.filter?Dc(i,this.filter):i}return e}const zc=/[\p{Z}\p{S}\p{P}\p{C}]+/u;function Rc(e){const t=Ae();for(let n=0,r=e.length;n<r;n++)t[e[n]]=1;return t}function ja(e,t){const n=Sc(e),r=n.length,i=[];let a="",o=0;for(let s,l,f=0;f<r;f++)s=n[f],l=e[s],l?(i[o++]=Da(t?"(?!\\b)"+s+"(\\b|_)":s),i[o++]=l):a+=(a?"|":"")+s;return a&&(i[o++]=Da(t?"(?!\\b)("+a+")(\\b|_)":"("+a+")"),i[o]=""),i}function Nr(e,t){for(let n=0,r=t.length;n<r&&(e=e.replace(t[n],t[n+1]),!!e);n+=2);return e}function Da(e){return new RegExp(e,"g")}function jc(e){let t="",n="";for(let r,i=0,a=e.length;i<a;i++)(r=e[i])!==n&&(t+=n=r);return t}function Dc(e,t){const n=e.length,r=[];for(let i=0,a=0;i<n;i++){const o=e[i];o&&!t[o]&&(r[a++]=o)}return r}function $c(e){return Fc.call(this,(""+e).toLowerCase(),!1,zc,!1)}const Bc={},Uc={};function Hc(e){Kt(e,"add"),Kt(e,"append"),Kt(e,"search"),Kt(e,"update"),Kt(e,"remove")}function Kt(e,t){e[t+"Async"]=function(){const n=this,r=arguments,i=r[r.length-1];let a;Lc(i)&&(a=i,delete r[r.length-1]);const o=new Promise(function(s){setTimeout(function(){n.async=!0;const l=n[t].apply(n,r);n.async=!1,s(l)})});return a?(o.then(a),this):o}}function Wc(e,t,n,r){const i=e.length;let a,o,s=[],l=0;r&&(r=[]);for(let f=i-1;0<=f;f--){const u=e[f],m=u.length,p=Ae();let g=!a;for(let A=0;A<m;A++){const E=u[A],M=E.length;if(M)for(let w,x,L=0;L<M;L++)if(x=E[L],a){if(a[x]){if(!f){if(n)n--;else if(s[l++]=x,l===t)return s}(f||r)&&(p[x]=1),g=!0}if(r&&(w=(o[x]||0)+1,o[x]=w,w<i)){const P=r[w-2]||(r[w-2]=[]);P[P.length]=x}}else p[x]=1}if(r)a||(o=p);else if(!g)return[];a=p}if(r)for(let f,u,m=r.length-1;0<=m;m--){f=r[m],u=f.length;for(let p,g=0;g<u;g++)if(p=f[g],!a[p]){if(n)n--;else if(s[l++]=p,l===t)return s;a[p]=1}}return s}function Wn(e){this.limit=e!==!0&&e,this.cache=Ae(),this.queue=[]}function Yc(e,t,n){ti(e)&&(e=e.query);let r=this.cache.get(e);return r||(r=this.search(e,t,n),this.cache.set(e,r)),r}Wn.prototype.set=function(e,t){if(!this.cache[e]){let n=this.queue.length;n===this.limit?delete this.cache[this.queue[n-1]]:n++;for(let r=n-1;0<r;r--)this.queue[r]=this.queue[r-1];this.queue[0]=e}this.cache[e]=t},Wn.prototype.get=function(e){const t=this.cache[e];if(this.limit&&t){const n=this.queue.indexOf(e);if(n){const r=this.queue[n-1];this.queue[n-1]=this.queue[n],this.queue[n]=r}}return t},Wn.prototype.del=function(e){for(let t,n,r=0;r<this.queue.length;r++)n=this.queue[r],t=this.cache[n],t.includes(e)&&(this.queue.splice(r--,1),delete this.cache[n])};const Kc={memory:{charset:"latin:extra",resolution:3,minlength:4,fastupdate:!1},performance:{resolution:3,minlength:3,optimize:!1,context:{depth:2,resolution:1}},match:{charset:"latin:extra",tokenize:"reverse"},score:{charset:"latin:advanced",resolution:20,minlength:3,context:{depth:3,resolution:9}},default:{}};function qc(e){if(Zn(e))e=Kc[e];else{const t=e.preset;t&&(e=Object.assign({},t[t],e))}return e}function Vc(e,t,n,r,i,a,o){setTimeout(function(){const s=e(n?n+"."+r:r,JSON.stringify(o));s&&s.then?s.then(function(){t.export(e,t,n,i,a+1)}):t.export(e,t,n,i,a+1)})}function Xc(e,t,n,r,i){let a,o;switch(i||(i=0)){case 0:if(a="reg",this.fastupdate)for(let s in o=Ae(),this.register)o[s]=1;else o=this.register;break;case 1:a="cfg",o={doc:0,opt:this.optimize?1:0};break;case 2:a="map",o=this.map;break;case 3:a="ctx",o=this.ctx;break;default:return}return Vc(e,t||this,n,a,r,i,o),!0}function Jc(e,t){t&&(Zn(t)&&(t=JSON.parse(t)),e==="cfg"?this.optimize=!!t.opt:e==="reg"?(this.fastupdate=!1,this.register=t):e==="map"?this.map=t:e==="ctx"&&(this.ctx=t))}function xe(e,t){if(!(this instanceof xe))return new xe(e);let n,r,i;e?(e=qc(e),n=e.charset,r=e.lang,Zn(n)&&(n.indexOf(":")===-1&&(n+=":default"),n=Uc[n]),Zn(r)&&(r=Bc[r])):e={};let a,o,s=e.context||{};this.encode=e.encode||n&&n.encode||$c,this.register=t||Ae(),this.resolution=a=e.resolution||9,this.tokenize=i=n&&n.tokenize||e.tokenize||"strict",this.depth=i==="strict"&&s.depth,this.bidirectional=Tr(s.bidirectional,!0),this.optimize=o=Tr(e.optimize,!0),this.fastupdate=Tr(e.fastupdate,!0),this.minlength=e.minlength||1,this.boost=e.boost,this.map=o?Ra(a):Ae(),this.resolution_ctx=a=s.resolution||1,this.ctx=o?Ra(a):Ae(),this.rtl=n&&n.rtl||e.rtl,this.matcher=(i=e.matcher||r&&r.matcher)&&ja(i,!1),this.stemmer=(i=e.stemmer||r&&r.stemmer)&&ja(i,!0),this.filter=(i=e.filter||r&&r.filter)&&Rc(i),this.cache=(i=e.cache)&&new Wn(i)}xe.prototype.append=function(e,t){return this.add(e,t,!0)},xe.prototype.add=function(e,t,n,r){if(t&&(e||e===0)){if(!r&&!n&&this.register[e])return this.update(e,t);t=this.encode(""+t);const i=t.length;if(i){const a=Ae(),o=Ae(),s=this.depth,l=this.resolution;for(let f=0;f<i;f++){let u=t[this.rtl?i-1-f:f],m=u.length;if(u&&m>=this.minlength&&(s||!o[u])){let p=Pn(l,i,f),g="";switch(this.tokenize){case"full":if(2<m){for(let A=0;A<m;A++)for(let E=m;E>A;E--)if(E-A>=this.minlength){const M=Pn(l,i,f,m,A);g=u.substring(A,E),this.push_index(o,g,M,e,n)}break}case"reverse":if(1<m){for(let A=m-1;0<A;A--)if(g=u[A]+g,g.length>=this.minlength){const E=Pn(l,i,f,m,A);this.push_index(o,g,E,e,n)}g=""}case"forward":if(1<m){for(let A=0;A<m;A++)g+=u[A],g.length>=this.minlength&&this.push_index(o,g,p,e,n);break}default:if(this.boost&&(p=Math.min(0|p/this.boost(t,u,f),l-1)),this.push_index(o,u,p,e,n),s&&1<i&&f<i-1){const A=Ae(),E=this.resolution_ctx,M=u,w=Math.min(s+1,i-f);A[M]=1;for(let x=1;x<w;x++)if(u=t[this.rtl?i-1-f-x:f+x],u&&u.length>=this.minlength&&!A[u]){A[u]=1;const L=Pn(E+(i/2>E?0:1),i,f,w-1,x-1),P=this.bidirectional&&u>M;this.push_index(a,P?M:u,L,e,n,P?u:M)}}}}}this.fastupdate||(this.register[e]=1)}}return this};function Pn(e,t,n,r,i){return n&&1<e?t+(r||0)<=e?n+(i||0):0|(e-1)/(t+(r||0))*(n+(i||0))+1:0}xe.prototype.push_index=function(e,t,n,r,i,a){let o=a?this.ctx:this.map;if((!e[t]||a&&!e[t][a])&&(this.optimize&&(o=o[n]),a?(e=e[t]||(e[t]=Ae()),e[a]=1,o=o[a]||(o[a]=Ae())):e[t]=1,o=o[t]||(o[t]=[]),this.optimize||(o=o[n]||(o[n]=[])),(!i||!o.includes(r))&&(o[o.length]=r,this.fastupdate))){const s=this.register[r]||(this.register[r]=[]);s[s.length]=o}},xe.prototype.search=function(e,t,n){n||(!t&&ti(e)?(n=e,e=n.query):ti(t)&&(n=t));let r,i,a,o=[],s=0;if(n&&(e=n.query||e,t=n.limit,s=n.offset||0,i=n.context,a=n.suggest),e&&(e=this.encode(""+e),r=e.length,1<r)){const m=Ae(),p=[];for(let g,A=0,E=0;A<r;A++)if(g=e[A],g&&g.length>=this.minlength&&!m[g]){if(!this.optimize&&!a&&!this.map[g])return o;p[E++]=g,m[g]=1}e=p,r=e.length}if(!r)return o;t||(t=100);let l,f=this.depth&&1<r&&i!==!1,u=0;f?(l=e[0],u=1):1<r&&e.sort(Nc);for(let m,p;u<r;u++){if(p=e[u],f?(m=this.add_result(o,a,t,s,r===2,p,l),(!a||m!==!1||!o.length)&&(l=p)):m=this.add_result(o,a,t,s,r===1,p),m)return m;if(a&&u==r-1){let g=o.length;if(!g){if(f){f=0,u=-1;continue}return o}if(g===1)return $a(o[0],t,s)}}return Wc(o,t,s,a)},xe.prototype.add_result=function(e,t,n,r,i,a,o){let s=[],l=o?this.ctx:this.map;if(this.optimize||(l=Ba(l,a,o,this.bidirectional)),l){let f=0;const u=Math.min(l.length,o?this.resolution_ctx:this.resolution);for(let m,p,g=0,A=0;g<u&&(m=l[g],!(m&&(this.optimize&&(m=Ba(m,a,o,this.bidirectional)),r&&m&&i&&(p=m.length,p<=r?(r-=p,m=null):(m=m.slice(r),r=0)),m&&(s[f++]=m,i&&(A+=m.length,A>=n)))));g++);if(f)return i?$a(s,n,0):void(e[e.length]=s)}return!t&&s};function $a(e,t,n){return e=e.length===1?e[0]:Tc(e),n||e.length>t?e.slice(n,n+t):e}function Ba(e,t,n,r){if(n){const i=r&&t>n;e=e[i?t:n],e=e&&e[i?n:t]}else e=e[t];return e}xe.prototype.contain=function(e){return!!this.register[e]},xe.prototype.update=function(e,t){return this.remove(e).add(e,t)},xe.prototype.remove=function(e,t){const n=this.register[e];if(n){if(this.fastupdate)for(let r,i=0;i<n.length;i++)r=n[i],r.splice(r.indexOf(e),1);else Qn(this.map,e,this.resolution,this.optimize),this.depth&&Qn(this.ctx,e,this.resolution_ctx,this.optimize);t||delete this.register[e],this.cache&&this.cache.del(e)}return this};function Qn(e,t,n,r,i){let a=0;if(Mc(e))if(i){const o=e.indexOf(t);o===-1?a++:1<e.length&&(e.splice(o,1),a++)}else{i=Math.min(e.length,n);for(let o,s=0;s<i;s++)o=e[s],o&&(a=Qn(o,t,n,r,i),!r&&!a&&delete e[s])}else for(let o in e)a=Qn(e[o],t,n,r,i),a||delete e[o];return a}xe.prototype.searchCache=Yc,xe.prototype.export=Xc,xe.prototype.import=Jc,Hc(xe.prototype);const Gc={class:""},Zc={key:0},Qc={key:0,class:"sticky w-full top-0 bg-white p-2 drop-shadow shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] dark:bg-zinc-900 mb-2"},eu={class:"flex justify-center bg-gray-100 p-2 rounded-md dark:bg-zinc-800"},tu={key:0},nu=["value"],ru={key:1,class:"flex flex-col w-full dark:bg-zinc-900 p-[2rem] py-0"},iu={class:"grid xl:grid-cols-9 xl:gap-4 md:grid-cols-5 md:gap-3 ph:grid-cols-2 ph:gap-2 dark:bg-zinc-900"},au=["onClick"],ou={class:"font-normal text-start dark:bg-zinc-900"},su={key:2,class:"w-full flex flex-col dark:bg-zinc-900 p-[2rem] py-0 pt-2"},lu={key:0,class:"flex justify-center"},fu={class:"w-[30rem] shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] hover:shadow-[0_7px_15px_1px_rgba(0,0,0,0.5)] p-1 rounded-md dark:bg-zinc-900 mb-2"},cu={key:0,class:"grid grid-cols-2"},uu={key:1},du={key:1,class:"grid xl:grid-cols-7 xl:gap-4 md:grid-cols-5 md:gap-3 ph:grid-cols-2 ph:gap-2 dark:bg-zinc-900 pb-4"},mu=["onClick"],pu={class:"font-normal text-left dark:bg-zinc-900"},hu={key:2,class:"fixed bottom-0 rigth-0 pb-4 place-self-end"},gu={key:3,class:"p-[2rem]"},vu={class:"grid grid-cols-2"},bu=["value"],yu=["value"],xu={key:4,class:"p-[2rem]"},wu={class:"grid grid-cols-2"},_u={key:5,class:"relative z-10","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},ku=B("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),Au=B("div",null,null,-1),Ou={class:"fixed inset-0 z-10 overflow-y-auto"},Eu={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},Cu={class:"relative transform overflow-hidden rounded-lg bg-white- text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"},Pu={class:"bg-white dark:bg-zinc-900 mb-2 px-4 pb-4 pt-5 sm:p-6 sm:pb-4"},Iu={class:"sm:flex sm:items-start"},Su={class:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"},Tu={class:"grid grid-cols-2"},Nu=["value"],Mu=["value"],Lu=B("div",{class:"mt-2"},null,-1),Fu={key:1,class:"grid content-center h-screen w-screen"},zu={class:"w-80 h-80 grid content-center justify-self-center justify-items-center"},Ru=B("h1",{class:"font-bold"},"Crie sua primeira Nota",-1),ju={__name:"App",setup(e){const t=be(""),n=be(""),r=be([]),i=be(!1),a=be([]),o=be([]),s=be(!1),l=be(window.innerWidth),f=be(""),u=be(""),m=be([]),p=be(!1),g=be(),A=be(!1),E=new xe({tokenize:"full"}),M=be(!1);async function w(){if(g.value!=u.value)if(g.value=u.value,u.value.length>0){p.value=!0,m.value=[];const S=E.search(u.value),Y=S.length;for(let R=0;R<Y;R++){const pe=S[R],Qe=o.value.find(fe=>fe.id==pe).title,gn=o.value.find(fe=>fe.id==pe).description;m.value.push([{id:pe,title:Qe,description:gn}])}}else m.value.length>0&&(p.value=!0)}const x=()=>{m.value="",u.value="",p.value=!1};function L(){l.value=window.innerWidth,l.value<500?f.value=!0:f.value=!1}const P=V=>{const S=o.value.length;for(let Y=0;Y<S;Y++)if(o.value[Y].id===V){r.value="";const pe=o.value[Y].title,Qe=o.value[Y].description;r.value=[V,pe,Qe],a.value=[V,pe,Qe],i.value=!0}};async function H(){o.value=await za();const V=o.value.length;for(let S=0;S<V;S++){const Y=o.value[S].title,R=o.value[S].description,pe=o.value[S].id;E.add(pe,Y),E.append(pe,R)}V==0&&(M.value=!0)}async function ae(V){const S=t.value,Y=n.value;if(S!=""||Y!=""){await Cc(S,Y);const R=await za();o.value=R,t.value="",n.value="",s.value=!1,M.value=!1,H()}else o.value==""&&(M.value=!0);A.value=!1}const le=()=>{const V=r.value[0];Pc(V),E.remove(V),H(),g.value=null,w(),i.value=!1},we=()=>{const V=r.value[0],S=r.value[1],Y=r.value[2];Ic(V,S,Y),H(),w(),i.value=!1};return Vo(()=>{H(),window.addEventListener("resize",L),L()}),(V,S)=>{const Y=uf("font-awesome-icon");return re(),oe("section",Gc,[!M.value||!f.value?(re(),oe("div",Zc,[!i.value&&!M.value||i.value&&!f.value&&!M.value?(re(),oe("nav",Qc,[B("div",eu,[p.value?(re(),oe("span",tu,[B("button",{onClick:x},[ee(Y,{icon:"fa-solid fa-arrow-left"})])])):he("",!0),B("input",ss(w(),{value:u.value,onInput:S[0]||(S[0]=R=>u.value=R.target.value),placeholder:"Pesquise suas notas",class:"bg-gray-100 break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-800"}),null,16,nu)])])):he("",!0),!A.value&&!i.value?(re(),oe("div",ru,[B("div",iu,[(re(!0),oe(Te,null,ua(m.value,R=>(re(),oe("div",{class:"container shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] p-2 rounded-md mt-2 content-start break-words font-semibold hover:shadow-[0_7px_15px_1px_rgba(0,0,0,0.5)] dark:bg-zinc-900",key:R,onClick:pe=>(P(R[0].id),s.value=!1)},[Gr(yn(R[0].title)+" ",1),B("p",ou,yn(R[0].description),1)],8,au))),128))])])):he("",!0),p.value?he("",!0):(re(),oe("div",su,[f.value?he("",!0):(re(),oe("div",lu,[B("div",fu,[s.value?(re(),oe("div",cu,[B("button",{class:"place-self-start",onClick:S[1]||(S[1]=R=>(ae(Vt(E)),s.value=!1,i.value=!1))},[ee(Y,{icon:"fa-solid fa-arrow-left"})]),t.value||n.value?(re(),oe("button",{key:0,onClick:S[2]||(S[2]=R=>(s.value=!1,t.value=null,n.value=null)),class:"place-self-end"},[ee(Y,{icon:"fa-solid fa-trash",style:{color:"#707070"}})])):he("",!0)])):he("",!0),En(B("input",{onClick:S[3]||(S[3]=R=>s.value=!0),id:"title",type:"text","onUpdate:modelValue":S[4]||(S[4]=R=>t.value=R),placeholder:"Crie um título para sua nota",class:"text-lg font-medium break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900"},null,512),[[Cn,t.value]]),s.value?(re(),oe("div",uu,[En(B("textarea",{"onUpdate:modelValue":S[5]||(S[5]=R=>n.value=R),rows:"5",autoResize:"",class:"m-1 overflow-auto focus:outline-none w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-zinc-900",placeholder:"Criar uma nota",required:"",style:{}},null,512),[[Cn,n.value]])])):he("",!0)])])),!i.value||i.value&&!f.value?(re(),oe("div",du,[(re(!0),oe(Te,null,ua(o.value,R=>(re(),oe("div",{class:"container shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] p-2 rounded-md mt-2 content-start break-words font-semibold hover:shadow-[0_7px_15px_1px_rgba(0,0,0,0.5)] dark:bg-zinc-900 dark:shadow-none dark:border-2 dark:border-gray-700",key:R,onClick:pe=>(P(R.id),s.value=!1)},[Gr(yn(R.title)+" ",1),B("p",pu,yn(R.description),1)],8,mu))),128))])):he("",!0),f.value&&!p.value&&!M.value&&!i.value?(re(),oe("footer",hu,[B("button",{onClick:S[6]||(S[6]=R=>(A.value=!0,i.value=!0))},[ee(Y,{icon:"fa-solid fa-circle-plus",size:"2xl"})])])):he("",!0)])),i.value&&!A.value&&f.value?(re(),oe("div",gu,[B("div",vu,[B("button",{class:"place-self-start",onClick:S[7]||(S[7]=R=>(ae(Vt(E)),we(),i.value=!1))},[ee(Y,{icon:"fa-solid fa-arrow-left"})]),B("button",{onClick:S[8]||(S[8]=R=>(i.value=!1,le())),class:"place-self-end"},[ee(Y,{icon:"fa-solid fa-trash",style:{color:"#707070"}})])]),B("input",{value:r.value[1],onInput:S[9]||(S[9]=R=>r.value[1]=R.target.value),placeholder:"Título",class:"text-2xl font-bold break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900"},null,40,bu),B("textarea",{value:r.value[2],onInput:S[10]||(S[10]=R=>r.value[2]=R.target.value),rows:"35",class:"overflow-auto focus:outline-none w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-zinc-900 m-1",placeholder:"Nota",required:"",style:{}},null,40,yu)])):he("",!0),A.value?(re(),oe("div",xu,[B("div",wu,[B("button",{onClick:S[11]||(S[11]=R=>(ae(Vt(E)),i.value=!1)),class:"place-self-start"},[ee(Y,{icon:"fa-solid fa-arrow-left"})]),t.value||n.value?(re(),oe("button",{key:0,onClick:S[12]||(S[12]=R=>(A.value=!1,i.value=!1,t.value=null,n.value=null)),class:"place-self-end"},[ee(Y,{icon:"fa-solid fa-trash",style:{color:"#707070"}})])):he("",!0)]),En(B("input",{type:"text","onUpdate:modelValue":S[13]||(S[13]=R=>t.value=R),placeholder:"Título",class:"text-2xl font-bold break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900"},null,512),[[Cn,t.value]]),En(B("textarea",{"onUpdate:modelValue":S[14]||(S[14]=R=>n.value=R),rows:"35",class:"overflow-auto focus:outline-none w-full px-0 text-sm text-gray-900 m-2 bg-white border-0 dark:bg-zinc-900",placeholder:"Nota",required:"",style:{}},null,512),[[Cn,n.value]])])):he("",!0),i.value&&!A.value&&!f.value?(re(),oe("div",_u,[ku,Au,B("div",Ou,[B("div",Eu,[B("div",Cu,[B("div",Pu,[B("div",Iu,[B("div",Su,[B("div",Tu,[B("button",{class:"place-self-start",onClick:S[15]||(S[15]=R=>(ae(Vt(E)),we(),i.value=!1))},[ee(Y,{icon:"fa-solid fa-arrow-left"})]),B("button",{onClick:S[16]||(S[16]=R=>(i.value=!1,le())),class:"place-self-end"},[ee(Y,{icon:"fa-solid fa-trash",style:{color:"#707070"}})])]),B("input",{value:r.value[1],onInput:S[17]||(S[17]=R=>r.value[1]=R.target.value),placeholder:"Título",class:"text-2xl font-bold break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900"},null,40,Nu),B("textarea",{value:r.value[2],onInput:S[18]||(S[18]=R=>r.value[2]=R.target.value),rows:"35",class:"overflow-auto focus:outline-none w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-zinc-900 m-1",placeholder:"Nota",required:"",style:{}},null,40,Mu),Lu])])])])])])])):he("",!0)])):he("",!0),M.value&&!i.value&&f.value?(re(),oe("div",Fu,[B("div",zu,[Ru,B("button",{onClick:S[19]||(S[19]=R=>(A.value=!0,i.value=!0,M.value=!1))},[ee(Y,{icon:"fa-solid fa-circle-plus",size:"2xl",class:"m-2"})])])])):he("",!0)])}}};function Ua(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ua(Object(n),!0).forEach(function(r){ue(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ua(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function er(e){"@babel/helpers - typeof";return er=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},er(e)}function Du(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ha(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $u(e,t,n){return t&&Ha(e.prototype,t),n&&Ha(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zi(e,t){return Uu(e)||Wu(e,t)||ds(e,t)||Ku()}function mn(e){return Bu(e)||Hu(e)||ds(e)||Yu()}function Bu(e){if(Array.isArray(e))return ni(e)}function Uu(e){if(Array.isArray(e))return e}function Hu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Wu(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function ds(e,t){if(e){if(typeof e=="string")return ni(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ni(e,t)}}function ni(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Yu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ku(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Wa=function(){},Ri={},ms={},ps=null,hs={mark:Wa,measure:Wa};try{typeof window<"u"&&(Ri=window),typeof document<"u"&&(ms=document),typeof MutationObserver<"u"&&(ps=MutationObserver),typeof performance<"u"&&(hs=performance)}catch{}var qu=Ri.navigator||{},Ya=qu.userAgent,Ka=Ya===void 0?"":Ya,st=Ri,Q=ms,qa=ps,In=hs;st.document;var Ze=!!Q.documentElement&&!!Q.head&&typeof Q.addEventListener=="function"&&typeof Q.createElement=="function",gs=~Ka.indexOf("MSIE")||~Ka.indexOf("Trident/"),Sn,Tn,Nn,Mn,Ln,Ve="___FONT_AWESOME___",ri=16,vs="fa",bs="svg-inline--fa",kt="data-fa-i2svg",ii="data-fa-pseudo-element",Vu="data-fa-pseudo-element-pending",ji="data-prefix",Di="data-icon",Va="fontawesome-i2svg",Xu="async",Ju=["HTML","HEAD","STYLE","SCRIPT"],ys=function(){try{return!0}catch{return!1}}(),Z="classic",ie="sharp",$i=[Z,ie];function pn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Z]}})}var ln=pn((Sn={},ue(Sn,Z,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ue(Sn,ie,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Sn)),fn=pn((Tn={},ue(Tn,Z,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ue(Tn,ie,{solid:"fass",regular:"fasr",light:"fasl"}),Tn)),cn=pn((Nn={},ue(Nn,Z,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ue(Nn,ie,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Nn)),Gu=pn((Mn={},ue(Mn,Z,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ue(Mn,ie,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Mn)),Zu=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,xs="fa-layers-text",Qu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ed=pn((Ln={},ue(Ln,Z,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ue(Ln,ie,{900:"fass",400:"fasr",300:"fasl"}),Ln)),ws=[1,2,3,4,5,6,7,8,9,10],td=ws.concat([11,12,13,14,15,16,17,18,19,20]),nd=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],bt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},un=new Set;Object.keys(fn[Z]).map(un.add.bind(un));Object.keys(fn[ie]).map(un.add.bind(un));var rd=[].concat($i,mn(un),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",bt.GROUP,bt.SWAP_OPACITY,bt.PRIMARY,bt.SECONDARY]).concat(ws.map(function(e){return"".concat(e,"x")})).concat(td.map(function(e){return"w-".concat(e)})),Qt=st.FontAwesomeConfig||{};function id(e){var t=Q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ad(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Q&&typeof Q.querySelector=="function"){var od=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];od.forEach(function(e){var t=zi(e,2),n=t[0],r=t[1],i=ad(id(n));i!=null&&(Qt[r]=i)})}var _s={styleDefault:"solid",familyDefault:"classic",cssPrefix:vs,replacementClass:bs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Qt.familyPrefix&&(Qt.cssPrefix=Qt.familyPrefix);var Dt=I(I({},_s),Qt);Dt.autoReplaceSvg||(Dt.observeMutations=!1);var N={};Object.keys(_s).forEach(function(e){Object.defineProperty(N,e,{enumerable:!0,set:function(n){Dt[e]=n,en.forEach(function(r){return r(N)})},get:function(){return Dt[e]}})});Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(t){Dt.cssPrefix=t,en.forEach(function(n){return n(N)})},get:function(){return Dt.cssPrefix}});st.FontAwesomeConfig=N;var en=[];function sd(e){return en.push(e),function(){en.splice(en.indexOf(e),1)}}var tt=ri,Ue={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ld(e){if(!(!e||!Ze)){var t=Q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Q.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return Q.head.insertBefore(t,r),e}}var fd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function dn(){for(var e=12,t="";e-- >0;)t+=fd[Math.random()*62|0];return t}function Ht(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Bi(e){return e.classList?Ht(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ks(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function cd(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ks(e[n]),'" ')},"").trim()}function gr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ui(e){return e.size!==Ue.size||e.x!==Ue.x||e.y!==Ue.y||e.rotate!==Ue.rotate||e.flipX||e.flipY}function ud(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:f}}function dd(e){var t=e.transform,n=e.width,r=n===void 0?ri:n,i=e.height,a=i===void 0?ri:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&gs?l+="translate(".concat(t.x/tt-r/2,"em, ").concat(t.y/tt-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/tt,"em), calc(-50% + ").concat(t.y/tt,"em)) "):l+="translate(".concat(t.x/tt,"em, ").concat(t.y/tt,"em) "),l+="scale(".concat(t.size/tt*(t.flipX?-1:1),", ").concat(t.size/tt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var md=`:root, :host {
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
}`;function As(){var e=vs,t=bs,n=N.cssPrefix,r=N.replacementClass,i=md;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var Xa=!1;function Mr(){N.autoAddCss&&!Xa&&(ld(As()),Xa=!0)}var pd={mixout:function(){return{dom:{css:As,insertCss:Mr}}},hooks:function(){return{beforeDOMElementCreation:function(){Mr()},beforeI2svg:function(){Mr()}}}},Xe=st||{};Xe[Ve]||(Xe[Ve]={});Xe[Ve].styles||(Xe[Ve].styles={});Xe[Ve].hooks||(Xe[Ve].hooks={});Xe[Ve].shims||(Xe[Ve].shims=[]);var Le=Xe[Ve],Os=[],hd=function e(){Q.removeEventListener("DOMContentLoaded",e),tr=1,Os.map(function(t){return t()})},tr=!1;Ze&&(tr=(Q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Q.readyState),tr||Q.addEventListener("DOMContentLoaded",hd));function gd(e){Ze&&(tr?setTimeout(e,0):Os.push(e))}function hn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?ks(e):"<".concat(t," ").concat(cd(r),">").concat(a.map(hn).join(""),"</").concat(t,">")}function Ja(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var vd=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},Lr=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=i!==void 0?vd(n,i):n,l,f,u;for(r===void 0?(l=1,u=t[a[0]]):(l=0,u=r);l<o;l++)f=a[l],u=s(u,t[f],f,t);return u};function bd(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function ai(e){var t=bd(e);return t.length===1?t[0].toString(16):null}function yd(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Ga(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function oi(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Ga(t);typeof Le.hooks.addPack=="function"&&!i?Le.hooks.addPack(e,Ga(t)):Le.styles[e]=I(I({},Le.styles[e]||{}),a),e==="fas"&&oi("fa",t)}var Fn,zn,Rn,It=Le.styles,xd=Le.shims,wd=(Fn={},ue(Fn,Z,Object.values(cn[Z])),ue(Fn,ie,Object.values(cn[ie])),Fn),Hi=null,Es={},Cs={},Ps={},Is={},Ss={},_d=(zn={},ue(zn,Z,Object.keys(ln[Z])),ue(zn,ie,Object.keys(ln[ie])),zn);function kd(e){return~rd.indexOf(e)}function Ad(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!kd(i)?i:null}var Ts=function(){var t=function(a){return Lr(It,function(o,s,l){return o[l]=Lr(s,a,{}),o},{})};Es=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),Cs=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),Ss=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in It||N.autoFetchSvg,r=Lr(xd,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});Ps=r.names,Is=r.unicodes,Hi=vr(N.styleDefault,{family:N.familyDefault})};sd(function(e){Hi=vr(e.styleDefault,{family:N.familyDefault})});Ts();function Wi(e,t){return(Es[e]||{})[t]}function Od(e,t){return(Cs[e]||{})[t]}function yt(e,t){return(Ss[e]||{})[t]}function Ns(e){return Ps[e]||{prefix:null,iconName:null}}function Ed(e){var t=Is[e],n=Wi("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function lt(){return Hi}var Yi=function(){return{prefix:null,iconName:null,rest:[]}};function vr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Z:n,i=ln[r][e],a=fn[r][e]||fn[r][i],o=e in Le.styles?e:null;return a||o||null}var Za=(Rn={},ue(Rn,Z,Object.keys(cn[Z])),ue(Rn,ie,Object.keys(cn[ie])),Rn);function br(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},ue(t,Z,"".concat(N.cssPrefix,"-").concat(Z)),ue(t,ie,"".concat(N.cssPrefix,"-").concat(ie)),t),o=null,s=Z;(e.includes(a[Z])||e.some(function(f){return Za[Z].includes(f)}))&&(s=Z),(e.includes(a[ie])||e.some(function(f){return Za[ie].includes(f)}))&&(s=ie);var l=e.reduce(function(f,u){var m=Ad(N.cssPrefix,u);if(It[u]?(u=wd[s].includes(u)?Gu[s][u]:u,o=u,f.prefix=u):_d[s].indexOf(u)>-1?(o=u,f.prefix=vr(u,{family:s})):m?f.iconName=m:u!==N.replacementClass&&u!==a[Z]&&u!==a[ie]&&f.rest.push(u),!i&&f.prefix&&f.iconName){var p=o==="fa"?Ns(f.iconName):{},g=yt(f.prefix,f.iconName);p.prefix&&(o=null),f.iconName=p.iconName||g||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!It.far&&It.fas&&!N.autoFetchSvg&&(f.prefix="fas")}return f},Yi());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ie&&(It.fass||N.autoFetchSvg)&&(l.prefix="fass",l.iconName=yt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=lt()||"fas"),l}var Cd=function(){function e(){Du(this,e),this.definitions={}}return $u(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=I(I({},n.definitions[s]||{}),o[s]),oi(s,o[s]);var l=cn[Z][s];l&&oi(l,o[s]),Ts()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,f=o.icon,u=f[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),Qa=[],St={},Ft={},Pd=Object.keys(Ft);function Id(e,t){var n=t.mixoutsTo;return Qa=e,St={},Object.keys(Ft).forEach(function(r){Pd.indexOf(r)===-1&&delete Ft[r]}),Qa.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),er(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){St[o]||(St[o]=[]),St[o].push(a[o])})}r.provides&&r.provides(Ft)}),n}function si(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=St[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function At(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=St[e]||[];i.forEach(function(a){a.apply(null,n)})}function Je(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ft[e]?Ft[e].apply(null,t):void 0}function li(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||lt();if(t)return t=yt(n,t)||t,Ja(Ms.definitions,n,t)||Ja(Le.styles,n,t)}var Ms=new Cd,Sd=function(){N.autoReplaceSvg=!1,N.observeMutations=!1,At("noAuto")},Td={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ze?(At("beforeI2svg",t),Je("pseudoElements2svg",t),Je("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,gd(function(){Md({autoReplaceSvgRoot:n}),At("watch",t)})}},Nd={icon:function(t){if(t===null)return null;if(er(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:yt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=vr(t[0]);return{prefix:r,iconName:yt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(N.cssPrefix,"-"))>-1||t.match(Zu))){var i=br(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||lt(),iconName:yt(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=lt();return{prefix:a,iconName:yt(a,t)||t}}}},Ce={noAuto:Sd,config:N,dom:Td,parse:Nd,library:Ms,findIconDefinition:li,toHtml:hn},Md=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Q:n;(Object.keys(Le.styles).length>0||N.autoFetchSvg)&&Ze&&N.autoReplaceSvg&&Ce.dom.i2svg({node:r})};function yr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return hn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ze){var r=Q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Ld(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Ui(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};i.style=gr(I(I({},a),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Fd(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(N.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},i),{},{id:o}),children:r}]}]}function Ki(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,u=e.titleId,m=e.extra,p=e.watchable,g=p===void 0?!1:p,A=r.found?r:n,E=A.width,M=A.height,w=i==="fak",x=[N.replacementClass,a?"".concat(N.cssPrefix,"-").concat(a):""].filter(function(V){return m.classes.indexOf(V)===-1}).filter(function(V){return V!==""||!!V}).concat(m.classes).join(" "),L={children:[],attributes:I(I({},m.attributes),{},{"data-prefix":i,"data-icon":a,class:x,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(M)})},P=w&&!~m.classes.indexOf("fa-fw")?{width:"".concat(E/M*16*.0625,"em")}:{};g&&(L.attributes[kt]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(u||dn())},children:[l]}),delete L.attributes.title);var H=I(I({},L),{},{prefix:i,iconName:a,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:I(I({},P),m.styles)}),ae=r.found&&n.found?Je("generateAbstractMask",H)||{children:[],attributes:{}}:Je("generateAbstractIcon",H)||{children:[],attributes:{}},le=ae.children,we=ae.attributes;return H.children=le,H.attributes=we,s?Fd(H):Ld(H)}function eo(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=I(I(I({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(f[kt]="");var u=I({},o.styles);Ui(i)&&(u.transform=dd({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=gr(u);m.length>0&&(f.style=m);var p=[];return p.push({tag:"span",attributes:f,children:[t]}),a&&p.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),p}function zd(e){var t=e.content,n=e.title,r=e.extra,i=I(I(I({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=gr(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Fr=Le.styles;function fi(e){var t=e[0],n=e[1],r=e.slice(4),i=zi(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(N.cssPrefix,"-").concat(bt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(bt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(bt.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var Rd={found:!1,width:512,height:512};function jd(e,t){!ys&&!N.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ci(e,t){var n=t;return t==="fa"&&N.styleDefault!==null&&(t=lt()),new Promise(function(r,i){if(Je("missingIconAbstract"),n==="fa"){var a=Ns(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Fr[t]&&Fr[t][e]){var o=Fr[t][e];return r(fi(o))}jd(e,t),r(I(I({},Rd),{},{icon:N.showMissingIcons&&e?Je("missingIconAbstract")||{}:{}}))})}var to=function(){},ui=N.measurePerformance&&In&&In.mark&&In.measure?In:{mark:to,measure:to},Jt='FA "6.4.0"',Dd=function(t){return ui.mark("".concat(Jt," ").concat(t," begins")),function(){return Ls(t)}},Ls=function(t){ui.mark("".concat(Jt," ").concat(t," ends")),ui.measure("".concat(Jt," ").concat(t),"".concat(Jt," ").concat(t," begins"),"".concat(Jt," ").concat(t," ends"))},qi={begin:Dd,end:Ls},Yn=function(){};function no(e){var t=e.getAttribute?e.getAttribute(kt):null;return typeof t=="string"}function $d(e){var t=e.getAttribute?e.getAttribute(ji):null,n=e.getAttribute?e.getAttribute(Di):null;return t&&n}function Bd(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function Ud(){if(N.autoReplaceSvg===!0)return Kn.replace;var e=Kn[N.autoReplaceSvg];return e||Kn.replace}function Hd(e){return Q.createElementNS("http://www.w3.org/2000/svg",e)}function Wd(e){return Q.createElement(e)}function Fs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Hd:Wd:n;if(typeof e=="string")return Q.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(Fs(o,{ceFn:r}))}),i}function Yd(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Kn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Fs(i),n)}),n.getAttribute(kt)===null&&N.keepOriginalSource){var r=Q.createComment(Yd(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Bi(n).indexOf(N.replacementClass))return Kn.replace(t);var i=new RegExp("".concat(N.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===N.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return hn(s)}).join(`
`);n.setAttribute(kt,""),n.innerHTML=o}};function ro(e){e()}function zs(e,t){var n=typeof t=="function"?t:Yn;if(e.length===0)n();else{var r=ro;N.mutateApproach===Xu&&(r=st.requestAnimationFrame||ro),r(function(){var i=Ud(),a=qi.begin("mutate");e.map(i),a(),n()})}}var Vi=!1;function Rs(){Vi=!0}function di(){Vi=!1}var nr=null;function io(e){if(qa&&N.observeMutations){var t=e.treeCallback,n=t===void 0?Yn:t,r=e.nodeCallback,i=r===void 0?Yn:r,a=e.pseudoElementsCallback,o=a===void 0?Yn:a,s=e.observeMutationsRoot,l=s===void 0?Q:s;nr=new qa(function(f){if(!Vi){var u=lt();Ht(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!no(m.addedNodes[0])&&(N.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&N.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&no(m.target)&&~nd.indexOf(m.attributeName))if(m.attributeName==="class"&&$d(m.target)){var p=br(Bi(m.target)),g=p.prefix,A=p.iconName;m.target.setAttribute(ji,g||u),A&&m.target.setAttribute(Di,A)}else Bd(m.target)&&i(m.target)})}}),Ze&&nr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Kd(){nr&&nr.disconnect()}function qd(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Vd(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=br(Bi(e));return i.prefix||(i.prefix=lt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Od(i.prefix,e.innerText)||Wi(i.prefix,ai(e.innerText))),!i.iconName&&N.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Xd(e){var t=Ht(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return N.autoA11y&&(n?t["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||dn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Jd(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ue,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ao(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Vd(e),r=n.iconName,i=n.prefix,a=n.rest,o=Xd(e),s=si("parseNodeAttributes",{},e),l=t.styleParser?qd(e):[];return I({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Ue,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var Gd=Le.styles;function js(e){var t=N.autoReplaceSvg==="nest"?ao(e,{styleParser:!1}):ao(e);return~t.extra.classes.indexOf(xs)?Je("generateLayersText",e,t):Je("generateSvgReplacementMutation",e,t)}var ft=new Set;$i.map(function(e){ft.add("fa-".concat(e))});Object.keys(ln[Z]).map(ft.add.bind(ft));Object.keys(ln[ie]).map(ft.add.bind(ft));ft=mn(ft);function oo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ze)return Promise.resolve();var n=Q.documentElement.classList,r=function(m){return n.add("".concat(Va,"-").concat(m))},i=function(m){return n.remove("".concat(Va,"-").concat(m))},a=N.autoFetchSvg?ft:$i.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Gd));a.includes("fa")||a.push("fa");var o=[".".concat(xs,":not([").concat(kt,"])")].concat(a.map(function(u){return".".concat(u,":not([").concat(kt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ht(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=qi.begin("onTree"),f=s.reduce(function(u,m){try{var p=js(m);p&&u.push(p)}catch(g){ys||g.name==="MissingIcon"&&console.error(g)}return u},[]);return new Promise(function(u,m){Promise.all(f).then(function(p){zs(p,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(p){l(),m(p)})})}function Zd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;js(e).then(function(n){n&&zs([n],t)})}function Qd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:li(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:li(i||{})),e(r,I(I({},n),{},{mask:i}))}}var em=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Ue:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,f=n.maskId,u=f===void 0?null:f,m=n.title,p=m===void 0?null:m,g=n.titleId,A=g===void 0?null:g,E=n.classes,M=E===void 0?[]:E,w=n.attributes,x=w===void 0?{}:w,L=n.styles,P=L===void 0?{}:L;if(t){var H=t.prefix,ae=t.iconName,le=t.icon;return yr(I({type:"icon"},t),function(){return At("beforeDOMElementCreation",{iconDefinition:t,params:n}),N.autoA11y&&(p?x["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(A||dn()):(x["aria-hidden"]="true",x.focusable="false")),Ki({icons:{main:fi(le),mask:l?fi(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:ae,transform:I(I({},Ue),i),symbol:o,title:p,maskId:u,titleId:A,extra:{attributes:x,styles:P,classes:M}})})}},tm={mixout:function(){return{icon:Qd(em)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=oo,n.nodeCallback=Zd,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?Q:r,a=n.callback,o=a===void 0?function(){}:a;return oo(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,u=r.mask,m=r.maskId,p=r.extra;return new Promise(function(g,A){Promise.all([ci(i,s),u.iconName?ci(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var M=zi(E,2),w=M[0],x=M[1];g([n,Ki({icons:{main:w,mask:x},prefix:s,iconName:i,transform:l,symbol:f,maskId:m,title:a,titleId:o,extra:p,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=gr(s);l.length>0&&(i.style=l);var f;return Ui(o)&&(f=Je("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(f||a.icon),{children:r,attributes:i}}}},nm={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return yr({type:"layer"},function(){At("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(N.cssPrefix,"-layers")].concat(mn(a)).join(" ")},children:o}]})}}}},rm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return yr({type:"counter",content:n},function(){return At("beforeDOMElementCreation",{content:n,params:r}),zd({content:n.toString(),title:a,extra:{attributes:f,styles:m,classes:["".concat(N.cssPrefix,"-layers-counter")].concat(mn(s))}})})}}}},im={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Ue:i,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,p=r.styles,g=p===void 0?{}:p;return yr({type:"text",content:n},function(){return At("beforeDOMElementCreation",{content:n,params:r}),eo({content:n,transform:I(I({},Ue),a),title:s,extra:{attributes:m,styles:g,classes:["".concat(N.cssPrefix,"-layers-text")].concat(mn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(gs){var f=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/f,l=u.height/f}return N.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,eo({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},am=new RegExp('"',"ug"),so=[1105920,1112319];function om(e){var t=e.replace(am,""),n=yd(t,0),r=n>=so[0]&&n<=so[1],i=t.length===2?t[0]===t[1]:!1;return{value:ai(i?t[0]:t),isSecondary:r||i}}function lo(e,t){var n="".concat(Vu).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Ht(e.children),o=a.filter(function(le){return le.getAttribute(ii)===t})[0],s=st.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Qu),f=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?ie:Z,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?fn[p][l[2].toLowerCase()]:ed[p][f],A=om(m),E=A.value,M=A.isSecondary,w=l[0].startsWith("FontAwesome"),x=Wi(g,E),L=x;if(w){var P=Ed(E);P.iconName&&P.prefix&&(x=P.iconName,g=P.prefix)}if(x&&!M&&(!o||o.getAttribute(ji)!==g||o.getAttribute(Di)!==L)){e.setAttribute(n,L),o&&e.removeChild(o);var H=Jd(),ae=H.extra;ae.attributes[ii]=t,ci(x,g).then(function(le){var we=Ki(I(I({},H),{},{icons:{main:le,mask:Yi()},prefix:g,iconName:L,extra:ae,watchable:!0})),V=Q.createElement("svg");t==="::before"?e.insertBefore(V,e.firstChild):e.appendChild(V),V.outerHTML=we.map(function(S){return hn(S)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function sm(e){return Promise.all([lo(e,"::before"),lo(e,"::after")])}function lm(e){return e.parentNode!==document.head&&!~Ju.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ii)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function fo(e){if(Ze)return new Promise(function(t,n){var r=Ht(e.querySelectorAll("*")).filter(lm).map(sm),i=qi.begin("searchPseudoElements");Rs(),Promise.all(r).then(function(){i(),di(),t()}).catch(function(){i(),di(),n()})})}var fm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=fo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Q:r;N.searchPseudoElements&&fo(i)}}},co=!1,cm={mixout:function(){return{dom:{unwatch:function(){Rs(),co=!0}}}},hooks:function(){return{bootstrap:function(){io(si("mutationObserverCallbacks",{}))},noAuto:function(){Kd()},watch:function(n){var r=n.observeMutationsRoot;co?di():io(si("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},uo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},um={mixout:function(){return{parse:{transform:function(n){return uo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=uo(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),f="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(u)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:m,path:p};return{tag:"g",attributes:I({},g.outer),children:[{tag:"g",attributes:I({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:I(I({},r.icon.attributes),g.path)}]}]}}}},zr={x:0,y:0,width:"100%",height:"100%"};function mo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function dm(e){return e.tag==="g"?e.children:[e]}var mm={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?br(i.split(" ").map(function(o){return o.trim()})):Yi();return a.prefix||(a.prefix=lt()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,f=a.width,u=a.icon,m=o.width,p=o.icon,g=ud({transform:l,containerWidth:m,iconWidth:f}),A={tag:"rect",attributes:I(I({},zr),{},{fill:"white"})},E=u.children?{children:u.children.map(mo)}:{},M={tag:"g",attributes:I({},g.inner),children:[mo(I({tag:u.tag,attributes:I(I({},u.attributes),g.path)},E))]},w={tag:"g",attributes:I({},g.outer),children:[M]},x="mask-".concat(s||dn()),L="clip-".concat(s||dn()),P={tag:"mask",attributes:I(I({},zr),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,w]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:dm(p)},P]};return r.push(H,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(x,")")},zr)}),{children:r,attributes:i}}}},pm={provides:function(t){var n=!1;st.matchMedia&&(n=st.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:I(I({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=I(I({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:I(I({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:I(I({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:I(I({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:I(I({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:I(I({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},hm={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},gm=[pd,tm,nm,rm,im,fm,cm,um,mm,pm,hm];Id(gm,{mixoutsTo:Ce});Ce.noAuto;Ce.config;var vm=Ce.library;Ce.dom;var mi=Ce.parse;Ce.findIconDefinition;Ce.toHtml;var bm=Ce.icon;Ce.layer;Ce.text;Ce.counter;function po(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ke(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?po(Object(n),!0).forEach(function(r){_e(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):po(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function rr(e){"@babel/helpers - typeof";return rr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},rr(e)}function _e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ym(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function xm(e,t){if(e==null)return{};var n=ym(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var wm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ds={exports:{}};(function(e){(function(t){var n=function(w,x,L){if(!f(x)||m(x)||p(x)||g(x)||l(x))return x;var P,H=0,ae=0;if(u(x))for(P=[],ae=x.length;H<ae;H++)P.push(n(w,x[H],L));else{P={};for(var le in x)Object.prototype.hasOwnProperty.call(x,le)&&(P[w(le,L)]=n(w,x[le],L))}return P},r=function(w,x){x=x||{};var L=x.separator||"_",P=x.split||/(?=[A-Z])/;return w.split(P).join(L)},i=function(w){return A(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(x,L){return L?L.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},a=function(w){var x=i(w);return x.substr(0,1).toUpperCase()+x.substr(1)},o=function(w,x){return r(w,x).toLowerCase()},s=Object.prototype.toString,l=function(w){return typeof w=="function"},f=function(w){return w===Object(w)},u=function(w){return s.call(w)=="[object Array]"},m=function(w){return s.call(w)=="[object Date]"},p=function(w){return s.call(w)=="[object RegExp]"},g=function(w){return s.call(w)=="[object Boolean]"},A=function(w){return w=w-0,w===w},E=function(w,x){var L=x&&"process"in x?x.process:x;return typeof L!="function"?w:function(P,H){return L(P,w,H)}},M={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(w,x){return n(E(i,x),w)},decamelizeKeys:function(w,x){return n(E(o,x),w,x)},pascalizeKeys:function(w,x){return n(E(a,x),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=M:t.humps=M})(wm)})(Ds);var _m=Ds.exports,km=["class","style"];function Am(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=_m.camelize(n.slice(0,r)),a=n.slice(r+1).trim();return t[i]=a,t},{})}function Om(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function $s(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return $s(l)}),i=Object.keys(e.attributes||{}).reduce(function(l,f){var u=e.attributes[f];switch(f){case"class":l.class=Om(u);break;case"style":l.style=Am(u);break;default:l.attrs[f]=u}return l},{attrs:{},class:{},style:{}});n.class;var a=n.style,o=a===void 0?{}:a,s=xm(n,km);return Yf(e.tag,Ke(Ke(Ke({},t),{},{class:i.class,style:Ke(Ke({},i.style),o)},i.attrs),s),r)}var Bs=!1;try{Bs=!0}catch{}function Em(){if(!Bs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Rr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?_e({},e,t):{}}function Cm(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},_e(t,"fa-".concat(e.size),e.size!==null),_e(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),_e(t,"fa-pull-".concat(e.pull),e.pull!==null),_e(t,"fa-swap-opacity",e.swapOpacity),_e(t,"fa-bounce",e.bounce),_e(t,"fa-shake",e.shake),_e(t,"fa-beat",e.beat),_e(t,"fa-fade",e.fade),_e(t,"fa-beat-fade",e.beatFade),_e(t,"fa-flash",e.flash),_e(t,"fa-spin-pulse",e.spinPulse),_e(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ho(e){if(e&&rr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(mi.icon)return mi.icon(e);if(e===null)return null;if(rr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Pm=Zl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=pt(function(){return ho(t.icon)}),a=pt(function(){return Rr("classes",Cm(t))}),o=pt(function(){return Rr("transform",typeof t.transform=="string"?mi.transform(t.transform):t.transform)}),s=pt(function(){return Rr("mask",ho(t.mask))}),l=pt(function(){return bm(i.value,Ke(Ke(Ke(Ke({},a.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});$n(l,function(u){if(!u)return Em("Could not find one or more icon(s)",i.value,s.value)},{immediate:!0});var f=pt(function(){return l.value?$s(l.value.abstract[0],{},r):null});return function(){return f.value}}}),Im={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},Sm={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},Tm={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},Nm={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Mm={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]};vm.add(Tm,Nm,Im,Mm,Sm);pc(ju).component("font-awesome-icon",Pm).mount("#app");
