(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function pi(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const X={},Nt=[],je=()=>{},Hs=()=>!1,Ws=/^on[^a-z]/,ir=e=>Ws.test(e),gi=e=>e.startsWith("onUpdate:"),de=Object.assign,vi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ys=Object.prototype.hasOwnProperty,U=(e,t)=>Ys.call(e,t),z=Array.isArray,Mt=e=>ar(e)==="[object Map]",go=e=>ar(e)==="[object Set]",$=e=>typeof e=="function",le=e=>typeof e=="string",bi=e=>typeof e=="symbol",Q=e=>e!==null&&typeof e=="object",vo=e=>Q(e)&&$(e.then)&&$(e.catch),bo=Object.prototype.toString,ar=e=>bo.call(e),Ks=e=>ar(e).slice(8,-1),yo=e=>ar(e)==="[object Object]",yi=e=>le(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,zn=pi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),or=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},qs=/-(\w)/g,Ke=or(e=>e.replace(qs,(t,n)=>n?n.toUpperCase():"")),Vs=/\B([A-Z])/g,Bt=or(e=>e.replace(Vs,"-$1").toLowerCase()),sr=or(e=>e.charAt(0).toUpperCase()+e.slice(1)),_r=or(e=>e?`on${sr(e)}`:""),tn=(e,t)=>!Object.is(e,t),jn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},qn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Dr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ta;const $r=()=>ta||(ta=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xi(e){if(z(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=le(r)?Zs(r):xi(r);if(i)for(const a in i)t[a]=i[a]}return t}else{if(le(e))return e;if(Q(e))return e}}const Xs=/;(?![^(]*\))/g,Js=/:([^]+)/,Gs=/\/\*[^]*?\*\//g;function Zs(e){const t={};return e.replace(Gs,"").split(Xs).forEach(n=>{if(n){const r=n.split(Js);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function wi(e){let t="";if(le(e))t=e;else if(z(e))for(let n=0;n<e.length;n++){const r=wi(e[n]);r&&(t+=r+" ")}else if(Q(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Qs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",el=pi(Qs);function xo(e){return!!e||e===""}const bn=e=>le(e)?e:e==null?"":z(e)||Q(e)&&(e.toString===bo||!$(e.toString))?JSON.stringify(e,wo,2):String(e),wo=(e,t)=>t&&t.__v_isRef?wo(e,t.value):Mt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:go(t)?{[`Set(${t.size})`]:[...t.values()]}:Q(t)&&!z(t)&&!yo(t)?String(t):t;let Me;class tl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Me,!t&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Me;try{return Me=this,t()}finally{Me=n}}}on(){Me=this}off(){Me=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function nl(e,t=Me){t&&t.active&&t.effects.push(e)}function rl(){return Me}const _i=e=>{const t=new Set(e);return t.w=0,t.n=0,t},_o=e=>(e.w&lt)>0,ko=e=>(e.n&lt)>0,il=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=lt},al=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];_o(i)&&!ko(i)?i.delete(e):t[n++]=i,i.w&=~lt,i.n&=~lt}t.length=n}},Br=new WeakMap;let Vt=0,lt=1;const Ur=30;let Fe;const wt=Symbol(""),Hr=Symbol("");class ki{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,nl(this,r)}run(){if(!this.active)return this.fn();let t=Fe,n=at;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Fe,Fe=this,at=!0,lt=1<<++Vt,Vt<=Ur?il(this):na(this),this.fn()}finally{Vt<=Ur&&al(this),lt=1<<--Vt,Fe=this.parent,at=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Fe===this?this.deferStop=!0:this.active&&(na(this),this.onStop&&this.onStop(),this.active=!1)}}function na(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let at=!0;const Ao=[];function Ut(){Ao.push(at),at=!1}function Ht(){const e=Ao.pop();at=e===void 0?!0:e}function Oe(e,t,n){if(at&&Fe){let r=Br.get(e);r||Br.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=_i()),Oo(i)}}function Oo(e,t){let n=!1;Vt<=Ur?ko(e)||(e.n|=lt,n=!_o(e)):n=!e.has(Fe),n&&(e.add(Fe),Fe.deps.push(e))}function Je(e,t,n,r,i,a){const o=Br.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&z(e)){const l=Number(r);o.forEach((f,u)=>{(u==="length"||u>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":z(e)?yi(n)&&s.push(o.get("length")):(s.push(o.get(wt)),Mt(e)&&s.push(o.get(Hr)));break;case"delete":z(e)||(s.push(o.get(wt)),Mt(e)&&s.push(o.get(Hr)));break;case"set":Mt(e)&&s.push(o.get(wt));break}if(s.length===1)s[0]&&Wr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Wr(_i(l))}}function Wr(e,t){const n=z(e)?e:[...e];for(const r of n)r.computed&&ra(r);for(const r of n)r.computed||ra(r)}function ra(e,t){(e!==Fe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ol=pi("__proto__,__v_isRef,__isVue"),Eo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(bi)),sl=Ai(),ll=Ai(!1,!0),fl=Ai(!0),ia=cl();function cl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=W(this);for(let a=0,o=this.length;a<o;a++)Oe(r,"get",a+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(W)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ut();const r=W(this)[t].apply(this,n);return Ht(),r}}),e}function ul(e){const t=W(this);return Oe(t,"has",e),t.hasOwnProperty(e)}function Ai(e=!1,t=!1){return function(r,i,a){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&a===(e?t?Cl:To:t?So:Io).get(r))return r;const o=z(r);if(!e){if(o&&U(ia,i))return Reflect.get(ia,i,a);if(i==="hasOwnProperty")return ul}const s=Reflect.get(r,i,a);return(bi(i)?Eo.has(i):ol(i))||(e||Oe(r,"get",i),t)?s:ge(s)?o&&yi(i)?s:s.value:Q(s)?e?No(s):Ci(s):s}}const dl=Co(),ml=Co(!0);function Co(e=!1){return function(n,r,i,a){let o=n[r];if(zt(o)&&ge(o)&&!ge(i))return!1;if(!e&&(!Vn(i)&&!zt(i)&&(o=W(o),i=W(i)),!z(n)&&ge(o)&&!ge(i)))return o.value=i,!0;const s=z(n)&&yi(r)?Number(r)<n.length:U(n,r),l=Reflect.set(n,r,i,a);return n===W(a)&&(s?tn(i,o)&&Je(n,"set",r,i):Je(n,"add",r,i)),l}}function hl(e,t){const n=U(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Je(e,"delete",t,void 0),r}function pl(e,t){const n=Reflect.has(e,t);return(!bi(t)||!Eo.has(t))&&Oe(e,"has",t),n}function gl(e){return Oe(e,"iterate",z(e)?"length":wt),Reflect.ownKeys(e)}const Po={get:sl,set:dl,deleteProperty:hl,has:pl,ownKeys:gl},vl={get:fl,set(e,t){return!0},deleteProperty(e,t){return!0}},bl=de({},Po,{get:ll,set:ml}),Oi=e=>e,lr=e=>Reflect.getPrototypeOf(e);function yn(e,t,n=!1,r=!1){e=e.__v_raw;const i=W(e),a=W(t);n||(t!==a&&Oe(i,"get",t),Oe(i,"get",a));const{has:o}=lr(i),s=r?Oi:n?Ii:nn;if(o.call(i,t))return s(e.get(t));if(o.call(i,a))return s(e.get(a));e!==i&&e.get(t)}function xn(e,t=!1){const n=this.__v_raw,r=W(n),i=W(e);return t||(e!==i&&Oe(r,"has",e),Oe(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function wn(e,t=!1){return e=e.__v_raw,!t&&Oe(W(e),"iterate",wt),Reflect.get(e,"size",e)}function aa(e){e=W(e);const t=W(this);return lr(t).has.call(t,e)||(t.add(e),Je(t,"add",e,e)),this}function oa(e,t){t=W(t);const n=W(this),{has:r,get:i}=lr(n);let a=r.call(n,e);a||(e=W(e),a=r.call(n,e));const o=i.call(n,e);return n.set(e,t),a?tn(t,o)&&Je(n,"set",e,t):Je(n,"add",e,t),this}function sa(e){const t=W(this),{has:n,get:r}=lr(t);let i=n.call(t,e);i||(e=W(e),i=n.call(t,e)),r&&r.call(t,e);const a=t.delete(e);return i&&Je(t,"delete",e,void 0),a}function la(){const e=W(this),t=e.size!==0,n=e.clear();return t&&Je(e,"clear",void 0,void 0),n}function _n(e,t){return function(r,i){const a=this,o=a.__v_raw,s=W(o),l=t?Oi:e?Ii:nn;return!e&&Oe(s,"iterate",wt),o.forEach((f,u)=>r.call(i,l(f),l(u),a))}}function kn(e,t,n){return function(...r){const i=this.__v_raw,a=W(i),o=Mt(a),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=i[e](...r),u=n?Oi:t?Ii:nn;return!t&&Oe(a,"iterate",l?Hr:wt),{next(){const{value:m,done:h}=f.next();return h?{value:m,done:h}:{value:s?[u(m[0]),u(m[1])]:u(m),done:h}},[Symbol.iterator](){return this}}}}function nt(e){return function(...t){return e==="delete"?!1:this}}function yl(){const e={get(a){return yn(this,a)},get size(){return wn(this)},has:xn,add:aa,set:oa,delete:sa,clear:la,forEach:_n(!1,!1)},t={get(a){return yn(this,a,!1,!0)},get size(){return wn(this)},has:xn,add:aa,set:oa,delete:sa,clear:la,forEach:_n(!1,!0)},n={get(a){return yn(this,a,!0)},get size(){return wn(this,!0)},has(a){return xn.call(this,a,!0)},add:nt("add"),set:nt("set"),delete:nt("delete"),clear:nt("clear"),forEach:_n(!0,!1)},r={get(a){return yn(this,a,!0,!0)},get size(){return wn(this,!0)},has(a){return xn.call(this,a,!0)},add:nt("add"),set:nt("set"),delete:nt("delete"),clear:nt("clear"),forEach:_n(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=kn(a,!1,!1),n[a]=kn(a,!0,!1),t[a]=kn(a,!1,!0),r[a]=kn(a,!0,!0)}),[e,n,t,r]}const[xl,wl,_l,kl]=yl();function Ei(e,t){const n=t?e?kl:_l:e?wl:xl;return(r,i,a)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(U(n,i)&&i in r?n:r,i,a)}const Al={get:Ei(!1,!1)},Ol={get:Ei(!1,!0)},El={get:Ei(!0,!1)},Io=new WeakMap,So=new WeakMap,To=new WeakMap,Cl=new WeakMap;function Pl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Il(e){return e.__v_skip||!Object.isExtensible(e)?0:Pl(Ks(e))}function Ci(e){return zt(e)?e:Pi(e,!1,Po,Al,Io)}function Sl(e){return Pi(e,!1,bl,Ol,So)}function No(e){return Pi(e,!0,vl,El,To)}function Pi(e,t,n,r,i){if(!Q(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=i.get(e);if(a)return a;const o=Il(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function Lt(e){return zt(e)?Lt(e.__v_raw):!!(e&&e.__v_isReactive)}function zt(e){return!!(e&&e.__v_isReadonly)}function Vn(e){return!!(e&&e.__v_isShallow)}function Mo(e){return Lt(e)||zt(e)}function W(e){const t=e&&e.__v_raw;return t?W(t):e}function Lo(e){return qn(e,"__v_skip",!0),e}const nn=e=>Q(e)?Ci(e):e,Ii=e=>Q(e)?No(e):e;function Fo(e){at&&Fe&&(e=W(e),Oo(e.dep||(e.dep=_i())))}function Ro(e,t){e=W(e);const n=e.dep;n&&Wr(n)}function ge(e){return!!(e&&e.__v_isRef===!0)}function ce(e){return Tl(e,!1)}function Tl(e,t){return ge(e)?e:new Nl(e,t)}class Nl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:W(t),this._value=n?t:nn(t)}get value(){return Fo(this),this._value}set value(t){const n=this.__v_isShallow||Vn(t)||zt(t);t=n?t:W(t),tn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:nn(t),Ro(this))}}function Ml(e){return ge(e)?e.value:e}const Ll={get:(e,t,n)=>Ml(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return ge(i)&&!ge(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function zo(e){return Lt(e)?e:new Proxy(e,Ll)}class Fl{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ki(t,()=>{this._dirty||(this._dirty=!0,Ro(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=W(this);return Fo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Rl(e,t,n=!1){let r,i;const a=$(e);return a?(r=e,i=je):(r=e.get,i=e.set),new Fl(r,i,a||!i,n)}function ot(e,t,n,r){let i;try{i=r?e(...r):e()}catch(a){fr(a,t,n)}return i}function De(e,t,n,r){if($(e)){const a=ot(e,t,n,r);return a&&vo(a)&&a.catch(o=>{fr(o,t,n)}),a}const i=[];for(let a=0;a<e.length;a++)i.push(De(e[a],t,n,r));return i}function fr(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let a=t.parent;const o=t.proxy,s=n;for(;a;){const f=a.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](e,o,s)===!1)return}a=a.parent}const l=t.appContext.config.errorHandler;if(l){ot(l,null,10,[e,o,s]);return}}zl(e,n,i,r)}function zl(e,t,n,r=!0){console.error(e)}let rn=!1,Yr=!1;const pe=[];let We=0;const Ft=[];let Ve=null,gt=0;const jo=Promise.resolve();let Si=null;function jl(e){const t=Si||jo;return e?t.then(this?e.bind(this):e):t}function Dl(e){let t=We+1,n=pe.length;for(;t<n;){const r=t+n>>>1;an(pe[r])<e?t=r+1:n=r}return t}function Ti(e){(!pe.length||!pe.includes(e,rn&&e.allowRecurse?We+1:We))&&(e.id==null?pe.push(e):pe.splice(Dl(e.id),0,e),Do())}function Do(){!rn&&!Yr&&(Yr=!0,Si=jo.then(Bo))}function $l(e){const t=pe.indexOf(e);t>We&&pe.splice(t,1)}function Bl(e){z(e)?Ft.push(...e):(!Ve||!Ve.includes(e,e.allowRecurse?gt+1:gt))&&Ft.push(e),Do()}function fa(e,t=rn?We+1:0){for(;t<pe.length;t++){const n=pe[t];n&&n.pre&&(pe.splice(t,1),t--,n())}}function $o(e){if(Ft.length){const t=[...new Set(Ft)];if(Ft.length=0,Ve){Ve.push(...t);return}for(Ve=t,Ve.sort((n,r)=>an(n)-an(r)),gt=0;gt<Ve.length;gt++)Ve[gt]();Ve=null,gt=0}}const an=e=>e.id==null?1/0:e.id,Ul=(e,t)=>{const n=an(e)-an(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Bo(e){Yr=!1,rn=!0,pe.sort(Ul);const t=je;try{for(We=0;We<pe.length;We++){const n=pe[We];n&&n.active!==!1&&ot(n,null,14)}}finally{We=0,pe.length=0,$o(),rn=!1,Si=null,(pe.length||Ft.length)&&Bo()}}function Hl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||X;let i=n;const a=t.startsWith("update:"),o=a&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[u]||X;h&&(i=n.map(g=>le(g)?g.trim():g)),m&&(i=n.map(Dr))}let s,l=r[s=_r(t)]||r[s=_r(Ke(t))];!l&&a&&(l=r[s=_r(Bt(t))]),l&&De(l,e,6,i);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,De(f,e,6,i)}}function Uo(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const a=e.emits;let o={},s=!1;if(!$(e)){const l=f=>{const u=Uo(f,t,!0);u&&(s=!0,de(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!a&&!s?(Q(e)&&r.set(e,null),null):(z(a)?a.forEach(l=>o[l]=null):de(o,a),Q(e)&&r.set(e,o),o)}function cr(e,t){return!e||!ir(t)?!1:(t=t.slice(2).replace(/Once$/,""),U(e,t[0].toLowerCase()+t.slice(1))||U(e,Bt(t))||U(e,t))}let Ie=null,Ho=null;function Xn(e){const t=Ie;return Ie=e,Ho=e&&e.type.__scopeId||null,t}function Wl(e,t=Ie,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&wa(-1);const a=Xn(t);let o;try{o=e(...i)}finally{Xn(a),r._d&&wa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function kr(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:a,propsOptions:[o],slots:s,attrs:l,emit:f,render:u,renderCache:m,data:h,setupState:g,ctx:O,inheritAttrs:C}=e;let F,x;const w=Xn(e);try{if(n.shapeFlag&4){const P=i||r;F=He(u.call(P,P,m,a,g,h,O)),x=l}else{const P=t;F=He(P.length>1?P(a,{attrs:l,slots:s,emit:f}):P(a,null)),x=t.props?l:Yl(l)}}catch(P){Zt.length=0,fr(P,e,1),F=ae(kt)}let L=F;if(x&&C!==!1){const P=Object.keys(x),{shapeFlag:H}=L;P.length&&H&7&&(o&&P.some(gi)&&(x=Kl(x,o)),L=jt(L,x))}return n.dirs&&(L=jt(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),F=L,Xn(w),F}const Yl=e=>{let t;for(const n in e)(n==="class"||n==="style"||ir(n))&&((t||(t={}))[n]=e[n]);return t},Kl=(e,t)=>{const n={};for(const r in e)(!gi(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ql(e,t,n){const{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:l}=t,f=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ca(r,o,f):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const h=u[m];if(o[h]!==r[h]&&!cr(f,h))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ca(r,o,f):!0:!!o;return!1}function ca(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const a=r[i];if(t[a]!==e[a]&&!cr(n,a))return!0}return!1}function Vl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Xl=e=>e.__isSuspense;function Jl(e,t){t&&t.pendingBranch?z(e)?t.effects.push(...e):t.effects.push(e):Bl(e)}const An={};function Dn(e,t,n){return Wo(e,t,n)}function Wo(e,t,{immediate:n,deep:r,flush:i,onTrack:a,onTrigger:o}=X){var s;const l=rl()===((s=he)==null?void 0:s.scope)?he:null;let f,u=!1,m=!1;if(ge(e)?(f=()=>e.value,u=Vn(e)):Lt(e)?(f=()=>e,r=!0):z(e)?(m=!0,u=e.some(P=>Lt(P)||Vn(P)),f=()=>e.map(P=>{if(ge(P))return P.value;if(Lt(P))return bt(P);if($(P))return ot(P,l,2)})):$(e)?t?f=()=>ot(e,l,2):f=()=>{if(!(l&&l.isUnmounted))return h&&h(),De(e,l,3,[g])}:f=je,t&&r){const P=f;f=()=>bt(P())}let h,g=P=>{h=w.onStop=()=>{ot(P,l,4)}},O;if(sn)if(g=je,t?n&&De(t,l,3,[f(),m?[]:void 0,g]):f(),i==="sync"){const P=qf();O=P.__watcherHandles||(P.__watcherHandles=[])}else return je;let C=m?new Array(e.length).fill(An):An;const F=()=>{if(w.active)if(t){const P=w.run();(r||u||(m?P.some((H,se)=>tn(H,C[se])):tn(P,C)))&&(h&&h(),De(t,l,3,[P,C===An?void 0:m&&C[0]===An?[]:C,g]),C=P)}else w.run()};F.allowRecurse=!!t;let x;i==="sync"?x=F:i==="post"?x=()=>ke(F,l&&l.suspense):(F.pre=!0,l&&(F.id=l.uid),x=()=>Ti(F));const w=new ki(f,x);t?n?F():C=w.run():i==="post"?ke(w.run.bind(w),l&&l.suspense):w.run();const L=()=>{w.stop(),l&&l.scope&&vi(l.scope.effects,w)};return O&&O.push(L),L}function Gl(e,t,n){const r=this.proxy,i=le(e)?e.includes(".")?Yo(r,e):()=>r[e]:e.bind(r,r);let a;$(t)?a=t:(a=t.handler,n=t);const o=he;Dt(this);const s=Wo(i,a.bind(r),n);return o?Dt(o):_t(),s}function Yo(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function bt(e,t){if(!Q(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ge(e))bt(e.value,t);else if(z(e))for(let n=0;n<e.length;n++)bt(e[n],t);else if(go(e)||Mt(e))e.forEach(n=>{bt(n,t)});else if(yo(e))for(const n in e)bt(e[n],t);return e}function On(e,t){const n=Ie;if(n===null)return e;const r=hr(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[o,s,l,f=X]=t[a];o&&($(o)&&(o={mounted:o,updated:o}),o.deep&&bt(s),i.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:f}))}return e}function mt(e,t,n,r){const i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){const s=i[o];a&&(s.oldValue=a[o].value);let l=s.dir[r];l&&(Ut(),De(l,n,8,[e.el,s,e,t]),Ht())}}function Zl(e,t){return $(e)?(()=>de({name:e.name},t,{setup:e}))():e}const $n=e=>!!e.type.__asyncLoader,Ko=e=>e.type.__isKeepAlive;function Ql(e,t){qo(e,"a",t)}function ef(e,t){qo(e,"da",t)}function qo(e,t,n=he){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(ur(t,r,n),n){let i=n.parent;for(;i&&i.parent;)Ko(i.parent.vnode)&&tf(r,t,n,i),i=i.parent}}function tf(e,t,n,r){const i=ur(t,e,r,!0);Xo(()=>{vi(r[t],i)},n)}function ur(e,t,n=he,r=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ut(),Dt(n);const s=De(t,n,e,o);return _t(),Ht(),s});return r?i.unshift(a):i.push(a),a}}const et=e=>(t,n=he)=>(!sn||e==="sp")&&ur(e,(...r)=>t(...r),n),nf=et("bm"),Vo=et("m"),rf=et("bu"),af=et("u"),of=et("bum"),Xo=et("um"),sf=et("sp"),lf=et("rtg"),ff=et("rtc");function cf(e,t=he){ur("ec",e,t)}const Jo="components";function uf(e,t){return mf(Jo,e,!0,t)||e}const df=Symbol.for("v-ndc");function mf(e,t,n=!0,r=!1){const i=Ie||he;if(i){const a=i.type;if(e===Jo){const s=Hf(a,!1);if(s&&(s===t||s===Ke(t)||s===sr(Ke(t))))return a}const o=ua(i[e]||a[e],t)||ua(i.appContext[e],t);return!o&&r?a:o}}function ua(e,t){return e&&(e[t]||e[Ke(t)]||e[sr(Ke(t))])}function da(e,t,n,r){let i;const a=n&&n[r];if(z(e)||le(e)){i=new Array(e.length);for(let o=0,s=e.length;o<s;o++)i[o]=t(e[o],o,void 0,a&&a[o])}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,a&&a[o])}else if(Q(e))if(e[Symbol.iterator])i=Array.from(e,(o,s)=>t(o,s,void 0,a&&a[s]));else{const o=Object.keys(e);i=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];i[s]=t(e[f],f,s,a&&a[s])}}else i=[];return n&&(n[r]=i),i}const Kr=e=>e?ss(e)?hr(e)||e.proxy:Kr(e.parent):null,Gt=de(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Kr(e.parent),$root:e=>Kr(e.root),$emit:e=>e.emit,$options:e=>Ni(e),$forceUpdate:e=>e.f||(e.f=()=>Ti(e.update)),$nextTick:e=>e.n||(e.n=jl.bind(e.proxy)),$watch:e=>Gl.bind(e)}),Ar=(e,t)=>e!==X&&!e.__isScriptSetup&&U(e,t),hf={get({_:e},t){const{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else{if(Ar(r,t))return o[t]=1,r[t];if(i!==X&&U(i,t))return o[t]=2,i[t];if((f=e.propsOptions[0])&&U(f,t))return o[t]=3,a[t];if(n!==X&&U(n,t))return o[t]=4,n[t];qr&&(o[t]=0)}}const u=Gt[t];let m,h;if(u)return t==="$attrs"&&Oe(e,"get",t),u(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==X&&U(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,U(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:a}=e;return Ar(i,t)?(i[t]=n,!0):r!==X&&U(r,t)?(r[t]=n,!0):U(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:a}},o){let s;return!!n[o]||e!==X&&U(e,o)||Ar(t,o)||(s=a[0])&&U(s,o)||U(r,o)||U(Gt,o)||U(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:U(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ma(e){return z(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let qr=!0;function pf(e){const t=Ni(e),n=e.proxy,r=e.ctx;qr=!1,t.beforeCreate&&ha(t.beforeCreate,e,"bc");const{data:i,computed:a,methods:o,watch:s,provide:l,inject:f,created:u,beforeMount:m,mounted:h,beforeUpdate:g,updated:O,activated:C,deactivated:F,beforeDestroy:x,beforeUnmount:w,destroyed:L,unmounted:P,render:H,renderTracked:se,renderTriggered:ie,errorCaptured:ve,serverPrefetch:xe,expose:Se,inheritAttrs:te,components:R,directives:Y,filters:D}=t;if(f&&gf(f,r,null),o)for(const Z in o){const K=o[Z];$(K)&&(r[Z]=K.bind(n))}if(i){const Z=i.call(n,n);Q(Z)&&(e.data=Ci(Z))}if(qr=!0,a)for(const Z in a){const K=a[Z],Te=$(K)?K.bind(n,n):$(K.get)?K.get.bind(n,n):je,gn=!$(K)&&$(K.set)?K.set.bind(n):je,dt=pt({get:Te,set:gn});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>dt.value,set:$e=>dt.value=$e})}if(s)for(const Z in s)Go(s[Z],r,n,Z);if(l){const Z=$(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(K=>{_f(K,Z[K])})}u&&ha(u,e,"c");function ne(Z,K){z(K)?K.forEach(Te=>Z(Te.bind(n))):K&&Z(K.bind(n))}if(ne(nf,m),ne(Vo,h),ne(rf,g),ne(af,O),ne(Ql,C),ne(ef,F),ne(cf,ve),ne(ff,se),ne(lf,ie),ne(of,w),ne(Xo,P),ne(sf,xe),z(Se))if(Se.length){const Z=e.exposed||(e.exposed={});Se.forEach(K=>{Object.defineProperty(Z,K,{get:()=>n[K],set:Te=>n[K]=Te})})}else e.exposed||(e.exposed={});H&&e.render===je&&(e.render=H),te!=null&&(e.inheritAttrs=te),R&&(e.components=R),Y&&(e.directives=Y)}function gf(e,t,n=je){z(e)&&(e=Vr(e));for(const r in e){const i=e[r];let a;Q(i)?"default"in i?a=Bn(i.from||r,i.default,!0):a=Bn(i.from||r):a=Bn(i),ge(a)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):t[r]=a}}function ha(e,t,n){De(z(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Go(e,t,n,r){const i=r.includes(".")?Yo(n,r):()=>n[r];if(le(e)){const a=t[e];$(a)&&Dn(i,a)}else if($(e))Dn(i,e.bind(n));else if(Q(e))if(z(e))e.forEach(a=>Go(a,t,n,r));else{const a=$(e.handler)?e.handler.bind(n):t[e.handler];$(a)&&Dn(i,a,e)}}function Ni(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t);let l;return s?l=s:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(f=>Jn(l,f,o,!0)),Jn(l,t,o)),Q(t)&&a.set(t,l),l}function Jn(e,t,n,r=!1){const{mixins:i,extends:a}=t;a&&Jn(e,a,n,!0),i&&i.forEach(o=>Jn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=vf[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const vf={data:pa,props:ga,emits:ga,methods:Xt,computed:Xt,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:Xt,directives:Xt,watch:yf,provide:pa,inject:bf};function pa(e,t){return t?e?function(){return de($(e)?e.call(this,this):e,$(t)?t.call(this,this):t)}:t:e}function bf(e,t){return Xt(Vr(e),Vr(t))}function Vr(e){if(z(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function Xt(e,t){return e?de(Object.create(null),e,t):t}function ga(e,t){return e?z(e)&&z(t)?[...new Set([...e,...t])]:de(Object.create(null),ma(e),ma(t??{})):t}function yf(e,t){if(!e)return t;if(!t)return e;const n=de(Object.create(null),e);for(const r in t)n[r]=be(e[r],t[r]);return n}function Zo(){return{app:null,config:{isNativeTag:Hs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xf=0;function wf(e,t){return function(r,i=null){$(r)||(r=de({},r)),i!=null&&!Q(i)&&(i=null);const a=Zo(),o=new Set;let s=!1;const l=a.app={_uid:xf++,_component:r,_props:i,_container:null,_context:a,_instance:null,version:Vf,get config(){return a.config},set config(f){},use(f,...u){return o.has(f)||(f&&$(f.install)?(o.add(f),f.install(l,...u)):$(f)&&(o.add(f),f(l,...u))),l},mixin(f){return a.mixins.includes(f)||a.mixins.push(f),l},component(f,u){return u?(a.components[f]=u,l):a.components[f]},directive(f,u){return u?(a.directives[f]=u,l):a.directives[f]},mount(f,u,m){if(!s){const h=ae(r,i);return h.appContext=a,u&&t?t(h,f):e(h,f,m),s=!0,l._container=f,f.__vue_app__=l,hr(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,u){return a.provides[f]=u,l},runWithContext(f){Gn=l;try{return f()}finally{Gn=null}}};return l}}let Gn=null;function _f(e,t){if(he){let n=he.provides;const r=he.parent&&he.parent.provides;r===n&&(n=he.provides=Object.create(r)),n[e]=t}}function Bn(e,t,n=!1){const r=he||Ie;if(r||Gn){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Gn._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&$(t)?t.call(r&&r.proxy):t}}function kf(e,t,n,r=!1){const i={},a={};qn(a,mr,1),e.propsDefaults=Object.create(null),Qo(e,t,i,a);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:Sl(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function Af(e,t,n,r){const{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=W(i),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let h=u[m];if(cr(e.emitsOptions,h))continue;const g=t[h];if(l)if(U(a,h))g!==a[h]&&(a[h]=g,f=!0);else{const O=Ke(h);i[O]=Xr(l,s,O,g,e,!1)}else g!==a[h]&&(a[h]=g,f=!0)}}}else{Qo(e,t,i,a)&&(f=!0);let u;for(const m in s)(!t||!U(t,m)&&((u=Bt(m))===m||!U(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(i[m]=Xr(l,s,m,void 0,e,!0)):delete i[m]);if(a!==s)for(const m in a)(!t||!U(t,m))&&(delete a[m],f=!0)}f&&Je(e,"set","$attrs")}function Qo(e,t,n,r){const[i,a]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(zn(l))continue;const f=t[l];let u;i&&U(i,u=Ke(l))?!a||!a.includes(u)?n[u]=f:(s||(s={}))[u]=f:cr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(a){const l=W(n),f=s||X;for(let u=0;u<a.length;u++){const m=a[u];n[m]=Xr(i,l,m,f[m],e,!U(f,m))}}return o}function Xr(e,t,n,r,i,a){const o=e[n];if(o!=null){const s=U(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&$(l)){const{propsDefaults:f}=i;n in f?r=f[n]:(Dt(i),r=f[n]=l.call(null,t),_t())}else r=l}o[0]&&(a&&!s?r=!1:o[1]&&(r===""||r===Bt(n))&&(r=!0))}return r}function es(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const a=e.props,o={},s=[];let l=!1;if(!$(e)){const u=m=>{l=!0;const[h,g]=es(m,t,!0);de(o,h),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!a&&!l)return Q(e)&&r.set(e,Nt),Nt;if(z(a))for(let u=0;u<a.length;u++){const m=Ke(a[u]);va(m)&&(o[m]=X)}else if(a)for(const u in a){const m=Ke(u);if(va(m)){const h=a[u],g=o[m]=z(h)||$(h)?{type:h}:de({},h);if(g){const O=xa(Boolean,g.type),C=xa(String,g.type);g[0]=O>-1,g[1]=C<0||O<C,(O>-1||U(g,"default"))&&s.push(m)}}}const f=[o,s];return Q(e)&&r.set(e,f),f}function va(e){return e[0]!=="$"}function ba(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ya(e,t){return ba(e)===ba(t)}function xa(e,t){return z(t)?t.findIndex(n=>ya(n,e)):$(t)&&ya(t,e)?0:-1}const ts=e=>e[0]==="_"||e==="$stable",Mi=e=>z(e)?e.map(He):[He(e)],Of=(e,t,n)=>{if(t._n)return t;const r=Wl((...i)=>Mi(t(...i)),n);return r._c=!1,r},ns=(e,t,n)=>{const r=e._ctx;for(const i in e){if(ts(i))continue;const a=e[i];if($(a))t[i]=Of(i,a,r);else if(a!=null){const o=Mi(a);t[i]=()=>o}}},rs=(e,t)=>{const n=Mi(t);e.slots.default=()=>n},Ef=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=W(t),qn(t,"_",n)):ns(t,e.slots={})}else e.slots={},t&&rs(e,t);qn(e.slots,mr,1)},Cf=(e,t,n)=>{const{vnode:r,slots:i}=e;let a=!0,o=X;if(r.shapeFlag&32){const s=t._;s?n&&s===1?a=!1:(de(i,t),!n&&s===1&&delete i._):(a=!t.$stable,ns(t,i)),o=t}else t&&(rs(e,t),o={default:1});if(a)for(const s in i)!ts(s)&&!(s in o)&&delete i[s]};function Jr(e,t,n,r,i=!1){if(z(e)){e.forEach((h,g)=>Jr(h,t&&(z(t)?t[g]:t),n,r,i));return}if($n(r)&&!i)return;const a=r.shapeFlag&4?hr(r.component)||r.component.proxy:r.el,o=i?null:a,{i:s,r:l}=e,f=t&&t.r,u=s.refs===X?s.refs={}:s.refs,m=s.setupState;if(f!=null&&f!==l&&(le(f)?(u[f]=null,U(m,f)&&(m[f]=null)):ge(f)&&(f.value=null)),$(l))ot(l,s,12,[o,u]);else{const h=le(l),g=ge(l);if(h||g){const O=()=>{if(e.f){const C=h?U(m,l)?m[l]:u[l]:l.value;i?z(C)&&vi(C,a):z(C)?C.includes(a)||C.push(a):h?(u[l]=[a],U(m,l)&&(m[l]=u[l])):(l.value=[a],e.k&&(u[e.k]=l.value))}else h?(u[l]=o,U(m,l)&&(m[l]=o)):g&&(l.value=o,e.k&&(u[e.k]=o))};o?(O.id=-1,ke(O,n)):O()}}}const ke=Jl;function Pf(e){return If(e)}function If(e,t){const n=$r();n.__VUE__=!0;const{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:l,setText:f,setElementText:u,parentNode:m,nextSibling:h,setScopeId:g=je,insertStaticContent:O}=e,C=(c,d,p,b=null,v=null,k=null,E=!1,_=null,A=!!d.dynamicChildren)=>{if(c===d)return;c&&!Kt(c,d)&&(b=vn(c),$e(c,v,k,!0),c=null),d.patchFlag===-2&&(A=!1,d.dynamicChildren=null);const{type:y,ref:N,shapeFlag:S}=d;switch(y){case dr:F(c,d,p,b);break;case kt:x(c,d,p,b);break;case Or:c==null&&w(d,p,b,E);break;case Le:R(c,d,p,b,v,k,E,_,A);break;default:S&1?H(c,d,p,b,v,k,E,_,A):S&6?Y(c,d,p,b,v,k,E,_,A):(S&64||S&128)&&y.process(c,d,p,b,v,k,E,_,A,Et)}N!=null&&v&&Jr(N,c&&c.ref,k,d||c,!d)},F=(c,d,p,b)=>{if(c==null)r(d.el=s(d.children),p,b);else{const v=d.el=c.el;d.children!==c.children&&f(v,d.children)}},x=(c,d,p,b)=>{c==null?r(d.el=l(d.children||""),p,b):d.el=c.el},w=(c,d,p,b)=>{[c.el,c.anchor]=O(c.children,d,p,b,c.el,c.anchor)},L=({el:c,anchor:d},p,b)=>{let v;for(;c&&c!==d;)v=h(c),r(c,p,b),c=v;r(d,p,b)},P=({el:c,anchor:d})=>{let p;for(;c&&c!==d;)p=h(c),i(c),c=p;i(d)},H=(c,d,p,b,v,k,E,_,A)=>{E=E||d.type==="svg",c==null?se(d,p,b,v,k,E,_,A):xe(c,d,v,k,E,_,A)},se=(c,d,p,b,v,k,E,_)=>{let A,y;const{type:N,props:S,shapeFlag:M,transition:j,dirs:B}=c;if(A=c.el=o(c.type,k,S&&S.is,S),M&8?u(A,c.children):M&16&&ve(c.children,A,null,b,v,k&&N!=="foreignObject",E,_),B&&mt(c,null,b,"created"),ie(A,c,c.scopeId,E,b),S){for(const q in S)q!=="value"&&!zn(q)&&a(A,q,null,S[q],k,c.children,b,v,qe);"value"in S&&a(A,"value",null,S.value),(y=S.onVnodeBeforeMount)&&Ue(y,b,c)}B&&mt(c,null,b,"beforeMount");const V=(!v||v&&!v.pendingBranch)&&j&&!j.persisted;V&&j.beforeEnter(A),r(A,d,p),((y=S&&S.onVnodeMounted)||V||B)&&ke(()=>{y&&Ue(y,b,c),V&&j.enter(A),B&&mt(c,null,b,"mounted")},v)},ie=(c,d,p,b,v)=>{if(p&&g(c,p),b)for(let k=0;k<b.length;k++)g(c,b[k]);if(v){let k=v.subTree;if(d===k){const E=v.vnode;ie(c,E,E.scopeId,E.slotScopeIds,v.parent)}}},ve=(c,d,p,b,v,k,E,_,A=0)=>{for(let y=A;y<c.length;y++){const N=c[y]=_?it(c[y]):He(c[y]);C(null,N,d,p,b,v,k,E,_)}},xe=(c,d,p,b,v,k,E)=>{const _=d.el=c.el;let{patchFlag:A,dynamicChildren:y,dirs:N}=d;A|=c.patchFlag&16;const S=c.props||X,M=d.props||X;let j;p&&ht(p,!1),(j=M.onVnodeBeforeUpdate)&&Ue(j,p,d,c),N&&mt(d,c,p,"beforeUpdate"),p&&ht(p,!0);const B=v&&d.type!=="foreignObject";if(y?Se(c.dynamicChildren,y,_,p,b,B,k):E||K(c,d,_,null,p,b,B,k,!1),A>0){if(A&16)te(_,d,S,M,p,b,v);else if(A&2&&S.class!==M.class&&a(_,"class",null,M.class,v),A&4&&a(_,"style",S.style,M.style,v),A&8){const V=d.dynamicProps;for(let q=0;q<V.length;q++){const oe=V[q],Ne=S[oe],Ct=M[oe];(Ct!==Ne||oe==="value")&&a(_,oe,Ne,Ct,v,c.children,p,b,qe)}}A&1&&c.children!==d.children&&u(_,d.children)}else!E&&y==null&&te(_,d,S,M,p,b,v);((j=M.onVnodeUpdated)||N)&&ke(()=>{j&&Ue(j,p,d,c),N&&mt(d,c,p,"updated")},b)},Se=(c,d,p,b,v,k,E)=>{for(let _=0;_<d.length;_++){const A=c[_],y=d[_],N=A.el&&(A.type===Le||!Kt(A,y)||A.shapeFlag&70)?m(A.el):p;C(A,y,N,null,b,v,k,E,!0)}},te=(c,d,p,b,v,k,E)=>{if(p!==b){if(p!==X)for(const _ in p)!zn(_)&&!(_ in b)&&a(c,_,p[_],null,E,d.children,v,k,qe);for(const _ in b){if(zn(_))continue;const A=b[_],y=p[_];A!==y&&_!=="value"&&a(c,_,y,A,E,d.children,v,k,qe)}"value"in b&&a(c,"value",p.value,b.value)}},R=(c,d,p,b,v,k,E,_,A)=>{const y=d.el=c?c.el:s(""),N=d.anchor=c?c.anchor:s("");let{patchFlag:S,dynamicChildren:M,slotScopeIds:j}=d;j&&(_=_?_.concat(j):j),c==null?(r(y,p,b),r(N,p,b),ve(d.children,p,N,v,k,E,_,A)):S>0&&S&64&&M&&c.dynamicChildren?(Se(c.dynamicChildren,M,p,v,k,E,_),(d.key!=null||v&&d===v.subTree)&&is(c,d,!0)):K(c,d,p,N,v,k,E,_,A)},Y=(c,d,p,b,v,k,E,_,A)=>{d.slotScopeIds=_,c==null?d.shapeFlag&512?v.ctx.activate(d,p,b,E,A):D(d,p,b,v,k,E,A):we(c,d,A)},D=(c,d,p,b,v,k,E)=>{const _=c.component=jf(c,b,v);if(Ko(c)&&(_.ctx.renderer=Et),Df(_),_.asyncDep){if(v&&v.registerDep(_,ne),!c.el){const A=_.subTree=ae(kt);x(null,A,d,p)}return}ne(_,c,d,p,v,k,E)},we=(c,d,p)=>{const b=d.component=c.component;if(ql(c,d,p))if(b.asyncDep&&!b.asyncResolved){Z(b,d,p);return}else b.next=d,$l(b.update),b.update();else d.el=c.el,b.vnode=d},ne=(c,d,p,b,v,k,E)=>{const _=()=>{if(c.isMounted){let{next:N,bu:S,u:M,parent:j,vnode:B}=c,V=N,q;ht(c,!1),N?(N.el=B.el,Z(c,N,E)):N=B,S&&jn(S),(q=N.props&&N.props.onVnodeBeforeUpdate)&&Ue(q,j,N,B),ht(c,!0);const oe=kr(c),Ne=c.subTree;c.subTree=oe,C(Ne,oe,m(Ne.el),vn(Ne),c,v,k),N.el=oe.el,V===null&&Vl(c,oe.el),M&&ke(M,v),(q=N.props&&N.props.onVnodeUpdated)&&ke(()=>Ue(q,j,N,B),v)}else{let N;const{el:S,props:M}=d,{bm:j,m:B,parent:V}=c,q=$n(d);if(ht(c,!1),j&&jn(j),!q&&(N=M&&M.onVnodeBeforeMount)&&Ue(N,V,d),ht(c,!0),S&&wr){const oe=()=>{c.subTree=kr(c),wr(S,c.subTree,c,v,null)};q?d.type.__asyncLoader().then(()=>!c.isUnmounted&&oe()):oe()}else{const oe=c.subTree=kr(c);C(null,oe,p,b,c,v,k),d.el=oe.el}if(B&&ke(B,v),!q&&(N=M&&M.onVnodeMounted)){const oe=d;ke(()=>Ue(N,V,oe),v)}(d.shapeFlag&256||V&&$n(V.vnode)&&V.vnode.shapeFlag&256)&&c.a&&ke(c.a,v),c.isMounted=!0,d=p=b=null}},A=c.effect=new ki(_,()=>Ti(y),c.scope),y=c.update=()=>A.run();y.id=c.uid,ht(c,!0),y()},Z=(c,d,p)=>{d.component=c;const b=c.vnode.props;c.vnode=d,c.next=null,Af(c,d.props,b,p),Cf(c,d.children,p),Ut(),fa(),Ht()},K=(c,d,p,b,v,k,E,_,A=!1)=>{const y=c&&c.children,N=c?c.shapeFlag:0,S=d.children,{patchFlag:M,shapeFlag:j}=d;if(M>0){if(M&128){gn(y,S,p,b,v,k,E,_,A);return}else if(M&256){Te(y,S,p,b,v,k,E,_,A);return}}j&8?(N&16&&qe(y,v,k),S!==y&&u(p,S)):N&16?j&16?gn(y,S,p,b,v,k,E,_,A):qe(y,v,k,!0):(N&8&&u(p,""),j&16&&ve(S,p,b,v,k,E,_,A))},Te=(c,d,p,b,v,k,E,_,A)=>{c=c||Nt,d=d||Nt;const y=c.length,N=d.length,S=Math.min(y,N);let M;for(M=0;M<S;M++){const j=d[M]=A?it(d[M]):He(d[M]);C(c[M],j,p,null,v,k,E,_,A)}y>N?qe(c,v,k,!0,!1,S):ve(d,p,b,v,k,E,_,A,S)},gn=(c,d,p,b,v,k,E,_,A)=>{let y=0;const N=d.length;let S=c.length-1,M=N-1;for(;y<=S&&y<=M;){const j=c[y],B=d[y]=A?it(d[y]):He(d[y]);if(Kt(j,B))C(j,B,p,null,v,k,E,_,A);else break;y++}for(;y<=S&&y<=M;){const j=c[S],B=d[M]=A?it(d[M]):He(d[M]);if(Kt(j,B))C(j,B,p,null,v,k,E,_,A);else break;S--,M--}if(y>S){if(y<=M){const j=M+1,B=j<N?d[j].el:b;for(;y<=M;)C(null,d[y]=A?it(d[y]):He(d[y]),p,B,v,k,E,_,A),y++}}else if(y>M)for(;y<=S;)$e(c[y],v,k,!0),y++;else{const j=y,B=y,V=new Map;for(y=B;y<=M;y++){const Ee=d[y]=A?it(d[y]):He(d[y]);Ee.key!=null&&V.set(Ee.key,y)}let q,oe=0;const Ne=M-B+1;let Ct=!1,Zi=0;const Yt=new Array(Ne);for(y=0;y<Ne;y++)Yt[y]=0;for(y=j;y<=S;y++){const Ee=c[y];if(oe>=Ne){$e(Ee,v,k,!0);continue}let Be;if(Ee.key!=null)Be=V.get(Ee.key);else for(q=B;q<=M;q++)if(Yt[q-B]===0&&Kt(Ee,d[q])){Be=q;break}Be===void 0?$e(Ee,v,k,!0):(Yt[Be-B]=y+1,Be>=Zi?Zi=Be:Ct=!0,C(Ee,d[Be],p,null,v,k,E,_,A),oe++)}const Qi=Ct?Sf(Yt):Nt;for(q=Qi.length-1,y=Ne-1;y>=0;y--){const Ee=B+y,Be=d[Ee],ea=Ee+1<N?d[Ee+1].el:b;Yt[y]===0?C(null,Be,p,ea,v,k,E,_,A):Ct&&(q<0||y!==Qi[q]?dt(Be,p,ea,2):q--)}}},dt=(c,d,p,b,v=null)=>{const{el:k,type:E,transition:_,children:A,shapeFlag:y}=c;if(y&6){dt(c.component.subTree,d,p,b);return}if(y&128){c.suspense.move(d,p,b);return}if(y&64){E.move(c,d,p,Et);return}if(E===Le){r(k,d,p);for(let S=0;S<A.length;S++)dt(A[S],d,p,b);r(c.anchor,d,p);return}if(E===Or){L(c,d,p);return}if(b!==2&&y&1&&_)if(b===0)_.beforeEnter(k),r(k,d,p),ke(()=>_.enter(k),v);else{const{leave:S,delayLeave:M,afterLeave:j}=_,B=()=>r(k,d,p),V=()=>{S(k,()=>{B(),j&&j()})};M?M(k,B,V):V()}else r(k,d,p)},$e=(c,d,p,b=!1,v=!1)=>{const{type:k,props:E,ref:_,children:A,dynamicChildren:y,shapeFlag:N,patchFlag:S,dirs:M}=c;if(_!=null&&Jr(_,null,p,c,!0),N&256){d.ctx.deactivate(c);return}const j=N&1&&M,B=!$n(c);let V;if(B&&(V=E&&E.onVnodeBeforeUnmount)&&Ue(V,d,c),N&6)Us(c.component,p,b);else{if(N&128){c.suspense.unmount(p,b);return}j&&mt(c,null,d,"beforeUnmount"),N&64?c.type.remove(c,d,p,v,Et,b):y&&(k!==Le||S>0&&S&64)?qe(y,d,p,!1,!0):(k===Le&&S&384||!v&&N&16)&&qe(A,d,p),b&&Ji(c)}(B&&(V=E&&E.onVnodeUnmounted)||j)&&ke(()=>{V&&Ue(V,d,c),j&&mt(c,null,d,"unmounted")},p)},Ji=c=>{const{type:d,el:p,anchor:b,transition:v}=c;if(d===Le){Bs(p,b);return}if(d===Or){P(c);return}const k=()=>{i(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(c.shapeFlag&1&&v&&!v.persisted){const{leave:E,delayLeave:_}=v,A=()=>E(p,k);_?_(c.el,k,A):A()}else k()},Bs=(c,d)=>{let p;for(;c!==d;)p=h(c),i(c),c=p;i(d)},Us=(c,d,p)=>{const{bum:b,scope:v,update:k,subTree:E,um:_}=c;b&&jn(b),v.stop(),k&&(k.active=!1,$e(E,c,d,p)),_&&ke(_,d),ke(()=>{c.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},qe=(c,d,p,b=!1,v=!1,k=0)=>{for(let E=k;E<c.length;E++)$e(c[E],d,p,b,v)},vn=c=>c.shapeFlag&6?vn(c.component.subTree):c.shapeFlag&128?c.suspense.next():h(c.anchor||c.el),Gi=(c,d,p)=>{c==null?d._vnode&&$e(d._vnode,null,null,!0):C(d._vnode||null,c,d,null,null,null,p),fa(),$o(),d._vnode=c},Et={p:C,um:$e,m:dt,r:Ji,mt:D,mc:ve,pc:K,pbc:Se,n:vn,o:e};let xr,wr;return t&&([xr,wr]=t(Et)),{render:Gi,hydrate:xr,createApp:wf(Gi,xr)}}function ht({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function is(e,t,n=!1){const r=e.children,i=t.children;if(z(r)&&z(i))for(let a=0;a<r.length;a++){const o=r[a];let s=i[a];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=i[a]=it(i[a]),s.el=o.el),n||is(o,s)),s.type===dr&&(s.el=o.el)}}function Sf(e){const t=e.slice(),n=[0];let r,i,a,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(i=n[n.length-1],e[i]<f){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<f?a=s+1:o=s;f<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}const Tf=e=>e.__isTeleport,Le=Symbol.for("v-fgt"),dr=Symbol.for("v-txt"),kt=Symbol.for("v-cmt"),Or=Symbol.for("v-stc"),Zt=[];let Re=null;function ue(e=!1){Zt.push(Re=e?null:[])}function Nf(){Zt.pop(),Re=Zt[Zt.length-1]||null}let on=1;function wa(e){on+=e}function as(e){return e.dynamicChildren=on>0?Re||Nt:null,Nf(),on>0&&Re&&Re.push(e),e}function me(e,t,n,r,i,a){return as(ee(e,t,n,r,i,a,!0))}function Mf(e,t,n,r,i){return as(ae(e,t,n,r,i,!0))}function Gr(e){return e?e.__v_isVNode===!0:!1}function Kt(e,t){return e.type===t.type&&e.key===t.key}const mr="__vInternal",os=({key:e})=>e??null,Un=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?le(e)||ge(e)||$(e)?{i:Ie,r:e,k:t,f:!!n}:e:null);function ee(e,t=null,n=null,r=0,i=null,a=e===Le?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&os(t),ref:t&&Un(t),scopeId:Ho,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ie};return s?(Li(l,n),a&128&&e.normalize(l)):n&&(l.shapeFlag|=le(n)?8:16),on>0&&!o&&Re&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&Re.push(l),l}const ae=Lf;function Lf(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===df)&&(e=kt),Gr(e)){const s=jt(e,t,!0);return n&&Li(s,n),on>0&&!a&&Re&&(s.shapeFlag&6?Re[Re.indexOf(e)]=s:Re.push(s)),s.patchFlag|=-2,s}if(Wf(e)&&(e=e.__vccOpts),t){t=Ff(t);let{class:s,style:l}=t;s&&!le(s)&&(t.class=wi(s)),Q(l)&&(Mo(l)&&!z(l)&&(l=de({},l)),t.style=xi(l))}const o=le(e)?1:Xl(e)?128:Tf(e)?64:Q(e)?4:$(e)?2:0;return ee(e,t,n,r,i,o,a,!0)}function Ff(e){return e?Mo(e)||mr in e?de({},e):e:null}function jt(e,t,n=!1){const{props:r,ref:i,patchFlag:a,children:o}=e,s=t?Hn(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&os(s),ref:t&&t.ref?n&&i?z(i)?i.concat(Un(t)):[i,Un(t)]:Un(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Le?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&jt(e.ssContent),ssFallback:e.ssFallback&&jt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Zr(e=" ",t=0){return ae(dr,null,e,t)}function Pe(e="",t=!1){return t?(ue(),Mf(kt,null,e)):ae(kt,null,e)}function He(e){return e==null||typeof e=="boolean"?ae(kt):z(e)?ae(Le,null,e.slice()):typeof e=="object"?it(e):ae(dr,null,String(e))}function it(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:jt(e)}function Li(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(z(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Li(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(mr in t)?t._ctx=Ie:i===3&&Ie&&(Ie.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else $(t)?(t={default:t,_ctx:Ie},n=32):(t=String(t),r&64?(n=16,t=[Zr(t)]):n=8);e.children=t,e.shapeFlag|=n}function Hn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=wi([t.class,r.class]));else if(i==="style")t.style=xi([t.style,r.style]);else if(ir(i)){const a=t[i],o=r[i];o&&a!==o&&!(z(a)&&a.includes(o))&&(t[i]=a?[].concat(a,o):o)}else i!==""&&(t[i]=r[i])}return t}function Ue(e,t,n,r=null){De(e,t,7,[n,r])}const Rf=Zo();let zf=0;function jf(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||Rf,a={uid:zf++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new tl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:es(r,i),emitsOptions:Uo(r,i),emit:null,emitted:null,propsDefaults:X,inheritAttrs:r.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Hl.bind(null,a),e.ce&&e.ce(a),a}let he=null,Fi,Pt,_a="__VUE_INSTANCE_SETTERS__";(Pt=$r()[_a])||(Pt=$r()[_a]=[]),Pt.push(e=>he=e),Fi=e=>{Pt.length>1?Pt.forEach(t=>t(e)):Pt[0](e)};const Dt=e=>{Fi(e),e.scope.on()},_t=()=>{he&&he.scope.off(),Fi(null)};function ss(e){return e.vnode.shapeFlag&4}let sn=!1;function Df(e,t=!1){sn=t;const{props:n,children:r}=e.vnode,i=ss(e);kf(e,n,i,t),Ef(e,r);const a=i?$f(e,t):void 0;return sn=!1,a}function $f(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Lo(new Proxy(e.ctx,hf));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?Uf(e):null;Dt(e),Ut();const a=ot(r,e,0,[e.props,i]);if(Ht(),_t(),vo(a)){if(a.then(_t,_t),t)return a.then(o=>{ka(e,o,t)}).catch(o=>{fr(o,e,0)});e.asyncDep=a}else ka(e,a,t)}else ls(e,t)}function ka(e,t,n){$(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Q(t)&&(e.setupState=zo(t)),ls(e,n)}let Aa;function ls(e,t,n){const r=e.type;if(!e.render){if(!t&&Aa&&!r.render){const i=r.template||Ni(e).template;if(i){const{isCustomElement:a,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=de(de({isCustomElement:a,delimiters:s},o),l);r.render=Aa(i,f)}}e.render=r.render||je}Dt(e),Ut(),pf(e),Ht(),_t()}function Bf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Oe(e,"get","$attrs"),t[n]}}))}function Uf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Bf(e)},slots:e.slots,emit:e.emit,expose:t}}function hr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(zo(Lo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Gt)return Gt[n](e)},has(t,n){return n in t||n in Gt}}))}function Hf(e,t=!0){return $(e)?e.displayName||e.name:e.name||t&&e.__name}function Wf(e){return $(e)&&"__vccOpts"in e}const pt=(e,t)=>Rl(e,t,sn);function Yf(e,t,n){const r=arguments.length;return r===2?Q(t)&&!z(t)?Gr(t)?ae(e,null,[t]):ae(e,t):ae(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Gr(n)&&(n=[n]),ae(e,t,n))}const Kf=Symbol.for("v-scx"),qf=()=>Bn(Kf),Vf="3.3.4",Xf="http://www.w3.org/2000/svg",vt=typeof document<"u"?document:null,Oa=vt&&vt.createElement("template"),Jf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?vt.createElementNS(Xf,e):vt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>vt.createTextNode(e),createComment:e=>vt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>vt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,a){const o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Oa.innerHTML=r?`<svg>${e}</svg>`:e;const s=Oa.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Gf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Zf(e,t,n){const r=e.style,i=le(n);if(n&&!i){if(t&&!le(t))for(const a in t)n[a]==null&&Qr(r,a,"");for(const a in n)Qr(r,a,n[a])}else{const a=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=a)}}const Ea=/\s*!important$/;function Qr(e,t,n){if(z(n))n.forEach(r=>Qr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Qf(e,t);Ea.test(n)?e.setProperty(Bt(r),n.replace(Ea,""),"important"):e[r]=n}}const Ca=["Webkit","Moz","ms"],Er={};function Qf(e,t){const n=Er[t];if(n)return n;let r=Ke(t);if(r!=="filter"&&r in e)return Er[t]=r;r=sr(r);for(let i=0;i<Ca.length;i++){const a=Ca[i]+r;if(a in e)return Er[t]=a}return t}const Pa="http://www.w3.org/1999/xlink";function ec(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Pa,t.slice(6,t.length)):e.setAttributeNS(Pa,t,n);else{const a=el(t);n==null||a&&!xo(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function tc(e,t,n,r,i,a,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,i,a),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const f=s==="OPTION"?e.getAttribute("value"):e.value,u=n??"";f!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=xo(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function It(e,t,n,r){e.addEventListener(t,n,r)}function nc(e,t,n,r){e.removeEventListener(t,n,r)}function rc(e,t,n,r,i=null){const a=e._vei||(e._vei={}),o=a[t];if(r&&o)o.value=r;else{const[s,l]=ic(t);if(r){const f=a[t]=sc(r,i);It(e,s,f,l)}else o&&(nc(e,s,o,l),a[t]=void 0)}}const Ia=/(?:Once|Passive|Capture)$/;function ic(e){let t;if(Ia.test(e)){t={};let r;for(;r=e.match(Ia);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Bt(e.slice(2)),t]}let Cr=0;const ac=Promise.resolve(),oc=()=>Cr||(ac.then(()=>Cr=0),Cr=Date.now());function sc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;De(lc(r,n.value),t,5,[r])};return n.value=e,n.attached=oc(),n}function lc(e,t){if(z(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const Sa=/^on[a-z]/,fc=(e,t,n,r,i=!1,a,o,s,l)=>{t==="class"?Gf(e,r,i):t==="style"?Zf(e,n,r):ir(t)?gi(t)||rc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):cc(e,t,r,i))?tc(e,t,r,a,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ec(e,t,r,i))};function cc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Sa.test(t)&&$(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Sa.test(t)&&le(n)?!1:t in e}const Ta=e=>{const t=e.props["onUpdate:modelValue"]||!1;return z(t)?n=>jn(t,n):t};function uc(e){e.target.composing=!0}function Na(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const En={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e._assign=Ta(i);const a=r||i.props&&i.props.type==="number";It(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),a&&(s=Dr(s)),e._assign(s)}),n&&It(e,"change",()=>{e.value=e.value.trim()}),t||(It(e,"compositionstart",uc),It(e,"compositionend",Na),It(e,"change",Na))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},a){if(e._assign=Ta(a),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(i||e.type==="number")&&Dr(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},dc=de({patchProp:fc},Jf);let Ma;function mc(){return Ma||(Ma=Pf(dc))}const hc=(...e)=>{const t=mc().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=pc(r);if(!i)return;const a=t._component;!$(a)&&!a.render&&!a.template&&(a.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function pc(e){return le(e)?document.querySelector(e):e}const gc=(e,t)=>t.some(n=>e instanceof n);let La,Fa;function vc(){return La||(La=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bc(){return Fa||(Fa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fs=new WeakMap,ei=new WeakMap,cs=new WeakMap,Pr=new WeakMap,Ri=new WeakMap;function yc(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",a),e.removeEventListener("error",o)},a=()=>{n(st(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",a),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&fs.set(n,e)}).catch(()=>{}),Ri.set(t,e),t}function xc(e){if(ei.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",o),e.removeEventListener("abort",o)},a=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",a),e.addEventListener("error",o),e.addEventListener("abort",o)});ei.set(e,t)}let ti={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ei.get(e);if(t==="objectStoreNames")return e.objectStoreNames||cs.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return st(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function wc(e){ti=e(ti)}function _c(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ir(this),t,...n);return cs.set(r,t.sort?t.sort():[t]),st(r)}:bc().includes(e)?function(...t){return e.apply(Ir(this),t),st(fs.get(this))}:function(...t){return st(e.apply(Ir(this),t))}}function kc(e){return typeof e=="function"?_c(e):(e instanceof IDBTransaction&&xc(e),gc(e,vc())?new Proxy(e,ti):e)}function st(e){if(e instanceof IDBRequest)return yc(e);if(Pr.has(e))return Pr.get(e);const t=kc(e);return t!==e&&(Pr.set(e,t),Ri.set(t,e)),t}const Ir=e=>Ri.get(e);function Ac(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const o=indexedDB.open(e,t),s=st(o);return r&&o.addEventListener("upgradeneeded",l=>{r(st(o.result),l.oldVersion,l.newVersion,st(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),s.then(l=>{a&&l.addEventListener("close",()=>a()),i&&l.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),s}const Oc=["get","getKey","getAll","getAllKeys","count"],Ec=["put","add","delete","clear"],Sr=new Map;function Ra(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Sr.get(t))return Sr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Ec.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Oc.includes(n)))return;const a=async function(o,...s){const l=this.transaction(o,i?"readwrite":"readonly");let f=l.store;return r&&(f=f.index(s.shift())),(await Promise.all([f[n](...s),i&&l.done]))[0]};return Sr.set(t,a),a}wc(e=>({...e,get:(t,n,r)=>Ra(t,n)||e.get(t,n,r),has:(t,n)=>!!Ra(t,n)||e.has(t,n)}));function pr(){return new Promise((e,t)=>{const n=Ac("noteDB",1,{upgrade(r){r.createObjectStore("note",{keyPath:"id",autoIncrement:!0}).createIndex("strengthIndex","strength")}});e(n)})}async function Cc(e,t){new Date().getTime();const r=await pr();r.add("note",{title:e,description:t}),await r.transaction("note").store.openCursor()}async function Tr(){return await(await pr()).getAll("note")}async function Pc(e){(await pr()).delete("note",e)}async function Ic(e,t,n){await(await pr()).put("note",{id:e,title:t,description:n})}function Nr(e,t){return typeof e>"u"?t:e}function za(e){const t=Array(e);for(let n=0;n<e;n++)t[n]=Ae();return t}function Sc(e){return Object.keys(e)}function Ae(){return Object.create(null)}function Tc(e){return[].concat.apply([],e)}function Nc(e,t){return t.length-e.length}function Mc(e){return e.constructor===Array}function Zn(e){return typeof e=="string"}function ni(e){return typeof e=="object"}function Lc(e){return typeof e=="function"}function Fc(e,t,n,r){if(e&&(t&&(e=Mr(e,t)),this.matcher&&(e=Mr(e,this.matcher)),this.stemmer&&1<e.length&&(e=Mr(e,this.stemmer)),r&&1<e.length&&(e=jc(e)),n||n==="")){const i=e.split(n);return this.filter?Dc(i,this.filter):i}return e}const Rc=/[\p{Z}\p{S}\p{P}\p{C}]+/u;function zc(e){const t=Ae();for(let n=0,r=e.length;n<r;n++)t[e[n]]=1;return t}function ja(e,t){const n=Sc(e),r=n.length,i=[];let a="",o=0;for(let s,l,f=0;f<r;f++)s=n[f],l=e[s],l?(i[o++]=Da(t?"(?!\\b)"+s+"(\\b|_)":s),i[o++]=l):a+=(a?"|":"")+s;return a&&(i[o++]=Da(t?"(?!\\b)("+a+")(\\b|_)":"("+a+")"),i[o]=""),i}function Mr(e,t){for(let n=0,r=t.length;n<r&&(e=e.replace(t[n],t[n+1]),!!e);n+=2);return e}function Da(e){return new RegExp(e,"g")}function jc(e){let t="",n="";for(let r,i=0,a=e.length;i<a;i++)(r=e[i])!==n&&(t+=n=r);return t}function Dc(e,t){const n=e.length,r=[];for(let i=0,a=0;i<n;i++){const o=e[i];o&&!t[o]&&(r[a++]=o)}return r}function $c(e){return Fc.call(this,(""+e).toLowerCase(),!1,Rc,!1)}const Bc={},Uc={};function Hc(e){qt(e,"add"),qt(e,"append"),qt(e,"search"),qt(e,"update"),qt(e,"remove")}function qt(e,t){e[t+"Async"]=function(){const n=this,r=arguments,i=r[r.length-1];let a;Lc(i)&&(a=i,delete r[r.length-1]);const o=new Promise(function(s){setTimeout(function(){n.async=!0;const l=n[t].apply(n,r);n.async=!1,s(l)})});return a?(o.then(a),this):o}}function Wc(e,t,n,r){const i=e.length;let a,o,s=[],l=0;r&&(r=[]);for(let f=i-1;0<=f;f--){const u=e[f],m=u.length,h=Ae();let g=!a;for(let O=0;O<m;O++){const C=u[O],F=C.length;if(F)for(let x,w,L=0;L<F;L++)if(w=C[L],a){if(a[w]){if(!f){if(n)n--;else if(s[l++]=w,l===t)return s}(f||r)&&(h[w]=1),g=!0}if(r&&(x=(o[w]||0)+1,o[w]=x,x<i)){const P=r[x-2]||(r[x-2]=[]);P[P.length]=w}}else h[w]=1}if(r)a||(o=h);else if(!g)return[];a=h}if(r)for(let f,u,m=r.length-1;0<=m;m--){f=r[m],u=f.length;for(let h,g=0;g<u;g++)if(h=f[g],!a[h]){if(n)n--;else if(s[l++]=h,l===t)return s;a[h]=1}}return s}function Wn(e){this.limit=e!==!0&&e,this.cache=Ae(),this.queue=[]}function Yc(e,t,n){ni(e)&&(e=e.query);let r=this.cache.get(e);return r||(r=this.search(e,t,n),this.cache.set(e,r)),r}Wn.prototype.set=function(e,t){if(!this.cache[e]){let n=this.queue.length;n===this.limit?delete this.cache[this.queue[n-1]]:n++;for(let r=n-1;0<r;r--)this.queue[r]=this.queue[r-1];this.queue[0]=e}this.cache[e]=t},Wn.prototype.get=function(e){const t=this.cache[e];if(this.limit&&t){const n=this.queue.indexOf(e);if(n){const r=this.queue[n-1];this.queue[n-1]=this.queue[n],this.queue[n]=r}}return t},Wn.prototype.del=function(e){for(let t,n,r=0;r<this.queue.length;r++)n=this.queue[r],t=this.cache[n],t.includes(e)&&(this.queue.splice(r--,1),delete this.cache[n])};const Kc={memory:{charset:"latin:extra",resolution:3,minlength:4,fastupdate:!1},performance:{resolution:3,minlength:3,optimize:!1,context:{depth:2,resolution:1}},match:{charset:"latin:extra",tokenize:"reverse"},score:{charset:"latin:advanced",resolution:20,minlength:3,context:{depth:3,resolution:9}},default:{}};function qc(e){if(Zn(e))e=Kc[e];else{const t=e.preset;t&&(e=Object.assign({},t[t],e))}return e}function Vc(e,t,n,r,i,a,o){setTimeout(function(){const s=e(n?n+"."+r:r,JSON.stringify(o));s&&s.then?s.then(function(){t.export(e,t,n,i,a+1)}):t.export(e,t,n,i,a+1)})}function Xc(e,t,n,r,i){let a,o;switch(i||(i=0)){case 0:if(a="reg",this.fastupdate)for(let s in o=Ae(),this.register)o[s]=1;else o=this.register;break;case 1:a="cfg",o={doc:0,opt:this.optimize?1:0};break;case 2:a="map",o=this.map;break;case 3:a="ctx",o=this.ctx;break;default:return}return Vc(e,t||this,n,a,r,i,o),!0}function Jc(e,t){t&&(Zn(t)&&(t=JSON.parse(t)),e==="cfg"?this.optimize=!!t.opt:e==="reg"?(this.fastupdate=!1,this.register=t):e==="map"?this.map=t:e==="ctx"&&(this.ctx=t))}function ye(e,t){if(!(this instanceof ye))return new ye(e);let n,r,i;e?(e=qc(e),n=e.charset,r=e.lang,Zn(n)&&(n.indexOf(":")===-1&&(n+=":default"),n=Uc[n]),Zn(r)&&(r=Bc[r])):e={};let a,o,s=e.context||{};this.encode=e.encode||n&&n.encode||$c,this.register=t||Ae(),this.resolution=a=e.resolution||9,this.tokenize=i=n&&n.tokenize||e.tokenize||"strict",this.depth=i==="strict"&&s.depth,this.bidirectional=Nr(s.bidirectional,!0),this.optimize=o=Nr(e.optimize,!0),this.fastupdate=Nr(e.fastupdate,!0),this.minlength=e.minlength||1,this.boost=e.boost,this.map=o?za(a):Ae(),this.resolution_ctx=a=s.resolution||1,this.ctx=o?za(a):Ae(),this.rtl=n&&n.rtl||e.rtl,this.matcher=(i=e.matcher||r&&r.matcher)&&ja(i,!1),this.stemmer=(i=e.stemmer||r&&r.stemmer)&&ja(i,!0),this.filter=(i=e.filter||r&&r.filter)&&zc(i),this.cache=(i=e.cache)&&new Wn(i)}ye.prototype.append=function(e,t){return this.add(e,t,!0)},ye.prototype.add=function(e,t,n,r){if(t&&(e||e===0)){if(!r&&!n&&this.register[e])return this.update(e,t);t=this.encode(""+t);const i=t.length;if(i){const a=Ae(),o=Ae(),s=this.depth,l=this.resolution;for(let f=0;f<i;f++){let u=t[this.rtl?i-1-f:f],m=u.length;if(u&&m>=this.minlength&&(s||!o[u])){let h=Cn(l,i,f),g="";switch(this.tokenize){case"full":if(2<m){for(let O=0;O<m;O++)for(let C=m;C>O;C--)if(C-O>=this.minlength){const F=Cn(l,i,f,m,O);g=u.substring(O,C),this.push_index(o,g,F,e,n)}break}case"reverse":if(1<m){for(let O=m-1;0<O;O--)if(g=u[O]+g,g.length>=this.minlength){const C=Cn(l,i,f,m,O);this.push_index(o,g,C,e,n)}g=""}case"forward":if(1<m){for(let O=0;O<m;O++)g+=u[O],g.length>=this.minlength&&this.push_index(o,g,h,e,n);break}default:if(this.boost&&(h=Math.min(0|h/this.boost(t,u,f),l-1)),this.push_index(o,u,h,e,n),s&&1<i&&f<i-1){const O=Ae(),C=this.resolution_ctx,F=u,x=Math.min(s+1,i-f);O[F]=1;for(let w=1;w<x;w++)if(u=t[this.rtl?i-1-f-w:f+w],u&&u.length>=this.minlength&&!O[u]){O[u]=1;const L=Cn(C+(i/2>C?0:1),i,f,x-1,w-1),P=this.bidirectional&&u>F;this.push_index(a,P?F:u,L,e,n,P?u:F)}}}}}this.fastupdate||(this.register[e]=1)}}return this};function Cn(e,t,n,r,i){return n&&1<e?t+(r||0)<=e?n+(i||0):0|(e-1)/(t+(r||0))*(n+(i||0))+1:0}ye.prototype.push_index=function(e,t,n,r,i,a){let o=a?this.ctx:this.map;if((!e[t]||a&&!e[t][a])&&(this.optimize&&(o=o[n]),a?(e=e[t]||(e[t]=Ae()),e[a]=1,o=o[a]||(o[a]=Ae())):e[t]=1,o=o[t]||(o[t]=[]),this.optimize||(o=o[n]||(o[n]=[])),(!i||!o.includes(r))&&(o[o.length]=r,this.fastupdate))){const s=this.register[r]||(this.register[r]=[]);s[s.length]=o}},ye.prototype.search=function(e,t,n){n||(!t&&ni(e)?(n=e,e=n.query):ni(t)&&(n=t));let r,i,a,o=[],s=0;if(n&&(e=n.query||e,t=n.limit,s=n.offset||0,i=n.context,a=n.suggest),e&&(e=this.encode(""+e),r=e.length,1<r)){const m=Ae(),h=[];for(let g,O=0,C=0;O<r;O++)if(g=e[O],g&&g.length>=this.minlength&&!m[g]){if(!this.optimize&&!a&&!this.map[g])return o;h[C++]=g,m[g]=1}e=h,r=e.length}if(!r)return o;t||(t=100);let l,f=this.depth&&1<r&&i!==!1,u=0;f?(l=e[0],u=1):1<r&&e.sort(Nc);for(let m,h;u<r;u++){if(h=e[u],f?(m=this.add_result(o,a,t,s,r===2,h,l),(!a||m!==!1||!o.length)&&(l=h)):m=this.add_result(o,a,t,s,r===1,h),m)return m;if(a&&u==r-1){let g=o.length;if(!g){if(f){f=0,u=-1;continue}return o}if(g===1)return $a(o[0],t,s)}}return Wc(o,t,s,a)},ye.prototype.add_result=function(e,t,n,r,i,a,o){let s=[],l=o?this.ctx:this.map;if(this.optimize||(l=Ba(l,a,o,this.bidirectional)),l){let f=0;const u=Math.min(l.length,o?this.resolution_ctx:this.resolution);for(let m,h,g=0,O=0;g<u&&(m=l[g],!(m&&(this.optimize&&(m=Ba(m,a,o,this.bidirectional)),r&&m&&i&&(h=m.length,h<=r?(r-=h,m=null):(m=m.slice(r),r=0)),m&&(s[f++]=m,i&&(O+=m.length,O>=n)))));g++);if(f)return i?$a(s,n,0):void(e[e.length]=s)}return!t&&s};function $a(e,t,n){return e=e.length===1?e[0]:Tc(e),n||e.length>t?e.slice(n,n+t):e}function Ba(e,t,n,r){if(n){const i=r&&t>n;e=e[i?t:n],e=e&&e[i?n:t]}else e=e[t];return e}ye.prototype.contain=function(e){return!!this.register[e]},ye.prototype.update=function(e,t){return this.remove(e).add(e,t)},ye.prototype.remove=function(e,t){const n=this.register[e];if(n){if(this.fastupdate)for(let r,i=0;i<n.length;i++)r=n[i],r.splice(r.indexOf(e),1);else Qn(this.map,e,this.resolution,this.optimize),this.depth&&Qn(this.ctx,e,this.resolution_ctx,this.optimize);t||delete this.register[e],this.cache&&this.cache.del(e)}return this};function Qn(e,t,n,r,i){let a=0;if(Mc(e))if(i){const o=e.indexOf(t);o===-1?a++:1<e.length&&(e.splice(o,1),a++)}else{i=Math.min(e.length,n);for(let o,s=0;s<i;s++)o=e[s],o&&(a=Qn(o,t,n,r,i),!r&&!a&&delete e[s])}else for(let o in e)a=Qn(e[o],t,n,r,i),a||delete e[o];return a}ye.prototype.searchCache=Yc,ye.prototype.export=Xc,ye.prototype.import=Jc,Hc(ye.prototype);const Gc={key:0,class:"sticky w-full top-0 bg-white p-2 drop-shadow shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] dark:bg-zinc-900 mb-2"},Zc={class:"flex justify-center bg-gray-100 p-2 rounded-md dark:bg-zinc-800"},Qc={key:0},eu=["value"],tu={key:1,class:"h-screen flex flex-col w-full dark:bg-zinc-900 p-[2rem] py-0"},nu={class:"grid xl:grid-cols-9 xl:gap-4 md:grid-cols-5 md:gap-3 ph:grid-cols-2 ph:gap-2 dark:bg-zinc-900"},ru=["onClick"],iu={class:"font-normal text-start dark:bg-zinc-900"},au={key:0},ou={key:0,class:"flex justify-center"},su={class:"w-[30rem] shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] hover:shadow-[0_7px_15px_1px_rgba(0,0,0,0.5)] p-1 rounded-md dark:bg-zinc-900 mb-2"},lu={key:0,class:"grid grid-cols-2"},fu={key:1},cu={class:"grid xl:grid-cols-7 xl:gap-4 md:grid-cols-5 md:gap-3 ph:grid-cols-2 ph:gap-2 dark:bg-zinc-900 pb-4"},uu=["onClick"],du={class:"font-normal text-left dark:bg-zinc-900"},mu={key:1,class:"fixed bottom-0 rigth-0 pb-4 place-self-end"},hu={key:2,class:"p-[2rem]"},pu={class:"grid grid-cols-2"},gu=["value"],vu=["value"],bu={key:3,class:"p-[2rem]"},yu={class:"grid grid-cols-2"},xu={__name:"App",setup(e){const t=ce(""),n=ce(""),r=ce([]),i=ce(!1),a=ce([]),o=ce([]),s=ce(!1),l=ce(!1),f=ce(!1),u=ce(window.innerWidth),m=ce(""),h=ce("");ce([]);const g=ce([]),O=ce(!1),C=ce(),F=ce(!1),x=ce(new ye({tokenize:"full"}));async function w(){if(C.value!=h.value){const te=await Tr();if(C.value=h.value,console.log("valueSearch.value",h.value),h.value.length>0){console.log("teste",te),O.value=!0,g.value=[];const Y=x.value.search(h.value),D=Y.length;for(let we=0;we<D;we++){const ne=Y[we],Z=te.find(Te=>Te.id==ne).title,K=te.find(Te=>Te.id==ne).description;g.value.push([{id:ne,title:Z,description:K}])}}else g.value.length>0&&(O.value=!0)}console.log("searchNote",g.value)}const L=()=>{g.value="",h.value="",O.value=!1};function P(){u.value=window.innerWidth,u.value<500?m.value=!0:m.value=!1}const H=()=>{r.value[1]!=a.value[1]||r.value[2]!=a.value[2]?(setTimeout(()=>{l.value=!0},150),f.value=!0):(l.value=!1,f.value=!1)},se=te=>{const R=o.value.length;for(let Y=0;Y<R;Y++)if(o.value[Y].id===te){r.value="";const we=o.value[Y].title,ne=o.value[Y].description;r.value=[te,we,ne],a.value=[te,we,ne],i.value=!0}console.log("indexNote",r.value)};async function ie(){o.value=[],o.value=await Tr();const te=o.value.length;console.log("allNote.value",o.value);for(let R=0;te>=R;R++){const Y=o.value[R].title;console.log("title",Y);const D=o.value[R].description,we=o.value[R].id;x.value.add(we,Y),x.value.append(we,D)}console.log("index.value",x.value)}async function ve(te){const R=t.value,Y=n.value;if(R!=""||Y!=""){await Cc(R,Y);const D=await Tr();o.value=D,t.value="",n.value="",s.value=!1,ie()}F.value=!1,console.log(F)}const xe=()=>{const te=r.value[0];Pc(te),ie(),C.value=null,w(),i.value=!1,console.log("id",te),console.log("indexbefore",x.value)},Se=()=>{const te=r.value[0],R=r.value[1],Y=r.value[2];Ic(te,R,Y),ie(),i.value=!1};return Vo(()=>{ie(),window.addEventListener("resize",P),P()}),(te,R)=>{const Y=uf("font-awesome-icon");return ue(),me("section",null,[i.value?Pe("",!0):(ue(),me("nav",Gc,[ee("div",Zc,[O.value?(ue(),me("span",Qc,[ee("button",{onClick:L},[ae(Y,{icon:"fa-solid fa-arrow-left"})])])):Pe("",!0),ee("input",Hn(w(),{value:h.value,onInput:R[0]||(R[0]=D=>h.value=D.target.value),placeholder:"Pesquise suas notas",class:"bg-gray-100 break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-800"}),null,16,eu)])])),!F.value&&!i.value?(ue(),me("div",tu,[ee("div",nu,[(ue(!0),me(Le,null,da(g.value,D=>(ue(),me("div",{class:"container shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] p-2 rounded-md mt-2 content-start break-words font-semibold hover:shadow-[0_7px_15px_1px_rgba(0,0,0,0.5)] dark:bg-zinc-900",key:D,onClick:we=>(se(D[0].id),s.value=!1)},[Zr(bn(D[0].title)+" ",1),ee("p",iu,bn(D[0].description),1)],8,ru))),128))]),O.value?Pe("",!0):(ue(),me("div",au,[m.value?Pe("",!0):(ue(),me("div",ou,[ee("div",su,[s.value?(ue(),me("div",lu,[ee("button",{class:"place-self-start",onClick:R[1]||(R[1]=D=>(ve(x.value),s.value=!1,i.value=!1))},[ae(Y,{icon:"fa-solid fa-arrow-left"})]),t.value||n.value?(ue(),me("button",{key:0,onClick:R[2]||(R[2]=D=>(s.value=!1,t.value=null,n.value=null)),class:"place-self-end"},[ae(Y,{icon:"fa-solid fa-trash",style:{color:"#707070"}})])):Pe("",!0)])):Pe("",!0),On(ee("input",{onClick:R[3]||(R[3]=D=>s.value=!0),id:"title",type:"text","onUpdate:modelValue":R[4]||(R[4]=D=>t.value=D),placeholder:"Título",class:"text-2xl font-bold break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900"},null,512),[[En,t.value]]),s.value?(ue(),me("div",fu,[On(ee("textarea",{"onUpdate:modelValue":R[5]||(R[5]=D=>n.value=D),rows:"5",autoResize:"",class:"m-1 overflow-auto focus:outline-none w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-zinc-900",placeholder:"Criar uma nota",required:"",style:{}},null,512),[[En,n.value]])])):Pe("",!0)])])),ee("div",cu,[(ue(!0),me(Le,null,da(o.value,D=>(ue(),me("div",{class:"container shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] p-2 rounded-md mt-2 content-start break-words font-semibold hover:shadow-[0_7px_15px_1px_rgba(0,0,0,0.5)] dark:bg-zinc-900 dark:shadow-none dark:border-2 dark:border-gray-700",key:D,onClick:we=>(se(D.id),s.value=!1)},[Zr(bn(D.title)+" ",1),ee("p",du,bn(D.description),1)],8,uu))),128))])])),m.value&&!O.value?(ue(),me("footer",mu,[ee("button",{onClick:R[6]||(R[6]=D=>(F.value=!0,i.value=!0))},[ae(Y,{icon:"fa-solid fa-circle-plus",size:"2xl"})])])):Pe("",!0)])):Pe("",!0),i.value&&!F.value?(ue(),me("div",hu,[ee("div",pu,[ee("button",{class:"place-self-start",onClick:R[7]||(R[7]=D=>(ve(x.value),Se(),i.value=!1))},[ae(Y,{icon:"fa-solid fa-arrow-left"})]),ee("button",{onClick:R[8]||(R[8]=D=>(i.value=!1,xe())),class:"place-self-end"},[ae(Y,{icon:"fa-solid fa-trash",style:{color:"#707070"}})])]),ee("input",Hn(H(),{value:r.value[1],onInput:R[9]||(R[9]=D=>r.value[1]=D.target.value),placeholder:"Título",class:"text-2xl font-bold break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900"}),null,16,gu),ee("textarea",Hn(H(),{value:r.value[2],onInput:R[10]||(R[10]=D=>r.value[2]=D.target.value),rows:"35",class:"overflow-auto focus:outline-none w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-zinc-900 m-1",placeholder:"Nota",required:"",style:{}}),null,16,vu)])):Pe("",!0),F.value?(ue(),me("div",bu,[ee("div",yu,[ee("button",{onClick:R[11]||(R[11]=D=>(ve(x.value),i.value=!1)),class:"place-self-start"},[ae(Y,{icon:"fa-solid fa-arrow-left"})]),t.value||n.value?(ue(),me("button",{key:0,onClick:R[12]||(R[12]=D=>(F.value=!1,i.value=!1,t.value=null,n.value=null)),class:"place-self-end"},[ae(Y,{icon:"fa-solid fa-trash",style:{color:"#707070"}})])):Pe("",!0)]),On(ee("input",{type:"text","onUpdate:modelValue":R[13]||(R[13]=D=>t.value=D),placeholder:"Título",class:"text-2xl font-bold break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900"},null,512),[[En,t.value]]),On(ee("textarea",{"onUpdate:modelValue":R[14]||(R[14]=D=>n.value=D),rows:"35",class:"overflow-auto focus:outline-none w-full px-0 text-sm text-gray-900 m-2 bg-white border-0 dark:bg-zinc-900",placeholder:"Nota",required:"",style:{}},null,512),[[En,n.value]])])):Pe("",!0)])}}};function Ua(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ua(Object(n),!0).forEach(function(r){fe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ua(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function er(e){"@babel/helpers - typeof";return er=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},er(e)}function wu(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ha(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _u(e,t,n){return t&&Ha(e.prototype,t),n&&Ha(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zi(e,t){return Au(e)||Eu(e,t)||us(e,t)||Pu()}function mn(e){return ku(e)||Ou(e)||us(e)||Cu()}function ku(e){if(Array.isArray(e))return ri(e)}function Au(e){if(Array.isArray(e))return e}function Ou(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Eu(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function us(e,t){if(e){if(typeof e=="string")return ri(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ri(e,t)}}function ri(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Cu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Wa=function(){},ji={},ds={},ms=null,hs={mark:Wa,measure:Wa};try{typeof window<"u"&&(ji=window),typeof document<"u"&&(ds=document),typeof MutationObserver<"u"&&(ms=MutationObserver),typeof performance<"u"&&(hs=performance)}catch{}var Iu=ji.navigator||{},Ya=Iu.userAgent,Ka=Ya===void 0?"":Ya,ft=ji,G=ds,qa=ms,Pn=hs;ft.document;var tt=!!G.documentElement&&!!G.head&&typeof G.addEventListener=="function"&&typeof G.createElement=="function",ps=~Ka.indexOf("MSIE")||~Ka.indexOf("Trident/"),In,Sn,Tn,Nn,Mn,Ge="___FONT_AWESOME___",ii=16,gs="fa",vs="svg-inline--fa",At="data-fa-i2svg",ai="data-fa-pseudo-element",Su="data-fa-pseudo-element-pending",Di="data-prefix",$i="data-icon",Va="fontawesome-i2svg",Tu="async",Nu=["HTML","HEAD","STYLE","SCRIPT"],bs=function(){try{return!0}catch{return!1}}(),J="classic",re="sharp",Bi=[J,re];function hn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[J]}})}var ln=hn((In={},fe(In,J,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),fe(In,re,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),In)),fn=hn((Sn={},fe(Sn,J,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),fe(Sn,re,{solid:"fass",regular:"fasr",light:"fasl"}),Sn)),cn=hn((Tn={},fe(Tn,J,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),fe(Tn,re,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Tn)),Mu=hn((Nn={},fe(Nn,J,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),fe(Nn,re,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Nn)),Lu=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,ys="fa-layers-text",Fu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ru=hn((Mn={},fe(Mn,J,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),fe(Mn,re,{900:"fass",400:"fasr",300:"fasl"}),Mn)),xs=[1,2,3,4,5,6,7,8,9,10],zu=xs.concat([11,12,13,14,15,16,17,18,19,20]),ju=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],yt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},un=new Set;Object.keys(fn[J]).map(un.add.bind(un));Object.keys(fn[re]).map(un.add.bind(un));var Du=[].concat(Bi,mn(un),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",yt.GROUP,yt.SWAP_OPACITY,yt.PRIMARY,yt.SECONDARY]).concat(xs.map(function(e){return"".concat(e,"x")})).concat(zu.map(function(e){return"w-".concat(e)})),Qt=ft.FontAwesomeConfig||{};function $u(e){var t=G.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Bu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(G&&typeof G.querySelector=="function"){var Uu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Uu.forEach(function(e){var t=zi(e,2),n=t[0],r=t[1],i=Bu($u(n));i!=null&&(Qt[r]=i)})}var ws={styleDefault:"solid",familyDefault:"classic",cssPrefix:gs,replacementClass:vs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Qt.familyPrefix&&(Qt.cssPrefix=Qt.familyPrefix);var $t=I(I({},ws),Qt);$t.autoReplaceSvg||($t.observeMutations=!1);var T={};Object.keys(ws).forEach(function(e){Object.defineProperty(T,e,{enumerable:!0,set:function(n){$t[e]=n,en.forEach(function(r){return r(T)})},get:function(){return $t[e]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(t){$t.cssPrefix=t,en.forEach(function(n){return n(T)})},get:function(){return $t.cssPrefix}});ft.FontAwesomeConfig=T;var en=[];function Hu(e){return en.push(e),function(){en.splice(en.indexOf(e),1)}}var rt=ii,Ye={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Wu(e){if(!(!e||!tt)){var t=G.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=G.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return G.head.insertBefore(t,r),e}}var Yu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function dn(){for(var e=12,t="";e-- >0;)t+=Yu[Math.random()*62|0];return t}function Wt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ui(e){return e.classList?Wt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function _s(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ku(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(_s(e[n]),'" ')},"").trim()}function gr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Hi(e){return e.size!==Ye.size||e.x!==Ye.x||e.y!==Ye.y||e.rotate!==Ye.rotate||e.flipX||e.flipY}function qu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:f}}function Vu(e){var t=e.transform,n=e.width,r=n===void 0?ii:n,i=e.height,a=i===void 0?ii:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&ps?l+="translate(".concat(t.x/rt-r/2,"em, ").concat(t.y/rt-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/rt,"em), calc(-50% + ").concat(t.y/rt,"em)) "):l+="translate(".concat(t.x/rt,"em, ").concat(t.y/rt,"em) "),l+="scale(".concat(t.size/rt*(t.flipX?-1:1),", ").concat(t.size/rt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Xu=`:root, :host {
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
}`;function ks(){var e=gs,t=vs,n=T.cssPrefix,r=T.replacementClass,i=Xu;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var Xa=!1;function Lr(){T.autoAddCss&&!Xa&&(Wu(ks()),Xa=!0)}var Ju={mixout:function(){return{dom:{css:ks,insertCss:Lr}}},hooks:function(){return{beforeDOMElementCreation:function(){Lr()},beforeI2svg:function(){Lr()}}}},Ze=ft||{};Ze[Ge]||(Ze[Ge]={});Ze[Ge].styles||(Ze[Ge].styles={});Ze[Ge].hooks||(Ze[Ge].hooks={});Ze[Ge].shims||(Ze[Ge].shims=[]);var ze=Ze[Ge],As=[],Gu=function e(){G.removeEventListener("DOMContentLoaded",e),tr=1,As.map(function(t){return t()})},tr=!1;tt&&(tr=(G.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(G.readyState),tr||G.addEventListener("DOMContentLoaded",Gu));function Zu(e){tt&&(tr?setTimeout(e,0):As.push(e))}function pn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?_s(e):"<".concat(t," ").concat(Ku(r),">").concat(a.map(pn).join(""),"</").concat(t,">")}function Ja(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Qu=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},Fr=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=i!==void 0?Qu(n,i):n,l,f,u;for(r===void 0?(l=1,u=t[a[0]]):(l=0,u=r);l<o;l++)f=a[l],u=s(u,t[f],f,t);return u};function ed(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function oi(e){var t=ed(e);return t.length===1?t[0].toString(16):null}function td(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Ga(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function si(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Ga(t);typeof ze.hooks.addPack=="function"&&!i?ze.hooks.addPack(e,Ga(t)):ze.styles[e]=I(I({},ze.styles[e]||{}),a),e==="fas"&&si("fa",t)}var Ln,Fn,Rn,St=ze.styles,nd=ze.shims,rd=(Ln={},fe(Ln,J,Object.values(cn[J])),fe(Ln,re,Object.values(cn[re])),Ln),Wi=null,Os={},Es={},Cs={},Ps={},Is={},id=(Fn={},fe(Fn,J,Object.keys(ln[J])),fe(Fn,re,Object.keys(ln[re])),Fn);function ad(e){return~Du.indexOf(e)}function od(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!ad(i)?i:null}var Ss=function(){var t=function(a){return Fr(St,function(o,s,l){return o[l]=Fr(s,a,{}),o},{})};Os=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),Es=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),Is=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in St||T.autoFetchSvg,r=Fr(nd,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});Cs=r.names,Ps=r.unicodes,Wi=vr(T.styleDefault,{family:T.familyDefault})};Hu(function(e){Wi=vr(e.styleDefault,{family:T.familyDefault})});Ss();function Yi(e,t){return(Os[e]||{})[t]}function sd(e,t){return(Es[e]||{})[t]}function xt(e,t){return(Is[e]||{})[t]}function Ts(e){return Cs[e]||{prefix:null,iconName:null}}function ld(e){var t=Ps[e],n=Yi("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ct(){return Wi}var Ki=function(){return{prefix:null,iconName:null,rest:[]}};function vr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?J:n,i=ln[r][e],a=fn[r][e]||fn[r][i],o=e in ze.styles?e:null;return a||o||null}var Za=(Rn={},fe(Rn,J,Object.keys(cn[J])),fe(Rn,re,Object.keys(cn[re])),Rn);function br(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},fe(t,J,"".concat(T.cssPrefix,"-").concat(J)),fe(t,re,"".concat(T.cssPrefix,"-").concat(re)),t),o=null,s=J;(e.includes(a[J])||e.some(function(f){return Za[J].includes(f)}))&&(s=J),(e.includes(a[re])||e.some(function(f){return Za[re].includes(f)}))&&(s=re);var l=e.reduce(function(f,u){var m=od(T.cssPrefix,u);if(St[u]?(u=rd[s].includes(u)?Mu[s][u]:u,o=u,f.prefix=u):id[s].indexOf(u)>-1?(o=u,f.prefix=vr(u,{family:s})):m?f.iconName=m:u!==T.replacementClass&&u!==a[J]&&u!==a[re]&&f.rest.push(u),!i&&f.prefix&&f.iconName){var h=o==="fa"?Ts(f.iconName):{},g=xt(f.prefix,f.iconName);h.prefix&&(o=null),f.iconName=h.iconName||g||f.iconName,f.prefix=h.prefix||f.prefix,f.prefix==="far"&&!St.far&&St.fas&&!T.autoFetchSvg&&(f.prefix="fas")}return f},Ki());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===re&&(St.fass||T.autoFetchSvg)&&(l.prefix="fass",l.iconName=xt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=ct()||"fas"),l}var fd=function(){function e(){wu(this,e),this.definitions={}}return _u(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=I(I({},n.definitions[s]||{}),o[s]),si(s,o[s]);var l=cn[J][s];l&&si(l,o[s]),Ss()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,f=o.icon,u=f[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),Qa=[],Tt={},Rt={},cd=Object.keys(Rt);function ud(e,t){var n=t.mixoutsTo;return Qa=e,Tt={},Object.keys(Rt).forEach(function(r){cd.indexOf(r)===-1&&delete Rt[r]}),Qa.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),er(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){Tt[o]||(Tt[o]=[]),Tt[o].push(a[o])})}r.provides&&r.provides(Rt)}),n}function li(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Tt[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Ot(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Tt[e]||[];i.forEach(function(a){a.apply(null,n)})}function Qe(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Rt[e]?Rt[e].apply(null,t):void 0}function fi(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ct();if(t)return t=xt(n,t)||t,Ja(Ns.definitions,n,t)||Ja(ze.styles,n,t)}var Ns=new fd,dd=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,Ot("noAuto")},md={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return tt?(Ot("beforeI2svg",t),Qe("pseudoElements2svg",t),Qe("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,Zu(function(){pd({autoReplaceSvgRoot:n}),Ot("watch",t)})}},hd={icon:function(t){if(t===null)return null;if(er(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:xt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=vr(t[0]);return{prefix:r,iconName:xt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(T.cssPrefix,"-"))>-1||t.match(Lu))){var i=br(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||ct(),iconName:xt(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=ct();return{prefix:a,iconName:xt(a,t)||t}}}},Ce={noAuto:dd,config:T,dom:md,parse:hd,library:Ns,findIconDefinition:fi,toHtml:pn},pd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?G:n;(Object.keys(ze.styles).length>0||T.autoFetchSvg)&&tt&&T.autoReplaceSvg&&Ce.dom.i2svg({node:r})};function yr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return pn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(tt){var r=G.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function gd(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Hi(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};i.style=gr(I(I({},a),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function vd(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(T.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},i),{},{id:o}),children:r}]}]}function qi(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,u=e.titleId,m=e.extra,h=e.watchable,g=h===void 0?!1:h,O=r.found?r:n,C=O.width,F=O.height,x=i==="fak",w=[T.replacementClass,a?"".concat(T.cssPrefix,"-").concat(a):""].filter(function(xe){return m.classes.indexOf(xe)===-1}).filter(function(xe){return xe!==""||!!xe}).concat(m.classes).join(" "),L={children:[],attributes:I(I({},m.attributes),{},{"data-prefix":i,"data-icon":a,class:w,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(F)})},P=x&&!~m.classes.indexOf("fa-fw")?{width:"".concat(C/F*16*.0625,"em")}:{};g&&(L.attributes[At]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(u||dn())},children:[l]}),delete L.attributes.title);var H=I(I({},L),{},{prefix:i,iconName:a,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:I(I({},P),m.styles)}),se=r.found&&n.found?Qe("generateAbstractMask",H)||{children:[],attributes:{}}:Qe("generateAbstractIcon",H)||{children:[],attributes:{}},ie=se.children,ve=se.attributes;return H.children=ie,H.attributes=ve,s?vd(H):gd(H)}function eo(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=I(I(I({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(f[At]="");var u=I({},o.styles);Hi(i)&&(u.transform=Vu({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=gr(u);m.length>0&&(f.style=m);var h=[];return h.push({tag:"span",attributes:f,children:[t]}),a&&h.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),h}function bd(e){var t=e.content,n=e.title,r=e.extra,i=I(I(I({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=gr(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Rr=ze.styles;function ci(e){var t=e[0],n=e[1],r=e.slice(4),i=zi(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(yt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(yt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(yt.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var yd={found:!1,width:512,height:512};function xd(e,t){!bs&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ui(e,t){var n=t;return t==="fa"&&T.styleDefault!==null&&(t=ct()),new Promise(function(r,i){if(Qe("missingIconAbstract"),n==="fa"){var a=Ts(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Rr[t]&&Rr[t][e]){var o=Rr[t][e];return r(ci(o))}xd(e,t),r(I(I({},yd),{},{icon:T.showMissingIcons&&e?Qe("missingIconAbstract")||{}:{}}))})}var to=function(){},di=T.measurePerformance&&Pn&&Pn.mark&&Pn.measure?Pn:{mark:to,measure:to},Jt='FA "6.4.0"',wd=function(t){return di.mark("".concat(Jt," ").concat(t," begins")),function(){return Ms(t)}},Ms=function(t){di.mark("".concat(Jt," ").concat(t," ends")),di.measure("".concat(Jt," ").concat(t),"".concat(Jt," ").concat(t," begins"),"".concat(Jt," ").concat(t," ends"))},Vi={begin:wd,end:Ms},Yn=function(){};function no(e){var t=e.getAttribute?e.getAttribute(At):null;return typeof t=="string"}function _d(e){var t=e.getAttribute?e.getAttribute(Di):null,n=e.getAttribute?e.getAttribute($i):null;return t&&n}function kd(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function Ad(){if(T.autoReplaceSvg===!0)return Kn.replace;var e=Kn[T.autoReplaceSvg];return e||Kn.replace}function Od(e){return G.createElementNS("http://www.w3.org/2000/svg",e)}function Ed(e){return G.createElement(e)}function Ls(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Od:Ed:n;if(typeof e=="string")return G.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(Ls(o,{ceFn:r}))}),i}function Cd(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Kn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Ls(i),n)}),n.getAttribute(At)===null&&T.keepOriginalSource){var r=G.createComment(Cd(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ui(n).indexOf(T.replacementClass))return Kn.replace(t);var i=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===T.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return pn(s)}).join(`
`);n.setAttribute(At,""),n.innerHTML=o}};function ro(e){e()}function Fs(e,t){var n=typeof t=="function"?t:Yn;if(e.length===0)n();else{var r=ro;T.mutateApproach===Tu&&(r=ft.requestAnimationFrame||ro),r(function(){var i=Ad(),a=Vi.begin("mutate");e.map(i),a(),n()})}}var Xi=!1;function Rs(){Xi=!0}function mi(){Xi=!1}var nr=null;function io(e){if(qa&&T.observeMutations){var t=e.treeCallback,n=t===void 0?Yn:t,r=e.nodeCallback,i=r===void 0?Yn:r,a=e.pseudoElementsCallback,o=a===void 0?Yn:a,s=e.observeMutationsRoot,l=s===void 0?G:s;nr=new qa(function(f){if(!Xi){var u=ct();Wt(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!no(m.addedNodes[0])&&(T.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&T.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&no(m.target)&&~ju.indexOf(m.attributeName))if(m.attributeName==="class"&&_d(m.target)){var h=br(Ui(m.target)),g=h.prefix,O=h.iconName;m.target.setAttribute(Di,g||u),O&&m.target.setAttribute($i,O)}else kd(m.target)&&i(m.target)})}}),tt&&nr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Pd(){nr&&nr.disconnect()}function Id(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Sd(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=br(Ui(e));return i.prefix||(i.prefix=ct()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=sd(i.prefix,e.innerText)||Yi(i.prefix,oi(e.innerText))),!i.iconName&&T.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Td(e){var t=Wt(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||dn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Nd(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ye,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ao(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Sd(e),r=n.iconName,i=n.prefix,a=n.rest,o=Td(e),s=li("parseNodeAttributes",{},e),l=t.styleParser?Id(e):[];return I({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Ye,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var Md=ze.styles;function zs(e){var t=T.autoReplaceSvg==="nest"?ao(e,{styleParser:!1}):ao(e);return~t.extra.classes.indexOf(ys)?Qe("generateLayersText",e,t):Qe("generateSvgReplacementMutation",e,t)}var ut=new Set;Bi.map(function(e){ut.add("fa-".concat(e))});Object.keys(ln[J]).map(ut.add.bind(ut));Object.keys(ln[re]).map(ut.add.bind(ut));ut=mn(ut);function oo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!tt)return Promise.resolve();var n=G.documentElement.classList,r=function(m){return n.add("".concat(Va,"-").concat(m))},i=function(m){return n.remove("".concat(Va,"-").concat(m))},a=T.autoFetchSvg?ut:Bi.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Md));a.includes("fa")||a.push("fa");var o=[".".concat(ys,":not([").concat(At,"])")].concat(a.map(function(u){return".".concat(u,":not([").concat(At,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Wt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Vi.begin("onTree"),f=s.reduce(function(u,m){try{var h=zs(m);h&&u.push(h)}catch(g){bs||g.name==="MissingIcon"&&console.error(g)}return u},[]);return new Promise(function(u,m){Promise.all(f).then(function(h){Fs(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(h){l(),m(h)})})}function Ld(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;zs(e).then(function(n){n&&Fs([n],t)})}function Fd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:fi(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:fi(i||{})),e(r,I(I({},n),{},{mask:i}))}}var Rd=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Ye:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,f=n.maskId,u=f===void 0?null:f,m=n.title,h=m===void 0?null:m,g=n.titleId,O=g===void 0?null:g,C=n.classes,F=C===void 0?[]:C,x=n.attributes,w=x===void 0?{}:x,L=n.styles,P=L===void 0?{}:L;if(t){var H=t.prefix,se=t.iconName,ie=t.icon;return yr(I({type:"icon"},t),function(){return Ot("beforeDOMElementCreation",{iconDefinition:t,params:n}),T.autoA11y&&(h?w["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(O||dn()):(w["aria-hidden"]="true",w.focusable="false")),qi({icons:{main:ci(ie),mask:l?ci(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:se,transform:I(I({},Ye),i),symbol:o,title:h,maskId:u,titleId:O,extra:{attributes:w,styles:P,classes:F}})})}},zd={mixout:function(){return{icon:Fd(Rd)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=oo,n.nodeCallback=Ld,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?G:r,a=n.callback,o=a===void 0?function(){}:a;return oo(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,u=r.mask,m=r.maskId,h=r.extra;return new Promise(function(g,O){Promise.all([ui(i,s),u.iconName?ui(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var F=zi(C,2),x=F[0],w=F[1];g([n,qi({icons:{main:x,mask:w},prefix:s,iconName:i,transform:l,symbol:f,maskId:m,title:a,titleId:o,extra:h,watchable:!0})])}).catch(O)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=gr(s);l.length>0&&(i.style=l);var f;return Hi(o)&&(f=Qe("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(f||a.icon),{children:r,attributes:i}}}},jd={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return yr({type:"layer"},function(){Ot("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers")].concat(mn(a)).join(" ")},children:o}]})}}}},Dd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return yr({type:"counter",content:n},function(){return Ot("beforeDOMElementCreation",{content:n,params:r}),bd({content:n.toString(),title:a,extra:{attributes:f,styles:m,classes:["".concat(T.cssPrefix,"-layers-counter")].concat(mn(s))}})})}}}},$d={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Ye:i,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,h=r.styles,g=h===void 0?{}:h;return yr({type:"text",content:n},function(){return Ot("beforeDOMElementCreation",{content:n,params:r}),eo({content:n,transform:I(I({},Ye),a),title:s,extra:{attributes:m,styles:g,classes:["".concat(T.cssPrefix,"-layers-text")].concat(mn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(ps){var f=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/f,l=u.height/f}return T.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,eo({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},Bd=new RegExp('"',"ug"),so=[1105920,1112319];function Ud(e){var t=e.replace(Bd,""),n=td(t,0),r=n>=so[0]&&n<=so[1],i=t.length===2?t[0]===t[1]:!1;return{value:oi(i?t[0]:t),isSecondary:r||i}}function lo(e,t){var n="".concat(Su).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Wt(e.children),o=a.filter(function(ie){return ie.getAttribute(ai)===t})[0],s=ft.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Fu),f=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?re:J,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?fn[h][l[2].toLowerCase()]:Ru[h][f],O=Ud(m),C=O.value,F=O.isSecondary,x=l[0].startsWith("FontAwesome"),w=Yi(g,C),L=w;if(x){var P=ld(C);P.iconName&&P.prefix&&(w=P.iconName,g=P.prefix)}if(w&&!F&&(!o||o.getAttribute(Di)!==g||o.getAttribute($i)!==L)){e.setAttribute(n,L),o&&e.removeChild(o);var H=Nd(),se=H.extra;se.attributes[ai]=t,ui(w,g).then(function(ie){var ve=qi(I(I({},H),{},{icons:{main:ie,mask:Ki()},prefix:g,iconName:L,extra:se,watchable:!0})),xe=G.createElement("svg");t==="::before"?e.insertBefore(xe,e.firstChild):e.appendChild(xe),xe.outerHTML=ve.map(function(Se){return pn(Se)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Hd(e){return Promise.all([lo(e,"::before"),lo(e,"::after")])}function Wd(e){return e.parentNode!==document.head&&!~Nu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ai)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function fo(e){if(tt)return new Promise(function(t,n){var r=Wt(e.querySelectorAll("*")).filter(Wd).map(Hd),i=Vi.begin("searchPseudoElements");Rs(),Promise.all(r).then(function(){i(),mi(),t()}).catch(function(){i(),mi(),n()})})}var Yd={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=fo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?G:r;T.searchPseudoElements&&fo(i)}}},co=!1,Kd={mixout:function(){return{dom:{unwatch:function(){Rs(),co=!0}}}},hooks:function(){return{bootstrap:function(){io(li("mutationObserverCallbacks",{}))},noAuto:function(){Pd()},watch:function(n){var r=n.observeMutationsRoot;co?mi():io(li("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},uo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},qd={mixout:function(){return{parse:{transform:function(n){return uo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=uo(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),f="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:m,path:h};return{tag:"g",attributes:I({},g.outer),children:[{tag:"g",attributes:I({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:I(I({},r.icon.attributes),g.path)}]}]}}}},zr={x:0,y:0,width:"100%",height:"100%"};function mo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Vd(e){return e.tag==="g"?e.children:[e]}var Xd={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?br(i.split(" ").map(function(o){return o.trim()})):Ki();return a.prefix||(a.prefix=ct()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,f=a.width,u=a.icon,m=o.width,h=o.icon,g=qu({transform:l,containerWidth:m,iconWidth:f}),O={tag:"rect",attributes:I(I({},zr),{},{fill:"white"})},C=u.children?{children:u.children.map(mo)}:{},F={tag:"g",attributes:I({},g.inner),children:[mo(I({tag:u.tag,attributes:I(I({},u.attributes),g.path)},C))]},x={tag:"g",attributes:I({},g.outer),children:[F]},w="mask-".concat(s||dn()),L="clip-".concat(s||dn()),P={tag:"mask",attributes:I(I({},zr),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[O,x]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:Vd(h)},P]};return r.push(H,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(w,")")},zr)}),{children:r,attributes:i}}}},Jd={provides:function(t){var n=!1;ft.matchMedia&&(n=ft.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:I(I({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=I(I({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:I(I({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:I(I({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:I(I({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:I(I({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:I(I({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Gd={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},Zd=[Ju,zd,jd,Dd,$d,Yd,Kd,qd,Xd,Jd,Gd];ud(Zd,{mixoutsTo:Ce});Ce.noAuto;Ce.config;var Qd=Ce.library;Ce.dom;var hi=Ce.parse;Ce.findIconDefinition;Ce.toHtml;var em=Ce.icon;Ce.layer;Ce.text;Ce.counter;function ho(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Xe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ho(Object(n),!0).forEach(function(r){_e(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ho(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function rr(e){"@babel/helpers - typeof";return rr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},rr(e)}function _e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tm(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function nm(e,t){if(e==null)return{};var n=tm(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var rm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},js={exports:{}};(function(e){(function(t){var n=function(x,w,L){if(!f(w)||m(w)||h(w)||g(w)||l(w))return w;var P,H=0,se=0;if(u(w))for(P=[],se=w.length;H<se;H++)P.push(n(x,w[H],L));else{P={};for(var ie in w)Object.prototype.hasOwnProperty.call(w,ie)&&(P[x(ie,L)]=n(x,w[ie],L))}return P},r=function(x,w){w=w||{};var L=w.separator||"_",P=w.split||/(?=[A-Z])/;return x.split(P).join(L)},i=function(x){return O(x)?x:(x=x.replace(/[\-_\s]+(.)?/g,function(w,L){return L?L.toUpperCase():""}),x.substr(0,1).toLowerCase()+x.substr(1))},a=function(x){var w=i(x);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(x,w){return r(x,w).toLowerCase()},s=Object.prototype.toString,l=function(x){return typeof x=="function"},f=function(x){return x===Object(x)},u=function(x){return s.call(x)=="[object Array]"},m=function(x){return s.call(x)=="[object Date]"},h=function(x){return s.call(x)=="[object RegExp]"},g=function(x){return s.call(x)=="[object Boolean]"},O=function(x){return x=x-0,x===x},C=function(x,w){var L=w&&"process"in w?w.process:w;return typeof L!="function"?x:function(P,H){return L(P,x,H)}},F={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(x,w){return n(C(i,w),x)},decamelizeKeys:function(x,w){return n(C(o,w),x,w)},pascalizeKeys:function(x,w){return n(C(a,w),x)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=F:t.humps=F})(rm)})(js);var im=js.exports,am=["class","style"];function om(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=im.camelize(n.slice(0,r)),a=n.slice(r+1).trim();return t[i]=a,t},{})}function sm(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ds(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Ds(l)}),i=Object.keys(e.attributes||{}).reduce(function(l,f){var u=e.attributes[f];switch(f){case"class":l.class=sm(u);break;case"style":l.style=om(u);break;default:l.attrs[f]=u}return l},{attrs:{},class:{},style:{}});n.class;var a=n.style,o=a===void 0?{}:a,s=nm(n,am);return Yf(e.tag,Xe(Xe(Xe({},t),{},{class:i.class,style:Xe(Xe({},i.style),o)},i.attrs),s),r)}var $s=!1;try{$s=!0}catch{}function lm(){if(!$s&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function jr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?_e({},e,t):{}}function fm(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},_e(t,"fa-".concat(e.size),e.size!==null),_e(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),_e(t,"fa-pull-".concat(e.pull),e.pull!==null),_e(t,"fa-swap-opacity",e.swapOpacity),_e(t,"fa-bounce",e.bounce),_e(t,"fa-shake",e.shake),_e(t,"fa-beat",e.beat),_e(t,"fa-fade",e.fade),_e(t,"fa-beat-fade",e.beatFade),_e(t,"fa-flash",e.flash),_e(t,"fa-spin-pulse",e.spinPulse),_e(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function po(e){if(e&&rr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(hi.icon)return hi.icon(e);if(e===null)return null;if(rr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var cm=Zl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=pt(function(){return po(t.icon)}),a=pt(function(){return jr("classes",fm(t))}),o=pt(function(){return jr("transform",typeof t.transform=="string"?hi.transform(t.transform):t.transform)}),s=pt(function(){return jr("mask",po(t.mask))}),l=pt(function(){return em(i.value,Xe(Xe(Xe(Xe({},a.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Dn(l,function(u){if(!u)return lm("Could not find one or more icon(s)",i.value,s.value)},{immediate:!0});var f=pt(function(){return l.value?Ds(l.value.abstract[0],{},r):null});return function(){return f.value}}}),um={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},dm={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},mm={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},hm={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},pm={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]};Qd.add(mm,hm,um,pm,dm);hc(xu).component("font-awesome-icon",cm).mount("#app");
