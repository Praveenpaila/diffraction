(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(c){if(c.ep)return;c.ep=!0;const f=i(c);fetch(c.href,f)}})();function px(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var sh={exports:{}},ll={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jv;function _1(){if(Jv)return ll;Jv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var h in c)h!=="key"&&(f[h]=c[h])}else f=c;return c=f.ref,{$$typeof:o,type:r,key:d,ref:c!==void 0?c:null,props:f}}return ll.Fragment=e,ll.jsx=i,ll.jsxs=i,ll}var t_;function x1(){return t_||(t_=1,sh.exports=_1()),sh.exports}var T=x1(),rh={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function y1(){if(e_)return ce;e_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),g=Symbol.for("react.view_transition"),M=Symbol.iterator;function E(U){return U===null||typeof U!="object"?null:(U=M&&U[M]||U["@@iterator"],typeof U=="function"?U:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,y={};function O(U,Y,ht){this.props=U,this.context=Y,this.refs=y,this.updater=ht||b}O.prototype.isReactComponent={},O.prototype.setState=function(U,Y){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Y,"setState")},O.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function L(){}L.prototype=O.prototype;function N(U,Y,ht){this.props=U,this.context=Y,this.refs=y,this.updater=ht||b}var V=N.prototype=new L;V.constructor=N,S(V,O.prototype),V.isPureReactComponent=!0;var G=Array.isArray;function P(){}var H={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function R(U,Y,ht){var st=ht.ref;return{$$typeof:o,type:U,key:Y,ref:st!==void 0?st:null,props:ht}}function F(U,Y){return R(U.type,Y,U.props)}function rt(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function $(U){var Y={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ht){return Y[ht]})}var ct=/\/+/g;function ot(U,Y){return typeof U=="object"&&U!==null&&U.key!=null?$(""+U.key):Y.toString(36)}function B(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(P,P):(U.status="pending",U.then(function(Y){U.status==="pending"&&(U.status="fulfilled",U.value=Y)},function(Y){U.status==="pending"&&(U.status="rejected",U.reason=Y)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function tt(U,Y,ht,st,Mt){var Bt=typeof U;(Bt==="undefined"||Bt==="boolean")&&(U=null);var Et=!1;if(U===null)Et=!0;else switch(Bt){case"bigint":case"string":case"number":Et=!0;break;case"object":switch(U.$$typeof){case o:case e:Et=!0;break;case x:return Et=U._init,tt(Et(U._payload),Y,ht,st,Mt)}}if(Et)return Mt=Mt(U),Et=st===""?"."+ot(U,0):st,G(Mt)?(ht="",Et!=null&&(ht=Et.replace(ct,"$&/")+"/"),tt(Mt,Y,ht,"",function(Zt){return Zt})):Mt!=null&&(rt(Mt)&&(Mt=F(Mt,ht+(Mt.key==null||U&&U.key===Mt.key?"":(""+Mt.key).replace(ct,"$&/")+"/")+Et)),Y.push(Mt)),1;Et=0;var St=st===""?".":st+":";if(G(U))for(var wt=0;wt<U.length;wt++)st=U[wt],Bt=St+ot(st,wt),Et+=tt(st,Y,ht,Bt,Mt);else if(wt=E(U),typeof wt=="function")for(U=wt.call(U),wt=0;!(st=U.next()).done;)st=st.value,Bt=St+ot(st,wt++),Et+=tt(st,Y,ht,Bt,Mt);else if(Bt==="object"){if(typeof U.then=="function")return tt(B(U),Y,ht,st,Mt);throw Y=String(U),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return Et}function W(U,Y,ht){if(U==null)return U;var st=[],Mt=0;return tt(U,st,"","",function(Bt){return Y.call(ht,Bt,Mt++)}),st}function gt(U){if(U._status===-1){var Y=U._result,ht=Y();ht.then(function(st){(U._status===0||U._status===-1)&&(U._status=1,U._result=st,ht.status===void 0&&(ht.status="fulfilled",ht.value=st))},function(st){(U._status===0||U._status===-1)&&(U._status=2,U._result=st,ht.status===void 0&&(ht.status="rejected",ht.reason=st))}),U._status===-1&&(U._status=0,U._result=ht)}if(U._status===1)return U._result.default;throw U._result}var yt=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function Ct(U){var Y=H.T,ht={};ht.types=Y!==null?Y.types:null,H.T=ht;try{var st=U(),Mt=H.S;Mt!==null&&Mt(ht,st),typeof st=="object"&&st!==null&&typeof st.then=="function"&&st.then(P,yt)}catch(Bt){yt(Bt)}finally{Y!==null&&ht.types!==null&&(Y.types=ht.types),H.T=Y}}function Qt(U){var Y=H.T;if(Y!==null){var ht=Y.types;ht===null?Y.types=[U]:ht.indexOf(U)===-1&&ht.push(U)}else Ct(Qt.bind(null,U))}var de={map:W,forEach:function(U,Y,ht){W(U,function(){Y.apply(this,arguments)},ht)},count:function(U){var Y=0;return W(U,function(){Y++}),Y},toArray:function(U){return W(U,function(Y){return Y})||[]},only:function(U){if(!rt(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return ce.Activity=m,ce.Children=de,ce.Component=O,ce.Fragment=i,ce.Profiler=c,ce.PureComponent=N,ce.StrictMode=r,ce.Suspense=p,ce.ViewTransition=g,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,ce.__COMPILER_RUNTIME={__proto__:null,c:function(U){return H.H.useMemoCache(U)}},ce.addTransitionType=Qt,ce.cache=function(U){return function(){return U.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(U,Y,ht){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var st=S({},U.props),Mt=U.key;if(Y!=null)for(Bt in Y.key!==void 0&&(Mt=""+Y.key),Y)!D.call(Y,Bt)||Bt==="key"||Bt==="__self"||Bt==="__source"||Bt==="ref"&&Y.ref===void 0||(st[Bt]=Y[Bt]);var Bt=arguments.length-2;if(Bt===1)st.children=ht;else if(1<Bt){for(var Et=Array(Bt),St=0;St<Bt;St++)Et[St]=arguments[St+2];st.children=Et}return R(U.type,Mt,st)},ce.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:f,_context:U},U},ce.createElement=function(U,Y,ht){var st,Mt={},Bt=null;if(Y!=null)for(st in Y.key!==void 0&&(Bt=""+Y.key),Y)D.call(Y,st)&&st!=="key"&&st!=="__self"&&st!=="__source"&&(Mt[st]=Y[st]);var Et=arguments.length-2;if(Et===1)Mt.children=ht;else if(1<Et){for(var St=Array(Et),wt=0;wt<Et;wt++)St[wt]=arguments[wt+2];Mt.children=St}if(U&&U.defaultProps)for(st in Et=U.defaultProps,Et)Mt[st]===void 0&&(Mt[st]=Et[st]);return R(U,Bt,Mt)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(U){return{$$typeof:h,render:U}},ce.isValidElement=rt,ce.lazy=function(U){return{$$typeof:x,_payload:{_status:-1,_result:U},_init:gt}},ce.memo=function(U,Y){return{$$typeof:_,type:U,compare:Y===void 0?null:Y}},ce.startTransition=Ct,ce.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},ce.use=function(U){return H.H.use(U)},ce.useActionState=function(U,Y,ht){return H.H.useActionState(U,Y,ht)},ce.useCallback=function(U,Y){return H.H.useCallback(U,Y)},ce.useContext=function(U){return H.H.useContext(U)},ce.useDebugValue=function(){},ce.useDeferredValue=function(U,Y){return H.H.useDeferredValue(U,Y)},ce.useEffect=function(U,Y){return H.H.useEffect(U,Y)},ce.useEffectEvent=function(U){return H.H.useEffectEvent(U)},ce.useId=function(){return H.H.useId()},ce.useImperativeHandle=function(U,Y,ht){return H.H.useImperativeHandle(U,Y,ht)},ce.useInsertionEffect=function(U,Y){return H.H.useInsertionEffect(U,Y)},ce.useLayoutEffect=function(U,Y){return H.H.useLayoutEffect(U,Y)},ce.useMemo=function(U,Y){return H.H.useMemo(U,Y)},ce.useOptimistic=function(U,Y){return H.H.useOptimistic(U,Y)},ce.useReducer=function(U,Y,ht){return H.H.useReducer(U,Y,ht)},ce.useRef=function(U){return H.H.useRef(U)},ce.useState=function(U){return H.H.useState(U)},ce.useSyncExternalStore=function(U,Y,ht){return H.H.useSyncExternalStore(U,Y,ht)},ce.useTransition=function(){return H.H.useTransition()},ce.version="19.3.1",ce}var n_;function Op(){return n_||(n_=1,rh.exports=y1()),rh.exports}var Wt=Op();const S1=px(Wt);var oh={exports:{}},cl={},lh={exports:{}},ch={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_;function M1(){return i_||(i_=1,(function(o){function e(B,tt){var W=B.length;B.push(tt);t:for(;0<W;){var gt=W-1>>>1,yt=B[gt];if(0<c(yt,tt))B[gt]=tt,B[W]=yt,W=gt;else break t}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var tt=B[0],W=B.pop();if(W!==tt){B[0]=W;t:for(var gt=0,yt=B.length,Ct=yt>>>1;gt<Ct;){var Qt=2*(gt+1)-1,de=B[Qt],U=Qt+1,Y=B[U];if(0>c(de,W))U<yt&&0>c(Y,de)?(B[gt]=Y,B[U]=W,gt=U):(B[gt]=de,B[Qt]=W,gt=Qt);else if(U<yt&&0>c(Y,W))B[gt]=Y,B[U]=W,gt=U;else break t}}return tt}function c(B,tt){var W=B.sortIndex-tt.sortIndex;return W!==0?W:B.id-tt.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],_=[],x=1,m=null,g=3,M=!1,E=!1,b=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function N(B){for(var tt=i(_);tt!==null;){if(tt.callback===null)r(_);else if(tt.startTime<=B)r(_),tt.sortIndex=tt.expirationTime,e(p,tt);else break;tt=i(_)}}function V(B){if(b=!1,N(B),!E)if(i(p)!==null)E=!0,G||(G=!0,rt());else{var tt=i(_);tt!==null&&ot(V,tt.startTime-B)}}var G=!1,P=-1,H=5,D=-1;function R(){return S?!0:!(o.unstable_now()-D<H)}function F(){if(S=!1,G){var B=o.unstable_now();D=B;var tt=!0;try{t:{E=!1,b&&(b=!1,O(P),P=-1),M=!0;var W=g;try{e:{for(N(B),m=i(p);m!==null&&!(m.expirationTime>B&&R());){var gt=m.callback;if(typeof gt=="function"){m.callback=null,g=m.priorityLevel;var yt=gt(m.expirationTime<=B);if(B=o.unstable_now(),typeof yt=="function"){m.callback=yt,N(B),tt=!0;break e}m===i(p)&&r(p),N(B)}else r(p);m=i(p)}if(m!==null)tt=!0;else{var Ct=i(_);Ct!==null&&ot(V,Ct.startTime-B),tt=!1}}break t}finally{m=null,g=W,M=!1}tt=void 0}}finally{tt?rt():G=!1}}}var rt;if(typeof L=="function")rt=function(){L(F)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,ct=$.port2;$.port1.onmessage=F,rt=function(){ct.postMessage(null)}}else rt=function(){y(F,0)};function ot(B,tt){P=y(function(){B(o.unstable_now())},tt)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(B){switch(g){case 1:case 2:case 3:var tt=3;break;default:tt=g}var W=g;g=tt;try{return B()}finally{g=W}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(B,tt){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var W=g;g=B;try{return tt()}finally{g=W}},o.unstable_scheduleCallback=function(B,tt,W){var gt=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?gt+W:gt):W=gt,B){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=W+yt,B={id:x++,callback:tt,priorityLevel:B,startTime:W,expirationTime:yt,sortIndex:-1},W>gt?(B.sortIndex=W,e(_,B),i(p)===null&&B===i(_)&&(b?(O(P),P=-1):b=!0,ot(V,W-gt))):(B.sortIndex=yt,e(p,B),E||M||(E=!0,G||(G=!0,rt()))),B},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(B){var tt=g;return function(){var W=g;g=tt;try{return B.apply(this,arguments)}finally{g=W}}}})(ch)),ch}var a_;function b1(){return a_||(a_=1,lh.exports=M1()),lh.exports}var uh={exports:{}},zn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s_;function E1(){if(s_)return zn;s_=1;var o=Op();function e(x){var m="https://react.dev/errors/"+x;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+x+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(x,m,g){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:M==null?null:M===d?d:""+M,children:x,containerInfo:m,implementation:g}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _(x,m){if(x==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,zn.browser=function(x){return{$$typeof:f,_reason:x}},zn.createPortal=function(x,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return h(x,m,null,g)},zn.flushSync=function(x){var m=p.T,g=r.p;try{if(p.T=null,r.p=2,x)return x()}finally{p.T=m,r.p=g,r.d.f()}},zn.preconnect=function(x,m){typeof x=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(x,m))},zn.prefetchDNS=function(x){typeof x=="string"&&r.d.D(x)},zn.preinit=function(x,m){if(typeof x=="string"&&m&&typeof m.as=="string"){var g=m.as,M=_(g,m.crossOrigin),E=typeof m.integrity=="string"?m.integrity:void 0,b=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(x,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:M,integrity:E,fetchPriority:b}):g==="script"&&r.d.X(x,{crossOrigin:M,integrity:E,fetchPriority:b,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},zn.preinitModule=function(x,m){if(typeof x=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=_(m.as,m.crossOrigin);r.d.M(x,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}}else m==null&&r.d.M(x)},zn.preload=function(x,m){if(typeof x=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,M=_(g,m.crossOrigin);r.d.L(x,g,{crossOrigin:M,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},zn.preloadModule=function(x,m){if(typeof x=="string")if(m){var g=_(m.as,m.crossOrigin);r.d.m(x,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}else r.d.m(x)},zn.requestFormReset=function(x){r.d.r(x)},zn.unstable_batchedUpdates=function(x,m){return x(m)},zn.useFormState=function(x,m,g){return p.H.useFormState(x,m,g)},zn.useFormStatus=function(){return p.H.useHostTransitionStatus()},zn.version="19.3.1",zn}var r_;function T1(){if(r_)return uh.exports;r_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),uh.exports=E1(),uh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_;function A1(){if(o_)return cl;o_=1;var o=b1(),e=Op(),i=T1();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(f(t)!==t)throw Error(r(188))}function _(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var l=a.return;if(l===null)break;var u=l.alternate;if(u===null){if(s=l.return,s!==null){a=s;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===a)return p(l),t;if(u===s)return p(l),n;u=u.sibling}throw Error(r(188))}if(a.return!==s.return)a=l,s=u;else{for(var v=!1,A=l.child;A;){if(A===a){v=!0,a=l,s=u;break}if(A===s){v=!0,s=l,a=u;break}A=A.sibling}if(!v){for(A=u.child;A;){if(A===a){v=!0,a=u,s=l;break}if(A===s){v=!0,s=u,a=l;break}A=A.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}function m(t,n,a,s,l,u){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,s,l,u)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&m(t.child,n,a,s,l,u))return!0;t=t.sibling}return!1}function g(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function E(t){var n=[null,null],a=g(t);return a===null||b(n,t,a.child,{foundSelf:!1}),n}function b(t,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&b(t,n,a.child,s))return!0;a=a.sibling}return!1}function S(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var y=null,O=null;function L(t,n,a){return t===a?!0:t===n?(y=t,!0):!1}function N(t,n,a){return t===a?(O=t,!1):t===n?(O!==null&&(y=t),!0):!1}function V(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function G(t,n,a){for(var s=0,l=t;l;l=a(l))s++;l=0;for(var u=n;u;u=a(u))l++;for(;0<s-l;)t=a(t),s--;for(;0<l-s;)n=a(n),l--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var P=Object.assign,H=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),rt=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),ct=Symbol.for("react.consumer"),ot=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),tt=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),gt=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),Ct=Symbol.for("react.activity"),Qt=Symbol.for("react.legacy_hidden"),de=Symbol.for("react.memo_cache_sentinel"),U=Symbol.for("react.view_transition"),Y=Symbol.for("react.recoverable"),ht=Symbol.iterator;function st(t){return t===null||typeof t!="object"?null:(t=ht&&t[ht]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Symbol.for("react.client.reference");function Bt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Mt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case $:return"Profiler";case rt:return"StrictMode";case tt:return"Suspense";case W:return"SuspenseList";case Ct:return"Activity";case U:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case ot:return t.displayName||"Context";case ct:return(t._context.displayName||"Context")+".Consumer";case B:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case gt:return n=t.displayName||null,n!==null?n:Bt(t.type)||"Memo";case yt:n=t._payload,t=t._init;try{return Bt(t(n))}catch{}}return null}var Et=Array.isArray,St=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,wt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Zt={pending:!1,data:null,method:null,action:null},k=[],nn=-1;function te(t){return{current:t}}function $t(t){0>nn||(t.current=k[nn],k[nn]=null,nn--)}function Rt(t,n){nn++,k[nn]=t.current,t.current=n}var ue=te(null),qt=te(null),z=te(null),w=te(null);function at(t,n){switch(Rt(z,n),Rt(qt,t),Rt(ue,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?lv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=lv(n),t=cv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}$t(ue),Rt(ue,t)}function _t(){$t(ue),$t(qt),$t(z)}function bt(t){var n=t.memoizedState;n!==null&&(Ir._currentValue=n.memoizedState,Rt(w,t)),n=ue.current;var a=cv(n,t.type);n!==a&&(Rt(qt,t),Rt(ue,a))}function vt(t){qt.current===t&&($t(ue),$t(qt)),w.current===t&&($t(w),Ir._currentValue=Zt)}var jt,Nt;function Ft(t){if(jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);jt=n&&n[1]||"",Nt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jt+t+Nt}var ve=!1;function At(t,n){if(!t||ve)return"";ve=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(Lt){var q=Lt}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(Lt){q=Lt}mt=!1;try{var it=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),mt=!0,new t}finally{mt&&(it!==void 0?Object.defineProperty(t.prototype,"props",it):delete t.prototype.props)}}}else{try{throw Error()}catch(Lt){q=Lt}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(Lt){if(Lt&&q&&typeof Lt.stack=="string")return[Lt.stack,q.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=s.DetermineComponentFrameRoot(),v=u[0],A=u[1];if(v&&A){var I=v.split(`
`),K=A.split(`
`);for(l=s=0;s<I.length&&!I[s].includes("DetermineComponentFrameRoot");)s++;for(;l<K.length&&!K[l].includes("DetermineComponentFrameRoot");)l++;if(s===I.length||l===K.length)for(s=I.length-1,l=K.length-1;1<=s&&0<=l&&I[s]!==K[l];)l--;for(;1<=s&&0<=l;s--,l--)if(I[s]!==K[l]){if(s!==1||l!==1)do if(s--,l--,0>l||I[s]!==K[l]){var lt=`
`+I[s].replace(" at new "," at ");return t.displayName&&lt.includes("<anonymous>")&&(lt=lt.replace("<anonymous>",t.displayName)),lt}while(1<=s&&0<=l);break}}}finally{ve=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ft(a):""}function Vt(t,n){switch(t.tag){case 26:case 27:case 5:return Ft(t.type);case 16:return Ft("Lazy");case 13:return t.child!==n&&n!==null?Ft("Suspense Fallback"):Ft("Suspense");case 19:return Ft("SuspenseList");case 0:case 15:return At(t.type,!1);case 11:return At(t.type.render,!1);case 1:return At(t.type,!0);case 31:return Ft("Activity");case 30:return Ft("ViewTransition");default:return""}}function ee(t){try{var n="",a=null;do n+=Vt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var ie=Object.prototype.hasOwnProperty,Gt=o.unstable_scheduleCallback,se=o.unstable_cancelCallback,fe=o.unstable_shouldYield,ze=o.unstable_requestPaint,X=o.unstable_now,Ot=o.unstable_getCurrentPriorityLevel,dt=o.unstable_ImmediatePriority,xt=o.unstable_UserBlockingPriority,Pt=o.unstable_NormalPriority,It=o.unstable_LowPriority,re=o.unstable_IdlePriority,je=o.log,un=o.unstable_setDisableYieldValue,le=null,be=null;function $e(t){if(typeof je=="function"&&un(t),be&&typeof be.setStrictMode=="function")try{be.setStrictMode(le,t)}catch{}}var _n=Math.clz32?Math.clz32:vo,El=Math.log,Ji=Math.LN2;function vo(t){return t>>>=0,t===0?32:31-(El(t)/Ji|0)|0}var ps=256,ms=262144,ta=4194304;function Pi(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ea(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var l=0,u=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var A=s&134217727;return A!==0?(s=A&~u,s!==0?l=Pi(s):(v&=A,v!==0?l=Pi(v):a||(a=A&~t,a!==0&&(l=Pi(a))))):(A=s&~u,A!==0?l=Pi(A):v!==0?l=Pi(v):a||(a=s&~t,a!==0&&(l=Pi(a)))),l===0?0:n!==0&&n!==l&&(n&u)===0&&(u=l&-l,a=n&-n,u>=a||u===32&&(a&4194048)!==0)?n:l}function Ca(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function _o(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var s=31-_n(a),l=1<<s;n|=t[s],a&=~l}return n}function Uu(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tl(){var t=ta;return ta<<=1,(ta&62914560)===0&&(ta=4194304),t}function xo(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function gs(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Lu(t,n,a,s,l,u){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,I=t.expirationTimes,K=t.hiddenUpdates;for(a=v&~a;0<a;){var lt=31-_n(a),mt=1<<lt;A[lt]=0,I[lt]=-1;var q=K[lt];if(q!==null)for(K[lt]=null,lt=0;lt<q.length;lt++){var it=q[lt];it!==null&&(it.lane&=-536870913)}a&=~mt}s!==0&&Al(t,s,0),u!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=u&~(v&~n))}function Al(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-_n(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function C(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-_n(a),l=1<<s;l&n|t[s]&n&&(t[s]|=n),a&=~l}}function Q(t,n){var a=n&-n;return a=(a&42)!==0?1:ut(a),(a&(t.suspendedLanes|n))!==0?0:a}function ut(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ft(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function J(){var t=wt.p;return t!==0?t:(t=window.event,t===void 0?32:qv(t.type))}function Tt(t,n){var a=wt.p;try{return wt.p=t,n()}finally{wt.p=a}}var Ut=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Ut,zt="__reactProps$"+Ut,ne="__reactContainer$"+Ut,oe="__reactEvents$"+Ut,Jt="__reactListeners$"+Ut,Re="__reactHandles$"+Ut,De="__reactResources$"+Ut,Ye="__reactMarker$"+Ut,Xe="__reactLoad$"+Ut;function ye(t){delete t[Dt],delete t[zt],delete t[Jt],delete t[Re]}function Yt(t){var n;if(n=t[Dt])return n;for(var a=t.parentNode;a;){if(n=a[ne]||a[Dt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Av(t);t!==null;){if(a=t[Dt])return a;t=Av(t)}return n}t=a,a=t.parentNode}return null}function Je(t){if(t=t[Dt]||t[ne]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Ee(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function bn(t){var n=t[De];return n||(n=t[De]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Qe(t){t[Ye]=!0}function Bn(t){t[Xe]=void 0}var Na=new Set,qe={};function dn(t,n){xn(t,n),xn(t+"Capture",n)}function xn(t,n){for(qe[t]=n,t=0;t<n.length;t++)Na.add(n[t])}var Rn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Cn={},tr={};function na(t){return ie.call(tr,t)?!0:ie.call(Cn,t)?!1:Rn.test(t)?tr[t]=!0:(Cn[t]=!0,!1)}var Ue=!1;function Yp(){var t=Ue;return Ue=!1,t}function wl(t,n,a){if(na(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Rl(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function ia(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,s)}}function ei(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zp(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function By(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var l=s.get,u=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(v){a=""+v,u.call(this,v)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ou(t){if(!t._valueTracker){var n=Zp(t)?"checked":"value";t._valueTracker=By(t,n,""+t[n])}}function Kp(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Zp(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}var Fy=/[\n"\\]/g;function fi(t){return t.replace(Fy,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function zu(t,n,a,s,l,u,v,A){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ei(n)):t.value!==""+ei(n)&&(t.value=""+ei(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?v==="number"&&t.value==n?Pu(t,ei(t.value)):Pu(t,ei(n)):a!=null?Pu(t,ei(a)):s!=null&&t.removeAttribute("value"),l==null&&u!=null&&(t.defaultChecked=!!u),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+ei(A):t.removeAttribute("name")}function Qp(t,n,a,s,l,u,v,A){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),n!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||n!=null)){Ou(t);return}a=a!=null?""+ei(a):"",n=n!=null?""+ei(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}s=s??l,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=A?t.checked:!!s,t.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),Ou(t)}function Pu(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function er(t,n,a,s){if(t=t.options,n){n={};for(var l=0;l<a.length;l++)n["$"+a[l]]=!0;for(a=0;a<t.length;a++)l=n.hasOwnProperty("$"+t[a].value),t[a].selected!==l&&(t[a].selected=l),l&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ei(a),n=null,l=0;l<t.length;l++){if(t[l].value===a){t[l].selected=!0,s&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function $p(t,n,a){if(n!=null&&(n=""+ei(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ei(a):""}function Jp(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Et(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ei(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Ou(t)}function nr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Hy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tm(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Hy.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function em(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",Ue=!0);for(var l in n)s=n[l],n.hasOwnProperty(l)&&a[l]!==s&&(tm(t,l,s),Ue=!0)}else for(var u in n)n.hasOwnProperty(u)&&tm(t,u,n[u])}function Iu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cl(t){return Vy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ii(){}var Bu=null;function Fu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ir=null,ar=null;function nm(t){var n=Je(t);if(n&&(t=n.stateNode)){var a=t[zt]||null;t:switch(t=n.stateNode,n.type){case"input":if(zu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+fi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var l=s[zt]||null;if(!l)throw Error(r(90));zu(s,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Kp(s)}break t;case"textarea":$p(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&er(t,!!a.multiple,n,!1)}}}var Hu=!1;function im(t,n,a){if(Hu)return t(n,a);Hu=!0;try{var s=t(n);return s}finally{if(Hu=!1,(ir!==null||ar!==null)&&(Cc(),ir&&(n=ir,t=ar,ar=ir=null,nm(n),t)))for(n=0;n<t.length;n++)nm(t[n])}}function yo(t,n){var a=t.stateNode;if(a===null)return null;var s=a[zt]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gu=!1;if(aa)try{var So={};Object.defineProperty(So,"passive",{get:function(){Gu=!0}}),window.addEventListener("test",So,So),window.removeEventListener("test",So,So)}catch{Gu=!1}var Da=null,Vu=null,Nl=null;function am(){if(Nl)return Nl;var t,n=Vu,a=n.length,s,l="value"in Da?Da.value:Da.textContent,u=l.length;for(t=0;t<a&&n[t]===l[t];t++);var v=a-t;for(s=1;s<=v&&n[a-s]===l[u-s];s++);return Nl=l.slice(t,1<s?1-s:void 0)}function Dl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ul(){return!0}function sm(){return!1}function Vn(t){function n(a,s,l,u,v){this._reactName=a,this._targetInst=l,this.type=s,this.nativeEvent=u,this.target=v,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(u):u[A]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Ul:sm,this.isPropagationStopped=sm,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),n}var Ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ll=Vn(Ua),Mo=P({},Ua,{view:0,detail:0}),ky=Vn(Mo),ku,ju,bo,Ol=P({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bo&&(bo&&t.type==="mousemove"?(ku=t.screenX-bo.screenX,ju=t.screenY-bo.screenY):ju=ku=0,bo=t),ku)},movementY:function(t){return"movementY"in t?t.movementY:ju}}),rm=Vn(Ol),jy=P({},Ol,{dataTransfer:0}),Xy=Vn(jy),qy=P({},Mo,{relatedTarget:0}),Xu=Vn(qy),Wy=P({},Ua,{animationName:0,elapsedTime:0,pseudoElement:0}),Yy=Vn(Wy),Zy=P({},Ua,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ky=Vn(Zy),Qy=P({},Ua,{data:0}),om=Vn(Qy),$y={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=tS[t])?!!n[t]:!1}function qu(){return eS}var nS=P({},Mo,{key:function(t){if(t.key){var n=$y[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Jy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qu,charCode:function(t){return t.type==="keypress"?Dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),iS=Vn(nS),aS=P({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lm=Vn(aS),sS=P({},Ua,{submitter:0}),rS=Vn(sS),oS=P({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qu}),lS=Vn(oS),cS=P({},Ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),uS=Vn(cS),fS=P({},Ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dS=Vn(fS),hS=P({},Ua,{newState:0,oldState:0,source:0}),pS=Vn(hS),mS=[9,13,27,32],Wu=aa&&"CompositionEvent"in window,Eo=null;aa&&"documentMode"in document&&(Eo=document.documentMode);var gS=aa&&"TextEvent"in window&&!Eo,cm=aa&&(!Wu||Eo&&8<Eo&&11>=Eo),um=" ",fm=!1;function dm(t,n){switch(t){case"keyup":return mS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var sr=!1;function vS(t,n){switch(t){case"compositionend":return hm(n);case"keypress":return n.which!==32?null:(fm=!0,um);case"textInput":return t=n.data,t===um&&fm?null:t;default:return null}}function _S(t,n){if(sr)return t==="compositionend"||!Wu&&dm(t,n)?(t=am(),Nl=Vu=Da=null,sr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return cm&&n.locale!=="ko"?null:n.data;default:return null}}var xS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!xS[t.type]:n==="textarea"}function mm(t,n,a,s){ir?ar?ar.push(s):ar=[s]:ir=s,n=zc(n,"onChange"),0<n.length&&(a=new Ll("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var To=null,Ao=null;function yS(t){nv(t,0)}function zl(t){var n=Ee(t);if(Kp(n))return t}function gm(t,n){if(t==="change")return n}var vm=!1;if(aa){var Yu;if(aa){var Zu="oninput"in document;if(!Zu){var _m=document.createElement("div");_m.setAttribute("oninput","return;"),Zu=typeof _m.oninput=="function"}Yu=Zu}else Yu=!1;vm=Yu&&(!document.documentMode||9<document.documentMode)}function xm(){To&&(To.detachEvent("onpropertychange",ym),Ao=To=null)}function ym(t){if(t.propertyName==="value"&&zl(Ao)){var n=[];mm(n,Ao,t,Fu(t)),im(yS,n)}}function SS(t,n,a){t==="focusin"?(xm(),To=n,Ao=a,To.attachEvent("onpropertychange",ym)):t==="focusout"&&xm()}function MS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zl(Ao)}function bS(t,n){if(t==="click")return zl(n)}function ES(t,n){if(t==="input"||t==="change")return zl(n)}function TS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ni=typeof Object.is=="function"?Object.is:TS;function wo(t,n){if(ni(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var l=a[s];if(!ie.call(n,l)||!ni(t[l],n[l]))return!1}return!0}function Ku(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Sm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mm(t,n){var a=Sm(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Sm(a)}}function bm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?bm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Em(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Ku(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Ku(t.document)}return n}function Qu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var AS=aa&&"documentMode"in document&&11>=document.documentMode,rr=null,$u=null,Ro=null,Ju=!1;function Tm(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ju||rr==null||rr!==Ku(s)||(s=rr,"selectionStart"in s&&Qu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ro&&wo(Ro,s)||(Ro=s,s=zc($u,"onSelect"),0<s.length&&(n=new Ll("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=rr)))}function vs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var or={animationend:vs("Animation","AnimationEnd"),animationiteration:vs("Animation","AnimationIteration"),animationstart:vs("Animation","AnimationStart"),transitionrun:vs("Transition","TransitionRun"),transitionstart:vs("Transition","TransitionStart"),transitioncancel:vs("Transition","TransitionCancel"),transitionend:vs("Transition","TransitionEnd")},tf={},Am={};aa&&(Am=document.createElement("div").style,"AnimationEvent"in window||(delete or.animationend.animation,delete or.animationiteration.animation,delete or.animationstart.animation),"TransitionEvent"in window||delete or.transitionend.transition);function _s(t){if(tf[t])return tf[t];if(!or[t])return t;var n=or[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Am)return tf[t]=n[a];return t}var wm=_s("animationend"),Rm=_s("animationiteration"),Cm=_s("animationstart"),wS=_s("transitionrun"),RS=_s("transitionstart"),CS=_s("transitioncancel"),Nm=_s("transitionend"),Dm=new Map,ef="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ef.push("scrollEnd");function bi(t,n){Dm.set(t,n),dn(n,[t])}var NS=0;function sa(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=wi.identifierPrefix;var a=NS++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function Um(t){if(t==null||typeof t=="string")return t;var n=null,a=wr;if(a!==null)for(var s=0;s<a.length;s++){var l=t[a[s]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??t.default}function ra(t,n){return t=Um(t),n=Um(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Pl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},di=[],lr=0,nf=0;function Il(){for(var t=lr,n=nf=lr=0;n<t;){var a=di[n];di[n++]=null;var s=di[n];di[n++]=null;var l=di[n];di[n++]=null;var u=di[n];if(di[n++]=null,s!==null&&l!==null){var v=s.pending;v===null?l.next=l:(l.next=v.next,v.next=l),s.pending=l}u!==0&&Lm(a,l,u)}}function Bl(t,n,a,s){di[lr++]=t,di[lr++]=n,di[lr++]=a,di[lr++]=s,nf|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function af(t,n,a,s){return Bl(t,n,a,s),Fl(t)}function xs(t,n){return Bl(t,null,null,n),Fl(t)}function Lm(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var l=!1,u=t.return;u!==null;)u.childLanes|=a,s=u.alternate,s!==null&&(s.childLanes|=a),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(l=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,l&&n!==null&&(l=31-_n(a),t=u.hiddenUpdates,s=t[l],s===null?t[l]=[n]:s.push(n),n.lane=a|536870912),u):null}function Fl(t){if(50<Ko)throw Ko=0,Rc=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var cr={};function DS(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,n,a,s){return new DS(t,n,a,s)}function sf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oa(t,n){var a=t.alternate;return a===null?(a=Wn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Om(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Hl(t,n,a,s,l,u){var v=0;if(s=t,typeof s=="function")sf(s)&&(v=1);else if(typeof s=="string")v=s1(t,a,ue.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case Ct:return t=Wn(31,a,n,l),t.elementType=Ct,t.lanes=u,t;case F:return ys(a.children,l,u,n);case rt:v=8,l|=24;break;case $:return t=Wn(12,a,n,l|2),t.elementType=$,t.lanes=u,t;case tt:return t=Wn(13,a,n,l),t.elementType=tt,t.lanes=u,t;case W:return t=Wn(19,a,n,l),t.elementType=W,t.lanes=u,t;case Qt:case U:return t=l|32,t=Wn(30,a,n,t),t.elementType=U,t.lanes=u,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case ot:v=10;break t;case ct:v=9;break t;case B:v=11;break t;case gt:v=14;break t;case yt:v=16,s=null;break t}v=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Wn(v,a,n,l),n.elementType=t,n.type=s,n.lanes=u,n}function ys(t,n,a,s){return t=Wn(7,t,s,n),t.lanes=a,t}function rf(t,n,a){return t=Wn(6,t,null,n),t.lanes=a,t}function zm(t){var n=Wn(18,null,null,0);return n.stateNode=t,n}function of(t,n,a){return n=Wn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Pm=new WeakMap;function hi(t,n){if(typeof t=="object"&&t!==null){var a=Pm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:ee(n)},Pm.set(t,n),n)}return{value:t,source:n,stack:ee(n)}}var ur=[],fr=0,Gl=null,Co=0,pi=[],mi=0,La=null,Bi=1,Fi="";function la(t,n){ur[fr++]=Co,ur[fr++]=Gl,Gl=t,Co=n}function Im(t,n,a){pi[mi++]=Bi,pi[mi++]=Fi,pi[mi++]=La,La=t;var s=Bi;t=Fi;var l=32-_n(s)-1;s&=~(1<<l),a+=1;var u=32-_n(n)+l;if(30<u){var v=l-l%5;u=(s&(1<<v)-1).toString(32),s>>=v,l-=v,Bi=1<<32-_n(n)+l|a<<l|s,Fi=u+t}else Bi=1<<u|a<<l|s,Fi=t}function Vl(t){t.return!==null&&(la(t,1),Im(t,1,0))}function lf(t){for(;t===Gl;)Gl=ur[--fr],ur[fr]=null,Co=ur[--fr],ur[fr]=null;for(;t===La;)La=pi[--mi],pi[mi]=null,Fi=pi[--mi],pi[mi]=null,Bi=pi[--mi],pi[mi]=null}function Bm(t,n){pi[mi++]=Bi,pi[mi++]=Fi,pi[mi++]=La,Bi=n.id,Fi=n.overflow,La=t}var En=null,Ze=null,xe=!1,Oa=null,gi=!1,cf=Error(r(519));function za(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw No(hi(n,t)),cf}function Fm(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Dt]=t,n[zt]=s,a){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(a=0;a<$o.length;a++)Me($o[a],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),Qp(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),Jp(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||rv(n.textContent,a)?(s.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),s.onScroll!=null&&Me("scroll",n),s.onScrollEnd!=null&&Me("scrollend",n),s.onClick!=null&&(n.onclick=Ii),n=!0):n=!1,n||za(t,!0)}function kl(t){for(En=t.return;En;)switch(En.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:En=En.return}}function dr(t){if(t!==En)return!1;if(!xe)return kl(t),xe=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Fd(t.type,t.memoizedProps)),a=!a),a&&Ze&&za(t),kl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ze=Tv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ze=Tv(t)}else n===27?(n=Ze,Qa(t.type)?(t=Yd,Yd=null,Ze=t):Ze=n):Ze=En?_i(t.stateNode.nextSibling):null;return!0}function Ss(){Ze=En=null,xe=!1}function uf(){var t=Oa;return t!==null&&(Kn===null?Kn=t:Kn.push.apply(Kn,t),Oa=null),t}function No(t){Oa===null?Oa=[t]:Oa.push(t)}var ff=te(null),Ms=null,ca=null;function Pa(t,n,a){Rt(ff,n._currentValue),n._currentValue=a}function ua(t){t._currentValue=ff.current,$t(ff)}function jl(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function df(t,n,a,s){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var u=l.dependencies;if(u!==null){var v=l.child;u=u.firstContext;t:for(;u!==null;){var A=u;u=l;for(var I=0;I<n.length;I++)if(A.context===n[I]){u.lanes|=a,A=u.alternate,A!==null&&(A.lanes|=a),jl(u.return,a,t),s||(v=null);break t}u=A.next}}else if(l.tag===18){if(v=l.return,v===null)throw Error(r(341));v.lanes|=a,u=v.alternate,u!==null&&(u.lanes|=a),jl(v,a,t),v=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=a,v=l.alternate,v!==null&&(v.lanes|=a),jl(l.return,a,t),v=l.child,v=v!==null?v.sibling:null):v=l.child;if(v!==null)v.return=l;else for(v=l;v!==null;){if(v===t){v=null;break}if(l=v.sibling,l!==null){l.return=v.return,v=l;break}v=v.return}l=v}}function bs(t,n,a,s){t=null;for(var l=n,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var v=l.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var A=l.type;ni(l.pendingProps.value,v.value)||(t!==null?t.push(A):t=[A])}}else if(l===w.current){if(v=l.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Ir):t=[Ir])}l=l.return}return t!==null&&df(n,t,a,s),n.flags|=262144,t!==null}function Xl(t){for(t=t.firstContext;t!==null;){if(!ni(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Es(t){Ms=t,ca=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Nn(t){return Hm(Ms,t)}function ql(t,n){return Ms===null&&Es(t),Hm(t,n)}function Hm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ca===null){if(t===null)throw Error(r(308));ca=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ca=ca.next=n;return a}var US=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},LS=o.unstable_scheduleCallback,OS=o.unstable_NormalPriority,hn={$$typeof:ot,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hf(){return{controller:new US,data:new Map,refCount:0}}function Do(t){t.refCount--,t.refCount===0&&LS(OS,function(){t.controller.abort()})}function Gm(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];a.indexOf(s)===-1&&a.push(s)}}}var Uo=null;function zS(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Lo=null,pf=0,Ts=0,hr=null;function PS(t,n){if(Lo===null){var a=Lo=[];pf=0,Ts=Nd(),hr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return pf++,n.then(Vm,Vm),n}function Vm(){if(--pf===0&&(Uo=null,Lo!==null)){hr!==null&&(hr.status="fulfilled");var t=Lo;Lo=null,Ts=0,hr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function IS(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var l=0;l<a.length;l++)(0,a[l])(n)},function(l){for(s.status="rejected",s.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),s}var km=St.S;St.S=function(t,n){if(zg=X(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&PS(t,n),Uo!==null)for(var a=Dr;a!==null;)Gm(a,Uo),a=a.next;if(a=t.types,a!==null){for(var s=Dr;s!==null;)Gm(s,a),s=s.next;if(Ts!==0){s=Uo,s===null&&(s=Uo=[]);for(var l=0;l<a.length;l++){var u=a[l];s.indexOf(u)===-1&&s.push(u)}}}km!==null&&km(t,n)};var As=te(null);function mf(){var t=As.current;return t!==null?t:We.pooledCache}function Wl(t,n){n===null?Rt(As,As.current):Rt(As,n.pool)}function jm(){var t=mf();return t===null?null:{parent:hn._currentValue,pool:t}}var pr=Error(r(460)),gf=Error(r(474)),Yl=Error(r(542)),Zl={then:function(){}};function Xm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function qm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ii,Ii),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Ym(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(Ii,Ii);else{if(t=We,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=s}},function(s){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Ym(t),t}throw Rs=n,pr}}function ws(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Rs=a,pr):a}}var Rs=null;function Wm(){if(Rs===null)throw Error(r(459));var t=Rs;return Rs=null,t}function Ym(t){if(t===pr||t===Yl)throw Error(r(483))}var mr=null,Oo=0;function Kl(t){var n=Oo;return Oo+=1,mr===null&&(mr=[]),qm(mr,t,n)}function Ia(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ql(t,n){throw n.$$typeof===H?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Zm(t){function n(Z,j){if(t){var et=Z.deletions;et===null?(Z.deletions=[j],Z.flags|=16):et.push(j)}}function a(Z,j){if(!t)return null;for(;j!==null;)n(Z,j),j=j.sibling;return null}function s(Z){for(var j=new Map;Z!==null;)Z.key===null?j.set(Z.index,Z):j.set(Z.key,Z),Z=Z.sibling;return j}function l(Z,j){return Z=oa(Z,j),Z.index=0,Z.sibling=null,Z}function u(Z,j,et){return Z.index=et,t?(et=Z.alternate,et!==null?(et=et.index,et<j?(Z.flags|=2,j):et):(Z.flags|=134217730,j)):(Z.flags|=1048576,j)}function v(Z){return t&&Z.alternate===null&&(Z.flags|=134217730),Z}function A(Z,j,et,pt){return j===null||j.tag!==6?(j=rf(et,Z.mode,pt),j.return=Z,j):(j=l(j,et),j.return=Z,j)}function I(Z,j,et,pt){var kt=et.type;return kt===F?(Z=lt(Z,j,et.props.children,pt,et.key),Ia(Z,et),Z):j!==null&&(j.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===yt&&ws(kt)===j.type)?(j=l(j,et.props),Ia(j,et),j.return=Z,j):(j=Hl(et.type,et.key,et.props,null,Z.mode,pt),Ia(j,et),j.return=Z,j)}function K(Z,j,et,pt){return j===null||j.tag!==4||j.stateNode.containerInfo!==et.containerInfo||j.stateNode.implementation!==et.implementation?(j=of(et,Z.mode,pt),j.return=Z,j):(j=l(j,et.children||[]),j.return=Z,j)}function lt(Z,j,et,pt,kt){return j===null||j.tag!==7?(j=ys(et,Z.mode,pt,kt),j.return=Z,j):(j=l(j,et),j.return=Z,j)}function mt(Z,j,et){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=rf(""+j,Z.mode,et),j.return=Z,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case D:return et=Hl(j.type,j.key,j.props,null,Z.mode,et),Ia(et,j),et.return=Z,et;case R:return j=of(j,Z.mode,et),j.return=Z,j;case yt:return j=ws(j),mt(Z,j,et)}if(Et(j)||st(j))return j=ys(j,Z.mode,et,null),j.return=Z,j;if(typeof j.then=="function")return mt(Z,Kl(j),et);if(j.$$typeof===ot)return mt(Z,ql(Z,j),et);Ql(Z,j)}return null}function q(Z,j,et,pt){var kt=j!==null?j.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return kt!==null?null:A(Z,j,""+et,pt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case D:return et.key===kt?I(Z,j,et,pt):null;case R:return et.key===kt?K(Z,j,et,pt):null;case yt:return et=ws(et),q(Z,j,et,pt)}if(Et(et)||st(et))return kt!==null?null:lt(Z,j,et,pt,null);if(typeof et.then=="function")return q(Z,j,Kl(et),pt);if(et.$$typeof===ot)return q(Z,j,ql(Z,et),pt);Ql(Z,et)}return null}function it(Z,j,et,pt,kt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Z=Z.get(et)||null,A(j,Z,""+pt,kt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case D:return Z=Z.get(pt.key===null?et:pt.key)||null,I(j,Z,pt,kt);case R:return Z=Z.get(pt.key===null?et:pt.key)||null,K(j,Z,pt,kt);case yt:return pt=ws(pt),it(Z,j,et,pt,kt)}if(Et(pt)||st(pt))return Z=Z.get(et)||null,lt(j,Z,pt,kt,null);if(typeof pt.then=="function")return it(Z,j,et,Kl(pt),kt);if(pt.$$typeof===ot)return it(Z,j,et,ql(j,pt),kt);Ql(j,pt)}return null}function Lt(Z,j,et,pt){for(var kt=null,Ae=null,Kt=j,ae=j=0,gn=null;Kt!==null&&ae<et.length;ae++){Kt.index>ae?(gn=Kt,Kt=null):gn=Kt.sibling;var Ne=q(Z,Kt,et[ae],pt);if(Ne===null){Kt===null&&(Kt=gn);break}t&&Kt&&Ne.alternate===null&&n(Z,Kt),j=u(Ne,j,ae),Ae===null?kt=Ne:Ae.sibling=Ne,Ae=Ne,Kt=gn}if(ae===et.length)return a(Z,Kt),xe&&la(Z,ae),kt;if(Kt===null){for(;ae<et.length;ae++)Kt=mt(Z,et[ae],pt),Kt!==null&&(j=u(Kt,j,ae),Ae===null?kt=Kt:Ae.sibling=Kt,Ae=Kt);return xe&&la(Z,ae),kt}for(Kt=s(Kt);ae<et.length;ae++)gn=it(Kt,Z,ae,et[ae],pt),gn!==null&&(t&&(Ne=gn.alternate,Ne!==null&&Kt.delete(Ne.key===null?ae:Ne.key)),j=u(gn,j,ae),Ae===null?kt=gn:Ae.sibling=gn,Ae=gn);return t&&Kt.forEach(function(ns){return n(Z,ns)}),xe&&la(Z,ae),kt}function Xt(Z,j,et,pt){if(et==null)throw Error(r(151));for(var kt=null,Ae=null,Kt=j,ae=j=0,gn=null,Ne=et.next();Kt!==null&&!Ne.done;ae++,Ne=et.next()){Kt.index>ae?(gn=Kt,Kt=null):gn=Kt.sibling;var ns=q(Z,Kt,Ne.value,pt);if(ns===null){Kt===null&&(Kt=gn);break}t&&Kt&&ns.alternate===null&&n(Z,Kt),j=u(ns,j,ae),Ae===null?kt=ns:Ae.sibling=ns,Ae=ns,Kt=gn}if(Ne.done)return a(Z,Kt),xe&&la(Z,ae),kt;if(Kt===null){for(;!Ne.done;ae++,Ne=et.next())Ne=mt(Z,Ne.value,pt),Ne!==null&&(j=u(Ne,j,ae),Ae===null?kt=Ne:Ae.sibling=Ne,Ae=Ne);return xe&&la(Z,ae),kt}for(Kt=s(Kt);!Ne.done;ae++,Ne=et.next())Ne=it(Kt,Z,ae,Ne.value,pt),Ne!==null&&(t&&(gn=Ne.alternate,gn!==null&&Kt.delete(gn.key===null?ae:gn.key)),j=u(Ne,j,ae),Ae===null?kt=Ne:Ae.sibling=Ne,Ae=Ne);return t&&Kt.forEach(function(v1){return n(Z,v1)}),xe&&la(Z,ae),kt}function me(Z,j,et,pt){if(typeof et=="object"&&et!==null&&et.type===F&&et.key===null&&et.props.ref===void 0&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case D:t:{for(var kt=et.key;j!==null;){if(j.key===kt){if(kt=et.type,kt===F){if(j.tag===7){a(Z,j.sibling),pt=l(j,et.props.children),Ia(pt,et),pt.return=Z,Z=pt;break t}}else if(j.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===yt&&ws(kt)===j.type){a(Z,j.sibling),pt=l(j,et.props),Ia(pt,et),pt.return=Z,Z=pt;break t}a(Z,j);break}else n(Z,j);j=j.sibling}et.type===F?(pt=ys(et.props.children,Z.mode,pt,et.key),Ia(pt,et),pt.return=Z,Z=pt):(pt=Hl(et.type,et.key,et.props,null,Z.mode,pt),Ia(pt,et),pt.return=Z,Z=pt)}return v(Z);case R:t:{for(kt=et.key;j!==null;){if(j.key===kt)if(j.tag===4&&j.stateNode.containerInfo===et.containerInfo&&j.stateNode.implementation===et.implementation){a(Z,j.sibling),pt=l(j,et.children||[]),pt.return=Z,Z=pt;break t}else{a(Z,j);break}else n(Z,j);j=j.sibling}pt=of(et,Z.mode,pt),pt.return=Z,Z=pt}return v(Z);case yt:return et=ws(et),me(Z,j,et,pt)}if(Et(et))return Lt(Z,j,et,pt);if(st(et)){if(kt=st(et),typeof kt!="function")throw Error(r(150));return et=kt.call(et),Xt(Z,j,et,pt)}if(typeof et.then=="function")return me(Z,j,Kl(et),pt);if(et.$$typeof===ot)return me(Z,j,ql(Z,et),pt);Ql(Z,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,j!==null&&j.tag===6?(a(Z,j.sibling),pt=l(j,et),pt.return=Z,Z=pt):(a(Z,j),pt=rf(et,Z.mode,pt),pt.return=Z,Z=pt),v(Z)):a(Z,j)}return function(Z,j,et,pt){try{Oo=0;var kt=me(Z,j,et,pt);return mr=null,kt}catch(Kt){if(Kt===pr||Kt===Yl)throw Kt;var Ae=Wn(29,Kt,null,Z.mode);return Ae.lanes=pt,Ae.return=Z,Ae}finally{}}}var Cs=Zm(!0),Km=Zm(!1),Ba=!1;function vf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _f(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Fa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ha(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Pe&2)!==0){var l=s.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),s.pending=n,n=Fl(t),Lm(t,null,a),n}return Bl(t,s,n,a),Fl(t)}function zo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,C(t,a)}}function xf(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var l=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?l=u=v:u=u.next=v,a=a.next}while(a!==null);u===null?l=u=n:u=u.next=n}else l=u=n;a={baseState:s.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var yf=!1;function Po(){if(yf){var t=hr;if(t!==null)throw t}}function Io(t,n,a,s){yf=!1;var l=t.updateQueue;Ba=!1;var u=l.firstBaseUpdate,v=l.lastBaseUpdate,A=l.shared.pending;if(A!==null){l.shared.pending=null;var I=A,K=I.next;I.next=null,v===null?u=K:v.next=K,v=I;var lt=t.alternate;lt!==null&&(lt=lt.updateQueue,A=lt.lastBaseUpdate,A!==v&&(A===null?lt.firstBaseUpdate=K:A.next=K,lt.lastBaseUpdate=I))}if(u!==null){var mt=l.baseState;v=0,lt=K=I=null,A=u;do{var q=A.lane&-536870913,it=q!==A.lane;if(it?(Te&q)===q:(s&q)===q){q!==0&&q===Ts&&(yf=!0),lt!==null&&(lt=lt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Lt=t,Xt=A;q=n;var me=a;switch(Xt.tag){case 1:if(Lt=Xt.payload,typeof Lt=="function"){mt=Lt.call(me,mt,q);break t}mt=Lt;break t;case 3:Lt.flags=Lt.flags&-65537|128;case 0:if(Lt=Xt.payload,q=typeof Lt=="function"?Lt.call(me,mt,q):Lt,q==null)break t;mt=P({},mt,q);break t;case 2:Ba=!0}}q=A.callback,q!==null&&(t.flags|=64,it&&(t.flags|=8192),it=l.callbacks,it===null?l.callbacks=[q]:it.push(q))}else it={lane:q,tag:A.tag,payload:A.payload,callback:A.callback,next:null},lt===null?(K=lt=it,I=mt):lt=lt.next=it,v|=q;if(A=A.next,A===null){if(A=l.shared.pending,A===null)break;it=A,A=it.next,it.next=null,l.lastBaseUpdate=it,l.shared.pending=null}}while(!0);lt===null&&(I=mt),l.baseState=I,l.firstBaseUpdate=K,l.lastBaseUpdate=lt,u===null&&(l.shared.lanes=0),Wa|=v,t.lanes=v,t.memoizedState=mt}}function Qm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function $m(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Qm(a[t],n)}var Ga=te(null),$l=te(0);function Jm(t,n){t=ma,Rt($l,t),Rt(Ga,n),ma=t|n.baseLanes}function Sf(){Rt($l,ma),Rt(Ga,Ga.current)}function Mf(){ma=$l.current,$t(Ga),$t($l)}var Dn=te(null),Fn=null;function Va(t){var n=t.alternate;Rt(Un,Un.current&1),Rt(Dn,t),Fn===null&&(n===null||Ga.current!==null||n.memoizedState!==null)&&(Fn=t)}function bf(t){Rt(Un,Un.current),Rt(Dn,t),Fn===null&&(Fn=t)}function t0(t){t.tag===22?(Rt(Un,Un.current),Rt(Dn,t),Fn===null&&(Fn=t)):ka()}function ka(){Rt(Un,Un.current),Rt(Dn,Dn.current)}function ii(t){$t(Dn),Fn===t&&(Fn=null),$t(Un)}var Un=te(0);function Bo(t,n){Rt(Dn,Dn.current),Rt(Un,n)}function Ef(t){$t(Un),$t(Dn),Fn===t&&(Fn=null)}function Jl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||qd(a)||Wd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var fa=0,pe=null,Ve=null,pn=null,tc=!1,gr=!1,Ns=!1,ec=0,Fo=0,vr=null,BS=0;function rn(){throw Error(r(321))}function Tf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ni(t[a],n[a]))return!1;return!0}function Af(t,n,a,s,l,u){return fa=u,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,St.H=t===null||t.memoizedState===null?I0:B0,Ns=!1,u=a(s,l),Ns=!1,gr&&(u=n0(n,a,s,l)),e0(t),u}function e0(t){St.H=lc;var n=Ve!==null&&Ve.next!==null;if(fa=0,pn=Ve=pe=null,tc=!1,Fo=0,vr=null,n)throw Error(r(300));t===null||mn||(t=t.dependencies,t!==null&&Xl(t)&&(mn=!0))}function n0(t,n,a,s){pe=t;var l=0;do{if(gr&&(vr=null),Fo=0,gr=!1,25<=l)throw Error(r(301));if(l+=1,pn=Ve=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}St.H=qS,u=n(a,s)}while(gr);return u}function FS(){var t=St.H,n=t.useState()[0];return n=typeof n.then=="function"?Ho(n):n,t=t.useState()[0],(Ve!==null?Ve.memoizedState:null)!==t&&(pe.flags|=1024),n}function wf(){var t=ec!==0;return ec=0,t}function Rf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Cf(t){if(tc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}tc=!1}fa=0,pn=Ve=pe=null,gr=!1,Fo=ec=0,vr=null}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?pe.memoizedState=pn=t:pn=pn.next=t,pn}function fn(){if(Ve===null){var t=pe.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var n=pn===null?pe.memoizedState:pn.next;if(n!==null)pn=n,Ve=t;else{if(t===null)throw pe.alternate===null?Error(r(467)):Error(r(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},pn===null?pe.memoizedState=pn=t:pn=pn.next=t}return pn}function nc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ho(t){var n=Fo;return Fo+=1,vr===null&&(vr=[]),t=qm(vr,t,n),n=pe,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,St.H=n===null||n.memoizedState===null?I0:B0),t}function ic(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ho(t);if(t.$$typeof===Y)return;if(t.$$typeof===ot)return Nn(t)}throw Error(r(438,String(t)))}function Nf(t){var n=null,a=pe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=pe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=nc(),pe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=de;return n.index++,a}function da(t,n){return typeof n=="function"?n(t):n}function ac(t){var n=fn();return Df(n,Ve,t)}function Df(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var l=t.baseQueue,u=s.pending;if(u!==null){if(l!==null){var v=l.next;l.next=u.next,u.next=v}n.baseQueue=l=u,s.pending=null}if(u=t.baseState,l===null)t.memoizedState=u;else{n=l.next;var A=v=null,I=null,K=n,lt=!1;do{var mt=K.lane&-536870913;if(mt!==K.lane?(Te&mt)===mt:(fa&mt)===mt){var q=K.revertLane;if(q===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),mt===Ts&&(lt=!0);else if((fa&q)===q){K=K.next,q===Ts&&(lt=!0);continue}else mt={lane:0,revertLane:K.revertLane,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},I===null?(A=I=mt,v=u):I=I.next=mt,pe.lanes|=q,Wa|=q;mt=K.action,Ns&&a(u,mt),u=K.hasEagerState?K.eagerState:a(u,mt)}else q={lane:mt,revertLane:K.revertLane,gesture:K.gesture,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},I===null?(A=I=q,v=u):I=I.next=q,pe.lanes|=mt,Wa|=mt;K=K.next}while(K!==null&&K!==n);if(I===null?v=u:I.next=A,!ni(u,t.memoizedState)&&(mn=!0,lt&&(a=hr,a!==null)))throw a;t.memoizedState=u,t.baseState=v,t.baseQueue=I,s.lastRenderedState=u}return l===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Uf(t){var n=fn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,l=a.pending,u=n.memoizedState;if(l!==null){a.pending=null;var v=l=l.next;do u=t(u,v.action),v=v.next;while(v!==l);ni(u,n.memoizedState)||(mn=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),a.lastRenderedState=u}return[u,s]}function i0(t,n,a){var s=pe,l=fn(),u=xe;if(u){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!ni((Ve||l).memoizedState,a);if(v&&(l.memoizedState=a,mn=!0),l=l.queue,zf(r0.bind(null,s,l,t),[t]),t=l.getSnapshot!==n||v||pn!==null&&(pn.memoizedState.tag&1)!==0,_r(t?9:8,{destroy:void 0},s0.bind(null,s,l,a,n),null),t){if(s.flags|=2048,We===null)throw Error(r(349));u||(fa&127)!==0||a0(s,n,a)}return a}function a0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=pe.updateQueue,n===null?(n=nc(),pe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function s0(t,n,a,s){n.value=a,n.getSnapshot=s,o0(n)&&l0(t)}function r0(t,n,a){return a(function(){o0(n)&&l0(t)})}function o0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ni(t,a)}catch{return!0}}function l0(t){var n=xs(t,2);n!==null&&Qn(n,t,2)}function Lf(t){var n=kn();if(typeof t=="function"){var a=t;if(t=a(),Ns){$e(!0);try{a()}finally{$e(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:t},n}function c0(t,n,a,s){return t.baseState=a,Df(t,Ve,typeof s=="function"?s:da)}function HS(t,n,a,s,l){if(oc(t))throw Error(r(485));if(t=n.action,t!==null){var u={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){u.listeners.push(v)}};St.T!==null?a(!0):u.isTransition=!1,s(u),a=n.pending,a===null?(u.next=n.pending=u,u0(n,u)):(u.next=a.next,n.pending=a.next=u)}}function u0(t,n){var a=n.action,s=n.payload,l=t.state;if(n.isTransition){var u=St.T,v={};v.types=u!==null?u.types:null,St.T=v;try{var A=a(l,s),I=St.S;I!==null&&I(v,A),f0(t,n,A)}catch(K){Of(t,n,K)}finally{u!==null&&v.types!==null&&(u.types=v.types),St.T=u}}else try{u=a(l,s),f0(t,n,u)}catch(K){Of(t,n,K)}}function f0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){d0(t,n,s)},function(s){return Of(t,n,s)}):d0(t,n,a)}function d0(t,n,a){n.status="fulfilled",n.value=a,h0(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,u0(t,a)))}function Of(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,h0(n),n=n.next;while(n!==s)}t.action=null}function h0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function p0(t,n){return n}function m0(t,n){if(xe){var a=We.formState;if(a!==null){t:{var s=pe;if(xe){if(Ze){e:{for(var l=Ze,u=gi;l.nodeType!==8;){if(!u){l=null;break e}if(l=_i(l.nextSibling),l===null){l=null;break e}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){Ze=_i(l.nextSibling),s=l.data==="F!";break t}}za(s)}s=!1}s&&(n=a[0])}}return a=kn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:p0,lastRenderedState:n},a.queue=s,a=O0.bind(null,pe,s),s.dispatch=a,s=Lf(!1),u=Hf.bind(null,pe,!1,s.queue),s=kn(),l={state:n,dispatch:null,action:t,pending:null},s.queue=l,a=HS.bind(null,pe,l,u,a),l.dispatch=a,s.memoizedState=t,[n,a,!1]}function g0(t){var n=fn();return v0(n,Ve,t)}function v0(t,n,a){if(n=Df(t,n,p0)[0],t=ac(da)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Ho(n)}catch(v){throw v===pr?Yl:v}else s=n;n=fn();var l=n.queue,u=l.dispatch;return a!==n.memoizedState&&(pe.flags|=2048,_r(9,{destroy:void 0},GS.bind(null,l,a),null)),[s,u,t]}function GS(t,n){t.action=n}function _0(t){var n=fn(),a=Ve;if(a!==null)return v0(n,a,t);fn(),n=n.memoizedState,a=fn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function _r(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=pe.updateQueue,n===null&&(n=nc(),pe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function x0(){return fn().memoizedState}function sc(t,n,a,s){var l=kn();pe.flags|=t,l.memoizedState=_r(1|n,{destroy:void 0},a,s===void 0?null:s)}function rc(t,n,a,s){var l=fn();s=s===void 0?null:s;var u=l.memoizedState.inst;Ve!==null&&s!==null&&Tf(s,Ve.memoizedState.deps)?l.memoizedState=_r(n,u,a,s):(pe.flags|=t,l.memoizedState=_r(1|n,u,a,s))}function y0(t,n){sc(8390656,8,t,n)}function zf(t,n){rc(2048,8,t,n)}function VS(t){pe.flags|=4;var n=pe.updateQueue;if(n===null)n=nc(),pe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function S0(t){var n=fn().memoizedState;return VS({ref:n,nextImpl:t}),function(){if((Pe&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function M0(t,n){return rc(4,2,t,n)}function b0(t,n){return rc(4,4,t,n)}function E0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function T0(t,n,a){a=a!=null?a.concat([t]):null,rc(4,4,E0.bind(null,n,t),a)}function Pf(){}function A0(t,n){var a=fn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Tf(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function w0(t,n){var a=fn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Tf(n,s[1]))return s[0];if(s=t(),Ns){$e(!0);try{t()}finally{$e(!1)}}return a.memoizedState=[s,n],s}function If(t,n,a){return a===void 0||(fa&1073741824)!==0&&(Te&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Ig(),pe.lanes|=t,Wa|=t,a)}function R0(t,n,a,s){return ni(a,n)?a:Ga.current!==null?(t=If(t,a,s),ni(t,n)||(mn=!0),t):(fa&106)===0||(fa&1073741824)!==0&&(Te&261930)===0?(mn=!0,t.memoizedState=a):(t=Ig(),pe.lanes|=t,Wa|=t,n)}function C0(t,n,a,s,l){var u=wt.p;wt.p=u!==0&&8>u?u:8;var v=St.T,A={};A.types=v!==null?v.types:null,St.T=A,Hf(t,!1,n,a);try{var I=l(),K=St.S;if(K!==null&&K(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var lt=IS(I,s);Go(t,n,lt,oi(t))}else Go(t,n,s,oi(t))}catch(mt){Go(t,n,{then:function(){},status:"rejected",reason:mt},oi())}finally{wt.p=u,v!==null&&A.types!==null&&(v.types=A.types),St.T=v}}function kS(){}function Bf(t,n,a,s){if(t.tag!==5)throw Error(r(476));var l=N0(t).queue;C0(t,l,n,Zt,a===null?kS:function(){return D0(t),a(s)})}function N0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Zt,baseState:Zt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:Zt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function D0(t){var n=N0(t);n.next===null&&(n=t.alternate.memoizedState),Go(t,n.next.queue,{},oi())}function Ff(){return Nn(Ir)}function U0(){return fn().memoizedState}function L0(){return fn().memoizedState}function jS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=oi();t=Fa(a);var s=Ha(n,t,a);s!==null&&(Qn(s,n,a),zo(s,n,a)),n={cache:hf()},t.payload=n;return}n=n.return}}function XS(t,n,a){var s=oi();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},oc(t)?z0(n,a):(a=af(t,n,a,s),a!==null&&(Qn(a,t,s),P0(a,n,s)))}function O0(t,n,a){var s=oi();Go(t,n,a,s)}function Go(t,n,a,s){var l={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(oc(t))z0(n,l);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var v=n.lastRenderedState,A=u(v,a);if(l.hasEagerState=!0,l.eagerState=A,ni(A,v))return Bl(t,n,l,0),We===null&&Il(),!1}catch{}finally{}if(a=af(t,n,l,s),a!==null)return Qn(a,t,s),P0(a,n,s),!0}return!1}function Hf(t,n,a,s){if(s={lane:2,revertLane:Nd(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},oc(t)){if(n)throw Error(r(479))}else n=af(t,a,s,2),n!==null&&Qn(n,t,2)}function oc(t){var n=t.alternate;return t===pe||n!==null&&n===pe}function z0(t,n){gr=tc=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function P0(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,C(t,a)}}var lc={readContext:Nn,use:ic,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn,useEffectEvent:rn},I0={readContext:Nn,use:ic,useCallback:function(t,n){return kn().memoizedState=[t,n===void 0?null:n],t},useContext:Nn,useEffect:y0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,sc(4194308,4,E0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return sc(4194308,4,t,n)},useInsertionEffect:function(t,n){sc(4,2,t,n)},useMemo:function(t,n){var a=kn();n=n===void 0?null:n;var s=t();if(Ns){$e(!0);try{t()}finally{$e(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=kn();if(a!==void 0){var l=a(n);if(Ns){$e(!0);try{a(n)}finally{$e(!1)}}}else l=n;return s.memoizedState=s.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},s.queue=t,t=t.dispatch=XS.bind(null,pe,t),[s.memoizedState,t]},useRef:function(t){var n=kn();return t={current:t},n.memoizedState=t},useState:function(t){t=Lf(t);var n=t.queue,a=O0.bind(null,pe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Pf,useDeferredValue:function(t,n){var a=kn();return If(a,t,n)},useTransition:function(){var t=Lf(!1);return t=C0.bind(null,pe,t.queue,!0,!1),kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=pe,l=kn();if(xe){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),We===null)throw Error(r(349));(Te&127)!==0||a0(s,n,a)}l.memoizedState=a;var u={value:a,getSnapshot:n};return l.queue=u,y0(r0.bind(null,s,u,t),[t]),s.flags|=2048,_r(9,{destroy:void 0},s0.bind(null,s,u,a,n),null),a},useId:function(){var t=kn(),n=We.identifierPrefix;if(xe){var a=Fi,s=Bi;a=(s&~(1<<32-_n(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ec++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=BS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Ff,useFormState:m0,useActionState:m0,useOptimistic:function(t){var n=kn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Hf.bind(null,pe,!0,a),a.dispatch=n,[t,n]},useMemoCache:Nf,useCacheRefresh:function(){return kn().memoizedState=jS.bind(null,pe)},useEffectEvent:function(t){var n=kn(),a={impl:t};return n.memoizedState=a,function(){if((Pe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},B0={readContext:Nn,use:ic,useCallback:A0,useContext:Nn,useEffect:zf,useImperativeHandle:T0,useInsertionEffect:M0,useLayoutEffect:b0,useMemo:w0,useReducer:ac,useRef:x0,useState:function(){return ac(da)},useDebugValue:Pf,useDeferredValue:function(t,n){var a=fn();return R0(a,Ve.memoizedState,t,n)},useTransition:function(){var t=ac(da)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:Ho(t),n]},useSyncExternalStore:i0,useId:U0,useHostTransitionStatus:Ff,useFormState:g0,useActionState:g0,useOptimistic:function(t,n){var a=fn();return c0(a,Ve,t,n)},useMemoCache:Nf,useCacheRefresh:L0,useEffectEvent:S0},qS={readContext:Nn,use:ic,useCallback:A0,useContext:Nn,useEffect:zf,useImperativeHandle:T0,useInsertionEffect:M0,useLayoutEffect:b0,useMemo:w0,useReducer:Uf,useRef:x0,useState:function(){return Uf(da)},useDebugValue:Pf,useDeferredValue:function(t,n){var a=fn();return Ve===null?If(a,t,n):R0(a,Ve.memoizedState,t,n)},useTransition:function(){var t=Uf(da)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:Ho(t),n]},useSyncExternalStore:i0,useId:U0,useHostTransitionStatus:Ff,useFormState:_0,useActionState:_0,useOptimistic:function(t,n){var a=fn();return Ve!==null?c0(a,Ve,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Nf,useCacheRefresh:L0,useEffectEvent:S0};function Gf(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:P({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Vf={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=oi(),l=Fa(s);l.payload=n,a!=null&&(l.callback=a),n=Ha(t,l,s),n!==null&&(Qn(n,t,s),zo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=oi(),l=Fa(s);l.tag=1,l.payload=n,a!=null&&(l.callback=a),n=Ha(t,l,s),n!==null&&(Qn(n,t,s),zo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=oi(),s=Fa(a);s.tag=2,n!=null&&(s.callback=n),n=Ha(t,s,a),n!==null&&(Qn(n,t,a),zo(n,t,a))}};function F0(t,n,a,s,l,u,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,u,v):n.prototype&&n.prototype.isPureReactComponent?!wo(a,s)||!wo(l,u):!0}function H0(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Vf.enqueueReplaceState(n,n.state,null)}function Ds(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=P({},a));for(var l in t)a[l]===void 0&&(a[l]=t[l])}return a}function G0(t){Pl(t)}function V0(t){console.error(t)}function k0(t){Pl(t)}function cc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function j0(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function kf(t,n,a){return a=Fa(a),a.tag=3,a.payload={element:null},a.callback=function(){cc(t,n)},a}function X0(t){return t=Fa(t),t.tag=3,t}function q0(t,n,a,s){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var u=s.value;t.payload=function(){return l(u)},t.callback=function(){j0(n,a,s)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){j0(n,a,s),typeof l!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})})}function WS(t,n,a,s,l){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&bs(n,a,l,!0),a=Dn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Fn===null?Nc():a.alternate===null&&on===0&&(on=3),a.flags&=-257,a.flags|=65536,a.lanes=l,s===Zl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),wd(t,s,l)),!1;case 22:return a.flags|=65536,s===Zl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),wd(t,s,l)),!1}throw Error(r(435,a.tag))}return wd(t,s,l),Nc(),!1}if(xe)return n=Dn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,s!==cf&&(t=Error(r(422),{cause:s}),No(hi(t,a)))):(s!==cf&&(n=Error(r(423),{cause:s}),No(hi(n,a))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,s=hi(s,a),l=kf(t.stateNode,s,l),xf(t,l),on!==4&&(on=2)),!1;var u=Error(r(520),{cause:s});if(u=hi(u,a),Zo===null?Zo=[u]:Zo.push(u),on!==4&&(on=2),n===null)return!0;s=hi(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=l&-l,a.lanes|=t,t=kf(a.stateNode,s,t),xf(a,t),!1;case 1:if(n=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Ya===null||!Ya.has(u))))return a.flags|=65536,l&=-l,a.lanes|=l,l=X0(l),q0(l,t,a,s),xf(a,l),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var jf=Error(r(461)),mn=!1;function yn(t,n,a,s){n.child=t===null?Km(n,null,a,s):Cs(n,t.child,a,s)}function W0(t,n,a,s,l){a=a.render;var u=n.ref;if("ref"in s){var v={};for(var A in s)A!=="ref"&&(v[A]=s[A])}else v=s;return Es(n),s=Af(t,n,a,v,u,l),A=wf(),t!==null&&!mn?(Rf(t,n,l),ha(t,n,l)):(xe&&A&&Vl(n),n.flags|=1,yn(t,n,s,l),n.child)}function Y0(t,n,a,s,l){if(t===null){var u=a.type;return typeof u=="function"&&!sf(u)&&u.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=u,Z0(t,n,u,s,l)):(t=Hl(a.type,null,s,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(u=t.child,!$f(t,l)){var v=u.memoizedProps;if(a=a.compare,a=a!==null?a:wo,a(v,s)&&t.ref===n.ref)return ha(t,n,l)}return n.flags|=1,t=oa(u,s),t.ref=n.ref,t.return=n,n.child=t}function Z0(t,n,a,s,l){if(t!==null){var u=t.memoizedProps;if(wo(u,s)&&t.ref===n.ref)if(mn=!1,n.pendingProps=s=u,$f(t,l))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,ha(t,n,l)}return Xf(t,n,a,s,l)}function K0(t,n,a,s){var l=s.children,u=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,t!==null){for(s=n.child=t.child,l=0;s!==null;)l=l|s.lanes|s.childLanes,s=s.sibling;s=l&~u}else s=0,n.child=null;return Q0(t,n,u,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Wl(n,u!==null?u.cachePool:null),u!==null?Jm(n,u):Sf(),t0(n);else return s=n.lanes=536870912,Q0(t,n,u!==null?u.baseLanes|a:a,a,s)}else u!==null?(Wl(n,u.cachePool),Jm(n,u),ka(),n.memoizedState=null):(t!==null&&Wl(n,null),Sf(),ka());return yn(t,n,l,a),n.child}function Vo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Q0(t,n,a,s,l){var u=mf();return u=u===null?null:{parent:hn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&Wl(n,null),Sf(),t0(n),t!==null&&bs(t,n,s,!0),n.childLanes=l,null}function uc(t,n){return n=fc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function $0(t,n,a){return Cs(n,t.child,null,a),t=uc(n,n.pendingProps),t.flags|=2,ii(n),n.memoizedState=null,t}function YS(t,n,a){var s=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(xe){if(s.mode==="hidden")return t=uc(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Vo(null,t);if(bf(n),(t=Ze)?(t=Ev(t,gi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:La!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=zm(t),a.return=n,n.child=a,En=n,Ze=null)):t=null,t===null)throw za(n);return n.lanes=536870912,null}return uc(n,s)}var u=t.memoizedState;if(u!==null){var v=u.dehydrated;if(bf(n),l)if(n.flags&256)n.flags&=-257,n=$0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(mn||bs(t,n,a,!1),l=(a&t.childLanes)!==0,mn||l){if(Ga.current===null){if(s=We,s!==null&&(v=Q(s,a),v!==0&&v!==u.retryLane))throw u.retryLane=v,xs(t,v),Qn(s,t,v),jf;Nc()}n=$0(t,n,a)}else t=u.treeContext,Ze=_i(v.nextSibling),En=n,xe=!0,Oa=null,gi=!1,t!==null&&Bm(n,t),n=uc(n,s),n.flags|=134221824;return n}return t=oa(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function xr(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Xf(t,n,a,s,l){return Es(n),a=Af(t,n,a,s,void 0,l),s=wf(),t!==null&&!mn?(Rf(t,n,l),ha(t,n,l)):(xe&&s&&Vl(n),n.flags|=1,yn(t,n,a,l),n.child)}function J0(t,n,a,s,l,u){return Es(n),n.updateQueue=null,a=n0(n,s,a,l),e0(t),s=wf(),t!==null&&!mn?(Rf(t,n,u),ha(t,n,u)):(xe&&s&&Vl(n),n.flags|=1,yn(t,n,a,u),n.child)}function tg(t,n,a,s,l){if(Es(n),n.stateNode===null){var u=cr,v=a.contextType;typeof v=="object"&&v!==null&&(u=Nn(v)),u=new a(s,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Vf,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=s,u.state=n.memoizedState,u.refs={},vf(n),v=a.contextType,u.context=typeof v=="object"&&v!==null?Nn(v):cr,u.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Gf(n,a,v,s),u.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(v=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),v!==u.state&&Vf.enqueueReplaceState(u,u.state,null),Io(n,s,u,l),Po(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){u=n.stateNode;var A=n.memoizedProps,I=Ds(a,A);u.props=I;var K=u.context,lt=a.contextType;v=cr,typeof lt=="object"&&lt!==null&&(v=Nn(lt));var mt=a.getDerivedStateFromProps;lt=typeof mt=="function"||typeof u.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,lt||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(A||K!==v)&&H0(n,u,s,v),Ba=!1;var q=n.memoizedState;u.state=q,Io(n,s,u,l),Po(),K=n.memoizedState,A||q!==K||Ba?(typeof mt=="function"&&(Gf(n,a,mt,s),K=n.memoizedState),(I=Ba||F0(n,a,I,s,q,K,v))?(lt||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=K),u.props=s,u.state=K,u.context=v,s=I):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{u=n.stateNode,_f(t,n),v=n.memoizedProps,lt=Ds(a,v),u.props=lt,mt=n.pendingProps,q=u.context,K=a.contextType,I=cr,typeof K=="object"&&K!==null&&(I=Nn(K)),A=a.getDerivedStateFromProps,(K=typeof A=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(v!==mt||q!==I)&&H0(n,u,s,I),Ba=!1,q=n.memoizedState,u.state=q,Io(n,s,u,l),Po();var it=n.memoizedState;v!==mt||q!==it||Ba||t!==null&&t.dependencies!==null&&Xl(t.dependencies)?(typeof A=="function"&&(Gf(n,a,A,s),it=n.memoizedState),(lt=Ba||F0(n,a,lt,s,q,it,I)||t!==null&&t.dependencies!==null&&Xl(t.dependencies))?(K||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(s,it,I),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(s,it,I)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||v===t.memoizedProps&&q===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&q===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=it),u.props=s,u.state=it,u.context=I,s=lt):(typeof u.componentDidUpdate!="function"||v===t.memoizedProps&&q===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&q===t.memoizedState||(n.flags|=1024),s=!1)}return u=s,xr(t,n),s=(n.flags&128)!==0,u||s?(u=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,t!==null&&s?(n.child=Cs(n,t.child,null,l),n.child=Cs(n,null,a,l)):yn(t,n,a,l),n.memoizedState=u.state,t=n.child):t=ha(t,n,l),t}function eg(t,n,a,s){return Ss(),n.flags|=256,yn(t,n,a,s),n.child}var qf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wf(t){return{baseLanes:t,cachePool:jm()}}function Yf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ri),t}function ng(t,n,a){var s=n.pendingProps,l=!1,u=(n.flags&128)!==0,v;if((v=u)||(v=t!==null&&t.memoizedState===null?!1:(Un.current&2)!==0),v&&(l=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(xe){if(l?Va(n):ka(),(t=Ze)?(t=Ev(t,gi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:La!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=zm(t),a.return=n,n.child=a,En=n,Ze=null)):t=null,t===null)throw za(n);return Wd(t)?n.lanes=32:n.lanes=536870912,null}return u=s.children,s=s.fallback,l?(ka(),l=n.mode,u=fc({mode:"hidden",children:u},l),s=ys(s,l,a,null),u.return=n,s.return=n,u.sibling=s,n.child=u,s=n.child,s.memoizedState=Wf(a),s.childLanes=Yf(t,v,a),n.memoizedState=qf,Vo(null,s)):(Va(n),Zf(n,u))}var A=t.memoizedState;if(A!==null){var I=A.dehydrated;if(I!==null)return ZS(t,n,u,v,s,I,A,a)}return l?(ka(),l=s.fallback,u=n.mode,A=t.child,I=A.sibling,s=oa(A,{mode:"hidden",children:s.children}),s.subtreeFlags=A.subtreeFlags&1206910976,I!==null?l=oa(I,l):(l=ys(l,u,a,null),l.flags|=2),l.return=n,s.return=n,s.sibling=l,n.child=s,Vo(null,s),s=n.child,l=t.child.memoizedState,l===null?l=Wf(a):(u=l.cachePool,u!==null?(A=hn._currentValue,u=u.parent!==A?{parent:A,pool:A}:u):u=jm(),l={baseLanes:l.baseLanes|a,cachePool:u}),s.memoizedState=l,s.childLanes=Yf(t,v,a),n.memoizedState=qf,Vo(t.child,s)):(Va(n),a=t.child,t=a.sibling,a=oa(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function Zf(t,n){return n=fc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function fc(t,n){return t=Wn(22,t,null,n),t.lanes=0,t}function dc(t,n,a){return Cs(n,t.child,null,a),t=Zf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function ZS(t,n,a,s,l,u,v,A){if(a)return n.flags&256?(Va(n),n.flags&=-257,dc(t,n,A)):n.memoizedState!==null?(ka(),n.child=t.child,n.flags|=128,null):(ka(),u=l.fallback,v=n.mode,l=fc({mode:"visible",children:l.children},v),u=ys(u,v,A,null),u.flags|=2,l.return=n,u.return=n,l.sibling=u,n.child=l,Cs(n,t.child,null,A),l=n.child,l.memoizedState=Wf(A),l.childLanes=Yf(t,s,A),n.memoizedState=qf,Vo(null,l));if(Va(n),Wd(u)){if(s=u.nextSibling&&u.nextSibling.dataset,s)var I=s.dgst;return s=I,s!==""&&(l=Error(r(419)),l.stack="",l.digest=s,No({value:l,source:null,stack:null})),dc(t,n,A)}if(mn||bs(t,n,A,!1),s=(A&t.childLanes)!==0,mn||s){if(Ga.current!==null)return dc(t,n,A);if(s=We,s!==null&&(l=Q(s,A),l!==0&&l!==v.retryLane))throw v.retryLane=l,xs(t,l),Qn(s,t,l),jf;return qd(u)||Nc(),dc(t,n,A)}return qd(u)?(n.flags|=192,n.child=t.child,null):(t=v.treeContext,Ze=_i(u.nextSibling),En=n,xe=!0,Oa=null,gi=!1,t!==null&&Bm(n,t),n=Zf(n,l.children),n.flags|=134221824,n)}function ig(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),jl(t.return,n,a)}function ag(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&Jl(a)===null&&(n=t),t=t.sibling}return n}function hc(t,n,a,s,l,u){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:l,treeForkCount:u}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=s,v.tail=a,v.tailMode=l,v.treeForkCount=u)}function Kf(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function Qf(t,n,a){var s=n.pendingProps,l=s.revealOrder,u=s.tail;s=s.children;var v=Un.current;if(n.flags&128)return Bo(n,v),null;var A=(v&2)!==0;if(A?(v=v&1|2,n.flags|=128):v&=1,Bo(n,v),l==="backwards"&&t!==null?(Kf(t),yn(t,n,s,a),Kf(t)):yn(t,n,s,a),s=xe?Co:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ig(t,a,n);else if(t.tag===19)ig(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":a=ag(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null,Kf(n)),hc(n,!0,l,null,u,s);break;case"unstable_legacy-backwards":for(a=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&Jl(t)===null){n.child=l;break}t=l.sibling,l.sibling=a,a=l,l=t}hc(n,!0,a,null,u,s);break;case"together":hc(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=ag(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null),hc(n,!1,l,a,u,s)}return n.child}function sg(t,n,a){var s=n.pendingProps;return Pa(n,n.type,s.value),yn(t,n,s.children,a),n.child}function ha(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Wa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(bs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=oa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=oa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function $f(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Xl(t)))}function KS(t,n,a){switch(n.tag){case 3:at(n,n.stateNode.containerInfo),Pa(n,hn,t.memoizedState.cache),Ss();break;case 27:case 5:bt(n);break;case 4:at(n,n.stateNode.containerInfo);break;case 10:Pa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,bf(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return Va(n),n.flags|=128,null;s=bs(t,n,a,!1);var l=n.child.childLanes;return s||(a&l)!==0?ng(t,n,a):(Va(n),t=ha(t,n,a),t!==null?t.sibling:null)}Va(n);break;case 19:if(n.flags&128)return Qf(t,n,a);if(l=(t.flags&128)!==0,s=(a&n.childLanes)!==0,s||(bs(t,n,a,!1),s=(a&n.childLanes)!==0),l){if(s)return Qf(t,n,a);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Bo(n,Un.current),s)break;return null;case 22:return n.lanes=0,K0(t,n,a,n.pendingProps);case 24:Pa(n,hn,t.memoizedState.cache)}return ha(t,n,a)}function rg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!$f(t,a)&&(n.flags&128)===0)return mn=!1,KS(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,xe&&(n.flags&1048576)!==0&&Im(n,Co,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=ws(n.elementType),n.type=t,typeof t=="function")sf(t)?(s=Ds(t,s),n.tag=1,n=tg(null,n,t,s,a)):(n.tag=0,n=Xf(null,n,t,s,a));else{if(t!=null){var l=t.$$typeof;if(l===B){n.tag=11,n=W0(null,n,t,s,a);break t}else if(l===gt){n.tag=14,n=Y0(null,n,t,s,a);break t}else if(l===ot){n.tag=10,n.type=t,n=sg(null,n,a);break t}}throw n=Bt(t)||t,Error(r(306,n,""))}}return n;case 0:return Xf(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,l=Ds(s,n.pendingProps),tg(t,n,s,l,a);case 3:t:{if(at(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var u=n.memoizedState;l=u.element,_f(t,n),Io(n,s,null,a);var v=n.memoizedState;if(s=v.cache,Pa(n,hn,s),s!==u.cache&&df(n,[hn],a,!0),Po(),s=v.element,u.isDehydrated)if(u={element:s,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=eg(t,n,s,a);break t}else if(s!==l){l=hi(Error(r(424)),n),No(l),n=eg(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ze=_i(t.firstChild),En=n,xe=!0,Oa=null,gi=!0,a=Km(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Ss(),s===l){n=ha(t,n,a);break t}yn(t,n,s,a)}n=n.child}return n;case 26:return xr(t,n),t===null?(a=Dv(n.type,null,n.pendingProps,null))?n.memoizedState=a:xe||(n.stateNode=uv(n.type,n.pendingProps,z.current,n)):n.memoizedState=Dv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return bt(n),t===null&&xe&&(s=n.stateNode=wv(n.type,n.pendingProps,z.current),En=n,gi=!0,l=Ze,Qa(n.type)?(Yd=l,Ze=_i(s.firstChild)):Ze=l),yn(t,n,n.pendingProps.children,a),xr(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&xe&&((l=s=Ze)&&(s=jM(s,n.type,n.pendingProps,gi),s!==null?(n.stateNode=s,En=n,Ze=_i(s.firstChild),gi=!1,l=!0):l=!1),l||za(n)),bt(n),l=n.type,u=n.pendingProps,v=t!==null?t.memoizedProps:null,s=u.children,Fd(l,u)?s=null:v!==null&&Fd(l,v)&&(n.flags|=32),n.memoizedState!==null&&(l=Af(t,n,FS,null,null,a),Ir._currentValue=l),xr(t,n),yn(t,n,s,a),n.child;case 6:return t===null&&xe&&((t=a=Ze)&&(a=XM(a,n.pendingProps,gi),a!==null?(n.stateNode=a,En=n,Ze=null,t=!0):t=!1),t||za(n)),null;case 13:return ng(t,n,a);case 4:return at(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Cs(n,null,s,a):yn(t,n,s,a),n.child;case 11:return W0(t,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,xr(t,n),yn(t,n,s,a),n.child;case 8:return yn(t,n,n.pendingProps.children,a),n.child;case 12:return yn(t,n,n.pendingProps.children,a),n.child;case 10:return sg(t,n,a);case 9:return l=n.type._context,s=n.pendingProps.children,Es(n),l=Nn(l),s=s(l),n.flags|=1,yn(t,n,s,a),n.child;case 14:return Y0(t,n,n.type,n.pendingProps,a);case 15:return Z0(t,n,n.type,n.pendingProps,a);case 19:return Qf(t,n,a);case 31:return YS(t,n,a);case 22:return K0(t,n,a,n.pendingProps);case 24:return Es(n),s=Nn(hn),t===null?(l=mf(),l===null&&(l=We,u=hf(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=a),l=u),n.memoizedState={parent:s,cache:l},vf(n),Pa(n,hn,l)):((t.lanes&a)!==0&&(_f(t,n),Io(n,null,null,a),Po()),l=t.memoizedState,u=n.memoizedState,l.parent!==s?(l={parent:s,cache:s},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Pa(n,hn,s)):(s=u.cache,Pa(n,hn,s),s!==l.cache&&df(n,[hn],a,!0))),yn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:xe&&Vl(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:xr(t,n),yn(t,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function pa(t){t.flags|=4}function Jf(t,n,a,s,l){var u;if((u=(t.mode&32)!==0)&&(u=a===null?zv(n,s):zv(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),u){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(Gg())t.flags|=8192;else throw Rs=Zl,gf}else t.flags&=-16777217}function og(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Pv(n))if(Gg())t.flags|=8192;else throw Rs=Zl,gf}function pc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Tl():536870912,t.lanes|=n,Er|=n)}function ko(t,n){if(!xe)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function Ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var l=t.child;l!==null;)a|=l.lanes|l.childLanes,s|=l.subtreeFlags&1206910976,s|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)a|=l.lanes|l.childLanes,s|=l.subtreeFlags,s|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function QS(t,n,a){var s=n.pendingProps;switch(lf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),ua(hn),_t(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(dr(n)?pa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,uf())),Ke(n),null;case 26:var l=n.type,u=n.memoizedState;return t===null?(pa(n),u!==null?(Ke(n),og(n,u)):(Ke(n),Jf(n,l,null,s,a))):u?u!==t.memoizedState?(pa(n),Ke(n),og(n,u)):(Ke(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&pa(n),Ke(n),Jf(n,l,t,s,a)),null;case 27:if(vt(n),a=z.current,l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&pa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ke(n),n.subtreeFlags&=-33554433,null}t=ue.current,dr(n)?Fm(n):(t=wv(l,s,a),n.stateNode=t,pa(n))}return Ke(n),n.subtreeFlags&=-33554433,null;case 5:if(vt(n),l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&pa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ke(n),n.subtreeFlags&=-33554433,null}if(u=ue.current,dr(n))Fm(n);else{var v=tl(z.current);switch(u){case 1:u=v.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=v.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=v.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=v.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=v.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof s.is=="string"?v.createElement("select",{is:s.is}):v.createElement("select"),s.multiple?u.multiple=!0:s.size&&(u.size=s.size);break;default:u=typeof s.is=="string"?v.createElement(l,{is:s.is}):v.createElement(l)}}u[Dt]=n,u[zt]=s;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)u.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=u;t:switch(On(u,l,s),l){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&pa(n)}}return Ke(n),n.subtreeFlags&=-33554433,Jf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&pa(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=z.current,dr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,l=En,l!==null)switch(l.tag){case 27:case 5:s=l.memoizedProps}t[Dt]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||rv(t.nodeValue,a)),t||za(n,!0)}else t=tl(t).createTextNode(s),t[Dt]=n,n.stateNode=t}return Ke(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=dr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Dt]=n}else Ss(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),t=!1}else a=uf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ii(n),n):(ii(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ke(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=dr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!l)throw Error(r(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[Dt]=n}else Ss(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),l=!1}else l=uf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(ii(n),n):(ii(n),null)}return ii(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,l=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(l=s.alternate.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==l&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),pc(n,n.updateQueue),Ke(n),null);case 4:return _t(),t===null&&Od(n.stateNode.containerInfo),n.flags|=67108864,Ke(n),null;case 10:return ua(n.type),Ke(n),null;case 19:if(Ef(n),s=n.memoizedState,s===null)return Ke(n),null;if(l=(n.flags&128)!==0,u=s.rendering,u===null)if(l)ko(s,!1);else{if(on!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(u=Jl(t),u!==null){for(n.flags|=128,ko(s,!1),t=u.updateQueue,n.updateQueue=t,pc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Om(a,t),a=a.sibling;return Bo(n,Un.current&1|2),xe&&la(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&X()>Ac&&(n.flags|=128,l=!0,ko(s,!1),n.lanes=4194304)}else{if(!l)if(t=Jl(u),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,pc(n,t),ko(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!u.alternate&&!xe)return Ke(n),null}else 2*X()-s.renderingStartTime>Ac&&a!==536870912&&(n.flags|=128,l=!0,ko(s,!1),n.lanes=4194304);s.isBackwards?(u.sibling=n.child,n.child=u):(t=s.last,t!==null?t.sibling=u:n.child=u,s.last=u)}if(s.tail!==null){t=s.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=X(),t.sibling=null,u=Un.current,u=l?u&1|2:u&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||xe?Bo(n,u):(a=u,Rt(Dn,n),Rt(Un,a),Fn===null&&(Fn=n)),xe&&la(n,s.treeForkCount),t}return Ke(n),null;case 22:case 23:return ii(n),Mf(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&pc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&$t(As),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ua(hn),Ke(n),null;case 25:return null;case 30:return n.flags|=33554432,Ke(n),null}throw Error(r(156,n.tag))}function $S(t,n){switch(lf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ua(hn),_t(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return vt(n),null;case 31:if(n.memoizedState!==null){if(ii(n),n.alternate===null)throw Error(r(340));Ss()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ii(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ss()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Ef(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return _t(),null;case 10:return ua(n.type),null;case 22:case 23:return ii(n),Mf(),t!==null&&$t(As),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ua(hn),null;case 25:return null;default:return null}}function lg(t,n){switch(lf(n),n.tag){case 3:ua(hn),_t();break;case 26:case 27:case 5:vt(n);break;case 4:_t();break;case 31:n.memoizedState!==null&&ii(n);break;case 13:ii(n);break;case 19:Ef(n);break;case 10:ua(n.type);break;case 22:case 23:ii(n),Mf(),t!==null&&$t(As);break;case 24:ua(hn)}}function jo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var l=s.next;a=l;do{if((a.tag&t)===t){s=void 0;var u=a.create,v=a.inst;s=u(),v.destroy=s}a=a.next}while(a!==l)}}catch(A){He(n,n.return,A)}}function ja(t,n,a){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var u=l.next;s=u;do{if((s.tag&t)===t){var v=s.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,l=n;var I=a,K=A;try{K()}catch(lt){He(l,I,lt)}}}s=s.next}while(s!==u)}}catch(lt){He(n,n.return,lt)}}function cg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{$m(n,a)}catch(s){He(t,t.return,s)}}}function ug(t,n,a){a.props=Ds(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){He(t,n,s)}}function Hi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var l=t.stateNode,u=sa(t.memoizedProps,l);(l.ref===null||l.ref.name!==u)&&(l.ref=vv(u)),s=l.ref;break;case 7:if(t.stateNode===null){var v=new li(t);m(t.child,!1,VM,v,void 0,void 0),t.stateNode=v}s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(A){He(t,n,A)}}function Ln(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(l){He(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){He(t,n,l)}else a.current=null}function mc(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)bv(t.stateNode,n[a])}function fg(t){for(var n=t.return;n!==null&&(ed(n)&&bv(t.stateNode,n.stateNode),!td(n));)n=n.return}function Xo(t){for(var n=t.return;n!==null&&(ed(n)&&kM(t.stateNode,n.stateNode),!td(n));)n=n.return}function td(t){return t.tag===5||t.tag===3||t.tag===27}function ed(t){return t&&t.tag===7&&t.stateNode!==null}function nd(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(l){He(t,t.return,l)}}function id(t,n,a){try{var s=t.stateNode;EM(s,t.type,a,n),s[zt]=n}catch(l){He(t,t.return,l)}}function dg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Qa(t.type)||t.tag===4}function ad(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||dg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sd(t,n,a,s){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(l),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ii)),mc(t,s),Ue=!0;else if(l!==4&&(l===27&&(mc(t,s),s=null,Qa(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(sd(t,n,a,s),t=t.sibling;t!==null;)sd(t,n,a,s),t=t.sibling}function gc(t,n,a,s){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?a.insertBefore(l,n):a.appendChild(l),mc(t,s),Ue=!0;else if(l!==4&&(l===27&&(mc(t,s),s=null,Qa(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(gc(t,n,a,s),t=t.sibling;t!==null;)gc(t,n,a,s),t=t.sibling}function hg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);On(n,s,a),n[Dt]=t,n[zt]=a}catch(u){He(t,t.return,u)}}var vc=!1,ai=null;function pg(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(vc=!0)}var Gi=null;function mg(){var t=Gi;return Gi=null,t}var Yn=0;function yr(t,n,a,s,l){return Yn=0,gg(t.child,n,a,s,l)}function gg(t,n,a,s,l){for(var u=!1;t!==null;){if(t.tag===5){var v=t.stateNode;if(s!==null){var A=Vd(v);s.push(A),A.view&&(u=!0)}else u||Vd(v).view&&(u=!0);vc=!0,mv(v,Yn===0?n:n+"_"+Yn,a),Yn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||gg(t.child,n,a,s,l)&&(u=!0));t=t.sibling}return u}function Vi(t,n){for(;t!==null;)t.tag===5?gv(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Vi(t.child,n)),t=t.sibling}function _c(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(_c(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=ra(n.default,n.share),n!=="none"&&(yr(t,a,n,null,!1)||Vi(t.child,!1))}t=t.sibling}}function rd(t,n){if(t.tag===30){var a=t.stateNode,s=t.memoizedProps,l=sa(s,a),u=ra(s.default,a.paired?s.share:s.enter);u!=="none"?yr(t,l,u,null,!1)?(_c(t),a.paired||n||Rr(t,s.onEnter)):Vi(t.child,!1):_c(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)rd(t,n),t=t.sibling;else _c(t)}function od(t){if(ai!==null&&ai.size!==0){var n=ai;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var l=n.get(s);if(l!==void 0){var u=ra(a.default,a.share);if(u!=="none"&&(yr(t,s,u,null,!1)?(u=t.stateNode,l.paired=u,u.paired=l,Rr(t,a.onShare)):Vi(t.child,!1)),n.delete(s),n.size===0)break}}}od(t)}t=t.sibling}}}function ld(t){if(t.tag===30){var n=t.memoizedProps,a=sa(n,t.stateNode),s=ai!==null?ai.get(a):void 0,l=ra(n.default,s!==void 0?n.share:n.exit);l!=="none"&&(yr(t,a,l,null,!1)?s!==void 0?(l=t.stateNode,s.paired=l,l.paired=s,ai.delete(a),Rr(t,n.onShare)):Rr(t,n.onExit):Vi(t.child,!1)),ai!==null&&od(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)ld(t),t=t.sibling;else ai!==null&&od(t)}function vg(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=sa(n,t.stateNode);n=ra(n.default,n.update),t.flags&=-5,n!=="none"&&yr(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&vg(t);t=t.sibling}}function cd(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Vi(t.child,!1))}cd(t)}t=t.sibling}}function xc(t){if(t.tag===30)t.stateNode.paired=null,Vi(t.child,!1),cd(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)xc(t),t=t.sibling;else cd(t)}function _g(t){for(t=t.child;t!==null;)t.tag===30?Vi(t.child,!1):(t.subtreeFlags&33554432)!==0&&_g(t),t=t.sibling}function ud(t,n,a,s,l,u,v){for(var A=!1;n!==null;){if(n.tag===5){var I=n.stateNode;if(u!==null&&Yn<u.length){var K=u[Yn],lt=Vd(I);(K.view||lt.view)&&(A=!0);var mt;if(mt=(t.flags&4)===0)if(lt.clip)mt=!0;else{mt=K.rect;var q=lt.rect;mt=mt.y!==q.y||mt.x!==q.x||mt.height!==q.height||mt.width!==q.width}mt&&(t.flags|=4),lt.abs?lt=!K.abs:(K=K.rect,lt=lt.rect,lt=K.height!==lt.height||K.width!==lt.width),lt&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&mv(I,Yn===0?a:a+"_"+Yn,l),A&&(t.flags&4)!==0||(Gi===null&&(Gi=[]),Gi.push(I,Yn===0?s:s+"_"+Yn,n.memoizedProps)),Yn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&v?t.flags|=n.flags&32:ud(t,n.child,a,s,l,u,v)&&(A=!0));n=n.sibling}return A}function xg(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,s=t.stateNode,l=sa(a,s),u=ra(a.default,a.update),v;v=t.memoizedState,t.memoizedState=null,s=t;var A=t.child;Yn=0,l=ud(s,A,l,l,u,v,!1),(t.flags&4)!==0&&l&&Rr(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&xg(t);t=t.sibling}}var Tn=!1,Be=!1,ki=!1,fd=!1,yg=typeof WeakSet=="function"?WeakSet:Set,An=null,ji=!1,qo=!1,yc=!1,dd=!1;function JS(t,n,a){if(t=t.containerInfo,Id=Br,t=Em(t),Qu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var u=l.anchorOffset,v=l.focusNode;l=l.focusOffset;try{s.nodeType,v.nodeType}catch{s=null;break t}var A=0,I=-1,K=-1,lt=0,mt=0,q=t,it=null;e:for(;;){for(var Lt;q!==s||u!==0&&q.nodeType!==3||(I=A+u),q!==v||l!==0&&q.nodeType!==3||(K=A+l),q.nodeType===3&&(A+=q.nodeValue.length),(Lt=q.firstChild)!==null;)it=q,q=Lt;for(;;){if(q===t)break e;if(it===s&&++lt===u&&(I=A),it===v&&++mt===l&&(K=A),(Lt=q.nextSibling)!==null)break;q=it,it=q.parentNode}q=Lt}s=I===-1||K===-1?null:{start:I,end:K}}else s=null}s=s||{start:0,end:0}}else s=null;for(Bd={focusedElem:t,selectionRange:s},Br=!1,a=(a&335544064)===a,An=n,n=a?9270:1024;An!==null;){if(t=An,a&&(s=t.deletions,s!==null))for(u=0;u<s.length;u++)a&&ld(s[u]);if(t.alternate===null&&(t.flags&2)!==0)a&&pg(t),Sc(a);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&ld(s),Sc(a);continue}else if(s!==null&&s.memoizedState!==null){a&&pg(t),Sc(a);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,An=s):(a&&vg(t),Sc(a))}}ai=null}function Sc(t){for(;An!==null;){var n=An,a=t,s=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&s!==null){a=void 0,l=s.memoizedProps,s=s.memoizedState;var u=n.stateNode;try{var v=Ds(n.type,l);a=u.getSnapshotBeforeUpdate(v,s),u.__reactInternalSnapshotBeforeUpdate=a}catch(A){He(n,n.return,A)}}break;case 3:if((l&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)Xd(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":Xd(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=sa(s.memoizedProps,s.stateNode),l=n.memoizedProps,l=ra(l.default,l.update),l!=="none"&&yr(s,a,l,s.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,An=s;break}An=n.return}}function Sg(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Xi(t,a),s&4&&jo(5,a);break;case 1:if(Xi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){He(a,a.return,v)}else{var l=Ds(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){He(a,a.return,v)}}s&64&&cg(a),s&512&&Hi(a,a.return);break;case 3:if(Xi(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{$m(t,n)}catch(v){He(a,a.return,v)}}break;case 27:n===null&&s&4&&hg(a);case 26:case 5:Xi(t,a),n===null&&s&4&&nd(a),s&512&&Hi(a,a.return);break;case 12:Xi(t,a);break;case 31:Xi(t,a),s&4&&Tg(t,a);break;case 13:Xi(t,a),s&4&&Ag(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=fM.bind(null,a),qM(t,a))));break;case 22:if(s=a.memoizedState!==null||Tn,!s){var u=n!==null&&n.memoizedState!==null||Be;n=Tn,l=Be,Tn=s,(Be=u)&&!l?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Ai(t,a,s)):Xi(t,a),Tn=n,Be=l}break;case 30:Xi(t,a),s&512&&Hi(a,a.return);break;case 7:s&512&&Hi(a,a.return);default:Xi(t,a)}}function hd(t,n){for(t=t.child;t!==null;)Mg(t,n),t=t.sibling}function Mg(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var l=t.stateNode,u=t.memoizedProps.style,v=u!=null&&u.hasOwnProperty("display")?u.display:null;l.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(I){He(t,t.return,I)}pd(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Ue=!0}catch(I){He(t,t.return,I)}break;case 18:try{var A=t.stateNode;n?pv(A,!0):pv(t.stateNode,!1)}catch(I){He(t,t.return,I)}break;case 22:case 23:t.memoizedState===null&&hd(t,n);break;default:hd(t,n)}}function pd(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,s=n;switch(a.tag){case 4:Mg(a,s);break t;case 22:a.memoizedState===null&&pd(a,s);break t;default:pd(a,s)}}t=t.sibling}}function bg(t){var n=t.alternate;n!==null&&(t.alternate=null,bg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ye(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tn=null,Zn=!1;function Ei(t,n,a){for(a=a.child;a!==null;)Eg(t,n,a),a=a.sibling}function Eg(t,n,a){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(le,a)}catch{}switch(a.tag){case 26:Be||Ln(a,n),Ei(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Be&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Be||Ln(a,n),Xo(a);var s=tn,l=Zn;Qa(a.type)&&(tn=a.stateNode,Zn=!1),Ei(t,n,a),Rv(a.stateNode,a.type,a.memoizedProps),tn=s,Zn=l;break;case 5:Be||Ln(a,n),Xo(a);case 6:if(a.tag===6&&Xo(a),s=tn,l=Zn,tn=null,Ei(t,n,a),tn=s,Zn=l,tn!==null)if(Zn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode),Ue=!0}catch(u){He(a,n,u)}else try{tn.removeChild(a.stateNode),Ue=!0}catch(u){He(a,n,u)}break;case 18:tn!==null&&(Zn?(t=tn,hv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Fr(t)):hv(tn,a.stateNode));break;case 4:s=tn,l=Zn,tn=a.stateNode.containerInfo,Zn=!0,Ei(t,n,a),tn=s,Zn=l;break;case 0:case 11:case 14:case 15:ja(2,a,n),Be||ja(4,a,n),Ei(t,n,a);break;case 1:Be||(Ln(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&ug(a,n,s)),Ei(t,n,a);break;case 21:Ei(t,n,a);break;case 22:Be=(s=Be)||a.memoizedState!==null,Ei(t,n,a),Be=s;break;case 30:Ln(a,n),Ei(t,n,a);break;case 7:Be||Ln(a,n),Ei(t,n,a);break;default:Ei(t,n,a)}}function Tg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Fr(t)}catch(a){He(n,n.return,a)}}}function Ag(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Fr(t)}catch(a){He(n,n.return,a)}}function tM(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new yg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new yg),n;default:throw Error(r(435,t.tag))}}function Mc(t,n){var a=tM(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var l=dM.bind(null,t,s);s.then(l,l)}})}function jn(t,n,a){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var u=s[l],v=t,A=n,I=A;t:for(;I!==null;){switch(I.tag){case 27:if(Qa(I.type)){tn=I.stateNode,Zn=!1;break t}break;case 5:tn=I.stateNode,Zn=!1;break t;case 3:case 4:tn=I.stateNode.containerInfo,Zn=!0;break t}I=I.return}if(tn===null)throw Error(r(160));Eg(v,A,u),tn=null,Zn=!1,v=u.alternate,v!==null&&(v.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)wg(n,t,a),n=n.sibling}var Ti=null;function wg(t,n,a){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var u=0;u<s.length;u++){var v=s[u];v.ref.impl=v.nextImpl}jn(n,t,a),Xn(t),l&4&&(ja(3,t,t.return),jo(3,t),ja(5,t,t.return));break;case 1:jn(n,t,a),Xn(t),l&512&&(Be||s===null||Ln(s,s.return)),l&64&&Tn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(u=Ti,jn(n,t,a),Xn(t),l&512&&(Be||s===null||Ln(s,s.return)),l&4)if(l=s!==null?s.memoizedState:null,a=t.memoizedState,s===null)if(a===null)if(t.stateNode===null)if(Tn)t.stateNode=uv(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,l=u.ownerDocument||u;e:switch(n){case"title":s=l.getElementsByTagName("title")[0],(!s||s[Ye]||s[Dt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(n),l.head.insertBefore(s,l.querySelector("head > title"))),On(s,n,a),s[Dt]=t,Qe(s),n=s;break t;case"link":if(u=Ov("link","href",l).get(n+(a.href||""))){for(v=0;v<u.length;v++)if(s=u[v],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(v,1);break e}}s=l.createElement(n),On(s,n,a),l.head.appendChild(s);break;case"meta":if(u=Ov("meta","content",l).get(n+(a.content||""))){for(v=0;v<u.length;v++)if(s=u[v],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(v,1);break e}}s=l.createElement(n),On(s,n,a),l.head.appendChild(s);break;default:throw Error(r(468,n))}s[Dt]=t,Qe(s),n=s}t.stateNode=n}else Tn||$d(u,t.type,t.stateNode);else t.stateNode=Lv(u,a,t.memoizedProps);else l!==a?(l===null?(n=s.stateNode,n===null||Be||n.parentNode.removeChild(n)):l.count--,a===null?Tn||$d(u,t.type,t.stateNode):Lv(u,a,t.memoizedProps)):a===null&&t.stateNode!==null&&id(t,t.memoizedProps,s.memoizedProps);break;case 27:jn(n,t,a),Xn(t),l&512&&(Be||s===null||Ln(s,s.return)),s!==null&&l&4&&id(t,t.memoizedProps,s.memoizedProps);break;case 5:if(u=ki,ki=!1,jn(n,t,a),ki=u,Xn(t),l&512&&(Be||s===null||Ln(s,s.return)),t.flags&32){n=t.stateNode;try{nr(n,""),Ue=!0}catch(lt){He(t,t.return,lt)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,id(t,n,s!==null?s.memoizedProps:n)),l&1024&&(fd=!0);break;case 6:if(jn(n,t,a),Xn(t),l&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Ue=!0}catch(lt){He(t,t.return,lt)}}break;case 3:if(Ue=!1,Ic=null,u=Ti,Ti=el(n.containerInfo),jn(n,t,a),Ti=u,Xn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Fr(n.containerInfo)}catch(lt){He(t,t.return,lt)}fd&&(fd=!1,Rg(t)),Ue=!1;break;case 4:l=ki,ki=Tn,s=Yp(),u=Ti,Ti=el(t.stateNode.containerInfo),jn(n,t,a),Xn(t),Ti=u,Ue&&qo&&(yc=!0),Ue=s,ki=l;break;case 12:jn(n,t,a),Xn(t);break;case 31:jn(n,t,a),Xn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Mc(t,n)));break;case 13:jn(n,t,a),Xn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Tc=X()),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Mc(t,n)));break;case 22:u=t.memoizedState!==null,v=s!==null&&s.memoizedState!==null;var A=Tn,I=Be,K=ki;Tn=A||u,ki=K||u,Be=I||v,jn(n,t,a),Be=I,ki=K,Tn=A,Xn(t),l&8192&&(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,!u||s===null||v||Tn||Be||(n=v||Be,a=Tn,s=Be,Tn=u||Tn,Be=n,Xa(t,2),Tn=a,Be=s),!u&&ki||hd(t,u)),l&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Mc(t,a))));break;case 19:jn(n,t,a),Xn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Mc(t,n)));break;case 30:l&512&&(Be||s===null||Ln(s,s.return)),l=Yp(),u=qo,v=(a&335544064)===a,A=t.memoizedProps,qo=v&&ra(A.default,A.update)!=="none",jn(n,t,a),Xn(t),v&&s!==null&&Ue&&(t.flags|=4),qo=u,Ue=l;break;case 21:break;case 7:l&512&&(Be||s===null||Ln(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:jn(n,t,a),Xn(t)}}function Xn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(dg(s)){a=s;break}s=s.return}s=null;for(var l=t.return;l!==null;){if(ed(l)){var u=l.stateNode;s===null?s=[u]:s.push(u)}if(td(l))break;l=l.return}var v=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var A=a.stateNode,I=ad(t);gc(t,I,A,v);break;case 5:var K=a.stateNode;a.flags&32&&(nr(K,""),a.flags&=-33);var lt=ad(t);gc(t,lt,K,v);break;case 3:case 4:var mt=a.stateNode.containerInfo,q=ad(t);sd(t,q,mt,v);break;default:throw Error(r(161))}}catch(it){He(t,t.return,it)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Rg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Rg(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Br=!0,n.reset(),Br=!1),t=t.sibling}}function Sr(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Cg(n,t),n=n.sibling;else xg(n)}function Cg(t,n){var a=t.alternate;if(a===null)rd(t,!1);else switch(t.tag){case 3:if(dd=ji=!1,mg(),Sr(n,t),!ji&&!yc){if(t=Gi,t!==null)for(var s=0;s<t.length;s+=3){a=t[s];var l=t[s+1];gv(a,t[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),dd=!0}Gi=null;break;case 5:Sr(n,t);break;case 4:s=ji,ji=!1,Sr(n,t),ji&&(yc=!0),ji=s;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?rd(t,!1):Sr(n,t));break;case 30:s=ji,l=mg(),ji=!1,Sr(n,t),ji&&(t.flags|=4);var u=t.memoizedProps,v=t.stateNode;n=sa(u,v),v=sa(a.memoizedProps,v);var A=ra(u.default,u.update);A==="none"?n=!1:(u=a.memoizedState,a.memoizedState=null,a=t.child,Yn=0,n=ud(t,a,n,v,A,u,!0),Yn!==(u===null?0:u.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Rr(t,t.memoizedProps.onUpdate),Gi=l):l!==null&&(l.push.apply(l,Gi),Gi=l),ji=(t.flags&32)!==0?!0:s;break;default:Sr(n,t)}}function Xi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Sg(t,n.alternate,n),n=n.sibling}function Xa(t,n){for(t=t.child;t!==null;){var a=t,s=n;switch(a.tag){case 0:case 11:case 14:case 15:ja(4,a,a.return),Xa(a,s);break;case 1:Ln(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&ug(a,a.return,l),Xa(a,s);break;case 27:(s&2)!==0&&Rv(a.stateNode,a.type,a.memoizedProps);case 5:Ln(a,a.return),a.tag!==5&&a.tag!==27||Xo(a),Xa(a,s);break;case 6:Xo(a);break;case 26:Ln(a,a.return),l=a.stateNode,a.memoizedState!==null||l===null||Be||l.parentNode.removeChild(l),Xa(a,s);break;case 22:a.memoizedState===null&&Xa(a,s);break;case 30:Ln(a,a.return),Xa(a,s);break;case 7:Ln(a,a.return);default:Xa(a,s)}t=t.sibling}}function Ai(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,l=t,u=n,v=u.flags,A=(a&1)!==0;switch(u.tag){case 0:case 11:case 15:Ai(l,u,a),jo(4,u);break;case 1:if(Ai(l,u,a),s=u,l=s.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(lt){He(s,s.return,lt)}if(s=u,l=s.updateQueue,l!==null){var I=s.stateNode;try{var K=l.shared.hiddenCallbacks;if(K!==null)for(l.shared.hiddenCallbacks=null,l=0;l<K.length;l++)Qm(K[l],I)}catch(lt){He(s,s.return,lt)}}A&&v&64&&cg(u),Hi(u,u.return);break;case 27:(a&2)!==0&&hg(u);case 5:u.tag!==5&&u.tag!==27||fg(u),Ai(l,u,a),A&&s===null&&v&4&&nd(u),Hi(u,u.return);break;case 6:fg(u);break;case 26:I=u.stateNode,u.memoizedState!==null||I===null||Tn||$d(el(I.ownerDocument),u.type,I),Ai(l,u,a),A&&s===null&&v&4&&nd(u),Hi(u,u.return);break;case 12:Ai(l,u,a);break;case 31:Ai(l,u,a),A&&v&4&&Tg(l,u);break;case 13:Ai(l,u,a),A&&v&4&&Ag(l,u);break;case 22:u.memoizedState===null&&Ai(l,u,a),Hi(u,u.return);break;case 30:Ai(l,u,a),Hi(u,u.return);break;case 7:Hi(u,u.return);default:Ai(l,u,a)}n=n.sibling}}function md(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Do(a))}function gd(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Do(t))}function vi(t,n,a,s){var l=(a&335544064)===a;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)Ng(t,n,a,s),n=n.sibling;else l&&_g(n)}function Ng(t,n,a,s){var l=(a&335544064)===a;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&xc(n);var u=n.flags;switch(n.tag){case 0:case 11:case 15:vi(t,n,a,s),u&2048&&jo(9,n);break;case 1:vi(t,n,a,s);break;case 3:vi(t,n,a,s),l&&dd&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),u&2048&&(u=null,n.alternate!==null&&(u=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==u&&(n.refCount++,u!=null&&Do(u)));break;case 12:if(u&2048){vi(t,n,a,s),u=n.stateNode;try{var v=n.memoizedProps,A=v.id,I=v.onPostCommit;typeof I=="function"&&I(A,n.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(K){He(n,n.return,K)}}else vi(t,n,a,s);break;case 31:vi(t,n,a,s);break;case 13:vi(t,n,a,s);break;case 23:break;case 22:v=n.stateNode,A=n.alternate,n.memoizedState!==null?(l&&A!==null&&A.memoizedState===null&&xc(A),v._visibility&2?vi(t,n,a,s):Wo(t,n)):(l&&A!==null&&A.memoizedState!==null&&xc(n),v._visibility&2?vi(t,n,a,s):(v._visibility|=2,Mr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1))),u&2048&&md(A,n);break;case 24:vi(t,n,a,s),u&2048&&gd(n.alternate,n);break;case 30:l&&(u=n.alternate,u!==null&&(Vi(u.child,!0),Vi(n.child,!0))),vi(t,n,a,s);break;default:vi(t,n,a,s)}}function Mr(t,n,a,s,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var u=t,v=n,A=a,I=s,K=v.flags;switch(v.tag){case 0:case 11:case 15:Mr(u,v,A,I,l),jo(8,v);break;case 23:break;case 22:var lt=v.stateNode;v.memoizedState!==null?lt._visibility&2?Mr(u,v,A,I,l):Wo(u,v):(lt._visibility|=2,Mr(u,v,A,I,l)),l&&K&2048&&md(v.alternate,v);break;case 24:Mr(u,v,A,I,l),l&&K&2048&&gd(v.alternate,v);break;default:Mr(u,v,A,I,l)}n=n.sibling}}function Wo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,l=s.flags;switch(s.tag){case 22:Wo(a,s),l&2048&&md(s.alternate,s);break;case 24:Wo(a,s),l&2048&&gd(s.alternate,s);break;default:Wo(a,s)}n=n.sibling}}var Us=8192;function Ls(t,n,a){if(t.subtreeFlags&Us)for(t=t.child;t!==null;)Dg(t,n,a),t=t.sibling}function Dg(t,n,a){switch(t.tag){case 26:Ls(t,n,a),t.flags&Us&&(t.memoizedState!==null?r1(a,Ti,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&Bv(a,t)));break;case 5:Ls(t,n,a),t.flags&Us&&(t=t.stateNode,(n&335544128)===n&&Bv(a,t));break;case 3:case 4:var s=Ti;Ti=el(t.stateNode.containerInfo),Ls(t,n,a),Ti=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Us,Us=16777216,Ls(t,n,a),Us=s):Ls(t,n,a));break;case 30:if((t.flags&Us)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var l=t.stateNode;l.paired=null,ai===null&&(ai=new Map),ai.set(s,l)}Ls(t,n,a);break;default:Ls(t,n,a)}}function Ug(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Yo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];An=s,Og(s,t)}Ug(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Lg(t),t=t.sibling}function Lg(t){switch(t.tag){case 0:case 11:case 15:Yo(t),t.flags&2048&&ja(9,t,t.return);break;case 3:Yo(t);break;case 12:Yo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,bc(t)):Yo(t);break;default:Yo(t)}}function bc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];An=s,Og(s,t)}Ug(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ja(8,n,n.return),bc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,bc(n));break;default:bc(n)}t=t.sibling}}function Og(t,n){for(;An!==null;){var a=An;switch(a.tag){case 0:case 11:case 15:ja(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Do(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,An=s;else t:for(a=t;An!==null;){s=An;var l=s.sibling,u=s.return;if(bg(s),s===a){An=null;break t}if(l!==null){l.return=u,An=l;break t}An=u}}}var eM={getCacheForType:function(t){var n=Nn(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Nn(hn).controller.signal}},nM=typeof WeakMap=="function"?WeakMap:Map,Pe=0,We=null,Se=null,Te=0,Fe=0,si=null,qa=!1,br=!1,vd=!1,ma=0,on=0,Wa=0,Os=0,Ec=0,ri=0,Er=0,Zo=null,Kn=null,_d=!1,Tc=0,zg=0,Ac=1/0,wc=null,Ya=null,an=0,wi=null,zs=null,qi=0,xd=0,yd=null,Pg=null,Tr=null,Ar=null,wr=null,Ko=0,Rc=null;function oi(){return(Pe&2)!==0&&Te!==0?Te&-Te:St.T!==null?Nd():J()}function Ig(){if(ri===0)if((Te&536870912)===0||xe){var t=ms;ms<<=1,(ms&3932160)===0&&(ms=262144),ri=t}else ri=536870912;return t=Dn.current,t!==null&&(t.flags|=32),ri}function Rr(t,n){if(n!=null){var a=t.stateNode,s=a.ref;s===null&&(s=a.ref=vv(sa(t.memoizedProps,a))),Ar===null&&(Ar=[]),Ar.push(n.bind(null,s))}}function Qn(t,n,a){(t===We&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)&&(Cr(t,0),Za(t,Te,ri,!1)),gs(t,a),((Pe&2)===0||t!==We)&&(t===We&&((Pe&2)===0&&(Os|=a),on===4&&Za(t,Te,ri,!1)),Wi(t))}function Bg(t,n,a){if((Pe&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ca(t,n),l=s?sM(t,n):Md(t,n,!0),u=s;do{if(l===0){br&&!s&&Za(t,n,0,!1);break}else{if(a=t.current.alternate,u&&!iM(a)){l=Md(t,n,!1),u=!1;continue}if(l===2){if(u=n,t.errorRecoveryDisabledLanes&u)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var A=t;l=Zo;var I=A.current.memoizedState.isDehydrated;if(I&&(Cr(A,v).flags|=256),v=Md(A,v,!1),v!==2&&v!==6){if(vd&&!I){A.errorRecoveryDisabledLanes|=u,Os|=u,l=4;break t}u=Kn,Kn=l,u!==null&&(Kn===null?Kn=u:Kn.push.apply(Kn,u))}l=v}if(u=!1,l!==2)continue}}if(l===1){Cr(t,0),Za(t,n,0,!0);break}t:{switch(s=t,u=l,u){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:Za(s,n,ri,!qa);break t;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(l=Tc+300-X(),10<l)){if(Za(s,n,ri,!qa),ea(s,0,!0)!==0)break t;qi=n,s.timeoutHandle=Gd(Fg.bind(null,s,a,Kn,wc,_d,n,ri,Os,Er,qa,u,"Throttled",-0,0),l);break t}Fg(s,a,Kn,wc,_d,n,ri,Os,Er,qa,u,null,-0,0)}}break}while(!0);Wi(t)}function Fg(t,n,a,s,l,u,v,A,I,K,lt,mt,q,it){t.timeoutHandle=-1;var Lt=n.subtreeFlags,Xt=(u&335544064)===u;if(mt=null,(Xt||Lt&8192||(Lt&16785408)===16785408)&&(mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ii},ai=null,Dg(n,u,mt),Xt&&(Lt=mt,Xt=t.containerInfo,Xt=(Xt.nodeType===9?Xt:Xt.ownerDocument).__reactViewTransition,Xt!=null&&(Lt.count++,Lt.waitingForViewTransition=!0,Lt=al.bind(Lt),Xt.finished.then(Lt,Lt))),Lt=(u&62914560)===u?Tc-X():(u&4194048)===u?zg-X():0,Lt=o1(mt,Lt),Lt!==null)){qi=u,t.cancelPendingCommit=Lt(Wg.bind(null,t,n,u,a,s,l,v,A,I,K,lt,mt,null,q,it)),Za(t,u,v,!K);return}Wg(t,n,u,a,s,l,v,A,I,K,lt,mt)}function iM(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var l=a[s],u=l.getSnapshot;l=l.value;try{if(!ni(u(),l))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Za(t,n,a,s){n=_o(t,n),n&=~Ec,n&=~Os,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var l=n;0<l;){var u=31-_n(l),v=1<<u;s[u]=-1,l&=~v}a!==0&&Al(t,a,n)}function Cc(){return(Pe&6)===0?(Qo(0),!1):!0}function Sd(){if(Se!==null){if(Fe===0)var t=Se.return;else t=Se,ca=Ms=null,Cf(t),mr=null,Oo=0,t=Se;for(;t!==null;)lg(t.alternate,t),t=t.return;Se=null}}function Cr(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,wM(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),qi=0,Sd(),We=t,Se=a=oa(t.current,null),Te=n,Fe=0,si=null,qa=!1,br=Ca(t,n),vd=!1,Er=ri=Ec=Os=Wa=on=0,Kn=Zo=null,_d=!1,ma=_o(t,n),Il(),a}function Hg(t,n){pe=null,St.H=lc,n===pr||n===Yl?(n=Wm(),Fe=3):n===gf?(n=Wm(),Fe=4):Fe=n===jf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,si=n,Se===null&&(on=1,cc(t,hi(n,t.current)))}function Gg(){var t=Dn.current;return t===null?!0:(Te&4194048)===Te?Fn===null:(Te&62914560)===Te||(Te&536870912)!==0?t===Fn:!1}function Vg(){var t=St.H;return St.H=lc,t===null?lc:t}function kg(){var t=St.A;return St.A=eM,t}function Nc(){on=4,qa||(Te&4194048)!==Te&&Dn.current!==null||(br=!0),(Wa&134217727)===0&&(Os&134217727)===0||We===null||Za(We,Te,ri,!1)}function Md(t,n,a){var s=Pe;Pe|=2;var l=Vg(),u=kg();(We!==t||Te!==n)&&(wc=null,Cr(t,n)),n=!1;var v=on;t:do try{if(Fe!==0&&Se!==null){var A=Se,I=si;switch(Fe){case 8:Sd(),v=6;break t;case 3:case 2:case 9:case 6:Dn.current===null&&(n=!0);var K=Fe;if(Fe=0,si=null,Nr(t,A,I,K),a&&br){v=0;break t}break;default:K=Fe,Fe=0,si=null,Nr(t,A,I,K)}}aM(),v=on;break}catch(lt){Hg(t,lt)}while(!0);return n&&t.shellSuspendCounter++,ca=Ms=null,Pe=s,St.H=l,St.A=u,Se===null&&(We=null,Te=0,Il()),v}function aM(){for(;Se!==null;)jg(Se)}function sM(t,n){var a=Pe;Pe|=2;var s=Vg(),l=kg();We!==t||Te!==n?(wc=null,Ac=X()+500,Cr(t,n)):br=Ca(t,n);t:do try{if(Fe!==0&&Se!==null){n=Se;var u=si;e:switch(Fe){case 1:Fe=0,si=null,Nr(t,n,u,1);break;case 2:case 9:if(Xm(u)){Fe=0,si=null,Xg(n);break}n=function(){Fe!==2&&Fe!==9||We!==t||(Fe=7),Wi(t)},u.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:Xm(u)?(Fe=0,si=null,Xg(n)):(Fe=0,si=null,Nr(t,n,u,7));break;case 5:var v=null;switch(Se.tag){case 26:v=Se.memoizedState;case 5:case 27:var A=Se;if(v?Pv(v):A.stateNode.complete){Fe=0,si=null;var I=A.sibling;if(I!==null)Se=I;else{var K=A.return;K!==null?(Se=K,Dc(K)):Se=null}break e}}Fe=0,si=null,Nr(t,n,u,5);break;case 6:Fe=0,si=null,Nr(t,n,u,6);break;case 8:Sd(),on=6;break t;default:throw Error(r(462))}}rM();break}catch(lt){Hg(t,lt)}while(!0);return ca=Ms=null,St.H=s,St.A=l,Pe=a,Se!==null?0:(We=null,Te=0,Il(),on)}function rM(){for(;Se!==null&&!fe();)jg(Se)}function jg(t){var n=rg(t.alternate,t,ma);t.memoizedProps=t.pendingProps,n===null?Dc(t):Se=n}function Xg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=J0(a,n,n.pendingProps,n.type,void 0,Te);break;case 11:n=J0(a,n,n.pendingProps,n.type.render,n.ref,Te);break;case 5:Cf(n);var s=n;s===En&&(xe?(kl(s),s.tag===5&&s.stateNode!=null&&(Ze=s.stateNode)):(kl(s),xe=!0));default:lg(a,n),n=Se=Om(n,ma),n=rg(a,n,ma)}t.memoizedProps=t.pendingProps,n===null?Dc(t):Se=n}function Nr(t,n,a,s){ca=Ms=null,Cf(n),mr=null,Oo=0;var l=n.return;try{if(WS(t,l,n,a,Te)){on=1,cc(t,hi(a,t.current)),Se=null;return}}catch(u){if(l!==null)throw Se=l,u;on=1,cc(t,hi(a,t.current)),Se=null;return}n.flags&32768?(xe||s===1?t=!0:br||(Te&536870912)!==0?t=!1:(qa=t=!0,(s===2||s===9||s===3||s===6)&&(s=Dn.current,s!==null&&s.tag===13&&(s.flags|=16384))),qg(n,t)):Dc(n)}function Dc(t){var n=t;do{if((n.flags&32768)!==0){qg(n,qa);return}t=n.return;var a=QS(n.alternate,n,ma);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=t}while(n!==null);on===0&&(on=5)}function qg(t,n){do{var a=$S(t.alternate,t);if(a!==null){a.flags&=32767,Se=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Se=t;return}Se=t=a}while(t!==null);on=6,Se=null}function Wg(t,n,a,s,l,u,v,A,I,K,lt,mt){t.cancelPendingCommit=null;do Uc();while(an!==0);if((Pe&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===We&&(Se=We=null,Te=0),zs=n,wi=t,qi=a,yd=l,Pg=s,oM(t,n,a,v,A,I,mt)}}function oM(t,n,a,s,l,u,v){var A=n.lanes|n.childLanes;if(xd=A,A|=nf,Lu(t,a,A,s,l,u),Ar=null,(a&335544064)===a?(wr=zS(t),s=10262):(wr=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,hM(Pt,function(){return Ad(),null})):(t.callbackNode=null,t.callbackPriority=0),vc=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=St.T,St.T=null,l=wt.p,wt.p=2,u=Pe,Pe|=4;try{JS(t,n,a)}finally{Pe=u,wt.p=l,St.T=s}}an=1,vc?Tr=LM(v,t.containerInfo,wr,bd,Ed,cM,Td,Ad,lM):(bd(),Ed(),Td())}function lM(t){if(an!==0){var n=wi.onRecoverableError;n(t,{componentStack:null})}}function cM(){an===3&&(an=0,Cg(zs,wi),an=4)}function bd(){if(an===1){an=0;var t=wi,n=zs,a=qi,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=St.T,St.T=null;var l=wt.p;wt.p=2;var u=Pe;Pe|=4;try{qo=yc=!1,wg(n,t,a),a=Bd;var v=Em(t.containerInfo),A=a.focusedElem,I=a.selectionRange;if(v!==A&&A&&A.ownerDocument&&bm(A.ownerDocument.documentElement,A)){if(I!==null&&Qu(A)){var K=I.start,lt=I.end;if(lt===void 0&&(lt=K),"selectionStart"in A)A.selectionStart=K,A.selectionEnd=Math.min(lt,A.value.length);else{var mt=A.ownerDocument||document,q=mt&&mt.defaultView||window;if(q.getSelection){var it=q.getSelection(),Lt=A.textContent.length,Xt=Math.min(I.start,Lt),me=I.end===void 0?Xt:Math.min(I.end,Lt);!it.extend&&Xt>me&&(v=me,me=Xt,Xt=v);var Z=Mm(A,Xt),j=Mm(A,me);if(Z&&j&&(it.rangeCount!==1||it.anchorNode!==Z.node||it.anchorOffset!==Z.offset||it.focusNode!==j.node||it.focusOffset!==j.offset)){var et=mt.createRange();et.setStart(Z.node,Z.offset),it.removeAllRanges(),Xt>me?(it.addRange(et),it.extend(j.node,j.offset)):(et.setEnd(j.node,j.offset),it.addRange(et))}}}}for(mt=[],it=A;it=it.parentNode;)it.nodeType===1&&mt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<mt.length;A++){var pt=mt[A];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Br=!!Id,Bd=Id=null}finally{Pe=u,wt.p=l,St.T=s}}t.current=n,an=2}}function Ed(){if(an===2){an=0;var t=wi,n=zs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=St.T,St.T=null;var s=wt.p;wt.p=2;var l=Pe;Pe|=4;try{Sg(t,n.alternate,n)}finally{Pe=l,wt.p=s,St.T=a}}an=3}}function Td(){if(an===4||an===3){an=0;var t=Tr;Tr=null,ze();var n=wi,a=zs,s=qi,l=Pg,u=(s&335544064)===s?10262:10256;if((a.subtreeFlags&u)!==0||(a.flags&u)!==0?an=5:(an=0,zs=wi=null,Yg(n,n.pendingLanes)),u=n.pendingLanes,u===0&&(Ya=null),ft(s),a=a.stateNode,be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(le,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=St.T,u=wt.p,wt.p=2,St.T=null;try{for(var v=n.onRecoverableError,A=0;A<l.length;A++){var I=l[A];v(I.value,{componentStack:I.stack})}}finally{St.T=a,wt.p=u}}if(l=Ar,v=wr,wr=null,l!==null&&(Ar=null,v===null&&(v=[]),t!==null))for(I=0;I<l.length;I++)a=(0,l[I])(v),a!==void 0&&t.finished.finally(a);(qi&3)!==0&&Uc(),Wi(n),u=n.pendingLanes,(s&261930)!==0&&(u&42)!==0?n===Rc?Ko++:(Ko=0,Rc=n):(Ko=0,Rc=null),Qo(0)}}function Yg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Do(n)))}function Uc(){return Tr!==null&&(Tr.skipTransition(),Tr=null),bd(),Ed(),Td(),Ad()}function Ad(){if(an!==5)return!1;var t=wi,n=xd;xd=0;var a=ft(qi),s=St.T,l=wt.p;try{wt.p=32>a?32:a,St.T=null,a=yd,yd=null;var u=wi,v=qi;if(an=0,zs=wi=null,qi=0,(Pe&6)!==0)throw Error(r(331));var A=Pe;if(Pe|=4,Lg(u.current),Ng(u,u.current,v,a),Pe=A,Qo(0,!1),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(le,u)}catch{}return!0}finally{wt.p=l,St.T=s,Yg(t,n)}}function Zg(t,n,a){n=hi(a,n),n=kf(t.stateNode,n,2),t=Ha(t,n,2),t!==null&&(gs(t,2),Wi(t))}function He(t,n,a){if(t.tag===3)Zg(t,t,a);else for(;n!==null;){if(n.tag===3){Zg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ya===null||!Ya.has(s))){t=hi(a,t),a=X0(2),s=Ha(n,a,2),s!==null&&(q0(a,s,n,t),gs(s,2),Wi(s));break}}n=n.return}}function wd(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new nM;var l=new Set;s.set(n,l)}else l=s.get(n),l===void 0&&(l=new Set,s.set(n,l));l.has(a)||(vd=!0,l.add(a),t=uM.bind(null,t,n,a),n.then(t,t))}function uM(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,We===t&&(Te&a)===a&&((on===4||on===3&&(Te&62914560)===Te&&300>X()-Tc)&&(Pe&2)===0?Cr(t,0):Ec|=a,Er===Te&&(Er=0)),Wi(t)}function Kg(t,n){n===0&&(n=Tl()),t=xs(t,n),t!==null&&(gs(t,n),Wi(t))}function fM(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Kg(t,a)}function dM(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,l=t.memoizedState;l!==null&&(a=l.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Kg(t,a)}function hM(t,n){return Gt(t,n)}var Dr=null,Ur=null,Rd=!1,Lc=!1,Cd=!1,Ka=0;function Wi(t){t!==Ur&&t.next===null&&(Ur===null?Dr=Ur=t:Ur=Ur.next=t),Lc=!0,Rd||(Rd=!0,mM())}function Qo(t,n){if(!Cd&&Lc){Cd=!0;do for(var a=!1,s=Dr;s!==null;){if(t!==0){var l=s.pendingLanes;if(l===0)var u=0;else{var v=s.suspendedLanes,A=s.pingedLanes;u=(1<<31-_n(42|t)+1)-1,u&=l&~(v&~A),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,tv(s,u))}else u=Te,u=ea(s,s===We?u:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(u&3)===0||Ca(s,u)||(a=!0,tv(s,u));s=s.next}while(a);Cd=!1}}function pM(){Qg()}function Qg(){Lc=Rd=!1;var t=0;Ka!==0&&AM()&&(t=Ka);for(var n=X(),a=null,s=Dr;s!==null;){var l=s.next,u=$g(s,n);u===0?(s.next=null,a===null?Dr=l:a.next=l,l===null&&(Ur=a)):(a=s,(t!==0||(u&3)!==0)&&(Lc=!0)),s=l}an!==0&&an!==5||Qo(t),Ka!==0&&(Ka=0)}function $g(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,l=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var v=31-_n(u),A=1<<v,I=l[v];I===-1?((A&a)===0||(A&s)!==0)&&(l[v]=Uu(A,n)):I<=n&&(t.expiredLanes|=A),u&=~A}if(n=We,a=Te,a=ea(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&se(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ca(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&se(s),ft(a)){case 2:case 8:a=xt;break;case 32:a=Pt;break;case 268435456:a=re;break;default:a=Pt}return s=Jg.bind(null,t),a=Gt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&se(s),t.callbackPriority=2,t.callbackNode=null,2}function Jg(t,n){if(an!==0&&an!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Uc()&&t.callbackNode!==a)return null;var s=Te;return s=ea(t,t===We?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Bg(t,s,n),$g(t,X()),t.callbackNode!=null&&t.callbackNode===a?Jg.bind(null,t):null)}function tv(t,n){if(Uc())return null;Bg(t,n,!0)}function mM(){RM(function(){(Pe&6)!==0?Gt(dt,pM):Qg()})}function Nd(){if(Ka===0){var t=Ts;t===0&&(t=ps,ps<<=1,(ps&261888)===0&&(ps=256)),Ka=t}return Ka}function ev(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Cl(t)}function gM(t,n,a,s,l){if(n==="submit"&&a&&a.stateNode===l){var u=ev((l[zt]||null).action),v=s.submitter;v&&(n=(n=v[zt]||null)?ev(n.formAction):v.getAttribute("formAction"),n!==null&&(u=n,v=null));var A=new Ll("action","action",null,s,l);t.push({event:A,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ka!==0){var I=new FormData(l,v);Bf(a,{pending:!0,data:I,method:l.method,action:u},null,I)}}else typeof u=="function"&&(A.preventDefault(),I=new FormData(l,v),Bf(a,{pending:!0,data:I,method:l.method,action:u},u,I))},currentTarget:l}]})}}for(var Dd=0;Dd<ef.length;Dd++){var Ud=ef[Dd],vM=Ud.toLowerCase(),_M=Ud[0].toUpperCase()+Ud.slice(1);bi(vM,"on"+_M)}bi(wm,"onAnimationEnd"),bi(Rm,"onAnimationIteration"),bi(Cm,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(wS,"onTransitionRun"),bi(RS,"onTransitionStart"),bi(CS,"onTransitionCancel"),bi(Nm,"onTransitionEnd"),xn("onMouseEnter",["mouseout","mouseover"]),xn("onMouseLeave",["mouseout","mouseover"]),xn("onPointerEnter",["pointerout","pointerover"]),xn("onPointerLeave",["pointerout","pointerover"]),dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),dn("onBeforeInput",["compositionend","keypress","textInput","paste"]),dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($o));function nv(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],l=s.event;s=s.listeners;t:{var u=void 0;if(n)for(var v=s.length-1;0<=v;v--){var A=s[v],I=A.instance,K=A.currentTarget;if(A=A.listener,I!==u&&l.isPropagationStopped())break t;u=A,l.currentTarget=K;try{u(l)}catch(lt){Pl(lt)}l.currentTarget=null,u=I}else for(v=0;v<s.length;v++){if(A=s[v],I=A.instance,K=A.currentTarget,A=A.listener,I!==u&&l.isPropagationStopped())break t;u=A,l.currentTarget=K;try{u(l)}catch(lt){Pl(lt)}l.currentTarget=null,u=I}}}}function Me(t,n){var a=n[oe];a===void 0&&(a=n[oe]=new Set);var s=t+"__bubble";a.has(s)||(iv(n,t,2,!1),a.add(s))}function Ld(t,n,a){var s=0;n&&(s|=4),iv(a,t,s,n)}var Oc="_reactListening"+Math.random().toString(36).slice(2);function Od(t){if(!t[Oc]){t[Oc]=!0,Na.forEach(function(a){a!=="selectionchange"&&(xM.has(a)||Ld(a,!1,t),Ld(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Oc]||(n[Oc]=!0,Ld("selectionchange",!1,n))}}function iv(t,n,a,s){switch(qv(n)){case 2:var l=f1;break;case 8:l=d1;break;default:l=th}a=l.bind(null,n,a,t),l=void 0,!Gu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),s?l!==void 0?t.addEventListener(n,a,{capture:!0,passive:l}):t.addEventListener(n,a,!0):l!==void 0?t.addEventListener(n,a,{passive:l}):t.addEventListener(n,a,!1)}function zd(t,n,a,s,l){var u=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var A=s.stateNode.containerInfo;if(A===l)break;if(v===4)for(v=s.return;v!==null;){var I=v.tag;if((I===3||I===4)&&v.stateNode.containerInfo===l)return;v=v.return}for(;A!==null;){if(v=Yt(A),v===null)return;if(I=v.tag,I===5||I===6||I===26||I===27){s=u=v;continue t}A=A.parentNode}}s=s.return}im(function(){var K=u,lt=Fu(a),mt=[];t:{var q=Dm.get(t);if(q!==void 0){var it=Ll,Lt=t;switch(t){case"keypress":if(Dl(a)===0)break t;case"keydown":case"keyup":it=iS;break;case"focusin":Lt="focus",it=Xu;break;case"focusout":Lt="blur",it=Xu;break;case"beforeblur":case"afterblur":it=Xu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=rm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=Xy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=lS;break;case wm:case Rm:case Cm:it=Yy;break;case Nm:it=uS;break;case"scroll":case"scrollend":it=ky;break;case"wheel":it=dS;break;case"copy":case"cut":case"paste":it=Ky;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=lm;break;case"submit":it=rS;break;case"toggle":case"beforetoggle":it=pS}var Xt=(n&4)!==0,me=!Xt&&(t==="scroll"||t==="scrollend"),Z=Xt?q!==null?q+"Capture":null:q;Xt=[];for(var j=K,et;j!==null;){var pt=j;if(et=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||et===null||Z===null||(pt=yo(j,Z),pt!=null&&Xt.push(Jo(j,pt,et))),me)break;j=j.return}0<Xt.length&&(q=new it(q,Lt,null,a,lt),mt.push({event:q,listeners:Xt}))}}if((n&7)===0){t:{if(it=t==="mouseover"||t==="pointerover",q=t==="mouseout"||t==="pointerout",it&&a!==Bu&&(Lt=a.relatedTarget||a.fromElement)&&(Yt(Lt)||Lt[ne]))break t;(q||it)&&(Lt=lt.window===lt?lt:(it=lt.ownerDocument)?it.defaultView||it.parentWindow:window,q?(it=a.relatedTarget||a.toElement,q=K,it=it?Yt(it):null,it!==null&&(me=f(it),Xt=it.tag,it!==me||Xt!==5&&Xt!==27&&Xt!==6)&&(it=null)):(q=null,it=K),q!==it&&(Xt=rm,pt="onMouseLeave",Z="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(Xt=lm,pt="onPointerLeave",Z="onPointerEnter",j="pointer"),me=q==null?Lt:Ee(q),et=it==null?Lt:Ee(it),Lt=new Xt(pt,j+"leave",q,a,lt),Lt.target=me,Lt.relatedTarget=et,pt=null,Yt(lt)===K&&(Xt=new Xt(Z,j+"enter",it,a,lt),Xt.target=et,Xt.relatedTarget=me,pt=Xt),me=pt,Xt=q&&it?G(q,it,yM):null,q!==null&&av(mt,Lt,q,Xt,!1),it!==null&&me!==null&&av(mt,me,it,Xt,!0)))}t:{if(q=K?Ee(K):window,it=q.nodeName&&q.nodeName.toLowerCase(),it==="select"||it==="input"&&q.type==="file")var kt=gm;else if(pm(q))if(vm)kt=ES;else{kt=MS;var Ae=SS}else it=q.nodeName,!it||it.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?K&&Iu(K.elementType)&&(kt=gm):kt=bS;if(kt&&(kt=kt(t,K))){mm(mt,kt,a,lt);break t}Ae&&Ae(t,q,K)}switch(Ae=K?Ee(K):window,t){case"focusin":(pm(Ae)||Ae.contentEditable==="true")&&(rr=Ae,$u=K,Ro=null);break;case"focusout":Ro=$u=rr=null;break;case"mousedown":Ju=!0;break;case"contextmenu":case"mouseup":case"dragend":Ju=!1,Tm(mt,a,lt);break;case"selectionchange":if(AS)break;case"keydown":case"keyup":Tm(mt,a,lt)}var Kt;if(Wu)t:{switch(t){case"compositionstart":var ae="onCompositionStart";break t;case"compositionend":ae="onCompositionEnd";break t;case"compositionupdate":ae="onCompositionUpdate";break t}ae=void 0}else sr?dm(t,a)&&(ae="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ae="onCompositionStart");ae&&(cm&&a.locale!=="ko"&&(sr||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&sr&&(Kt=am()):(Da=lt,Vu="value"in Da?Da.value:Da.textContent,sr=!0)),Ae=zc(K,ae),0<Ae.length&&(ae=new om(ae,t,null,a,lt),mt.push({event:ae,listeners:Ae}),Kt?ae.data=Kt:(Kt=hm(a),Kt!==null&&(ae.data=Kt)))),(Kt=gS?vS(t,a):_S(t,a))&&(ae=zc(K,"onBeforeInput"),0<ae.length&&(Ae=new om("onBeforeInput","beforeinput",null,a,lt),mt.push({event:Ae,listeners:ae}),Ae.data=Kt)),gM(mt,t,K,a,lt)}nv(mt,n)})}function Jo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function zc(t,n){for(var a=n+"Capture",s=[];t!==null;){var l=t,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=yo(t,a),l!=null&&s.unshift(Jo(t,l,u)),l=yo(t,n),l!=null&&s.push(Jo(t,l,u))),t.tag===3)return s;t=t.return}return[]}function yM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function av(t,n,a,s,l){for(var u=n._reactName,v=[];a!==null&&a!==s;){var A=a,I=A.alternate,K=A.stateNode;if(A=A.tag,I!==null&&I===s)break;A!==5&&A!==26&&A!==27||K===null||(I=K,l?(K=yo(a,u),K!=null&&v.unshift(Jo(a,K,I))):l||(K=yo(a,u),K!=null&&v.push(Jo(a,K,I)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var SM=/\r\n?/g,MM=/\u0000|\uFFFD/g;function sv(t){return(typeof t=="string"?t:""+t).replace(SM,`
`).replace(MM,"")}function rv(t,n){return n=sv(n),sv(t)===n}function Ge(t,n,a,s,l,u){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||nr(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&nr(t,""+s);else return;break;case"className":Rl(t,"class",s);break;case"tabIndex":Rl(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Rl(t,a,s);break;case"style":em(t,s,u);return;case"data":if(n!=="object"){Rl(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Cl(s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(n!=="input"&&Ge(t,n,"name",l.name,l,null),Ge(t,n,"formEncType",l.formEncType,l,null),Ge(t,n,"formMethod",l.formMethod,l,null),Ge(t,n,"formTarget",l.formTarget,l,null)):(Ge(t,n,"encType",l.encType,l,null),Ge(t,n,"method",l.method,l,null),Ge(t,n,"target",l.target,l,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Cl(s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Ii);return;case"onScroll":s!=null&&Me("scroll",t);return;case"onScrollEnd":s!=null&&Me("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(l.children!=null)throw Error(r(60));(u!=null?u.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Cl(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Me("beforetoggle",t),Me("toggle",t),wl(t,"popover",s);break;case"xlinkActuate":ia(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ia(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ia(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ia(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ia(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ia(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ia(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ia(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ia(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":wl(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=Gy.get(a)||a,wl(t,a,s);else return}Ue=!0}function Pd(t,n,a,s,l,u){switch(a){case"style":em(t,s,u);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(l.children!=null)throw Error(r(60));(u!=null?u.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof s=="string")nr(t,s);else if(typeof s=="number"||typeof s=="bigint")nr(t,""+s);else return;break;case"onScroll":s!=null&&Me("scroll",t);return;case"onScrollEnd":s!=null&&Me("scrollend",t);return;case"onClick":s!=null&&(t.onclick=Ii);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!qe.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),u=a.slice(2,l?a.length-7:void 0),n=t[zt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(u,n,l),typeof s=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(u,s,l);break t}Ue=!0,a in t?t[a]=s:s===!0?t.setAttribute(a,""):wl(t,a,s)}return}Ue=!0}function On(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",t),Me("load",t);var s=!1,l=!1,u;for(u in a)if(a.hasOwnProperty(u)){var v=a[u];if(v!=null)switch(u){case"src":s=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(t,n,u,v,a,null)}}l&&Ge(t,n,"srcSet",a.srcSet,a,null),s&&Ge(t,n,"src",a.src,a,null);return;case"input":Me("invalid",t);var A=u=v=l=null,I=null,K=null;for(s in a)if(a.hasOwnProperty(s)){var lt=a[s];if(lt!=null)switch(s){case"name":l=lt;break;case"type":v=lt;break;case"checked":I=lt;break;case"defaultChecked":K=lt;break;case"value":u=lt;break;case"defaultValue":A=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:Ge(t,n,s,lt,a,null)}}Qp(t,u,A,I,K,v,l,!1);return;case"select":Me("invalid",t),s=v=u=null;for(l in a)if(a.hasOwnProperty(l)&&(A=a[l],A!=null))switch(l){case"value":u=A;break;case"defaultValue":v=A;break;case"multiple":s=A;default:Ge(t,n,l,A,a,null)}n=u,a=v,t.multiple=!!s,n!=null?er(t,!!s,n,!1):a!=null&&er(t,!!s,a,!0);return;case"textarea":Me("invalid",t),u=l=s=null;for(v in a)if(a.hasOwnProperty(v)&&(A=a[v],A!=null))switch(v){case"value":s=A;break;case"defaultValue":l=A;break;case"children":u=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Ge(t,n,v,A,a,null)}Jp(t,s,l,u);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(s=a[I],s!=null))switch(I){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ge(t,n,I,s,a,null)}return;case"dialog":Me("beforetoggle",t),Me("toggle",t),Me("cancel",t),Me("close",t);break;case"iframe":case"object":Me("load",t);break;case"video":case"audio":for(s=0;s<$o.length;s++)Me($o[s],t);break;case"image":Me("error",t),Me("load",t);break;case"details":Me("toggle",t);break;case"embed":case"source":case"link":Me("error",t),Me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in a)if(a.hasOwnProperty(K)&&(s=a[K],s!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(t,n,K,s,a,null)}return;default:if(Iu(n)){for(lt in a)a.hasOwnProperty(lt)&&(s=a[lt],s!==void 0&&Pd(t,n,lt,s,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(s=a[A],s!=null&&Ge(t,n,A,s,a,null))}var bM={};function EM(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,v=null,A=null,I=null,K=null,lt=null;for(it in a){var mt=a[it];if(a.hasOwnProperty(it)&&mt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":I=mt;default:s.hasOwnProperty(it)||Ge(t,n,it,null,s,mt)}}for(var q in s){var it=s[q];if(mt=a[q],s.hasOwnProperty(q)&&(it!=null||mt!=null))switch(q){case"type":it!==mt&&(Ue=!0),u=it;break;case"name":it!==mt&&(Ue=!0),l=it;break;case"checked":it!==mt&&(Ue=!0),K=it;break;case"defaultChecked":it!==mt&&(Ue=!0),lt=it;break;case"value":it!==mt&&(Ue=!0),v=it;break;case"defaultValue":it!==mt&&(Ue=!0),A=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:it!==mt&&Ge(t,n,q,it,s,mt)}}zu(t,v,A,I,K,lt,u,l);return;case"select":it=v=A=q=null;for(u in a)if(I=a[u],a.hasOwnProperty(u)&&I!=null)switch(u){case"value":break;case"multiple":it=I;default:s.hasOwnProperty(u)||Ge(t,n,u,null,s,I)}for(l in s)if(u=s[l],I=a[l],s.hasOwnProperty(l)&&(u!=null||I!=null))switch(l){case"value":u!==I&&(Ue=!0),q=u;break;case"defaultValue":u!==I&&(Ue=!0),A=u;break;case"multiple":u!==I&&(Ue=!0),v=u;default:u!==I&&Ge(t,n,l,u,s,I)}n=A,a=v,s=it,q!=null?er(t,!!a,q,!1):!!s!=!!a&&(n!=null?er(t,!!a,n,!0):er(t,!!a,a?[]:"",!1));return;case"textarea":it=q=null;for(A in a)if(l=a[A],a.hasOwnProperty(A)&&l!=null&&!s.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ge(t,n,A,null,s,l)}for(v in s)if(l=s[v],u=a[v],s.hasOwnProperty(v)&&(l!=null||u!=null))switch(v){case"value":l!==u&&(Ue=!0),q=l;break;case"defaultValue":l!==u&&(Ue=!0),it=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==u&&Ge(t,n,v,l,s,u)}$p(t,q,it);return;case"option":for(var Lt in a)if(q=a[Lt],a.hasOwnProperty(Lt)&&q!=null&&!s.hasOwnProperty(Lt))switch(Lt){case"selected":t.selected=!1;break;default:Ge(t,n,Lt,null,s,q)}for(I in s)if(q=s[I],it=a[I],s.hasOwnProperty(I)&&q!==it&&(q!=null||it!=null))switch(I){case"selected":q!==it&&(Ue=!0),t.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:Ge(t,n,I,q,s,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Xt in a)q=a[Xt],a.hasOwnProperty(Xt)&&q!=null&&!s.hasOwnProperty(Xt)&&Ge(t,n,Xt,null,s,q);for(K in s)if(q=s[K],it=a[K],s.hasOwnProperty(K)&&q!==it&&(q!=null||it!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(r(137,n));break;default:Ge(t,n,K,q,s,it)}return;default:if(Iu(n)){for(var me in a)q=a[me],a.hasOwnProperty(me)&&q!==void 0&&!s.hasOwnProperty(me)&&Pd(t,n,me,void 0,s,q);for(lt in s)q=s[lt],it=a[lt],!s.hasOwnProperty(lt)||q===it||q===void 0&&it===void 0||Pd(t,n,lt,q,s,it);return}}for(var Z in a)q=a[Z],a.hasOwnProperty(Z)&&q!=null&&!s.hasOwnProperty(Z)&&Ge(t,n,Z,null,s,q);for(mt in s)q=s[mt],it=a[mt],!s.hasOwnProperty(mt)||q===it||q==null&&it==null||Ge(t,n,mt,q,s,it)}function ov(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function TM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var l=a[s],u=l.transferSize,v=l.initiatorType,A=l.duration;if(u&&A&&ov(v)){for(v=0,A=l.responseEnd,s+=1;s<a.length;s++){var I=a[s],K=I.startTime;if(K>A)break;var lt=I.transferSize,mt=I.initiatorType;lt&&ov(mt)&&(I=I.responseEnd,v+=lt*(I<A?1:(A-K)/(I-K)))}if(--s,n+=8*(u+v)/(l.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Id=null,Bd=null;function tl(t){return t.nodeType===9?t:t.ownerDocument}function lv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function uv(t,n,a,s){return a=tl(a).createElement(t),a[Dt]=s,a[zt]=n,On(a,t,n),Qe(a),a}function Fd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Hd=null;function AM(){var t=window.event;return t&&t.type==="popstate"?t===Hd?!1:(Hd=t,!0):(Hd=null,!1)}var Gd=typeof setTimeout=="function"?setTimeout:void 0,wM=typeof clearTimeout=="function"?clearTimeout:void 0,fv=typeof Promise=="function"?Promise:void 0,dv=typeof requestAnimationFrame=="function"?requestAnimationFrame:Gd,RM=typeof queueMicrotask=="function"?queueMicrotask:typeof fv<"u"?function(t){return fv.resolve(null).then(t).catch(CM)}:Gd;function CM(t){setTimeout(function(){throw t})}function Qa(t){return t==="head"}function hv(t,n){var a=n,s=0;do{var l=a.nextSibling;if(t.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(l),Fr(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Zd(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Zd(a);for(var u=a.firstChild;u;){var v=u.nextSibling,A=u.nodeName;u[Ye]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=v}}else a==="body"&&Zd(t.ownerDocument.body);a=l}while(a);Fr(n)}function pv(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function mv(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var l=s=0;l<n.length;l++){var u=n[l];0<u.width&&0<u.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function gv(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function NM(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function Vd(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return NM(n,a,t)}function DM(t){return t.documentElement.clientHeight}function UM(t){this.addEventListener("load",t),this.addEventListener("error",t)}function LM(t,n,a,s,l,u,v,A,I){var K=n.nodeType===9?n:n.ownerDocument;try{var lt=K.startViewTransition({update:function(){var q=K.defaultView,it=q.navigation&&q.navigation.transition,Lt=K.fonts.status;s();var Xt=[];if(Lt==="loaded"&&(DM(K),K.fonts.status==="loading"&&Xt.push(K.fonts.ready)),Lt=Xt.length,t!==null)for(var me=t.suspenseyImages,Z=0,j=0;j<me.length;j++){var et=me[j];if(!et.complete){var pt=et.getBoundingClientRect();if(0<pt.bottom&&0<pt.right&&pt.top<q.innerHeight&&pt.left<q.innerWidth){if(Z+=Iv(et),Z>Bc){Xt.length=Lt;break}et=new Promise(UM.bind(et)),Xt.push(et)}}}if(0<Xt.length)return q=Promise.race([Promise.all(Xt),new Promise(function(kt){return setTimeout(kt,500)})]).then(l,l),(it?Promise.allSettled([it.finished,q]):q).then(u,u);if(l(),it)return it.finished.then(u,u);u()},types:a});K.__reactViewTransition=lt;var mt=[];return lt.ready.then(function(){for(var q=K.documentElement.getAnimations({subtree:!0}),it=0;it<q.length;it++){var Lt=q[it],Xt=Lt.effect,me=Xt.pseudoElement;if(me!=null&&me.startsWith("::view-transition")){mt.push(Lt),Lt=Xt.getKeyframes();for(var Z=me=void 0,j=!0,et=0;et<Lt.length;et++){var pt=Lt[et],kt=pt.width;if(me===void 0)me=kt;else if(me!==kt){j=!1;break}if(kt=pt.height,Z===void 0)Z=kt;else if(Z!==kt){j=!1;break}delete pt.width,delete pt.height,pt.transform==="none"&&delete pt.transform}j&&me!==void 0&&Z!==void 0&&(Xt.setKeyframes(Lt),j=getComputedStyle(Xt.target,Xt.pseudoElement),j.width!==me||j.height!==Z)&&(j=Lt[0],j.width=me,j.height=Z,j=Lt[Lt.length-1],j.width=me,j.height=Z,Xt.setKeyframes(Lt))}}v()},function(q){K.__reactViewTransition===lt&&(K.__reactViewTransition=null);try{if(typeof q=="object"&&q!==null)switch(q.name){case"InvalidStateError":(q.message==="View transition was skipped because document visibility state is hidden."||q.message==="Skipping view transition because document visibility state has become hidden."||q.message==="Skipping view transition because viewport size changed."||q.message==="Transition was aborted because of invalid state")&&(q=null)}q!==null&&I(q)}finally{s(),l(),v()}}),lt.finished.finally(function(){for(var q=0;q<mt.length;q++)mt[q].cancel();K.__reactViewTransition===lt&&(K.__reactViewTransition=null),A()}),lt}catch{return s(),l(),v(),null}}function Ps(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Ps.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Ps.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),s=[],l=0;l<a.length;l++){var u=a[l].effect;u!==null&&u.target===t&&u.pseudoElement===n&&s.push(a[l])}return s},Ps.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function vv(t){return{name:t,group:new Ps("group",t),imagePair:new Ps("image-pair",t),old:new Ps("old",t),new:new Ps("new",t)}}function li(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}li.prototype.addEventListener=function(t,n,a){var s=null,l=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(xv(u,t,n,a)===-1){var v=this,A=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(A=function(I){v.removeEventListener(t,n,a),typeof n=="function"?n.call(this,I):n.handleEvent(I)}),s!==null&&(l=v.removeEventListener.bind(v,t,n,a),s.addEventListener("abort",l,{once:!0}),l=s.removeEventListener.bind(s,"abort",l)),s=Lr(a),u.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:A,cleanup:l}),m(this._fragmentFiber.child,!1,OM,t,A,s)}this._eventListeners=u}};function OM(t,n,a,s){return S(t).addEventListener(n,a,s),!1}li.prototype.removeEventListener=function(t,n,a){var s=this._eventListeners;if(s!==null&&(n=xv(s,t,n,a),n!==-1)){var l=s[n];a=l.attachedListener;var u=l.cleanup;l=Lr(l.optionsOrUseCapture),m(this._fragmentFiber.child,!1,zM,t,a,l),s.splice(n,1),u!==null&&u()}};function zM(t,n,a,s){return S(t).removeEventListener(n,a,s),!1}function Lr(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function _v(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function xv(t,n,a,s){if(t.length===0)return-1;s=_v(s);for(var l=0;l<t.length;l++){var u=t[l];if(u.type===n&&u.listener===a&&_v(u.optionsOrUseCapture)===s)return l}return-1}li.prototype.dispatchEvent=function(t){var n=g(this._fragmentFiber);if(n===null)return!0;n=S(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var l=0;l<a.length;l++){var u=a[l];s.addEventListener(u.type,u.attachedListener,Lr(u.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),a)for(l=0;l<a.length;l++)u=a[l],s.removeEventListener(u.type,u.attachedListener,Lr(u.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},li.prototype.focus=function(t){m(this._fragmentFiber.child,!0,yv,t,void 0,void 0)};function yv(t,n){return t.tag===6?!1:(t=S(t),WM(t,n))}li.prototype.focusLast=function(t){var n=[];m(this._fragmentFiber.child,!0,kd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!yv(n[a],t);a--);};function kd(t,n){return n.push(t),!1}li.prototype.blur=function(){var t=g(this._fragmentFiber);t!==null&&(t=S(t),t=tl(t).activeElement,t!==null&&m(this._fragmentFiber.child,!1,PM,t,void 0,void 0))};function PM(t,n){return t.tag===6?!1:(t=S(t),t===n||t.contains(n)?(n.blur(),!0):!1)}li.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),m(this._fragmentFiber.child,!1,IM,t,void 0,void 0)};function IM(t,n){return t.tag===6||(t=S(t),n.observe(t)),!1}li.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),m(this._fragmentFiber.child,!1,BM,t,void 0,void 0);for(var a=n=0;a<Ri.length;a++){var s=Ri[a];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):Ri[n++]=s}Ri.length=n}};function BM(t,n){return t.tag===6||(t=S(t),n.unobserve(t)),!1}var Ri=[],jd=!1;function FM(t,n,a){Ri.push({fragmentInstance:t,observer:n,instance:a}),jd||(jd=!0,YM(function(){jd=!1;var s=Ri;Ri=[];for(var l=0;l<s.length;l++){var u=s[l];u.observer.unobserve(u.instance)}}))}li.prototype.getClientRects=function(){var t=[];return m(this._fragmentFiber.child,!1,HM,t,void 0,void 0),t};function HM(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=S(t),n.push.apply(n,t.getClientRects());return!1}li.prototype.getRootNode=function(t){var n=g(this._fragmentFiber);return n===null?this:S(n).getRootNode(t)},li.prototype.compareDocumentPosition=function(t){var n=g(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];m(this._fragmentFiber.child,!1,kd,a,void 0,void 0);var s=S(n);if(a.length===0){if(a=s,M(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var l=s=a.compareDocumentPosition(t);return a===t?l=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=E(n)[1],a===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=S(a).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=S(a[0]),l=S(a[a.length-1]);var u=M(this._fragmentFiber)?n.parentElement:s;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=u.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var v=n.compareDocumentPosition(t),A=l.compareDocumentPosition(t),I=v&Node.DOCUMENT_POSITION_CONTAINED_BY||A&Node.DOCUMENT_POSITION_CONTAINED_BY;return A=s&&u&&v&Node.DOCUMENT_POSITION_FOLLOWING&&A&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||u&&l===t||I||A?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!u&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:v,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||GM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function GM(t,n,a,s,l){var u=Yt(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!u)t:{for(;u!==null;){if(u.tag===7&&(u===n||u.alternate===n)){a=!0;break t}u=u.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=l.ownerDocument,l===u||l===u.documentElement||l===u.body;t:{for(u=n,n=g(n);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==n&&u.alternate!==n)){u=!0;break t}u=u.return}u=!1}return u}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!u)&&!(n=u===a)&&(n=G(a,u,V),n===null?n=!1:(m(n,!0,L,u,a),u=y,y=null,n=u!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!u)&&!(n=u===s)&&(n=G(s,u,V),n===null?n=!1:(m(n,!0,N,u,s),u=y,O=y=null,n=u!==null)),n):!1}function Sv(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}li.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];m(this._fragmentFiber.child,!1,kd,n,void 0,void 0);var a=t!==!1;if(n.length===0){var s=E(this._fragmentFiber);if(s=a?s[1]||s[0]||g(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=S(s),Sv(t,a);return}if(s=S(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var l=n[s];l.tag===6?(l=S(l),Sv(l,a)):S(l).scrollIntoView(t),s+=a?-1:1}};function VM(t,n){return t=S(t),Mv(t,n),!1}function Mv(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function bv(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];t.addEventListener(l.type,l.attachedListener,Lr(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){for(var v=0,A=0;A<Ri.length;A++){var I=Ri[A];(I.fragmentInstance!==n||I.observer!==u||I.instance!==t)&&(Ri[v++]=I)}Ri.length=v,u.observe(t)}),Mv(t,n))}function kM(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];t.removeEventListener(l.type,l.attachedListener,Lr(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){typeof u.rootMargin=="string"?FM(n,u,t):u.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Xd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Xd(a),ye(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function jM(t,n,a,s){for(;t.nodeType===1;){var l=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Ye])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=_i(t.nextSibling),t===null)break}return null}function XM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=_i(t.nextSibling),t===null))return null;return t}function Ev(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=_i(t.nextSibling),t===null))return null;return t}function qd(t){return t.data==="$?"||t.data==="$~"}function Wd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function qM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function _i(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Yd=null;function Tv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return _i(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Av(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function WM(t,n){function a(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return s}function YM(t){dv(function(){dv(function(n){return t(n)})})}function wv(t,n,a){switch(n=tl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Rv(t,n,a){for(var s in a){var l=a[s];a.hasOwnProperty(s)&&l!=null&&Ge(t,n,s,null,bM,l)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Ii&&(t.onclick=null),ye(t)}function Zd(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ye(t)}var xi=new Map,Cv=new Set;function el(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var ga=wt.d;wt.d={f:ZM,r:KM,D:QM,C:$M,L:JM,m:t1,X:n1,S:e1,M:i1};function ZM(){var t=ga.f(),n=Cc();return t||n}function KM(t){var n=Je(t);n!==null&&n.tag===5&&n.type==="form"?D0(n):ga.r(t)}var Or=typeof document>"u"?null:document;function Nv(t,n,a){var s=Or;if(s&&typeof n=="string"&&n){var l=fi(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Cv.has(l)||(Cv.add(l),t={rel:t,crossOrigin:a,href:n},s.querySelector(l)===null&&(n=s.createElement("link"),On(n,"link",t),Qe(n),s.head.appendChild(n)))}}function QM(t){ga.D(t),Nv("dns-prefetch",t,null)}function $M(t,n){ga.C(t,n),Nv("preconnect",t,n)}function JM(t,n,a){ga.L(t,n,a);var s=Or;if(s&&t&&n){var l='link[rel="preload"][as="'+fi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+fi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+fi(a.imageSizes)+'"]')):l+='[href="'+fi(t)+'"]';var u=l;switch(n){case"style":u=zr(t);break;case"script":u=Pr(t)}if(!(xi.has(u)||(t=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),xi.set(u,t),s.querySelector(l)!==null||n==="style"&&s.querySelector(nl(u))||n==="script"&&s.querySelector(il(u))))){var v=s.createElement("link");On(v,"link",t),n==="style"&&(v[Xe]=!0,v.onload=v.onerror=function(){Bn(v)}),Qe(v),s.head.appendChild(v)}}}function t1(t,n){ga.m(t,n);var a=Or;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+fi(s)+'"][href="'+fi(t)+'"]',u=l;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Pr(t)}if(!xi.has(u)&&(t=P({rel:"modulepreload",href:t},n),xi.set(u,t),a.querySelector(l)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(il(u)))return}s=a.createElement("link"),On(s,"link",t),Qe(s),a.head.appendChild(s)}}}function e1(t,n,a){ga.S(t,n,a);var s=Or;if(s&&t){var l=bn(s).hoistableStyles,u=zr(t);n=n||"default";var v=l.get(u);if(!v){var A={loading:0,preload:null};if(v=s.querySelector(nl(u)))A.loading=5;else{t=P({rel:"stylesheet",href:t,"data-precedence":n},a),(a=xi.get(u))&&Kd(t,a);var I=v=s.createElement("link");Qe(I),On(I,"link",t),I._p=new Promise(function(K,lt){I.onload=K,I.onerror=lt}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Pc(v,n,s)}v={type:"stylesheet",instance:v,count:1,state:A},l.set(u,v)}}}function n1(t,n){ga.X(t,n);var a=Or;if(a&&t){var s=bn(a).hoistableScripts,l=Pr(t),u=s.get(l);u||(u=a.querySelector(il(l)),u||(t=P({src:t,async:!0},n),(n=xi.get(l))&&Qd(t,n),u=a.createElement("script"),Qe(u),On(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(l,u))}}function i1(t,n){ga.M(t,n);var a=Or;if(a&&t){var s=bn(a).hoistableScripts,l=Pr(t),u=s.get(l);u||(u=a.querySelector(il(l)),u||(t=P({src:t,async:!0,type:"module"},n),(n=xi.get(l))&&Qd(t,n),u=a.createElement("script"),Qe(u),On(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(l,u))}}function Dv(t,n,a,s){var l=(l=z.current)?el(l):null;if(!l)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=zr(a.href),n=bn(l).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=zr(a.href);var u=bn(l).hoistableStyles,v=u.get(t);if(v||(l=l.ownerDocument||l,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,v),(u=l.querySelector(nl(t)))?u._p||(v.instance=u,v.state.loading=5):(u=xi.get(t),u||(u={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},xi.set(t,u)),a1(l,t,u,v.state))),n&&s===null)throw Error(r(528,""));return v}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Pr(a),n=bn(l).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function zr(t){return'href="'+fi(t)+'"'}function nl(t){return'link[rel="stylesheet"]['+t+"]"}function Uv(t){return P({},t,{"data-precedence":t.precedence,precedence:null})}function a1(t,n,a,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Xe]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[Xe]=!0,n.onload=n.onerror=Bn.bind(null,n),On(n,"link",a),Qe(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function Pr(t){return'[src="'+fi(t)+'"]'}function il(t){return"script[async]"+t}function Lv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+fi(a.href)+'"]');if(s)return n.instance=s,Qe(s),s;var l=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Qe(s),On(s,"style",l),Pc(s,a.precedence,t),n.instance=s;case"stylesheet":l=zr(a.href);var u=t.querySelector(nl(l));if(u)return n.state.loading|=4,n.instance=u,Qe(u),u;s=Uv(a),(l=xi.get(l))&&Kd(s,l),u=(t.ownerDocument||t).createElement("link"),Qe(u);var v=u;return v._p=new Promise(function(A,I){v.onload=A,v.onerror=I}),On(u,"link",s),n.state.loading|=4,Pc(u,a.precedence,t),n.instance=u;case"script":return u=Pr(a.src),(l=t.querySelector(il(u)))?(n.instance=l,Qe(l),l):(s=a,(l=xi.get(u))&&(s=P({},a),Qd(s,l)),t=t.ownerDocument||t,l=t.createElement("script"),Qe(l),On(l,"link",s),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Pc(s,a.precedence,t));return n.instance}function Pc(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=s.length?s[s.length-1]:null,u=l,v=0;v<s.length;v++){var A=s[v];if(A.dataset.precedence===n)u=A;else if(u!==l)break}u?u.parentNode.insertBefore(t,u.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Kd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Qd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ic=null;function Ov(t,n,a){if(Ic===null){var s=new Map,l=Ic=new Map;l.set(a,s)}else l=Ic,s=l.get(a),s||(s=new Map,l.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),l=0;l<a.length;l++){var u=a[l];if(!(u[Ye]||u[Dt]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var v=u.getAttribute(n)||"";v=t+v;var A=s.get(v);A?A.push(u):s.set(v,[u])}}return s}function $d(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function s1(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function zv(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Pv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Iv(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Bv(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=Iv(n),t.suspenseyImages.push(n)),t=l1.bind(t),n.decode().then(t,t))}function r1(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=zr(s.href),u=n.querySelector(nl(l));if(u){n=u._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=al.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=u,Qe(u);return}u=n.ownerDocument||n,s=Uv(s),(l=xi.get(l))&&Kd(s,l),u=u.createElement("link"),Qe(u);var v=u;v._p=new Promise(function(A,I){v.onload=A,v.onerror=I}),On(u,"link",s),a.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=al.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Bc=0;function o1(t,n){return t.stylesheets&&t.count===0&&Hc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Hc(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+n);0<t.imgBytes&&Bc===0&&(Bc=62500*TM());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Hc(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>Bc?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(l)}}:null}function Fv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Hc(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function al(){this.count--,Fv(this)}function l1(){this.imgCount--,Fv(this)}var Fc=null;function Hc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Fc=new Map,n.forEach(c1,t),Fc=null,al.call(t))}function c1(t,n){if(!(n.state.loading&4)){var a=Fc.get(t);if(a)var s=a.get(null);else{a=new Map,Fc.set(t,a);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var v=l[u];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),s=v)}s&&a.set(null,s)}l=n.instance,v=l.getAttribute("data-precedence"),u=a.get(v)||s,u===s&&a.set(null,l),a.set(v,l),this.count++,s=al.bind(this),l.addEventListener("load",s),l.addEventListener("error",s),u?u.parentNode.insertBefore(l,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var Ir={$$typeof:ot,Provider:null,Consumer:null,_currentValue:Zt,_currentValue2:Zt,_threadCount:0};function u1(t,n,a,s,l,u,v,A,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xo(0),this.hiddenUpdates=xo(null),this.identifierPrefix=s,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.transitionTypes=null,this.incompleteTransitions=new Map}function Hv(t,n,a,s,l,u,v,A,I,K,lt,mt){return t=new u1(t,n,a,v,I,K,lt,mt,A),n=1,u===!0&&(n|=24),u=Wn(3,null,null,n),t.current=u,u.stateNode=t,n=hf(),n.refCount++,t.pooledCache=n,n.refCount++,u.memoizedState={element:s,isDehydrated:a,cache:n},vf(u),t}function Gv(t){return t?(t=cr,t):cr}function Vv(t,n,a,s,l,u){l=Gv(l),s.context===null?s.context=l:s.pendingContext=l,s=Fa(n),s.payload={element:a},u=u===void 0?null:u,u!==null&&(s.callback=u),a=Ha(t,s,n),a!==null&&(Qn(a,t,n),zo(a,t,n))}function kv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Jd(t,n){kv(t,n),(t=t.alternate)&&kv(t,n)}function jv(t){if(t.tag===13||t.tag===31){var n=xs(t,67108864);n!==null&&Qn(n,t,67108864),Jd(t,67108864)}}function Xv(t){if(t.tag===13||t.tag===31){var n=oi();n=ut(n);var a=xs(t,n);a!==null&&Qn(a,t,n),Jd(t,n)}}var Br=!0;function f1(t,n,a,s){var l=St.T;St.T=null;var u=wt.p;try{wt.p=2,th(t,n,a,s)}finally{wt.p=u,St.T=l}}function d1(t,n,a,s){var l=St.T;St.T=null;var u=wt.p;try{wt.p=8,th(t,n,a,s)}finally{wt.p=u,St.T=l}}function th(t,n,a,s){if(Br){var l=eh(s);if(l===null)zd(t,n,s,Gc,a),Wv(t,s);else if(p1(l,t,n,a,s))s.stopPropagation();else if(Wv(t,s),n&4&&-1<h1.indexOf(t)){for(;l!==null;){var u=Je(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var v=Pi(u.pendingLanes);if(v!==0){var A=u;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var I=1<<31-_n(v);A.entanglements[1]|=I,v&=~I}Wi(u),(Pe&6)===0&&(Ac=X()+500,Qo(0))}}break;case 31:case 13:A=xs(u,2),A!==null&&Qn(A,u,2),Cc(),Jd(u,2)}if(u=eh(s),u===null&&zd(t,n,s,Gc,a),u===l)break;l=u}l!==null&&s.stopPropagation()}else zd(t,n,s,null,a)}}function eh(t){return t=Fu(t),nh(t)}var Gc=null;function nh(t){if(Gc=null,t=Yt(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Gc=t,null}function qv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ot()){case dt:return 2;case xt:return 8;case Pt:case It:return 32;case re:return 268435456;default:return 32}default:return 32}}var ih=!1,$a=null,Ja=null,ts=null,sl=new Map,rl=new Map,es=[],h1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Wv(t,n){switch(t){case"focusin":case"focusout":$a=null;break;case"dragenter":case"dragleave":Ja=null;break;case"mouseover":case"mouseout":ts=null;break;case"pointerover":case"pointerout":sl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":rl.delete(n.pointerId)}}function ol(t,n,a,s,l,u){return t===null||t.nativeEvent!==u?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:u,targetContainers:[l]},n!==null&&(n=Je(n),n!==null&&jv(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function p1(t,n,a,s,l){switch(n){case"focusin":return $a=ol($a,t,n,a,s,l),!0;case"dragenter":return Ja=ol(Ja,t,n,a,s,l),!0;case"mouseover":return ts=ol(ts,t,n,a,s,l),!0;case"pointerover":var u=l.pointerId;return sl.set(u,ol(sl.get(u)||null,t,n,a,s,l)),!0;case"gotpointercapture":return u=l.pointerId,rl.set(u,ol(rl.get(u)||null,t,n,a,s,l)),!0}return!1}function Yv(t){var n=Yt(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Tt(t.priority,function(){Xv(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Tt(t.priority,function(){Xv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=eh(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Bu=s,a.target.dispatchEvent(s),Bu=null}else return n=Je(a),n!==null&&jv(n),t.blockedOn=a,!1;n.shift()}return!0}function Zv(t,n,a){Vc(t)&&a.delete(n)}function m1(){ih=!1,$a!==null&&Vc($a)&&($a=null),Ja!==null&&Vc(Ja)&&(Ja=null),ts!==null&&Vc(ts)&&(ts=null),sl.forEach(Zv),rl.forEach(Zv)}function kc(t,n){t.blockedOn===n&&(t.blockedOn=null,ih||(ih=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,m1)))}var jc=null;function Kv(t){jc!==t&&(jc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){jc===t&&(jc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],l=t[n+2];if(typeof s!="function"){if(nh(s||a)===null)continue;break}var u=Je(a);u!==null&&(t.splice(n,3),n-=3,Bf(u,{pending:!0,data:l,method:a.method,action:s},s,l))}}))}function Fr(t){function n(I){return kc(I,t)}$a!==null&&kc($a,t),Ja!==null&&kc(Ja,t),ts!==null&&kc(ts,t),sl.forEach(n),rl.forEach(n);for(var a=0;a<es.length;a++){var s=es[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<es.length&&(a=es[0],a.blockedOn===null);)Yv(a),a.blockedOn===null&&es.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var l=a[s],u=a[s+1],v=l[zt]||null;if(typeof u=="function")v||Kv(a);else if(v){var A=null;if(u&&u.hasAttribute("formAction")){if(l=u,v=u[zt]||null)A=v.formAction;else if(nh(l)!==null)continue}else A=v.action;typeof A=="function"?a[s+1]=A:(a.splice(s,3),s-=3),Kv(a)}}}function Qv(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(v){return l=v})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function ah(t){this._internalRoot=t}Xc.prototype.render=ah.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=oi();Vv(a,s,t,n,null,null)},Xc.prototype.unmount=ah.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Vv(t.current,2,null,t,null,null),Cc(),n[ne]=null}};function Xc(t){this._internalRoot=t}Xc.prototype.unstable_scheduleHydration=function(t){if(t){var n=J();t={blockedOn:null,target:t,priority:n};for(var a=0;a<es.length&&n!==0&&n<es[a].priority;a++);es.splice(a,0,t),a===0&&Yv(t)}};var $v=e.version;if($v!=="19.3.1")throw Error(r(527,$v,"19.3.1"));wt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=_(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var g1={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:St,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qc.isDisabled&&qc.supportsFiber)try{le=qc.inject(g1),be=qc}catch{}}return cl.createRoot=function(t,n){if(!c(t))throw Error(r(299));var a=!1,s="",l=G0,u=V0,v=k0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Hv(t,1,!1,null,null,a,s,null,l,u,v,Qv),t[ne]=n.current,Od(t),new ah(n)},cl.hydrateRoot=function(t,n,a){if(!c(t))throw Error(r(299));var s=!1,l="",u=G0,v=V0,A=k0,I=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=Hv(t,1,!0,n,a??null,s,l,I,u,v,A,Qv),n.context=Gv(null),a=n.current,s=oi(),s=ut(s),l=Fa(s),l.callback=null,Ha(a,l,s),a=s,n.current.lanes=a,gs(n,a),Wi(n),t[ne]=n.current,Od(t),new Xc(n)},cl.version="19.3.1",cl}var l_;function w1(){if(l_)return oh.exports;l_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),oh.exports=A1(),oh.exports}var R1=w1();const C1=px(R1);function so(o,e=1){let i=0,r=0,c=0;o>=380&&o<440?(i=-(o-440)/60,r=0,c=1):o>=440&&o<490?(i=0,r=(o-440)/50,c=1):o>=490&&o<510?(i=0,r=1,c=-(o-510)/20):o>=510&&o<580?(i=(o-510)/70,r=1,c=0):o>=580&&o<645?(i=1,r=-(o-645)/65,c=0):o>=645&&o<=780&&(i=1,r=0,c=0);let f=0;o>=380&&o<420?f=.3+.7*(o-380)/40:o>=420&&o<700?f=1:o>=700&&o<=780&&(f=.3+.7*(780-o)/80);const d=.8,h=p=>p===0?0:Math.round(255*Math.pow(p*f*e,d));return{r:h(i),g:h(r),b:h(c),css:`rgb(${h(i)}, ${h(r)}, ${h(c)})`,rgba:(p=1)=>`rgba(${h(i)}, ${h(r)}, ${h(c)}, ${p})`}}function N1(o){return 1e7/o}function gl(o,e,i=1,r=0){const c=N1(e),f=r*Math.PI/180,d=Math.sin(f)+i*o/c;if(Math.abs(d)>1)return null;const h=Math.asin(d),p=h*180/Math.PI;return{angleDeg:p,angleRad:h,d_nm:c,deviationFromIncident:p-r}}function c_(o){let e=o%360;e<0&&(e+=360);const i=e*60,r=Math.floor(e),c=i-r*60,f=c>=30?30:0,d=r,h=Math.round(c-f),p=`${d}° ${f===30?"30'":"00'"}`,_=`${h}'`,x=`${r}° ${Math.round(c)}'`;return{rawDecimal:e,degrees:r,msrDegrees:d,msrMinutes:f,vsrMinutes:h,totalMinutes:Math.round(c),formattedMSR:p,formattedVSR:_,totalFormatted:x}}function D1(o){const e=Math.log10(Math.max(o,.01)),i=Math.max(2,Math.min(7.5,5-1.5*Math.tanh(.5*(e-1.5)))),r=Math.pow(i/7.5,2),c=o/1e3*.85,f=1/(1+o/15);return{pupilDiameterMm:Number(i.toFixed(2)),pupilIntake:Number(r.toFixed(2)),strayLightGlare:Number(c.toFixed(3)),contrastRatio:Number(f.toFixed(3)),isDarkRoom:o<20,roomDescription:o<10?"Darkened Physics Lab (Ideal - Max SNR & Dilated Pupils)":o<150?"Dim Lab Room (Good contrast for bright green/yellow, violet faint)":"Bright Daylight Room (Severe Glare - Violet & Faint Orders Washed Out!)"}}const mx=[{id:"mercury",name:"Mercury (Hg) Arc Lamp",tag:"Atomic Emission",badgeColor:"bg-emerald-500/20 text-emerald-400 border-emerald-500/30",description:"Discrete, razor-sharp atomic emission lines from quantized electron jumps in Hg gas.",lines:[{name:"Violet 1",lambda:404.7,intensity:.65,hex:"#8A2BE2"},{name:"Violet 2",lambda:407.8,intensity:.35,hex:"#7B1FA2"},{name:"Blue-Violet",lambda:435.8,intensity:.95,hex:"#3D5AFE"},{name:"Cyan",lambda:491.6,intensity:.25,hex:"#00E5FF"},{name:"Green (Brightest)",lambda:546.1,intensity:1,hex:"#00E676"},{name:"Yellow 1",lambda:577,intensity:.85,hex:"#FFEA00"},{name:"Yellow 2",lambda:579.1,intensity:.85,hex:"#FFD600"}]},{id:"sodium",name:"Sodium (Na) Vapor Lamp",tag:"Classic Doublet",badgeColor:"bg-amber-500/20 text-amber-400 border-amber-500/30",description:"Famous yellow Fraunhofer D-line doublet (589.0 nm & 589.6 nm), testing grating resolving power.",lines:[{name:"Sodium D₂",lambda:589,intensity:1,hex:"#FFB300"},{name:"Sodium D₁",lambda:589.6,intensity:.6,hex:"#FFA000"}]},{id:"laser_red",name:"He-Ne Red Laser (632.8 nm)",tag:"Monochromatic Coherent",badgeColor:"bg-rose-500/20 text-rose-400 border-rose-500/30",description:"Single monochromatic coherent beam. Yields needle-point intense diffraction maxima.",lines:[{name:"He-Ne Red Laser",lambda:632.8,intensity:1,hex:"#FF1744"}]},{id:"laser_green",name:"DPSS Green Laser (532.0 nm)",tag:"Monochromatic Coherent",badgeColor:"bg-green-500/20 text-green-400 border-green-500/30",description:"Frequency-doubled Nd:YAG laser beam at exactly 532.0 nm.",lines:[{name:"DPSS Green Laser",lambda:532,intensity:1,hex:"#00E676"}]},{id:"white_light",name:"Incandescent White Light",tag:"Continuous VIBGYOR",badgeColor:"bg-purple-500/20 text-purple-400 border-purple-500/30",description:"Thermal blackbody emitter producing an unbroken, magnificent continuous rainbow spectrum.",isContinuous:!0},{id:"led_white",name:"Commercial White LED",tag:"Phosphor Broadband",badgeColor:"bg-sky-500/20 text-sky-400 border-sky-500/30",description:"Blue GaN die + broad Ce:YAG phosphor. Shows continuous broad smear rather than sharp lines!",isContinuous:!0,isLED:!0}],jh=[{id:"15000_lpi",name:"15,000 Lines / Inch (Lab Standard)",linesPerInch:15e3,linesPerCm:5905.5,pitchNm:1693.3},{id:"2500_lpi",name:"2,500 Lines / Inch (Coarse Grating)",linesPerInch:2500,linesPerCm:984.25,pitchNm:10160},{id:"600_lpmm",name:"600 Lines / mm (High Dispersion)",linesPerInch:15240,linesPerCm:6e3,pitchNm:1666.7},{id:"300_lpmm",name:"300 Lines / mm (Dual Order)",linesPerInch:7620,linesPerCm:3e3,pitchNm:3333.3}];class U1{constructor(){this.ctx=null,this.muted=!1}init(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.muted=!this.muted,this.muted}playVernierTick(){if(!this.muted&&(this.init(),!!this.ctx))try{const e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(1200+Math.random()*200,this.ctx.currentTime),i.gain.setValueAtTime(.04,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.03),e.connect(i),i.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.03)}catch{}}playLaserHum(){if(!this.muted&&(this.init(),!!this.ctx))try{const e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(440,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(880,this.ctx.currentTime+.15),i.gain.setValueAtTime(.08,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.25),e.connect(i),i.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.25)}catch{}}playLampIgnition(){if(!this.muted&&(this.init(),!!this.ctx))try{const e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="square",e.frequency.setValueAtTime(120,this.ctx.currentTime),e.frequency.linearRampToValueAtTime(60,this.ctx.currentTime+.3),i.gain.setValueAtTime(.06,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.35),e.connect(i),i.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.35)}catch{}}playSwitchClick(){if(!this.muted&&(this.init(),!!this.ctx))try{const e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(800,this.ctx.currentTime),i.gain.setValueAtTime(.08,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.05),e.connect(i),i.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.05)}catch{}}playSuccessChime(){if(!this.muted&&(this.init(),!!this.ctx))try{[523.25,659.25,783.99,1046.5].forEach((i,r)=>{const c=this.ctx.createOscillator(),f=this.ctx.createGain();c.type="sine",c.frequency.setValueAtTime(i,this.ctx.currentTime+r*.08),f.gain.setValueAtTime(.07,this.ctx.currentTime+r*.08),f.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+r*.08+.4),c.connect(f),f.connect(this.ctx.destination),c.start(this.ctx.currentTime+r*.08),c.stop(this.ctx.currentTime+r*.08+.45)})}catch{}}}const en=new U1;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zp="174",L1=0,u_=1,O1=2,gx=1,vx=2,Ma=3,ds=0,Jn=1,ba=2,us=0,no=1,Xh=2,f_=3,d_=4,z1=5,Ys=100,P1=101,I1=102,B1=103,F1=104,H1=200,G1=201,V1=202,k1=203,qh=204,Wh=205,j1=206,X1=207,q1=208,W1=209,Y1=210,Z1=211,K1=212,Q1=213,$1=214,Yh=0,Zh=1,Kh=2,ro=3,Qh=4,$h=5,Jh=6,tp=7,_x=0,J1=1,tb=2,fs=0,eb=1,nb=2,ib=3,ab=4,sb=5,rb=6,ob=7,xx=300,oo=301,lo=302,ep=303,np=304,wu=306,ip=1e3,Ks=1001,ap=1002,Oi=1003,lb=1004,Wc=1005,Ki=1006,fh=1007,Qs=1008,Ra=1009,yx=1010,Sx=1011,_l=1012,Pp=1013,$s=1014,Ta=1015,xl=1016,Ip=1017,Bp=1018,co=1020,Mx=35902,bx=1021,Ex=1022,Li=1023,Tx=1024,Ax=1025,io=1026,uo=1027,wx=1028,Fp=1029,Rx=1030,Hp=1031,Gp=1033,gu=33776,vu=33777,_u=33778,xu=33779,sp=35840,rp=35841,op=35842,lp=35843,cp=36196,up=37492,fp=37496,dp=37808,hp=37809,pp=37810,mp=37811,gp=37812,vp=37813,_p=37814,xp=37815,yp=37816,Sp=37817,Mp=37818,bp=37819,Ep=37820,Tp=37821,yu=36492,Ap=36494,wp=36495,Cx=36283,Rp=36284,Cp=36285,Np=36286,cb=3200,ub=3201,Nx=0,fb=1,cs="",Si="srgb",fo="srgb-linear",Mu="linear",ke="srgb",Hr=7680,h_=519,db=512,hb=513,pb=514,Dx=515,mb=516,gb=517,vb=518,_b=519,p_=35044,m_="300 es",Aa=2e3,bu=2001;class po{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const c=r[e];if(c!==void 0){const f=c.indexOf(i);f!==-1&&c.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const c=r.slice(0);for(let f=0,d=c.length;f<d;f++)c[f].call(this,e);e.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dh=Math.PI/180,Dp=180/Math.PI;function yl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Hn[o&255]+Hn[o>>8&255]+Hn[o>>16&255]+Hn[o>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[i&63|128]+Hn[i>>8&255]+"-"+Hn[i>>16&255]+Hn[i>>24&255]+Hn[r&255]+Hn[r>>8&255]+Hn[r>>16&255]+Hn[r>>24&255]).toLowerCase()}function we(o,e,i){return Math.max(e,Math.min(i,o))}function xb(o,e){return(o%e+e)%e}function hh(o,e,i){return(1-i)*o+i*e}function ul(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function $n(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Oe{constructor(e=0,i=0){Oe.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6],this.y=c[1]*i+c[4]*r+c[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=we(this.x,e.x,i.x),this.y=we(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=we(this.x,e,i),this.y=we(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(we(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(we(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),c=Math.sin(i),f=this.x-e.x,d=this.y-e.y;return this.x=f*r-d*c+e.x,this.y=f*c+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ge{constructor(e,i,r,c,f,d,h,p,_){ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,c,f,d,h,p,_)}set(e,i,r,c,f,d,h,p,_){const x=this.elements;return x[0]=e,x[1]=c,x[2]=h,x[3]=i,x[4]=f,x[5]=p,x[6]=r,x[7]=d,x[8]=_,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,c=i.elements,f=this.elements,d=r[0],h=r[3],p=r[6],_=r[1],x=r[4],m=r[7],g=r[2],M=r[5],E=r[8],b=c[0],S=c[3],y=c[6],O=c[1],L=c[4],N=c[7],V=c[2],G=c[5],P=c[8];return f[0]=d*b+h*O+p*V,f[3]=d*S+h*L+p*G,f[6]=d*y+h*N+p*P,f[1]=_*b+x*O+m*V,f[4]=_*S+x*L+m*G,f[7]=_*y+x*N+m*P,f[2]=g*b+M*O+E*V,f[5]=g*S+M*L+E*G,f[8]=g*y+M*N+E*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],c=e[2],f=e[3],d=e[4],h=e[5],p=e[6],_=e[7],x=e[8];return i*d*x-i*h*_-r*f*x+r*h*p+c*f*_-c*d*p}invert(){const e=this.elements,i=e[0],r=e[1],c=e[2],f=e[3],d=e[4],h=e[5],p=e[6],_=e[7],x=e[8],m=x*d-h*_,g=h*p-x*f,M=_*f-d*p,E=i*m+r*g+c*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=m*b,e[1]=(c*_-x*r)*b,e[2]=(h*r-c*d)*b,e[3]=g*b,e[4]=(x*i-c*p)*b,e[5]=(c*f-h*i)*b,e[6]=M*b,e[7]=(r*p-_*i)*b,e[8]=(d*i-r*f)*b,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,c,f,d,h){const p=Math.cos(f),_=Math.sin(f);return this.set(r*p,r*_,-r*(p*d+_*h)+d+e,-c*_,c*p,-c*(-_*d+p*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(ph.makeScale(e,i)),this}rotate(e){return this.premultiply(ph.makeRotation(-e)),this}translate(e,i){return this.premultiply(ph.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let c=0;c<9;c++)if(i[c]!==r[c])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ph=new ge;function Ux(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Eu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function yb(){const o=Eu("canvas");return o.style.display="block",o}const g_={};function Xs(o){o in g_||(g_[o]=!0,console.warn(o))}function Sb(o,e,i){return new Promise(function(r,c){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:c();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:r()}}setTimeout(f,i)})}function Mb(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function bb(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const v_=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),__=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Eb(){const o={enabled:!0,workingColorSpace:fo,spaces:{},convert:function(c,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===ke&&(c.r=wa(c.r),c.g=wa(c.g),c.b=wa(c.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(c.applyMatrix3(this.spaces[f].toXYZ),c.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===ke&&(c.r=ao(c.r),c.g=ao(c.g),c.b=ao(c.b))),c},fromWorkingColorSpace:function(c,f){return this.convert(c,this.workingColorSpace,f)},toWorkingColorSpace:function(c,f){return this.convert(c,f,this.workingColorSpace)},getPrimaries:function(c){return this.spaces[c].primaries},getTransfer:function(c){return c===cs?Mu:this.spaces[c].transfer},getLuminanceCoefficients:function(c,f=this.workingColorSpace){return c.fromArray(this.spaces[f].luminanceCoefficients)},define:function(c){Object.assign(this.spaces,c)},_getMatrix:function(c,f,d){return c.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(c){return this.spaces[c].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(c=this.workingColorSpace){return this.spaces[c].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[fo]:{primaries:e,whitePoint:r,transfer:Mu,toXYZ:v_,fromXYZ:__,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:e,whitePoint:r,transfer:ke,toXYZ:v_,fromXYZ:__,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),o}const Le=Eb();function wa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ao(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Gr;class Tb{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Gr===void 0&&(Gr=Eu("canvas")),Gr.width=e.width,Gr.height=e.height;const r=Gr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Gr}return i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Eu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const c=r.getImageData(0,0,e.width,e.height),f=c.data;for(let d=0;d<f.length;d++)f[d]=wa(f[d]/255)*255;return r.putImageData(c,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(wa(i[r]/255)*255):i[r]=wa(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ab=0;class Vp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ab++}),this.uuid=yl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},c=this.data;if(c!==null){let f;if(Array.isArray(c)){f=[];for(let d=0,h=c.length;d<h;d++)c[d].isDataTexture?f.push(mh(c[d].image)):f.push(mh(c[d]))}else f=mh(c);r.url=f}return i||(e.images[this.uuid]=r),r}}function mh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Tb.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wb=0;class ti extends po{constructor(e=ti.DEFAULT_IMAGE,i=ti.DEFAULT_MAPPING,r=Ks,c=Ks,f=Ki,d=Qs,h=Li,p=Ra,_=ti.DEFAULT_ANISOTROPY,x=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wb++}),this.uuid=yl(),this.name="",this.source=new Vp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=c,this.magFilter=f,this.minFilter=d,this.anisotropy=_,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ip:e.x=e.x-Math.floor(e.x);break;case Ks:e.x=e.x<0?0:1;break;case ap:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ip:e.y=e.y-Math.floor(e.y);break;case Ks:e.y=e.y<0?0:1;break;case ap:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ti.DEFAULT_IMAGE=null;ti.DEFAULT_MAPPING=xx;ti.DEFAULT_ANISOTROPY=1;class cn{constructor(e=0,i=0,r=0,c=1){cn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=c}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,c){return this.x=e,this.y=i,this.z=r,this.w=c,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,c=this.z,f=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*c+d[12]*f,this.y=d[1]*i+d[5]*r+d[9]*c+d[13]*f,this.z=d[2]*i+d[6]*r+d[10]*c+d[14]*f,this.w=d[3]*i+d[7]*r+d[11]*c+d[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,c,f;const p=e.elements,_=p[0],x=p[4],m=p[8],g=p[1],M=p[5],E=p[9],b=p[2],S=p[6],y=p[10];if(Math.abs(x-g)<.01&&Math.abs(m-b)<.01&&Math.abs(E-S)<.01){if(Math.abs(x+g)<.1&&Math.abs(m+b)<.1&&Math.abs(E+S)<.1&&Math.abs(_+M+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(_+1)/2,N=(M+1)/2,V=(y+1)/2,G=(x+g)/4,P=(m+b)/4,H=(E+S)/4;return L>N&&L>V?L<.01?(r=0,c=.707106781,f=.707106781):(r=Math.sqrt(L),c=G/r,f=P/r):N>V?N<.01?(r=.707106781,c=0,f=.707106781):(c=Math.sqrt(N),r=G/c,f=H/c):V<.01?(r=.707106781,c=.707106781,f=0):(f=Math.sqrt(V),r=P/f,c=H/f),this.set(r,c,f,i),this}let O=Math.sqrt((S-E)*(S-E)+(m-b)*(m-b)+(g-x)*(g-x));return Math.abs(O)<.001&&(O=1),this.x=(S-E)/O,this.y=(m-b)/O,this.z=(g-x)/O,this.w=Math.acos((_+M+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=we(this.x,e.x,i.x),this.y=we(this.y,e.y,i.y),this.z=we(this.z,e.z,i.z),this.w=we(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=we(this.x,e,i),this.y=we(this.y,e,i),this.z=we(this.z,e,i),this.w=we(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(we(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rb extends po{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new cn(0,0,e,i),this.scissorTest=!1,this.viewport=new cn(0,0,e,i);const c={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ki,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const f=new ti(c,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);f.flipY=!1,f.generateMipmaps=r.generateMipmaps,f.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let c=0,f=this.textures.length;c<f;c++)this.textures[c].image.width=e,this.textures[c].image.height=i,this.textures[c].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const c=Object.assign({},e.textures[i].image);this.textures[i].source=new Vp(c)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Js extends Rb{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Lx extends ti{constructor(e=null,i=1,r=1,c=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:c},this.magFilter=Oi,this.minFilter=Oi,this.wrapR=Ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cb extends ti{constructor(e=null,i=1,r=1,c=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:c},this.magFilter=Oi,this.minFilter=Oi,this.wrapR=Ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sl{constructor(e=0,i=0,r=0,c=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=c}static slerpFlat(e,i,r,c,f,d,h){let p=r[c+0],_=r[c+1],x=r[c+2],m=r[c+3];const g=f[d+0],M=f[d+1],E=f[d+2],b=f[d+3];if(h===0){e[i+0]=p,e[i+1]=_,e[i+2]=x,e[i+3]=m;return}if(h===1){e[i+0]=g,e[i+1]=M,e[i+2]=E,e[i+3]=b;return}if(m!==b||p!==g||_!==M||x!==E){let S=1-h;const y=p*g+_*M+x*E+m*b,O=y>=0?1:-1,L=1-y*y;if(L>Number.EPSILON){const V=Math.sqrt(L),G=Math.atan2(V,y*O);S=Math.sin(S*G)/V,h=Math.sin(h*G)/V}const N=h*O;if(p=p*S+g*N,_=_*S+M*N,x=x*S+E*N,m=m*S+b*N,S===1-h){const V=1/Math.sqrt(p*p+_*_+x*x+m*m);p*=V,_*=V,x*=V,m*=V}}e[i]=p,e[i+1]=_,e[i+2]=x,e[i+3]=m}static multiplyQuaternionsFlat(e,i,r,c,f,d){const h=r[c],p=r[c+1],_=r[c+2],x=r[c+3],m=f[d],g=f[d+1],M=f[d+2],E=f[d+3];return e[i]=h*E+x*m+p*M-_*g,e[i+1]=p*E+x*g+_*m-h*M,e[i+2]=_*E+x*M+h*g-p*m,e[i+3]=x*E-h*m-p*g-_*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,c){return this._x=e,this._y=i,this._z=r,this._w=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,c=e._y,f=e._z,d=e._order,h=Math.cos,p=Math.sin,_=h(r/2),x=h(c/2),m=h(f/2),g=p(r/2),M=p(c/2),E=p(f/2);switch(d){case"XYZ":this._x=g*x*m+_*M*E,this._y=_*M*m-g*x*E,this._z=_*x*E+g*M*m,this._w=_*x*m-g*M*E;break;case"YXZ":this._x=g*x*m+_*M*E,this._y=_*M*m-g*x*E,this._z=_*x*E-g*M*m,this._w=_*x*m+g*M*E;break;case"ZXY":this._x=g*x*m-_*M*E,this._y=_*M*m+g*x*E,this._z=_*x*E+g*M*m,this._w=_*x*m-g*M*E;break;case"ZYX":this._x=g*x*m-_*M*E,this._y=_*M*m+g*x*E,this._z=_*x*E-g*M*m,this._w=_*x*m+g*M*E;break;case"YZX":this._x=g*x*m+_*M*E,this._y=_*M*m+g*x*E,this._z=_*x*E-g*M*m,this._w=_*x*m-g*M*E;break;case"XZY":this._x=g*x*m-_*M*E,this._y=_*M*m-g*x*E,this._z=_*x*E+g*M*m,this._w=_*x*m+g*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,c=Math.sin(r);return this._x=e.x*c,this._y=e.y*c,this._z=e.z*c,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],c=i[4],f=i[8],d=i[1],h=i[5],p=i[9],_=i[2],x=i[6],m=i[10],g=r+h+m;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(x-p)*M,this._y=(f-_)*M,this._z=(d-c)*M}else if(r>h&&r>m){const M=2*Math.sqrt(1+r-h-m);this._w=(x-p)/M,this._x=.25*M,this._y=(c+d)/M,this._z=(f+_)/M}else if(h>m){const M=2*Math.sqrt(1+h-r-m);this._w=(f-_)/M,this._x=(c+d)/M,this._y=.25*M,this._z=(p+x)/M}else{const M=2*Math.sqrt(1+m-r-h);this._w=(d-c)/M,this._x=(f+_)/M,this._y=(p+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(we(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const c=Math.min(1,i/r);return this.slerp(e,c),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,c=e._y,f=e._z,d=e._w,h=i._x,p=i._y,_=i._z,x=i._w;return this._x=r*x+d*h+c*_-f*p,this._y=c*x+d*p+f*h-r*_,this._z=f*x+d*_+r*p-c*h,this._w=d*x-r*h-c*p-f*_,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,c=this._y,f=this._z,d=this._w;let h=d*e._w+r*e._x+c*e._y+f*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=c,this._z=f,this;const p=1-h*h;if(p<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*r+i*this._x,this._y=M*c+i*this._y,this._z=M*f+i*this._z,this.normalize(),this}const _=Math.sqrt(p),x=Math.atan2(_,h),m=Math.sin((1-i)*x)/_,g=Math.sin(i*x)/_;return this._w=d*m+this._w*g,this._x=r*m+this._x*g,this._y=c*m+this._y*g,this._z=f*m+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),c=Math.sqrt(1-r),f=Math.sqrt(r);return this.set(c*Math.sin(e),c*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(e=0,i=0,r=0){nt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(x_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(x_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,c=this.z,f=e.elements;return this.x=f[0]*i+f[3]*r+f[6]*c,this.y=f[1]*i+f[4]*r+f[7]*c,this.z=f[2]*i+f[5]*r+f[8]*c,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,c=this.z,f=e.elements,d=1/(f[3]*i+f[7]*r+f[11]*c+f[15]);return this.x=(f[0]*i+f[4]*r+f[8]*c+f[12])*d,this.y=(f[1]*i+f[5]*r+f[9]*c+f[13])*d,this.z=(f[2]*i+f[6]*r+f[10]*c+f[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,c=this.z,f=e.x,d=e.y,h=e.z,p=e.w,_=2*(d*c-h*r),x=2*(h*i-f*c),m=2*(f*r-d*i);return this.x=i+p*_+d*m-h*x,this.y=r+p*x+h*_-f*m,this.z=c+p*m+f*x-d*_,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,c=this.z,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*c,this.y=f[1]*i+f[5]*r+f[9]*c,this.z=f[2]*i+f[6]*r+f[10]*c,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=we(this.x,e.x,i.x),this.y=we(this.y,e.y,i.y),this.z=we(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=we(this.x,e,i),this.y=we(this.y,e,i),this.z=we(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(we(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,c=e.y,f=e.z,d=i.x,h=i.y,p=i.z;return this.x=c*p-f*h,this.y=f*d-r*p,this.z=r*h-c*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return gh.copy(this).projectOnVector(e),this.sub(gh)}reflect(e){return this.sub(gh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(we(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,c=this.z-e.z;return i*i+r*r+c*c}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const c=Math.sin(i)*e;return this.x=c*Math.sin(r),this.y=Math.cos(i)*e,this.z=c*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),c=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=c,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gh=new nt,x_=new Sl;class Ml{constructor(e=new nt(1/0,1/0,1/0),i=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ci.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ci.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ci.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const f=r.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Ci):Ci.fromBufferAttribute(f,d),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Yc.copy(r.boundingBox)),Yc.applyMatrix4(e.matrixWorld),this.union(Yc)}const c=e.children;for(let f=0,d=c.length;f<d;f++)this.expandByObject(c[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fl),Zc.subVectors(this.max,fl),Vr.subVectors(e.a,fl),kr.subVectors(e.b,fl),jr.subVectors(e.c,fl),is.subVectors(kr,Vr),as.subVectors(jr,kr),Is.subVectors(Vr,jr);let i=[0,-is.z,is.y,0,-as.z,as.y,0,-Is.z,Is.y,is.z,0,-is.x,as.z,0,-as.x,Is.z,0,-Is.x,-is.y,is.x,0,-as.y,as.x,0,-Is.y,Is.x,0];return!vh(i,Vr,kr,jr,Zc)||(i=[1,0,0,0,1,0,0,0,1],!vh(i,Vr,kr,jr,Zc))?!1:(Kc.crossVectors(is,as),i=[Kc.x,Kc.y,Kc.z],vh(i,Vr,kr,jr,Zc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(va),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const va=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],Ci=new nt,Yc=new Ml,Vr=new nt,kr=new nt,jr=new nt,is=new nt,as=new nt,Is=new nt,fl=new nt,Zc=new nt,Kc=new nt,Bs=new nt;function vh(o,e,i,r,c){for(let f=0,d=o.length-3;f<=d;f+=3){Bs.fromArray(o,f);const h=c.x*Math.abs(Bs.x)+c.y*Math.abs(Bs.y)+c.z*Math.abs(Bs.z),p=e.dot(Bs),_=i.dot(Bs),x=r.dot(Bs);if(Math.max(-Math.max(p,_,x),Math.min(p,_,x))>h)return!1}return!0}const Nb=new Ml,dl=new nt,_h=new nt;class Ru{constructor(e=new nt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):Nb.setFromPoints(e).getCenter(r);let c=0;for(let f=0,d=e.length;f<d;f++)c=Math.max(c,r.distanceToSquared(e[f]));return this.radius=Math.sqrt(c),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dl.subVectors(e,this.center);const i=dl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),c=(r-this.radius)*.5;this.center.addScaledVector(dl,c/r),this.radius+=c}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_h.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dl.copy(e.center).add(_h)),this.expandByPoint(dl.copy(e.center).sub(_h))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _a=new nt,xh=new nt,Qc=new nt,ss=new nt,yh=new nt,$c=new nt,Sh=new nt;class Ox{constructor(e=new nt,i=new nt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_a)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=_a.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(_a.copy(this.origin).addScaledVector(this.direction,i),_a.distanceToSquared(e))}distanceSqToSegment(e,i,r,c){xh.copy(e).add(i).multiplyScalar(.5),Qc.copy(i).sub(e).normalize(),ss.copy(this.origin).sub(xh);const f=e.distanceTo(i)*.5,d=-this.direction.dot(Qc),h=ss.dot(this.direction),p=-ss.dot(Qc),_=ss.lengthSq(),x=Math.abs(1-d*d);let m,g,M,E;if(x>0)if(m=d*p-h,g=d*h-p,E=f*x,m>=0)if(g>=-E)if(g<=E){const b=1/x;m*=b,g*=b,M=m*(m+d*g+2*h)+g*(d*m+g+2*p)+_}else g=f,m=Math.max(0,-(d*g+h)),M=-m*m+g*(g+2*p)+_;else g=-f,m=Math.max(0,-(d*g+h)),M=-m*m+g*(g+2*p)+_;else g<=-E?(m=Math.max(0,-(-d*f+h)),g=m>0?-f:Math.min(Math.max(-f,-p),f),M=-m*m+g*(g+2*p)+_):g<=E?(m=0,g=Math.min(Math.max(-f,-p),f),M=g*(g+2*p)+_):(m=Math.max(0,-(d*f+h)),g=m>0?f:Math.min(Math.max(-f,-p),f),M=-m*m+g*(g+2*p)+_);else g=d>0?-f:f,m=Math.max(0,-(d*g+h)),M=-m*m+g*(g+2*p)+_;return r&&r.copy(this.origin).addScaledVector(this.direction,m),c&&c.copy(xh).addScaledVector(Qc,g),M}intersectSphere(e,i){_a.subVectors(e.center,this.origin);const r=_a.dot(this.direction),c=_a.dot(_a)-r*r,f=e.radius*e.radius;if(c>f)return null;const d=Math.sqrt(f-c),h=r-d,p=r+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,c,f,d,h,p;const _=1/this.direction.x,x=1/this.direction.y,m=1/this.direction.z,g=this.origin;return _>=0?(r=(e.min.x-g.x)*_,c=(e.max.x-g.x)*_):(r=(e.max.x-g.x)*_,c=(e.min.x-g.x)*_),x>=0?(f=(e.min.y-g.y)*x,d=(e.max.y-g.y)*x):(f=(e.max.y-g.y)*x,d=(e.min.y-g.y)*x),r>d||f>c||((f>r||isNaN(r))&&(r=f),(d<c||isNaN(c))&&(c=d),m>=0?(h=(e.min.z-g.z)*m,p=(e.max.z-g.z)*m):(h=(e.max.z-g.z)*m,p=(e.min.z-g.z)*m),r>p||h>c)||((h>r||r!==r)&&(r=h),(p<c||c!==c)&&(c=p),c<0)?null:this.at(r>=0?r:c,i)}intersectsBox(e){return this.intersectBox(e,_a)!==null}intersectTriangle(e,i,r,c,f){yh.subVectors(i,e),$c.subVectors(r,e),Sh.crossVectors(yh,$c);let d=this.direction.dot(Sh),h;if(d>0){if(c)return null;h=1}else if(d<0)h=-1,d=-d;else return null;ss.subVectors(this.origin,e);const p=h*this.direction.dot($c.crossVectors(ss,$c));if(p<0)return null;const _=h*this.direction.dot(yh.cross(ss));if(_<0||p+_>d)return null;const x=-h*ss.dot(Sh);return x<0?null:this.at(x/d,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,i,r,c,f,d,h,p,_,x,m,g,M,E,b,S){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,c,f,d,h,p,_,x,m,g,M,E,b,S)}set(e,i,r,c,f,d,h,p,_,x,m,g,M,E,b,S){const y=this.elements;return y[0]=e,y[4]=i,y[8]=r,y[12]=c,y[1]=f,y[5]=d,y[9]=h,y[13]=p,y[2]=_,y[6]=x,y[10]=m,y[14]=g,y[3]=M,y[7]=E,y[11]=b,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,c=1/Xr.setFromMatrixColumn(e,0).length(),f=1/Xr.setFromMatrixColumn(e,1).length(),d=1/Xr.setFromMatrixColumn(e,2).length();return i[0]=r[0]*c,i[1]=r[1]*c,i[2]=r[2]*c,i[3]=0,i[4]=r[4]*f,i[5]=r[5]*f,i[6]=r[6]*f,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,c=e.y,f=e.z,d=Math.cos(r),h=Math.sin(r),p=Math.cos(c),_=Math.sin(c),x=Math.cos(f),m=Math.sin(f);if(e.order==="XYZ"){const g=d*x,M=d*m,E=h*x,b=h*m;i[0]=p*x,i[4]=-p*m,i[8]=_,i[1]=M+E*_,i[5]=g-b*_,i[9]=-h*p,i[2]=b-g*_,i[6]=E+M*_,i[10]=d*p}else if(e.order==="YXZ"){const g=p*x,M=p*m,E=_*x,b=_*m;i[0]=g+b*h,i[4]=E*h-M,i[8]=d*_,i[1]=d*m,i[5]=d*x,i[9]=-h,i[2]=M*h-E,i[6]=b+g*h,i[10]=d*p}else if(e.order==="ZXY"){const g=p*x,M=p*m,E=_*x,b=_*m;i[0]=g-b*h,i[4]=-d*m,i[8]=E+M*h,i[1]=M+E*h,i[5]=d*x,i[9]=b-g*h,i[2]=-d*_,i[6]=h,i[10]=d*p}else if(e.order==="ZYX"){const g=d*x,M=d*m,E=h*x,b=h*m;i[0]=p*x,i[4]=E*_-M,i[8]=g*_+b,i[1]=p*m,i[5]=b*_+g,i[9]=M*_-E,i[2]=-_,i[6]=h*p,i[10]=d*p}else if(e.order==="YZX"){const g=d*p,M=d*_,E=h*p,b=h*_;i[0]=p*x,i[4]=b-g*m,i[8]=E*m+M,i[1]=m,i[5]=d*x,i[9]=-h*x,i[2]=-_*x,i[6]=M*m+E,i[10]=g-b*m}else if(e.order==="XZY"){const g=d*p,M=d*_,E=h*p,b=h*_;i[0]=p*x,i[4]=-m,i[8]=_*x,i[1]=g*m+b,i[5]=d*x,i[9]=M*m-E,i[2]=E*m-M,i[6]=h*x,i[10]=b*m+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Db,e,Ub)}lookAt(e,i,r){const c=this.elements;return ci.subVectors(e,i),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),rs.crossVectors(r,ci),rs.lengthSq()===0&&(Math.abs(r.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),rs.crossVectors(r,ci)),rs.normalize(),Jc.crossVectors(ci,rs),c[0]=rs.x,c[4]=Jc.x,c[8]=ci.x,c[1]=rs.y,c[5]=Jc.y,c[9]=ci.y,c[2]=rs.z,c[6]=Jc.z,c[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,c=i.elements,f=this.elements,d=r[0],h=r[4],p=r[8],_=r[12],x=r[1],m=r[5],g=r[9],M=r[13],E=r[2],b=r[6],S=r[10],y=r[14],O=r[3],L=r[7],N=r[11],V=r[15],G=c[0],P=c[4],H=c[8],D=c[12],R=c[1],F=c[5],rt=c[9],$=c[13],ct=c[2],ot=c[6],B=c[10],tt=c[14],W=c[3],gt=c[7],yt=c[11],Ct=c[15];return f[0]=d*G+h*R+p*ct+_*W,f[4]=d*P+h*F+p*ot+_*gt,f[8]=d*H+h*rt+p*B+_*yt,f[12]=d*D+h*$+p*tt+_*Ct,f[1]=x*G+m*R+g*ct+M*W,f[5]=x*P+m*F+g*ot+M*gt,f[9]=x*H+m*rt+g*B+M*yt,f[13]=x*D+m*$+g*tt+M*Ct,f[2]=E*G+b*R+S*ct+y*W,f[6]=E*P+b*F+S*ot+y*gt,f[10]=E*H+b*rt+S*B+y*yt,f[14]=E*D+b*$+S*tt+y*Ct,f[3]=O*G+L*R+N*ct+V*W,f[7]=O*P+L*F+N*ot+V*gt,f[11]=O*H+L*rt+N*B+V*yt,f[15]=O*D+L*$+N*tt+V*Ct,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],c=e[8],f=e[12],d=e[1],h=e[5],p=e[9],_=e[13],x=e[2],m=e[6],g=e[10],M=e[14],E=e[3],b=e[7],S=e[11],y=e[15];return E*(+f*p*m-c*_*m-f*h*g+r*_*g+c*h*M-r*p*M)+b*(+i*p*M-i*_*g+f*d*g-c*d*M+c*_*x-f*p*x)+S*(+i*_*m-i*h*M-f*d*m+r*d*M+f*h*x-r*_*x)+y*(-c*h*x-i*p*m+i*h*g+c*d*m-r*d*g+r*p*x)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const c=this.elements;return e.isVector3?(c[12]=e.x,c[13]=e.y,c[14]=e.z):(c[12]=e,c[13]=i,c[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],c=e[2],f=e[3],d=e[4],h=e[5],p=e[6],_=e[7],x=e[8],m=e[9],g=e[10],M=e[11],E=e[12],b=e[13],S=e[14],y=e[15],O=m*S*_-b*g*_+b*p*M-h*S*M-m*p*y+h*g*y,L=E*g*_-x*S*_-E*p*M+d*S*M+x*p*y-d*g*y,N=x*b*_-E*m*_+E*h*M-d*b*M-x*h*y+d*m*y,V=E*m*p-x*b*p-E*h*g+d*b*g+x*h*S-d*m*S,G=i*O+r*L+c*N+f*V;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/G;return e[0]=O*P,e[1]=(b*g*f-m*S*f-b*c*M+r*S*M+m*c*y-r*g*y)*P,e[2]=(h*S*f-b*p*f+b*c*_-r*S*_-h*c*y+r*p*y)*P,e[3]=(m*p*f-h*g*f-m*c*_+r*g*_+h*c*M-r*p*M)*P,e[4]=L*P,e[5]=(x*S*f-E*g*f+E*c*M-i*S*M-x*c*y+i*g*y)*P,e[6]=(E*p*f-d*S*f-E*c*_+i*S*_+d*c*y-i*p*y)*P,e[7]=(d*g*f-x*p*f+x*c*_-i*g*_-d*c*M+i*p*M)*P,e[8]=N*P,e[9]=(E*m*f-x*b*f-E*r*M+i*b*M+x*r*y-i*m*y)*P,e[10]=(d*b*f-E*h*f+E*r*_-i*b*_-d*r*y+i*h*y)*P,e[11]=(x*h*f-d*m*f-x*r*_+i*m*_+d*r*M-i*h*M)*P,e[12]=V*P,e[13]=(x*b*c-E*m*c+E*r*g-i*b*g-x*r*S+i*m*S)*P,e[14]=(E*h*c-d*b*c-E*r*p+i*b*p+d*r*S-i*h*S)*P,e[15]=(d*m*c-x*h*c+x*r*p-i*m*p-d*r*g+i*h*g)*P,this}scale(e){const i=this.elements,r=e.x,c=e.y,f=e.z;return i[0]*=r,i[4]*=c,i[8]*=f,i[1]*=r,i[5]*=c,i[9]*=f,i[2]*=r,i[6]*=c,i[10]*=f,i[3]*=r,i[7]*=c,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],c=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,c))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),c=Math.sin(i),f=1-r,d=e.x,h=e.y,p=e.z,_=f*d,x=f*h;return this.set(_*d+r,_*h-c*p,_*p+c*h,0,_*h+c*p,x*h+r,x*p-c*d,0,_*p-c*h,x*p+c*d,f*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,c,f,d){return this.set(1,r,f,0,e,1,d,0,i,c,1,0,0,0,0,1),this}compose(e,i,r){const c=this.elements,f=i._x,d=i._y,h=i._z,p=i._w,_=f+f,x=d+d,m=h+h,g=f*_,M=f*x,E=f*m,b=d*x,S=d*m,y=h*m,O=p*_,L=p*x,N=p*m,V=r.x,G=r.y,P=r.z;return c[0]=(1-(b+y))*V,c[1]=(M+N)*V,c[2]=(E-L)*V,c[3]=0,c[4]=(M-N)*G,c[5]=(1-(g+y))*G,c[6]=(S+O)*G,c[7]=0,c[8]=(E+L)*P,c[9]=(S-O)*P,c[10]=(1-(g+b))*P,c[11]=0,c[12]=e.x,c[13]=e.y,c[14]=e.z,c[15]=1,this}decompose(e,i,r){const c=this.elements;let f=Xr.set(c[0],c[1],c[2]).length();const d=Xr.set(c[4],c[5],c[6]).length(),h=Xr.set(c[8],c[9],c[10]).length();this.determinant()<0&&(f=-f),e.x=c[12],e.y=c[13],e.z=c[14],Ni.copy(this);const _=1/f,x=1/d,m=1/h;return Ni.elements[0]*=_,Ni.elements[1]*=_,Ni.elements[2]*=_,Ni.elements[4]*=x,Ni.elements[5]*=x,Ni.elements[6]*=x,Ni.elements[8]*=m,Ni.elements[9]*=m,Ni.elements[10]*=m,i.setFromRotationMatrix(Ni),r.x=f,r.y=d,r.z=h,this}makePerspective(e,i,r,c,f,d,h=Aa){const p=this.elements,_=2*f/(i-e),x=2*f/(r-c),m=(i+e)/(i-e),g=(r+c)/(r-c);let M,E;if(h===Aa)M=-(d+f)/(d-f),E=-2*d*f/(d-f);else if(h===bu)M=-d/(d-f),E=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=m,p[12]=0,p[1]=0,p[5]=x,p[9]=g,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,c,f,d,h=Aa){const p=this.elements,_=1/(i-e),x=1/(r-c),m=1/(d-f),g=(i+e)*_,M=(r+c)*x;let E,b;if(h===Aa)E=(d+f)*m,b=-2*m;else if(h===bu)E=f*m,b=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*_,p[4]=0,p[8]=0,p[12]=-g,p[1]=0,p[5]=2*x,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=b,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let c=0;c<16;c++)if(i[c]!==r[c])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Xr=new nt,Ni=new sn,Db=new nt(0,0,0),Ub=new nt(1,1,1),rs=new nt,Jc=new nt,ci=new nt,y_=new sn,S_=new Sl;class $i{constructor(e=0,i=0,r=0,c=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=c}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,c=this._order){return this._x=e,this._y=i,this._z=r,this._order=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const c=e.elements,f=c[0],d=c[4],h=c[8],p=c[1],_=c[5],x=c[9],m=c[2],g=c[6],M=c[10];switch(i){case"XYZ":this._y=Math.asin(we(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(g,_),this._z=0);break;case"YXZ":this._x=Math.asin(-we(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(p,_)):(this._y=Math.atan2(-m,f),this._z=0);break;case"ZXY":this._x=Math.asin(we(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,M),this._z=Math.atan2(-d,_)):(this._y=0,this._z=Math.atan2(p,f));break;case"ZYX":this._y=Math.asin(-we(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(p,f)):(this._x=0,this._z=Math.atan2(-d,_));break;case"YZX":this._z=Math.asin(we(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,_),this._y=Math.atan2(-m,f)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-we(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,_),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-x,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return y_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(y_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return S_.setFromEuler(this),this.setFromQuaternion(S_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";let zx=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Lb=0;const M_=new nt,qr=new Sl,xa=new sn,tu=new nt,hl=new nt,Ob=new nt,zb=new Sl,b_=new nt(1,0,0),E_=new nt(0,1,0),T_=new nt(0,0,1),A_={type:"added"},Pb={type:"removed"},Wr={type:"childadded",child:null},Mh={type:"childremoved",child:null};class Pn extends po{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lb++}),this.uuid=yl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new nt,i=new $i,r=new Sl,c=new nt(1,1,1);function f(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(f),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:c},modelViewMatrix:{value:new sn},normalMatrix:{value:new ge}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return qr.setFromAxisAngle(e,i),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,i){return qr.setFromAxisAngle(e,i),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(b_,e)}rotateY(e){return this.rotateOnAxis(E_,e)}rotateZ(e){return this.rotateOnAxis(T_,e)}translateOnAxis(e,i){return M_.copy(e).applyQuaternion(this.quaternion),this.position.add(M_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(b_,e)}translateY(e){return this.translateOnAxis(E_,e)}translateZ(e){return this.translateOnAxis(T_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?tu.copy(e):tu.set(e,i,r);const c=this.parent;this.updateWorldMatrix(!0,!1),hl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xa.lookAt(hl,tu,this.up):xa.lookAt(tu,hl,this.up),this.quaternion.setFromRotationMatrix(xa),c&&(xa.extractRotation(c.matrixWorld),qr.setFromRotationMatrix(xa),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(A_),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Pb),Mh.child=e,this.dispatchEvent(Mh),Mh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xa.multiply(e.parent.matrixWorld)),e.applyMatrix4(xa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(A_),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,c=this.children.length;r<c;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const c=this.children;for(let f=0,d=c.length;f<d;f++)c[f].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hl,e,Ob),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hl,zb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,c=i.length;r<c;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,c=i.length;r<c;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,c=i.length;r<c;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const c=this.children;for(let f=0,d=c.length;f<d;f++)c[f].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const c={};c.uuid=this.uuid,c.type=this.type,this.name!==""&&(c.name=this.name),this.castShadow===!0&&(c.castShadow=!0),this.receiveShadow===!0&&(c.receiveShadow=!0),this.visible===!1&&(c.visible=!1),this.frustumCulled===!1&&(c.frustumCulled=!1),this.renderOrder!==0&&(c.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(c.userData=this.userData),c.layers=this.layers.mask,c.matrix=this.matrix.toArray(),c.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(c.matrixAutoUpdate=!1),this.isInstancedMesh&&(c.type="InstancedMesh",c.count=this.count,c.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(c.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(c.type="BatchedMesh",c.perObjectFrustumCulled=this.perObjectFrustumCulled,c.sortObjects=this.sortObjects,c.drawRanges=this._drawRanges,c.reservedRanges=this._reservedRanges,c.visibility=this._visibility,c.active=this._active,c.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),c.maxInstanceCount=this._maxInstanceCount,c.maxVertexCount=this._maxVertexCount,c.maxIndexCount=this._maxIndexCount,c.geometryInitialized=this._geometryInitialized,c.geometryCount=this._geometryCount,c.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(c.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(c.boundingSphere={center:c.boundingSphere.center.toArray(),radius:c.boundingSphere.radius}),this.boundingBox!==null&&(c.boundingBox={min:c.boundingBox.min.toArray(),max:c.boundingBox.max.toArray()}));function f(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?c.background=this.background.toJSON():this.background.isTexture&&(c.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(c.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){c.geometry=f(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let _=0,x=p.length;_<x;_++){const m=p[_];f(e.shapes,m)}else f(e.shapes,p)}}if(this.isSkinnedMesh&&(c.bindMode=this.bindMode,c.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),c.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,_=this.material.length;p<_;p++)h.push(f(e.materials,this.material[p]));c.material=h}else c.material=f(e.materials,this.material);if(this.children.length>0){c.children=[];for(let h=0;h<this.children.length;h++)c.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){c.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];c.animations.push(f(e.animations,p))}}if(i){const h=d(e.geometries),p=d(e.materials),_=d(e.textures),x=d(e.images),m=d(e.shapes),g=d(e.skeletons),M=d(e.animations),E=d(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),_.length>0&&(r.textures=_),x.length>0&&(r.images=x),m.length>0&&(r.shapes=m),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=c,r;function d(h){const p=[];for(const _ in h){const x=h[_];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const c=e.children[r];this.add(c.clone())}return this}}Pn.DEFAULT_UP=new nt(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Di=new nt,ya=new nt,bh=new nt,Sa=new nt,Yr=new nt,Zr=new nt,w_=new nt,Eh=new nt,Th=new nt,Ah=new nt,wh=new cn,Rh=new cn,Ch=new cn;class Ui{constructor(e=new nt,i=new nt,r=new nt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,c){c.subVectors(r,i),Di.subVectors(e,i),c.cross(Di);const f=c.lengthSq();return f>0?c.multiplyScalar(1/Math.sqrt(f)):c.set(0,0,0)}static getBarycoord(e,i,r,c,f){Di.subVectors(c,i),ya.subVectors(r,i),bh.subVectors(e,i);const d=Di.dot(Di),h=Di.dot(ya),p=Di.dot(bh),_=ya.dot(ya),x=ya.dot(bh),m=d*_-h*h;if(m===0)return f.set(0,0,0),null;const g=1/m,M=(_*p-h*x)*g,E=(d*x-h*p)*g;return f.set(1-M-E,E,M)}static containsPoint(e,i,r,c){return this.getBarycoord(e,i,r,c,Sa)===null?!1:Sa.x>=0&&Sa.y>=0&&Sa.x+Sa.y<=1}static getInterpolation(e,i,r,c,f,d,h,p){return this.getBarycoord(e,i,r,c,Sa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(f,Sa.x),p.addScaledVector(d,Sa.y),p.addScaledVector(h,Sa.z),p)}static getInterpolatedAttribute(e,i,r,c,f,d){return wh.setScalar(0),Rh.setScalar(0),Ch.setScalar(0),wh.fromBufferAttribute(e,i),Rh.fromBufferAttribute(e,r),Ch.fromBufferAttribute(e,c),d.setScalar(0),d.addScaledVector(wh,f.x),d.addScaledVector(Rh,f.y),d.addScaledVector(Ch,f.z),d}static isFrontFacing(e,i,r,c){return Di.subVectors(r,i),ya.subVectors(e,i),Di.cross(ya).dot(c)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,c){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[c]),this}setFromAttributeAndIndices(e,i,r,c){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,c),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),ya.subVectors(this.a,this.b),Di.cross(ya).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ui.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,c,f){return Ui.getInterpolation(e,this.a,this.b,this.c,i,r,c,f)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,c=this.b,f=this.c;let d,h;Yr.subVectors(c,r),Zr.subVectors(f,r),Eh.subVectors(e,r);const p=Yr.dot(Eh),_=Zr.dot(Eh);if(p<=0&&_<=0)return i.copy(r);Th.subVectors(e,c);const x=Yr.dot(Th),m=Zr.dot(Th);if(x>=0&&m<=x)return i.copy(c);const g=p*m-x*_;if(g<=0&&p>=0&&x<=0)return d=p/(p-x),i.copy(r).addScaledVector(Yr,d);Ah.subVectors(e,f);const M=Yr.dot(Ah),E=Zr.dot(Ah);if(E>=0&&M<=E)return i.copy(f);const b=M*_-p*E;if(b<=0&&_>=0&&E<=0)return h=_/(_-E),i.copy(r).addScaledVector(Zr,h);const S=x*E-M*m;if(S<=0&&m-x>=0&&M-E>=0)return w_.subVectors(f,c),h=(m-x)/(m-x+(M-E)),i.copy(c).addScaledVector(w_,h);const y=1/(S+b+g);return d=b*y,h=g*y,i.copy(r).addScaledVector(Yr,d).addScaledVector(Zr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Px={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},eu={h:0,s:0,l:0};function Nh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class he{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const c=e;c&&c.isColor?this.copy(c):typeof c=="number"?this.setHex(c):typeof c=="string"&&this.setStyle(c)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Le.toWorkingColorSpace(this,i),this}setRGB(e,i,r,c=Le.workingColorSpace){return this.r=e,this.g=i,this.b=r,Le.toWorkingColorSpace(this,c),this}setHSL(e,i,r,c=Le.workingColorSpace){if(e=xb(e,1),i=we(i,0,1),r=we(r,0,1),i===0)this.r=this.g=this.b=r;else{const f=r<=.5?r*(1+i):r+i-r*i,d=2*r-f;this.r=Nh(d,f,e+1/3),this.g=Nh(d,f,e),this.b=Nh(d,f,e-1/3)}return Le.toWorkingColorSpace(this,c),this}setStyle(e,i=Si){function r(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let c;if(c=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const d=c[1],h=c[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(c=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=c[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(f,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Si){const r=Px[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wa(e.r),this.g=wa(e.g),this.b=wa(e.b),this}copyLinearToSRGB(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Si){return Le.fromWorkingColorSpace(Gn.copy(this),e),Math.round(we(Gn.r*255,0,255))*65536+Math.round(we(Gn.g*255,0,255))*256+Math.round(we(Gn.b*255,0,255))}getHexString(e=Si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Le.workingColorSpace){Le.fromWorkingColorSpace(Gn.copy(this),i);const r=Gn.r,c=Gn.g,f=Gn.b,d=Math.max(r,c,f),h=Math.min(r,c,f);let p,_;const x=(h+d)/2;if(h===d)p=0,_=0;else{const m=d-h;switch(_=x<=.5?m/(d+h):m/(2-d-h),d){case r:p=(c-f)/m+(c<f?6:0);break;case c:p=(f-r)/m+2;break;case f:p=(r-c)/m+4;break}p/=6}return e.h=p,e.s=_,e.l=x,e}getRGB(e,i=Le.workingColorSpace){return Le.fromWorkingColorSpace(Gn.copy(this),i),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=Si){Le.fromWorkingColorSpace(Gn.copy(this),e);const i=Gn.r,r=Gn.g,c=Gn.b;return e!==Si?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${c.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(c*255)})`}offsetHSL(e,i,r){return this.getHSL(os),this.setHSL(os.h+e,os.s+i,os.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(os),e.getHSL(eu);const r=hh(os.h,eu.h,i),c=hh(os.s,eu.s,i),f=hh(os.l,eu.l,i);return this.setHSL(r,c,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,c=this.b,f=e.elements;return this.r=f[0]*i+f[3]*r+f[6]*c,this.g=f[1]*i+f[4]*r+f[7]*c,this.b=f[2]*i+f[5]*r+f[8]*c,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new he;he.NAMES=Px;let Ib=0;class mo extends po{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ib++}),this.uuid=yl(),this.name="",this.type="Material",this.blending=no,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qh,this.blendDst=Wh,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=h_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const c=this[i];if(c===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}c&&c.isColor?c.set(r):c&&c.isVector3&&r&&r.isVector3?c.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==no&&(r.blending=this.blending),this.side!==ds&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==qh&&(r.blendSrc=this.blendSrc),this.blendDst!==Wh&&(r.blendDst=this.blendDst),this.blendEquation!==Ys&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ro&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==h_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Hr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Hr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function c(f){const d=[];for(const h in f){const p=f[h];delete p.metadata,d.push(p)}return d}if(i){const f=c(e.textures),d=c(e.images);f.length>0&&(r.textures=f),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const c=i.length;r=new Array(c);for(let f=0;f!==c;++f)r[f]=i[f].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class kp extends mo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=_x,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vn=new nt,nu=new Oe;let Bb=0;class Qi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=p_,this.updateRanges=[],this.gpuType=Ta,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let c=0,f=this.itemSize;c<f;c++)this.array[e+c]=i.array[r+c];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)nu.fromBufferAttribute(this,i),nu.applyMatrix3(e),this.setXY(i,nu.x,nu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix3(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix4(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.applyNormalMatrix(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.transformDirection(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=ul(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=$n(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ul(i,this.array)),i}setX(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ul(i,this.array)),i}setY(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ul(i,this.array)),i}setZ(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ul(i,this.array)),i}setW(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=$n(i,this.array),r=$n(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,c){return e*=this.itemSize,this.normalized&&(i=$n(i,this.array),r=$n(r,this.array),c=$n(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=c,this}setXYZW(e,i,r,c,f){return e*=this.itemSize,this.normalized&&(i=$n(i,this.array),r=$n(r,this.array),c=$n(c,this.array),f=$n(f,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=c,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==p_&&(e.usage=this.usage),e}}class Ix extends Qi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Bx extends Qi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class In extends Qi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let Fb=0;const yi=new sn,Dh=new Pn,Kr=new nt,ui=new Ml,pl=new Ml,wn=new nt;class zi extends po{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fb++}),this.uuid=yl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ux(e)?Bx:Ix)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const f=new ge().getNormalMatrix(e);r.applyNormalMatrix(f),r.needsUpdate=!0}const c=this.attributes.tangent;return c!==void 0&&(c.transformDirection(e),c.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,i,r){return yi.makeTranslation(e,i,r),this.applyMatrix4(yi),this}scale(e,i,r){return yi.makeScale(e,i,r),this.applyMatrix4(yi),this}lookAt(e){return Dh.lookAt(e),Dh.updateMatrix(),this.applyMatrix4(Dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let c=0,f=e.length;c<f;c++){const d=e[c];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new In(r,3))}else{const r=Math.min(e.length,i.count);for(let c=0;c<r;c++){const f=e[c];i.setXYZ(c,f.x,f.y,f.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ml);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,c=i.length;r<c;r++){const f=i[r];ui.setFromBufferAttribute(f),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ru);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new nt,1/0);return}if(e){const r=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),i)for(let f=0,d=i.length;f<d;f++){const h=i[f];pl.setFromBufferAttribute(h),this.morphTargetsRelative?(wn.addVectors(ui.min,pl.min),ui.expandByPoint(wn),wn.addVectors(ui.max,pl.max),ui.expandByPoint(wn)):(ui.expandByPoint(pl.min),ui.expandByPoint(pl.max))}ui.getCenter(r);let c=0;for(let f=0,d=e.count;f<d;f++)wn.fromBufferAttribute(e,f),c=Math.max(c,r.distanceToSquared(wn));if(i)for(let f=0,d=i.length;f<d;f++){const h=i[f],p=this.morphTargetsRelative;for(let _=0,x=h.count;_<x;_++)wn.fromBufferAttribute(h,_),p&&(Kr.fromBufferAttribute(e,_),wn.add(Kr)),c=Math.max(c,r.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(c),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,c=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],p=[];for(let H=0;H<r.count;H++)h[H]=new nt,p[H]=new nt;const _=new nt,x=new nt,m=new nt,g=new Oe,M=new Oe,E=new Oe,b=new nt,S=new nt;function y(H,D,R){_.fromBufferAttribute(r,H),x.fromBufferAttribute(r,D),m.fromBufferAttribute(r,R),g.fromBufferAttribute(f,H),M.fromBufferAttribute(f,D),E.fromBufferAttribute(f,R),x.sub(_),m.sub(_),M.sub(g),E.sub(g);const F=1/(M.x*E.y-E.x*M.y);isFinite(F)&&(b.copy(x).multiplyScalar(E.y).addScaledVector(m,-M.y).multiplyScalar(F),S.copy(m).multiplyScalar(M.x).addScaledVector(x,-E.x).multiplyScalar(F),h[H].add(b),h[D].add(b),h[R].add(b),p[H].add(S),p[D].add(S),p[R].add(S))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let H=0,D=O.length;H<D;++H){const R=O[H],F=R.start,rt=R.count;for(let $=F,ct=F+rt;$<ct;$+=3)y(e.getX($+0),e.getX($+1),e.getX($+2))}const L=new nt,N=new nt,V=new nt,G=new nt;function P(H){V.fromBufferAttribute(c,H),G.copy(V);const D=h[H];L.copy(D),L.sub(V.multiplyScalar(V.dot(D))).normalize(),N.crossVectors(G,D);const F=N.dot(p[H])<0?-1:1;d.setXYZW(H,L.x,L.y,L.z,F)}for(let H=0,D=O.length;H<D;++H){const R=O[H],F=R.start,rt=R.count;for(let $=F,ct=F+rt;$<ct;$+=3)P(e.getX($+0)),P(e.getX($+1)),P(e.getX($+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Qi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const c=new nt,f=new nt,d=new nt,h=new nt,p=new nt,_=new nt,x=new nt,m=new nt;if(e)for(let g=0,M=e.count;g<M;g+=3){const E=e.getX(g+0),b=e.getX(g+1),S=e.getX(g+2);c.fromBufferAttribute(i,E),f.fromBufferAttribute(i,b),d.fromBufferAttribute(i,S),x.subVectors(d,f),m.subVectors(c,f),x.cross(m),h.fromBufferAttribute(r,E),p.fromBufferAttribute(r,b),_.fromBufferAttribute(r,S),h.add(x),p.add(x),_.add(x),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(S,_.x,_.y,_.z)}else for(let g=0,M=i.count;g<M;g+=3)c.fromBufferAttribute(i,g+0),f.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),x.subVectors(d,f),m.subVectors(c,f),x.cross(m),r.setXYZ(g+0,x.x,x.y,x.z),r.setXYZ(g+1,x.x,x.y,x.z),r.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)wn.fromBufferAttribute(e,i),wn.normalize(),e.setXYZ(i,wn.x,wn.y,wn.z)}toNonIndexed(){function e(h,p){const _=h.array,x=h.itemSize,m=h.normalized,g=new _.constructor(p.length*x);let M=0,E=0;for(let b=0,S=p.length;b<S;b++){h.isInterleavedBufferAttribute?M=p[b]*h.data.stride+h.offset:M=p[b]*x;for(let y=0;y<x;y++)g[E++]=_[M++]}return new Qi(g,x,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new zi,r=this.index.array,c=this.attributes;for(const h in c){const p=c[h],_=e(p,r);i.setAttribute(h,_)}const f=this.morphAttributes;for(const h in f){const p=[],_=f[h];for(let x=0,m=_.length;x<m;x++){const g=_[x],M=e(g,r);p.push(M)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const _=d[h];i.addGroup(_.start,_.count,_.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const _ in p)p[_]!==void 0&&(e[_]=p[_]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const _=r[p];e.data.attributes[p]=_.toJSON(e.data)}const c={};let f=!1;for(const p in this.morphAttributes){const _=this.morphAttributes[p],x=[];for(let m=0,g=_.length;m<g;m++){const M=_[m];x.push(M.toJSON(e.data))}x.length>0&&(c[p]=x,f=!0)}f&&(e.data.morphAttributes=c,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const c=e.attributes;for(const _ in c){const x=c[_];this.setAttribute(_,x.clone(i))}const f=e.morphAttributes;for(const _ in f){const x=[],m=f[_];for(let g=0,M=m.length;g<M;g++)x.push(m[g].clone(i));this.morphAttributes[_]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let _=0,x=d.length;_<x;_++){const m=d[_];this.addGroup(m.start,m.count,m.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const R_=new sn,Fs=new Ox,iu=new Ru,C_=new nt,au=new nt,su=new nt,ru=new nt,Uh=new nt,ou=new nt,N_=new nt,lu=new nt;class Ce extends Pn{constructor(e=new zi,i=new kp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const c=i[r[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=c.length;f<d;f++){const h=c[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(e,i){const r=this.geometry,c=r.attributes.position,f=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(c,e);const h=this.morphTargetInfluences;if(f&&h){ou.set(0,0,0);for(let p=0,_=f.length;p<_;p++){const x=h[p],m=f[p];x!==0&&(Uh.fromBufferAttribute(m,e),d?ou.addScaledVector(Uh,x):ou.addScaledVector(Uh.sub(i),x))}i.add(ou)}return i}raycast(e,i){const r=this.geometry,c=this.material,f=this.matrixWorld;c!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),iu.copy(r.boundingSphere),iu.applyMatrix4(f),Fs.copy(e.ray).recast(e.near),!(iu.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(iu,C_)===null||Fs.origin.distanceToSquared(C_)>(e.far-e.near)**2))&&(R_.copy(f).invert(),Fs.copy(e.ray).applyMatrix4(R_),!(r.boundingBox!==null&&Fs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Fs)))}_computeIntersections(e,i,r){let c;const f=this.geometry,d=this.material,h=f.index,p=f.attributes.position,_=f.attributes.uv,x=f.attributes.uv1,m=f.attributes.normal,g=f.groups,M=f.drawRange;if(h!==null)if(Array.isArray(d))for(let E=0,b=g.length;E<b;E++){const S=g[E],y=d[S.materialIndex],O=Math.max(S.start,M.start),L=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let N=O,V=L;N<V;N+=3){const G=h.getX(N),P=h.getX(N+1),H=h.getX(N+2);c=cu(this,y,e,r,_,x,m,G,P,H),c&&(c.faceIndex=Math.floor(N/3),c.face.materialIndex=S.materialIndex,i.push(c))}}else{const E=Math.max(0,M.start),b=Math.min(h.count,M.start+M.count);for(let S=E,y=b;S<y;S+=3){const O=h.getX(S),L=h.getX(S+1),N=h.getX(S+2);c=cu(this,d,e,r,_,x,m,O,L,N),c&&(c.faceIndex=Math.floor(S/3),i.push(c))}}else if(p!==void 0)if(Array.isArray(d))for(let E=0,b=g.length;E<b;E++){const S=g[E],y=d[S.materialIndex],O=Math.max(S.start,M.start),L=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let N=O,V=L;N<V;N+=3){const G=N,P=N+1,H=N+2;c=cu(this,y,e,r,_,x,m,G,P,H),c&&(c.faceIndex=Math.floor(N/3),c.face.materialIndex=S.materialIndex,i.push(c))}}else{const E=Math.max(0,M.start),b=Math.min(p.count,M.start+M.count);for(let S=E,y=b;S<y;S+=3){const O=S,L=S+1,N=S+2;c=cu(this,d,e,r,_,x,m,O,L,N),c&&(c.faceIndex=Math.floor(S/3),i.push(c))}}}}function Hb(o,e,i,r,c,f,d,h){let p;if(e.side===Jn?p=r.intersectTriangle(d,f,c,!0,h):p=r.intersectTriangle(c,f,d,e.side===ds,h),p===null)return null;lu.copy(h),lu.applyMatrix4(o.matrixWorld);const _=i.ray.origin.distanceTo(lu);return _<i.near||_>i.far?null:{distance:_,point:lu.clone(),object:o}}function cu(o,e,i,r,c,f,d,h,p,_){o.getVertexPosition(h,au),o.getVertexPosition(p,su),o.getVertexPosition(_,ru);const x=Hb(o,e,i,r,au,su,ru,N_);if(x){const m=new nt;Ui.getBarycoord(N_,au,su,ru,m),c&&(x.uv=Ui.getInterpolatedAttribute(c,h,p,_,m,new Oe)),f&&(x.uv1=Ui.getInterpolatedAttribute(f,h,p,_,m,new Oe)),d&&(x.normal=Ui.getInterpolatedAttribute(d,h,p,_,m,new nt),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const g={a:h,b:p,c:_,normal:new nt,materialIndex:0};Ui.getNormal(au,su,ru,g.normal),x.face=g,x.barycoord=m}return x}class Zi extends zi{constructor(e=1,i=1,r=1,c=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:c,heightSegments:f,depthSegments:d};const h=this;c=Math.floor(c),f=Math.floor(f),d=Math.floor(d);const p=[],_=[],x=[],m=[];let g=0,M=0;E("z","y","x",-1,-1,r,i,e,d,f,0),E("z","y","x",1,-1,r,i,-e,d,f,1),E("x","z","y",1,1,e,r,i,c,d,2),E("x","z","y",1,-1,e,r,-i,c,d,3),E("x","y","z",1,-1,e,i,r,c,f,4),E("x","y","z",-1,-1,e,i,-r,c,f,5),this.setIndex(p),this.setAttribute("position",new In(_,3)),this.setAttribute("normal",new In(x,3)),this.setAttribute("uv",new In(m,2));function E(b,S,y,O,L,N,V,G,P,H,D){const R=N/P,F=V/H,rt=N/2,$=V/2,ct=G/2,ot=P+1,B=H+1;let tt=0,W=0;const gt=new nt;for(let yt=0;yt<B;yt++){const Ct=yt*F-$;for(let Qt=0;Qt<ot;Qt++){const de=Qt*R-rt;gt[b]=de*O,gt[S]=Ct*L,gt[y]=ct,_.push(gt.x,gt.y,gt.z),gt[b]=0,gt[S]=0,gt[y]=G>0?1:-1,x.push(gt.x,gt.y,gt.z),m.push(Qt/P),m.push(1-yt/H),tt+=1}}for(let yt=0;yt<H;yt++)for(let Ct=0;Ct<P;Ct++){const Qt=g+Ct+ot*yt,de=g+Ct+ot*(yt+1),U=g+(Ct+1)+ot*(yt+1),Y=g+(Ct+1)+ot*yt;p.push(Qt,de,Y),p.push(de,U,Y),W+=6}h.addGroup(M,W,D),M+=W,g+=tt}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ho(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const c=o[i][r];c&&(c.isColor||c.isMatrix3||c.isMatrix4||c.isVector2||c.isVector3||c.isVector4||c.isTexture||c.isQuaternion)?c.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=c.clone():Array.isArray(c)?e[i][r]=c.slice():e[i][r]=c}}return e}function qn(o){const e={};for(let i=0;i<o.length;i++){const r=ho(o[i]);for(const c in r)e[c]=r[c]}return e}function Gb(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Fx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Le.workingColorSpace}const Vb={clone:ho,merge:qn};var kb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hs extends mo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kb,this.fragmentShader=jb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ho(e.uniforms),this.uniformsGroups=Gb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const c in this.uniforms){const d=this.uniforms[c].value;d&&d.isTexture?i.uniforms[c]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[c]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[c]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[c]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[c]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[c]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[c]={type:"m4",value:d.toArray()}:i.uniforms[c]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const c in this.extensions)this.extensions[c]===!0&&(r[c]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}let Hx=class extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Aa}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const ls=new nt,D_=new Oe,U_=new Oe;class Mi extends Hx{constructor(e=50,i=1,r=.1,c=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=c,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Dp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dp*2*Math.atan(Math.tan(dh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ls.x,ls.y).multiplyScalar(-e/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ls.x,ls.y).multiplyScalar(-e/ls.z)}getViewSize(e,i){return this.getViewBounds(e,D_,U_),i.subVectors(U_,D_)}setViewOffset(e,i,r,c,f,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=c,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(dh*.5*this.fov)/this.zoom,r=2*i,c=this.aspect*r,f=-.5*c;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,_=d.fullHeight;f+=d.offsetX*c/p,i-=d.offsetY*r/_,c*=d.width/p,r*=d.height/_}const h=this.filmOffset;h!==0&&(f+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+c,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Qr=-90,$r=1;class Xb extends Pn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const c=new Mi(Qr,$r,e,i);c.layers=this.layers,this.add(c);const f=new Mi(Qr,$r,e,i);f.layers=this.layers,this.add(f);const d=new Mi(Qr,$r,e,i);d.layers=this.layers,this.add(d);const h=new Mi(Qr,$r,e,i);h.layers=this.layers,this.add(h);const p=new Mi(Qr,$r,e,i);p.layers=this.layers,this.add(p);const _=new Mi(Qr,$r,e,i);_.layers=this.layers,this.add(_)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,c,f,d,h,p]=i;for(const _ of i)this.remove(_);if(e===Aa)r.up.set(0,1,0),r.lookAt(1,0,0),c.up.set(0,1,0),c.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===bu)r.up.set(0,-1,0),r.lookAt(-1,0,0),c.up.set(0,-1,0),c.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const _ of i)this.add(_),_.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:c}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,p,_,x]=this.children,m=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,c),e.render(i,f),e.setRenderTarget(r,1,c),e.render(i,d),e.setRenderTarget(r,2,c),e.render(i,h),e.setRenderTarget(r,3,c),e.render(i,p),e.setRenderTarget(r,4,c),e.render(i,_),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,c),e.render(i,x),e.setRenderTarget(m,g,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Gx extends ti{constructor(e,i,r,c,f,d,h,p,_,x){e=e!==void 0?e:[],i=i!==void 0?i:oo,super(e,i,r,c,f,d,h,p,_,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qb extends Js{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},c=[r,r,r,r,r,r];this.texture=new Gx(c,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ki}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},c=new Zi(5,5,5),f=new hs({name:"CubemapFromEquirect",uniforms:ho(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Jn,blending:us});f.uniforms.tEquirect.value=i;const d=new Ce(c,f),h=i.minFilter;return i.minFilter===Qs&&(i.minFilter=Ki),new Xb(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i,r,c){const f=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,c);e.setRenderTarget(f)}}class Ea extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wb={type:"move"};class Lh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ea,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ea,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ea,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let c=null,f=null,d=null;const h=this._targetRay,p=this._grip,_=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(_&&e.hand){d=!0;for(const b of e.hand.values()){const S=i.getJointPose(b,r),y=this._getHandJoint(_,b);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const x=_.joints["index-finger-tip"],m=_.joints["thumb-tip"],g=x.position.distanceTo(m.position),M=.02,E=.005;_.inputState.pinching&&g>M+E?(_.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!_.inputState.pinching&&g<=M-E&&(_.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,r),f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,f.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(f.linearVelocity)):p.hasLinearVelocity=!1,f.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(f.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(c=i.getPose(e.targetRaySpace,r),c===null&&f!==null&&(c=f),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Wb)))}return h!==null&&(h.visible=c!==null),p!==null&&(p.visible=f!==null),_!==null&&(_.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Ea;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class jp{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new he(e),this.density=i}clone(){return new jp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Yb extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Oh=new nt,Zb=new nt,Kb=new ge;class qs{constructor(e=new nt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,c){return this.normal.set(e,i,r),this.constant=c,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const c=Oh.subVectors(r,i).cross(Zb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(c,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Oh),c=this.normal.dot(r);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return f<0||f>1?null:i.copy(e.start).addScaledVector(r,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Kb.getNormalMatrix(e),c=this.coplanarPoint(Oh).applyMatrix4(e),f=this.normal.applyMatrix3(r).normalize();return this.constant=-c.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hs=new Ru,uu=new nt;class Xp{constructor(e=new qs,i=new qs,r=new qs,c=new qs,f=new qs,d=new qs){this.planes=[e,i,r,c,f,d]}set(e,i,r,c,f,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(c),h[4].copy(f),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Aa){const r=this.planes,c=e.elements,f=c[0],d=c[1],h=c[2],p=c[3],_=c[4],x=c[5],m=c[6],g=c[7],M=c[8],E=c[9],b=c[10],S=c[11],y=c[12],O=c[13],L=c[14],N=c[15];if(r[0].setComponents(p-f,g-_,S-M,N-y).normalize(),r[1].setComponents(p+f,g+_,S+M,N+y).normalize(),r[2].setComponents(p+d,g+x,S+E,N+O).normalize(),r[3].setComponents(p-d,g-x,S-E,N-O).normalize(),r[4].setComponents(p-h,g-m,S-b,N-L).normalize(),i===Aa)r[5].setComponents(p+h,g+m,S+b,N+L).normalize();else if(i===bu)r[5].setComponents(h,m,b,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Hs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hs)}intersectsSprite(e){return Hs.center.set(0,0,0),Hs.radius=.7071067811865476,Hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hs)}intersectsSphere(e){const i=this.planes,r=e.center,c=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(r)<c)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const c=i[r];if(uu.x=c.normal.x>0?e.max.x:e.min.x,uu.y=c.normal.y>0?e.max.y:e.min.y,uu.z=c.normal.z>0?e.max.z:e.min.z,c.distanceToPoint(uu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vx extends mo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new he(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tu=new nt,Au=new nt,L_=new sn,ml=new Ox,fu=new Ru,zh=new nt,O_=new nt;class Qb extends Pn{constructor(e=new zi,i=new Vx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let c=1,f=i.count;c<f;c++)Tu.fromBufferAttribute(i,c-1),Au.fromBufferAttribute(i,c),r[c]=r[c-1],r[c]+=Tu.distanceTo(Au);e.setAttribute("lineDistance",new In(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,c=this.matrixWorld,f=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),fu.copy(r.boundingSphere),fu.applyMatrix4(c),fu.radius+=f,e.ray.intersectsSphere(fu)===!1)return;L_.copy(c).invert(),ml.copy(e.ray).applyMatrix4(L_);const h=f/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,_=this.isLineSegments?2:1,x=r.index,g=r.attributes.position;if(x!==null){const M=Math.max(0,d.start),E=Math.min(x.count,d.start+d.count);for(let b=M,S=E-1;b<S;b+=_){const y=x.getX(b),O=x.getX(b+1),L=du(this,e,ml,p,y,O,b);L&&i.push(L)}if(this.isLineLoop){const b=x.getX(E-1),S=x.getX(M),y=du(this,e,ml,p,b,S,E-1);y&&i.push(y)}}else{const M=Math.max(0,d.start),E=Math.min(g.count,d.start+d.count);for(let b=M,S=E-1;b<S;b+=_){const y=du(this,e,ml,p,b,b+1,b);y&&i.push(y)}if(this.isLineLoop){const b=du(this,e,ml,p,E-1,M,E-1);b&&i.push(b)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const c=i[r[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=c.length;f<d;f++){const h=c[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}}function du(o,e,i,r,c,f,d){const h=o.geometry.attributes.position;if(Tu.fromBufferAttribute(h,c),Au.fromBufferAttribute(h,f),i.distanceSqToSegment(Tu,Au,zh,O_)>r)return;zh.applyMatrix4(o.matrixWorld);const _=e.ray.origin.distanceTo(zh);if(!(_<e.near||_>e.far))return{distance:_,point:O_.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}const z_=new nt,P_=new nt;class $b extends Qb{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let c=0,f=i.count;c<f;c+=2)z_.fromBufferAttribute(i,c),P_.fromBufferAttribute(i,c+1),r[c]=c===0?0:r[c-1],r[c+1]=r[c]+z_.distanceTo(P_);e.setAttribute("lineDistance",new In(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kx extends ti{constructor(e,i,r,c,f,d,h,p,_,x=io){if(x!==io&&x!==uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&x===io&&(r=$s),r===void 0&&x===uo&&(r=co),super(null,c,f,d,h,p,x,r,_),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=h!==void 0?h:Oi,this.minFilter=p!==void 0?p:Oi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ln extends zi{constructor(e=1,i=1,r=1,c=32,f=1,d=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:r,radialSegments:c,heightSegments:f,openEnded:d,thetaStart:h,thetaLength:p};const _=this;c=Math.floor(c),f=Math.floor(f);const x=[],m=[],g=[],M=[];let E=0;const b=[],S=r/2;let y=0;O(),d===!1&&(e>0&&L(!0),i>0&&L(!1)),this.setIndex(x),this.setAttribute("position",new In(m,3)),this.setAttribute("normal",new In(g,3)),this.setAttribute("uv",new In(M,2));function O(){const N=new nt,V=new nt;let G=0;const P=(i-e)/r;for(let H=0;H<=f;H++){const D=[],R=H/f,F=R*(i-e)+e;for(let rt=0;rt<=c;rt++){const $=rt/c,ct=$*p+h,ot=Math.sin(ct),B=Math.cos(ct);V.x=F*ot,V.y=-R*r+S,V.z=F*B,m.push(V.x,V.y,V.z),N.set(ot,P,B).normalize(),g.push(N.x,N.y,N.z),M.push($,1-R),D.push(E++)}b.push(D)}for(let H=0;H<c;H++)for(let D=0;D<f;D++){const R=b[D][H],F=b[D+1][H],rt=b[D+1][H+1],$=b[D][H+1];(e>0||D!==0)&&(x.push(R,F,$),G+=3),(i>0||D!==f-1)&&(x.push(F,rt,$),G+=3)}_.addGroup(y,G,0),y+=G}function L(N){const V=E,G=new Oe,P=new nt;let H=0;const D=N===!0?e:i,R=N===!0?1:-1;for(let rt=1;rt<=c;rt++)m.push(0,S*R,0),g.push(0,R,0),M.push(.5,.5),E++;const F=E;for(let rt=0;rt<=c;rt++){const ct=rt/c*p+h,ot=Math.cos(ct),B=Math.sin(ct);P.x=D*B,P.y=S*R,P.z=D*ot,m.push(P.x,P.y,P.z),g.push(0,R,0),G.x=ot*.5+.5,G.y=B*.5*R+.5,M.push(G.x,G.y),E++}for(let rt=0;rt<c;rt++){const $=V+rt,ct=F+rt;N===!0?x.push(ct,ct+1,$):x.push(ct+1,ct,$),H+=3}_.addGroup(y,H,N===!0?1:2),y+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ln(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cu extends zi{constructor(e=1,i=1,r=1,c=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:c};const f=e/2,d=i/2,h=Math.floor(r),p=Math.floor(c),_=h+1,x=p+1,m=e/h,g=i/p,M=[],E=[],b=[],S=[];for(let y=0;y<x;y++){const O=y*g-d;for(let L=0;L<_;L++){const N=L*m-f;E.push(N,-O,0),b.push(0,0,1),S.push(L/h),S.push(1-y/p)}}for(let y=0;y<p;y++)for(let O=0;O<h;O++){const L=O+_*y,N=O+_*(y+1),V=O+1+_*(y+1),G=O+1+_*y;M.push(L,N,G),M.push(N,V,G)}this.setIndex(M),this.setAttribute("position",new In(E,3)),this.setAttribute("normal",new In(b,3)),this.setAttribute("uv",new In(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cu(e.width,e.height,e.widthSegments,e.heightSegments)}}class qp extends zi{constructor(e=1,i=.4,r=12,c=48,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:r,tubularSegments:c,arc:f},r=Math.floor(r),c=Math.floor(c);const d=[],h=[],p=[],_=[],x=new nt,m=new nt,g=new nt;for(let M=0;M<=r;M++)for(let E=0;E<=c;E++){const b=E/c*f,S=M/r*Math.PI*2;m.x=(e+i*Math.cos(S))*Math.cos(b),m.y=(e+i*Math.cos(S))*Math.sin(b),m.z=i*Math.sin(S),h.push(m.x,m.y,m.z),x.x=e*Math.cos(b),x.y=e*Math.sin(b),g.subVectors(m,x).normalize(),p.push(g.x,g.y,g.z),_.push(E/c),_.push(M/r)}for(let M=1;M<=r;M++)for(let E=1;E<=c;E++){const b=(c+1)*M+E-1,S=(c+1)*(M-1)+E-1,y=(c+1)*(M-1)+E,O=(c+1)*M+E;d.push(b,S,O),d.push(S,y,O)}this.setIndex(d),this.setAttribute("position",new In(h,3)),this.setAttribute("normal",new In(p,3)),this.setAttribute("uv",new In(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class to extends mo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nx,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jb extends to{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return we(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new he(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new he(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new he(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class tE extends mo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eE extends mo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class jx extends Pn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new he(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Ph=new sn,I_=new nt,B_=new nt;class nE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xp,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;I_.setFromMatrixPosition(e.matrixWorld),i.position.copy(I_),B_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(B_),i.updateMatrixWorld(),Ph.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ph),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Ph)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Xx extends Hx{constructor(e=-1,i=1,r=1,c=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=c,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,c,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=c,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,c=(this.top+this.bottom)/2;let f=r-e,d=r+e,h=c+i,p=c-i;if(this.view!==null&&this.view.enabled){const _=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=_*this.view.offsetX,d=f+_*this.view.width,h-=x*this.view.offsetY,p=h-x*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class iE extends nE{constructor(){super(new Xx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class aE extends jx{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.shadow=new iE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sE extends jx{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class rE extends Mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class oE extends $b{constructor(e=10,i=10,r=4473924,c=8947848){r=new he(r),c=new he(c);const f=i/2,d=e/i,h=e/2,p=[],_=[];for(let g=0,M=0,E=-h;g<=i;g++,E+=d){p.push(-h,0,E,h,0,E),p.push(E,0,-h,E,0,h);const b=g===f?r:c;b.toArray(_,M),M+=3,b.toArray(_,M),M+=3,b.toArray(_,M),M+=3,b.toArray(_,M),M+=3}const x=new zi;x.setAttribute("position",new In(p,3)),x.setAttribute("color",new In(_,3));const m=new Vx({vertexColors:!0,toneMapped:!1});super(x,m),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function F_(o,e,i,r){const c=lE(r);switch(i){case bx:return o*e;case Tx:return o*e;case Ax:return o*e*2;case wx:return o*e/c.components*c.byteLength;case Fp:return o*e/c.components*c.byteLength;case Rx:return o*e*2/c.components*c.byteLength;case Hp:return o*e*2/c.components*c.byteLength;case Ex:return o*e*3/c.components*c.byteLength;case Li:return o*e*4/c.components*c.byteLength;case Gp:return o*e*4/c.components*c.byteLength;case gu:case vu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case _u:case xu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case rp:case lp:return Math.max(o,16)*Math.max(e,8)/4;case sp:case op:return Math.max(o,8)*Math.max(e,8)/2;case cp:case up:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case fp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case dp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case hp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case pp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case mp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case gp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case vp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case _p:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case xp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case yp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Sp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Mp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case bp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Ep:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Tp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case yu:case Ap:case wp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Cx:case Rp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Cp:case Np:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function lE(o){switch(o){case Ra:case yx:return{byteLength:1,components:1};case _l:case Sx:case xl:return{byteLength:2,components:1};case Ip:case Bp:return{byteLength:2,components:4};case $s:case Pp:case Ta:return{byteLength:4,components:1};case Mx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qx(){let o=null,e=!1,i=null,r=null;function c(f,d){i(f,d),r=o.requestAnimationFrame(c)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(c),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function cE(o){const e=new WeakMap;function i(h,p){const _=h.array,x=h.usage,m=_.byteLength,g=o.createBuffer();o.bindBuffer(p,g),o.bufferData(p,_,x),h.onUploadCallback();let M;if(_ instanceof Float32Array)M=o.FLOAT;else if(_ instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(_ instanceof Int16Array)M=o.SHORT;else if(_ instanceof Uint32Array)M=o.UNSIGNED_INT;else if(_ instanceof Int32Array)M=o.INT;else if(_ instanceof Int8Array)M=o.BYTE;else if(_ instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:g,type:M,bytesPerElement:_.BYTES_PER_ELEMENT,version:h.version,size:m}}function r(h,p,_){const x=p.array,m=p.updateRanges;if(o.bindBuffer(_,h),m.length===0)o.bufferSubData(_,0,x);else{m.sort((M,E)=>M.start-E.start);let g=0;for(let M=1;M<m.length;M++){const E=m[g],b=m[M];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++g,m[g]=b)}m.length=g+1;for(let M=0,E=m.length;M<E;M++){const b=m[M];o.bufferSubData(_,b.start*x.BYTES_PER_ELEMENT,x,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function c(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(o.deleteBuffer(p.buffer),e.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=e.get(h);(!x||x.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const _=e.get(h);if(_===void 0)e.set(h,i(h,p));else if(_.version<h.version){if(_.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(_.buffer,h,p),_.version=h.version}}return{get:c,remove:f,update:d}}var uE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_E=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,SE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ME=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,EE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,TE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,AE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,DE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,UE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,LE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,OE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,PE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,IE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,FE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HE="gl_FragColor = linearToOutputTexel( gl_FragColor );",GE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,XE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,WE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$E=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,iT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_T=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ST=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ET=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,AT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,RT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,CT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,UT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,LT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,IT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,FT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,qT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,WT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,YT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ZT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,QT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$T=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,JT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_A=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,EA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,RA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,NA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,DA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,OA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,BA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,GA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_e={alphahash_fragment:uE,alphahash_pars_fragment:fE,alphamap_fragment:dE,alphamap_pars_fragment:hE,alphatest_fragment:pE,alphatest_pars_fragment:mE,aomap_fragment:gE,aomap_pars_fragment:vE,batching_pars_vertex:_E,batching_vertex:xE,begin_vertex:yE,beginnormal_vertex:SE,bsdfs:ME,iridescence_fragment:bE,bumpmap_pars_fragment:EE,clipping_planes_fragment:TE,clipping_planes_pars_fragment:AE,clipping_planes_pars_vertex:wE,clipping_planes_vertex:RE,color_fragment:CE,color_pars_fragment:NE,color_pars_vertex:DE,color_vertex:UE,common:LE,cube_uv_reflection_fragment:OE,defaultnormal_vertex:zE,displacementmap_pars_vertex:PE,displacementmap_vertex:IE,emissivemap_fragment:BE,emissivemap_pars_fragment:FE,colorspace_fragment:HE,colorspace_pars_fragment:GE,envmap_fragment:VE,envmap_common_pars_fragment:kE,envmap_pars_fragment:jE,envmap_pars_vertex:XE,envmap_physical_pars_fragment:nT,envmap_vertex:qE,fog_vertex:WE,fog_pars_vertex:YE,fog_fragment:ZE,fog_pars_fragment:KE,gradientmap_pars_fragment:QE,lightmap_pars_fragment:$E,lights_lambert_fragment:JE,lights_lambert_pars_fragment:tT,lights_pars_begin:eT,lights_toon_fragment:iT,lights_toon_pars_fragment:aT,lights_phong_fragment:sT,lights_phong_pars_fragment:rT,lights_physical_fragment:oT,lights_physical_pars_fragment:lT,lights_fragment_begin:cT,lights_fragment_maps:uT,lights_fragment_end:fT,logdepthbuf_fragment:dT,logdepthbuf_pars_fragment:hT,logdepthbuf_pars_vertex:pT,logdepthbuf_vertex:mT,map_fragment:gT,map_pars_fragment:vT,map_particle_fragment:_T,map_particle_pars_fragment:xT,metalnessmap_fragment:yT,metalnessmap_pars_fragment:ST,morphinstance_vertex:MT,morphcolor_vertex:bT,morphnormal_vertex:ET,morphtarget_pars_vertex:TT,morphtarget_vertex:AT,normal_fragment_begin:wT,normal_fragment_maps:RT,normal_pars_fragment:CT,normal_pars_vertex:NT,normal_vertex:DT,normalmap_pars_fragment:UT,clearcoat_normal_fragment_begin:LT,clearcoat_normal_fragment_maps:OT,clearcoat_pars_fragment:zT,iridescence_pars_fragment:PT,opaque_fragment:IT,packing:BT,premultiplied_alpha_fragment:FT,project_vertex:HT,dithering_fragment:GT,dithering_pars_fragment:VT,roughnessmap_fragment:kT,roughnessmap_pars_fragment:jT,shadowmap_pars_fragment:XT,shadowmap_pars_vertex:qT,shadowmap_vertex:WT,shadowmask_pars_fragment:YT,skinbase_vertex:ZT,skinning_pars_vertex:KT,skinning_vertex:QT,skinnormal_vertex:$T,specularmap_fragment:JT,specularmap_pars_fragment:tA,tonemapping_fragment:eA,tonemapping_pars_fragment:nA,transmission_fragment:iA,transmission_pars_fragment:aA,uv_pars_fragment:sA,uv_pars_vertex:rA,uv_vertex:oA,worldpos_vertex:lA,background_vert:cA,background_frag:uA,backgroundCube_vert:fA,backgroundCube_frag:dA,cube_vert:hA,cube_frag:pA,depth_vert:mA,depth_frag:gA,distanceRGBA_vert:vA,distanceRGBA_frag:_A,equirect_vert:xA,equirect_frag:yA,linedashed_vert:SA,linedashed_frag:MA,meshbasic_vert:bA,meshbasic_frag:EA,meshlambert_vert:TA,meshlambert_frag:AA,meshmatcap_vert:wA,meshmatcap_frag:RA,meshnormal_vert:CA,meshnormal_frag:NA,meshphong_vert:DA,meshphong_frag:UA,meshphysical_vert:LA,meshphysical_frag:OA,meshtoon_vert:zA,meshtoon_frag:PA,points_vert:IA,points_frag:BA,shadow_vert:FA,shadow_frag:HA,sprite_vert:GA,sprite_frag:VA},Ht={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},Yi={basic:{uniforms:qn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:qn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new he(0)}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:qn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:qn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:qn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new he(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:qn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:qn([Ht.points,Ht.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:qn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:qn([Ht.common,Ht.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:qn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:qn([Ht.sprite,Ht.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distanceRGBA:{uniforms:qn([Ht.common,Ht.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distanceRGBA_vert,fragmentShader:_e.distanceRGBA_frag},shadow:{uniforms:qn([Ht.lights,Ht.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};Yi.physical={uniforms:qn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const hu={r:0,b:0,g:0},Gs=new $i,kA=new sn;function jA(o,e,i,r,c,f,d){const h=new he(0);let p=f===!0?0:1,_,x,m=null,g=0,M=null;function E(L){let N=L.isScene===!0?L.background:null;return N&&N.isTexture&&(N=(L.backgroundBlurriness>0?i:e).get(N)),N}function b(L){let N=!1;const V=E(L);V===null?y(h,p):V&&V.isColor&&(y(V,1),N=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,d):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(L,N){const V=E(N);V&&(V.isCubeTexture||V.mapping===wu)?(x===void 0&&(x=new Ce(new Zi(1,1,1),new hs({name:"BackgroundCubeMaterial",uniforms:ho(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(G,P,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),c.update(x)),Gs.copy(N.backgroundRotation),Gs.x*=-1,Gs.y*=-1,Gs.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(Gs.y*=-1,Gs.z*=-1),x.material.uniforms.envMap.value=V,x.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(kA.makeRotationFromEuler(Gs)),x.material.toneMapped=Le.getTransfer(V.colorSpace)!==ke,(m!==V||g!==V.version||M!==o.toneMapping)&&(x.material.needsUpdate=!0,m=V,g=V.version,M=o.toneMapping),x.layers.enableAll(),L.unshift(x,x.geometry,x.material,0,0,null)):V&&V.isTexture&&(_===void 0&&(_=new Ce(new Cu(2,2),new hs({name:"BackgroundMaterial",uniforms:ho(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),Object.defineProperty(_.material,"map",{get:function(){return this.uniforms.t2D.value}}),c.update(_)),_.material.uniforms.t2D.value=V,_.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,_.material.toneMapped=Le.getTransfer(V.colorSpace)!==ke,V.matrixAutoUpdate===!0&&V.updateMatrix(),_.material.uniforms.uvTransform.value.copy(V.matrix),(m!==V||g!==V.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,m=V,g=V.version,M=o.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null))}function y(L,N){L.getRGB(hu,Fx(o)),r.buffers.color.setClear(hu.r,hu.g,hu.b,N,d)}function O(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,N=1){h.set(L),p=N,y(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,y(h,p)},render:b,addToRenderList:S,dispose:O}}function XA(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},c=g(null);let f=c,d=!1;function h(R,F,rt,$,ct){let ot=!1;const B=m($,rt,F);f!==B&&(f=B,_(f.object)),ot=M(R,$,rt,ct),ot&&E(R,$,rt,ct),ct!==null&&e.update(ct,o.ELEMENT_ARRAY_BUFFER),(ot||d)&&(d=!1,N(R,F,rt,$),ct!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ct).buffer))}function p(){return o.createVertexArray()}function _(R){return o.bindVertexArray(R)}function x(R){return o.deleteVertexArray(R)}function m(R,F,rt){const $=rt.wireframe===!0;let ct=r[R.id];ct===void 0&&(ct={},r[R.id]=ct);let ot=ct[F.id];ot===void 0&&(ot={},ct[F.id]=ot);let B=ot[$];return B===void 0&&(B=g(p()),ot[$]=B),B}function g(R){const F=[],rt=[],$=[];for(let ct=0;ct<i;ct++)F[ct]=0,rt[ct]=0,$[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:rt,attributeDivisors:$,object:R,attributes:{},index:null}}function M(R,F,rt,$){const ct=f.attributes,ot=F.attributes;let B=0;const tt=rt.getAttributes();for(const W in tt)if(tt[W].location>=0){const yt=ct[W];let Ct=ot[W];if(Ct===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(Ct=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(Ct=R.instanceColor)),yt===void 0||yt.attribute!==Ct||Ct&&yt.data!==Ct.data)return!0;B++}return f.attributesNum!==B||f.index!==$}function E(R,F,rt,$){const ct={},ot=F.attributes;let B=0;const tt=rt.getAttributes();for(const W in tt)if(tt[W].location>=0){let yt=ot[W];yt===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(yt=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(yt=R.instanceColor));const Ct={};Ct.attribute=yt,yt&&yt.data&&(Ct.data=yt.data),ct[W]=Ct,B++}f.attributes=ct,f.attributesNum=B,f.index=$}function b(){const R=f.newAttributes;for(let F=0,rt=R.length;F<rt;F++)R[F]=0}function S(R){y(R,0)}function y(R,F){const rt=f.newAttributes,$=f.enabledAttributes,ct=f.attributeDivisors;rt[R]=1,$[R]===0&&(o.enableVertexAttribArray(R),$[R]=1),ct[R]!==F&&(o.vertexAttribDivisor(R,F),ct[R]=F)}function O(){const R=f.newAttributes,F=f.enabledAttributes;for(let rt=0,$=F.length;rt<$;rt++)F[rt]!==R[rt]&&(o.disableVertexAttribArray(rt),F[rt]=0)}function L(R,F,rt,$,ct,ot,B){B===!0?o.vertexAttribIPointer(R,F,rt,ct,ot):o.vertexAttribPointer(R,F,rt,$,ct,ot)}function N(R,F,rt,$){b();const ct=$.attributes,ot=rt.getAttributes(),B=F.defaultAttributeValues;for(const tt in ot){const W=ot[tt];if(W.location>=0){let gt=ct[tt];if(gt===void 0&&(tt==="instanceMatrix"&&R.instanceMatrix&&(gt=R.instanceMatrix),tt==="instanceColor"&&R.instanceColor&&(gt=R.instanceColor)),gt!==void 0){const yt=gt.normalized,Ct=gt.itemSize,Qt=e.get(gt);if(Qt===void 0)continue;const de=Qt.buffer,U=Qt.type,Y=Qt.bytesPerElement,ht=U===o.INT||U===o.UNSIGNED_INT||gt.gpuType===Pp;if(gt.isInterleavedBufferAttribute){const st=gt.data,Mt=st.stride,Bt=gt.offset;if(st.isInstancedInterleavedBuffer){for(let Et=0;Et<W.locationSize;Et++)y(W.location+Et,st.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Et=0;Et<W.locationSize;Et++)S(W.location+Et);o.bindBuffer(o.ARRAY_BUFFER,de);for(let Et=0;Et<W.locationSize;Et++)L(W.location+Et,Ct/W.locationSize,U,yt,Mt*Y,(Bt+Ct/W.locationSize*Et)*Y,ht)}else{if(gt.isInstancedBufferAttribute){for(let st=0;st<W.locationSize;st++)y(W.location+st,gt.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let st=0;st<W.locationSize;st++)S(W.location+st);o.bindBuffer(o.ARRAY_BUFFER,de);for(let st=0;st<W.locationSize;st++)L(W.location+st,Ct/W.locationSize,U,yt,Ct*Y,Ct/W.locationSize*st*Y,ht)}}else if(B!==void 0){const yt=B[tt];if(yt!==void 0)switch(yt.length){case 2:o.vertexAttrib2fv(W.location,yt);break;case 3:o.vertexAttrib3fv(W.location,yt);break;case 4:o.vertexAttrib4fv(W.location,yt);break;default:o.vertexAttrib1fv(W.location,yt)}}}}O()}function V(){H();for(const R in r){const F=r[R];for(const rt in F){const $=F[rt];for(const ct in $)x($[ct].object),delete $[ct];delete F[rt]}delete r[R]}}function G(R){if(r[R.id]===void 0)return;const F=r[R.id];for(const rt in F){const $=F[rt];for(const ct in $)x($[ct].object),delete $[ct];delete F[rt]}delete r[R.id]}function P(R){for(const F in r){const rt=r[F];if(rt[R.id]===void 0)continue;const $=rt[R.id];for(const ct in $)x($[ct].object),delete $[ct];delete rt[R.id]}}function H(){D(),d=!0,f!==c&&(f=c,_(f.object))}function D(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:H,resetDefaultState:D,dispose:V,releaseStatesOfGeometry:G,releaseStatesOfProgram:P,initAttributes:b,enableAttribute:S,disableUnusedAttributes:O}}function qA(o,e,i){let r;function c(_){r=_}function f(_,x){o.drawArrays(r,_,x),i.update(x,r,1)}function d(_,x,m){m!==0&&(o.drawArraysInstanced(r,_,x,m),i.update(x,r,m))}function h(_,x,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,_,0,x,0,m);let M=0;for(let E=0;E<m;E++)M+=x[E];i.update(M,r,1)}function p(_,x,m,g){if(m===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<_.length;E++)d(_[E],x[E],g[E]);else{M.multiDrawArraysInstancedWEBGL(r,_,0,x,0,g,0,m);let E=0;for(let b=0;b<m;b++)E+=x[b]*g[b];i.update(E,r,1)}}this.setMode=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function WA(o,e,i,r){let c;function f(){if(c!==void 0)return c;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");c=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else c=0;return c}function d(P){return!(P!==Li&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const H=P===xl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Ra&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ta&&!H)}function p(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let _=i.precision!==void 0?i.precision:"highp";const x=p(_);x!==_&&(console.warn("THREE.WebGLRenderer:",_,"not supported, using",x,"instead."),_=x);const m=i.logarithmicDepthBuffer===!0,g=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),O=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=E>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:_,logarithmicDepthBuffer:m,reverseDepthBuffer:g,maxTextures:M,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:O,maxVaryings:L,maxFragmentUniforms:N,vertexTextures:V,maxSamples:G}}function YA(o){const e=this;let i=null,r=0,c=!1,f=!1;const d=new qs,h=new ge,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const M=m.length!==0||g||r!==0||c;return c=g,r=m.length,M},this.beginShadows=function(){f=!0,x(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(m,g){i=x(m,g,0)},this.setState=function(m,g,M){const E=m.clippingPlanes,b=m.clipIntersection,S=m.clipShadows,y=o.get(m);if(!c||E===null||E.length===0||f&&!S)f?x(null):_();else{const O=f?0:r,L=O*4;let N=y.clippingState||null;p.value=N,N=x(E,g,L,M);for(let V=0;V!==L;++V)N[V]=i[V];y.clippingState=N,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=O}};function _(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(m,g,M,E){const b=m!==null?m.length:0;let S=null;if(b!==0){if(S=p.value,E!==!0||S===null){const y=M+b*4,O=g.matrixWorldInverse;h.getNormalMatrix(O),(S===null||S.length<y)&&(S=new Float32Array(y));for(let L=0,N=M;L!==b;++L,N+=4)d.copy(m[L]).applyMatrix4(O,h),d.normal.toArray(S,N),S[N+3]=d.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,S}}function ZA(o){let e=new WeakMap;function i(d,h){return h===ep?d.mapping=oo:h===np&&(d.mapping=lo),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===ep||h===np)if(e.has(d)){const p=e.get(d).texture;return i(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const _=new qb(p.height);return _.fromEquirectangularTexture(o,d),e.set(d,_),d.addEventListener("dispose",c),i(_.texture,d.mapping)}else return null}}return d}function c(d){const h=d.target;h.removeEventListener("dispose",c);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function f(){e=new WeakMap}return{get:r,dispose:f}}const eo=4,H_=[.125,.215,.35,.446,.526,.582],Zs=20,Ih=new Xx,G_=new he;let Bh=null,Fh=0,Hh=0,Gh=!1;const Ws=(1+Math.sqrt(5))/2,Jr=1/Ws,V_=[new nt(-Ws,Jr,0),new nt(Ws,Jr,0),new nt(-Jr,0,Ws),new nt(Jr,0,Ws),new nt(0,Ws,-Jr),new nt(0,Ws,Jr),new nt(-1,1,-1),new nt(1,1,-1),new nt(-1,1,1),new nt(1,1,1)],KA=new nt;class k_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,c=100,f={}){const{size:d=256,position:h=KA}=f;Bh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,c,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=q_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=X_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bh,Fh,Hh),this._renderer.xr.enabled=Gh,e.scissorTest=!1,pu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===oo||e.mapping===lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ki,minFilter:Ki,generateMipmaps:!1,type:xl,format:Li,colorSpace:fo,depthBuffer:!1},c=j_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=j_(e,i,r);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=QA(f)),this._blurMaterial=$A(f,e,i)}return c}_compileMaterial(e){const i=new Ce(this._lodPlanes[0],e);this._renderer.compile(i,Ih)}_sceneToCubeUV(e,i,r,c,f){const p=new Mi(90,1,i,r),_=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,M=m.toneMapping;m.getClearColor(G_),m.toneMapping=fs,m.autoClear=!1;const E=new kp({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1}),b=new Ce(new Zi,E);let S=!1;const y=e.background;y?y.isColor&&(E.color.copy(y),e.background=null,S=!0):(E.color.copy(G_),S=!0);for(let O=0;O<6;O++){const L=O%3;L===0?(p.up.set(0,_[O],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x+x[O],f.y,f.z)):L===1?(p.up.set(0,0,_[O]),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y+x[O],f.z)):(p.up.set(0,_[O],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y,f.z+x[O]));const N=this._cubeSize;pu(c,L*N,O>2?N:0,N,N),m.setRenderTarget(c),S&&m.render(b,p),m.render(e,p)}b.geometry.dispose(),b.material.dispose(),m.toneMapping=M,m.autoClear=g,e.background=y}_textureToCubeUV(e,i){const r=this._renderer,c=e.mapping===oo||e.mapping===lo;c?(this._cubemapMaterial===null&&(this._cubemapMaterial=q_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=X_());const f=c?this._cubemapMaterial:this._equirectMaterial,d=new Ce(this._lodPlanes[0],f),h=f.uniforms;h.envMap.value=e;const p=this._cubeSize;pu(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(d,Ih)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const c=this._lodPlanes.length;for(let f=1;f<c;f++){const d=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),h=V_[(c-f-1)%V_.length];this._blur(e,f-1,f,d,h)}i.autoClear=r}_blur(e,i,r,c,f){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,c,"latitudinal",f),this._halfBlur(d,e,r,r,c,"longitudinal",f)}_halfBlur(e,i,r,c,f,d,h){const p=this._renderer,_=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,m=new Ce(this._lodPlanes[c],_),g=_.uniforms,M=this._sizeLods[r]-1,E=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*Zs-1),b=f/E,S=isFinite(f)?1+Math.floor(x*b):Zs;S>Zs&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Zs}`);const y=[];let O=0;for(let P=0;P<Zs;++P){const H=P/b,D=Math.exp(-H*H/2);y.push(D),P===0?O+=D:P<S&&(O+=2*D)}for(let P=0;P<y.length;P++)y[P]=y[P]/O;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=y,g.latitudinal.value=d==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:L}=this;g.dTheta.value=E,g.mipInt.value=L-r;const N=this._sizeLods[c],V=3*N*(c>L-eo?c-L+eo:0),G=4*(this._cubeSize-N);pu(i,V,G,3*N,2*N),p.setRenderTarget(i),p.render(m,Ih)}}function QA(o){const e=[],i=[],r=[];let c=o;const f=o-eo+1+H_.length;for(let d=0;d<f;d++){const h=Math.pow(2,c);i.push(h);let p=1/h;d>o-eo?p=H_[d-o+eo-1]:d===0&&(p=0),r.push(p);const _=1/(h-2),x=-_,m=1+_,g=[x,x,m,x,m,m,x,x,m,m,x,m],M=6,E=6,b=3,S=2,y=1,O=new Float32Array(b*E*M),L=new Float32Array(S*E*M),N=new Float32Array(y*E*M);for(let G=0;G<M;G++){const P=G%3*2/3-1,H=G>2?0:-1,D=[P,H,0,P+2/3,H,0,P+2/3,H+1,0,P,H,0,P+2/3,H+1,0,P,H+1,0];O.set(D,b*E*G),L.set(g,S*E*G);const R=[G,G,G,G,G,G];N.set(R,y*E*G)}const V=new zi;V.setAttribute("position",new Qi(O,b)),V.setAttribute("uv",new Qi(L,S)),V.setAttribute("faceIndex",new Qi(N,y)),e.push(V),c>eo&&c--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function j_(o,e,i){const r=new Js(o,e,i);return r.texture.mapping=wu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function pu(o,e,i,r,c){o.viewport.set(e,i,r,c),o.scissor.set(e,i,r,c)}function $A(o,e,i){const r=new Float32Array(Zs),c=new nt(0,1,0);return new hs({name:"SphericalGaussianBlur",defines:{n:Zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:Wp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:us,depthTest:!1,depthWrite:!1})}function X_(){return new hs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:us,depthTest:!1,depthWrite:!1})}function q_(){return new hs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:us,depthTest:!1,depthWrite:!1})}function Wp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function JA(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const p=h.mapping,_=p===ep||p===np,x=p===oo||p===lo;if(_||x){let m=e.get(h);const g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return i===null&&(i=new k_(o)),m=_?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const M=h.image;return _&&M&&M.height>0||x&&M&&c(M)?(i===null&&(i=new k_(o)),m=_?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",f),m.texture):null}}}return h}function c(h){let p=0;const _=6;for(let x=0;x<_;x++)h[x]!==void 0&&p++;return p===_}function f(h){const p=h.target;p.removeEventListener("dispose",f);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function t2(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let c;switch(r){case"WEBGL_depth_texture":c=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":c=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":c=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":c=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:c=o.getExtension(r)}return e[r]=c,c}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const c=i(r);return c===null&&Xs("THREE.WebGLRenderer: "+r+" extension not supported."),c}}}function e2(o,e,i,r){const c={},f=new WeakMap;function d(m){const g=m.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",d),delete c[g.id];const M=f.get(g);M&&(e.remove(M),f.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(m,g){return c[g.id]===!0||(g.addEventListener("dispose",d),c[g.id]=!0,i.memory.geometries++),g}function p(m){const g=m.attributes;for(const M in g)e.update(g[M],o.ARRAY_BUFFER)}function _(m){const g=[],M=m.index,E=m.attributes.position;let b=0;if(M!==null){const O=M.array;b=M.version;for(let L=0,N=O.length;L<N;L+=3){const V=O[L+0],G=O[L+1],P=O[L+2];g.push(V,G,G,P,P,V)}}else if(E!==void 0){const O=E.array;b=E.version;for(let L=0,N=O.length/3-1;L<N;L+=3){const V=L+0,G=L+1,P=L+2;g.push(V,G,G,P,P,V)}}else return;const S=new(Ux(g)?Bx:Ix)(g,1);S.version=b;const y=f.get(m);y&&e.remove(y),f.set(m,S)}function x(m){const g=f.get(m);if(g){const M=m.index;M!==null&&g.version<M.version&&_(m)}else _(m);return f.get(m)}return{get:h,update:p,getWireframeAttribute:x}}function n2(o,e,i){let r;function c(g){r=g}let f,d;function h(g){f=g.type,d=g.bytesPerElement}function p(g,M){o.drawElements(r,M,f,g*d),i.update(M,r,1)}function _(g,M,E){E!==0&&(o.drawElementsInstanced(r,M,f,g*d,E),i.update(M,r,E))}function x(g,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,f,g,0,E);let S=0;for(let y=0;y<E;y++)S+=M[y];i.update(S,r,1)}function m(g,M,E,b){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<g.length;y++)_(g[y]/d,M[y],b[y]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,f,g,0,b,0,E);let y=0;for(let O=0;O<E;O++)y+=M[O]*b[O];i.update(y,r,1)}}this.setMode=c,this.setIndex=h,this.render=p,this.renderInstances=_,this.renderMultiDraw=x,this.renderMultiDrawInstances=m}function i2(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(f,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(f/3);break;case o.LINES:i.lines+=h*(f/2);break;case o.LINE_STRIP:i.lines+=h*(f-1);break;case o.LINE_LOOP:i.lines+=h*f;break;case o.POINTS:i.points+=h*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function c(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:c,update:r}}function a2(o,e,i){const r=new WeakMap,c=new cn;function f(d,h,p){const _=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=x!==void 0?x.length:0;let g=r.get(h);if(g===void 0||g.count!==m){let R=function(){H.dispose(),r.delete(h),h.removeEventListener("dispose",R)};var M=R;g!==void 0&&g.texture.dispose();const E=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let N=0;E===!0&&(N=1),b===!0&&(N=2),S===!0&&(N=3);let V=h.attributes.position.count*N,G=1;V>e.maxTextureSize&&(G=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const P=new Float32Array(V*G*4*m),H=new Lx(P,V,G,m);H.type=Ta,H.needsUpdate=!0;const D=N*4;for(let F=0;F<m;F++){const rt=y[F],$=O[F],ct=L[F],ot=V*G*4*F;for(let B=0;B<rt.count;B++){const tt=B*D;E===!0&&(c.fromBufferAttribute(rt,B),P[ot+tt+0]=c.x,P[ot+tt+1]=c.y,P[ot+tt+2]=c.z,P[ot+tt+3]=0),b===!0&&(c.fromBufferAttribute($,B),P[ot+tt+4]=c.x,P[ot+tt+5]=c.y,P[ot+tt+6]=c.z,P[ot+tt+7]=0),S===!0&&(c.fromBufferAttribute(ct,B),P[ot+tt+8]=c.x,P[ot+tt+9]=c.y,P[ot+tt+10]=c.z,P[ot+tt+11]=ct.itemSize===4?c.w:1)}}g={count:m,texture:H,size:new Oe(V,G)},r.set(h,g),h.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let E=0;for(let S=0;S<_.length;S++)E+=_[S];const b=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(o,"morphTargetBaseInfluence",b),p.getUniforms().setValue(o,"morphTargetInfluences",_)}p.getUniforms().setValue(o,"morphTargetsTexture",g.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:f}}function s2(o,e,i,r){let c=new WeakMap;function f(p){const _=r.render.frame,x=p.geometry,m=e.get(p,x);if(c.get(m)!==_&&(e.update(m),c.set(m,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),c.get(p)!==_&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const g=p.skeleton;c.get(g)!==_&&(g.update(),c.set(g,_))}return m}function d(){c=new WeakMap}function h(p){const _=p.target;_.removeEventListener("dispose",h),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:d}}const Wx=new ti,W_=new kx(1,1),Yx=new Lx,Zx=new Cb,Kx=new Gx,Y_=[],Z_=[],K_=new Float32Array(16),Q_=new Float32Array(9),$_=new Float32Array(4);function go(o,e,i){const r=o[0];if(r<=0||r>0)return o;const c=e*i;let f=Y_[c];if(f===void 0&&(f=new Float32Array(c),Y_[c]=f),e!==0){r.toArray(f,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(f,h)}return f}function Sn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function Mn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Nu(o,e){let i=Z_[e];i===void 0&&(i=new Int32Array(e),Z_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function r2(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function o2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2fv(this.addr,e),Mn(i,e)}}function l2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Sn(i,e))return;o.uniform3fv(this.addr,e),Mn(i,e)}}function c2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4fv(this.addr,e),Mn(i,e)}}function u2(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,r))return;$_.set(r),o.uniformMatrix2fv(this.addr,!1,$_),Mn(i,r)}}function f2(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,r))return;Q_.set(r),o.uniformMatrix3fv(this.addr,!1,Q_),Mn(i,r)}}function d2(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,r))return;K_.set(r),o.uniformMatrix4fv(this.addr,!1,K_),Mn(i,r)}}function h2(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function p2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2iv(this.addr,e),Mn(i,e)}}function m2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;o.uniform3iv(this.addr,e),Mn(i,e)}}function g2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4iv(this.addr,e),Mn(i,e)}}function v2(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function _2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2uiv(this.addr,e),Mn(i,e)}}function x2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;o.uniform3uiv(this.addr,e),Mn(i,e)}}function y2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4uiv(this.addr,e),Mn(i,e)}}function S2(o,e,i){const r=this.cache,c=i.allocateTextureUnit();r[0]!==c&&(o.uniform1i(this.addr,c),r[0]=c);let f;this.type===o.SAMPLER_2D_SHADOW?(W_.compareFunction=Dx,f=W_):f=Wx,i.setTexture2D(e||f,c)}function M2(o,e,i){const r=this.cache,c=i.allocateTextureUnit();r[0]!==c&&(o.uniform1i(this.addr,c),r[0]=c),i.setTexture3D(e||Zx,c)}function b2(o,e,i){const r=this.cache,c=i.allocateTextureUnit();r[0]!==c&&(o.uniform1i(this.addr,c),r[0]=c),i.setTextureCube(e||Kx,c)}function E2(o,e,i){const r=this.cache,c=i.allocateTextureUnit();r[0]!==c&&(o.uniform1i(this.addr,c),r[0]=c),i.setTexture2DArray(e||Yx,c)}function T2(o){switch(o){case 5126:return r2;case 35664:return o2;case 35665:return l2;case 35666:return c2;case 35674:return u2;case 35675:return f2;case 35676:return d2;case 5124:case 35670:return h2;case 35667:case 35671:return p2;case 35668:case 35672:return m2;case 35669:case 35673:return g2;case 5125:return v2;case 36294:return _2;case 36295:return x2;case 36296:return y2;case 35678:case 36198:case 36298:case 36306:case 35682:return S2;case 35679:case 36299:case 36307:return M2;case 35680:case 36300:case 36308:case 36293:return b2;case 36289:case 36303:case 36311:case 36292:return E2}}function A2(o,e){o.uniform1fv(this.addr,e)}function w2(o,e){const i=go(e,this.size,2);o.uniform2fv(this.addr,i)}function R2(o,e){const i=go(e,this.size,3);o.uniform3fv(this.addr,i)}function C2(o,e){const i=go(e,this.size,4);o.uniform4fv(this.addr,i)}function N2(o,e){const i=go(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function D2(o,e){const i=go(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function U2(o,e){const i=go(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function L2(o,e){o.uniform1iv(this.addr,e)}function O2(o,e){o.uniform2iv(this.addr,e)}function z2(o,e){o.uniform3iv(this.addr,e)}function P2(o,e){o.uniform4iv(this.addr,e)}function I2(o,e){o.uniform1uiv(this.addr,e)}function B2(o,e){o.uniform2uiv(this.addr,e)}function F2(o,e){o.uniform3uiv(this.addr,e)}function H2(o,e){o.uniform4uiv(this.addr,e)}function G2(o,e,i){const r=this.cache,c=e.length,f=Nu(i,c);Sn(r,f)||(o.uniform1iv(this.addr,f),Mn(r,f));for(let d=0;d!==c;++d)i.setTexture2D(e[d]||Wx,f[d])}function V2(o,e,i){const r=this.cache,c=e.length,f=Nu(i,c);Sn(r,f)||(o.uniform1iv(this.addr,f),Mn(r,f));for(let d=0;d!==c;++d)i.setTexture3D(e[d]||Zx,f[d])}function k2(o,e,i){const r=this.cache,c=e.length,f=Nu(i,c);Sn(r,f)||(o.uniform1iv(this.addr,f),Mn(r,f));for(let d=0;d!==c;++d)i.setTextureCube(e[d]||Kx,f[d])}function j2(o,e,i){const r=this.cache,c=e.length,f=Nu(i,c);Sn(r,f)||(o.uniform1iv(this.addr,f),Mn(r,f));for(let d=0;d!==c;++d)i.setTexture2DArray(e[d]||Yx,f[d])}function X2(o){switch(o){case 5126:return A2;case 35664:return w2;case 35665:return R2;case 35666:return C2;case 35674:return N2;case 35675:return D2;case 35676:return U2;case 5124:case 35670:return L2;case 35667:case 35671:return O2;case 35668:case 35672:return z2;case 35669:case 35673:return P2;case 5125:return I2;case 36294:return B2;case 36295:return F2;case 36296:return H2;case 35678:case 36198:case 36298:case 36306:case 35682:return G2;case 35679:case 36299:case 36307:return V2;case 35680:case 36300:case 36308:case 36293:return k2;case 36289:case 36303:case 36311:case 36292:return j2}}class q2{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=T2(i.type)}}class W2{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=X2(i.type)}}class Y2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const c=this.seq;for(let f=0,d=c.length;f!==d;++f){const h=c[f];h.setValue(e,i[h.id],r)}}}const Vh=/(\w+)(\])?(\[|\.)?/g;function J_(o,e){o.seq.push(e),o.map[e.id]=e}function Z2(o,e,i){const r=o.name,c=r.length;for(Vh.lastIndex=0;;){const f=Vh.exec(r),d=Vh.lastIndex;let h=f[1];const p=f[2]==="]",_=f[3];if(p&&(h=h|0),_===void 0||_==="["&&d+2===c){J_(i,_===void 0?new q2(h,o,e):new W2(h,o,e));break}else{let m=i.map[h];m===void 0&&(m=new Y2(h),J_(i,m)),i=m}}}class Su{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const f=e.getActiveUniform(i,c),d=e.getUniformLocation(i,f.name);Z2(f,d,this)}}setValue(e,i,r,c){const f=this.map[i];f!==void 0&&f.setValue(e,r,c)}setOptional(e,i,r){const c=i[r];c!==void 0&&this.setValue(e,r,c)}static upload(e,i,r,c){for(let f=0,d=i.length;f!==d;++f){const h=i[f],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,c)}}static seqWithValue(e,i){const r=[];for(let c=0,f=e.length;c!==f;++c){const d=e[c];d.id in i&&r.push(d)}return r}}function tx(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const K2=37297;let Q2=0;function $2(o,e){const i=o.split(`
`),r=[],c=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let d=c;d<f;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const ex=new ge;function J2(o){Le._getMatrix(ex,Le.workingColorSpace,o);const e=`mat3( ${ex.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(o)){case Mu:return[e,"LinearTransferOETF"];case ke:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function nx(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),c=o.getShaderInfoLog(e).trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+$2(o.getShaderSource(e),d)}else return c}function tw(o,e){const i=J2(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function ew(o,e){let i;switch(e){case eb:i="Linear";break;case nb:i="Reinhard";break;case ib:i="Cineon";break;case ab:i="ACESFilmic";break;case rb:i="AgX";break;case ob:i="Neutral";break;case sb:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const mu=new nt;function nw(){Le.getLuminanceCoefficients(mu);const o=mu.x.toFixed(4),e=mu.y.toFixed(4),i=mu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iw(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vl).join(`
`)}function aw(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function sw(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let c=0;c<r;c++){const f=o.getActiveAttrib(e,c),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),i[d]={type:f.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function vl(o){return o!==""}function ix(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ax(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Up(o){return o.replace(rw,lw)}const ow=new Map;function lw(o,e){let i=_e[e];if(i===void 0){const r=ow.get(e);if(r!==void 0)i=_e[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Up(i)}const cw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sx(o){return o.replace(cw,uw)}function uw(o,e,i,r){let c="";for(let f=parseInt(e);f<parseInt(i);f++)c+=r.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return c}function rx(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fw(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===gx?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===vx?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ma&&(e="SHADOWMAP_TYPE_VSM"),e}function dw(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case oo:case lo:e="ENVMAP_TYPE_CUBE";break;case wu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hw(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case lo:e="ENVMAP_MODE_REFRACTION";break}return e}function pw(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case _x:e="ENVMAP_BLENDING_MULTIPLY";break;case J1:e="ENVMAP_BLENDING_MIX";break;case tb:e="ENVMAP_BLENDING_ADD";break}return e}function mw(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function gw(o,e,i,r){const c=o.getContext(),f=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=fw(i),_=dw(i),x=hw(i),m=pw(i),g=mw(i),M=iw(i),E=aw(f),b=c.createProgram();let S,y,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(vl).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(vl).join(`
`),y.length>0&&(y+=`
`)):(S=[rx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vl).join(`
`),y=[rx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",i.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==fs?"#define TONE_MAPPING":"",i.toneMapping!==fs?_e.tonemapping_pars_fragment:"",i.toneMapping!==fs?ew("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,tw("linearToOutputTexel",i.outputColorSpace),nw(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(vl).join(`
`)),d=Up(d),d=ix(d,i),d=ax(d,i),h=Up(h),h=ix(h,i),h=ax(h,i),d=sx(d),h=sx(h),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",i.glslVersion===m_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===m_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=O+S+d,N=O+y+h,V=tx(c,c.VERTEX_SHADER,L),G=tx(c,c.FRAGMENT_SHADER,N);c.attachShader(b,V),c.attachShader(b,G),i.index0AttributeName!==void 0?c.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&c.bindAttribLocation(b,0,"position"),c.linkProgram(b);function P(F){if(o.debug.checkShaderErrors){const rt=c.getProgramInfoLog(b).trim(),$=c.getShaderInfoLog(V).trim(),ct=c.getShaderInfoLog(G).trim();let ot=!0,B=!0;if(c.getProgramParameter(b,c.LINK_STATUS)===!1)if(ot=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(c,b,V,G);else{const tt=nx(c,V,"vertex"),W=nx(c,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(b,c.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+rt+`
`+tt+`
`+W)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):($===""||ct==="")&&(B=!1);B&&(F.diagnostics={runnable:ot,programLog:rt,vertexShader:{log:$,prefix:S},fragmentShader:{log:ct,prefix:y}})}c.deleteShader(V),c.deleteShader(G),H=new Su(c,b),D=sw(c,b)}let H;this.getUniforms=function(){return H===void 0&&P(this),H};let D;this.getAttributes=function(){return D===void 0&&P(this),D};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=c.getProgramParameter(b,K2)),R},this.destroy=function(){r.releaseStatesOfProgram(this),c.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Q2++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=V,this.fragmentShader=G,this}let vw=0;class _w{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,c=this._getShaderStage(i),f=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(c)===!1&&(d.add(c),c.usedTimes++),d.has(f)===!1&&(d.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new xw(e),i.set(e,r)),r}}class xw{constructor(e){this.id=vw++,this.code=e,this.usedTimes=0}}function yw(o,e,i,r,c,f,d){const h=new zx,p=new _w,_=new Set,x=[],m=c.logarithmicDepthBuffer,g=c.vertexTextures;let M=c.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(D){return _.add(D),D===0?"uv":`uv${D}`}function S(D,R,F,rt,$){const ct=rt.fog,ot=$.geometry,B=D.isMeshStandardMaterial?rt.environment:null,tt=(D.isMeshStandardMaterial?i:e).get(D.envMap||B),W=tt&&tt.mapping===wu?tt.image.height:null,gt=E[D.type];D.precision!==null&&(M=c.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const yt=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Ct=yt!==void 0?yt.length:0;let Qt=0;ot.morphAttributes.position!==void 0&&(Qt=1),ot.morphAttributes.normal!==void 0&&(Qt=2),ot.morphAttributes.color!==void 0&&(Qt=3);let de,U,Y,ht;if(gt){const le=Yi[gt];de=le.vertexShader,U=le.fragmentShader}else de=D.vertexShader,U=D.fragmentShader,p.update(D),Y=p.getVertexShaderID(D),ht=p.getFragmentShaderID(D);const st=o.getRenderTarget(),Mt=o.state.buffers.depth.getReversed(),Bt=$.isInstancedMesh===!0,Et=$.isBatchedMesh===!0,St=!!D.map,wt=!!D.matcap,Zt=!!tt,k=!!D.aoMap,nn=!!D.lightMap,te=!!D.bumpMap,$t=!!D.normalMap,Rt=!!D.displacementMap,ue=!!D.emissiveMap,qt=!!D.metalnessMap,z=!!D.roughnessMap,w=D.anisotropy>0,at=D.clearcoat>0,_t=D.dispersion>0,bt=D.iridescence>0,vt=D.sheen>0,jt=D.transmission>0,Nt=w&&!!D.anisotropyMap,Ft=at&&!!D.clearcoatMap,ve=at&&!!D.clearcoatNormalMap,At=at&&!!D.clearcoatRoughnessMap,Vt=bt&&!!D.iridescenceMap,ee=bt&&!!D.iridescenceThicknessMap,ie=vt&&!!D.sheenColorMap,Gt=vt&&!!D.sheenRoughnessMap,se=!!D.specularMap,fe=!!D.specularColorMap,ze=!!D.specularIntensityMap,X=jt&&!!D.transmissionMap,Ot=jt&&!!D.thicknessMap,dt=!!D.gradientMap,xt=!!D.alphaMap,Pt=D.alphaTest>0,It=!!D.alphaHash,re=!!D.extensions;let je=fs;D.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(je=o.toneMapping);const un={shaderID:gt,shaderType:D.type,shaderName:D.name,vertexShader:de,fragmentShader:U,defines:D.defines,customVertexShaderID:Y,customFragmentShaderID:ht,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Et,batchingColor:Et&&$._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&$.instanceColor!==null,instancingMorph:Bt&&$.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:st===null?o.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:fo,alphaToCoverage:!!D.alphaToCoverage,map:St,matcap:wt,envMap:Zt,envMapMode:Zt&&tt.mapping,envMapCubeUVHeight:W,aoMap:k,lightMap:nn,bumpMap:te,normalMap:$t,displacementMap:g&&Rt,emissiveMap:ue,normalMapObjectSpace:$t&&D.normalMapType===fb,normalMapTangentSpace:$t&&D.normalMapType===Nx,metalnessMap:qt,roughnessMap:z,anisotropy:w,anisotropyMap:Nt,clearcoat:at,clearcoatMap:Ft,clearcoatNormalMap:ve,clearcoatRoughnessMap:At,dispersion:_t,iridescence:bt,iridescenceMap:Vt,iridescenceThicknessMap:ee,sheen:vt,sheenColorMap:ie,sheenRoughnessMap:Gt,specularMap:se,specularColorMap:fe,specularIntensityMap:ze,transmission:jt,transmissionMap:X,thicknessMap:Ot,gradientMap:dt,opaque:D.transparent===!1&&D.blending===no&&D.alphaToCoverage===!1,alphaMap:xt,alphaTest:Pt,alphaHash:It,combine:D.combine,mapUv:St&&b(D.map.channel),aoMapUv:k&&b(D.aoMap.channel),lightMapUv:nn&&b(D.lightMap.channel),bumpMapUv:te&&b(D.bumpMap.channel),normalMapUv:$t&&b(D.normalMap.channel),displacementMapUv:Rt&&b(D.displacementMap.channel),emissiveMapUv:ue&&b(D.emissiveMap.channel),metalnessMapUv:qt&&b(D.metalnessMap.channel),roughnessMapUv:z&&b(D.roughnessMap.channel),anisotropyMapUv:Nt&&b(D.anisotropyMap.channel),clearcoatMapUv:Ft&&b(D.clearcoatMap.channel),clearcoatNormalMapUv:ve&&b(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&b(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&b(D.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&b(D.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&b(D.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&b(D.sheenRoughnessMap.channel),specularMapUv:se&&b(D.specularMap.channel),specularColorMapUv:fe&&b(D.specularColorMap.channel),specularIntensityMapUv:ze&&b(D.specularIntensityMap.channel),transmissionMapUv:X&&b(D.transmissionMap.channel),thicknessMapUv:Ot&&b(D.thicknessMap.channel),alphaMapUv:xt&&b(D.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&($t||w),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ot.attributes.uv&&(St||xt),fog:!!ct,useFog:D.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:Mt,skinning:$.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Qt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:je,decodeVideoTexture:St&&D.map.isVideoTexture===!0&&Le.getTransfer(D.map.colorSpace)===ke,decodeVideoTextureEmissive:ue&&D.emissiveMap.isVideoTexture===!0&&Le.getTransfer(D.emissiveMap.colorSpace)===ke,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ba,flipSided:D.side===Jn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:re&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&D.extensions.multiDraw===!0||Et)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return un.vertexUv1s=_.has(1),un.vertexUv2s=_.has(2),un.vertexUv3s=_.has(3),_.clear(),un}function y(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const F in D.defines)R.push(F),R.push(D.defines[F]);return D.isRawShaderMaterial===!1&&(O(R,D),L(R,D),R.push(o.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function O(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function L(D,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),D.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reverseDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),D.push(h.mask)}function N(D){const R=E[D.type];let F;if(R){const rt=Yi[R];F=Vb.clone(rt.uniforms)}else F=D.uniforms;return F}function V(D,R){let F;for(let rt=0,$=x.length;rt<$;rt++){const ct=x[rt];if(ct.cacheKey===R){F=ct,++F.usedTimes;break}}return F===void 0&&(F=new gw(o,R,D,f),x.push(F)),F}function G(D){if(--D.usedTimes===0){const R=x.indexOf(D);x[R]=x[x.length-1],x.pop(),D.destroy()}}function P(D){p.remove(D)}function H(){p.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:N,acquireProgram:V,releaseProgram:G,releaseShaderCache:P,programs:x,dispose:H}}function Sw(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function c(d,h,p){o.get(d)[h]=p}function f(){o=new WeakMap}return{has:e,get:i,remove:r,update:c,dispose:f}}function Mw(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function ox(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function lx(){const o=[];let e=0;const i=[],r=[],c=[];function f(){e=0,i.length=0,r.length=0,c.length=0}function d(m,g,M,E,b,S){let y=o[e];return y===void 0?(y={id:m.id,object:m,geometry:g,material:M,groupOrder:E,renderOrder:m.renderOrder,z:b,group:S},o[e]=y):(y.id=m.id,y.object=m,y.geometry=g,y.material=M,y.groupOrder=E,y.renderOrder=m.renderOrder,y.z=b,y.group=S),e++,y}function h(m,g,M,E,b,S){const y=d(m,g,M,E,b,S);M.transmission>0?r.push(y):M.transparent===!0?c.push(y):i.push(y)}function p(m,g,M,E,b,S){const y=d(m,g,M,E,b,S);M.transmission>0?r.unshift(y):M.transparent===!0?c.unshift(y):i.unshift(y)}function _(m,g){i.length>1&&i.sort(m||Mw),r.length>1&&r.sort(g||ox),c.length>1&&c.sort(g||ox)}function x(){for(let m=e,g=o.length;m<g;m++){const M=o[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:c,init:f,push:h,unshift:p,finish:x,sort:_}}function bw(){let o=new WeakMap;function e(r,c){const f=o.get(r);let d;return f===void 0?(d=new lx,o.set(r,[d])):c>=f.length?(d=new lx,f.push(d)):d=f[c],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function Ew(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new nt,color:new he};break;case"SpotLight":i={position:new nt,direction:new nt,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new nt,color:new he,distance:0,decay:0};break;case"HemisphereLight":i={direction:new nt,skyColor:new he,groundColor:new he};break;case"RectAreaLight":i={color:new he,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return o[e.id]=i,i}}}function Tw(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let Aw=0;function ww(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Rw(o){const e=new Ew,i=Tw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)r.probe.push(new nt);const c=new nt,f=new sn,d=new sn;function h(_){let x=0,m=0,g=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,E=0,b=0,S=0,y=0,O=0,L=0,N=0,V=0,G=0,P=0;_.sort(ww);for(let D=0,R=_.length;D<R;D++){const F=_[D],rt=F.color,$=F.intensity,ct=F.distance,ot=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)x+=rt.r*$,m+=rt.g*$,g+=rt.b*$;else if(F.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(F.sh.coefficients[B],$);P++}else if(F.isDirectionalLight){const B=e.get(F);if(B.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const tt=F.shadow,W=i.get(F);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,r.directionalShadow[M]=W,r.directionalShadowMap[M]=ot,r.directionalShadowMatrix[M]=F.shadow.matrix,O++}r.directional[M]=B,M++}else if(F.isSpotLight){const B=e.get(F);B.position.setFromMatrixPosition(F.matrixWorld),B.color.copy(rt).multiplyScalar($),B.distance=ct,B.coneCos=Math.cos(F.angle),B.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),B.decay=F.decay,r.spot[b]=B;const tt=F.shadow;if(F.map&&(r.spotLightMap[V]=F.map,V++,tt.updateMatrices(F),F.castShadow&&G++),r.spotLightMatrix[b]=tt.matrix,F.castShadow){const W=i.get(F);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,r.spotShadow[b]=W,r.spotShadowMap[b]=ot,N++}b++}else if(F.isRectAreaLight){const B=e.get(F);B.color.copy(rt).multiplyScalar($),B.halfWidth.set(F.width*.5,0,0),B.halfHeight.set(0,F.height*.5,0),r.rectArea[S]=B,S++}else if(F.isPointLight){const B=e.get(F);if(B.color.copy(F.color).multiplyScalar(F.intensity),B.distance=F.distance,B.decay=F.decay,F.castShadow){const tt=F.shadow,W=i.get(F);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,W.shadowCameraNear=tt.camera.near,W.shadowCameraFar=tt.camera.far,r.pointShadow[E]=W,r.pointShadowMap[E]=ot,r.pointShadowMatrix[E]=F.shadow.matrix,L++}r.point[E]=B,E++}else if(F.isHemisphereLight){const B=e.get(F);B.skyColor.copy(F.color).multiplyScalar($),B.groundColor.copy(F.groundColor).multiplyScalar($),r.hemi[y]=B,y++}}S>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ht.LTC_FLOAT_1,r.rectAreaLTC2=Ht.LTC_FLOAT_2):(r.rectAreaLTC1=Ht.LTC_HALF_1,r.rectAreaLTC2=Ht.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=m,r.ambient[2]=g;const H=r.hash;(H.directionalLength!==M||H.pointLength!==E||H.spotLength!==b||H.rectAreaLength!==S||H.hemiLength!==y||H.numDirectionalShadows!==O||H.numPointShadows!==L||H.numSpotShadows!==N||H.numSpotMaps!==V||H.numLightProbes!==P)&&(r.directional.length=M,r.spot.length=b,r.rectArea.length=S,r.point.length=E,r.hemi.length=y,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=N+V-G,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=P,H.directionalLength=M,H.pointLength=E,H.spotLength=b,H.rectAreaLength=S,H.hemiLength=y,H.numDirectionalShadows=O,H.numPointShadows=L,H.numSpotShadows=N,H.numSpotMaps=V,H.numLightProbes=P,r.version=Aw++)}function p(_,x){let m=0,g=0,M=0,E=0,b=0;const S=x.matrixWorldInverse;for(let y=0,O=_.length;y<O;y++){const L=_[y];if(L.isDirectionalLight){const N=r.directional[m];N.direction.setFromMatrixPosition(L.matrixWorld),c.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(c),N.direction.transformDirection(S),m++}else if(L.isSpotLight){const N=r.spot[M];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(S),N.direction.setFromMatrixPosition(L.matrixWorld),c.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(c),N.direction.transformDirection(S),M++}else if(L.isRectAreaLight){const N=r.rectArea[E];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(S),d.identity(),f.copy(L.matrixWorld),f.premultiply(S),d.extractRotation(f),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),E++}else if(L.isPointLight){const N=r.point[g];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(S),g++}else if(L.isHemisphereLight){const N=r.hemi[b];N.direction.setFromMatrixPosition(L.matrixWorld),N.direction.transformDirection(S),b++}}}return{setup:h,setupView:p,state:r}}function cx(o){const e=new Rw(o),i=[],r=[];function c(x){_.camera=x,i.length=0,r.length=0}function f(x){i.push(x)}function d(x){r.push(x)}function h(){e.setup(i)}function p(x){e.setupView(i,x)}const _={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:c,state:_,setupLights:h,setupLightsView:p,pushLight:f,pushShadow:d}}function Cw(o){let e=new WeakMap;function i(c,f=0){const d=e.get(c);let h;return d===void 0?(h=new cx(o),e.set(c,[h])):f>=d.length?(h=new cx(o),d.push(h)):h=d[f],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const Nw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Uw(o,e,i){let r=new Xp;const c=new Oe,f=new Oe,d=new cn,h=new tE({depthPacking:ub}),p=new eE,_={},x=i.maxTextureSize,m={[ds]:Jn,[Jn]:ds,[ba]:ba},g=new hs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:Nw,fragmentShader:Dw}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const E=new zi;E.setAttribute("position",new Qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ce(E,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gx;let y=this.type;this.render=function(G,P,H){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||G.length===0)return;const D=o.getRenderTarget(),R=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),rt=o.state;rt.setBlending(us),rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const $=y!==Ma&&this.type===Ma,ct=y===Ma&&this.type!==Ma;for(let ot=0,B=G.length;ot<B;ot++){const tt=G[ot],W=tt.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;c.copy(W.mapSize);const gt=W.getFrameExtents();if(c.multiply(gt),f.copy(W.mapSize),(c.x>x||c.y>x)&&(c.x>x&&(f.x=Math.floor(x/gt.x),c.x=f.x*gt.x,W.mapSize.x=f.x),c.y>x&&(f.y=Math.floor(x/gt.y),c.y=f.y*gt.y,W.mapSize.y=f.y)),W.map===null||$===!0||ct===!0){const Ct=this.type!==Ma?{minFilter:Oi,magFilter:Oi}:{};W.map!==null&&W.map.dispose(),W.map=new Js(c.x,c.y,Ct),W.map.texture.name=tt.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const yt=W.getViewportCount();for(let Ct=0;Ct<yt;Ct++){const Qt=W.getViewport(Ct);d.set(f.x*Qt.x,f.y*Qt.y,f.x*Qt.z,f.y*Qt.w),rt.viewport(d),W.updateMatrices(tt,Ct),r=W.getFrustum(),N(P,H,W.camera,tt,this.type)}W.isPointLightShadow!==!0&&this.type===Ma&&O(W,H),W.needsUpdate=!1}y=this.type,S.needsUpdate=!1,o.setRenderTarget(D,R,F)};function O(G,P){const H=e.update(b);g.defines.VSM_SAMPLES!==G.blurSamples&&(g.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Js(c.x,c.y)),g.uniforms.shadow_pass.value=G.map.texture,g.uniforms.resolution.value=G.mapSize,g.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(P,null,H,g,b,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(P,null,H,M,b,null)}function L(G,P,H,D){let R=null;const F=H.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(F!==void 0)R=F;else if(R=H.isPointLight===!0?p:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const rt=R.uuid,$=P.uuid;let ct=_[rt];ct===void 0&&(ct={},_[rt]=ct);let ot=ct[$];ot===void 0&&(ot=R.clone(),ct[$]=ot,P.addEventListener("dispose",V)),R=ot}if(R.visible=P.visible,R.wireframe=P.wireframe,D===Ma?R.side=P.shadowSide!==null?P.shadowSide:P.side:R.side=P.shadowSide!==null?P.shadowSide:m[P.side],R.alphaMap=P.alphaMap,R.alphaTest=P.alphaTest,R.map=P.map,R.clipShadows=P.clipShadows,R.clippingPlanes=P.clippingPlanes,R.clipIntersection=P.clipIntersection,R.displacementMap=P.displacementMap,R.displacementScale=P.displacementScale,R.displacementBias=P.displacementBias,R.wireframeLinewidth=P.wireframeLinewidth,R.linewidth=P.linewidth,H.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const rt=o.properties.get(R);rt.light=H}return R}function N(G,P,H,D,R){if(G.visible===!1)return;if(G.layers.test(P.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&R===Ma)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,G.matrixWorld);const $=e.update(G),ct=G.material;if(Array.isArray(ct)){const ot=$.groups;for(let B=0,tt=ot.length;B<tt;B++){const W=ot[B],gt=ct[W.materialIndex];if(gt&&gt.visible){const yt=L(G,gt,D,R);G.onBeforeShadow(o,G,P,H,$,yt,W),o.renderBufferDirect(H,null,$,yt,G,W),G.onAfterShadow(o,G,P,H,$,yt,W)}}}else if(ct.visible){const ot=L(G,ct,D,R);G.onBeforeShadow(o,G,P,H,$,ot,null),o.renderBufferDirect(H,null,$,ot,G,null),G.onAfterShadow(o,G,P,H,$,ot,null)}}const rt=G.children;for(let $=0,ct=rt.length;$<ct;$++)N(rt[$],P,H,D,R)}function V(G){G.target.removeEventListener("dispose",V);for(const H in _){const D=_[H],R=G.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}const Lw={[Yh]:Zh,[Kh]:Jh,[Qh]:tp,[ro]:$h,[Zh]:Yh,[Jh]:Kh,[tp]:Qh,[$h]:ro};function Ow(o,e){function i(){let X=!1;const Ot=new cn;let dt=null;const xt=new cn(0,0,0,0);return{setMask:function(Pt){dt!==Pt&&!X&&(o.colorMask(Pt,Pt,Pt,Pt),dt=Pt)},setLocked:function(Pt){X=Pt},setClear:function(Pt,It,re,je,un){un===!0&&(Pt*=je,It*=je,re*=je),Ot.set(Pt,It,re,je),xt.equals(Ot)===!1&&(o.clearColor(Pt,It,re,je),xt.copy(Ot))},reset:function(){X=!1,dt=null,xt.set(-1,0,0,0)}}}function r(){let X=!1,Ot=!1,dt=null,xt=null,Pt=null;return{setReversed:function(It){if(Ot!==It){const re=e.get("EXT_clip_control");Ot?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT);const je=Pt;Pt=null,this.setClear(je)}Ot=It},getReversed:function(){return Ot},setTest:function(It){It?st(o.DEPTH_TEST):Mt(o.DEPTH_TEST)},setMask:function(It){dt!==It&&!X&&(o.depthMask(It),dt=It)},setFunc:function(It){if(Ot&&(It=Lw[It]),xt!==It){switch(It){case Yh:o.depthFunc(o.NEVER);break;case Zh:o.depthFunc(o.ALWAYS);break;case Kh:o.depthFunc(o.LESS);break;case ro:o.depthFunc(o.LEQUAL);break;case Qh:o.depthFunc(o.EQUAL);break;case $h:o.depthFunc(o.GEQUAL);break;case Jh:o.depthFunc(o.GREATER);break;case tp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}xt=It}},setLocked:function(It){X=It},setClear:function(It){Pt!==It&&(Ot&&(It=1-It),o.clearDepth(It),Pt=It)},reset:function(){X=!1,dt=null,xt=null,Pt=null,Ot=!1}}}function c(){let X=!1,Ot=null,dt=null,xt=null,Pt=null,It=null,re=null,je=null,un=null;return{setTest:function(le){X||(le?st(o.STENCIL_TEST):Mt(o.STENCIL_TEST))},setMask:function(le){Ot!==le&&!X&&(o.stencilMask(le),Ot=le)},setFunc:function(le,be,$e){(dt!==le||xt!==be||Pt!==$e)&&(o.stencilFunc(le,be,$e),dt=le,xt=be,Pt=$e)},setOp:function(le,be,$e){(It!==le||re!==be||je!==$e)&&(o.stencilOp(le,be,$e),It=le,re=be,je=$e)},setLocked:function(le){X=le},setClear:function(le){un!==le&&(o.clearStencil(le),un=le)},reset:function(){X=!1,Ot=null,dt=null,xt=null,Pt=null,It=null,re=null,je=null,un=null}}}const f=new i,d=new r,h=new c,p=new WeakMap,_=new WeakMap;let x={},m={},g=new WeakMap,M=[],E=null,b=!1,S=null,y=null,O=null,L=null,N=null,V=null,G=null,P=new he(0,0,0),H=0,D=!1,R=null,F=null,rt=null,$=null,ct=null;const ot=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,tt=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=tt>=1):W.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=tt>=2);let gt=null,yt={};const Ct=o.getParameter(o.SCISSOR_BOX),Qt=o.getParameter(o.VIEWPORT),de=new cn().fromArray(Ct),U=new cn().fromArray(Qt);function Y(X,Ot,dt,xt){const Pt=new Uint8Array(4),It=o.createTexture();o.bindTexture(X,It),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let re=0;re<dt;re++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Ot,0,o.RGBA,1,1,xt,0,o.RGBA,o.UNSIGNED_BYTE,Pt):o.texImage2D(Ot+re,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Pt);return It}const ht={};ht[o.TEXTURE_2D]=Y(o.TEXTURE_2D,o.TEXTURE_2D,1),ht[o.TEXTURE_CUBE_MAP]=Y(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[o.TEXTURE_2D_ARRAY]=Y(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ht[o.TEXTURE_3D]=Y(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),st(o.DEPTH_TEST),d.setFunc(ro),te(!1),$t(u_),st(o.CULL_FACE),k(us);function st(X){x[X]!==!0&&(o.enable(X),x[X]=!0)}function Mt(X){x[X]!==!1&&(o.disable(X),x[X]=!1)}function Bt(X,Ot){return m[X]!==Ot?(o.bindFramebuffer(X,Ot),m[X]=Ot,X===o.DRAW_FRAMEBUFFER&&(m[o.FRAMEBUFFER]=Ot),X===o.FRAMEBUFFER&&(m[o.DRAW_FRAMEBUFFER]=Ot),!0):!1}function Et(X,Ot){let dt=M,xt=!1;if(X){dt=g.get(Ot),dt===void 0&&(dt=[],g.set(Ot,dt));const Pt=X.textures;if(dt.length!==Pt.length||dt[0]!==o.COLOR_ATTACHMENT0){for(let It=0,re=Pt.length;It<re;It++)dt[It]=o.COLOR_ATTACHMENT0+It;dt.length=Pt.length,xt=!0}}else dt[0]!==o.BACK&&(dt[0]=o.BACK,xt=!0);xt&&o.drawBuffers(dt)}function St(X){return E!==X?(o.useProgram(X),E=X,!0):!1}const wt={[Ys]:o.FUNC_ADD,[P1]:o.FUNC_SUBTRACT,[I1]:o.FUNC_REVERSE_SUBTRACT};wt[B1]=o.MIN,wt[F1]=o.MAX;const Zt={[H1]:o.ZERO,[G1]:o.ONE,[V1]:o.SRC_COLOR,[qh]:o.SRC_ALPHA,[Y1]:o.SRC_ALPHA_SATURATE,[q1]:o.DST_COLOR,[j1]:o.DST_ALPHA,[k1]:o.ONE_MINUS_SRC_COLOR,[Wh]:o.ONE_MINUS_SRC_ALPHA,[W1]:o.ONE_MINUS_DST_COLOR,[X1]:o.ONE_MINUS_DST_ALPHA,[Z1]:o.CONSTANT_COLOR,[K1]:o.ONE_MINUS_CONSTANT_COLOR,[Q1]:o.CONSTANT_ALPHA,[$1]:o.ONE_MINUS_CONSTANT_ALPHA};function k(X,Ot,dt,xt,Pt,It,re,je,un,le){if(X===us){b===!0&&(Mt(o.BLEND),b=!1);return}if(b===!1&&(st(o.BLEND),b=!0),X!==z1){if(X!==S||le!==D){if((y!==Ys||N!==Ys)&&(o.blendEquation(o.FUNC_ADD),y=Ys,N=Ys),le)switch(X){case no:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Xh:o.blendFunc(o.ONE,o.ONE);break;case f_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case d_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case no:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Xh:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case f_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case d_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}O=null,L=null,V=null,G=null,P.set(0,0,0),H=0,S=X,D=le}return}Pt=Pt||Ot,It=It||dt,re=re||xt,(Ot!==y||Pt!==N)&&(o.blendEquationSeparate(wt[Ot],wt[Pt]),y=Ot,N=Pt),(dt!==O||xt!==L||It!==V||re!==G)&&(o.blendFuncSeparate(Zt[dt],Zt[xt],Zt[It],Zt[re]),O=dt,L=xt,V=It,G=re),(je.equals(P)===!1||un!==H)&&(o.blendColor(je.r,je.g,je.b,un),P.copy(je),H=un),S=X,D=!1}function nn(X,Ot){X.side===ba?Mt(o.CULL_FACE):st(o.CULL_FACE);let dt=X.side===Jn;Ot&&(dt=!dt),te(dt),X.blending===no&&X.transparent===!1?k(us):k(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),f.setMask(X.colorWrite);const xt=X.stencilWrite;h.setTest(xt),xt&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),ue(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?st(o.SAMPLE_ALPHA_TO_COVERAGE):Mt(o.SAMPLE_ALPHA_TO_COVERAGE)}function te(X){R!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),R=X)}function $t(X){X!==L1?(st(o.CULL_FACE),X!==F&&(X===u_?o.cullFace(o.BACK):X===O1?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Mt(o.CULL_FACE),F=X}function Rt(X){X!==rt&&(B&&o.lineWidth(X),rt=X)}function ue(X,Ot,dt){X?(st(o.POLYGON_OFFSET_FILL),($!==Ot||ct!==dt)&&(o.polygonOffset(Ot,dt),$=Ot,ct=dt)):Mt(o.POLYGON_OFFSET_FILL)}function qt(X){X?st(o.SCISSOR_TEST):Mt(o.SCISSOR_TEST)}function z(X){X===void 0&&(X=o.TEXTURE0+ot-1),gt!==X&&(o.activeTexture(X),gt=X)}function w(X,Ot,dt){dt===void 0&&(gt===null?dt=o.TEXTURE0+ot-1:dt=gt);let xt=yt[dt];xt===void 0&&(xt={type:void 0,texture:void 0},yt[dt]=xt),(xt.type!==X||xt.texture!==Ot)&&(gt!==dt&&(o.activeTexture(dt),gt=dt),o.bindTexture(X,Ot||ht[X]),xt.type=X,xt.texture=Ot)}function at(){const X=yt[gt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function _t(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function bt(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function vt(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function jt(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Nt(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ft(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ve(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function At(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Vt(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ee(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ie(X){de.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),de.copy(X))}function Gt(X){U.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),U.copy(X))}function se(X,Ot){let dt=_.get(Ot);dt===void 0&&(dt=new WeakMap,_.set(Ot,dt));let xt=dt.get(X);xt===void 0&&(xt=o.getUniformBlockIndex(Ot,X.name),dt.set(X,xt))}function fe(X,Ot){const xt=_.get(Ot).get(X);p.get(Ot)!==xt&&(o.uniformBlockBinding(Ot,xt,X.__bindingPointIndex),p.set(Ot,xt))}function ze(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},gt=null,yt={},m={},g=new WeakMap,M=[],E=null,b=!1,S=null,y=null,O=null,L=null,N=null,V=null,G=null,P=new he(0,0,0),H=0,D=!1,R=null,F=null,rt=null,$=null,ct=null,de.set(0,0,o.canvas.width,o.canvas.height),U.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:st,disable:Mt,bindFramebuffer:Bt,drawBuffers:Et,useProgram:St,setBlending:k,setMaterial:nn,setFlipSided:te,setCullFace:$t,setLineWidth:Rt,setPolygonOffset:ue,setScissorTest:qt,activeTexture:z,bindTexture:w,unbindTexture:at,compressedTexImage2D:_t,compressedTexImage3D:bt,texImage2D:Vt,texImage3D:ee,updateUBOMapping:se,uniformBlockBinding:fe,texStorage2D:ve,texStorage3D:At,texSubImage2D:vt,texSubImage3D:jt,compressedTexSubImage2D:Nt,compressedTexSubImage3D:Ft,scissor:ie,viewport:Gt,reset:ze}}function zw(o,e,i,r,c,f,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new Oe,x=new WeakMap;let m;const g=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(z,w){return M?new OffscreenCanvas(z,w):Eu("canvas")}function b(z,w,at){let _t=1;const bt=qt(z);if((bt.width>at||bt.height>at)&&(_t=at/Math.max(bt.width,bt.height)),_t<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const vt=Math.floor(_t*bt.width),jt=Math.floor(_t*bt.height);m===void 0&&(m=E(vt,jt));const Nt=w?E(vt,jt):m;return Nt.width=vt,Nt.height=jt,Nt.getContext("2d").drawImage(z,0,0,vt,jt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+vt+"x"+jt+")."),Nt}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),z;return z}function S(z){return z.generateMipmaps}function y(z){o.generateMipmap(z)}function O(z){return z.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?o.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(z,w,at,_t,bt=!1){if(z!==null){if(o[z]!==void 0)return o[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let vt=w;if(w===o.RED&&(at===o.FLOAT&&(vt=o.R32F),at===o.HALF_FLOAT&&(vt=o.R16F),at===o.UNSIGNED_BYTE&&(vt=o.R8)),w===o.RED_INTEGER&&(at===o.UNSIGNED_BYTE&&(vt=o.R8UI),at===o.UNSIGNED_SHORT&&(vt=o.R16UI),at===o.UNSIGNED_INT&&(vt=o.R32UI),at===o.BYTE&&(vt=o.R8I),at===o.SHORT&&(vt=o.R16I),at===o.INT&&(vt=o.R32I)),w===o.RG&&(at===o.FLOAT&&(vt=o.RG32F),at===o.HALF_FLOAT&&(vt=o.RG16F),at===o.UNSIGNED_BYTE&&(vt=o.RG8)),w===o.RG_INTEGER&&(at===o.UNSIGNED_BYTE&&(vt=o.RG8UI),at===o.UNSIGNED_SHORT&&(vt=o.RG16UI),at===o.UNSIGNED_INT&&(vt=o.RG32UI),at===o.BYTE&&(vt=o.RG8I),at===o.SHORT&&(vt=o.RG16I),at===o.INT&&(vt=o.RG32I)),w===o.RGB_INTEGER&&(at===o.UNSIGNED_BYTE&&(vt=o.RGB8UI),at===o.UNSIGNED_SHORT&&(vt=o.RGB16UI),at===o.UNSIGNED_INT&&(vt=o.RGB32UI),at===o.BYTE&&(vt=o.RGB8I),at===o.SHORT&&(vt=o.RGB16I),at===o.INT&&(vt=o.RGB32I)),w===o.RGBA_INTEGER&&(at===o.UNSIGNED_BYTE&&(vt=o.RGBA8UI),at===o.UNSIGNED_SHORT&&(vt=o.RGBA16UI),at===o.UNSIGNED_INT&&(vt=o.RGBA32UI),at===o.BYTE&&(vt=o.RGBA8I),at===o.SHORT&&(vt=o.RGBA16I),at===o.INT&&(vt=o.RGBA32I)),w===o.RGB&&at===o.UNSIGNED_INT_5_9_9_9_REV&&(vt=o.RGB9_E5),w===o.RGBA){const jt=bt?Mu:Le.getTransfer(_t);at===o.FLOAT&&(vt=o.RGBA32F),at===o.HALF_FLOAT&&(vt=o.RGBA16F),at===o.UNSIGNED_BYTE&&(vt=jt===ke?o.SRGB8_ALPHA8:o.RGBA8),at===o.UNSIGNED_SHORT_4_4_4_4&&(vt=o.RGBA4),at===o.UNSIGNED_SHORT_5_5_5_1&&(vt=o.RGB5_A1)}return(vt===o.R16F||vt===o.R32F||vt===o.RG16F||vt===o.RG32F||vt===o.RGBA16F||vt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),vt}function N(z,w){let at;return z?w===null||w===$s||w===co?at=o.DEPTH24_STENCIL8:w===Ta?at=o.DEPTH32F_STENCIL8:w===_l&&(at=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===$s||w===co?at=o.DEPTH_COMPONENT24:w===Ta?at=o.DEPTH_COMPONENT32F:w===_l&&(at=o.DEPTH_COMPONENT16),at}function V(z,w){return S(z)===!0||z.isFramebufferTexture&&z.minFilter!==Oi&&z.minFilter!==Ki?Math.log2(Math.max(w.width,w.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?w.mipmaps.length:1}function G(z){const w=z.target;w.removeEventListener("dispose",G),H(w),w.isVideoTexture&&x.delete(w)}function P(z){const w=z.target;w.removeEventListener("dispose",P),R(w)}function H(z){const w=r.get(z);if(w.__webglInit===void 0)return;const at=z.source,_t=g.get(at);if(_t){const bt=_t[w.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&D(z),Object.keys(_t).length===0&&g.delete(at)}r.remove(z)}function D(z){const w=r.get(z);o.deleteTexture(w.__webglTexture);const at=z.source,_t=g.get(at);delete _t[w.__cacheKey],d.memory.textures--}function R(z){const w=r.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),r.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(w.__webglFramebuffer[_t]))for(let bt=0;bt<w.__webglFramebuffer[_t].length;bt++)o.deleteFramebuffer(w.__webglFramebuffer[_t][bt]);else o.deleteFramebuffer(w.__webglFramebuffer[_t]);w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer[_t])}else{if(Array.isArray(w.__webglFramebuffer))for(let _t=0;_t<w.__webglFramebuffer.length;_t++)o.deleteFramebuffer(w.__webglFramebuffer[_t]);else o.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&o.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let _t=0;_t<w.__webglColorRenderbuffer.length;_t++)w.__webglColorRenderbuffer[_t]&&o.deleteRenderbuffer(w.__webglColorRenderbuffer[_t]);w.__webglDepthRenderbuffer&&o.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const at=z.textures;for(let _t=0,bt=at.length;_t<bt;_t++){const vt=r.get(at[_t]);vt.__webglTexture&&(o.deleteTexture(vt.__webglTexture),d.memory.textures--),r.remove(at[_t])}r.remove(z)}let F=0;function rt(){F=0}function $(){const z=F;return z>=c.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+c.maxTextures),F+=1,z}function ct(z){const w=[];return w.push(z.wrapS),w.push(z.wrapT),w.push(z.wrapR||0),w.push(z.magFilter),w.push(z.minFilter),w.push(z.anisotropy),w.push(z.internalFormat),w.push(z.format),w.push(z.type),w.push(z.generateMipmaps),w.push(z.premultiplyAlpha),w.push(z.flipY),w.push(z.unpackAlignment),w.push(z.colorSpace),w.join()}function ot(z,w){const at=r.get(z);if(z.isVideoTexture&&Rt(z),z.isRenderTargetTexture===!1&&z.version>0&&at.__version!==z.version){const _t=z.image;if(_t===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{U(at,z,w);return}}i.bindTexture(o.TEXTURE_2D,at.__webglTexture,o.TEXTURE0+w)}function B(z,w){const at=r.get(z);if(z.version>0&&at.__version!==z.version){U(at,z,w);return}i.bindTexture(o.TEXTURE_2D_ARRAY,at.__webglTexture,o.TEXTURE0+w)}function tt(z,w){const at=r.get(z);if(z.version>0&&at.__version!==z.version){U(at,z,w);return}i.bindTexture(o.TEXTURE_3D,at.__webglTexture,o.TEXTURE0+w)}function W(z,w){const at=r.get(z);if(z.version>0&&at.__version!==z.version){Y(at,z,w);return}i.bindTexture(o.TEXTURE_CUBE_MAP,at.__webglTexture,o.TEXTURE0+w)}const gt={[ip]:o.REPEAT,[Ks]:o.CLAMP_TO_EDGE,[ap]:o.MIRRORED_REPEAT},yt={[Oi]:o.NEAREST,[lb]:o.NEAREST_MIPMAP_NEAREST,[Wc]:o.NEAREST_MIPMAP_LINEAR,[Ki]:o.LINEAR,[fh]:o.LINEAR_MIPMAP_NEAREST,[Qs]:o.LINEAR_MIPMAP_LINEAR},Ct={[db]:o.NEVER,[_b]:o.ALWAYS,[hb]:o.LESS,[Dx]:o.LEQUAL,[pb]:o.EQUAL,[vb]:o.GEQUAL,[mb]:o.GREATER,[gb]:o.NOTEQUAL};function Qt(z,w){if(w.type===Ta&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ki||w.magFilter===fh||w.magFilter===Wc||w.magFilter===Qs||w.minFilter===Ki||w.minFilter===fh||w.minFilter===Wc||w.minFilter===Qs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(z,o.TEXTURE_WRAP_S,gt[w.wrapS]),o.texParameteri(z,o.TEXTURE_WRAP_T,gt[w.wrapT]),(z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY)&&o.texParameteri(z,o.TEXTURE_WRAP_R,gt[w.wrapR]),o.texParameteri(z,o.TEXTURE_MAG_FILTER,yt[w.magFilter]),o.texParameteri(z,o.TEXTURE_MIN_FILTER,yt[w.minFilter]),w.compareFunction&&(o.texParameteri(z,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(z,o.TEXTURE_COMPARE_FUNC,Ct[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Oi||w.minFilter!==Wc&&w.minFilter!==Qs||w.type===Ta&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const at=e.get("EXT_texture_filter_anisotropic");o.texParameterf(z,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,c.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function de(z,w){let at=!1;z.__webglInit===void 0&&(z.__webglInit=!0,w.addEventListener("dispose",G));const _t=w.source;let bt=g.get(_t);bt===void 0&&(bt={},g.set(_t,bt));const vt=ct(w);if(vt!==z.__cacheKey){bt[vt]===void 0&&(bt[vt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,at=!0),bt[vt].usedTimes++;const jt=bt[z.__cacheKey];jt!==void 0&&(bt[z.__cacheKey].usedTimes--,jt.usedTimes===0&&D(w)),z.__cacheKey=vt,z.__webglTexture=bt[vt].texture}return at}function U(z,w,at){let _t=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(_t=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(_t=o.TEXTURE_3D);const bt=de(z,w),vt=w.source;i.bindTexture(_t,z.__webglTexture,o.TEXTURE0+at);const jt=r.get(vt);if(vt.version!==jt.__version||bt===!0){i.activeTexture(o.TEXTURE0+at);const Nt=Le.getPrimaries(Le.workingColorSpace),Ft=w.colorSpace===cs?null:Le.getPrimaries(w.colorSpace),ve=w.colorSpace===cs||Nt===Ft?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let At=b(w.image,!1,c.maxTextureSize);At=ue(w,At);const Vt=f.convert(w.format,w.colorSpace),ee=f.convert(w.type);let ie=L(w.internalFormat,Vt,ee,w.colorSpace,w.isVideoTexture);Qt(_t,w);let Gt;const se=w.mipmaps,fe=w.isVideoTexture!==!0,ze=jt.__version===void 0||bt===!0,X=vt.dataReady,Ot=V(w,At);if(w.isDepthTexture)ie=N(w.format===uo,w.type),ze&&(fe?i.texStorage2D(o.TEXTURE_2D,1,ie,At.width,At.height):i.texImage2D(o.TEXTURE_2D,0,ie,At.width,At.height,0,Vt,ee,null));else if(w.isDataTexture)if(se.length>0){fe&&ze&&i.texStorage2D(o.TEXTURE_2D,Ot,ie,se[0].width,se[0].height);for(let dt=0,xt=se.length;dt<xt;dt++)Gt=se[dt],fe?X&&i.texSubImage2D(o.TEXTURE_2D,dt,0,0,Gt.width,Gt.height,Vt,ee,Gt.data):i.texImage2D(o.TEXTURE_2D,dt,ie,Gt.width,Gt.height,0,Vt,ee,Gt.data);w.generateMipmaps=!1}else fe?(ze&&i.texStorage2D(o.TEXTURE_2D,Ot,ie,At.width,At.height),X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,At.width,At.height,Vt,ee,At.data)):i.texImage2D(o.TEXTURE_2D,0,ie,At.width,At.height,0,Vt,ee,At.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){fe&&ze&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ot,ie,se[0].width,se[0].height,At.depth);for(let dt=0,xt=se.length;dt<xt;dt++)if(Gt=se[dt],w.format!==Li)if(Vt!==null)if(fe){if(X)if(w.layerUpdates.size>0){const Pt=F_(Gt.width,Gt.height,w.format,w.type);for(const It of w.layerUpdates){const re=Gt.data.subarray(It*Pt/Gt.data.BYTES_PER_ELEMENT,(It+1)*Pt/Gt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,dt,0,0,It,Gt.width,Gt.height,1,Vt,re)}w.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,dt,0,0,0,Gt.width,Gt.height,At.depth,Vt,Gt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,dt,ie,Gt.width,Gt.height,At.depth,0,Gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?X&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,dt,0,0,0,Gt.width,Gt.height,At.depth,Vt,ee,Gt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,dt,ie,Gt.width,Gt.height,At.depth,0,Vt,ee,Gt.data)}else{fe&&ze&&i.texStorage2D(o.TEXTURE_2D,Ot,ie,se[0].width,se[0].height);for(let dt=0,xt=se.length;dt<xt;dt++)Gt=se[dt],w.format!==Li?Vt!==null?fe?X&&i.compressedTexSubImage2D(o.TEXTURE_2D,dt,0,0,Gt.width,Gt.height,Vt,Gt.data):i.compressedTexImage2D(o.TEXTURE_2D,dt,ie,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?X&&i.texSubImage2D(o.TEXTURE_2D,dt,0,0,Gt.width,Gt.height,Vt,ee,Gt.data):i.texImage2D(o.TEXTURE_2D,dt,ie,Gt.width,Gt.height,0,Vt,ee,Gt.data)}else if(w.isDataArrayTexture)if(fe){if(ze&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ot,ie,At.width,At.height,At.depth),X)if(w.layerUpdates.size>0){const dt=F_(At.width,At.height,w.format,w.type);for(const xt of w.layerUpdates){const Pt=At.data.subarray(xt*dt/At.data.BYTES_PER_ELEMENT,(xt+1)*dt/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xt,At.width,At.height,1,Vt,ee,Pt)}w.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Vt,ee,At.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,ie,At.width,At.height,At.depth,0,Vt,ee,At.data);else if(w.isData3DTexture)fe?(ze&&i.texStorage3D(o.TEXTURE_3D,Ot,ie,At.width,At.height,At.depth),X&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Vt,ee,At.data)):i.texImage3D(o.TEXTURE_3D,0,ie,At.width,At.height,At.depth,0,Vt,ee,At.data);else if(w.isFramebufferTexture){if(ze)if(fe)i.texStorage2D(o.TEXTURE_2D,Ot,ie,At.width,At.height);else{let dt=At.width,xt=At.height;for(let Pt=0;Pt<Ot;Pt++)i.texImage2D(o.TEXTURE_2D,Pt,ie,dt,xt,0,Vt,ee,null),dt>>=1,xt>>=1}}else if(se.length>0){if(fe&&ze){const dt=qt(se[0]);i.texStorage2D(o.TEXTURE_2D,Ot,ie,dt.width,dt.height)}for(let dt=0,xt=se.length;dt<xt;dt++)Gt=se[dt],fe?X&&i.texSubImage2D(o.TEXTURE_2D,dt,0,0,Vt,ee,Gt):i.texImage2D(o.TEXTURE_2D,dt,ie,Vt,ee,Gt);w.generateMipmaps=!1}else if(fe){if(ze){const dt=qt(At);i.texStorage2D(o.TEXTURE_2D,Ot,ie,dt.width,dt.height)}X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Vt,ee,At)}else i.texImage2D(o.TEXTURE_2D,0,ie,Vt,ee,At);S(w)&&y(_t),jt.__version=vt.version,w.onUpdate&&w.onUpdate(w)}z.__version=w.version}function Y(z,w,at){if(w.image.length!==6)return;const _t=de(z,w),bt=w.source;i.bindTexture(o.TEXTURE_CUBE_MAP,z.__webglTexture,o.TEXTURE0+at);const vt=r.get(bt);if(bt.version!==vt.__version||_t===!0){i.activeTexture(o.TEXTURE0+at);const jt=Le.getPrimaries(Le.workingColorSpace),Nt=w.colorSpace===cs?null:Le.getPrimaries(w.colorSpace),Ft=w.colorSpace===cs||jt===Nt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const ve=w.isCompressedTexture||w.image[0].isCompressedTexture,At=w.image[0]&&w.image[0].isDataTexture,Vt=[];for(let xt=0;xt<6;xt++)!ve&&!At?Vt[xt]=b(w.image[xt],!0,c.maxCubemapSize):Vt[xt]=At?w.image[xt].image:w.image[xt],Vt[xt]=ue(w,Vt[xt]);const ee=Vt[0],ie=f.convert(w.format,w.colorSpace),Gt=f.convert(w.type),se=L(w.internalFormat,ie,Gt,w.colorSpace),fe=w.isVideoTexture!==!0,ze=vt.__version===void 0||_t===!0,X=bt.dataReady;let Ot=V(w,ee);Qt(o.TEXTURE_CUBE_MAP,w);let dt;if(ve){fe&&ze&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ot,se,ee.width,ee.height);for(let xt=0;xt<6;xt++){dt=Vt[xt].mipmaps;for(let Pt=0;Pt<dt.length;Pt++){const It=dt[Pt];w.format!==Li?ie!==null?fe?X&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt,0,0,It.width,It.height,ie,It.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt,se,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):fe?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt,0,0,It.width,It.height,ie,Gt,It.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt,se,It.width,It.height,0,ie,Gt,It.data)}}}else{if(dt=w.mipmaps,fe&&ze){dt.length>0&&Ot++;const xt=qt(Vt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ot,se,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(At){fe?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Vt[xt].width,Vt[xt].height,ie,Gt,Vt[xt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,se,Vt[xt].width,Vt[xt].height,0,ie,Gt,Vt[xt].data);for(let Pt=0;Pt<dt.length;Pt++){const re=dt[Pt].image[xt].image;fe?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt+1,0,0,re.width,re.height,ie,Gt,re.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt+1,se,re.width,re.height,0,ie,Gt,re.data)}}else{fe?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,ie,Gt,Vt[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,se,ie,Gt,Vt[xt]);for(let Pt=0;Pt<dt.length;Pt++){const It=dt[Pt];fe?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt+1,0,0,ie,Gt,It.image[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt+1,se,ie,Gt,It.image[xt])}}}S(w)&&y(o.TEXTURE_CUBE_MAP),vt.__version=bt.version,w.onUpdate&&w.onUpdate(w)}z.__version=w.version}function ht(z,w,at,_t,bt,vt){const jt=f.convert(at.format,at.colorSpace),Nt=f.convert(at.type),Ft=L(at.internalFormat,jt,Nt,at.colorSpace),ve=r.get(w),At=r.get(at);if(At.__renderTarget=w,!ve.__hasExternalTextures){const Vt=Math.max(1,w.width>>vt),ee=Math.max(1,w.height>>vt);bt===o.TEXTURE_3D||bt===o.TEXTURE_2D_ARRAY?i.texImage3D(bt,vt,Ft,Vt,ee,w.depth,0,jt,Nt,null):i.texImage2D(bt,vt,Ft,Vt,ee,0,jt,Nt,null)}i.bindFramebuffer(o.FRAMEBUFFER,z),$t(w)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_t,bt,At.__webglTexture,0,te(w)):(bt===o.TEXTURE_2D||bt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_t,bt,At.__webglTexture,vt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function st(z,w,at){if(o.bindRenderbuffer(o.RENDERBUFFER,z),w.depthBuffer){const _t=w.depthTexture,bt=_t&&_t.isDepthTexture?_t.type:null,vt=N(w.stencilBuffer,bt),jt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Nt=te(w);$t(w)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Nt,vt,w.width,w.height):at?o.renderbufferStorageMultisample(o.RENDERBUFFER,Nt,vt,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,vt,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,jt,o.RENDERBUFFER,z)}else{const _t=w.textures;for(let bt=0;bt<_t.length;bt++){const vt=_t[bt],jt=f.convert(vt.format,vt.colorSpace),Nt=f.convert(vt.type),Ft=L(vt.internalFormat,jt,Nt,vt.colorSpace),ve=te(w);at&&$t(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ve,Ft,w.width,w.height):$t(w)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ve,Ft,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,Ft,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Mt(z,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,z),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _t=r.get(w.depthTexture);_t.__renderTarget=w,(!_t.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ot(w.depthTexture,0);const bt=_t.__webglTexture,vt=te(w);if(w.depthTexture.format===io)$t(w)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,bt,0,vt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,bt,0);else if(w.depthTexture.format===uo)$t(w)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,bt,0,vt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,bt,0);else throw new Error("Unknown depthTexture format")}function Bt(z){const w=r.get(z),at=z.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==z.depthTexture){const _t=z.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),_t){const bt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,_t.removeEventListener("dispose",bt)};_t.addEventListener("dispose",bt),w.__depthDisposeCallback=bt}w.__boundDepthTexture=_t}if(z.depthTexture&&!w.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");Mt(w.__webglFramebuffer,z)}else if(at){w.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[_t]),w.__webglDepthbuffer[_t]===void 0)w.__webglDepthbuffer[_t]=o.createRenderbuffer(),st(w.__webglDepthbuffer[_t],z,!1);else{const bt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,vt=w.__webglDepthbuffer[_t];o.bindRenderbuffer(o.RENDERBUFFER,vt),o.framebufferRenderbuffer(o.FRAMEBUFFER,bt,o.RENDERBUFFER,vt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=o.createRenderbuffer(),st(w.__webglDepthbuffer,z,!1);else{const _t=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,bt=w.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,bt),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,bt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Et(z,w,at){const _t=r.get(z);w!==void 0&&ht(_t.__webglFramebuffer,z,z.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),at!==void 0&&Bt(z)}function St(z){const w=z.texture,at=r.get(z),_t=r.get(w);z.addEventListener("dispose",P);const bt=z.textures,vt=z.isWebGLCubeRenderTarget===!0,jt=bt.length>1;if(jt||(_t.__webglTexture===void 0&&(_t.__webglTexture=o.createTexture()),_t.__version=w.version,d.memory.textures++),vt){at.__webglFramebuffer=[];for(let Nt=0;Nt<6;Nt++)if(w.mipmaps&&w.mipmaps.length>0){at.__webglFramebuffer[Nt]=[];for(let Ft=0;Ft<w.mipmaps.length;Ft++)at.__webglFramebuffer[Nt][Ft]=o.createFramebuffer()}else at.__webglFramebuffer[Nt]=o.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){at.__webglFramebuffer=[];for(let Nt=0;Nt<w.mipmaps.length;Nt++)at.__webglFramebuffer[Nt]=o.createFramebuffer()}else at.__webglFramebuffer=o.createFramebuffer();if(jt)for(let Nt=0,Ft=bt.length;Nt<Ft;Nt++){const ve=r.get(bt[Nt]);ve.__webglTexture===void 0&&(ve.__webglTexture=o.createTexture(),d.memory.textures++)}if(z.samples>0&&$t(z)===!1){at.__webglMultisampledFramebuffer=o.createFramebuffer(),at.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let Nt=0;Nt<bt.length;Nt++){const Ft=bt[Nt];at.__webglColorRenderbuffer[Nt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,at.__webglColorRenderbuffer[Nt]);const ve=f.convert(Ft.format,Ft.colorSpace),At=f.convert(Ft.type),Vt=L(Ft.internalFormat,ve,At,Ft.colorSpace,z.isXRRenderTarget===!0),ee=te(z);o.renderbufferStorageMultisample(o.RENDERBUFFER,ee,Vt,z.width,z.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.RENDERBUFFER,at.__webglColorRenderbuffer[Nt])}o.bindRenderbuffer(o.RENDERBUFFER,null),z.depthBuffer&&(at.__webglDepthRenderbuffer=o.createRenderbuffer(),st(at.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(vt){i.bindTexture(o.TEXTURE_CUBE_MAP,_t.__webglTexture),Qt(o.TEXTURE_CUBE_MAP,w);for(let Nt=0;Nt<6;Nt++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ft=0;Ft<w.mipmaps.length;Ft++)ht(at.__webglFramebuffer[Nt][Ft],z,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,Ft);else ht(at.__webglFramebuffer[Nt],z,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0);S(w)&&y(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(jt){for(let Nt=0,Ft=bt.length;Nt<Ft;Nt++){const ve=bt[Nt],At=r.get(ve);i.bindTexture(o.TEXTURE_2D,At.__webglTexture),Qt(o.TEXTURE_2D,ve),ht(at.__webglFramebuffer,z,ve,o.COLOR_ATTACHMENT0+Nt,o.TEXTURE_2D,0),S(ve)&&y(o.TEXTURE_2D)}i.unbindTexture()}else{let Nt=o.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Nt=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Nt,_t.__webglTexture),Qt(Nt,w),w.mipmaps&&w.mipmaps.length>0)for(let Ft=0;Ft<w.mipmaps.length;Ft++)ht(at.__webglFramebuffer[Ft],z,w,o.COLOR_ATTACHMENT0,Nt,Ft);else ht(at.__webglFramebuffer,z,w,o.COLOR_ATTACHMENT0,Nt,0);S(w)&&y(Nt),i.unbindTexture()}z.depthBuffer&&Bt(z)}function wt(z){const w=z.textures;for(let at=0,_t=w.length;at<_t;at++){const bt=w[at];if(S(bt)){const vt=O(z),jt=r.get(bt).__webglTexture;i.bindTexture(vt,jt),y(vt),i.unbindTexture()}}}const Zt=[],k=[];function nn(z){if(z.samples>0){if($t(z)===!1){const w=z.textures,at=z.width,_t=z.height;let bt=o.COLOR_BUFFER_BIT;const vt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,jt=r.get(z),Nt=w.length>1;if(Nt)for(let Ft=0;Ft<w.length;Ft++)i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ft,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ft,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,jt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let Ft=0;Ft<w.length;Ft++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(bt|=o.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(bt|=o.STENCIL_BUFFER_BIT)),Nt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,jt.__webglColorRenderbuffer[Ft]);const ve=r.get(w[Ft]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ve,0)}o.blitFramebuffer(0,0,at,_t,0,0,at,_t,bt,o.NEAREST),p===!0&&(Zt.length=0,k.length=0,Zt.push(o.COLOR_ATTACHMENT0+Ft),z.depthBuffer&&z.resolveDepthBuffer===!1&&(Zt.push(vt),k.push(vt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,k)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Zt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Nt)for(let Ft=0;Ft<w.length;Ft++){i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ft,o.RENDERBUFFER,jt.__webglColorRenderbuffer[Ft]);const ve=r.get(w[Ft]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ft,o.TEXTURE_2D,ve,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&p){const w=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[w])}}}function te(z){return Math.min(c.maxSamples,z.samples)}function $t(z){const w=r.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Rt(z){const w=d.render.frame;x.get(z)!==w&&(x.set(z,w),z.update())}function ue(z,w){const at=z.colorSpace,_t=z.format,bt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||at!==fo&&at!==cs&&(Le.getTransfer(at)===ke?(_t!==Li||bt!==Ra)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),w}function qt(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(_.width=z.naturalWidth||z.width,_.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(_.width=z.displayWidth,_.height=z.displayHeight):(_.width=z.width,_.height=z.height),_}this.allocateTextureUnit=$,this.resetTextureUnits=rt,this.setTexture2D=ot,this.setTexture2DArray=B,this.setTexture3D=tt,this.setTextureCube=W,this.rebindTextures=Et,this.setupRenderTarget=St,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=$t}function Pw(o,e){function i(r,c=cs){let f;const d=Le.getTransfer(c);if(r===Ra)return o.UNSIGNED_BYTE;if(r===Ip)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Bp)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Mx)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===yx)return o.BYTE;if(r===Sx)return o.SHORT;if(r===_l)return o.UNSIGNED_SHORT;if(r===Pp)return o.INT;if(r===$s)return o.UNSIGNED_INT;if(r===Ta)return o.FLOAT;if(r===xl)return o.HALF_FLOAT;if(r===bx)return o.ALPHA;if(r===Ex)return o.RGB;if(r===Li)return o.RGBA;if(r===Tx)return o.LUMINANCE;if(r===Ax)return o.LUMINANCE_ALPHA;if(r===io)return o.DEPTH_COMPONENT;if(r===uo)return o.DEPTH_STENCIL;if(r===wx)return o.RED;if(r===Fp)return o.RED_INTEGER;if(r===Rx)return o.RG;if(r===Hp)return o.RG_INTEGER;if(r===Gp)return o.RGBA_INTEGER;if(r===gu||r===vu||r===_u||r===xu)if(d===ke)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(r===gu)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===vu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===_u)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===xu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(r===gu)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===vu)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===_u)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===xu)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===sp||r===rp||r===op||r===lp)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(r===sp)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===rp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===op)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===lp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===cp||r===up||r===fp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(r===cp||r===up)return d===ke?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(r===fp)return d===ke?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===dp||r===hp||r===pp||r===mp||r===gp||r===vp||r===_p||r===xp||r===yp||r===Sp||r===Mp||r===bp||r===Ep||r===Tp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(r===dp)return d===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===hp)return d===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===pp)return d===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===mp)return d===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===gp)return d===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vp)return d===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_p)return d===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xp)return d===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yp)return d===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Sp)return d===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Mp)return d===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bp)return d===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ep)return d===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Tp)return d===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===yu||r===Ap||r===wp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(r===yu)return d===ke?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ap)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===wp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Cx||r===Rp||r===Cp||r===Np)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(r===yu)return f.COMPRESSED_RED_RGTC1_EXT;if(r===Rp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Cp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Np)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===co?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const Iw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Fw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const c=new ti,f=e.properties.get(c);f.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=c}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new hs({vertexShader:Iw,fragmentShader:Bw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ce(new Cu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hw extends po{constructor(e,i){super();const r=this;let c=null,f=1,d=null,h="local-floor",p=1,_=null,x=null,m=null,g=null,M=null,E=null;const b=new Fw,S=i.getContextAttributes();let y=null,O=null;const L=[],N=[],V=new Oe;let G=null;const P=new Mi;P.viewport=new cn;const H=new Mi;H.viewport=new cn;const D=[P,H],R=new rE;let F=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let Y=L[U];return Y===void 0&&(Y=new Lh,L[U]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(U){let Y=L[U];return Y===void 0&&(Y=new Lh,L[U]=Y),Y.getGripSpace()},this.getHand=function(U){let Y=L[U];return Y===void 0&&(Y=new Lh,L[U]=Y),Y.getHandSpace()};function $(U){const Y=N.indexOf(U.inputSource);if(Y===-1)return;const ht=L[Y];ht!==void 0&&(ht.update(U.inputSource,U.frame,_||d),ht.dispatchEvent({type:U.type,data:U.inputSource}))}function ct(){c.removeEventListener("select",$),c.removeEventListener("selectstart",$),c.removeEventListener("selectend",$),c.removeEventListener("squeeze",$),c.removeEventListener("squeezestart",$),c.removeEventListener("squeezeend",$),c.removeEventListener("end",ct),c.removeEventListener("inputsourceschange",ot);for(let U=0;U<L.length;U++){const Y=N[U];Y!==null&&(N[U]=null,L[U].disconnect(Y))}F=null,rt=null,b.reset(),e.setRenderTarget(y),M=null,g=null,m=null,c=null,O=null,de.stop(),r.isPresenting=!1,e.setPixelRatio(G),e.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){f=U,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){h=U,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return _||d},this.setReferenceSpace=function(U){_=U},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return m},this.getFrame=function(){return E},this.getSession=function(){return c},this.setSession=async function(U){if(c=U,c!==null){if(y=e.getRenderTarget(),c.addEventListener("select",$),c.addEventListener("selectstart",$),c.addEventListener("selectend",$),c.addEventListener("squeeze",$),c.addEventListener("squeezestart",$),c.addEventListener("squeezeend",$),c.addEventListener("end",ct),c.addEventListener("inputsourceschange",ot),S.xrCompatible!==!0&&await i.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(V),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,st=null,Mt=null;S.depth&&(Mt=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ht=S.stencil?uo:io,st=S.stencil?co:$s);const Bt={colorFormat:i.RGBA8,depthFormat:Mt,scaleFactor:f};m=new XRWebGLBinding(c,i),g=m.createProjectionLayer(Bt),c.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),O=new Js(g.textureWidth,g.textureHeight,{format:Li,type:Ra,depthTexture:new kx(g.textureWidth,g.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ht={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(c,i,ht),c.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),O=new Js(M.framebufferWidth,M.framebufferHeight,{format:Li,type:Ra,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(p),_=null,d=await c.requestReferenceSpace(h),de.setContext(c),de.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(c!==null)return c.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function ot(U){for(let Y=0;Y<U.removed.length;Y++){const ht=U.removed[Y],st=N.indexOf(ht);st>=0&&(N[st]=null,L[st].disconnect(ht))}for(let Y=0;Y<U.added.length;Y++){const ht=U.added[Y];let st=N.indexOf(ht);if(st===-1){for(let Bt=0;Bt<L.length;Bt++)if(Bt>=N.length){N.push(ht),st=Bt;break}else if(N[Bt]===null){N[Bt]=ht,st=Bt;break}if(st===-1)break}const Mt=L[st];Mt&&Mt.connect(ht)}}const B=new nt,tt=new nt;function W(U,Y,ht){B.setFromMatrixPosition(Y.matrixWorld),tt.setFromMatrixPosition(ht.matrixWorld);const st=B.distanceTo(tt),Mt=Y.projectionMatrix.elements,Bt=ht.projectionMatrix.elements,Et=Mt[14]/(Mt[10]-1),St=Mt[14]/(Mt[10]+1),wt=(Mt[9]+1)/Mt[5],Zt=(Mt[9]-1)/Mt[5],k=(Mt[8]-1)/Mt[0],nn=(Bt[8]+1)/Bt[0],te=Et*k,$t=Et*nn,Rt=st/(-k+nn),ue=Rt*-k;if(Y.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(ue),U.translateZ(Rt),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),Mt[10]===-1)U.projectionMatrix.copy(Y.projectionMatrix),U.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const qt=Et+Rt,z=St+Rt,w=te-ue,at=$t+(st-ue),_t=wt*St/z*qt,bt=Zt*St/z*qt;U.projectionMatrix.makePerspective(w,at,_t,bt,qt,z),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function gt(U,Y){Y===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(Y.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(c===null)return;let Y=U.near,ht=U.far;b.texture!==null&&(b.depthNear>0&&(Y=b.depthNear),b.depthFar>0&&(ht=b.depthFar)),R.near=H.near=P.near=Y,R.far=H.far=P.far=ht,(F!==R.near||rt!==R.far)&&(c.updateRenderState({depthNear:R.near,depthFar:R.far}),F=R.near,rt=R.far),P.layers.mask=U.layers.mask|2,H.layers.mask=U.layers.mask|4,R.layers.mask=P.layers.mask|H.layers.mask;const st=U.parent,Mt=R.cameras;gt(R,st);for(let Bt=0;Bt<Mt.length;Bt++)gt(Mt[Bt],st);Mt.length===2?W(R,P,H):R.projectionMatrix.copy(P.projectionMatrix),yt(U,R,st)};function yt(U,Y,ht){ht===null?U.matrix.copy(Y.matrixWorld):(U.matrix.copy(ht.matrixWorld),U.matrix.invert(),U.matrix.multiply(Y.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(Y.projectionMatrix),U.projectionMatrixInverse.copy(Y.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=Dp*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(g===null&&M===null))return p},this.setFoveation=function(U){p=U,g!==null&&(g.fixedFoveation=U),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=U)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(R)};let Ct=null;function Qt(U,Y){if(x=Y.getViewerPose(_||d),E=Y,x!==null){const ht=x.views;M!==null&&(e.setRenderTargetFramebuffer(O,M.framebuffer),e.setRenderTarget(O));let st=!1;ht.length!==R.cameras.length&&(R.cameras.length=0,st=!0);for(let Et=0;Et<ht.length;Et++){const St=ht[Et];let wt=null;if(M!==null)wt=M.getViewport(St);else{const k=m.getViewSubImage(g,St);wt=k.viewport,Et===0&&(e.setRenderTargetTextures(O,k.colorTexture,g.ignoreDepthValues?void 0:k.depthStencilTexture),e.setRenderTarget(O))}let Zt=D[Et];Zt===void 0&&(Zt=new Mi,Zt.layers.enable(Et),Zt.viewport=new cn,D[Et]=Zt),Zt.matrix.fromArray(St.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(St.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(wt.x,wt.y,wt.width,wt.height),Et===0&&(R.matrix.copy(Zt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),st===!0&&R.cameras.push(Zt)}const Mt=c.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&c.depthUsage=="gpu-optimized"&&m){const Et=m.getDepthInformation(ht[0]);Et&&Et.isValid&&Et.texture&&b.init(e,Et,c.renderState)}}for(let ht=0;ht<L.length;ht++){const st=N[ht],Mt=L[ht];st!==null&&Mt!==void 0&&Mt.update(st,Y,_||d)}Ct&&Ct(U,Y),Y.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Y}),E=null}const de=new qx;de.setAnimationLoop(Qt),this.setAnimationLoop=function(U){Ct=U},this.dispose=function(){}}}const Vs=new $i,Gw=new sn;function Vw(o,e){function i(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function r(S,y){y.color.getRGB(S.fogColor.value,Fx(o)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function c(S,y,O,L,N){y.isMeshBasicMaterial||y.isMeshLambertMaterial?f(S,y):y.isMeshToonMaterial?(f(S,y),m(S,y)):y.isMeshPhongMaterial?(f(S,y),x(S,y)):y.isMeshStandardMaterial?(f(S,y),g(S,y),y.isMeshPhysicalMaterial&&M(S,y,N)):y.isMeshMatcapMaterial?(f(S,y),E(S,y)):y.isMeshDepthMaterial?f(S,y):y.isMeshDistanceMaterial?(f(S,y),b(S,y)):y.isMeshNormalMaterial?f(S,y):y.isLineBasicMaterial?(d(S,y),y.isLineDashedMaterial&&h(S,y)):y.isPointsMaterial?p(S,y,O,L):y.isSpriteMaterial?_(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function f(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,i(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,i(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Jn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,i(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Jn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,i(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,i(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const O=e.get(y),L=O.envMap,N=O.envMapRotation;L&&(S.envMap.value=L,Vs.copy(N),Vs.x*=-1,Vs.y*=-1,Vs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Vs.y*=-1,Vs.z*=-1),S.envMapRotation.value.setFromMatrix4(Gw.makeRotationFromEuler(Vs)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,S.aoMapTransform))}function d(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,i(y.map,S.mapTransform))}function h(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function p(S,y,O,L){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*O,S.scale.value=L*.5,y.map&&(S.map.value=y.map,i(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function _(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,i(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function x(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function m(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function g(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function M(S,y,O){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Jn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=O.texture,S.transmissionSamplerSize.value.set(O.width,O.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,y){y.matcap&&(S.matcap.value=y.matcap)}function b(S,y){const O=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(O.matrixWorld),S.nearDistance.value=O.shadow.camera.near,S.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:c}}function kw(o,e,i,r){let c={},f={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(O,L){const N=L.program;r.uniformBlockBinding(O,N)}function _(O,L){let N=c[O.id];N===void 0&&(E(O),N=x(O),c[O.id]=N,O.addEventListener("dispose",S));const V=L.program;r.updateUBOMapping(O,V);const G=e.render.frame;f[O.id]!==G&&(g(O),f[O.id]=G)}function x(O){const L=m();O.__bindingPointIndex=L;const N=o.createBuffer(),V=O.__size,G=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,V,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,N),N}function m(){for(let O=0;O<h;O++)if(d.indexOf(O)===-1)return d.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(O){const L=c[O.id],N=O.uniforms,V=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let G=0,P=N.length;G<P;G++){const H=Array.isArray(N[G])?N[G]:[N[G]];for(let D=0,R=H.length;D<R;D++){const F=H[D];if(M(F,G,D,V)===!0){const rt=F.__offset,$=Array.isArray(F.value)?F.value:[F.value];let ct=0;for(let ot=0;ot<$.length;ot++){const B=$[ot],tt=b(B);typeof B=="number"||typeof B=="boolean"?(F.__data[0]=B,o.bufferSubData(o.UNIFORM_BUFFER,rt+ct,F.__data)):B.isMatrix3?(F.__data[0]=B.elements[0],F.__data[1]=B.elements[1],F.__data[2]=B.elements[2],F.__data[3]=0,F.__data[4]=B.elements[3],F.__data[5]=B.elements[4],F.__data[6]=B.elements[5],F.__data[7]=0,F.__data[8]=B.elements[6],F.__data[9]=B.elements[7],F.__data[10]=B.elements[8],F.__data[11]=0):(B.toArray(F.__data,ct),ct+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,rt,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(O,L,N,V){const G=O.value,P=L+"_"+N;if(V[P]===void 0)return typeof G=="number"||typeof G=="boolean"?V[P]=G:V[P]=G.clone(),!0;{const H=V[P];if(typeof G=="number"||typeof G=="boolean"){if(H!==G)return V[P]=G,!0}else if(H.equals(G)===!1)return H.copy(G),!0}return!1}function E(O){const L=O.uniforms;let N=0;const V=16;for(let P=0,H=L.length;P<H;P++){const D=Array.isArray(L[P])?L[P]:[L[P]];for(let R=0,F=D.length;R<F;R++){const rt=D[R],$=Array.isArray(rt.value)?rt.value:[rt.value];for(let ct=0,ot=$.length;ct<ot;ct++){const B=$[ct],tt=b(B),W=N%V,gt=W%tt.boundary,yt=W+gt;N+=gt,yt!==0&&V-yt<tt.storage&&(N+=V-yt),rt.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=N,N+=tt.storage}}}const G=N%V;return G>0&&(N+=V-G),O.__size=N,O.__cache={},this}function b(O){const L={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(L.boundary=4,L.storage=4):O.isVector2?(L.boundary=8,L.storage=8):O.isVector3||O.isColor?(L.boundary=16,L.storage=12):O.isVector4?(L.boundary=16,L.storage=16):O.isMatrix3?(L.boundary=48,L.storage=48):O.isMatrix4?(L.boundary=64,L.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),L}function S(O){const L=O.target;L.removeEventListener("dispose",S);const N=d.indexOf(L.__bindingPointIndex);d.splice(N,1),o.deleteBuffer(c[L.id]),delete c[L.id],delete f[L.id]}function y(){for(const O in c)o.deleteBuffer(c[O]);d=[],c={},f={}}return{bind:p,update:_,dispose:y}}class jw{constructor(e={}){const{canvas:i=yb(),context:r=null,depth:c=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:_=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const E=new Uint32Array(4),b=new Int32Array(4);let S=null,y=null;const O=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Si,this.toneMapping=fs,this.toneMappingExposure=1;const N=this;let V=!1,G=0,P=0,H=null,D=-1,R=null;const F=new cn,rt=new cn;let $=null;const ct=new he(0);let ot=0,B=i.width,tt=i.height,W=1,gt=null,yt=null;const Ct=new cn(0,0,B,tt),Qt=new cn(0,0,B,tt);let de=!1;const U=new Xp;let Y=!1,ht=!1;this.transmissionResolutionScale=1;const st=new sn,Mt=new sn,Bt=new nt,Et=new cn,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function Zt(){return H===null?W:1}let k=r;function nn(C,Q){return i.getContext(C,Q)}try{const C={alpha:!0,depth:c,stencil:f,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:_,powerPreference:x,failIfMajorPerformanceCaveat:m};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${zp}`),i.addEventListener("webglcontextlost",xt,!1),i.addEventListener("webglcontextrestored",Pt,!1),i.addEventListener("webglcontextcreationerror",It,!1),k===null){const Q="webgl2";if(k=nn(Q,C),k===null)throw nn(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let te,$t,Rt,ue,qt,z,w,at,_t,bt,vt,jt,Nt,Ft,ve,At,Vt,ee,ie,Gt,se,fe,ze,X;function Ot(){te=new t2(k),te.init(),fe=new Pw(k,te),$t=new WA(k,te,e,fe),Rt=new Ow(k,te),$t.reverseDepthBuffer&&g&&Rt.buffers.depth.setReversed(!0),ue=new i2(k),qt=new Sw,z=new zw(k,te,Rt,qt,$t,fe,ue),w=new ZA(N),at=new JA(N),_t=new cE(k),ze=new XA(k,_t),bt=new e2(k,_t,ue,ze),vt=new s2(k,bt,_t,ue),ie=new a2(k,$t,z),At=new YA(qt),jt=new yw(N,w,at,te,$t,ze,At),Nt=new Vw(N,qt),Ft=new bw,ve=new Cw(te),ee=new jA(N,w,at,Rt,vt,M,p),Vt=new Uw(N,vt,$t),X=new kw(k,ue,$t,Rt),Gt=new qA(k,te,ue),se=new n2(k,te,ue),ue.programs=jt.programs,N.capabilities=$t,N.extensions=te,N.properties=qt,N.renderLists=Ft,N.shadowMap=Vt,N.state=Rt,N.info=ue}Ot();const dt=new Hw(N,k);this.xr=dt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=te.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=te.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(C){C!==void 0&&(W=C,this.setSize(B,tt,!1))},this.getSize=function(C){return C.set(B,tt)},this.setSize=function(C,Q,ut=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=C,tt=Q,i.width=Math.floor(C*W),i.height=Math.floor(Q*W),ut===!0&&(i.style.width=C+"px",i.style.height=Q+"px"),this.setViewport(0,0,C,Q)},this.getDrawingBufferSize=function(C){return C.set(B*W,tt*W).floor()},this.setDrawingBufferSize=function(C,Q,ut){B=C,tt=Q,W=ut,i.width=Math.floor(C*ut),i.height=Math.floor(Q*ut),this.setViewport(0,0,C,Q)},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(Ct)},this.setViewport=function(C,Q,ut,ft){C.isVector4?Ct.set(C.x,C.y,C.z,C.w):Ct.set(C,Q,ut,ft),Rt.viewport(F.copy(Ct).multiplyScalar(W).round())},this.getScissor=function(C){return C.copy(Qt)},this.setScissor=function(C,Q,ut,ft){C.isVector4?Qt.set(C.x,C.y,C.z,C.w):Qt.set(C,Q,ut,ft),Rt.scissor(rt.copy(Qt).multiplyScalar(W).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(C){Rt.setScissorTest(de=C)},this.setOpaqueSort=function(C){gt=C},this.setTransparentSort=function(C){yt=C},this.getClearColor=function(C){return C.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(C=!0,Q=!0,ut=!0){let ft=0;if(C){let J=!1;if(H!==null){const Tt=H.texture.format;J=Tt===Gp||Tt===Hp||Tt===Fp}if(J){const Tt=H.texture.type,Ut=Tt===Ra||Tt===$s||Tt===_l||Tt===co||Tt===Ip||Tt===Bp,Dt=ee.getClearColor(),zt=ee.getClearAlpha(),ne=Dt.r,oe=Dt.g,Jt=Dt.b;Ut?(E[0]=ne,E[1]=oe,E[2]=Jt,E[3]=zt,k.clearBufferuiv(k.COLOR,0,E)):(b[0]=ne,b[1]=oe,b[2]=Jt,b[3]=zt,k.clearBufferiv(k.COLOR,0,b))}else ft|=k.COLOR_BUFFER_BIT}Q&&(ft|=k.DEPTH_BUFFER_BIT),ut&&(ft|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ft)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",xt,!1),i.removeEventListener("webglcontextrestored",Pt,!1),i.removeEventListener("webglcontextcreationerror",It,!1),ee.dispose(),Ft.dispose(),ve.dispose(),qt.dispose(),w.dispose(),at.dispose(),vt.dispose(),ze.dispose(),X.dispose(),jt.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",_n),dt.removeEventListener("sessionend",El),Ji.stop()};function xt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const C=ue.autoReset,Q=Vt.enabled,ut=Vt.autoUpdate,ft=Vt.needsUpdate,J=Vt.type;Ot(),ue.autoReset=C,Vt.enabled=Q,Vt.autoUpdate=ut,Vt.needsUpdate=ft,Vt.type=J}function It(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function re(C){const Q=C.target;Q.removeEventListener("dispose",re),je(Q)}function je(C){un(C),qt.remove(C)}function un(C){const Q=qt.get(C).programs;Q!==void 0&&(Q.forEach(function(ut){jt.releaseProgram(ut)}),C.isShaderMaterial&&jt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Q,ut,ft,J,Tt){Q===null&&(Q=St);const Ut=J.isMesh&&J.matrixWorld.determinant()<0,Dt=Uu(C,Q,ut,ft,J);Rt.setMaterial(ft,Ut);let zt=ut.index,ne=1;if(ft.wireframe===!0){if(zt=bt.getWireframeAttribute(ut),zt===void 0)return;ne=2}const oe=ut.drawRange,Jt=ut.attributes.position;let Re=oe.start*ne,De=(oe.start+oe.count)*ne;Tt!==null&&(Re=Math.max(Re,Tt.start*ne),De=Math.min(De,(Tt.start+Tt.count)*ne)),zt!==null?(Re=Math.max(Re,0),De=Math.min(De,zt.count)):Jt!=null&&(Re=Math.max(Re,0),De=Math.min(De,Jt.count));const Ye=De-Re;if(Ye<0||Ye===1/0)return;ze.setup(J,ft,Dt,ut,zt);let Xe,ye=Gt;if(zt!==null&&(Xe=_t.get(zt),ye=se,ye.setIndex(Xe)),J.isMesh)ft.wireframe===!0?(Rt.setLineWidth(ft.wireframeLinewidth*Zt()),ye.setMode(k.LINES)):ye.setMode(k.TRIANGLES);else if(J.isLine){let Yt=ft.linewidth;Yt===void 0&&(Yt=1),Rt.setLineWidth(Yt*Zt()),J.isLineSegments?ye.setMode(k.LINES):J.isLineLoop?ye.setMode(k.LINE_LOOP):ye.setMode(k.LINE_STRIP)}else J.isPoints?ye.setMode(k.POINTS):J.isSprite&&ye.setMode(k.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Xs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ye.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))ye.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Yt=J._multiDrawStarts,Je=J._multiDrawCounts,Ee=J._multiDrawCount,bn=zt?_t.get(zt).bytesPerElement:1,Qe=qt.get(ft).currentProgram.getUniforms();for(let Bn=0;Bn<Ee;Bn++)Qe.setValue(k,"_gl_DrawID",Bn),ye.render(Yt[Bn]/bn,Je[Bn])}else if(J.isInstancedMesh)ye.renderInstances(Re,Ye,J.count);else if(ut.isInstancedBufferGeometry){const Yt=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,Je=Math.min(ut.instanceCount,Yt);ye.renderInstances(Re,Ye,Je)}else ye.render(Re,Ye)};function le(C,Q,ut){C.transparent===!0&&C.side===ba&&C.forceSinglePass===!1?(C.side=Jn,C.needsUpdate=!0,ea(C,Q,ut),C.side=ds,C.needsUpdate=!0,ea(C,Q,ut),C.side=ba):ea(C,Q,ut)}this.compile=function(C,Q,ut=null){ut===null&&(ut=C),y=ve.get(ut),y.init(Q),L.push(y),ut.traverseVisible(function(J){J.isLight&&J.layers.test(Q.layers)&&(y.pushLight(J),J.castShadow&&y.pushShadow(J))}),C!==ut&&C.traverseVisible(function(J){J.isLight&&J.layers.test(Q.layers)&&(y.pushLight(J),J.castShadow&&y.pushShadow(J))}),y.setupLights();const ft=new Set;return C.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Tt=J.material;if(Tt)if(Array.isArray(Tt))for(let Ut=0;Ut<Tt.length;Ut++){const Dt=Tt[Ut];le(Dt,ut,J),ft.add(Dt)}else le(Tt,ut,J),ft.add(Tt)}),y=L.pop(),ft},this.compileAsync=function(C,Q,ut=null){const ft=this.compile(C,Q,ut);return new Promise(J=>{function Tt(){if(ft.forEach(function(Ut){qt.get(Ut).currentProgram.isReady()&&ft.delete(Ut)}),ft.size===0){J(C);return}setTimeout(Tt,10)}te.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let be=null;function $e(C){be&&be(C)}function _n(){Ji.stop()}function El(){Ji.start()}const Ji=new qx;Ji.setAnimationLoop($e),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(C){be=C,dt.setAnimationLoop(C),C===null?Ji.stop():Ji.start()},dt.addEventListener("sessionstart",_n),dt.addEventListener("sessionend",El),this.render=function(C,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(Q),Q=dt.getCamera()),C.isScene===!0&&C.onBeforeRender(N,C,Q,H),y=ve.get(C,L.length),y.init(Q),L.push(y),Mt.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),U.setFromProjectionMatrix(Mt),ht=this.localClippingEnabled,Y=At.init(this.clippingPlanes,ht),S=Ft.get(C,O.length),S.init(),O.push(S),dt.enabled===!0&&dt.isPresenting===!0){const Tt=N.xr.getDepthSensingMesh();Tt!==null&&vo(Tt,Q,-1/0,N.sortObjects)}vo(C,Q,0,N.sortObjects),S.finish(),N.sortObjects===!0&&S.sort(gt,yt),wt=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,wt&&ee.addToRenderList(S,C),this.info.render.frame++,Y===!0&&At.beginShadows();const ut=y.state.shadowsArray;Vt.render(ut,C,Q),Y===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const ft=S.opaque,J=S.transmissive;if(y.setupLights(),Q.isArrayCamera){const Tt=Q.cameras;if(J.length>0)for(let Ut=0,Dt=Tt.length;Ut<Dt;Ut++){const zt=Tt[Ut];ms(ft,J,C,zt)}wt&&ee.render(C);for(let Ut=0,Dt=Tt.length;Ut<Dt;Ut++){const zt=Tt[Ut];ps(S,C,zt,zt.viewport)}}else J.length>0&&ms(ft,J,C,Q),wt&&ee.render(C),ps(S,C,Q);H!==null&&P===0&&(z.updateMultisampleRenderTarget(H),z.updateRenderTargetMipmap(H)),C.isScene===!0&&C.onAfterRender(N,C,Q),ze.resetDefaultState(),D=-1,R=null,L.pop(),L.length>0?(y=L[L.length-1],Y===!0&&At.setGlobalState(N.clippingPlanes,y.state.camera)):y=null,O.pop(),O.length>0?S=O[O.length-1]:S=null};function vo(C,Q,ut,ft){if(C.visible===!1)return;if(C.layers.test(Q.layers)){if(C.isGroup)ut=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Q);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||U.intersectsSprite(C)){ft&&Et.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Mt);const Ut=vt.update(C),Dt=C.material;Dt.visible&&S.push(C,Ut,Dt,ut,Et.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||U.intersectsObject(C))){const Ut=vt.update(C),Dt=C.material;if(ft&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Et.copy(C.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Et.copy(Ut.boundingSphere.center)),Et.applyMatrix4(C.matrixWorld).applyMatrix4(Mt)),Array.isArray(Dt)){const zt=Ut.groups;for(let ne=0,oe=zt.length;ne<oe;ne++){const Jt=zt[ne],Re=Dt[Jt.materialIndex];Re&&Re.visible&&S.push(C,Ut,Re,ut,Et.z,Jt)}}else Dt.visible&&S.push(C,Ut,Dt,ut,Et.z,null)}}const Tt=C.children;for(let Ut=0,Dt=Tt.length;Ut<Dt;Ut++)vo(Tt[Ut],Q,ut,ft)}function ps(C,Q,ut,ft){const J=C.opaque,Tt=C.transmissive,Ut=C.transparent;y.setupLightsView(ut),Y===!0&&At.setGlobalState(N.clippingPlanes,ut),ft&&Rt.viewport(F.copy(ft)),J.length>0&&ta(J,Q,ut),Tt.length>0&&ta(Tt,Q,ut),Ut.length>0&&ta(Ut,Q,ut),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function ms(C,Q,ut,ft){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ft.id]===void 0&&(y.state.transmissionRenderTarget[ft.id]=new Js(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?xl:Ra,minFilter:Qs,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const Tt=y.state.transmissionRenderTarget[ft.id],Ut=ft.viewport||F;Tt.setSize(Ut.z*N.transmissionResolutionScale,Ut.w*N.transmissionResolutionScale);const Dt=N.getRenderTarget();N.setRenderTarget(Tt),N.getClearColor(ct),ot=N.getClearAlpha(),ot<1&&N.setClearColor(16777215,.5),N.clear(),wt&&ee.render(ut);const zt=N.toneMapping;N.toneMapping=fs;const ne=ft.viewport;if(ft.viewport!==void 0&&(ft.viewport=void 0),y.setupLightsView(ft),Y===!0&&At.setGlobalState(N.clippingPlanes,ft),ta(C,ut,ft),z.updateMultisampleRenderTarget(Tt),z.updateRenderTargetMipmap(Tt),te.has("WEBGL_multisampled_render_to_texture")===!1){let oe=!1;for(let Jt=0,Re=Q.length;Jt<Re;Jt++){const De=Q[Jt],Ye=De.object,Xe=De.geometry,ye=De.material,Yt=De.group;if(ye.side===ba&&Ye.layers.test(ft.layers)){const Je=ye.side;ye.side=Jn,ye.needsUpdate=!0,Pi(Ye,ut,ft,Xe,ye,Yt),ye.side=Je,ye.needsUpdate=!0,oe=!0}}oe===!0&&(z.updateMultisampleRenderTarget(Tt),z.updateRenderTargetMipmap(Tt))}N.setRenderTarget(Dt),N.setClearColor(ct,ot),ne!==void 0&&(ft.viewport=ne),N.toneMapping=zt}function ta(C,Q,ut){const ft=Q.isScene===!0?Q.overrideMaterial:null;for(let J=0,Tt=C.length;J<Tt;J++){const Ut=C[J],Dt=Ut.object,zt=Ut.geometry,ne=ft===null?Ut.material:ft,oe=Ut.group;Dt.layers.test(ut.layers)&&Pi(Dt,Q,ut,zt,ne,oe)}}function Pi(C,Q,ut,ft,J,Tt){C.onBeforeRender(N,Q,ut,ft,J,Tt),C.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(N,Q,ut,ft,C,Tt),J.transparent===!0&&J.side===ba&&J.forceSinglePass===!1?(J.side=Jn,J.needsUpdate=!0,N.renderBufferDirect(ut,Q,ft,J,C,Tt),J.side=ds,J.needsUpdate=!0,N.renderBufferDirect(ut,Q,ft,J,C,Tt),J.side=ba):N.renderBufferDirect(ut,Q,ft,J,C,Tt),C.onAfterRender(N,Q,ut,ft,J,Tt)}function ea(C,Q,ut){Q.isScene!==!0&&(Q=St);const ft=qt.get(C),J=y.state.lights,Tt=y.state.shadowsArray,Ut=J.state.version,Dt=jt.getParameters(C,J.state,Tt,Q,ut),zt=jt.getProgramCacheKey(Dt);let ne=ft.programs;ft.environment=C.isMeshStandardMaterial?Q.environment:null,ft.fog=Q.fog,ft.envMap=(C.isMeshStandardMaterial?at:w).get(C.envMap||ft.environment),ft.envMapRotation=ft.environment!==null&&C.envMap===null?Q.environmentRotation:C.envMapRotation,ne===void 0&&(C.addEventListener("dispose",re),ne=new Map,ft.programs=ne);let oe=ne.get(zt);if(oe!==void 0){if(ft.currentProgram===oe&&ft.lightsStateVersion===Ut)return _o(C,Dt),oe}else Dt.uniforms=jt.getUniforms(C),C.onBeforeCompile(Dt,N),oe=jt.acquireProgram(Dt,zt),ne.set(zt,oe),ft.uniforms=Dt.uniforms;const Jt=ft.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Jt.clippingPlanes=At.uniform),_o(C,Dt),ft.needsLights=xo(C),ft.lightsStateVersion=Ut,ft.needsLights&&(Jt.ambientLightColor.value=J.state.ambient,Jt.lightProbe.value=J.state.probe,Jt.directionalLights.value=J.state.directional,Jt.directionalLightShadows.value=J.state.directionalShadow,Jt.spotLights.value=J.state.spot,Jt.spotLightShadows.value=J.state.spotShadow,Jt.rectAreaLights.value=J.state.rectArea,Jt.ltc_1.value=J.state.rectAreaLTC1,Jt.ltc_2.value=J.state.rectAreaLTC2,Jt.pointLights.value=J.state.point,Jt.pointLightShadows.value=J.state.pointShadow,Jt.hemisphereLights.value=J.state.hemi,Jt.directionalShadowMap.value=J.state.directionalShadowMap,Jt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Jt.spotShadowMap.value=J.state.spotShadowMap,Jt.spotLightMatrix.value=J.state.spotLightMatrix,Jt.spotLightMap.value=J.state.spotLightMap,Jt.pointShadowMap.value=J.state.pointShadowMap,Jt.pointShadowMatrix.value=J.state.pointShadowMatrix),ft.currentProgram=oe,ft.uniformsList=null,oe}function Ca(C){if(C.uniformsList===null){const Q=C.currentProgram.getUniforms();C.uniformsList=Su.seqWithValue(Q.seq,C.uniforms)}return C.uniformsList}function _o(C,Q){const ut=qt.get(C);ut.outputColorSpace=Q.outputColorSpace,ut.batching=Q.batching,ut.batchingColor=Q.batchingColor,ut.instancing=Q.instancing,ut.instancingColor=Q.instancingColor,ut.instancingMorph=Q.instancingMorph,ut.skinning=Q.skinning,ut.morphTargets=Q.morphTargets,ut.morphNormals=Q.morphNormals,ut.morphColors=Q.morphColors,ut.morphTargetsCount=Q.morphTargetsCount,ut.numClippingPlanes=Q.numClippingPlanes,ut.numIntersection=Q.numClipIntersection,ut.vertexAlphas=Q.vertexAlphas,ut.vertexTangents=Q.vertexTangents,ut.toneMapping=Q.toneMapping}function Uu(C,Q,ut,ft,J){Q.isScene!==!0&&(Q=St),z.resetTextureUnits();const Tt=Q.fog,Ut=ft.isMeshStandardMaterial?Q.environment:null,Dt=H===null?N.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:fo,zt=(ft.isMeshStandardMaterial?at:w).get(ft.envMap||Ut),ne=ft.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,oe=!!ut.attributes.tangent&&(!!ft.normalMap||ft.anisotropy>0),Jt=!!ut.morphAttributes.position,Re=!!ut.morphAttributes.normal,De=!!ut.morphAttributes.color;let Ye=fs;ft.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Ye=N.toneMapping);const Xe=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,ye=Xe!==void 0?Xe.length:0,Yt=qt.get(ft),Je=y.state.lights;if(Y===!0&&(ht===!0||C!==R)){const Rn=C===R&&ft.id===D;At.setState(ft,C,Rn)}let Ee=!1;ft.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==Je.state.version||Yt.outputColorSpace!==Dt||J.isBatchedMesh&&Yt.batching===!1||!J.isBatchedMesh&&Yt.batching===!0||J.isBatchedMesh&&Yt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Yt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Yt.instancing===!1||!J.isInstancedMesh&&Yt.instancing===!0||J.isSkinnedMesh&&Yt.skinning===!1||!J.isSkinnedMesh&&Yt.skinning===!0||J.isInstancedMesh&&Yt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Yt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Yt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Yt.instancingMorph===!1&&J.morphTexture!==null||Yt.envMap!==zt||ft.fog===!0&&Yt.fog!==Tt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==At.numPlanes||Yt.numIntersection!==At.numIntersection)||Yt.vertexAlphas!==ne||Yt.vertexTangents!==oe||Yt.morphTargets!==Jt||Yt.morphNormals!==Re||Yt.morphColors!==De||Yt.toneMapping!==Ye||Yt.morphTargetsCount!==ye)&&(Ee=!0):(Ee=!0,Yt.__version=ft.version);let bn=Yt.currentProgram;Ee===!0&&(bn=ea(ft,Q,J));let Qe=!1,Bn=!1,Na=!1;const qe=bn.getUniforms(),dn=Yt.uniforms;if(Rt.useProgram(bn.program)&&(Qe=!0,Bn=!0,Na=!0),ft.id!==D&&(D=ft.id,Bn=!0),Qe||R!==C){Rt.buffers.depth.getReversed()?(st.copy(C.projectionMatrix),Mb(st),bb(st),qe.setValue(k,"projectionMatrix",st)):qe.setValue(k,"projectionMatrix",C.projectionMatrix),qe.setValue(k,"viewMatrix",C.matrixWorldInverse);const Cn=qe.map.cameraPosition;Cn!==void 0&&Cn.setValue(k,Bt.setFromMatrixPosition(C.matrixWorld)),$t.logarithmicDepthBuffer&&qe.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ft.isMeshPhongMaterial||ft.isMeshToonMaterial||ft.isMeshLambertMaterial||ft.isMeshBasicMaterial||ft.isMeshStandardMaterial||ft.isShaderMaterial)&&qe.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,Bn=!0,Na=!0)}if(J.isSkinnedMesh){qe.setOptional(k,J,"bindMatrix"),qe.setOptional(k,J,"bindMatrixInverse");const Rn=J.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),qe.setValue(k,"boneTexture",Rn.boneTexture,z))}J.isBatchedMesh&&(qe.setOptional(k,J,"batchingTexture"),qe.setValue(k,"batchingTexture",J._matricesTexture,z),qe.setOptional(k,J,"batchingIdTexture"),qe.setValue(k,"batchingIdTexture",J._indirectTexture,z),qe.setOptional(k,J,"batchingColorTexture"),J._colorsTexture!==null&&qe.setValue(k,"batchingColorTexture",J._colorsTexture,z));const xn=ut.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&ie.update(J,ut,bn),(Bn||Yt.receiveShadow!==J.receiveShadow)&&(Yt.receiveShadow=J.receiveShadow,qe.setValue(k,"receiveShadow",J.receiveShadow)),ft.isMeshGouraudMaterial&&ft.envMap!==null&&(dn.envMap.value=zt,dn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),ft.isMeshStandardMaterial&&ft.envMap===null&&Q.environment!==null&&(dn.envMapIntensity.value=Q.environmentIntensity),Bn&&(qe.setValue(k,"toneMappingExposure",N.toneMappingExposure),Yt.needsLights&&Tl(dn,Na),Tt&&ft.fog===!0&&Nt.refreshFogUniforms(dn,Tt),Nt.refreshMaterialUniforms(dn,ft,W,tt,y.state.transmissionRenderTarget[C.id]),Su.upload(k,Ca(Yt),dn,z)),ft.isShaderMaterial&&ft.uniformsNeedUpdate===!0&&(Su.upload(k,Ca(Yt),dn,z),ft.uniformsNeedUpdate=!1),ft.isSpriteMaterial&&qe.setValue(k,"center",J.center),qe.setValue(k,"modelViewMatrix",J.modelViewMatrix),qe.setValue(k,"normalMatrix",J.normalMatrix),qe.setValue(k,"modelMatrix",J.matrixWorld),ft.isShaderMaterial||ft.isRawShaderMaterial){const Rn=ft.uniformsGroups;for(let Cn=0,tr=Rn.length;Cn<tr;Cn++){const na=Rn[Cn];X.update(na,bn),X.bind(na,bn)}}return bn}function Tl(C,Q){C.ambientLightColor.needsUpdate=Q,C.lightProbe.needsUpdate=Q,C.directionalLights.needsUpdate=Q,C.directionalLightShadows.needsUpdate=Q,C.pointLights.needsUpdate=Q,C.pointLightShadows.needsUpdate=Q,C.spotLights.needsUpdate=Q,C.spotLightShadows.needsUpdate=Q,C.rectAreaLights.needsUpdate=Q,C.hemisphereLights.needsUpdate=Q}function xo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(C,Q,ut){qt.get(C.texture).__webglTexture=Q,qt.get(C.depthTexture).__webglTexture=ut;const ft=qt.get(C);ft.__hasExternalTextures=!0,ft.__autoAllocateDepthBuffer=ut===void 0,ft.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ft.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,Q){const ut=qt.get(C);ut.__webglFramebuffer=Q,ut.__useDefaultFramebuffer=Q===void 0};const gs=k.createFramebuffer();this.setRenderTarget=function(C,Q=0,ut=0){H=C,G=Q,P=ut;let ft=!0,J=null,Tt=!1,Ut=!1;if(C){const zt=qt.get(C);if(zt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(k.FRAMEBUFFER,null),ft=!1;else if(zt.__webglFramebuffer===void 0)z.setupRenderTarget(C);else if(zt.__hasExternalTextures)z.rebindTextures(C,qt.get(C.texture).__webglTexture,qt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Jt=C.depthTexture;if(zt.__boundDepthTexture!==Jt){if(Jt!==null&&qt.has(Jt)&&(C.width!==Jt.image.width||C.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(C)}}const ne=C.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Ut=!0);const oe=qt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(oe[Q])?J=oe[Q][ut]:J=oe[Q],Tt=!0):C.samples>0&&z.useMultisampledRTT(C)===!1?J=qt.get(C).__webglMultisampledFramebuffer:Array.isArray(oe)?J=oe[ut]:J=oe,F.copy(C.viewport),rt.copy(C.scissor),$=C.scissorTest}else F.copy(Ct).multiplyScalar(W).floor(),rt.copy(Qt).multiplyScalar(W).floor(),$=de;if(ut!==0&&(J=gs),Rt.bindFramebuffer(k.FRAMEBUFFER,J)&&ft&&Rt.drawBuffers(C,J),Rt.viewport(F),Rt.scissor(rt),Rt.setScissorTest($),Tt){const zt=qt.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Q,zt.__webglTexture,ut)}else if(Ut){const zt=qt.get(C.texture),ne=Q;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,zt.__webglTexture,ut,ne)}else if(C!==null&&ut!==0){const zt=qt.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,zt.__webglTexture,ut)}D=-1},this.readRenderTargetPixels=function(C,Q,ut,ft,J,Tt,Ut){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=qt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ut!==void 0&&(Dt=Dt[Ut]),Dt){Rt.bindFramebuffer(k.FRAMEBUFFER,Dt);try{const zt=C.texture,ne=zt.format,oe=zt.type;if(!$t.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=C.width-ft&&ut>=0&&ut<=C.height-J&&k.readPixels(Q,ut,ft,J,fe.convert(ne),fe.convert(oe),Tt)}finally{const zt=H!==null?qt.get(H).__webglFramebuffer:null;Rt.bindFramebuffer(k.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(C,Q,ut,ft,J,Tt,Ut){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=qt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ut!==void 0&&(Dt=Dt[Ut]),Dt){const zt=C.texture,ne=zt.format,oe=zt.type;if(!$t.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Q>=0&&Q<=C.width-ft&&ut>=0&&ut<=C.height-J){Rt.bindFramebuffer(k.FRAMEBUFFER,Dt);const Jt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Jt),k.bufferData(k.PIXEL_PACK_BUFFER,Tt.byteLength,k.STREAM_READ),k.readPixels(Q,ut,ft,J,fe.convert(ne),fe.convert(oe),0);const Re=H!==null?qt.get(H).__webglFramebuffer:null;Rt.bindFramebuffer(k.FRAMEBUFFER,Re);const De=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Sb(k,De,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Jt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Tt),k.deleteBuffer(Jt),k.deleteSync(De),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,Q=null,ut=0){C.isTexture!==!0&&(Xs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Q=arguments[0]||null,C=arguments[1]);const ft=Math.pow(2,-ut),J=Math.floor(C.image.width*ft),Tt=Math.floor(C.image.height*ft),Ut=Q!==null?Q.x:0,Dt=Q!==null?Q.y:0;z.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,ut,0,0,Ut,Dt,J,Tt),Rt.unbindTexture()};const Lu=k.createFramebuffer(),Al=k.createFramebuffer();this.copyTextureToTexture=function(C,Q,ut=null,ft=null,J=0,Tt=null){C.isTexture!==!0&&(Xs("WebGLRenderer: copyTextureToTexture function signature has changed."),ft=arguments[0]||null,C=arguments[1],Q=arguments[2],Tt=arguments[3]||0,ut=null),Tt===null&&(J!==0?(Xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=J,J=0):Tt=0);let Ut,Dt,zt,ne,oe,Jt,Re,De,Ye;const Xe=C.isCompressedTexture?C.mipmaps[Tt]:C.image;if(ut!==null)Ut=ut.max.x-ut.min.x,Dt=ut.max.y-ut.min.y,zt=ut.isBox3?ut.max.z-ut.min.z:1,ne=ut.min.x,oe=ut.min.y,Jt=ut.isBox3?ut.min.z:0;else{const xn=Math.pow(2,-J);Ut=Math.floor(Xe.width*xn),Dt=Math.floor(Xe.height*xn),C.isDataArrayTexture?zt=Xe.depth:C.isData3DTexture?zt=Math.floor(Xe.depth*xn):zt=1,ne=0,oe=0,Jt=0}ft!==null?(Re=ft.x,De=ft.y,Ye=ft.z):(Re=0,De=0,Ye=0);const ye=fe.convert(Q.format),Yt=fe.convert(Q.type);let Je;Q.isData3DTexture?(z.setTexture3D(Q,0),Je=k.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(z.setTexture2DArray(Q,0),Je=k.TEXTURE_2D_ARRAY):(z.setTexture2D(Q,0),Je=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Q.unpackAlignment);const Ee=k.getParameter(k.UNPACK_ROW_LENGTH),bn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Qe=k.getParameter(k.UNPACK_SKIP_PIXELS),Bn=k.getParameter(k.UNPACK_SKIP_ROWS),Na=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Xe.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Xe.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ne),k.pixelStorei(k.UNPACK_SKIP_ROWS,oe),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Jt);const qe=C.isDataArrayTexture||C.isData3DTexture,dn=Q.isDataArrayTexture||Q.isData3DTexture;if(C.isDepthTexture){const xn=qt.get(C),Rn=qt.get(Q),Cn=qt.get(xn.__renderTarget),tr=qt.get(Rn.__renderTarget);Rt.bindFramebuffer(k.READ_FRAMEBUFFER,Cn.__webglFramebuffer),Rt.bindFramebuffer(k.DRAW_FRAMEBUFFER,tr.__webglFramebuffer);for(let na=0;na<zt;na++)qe&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,qt.get(C).__webglTexture,J,Jt+na),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,qt.get(Q).__webglTexture,Tt,Ye+na)),k.blitFramebuffer(ne,oe,Ut,Dt,Re,De,Ut,Dt,k.DEPTH_BUFFER_BIT,k.NEAREST);Rt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(J!==0||C.isRenderTargetTexture||qt.has(C)){const xn=qt.get(C),Rn=qt.get(Q);Rt.bindFramebuffer(k.READ_FRAMEBUFFER,Lu),Rt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Al);for(let Cn=0;Cn<zt;Cn++)qe?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,xn.__webglTexture,J,Jt+Cn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,xn.__webglTexture,J),dn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Rn.__webglTexture,Tt,Ye+Cn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Rn.__webglTexture,Tt),J!==0?k.blitFramebuffer(ne,oe,Ut,Dt,Re,De,Ut,Dt,k.COLOR_BUFFER_BIT,k.NEAREST):dn?k.copyTexSubImage3D(Je,Tt,Re,De,Ye+Cn,ne,oe,Ut,Dt):k.copyTexSubImage2D(Je,Tt,Re,De,ne,oe,Ut,Dt);Rt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else dn?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(Je,Tt,Re,De,Ye,Ut,Dt,zt,ye,Yt,Xe.data):Q.isCompressedArrayTexture?k.compressedTexSubImage3D(Je,Tt,Re,De,Ye,Ut,Dt,zt,ye,Xe.data):k.texSubImage3D(Je,Tt,Re,De,Ye,Ut,Dt,zt,ye,Yt,Xe):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Tt,Re,De,Ut,Dt,ye,Yt,Xe.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Tt,Re,De,Xe.width,Xe.height,ye,Xe.data):k.texSubImage2D(k.TEXTURE_2D,Tt,Re,De,Ut,Dt,ye,Yt,Xe);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ee),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,bn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Qe),k.pixelStorei(k.UNPACK_SKIP_ROWS,Bn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Na),Tt===0&&Q.generateMipmaps&&k.generateMipmap(Je),Rt.unbindTexture()},this.copyTextureToTexture3D=function(C,Q,ut=null,ft=null,J=0){return C.isTexture!==!0&&(Xs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ut=arguments[0]||null,ft=arguments[1]||null,C=arguments[2],Q=arguments[3],J=arguments[4]||0),Xs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,Q,ut,ft,J)},this.initRenderTarget=function(C){qt.get(C).__webglFramebuffer===void 0&&z.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?z.setTextureCube(C,0):C.isData3DTexture?z.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?z.setTexture2DArray(C,0):z.setTexture2D(C,0),Rt.unbindTexture()},this.resetState=function(){G=0,P=0,H=null,Rt.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=Le._getDrawingBufferColorSpace(e),i.unpackColorSpace=Le._getUnpackColorSpace()}}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=o=>o==null?void 0:o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function qw(o,e,i=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:Xw(o),size:24,node:e,...i.length>0?{aliases:i}:{}}}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=o=>{let e="",i=!1;for(const r of o){if(r==="-"||r==="_"||r<=" "){i=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=i?r.toUpperCase():r,i=!1}return e};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=o=>{const e=Ww(o);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=(...o)=>o.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function kh(o){return o!=null}function Zw(o,e={}){var g,M;const i=e.attributeNames??{},r=E=>i[E]??E,c=o.size??o.width??ks.width,f=o.size??o.height??ks.height,d=((g=o.aliases)==null?void 0:g.filter(E=>typeof E=="string"&&E.trim()!=="").map(E=>`lucide-${E}`))??[],h=[...o.name?[`lucide-${o.name}`]:[],...d],p=((M=e.className)==null?void 0:M.split(" ").filter(Boolean))??[],_=e.includeDefaultClasses===!1?Lp(...p):Lp("lucide",...h,...p),x=e.absoluteStrokeWidth?Number(e.strokeWidth??ks["stroke-width"])*Number(o.size??o.width??ks.width)/Number(e.size??e.width??ks.width):e.strokeWidth??ks["stroke-width"];return["svg",{...Object.entries(ks).reduce((E,[b,S])=>(E[r(b)]=S,E),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&kh(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&kh(e.width)&&{[r("width")]:e.width},..."height"in e&&kh(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:x,..._&&{[r("class")]:_},[r("viewBox")]:`0 0 ${c} ${f}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},o.node.map(E=>{const[b,S,y]=E,O=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...S}:S;return y?[b,O,y]:[b,O]})]}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Kw(o,e={}){return Zw(o,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},$w=Wt.createContext({}),Jw=()=>Wt.useContext($w),tR=Wt.forwardRef(({color:o,size:e,width:i,height:r,strokeWidth:c,absoluteStrokeWidth:f,nonScalingStroke:d,className:h="",children:p,iconNode:_=[],icon:x={node:_,aliases:[],size:24},...m},g)=>{const{size:M=24,strokeWidth:E=2,absoluteStrokeWidth:b=!1,nonScalingStroke:S=!1,color:y="currentColor",className:O=""}=Jw()??{},L=!!p||Qw(m),[N,V,G=[]]=Kw(x,{color:o??y,width:i??e??M,height:r??e??M,strokeWidth:c??E,absoluteStrokeWidth:f??b,nonScalingStroke:d??S,className:Lp(O,h),hasA11yProp:L,attributes:m});return Wt.createElement(N,{ref:g,...V},[...G.map(([P,H])=>Wt.createElement(P,H)),...Array.isArray(p)?p:[p]])});/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ie(o,e=[],i=[]){const r=typeof o=="string"?qw(o,e,i):o,c=Wt.forwardRef(({className:f,...d},h)=>Wt.createElement(tR,{ref:h,icon:r,className:f,...d}));return r.name&&(c.displayName=Yw(r.name)),c}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx={name:"award",size:24,node:[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]};Qx.node;const $x=Ie(Qx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx={name:"book-open",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]]};Jx.node;const ty=Ie(Jx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey={name:"camera",size:24,node:[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]};ey.node;const eR=Ie(ey);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};ny.node;const nR=Ie(ny);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy={name:"chevron-up",size:24,node:[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]};iy.node;const iR=Ie(iy);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};ay.node;const aR=Ie(ay);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy={name:"circle-check-big",size:24,node:[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-circle"]};sy.node;const sR=Ie(sy);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};ry.node;const oy=Ie(ry);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]};ly.node;const cy=Ie(ly);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy={name:"circle-x",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],aliases:["x-circle"]};uy.node;const rR=Ie(uy);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy={name:"compass",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]]};fy.node;const dy=Ie(fy);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy={name:"crosshair",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]};hy.node;const oR=Ie(hy);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]};py.node;const lR=Ie(py);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};my.node;const cR=Ie(my);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy={name:"gauge",size:24,node:[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]};gy.node;const uR=Ie(gy);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy={name:"grid-3x3",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],aliases:["grid","grid-3-x-3"]};vy.node;const fR=Ie(vy);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};_y.node;const ux=Ie(_y);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy={name:"lightbulb",size:24,node:[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]};xy.node;const yy=Ie(xy);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};Sy.node;const Du=Ie(Sy);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]};My.node;const by=Ie(My);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};Ey.node;const Ty=Ie(Ey);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};Ay.node;const dR=Ie(Ay);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy={name:"rotate-cw",size:24,node:[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]};wy.node;const fx=Ie(wy);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry={name:"save",size:24,node:[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]};Ry.node;const hR=Ie(Ry);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};Cy.node;const Ny=Ie(Cy);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Dy.node;const pR=Ie(Dy);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};Uy.node;const bl=Ie(Uy);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};Ly.node;const mR=Ie(Ly);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};Oy.node;const gR=Ie(Oy);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy={name:"waves-horizontal",size:24,node:[["path",{d:"M2 12q2.5 2 5 0t5 0 5 0 5 0",key:"8ddzzs"}],["path",{d:"M2 19q2.5 2 5 0t5 0 5 0 5 0",key:"1wj4st"}],["path",{d:"M2 5q2.5 2 5 0t5 0 5 0 5 0",key:"69x50u"}]],aliases:["waves"]};zy.node;const Py=Ie(zy);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};Iy.node;const vR=Ie(Iy);function _R({currentSource:o,gratingPreset:e,slitWidthUm:i,telescopeAngleDeg:r,onTelescopeAngleChange:c,isDarkRoom:f,ambientLux:d,isNormalIncidence:h,gratingTiltDeg:p,onTiltChange:_,showRays:x=!0,cameraPreset:m="overview"}){const g=Wt.useRef(null),M=Wt.useRef(null),E=Wt.useRef(null),b=Wt.useRef(null),S=Wt.useRef(null),y=Wt.useRef(null),O=Wt.useRef(null),L=Wt.useRef(null),N=Wt.useRef(null),V=Wt.useRef(!1),G=Wt.useRef({x:0,y:0}),P=Wt.useRef(new nt(0,.5,0)),H=Wt.useRef({radius:8,theta:.8,phi:.9}),D={overview:{radius:7.5,theta:.75,phi:.85,target:new nt(0,.4,0)},topdown:{radius:7,theta:0,phi:.05,target:new nt(0,0,0)},grating:{radius:3.5,theta:.9,phi:1.1,target:new nt(0,.5,0)},eyepiece:{radius:3.8,theta:-Math.PI/2,phi:1.25,target:new nt(0,.5,0)}};Wt.useEffect(()=>{const B=g.current;if(!B)return;const tt=B.clientWidth,W=B.clientHeight,gt=new Yb;M.current=gt,gt.background=new he(f?329485:1975608),gt.fog=new jp(f?329485:1975608,.04);const yt=new Mi(45,tt/W,.1,100);b.current=yt,R();const Ct=new jw({antialias:!0,alpha:!0,powerPreference:"high-performance"});Ct.setSize(tt,W),Ct.setPixelRatio(Math.min(window.devicePixelRatio,2)),Ct.shadowMap.enabled=!0,Ct.shadowMap.type=vx,E.current=Ct,B.appendChild(Ct.domElement);const Qt=new sE(f?1119781:16777215,f?.35:1.2);L.current=Qt,gt.add(Qt);const de=new aE(16777215,f?.6:1.4);de.position.set(5,10,7),de.castShadow=!0,de.shadow.mapSize.width=1024,de.shadow.mapSize.height=1024,N.current=de,gt.add(de);const U=new ln(4.5,4.5,.2,64),Y=new to({color:1448742,roughness:.4,metalness:.6}),ht=new Ce(U,Y);ht.position.y=-.1,ht.receiveShadow=!0,gt.add(ht);const st=new oE(8,32,61695,1976635);st.position.y=.005,gt.add(st);const Mt=new Ea;gt.add(Mt);const Bt=new ln(1.6,1.8,.35,32),Et=new to({color:2040880,roughness:.3,metalness:.85}),St=new to({color:13938487,roughness:.25,metalness:.9}),wt=new to({color:14673641,roughness:.2,metalness:.95}),Zt=new Ce(Bt,Et);Zt.position.y=.175,Mt.add(Zt);for(let le=0;le<3;le++){const be=le*2*Math.PI/3,$e=new Ce(new ln(.12,.12,.45,16),St);$e.position.set(Math.cos(be)*1.5,.1,Math.sin(be)*1.5),Mt.add($e);const _n=new Ce(new ln(.2,.2,.1,16),St);_n.position.set(Math.cos(be)*1.5,.05,Math.sin(be)*1.5),Mt.add(_n)}const k=new Ce(new ln(.4,.45,1.2,32),wt);k.position.y=.8,Mt.add(k);const nn=new ln(1.5,1.5,.08,64),te=new Ce(nn,wt);te.position.y=1.35,Mt.add(te);const $t=new qp(1.48,.02,8,64),Rt=new Ce($t,St);Rt.rotation.x=Math.PI/2,Rt.position.y=1.39,Mt.add(Rt);const ue=new Ea;ue.position.set(-1.8,1.6,0);const qt=new Ce(new ln(.14,.14,1.8,24),Et);qt.rotation.z=Math.PI/2,ue.add(qt);const z=new Ce(new ln(.17,.17,.2,24),St);z.rotation.z=Math.PI/2,z.position.x=.8,ue.add(z);const w=new Ce(new ln(.18,.18,.25,24),St);w.rotation.z=Math.PI/2,w.position.x=-.9,ue.add(w);const at=new Ce(new ln(.05,.05,.35,16),St);at.position.set(-.9,.22,0),ue.add(at);const _t=new Zi(.8,1,.8),bt=new to({color:1119e3,roughness:.5,metalness:.8}),vt=new Ce(_t,bt);vt.position.set(-3.2,1.6,0),ue.add(vt);const jt=new Ce(new ln(.1,.1,.5,16),Et);jt.rotation.z=Math.PI/2,jt.position.set(-2.45,1.6,0),ue.add(jt),Mt.add(ue);const Nt=new Ea;Nt.position.set(0,1.45,0),y.current=Nt,Mt.add(Nt);const Ft=new Ce(new ln(.9,.9,.08,32),Et);Nt.add(Ft);for(let le=0;le<3;le++){const be=le*2*Math.PI/3,$e=new Ce(new ln(.04,.04,.2,12),St);$e.position.set(Math.cos(be)*.75,-.06,Math.sin(be)*.75),Nt.add($e)}const ve=new Ce(new Zi(.08,.6,.08),Et);ve.position.set(0,.35,-.4),Nt.add(ve);const At=new Zi(.08,.75,.75),Vt=new Ce(At,St);Vt.position.set(0,.35,0),Nt.add(Vt);const ee=new Zi(.02,.65,.65),ie=new Jb({color:9489145,transmission:.9,opacity:1,transparent:!0,roughness:.1,ior:1.52,thickness:.02,iridescence:.9,iridescenceIOR:1.3}),Gt=new Ce(ee,ie);Gt.position.set(0,.35,0),Nt.add(Gt);const se=new Ea;se.position.set(0,1.6,0),S.current=se,Mt.add(se);const fe=new Ce(new Zi(1.6,.06,.14),Et);fe.position.set(1,-.15,0),se.add(fe);const ze=new Ce(new ln(.35,.35,.03,24),wt);ze.position.set(1.4,-.18,0),se.add(ze);const X=new Ce(new ln(.12,.12,.15,16),St);X.position.set(1.4,-.08,0),se.add(X);const Ot=new Ce(new ln(.15,.15,2,24),Et);Ot.rotation.z=Math.PI/2,Ot.position.set(1.8,0,0),se.add(Ot);const dt=new Ce(new ln(.18,.18,.22,24),St);dt.rotation.z=Math.PI/2,dt.position.set(.85,0,0),se.add(dt);const xt=new Ce(new ln(.11,.11,.5,20),wt);xt.rotation.z=Math.PI/2,xt.position.set(2.9,0,0),se.add(xt);const Pt=new Ce(new ln(.16,.16,.08,20),St);Pt.position.set(2.5,.15,0),se.add(Pt);const It=new Ea;It.position.set(0,1.6,0),O.current=It,Mt.add(It);const re=()=>{if(!B||!Ct||!yt)return;const le=B.clientWidth,be=B.clientHeight;yt.aspect=le/be,yt.updateProjectionMatrix(),Ct.setSize(le,be)};window.addEventListener("resize",re);let je;const un=()=>{je=requestAnimationFrame(un),Ct.render(gt,yt)};return un(),()=>{window.removeEventListener("resize",re),cancelAnimationFrame(je),Ct.domElement&&B.contains(Ct.domElement)&&B.removeChild(Ct.domElement),Ct.dispose()}},[]);const R=()=>{if(!b.current)return;const{radius:B,theta:tt,phi:W,target:gt}={radius:H.current.radius,theta:H.current.theta,phi:H.current.phi,target:P.current},yt=gt.x+B*Math.sin(W)*Math.cos(tt),Ct=gt.y+B*Math.cos(W),Qt=gt.z+B*Math.sin(W)*Math.sin(tt);b.current.position.set(yt,Ct,Qt),b.current.lookAt(gt)},F=B=>{V.current=!0,G.current={x:B.clientX,y:B.clientY}},rt=B=>{if(!V.current)return;const tt=B.clientX-G.current.x,W=B.clientY-G.current.y;H.current.theta-=tt*.007,H.current.phi=Math.max(.1,Math.min(Math.PI/2-.05,H.current.phi-W*.007)),G.current={x:B.clientX,y:B.clientY},R()},$=()=>{V.current=!1},ct=B=>{B.preventDefault(),H.current.radius=Math.max(2.5,Math.min(14,H.current.radius+B.deltaY*.005)),R()},ot=B=>{const tt=D[B]||D.overview;H.current.radius=tt.radius,H.current.theta=tt.theta,H.current.phi=tt.phi,P.current.copy(tt.target),R()};return Wt.useEffect(()=>{if(S.current){const B=r*Math.PI/180;S.current.rotation.y=-B}},[r]),Wt.useEffect(()=>{if(y.current){const B=p*Math.PI/180;y.current.rotation.y=B}},[p]),Wt.useEffect(()=>{if(M.current&&L.current&&N.current){const B=f?461070:2239037;M.current.background=new he(B),M.current.fog&&(M.current.fog.color=new he(B));const tt=f?.35:1.3,W=f?.5:1.4;L.current.intensity=tt,L.current.color=new he(f?1712435:16777215),N.current.intensity=W}},[f,d]),Wt.useEffect(()=>{if(!O.current)return;const B=O.current;for(;B.children.length>0;){const st=B.children[0];B.remove(st),st.geometry&&st.geometry.dispose(),st.material&&st.material.dispose()}if(!x)return;const tt=(st,Mt,Bt,Et=.02,St=.85)=>{const Zt=new nt().subVectors(Mt,st).length(),k=new ln(Et,Et,Zt,12);k.translate(0,Zt/2,0),k.rotateX(Math.PI/2);const nn=new kp({color:new he(Bt),transparent:!0,opacity:f?St:St*.45,blending:Xh}),te=new Ce(k,nn);return te.position.copy(st),te.lookAt(Mt),te},W=new nt(-2.8,0,0),gt=new nt(0,0,0);let yt="#FFFFFF";o.id.includes("laser_red")?yt="#FF1744":o.id.includes("laser_green")?yt="#00E676":o.id==="mercury"?yt="#E0F7FA":o.id==="sodium"?yt="#FFB300":o.id==="led_white"&&(yt="#E3F2FD");const Ct=tt(W,gt,yt,.04,.9);B.add(Ct);const Qt=new nt(3.2,0,0),de=tt(gt,Qt,yt,.035,.85);B.add(de);const U=3.2,Y=e.linesPerCm,ht=p;if(o.lines&&o.lines.forEach(st=>{const Mt=gl(st.lambda,Y,1,ht);if(Mt){const Et=Mt.angleDeg*Math.PI/180,St=Math.cos(Et)*U,wt=-Math.sin(Et)*U,Zt=tt(gt,new nt(St,0,wt),st.hex,.02,st.intensity*.9);B.add(Zt)}const Bt=gl(st.lambda,Y,-1,ht);if(Bt){const Et=Bt.angleDeg*Math.PI/180,St=Math.cos(Et)*U,wt=-Math.sin(Et)*U,Zt=tt(gt,new nt(St,0,wt),st.hex,.02,st.intensity*.9);B.add(Zt)}}),o.isContinuous&&!o.isLED)for(let st=400;st<=700;st+=12){const Mt=so(st);[1,-1].forEach(Bt=>{const Et=gl(st,Y,Bt,ht);if(Et){const St=Et.angleDeg*Math.PI/180,wt=Math.cos(St)*U,Zt=-Math.sin(St)*U,k=tt(gt,new nt(wt,0,Zt),Mt.css,.018,.7);B.add(k)}})}if(o.isLED)for(let st=430;st<=660;st+=15){const Mt=so(st);[1,-1].forEach(Bt=>{const Et=gl(st,Y,Bt,ht);if(Et){const St=Et.angleDeg*Math.PI/180,wt=Math.cos(St)*U,Zt=-Math.sin(St)*U,k=tt(gt,new nt(wt,0,Zt),Mt.css,.035,.45);B.add(k)}})}},[o,e,p,x,f]),T.jsxs("div",{className:"relative w-full h-[540px] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl select-none",children:[T.jsx("div",{ref:g,onMouseDown:F,onMouseMove:rt,onMouseUp:$,onWheel:ct,className:"w-full h-full cursor-grab active:cursor-grabbing"}),T.jsxs("div",{className:"absolute top-4 left-4 flex flex-wrap gap-2 pointer-events-auto",children:[T.jsxs("button",{onClick:()=>ot("overview"),className:"px-3 py-1.5 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 flex items-center gap-1.5 transition-all shadow-lg",children:[T.jsx(eR,{className:"w-3.5 h-3.5 text-cyan-400"})," 3D Lab Overview"]}),T.jsxs("button",{onClick:()=>ot("topdown"),className:"px-3 py-1.5 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 flex items-center gap-1.5 transition-all shadow-lg",children:[T.jsx(dy,{className:"w-3.5 h-3.5 text-emerald-400"})," Ray Angles (Top-Down)"]}),T.jsxs("button",{onClick:()=>ot("grating"),className:"px-3 py-1.5 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 flex items-center gap-1.5 transition-all shadow-lg",children:[T.jsx(fx,{className:"w-3.5 h-3.5 text-amber-400"})," Grating Table"]})]}),T.jsxs("div",{className:"absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/70 rounded-xl px-4 py-2.5 shadow-xl text-right",children:[T.jsx("div",{className:"text-[11px] font-mono uppercase tracking-wider text-slate-400",children:"Telescope Position"}),T.jsxs("div",{className:"text-xl font-bold font-mono text-cyan-400",children:[r.toFixed(2),"°"]}),T.jsxs("div",{className:"text-[10px] text-slate-400 flex items-center justify-end gap-1 mt-0.5",children:[T.jsx("span",{children:"Incidence:"}),T.jsx("span",{className:Math.abs(p)<.1?"text-emerald-400 font-semibold":"text-amber-400 font-semibold",children:Math.abs(p)<.1?"Normal (90.0°)":`Tilted (${p>0?"+":""}${p.toFixed(1)}°)`})]})]}),T.jsxs("div",{className:"absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-lg px-3 py-1.5 text-[11px] text-slate-400 flex items-center gap-2",children:[T.jsx(fx,{className:"w-3 h-3 text-cyan-400 animate-spin-slow"}),T.jsx("span",{children:"Click & Drag to rotate 3D view • Scroll to zoom"})]}),T.jsx("div",{className:"absolute bottom-4 right-4 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-lg px-3 py-1.5 text-[11px]",children:f?T.jsxs(T.Fragment,{children:[T.jsx(Du,{className:"w-3.5 h-3.5 text-indigo-400"}),T.jsx("span",{className:"text-indigo-300 font-medium",children:"Darkened Lab (Peak Contrast)"})]}):T.jsxs(T.Fragment,{children:[T.jsx(bl,{className:"w-3.5 h-3.5 text-amber-400"}),T.jsxs("span",{className:"text-amber-300 font-medium",children:["Daylight Room (",d," Lux - High Glare)"]})]})})]})}function xR({currentSource:o,gratingPreset:e,slitWidthUm:i,telescopeAngleDeg:r,gratingTiltDeg:c,ambientLux:f,isDarkRoom:d,onRecordReading:h}){const p=e.linesPerCm,_=c,x=Wt.useMemo(()=>D1(f),[f]),m=Wt.useMemo(()=>c_(r),[r]),g=Wt.useMemo(()=>c_(r+180),[r]),M=9,E=Wt.useMemo(()=>{const O=[],L=(V,G,P,H,D)=>{const R=gl(V,p,D,_);if(!R)return;const F=R.angleDeg-r;if(Math.abs(F)<=M/2){const rt=50+F/(M/2)*50,$=x.contrastRatio,ct=H*$,ot=ct<.15&&!d;O.push({lambda:V,name:`${G} (m=${D>0?`+${D}`:D})`,order:D,hex:P,angleDeg:R.angleDeg,diffFromCenter:F,xPercent:rt,baseIntensity:H,effectiveIntensity:ct,isWashedOut:ot,isAligned:Math.abs(F)<.12})}},N=_-r;if(Math.abs(N)<=M/2&&O.push({lambda:0,name:"Central Zeroth Order (m=0)",order:0,hex:o.id.includes("laser_red")?"#FF1744":o.id.includes("laser_green")?"#00E676":"#FFFFFF",angleDeg:_,diffFromCenter:N,xPercent:50+N/(M/2)*50,baseIntensity:1,effectiveIntensity:1,isWashedOut:!1,isAligned:Math.abs(N)<.12}),o.lines&&o.lines.forEach(V=>{[1,-1,2,-2].forEach(G=>{L(V.lambda,V.name,V.hex,V.intensity,G)})}),o.isContinuous&&!o.isLED)for(let V=400;V<=700;V+=6){const G=so(V);[1,-1].forEach(P=>{L(V,`${V}nm`,G.css,.75,P)})}if(o.isLED)for(let V=430;V<=660;V+=8){const G=so(V);[1,-1].forEach(P=>{L(V,`${V}nm (Diffuse)`,G.css,.5,P)})}return O},[o,p,_,r,x,d]),b=E.find(O=>O.isAligned),S=()=>{b&&(en.playSuccessChime(),h({color:b.name,lambdaTheory:b.lambda,v1Reading:m.totalFormatted,v2Reading:g.totalFormatted,angleDeg:Number(b.angleDeg.toFixed(2)),order:b.order}))},y=Math.max(1.5,Math.min(18,i/100*8));return T.jsxs("div",{className:"flex flex-col gap-3 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl",children:[T.jsxs("div",{className:"flex items-center justify-between",children:[T.jsxs("div",{className:"flex items-center gap-2",children:[T.jsx(cR,{className:"w-5 h-5 text-cyan-400"}),T.jsx("h3",{className:"font-semibold text-sm text-slate-100 tracking-wide",children:"Telescope Eyepiece Simulator"})]}),T.jsxs("div",{className:"text-xs font-mono text-slate-400",children:["Field of View: ",T.jsx("span",{className:"text-cyan-400",children:"9.0°"})]})]}),T.jsxs("div",{className:"relative w-full aspect-square max-w-[340px] mx-auto rounded-full overflow-hidden border-4 border-slate-700 bg-black shadow-[inset_0_0_40px_rgba(0,0,0,0.9)]",children:[T.jsx("div",{className:"absolute inset-0 pointer-events-none transition-all duration-300",style:{backgroundColor:d?"transparent":`rgba(200, 220, 255, ${x.strayLightGlare*.75})`,backdropFilter:d?"none":`blur(${x.strayLightGlare*2}px)`}}),T.jsx("div",{className:"absolute inset-0 rounded-full shadow-[inset_0_0_60px_#000000] pointer-events-none"}),T.jsx("div",{className:"absolute inset-0 overflow-hidden",children:E.map((O,L)=>O.isWashedOut?null:T.jsx("div",{className:"absolute top-0 bottom-0 transition-transform duration-75 flex flex-col items-center justify-center pointer-events-none",style:{left:`${O.xPercent}%`,transform:"translateX(-50%)",width:`${y}px`,backgroundColor:O.hex,opacity:Math.max(.15,O.effectiveIntensity),boxShadow:d?`0 0 16px ${O.hex}, 0 0 32px ${O.hex}`:`0 0 4px ${O.hex}`},children:O.lambda>0&&Math.abs(O.diffFromCenter)<1.5&&T.jsxs("span",{className:"absolute bottom-6 px-1 py-0.5 rounded text-[9px] font-mono text-white whitespace-nowrap bg-black/80 border border-slate-700",style:{transform:"rotate(-90deg)"},children:[O.lambda," nm"]})},L))}),T.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[T.jsx("div",{className:"absolute top-0 bottom-0 left-1/2 w-[1px] bg-amber-400/80 shadow-[0_0_2px_#fbbf24]"}),T.jsx("div",{className:"absolute left-0 right-0 top-1/2 h-[1px] bg-amber-400/80 shadow-[0_0_2px_#fbbf24]"}),T.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-amber-400/40"})]}),b&&T.jsxs("div",{className:"absolute top-3 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-emerald-500/90 text-slate-950 font-bold text-[10px] tracking-wider uppercase flex items-center gap-1 shadow-lg animate-pulse",children:[T.jsx(oy,{className:"w-3 h-3"}),"Crosshair Locked: ",b.name]}),!d&&f>300&&T.jsx("div",{className:"absolute bottom-3 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded bg-amber-500/80 text-black text-[9px] font-semibold text-center whitespace-nowrap",children:"⚠️ Daylight Glare: Weak lines washed out!"})]}),T.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-1",children:[T.jsxs("div",{className:"bg-slate-950/80 border border-slate-800 rounded-xl p-2.5 text-center",children:[T.jsx("div",{className:"text-[10px] uppercase font-mono text-cyan-400 font-semibold tracking-wider",children:"Vernier 1 (V₁)"}),T.jsx("div",{className:"text-base font-bold font-mono text-slate-100 mt-0.5",children:m.totalFormatted}),T.jsxs("div",{className:"text-[10px] text-slate-400 mt-0.5",children:["MSR: ",m.formattedMSR," | VSR: ",m.formattedVSR]})]}),T.jsxs("div",{className:"bg-slate-950/80 border border-slate-800 rounded-xl p-2.5 text-center",children:[T.jsx("div",{className:"text-[10px] uppercase font-mono text-indigo-400 font-semibold tracking-wider",children:"Vernier 2 (V₂)"}),T.jsx("div",{className:"text-base font-bold font-mono text-slate-100 mt-0.5",children:g.totalFormatted}),T.jsxs("div",{className:"text-[10px] text-slate-400 mt-0.5",children:["MSR: ",g.formattedMSR," | VSR: ",g.formattedVSR]})]})]}),T.jsxs("button",{onClick:S,disabled:!b,className:`w-full py-2.5 px-4 rounded-xl font-medium text-xs flex items-center justify-center gap-2 transition-all shadow-md ${b?"bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 active:scale-[0.98] cursor-pointer":"bg-slate-800/60 text-slate-500 border border-slate-700/40 cursor-not-allowed"}`,children:[T.jsx(oR,{className:"w-4 h-4"}),b?`Record ${b.name} in Lab Notebook`:"Rotate Telescope to Align Line with Crosswire"]})]})}function yR({currentSource:o,onSourceChange:e,gratingPreset:i,onGratingChange:r,slitWidthUm:c,onSlitWidthChange:f,telescopeAngleDeg:d,onTelescopeAngleChange:h,isDarkRoom:p,onToggleDarkRoom:_,ambientLux:x,onAmbientLuxChange:m,isNormalIncidence:g,onToggleNormalIncidence:M,gratingTiltDeg:E,onTiltChange:b,onOpenLedExplanation:S}){const y=L=>{L.id.includes("laser")?en.playLaserHum():en.playLampIgnition(),e(L)},O=L=>{en.playVernierTick(),h(Number((d+L).toFixed(2)))};return T.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-xl flex flex-col gap-4",children:[T.jsxs("div",{children:[T.jsxs("div",{className:"flex items-center justify-between mb-2",children:[T.jsxs("label",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5",children:[T.jsx(yy,{className:"w-4 h-4 text-amber-400"}),"1. Select Light Source"]}),T.jsx("span",{className:"text-[11px] font-mono text-cyan-400 font-semibold",children:o.tag})]}),T.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2",children:mx.map(L=>{const N=o.id===L.id;return T.jsxs("button",{onClick:()=>y(L),className:`p-2 rounded-xl text-left border transition-all text-xs font-medium cursor-pointer ${N?"bg-slate-800 border-cyan-500 text-white shadow-md shadow-cyan-500/10 ring-1 ring-cyan-500":"bg-slate-950/70 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"}`,children:[T.jsxs("div",{className:"flex items-center justify-between",children:[T.jsx("span",{className:"font-semibold truncate",children:L.name.split("(")[0]}),L.id.includes("laser")&&T.jsx(vR,{className:"w-3 h-3 text-rose-400 flex-shrink-0"})]}),T.jsx("div",{className:"text-[10px] text-slate-500 truncate mt-0.5",children:L.id.includes("laser")?"Monochromatic":L.id==="led_white"?"Phosphor / No Lines":"Spectrum"})]},L.id)})}),o.id==="led_white"&&T.jsxs("div",{className:"mt-2.5 p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-start gap-2",children:[T.jsx(aR,{className:"w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5"}),T.jsxs("div",{children:[T.jsx("span",{className:"font-bold",children:"Why LED shows no sharp lines: "}),"LEDs emit via broad semiconductor bandgaps and yellow phosphor fluorescence (~110nm continuum), unlike atomic emission lines!",T.jsx("button",{onClick:S,className:"ml-1 text-cyan-400 underline font-semibold hover:text-cyan-300 cursor-pointer",children:"Read Real Cause"})]})]})]}),T.jsxs("div",{children:[T.jsxs("div",{className:"flex items-center justify-between mb-2",children:[T.jsxs("label",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5",children:[T.jsx(fR,{className:"w-4 h-4 text-cyan-400"}),"2. Diffraction Grating Pitch (d)"]}),T.jsxs("span",{className:"text-[11px] font-mono text-slate-400",children:["d = ",i.pitchNm.toFixed(1)," nm"]})]}),T.jsx("select",{value:i.id,onChange:L=>{en.playSwitchClick();const N=jh.find(V=>V.id===L.target.value);N&&r(N)},className:"w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-medium text-slate-200 focus:outline-none focus:border-cyan-500 cursor-pointer",children:jh.map(L=>T.jsxs("option",{value:L.id,children:[L.name," — (",L.linesPerCm.toFixed(0)," lines/cm)"]},L.id))})]}),T.jsxs("div",{className:"bg-slate-950/80 border border-slate-800 rounded-xl p-3",children:[T.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[T.jsxs("label",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5",children:[T.jsx(uR,{className:"w-4 h-4 text-indigo-400"}),"3. Rotate Telescope (Angle θ)"]}),T.jsx("span",{className:"font-mono text-sm font-bold text-cyan-400",children:d>0?`+${d.toFixed(2)}°`:`${d.toFixed(2)}°`})]}),T.jsx("input",{type:"range",min:-45,max:45,step:.1,value:d,onChange:L=>{en.playVernierTick(),h(Number(L.target.value))},className:"w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg"}),T.jsxs("div",{className:"flex items-center justify-between gap-1.5 mt-2",children:[T.jsxs("div",{className:"flex items-center gap-1",children:[T.jsx("button",{onClick:()=>O(-1),className:"px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300",children:"-1.0°"}),T.jsx("button",{onClick:()=>O(-.1),className:"px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300",children:"-0.1°"}),T.jsx("button",{onClick:()=>O(-.02),className:"px-1.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[11px] font-mono text-cyan-400",title:"Tangent Fine Screw: 1 minute (Least Count)",children:"-1'"})]}),T.jsx("button",{onClick:()=>{en.playSwitchClick(),h(0)},className:"px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-medium hover:bg-cyan-500/20",children:"Zero (0°)"}),T.jsxs("div",{className:"flex items-center gap-1",children:[T.jsx("button",{onClick:()=>O(.02),className:"px-1.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[11px] font-mono text-cyan-400",title:"Tangent Fine Screw: +1 minute (Least Count)",children:"+1'"}),T.jsx("button",{onClick:()=>O(.1),className:"px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300",children:"+0.1°"}),T.jsx("button",{onClick:()=>O(1),className:"px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300",children:"+1.0°"})]})]})]}),T.jsxs("div",{className:"bg-slate-950/80 border border-slate-800 rounded-xl p-3",children:[T.jsxs("div",{className:"flex items-center justify-between mb-2",children:[T.jsxs("label",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5",children:[T.jsx(Ny,{className:"w-4 h-4 text-emerald-400"}),"4. Normal Incidence Setting"]}),T.jsx("span",{className:`text-[10px] font-bold px-2 py-0.5 rounded-full ${Math.abs(E)<.1?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/30":"bg-amber-500/20 text-amber-400 border border-amber-500/30"}`,children:Math.abs(E)<.1?"Exact Normal (90°)":`Tilted (${E>0?"+":""}${E}°)`})]}),T.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[T.jsx("button",{onClick:()=>{en.playSwitchClick(),b(0)},className:`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all ${Math.abs(E)<.1?"bg-emerald-500 text-slate-950 shadow-md":"bg-slate-800 text-slate-400 hover:text-slate-200"}`,children:"Lock Normal Incidence (θᵢ = 0°)"}),T.jsx("button",{onClick:()=>{en.playSwitchClick(),b(8.5)},className:`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all ${Math.abs(E)>=.1?"bg-amber-500 text-slate-950 shadow-md":"bg-slate-800 text-slate-400 hover:text-slate-200"}`,children:"Simulate Tilt Misalignment"})]}),Math.abs(E)>=.1&&T.jsxs("div",{className:"mt-2 text-[11px] text-amber-300 bg-amber-500/10 p-2 rounded-lg border border-amber-500/20",children:["⚠️ ",T.jsx("strong",{children:"Tilt Distortion:"})," Incident angle is not normal! The left and right orders are now asymmetric (θ_left ≠ θ_right) because formula changes to d(sin θᵢ ± sin θ) = mλ."]})]}),T.jsxs("div",{className:"bg-slate-950/80 border border-slate-800 rounded-xl p-3",children:[T.jsxs("div",{className:"flex items-center justify-between mb-2",children:[T.jsxs("label",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5",children:[p?T.jsx(Du,{className:"w-4 h-4 text-indigo-400"}):T.jsx(bl,{className:"w-4 h-4 text-amber-400"}),"5. Laboratory Ambient Lighting"]}),T.jsx("button",{onClick:()=>{en.playSwitchClick(),_()},className:`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${p?"bg-indigo-600 text-white shadow-md shadow-indigo-500/20":"bg-amber-500 text-slate-950"}`,children:p?"Dark Room (Active)":"Daylight Room (Active)"})]}),T.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400 mb-1",children:[T.jsx("span",{children:"Room Ambient Illumination:"}),T.jsxs("span",{className:"font-mono text-cyan-400 font-bold",children:[x," Lux"]})]}),T.jsx("input",{type:"range",min:0,max:800,step:20,value:x,onChange:L=>{const N=Number(L.target.value);m(N)},className:"w-full accent-amber-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"}),T.jsxs("div",{className:"text-[11px] text-slate-400 mt-2 bg-slate-900 p-2 rounded-lg border border-slate-800/80",children:["💡 ",T.jsx("strong",{children:"Physics Fact:"})," Ambient light does ",T.jsx("strong",{children:"NOT"})," change wavelength (λ is invariant)! However, in daylight (high lux), eye pupils constrict and background glare washes out weak violet lines."]})]}),T.jsxs("div",{className:"bg-slate-950/80 border border-slate-800 rounded-xl p-3",children:[T.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[T.jsx("label",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400",children:"6. Collimator Slit Jaw Width"}),T.jsxs("span",{className:"font-mono text-xs text-cyan-400 font-bold",children:[c," μm"]})]}),T.jsx("input",{type:"range",min:15,max:350,step:5,value:c,onChange:L=>f(Number(L.target.value)),className:"w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"}),T.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500 mt-1",children:[T.jsx("span",{children:"Razor Sharp (15 μm)"}),T.jsx("span",{children:"Wide / Blurry (350 μm)"})]})]})]})}function SR(){const o=Wt.useRef(null),[e,i]=Wt.useState(!0),[r,c]=Wt.useState("grating"),[f,d]=Wt.useState(550),[h,p]=Wt.useState(5),[_,x]=Wt.useState(45),[m,g]=Wt.useState(8),M=Wt.useRef(0);return Wt.useEffect(()=>{const E=o.current;if(!E)return;const b=E.getContext("2d");let S;const y=()=>{const O=E.width,L=E.height;b.fillStyle="#06080F",b.fillRect(0,0,O,L);const N=O*.35,V=M.current,G=so(f),P=2.2,H=f/500*22;b.lineWidth=2;const D=20;for(let $=D;$<N;$+=H){const ct=($+V*P)%(N-D),ot=D+ct,B=Math.sin((ot-V*P)*(Math.PI*2/H)),tt=Math.max(.1,(B+1)/2);b.strokeStyle=G.rgba(tt*.8),b.beginPath(),b.moveTo(ot,20),b.lineTo(ot,L-20),b.stroke()}b.fillStyle="#1E293B",b.fillRect(N-4,10,8,L-20);let R=[];const F=L/2;if(r==="grating"){const $=(h-1)*_,ct=F-$/2;for(let ot=0;ot<h;ot++){const B=ct+ot*_;R.push(B),b.clearRect(N-6,B-m/2,12,m),b.fillStyle=G.rgba(.9),b.fillRect(N-2,B-m/2,4,m)}}else{const ct=F;for(let ot=ct-120/2;ot<=ct+120/2;ot+=4)R.push(ot);b.clearRect(N-6,ct-120/2,12,120),b.fillStyle=G.rgba(.9),b.fillRect(N-2,ct-120/2,4,120)}b.lineWidth=1.8;const rt=O-N+50;for(let $=0;$<rt;$+=H){const ct=($+V*P)%rt,ot=Math.sin((ct-V*P)*(Math.PI*2/H)),B=Math.max(.05,(ot+1)/2),tt=Math.max(.02,1-ct/rt);R.forEach(W=>{b.strokeStyle=G.rgba(B*tt*(r==="window"?.15:.45)),b.beginPath(),b.arc(N,W,ct,-Math.PI/2,Math.PI/2),b.stroke()})}if(r==="grating"){const $=H/_;if($<=1){const ct=Math.asin($);b.strokeStyle="#FFFFFF",b.lineWidth=2.5,b.setLineDash([6,4]),b.beginPath(),b.moveTo(N,F),b.lineTo(O-20,F),b.stroke();const ot=O-N-30;b.strokeStyle=G.rgba(.95),b.lineWidth=3,b.setLineDash([]),b.beginPath(),b.moveTo(N,F),b.lineTo(N+Math.cos(ct)*ot,F-Math.sin(ct)*ot),b.stroke(),b.beginPath(),b.moveTo(N,F),b.lineTo(N+Math.cos(ct)*ot,F+Math.sin(ct)*ot),b.stroke(),b.fillStyle="#FFFFFF",b.font="11px JetBrains Mono, monospace",b.fillText(`m = +1 (${(ct*180/Math.PI).toFixed(1)}°)`,O-110,F-Math.sin(ct)*ot-8),b.fillText("m = 0 (Center)",O-110,F-8),b.fillText(`m = -1 (${(ct*180/Math.PI).toFixed(1)}°)`,O-110,F+Math.sin(ct)*ot+18)}}else b.strokeStyle=G.rgba(.9),b.lineWidth=2,b.setLineDash([4,4]),b.beginPath(),b.moveTo(N,F-60),b.lineTo(O-20,F-60),b.moveTo(N,F+60),b.lineTo(O-20,F+60),b.stroke(),b.setLineDash([]),b.fillStyle="#F59E0B",b.font="12px Inter, sans-serif",b.fillText("⚡ Macroscopic Window Gap (a >> λ): Light travels straight (Geometric Optics)!",N+25,F-75),b.fillStyle="#94A3B8",b.font="11px Inter, sans-serif",b.fillText("No visible rainbow or angular dispersion occurs because diffraction angle θ ≈ 0°",N+25,F+85);e&&(M.current+=.5),S=requestAnimationFrame(y)};return y(),()=>cancelAnimationFrame(S)},[e,r,f,h,_,m]),T.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-xl flex flex-col gap-3",children:[T.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3",children:[T.jsxs("div",{className:"flex items-center gap-2",children:[T.jsx(Py,{className:"w-5 h-5 text-cyan-400"}),T.jsx("h3",{className:"font-semibold text-sm text-slate-100",children:"Huygens-Fresnel Wavefront & Interference Simulator"})]}),T.jsxs("div",{className:"flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800",children:[T.jsx("button",{onClick:()=>c("grating"),className:`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${r==="grating"?"bg-cyan-500 text-slate-950 font-bold shadow-md":"text-slate-400 hover:text-slate-200"}`,children:"Diffraction Grating (N Slits)"}),T.jsx("button",{onClick:()=>c("window"),className:`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${r==="window"?"bg-amber-500 text-slate-950 font-bold shadow-md":"text-slate-400 hover:text-slate-200"}`,children:"Window Space Gap (a >> λ)"})]})]}),T.jsxs("div",{className:"relative w-full overflow-hidden rounded-xl border border-slate-800 bg-black aspect-[16/9] max-h-[380px]",children:[T.jsx("canvas",{ref:o,width:800,height:420,className:"w-full h-full block"}),T.jsx("button",{onClick:()=>i(!e),className:"absolute bottom-3 left-3 p-2 rounded-lg bg-slate-900/80 border border-slate-700 text-cyan-400 hover:bg-slate-800 transition-all shadow-md",children:e?T.jsx(by,{className:"w-4 h-4"}):T.jsx(Ty,{className:"w-4 h-4"})})]}),T.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 pt-1",children:[T.jsxs("div",{className:"bg-slate-950/80 border border-slate-800 rounded-xl p-3",children:[T.jsxs("div",{className:"flex justify-between text-xs mb-1.5",children:[T.jsx("span",{className:"text-slate-400",children:"Wavelength (λ)"}),T.jsxs("span",{className:"font-mono font-bold",style:{color:so(f).css},children:[f," nm"]})]}),T.jsx("input",{type:"range",min:390,max:720,step:5,value:f,onChange:E=>d(Number(E.target.value)),className:"w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"}),T.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500 mt-1 font-mono",children:[T.jsx("span",{children:"Violet (390nm)"}),T.jsx("span",{children:"Red (720nm)"})]})]}),T.jsxs("div",{className:"bg-slate-950/80 border border-slate-800 rounded-xl p-3",children:[T.jsxs("div",{className:"flex justify-between text-xs mb-1.5",children:[T.jsx("span",{className:"text-slate-400",children:"Slit Spacing (d)"}),T.jsxs("span",{className:"font-mono text-cyan-400 font-bold",children:[_," px"]})]}),T.jsx("input",{type:"range",min:25,max:75,value:_,disabled:r==="window",onChange:E=>x(Number(E.target.value)),className:"w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg disabled:opacity-40"}),T.jsx("div",{className:"text-[10px] text-slate-500 mt-1",children:"Smaller d → Wider rainbow angle (sin θ = mλ/d)"})]}),T.jsxs("div",{className:"bg-slate-950/80 border border-slate-800 rounded-xl p-3",children:[T.jsxs("div",{className:"flex justify-between text-xs mb-1.5",children:[T.jsx("span",{className:"text-slate-400",children:"Number of Slits (N)"}),T.jsx("span",{className:"font-mono text-cyan-400 font-bold",children:h})]}),T.jsx("input",{type:"range",min:2,max:9,value:h,disabled:r==="window",onChange:E=>p(Number(E.target.value)),className:"w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg disabled:opacity-40"}),T.jsx("div",{className:"text-[10px] text-slate-500 mt-1",children:"More slits → Sharper, more intense principal maxima"})]})]})]})}function dx({readings:o,onClearReadings:e,gratingPreset:i,studentName:r,onStudentNameChange:c}){const[f,d]=Wt.useState(""),[h,p]=Wt.useState([{color:"Violet 1",lambdaTheory:404.7,order:1,vLeftDeg:13.8,vRightDeg:13.8,twoThetaDeg:27.6,thetaDeg:13.8,lambdaExp:403.9,errorPct:.2},{color:"Green (Brightest)",lambdaTheory:546.1,order:1,vLeftDeg:18.83,vRightDeg:18.83,twoThetaDeg:37.66,thetaDeg:18.83,lambdaExp:546.4,errorPct:.05},{color:"Yellow 1",lambdaTheory:577,order:1,vLeftDeg:19.95,vRightDeg:19.95,twoThetaDeg:39.9,thetaDeg:19.95,lambdaExp:577.8,errorPct:.14}]),_=[...o,...h],x=async()=>{try{d("Saving report to server..."),(await fetch("/api/reports",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({studentName:r||"Physics Student",gratingPreset:i.name,linesPerCm:i.linesPerCm,pitchNm:i.pitchNm,dataRows:_})})).ok?(en.playSuccessChime(),d("Report Saved Successfully!"),setTimeout(()=>d(""),3e3)):(d("Server offline (saved locally)"),setTimeout(()=>d(""),3e3))}catch{d("Saved locally in browser memory"),setTimeout(()=>d(""),3e3)}},m=()=>{const g="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify({studentName:r,experiment:"Determination of Wavelengths using Diffraction Grating & Spectrometer",grating:i,observations:_,timestamp:new Date().toISOString()},null,2)),M=document.createElement("a");M.setAttribute("href",g),M.setAttribute("download",`spectrometer_lab_${r||"student"}.json`),document.body.appendChild(M),M.click(),M.remove()};return T.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl flex flex-col gap-4",children:[T.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[T.jsxs("div",{className:"flex items-center gap-2.5",children:[T.jsx(ty,{className:"w-5 h-5 text-cyan-400"}),T.jsxs("div",{children:[T.jsx("h3",{className:"font-semibold text-base text-slate-100",children:"Laboratory Notebook & Wavelength Calculations"}),T.jsxs("p",{className:"text-xs text-slate-400",children:["Formula: ",T.jsx("span",{className:"font-mono text-cyan-400 font-semibold",children:"λ = (d · sin θ) / m = (sin θ) / (N · m)"})]})]})]}),T.jsxs("div",{className:"flex items-center gap-2",children:[T.jsx("input",{type:"text",placeholder:"Student Name / Roll No.",value:r,onChange:g=>c(g.target.value),className:"bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 w-44"}),T.jsxs("button",{onClick:x,className:"px-3 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md cursor-pointer",children:[T.jsx(hR,{className:"w-3.5 h-3.5"})," Save Report"]}),T.jsxs("button",{onClick:m,className:"px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer",children:[T.jsx(lR,{className:"w-3.5 h-3.5"})," Export JSON"]})]})]}),f&&T.jsxs("div",{className:"text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg flex items-center gap-2",children:[T.jsx(sR,{className:"w-4 h-4"})," ",f]}),T.jsx("div",{className:"overflow-x-auto rounded-xl border border-slate-800",children:T.jsxs("table",{className:"w-full text-left text-xs text-slate-300 font-mono",children:[T.jsx("thead",{className:"bg-slate-950/80 text-[11px] text-slate-400 uppercase tracking-wider border-b border-slate-800",children:T.jsxs("tr",{children:[T.jsx("th",{className:"py-2.5 px-3",children:"Spectral Line"}),T.jsx("th",{className:"py-2.5 px-3",children:"Order (m)"}),T.jsx("th",{className:"py-2.5 px-3",children:"Left Vernier (V₁)"}),T.jsx("th",{className:"py-2.5 px-3",children:"Right Vernier (V₁)"}),T.jsx("th",{className:"py-2.5 px-3",children:"2θ (|R - L|)"}),T.jsx("th",{className:"py-2.5 px-3",children:"Diffraction θ"}),T.jsx("th",{className:"py-2.5 px-3",children:"Experimental λ"}),T.jsx("th",{className:"py-2.5 px-3",children:"Theory λ"}),T.jsx("th",{className:"py-2.5 px-3",children:"Error %"})]})}),T.jsx("tbody",{className:"divide-y divide-slate-800/60 bg-slate-900/40",children:_.map((g,M)=>{const E=!!g.angleDeg,b=E?Math.abs(g.angleDeg):g.thetaDeg,S=(b*2).toFixed(2),y=g.order||1,O=i.pitchNm,L=E?O*Math.sin(b*Math.PI/180)/y:g.lambdaExp,N=g.lambdaTheory,V=N>0?Math.abs(L-N)/N*100:0;return T.jsxs("tr",{className:"hover:bg-slate-800/40 transition-colors",children:[T.jsxs("td",{className:"py-2 px-3 font-sans font-medium text-slate-100 flex items-center gap-1.5",children:[T.jsx("span",{className:"w-2.5 h-2.5 rounded-full",style:{backgroundColor:g.hex||"#06D6A0"}}),g.color]}),T.jsx("td",{className:"py-2 px-3",children:y}),T.jsx("td",{className:"py-2 px-3 text-cyan-400",children:g.v1Reading||`${g.vLeftDeg}°`}),T.jsx("td",{className:"py-2 px-3 text-indigo-400",children:g.v2Reading||`${g.vRightDeg}°`}),T.jsxs("td",{className:"py-2 px-3",children:[S,"°"]}),T.jsxs("td",{className:"py-2 px-3 font-bold text-amber-400",children:[b.toFixed(2),"°"]}),T.jsxs("td",{className:"py-2 px-3 font-bold text-emerald-400",children:[L.toFixed(1)," nm"]}),T.jsx("td",{className:"py-2 px-3 text-slate-400",children:N>0?`${N.toFixed(1)} nm`:"—"}),T.jsx("td",{className:"py-2 px-3",children:T.jsxs("span",{className:`px-2 py-0.5 rounded text-[10px] font-bold ${V<1?"bg-emerald-500/20 text-emerald-400":V<3?"bg-amber-500/20 text-amber-400":"bg-rose-500/20 text-rose-400"}`,children:[V.toFixed(2),"%"]})})]},M)})})]})}),T.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-400 bg-slate-950/70 p-3.5 rounded-xl border border-slate-800",children:[T.jsxs("div",{children:[T.jsx("span",{className:"font-semibold text-slate-300",children:"Least Count of Spectrometer:"}),T.jsxs("p",{className:"mt-0.5 font-mono text-[11px]",children:["1 Main Scale Division (MSD) = 0.5° = 30'",T.jsx("br",{}),"Number of Vernier Divisions (n) = 30",T.jsx("br",{}),"Least Count (LC) = 1 MSD / n = 30' / 30 = ",T.jsx("strong",{children:"1 minute of arc (1')"})]})]}),T.jsxs("div",{children:[T.jsx("span",{className:"font-semibold text-slate-300",children:"Grating Element (d):"}),T.jsxs("p",{className:"mt-0.5 font-mono text-[11px]",children:["Rulings: ",i.name,T.jsx("br",{}),"N = ",i.linesPerCm.toFixed(1)," lines/cm",T.jsx("br",{}),"d = 1 / N = ",T.jsxs("strong",{children:[i.pitchNm.toFixed(2)," nm"]})]})]})]})]})}function MR(){const[o,e]=Wt.useState(0),[i,r]=Wt.useState(!0),[c,f]=Wt.useState(2),d=Wt.useRef(null),[h,p]=Wt.useState(!0),_=Wt.useRef(0),x=[{title:"1. The White Light Secret: A Hidden Rainbow Family!",icon:"🌈",badge:"The Big Mystery",text:"Did you know that plain white sunlight or lamp light is not really white at all? It is secretly a parade of 7 colorful energetic photon friends holding hands: Violet, Indigo, Blue, Green, Yellow, Orange, and Red (VIBGYOR)!"},{title:"2. The Magic Fence: A Diffraction Grating!",icon:"🚪",badge:"The Super Slits",text:"A diffraction grating looks like a plain piece of glass, but under a super microscope, it has 15,000 tiny microscopic gates in every single inch! When the light waves hit these gates, they have to squeeze through!"},{title:"3. Long Strides vs Tiny Hops: Why Red Bends Most!",icon:"🏃‍♂️",badge:"Wave Magic",text:"Red waves have LONG giant strides (~700 nm) — like a tall giant taking huge steps, so they get pushed far away to the sides! Violet waves have TINY high-speed wiggles (~400 nm), so they stay close to the middle!"},{title:"4. Why Turn Off the Room Lights? The Star Mystery!",icon:"✨",badge:"Dark Room Secret",text:"Why do scientists do this in a pitch dark room? Does the light change? NO! The rainbow stays exactly the same. But just like you cannot see stars during a sunny afternoon, a bright light room washes out the delicate violet sparkles!"},{title:"5. Why Does a White LED Not Show Sharp Lines?",icon:"💡",badge:"The Smoothie Secret",text:"A Mercury lamp shoots pure, single musical notes of light (sharp lines). But an LED is like a blended fruit smoothie covered in yellow phosphor dust! All colors are smeared together, so you see a soft glowing blur instead of sharp razor lines!"}];return Wt.useEffect(()=>{const m=d.current;if(!m)return;const g=m.getContext("2d");let M;const E=()=>{const b=m.width,S=m.height,y=_.current;g.fillStyle=i?"#0A0D1A":"#E2E8F0",g.fillRect(0,0,b,S);const O=b*.35,L=S/2;g.fillStyle=i?"#FFFFFF":"#475569",g.font="bold 13px Inter, sans-serif",g.fillText("White Light Wavefronts",20,30);for(let D=20;D<O;D+=30){const R=(D+y*2)%(O-20)+20;g.strokeStyle=i?"rgba(255, 255, 255, 0.7)":"rgba(71, 85, 105, 0.5)",g.lineWidth=3,g.beginPath(),g.moveTo(R,40),g.lineTo(R,S-40),g.stroke(),g.fillStyle="#FFD166",g.beginPath(),g.arc(R,L+Math.sin(y*.1+R*.05)*40,6,0,Math.PI*2),g.fill()}g.fillStyle=i?"#1E293B":"#94A3B8",g.fillRect(O-6,20,12,S-40);const N=5,V=35,G=L-(N-1)*V/2;for(let D=0;D<N;D++){const R=G+D*V;g.clearRect(O-8,R-8,16,16),g.fillStyle="#06B6D4",g.fillRect(O-2,R-8,4,16)}const P=[{name:"Violet",color:"#8B5CF6",angle:.18,speed:2.8},{name:"Blue",color:"#3B82F6",angle:.25,speed:2.6},{name:"Green",color:"#10B981",angle:.33,speed:2.4},{name:"Yellow",color:"#FBBF24",angle:.42,speed:2.2},{name:"Red",color:"#EF4444",angle:.52,speed:2}],H=b-O-30;P.forEach(D=>{const R=O+Math.cos(D.angle)*H,F=L-Math.sin(D.angle)*H,rt=O+Math.cos(D.angle)*H,$=L+Math.sin(D.angle)*H,ct=i?.9:.35;g.strokeStyle=D.color,g.lineWidth=4,g.globalAlpha=ct,g.beginPath(),g.moveTo(O,L),g.lineTo(R,F),g.moveTo(O,L),g.lineTo(rt,$),g.stroke();const ot=y*.02*D.speed%1,B=O+(R-O)*ot,tt=L+(F-L)*ot;g.fillStyle=D.color,g.beginPath(),g.arc(B,tt,7,0,Math.PI*2),g.fill(),g.fillStyle=i?"#FFFFFF":"#0F172A",g.font="bold 11px Inter, sans-serif",g.fillText(D.name,R+5,F+4)}),g.strokeStyle=i?"#FFFFFF":"#475569",g.lineWidth=4,g.globalAlpha=i?1:.6,g.beginPath(),g.moveTo(O,L),g.lineTo(b-30,L),g.stroke(),g.fillStyle=i?"#FFFFFF":"#0F172A",g.fillText("Central White Beam",b-140,L-8),g.globalAlpha=1,i?(g.fillStyle="rgba(16, 185, 129, 0.9)",g.font="bold 12px Inter, sans-serif",g.fillText("🌙 Dark Room: The rainbow sparkles bright like glowing neon lights!",20,S-20)):(g.fillStyle="rgba(239, 68, 68, 0.9)",g.font="bold 12px Inter, sans-serif",g.fillText("☀️ Room Lights ON: Look how faint and washed out the rainbow gets!",20,S-20)),h&&(_.current+=1),M=requestAnimationFrame(E)};return E(),()=>cancelAnimationFrame(M)},[i,h]),T.jsxs("div",{className:"bg-gradient-to-br from-indigo-950/60 via-slate-900 to-slate-950 border border-indigo-500/30 rounded-3xl p-6 shadow-2xl flex flex-col gap-6",children:[T.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-indigo-500/20 pb-4",children:[T.jsxs("div",{className:"flex items-center gap-3",children:[T.jsx("div",{className:"w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 to-rose-500 flex items-center justify-center text-2xl shadow-lg shadow-rose-500/20",children:"🌈"}),T.jsxs("div",{children:[T.jsx("h2",{className:"text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-amber-300 to-rose-400",children:"The Magical Rainbow Machine!"}),T.jsx("p",{className:"text-xs text-indigo-300 font-medium",children:"Made especially so kids, parents, and curious minds can see and understand how light splits!"})]})]}),T.jsxs("button",{onClick:()=>{en.playSwitchClick(),r(!i)},className:`px-4 py-2 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-lg ${i?"bg-indigo-600 text-white shadow-indigo-500/30 ring-2 ring-indigo-400":"bg-amber-400 text-slate-950 shadow-amber-400/30 ring-2 ring-amber-300"}`,children:[i?T.jsx(Du,{className:"w-4 h-4"}):T.jsx(bl,{className:"w-4 h-4"}),i?"Click: Turn On Bedroom Lights":"Click: Turn Off Bedroom Lights"]})]}),T.jsxs("div",{className:"relative rounded-2xl overflow-hidden border-2 border-indigo-500/30 bg-black aspect-[16/9] max-h-[360px] shadow-2xl",children:[T.jsx("canvas",{ref:d,width:800,height:400,className:"w-full h-full block"}),T.jsx("button",{onClick:()=>p(!h),className:"absolute top-4 right-4 p-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-cyan-400 hover:bg-slate-800 transition-all cursor-pointer",children:h?T.jsx(by,{className:"w-4 h-4"}):T.jsx(Ty,{className:"w-4 h-4"})})]}),T.jsx("div",{className:"grid grid-cols-1 md:grid-cols-5 gap-3",children:x.map((m,g)=>{const M=o===g;return T.jsxs("button",{onClick:()=>{en.playVernierTick(),e(g)},className:`p-3.5 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${M?"bg-indigo-600/30 border-cyan-400 ring-2 ring-cyan-400 shadow-lg":"bg-slate-900/60 border-slate-800 hover:bg-slate-800/60"}`,children:[T.jsxs("div",{children:[T.jsx("div",{className:"text-2xl mb-1",children:m.icon}),T.jsx("div",{className:"text-[10px] uppercase font-bold text-cyan-400 tracking-wider",children:m.badge}),T.jsx("div",{className:"text-xs font-bold text-slate-100 mt-0.5 line-clamp-2",children:m.title.split(":")[0]})]}),T.jsxs("div",{className:"text-[11px] text-slate-400 mt-2 font-medium",children:["Step ",g+1," of 5"]})]},g)})}),T.jsxs("div",{className:"bg-slate-950/90 border border-indigo-500/20 rounded-2xl p-5 shadow-inner",children:[T.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[T.jsx("span",{className:"text-2xl",children:x[o].icon}),T.jsx("h3",{className:"text-base font-bold text-cyan-300",children:x[o].title})]}),T.jsx("p",{className:"text-sm text-slate-200 leading-relaxed font-sans",children:x[o].text})]})]})}function hx({defaultOpenTopic:o=null}){const[e,i]=Wt.useState(o||"why-led-no-lines"),r=[{id:"why-led-no-lines",badge:"User Core Question #1",title:"Why does an LED light NOT show sharp lines through a spectrometer grating?",icon:T.jsx(yy,{className:"w-5 h-5 text-amber-400"}),tagColor:"border-amber-500/30 bg-amber-500/10 text-amber-400",summary:"LEDs emit across continuous solid-state semiconductor bandgaps and broad phosphors (~110nm continuum), completely lacking the razor-sharp quantized atomic transitions of gas discharge tubes.",answer:`
### 1. Atomic Gas Tubes (Mercury/Sodium) vs Solid-State LEDs
- **Mercury/Sodium Gas Lamps**: Light is born from isolated, free atoms in a gas vapor. Electrons jump between strictly quantized, discrete energy levels ($E_2 \\to E_1$). By the Planck-Einstein relation, $\\Delta E = h\\nu = hc/\\lambda$. Because the energy level is extraordinarily exact, the emission line has a natural atomic line width of **less than 0.01 nm**! When focused through the spectrometer collimator slit, you see needle-sharp vertical lines.
- **LEDs (Light Emitting Diodes)**: An LED has **no isolated atoms**. Light is emitted in a solid crystalline semiconductor lattice (e.g., InGaN or AlGaInP) where electrons in the conduction band recombine with holes in the valence band.
  - Semiconductor energy states form **continuous bands** (not discrete lines).
  - Thermal kinetic energy broadening ($k_B T \\approx 26\\text{ meV}$) causes electrons at different heights in the conduction band to emit a wide continuous spread of photon energies. Even a 'single color' LED has a Full-Width at Half-Maximum (FWHM) of **20 to 40 nm**!

### 2. The Commercial White LED Phosphor Mechanism
Commercial white LEDs do not create white light directly. They use:
1. A **Blue InGaN chip** that emits around 450 nm.
2. A **Cerium-doped Yttrium Aluminum Garnet (YAG:Ce³⁺) phosphor coating**.
3. Blue photons excite the phosphor, which re-emits a broad continuous fluorescent yellow-green band stretching from **500 nm to 700 nm (FWHM ~ 110 nm)**!

### 3. Source Area & Lack of Collimation
An LED has an emission die area of $\\sim 1\\text{ mm}^2$ covered by a clear epoxy dome lens. In a spectrometer, the collimator expects a thin, 20-micron optical slit placed at its principal focal length. When an extended, diffuse, broadband LED is placed in front of the grating, millions of diffracted images of the wide die overlap across every wavelength from 400 nm to 700 nm.
**The Result:** The observer does not see distinct sharp 'lines'. Instead, they see a faint, smeared, uniform low-contrast haze, leading them to think *'the spectrometer does not show anything'*.
      `},{id:"how-grating-works",badge:"Fundamental Physics",title:"How does a Diffraction Grating actually work?",icon:T.jsx(ux,{className:"w-5 h-5 text-cyan-400"}),tagColor:"border-cyan-500/30 bg-cyan-500/10 text-cyan-400",summary:"Wave division and constructive interference: $d\\sin\\theta = m\\lambda$. Red has longer wavelengths, so it diffracts at larger angles than violet.",answer:`
### The Wave Optics Mechanism:
1. **Grating Structure**: An optically flat plate ruled with thousands of microscopic, equidistant parallel scratches. The clear spaces act as slits of width $a$, and opaque spaces of width $b$. The grating element is $d = a + b$.
2. **Huygens-Fresnel Wavelets**: According to Huygens' principle, when a collimated plane wave hits the grating, each microscopic slit acts as a new source of spherical wavelets spreading outward.
3. **Path Difference**: For waves diffracted at angle $\\theta$, the path difference between light from corresponding points of two neighboring slits is $\\Delta x = d \\sin \\theta$.
4. **Constructive Interference**:
   When this path difference equals an integer number of whole wavelengths:
   $$d \\sin \\theta = m \\lambda \\quad (m = 0, \\pm 1, \\pm 2, \\dots)$$
   All wave crests arrive in phase and constructively reinforce each other into an intensely bright, razor-sharp principal maximum!
5. **Dispersion (Why Rainbow Colors Separate)**:
   $$\\sin \\theta = \\frac{m \\lambda}{d}$$
   Because $\\lambda_{\\text{red}} (\\sim 700\\text{ nm}) > \\lambda_{\\text{violet}} (\\sim 400\\text{ nm})$, $\\theta_{\\text{red}} > \\theta_{\\text{violet}}$. Red light bends further from the center than violet!
      `},{id:"normal-incidence",badge:"Instrument Calibration",title:"Spectrometer Settings & Normal Incidence: Why does it matter if tilted?",icon:T.jsx(Ny,{className:"w-5 h-5 text-emerald-400"}),tagColor:"border-emerald-500/30 bg-emerald-500/10 text-emerald-400",summary:"Normal incidence ensures symmetrical diffraction angles ($2\\theta = |\\theta_R - \\theta_L|$). If tilted, $d(\\sin\\theta_i + \\sin\\theta_d) = m\\lambda$, skewing all calculations.",answer:`
### What is Normal Incidence?
Light emerging from the collimator must hit the face of the diffraction grating at **exactly $90^\\circ$ (perpendicular, incident angle $\\theta_i = 0^\\circ$)**.

### Why is it Crucial?
1. **Symmetry of Left & Right Orders**:
   At $\\theta_i = 0^\\circ$, the standard equation applies:
   $$d \\sin \\theta = m \\lambda$$
   The first-order line on the left is at angle $-\\theta$, and on the right is at $+\\theta$.
   By measuring both sides on the vernier:
   $$2\\theta = |\\text{Vernier}_{\\text{Right}} - \\text{Vernier}_{\\text{Left}}| \\implies \\theta = \\frac{2\\theta}{2}$$
   This eliminates zero-error of the circular scale and eccentricity of the central axis!

2. **What happens if the spectrometer or grating is TILTED?**
   If the grating has an oblique tilt angle $\\theta_i \\ne 0^\\circ$:
   $$d (\\sin \\theta_i \\pm \\sin \\theta_d) = m \\lambda$$
   - The diffracted spectrum becomes **asymmetric**: $\\theta_{\\text{left}} \\ne \\theta_{\\text{right}}$!
   - If you naively use the standard formula $\\lambda = (d\\sin\\theta)/m$, your measured wavelength will be completely wrong!
   - If the rulings are tilted vertically, the spectral lines tilt at an angle and drift out of the crosshairs as you rotate the telescope.
      `},{id:"dark-vs-light-room",badge:"Environmental Conditions",title:"Light Room vs Dark Room: Does Wavelength change? What happens to Intensity?",icon:T.jsx(bl,{className:"w-5 h-5 text-indigo-400"}),tagColor:"border-indigo-500/30 bg-indigo-500/10 text-indigo-400",summary:"Wavelength $\\lambda$ NEVER changes! But in daylight, ambient glare plummets the signal-to-noise ratio and pupil constriction washes out faint lines.",answer:`
### 1. Does Wavelength ($\\lambda$) Change in a Bright Room?
**ABSOLUTELY NOT.**
- The wavelength is governed solely by the atomic transition energy $\\Delta E$ in the lamp:
  $$\\lambda = \\frac{h c}{n \\Delta E}$$
- Ambient room photons do not interact or change the energy levels of mercury or sodium vapor atoms.
- The refractive index of air $n \\approx 1.00029$ is unchanged. Therefore, **$\\lambda$ is 100% constant**.

### 2. What happens to Intensity & Contrast?
- **Absolute Diffracted Intensity**: The photons entering the telescope from the slit remain unchanged.
- **Ambient Stray Light & Contrast**:
  In a lit room, room light scatters into the telescope tube.
  $$\\text{Contrast} = \\frac{I_{\\text{spectral}} - I_{\\text{ambient}}}{I_{\\text{spectral}} + I_{\\text{ambient}}}$$
  - In a dark room: $I_{\\text{ambient}} \\approx 0 \\implies \\text{Contrast} \\approx 100\\%$.
  - In a bright room: $I_{\\text{ambient}}$ is high. Faint spectral lines (such as violet 404.7 nm or 2nd order spectra) are swamped by background glare.
- **Human Eye Adaptation**:
  In a light room, pupils constrict to $\\sim 2\\text{ mm}$ (photopic vision), reducing light entering the retina. In a dark room, pupils dilate to $\\sim 7\\text{ mm}$ (scotopic/mesopic vision), increasing retinal light gathering by **over 10-fold**!
      `},{id:"window-gap-vs-grating",badge:"Diffraction vs Slit Aperture",title:"What happens if we take a space like a 'Window Space Gap' in slides?",icon:T.jsx(ux,{className:"w-5 h-5 text-rose-400"}),tagColor:"border-rose-500/30 bg-rose-500/10 text-rose-400",summary:"When slit width $a \\gg \\lambda$, diffraction angles shrink to $0.02^\\circ$. Light obeys straight-line geometric ray optics with zero visible rainbow dispersion.",answer:`
### The Ratio of Aperture Size to Wavelength ($a / \\lambda$):
The diffraction angle is determined by:
$$\\sin \\theta \\approx \\frac{\\lambda}{a}$$

- **Case 1: Macroscopic 'Window Space' Gap ($a = 2\\text{ mm} = 2 \\times 10^{-3}\\text{ m}$)**:
  $$\\sin \\theta \\approx \\frac{500 \\times 10^{-9}\\text{ m}}{2 \\times 10^{-3}\\text{ m}} = 0.00025 \\implies \\theta \\approx 0.014^\\circ$$
  The angle is so infinitesimal that light travels in straight geometric rays! You observe only a sharp shadow and a straight beam, with **zero perceptible rainbow dispersion**.
  
- **Case 2: Microscopic Diffraction Grating Slit ($a \\approx 1.6\\ \\mu\\text{m}$)**:
  $$\\sin \\theta \\approx \\frac{0.5\\ \\mu\\text{m}}{1.6\\ \\mu\\text{m}} = 0.3125 \\implies \\theta \\approx 18.2^\\circ!$$
  Because the aperture is comparable to the wavelength of light, wave crests fan out at wide angles, creating a large, easily measurable spectrum.

### The Grating Intensity Formula & Missing Orders:
The intensity pattern of a diffraction grating is:
$$I(\\theta) = I_0 \\left[ \\frac{\\sin \\alpha}{\\alpha} \\right]^2 \\left[ \\frac{\\sin(N\\beta)}{\\sin \\beta} \\right]^2$$
- If slit width $a$ equals opaque space $b$ ($d = a + b = 2a$):
  Whenever $d \\sin \\theta = m \\lambda$ and $a \\sin \\theta = p \\lambda$, we get $m = 2p$.
  This means orders $m = 2, 4, 6, \\dots$ fall exactly on the zero of the single-slit envelope: **the 2nd order spectrum disappears completely (Missing Orders)**!
      `}];return T.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl flex flex-col gap-4",children:[T.jsxs("div",{className:"flex items-center gap-2.5 border-b border-slate-800 pb-3",children:[T.jsx(cy,{className:"w-5 h-5 text-cyan-400"}),T.jsxs("div",{children:[T.jsx("h3",{className:"font-semibold text-base text-slate-100",children:"Deep-Dive Physics & Answers to All Your Questions"}),T.jsx("p",{className:"text-xs text-slate-400",children:"Click on any question to explore the exact wave equations, physical proofs, and solid-state causes."})]})]}),T.jsx("div",{className:"flex flex-col gap-3",children:r.map(c=>{const f=e===c.id;return T.jsxs("div",{className:`rounded-xl border transition-all overflow-hidden ${f?"bg-slate-950/90 border-cyan-500/40 shadow-lg":"bg-slate-950/50 border-slate-800 hover:border-slate-700"}`,children:[T.jsxs("button",{onClick:()=>i(f?null:c.id),className:"w-full p-4 text-left flex items-start justify-between gap-3 cursor-pointer",children:[T.jsxs("div",{className:"flex items-start gap-3",children:[T.jsx("div",{className:"p-2 rounded-lg bg-slate-900 border border-slate-800 flex-shrink-0 mt-0.5",children:c.icon}),T.jsxs("div",{children:[T.jsx("span",{className:`inline-block text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border mb-1 ${c.tagColor}`,children:c.badge}),T.jsx("h4",{className:"text-sm font-bold text-slate-100",children:c.title}),T.jsx("p",{className:"text-xs text-slate-400 mt-1 line-clamp-2",children:c.summary})]})]}),T.jsx("div",{className:"text-slate-400 p-1",children:f?T.jsx(iR,{className:"w-4 h-4 text-cyan-400"}):T.jsx(nR,{className:"w-4 h-4"})})]}),f&&T.jsx("div",{className:"px-5 pb-5 pt-2 border-t border-slate-800/80 text-xs text-slate-300 leading-relaxed space-y-3 font-sans",children:c.answer.split(`

`).map((d,h)=>d.startsWith("### ")?T.jsx("h5",{className:"text-sm font-bold text-cyan-300 mt-3 mb-1",children:d.replace("### ","")},h):T.jsx("p",{className:"text-slate-300",children:d},h))})]},c.id)})})]})}const js=[{id:1,question:"In a diffraction grating, how does the diffraction angle θ vary with the wavelength of light λ?",options:["θ is inversely proportional to λ (violet bends furthest)","θ is directly proportional to λ (red bends furthest)","θ does not depend on wavelength","Only the brightness changes, not the angle"],correct:1,explanation:"From the grating equation d·sin θ = m·λ, sin θ is directly proportional to λ. Because Red (~700 nm) has a longer wavelength than Violet (~400 nm), Red bends at a larger diffraction angle!"},{id:2,question:"If this experiment is conducted in a brightly illuminated daylight room instead of a dark room, what happens to the wavelength of the spectral lines?",options:["The wavelength increases due to ambient photon energy","The wavelength decreases because room light compresses wavefronts","The wavelength remains 100% unchanged","All colors shift toward yellow"],correct:2,explanation:"Wavelength λ is an invariant quantum property determined by the atomic energy levels (ΔE) of the emitter and the index of refraction of air. Ambient light cannot alter λ. Only visibility and contrast decrease due to background glare!"},{id:3,question:"Why does an ordinary White LED not show sharp, distinct spectral lines through a diffraction grating?",options:["LED light has zero frequency","LED emission comes from continuous semiconductor bandgaps and broad Ce:YAG phosphor fluorescence (~110nm continuum), lacking discrete atomic transitions","Spectrometers only work for gas discharge tubes, never for semiconductors","The grating absorbs LED light completely"],correct:1,explanation:"Mercury/Sodium lamps have isolated gas atoms that produce discrete atomic lines (<0.01 nm wide). LEDs emit via semiconductor band-to-band recombination and broad phosphor fluorescence, resulting in a continuous, smeared glow with no sharp lines to focus on."},{id:4,question:"Why is 'Normal Incidence' (incident beam perpendicular to grating face) essential in standard spectrometer experiments?",options:["It ensures that the diffraction angles on the left and right sides are perfectly symmetrical (θ_left = θ_right)","To prevent the grating glass from overheating","To polarize the beam into microwaves","Normal incidence is only an aesthetic preference"],correct:0,explanation:"At normal incidence (θᵢ = 0°), d·sin θ = m·λ ensures identical angles on both sides. If tilted, d(sin θᵢ ± sin θ_d) = m·λ makes left and right orders asymmetric and introduces errors in standard wavelength formulas."},{id:5,question:"If we widen the slit gap in slides to a macroscopic size like a window space (e.g., 2 mm), what happens to visible diffraction?",options:["The rainbow dispersion spreads across 360 degrees","Diffraction angle shrinks to an imperceptible ~0.01°, behaving purely as straight geometric ray optics with no visible rainbow","The light turns into coherent green laser light","All wavelengths disappear into darkness"],correct:1,explanation:"Diffraction requires slit width 'a' to be comparable to wavelength 'λ'. When a >> λ (macroscopic window gap), sin θ ≈ λ/a ≈ 0, so light travels in straight geometric lines without visible dispersion!"}];function bR(){const[o,e]=Wt.useState({}),[i,r]=Wt.useState(!1),c=(p,_)=>{i||(en.playVernierTick(),e({...o,[p]:_}))},f=()=>{en.playSuccessChime(),r(!0)},d=()=>{en.playSwitchClick(),e({}),r(!1)},h=Object.keys(o).reduce((p,_)=>p+(o[_]===js[_].correct?1:0),0);return T.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl flex flex-col gap-4",children:[T.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3",children:[T.jsxs("div",{className:"flex items-center gap-2.5",children:[T.jsx($x,{className:"w-5 h-5 text-amber-400"}),T.jsxs("div",{children:[T.jsx("h3",{className:"font-semibold text-base text-slate-100",children:"Diffraction & Optics Mastery Quiz"}),T.jsx("p",{className:"text-xs text-slate-400",children:"Test your understanding of diffraction grating physics, normal incidence, LEDs, and ambient lighting."})]})]}),i&&T.jsxs("div",{className:"flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800",children:[T.jsx("span",{className:"text-xs text-slate-400",children:"Score:"}),T.jsxs("span",{className:"font-mono text-sm font-bold text-cyan-400",children:[h," / ",js.length]}),T.jsxs("button",{onClick:d,className:"ml-2 text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1 cursor-pointer",children:[T.jsx(dR,{className:"w-3 h-3"})," Retry"]})]})]}),T.jsx("div",{className:"flex flex-col gap-4",children:js.map((p,_)=>{const x=o[_],m=x===p.correct;return T.jsxs("div",{className:"bg-slate-950/70 border border-slate-800 rounded-xl p-4 flex flex-col gap-3",children:[T.jsxs("div",{className:"flex items-start gap-2",children:[T.jsxs("span",{className:"font-mono text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-md mt-0.5",children:["Q",_+1]}),T.jsx("h4",{className:"text-xs font-semibold text-slate-200 leading-snug",children:p.question})]}),T.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:p.options.map((g,M)=>{let E="bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700";return x===M&&(E="bg-cyan-500/10 border-cyan-500 text-cyan-300 ring-1 ring-cyan-500"),i&&(M===p.correct?E="bg-emerald-500/20 border-emerald-500 text-emerald-300 ring-1 ring-emerald-500 font-semibold":x===M&&(E="bg-rose-500/20 border-rose-500 text-rose-300")),T.jsxs("button",{disabled:i,onClick:()=>c(_,M),className:`p-2.5 rounded-xl text-left text-xs border transition-all cursor-pointer flex items-center justify-between ${E}`,children:[T.jsx("span",{children:g}),i&&M===p.correct&&T.jsx(oy,{className:"w-4 h-4 text-emerald-400 flex-shrink-0 ml-2"}),i&&x===M&&M!==p.correct&&T.jsx(rR,{className:"w-4 h-4 text-rose-400 flex-shrink-0 ml-2"})]},M)})}),i&&T.jsxs("div",{className:`text-xs p-2.5 rounded-xl border ${m?"bg-emerald-500/10 border-emerald-500/20 text-emerald-300":"bg-slate-900 border-slate-800 text-slate-300"}`,children:[T.jsx("span",{className:"font-semibold",children:m?"Correct! ":"Explanation: "}),p.explanation]})]},p.id)})}),!i&&T.jsx("button",{onClick:f,disabled:Object.keys(o).length<js.length,className:`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg ${Object.keys(o).length===js.length?"bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 cursor-pointer":"bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700/50"}`,children:Object.keys(o).length===js.length?"Submit Answers & View Score":`Answer All Questions (${Object.keys(o).length}/${js.length})`})]})}function ER(){const[o,e]=Wt.useState("lab"),[i,r]=Wt.useState(mx[0]),[c,f]=Wt.useState(jh[0]),[d,h]=Wt.useState(30),[p,_]=Wt.useState(0),[x,m]=Wt.useState(0),[g,M]=Wt.useState(!0),[E,b]=Wt.useState(5),[S,y]=Wt.useState(!1),[O,L]=Wt.useState("Physics Researcher"),[N,V]=Wt.useState([]),[G,P]=Wt.useState(null),H=()=>{const $=en.toggleMute();y($)},D=()=>{en.playSwitchClick(),g?(M(!1),b(500)):(M(!0),b(5))},R=$=>{b($),M($<35)},F=$=>{V(ct=>[$,...ct])},rt=()=>{P("why-led-no-lines"),e("theory")};return T.jsxs("div",{className:`min-h-screen transition-colors duration-300 ${g?"bg-[#05070D] text-slate-100":"bg-[#0F172A] text-slate-100"}`,children:[T.jsx("header",{className:"sticky top-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800 px-4 py-3",children:T.jsxs("div",{className:"max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3",children:[T.jsxs("div",{className:"flex items-center gap-2.5 cursor-pointer",onClick:()=>e("lab"),children:[T.jsx("div",{className:"w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-rose-500 p-0.5 shadow-lg shadow-cyan-500/20",children:T.jsx("div",{className:"w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-lg",children:"🌈"})}),T.jsxs("div",{children:[T.jsxs("div",{className:"flex items-center gap-1.5",children:[T.jsxs("span",{className:"font-heading font-black text-base tracking-tight text-white",children:["Diffraction",T.jsx("span",{className:"text-cyan-400",children:"Spectra"})]}),T.jsx("span",{className:"px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",children:"3D MERN LAB"})]}),T.jsx("div",{className:"text-[10px] text-slate-400 font-medium",children:"VIBGYOR Wavelengths • Spectrometer Normal Incidence • Laser & LED Optics"})]})]}),T.jsxs("nav",{className:"flex items-center gap-1 bg-slate-900/90 p-1 rounded-2xl border border-slate-800",children:[T.jsxs("button",{onClick:()=>{en.playSwitchClick(),e("lab")},className:`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${o==="lab"?"bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20":"text-slate-400 hover:text-slate-200"}`,children:[T.jsx(dy,{className:"w-3.5 h-3.5"})," 3D Virtual Lab"]}),T.jsxs("button",{onClick:()=>{en.playSwitchClick(),e("waves")},className:`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${o==="waves"?"bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20":"text-slate-400 hover:text-slate-200"}`,children:[T.jsx(Py,{className:"w-3.5 h-3.5"})," Huygens & Window Gap"]}),T.jsxs("button",{onClick:()=>{en.playSwitchClick(),e("kids")},className:`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${o==="kids"?"bg-gradient-to-r from-amber-400 to-rose-400 text-slate-950 font-bold shadow-md shadow-rose-500/20":"text-slate-400 hover:text-amber-300"}`,children:[T.jsx(pR,{className:"w-3.5 h-3.5"})," Kids & Story Mode"]}),T.jsxs("button",{onClick:()=>{en.playSwitchClick(),e("theory")},className:`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${o==="theory"?"bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20":"text-slate-400 hover:text-slate-200"}`,children:[T.jsx(cy,{className:"w-3.5 h-3.5"})," Deep Answers"]}),T.jsxs("button",{onClick:()=>{en.playSwitchClick(),e("notebook")},className:`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${o==="notebook"?"bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20":"text-slate-400 hover:text-slate-200"}`,children:[T.jsx(ty,{className:"w-3.5 h-3.5"})," Lab Notebook"]}),T.jsxs("button",{onClick:()=>{en.playSwitchClick(),e("quiz")},className:`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${o==="quiz"?"bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20":"text-slate-400 hover:text-slate-200"}`,children:[T.jsx($x,{className:"w-3.5 h-3.5"})," Mastery Quiz"]})]}),T.jsxs("div",{className:"flex items-center gap-2",children:[T.jsx("button",{onClick:H,title:S?"Unmute Sound FX":"Mute Sound FX",className:"p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-all cursor-pointer",children:S?T.jsx(gR,{className:"w-4 h-4 text-rose-400"}):T.jsx(mR,{className:"w-4 h-4 text-cyan-400"})}),T.jsxs("button",{onClick:D,className:`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer border ${g?"bg-indigo-950/80 border-indigo-500/40 text-indigo-300 shadow-md":"bg-amber-500/20 border-amber-500/40 text-amber-300 shadow-md"}`,children:[g?T.jsx(Du,{className:"w-3.5 h-3.5 text-indigo-400"}):T.jsx(bl,{className:"w-3.5 h-3.5 text-amber-400"}),g?"Darkened Lab":"Daylight Room"]})]})]})}),T.jsxs("main",{className:"max-w-7xl mx-auto px-4 py-6 flex flex-col gap-6",children:[o==="lab"&&T.jsxs("div",{className:"flex flex-col gap-6",children:[T.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[T.jsxs("div",{onClick:()=>{P("why-led-no-lines"),e("theory")},className:"bg-slate-900/70 border border-slate-800 hover:border-amber-500/40 rounded-xl p-3 cursor-pointer transition-all flex items-center gap-2.5",children:[T.jsx("div",{className:"p-2 rounded-lg bg-amber-500/10 text-amber-400",children:"💡"}),T.jsxs("div",{className:"text-xs",children:[T.jsx("div",{className:"font-bold text-slate-200",children:"Why LED Shows No Sharp Lines"}),T.jsx("div",{className:"text-slate-400 text-[11px] truncate",children:"Broadband bandgap + Ce:YAG phosphor continuum"})]})]}),T.jsxs("div",{onClick:()=>{P("normal-incidence"),e("theory")},className:"bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 rounded-xl p-3 cursor-pointer transition-all flex items-center gap-2.5",children:[T.jsx("div",{className:"p-2 rounded-lg bg-emerald-500/10 text-emerald-400",children:"📐"}),T.jsxs("div",{className:"text-xs",children:[T.jsx("div",{className:"font-bold text-slate-200",children:"Normal Incidence Matters!"}),T.jsx("div",{className:"text-slate-400 text-[11px] truncate",children:"Ensures θ_left = θ_right; tilt skews d(sin θᵢ ± sin θ) = mλ"})]})]}),T.jsxs("div",{onClick:()=>{P("dark-vs-light-room"),e("theory")},className:"bg-slate-900/70 border border-slate-800 hover:border-indigo-500/40 rounded-xl p-3 cursor-pointer transition-all flex items-center gap-2.5",children:[T.jsx("div",{className:"p-2 rounded-lg bg-indigo-500/10 text-indigo-400",children:"☀️"}),T.jsxs("div",{className:"text-xs",children:[T.jsx("div",{className:"font-bold text-slate-200",children:"Light vs Dark Room Physics"}),T.jsx("div",{className:"text-slate-400 text-[11px] truncate",children:"Wavelength λ never changes; daylight glare destroys SNR"})]})]})]}),T.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[T.jsxs("div",{className:"lg:col-span-8 flex flex-col gap-4",children:[T.jsx(_R,{currentSource:i,gratingPreset:c,slitWidthUm:d,telescopeAngleDeg:p,onTelescopeAngleChange:_,isDarkRoom:g,ambientLux:E,isNormalIncidence:Math.abs(x)<.1,gratingTiltDeg:x,onTiltChange:m,showRays:!0}),T.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[T.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-2.5 text-center",children:[T.jsx("span",{className:"text-[10px] text-slate-400 uppercase font-mono",children:"Grating Pitch (d)"}),T.jsxs("div",{className:"text-sm font-bold font-mono text-cyan-400",children:[c.pitchNm.toFixed(1)," nm"]})]}),T.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-2.5 text-center",children:[T.jsx("span",{className:"text-[10px] text-slate-400 uppercase font-mono",children:"Slit Width (a)"}),T.jsxs("div",{className:"text-sm font-bold font-mono text-emerald-400",children:[d," μm"]})]}),T.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-2.5 text-center",children:[T.jsx("span",{className:"text-[10px] text-slate-400 uppercase font-mono",children:"Diffraction Equation"}),T.jsx("div",{className:"text-sm font-bold font-mono text-amber-400",children:"d·sin θ = m·λ"})]}),T.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-2.5 text-center",children:[T.jsx("span",{className:"text-[10px] text-slate-400 uppercase font-mono",children:"Least Count"}),T.jsx("div",{className:"text-sm font-bold font-mono text-indigo-400",children:"1' (minute)"})]})]})]}),T.jsx("div",{className:"lg:col-span-4 flex flex-col gap-4",children:T.jsx(xR,{currentSource:i,gratingPreset:c,slitWidthUm:d,telescopeAngleDeg:p,gratingTiltDeg:x,ambientLux:E,isDarkRoom:g,onRecordReading:F})})]}),T.jsx(yR,{currentSource:i,onSourceChange:r,gratingPreset:c,onGratingChange:f,slitWidthUm:d,onSlitWidthChange:h,telescopeAngleDeg:p,onTelescopeAngleChange:_,isDarkRoom:g,onToggleDarkRoom:D,ambientLux:E,onAmbientLuxChange:R,isNormalIncidence:Math.abs(x)<.1,onToggleNormalIncidence:()=>m(x===0?8.5:0),gratingTiltDeg:x,onTiltChange:m,onOpenLedExplanation:rt}),T.jsx(dx,{readings:N,onClearReadings:()=>V([]),gratingPreset:c,studentName:O,onStudentNameChange:L})]}),o==="waves"&&T.jsxs("div",{className:"flex flex-col gap-6",children:[T.jsx(SR,{}),T.jsx(hx,{defaultOpenTopic:"window-gap-vs-grating"})]}),o==="kids"&&T.jsx("div",{className:"flex flex-col gap-6",children:T.jsx(MR,{})}),o==="theory"&&T.jsx("div",{className:"flex flex-col gap-6",children:T.jsx(hx,{defaultOpenTopic:G})}),o==="notebook"&&T.jsx("div",{className:"flex flex-col gap-6",children:T.jsx(dx,{readings:N,onClearReadings:()=>V([]),gratingPreset:c,studentName:O,onStudentNameChange:L})}),o==="quiz"&&T.jsx("div",{className:"flex flex-col gap-6",children:T.jsx(bR,{})})]}),T.jsx("footer",{className:"border-t border-slate-800 bg-slate-950/80 mt-12 py-6 px-4 text-center text-xs text-slate-500",children:T.jsxs("div",{className:"max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4",children:[T.jsxs("div",{className:"flex items-center gap-2",children:[T.jsx("span",{children:"DiffractionSpectra 3D Laboratory"}),T.jsx("span",{children:"•"}),T.jsx("span",{className:"text-cyan-400",children:"Wave Optics & Spectrometry Simulator"})]}),T.jsx("div",{children:"Built with React, Three.js, WebGL & Node.js Express Backend"})]})})]})}C1.createRoot(document.getElementById("root")).render(T.jsx(S1.StrictMode,{children:T.jsx(ER,{})}));
