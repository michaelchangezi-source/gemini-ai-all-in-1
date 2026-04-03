function Np(c,r){for(var f=0;f<r.length;f++){const o=r[f];if(typeof o!="string"&&!Array.isArray(o)){for(const d in o)if(d!=="default"&&!(d in c)){const h=Object.getOwnPropertyDescriptor(o,d);h&&Object.defineProperty(c,d,h.get?h:{enumerable:!0,get:()=>o[d]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))o(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const x of h.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&o(x)}).observe(document,{childList:!0,subtree:!0});function f(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function o(d){if(d.ep)return;d.ep=!0;const h=f(d);fetch(d.href,h)}})();function Mp(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var Ho={exports:{}},qa={};var nm;function Op(){if(nm)return qa;nm=1;var c=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function f(o,d,h){var x=null;if(h!==void 0&&(x=""+h),d.key!==void 0&&(x=""+d.key),"key"in d){h={};for(var E in d)E!=="key"&&(h[E]=d[E])}else h=d;return d=h.ref,{$$typeof:c,type:o,key:x,ref:d!==void 0?d:null,props:h}}return qa.Fragment=r,qa.jsx=f,qa.jsxs=f,qa}var am;function Dp(){return am||(am=1,Ho.exports=Op()),Ho.exports}var S=Dp(),Bo={exports:{}},P={};var im;function Rp(){if(im)return P;im=1;var c=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),x=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),U=Symbol.iterator;function Y(g){return g===null||typeof g!="object"?null:(g=U&&g[U]||g["@@iterator"],typeof g=="function"?g:null)}var J={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},et=Object.assign,st={};function vt(g,R,H){this.props=g,this.context=R,this.refs=st,this.updater=H||J}vt.prototype.isReactComponent={},vt.prototype.setState=function(g,R){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,R,"setState")},vt.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function Qt(){}Qt.prototype=vt.prototype;function Et(g,R,H){this.props=g,this.context=R,this.refs=st,this.updater=H||J}var _t=Et.prototype=new Qt;_t.constructor=Et,et(_t,vt.prototype),_t.isPureReactComponent=!0;var Mt=Array.isArray;function bt(){}var F={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function nt(g,R,H){var q=H.ref;return{$$typeof:c,type:g,key:R,ref:q!==void 0?q:null,props:H}}function Rt(g,R){return nt(g.type,R,g.props)}function wt(g){return typeof g=="object"&&g!==null&&g.$$typeof===c}function Ht(g){var R={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(H){return R[H]})}var we=/\/+/g;function se(g,R){return typeof g=="object"&&g!==null&&g.key!=null?Ht(""+g.key):R.toString(36)}function Zt(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(bt,bt):(g.status="pending",g.then(function(R){g.status==="pending"&&(g.status="fulfilled",g.value=R)},function(R){g.status==="pending"&&(g.status="rejected",g.reason=R)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function _(g,R,H,q,$){var lt=typeof g;(lt==="undefined"||lt==="boolean")&&(g=null);var W=!1;if(g===null)W=!0;else switch(lt){case"bigint":case"string":case"number":W=!0;break;case"object":switch(g.$$typeof){case c:case r:W=!0;break;case M:return W=g._init,_(W(g._payload),R,H,q,$)}}if(W)return $=$(g),W=q===""?"."+se(g,0):q,Mt($)?(H="",W!=null&&(H=W.replace(we,"$&/")+"/"),_($,R,H,"",function(He){return He})):$!=null&&(wt($)&&($=Rt($,H+($.key==null||g&&g.key===$.key?"":(""+$.key).replace(we,"$&/")+"/")+W)),R.push($)),1;W=0;var Kt=q===""?".":q+":";if(Mt(g))for(var zt=0;zt<g.length;zt++)q=g[zt],lt=Kt+se(q,zt),W+=_(q,R,H,lt,$);else if(zt=Y(g),typeof zt=="function")for(g=zt.call(g),zt=0;!(q=g.next()).done;)q=q.value,lt=Kt+se(q,zt++),W+=_(q,R,H,lt,$);else if(lt==="object"){if(typeof g.then=="function")return _(Zt(g),R,H,q,$);throw R=String(g),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.")}return W}function B(g,R,H){if(g==null)return g;var q=[],$=0;return _(g,q,"","",function(lt){return R.call(H,lt,$++)}),q}function w(g){if(g._status===-1){var R=g._result;R=R(),R.then(function(H){(g._status===0||g._status===-1)&&(g._status=1,g._result=H)},function(H){(g._status===0||g._status===-1)&&(g._status=2,g._result=H)}),g._status===-1&&(g._status=0,g._result=R)}if(g._status===1)return g._result.default;throw g._result}var mt=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var R=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(R))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)},pt={map:B,forEach:function(g,R,H){B(g,function(){R.apply(this,arguments)},H)},count:function(g){var R=0;return B(g,function(){R++}),R},toArray:function(g){return B(g,function(R){return R})||[]},only:function(g){if(!wt(g))throw Error("React.Children.only expected to receive a single React element child.");return g}};return P.Activity=T,P.Children=pt,P.Component=vt,P.Fragment=f,P.Profiler=d,P.PureComponent=Et,P.StrictMode=o,P.Suspense=y,P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,P.__COMPILER_RUNTIME={__proto__:null,c:function(g){return F.H.useMemoCache(g)}},P.cache=function(g){return function(){return g.apply(null,arguments)}},P.cacheSignal=function(){return null},P.cloneElement=function(g,R,H){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var q=et({},g.props),$=g.key;if(R!=null)for(lt in R.key!==void 0&&($=""+R.key),R)!Q.call(R,lt)||lt==="key"||lt==="__self"||lt==="__source"||lt==="ref"&&R.ref===void 0||(q[lt]=R[lt]);var lt=arguments.length-2;if(lt===1)q.children=H;else if(1<lt){for(var W=Array(lt),Kt=0;Kt<lt;Kt++)W[Kt]=arguments[Kt+2];q.children=W}return nt(g.type,$,q)},P.createContext=function(g){return g={$$typeof:x,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:h,_context:g},g},P.createElement=function(g,R,H){var q,$={},lt=null;if(R!=null)for(q in R.key!==void 0&&(lt=""+R.key),R)Q.call(R,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&($[q]=R[q]);var W=arguments.length-2;if(W===1)$.children=H;else if(1<W){for(var Kt=Array(W),zt=0;zt<W;zt++)Kt[zt]=arguments[zt+2];$.children=Kt}if(g&&g.defaultProps)for(q in W=g.defaultProps,W)$[q]===void 0&&($[q]=W[q]);return nt(g,lt,$)},P.createRef=function(){return{current:null}},P.forwardRef=function(g){return{$$typeof:E,render:g}},P.isValidElement=wt,P.lazy=function(g){return{$$typeof:M,_payload:{_status:-1,_result:g},_init:w}},P.memo=function(g,R){return{$$typeof:p,type:g,compare:R===void 0?null:R}},P.startTransition=function(g){var R=F.T,H={};F.T=H;try{var q=g(),$=F.S;$!==null&&$(H,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(bt,mt)}catch(lt){mt(lt)}finally{R!==null&&H.types!==null&&(R.types=H.types),F.T=R}},P.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},P.use=function(g){return F.H.use(g)},P.useActionState=function(g,R,H){return F.H.useActionState(g,R,H)},P.useCallback=function(g,R){return F.H.useCallback(g,R)},P.useContext=function(g){return F.H.useContext(g)},P.useDebugValue=function(){},P.useDeferredValue=function(g,R){return F.H.useDeferredValue(g,R)},P.useEffect=function(g,R){return F.H.useEffect(g,R)},P.useEffectEvent=function(g){return F.H.useEffectEvent(g)},P.useId=function(){return F.H.useId()},P.useImperativeHandle=function(g,R,H){return F.H.useImperativeHandle(g,R,H)},P.useInsertionEffect=function(g,R){return F.H.useInsertionEffect(g,R)},P.useLayoutEffect=function(g,R){return F.H.useLayoutEffect(g,R)},P.useMemo=function(g,R){return F.H.useMemo(g,R)},P.useOptimistic=function(g,R){return F.H.useOptimistic(g,R)},P.useReducer=function(g,R,H){return F.H.useReducer(g,R,H)},P.useRef=function(g){return F.H.useRef(g)},P.useState=function(g){return F.H.useState(g)},P.useSyncExternalStore=function(g,R,H){return F.H.useSyncExternalStore(g,R,H)},P.useTransition=function(){return F.H.useTransition()},P.version="19.2.3",P}var um;function Jo(){return um||(um=1,Bo.exports=Rp()),Bo.exports}var D=Jo();const jp=Mp(D),Up=Np({__proto__:null,default:jp},[D]);var Yo={exports:{}},Xa={},qo={exports:{}},Xo={};var cm;function wp(){return cm||(cm=1,(function(c){function r(_,B){var w=_.length;_.push(B);t:for(;0<w;){var mt=w-1>>>1,pt=_[mt];if(0<d(pt,B))_[mt]=B,_[w]=pt,w=mt;else break t}}function f(_){return _.length===0?null:_[0]}function o(_){if(_.length===0)return null;var B=_[0],w=_.pop();if(w!==B){_[0]=w;t:for(var mt=0,pt=_.length,g=pt>>>1;mt<g;){var R=2*(mt+1)-1,H=_[R],q=R+1,$=_[q];if(0>d(H,w))q<pt&&0>d($,H)?(_[mt]=$,_[q]=w,mt=q):(_[mt]=H,_[R]=w,mt=R);else if(q<pt&&0>d($,w))_[mt]=$,_[q]=w,mt=q;else break t}}return B}function d(_,B){var w=_.sortIndex-B.sortIndex;return w!==0?w:_.id-B.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;c.unstable_now=function(){return h.now()}}else{var x=Date,E=x.now();c.unstable_now=function(){return x.now()-E}}var y=[],p=[],M=1,T=null,U=3,Y=!1,J=!1,et=!1,st=!1,vt=typeof setTimeout=="function"?setTimeout:null,Qt=typeof clearTimeout=="function"?clearTimeout:null,Et=typeof setImmediate<"u"?setImmediate:null;function _t(_){for(var B=f(p);B!==null;){if(B.callback===null)o(p);else if(B.startTime<=_)o(p),B.sortIndex=B.expirationTime,r(y,B);else break;B=f(p)}}function Mt(_){if(et=!1,_t(_),!J)if(f(y)!==null)J=!0,bt||(bt=!0,Ht());else{var B=f(p);B!==null&&Zt(Mt,B.startTime-_)}}var bt=!1,F=-1,Q=5,nt=-1;function Rt(){return st?!0:!(c.unstable_now()-nt<Q)}function wt(){if(st=!1,bt){var _=c.unstable_now();nt=_;var B=!0;try{t:{J=!1,et&&(et=!1,Qt(F),F=-1),Y=!0;var w=U;try{e:{for(_t(_),T=f(y);T!==null&&!(T.expirationTime>_&&Rt());){var mt=T.callback;if(typeof mt=="function"){T.callback=null,U=T.priorityLevel;var pt=mt(T.expirationTime<=_);if(_=c.unstable_now(),typeof pt=="function"){T.callback=pt,_t(_),B=!0;break e}T===f(y)&&o(y),_t(_)}else o(y);T=f(y)}if(T!==null)B=!0;else{var g=f(p);g!==null&&Zt(Mt,g.startTime-_),B=!1}}break t}finally{T=null,U=w,Y=!1}B=void 0}}finally{B?Ht():bt=!1}}}var Ht;if(typeof Et=="function")Ht=function(){Et(wt)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,se=we.port2;we.port1.onmessage=wt,Ht=function(){se.postMessage(null)}}else Ht=function(){vt(wt,0)};function Zt(_,B){F=vt(function(){_(c.unstable_now())},B)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(_){_.callback=null},c.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<_?Math.floor(1e3/_):5},c.unstable_getCurrentPriorityLevel=function(){return U},c.unstable_next=function(_){switch(U){case 1:case 2:case 3:var B=3;break;default:B=U}var w=U;U=B;try{return _()}finally{U=w}},c.unstable_requestPaint=function(){st=!0},c.unstable_runWithPriority=function(_,B){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var w=U;U=_;try{return B()}finally{U=w}},c.unstable_scheduleCallback=function(_,B,w){var mt=c.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?mt+w:mt):w=mt,_){case 1:var pt=-1;break;case 2:pt=250;break;case 5:pt=1073741823;break;case 4:pt=1e4;break;default:pt=5e3}return pt=w+pt,_={id:M++,callback:B,priorityLevel:_,startTime:w,expirationTime:pt,sortIndex:-1},w>mt?(_.sortIndex=w,r(p,_),f(y)===null&&_===f(p)&&(et?(Qt(F),F=-1):et=!0,Zt(Mt,w-mt))):(_.sortIndex=pt,r(y,_),J||Y||(J=!0,bt||(bt=!0,Ht()))),_},c.unstable_shouldYield=Rt,c.unstable_wrapCallback=function(_){var B=U;return function(){var w=U;U=B;try{return _.apply(this,arguments)}finally{U=w}}}})(Xo)),Xo}var om;function Hp(){return om||(om=1,qo.exports=wp()),qo.exports}var Lo={exports:{}},te={};var sm;function Bp(){if(sm)return te;sm=1;var c=Jo();function r(y){var p="https://react.dev/errors/"+y;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var M=2;M<arguments.length;M++)p+="&args[]="+encodeURIComponent(arguments[M])}return"Minified React error #"+y+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var o={d:{f,r:function(){throw Error(r(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},d=Symbol.for("react.portal");function h(y,p,M){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:T==null?null:""+T,children:y,containerInfo:p,implementation:M}}var x=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function E(y,p){if(y==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return te.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,te.createPortal=function(y,p){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(r(299));return h(y,p,null,M)},te.flushSync=function(y){var p=x.T,M=o.p;try{if(x.T=null,o.p=2,y)return y()}finally{x.T=p,o.p=M,o.d.f()}},te.preconnect=function(y,p){typeof y=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(y,p))},te.prefetchDNS=function(y){typeof y=="string"&&o.d.D(y)},te.preinit=function(y,p){if(typeof y=="string"&&p&&typeof p.as=="string"){var M=p.as,T=E(M,p.crossOrigin),U=typeof p.integrity=="string"?p.integrity:void 0,Y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;M==="style"?o.d.S(y,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:T,integrity:U,fetchPriority:Y}):M==="script"&&o.d.X(y,{crossOrigin:T,integrity:U,fetchPriority:Y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},te.preinitModule=function(y,p){if(typeof y=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var M=E(p.as,p.crossOrigin);o.d.M(y,{crossOrigin:M,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(y)},te.preload=function(y,p){if(typeof y=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var M=p.as,T=E(M,p.crossOrigin);o.d.L(y,M,{crossOrigin:T,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},te.preloadModule=function(y,p){if(typeof y=="string")if(p){var M=E(p.as,p.crossOrigin);o.d.m(y,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:M,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(y)},te.requestFormReset=function(y){o.d.r(y)},te.unstable_batchedUpdates=function(y,p){return y(p)},te.useFormState=function(y,p,M){return x.H.useFormState(y,p,M)},te.useFormStatus=function(){return x.H.useHostTransitionStatus()},te.version="19.2.3",te}var rm;function zm(){if(rm)return Lo.exports;rm=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(r){console.error(r)}}return c(),Lo.exports=Bp(),Lo.exports}var fm;function Yp(){if(fm)return Xa;fm=1;var c=Hp(),r=Jo(),f=zm();function o(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function h(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function x(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function E(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function y(t){if(h(t)!==t)throw Error(o(188))}function p(t){var e=t.alternate;if(!e){if(e=h(t),e===null)throw Error(o(188));return e!==t?null:t}for(var l=t,n=e;;){var a=l.return;if(a===null)break;var i=a.alternate;if(i===null){if(n=a.return,n!==null){l=n;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===l)return y(a),t;if(i===n)return y(a),e;i=i.sibling}throw Error(o(188))}if(l.return!==n.return)l=a,n=i;else{for(var u=!1,s=a.child;s;){if(s===l){u=!0,l=a,n=i;break}if(s===n){u=!0,n=a,l=i;break}s=s.sibling}if(!u){for(s=i.child;s;){if(s===l){u=!0,l=i,n=a;break}if(s===n){u=!0,n=i,l=a;break}s=s.sibling}if(!u)throw Error(o(189))}}if(l.alternate!==n)throw Error(o(190))}if(l.tag!==3)throw Error(o(188));return l.stateNode.current===l?t:e}function M(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=M(t),e!==null)return e;t=t.sibling}return null}var T=Object.assign,U=Symbol.for("react.element"),Y=Symbol.for("react.transitional.element"),J=Symbol.for("react.portal"),et=Symbol.for("react.fragment"),st=Symbol.for("react.strict_mode"),vt=Symbol.for("react.profiler"),Qt=Symbol.for("react.consumer"),Et=Symbol.for("react.context"),_t=Symbol.for("react.forward_ref"),Mt=Symbol.for("react.suspense"),bt=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),nt=Symbol.for("react.activity"),Rt=Symbol.for("react.memo_cache_sentinel"),wt=Symbol.iterator;function Ht(t){return t===null||typeof t!="object"?null:(t=wt&&t[wt]||t["@@iterator"],typeof t=="function"?t:null)}var we=Symbol.for("react.client.reference");function se(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===we?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case et:return"Fragment";case vt:return"Profiler";case st:return"StrictMode";case Mt:return"Suspense";case bt:return"SuspenseList";case nt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case J:return"Portal";case Et:return t.displayName||"Context";case Qt:return(t._context.displayName||"Context")+".Consumer";case _t:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return e=t.displayName||null,e!==null?e:se(t.type)||"Memo";case Q:e=t._payload,t=t._init;try{return se(t(e))}catch{}}return null}var Zt=Array.isArray,_=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,w={pending:!1,data:null,method:null,action:null},mt=[],pt=-1;function g(t){return{current:t}}function R(t){0>pt||(t.current=mt[pt],mt[pt]=null,pt--)}function H(t,e){pt++,mt[pt]=t.current,t.current=e}var q=g(null),$=g(null),lt=g(null),W=g(null);function Kt(t,e){switch(H(lt,e),H($,t),H(q,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Td(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Td(e),t=Cd(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}R(q),H(q,t)}function zt(){R(q),R($),R(lt)}function He(t){t.memoizedState!==null&&H(W,t);var e=q.current,l=Cd(e,t.type);e!==l&&(H($,t),H(q,l))}function ol(t){$.current===t&&(R(q),R($)),W.current===t&&(R(W),wa._currentValue=w)}var sl,es;function wl(t){if(sl===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);sl=e&&e[1]||"",es=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+sl+t+es}var bu=!1;function Su(t,e){if(!t||bu)return"";bu=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(C){var z=C}Reflect.construct(t,[],j)}else{try{j.call()}catch(C){z=C}t.call(j.prototype)}}else{try{throw Error()}catch(C){z=C}(j=t())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(C){if(C&&z&&typeof C.stack=="string")return[C.stack,z.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),u=i[0],s=i[1];if(u&&s){var m=u.split(`
`),G=s.split(`
`);for(a=n=0;n<m.length&&!m[n].includes("DetermineComponentFrameRoot");)n++;for(;a<G.length&&!G[a].includes("DetermineComponentFrameRoot");)a++;if(n===m.length||a===G.length)for(n=m.length-1,a=G.length-1;1<=n&&0<=a&&m[n]!==G[a];)a--;for(;1<=n&&0<=a;n--,a--)if(m[n]!==G[a]){if(n!==1||a!==1)do if(n--,a--,0>a||m[n]!==G[a]){var N=`
`+m[n].replace(" at new "," at ");return t.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",t.displayName)),N}while(1<=n&&0<=a);break}}}finally{bu=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?wl(l):""}function uh(t,e){switch(t.tag){case 26:case 27:case 5:return wl(t.type);case 16:return wl("Lazy");case 13:return t.child!==e&&e!==null?wl("Suspense Fallback"):wl("Suspense");case 19:return wl("SuspenseList");case 0:case 15:return Su(t.type,!1);case 11:return Su(t.type.render,!1);case 1:return Su(t.type,!0);case 31:return wl("Activity");default:return""}}function ls(t){try{var e="",l=null;do e+=uh(t,l),l=t,t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var xu=Object.prototype.hasOwnProperty,Au=c.unstable_scheduleCallback,Gu=c.unstable_cancelCallback,ch=c.unstable_shouldYield,oh=c.unstable_requestPaint,re=c.unstable_now,sh=c.unstable_getCurrentPriorityLevel,ns=c.unstable_ImmediatePriority,as=c.unstable_UserBlockingPriority,Za=c.unstable_NormalPriority,rh=c.unstable_LowPriority,is=c.unstable_IdlePriority,fh=c.log,dh=c.unstable_setDisableYieldValue,Jn=null,fe=null;function rl(t){if(typeof fh=="function"&&dh(t),fe&&typeof fe.setStrictMode=="function")try{fe.setStrictMode(Jn,t)}catch{}}var de=Math.clz32?Math.clz32:ph,mh=Math.log,hh=Math.LN2;function ph(t){return t>>>=0,t===0?32:31-(mh(t)/hh|0)|0}var Ka=256,ka=262144,Ja=4194304;function Hl(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Wa(t,e,l){var n=t.pendingLanes;if(n===0)return 0;var a=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var s=n&134217727;return s!==0?(n=s&~i,n!==0?a=Hl(n):(u&=s,u!==0?a=Hl(u):l||(l=s&~t,l!==0&&(a=Hl(l))))):(s=n&~i,s!==0?a=Hl(s):u!==0?a=Hl(u):l||(l=n&~t,l!==0&&(a=Hl(l)))),a===0?0:e!==0&&e!==a&&(e&i)===0&&(i=a&-a,l=e&-e,i>=l||i===32&&(l&4194048)!==0)?e:a}function Wn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function vh(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function us(){var t=Ja;return Ja<<=1,(Ja&62914560)===0&&(Ja=4194304),t}function Eu(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function $n(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function gh(t,e,l,n,a,i){var u=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var s=t.entanglements,m=t.expirationTimes,G=t.hiddenUpdates;for(l=u&~l;0<l;){var N=31-de(l),j=1<<N;s[N]=0,m[N]=-1;var z=G[N];if(z!==null)for(G[N]=null,N=0;N<z.length;N++){var C=z[N];C!==null&&(C.lane&=-536870913)}l&=~j}n!==0&&cs(t,n,0),i!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~e))}function cs(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var n=31-de(e);t.entangledLanes|=e,t.entanglements[n]=t.entanglements[n]|1073741824|l&261930}function os(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var n=31-de(l),a=1<<n;a&e|t[n]&e&&(t[n]|=e),l&=~a}}function ss(t,e){var l=e&-e;return l=(l&42)!==0?1:zu(l),(l&(t.suspendedLanes|e))!==0?0:l}function zu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Tu(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function rs(){var t=B.p;return t!==0?t:(t=window.event,t===void 0?32:$d(t.type))}function fs(t,e){var l=B.p;try{return B.p=t,e()}finally{B.p=l}}var fl=Math.random().toString(36).slice(2),Wt="__reactFiber$"+fl,le="__reactProps$"+fl,un="__reactContainer$"+fl,Cu="__reactEvents$"+fl,yh="__reactListeners$"+fl,bh="__reactHandles$"+fl,ds="__reactResources$"+fl,Fn="__reactMarker$"+fl;function _u(t){delete t[Wt],delete t[le],delete t[Cu],delete t[yh],delete t[bh]}function cn(t){var e=t[Wt];if(e)return e;for(var l=t.parentNode;l;){if(e=l[un]||l[Wt]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=jd(t);t!==null;){if(l=t[Wt])return l;t=jd(t)}return e}t=l,l=t.parentNode}return null}function on(t){if(t=t[Wt]||t[un]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Pn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(o(33))}function sn(t){var e=t[ds];return e||(e=t[ds]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function kt(t){t[Fn]=!0}var ms=new Set,hs={};function Bl(t,e){rn(t,e),rn(t+"Capture",e)}function rn(t,e){for(hs[t]=e,t=0;t<e.length;t++)ms.add(e[t])}var Sh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ps={},vs={};function xh(t){return xu.call(vs,t)?!0:xu.call(ps,t)?!1:Sh.test(t)?vs[t]=!0:(ps[t]=!0,!1)}function $a(t,e,l){if(xh(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function Fa(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function Ve(t,e,l,n){if(n===null)t.removeAttribute(l);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+n)}}function Se(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gs(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ah(t,e,l){var n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Nu(t){if(!t._valueTracker){var e=gs(t)?"checked":"value";t._valueTracker=Ah(t,e,""+t[e])}}function ys(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),n="";return t&&(n=gs(t)?t.checked?"true":"false":t.value),t=n,t!==l?(e.setValue(t),!0):!1}function Pa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Gh=/[\n"\\]/g;function xe(t){return t.replace(Gh,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Mu(t,e,l,n,a,i,u,s){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),e!=null?u==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Se(e)):t.value!==""+Se(e)&&(t.value=""+Se(e)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),e!=null?Ou(t,u,Se(e)):l!=null?Ou(t,u,Se(l)):n!=null&&t.removeAttribute("value"),a==null&&i!=null&&(t.defaultChecked=!!i),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.name=""+Se(s):t.removeAttribute("name")}function bs(t,e,l,n,a,i,u,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){Nu(t);return}l=l!=null?""+Se(l):"",e=e!=null?""+Se(e):l,s||e===t.value||(t.value=e),t.defaultValue=e}n=n??a,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=s?t.checked:!!n,t.defaultChecked=!!n,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),Nu(t)}function Ou(t,e,l){e==="number"&&Pa(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function fn(t,e,l,n){if(t=t.options,e){e={};for(var a=0;a<l.length;a++)e["$"+l[a]]=!0;for(l=0;l<t.length;l++)a=e.hasOwnProperty("$"+t[l].value),t[l].selected!==a&&(t[l].selected=a),a&&n&&(t[l].defaultSelected=!0)}else{for(l=""+Se(l),e=null,a=0;a<t.length;a++){if(t[a].value===l){t[a].selected=!0,n&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function Ss(t,e,l){if(e!=null&&(e=""+Se(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+Se(l):""}function xs(t,e,l,n){if(e==null){if(n!=null){if(l!=null)throw Error(o(92));if(Zt(n)){if(1<n.length)throw Error(o(93));n=n[0]}l=n}l==null&&(l=""),e=l}l=Se(e),t.defaultValue=l,n=t.textContent,n===l&&n!==""&&n!==null&&(t.value=n),Nu(t)}function dn(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var Eh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function As(t,e,l){var n=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?n?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":n?t.setProperty(e,l):typeof l!="number"||l===0||Eh.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function Gs(t,e,l){if(e!=null&&typeof e!="object")throw Error(o(62));if(t=t.style,l!=null){for(var n in l)!l.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="");for(var a in e)n=e[a],e.hasOwnProperty(a)&&l[a]!==n&&As(t,a,n)}else for(var i in e)e.hasOwnProperty(i)&&As(t,i,e[i])}function Du(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Th=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ia(t){return Th.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Qe(){}var Ru=null;function ju(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mn=null,hn=null;function Es(t){var e=on(t);if(e&&(t=e.stateNode)){var l=t[le]||null;t:switch(t=e.stateNode,e.type){case"input":if(Mu(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+xe(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var n=l[e];if(n!==t&&n.form===t.form){var a=n[le]||null;if(!a)throw Error(o(90));Mu(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<l.length;e++)n=l[e],n.form===t.form&&ys(n)}break t;case"textarea":Ss(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&fn(t,!!l.multiple,e,!1)}}}var Uu=!1;function zs(t,e,l){if(Uu)return t(e,l);Uu=!0;try{var n=t(e);return n}finally{if(Uu=!1,(mn!==null||hn!==null)&&(qi(),mn&&(e=mn,t=hn,hn=mn=null,Es(e),t)))for(e=0;e<t.length;e++)Es(t[e])}}function In(t,e){var l=t.stateNode;if(l===null)return null;var n=l[le]||null;if(n===null)return null;l=n[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(o(231,e,typeof l));return l}var Ze=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wu=!1;if(Ze)try{var ta={};Object.defineProperty(ta,"passive",{get:function(){wu=!0}}),window.addEventListener("test",ta,ta),window.removeEventListener("test",ta,ta)}catch{wu=!1}var dl=null,Hu=null,ti=null;function Ts(){if(ti)return ti;var t,e=Hu,l=e.length,n,a="value"in dl?dl.value:dl.textContent,i=a.length;for(t=0;t<l&&e[t]===a[t];t++);var u=l-t;for(n=1;n<=u&&e[l-n]===a[i-n];n++);return ti=a.slice(t,1<n?1-n:void 0)}function ei(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function li(){return!0}function Cs(){return!1}function ne(t){function e(l,n,a,i,u){this._reactName=l,this._targetInst=a,this.type=n,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(l=t[s],this[s]=l?l(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?li:Cs,this.isPropagationStopped=Cs,this}return T(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=li)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=li)},persist:function(){},isPersistent:li}),e}var Yl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ni=ne(Yl),ea=T({},Yl,{view:0,detail:0}),Ch=ne(ea),Bu,Yu,la,ai=T({},ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==la&&(la&&t.type==="mousemove"?(Bu=t.screenX-la.screenX,Yu=t.screenY-la.screenY):Yu=Bu=0,la=t),Bu)},movementY:function(t){return"movementY"in t?t.movementY:Yu}}),_s=ne(ai),_h=T({},ai,{dataTransfer:0}),Nh=ne(_h),Mh=T({},ea,{relatedTarget:0}),qu=ne(Mh),Oh=T({},Yl,{animationName:0,elapsedTime:0,pseudoElement:0}),Dh=ne(Oh),Rh=T({},Yl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jh=ne(Rh),Uh=T({},Yl,{data:0}),Ns=ne(Uh),wh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yh(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Bh[t])?!!e[t]:!1}function Xu(){return Yh}var qh=T({},ea,{key:function(t){if(t.key){var e=wh[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ei(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Hh[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xu,charCode:function(t){return t.type==="keypress"?ei(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ei(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Xh=ne(qh),Lh=T({},ai,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ms=ne(Lh),Vh=T({},ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xu}),Qh=ne(Vh),Zh=T({},Yl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kh=ne(Zh),kh=T({},ai,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Jh=ne(kh),Wh=T({},Yl,{newState:0,oldState:0}),$h=ne(Wh),Fh=[9,13,27,32],Lu=Ze&&"CompositionEvent"in window,na=null;Ze&&"documentMode"in document&&(na=document.documentMode);var Ph=Ze&&"TextEvent"in window&&!na,Os=Ze&&(!Lu||na&&8<na&&11>=na),Ds=" ",Rs=!1;function js(t,e){switch(t){case"keyup":return Fh.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Us(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var pn=!1;function Ih(t,e){switch(t){case"compositionend":return Us(e);case"keypress":return e.which!==32?null:(Rs=!0,Ds);case"textInput":return t=e.data,t===Ds&&Rs?null:t;default:return null}}function t0(t,e){if(pn)return t==="compositionend"||!Lu&&js(t,e)?(t=Ts(),ti=Hu=dl=null,pn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Os&&e.locale!=="ko"?null:e.data;default:return null}}var e0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ws(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!e0[t.type]:e==="textarea"}function Hs(t,e,l,n){mn?hn?hn.push(n):hn=[n]:mn=n,e=ki(e,"onChange"),0<e.length&&(l=new ni("onChange","change",null,l,n),t.push({event:l,listeners:e}))}var aa=null,ia=null;function l0(t){Sd(t,0)}function ii(t){var e=Pn(t);if(ys(e))return t}function Bs(t,e){if(t==="change")return e}var Ys=!1;if(Ze){var Vu;if(Ze){var Qu="oninput"in document;if(!Qu){var qs=document.createElement("div");qs.setAttribute("oninput","return;"),Qu=typeof qs.oninput=="function"}Vu=Qu}else Vu=!1;Ys=Vu&&(!document.documentMode||9<document.documentMode)}function Xs(){aa&&(aa.detachEvent("onpropertychange",Ls),ia=aa=null)}function Ls(t){if(t.propertyName==="value"&&ii(ia)){var e=[];Hs(e,ia,t,ju(t)),zs(l0,e)}}function n0(t,e,l){t==="focusin"?(Xs(),aa=e,ia=l,aa.attachEvent("onpropertychange",Ls)):t==="focusout"&&Xs()}function a0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ii(ia)}function i0(t,e){if(t==="click")return ii(e)}function u0(t,e){if(t==="input"||t==="change")return ii(e)}function c0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var me=typeof Object.is=="function"?Object.is:c0;function ua(t,e){if(me(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),n=Object.keys(e);if(l.length!==n.length)return!1;for(n=0;n<l.length;n++){var a=l[n];if(!xu.call(e,a)||!me(t[a],e[a]))return!1}return!0}function Vs(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qs(t,e){var l=Vs(t);t=0;for(var n;l;){if(l.nodeType===3){if(n=t+l.textContent.length,t<=e&&n>=e)return{node:l,offset:e-t};t=n}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=Vs(l)}}function Zs(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Zs(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ks(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Pa(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Pa(t.document)}return e}function Zu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var o0=Ze&&"documentMode"in document&&11>=document.documentMode,vn=null,Ku=null,ca=null,ku=!1;function ks(t,e,l){var n=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;ku||vn==null||vn!==Pa(n)||(n=vn,"selectionStart"in n&&Zu(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ca&&ua(ca,n)||(ca=n,n=ki(Ku,"onSelect"),0<n.length&&(e=new ni("onSelect","select",null,e,l),t.push({event:e,listeners:n}),e.target=vn)))}function ql(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var gn={animationend:ql("Animation","AnimationEnd"),animationiteration:ql("Animation","AnimationIteration"),animationstart:ql("Animation","AnimationStart"),transitionrun:ql("Transition","TransitionRun"),transitionstart:ql("Transition","TransitionStart"),transitioncancel:ql("Transition","TransitionCancel"),transitionend:ql("Transition","TransitionEnd")},Ju={},Js={};Ze&&(Js=document.createElement("div").style,"AnimationEvent"in window||(delete gn.animationend.animation,delete gn.animationiteration.animation,delete gn.animationstart.animation),"TransitionEvent"in window||delete gn.transitionend.transition);function Xl(t){if(Ju[t])return Ju[t];if(!gn[t])return t;var e=gn[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in Js)return Ju[t]=e[l];return t}var Ws=Xl("animationend"),$s=Xl("animationiteration"),Fs=Xl("animationstart"),s0=Xl("transitionrun"),r0=Xl("transitionstart"),f0=Xl("transitioncancel"),Ps=Xl("transitionend"),Is=new Map,Wu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wu.push("scrollEnd");function De(t,e){Is.set(t,e),Bl(e,[t])}var ui=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ae=[],yn=0,$u=0;function ci(){for(var t=yn,e=$u=yn=0;e<t;){var l=Ae[e];Ae[e++]=null;var n=Ae[e];Ae[e++]=null;var a=Ae[e];Ae[e++]=null;var i=Ae[e];if(Ae[e++]=null,n!==null&&a!==null){var u=n.pending;u===null?a.next=a:(a.next=u.next,u.next=a),n.pending=a}i!==0&&tr(l,a,i)}}function oi(t,e,l,n){Ae[yn++]=t,Ae[yn++]=e,Ae[yn++]=l,Ae[yn++]=n,$u|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function Fu(t,e,l,n){return oi(t,e,l,n),si(t)}function Ll(t,e){return oi(t,null,null,e),si(t)}function tr(t,e,l){t.lanes|=l;var n=t.alternate;n!==null&&(n.lanes|=l);for(var a=!1,i=t.return;i!==null;)i.childLanes|=l,n=i.alternate,n!==null&&(n.childLanes|=l),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(a=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,a&&e!==null&&(a=31-de(l),t=i.hiddenUpdates,n=t[a],n===null?t[a]=[e]:n.push(e),e.lane=l|536870912),i):null}function si(t){if(50<Na)throw Na=0,uo=null,Error(o(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var bn={};function d0(t,e,l,n){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function he(t,e,l,n){return new d0(t,e,l,n)}function Pu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ke(t,e){var l=t.alternate;return l===null?(l=he(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function er(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function ri(t,e,l,n,a,i){var u=0;if(n=t,typeof t=="function")Pu(t)&&(u=1);else if(typeof t=="string")u=gp(t,l,q.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case nt:return t=he(31,l,e,a),t.elementType=nt,t.lanes=i,t;case et:return Vl(l.children,a,i,e);case st:u=8,a|=24;break;case vt:return t=he(12,l,e,a|2),t.elementType=vt,t.lanes=i,t;case Mt:return t=he(13,l,e,a),t.elementType=Mt,t.lanes=i,t;case bt:return t=he(19,l,e,a),t.elementType=bt,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Et:u=10;break t;case Qt:u=9;break t;case _t:u=11;break t;case F:u=14;break t;case Q:u=16,n=null;break t}u=29,l=Error(o(130,t===null?"null":typeof t,"")),n=null}return e=he(u,l,e,a),e.elementType=t,e.type=n,e.lanes=i,e}function Vl(t,e,l,n){return t=he(7,t,n,e),t.lanes=l,t}function Iu(t,e,l){return t=he(6,t,null,e),t.lanes=l,t}function lr(t){var e=he(18,null,null,0);return e.stateNode=t,e}function tc(t,e,l){return e=he(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var nr=new WeakMap;function Ge(t,e){if(typeof t=="object"&&t!==null){var l=nr.get(t);return l!==void 0?l:(e={value:t,source:e,stack:ls(e)},nr.set(t,e),e)}return{value:t,source:e,stack:ls(e)}}var Sn=[],xn=0,fi=null,oa=0,Ee=[],ze=0,ml=null,Be=1,Ye="";function ke(t,e){Sn[xn++]=oa,Sn[xn++]=fi,fi=t,oa=e}function ar(t,e,l){Ee[ze++]=Be,Ee[ze++]=Ye,Ee[ze++]=ml,ml=t;var n=Be;t=Ye;var a=32-de(n)-1;n&=~(1<<a),l+=1;var i=32-de(e)+a;if(30<i){var u=a-a%5;i=(n&(1<<u)-1).toString(32),n>>=u,a-=u,Be=1<<32-de(e)+a|l<<a|n,Ye=i+t}else Be=1<<i|l<<a|n,Ye=t}function ec(t){t.return!==null&&(ke(t,1),ar(t,1,0))}function lc(t){for(;t===fi;)fi=Sn[--xn],Sn[xn]=null,oa=Sn[--xn],Sn[xn]=null;for(;t===ml;)ml=Ee[--ze],Ee[ze]=null,Ye=Ee[--ze],Ee[ze]=null,Be=Ee[--ze],Ee[ze]=null}function ir(t,e){Ee[ze++]=Be,Ee[ze++]=Ye,Ee[ze++]=ml,Be=e.id,Ye=e.overflow,ml=t}var $t=null,Tt=null,rt=!1,hl=null,Te=!1,nc=Error(o(519));function pl(t){var e=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw sa(Ge(e,t)),nc}function ur(t){var e=t.stateNode,l=t.type,n=t.memoizedProps;switch(e[Wt]=t,e[le]=n,l){case"dialog":ut("cancel",e),ut("close",e);break;case"iframe":case"object":case"embed":ut("load",e);break;case"video":case"audio":for(l=0;l<Oa.length;l++)ut(Oa[l],e);break;case"source":ut("error",e);break;case"img":case"image":case"link":ut("error",e),ut("load",e);break;case"details":ut("toggle",e);break;case"input":ut("invalid",e),bs(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":ut("invalid",e);break;case"textarea":ut("invalid",e),xs(e,n.value,n.defaultValue,n.children)}l=n.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||n.suppressHydrationWarning===!0||Ed(e.textContent,l)?(n.popover!=null&&(ut("beforetoggle",e),ut("toggle",e)),n.onScroll!=null&&ut("scroll",e),n.onScrollEnd!=null&&ut("scrollend",e),n.onClick!=null&&(e.onclick=Qe),e=!0):e=!1,e||pl(t,!0)}function cr(t){for($t=t.return;$t;)switch($t.tag){case 5:case 31:case 13:Te=!1;return;case 27:case 3:Te=!0;return;default:$t=$t.return}}function An(t){if(t!==$t)return!1;if(!rt)return cr(t),rt=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||Ao(t.type,t.memoizedProps)),l=!l),l&&Tt&&pl(t),cr(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));Tt=Rd(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));Tt=Rd(t)}else e===27?(e=Tt,Nl(t.type)?(t=Co,Co=null,Tt=t):Tt=e):Tt=$t?_e(t.stateNode.nextSibling):null;return!0}function Ql(){Tt=$t=null,rt=!1}function ac(){var t=hl;return t!==null&&(ce===null?ce=t:ce.push.apply(ce,t),hl=null),t}function sa(t){hl===null?hl=[t]:hl.push(t)}var ic=g(null),Zl=null,Je=null;function vl(t,e,l){H(ic,e._currentValue),e._currentValue=l}function We(t){t._currentValue=ic.current,R(ic)}function uc(t,e,l){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===l)break;t=t.return}}function cc(t,e,l,n){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var i=a.dependencies;if(i!==null){var u=a.child;i=i.firstContext;t:for(;i!==null;){var s=i;i=a;for(var m=0;m<e.length;m++)if(s.context===e[m]){i.lanes|=l,s=i.alternate,s!==null&&(s.lanes|=l),uc(i.return,l,t),n||(u=null);break t}i=s.next}}else if(a.tag===18){if(u=a.return,u===null)throw Error(o(341));u.lanes|=l,i=u.alternate,i!==null&&(i.lanes|=l),uc(u,l,t),u=null}else u=a.child;if(u!==null)u.return=a;else for(u=a;u!==null;){if(u===t){u=null;break}if(a=u.sibling,a!==null){a.return=u.return,u=a;break}u=u.return}a=u}}function Gn(t,e,l,n){t=null;for(var a=e,i=!1;a!==null;){if(!i){if((a.flags&524288)!==0)i=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var u=a.alternate;if(u===null)throw Error(o(387));if(u=u.memoizedProps,u!==null){var s=a.type;me(a.pendingProps.value,u.value)||(t!==null?t.push(s):t=[s])}}else if(a===W.current){if(u=a.alternate,u===null)throw Error(o(387));u.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(wa):t=[wa])}a=a.return}t!==null&&cc(e,t,l,n),e.flags|=262144}function di(t){for(t=t.firstContext;t!==null;){if(!me(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Kl(t){Zl=t,Je=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ft(t){return or(Zl,t)}function mi(t,e){return Zl===null&&Kl(t),or(t,e)}function or(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},Je===null){if(t===null)throw Error(o(308));Je=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Je=Je.next=e;return l}var m0=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,n){t.push(n)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},h0=c.unstable_scheduleCallback,p0=c.unstable_NormalPriority,Bt={$$typeof:Et,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function oc(){return{controller:new m0,data:new Map,refCount:0}}function ra(t){t.refCount--,t.refCount===0&&h0(p0,function(){t.controller.abort()})}var fa=null,sc=0,En=0,zn=null;function v0(t,e){if(fa===null){var l=fa=[];sc=0,En=mo(),zn={status:"pending",value:void 0,then:function(n){l.push(n)}}}return sc++,e.then(sr,sr),e}function sr(){if(--sc===0&&fa!==null){zn!==null&&(zn.status="fulfilled");var t=fa;fa=null,En=0,zn=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function g0(t,e){var l=[],n={status:"pending",value:null,reason:null,then:function(a){l.push(a)}};return t.then(function(){n.status="fulfilled",n.value=e;for(var a=0;a<l.length;a++)(0,l[a])(e)},function(a){for(n.status="rejected",n.reason=a,a=0;a<l.length;a++)(0,l[a])(void 0)}),n}var rr=_.S;_.S=function(t,e){Jf=re(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&v0(t,e),rr!==null&&rr(t,e)};var kl=g(null);function rc(){var t=kl.current;return t!==null?t:Gt.pooledCache}function hi(t,e){e===null?H(kl,kl.current):H(kl,e.pool)}function fr(){var t=rc();return t===null?null:{parent:Bt._currentValue,pool:t}}var Tn=Error(o(460)),fc=Error(o(474)),pi=Error(o(542)),vi={then:function(){}};function dr(t){return t=t.status,t==="fulfilled"||t==="rejected"}function mr(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(Qe,Qe),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,pr(t),t;default:if(typeof e.status=="string")e.then(Qe,Qe);else{if(t=Gt,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=e,t.status="pending",t.then(function(n){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=n}},function(n){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,pr(t),t}throw Wl=e,Tn}}function Jl(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Wl=l,Tn):l}}var Wl=null;function hr(){if(Wl===null)throw Error(o(459));var t=Wl;return Wl=null,t}function pr(t){if(t===Tn||t===pi)throw Error(o(483))}var Cn=null,da=0;function gi(t){var e=da;return da+=1,Cn===null&&(Cn=[]),mr(Cn,t,e)}function ma(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function yi(t,e){throw e.$$typeof===U?Error(o(525)):(t=Object.prototype.toString.call(e),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function vr(t){function e(b,v){if(t){var A=b.deletions;A===null?(b.deletions=[v],b.flags|=16):A.push(v)}}function l(b,v){if(!t)return null;for(;v!==null;)e(b,v),v=v.sibling;return null}function n(b){for(var v=new Map;b!==null;)b.key!==null?v.set(b.key,b):v.set(b.index,b),b=b.sibling;return v}function a(b,v){return b=Ke(b,v),b.index=0,b.sibling=null,b}function i(b,v,A){return b.index=A,t?(A=b.alternate,A!==null?(A=A.index,A<v?(b.flags|=67108866,v):A):(b.flags|=67108866,v)):(b.flags|=1048576,v)}function u(b){return t&&b.alternate===null&&(b.flags|=67108866),b}function s(b,v,A,O){return v===null||v.tag!==6?(v=Iu(A,b.mode,O),v.return=b,v):(v=a(v,A),v.return=b,v)}function m(b,v,A,O){var K=A.type;return K===et?N(b,v,A.props.children,O,A.key):v!==null&&(v.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Q&&Jl(K)===v.type)?(v=a(v,A.props),ma(v,A),v.return=b,v):(v=ri(A.type,A.key,A.props,null,b.mode,O),ma(v,A),v.return=b,v)}function G(b,v,A,O){return v===null||v.tag!==4||v.stateNode.containerInfo!==A.containerInfo||v.stateNode.implementation!==A.implementation?(v=tc(A,b.mode,O),v.return=b,v):(v=a(v,A.children||[]),v.return=b,v)}function N(b,v,A,O,K){return v===null||v.tag!==7?(v=Vl(A,b.mode,O,K),v.return=b,v):(v=a(v,A),v.return=b,v)}function j(b,v,A){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Iu(""+v,b.mode,A),v.return=b,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Y:return A=ri(v.type,v.key,v.props,null,b.mode,A),ma(A,v),A.return=b,A;case J:return v=tc(v,b.mode,A),v.return=b,v;case Q:return v=Jl(v),j(b,v,A)}if(Zt(v)||Ht(v))return v=Vl(v,b.mode,A,null),v.return=b,v;if(typeof v.then=="function")return j(b,gi(v),A);if(v.$$typeof===Et)return j(b,mi(b,v),A);yi(b,v)}return null}function z(b,v,A,O){var K=v!==null?v.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return K!==null?null:s(b,v,""+A,O);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Y:return A.key===K?m(b,v,A,O):null;case J:return A.key===K?G(b,v,A,O):null;case Q:return A=Jl(A),z(b,v,A,O)}if(Zt(A)||Ht(A))return K!==null?null:N(b,v,A,O,null);if(typeof A.then=="function")return z(b,v,gi(A),O);if(A.$$typeof===Et)return z(b,v,mi(b,A),O);yi(b,A)}return null}function C(b,v,A,O,K){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return b=b.get(A)||null,s(v,b,""+O,K);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Y:return b=b.get(O.key===null?A:O.key)||null,m(v,b,O,K);case J:return b=b.get(O.key===null?A:O.key)||null,G(v,b,O,K);case Q:return O=Jl(O),C(b,v,A,O,K)}if(Zt(O)||Ht(O))return b=b.get(A)||null,N(v,b,O,K,null);if(typeof O.then=="function")return C(b,v,A,gi(O),K);if(O.$$typeof===Et)return C(b,v,A,mi(v,O),K);yi(v,O)}return null}function X(b,v,A,O){for(var K=null,ft=null,Z=v,tt=v=0,ot=null;Z!==null&&tt<A.length;tt++){Z.index>tt?(ot=Z,Z=null):ot=Z.sibling;var dt=z(b,Z,A[tt],O);if(dt===null){Z===null&&(Z=ot);break}t&&Z&&dt.alternate===null&&e(b,Z),v=i(dt,v,tt),ft===null?K=dt:ft.sibling=dt,ft=dt,Z=ot}if(tt===A.length)return l(b,Z),rt&&ke(b,tt),K;if(Z===null){for(;tt<A.length;tt++)Z=j(b,A[tt],O),Z!==null&&(v=i(Z,v,tt),ft===null?K=Z:ft.sibling=Z,ft=Z);return rt&&ke(b,tt),K}for(Z=n(Z);tt<A.length;tt++)ot=C(Z,b,tt,A[tt],O),ot!==null&&(t&&ot.alternate!==null&&Z.delete(ot.key===null?tt:ot.key),v=i(ot,v,tt),ft===null?K=ot:ft.sibling=ot,ft=ot);return t&&Z.forEach(function(jl){return e(b,jl)}),rt&&ke(b,tt),K}function k(b,v,A,O){if(A==null)throw Error(o(151));for(var K=null,ft=null,Z=v,tt=v=0,ot=null,dt=A.next();Z!==null&&!dt.done;tt++,dt=A.next()){Z.index>tt?(ot=Z,Z=null):ot=Z.sibling;var jl=z(b,Z,dt.value,O);if(jl===null){Z===null&&(Z=ot);break}t&&Z&&jl.alternate===null&&e(b,Z),v=i(jl,v,tt),ft===null?K=jl:ft.sibling=jl,ft=jl,Z=ot}if(dt.done)return l(b,Z),rt&&ke(b,tt),K;if(Z===null){for(;!dt.done;tt++,dt=A.next())dt=j(b,dt.value,O),dt!==null&&(v=i(dt,v,tt),ft===null?K=dt:ft.sibling=dt,ft=dt);return rt&&ke(b,tt),K}for(Z=n(Z);!dt.done;tt++,dt=A.next())dt=C(Z,b,tt,dt.value,O),dt!==null&&(t&&dt.alternate!==null&&Z.delete(dt.key===null?tt:dt.key),v=i(dt,v,tt),ft===null?K=dt:ft.sibling=dt,ft=dt);return t&&Z.forEach(function(_p){return e(b,_p)}),rt&&ke(b,tt),K}function At(b,v,A,O){if(typeof A=="object"&&A!==null&&A.type===et&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Y:t:{for(var K=A.key;v!==null;){if(v.key===K){if(K=A.type,K===et){if(v.tag===7){l(b,v.sibling),O=a(v,A.props.children),O.return=b,b=O;break t}}else if(v.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Q&&Jl(K)===v.type){l(b,v.sibling),O=a(v,A.props),ma(O,A),O.return=b,b=O;break t}l(b,v);break}else e(b,v);v=v.sibling}A.type===et?(O=Vl(A.props.children,b.mode,O,A.key),O.return=b,b=O):(O=ri(A.type,A.key,A.props,null,b.mode,O),ma(O,A),O.return=b,b=O)}return u(b);case J:t:{for(K=A.key;v!==null;){if(v.key===K)if(v.tag===4&&v.stateNode.containerInfo===A.containerInfo&&v.stateNode.implementation===A.implementation){l(b,v.sibling),O=a(v,A.children||[]),O.return=b,b=O;break t}else{l(b,v);break}else e(b,v);v=v.sibling}O=tc(A,b.mode,O),O.return=b,b=O}return u(b);case Q:return A=Jl(A),At(b,v,A,O)}if(Zt(A))return X(b,v,A,O);if(Ht(A)){if(K=Ht(A),typeof K!="function")throw Error(o(150));return A=K.call(A),k(b,v,A,O)}if(typeof A.then=="function")return At(b,v,gi(A),O);if(A.$$typeof===Et)return At(b,v,mi(b,A),O);yi(b,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,v!==null&&v.tag===6?(l(b,v.sibling),O=a(v,A),O.return=b,b=O):(l(b,v),O=Iu(A,b.mode,O),O.return=b,b=O),u(b)):l(b,v)}return function(b,v,A,O){try{da=0;var K=At(b,v,A,O);return Cn=null,K}catch(Z){if(Z===Tn||Z===pi)throw Z;var ft=he(29,Z,null,b.mode);return ft.lanes=O,ft.return=b,ft}}}var $l=vr(!0),gr=vr(!1),gl=!1;function dc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function yl(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function bl(t,e,l){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,(ht&2)!==0){var a=n.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),n.pending=e,e=si(t),tr(t,null,l),e}return oi(t,n,e,l),si(t)}function ha(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var n=e.lanes;n&=t.pendingLanes,l|=n,e.lanes=l,os(t,l)}}function hc(t,e){var l=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,l===n)){var a=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?a=i=u:i=i.next=u,l=l.next}while(l!==null);i===null?a=i=e:i=i.next=e}else a=i=e;l={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var pc=!1;function pa(){if(pc){var t=zn;if(t!==null)throw t}}function va(t,e,l,n){pc=!1;var a=t.updateQueue;gl=!1;var i=a.firstBaseUpdate,u=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var m=s,G=m.next;m.next=null,u===null?i=G:u.next=G,u=m;var N=t.alternate;N!==null&&(N=N.updateQueue,s=N.lastBaseUpdate,s!==u&&(s===null?N.firstBaseUpdate=G:s.next=G,N.lastBaseUpdate=m))}if(i!==null){var j=a.baseState;u=0,N=G=m=null,s=i;do{var z=s.lane&-536870913,C=z!==s.lane;if(C?(ct&z)===z:(n&z)===z){z!==0&&z===En&&(pc=!0),N!==null&&(N=N.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});t:{var X=t,k=s;z=e;var At=l;switch(k.tag){case 1:if(X=k.payload,typeof X=="function"){j=X.call(At,j,z);break t}j=X;break t;case 3:X.flags=X.flags&-65537|128;case 0:if(X=k.payload,z=typeof X=="function"?X.call(At,j,z):X,z==null)break t;j=T({},j,z);break t;case 2:gl=!0}}z=s.callback,z!==null&&(t.flags|=64,C&&(t.flags|=8192),C=a.callbacks,C===null?a.callbacks=[z]:C.push(z))}else C={lane:z,tag:s.tag,payload:s.payload,callback:s.callback,next:null},N===null?(G=N=C,m=j):N=N.next=C,u|=z;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;C=s,s=C.next,C.next=null,a.lastBaseUpdate=C,a.shared.pending=null}}while(!0);N===null&&(m=j),a.baseState=m,a.firstBaseUpdate=G,a.lastBaseUpdate=N,i===null&&(a.shared.lanes=0),El|=u,t.lanes=u,t.memoizedState=j}}function yr(t,e){if(typeof t!="function")throw Error(o(191,t));t.call(e)}function br(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)yr(l[t],e)}var _n=g(null),bi=g(0);function Sr(t,e){t=al,H(bi,t),H(_n,e),al=t|e.baseLanes}function vc(){H(bi,al),H(_n,_n.current)}function gc(){al=bi.current,R(_n),R(bi)}var pe=g(null),Ce=null;function Sl(t){var e=t.alternate;H(jt,jt.current&1),H(pe,t),Ce===null&&(e===null||_n.current!==null||e.memoizedState!==null)&&(Ce=t)}function yc(t){H(jt,jt.current),H(pe,t),Ce===null&&(Ce=t)}function xr(t){t.tag===22?(H(jt,jt.current),H(pe,t),Ce===null&&(Ce=t)):xl()}function xl(){H(jt,jt.current),H(pe,pe.current)}function ve(t){R(pe),Ce===t&&(Ce=null),R(jt)}var jt=g(0);function Si(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||zo(l)||To(l)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $e=0,I=null,St=null,Yt=null,xi=!1,Nn=!1,Fl=!1,Ai=0,ga=0,Mn=null,y0=0;function Ot(){throw Error(o(321))}function bc(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!me(t[l],e[l]))return!1;return!0}function Sc(t,e,l,n,a,i){return $e=i,I=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_.H=t===null||t.memoizedState===null?af:Uc,Fl=!1,i=l(n,a),Fl=!1,Nn&&(i=Gr(e,l,n,a)),Ar(t),i}function Ar(t){_.H=Sa;var e=St!==null&&St.next!==null;if($e=0,Yt=St=I=null,xi=!1,ga=0,Mn=null,e)throw Error(o(300));t===null||qt||(t=t.dependencies,t!==null&&di(t)&&(qt=!0))}function Gr(t,e,l,n){I=t;var a=0;do{if(Nn&&(Mn=null),ga=0,Nn=!1,25<=a)throw Error(o(301));if(a+=1,Yt=St=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}_.H=uf,i=e(l,n)}while(Nn);return i}function b0(){var t=_.H,e=t.useState()[0];return e=typeof e.then=="function"?ya(e):e,t=t.useState()[0],(St!==null?St.memoizedState:null)!==t&&(I.flags|=1024),e}function xc(){var t=Ai!==0;return Ai=0,t}function Ac(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function Gc(t){if(xi){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}xi=!1}$e=0,Yt=St=I=null,Nn=!1,ga=Ai=0,Mn=null}function ee(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Yt===null?I.memoizedState=Yt=t:Yt=Yt.next=t,Yt}function Ut(){if(St===null){var t=I.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=Yt===null?I.memoizedState:Yt.next;if(e!==null)Yt=e,St=t;else{if(t===null)throw I.alternate===null?Error(o(467)):Error(o(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Yt===null?I.memoizedState=Yt=t:Yt=Yt.next=t}return Yt}function Gi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ya(t){var e=ga;return ga+=1,Mn===null&&(Mn=[]),t=mr(Mn,t,e),e=I,(Yt===null?e.memoizedState:Yt.next)===null&&(e=e.alternate,_.H=e===null||e.memoizedState===null?af:Uc),t}function Ei(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ya(t);if(t.$$typeof===Et)return Ft(t)}throw Error(o(438,String(t)))}function Ec(t){var e=null,l=I.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var n=I.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=Gi(),I.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),n=0;n<t;n++)l[n]=Rt;return e.index++,l}function Fe(t,e){return typeof e=="function"?e(t):e}function zi(t){var e=Ut();return zc(e,St,t)}function zc(t,e,l){var n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=l;var a=t.baseQueue,i=n.pending;if(i!==null){if(a!==null){var u=a.next;a.next=i.next,i.next=u}e.baseQueue=a=i,n.pending=null}if(i=t.baseState,a===null)t.memoizedState=i;else{e=a.next;var s=u=null,m=null,G=e,N=!1;do{var j=G.lane&-536870913;if(j!==G.lane?(ct&j)===j:($e&j)===j){var z=G.revertLane;if(z===0)m!==null&&(m=m.next={lane:0,revertLane:0,gesture:null,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null}),j===En&&(N=!0);else if(($e&z)===z){G=G.next,z===En&&(N=!0);continue}else j={lane:0,revertLane:G.revertLane,gesture:null,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},m===null?(s=m=j,u=i):m=m.next=j,I.lanes|=z,El|=z;j=G.action,Fl&&l(i,j),i=G.hasEagerState?G.eagerState:l(i,j)}else z={lane:j,revertLane:G.revertLane,gesture:G.gesture,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},m===null?(s=m=z,u=i):m=m.next=z,I.lanes|=j,El|=j;G=G.next}while(G!==null&&G!==e);if(m===null?u=i:m.next=s,!me(i,t.memoizedState)&&(qt=!0,N&&(l=zn,l!==null)))throw l;t.memoizedState=i,t.baseState=u,t.baseQueue=m,n.lastRenderedState=i}return a===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function Tc(t){var e=Ut(),l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=t;var n=l.dispatch,a=l.pending,i=e.memoizedState;if(a!==null){l.pending=null;var u=a=a.next;do i=t(i,u.action),u=u.next;while(u!==a);me(i,e.memoizedState)||(qt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),l.lastRenderedState=i}return[i,n]}function Er(t,e,l){var n=I,a=Ut(),i=rt;if(i){if(l===void 0)throw Error(o(407));l=l()}else l=e();var u=!me((St||a).memoizedState,l);if(u&&(a.memoizedState=l,qt=!0),a=a.queue,Nc(Cr.bind(null,n,a,t),[t]),a.getSnapshot!==e||u||Yt!==null&&Yt.memoizedState.tag&1){if(n.flags|=2048,On(9,{destroy:void 0},Tr.bind(null,n,a,l,e),null),Gt===null)throw Error(o(349));i||($e&127)!==0||zr(n,e,l)}return l}function zr(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=I.updateQueue,e===null?(e=Gi(),I.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function Tr(t,e,l,n){e.value=l,e.getSnapshot=n,_r(e)&&Nr(t)}function Cr(t,e,l){return l(function(){_r(e)&&Nr(t)})}function _r(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!me(t,l)}catch{return!0}}function Nr(t){var e=Ll(t,2);e!==null&&oe(e,t,2)}function Cc(t){var e=ee();if(typeof t=="function"){var l=t;if(t=l(),Fl){rl(!0);try{l()}finally{rl(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fe,lastRenderedState:t},e}function Mr(t,e,l,n){return t.baseState=l,zc(t,St,typeof n=="function"?n:Fe)}function S0(t,e,l,n,a){if(_i(t))throw Error(o(485));if(t=e.action,t!==null){var i={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};_.T!==null?l(!0):i.isTransition=!1,n(i),l=e.pending,l===null?(i.next=e.pending=i,Or(e,i)):(i.next=l.next,e.pending=l.next=i)}}function Or(t,e){var l=e.action,n=e.payload,a=t.state;if(e.isTransition){var i=_.T,u={};_.T=u;try{var s=l(a,n),m=_.S;m!==null&&m(u,s),Dr(t,e,s)}catch(G){_c(t,e,G)}finally{i!==null&&u.types!==null&&(i.types=u.types),_.T=i}}else try{i=l(a,n),Dr(t,e,i)}catch(G){_c(t,e,G)}}function Dr(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(n){Rr(t,e,n)},function(n){return _c(t,e,n)}):Rr(t,e,l)}function Rr(t,e,l){e.status="fulfilled",e.value=l,jr(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Or(t,l)))}function _c(t,e,l){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=l,jr(e),e=e.next;while(e!==n)}t.action=null}function jr(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Ur(t,e){return e}function wr(t,e){if(rt){var l=Gt.formState;if(l!==null){t:{var n=I;if(rt){if(Tt){e:{for(var a=Tt,i=Te;a.nodeType!==8;){if(!i){a=null;break e}if(a=_e(a.nextSibling),a===null){a=null;break e}}i=a.data,a=i==="F!"||i==="F"?a:null}if(a){Tt=_e(a.nextSibling),n=a.data==="F!";break t}}pl(n)}n=!1}n&&(e=l[0])}}return l=ee(),l.memoizedState=l.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ur,lastRenderedState:e},l.queue=n,l=ef.bind(null,I,n),n.dispatch=l,n=Cc(!1),i=jc.bind(null,I,!1,n.queue),n=ee(),a={state:e,dispatch:null,action:t,pending:null},n.queue=a,l=S0.bind(null,I,a,i,l),a.dispatch=l,n.memoizedState=t,[e,l,!1]}function Hr(t){var e=Ut();return Br(e,St,t)}function Br(t,e,l){if(e=zc(t,e,Ur)[0],t=zi(Fe)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=ya(e)}catch(u){throw u===Tn?pi:u}else n=e;e=Ut();var a=e.queue,i=a.dispatch;return l!==e.memoizedState&&(I.flags|=2048,On(9,{destroy:void 0},x0.bind(null,a,l),null)),[n,i,t]}function x0(t,e){t.action=e}function Yr(t){var e=Ut(),l=St;if(l!==null)return Br(e,l,t);Ut(),e=e.memoizedState,l=Ut();var n=l.queue.dispatch;return l.memoizedState=t,[e,n,!1]}function On(t,e,l,n){return t={tag:t,create:l,deps:n,inst:e,next:null},e=I.updateQueue,e===null&&(e=Gi(),I.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(n=l.next,l.next=t,t.next=n,e.lastEffect=t),t}function qr(){return Ut().memoizedState}function Ti(t,e,l,n){var a=ee();I.flags|=t,a.memoizedState=On(1|e,{destroy:void 0},l,n===void 0?null:n)}function Ci(t,e,l,n){var a=Ut();n=n===void 0?null:n;var i=a.memoizedState.inst;St!==null&&n!==null&&bc(n,St.memoizedState.deps)?a.memoizedState=On(e,i,l,n):(I.flags|=t,a.memoizedState=On(1|e,i,l,n))}function Xr(t,e){Ti(8390656,8,t,e)}function Nc(t,e){Ci(2048,8,t,e)}function A0(t){I.flags|=4;var e=I.updateQueue;if(e===null)e=Gi(),I.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function Lr(t){var e=Ut().memoizedState;return A0({ref:e,nextImpl:t}),function(){if((ht&2)!==0)throw Error(o(440));return e.impl.apply(void 0,arguments)}}function Vr(t,e){return Ci(4,2,t,e)}function Qr(t,e){return Ci(4,4,t,e)}function Zr(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Kr(t,e,l){l=l!=null?l.concat([t]):null,Ci(4,4,Zr.bind(null,e,t),l)}function Mc(){}function kr(t,e){var l=Ut();e=e===void 0?null:e;var n=l.memoizedState;return e!==null&&bc(e,n[1])?n[0]:(l.memoizedState=[t,e],t)}function Jr(t,e){var l=Ut();e=e===void 0?null:e;var n=l.memoizedState;if(e!==null&&bc(e,n[1]))return n[0];if(n=t(),Fl){rl(!0);try{t()}finally{rl(!1)}}return l.memoizedState=[n,e],n}function Oc(t,e,l){return l===void 0||($e&1073741824)!==0&&(ct&261930)===0?t.memoizedState=e:(t.memoizedState=l,t=$f(),I.lanes|=t,El|=t,l)}function Wr(t,e,l,n){return me(l,e)?l:_n.current!==null?(t=Oc(t,l,n),me(t,e)||(qt=!0),t):($e&42)===0||($e&1073741824)!==0&&(ct&261930)===0?(qt=!0,t.memoizedState=l):(t=$f(),I.lanes|=t,El|=t,e)}function $r(t,e,l,n,a){var i=B.p;B.p=i!==0&&8>i?i:8;var u=_.T,s={};_.T=s,jc(t,!1,e,l);try{var m=a(),G=_.S;if(G!==null&&G(s,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var N=g0(m,n);ba(t,e,N,be(t))}else ba(t,e,n,be(t))}catch(j){ba(t,e,{then:function(){},status:"rejected",reason:j},be())}finally{B.p=i,u!==null&&s.types!==null&&(u.types=s.types),_.T=u}}function G0(){}function Dc(t,e,l,n){if(t.tag!==5)throw Error(o(476));var a=Fr(t).queue;$r(t,a,e,w,l===null?G0:function(){return Pr(t),l(n)})}function Fr(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:w,baseState:w,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fe,lastRenderedState:w},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fe,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Pr(t){var e=Fr(t);e.next===null&&(e=t.alternate.memoizedState),ba(t,e.next.queue,{},be())}function Rc(){return Ft(wa)}function Ir(){return Ut().memoizedState}function tf(){return Ut().memoizedState}function E0(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=be();t=yl(l);var n=bl(e,t,l);n!==null&&(oe(n,e,l),ha(n,e,l)),e={cache:oc()},t.payload=e;return}e=e.return}}function z0(t,e,l){var n=be();l={lane:n,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},_i(t)?lf(e,l):(l=Fu(t,e,l,n),l!==null&&(oe(l,t,n),nf(l,e,n)))}function ef(t,e,l){var n=be();ba(t,e,l,n)}function ba(t,e,l,n){var a={lane:n,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(_i(t))lf(e,a);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var u=e.lastRenderedState,s=i(u,l);if(a.hasEagerState=!0,a.eagerState=s,me(s,u))return oi(t,e,a,0),Gt===null&&ci(),!1}catch{}if(l=Fu(t,e,a,n),l!==null)return oe(l,t,n),nf(l,e,n),!0}return!1}function jc(t,e,l,n){if(n={lane:2,revertLane:mo(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},_i(t)){if(e)throw Error(o(479))}else e=Fu(t,l,n,2),e!==null&&oe(e,t,2)}function _i(t){var e=t.alternate;return t===I||e!==null&&e===I}function lf(t,e){Nn=xi=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function nf(t,e,l){if((l&4194048)!==0){var n=e.lanes;n&=t.pendingLanes,l|=n,e.lanes=l,os(t,l)}}var Sa={readContext:Ft,use:Ei,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useLayoutEffect:Ot,useInsertionEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useSyncExternalStore:Ot,useId:Ot,useHostTransitionStatus:Ot,useFormState:Ot,useActionState:Ot,useOptimistic:Ot,useMemoCache:Ot,useCacheRefresh:Ot};Sa.useEffectEvent=Ot;var af={readContext:Ft,use:Ei,useCallback:function(t,e){return ee().memoizedState=[t,e===void 0?null:e],t},useContext:Ft,useEffect:Xr,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,Ti(4194308,4,Zr.bind(null,e,t),l)},useLayoutEffect:function(t,e){return Ti(4194308,4,t,e)},useInsertionEffect:function(t,e){Ti(4,2,t,e)},useMemo:function(t,e){var l=ee();e=e===void 0?null:e;var n=t();if(Fl){rl(!0);try{t()}finally{rl(!1)}}return l.memoizedState=[n,e],n},useReducer:function(t,e,l){var n=ee();if(l!==void 0){var a=l(e);if(Fl){rl(!0);try{l(e)}finally{rl(!1)}}}else a=e;return n.memoizedState=n.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},n.queue=t,t=t.dispatch=z0.bind(null,I,t),[n.memoizedState,t]},useRef:function(t){var e=ee();return t={current:t},e.memoizedState=t},useState:function(t){t=Cc(t);var e=t.queue,l=ef.bind(null,I,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:Mc,useDeferredValue:function(t,e){var l=ee();return Oc(l,t,e)},useTransition:function(){var t=Cc(!1);return t=$r.bind(null,I,t.queue,!0,!1),ee().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var n=I,a=ee();if(rt){if(l===void 0)throw Error(o(407));l=l()}else{if(l=e(),Gt===null)throw Error(o(349));(ct&127)!==0||zr(n,e,l)}a.memoizedState=l;var i={value:l,getSnapshot:e};return a.queue=i,Xr(Cr.bind(null,n,i,t),[t]),n.flags|=2048,On(9,{destroy:void 0},Tr.bind(null,n,i,l,e),null),l},useId:function(){var t=ee(),e=Gt.identifierPrefix;if(rt){var l=Ye,n=Be;l=(n&~(1<<32-de(n)-1)).toString(32)+l,e="_"+e+"R_"+l,l=Ai++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=y0++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Rc,useFormState:wr,useActionState:wr,useOptimistic:function(t){var e=ee();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=jc.bind(null,I,!0,l),l.dispatch=e,[t,e]},useMemoCache:Ec,useCacheRefresh:function(){return ee().memoizedState=E0.bind(null,I)},useEffectEvent:function(t){var e=ee(),l={impl:t};return e.memoizedState=l,function(){if((ht&2)!==0)throw Error(o(440));return l.impl.apply(void 0,arguments)}}},Uc={readContext:Ft,use:Ei,useCallback:kr,useContext:Ft,useEffect:Nc,useImperativeHandle:Kr,useInsertionEffect:Vr,useLayoutEffect:Qr,useMemo:Jr,useReducer:zi,useRef:qr,useState:function(){return zi(Fe)},useDebugValue:Mc,useDeferredValue:function(t,e){var l=Ut();return Wr(l,St.memoizedState,t,e)},useTransition:function(){var t=zi(Fe)[0],e=Ut().memoizedState;return[typeof t=="boolean"?t:ya(t),e]},useSyncExternalStore:Er,useId:Ir,useHostTransitionStatus:Rc,useFormState:Hr,useActionState:Hr,useOptimistic:function(t,e){var l=Ut();return Mr(l,St,t,e)},useMemoCache:Ec,useCacheRefresh:tf};Uc.useEffectEvent=Lr;var uf={readContext:Ft,use:Ei,useCallback:kr,useContext:Ft,useEffect:Nc,useImperativeHandle:Kr,useInsertionEffect:Vr,useLayoutEffect:Qr,useMemo:Jr,useReducer:Tc,useRef:qr,useState:function(){return Tc(Fe)},useDebugValue:Mc,useDeferredValue:function(t,e){var l=Ut();return St===null?Oc(l,t,e):Wr(l,St.memoizedState,t,e)},useTransition:function(){var t=Tc(Fe)[0],e=Ut().memoizedState;return[typeof t=="boolean"?t:ya(t),e]},useSyncExternalStore:Er,useId:Ir,useHostTransitionStatus:Rc,useFormState:Yr,useActionState:Yr,useOptimistic:function(t,e){var l=Ut();return St!==null?Mr(l,St,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:Ec,useCacheRefresh:tf};uf.useEffectEvent=Lr;function wc(t,e,l,n){e=t.memoizedState,l=l(n,e),l=l==null?e:T({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var Hc={enqueueSetState:function(t,e,l){t=t._reactInternals;var n=be(),a=yl(n);a.payload=e,l!=null&&(a.callback=l),e=bl(t,a,n),e!==null&&(oe(e,t,n),ha(e,t,n))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var n=be(),a=yl(n);a.tag=1,a.payload=e,l!=null&&(a.callback=l),e=bl(t,a,n),e!==null&&(oe(e,t,n),ha(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=be(),n=yl(l);n.tag=2,e!=null&&(n.callback=e),e=bl(t,n,l),e!==null&&(oe(e,t,l),ha(e,t,l))}};function cf(t,e,l,n,a,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,i,u):e.prototype&&e.prototype.isPureReactComponent?!ua(l,n)||!ua(a,i):!0}function of(t,e,l,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,n),e.state!==t&&Hc.enqueueReplaceState(e,e.state,null)}function Pl(t,e){var l=e;if("ref"in e){l={};for(var n in e)n!=="ref"&&(l[n]=e[n])}if(t=t.defaultProps){l===e&&(l=T({},l));for(var a in t)l[a]===void 0&&(l[a]=t[a])}return l}function sf(t){ui(t)}function rf(t){console.error(t)}function ff(t){ui(t)}function Ni(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function df(t,e,l){try{var n=t.onCaughtError;n(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Bc(t,e,l){return l=yl(l),l.tag=3,l.payload={element:null},l.callback=function(){Ni(t,e)},l}function mf(t){return t=yl(t),t.tag=3,t}function hf(t,e,l,n){var a=l.type.getDerivedStateFromError;if(typeof a=="function"){var i=n.value;t.payload=function(){return a(i)},t.callback=function(){df(e,l,n)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){df(e,l,n),typeof a!="function"&&(zl===null?zl=new Set([this]):zl.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})})}function T0(t,e,l,n,a){if(l.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=l.alternate,e!==null&&Gn(e,l,a,!0),l=pe.current,l!==null){switch(l.tag){case 31:case 13:return Ce===null?Xi():l.alternate===null&&Dt===0&&(Dt=3),l.flags&=-257,l.flags|=65536,l.lanes=a,n===vi?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([n]):e.add(n),so(t,n,a)),!1;case 22:return l.flags|=65536,n===vi?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([n]):l.add(n)),so(t,n,a)),!1}throw Error(o(435,l.tag))}return so(t,n,a),Xi(),!1}if(rt)return e=pe.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=a,n!==nc&&(t=Error(o(422),{cause:n}),sa(Ge(t,l)))):(n!==nc&&(e=Error(o(423),{cause:n}),sa(Ge(e,l))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,n=Ge(n,l),a=Bc(t.stateNode,n,a),hc(t,a),Dt!==4&&(Dt=2)),!1;var i=Error(o(520),{cause:n});if(i=Ge(i,l),_a===null?_a=[i]:_a.push(i),Dt!==4&&(Dt=2),e===null)return!0;n=Ge(n,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=a&-a,l.lanes|=t,t=Bc(l.stateNode,n,t),hc(l,t),!1;case 1:if(e=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(zl===null||!zl.has(i))))return l.flags|=65536,a&=-a,l.lanes|=a,a=mf(a),hf(a,t,l,n),hc(l,a),!1}l=l.return}while(l!==null);return!1}var Yc=Error(o(461)),qt=!1;function Pt(t,e,l,n){e.child=t===null?gr(e,null,l,n):$l(e,t.child,l,n)}function pf(t,e,l,n,a){l=l.render;var i=e.ref;if("ref"in n){var u={};for(var s in n)s!=="ref"&&(u[s]=n[s])}else u=n;return Kl(e),n=Sc(t,e,l,u,i,a),s=xc(),t!==null&&!qt?(Ac(t,e,a),Pe(t,e,a)):(rt&&s&&ec(e),e.flags|=1,Pt(t,e,n,a),e.child)}function vf(t,e,l,n,a){if(t===null){var i=l.type;return typeof i=="function"&&!Pu(i)&&i.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=i,gf(t,e,i,n,a)):(t=ri(l.type,null,n,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!kc(t,a)){var u=i.memoizedProps;if(l=l.compare,l=l!==null?l:ua,l(u,n)&&t.ref===e.ref)return Pe(t,e,a)}return e.flags|=1,t=Ke(i,n),t.ref=e.ref,t.return=e,e.child=t}function gf(t,e,l,n,a){if(t!==null){var i=t.memoizedProps;if(ua(i,n)&&t.ref===e.ref)if(qt=!1,e.pendingProps=n=i,kc(t,a))(t.flags&131072)!==0&&(qt=!0);else return e.lanes=t.lanes,Pe(t,e,a)}return qc(t,e,l,n,a)}function yf(t,e,l,n){var a=n.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,t!==null){for(n=e.child=t.child,a=0;n!==null;)a=a|n.lanes|n.childLanes,n=n.sibling;n=a&~i}else n=0,e.child=null;return bf(t,e,i,l,n)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&hi(e,i!==null?i.cachePool:null),i!==null?Sr(e,i):vc(),xr(e);else return n=e.lanes=536870912,bf(t,e,i!==null?i.baseLanes|l:l,l,n)}else i!==null?(hi(e,i.cachePool),Sr(e,i),xl(),e.memoizedState=null):(t!==null&&hi(e,null),vc(),xl());return Pt(t,e,a,l),e.child}function xa(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function bf(t,e,l,n,a){var i=rc();return i=i===null?null:{parent:Bt._currentValue,pool:i},e.memoizedState={baseLanes:l,cachePool:i},t!==null&&hi(e,null),vc(),xr(e),t!==null&&Gn(t,e,n,!0),e.childLanes=a,null}function Mi(t,e){return e=Di({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Sf(t,e,l){return $l(e,t.child,null,l),t=Mi(e,e.pendingProps),t.flags|=2,ve(e),e.memoizedState=null,t}function C0(t,e,l){var n=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(rt){if(n.mode==="hidden")return t=Mi(e,n),e.lanes=536870912,xa(null,t);if(yc(e),(t=Tt)?(t=Dd(t,Te),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ml!==null?{id:Be,overflow:Ye}:null,retryLane:536870912,hydrationErrors:null},l=lr(t),l.return=e,e.child=l,$t=e,Tt=null)):t=null,t===null)throw pl(e);return e.lanes=536870912,null}return Mi(e,n)}var i=t.memoizedState;if(i!==null){var u=i.dehydrated;if(yc(e),a)if(e.flags&256)e.flags&=-257,e=Sf(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(o(558));else if(qt||Gn(t,e,l,!1),a=(l&t.childLanes)!==0,qt||a){if(n=Gt,n!==null&&(u=ss(n,l),u!==0&&u!==i.retryLane))throw i.retryLane=u,Ll(t,u),oe(n,t,u),Yc;Xi(),e=Sf(t,e,l)}else t=i.treeContext,Tt=_e(u.nextSibling),$t=e,rt=!0,hl=null,Te=!1,t!==null&&ir(e,t),e=Mi(e,n),e.flags|=4096;return e}return t=Ke(t.child,{mode:n.mode,children:n.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Oi(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(o(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function qc(t,e,l,n,a){return Kl(e),l=Sc(t,e,l,n,void 0,a),n=xc(),t!==null&&!qt?(Ac(t,e,a),Pe(t,e,a)):(rt&&n&&ec(e),e.flags|=1,Pt(t,e,l,a),e.child)}function xf(t,e,l,n,a,i){return Kl(e),e.updateQueue=null,l=Gr(e,n,l,a),Ar(t),n=xc(),t!==null&&!qt?(Ac(t,e,i),Pe(t,e,i)):(rt&&n&&ec(e),e.flags|=1,Pt(t,e,l,i),e.child)}function Af(t,e,l,n,a){if(Kl(e),e.stateNode===null){var i=bn,u=l.contextType;typeof u=="object"&&u!==null&&(i=Ft(u)),i=new l(n,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Hc,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=n,i.state=e.memoizedState,i.refs={},dc(e),u=l.contextType,i.context=typeof u=="object"&&u!==null?Ft(u):bn,i.state=e.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(wc(e,l,u,n),i.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Hc.enqueueReplaceState(i,i.state,null),va(e,n,i,a),pa(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(t===null){i=e.stateNode;var s=e.memoizedProps,m=Pl(l,s);i.props=m;var G=i.context,N=l.contextType;u=bn,typeof N=="object"&&N!==null&&(u=Ft(N));var j=l.getDerivedStateFromProps;N=typeof j=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=e.pendingProps!==s,N||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||G!==u)&&of(e,i,n,u),gl=!1;var z=e.memoizedState;i.state=z,va(e,n,i,a),pa(),G=e.memoizedState,s||z!==G||gl?(typeof j=="function"&&(wc(e,l,j,n),G=e.memoizedState),(m=gl||cf(e,l,m,n,z,G,u))?(N||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=G),i.props=n,i.state=G,i.context=u,n=m):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{i=e.stateNode,mc(t,e),u=e.memoizedProps,N=Pl(l,u),i.props=N,j=e.pendingProps,z=i.context,G=l.contextType,m=bn,typeof G=="object"&&G!==null&&(m=Ft(G)),s=l.getDerivedStateFromProps,(G=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==j||z!==m)&&of(e,i,n,m),gl=!1,z=e.memoizedState,i.state=z,va(e,n,i,a),pa();var C=e.memoizedState;u!==j||z!==C||gl||t!==null&&t.dependencies!==null&&di(t.dependencies)?(typeof s=="function"&&(wc(e,l,s,n),C=e.memoizedState),(N=gl||cf(e,l,N,n,z,C,m)||t!==null&&t.dependencies!==null&&di(t.dependencies))?(G||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,C,m),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,C,m)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&z===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&z===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=C),i.props=n,i.state=C,i.context=m,n=N):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&z===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&z===t.memoizedState||(e.flags|=1024),n=!1)}return i=n,Oi(t,e),n=(e.flags&128)!==0,i||n?(i=e.stateNode,l=n&&typeof l.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&n?(e.child=$l(e,t.child,null,a),e.child=$l(e,null,l,a)):Pt(t,e,l,a),e.memoizedState=i.state,t=e.child):t=Pe(t,e,a),t}function Gf(t,e,l,n){return Ql(),e.flags|=256,Pt(t,e,l,n),e.child}var Xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lc(t){return{baseLanes:t,cachePool:fr()}}function Vc(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=ye),t}function Ef(t,e,l){var n=e.pendingProps,a=!1,i=(e.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(jt.current&2)!==0),u&&(a=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,t===null){if(rt){if(a?Sl(e):xl(),(t=Tt)?(t=Dd(t,Te),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ml!==null?{id:Be,overflow:Ye}:null,retryLane:536870912,hydrationErrors:null},l=lr(t),l.return=e,e.child=l,$t=e,Tt=null)):t=null,t===null)throw pl(e);return To(t)?e.lanes=32:e.lanes=536870912,null}var s=n.children;return n=n.fallback,a?(xl(),a=e.mode,s=Di({mode:"hidden",children:s},a),n=Vl(n,a,l,null),s.return=e,n.return=e,s.sibling=n,e.child=s,n=e.child,n.memoizedState=Lc(l),n.childLanes=Vc(t,u,l),e.memoizedState=Xc,xa(null,n)):(Sl(e),Qc(e,s))}var m=t.memoizedState;if(m!==null&&(s=m.dehydrated,s!==null)){if(i)e.flags&256?(Sl(e),e.flags&=-257,e=Zc(t,e,l)):e.memoizedState!==null?(xl(),e.child=t.child,e.flags|=128,e=null):(xl(),s=n.fallback,a=e.mode,n=Di({mode:"visible",children:n.children},a),s=Vl(s,a,l,null),s.flags|=2,n.return=e,s.return=e,n.sibling=s,e.child=n,$l(e,t.child,null,l),n=e.child,n.memoizedState=Lc(l),n.childLanes=Vc(t,u,l),e.memoizedState=Xc,e=xa(null,n));else if(Sl(e),To(s)){if(u=s.nextSibling&&s.nextSibling.dataset,u)var G=u.dgst;u=G,n=Error(o(419)),n.stack="",n.digest=u,sa({value:n,source:null,stack:null}),e=Zc(t,e,l)}else if(qt||Gn(t,e,l,!1),u=(l&t.childLanes)!==0,qt||u){if(u=Gt,u!==null&&(n=ss(u,l),n!==0&&n!==m.retryLane))throw m.retryLane=n,Ll(t,n),oe(u,t,n),Yc;zo(s)||Xi(),e=Zc(t,e,l)}else zo(s)?(e.flags|=192,e.child=t.child,e=null):(t=m.treeContext,Tt=_e(s.nextSibling),$t=e,rt=!0,hl=null,Te=!1,t!==null&&ir(e,t),e=Qc(e,n.children),e.flags|=4096);return e}return a?(xl(),s=n.fallback,a=e.mode,m=t.child,G=m.sibling,n=Ke(m,{mode:"hidden",children:n.children}),n.subtreeFlags=m.subtreeFlags&65011712,G!==null?s=Ke(G,s):(s=Vl(s,a,l,null),s.flags|=2),s.return=e,n.return=e,n.sibling=s,e.child=n,xa(null,n),n=e.child,s=t.child.memoizedState,s===null?s=Lc(l):(a=s.cachePool,a!==null?(m=Bt._currentValue,a=a.parent!==m?{parent:m,pool:m}:a):a=fr(),s={baseLanes:s.baseLanes|l,cachePool:a}),n.memoizedState=s,n.childLanes=Vc(t,u,l),e.memoizedState=Xc,xa(t.child,n)):(Sl(e),l=t.child,t=l.sibling,l=Ke(l,{mode:"visible",children:n.children}),l.return=e,l.sibling=null,t!==null&&(u=e.deletions,u===null?(e.deletions=[t],e.flags|=16):u.push(t)),e.child=l,e.memoizedState=null,l)}function Qc(t,e){return e=Di({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Di(t,e){return t=he(22,t,null,e),t.lanes=0,t}function Zc(t,e,l){return $l(e,t.child,null,l),t=Qc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function zf(t,e,l){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),uc(t.return,e,l)}function Kc(t,e,l,n,a,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:l,tailMode:a,treeForkCount:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=n,u.tail=l,u.tailMode=a,u.treeForkCount=i)}function Tf(t,e,l){var n=e.pendingProps,a=n.revealOrder,i=n.tail;n=n.children;var u=jt.current,s=(u&2)!==0;if(s?(u=u&1|2,e.flags|=128):u&=1,H(jt,u),Pt(t,e,n,l),n=rt?oa:0,!s&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zf(t,l,e);else if(t.tag===19)zf(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"forwards":for(l=e.child,a=null;l!==null;)t=l.alternate,t!==null&&Si(t)===null&&(a=l),l=l.sibling;l=a,l===null?(a=e.child,e.child=null):(a=l.sibling,l.sibling=null),Kc(e,!1,a,l,i,n);break;case"backwards":case"unstable_legacy-backwards":for(l=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&Si(t)===null){e.child=a;break}t=a.sibling,a.sibling=l,l=a,a=t}Kc(e,!0,l,null,i,n);break;case"together":Kc(e,!1,null,null,void 0,n);break;default:e.memoizedState=null}return e.child}function Pe(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),El|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(Gn(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(o(153));if(e.child!==null){for(t=e.child,l=Ke(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=Ke(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function kc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&di(t)))}function _0(t,e,l){switch(e.tag){case 3:Kt(e,e.stateNode.containerInfo),vl(e,Bt,t.memoizedState.cache),Ql();break;case 27:case 5:He(e);break;case 4:Kt(e,e.stateNode.containerInfo);break;case 10:vl(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,yc(e),null;break;case 13:var n=e.memoizedState;if(n!==null)return n.dehydrated!==null?(Sl(e),e.flags|=128,null):(l&e.child.childLanes)!==0?Ef(t,e,l):(Sl(e),t=Pe(t,e,l),t!==null?t.sibling:null);Sl(e);break;case 19:var a=(t.flags&128)!==0;if(n=(l&e.childLanes)!==0,n||(Gn(t,e,l,!1),n=(l&e.childLanes)!==0),a){if(n)return Tf(t,e,l);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),H(jt,jt.current),n)break;return null;case 22:return e.lanes=0,yf(t,e,l,e.pendingProps);case 24:vl(e,Bt,t.memoizedState.cache)}return Pe(t,e,l)}function Cf(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)qt=!0;else{if(!kc(t,l)&&(e.flags&128)===0)return qt=!1,_0(t,e,l);qt=(t.flags&131072)!==0}else qt=!1,rt&&(e.flags&1048576)!==0&&ar(e,oa,e.index);switch(e.lanes=0,e.tag){case 16:t:{var n=e.pendingProps;if(t=Jl(e.elementType),e.type=t,typeof t=="function")Pu(t)?(n=Pl(t,n),e.tag=1,e=Af(null,e,t,n,l)):(e.tag=0,e=qc(null,e,t,n,l));else{if(t!=null){var a=t.$$typeof;if(a===_t){e.tag=11,e=pf(null,e,t,n,l);break t}else if(a===F){e.tag=14,e=vf(null,e,t,n,l);break t}}throw e=se(t)||t,Error(o(306,e,""))}}return e;case 0:return qc(t,e,e.type,e.pendingProps,l);case 1:return n=e.type,a=Pl(n,e.pendingProps),Af(t,e,n,a,l);case 3:t:{if(Kt(e,e.stateNode.containerInfo),t===null)throw Error(o(387));n=e.pendingProps;var i=e.memoizedState;a=i.element,mc(t,e),va(e,n,null,l);var u=e.memoizedState;if(n=u.cache,vl(e,Bt,n),n!==i.cache&&cc(e,[Bt],l,!0),pa(),n=u.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=Gf(t,e,n,l);break t}else if(n!==a){a=Ge(Error(o(424)),e),sa(a),e=Gf(t,e,n,l);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Tt=_e(t.firstChild),$t=e,rt=!0,hl=null,Te=!0,l=gr(e,null,n,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ql(),n===a){e=Pe(t,e,l);break t}Pt(t,e,n,l)}e=e.child}return e;case 26:return Oi(t,e),t===null?(l=Bd(e.type,null,e.pendingProps,null))?e.memoizedState=l:rt||(l=e.type,t=e.pendingProps,n=Ji(lt.current).createElement(l),n[Wt]=e,n[le]=t,It(n,l,t),kt(n),e.stateNode=n):e.memoizedState=Bd(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return He(e),t===null&&rt&&(n=e.stateNode=Ud(e.type,e.pendingProps,lt.current),$t=e,Te=!0,a=Tt,Nl(e.type)?(Co=a,Tt=_e(n.firstChild)):Tt=a),Pt(t,e,e.pendingProps.children,l),Oi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&rt&&((a=n=Tt)&&(n=ap(n,e.type,e.pendingProps,Te),n!==null?(e.stateNode=n,$t=e,Tt=_e(n.firstChild),Te=!1,a=!0):a=!1),a||pl(e)),He(e),a=e.type,i=e.pendingProps,u=t!==null?t.memoizedProps:null,n=i.children,Ao(a,i)?n=null:u!==null&&Ao(a,u)&&(e.flags|=32),e.memoizedState!==null&&(a=Sc(t,e,b0,null,null,l),wa._currentValue=a),Oi(t,e),Pt(t,e,n,l),e.child;case 6:return t===null&&rt&&((t=l=Tt)&&(l=ip(l,e.pendingProps,Te),l!==null?(e.stateNode=l,$t=e,Tt=null,t=!0):t=!1),t||pl(e)),null;case 13:return Ef(t,e,l);case 4:return Kt(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=$l(e,null,n,l):Pt(t,e,n,l),e.child;case 11:return pf(t,e,e.type,e.pendingProps,l);case 7:return Pt(t,e,e.pendingProps,l),e.child;case 8:return Pt(t,e,e.pendingProps.children,l),e.child;case 12:return Pt(t,e,e.pendingProps.children,l),e.child;case 10:return n=e.pendingProps,vl(e,e.type,n.value),Pt(t,e,n.children,l),e.child;case 9:return a=e.type._context,n=e.pendingProps.children,Kl(e),a=Ft(a),n=n(a),e.flags|=1,Pt(t,e,n,l),e.child;case 14:return vf(t,e,e.type,e.pendingProps,l);case 15:return gf(t,e,e.type,e.pendingProps,l);case 19:return Tf(t,e,l);case 31:return C0(t,e,l);case 22:return yf(t,e,l,e.pendingProps);case 24:return Kl(e),n=Ft(Bt),t===null?(a=rc(),a===null&&(a=Gt,i=oc(),a.pooledCache=i,i.refCount++,i!==null&&(a.pooledCacheLanes|=l),a=i),e.memoizedState={parent:n,cache:a},dc(e),vl(e,Bt,a)):((t.lanes&l)!==0&&(mc(t,e),va(e,null,null,l),pa()),a=t.memoizedState,i=e.memoizedState,a.parent!==n?(a={parent:n,cache:n},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),vl(e,Bt,n)):(n=i.cache,vl(e,Bt,n),n!==a.cache&&cc(e,[Bt],l,!0))),Pt(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function Ie(t){t.flags|=4}function Jc(t,e,l,n,a){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(td())t.flags|=8192;else throw Wl=vi,fc}else t.flags&=-16777217}function _f(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Vd(e))if(td())t.flags|=8192;else throw Wl=vi,fc}function Ri(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?us():536870912,t.lanes|=e,Un|=e)}function Aa(t,e){if(!rt)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var n=null;l!==null;)l.alternate!==null&&(n=l),l=l.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function Ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,n=0;if(e)for(var a=t.child;a!==null;)l|=a.lanes|a.childLanes,n|=a.subtreeFlags&65011712,n|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)l|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=n,t.childLanes=l,e}function N0(t,e,l){var n=e.pendingProps;switch(lc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ct(e),null;case 1:return Ct(e),null;case 3:return l=e.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),We(Bt),zt(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(An(e)?Ie(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,ac())),Ct(e),null;case 26:var a=e.type,i=e.memoizedState;return t===null?(Ie(e),i!==null?(Ct(e),_f(e,i)):(Ct(e),Jc(e,a,null,n,l))):i?i!==t.memoizedState?(Ie(e),Ct(e),_f(e,i)):(Ct(e),e.flags&=-16777217):(t=t.memoizedProps,t!==n&&Ie(e),Ct(e),Jc(e,a,t,n,l)),null;case 27:if(ol(e),l=lt.current,a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&Ie(e);else{if(!n){if(e.stateNode===null)throw Error(o(166));return Ct(e),null}t=q.current,An(e)?ur(e):(t=Ud(a,n,l),e.stateNode=t,Ie(e))}return Ct(e),null;case 5:if(ol(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&Ie(e);else{if(!n){if(e.stateNode===null)throw Error(o(166));return Ct(e),null}if(i=q.current,An(e))ur(e);else{var u=Ji(lt.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof n.is=="string"?u.createElement("select",{is:n.is}):u.createElement("select"),n.multiple?i.multiple=!0:n.size&&(i.size=n.size);break;default:i=typeof n.is=="string"?u.createElement(a,{is:n.is}):u.createElement(a)}}i[Wt]=e,i[le]=n;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=i;t:switch(It(i,a,n),a){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&Ie(e)}}return Ct(e),Jc(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==n&&Ie(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(o(166));if(t=lt.current,An(e)){if(t=e.stateNode,l=e.memoizedProps,n=null,a=$t,a!==null)switch(a.tag){case 27:case 5:n=a.memoizedProps}t[Wt]=e,t=!!(t.nodeValue===l||n!==null&&n.suppressHydrationWarning===!0||Ed(t.nodeValue,l)),t||pl(e,!0)}else t=Ji(t).createTextNode(n),t[Wt]=e,e.stateNode=t}return Ct(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(n=An(e),l!==null){if(t===null){if(!n)throw Error(o(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(557));t[Wt]=e}else Ql(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ct(e),t=!1}else l=ac(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(ve(e),e):(ve(e),null);if((e.flags&128)!==0)throw Error(o(558))}return Ct(e),null;case 13:if(n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=An(e),n!==null&&n.dehydrated!==null){if(t===null){if(!a)throw Error(o(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(o(317));a[Wt]=e}else Ql(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ct(e),a=!1}else a=ac(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(ve(e),e):(ve(e),null)}return ve(e),(e.flags&128)!==0?(e.lanes=l,e):(l=n!==null,t=t!==null&&t.memoizedState!==null,l&&(n=e.child,a=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(a=n.alternate.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==a&&(n.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),Ri(e,e.updateQueue),Ct(e),null);case 4:return zt(),t===null&&go(e.stateNode.containerInfo),Ct(e),null;case 10:return We(e.type),Ct(e),null;case 19:if(R(jt),n=e.memoizedState,n===null)return Ct(e),null;if(a=(e.flags&128)!==0,i=n.rendering,i===null)if(a)Aa(n,!1);else{if(Dt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=Si(t),i!==null){for(e.flags|=128,Aa(n,!1),t=i.updateQueue,e.updateQueue=t,Ri(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)er(l,t),l=l.sibling;return H(jt,jt.current&1|2),rt&&ke(e,n.treeForkCount),e.child}t=t.sibling}n.tail!==null&&re()>Bi&&(e.flags|=128,a=!0,Aa(n,!1),e.lanes=4194304)}else{if(!a)if(t=Si(i),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,Ri(e,t),Aa(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!rt)return Ct(e),null}else 2*re()-n.renderingStartTime>Bi&&l!==536870912&&(e.flags|=128,a=!0,Aa(n,!1),e.lanes=4194304);n.isBackwards?(i.sibling=e.child,e.child=i):(t=n.last,t!==null?t.sibling=i:e.child=i,n.last=i)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=re(),t.sibling=null,l=jt.current,H(jt,a?l&1|2:l&1),rt&&ke(e,n.treeForkCount),t):(Ct(e),null);case 22:case 23:return ve(e),gc(),n=e.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?(l&536870912)!==0&&(e.flags&128)===0&&(Ct(e),e.subtreeFlags&6&&(e.flags|=8192)):Ct(e),l=e.updateQueue,l!==null&&Ri(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==l&&(e.flags|=2048),t!==null&&R(kl),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),We(Bt),Ct(e),null;case 25:return null;case 30:return null}throw Error(o(156,e.tag))}function M0(t,e){switch(lc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return We(Bt),zt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return ol(e),null;case 31:if(e.memoizedState!==null){if(ve(e),e.alternate===null)throw Error(o(340));Ql()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(ve(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(o(340));Ql()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return R(jt),null;case 4:return zt(),null;case 10:return We(e.type),null;case 22:case 23:return ve(e),gc(),t!==null&&R(kl),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return We(Bt),null;case 25:return null;default:return null}}function Nf(t,e){switch(lc(e),e.tag){case 3:We(Bt),zt();break;case 26:case 27:case 5:ol(e);break;case 4:zt();break;case 31:e.memoizedState!==null&&ve(e);break;case 13:ve(e);break;case 19:R(jt);break;case 10:We(e.type);break;case 22:case 23:ve(e),gc(),t!==null&&R(kl);break;case 24:We(Bt)}}function Ga(t,e){try{var l=e.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var a=n.next;l=a;do{if((l.tag&t)===t){n=void 0;var i=l.create,u=l.inst;n=i(),u.destroy=n}l=l.next}while(l!==a)}}catch(s){yt(e,e.return,s)}}function Al(t,e,l){try{var n=e.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&t)===t){var u=n.inst,s=u.destroy;if(s!==void 0){u.destroy=void 0,a=e;var m=l,G=s;try{G()}catch(N){yt(a,m,N)}}}n=n.next}while(n!==i)}}catch(N){yt(e,e.return,N)}}function Mf(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{br(e,l)}catch(n){yt(t,t.return,n)}}}function Of(t,e,l){l.props=Pl(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(n){yt(t,e,n)}}function Ea(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:n=t.stateNode;break;default:n=t.stateNode}typeof l=="function"?t.refCleanup=l(n):l.current=n}}catch(a){yt(t,e,a)}}function qe(t,e){var l=t.ref,n=t.refCleanup;if(l!==null)if(typeof n=="function")try{n()}catch(a){yt(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(a){yt(t,e,a)}else l.current=null}function Df(t){var e=t.type,l=t.memoizedProps,n=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break t;case"img":l.src?n.src=l.src:l.srcSet&&(n.srcset=l.srcSet)}}catch(a){yt(t,t.return,a)}}function Wc(t,e,l){try{var n=t.stateNode;P0(n,t.type,l,e),n[le]=e}catch(a){yt(t,t.return,a)}}function Rf(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Nl(t.type)||t.tag===4}function $c(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Rf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Nl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Fc(t,e,l){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=Qe));else if(n!==4&&(n===27&&Nl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(Fc(t,e,l),t=t.sibling;t!==null;)Fc(t,e,l),t=t.sibling}function ji(t,e,l){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(n!==4&&(n===27&&Nl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(ji(t,e,l),t=t.sibling;t!==null;)ji(t,e,l),t=t.sibling}function jf(t){var e=t.stateNode,l=t.memoizedProps;try{for(var n=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);It(e,n,l),e[Wt]=t,e[le]=l}catch(i){yt(t,t.return,i)}}var tl=!1,Xt=!1,Pc=!1,Uf=typeof WeakSet=="function"?WeakSet:Set,Jt=null;function O0(t,e){if(t=t.containerInfo,So=eu,t=Ks(t),Zu(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var n=l.getSelection&&l.getSelection();if(n&&n.rangeCount!==0){l=n.anchorNode;var a=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break t}var u=0,s=-1,m=-1,G=0,N=0,j=t,z=null;e:for(;;){for(var C;j!==l||a!==0&&j.nodeType!==3||(s=u+a),j!==i||n!==0&&j.nodeType!==3||(m=u+n),j.nodeType===3&&(u+=j.nodeValue.length),(C=j.firstChild)!==null;)z=j,j=C;for(;;){if(j===t)break e;if(z===l&&++G===a&&(s=u),z===i&&++N===n&&(m=u),(C=j.nextSibling)!==null)break;j=z,z=j.parentNode}j=C}l=s===-1||m===-1?null:{start:s,end:m}}else l=null}l=l||{start:0,end:0}}else l=null;for(xo={focusedElem:t,selectionRange:l},eu=!1,Jt=e;Jt!==null;)if(e=Jt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Jt=t;else for(;Jt!==null;){switch(e=Jt,i=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)a=t[l],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,l=e,a=i.memoizedProps,i=i.memoizedState,n=l.stateNode;try{var X=Pl(l.type,a);t=n.getSnapshotBeforeUpdate(X,i),n.__reactInternalSnapshotBeforeUpdate=t}catch(k){yt(l,l.return,k)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)Eo(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Eo(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=e.sibling,t!==null){t.return=e.return,Jt=t;break}Jt=e.return}}function wf(t,e,l){var n=l.flags;switch(l.tag){case 0:case 11:case 15:ll(t,l),n&4&&Ga(5,l);break;case 1:if(ll(t,l),n&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(u){yt(l,l.return,u)}else{var a=Pl(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(u){yt(l,l.return,u)}}n&64&&Mf(l),n&512&&Ea(l,l.return);break;case 3:if(ll(t,l),n&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{br(t,e)}catch(u){yt(l,l.return,u)}}break;case 27:e===null&&n&4&&jf(l);case 26:case 5:ll(t,l),e===null&&n&4&&Df(l),n&512&&Ea(l,l.return);break;case 12:ll(t,l);break;case 31:ll(t,l),n&4&&Yf(t,l);break;case 13:ll(t,l),n&4&&qf(t,l),n&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=q0.bind(null,l),up(t,l))));break;case 22:if(n=l.memoizedState!==null||tl,!n){e=e!==null&&e.memoizedState!==null||Xt,a=tl;var i=Xt;tl=n,(Xt=e)&&!i?nl(t,l,(l.subtreeFlags&8772)!==0):ll(t,l),tl=a,Xt=i}break;case 30:break;default:ll(t,l)}}function Hf(t){var e=t.alternate;e!==null&&(t.alternate=null,Hf(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&_u(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Nt=null,ae=!1;function el(t,e,l){for(l=l.child;l!==null;)Bf(t,e,l),l=l.sibling}function Bf(t,e,l){if(fe&&typeof fe.onCommitFiberUnmount=="function")try{fe.onCommitFiberUnmount(Jn,l)}catch{}switch(l.tag){case 26:Xt||qe(l,e),el(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Xt||qe(l,e);var n=Nt,a=ae;Nl(l.type)&&(Nt=l.stateNode,ae=!1),el(t,e,l),Ra(l.stateNode),Nt=n,ae=a;break;case 5:Xt||qe(l,e);case 6:if(n=Nt,a=ae,Nt=null,el(t,e,l),Nt=n,ae=a,Nt!==null)if(ae)try{(Nt.nodeType===9?Nt.body:Nt.nodeName==="HTML"?Nt.ownerDocument.body:Nt).removeChild(l.stateNode)}catch(i){yt(l,e,i)}else try{Nt.removeChild(l.stateNode)}catch(i){yt(l,e,i)}break;case 18:Nt!==null&&(ae?(t=Nt,Md(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),Vn(t)):Md(Nt,l.stateNode));break;case 4:n=Nt,a=ae,Nt=l.stateNode.containerInfo,ae=!0,el(t,e,l),Nt=n,ae=a;break;case 0:case 11:case 14:case 15:Al(2,l,e),Xt||Al(4,l,e),el(t,e,l);break;case 1:Xt||(qe(l,e),n=l.stateNode,typeof n.componentWillUnmount=="function"&&Of(l,e,n)),el(t,e,l);break;case 21:el(t,e,l);break;case 22:Xt=(n=Xt)||l.memoizedState!==null,el(t,e,l),Xt=n;break;default:el(t,e,l)}}function Yf(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Vn(t)}catch(l){yt(e,e.return,l)}}}function qf(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Vn(t)}catch(l){yt(e,e.return,l)}}function D0(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Uf),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Uf),e;default:throw Error(o(435,t.tag))}}function Ui(t,e){var l=D0(t);e.forEach(function(n){if(!l.has(n)){l.add(n);var a=X0.bind(null,t,n);n.then(a,a)}})}function ie(t,e){var l=e.deletions;if(l!==null)for(var n=0;n<l.length;n++){var a=l[n],i=t,u=e,s=u;t:for(;s!==null;){switch(s.tag){case 27:if(Nl(s.type)){Nt=s.stateNode,ae=!1;break t}break;case 5:Nt=s.stateNode,ae=!1;break t;case 3:case 4:Nt=s.stateNode.containerInfo,ae=!0;break t}s=s.return}if(Nt===null)throw Error(o(160));Bf(i,u,a),Nt=null,ae=!1,i=a.alternate,i!==null&&(i.return=null),a.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Xf(e,t),e=e.sibling}var Re=null;function Xf(t,e){var l=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ie(e,t),ue(t),n&4&&(Al(3,t,t.return),Ga(3,t),Al(5,t,t.return));break;case 1:ie(e,t),ue(t),n&512&&(Xt||l===null||qe(l,l.return)),n&64&&tl&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?n:l.concat(n))));break;case 26:var a=Re;if(ie(e,t),ue(t),n&512&&(Xt||l===null||qe(l,l.return)),n&4){var i=l!==null?l.memoizedState:null;if(n=t.memoizedState,l===null)if(n===null)if(t.stateNode===null){t:{n=t.type,l=t.memoizedProps,a=a.ownerDocument||a;e:switch(n){case"title":i=a.getElementsByTagName("title")[0],(!i||i[Fn]||i[Wt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(n),a.head.insertBefore(i,a.querySelector("head > title"))),It(i,n,l),i[Wt]=t,kt(i),n=i;break t;case"link":var u=Xd("link","href",a).get(n+(l.href||""));if(u){for(var s=0;s<u.length;s++)if(i=u[s],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(s,1);break e}}i=a.createElement(n),It(i,n,l),a.head.appendChild(i);break;case"meta":if(u=Xd("meta","content",a).get(n+(l.content||""))){for(s=0;s<u.length;s++)if(i=u[s],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(s,1);break e}}i=a.createElement(n),It(i,n,l),a.head.appendChild(i);break;default:throw Error(o(468,n))}i[Wt]=t,kt(i),n=i}t.stateNode=n}else Ld(a,t.type,t.stateNode);else t.stateNode=qd(a,n,t.memoizedProps);else i!==n?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,n===null?Ld(a,t.type,t.stateNode):qd(a,n,t.memoizedProps)):n===null&&t.stateNode!==null&&Wc(t,t.memoizedProps,l.memoizedProps)}break;case 27:ie(e,t),ue(t),n&512&&(Xt||l===null||qe(l,l.return)),l!==null&&n&4&&Wc(t,t.memoizedProps,l.memoizedProps);break;case 5:if(ie(e,t),ue(t),n&512&&(Xt||l===null||qe(l,l.return)),t.flags&32){a=t.stateNode;try{dn(a,"")}catch(X){yt(t,t.return,X)}}n&4&&t.stateNode!=null&&(a=t.memoizedProps,Wc(t,a,l!==null?l.memoizedProps:a)),n&1024&&(Pc=!0);break;case 6:if(ie(e,t),ue(t),n&4){if(t.stateNode===null)throw Error(o(162));n=t.memoizedProps,l=t.stateNode;try{l.nodeValue=n}catch(X){yt(t,t.return,X)}}break;case 3:if(Fi=null,a=Re,Re=Wi(e.containerInfo),ie(e,t),Re=a,ue(t),n&4&&l!==null&&l.memoizedState.isDehydrated)try{Vn(e.containerInfo)}catch(X){yt(t,t.return,X)}Pc&&(Pc=!1,Lf(t));break;case 4:n=Re,Re=Wi(t.stateNode.containerInfo),ie(e,t),ue(t),Re=n;break;case 12:ie(e,t),ue(t);break;case 31:ie(e,t),ue(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Ui(t,n)));break;case 13:ie(e,t),ue(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Hi=re()),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Ui(t,n)));break;case 22:a=t.memoizedState!==null;var m=l!==null&&l.memoizedState!==null,G=tl,N=Xt;if(tl=G||a,Xt=N||m,ie(e,t),Xt=N,tl=G,ue(t),n&8192)t:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(l===null||m||tl||Xt||Il(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){m=l=e;try{if(i=m.stateNode,a)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{s=m.stateNode;var j=m.memoizedProps.style,z=j!=null&&j.hasOwnProperty("display")?j.display:null;s.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(X){yt(m,m.return,X)}}}else if(e.tag===6){if(l===null){m=e;try{m.stateNode.nodeValue=a?"":m.memoizedProps}catch(X){yt(m,m.return,X)}}}else if(e.tag===18){if(l===null){m=e;try{var C=m.stateNode;a?Od(C,!0):Od(m.stateNode,!1)}catch(X){yt(m,m.return,X)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}n&4&&(n=t.updateQueue,n!==null&&(l=n.retryQueue,l!==null&&(n.retryQueue=null,Ui(t,l))));break;case 19:ie(e,t),ue(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Ui(t,n)));break;case 30:break;case 21:break;default:ie(e,t),ue(t)}}function ue(t){var e=t.flags;if(e&2){try{for(var l,n=t.return;n!==null;){if(Rf(n)){l=n;break}n=n.return}if(l==null)throw Error(o(160));switch(l.tag){case 27:var a=l.stateNode,i=$c(t);ji(t,i,a);break;case 5:var u=l.stateNode;l.flags&32&&(dn(u,""),l.flags&=-33);var s=$c(t);ji(t,s,u);break;case 3:case 4:var m=l.stateNode.containerInfo,G=$c(t);Fc(t,G,m);break;default:throw Error(o(161))}}catch(N){yt(t,t.return,N)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Lf(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Lf(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function ll(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)wf(t,e.alternate,e),e=e.sibling}function Il(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Al(4,e,e.return),Il(e);break;case 1:qe(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&Of(e,e.return,l),Il(e);break;case 27:Ra(e.stateNode);case 26:case 5:qe(e,e.return),Il(e);break;case 22:e.memoizedState===null&&Il(e);break;case 30:Il(e);break;default:Il(e)}t=t.sibling}}function nl(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var n=e.alternate,a=t,i=e,u=i.flags;switch(i.tag){case 0:case 11:case 15:nl(a,i,l),Ga(4,i);break;case 1:if(nl(a,i,l),n=i,a=n.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(G){yt(n,n.return,G)}if(n=i,a=n.updateQueue,a!==null){var s=n.stateNode;try{var m=a.shared.hiddenCallbacks;if(m!==null)for(a.shared.hiddenCallbacks=null,a=0;a<m.length;a++)yr(m[a],s)}catch(G){yt(n,n.return,G)}}l&&u&64&&Mf(i),Ea(i,i.return);break;case 27:jf(i);case 26:case 5:nl(a,i,l),l&&n===null&&u&4&&Df(i),Ea(i,i.return);break;case 12:nl(a,i,l);break;case 31:nl(a,i,l),l&&u&4&&Yf(a,i);break;case 13:nl(a,i,l),l&&u&4&&qf(a,i);break;case 22:i.memoizedState===null&&nl(a,i,l),Ea(i,i.return);break;case 30:break;default:nl(a,i,l)}e=e.sibling}}function Ic(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&ra(l))}function to(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ra(t))}function je(t,e,l,n){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vf(t,e,l,n),e=e.sibling}function Vf(t,e,l,n){var a=e.flags;switch(e.tag){case 0:case 11:case 15:je(t,e,l,n),a&2048&&Ga(9,e);break;case 1:je(t,e,l,n);break;case 3:je(t,e,l,n),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ra(t)));break;case 12:if(a&2048){je(t,e,l,n),t=e.stateNode;try{var i=e.memoizedProps,u=i.id,s=i.onPostCommit;typeof s=="function"&&s(u,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(m){yt(e,e.return,m)}}else je(t,e,l,n);break;case 31:je(t,e,l,n);break;case 13:je(t,e,l,n);break;case 23:break;case 22:i=e.stateNode,u=e.alternate,e.memoizedState!==null?i._visibility&2?je(t,e,l,n):za(t,e):i._visibility&2?je(t,e,l,n):(i._visibility|=2,Dn(t,e,l,n,(e.subtreeFlags&10256)!==0||!1)),a&2048&&Ic(u,e);break;case 24:je(t,e,l,n),a&2048&&to(e.alternate,e);break;default:je(t,e,l,n)}}function Dn(t,e,l,n,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,u=e,s=l,m=n,G=u.flags;switch(u.tag){case 0:case 11:case 15:Dn(i,u,s,m,a),Ga(8,u);break;case 23:break;case 22:var N=u.stateNode;u.memoizedState!==null?N._visibility&2?Dn(i,u,s,m,a):za(i,u):(N._visibility|=2,Dn(i,u,s,m,a)),a&&G&2048&&Ic(u.alternate,u);break;case 24:Dn(i,u,s,m,a),a&&G&2048&&to(u.alternate,u);break;default:Dn(i,u,s,m,a)}e=e.sibling}}function za(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,n=e,a=n.flags;switch(n.tag){case 22:za(l,n),a&2048&&Ic(n.alternate,n);break;case 24:za(l,n),a&2048&&to(n.alternate,n);break;default:za(l,n)}e=e.sibling}}var Ta=8192;function Rn(t,e,l){if(t.subtreeFlags&Ta)for(t=t.child;t!==null;)Qf(t,e,l),t=t.sibling}function Qf(t,e,l){switch(t.tag){case 26:Rn(t,e,l),t.flags&Ta&&t.memoizedState!==null&&yp(l,Re,t.memoizedState,t.memoizedProps);break;case 5:Rn(t,e,l);break;case 3:case 4:var n=Re;Re=Wi(t.stateNode.containerInfo),Rn(t,e,l),Re=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Ta,Ta=16777216,Rn(t,e,l),Ta=n):Rn(t,e,l));break;default:Rn(t,e,l)}}function Zf(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Ca(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var n=e[l];Jt=n,kf(n,t)}Zf(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Kf(t),t=t.sibling}function Kf(t){switch(t.tag){case 0:case 11:case 15:Ca(t),t.flags&2048&&Al(9,t,t.return);break;case 3:Ca(t);break;case 12:Ca(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,wi(t)):Ca(t);break;default:Ca(t)}}function wi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var n=e[l];Jt=n,kf(n,t)}Zf(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Al(8,e,e.return),wi(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,wi(e));break;default:wi(e)}t=t.sibling}}function kf(t,e){for(;Jt!==null;){var l=Jt;switch(l.tag){case 0:case 11:case 15:Al(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var n=l.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:ra(l.memoizedState.cache)}if(n=l.child,n!==null)n.return=l,Jt=n;else t:for(l=t;Jt!==null;){n=Jt;var a=n.sibling,i=n.return;if(Hf(n),n===l){Jt=null;break t}if(a!==null){a.return=i,Jt=a;break t}Jt=i}}}var R0={getCacheForType:function(t){var e=Ft(Bt),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return Ft(Bt).controller.signal}},j0=typeof WeakMap=="function"?WeakMap:Map,ht=0,Gt=null,it=null,ct=0,gt=0,ge=null,Gl=!1,jn=!1,eo=!1,al=0,Dt=0,El=0,tn=0,lo=0,ye=0,Un=0,_a=null,ce=null,no=!1,Hi=0,Jf=0,Bi=1/0,Yi=null,zl=null,Lt=0,Tl=null,wn=null,il=0,ao=0,io=null,Wf=null,Na=0,uo=null;function be(){return(ht&2)!==0&&ct!==0?ct&-ct:_.T!==null?mo():rs()}function $f(){if(ye===0)if((ct&536870912)===0||rt){var t=ka;ka<<=1,(ka&3932160)===0&&(ka=262144),ye=t}else ye=536870912;return t=pe.current,t!==null&&(t.flags|=32),ye}function oe(t,e,l){(t===Gt&&(gt===2||gt===9)||t.cancelPendingCommit!==null)&&(Hn(t,0),Cl(t,ct,ye,!1)),$n(t,l),((ht&2)===0||t!==Gt)&&(t===Gt&&((ht&2)===0&&(tn|=l),Dt===4&&Cl(t,ct,ye,!1)),Xe(t))}function Ff(t,e,l){if((ht&6)!==0)throw Error(o(327));var n=!l&&(e&127)===0&&(e&t.expiredLanes)===0||Wn(t,e),a=n?H0(t,e):oo(t,e,!0),i=n;do{if(a===0){jn&&!n&&Cl(t,e,0,!1);break}else{if(l=t.current.alternate,i&&!U0(l)){a=oo(t,e,!1),i=!1;continue}if(a===2){if(i=e,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;t:{var s=t;a=_a;var m=s.current.memoizedState.isDehydrated;if(m&&(Hn(s,u).flags|=256),u=oo(s,u,!1),u!==2){if(eo&&!m){s.errorRecoveryDisabledLanes|=i,tn|=i,a=4;break t}i=ce,ce=a,i!==null&&(ce===null?ce=i:ce.push.apply(ce,i))}a=u}if(i=!1,a!==2)continue}}if(a===1){Hn(t,0),Cl(t,e,0,!0);break}t:{switch(n=t,i=a,i){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e)break;case 6:Cl(n,e,ye,!Gl);break t;case 2:ce=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(a=Hi+300-re(),10<a)){if(Cl(n,e,ye,!Gl),Wa(n,0,!0)!==0)break t;il=e,n.timeoutHandle=_d(Pf.bind(null,n,l,ce,Yi,no,e,ye,tn,Un,Gl,i,"Throttled",-0,0),a);break t}Pf(n,l,ce,Yi,no,e,ye,tn,Un,Gl,i,null,-0,0)}}break}while(!0);Xe(t)}function Pf(t,e,l,n,a,i,u,s,m,G,N,j,z,C){if(t.timeoutHandle=-1,j=e.subtreeFlags,j&8192||(j&16785408)===16785408){j={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qe},Qf(e,i,j);var X=(i&62914560)===i?Hi-re():(i&4194048)===i?Jf-re():0;if(X=bp(j,X),X!==null){il=i,t.cancelPendingCommit=X(ud.bind(null,t,e,i,l,n,a,u,s,m,N,j,null,z,C)),Cl(t,i,u,!G);return}}ud(t,e,i,l,n,a,u,s,m)}function U0(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var n=0;n<l.length;n++){var a=l[n],i=a.getSnapshot;a=a.value;try{if(!me(i(),a))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Cl(t,e,l,n){e&=~lo,e&=~tn,t.suspendedLanes|=e,t.pingedLanes&=~e,n&&(t.warmLanes|=e),n=t.expirationTimes;for(var a=e;0<a;){var i=31-de(a),u=1<<i;n[i]=-1,a&=~u}l!==0&&cs(t,l,e)}function qi(){return(ht&6)===0?(Ma(0),!1):!0}function co(){if(it!==null){if(gt===0)var t=it.return;else t=it,Je=Zl=null,Gc(t),Cn=null,da=0,t=it;for(;t!==null;)Nf(t.alternate,t),t=t.return;it=null}}function Hn(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,ep(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),il=0,co(),Gt=t,it=l=Ke(t.current,null),ct=e,gt=0,ge=null,Gl=!1,jn=Wn(t,e),eo=!1,Un=ye=lo=tn=El=Dt=0,ce=_a=null,no=!1,(e&8)!==0&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var a=31-de(n),i=1<<a;e|=t[a],n&=~i}return al=e,ci(),l}function If(t,e){I=null,_.H=Sa,e===Tn||e===pi?(e=hr(),gt=3):e===fc?(e=hr(),gt=4):gt=e===Yc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ge=e,it===null&&(Dt=1,Ni(t,Ge(e,t.current)))}function td(){var t=pe.current;return t===null?!0:(ct&4194048)===ct?Ce===null:(ct&62914560)===ct||(ct&536870912)!==0?t===Ce:!1}function ed(){var t=_.H;return _.H=Sa,t===null?Sa:t}function ld(){var t=_.A;return _.A=R0,t}function Xi(){Dt=4,Gl||(ct&4194048)!==ct&&pe.current!==null||(jn=!0),(El&134217727)===0&&(tn&134217727)===0||Gt===null||Cl(Gt,ct,ye,!1)}function oo(t,e,l){var n=ht;ht|=2;var a=ed(),i=ld();(Gt!==t||ct!==e)&&(Yi=null,Hn(t,e)),e=!1;var u=Dt;t:do try{if(gt!==0&&it!==null){var s=it,m=ge;switch(gt){case 8:co(),u=6;break t;case 3:case 2:case 9:case 6:pe.current===null&&(e=!0);var G=gt;if(gt=0,ge=null,Bn(t,s,m,G),l&&jn){u=0;break t}break;default:G=gt,gt=0,ge=null,Bn(t,s,m,G)}}w0(),u=Dt;break}catch(N){If(t,N)}while(!0);return e&&t.shellSuspendCounter++,Je=Zl=null,ht=n,_.H=a,_.A=i,it===null&&(Gt=null,ct=0,ci()),u}function w0(){for(;it!==null;)nd(it)}function H0(t,e){var l=ht;ht|=2;var n=ed(),a=ld();Gt!==t||ct!==e?(Yi=null,Bi=re()+500,Hn(t,e)):jn=Wn(t,e);t:do try{if(gt!==0&&it!==null){e=it;var i=ge;e:switch(gt){case 1:gt=0,ge=null,Bn(t,e,i,1);break;case 2:case 9:if(dr(i)){gt=0,ge=null,ad(e);break}e=function(){gt!==2&&gt!==9||Gt!==t||(gt=7),Xe(t)},i.then(e,e);break t;case 3:gt=7;break t;case 4:gt=5;break t;case 7:dr(i)?(gt=0,ge=null,ad(e)):(gt=0,ge=null,Bn(t,e,i,7));break;case 5:var u=null;switch(it.tag){case 26:u=it.memoizedState;case 5:case 27:var s=it;if(u?Vd(u):s.stateNode.complete){gt=0,ge=null;var m=s.sibling;if(m!==null)it=m;else{var G=s.return;G!==null?(it=G,Li(G)):it=null}break e}}gt=0,ge=null,Bn(t,e,i,5);break;case 6:gt=0,ge=null,Bn(t,e,i,6);break;case 8:co(),Dt=6;break t;default:throw Error(o(462))}}B0();break}catch(N){If(t,N)}while(!0);return Je=Zl=null,_.H=n,_.A=a,ht=l,it!==null?0:(Gt=null,ct=0,ci(),Dt)}function B0(){for(;it!==null&&!ch();)nd(it)}function nd(t){var e=Cf(t.alternate,t,al);t.memoizedProps=t.pendingProps,e===null?Li(t):it=e}function ad(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=xf(l,e,e.pendingProps,e.type,void 0,ct);break;case 11:e=xf(l,e,e.pendingProps,e.type.render,e.ref,ct);break;case 5:Gc(e);default:Nf(l,e),e=it=er(e,al),e=Cf(l,e,al)}t.memoizedProps=t.pendingProps,e===null?Li(t):it=e}function Bn(t,e,l,n){Je=Zl=null,Gc(e),Cn=null,da=0;var a=e.return;try{if(T0(t,a,e,l,ct)){Dt=1,Ni(t,Ge(l,t.current)),it=null;return}}catch(i){if(a!==null)throw it=a,i;Dt=1,Ni(t,Ge(l,t.current)),it=null;return}e.flags&32768?(rt||n===1?t=!0:jn||(ct&536870912)!==0?t=!1:(Gl=t=!0,(n===2||n===9||n===3||n===6)&&(n=pe.current,n!==null&&n.tag===13&&(n.flags|=16384))),id(e,t)):Li(e)}function Li(t){var e=t;do{if((e.flags&32768)!==0){id(e,Gl);return}t=e.return;var l=N0(e.alternate,e,al);if(l!==null){it=l;return}if(e=e.sibling,e!==null){it=e;return}it=e=t}while(e!==null);Dt===0&&(Dt=5)}function id(t,e){do{var l=M0(t.alternate,t);if(l!==null){l.flags&=32767,it=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){it=t;return}it=t=l}while(t!==null);Dt=6,it=null}function ud(t,e,l,n,a,i,u,s,m){t.cancelPendingCommit=null;do Vi();while(Lt!==0);if((ht&6)!==0)throw Error(o(327));if(e!==null){if(e===t.current)throw Error(o(177));if(i=e.lanes|e.childLanes,i|=$u,gh(t,l,i,u,s,m),t===Gt&&(it=Gt=null,ct=0),wn=e,Tl=t,il=l,ao=i,io=a,Wf=n,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,L0(Za,function(){return fd(),null})):(t.callbackNode=null,t.callbackPriority=0),n=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||n){n=_.T,_.T=null,a=B.p,B.p=2,u=ht,ht|=4;try{O0(t,e,l)}finally{ht=u,B.p=a,_.T=n}}Lt=1,cd(),od(),sd()}}function cd(){if(Lt===1){Lt=0;var t=Tl,e=wn,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=_.T,_.T=null;var n=B.p;B.p=2;var a=ht;ht|=4;try{Xf(e,t);var i=xo,u=Ks(t.containerInfo),s=i.focusedElem,m=i.selectionRange;if(u!==s&&s&&s.ownerDocument&&Zs(s.ownerDocument.documentElement,s)){if(m!==null&&Zu(s)){var G=m.start,N=m.end;if(N===void 0&&(N=G),"selectionStart"in s)s.selectionStart=G,s.selectionEnd=Math.min(N,s.value.length);else{var j=s.ownerDocument||document,z=j&&j.defaultView||window;if(z.getSelection){var C=z.getSelection(),X=s.textContent.length,k=Math.min(m.start,X),At=m.end===void 0?k:Math.min(m.end,X);!C.extend&&k>At&&(u=At,At=k,k=u);var b=Qs(s,k),v=Qs(s,At);if(b&&v&&(C.rangeCount!==1||C.anchorNode!==b.node||C.anchorOffset!==b.offset||C.focusNode!==v.node||C.focusOffset!==v.offset)){var A=j.createRange();A.setStart(b.node,b.offset),C.removeAllRanges(),k>At?(C.addRange(A),C.extend(v.node,v.offset)):(A.setEnd(v.node,v.offset),C.addRange(A))}}}}for(j=[],C=s;C=C.parentNode;)C.nodeType===1&&j.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<j.length;s++){var O=j[s];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}eu=!!So,xo=So=null}finally{ht=a,B.p=n,_.T=l}}t.current=e,Lt=2}}function od(){if(Lt===2){Lt=0;var t=Tl,e=wn,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=_.T,_.T=null;var n=B.p;B.p=2;var a=ht;ht|=4;try{wf(t,e.alternate,e)}finally{ht=a,B.p=n,_.T=l}}Lt=3}}function sd(){if(Lt===4||Lt===3){Lt=0,oh();var t=Tl,e=wn,l=il,n=Wf;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Lt=5:(Lt=0,wn=Tl=null,rd(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(zl=null),Tu(l),e=e.stateNode,fe&&typeof fe.onCommitFiberRoot=="function")try{fe.onCommitFiberRoot(Jn,e,void 0,(e.current.flags&128)===128)}catch{}if(n!==null){e=_.T,a=B.p,B.p=2,_.T=null;try{for(var i=t.onRecoverableError,u=0;u<n.length;u++){var s=n[u];i(s.value,{componentStack:s.stack})}}finally{_.T=e,B.p=a}}(il&3)!==0&&Vi(),Xe(t),a=t.pendingLanes,(l&261930)!==0&&(a&42)!==0?t===uo?Na++:(Na=0,uo=t):Na=0,Ma(0)}}function rd(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,ra(e)))}function Vi(){return cd(),od(),sd(),fd()}function fd(){if(Lt!==5)return!1;var t=Tl,e=ao;ao=0;var l=Tu(il),n=_.T,a=B.p;try{B.p=32>l?32:l,_.T=null,l=io,io=null;var i=Tl,u=il;if(Lt=0,wn=Tl=null,il=0,(ht&6)!==0)throw Error(o(331));var s=ht;if(ht|=4,Kf(i.current),Vf(i,i.current,u,l),ht=s,Ma(0,!1),fe&&typeof fe.onPostCommitFiberRoot=="function")try{fe.onPostCommitFiberRoot(Jn,i)}catch{}return!0}finally{B.p=a,_.T=n,rd(t,e)}}function dd(t,e,l){e=Ge(l,e),e=Bc(t.stateNode,e,2),t=bl(t,e,2),t!==null&&($n(t,2),Xe(t))}function yt(t,e,l){if(t.tag===3)dd(t,t,l);else for(;e!==null;){if(e.tag===3){dd(e,t,l);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(zl===null||!zl.has(n))){t=Ge(l,t),l=mf(2),n=bl(e,l,2),n!==null&&(hf(l,n,e,t),$n(n,2),Xe(n));break}}e=e.return}}function so(t,e,l){var n=t.pingCache;if(n===null){n=t.pingCache=new j0;var a=new Set;n.set(e,a)}else a=n.get(e),a===void 0&&(a=new Set,n.set(e,a));a.has(l)||(eo=!0,a.add(l),t=Y0.bind(null,t,e,l),e.then(t,t))}function Y0(t,e,l){var n=t.pingCache;n!==null&&n.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,Gt===t&&(ct&l)===l&&(Dt===4||Dt===3&&(ct&62914560)===ct&&300>re()-Hi?(ht&2)===0&&Hn(t,0):lo|=l,Un===ct&&(Un=0)),Xe(t)}function md(t,e){e===0&&(e=us()),t=Ll(t,e),t!==null&&($n(t,e),Xe(t))}function q0(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),md(t,l)}function X0(t,e){var l=0;switch(t.tag){case 31:case 13:var n=t.stateNode,a=t.memoizedState;a!==null&&(l=a.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(o(314))}n!==null&&n.delete(e),md(t,l)}function L0(t,e){return Au(t,e)}var Qi=null,Yn=null,ro=!1,Zi=!1,fo=!1,_l=0;function Xe(t){t!==Yn&&t.next===null&&(Yn===null?Qi=Yn=t:Yn=Yn.next=t),Zi=!0,ro||(ro=!0,Q0())}function Ma(t,e){if(!fo&&Zi){fo=!0;do for(var l=!1,n=Qi;n!==null;){if(t!==0){var a=n.pendingLanes;if(a===0)var i=0;else{var u=n.suspendedLanes,s=n.pingedLanes;i=(1<<31-de(42|t)+1)-1,i&=a&~(u&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,gd(n,i))}else i=ct,i=Wa(n,n===Gt?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(i&3)===0||Wn(n,i)||(l=!0,gd(n,i));n=n.next}while(l);fo=!1}}function V0(){hd()}function hd(){Zi=ro=!1;var t=0;_l!==0&&tp()&&(t=_l);for(var e=re(),l=null,n=Qi;n!==null;){var a=n.next,i=pd(n,e);i===0?(n.next=null,l===null?Qi=a:l.next=a,a===null&&(Yn=l)):(l=n,(t!==0||(i&3)!==0)&&(Zi=!0)),n=a}Lt!==0&&Lt!==5||Ma(t),_l!==0&&(_l=0)}function pd(t,e){for(var l=t.suspendedLanes,n=t.pingedLanes,a=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-de(i),s=1<<u,m=a[u];m===-1?((s&l)===0||(s&n)!==0)&&(a[u]=vh(s,e)):m<=e&&(t.expiredLanes|=s),i&=~s}if(e=Gt,l=ct,l=Wa(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,l===0||t===e&&(gt===2||gt===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&Gu(n),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||Wn(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(n!==null&&Gu(n),Tu(l)){case 2:case 8:l=as;break;case 32:l=Za;break;case 268435456:l=is;break;default:l=Za}return n=vd.bind(null,t),l=Au(l,n),t.callbackPriority=e,t.callbackNode=l,e}return n!==null&&n!==null&&Gu(n),t.callbackPriority=2,t.callbackNode=null,2}function vd(t,e){if(Lt!==0&&Lt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Vi()&&t.callbackNode!==l)return null;var n=ct;return n=Wa(t,t===Gt?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:(Ff(t,n,e),pd(t,re()),t.callbackNode!=null&&t.callbackNode===l?vd.bind(null,t):null)}function gd(t,e){if(Vi())return null;Ff(t,e,!0)}function Q0(){lp(function(){(ht&6)!==0?Au(ns,V0):hd()})}function mo(){if(_l===0){var t=En;t===0&&(t=Ka,Ka<<=1,(Ka&261888)===0&&(Ka=256)),_l=t}return _l}function yd(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ia(""+t)}function bd(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function Z0(t,e,l,n,a){if(e==="submit"&&l&&l.stateNode===a){var i=yd((a[le]||null).action),u=n.submitter;u&&(e=(e=u[le]||null)?yd(e.formAction):u.getAttribute("formAction"),e!==null&&(i=e,u=null));var s=new ni("action","action",null,n,a);t.push({event:s,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(_l!==0){var m=u?bd(a,u):new FormData(a);Dc(l,{pending:!0,data:m,method:a.method,action:i},null,m)}}else typeof i=="function"&&(s.preventDefault(),m=u?bd(a,u):new FormData(a),Dc(l,{pending:!0,data:m,method:a.method,action:i},i,m))},currentTarget:a}]})}}for(var ho=0;ho<Wu.length;ho++){var po=Wu[ho],K0=po.toLowerCase(),k0=po[0].toUpperCase()+po.slice(1);De(K0,"on"+k0)}De(Ws,"onAnimationEnd"),De($s,"onAnimationIteration"),De(Fs,"onAnimationStart"),De("dblclick","onDoubleClick"),De("focusin","onFocus"),De("focusout","onBlur"),De(s0,"onTransitionRun"),De(r0,"onTransitionStart"),De(f0,"onTransitionCancel"),De(Ps,"onTransitionEnd"),rn("onMouseEnter",["mouseout","mouseover"]),rn("onMouseLeave",["mouseout","mouseover"]),rn("onPointerEnter",["pointerout","pointerover"]),rn("onPointerLeave",["pointerout","pointerover"]),Bl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),J0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Oa));function Sd(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var n=t[l],a=n.event;n=n.listeners;t:{var i=void 0;if(e)for(var u=n.length-1;0<=u;u--){var s=n[u],m=s.instance,G=s.currentTarget;if(s=s.listener,m!==i&&a.isPropagationStopped())break t;i=s,a.currentTarget=G;try{i(a)}catch(N){ui(N)}a.currentTarget=null,i=m}else for(u=0;u<n.length;u++){if(s=n[u],m=s.instance,G=s.currentTarget,s=s.listener,m!==i&&a.isPropagationStopped())break t;i=s,a.currentTarget=G;try{i(a)}catch(N){ui(N)}a.currentTarget=null,i=m}}}}function ut(t,e){var l=e[Cu];l===void 0&&(l=e[Cu]=new Set);var n=t+"__bubble";l.has(n)||(xd(e,t,2,!1),l.add(n))}function vo(t,e,l){var n=0;e&&(n|=4),xd(l,t,n,e)}var Ki="_reactListening"+Math.random().toString(36).slice(2);function go(t){if(!t[Ki]){t[Ki]=!0,ms.forEach(function(l){l!=="selectionchange"&&(J0.has(l)||vo(l,!1,t),vo(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ki]||(e[Ki]=!0,vo("selectionchange",!1,e))}}function xd(t,e,l,n){switch($d(e)){case 2:var a=Ap;break;case 8:a=Gp;break;default:a=Do}l=a.bind(null,e,l,t),a=void 0,!wu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),n?a!==void 0?t.addEventListener(e,l,{capture:!0,passive:a}):t.addEventListener(e,l,!0):a!==void 0?t.addEventListener(e,l,{passive:a}):t.addEventListener(e,l,!1)}function yo(t,e,l,n,a){var i=n;if((e&1)===0&&(e&2)===0&&n!==null)t:for(;;){if(n===null)return;var u=n.tag;if(u===3||u===4){var s=n.stateNode.containerInfo;if(s===a)break;if(u===4)for(u=n.return;u!==null;){var m=u.tag;if((m===3||m===4)&&u.stateNode.containerInfo===a)return;u=u.return}for(;s!==null;){if(u=cn(s),u===null)return;if(m=u.tag,m===5||m===6||m===26||m===27){n=i=u;continue t}s=s.parentNode}}n=n.return}zs(function(){var G=i,N=ju(l),j=[];t:{var z=Is.get(t);if(z!==void 0){var C=ni,X=t;switch(t){case"keypress":if(ei(l)===0)break t;case"keydown":case"keyup":C=Xh;break;case"focusin":X="focus",C=qu;break;case"focusout":X="blur",C=qu;break;case"beforeblur":case"afterblur":C=qu;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=_s;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=Nh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=Qh;break;case Ws:case $s:case Fs:C=Dh;break;case Ps:C=Kh;break;case"scroll":case"scrollend":C=Ch;break;case"wheel":C=Jh;break;case"copy":case"cut":case"paste":C=jh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Ms;break;case"toggle":case"beforetoggle":C=$h}var k=(e&4)!==0,At=!k&&(t==="scroll"||t==="scrollend"),b=k?z!==null?z+"Capture":null:z;k=[];for(var v=G,A;v!==null;){var O=v;if(A=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||A===null||b===null||(O=In(v,b),O!=null&&k.push(Da(v,O,A))),At)break;v=v.return}0<k.length&&(z=new C(z,X,null,l,N),j.push({event:z,listeners:k}))}}if((e&7)===0){t:{if(z=t==="mouseover"||t==="pointerover",C=t==="mouseout"||t==="pointerout",z&&l!==Ru&&(X=l.relatedTarget||l.fromElement)&&(cn(X)||X[un]))break t;if((C||z)&&(z=N.window===N?N:(z=N.ownerDocument)?z.defaultView||z.parentWindow:window,C?(X=l.relatedTarget||l.toElement,C=G,X=X?cn(X):null,X!==null&&(At=h(X),k=X.tag,X!==At||k!==5&&k!==27&&k!==6)&&(X=null)):(C=null,X=G),C!==X)){if(k=_s,O="onMouseLeave",b="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(k=Ms,O="onPointerLeave",b="onPointerEnter",v="pointer"),At=C==null?z:Pn(C),A=X==null?z:Pn(X),z=new k(O,v+"leave",C,l,N),z.target=At,z.relatedTarget=A,O=null,cn(N)===G&&(k=new k(b,v+"enter",X,l,N),k.target=A,k.relatedTarget=At,O=k),At=O,C&&X)e:{for(k=W0,b=C,v=X,A=0,O=b;O;O=k(O))A++;O=0;for(var K=v;K;K=k(K))O++;for(;0<A-O;)b=k(b),A--;for(;0<O-A;)v=k(v),O--;for(;A--;){if(b===v||v!==null&&b===v.alternate){k=b;break e}b=k(b),v=k(v)}k=null}else k=null;C!==null&&Ad(j,z,C,k,!1),X!==null&&At!==null&&Ad(j,At,X,k,!0)}}t:{if(z=G?Pn(G):window,C=z.nodeName&&z.nodeName.toLowerCase(),C==="select"||C==="input"&&z.type==="file")var ft=Bs;else if(ws(z))if(Ys)ft=u0;else{ft=a0;var Z=n0}else C=z.nodeName,!C||C.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?G&&Du(G.elementType)&&(ft=Bs):ft=i0;if(ft&&(ft=ft(t,G))){Hs(j,ft,l,N);break t}Z&&Z(t,z,G),t==="focusout"&&G&&z.type==="number"&&G.memoizedProps.value!=null&&Ou(z,"number",z.value)}switch(Z=G?Pn(G):window,t){case"focusin":(ws(Z)||Z.contentEditable==="true")&&(vn=Z,Ku=G,ca=null);break;case"focusout":ca=Ku=vn=null;break;case"mousedown":ku=!0;break;case"contextmenu":case"mouseup":case"dragend":ku=!1,ks(j,l,N);break;case"selectionchange":if(o0)break;case"keydown":case"keyup":ks(j,l,N)}var tt;if(Lu)t:{switch(t){case"compositionstart":var ot="onCompositionStart";break t;case"compositionend":ot="onCompositionEnd";break t;case"compositionupdate":ot="onCompositionUpdate";break t}ot=void 0}else pn?js(t,l)&&(ot="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(ot="onCompositionStart");ot&&(Os&&l.locale!=="ko"&&(pn||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&pn&&(tt=Ts()):(dl=N,Hu="value"in dl?dl.value:dl.textContent,pn=!0)),Z=ki(G,ot),0<Z.length&&(ot=new Ns(ot,t,null,l,N),j.push({event:ot,listeners:Z}),tt?ot.data=tt:(tt=Us(l),tt!==null&&(ot.data=tt)))),(tt=Ph?Ih(t,l):t0(t,l))&&(ot=ki(G,"onBeforeInput"),0<ot.length&&(Z=new Ns("onBeforeInput","beforeinput",null,l,N),j.push({event:Z,listeners:ot}),Z.data=tt)),Z0(j,t,G,l,N)}Sd(j,e)})}function Da(t,e,l){return{instance:t,listener:e,currentTarget:l}}function ki(t,e){for(var l=e+"Capture",n=[];t!==null;){var a=t,i=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||i===null||(a=In(t,l),a!=null&&n.unshift(Da(t,a,i)),a=In(t,e),a!=null&&n.push(Da(t,a,i))),t.tag===3)return n;t=t.return}return[]}function W0(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ad(t,e,l,n,a){for(var i=e._reactName,u=[];l!==null&&l!==n;){var s=l,m=s.alternate,G=s.stateNode;if(s=s.tag,m!==null&&m===n)break;s!==5&&s!==26&&s!==27||G===null||(m=G,a?(G=In(l,i),G!=null&&u.unshift(Da(l,G,m))):a||(G=In(l,i),G!=null&&u.push(Da(l,G,m)))),l=l.return}u.length!==0&&t.push({event:e,listeners:u})}var $0=/\r\n?/g,F0=/\u0000|\uFFFD/g;function Gd(t){return(typeof t=="string"?t:""+t).replace($0,`
`).replace(F0,"")}function Ed(t,e){return e=Gd(e),Gd(t)===e}function xt(t,e,l,n,a,i){switch(l){case"children":typeof n=="string"?e==="body"||e==="textarea"&&n===""||dn(t,n):(typeof n=="number"||typeof n=="bigint")&&e!=="body"&&dn(t,""+n);break;case"className":Fa(t,"class",n);break;case"tabIndex":Fa(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Fa(t,l,n);break;case"style":Gs(t,n,i);break;case"data":if(e!=="object"){Fa(t,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(l);break}n=Ia(""+n),t.setAttribute(l,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(e!=="input"&&xt(t,e,"name",a.name,a,null),xt(t,e,"formEncType",a.formEncType,a,null),xt(t,e,"formMethod",a.formMethod,a,null),xt(t,e,"formTarget",a.formTarget,a,null)):(xt(t,e,"encType",a.encType,a,null),xt(t,e,"method",a.method,a,null),xt(t,e,"target",a.target,a,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(l);break}n=Ia(""+n),t.setAttribute(l,n);break;case"onClick":n!=null&&(t.onclick=Qe);break;case"onScroll":n!=null&&ut("scroll",t);break;case"onScrollEnd":n!=null&&ut("scrollend",t);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(o(61));if(l=n.__html,l!=null){if(a.children!=null)throw Error(o(60));t.innerHTML=l}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}l=Ia(""+n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(l,""+n):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":n===!0?t.setAttribute(l,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(l,n):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(l,n):t.removeAttribute(l);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(l):t.setAttribute(l,n);break;case"popover":ut("beforetoggle",t),ut("toggle",t),$a(t,"popover",n);break;case"xlinkActuate":Ve(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Ve(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Ve(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Ve(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Ve(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Ve(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Ve(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Ve(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Ve(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":$a(t,"is",n);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=zh.get(l)||l,$a(t,l,n))}}function bo(t,e,l,n,a,i){switch(l){case"style":Gs(t,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(o(61));if(l=n.__html,l!=null){if(a.children!=null)throw Error(o(60));t.innerHTML=l}}break;case"children":typeof n=="string"?dn(t,n):(typeof n=="number"||typeof n=="bigint")&&dn(t,""+n);break;case"onScroll":n!=null&&ut("scroll",t);break;case"onScrollEnd":n!=null&&ut("scrollend",t);break;case"onClick":n!=null&&(t.onclick=Qe);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hs.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(a=l.endsWith("Capture"),e=l.slice(2,a?l.length-7:void 0),i=t[le]||null,i=i!=null?i[l]:null,typeof i=="function"&&t.removeEventListener(e,i,a),typeof n=="function")){typeof i!="function"&&i!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,n,a);break t}l in t?t[l]=n:n===!0?t.setAttribute(l,""):$a(t,l,n)}}}function It(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ut("error",t),ut("load",t);var n=!1,a=!1,i;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];if(u!=null)switch(i){case"src":n=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:xt(t,e,i,u,l,null)}}a&&xt(t,e,"srcSet",l.srcSet,l,null),n&&xt(t,e,"src",l.src,l,null);return;case"input":ut("invalid",t);var s=i=u=a=null,m=null,G=null;for(n in l)if(l.hasOwnProperty(n)){var N=l[n];if(N!=null)switch(n){case"name":a=N;break;case"type":u=N;break;case"checked":m=N;break;case"defaultChecked":G=N;break;case"value":i=N;break;case"defaultValue":s=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(o(137,e));break;default:xt(t,e,n,N,l,null)}}bs(t,i,s,m,G,u,a,!1);return;case"select":ut("invalid",t),n=u=i=null;for(a in l)if(l.hasOwnProperty(a)&&(s=l[a],s!=null))switch(a){case"value":i=s;break;case"defaultValue":u=s;break;case"multiple":n=s;default:xt(t,e,a,s,l,null)}e=i,l=u,t.multiple=!!n,e!=null?fn(t,!!n,e,!1):l!=null&&fn(t,!!n,l,!0);return;case"textarea":ut("invalid",t),i=a=n=null;for(u in l)if(l.hasOwnProperty(u)&&(s=l[u],s!=null))switch(u){case"value":n=s;break;case"defaultValue":a=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:xt(t,e,u,s,l,null)}xs(t,n,a,i);return;case"option":for(m in l)l.hasOwnProperty(m)&&(n=l[m],n!=null)&&(m==="selected"?t.selected=n&&typeof n!="function"&&typeof n!="symbol":xt(t,e,m,n,l,null));return;case"dialog":ut("beforetoggle",t),ut("toggle",t),ut("cancel",t),ut("close",t);break;case"iframe":case"object":ut("load",t);break;case"video":case"audio":for(n=0;n<Oa.length;n++)ut(Oa[n],t);break;case"image":ut("error",t),ut("load",t);break;case"details":ut("toggle",t);break;case"embed":case"source":case"link":ut("error",t),ut("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(G in l)if(l.hasOwnProperty(G)&&(n=l[G],n!=null))switch(G){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:xt(t,e,G,n,l,null)}return;default:if(Du(e)){for(N in l)l.hasOwnProperty(N)&&(n=l[N],n!==void 0&&bo(t,e,N,n,l,void 0));return}}for(s in l)l.hasOwnProperty(s)&&(n=l[s],n!=null&&xt(t,e,s,n,l,null))}function P0(t,e,l,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,u=null,s=null,m=null,G=null,N=null;for(C in l){var j=l[C];if(l.hasOwnProperty(C)&&j!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":m=j;default:n.hasOwnProperty(C)||xt(t,e,C,null,n,j)}}for(var z in n){var C=n[z];if(j=l[z],n.hasOwnProperty(z)&&(C!=null||j!=null))switch(z){case"type":i=C;break;case"name":a=C;break;case"checked":G=C;break;case"defaultChecked":N=C;break;case"value":u=C;break;case"defaultValue":s=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(o(137,e));break;default:C!==j&&xt(t,e,z,C,n,j)}}Mu(t,u,s,m,G,N,i,a);return;case"select":C=u=s=z=null;for(i in l)if(m=l[i],l.hasOwnProperty(i)&&m!=null)switch(i){case"value":break;case"multiple":C=m;default:n.hasOwnProperty(i)||xt(t,e,i,null,n,m)}for(a in n)if(i=n[a],m=l[a],n.hasOwnProperty(a)&&(i!=null||m!=null))switch(a){case"value":z=i;break;case"defaultValue":s=i;break;case"multiple":u=i;default:i!==m&&xt(t,e,a,i,n,m)}e=s,l=u,n=C,z!=null?fn(t,!!l,z,!1):!!n!=!!l&&(e!=null?fn(t,!!l,e,!0):fn(t,!!l,l?[]:"",!1));return;case"textarea":C=z=null;for(s in l)if(a=l[s],l.hasOwnProperty(s)&&a!=null&&!n.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:xt(t,e,s,null,n,a)}for(u in n)if(a=n[u],i=l[u],n.hasOwnProperty(u)&&(a!=null||i!=null))switch(u){case"value":z=a;break;case"defaultValue":C=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(o(91));break;default:a!==i&&xt(t,e,u,a,n,i)}Ss(t,z,C);return;case"option":for(var X in l)z=l[X],l.hasOwnProperty(X)&&z!=null&&!n.hasOwnProperty(X)&&(X==="selected"?t.selected=!1:xt(t,e,X,null,n,z));for(m in n)z=n[m],C=l[m],n.hasOwnProperty(m)&&z!==C&&(z!=null||C!=null)&&(m==="selected"?t.selected=z&&typeof z!="function"&&typeof z!="symbol":xt(t,e,m,z,n,C));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var k in l)z=l[k],l.hasOwnProperty(k)&&z!=null&&!n.hasOwnProperty(k)&&xt(t,e,k,null,n,z);for(G in n)if(z=n[G],C=l[G],n.hasOwnProperty(G)&&z!==C&&(z!=null||C!=null))switch(G){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(o(137,e));break;default:xt(t,e,G,z,n,C)}return;default:if(Du(e)){for(var At in l)z=l[At],l.hasOwnProperty(At)&&z!==void 0&&!n.hasOwnProperty(At)&&bo(t,e,At,void 0,n,z);for(N in n)z=n[N],C=l[N],!n.hasOwnProperty(N)||z===C||z===void 0&&C===void 0||bo(t,e,N,z,n,C);return}}for(var b in l)z=l[b],l.hasOwnProperty(b)&&z!=null&&!n.hasOwnProperty(b)&&xt(t,e,b,null,n,z);for(j in n)z=n[j],C=l[j],!n.hasOwnProperty(j)||z===C||z==null&&C==null||xt(t,e,j,z,n,C)}function zd(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function I0(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),n=0;n<l.length;n++){var a=l[n],i=a.transferSize,u=a.initiatorType,s=a.duration;if(i&&s&&zd(u)){for(u=0,s=a.responseEnd,n+=1;n<l.length;n++){var m=l[n],G=m.startTime;if(G>s)break;var N=m.transferSize,j=m.initiatorType;N&&zd(j)&&(m=m.responseEnd,u+=N*(m<s?1:(s-G)/(m-G)))}if(--n,e+=8*(i+u)/(a.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var So=null,xo=null;function Ji(t){return t.nodeType===9?t:t.ownerDocument}function Td(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Cd(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Ao(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Go=null;function tp(){var t=window.event;return t&&t.type==="popstate"?t===Go?!1:(Go=t,!0):(Go=null,!1)}var _d=typeof setTimeout=="function"?setTimeout:void 0,ep=typeof clearTimeout=="function"?clearTimeout:void 0,Nd=typeof Promise=="function"?Promise:void 0,lp=typeof queueMicrotask=="function"?queueMicrotask:typeof Nd<"u"?function(t){return Nd.resolve(null).then(t).catch(np)}:_d;function np(t){setTimeout(function(){throw t})}function Nl(t){return t==="head"}function Md(t,e){var l=e,n=0;do{var a=l.nextSibling;if(t.removeChild(l),a&&a.nodeType===8)if(l=a.data,l==="/$"||l==="/&"){if(n===0){t.removeChild(a),Vn(e);return}n--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")n++;else if(l==="html")Ra(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,Ra(l);for(var i=l.firstChild;i;){var u=i.nextSibling,s=i.nodeName;i[Fn]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=u}}else l==="body"&&Ra(t.ownerDocument.body);l=a}while(l);Vn(e)}function Od(t,e){var l=t;t=0;do{var n=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),n&&n.nodeType===8)if(l=n.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=n}while(l)}function Eo(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Eo(l),_u(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function ap(t,e,l,n){for(;t.nodeType===1;){var a=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[Fn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=_e(t.nextSibling),t===null)break}return null}function ip(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=_e(t.nextSibling),t===null))return null;return t}function Dd(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=_e(t.nextSibling),t===null))return null;return t}function zo(t){return t.data==="$?"||t.data==="$~"}function To(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function up(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var n=function(){e(),l.removeEventListener("DOMContentLoaded",n)};l.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function _e(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Co=null;function Rd(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return _e(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function jd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function Ud(t,e,l){switch(e=Ji(l),t){case"html":if(t=e.documentElement,!t)throw Error(o(452));return t;case"head":if(t=e.head,!t)throw Error(o(453));return t;case"body":if(t=e.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function Ra(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);_u(t)}var Ne=new Map,wd=new Set;function Wi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ul=B.d;B.d={f:cp,r:op,D:sp,C:rp,L:fp,m:dp,X:hp,S:mp,M:pp};function cp(){var t=ul.f(),e=qi();return t||e}function op(t){var e=on(t);e!==null&&e.tag===5&&e.type==="form"?Pr(e):ul.r(t)}var qn=typeof document>"u"?null:document;function Hd(t,e,l){var n=qn;if(n&&typeof e=="string"&&e){var a=xe(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof l=="string"&&(a+='[crossorigin="'+l+'"]'),wd.has(a)||(wd.add(a),t={rel:t,crossOrigin:l,href:e},n.querySelector(a)===null&&(e=n.createElement("link"),It(e,"link",t),kt(e),n.head.appendChild(e)))}}function sp(t){ul.D(t),Hd("dns-prefetch",t,null)}function rp(t,e){ul.C(t,e),Hd("preconnect",t,e)}function fp(t,e,l){ul.L(t,e,l);var n=qn;if(n&&t&&e){var a='link[rel="preload"][as="'+xe(e)+'"]';e==="image"&&l&&l.imageSrcSet?(a+='[imagesrcset="'+xe(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(a+='[imagesizes="'+xe(l.imageSizes)+'"]')):a+='[href="'+xe(t)+'"]';var i=a;switch(e){case"style":i=Xn(t);break;case"script":i=Ln(t)}Ne.has(i)||(t=T({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Ne.set(i,t),n.querySelector(a)!==null||e==="style"&&n.querySelector(ja(i))||e==="script"&&n.querySelector(Ua(i))||(e=n.createElement("link"),It(e,"link",t),kt(e),n.head.appendChild(e)))}}function dp(t,e){ul.m(t,e);var l=qn;if(l&&t){var n=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+xe(n)+'"][href="'+xe(t)+'"]',i=a;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ln(t)}if(!Ne.has(i)&&(t=T({rel:"modulepreload",href:t},e),Ne.set(i,t),l.querySelector(a)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Ua(i)))return}n=l.createElement("link"),It(n,"link",t),kt(n),l.head.appendChild(n)}}}function mp(t,e,l){ul.S(t,e,l);var n=qn;if(n&&t){var a=sn(n).hoistableStyles,i=Xn(t);e=e||"default";var u=a.get(i);if(!u){var s={loading:0,preload:null};if(u=n.querySelector(ja(i)))s.loading=5;else{t=T({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Ne.get(i))&&_o(t,l);var m=u=n.createElement("link");kt(m),It(m,"link",t),m._p=new Promise(function(G,N){m.onload=G,m.onerror=N}),m.addEventListener("load",function(){s.loading|=1}),m.addEventListener("error",function(){s.loading|=2}),s.loading|=4,$i(u,e,n)}u={type:"stylesheet",instance:u,count:1,state:s},a.set(i,u)}}}function hp(t,e){ul.X(t,e);var l=qn;if(l&&t){var n=sn(l).hoistableScripts,a=Ln(t),i=n.get(a);i||(i=l.querySelector(Ua(a)),i||(t=T({src:t,async:!0},e),(e=Ne.get(a))&&No(t,e),i=l.createElement("script"),kt(i),It(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(a,i))}}function pp(t,e){ul.M(t,e);var l=qn;if(l&&t){var n=sn(l).hoistableScripts,a=Ln(t),i=n.get(a);i||(i=l.querySelector(Ua(a)),i||(t=T({src:t,async:!0,type:"module"},e),(e=Ne.get(a))&&No(t,e),i=l.createElement("script"),kt(i),It(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(a,i))}}function Bd(t,e,l,n){var a=(a=lt.current)?Wi(a):null;if(!a)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=Xn(l.href),l=sn(a).hoistableStyles,n=l.get(e),n||(n={type:"style",instance:null,count:0,state:null},l.set(e,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=Xn(l.href);var i=sn(a).hoistableStyles,u=i.get(t);if(u||(a=a.ownerDocument||a,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=a.querySelector(ja(t)))&&!i._p&&(u.instance=i,u.state.loading=5),Ne.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ne.set(t,l),i||vp(a,t,l,u.state))),e&&n===null)throw Error(o(528,""));return u}if(e&&n!==null)throw Error(o(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ln(l),l=sn(a).hoistableScripts,n=l.get(e),n||(n={type:"script",instance:null,count:0,state:null},l.set(e,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function Xn(t){return'href="'+xe(t)+'"'}function ja(t){return'link[rel="stylesheet"]['+t+"]"}function Yd(t){return T({},t,{"data-precedence":t.precedence,precedence:null})}function vp(t,e,l,n){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?n.loading=1:(e=t.createElement("link"),n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2}),It(e,"link",l),kt(e),t.head.appendChild(e))}function Ln(t){return'[src="'+xe(t)+'"]'}function Ua(t){return"script[async]"+t}function qd(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var n=t.querySelector('style[data-href~="'+xe(l.href)+'"]');if(n)return e.instance=n,kt(n),n;var a=T({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),kt(n),It(n,"style",a),$i(n,l.precedence,t),e.instance=n;case"stylesheet":a=Xn(l.href);var i=t.querySelector(ja(a));if(i)return e.state.loading|=4,e.instance=i,kt(i),i;n=Yd(l),(a=Ne.get(a))&&_o(n,a),i=(t.ownerDocument||t).createElement("link"),kt(i);var u=i;return u._p=new Promise(function(s,m){u.onload=s,u.onerror=m}),It(i,"link",n),e.state.loading|=4,$i(i,l.precedence,t),e.instance=i;case"script":return i=Ln(l.src),(a=t.querySelector(Ua(i)))?(e.instance=a,kt(a),a):(n=l,(a=Ne.get(i))&&(n=T({},l),No(n,a)),t=t.ownerDocument||t,a=t.createElement("script"),kt(a),It(a,"link",n),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(n=e.instance,e.state.loading|=4,$i(n,l.precedence,t));return e.instance}function $i(t,e,l){for(var n=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=n.length?n[n.length-1]:null,i=a,u=0;u<n.length;u++){var s=n[u];if(s.dataset.precedence===e)i=s;else if(i!==a)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function _o(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function No(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Fi=null;function Xd(t,e,l){if(Fi===null){var n=new Map,a=Fi=new Map;a.set(l,n)}else a=Fi,n=a.get(l),n||(n=new Map,a.set(l,n));if(n.has(t))return n;for(n.set(t,null),l=l.getElementsByTagName(t),a=0;a<l.length;a++){var i=l[a];if(!(i[Fn]||i[Wt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(e)||"";u=t+u;var s=n.get(u);s?s.push(i):n.set(u,[i])}}return n}function Ld(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function gp(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Vd(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function yp(t,e,l,n){if(l.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var a=Xn(n.href),i=e.querySelector(ja(a));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Pi.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=i,kt(i);return}i=e.ownerDocument||e,n=Yd(n),(a=Ne.get(a))&&_o(n,a),i=i.createElement("link"),kt(i);var u=i;u._p=new Promise(function(s,m){u.onload=s,u.onerror=m}),It(i,"link",n),l.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=Pi.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var Mo=0;function bp(t,e){return t.stylesheets&&t.count===0&&tu(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var n=setTimeout(function(){if(t.stylesheets&&tu(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&Mo===0&&(Mo=62500*I0());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&tu(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>Mo?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(n),clearTimeout(a)}}:null}function Pi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)tu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ii=null;function tu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ii=new Map,e.forEach(Sp,t),Ii=null,Pi.call(t))}function Sp(t,e){if(!(e.state.loading&4)){var l=Ii.get(t);if(l)var n=l.get(null);else{l=new Map,Ii.set(t,l);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var u=a[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),n=u)}n&&l.set(null,n)}a=e.instance,u=a.getAttribute("data-precedence"),i=l.get(u)||n,i===n&&l.set(null,a),l.set(u,a),this.count++,n=Pi.bind(this),a.addEventListener("load",n),a.addEventListener("error",n),i?i.parentNode.insertBefore(a,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var wa={$$typeof:Et,Provider:null,Consumer:null,_currentValue:w,_currentValue2:w,_threadCount:0};function xp(t,e,l,n,a,i,u,s,m){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Eu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Eu(0),this.hiddenUpdates=Eu(null),this.identifierPrefix=n,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function Qd(t,e,l,n,a,i,u,s,m,G,N,j){return t=new xp(t,e,l,u,m,G,N,j,s),e=1,i===!0&&(e|=24),i=he(3,null,null,e),t.current=i,i.stateNode=t,e=oc(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:n,isDehydrated:l,cache:e},dc(i),t}function Zd(t){return t?(t=bn,t):bn}function Kd(t,e,l,n,a,i){a=Zd(a),n.context===null?n.context=a:n.pendingContext=a,n=yl(e),n.payload={element:l},i=i===void 0?null:i,i!==null&&(n.callback=i),l=bl(t,n,e),l!==null&&(oe(l,t,e),ha(l,t,e))}function kd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function Oo(t,e){kd(t,e),(t=t.alternate)&&kd(t,e)}function Jd(t){if(t.tag===13||t.tag===31){var e=Ll(t,67108864);e!==null&&oe(e,t,67108864),Oo(t,67108864)}}function Wd(t){if(t.tag===13||t.tag===31){var e=be();e=zu(e);var l=Ll(t,e);l!==null&&oe(l,t,e),Oo(t,e)}}var eu=!0;function Ap(t,e,l,n){var a=_.T;_.T=null;var i=B.p;try{B.p=2,Do(t,e,l,n)}finally{B.p=i,_.T=a}}function Gp(t,e,l,n){var a=_.T;_.T=null;var i=B.p;try{B.p=8,Do(t,e,l,n)}finally{B.p=i,_.T=a}}function Do(t,e,l,n){if(eu){var a=Ro(n);if(a===null)yo(t,e,n,lu,l),Fd(t,n);else if(zp(a,t,e,l,n))n.stopPropagation();else if(Fd(t,n),e&4&&-1<Ep.indexOf(t)){for(;a!==null;){var i=on(a);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Hl(i.pendingLanes);if(u!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;u;){var m=1<<31-de(u);s.entanglements[1]|=m,u&=~m}Xe(i),(ht&6)===0&&(Bi=re()+500,Ma(0))}}break;case 31:case 13:s=Ll(i,2),s!==null&&oe(s,i,2),qi(),Oo(i,2)}if(i=Ro(n),i===null&&yo(t,e,n,lu,l),i===a)break;a=i}a!==null&&n.stopPropagation()}else yo(t,e,n,null,l)}}function Ro(t){return t=ju(t),jo(t)}var lu=null;function jo(t){if(lu=null,t=cn(t),t!==null){var e=h(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=x(e),t!==null)return t;t=null}else if(l===31){if(t=E(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return lu=t,null}function $d(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(sh()){case ns:return 2;case as:return 8;case Za:case rh:return 32;case is:return 268435456;default:return 32}default:return 32}}var Uo=!1,Ml=null,Ol=null,Dl=null,Ha=new Map,Ba=new Map,Rl=[],Ep="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fd(t,e){switch(t){case"focusin":case"focusout":Ml=null;break;case"dragenter":case"dragleave":Ol=null;break;case"mouseover":case"mouseout":Dl=null;break;case"pointerover":case"pointerout":Ha.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ba.delete(e.pointerId)}}function Ya(t,e,l,n,a,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:l,eventSystemFlags:n,nativeEvent:i,targetContainers:[a]},e!==null&&(e=on(e),e!==null&&Jd(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function zp(t,e,l,n,a){switch(e){case"focusin":return Ml=Ya(Ml,t,e,l,n,a),!0;case"dragenter":return Ol=Ya(Ol,t,e,l,n,a),!0;case"mouseover":return Dl=Ya(Dl,t,e,l,n,a),!0;case"pointerover":var i=a.pointerId;return Ha.set(i,Ya(Ha.get(i)||null,t,e,l,n,a)),!0;case"gotpointercapture":return i=a.pointerId,Ba.set(i,Ya(Ba.get(i)||null,t,e,l,n,a)),!0}return!1}function Pd(t){var e=cn(t.target);if(e!==null){var l=h(e);if(l!==null){if(e=l.tag,e===13){if(e=x(l),e!==null){t.blockedOn=e,fs(t.priority,function(){Wd(l)});return}}else if(e===31){if(e=E(l),e!==null){t.blockedOn=e,fs(t.priority,function(){Wd(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=Ro(t.nativeEvent);if(l===null){l=t.nativeEvent;var n=new l.constructor(l.type,l);Ru=n,l.target.dispatchEvent(n),Ru=null}else return e=on(l),e!==null&&Jd(e),t.blockedOn=l,!1;e.shift()}return!0}function Id(t,e,l){nu(t)&&l.delete(e)}function Tp(){Uo=!1,Ml!==null&&nu(Ml)&&(Ml=null),Ol!==null&&nu(Ol)&&(Ol=null),Dl!==null&&nu(Dl)&&(Dl=null),Ha.forEach(Id),Ba.forEach(Id)}function au(t,e){t.blockedOn===e&&(t.blockedOn=null,Uo||(Uo=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Tp)))}var iu=null;function tm(t){iu!==t&&(iu=t,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){iu===t&&(iu=null);for(var e=0;e<t.length;e+=3){var l=t[e],n=t[e+1],a=t[e+2];if(typeof n!="function"){if(jo(n||l)===null)continue;break}var i=on(l);i!==null&&(t.splice(e,3),e-=3,Dc(i,{pending:!0,data:a,method:l.method,action:n},n,a))}}))}function Vn(t){function e(m){return au(m,t)}Ml!==null&&au(Ml,t),Ol!==null&&au(Ol,t),Dl!==null&&au(Dl,t),Ha.forEach(e),Ba.forEach(e);for(var l=0;l<Rl.length;l++){var n=Rl[l];n.blockedOn===t&&(n.blockedOn=null)}for(;0<Rl.length&&(l=Rl[0],l.blockedOn===null);)Pd(l),l.blockedOn===null&&Rl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(n=0;n<l.length;n+=3){var a=l[n],i=l[n+1],u=a[le]||null;if(typeof i=="function")u||tm(l);else if(u){var s=null;if(i&&i.hasAttribute("formAction")){if(a=i,u=i[le]||null)s=u.formAction;else if(jo(a)!==null)continue}else s=u.action;typeof s=="function"?l[n+1]=s:(l.splice(n,3),n-=3),tm(l)}}}function em(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return a=u})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),n||setTimeout(l,20)}function l(){if(!n&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){n=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function wo(t){this._internalRoot=t}uu.prototype.render=wo.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(o(409));var l=e.current,n=be();Kd(l,n,t,e,null,null)},uu.prototype.unmount=wo.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kd(t.current,2,null,t,null,null),qi(),e[un]=null}};function uu(t){this._internalRoot=t}uu.prototype.unstable_scheduleHydration=function(t){if(t){var e=rs();t={blockedOn:null,target:t,priority:e};for(var l=0;l<Rl.length&&e!==0&&e<Rl[l].priority;l++);Rl.splice(l,0,t),l===0&&Pd(t)}};var lm=r.version;if(lm!=="19.2.3")throw Error(o(527,lm,"19.2.3"));B.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=p(e),t=t!==null?M(t):null,t=t===null?null:t.stateNode,t};var Cp={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cu.isDisabled&&cu.supportsFiber)try{Jn=cu.inject(Cp),fe=cu}catch{}}return Xa.createRoot=function(t,e){if(!d(t))throw Error(o(299));var l=!1,n="",a=sf,i=rf,u=ff;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError)),e=Qd(t,1,!1,null,null,l,n,null,a,i,u,em),t[un]=e.current,go(t),new wo(e)},Xa.hydrateRoot=function(t,e,l){if(!d(t))throw Error(o(299));var n=!1,a="",i=sf,u=rf,s=ff,m=null;return l!=null&&(l.unstable_strictMode===!0&&(n=!0),l.identifierPrefix!==void 0&&(a=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(s=l.onRecoverableError),l.formState!==void 0&&(m=l.formState)),e=Qd(t,1,!0,e,l??null,n,a,m,i,u,s,em),e.context=Zd(null),l=e.current,n=be(),n=zu(n),a=yl(n),a.callback=null,bl(l,a,n),l=n,e.current.lanes=l,$n(e,l),Xe(e),t[un]=e.current,go(t),new uu(e)},Xa.version="19.2.3",Xa}var dm;function qp(){if(dm)return Yo.exports;dm=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(r){console.error(r)}}return c(),Yo.exports=Yp(),Yo.exports}var Xp=qp();const Lp=c=>c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Vp=c=>c.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,f,o)=>o?o.toUpperCase():f.toLowerCase()),mm=c=>{const r=Vp(c);return r.charAt(0).toUpperCase()+r.slice(1)},Tm=(...c)=>c.filter((r,f,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===f).join(" ").trim(),Qp=c=>{for(const r in c)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};var Zp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Kp=D.forwardRef(({color:c="currentColor",size:r=24,strokeWidth:f=2,absoluteStrokeWidth:o,className:d="",children:h,iconNode:x,...E},y)=>D.createElement("svg",{ref:y,...Zp,width:r,height:r,stroke:c,strokeWidth:o?Number(f)*24/Number(r):f,className:Tm("lucide",d),...!h&&!Qp(E)&&{"aria-hidden":"true"},...E},[...x.map(([p,M])=>D.createElement(p,M)),...Array.isArray(h)?h:[h]]));const Ue=(c,r)=>{const f=D.forwardRef(({className:o,...d},h)=>D.createElement(Kp,{ref:h,iconNode:r,className:Tm(`lucide-${Lp(mm(c))}`,`lucide-${c}`,o),...d}));return f.displayName=mm(c),f};const kp=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Wo=Ue("book-open",kp);const Jp=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Wp=Ue("chevron-down",Jp);const $p=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Cm=Ue("chevron-right",$p);const Fp=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],hm=Ue("external-link",Fp);const Pp=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Ip=Ue("house",Pp);const tv=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],ev=Ue("lightbulb",tv);const lv=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],nv=Ue("menu",lv);const av=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],iv=Ue("message-square",av);const uv=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],pm=Ue("sparkles",uv);const cv=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],ov=Ue("user",cv);const sv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],rv=Ue("x",sv),fv=[{id:"chapter2",number:"第二章",title:"寫作與溝通",subtitle:"用Gemini成為文字高手",introduction:"文字工作是職場上最普遍、也最耗時的任務之一。一封電郵可能要想半小時，一篇報告可能要寫一整天，一個社交媒體貼文可能要改七八遍才覺得順眼。Gemini最擅長的，正是文字。這一章涵蓋六個最常見的職場寫作場景：商務電郵、文章與博客、會議記錄、社交媒體內容、中英翻譯，以及品牌故事創作。每一節都有可以直接使用的Prompt模板，讓你從今天開始省時省力。",sections:[{id:"2.1",title:"2.1 用Gemini寫商務電郵：從冷郵件到客戶跟進",content:`### 應用場景

電郵是香港職場最主要的正式溝通工具。一封寫得好的電郵，可以推進合作、解決問題、建立信任；一封寫得差的電郵，可能讓對方留下錯誤印象，甚至壞事。

偏偏電郵也是最多人拖延的工作。那封跟進信寫了一半，那個難開口的請求還沒有送出，那封需要婉拒的回覆不知道怎麼措辭——這些情況，Gemini全部可以幫你解決。

### 操作步驟

**第一步：確定電郵的核心目的**

在給Gemini指令之前，先想清楚一件事：這封電郵最重要的目標是什麼？是要對方採取行動？是要傳達信息？是要維繫關係？目的清晰，指令才能清晰。

**第二步：套用以下Prompt模板**

> 你是一位香港職場的資深專業人士。
> 背景：[說明你的職位和公司性質]
> 收件人：[對方的職位和你們的關係]
> 電郵目的：[你希望對方做什麼或感受到什麼]
> 必須包含的資訊：[具體事實、日期、數字]
> 語氣：[正式／友好／直接／道歉／婉轉]
> 字數限制：[例如200字以內]
> 請撰寫這封電郵，並建議一個主旨行。

**第三步：審閱並追問調整**

收到草稿後，檢查以下三點：語氣是否符合你和對方的實際關係？所有具體資訊是否準確？結尾的行動呼籲是否清晰？如有問題，直接追問修改。

**第四步：加入個人化細節**

Gemini不了解你與收件人的個人歷史。發送前，加入一兩句只有你才知道的細節（上次會面提到的話題、對方公司最近的動態），讓電郵更有溫度。

### 五種常見電郵場景的Prompt要點

**場景一：冷郵件（首次接觸）** 重點：說清楚你是誰、你能為對方帶來什麼價值、行動呼籲要低門檻（如「5分鐘通話」而非「合作提案」）

**場景二：跟進郵件** 重點：點明上次接觸的具體情況（日期、會議、上封郵件）、不顯得催促但帶出urgency、提供方便對方回應的選項

**場景三：傳達壞消息** 重點：先承認、後解釋、給解決方案，語氣要真誠不迴避

**場景四：婉拒請求** 重點：感謝對方、給出合理理由、盡量提供替代方案，保住關係

**場景五：提出要求（如申請預算）** 重點：先說對對方的好處、數字要具體、行動呼籲要明確

### Prompt範本（跟進郵件）

> 你是香港一家廣告公司的客戶主任。
> 背景：三週前我向一位潛在客戶（對方是中型零售品牌的行銷總監）提交了社交媒體管理服務提案，至今未獲回覆。
> 目的：禮貌跟進，了解對方的考慮進度，並重申我們的服務價值。
> 語氣：專業友好，不顯催促。
> 字數：150字以內。
> 請撰寫跟進電郵，並建議主旨行。

### 本節重點

✅ 寫電郵前先確定核心目的，這比寫長篇指令更重要

✅ 傳達壞消息或婉拒請求，是Gemini最能節省你心理負擔的場景

✅ 永遠在Gemini草稿中加入個人化細節再發送`},{id:"2.2",title:"2.2 文章與博客寫作：10分鐘出一篇有觀點的長文",content:`### 應用場景

很多香港的中小企老闆、自由工作者、專業人士，都知道在網上發表文章能建立個人品牌，但「寫文章」這件事總是被排到最後。不是沒有想法，而是從想法到成文太費力。

Gemini能把這個過程壓縮到10至15分鐘：你提供觀點和關鍵資訊，它負責結構、語言和流暢度。

### 操作步驟

**第一步：確定文章的核心論點**

好文章必須有一個清晰的中心觀點，而不只是「介紹XX話題」。在指令中說清楚你的立場，例如「我認為香港中小企低估了社交媒體的客服功能」，比「寫一篇關於社交媒體的文章」有用得多。

**第二步：提供你的原始素材**

把你想在文章中用到的觀點、例子、數據，甚至是粗略的筆記，全部貼給Gemini。原材料越豐富，文章越有說服力，越不像AI生成的。

**第三步：指定文章結構**

> 請以以下結構撰寫一篇約800字的文章：
> 1. 開場：一個能引起共鳴的場景或問題
> 2. 核心論點：[你的主要觀點]
> 3. 三個支撐論據：[你提供的例子或數據]
> 4. 結尾：行動呼籲或反思問題

**第四步：加工潤色**

Gemini生成的初稿通常結構清晰但語氣稍嫌平板。在追問階段，可以要求：「讓開場更有衝擊力」、「第二個論據舉一個香港本地的例子」、「結尾改成問句，引發讀者思考」。

### 適合用Gemini寫的文章類型

• LinkedIn專業文章（個人品牌建立）
• 公司博客（行業觀點、案例分享）
• 媒體投稿（意見文章、專欄）
• 電子報內容（定期向客戶發送的洞察）
• 產品或服務的深度介紹文

### Prompt範本

> 你是一位香港的資深商業寫手。
> 文章主題：[你的核心觀點，一句話]
> 目標讀者：[例：香港中小企老闆，30至50歲]
> 文章用途：[例：在LinkedIn發表，建立個人品牌]
> 我想包含的論點和例子：
> - [論點一]
> - [論點二]
> - [具體例子或數據]
> 請撰寫一篇約700至900字的文章，
> 開場要有吸引力，結尾要有行動呼籲。
> 使用繁體中文，語氣專業但易讀。

### 本節重點

✅ 提供你自己的觀點和例子，文章才有靈魂，不會淪為AI通用廢話

✅ Gemini負責結構和語言，你負責思想和最終把關

✅ 寫完初稿後，追問「讓第一段更有衝擊力」，通常能大幅提升文章質量`},{id:"2.3",title:"2.3 會議紀錄與摘要：開完會就有結構化記錄",content:`### 應用場景

開完一個小時的會議，花另外半小時整理記錄，這個情況在香港職場極為普遍。Gemini可以把這個半小時壓縮到五分鐘：你提供原始筆記或逐字稿，它負責整理成結構清晰的會議記錄。

### 操作步驟

**方法A：從粗略筆記整理**

把你在會議中隨手記下的零散要點，原封不動貼給Gemini：

> 以下是我在會議中的粗略筆記，請整理成專業會議記錄：
> [貼上你的筆記，不需要整理格式]
> 會議日期：[日期]
> 與會者：[姓名和職位]
> 會議目的：[一句話說明]
> 請輸出格式：
> 1. 會議摘要（3至5句話）
> 2. 主要討論事項（條列式）
> 3. 決議事項（每項附上負責人和截止日期）
> 4. 待跟進事項

**方法B：從錄音或逐字稿整理**

如果你使用Google Meet錄音，或者手動記錄了會議逐字稿，可以貼給Gemini要求整理摘要：

> 以下是會議逐字稿，請：
> 1. 用200字以內總結會議的核心決定
> 2. 列出所有action items，格式為：[負責人] 需要在 [日期] 前完成 [任務]
> 3. 標注任何需要高層決定的懸而未決事項

### 香港職場提示

香港的會議經常同時使用粵語、普通話和英文，筆記可能是三語混雜。Gemini能夠處理這種混合輸入，你可以在指令中說明：「筆記是廣東話和英文混合，請整理成繁體中文輸出」。

### Prompt範本（快速摘要版）

> 以下是今天會議的粗略筆記。
> 請整理成一份可以直接發送給與會者的會議記錄，
> 格式包括：摘要、決議事項（附負責人）、跟進行動。
> 使用繁體中文，語氣正式。
> [貼上筆記]

### 本節重點

✅ 粗略筆記直接貼給Gemini即可，不需要先整理格式

✅ 在指令中說明需要的輸出格式（摘要、決議、行動項），輸出才能直接使用

✅ 三語混雜的筆記也能處理，記得說明希望以哪種語言輸出`},{id:"2.4",title:"2.4 社交媒體內容創作：IG、Facebook、LinkedIn一次搞定",content:`### 應用場景

社交媒體對香港企業和個人品牌越來越重要，但持續產出有質量的內容是一件非常消耗精力的事。Gemini可以幫你從一個核心想法，快速延伸出多個平台的內容版本。

### 操作步驟

**第一步：確定內容核心**

每一個社交媒體貼文，背後都應該有一個清晰的信息核心。在給Gemini指令前，先想清楚：你希望讀者看完這個貼文後，有什麼感受或採取什麼行動？

**第二步：一次生成多平台版本**

> 以下是一個內容核心想法：[描述你的想法]
> 請分別生成以下三個平台的版本：
> 1. Instagram：視覺感強，簡短有力，配上5個相關hashtag，字數：150字以內
> 2. Facebook：較詳盡，可以說故事，適合中年商務受眾，字數：250至350字
> 3. LinkedIn：專業語氣，強調商業價值，適合B2B受眾，字數：200至300字，開場第一句要有衝擊力
> 全部使用繁體中文。

**第三步：針對各平台調整**

收到初稿後，針對各平台的特性追問調整：Instagram需要更多emoji和視覺語言；LinkedIn需要更強的專業論點；Facebook可以更口語化，接近廣東話說話節奏。

### 香港社交媒體內容的特別考量

**語言選擇**：香港Instagram和Facebook以廣東話書面語最具親和力；LinkedIn則以標準書面中文或英文為主。可以在Prompt中指定：「Facebook版本請用香港廣東話書面語，語氣輕鬆」。

**敏感話題**：香港社交媒體對某些政治和社會話題較為敏感，商業帳號一般避免觸碰。如有需要，可以請Gemini「避免涉及政治敏感內容，保持正面中性語氣」。

### Prompt範本

> 我是一家香港本地咖啡品牌的社交媒體負責人。
> 內容核心：我們剛推出一款以香港茶餐廳為靈感的港式鴛鴦拿鐵，想借此強調品牌「融合本地文化」的理念。
> 請生成Instagram版本（150字內，附hashtag）和Facebook版本（300字，廣東話書面語，輕鬆親切）。

### 本節重點

✅ 一個核心想法，一次Prompt，同時生成多個平台的版本，大幅節省時間

✅ 香港社交媒體有語言選擇的考量，在指令中說明廣東話書面語，輸出更自然

✅ hashtag也可以交給Gemini生成，但發布前要確認各標籤的實際使用量`},{id:"2.5",title:"2.5 中英文互譯與多語言內容製作",content:`### 應用場景

香港是中英雙語的商業環境，大多數商務文件、合約、市場材料都需要同時提供中英文版本。傳統翻譯既貴又慢，Gemini提供了一個快速、質量不俗的替代方案——不只是逐字翻譯，而是能夠調整語氣和文化表達方式。

### 操作步驟

**基本翻譯指令**

最簡單的翻譯Prompt：

> 請將以下文字翻譯成[目標語言]，
> 保持原文的語氣和專業程度，
> 使用[香港商務／正式書面／輕鬆口語]風格。
> [貼上原文]

**進階：本地化而非直譯**

直接翻譯有時會產生奇怪的表達。告訴Gemini你需要的是「本地化」：

> 請將以下英文行銷文案翻譯成繁體中文，
> 不要逐字直譯，請用香港讀者習慣的表達方式，
> 保留原文的推廣語氣，讓中文讀者讀起來自然流暢。
> [貼上英文原文]

**雙語並排格式**

對於需要中英對照的文件（如雙語合約條款、雙語簡報），可以要求：

> 請將以下文字翻譯成英文，
> 並以表格格式輸出：左欄繁體中文，右欄英文翻譯。

### Gemini翻譯的限制

Gemini的翻譯質量對於一般商務用途已相當足夠，但有幾個需要注意的地方：

**法律文件**：合約、法庭文件等法律效力的翻譯，必須由持牌翻譯員或法律專業人士審核，不應完全依賴Gemini。

**高度技術性內容**：醫學、工程、金融衍生品等高度專業的術語翻譯，需要領域專家審核。

**品牌名稱和口號**：品牌翻譯涉及文化感知和市場定位，建議以Gemini的版本作為參考起點，再由熟悉品牌的人員最終確定。

### Prompt範本（行銷文案本地化）

> 你是一位熟悉香港市場的資深翻譯。
> 任務：將以下英文產品介紹翻譯成繁體中文，
> 面向香港消費者，語氣要有吸引力但不過分誇張，
> 符合香港讀者的閱讀習慣。
> [貼上英文原文]

### 本節重點

✅ 告訴Gemini需要「本地化」而非「直譯」，輸出會自然得多

✅ 法律和高度技術性文件的翻譯，必須由專業人員審核

✅ 雙語並排格式對於製作對照文件非常實用，在指令中說明即可`},{id:"2.6",title:"2.6 創意寫作與品牌故事：讓你的企業說出好故事",content:`### 應用場景

在資訊過載的時代，數字和功能清單已經無法打動人。能讓客戶記住你的，往往是一個好故事——創辦人的故事、品牌背後的信念、一個真實客戶的轉變歷程。

品牌故事寫作是許多企業主感到最棘手的寫作任務。它需要創意、情感，又要有商業目的。Gemini在這個領域的表現，比很多人預期的要好。

### 操作步驟

**第一步：提供你的真實素材**

品牌故事的力量來自真實。在給Gemini指令前，先準備以下素材：

• 創業的起點（為什麼做這件事？）
• 一個你印象最深刻的客戶故事
• 品牌最核心的一個信念或價值觀
• 你希望客戶讀完故事後有什麼感受

**第二步：選擇故事框架**

不同用途需要不同的故事框架：

**框架A（創辦人故事）**：起點困境 → 關鍵轉折 → 品牌誕生 → 現在的使命

**框架B（客戶成功故事）**：客戶面對的問題 → 嘗試過的解決方法 → 遇到你的產品/服務 → 改變後的生活

**框架C（品牌宣言）**：我們相信什麼 → 世界現在的問題 → 我們如何不同 → 我們邀請你一起

**第三步：給Gemini指令**

> 你是一位擅長品牌故事的文案寫手。
> 我的品牌：[品牌名稱和業務性質]
> 目標讀者：[描述你的理想客戶]
> 故事素材：[貼上你準備的真實素材]
> 故事框架：[選擇上面的A、B或C]
> 用途：[例：公司網站About Us頁面，約400字]
> 語氣：[溫暖真誠／專業有力／輕鬆親近]
> 請撰寫品牌故事，讓讀者讀完後感受到[你希望的情感反應]。

### 創意寫作的其他應用

除了品牌故事，Gemini在以下創意寫作場景同樣有用：

• **活動邀請函**：讓邀請文字有情感而不只是通知
• **週年紀念文章**：回顧公司發展歷程的感性文章
• **員工故事**：HR用來展示公司文化的人物介紹
• **產品說明的故事化改寫**：把功能清單變成使用場景描述

### 重要提示：真實性是品牌故事的生命線

Gemini能夠幫你把真實素材寫得更有文采，但它無法替你創造真實。如果你要求它「虛構一個感人的客戶故事」，輸出可能流暢，但一旦用於品牌傳播，被識破的風險和代價遠大於任何短期效益。

永遠以你的真實經歷和真實客戶作為素材基礎，讓Gemini負責語言的打磨。

### Prompt範本

> 你是一位香港本地品牌的文案顧問。
> 品牌背景：[一段話描述你的品牌]
> 真實故事素材：[描述一個真實的客戶案例或創業經歷]
> 用途：公司Instagram的品牌故事系列，每篇300字
> 語氣：溫暖真實，不過分煽情，符合香港讀者口味
> 請以「客戶成功故事」框架撰寫，結尾帶出品牌的核心價值。

### 本節重點

✅ 品牌故事的力量來自真實素材，Gemini的角色是語言打磨，不是虛構故事

✅ 三種故事框架（創辦人故事、客戶故事、品牌宣言）各有適用場景，選擇前先想清楚用途

✅ 故事寫作比一般文章更需要追問和迭代，通常需要2至3輪才能達到滿意效果`}]},{id:"chapter3",number:"第三章",title:"分析與研究",subtitle:"讓Gemini做你的智囊團",introduction:"分析工作是職場上最有價值、也最耗腦力的任務。讀一份年報、整理客戶回饋、研究競爭對手、審閱一份合約——每一件事都需要時間、專注力，以及一定的專業判斷。Gemini無法替你做判斷，但它可以幫你完成大部分的資料整理和初步分析工作，讓你把有限的時間和腦力，集中在真正需要人類判斷的部分。這一章涵蓋六個分析研究場景，從數據解讀到法律文件初審，每一節都告訴你如何把繁重的分析前期工作，交給Gemini處理。",sections:[{id:"3.1",title:"3.1 數據解讀入門：把Excel數字變成商業洞察",content:`### 應用場景

很多香港的中小企老闆和中層管理人員，手上都有一堆數字：銷售報告、網站流量、客戶數據、財務報表。但數字本身不會說話，把數字翻譯成商業決策的語言，才是真正有價值的工作。

Gemini不能直接讀取你的Excel檔案（除非使用Gemini Advanced的文件上傳功能），但你可以把數字貼入對話，讓它幫你解讀含義。

### 操作步驟

**第一步：整理數據為可貼上的格式**

從Excel複製數據時，直接選取範圍、複製，貼到Gemini輸入框，系統會自動識別為表格格式。或者用文字描述：「過去六個月的月銷售額分別是：1月港幣85萬、2月港幣72萬、3月港幣91萬……」

**第二步：明確說明你想知道什麼**

不要只貼數據說「分析一下」，要說清楚你的問題：

> 以下是我們過去12個月的銷售數據：
> [貼上數據]
> 請幫我：
> 1. 找出銷售最高和最低的月份，並分析可能原因
> 2. 計算整體增長率（和去年同期比較）
> 3. 找出任何異常的波動，並提出可能的解釋
> 4. 用3句話向我的老闆解釋這份數據的核心信息

**第三步：要求以商業語言輸出**

告訴Gemini你的讀者背景：「請用非技術性的語言解釋，讀者是沒有數據分析背景的公司高管」。

### 實用技巧：讓Gemini提問題

有時你不知道數據裡應該找什麼。試試這個Prompt：

> 以下是我們的銷售數據：[貼上數據]
> 你是一位商業分析師。
> 請告訴我：如果你是我的老闆，看到這份數據你會問什麼問題？
> 列出5個你最想知道答案的問題。

這個方法能幫你發現自己沒想到的分析角度。

### Prompt範本

> 你是一位商業數據分析師，擅長把數字轉化為商業建議。
> 以下是我們公司過去一季的數據：
> [貼上數據]
> 請以以下格式輸出分析報告：
> - 核心發現（3點，每點一句話）
> - 值得關注的異常（如有）
> - 給管理層的3個行動建議
> 語氣：簡潔專業，避免統計術語。

### 本節重點

✅ 數據分析最重要的第一步：說清楚你想問什麼，不要只說「分析一下」

✅ 要求Gemini以商業語言輸出，比數字堆砌更有實際價值

✅ 讓Gemini替你提問，是發現數據盲點的好方法`},{id:"3.2",title:"3.2 文件快速摘要：100頁報告10分鐘讀完",content:`### 應用場景

香港的商務人士每天面對大量需要閱讀的文件：行業報告、政府諮詢文件、客戶需求說明書、供應商合約、會議前的背景資料包……沒有人有時間把每份文件從頭讀到尾。

Gemini的摘要功能，讓你在幾分鐘內掌握一份長文件的核心內容，再決定哪些部分值得深入閱讀。

### 操作步驟

**方法A：貼上文字內容**

如果文件是文字格式（Word、網頁、電郵），直接複製文字貼入Gemini：

> 以下是一份行業報告的全文，請：
> 1. 用200字以內總結核心論點
> 2. 列出5個最重要的數據或發現
> 3. 指出對[我的行業/我的公司]最相關的部分
> 4. 列出任何需要進一步查核的聲明
> [貼上文件內容]

**方法B：上傳PDF（Gemini Advanced）**

使用Gemini Advanced時，點擊輸入框旁的附件圖標，直接上傳PDF文件，然後輸入問題。Gemini能夠讀取整份PDF並回答你的具體問題。

**方法C：分段摘要長文件**

如果文件太長無法一次貼入，可以分段處理：

> 這是一份長報告的第一部分，請先摘要這部分：[貼上]
> （稍後我會繼續貼入後面的部分，請等我全部貼完再做整體總結）

### 進階技巧：針對性閱讀，不是全部摘要

摘要的目的不只是「縮短」，而是「找出對你最重要的部分」。比通用摘要更有用的Prompt：

> 我是一位香港零售業的採購經理。
> 以下是一份關於全球供應鏈趨勢的報告。
> 請只提取對香港中小型零售商最相關的內容，
> 忽略與我無關的部分（如歐美特定法規）。
> [貼上報告]

### Prompt範本

> 請將以下文件摘要成一份給忙碌高管閱讀的簡報：
> - 執行摘要：100字以內
> - 3個關鍵發現（每點一句話）
> - 需要立即關注的事項（如有）
> - 建議下一步行動
> [貼上文件]

### 本節重點

✅ 告訴Gemini你的身份和行業背景，摘要會更有針對性，而非通用概述

✅ Gemini Advanced的PDF上傳功能，對於處理長篇報告特別有用

✅ 摘要只是第一步，讓Gemini告訴你「哪部分值得深讀」，才是最高效的用法`},{id:"3.3",title:"3.3 競爭對手研究：用Gemini建立競品情報系統",content:`### 應用場景

了解競爭對手是商業決策的基礎，但系統性的競品研究往往費時費力。Gemini可以幫你快速整理公開資訊、分析競品的定位策略，並找出你的差異化機會。

重要提醒：Gemini的知識有截止日期，對於需要即時更新的競品資訊（如最新定價、近期推廣活動），應以Gemini的分析框架為起點，再用實際搜尋補充最新資料。

### 操作步驟

**第一步：定義你想了解的競品維度**

競品研究可以很廣，也可以很聚焦。在Prompt中說清楚你最想了解哪個方面：定價策略、目標客群、產品功能差異、市場定位、品牌語氣，還是全面比較？

**第二步：提供你已掌握的資料**

把你從官網、社交媒體、新聞稿收集到的競品資料貼給Gemini，讓它幫你整理和分析，而不是讓它憑記憶猜測：

> 以下是三家競爭對手的官方簡介和產品資料，我自己整理的，請幫我分析：
> [貼上資料]
> 分析角度：
> 1. 各家的核心定位是什麼？
> 2. 他們針對的是哪類客戶？
> 3. 他們的差異化賣點是什麼？
> 4. 我們與他們相比，有哪些潛在的競爭優勢和弱點？

**第三步：要求輸出結構化報告**

競品分析的輸出最好是可以分享給團隊的格式：

> 請以表格格式輸出競品比較，欄位包括：公司名稱／目標客群／核心賣點／定價策略／弱點／我們的機會

### 香港市場的特別考量

香港競品研究有幾個本地特性值得注意：

**中港競爭格局**：很多香港行業同時面對本地品牌和來自內地的競爭者，在Prompt中說明「包括分析來自內地進入香港市場的競爭者」。

**語言版本差異**：競品的英文和中文市場推廣策略往往不同，可以要求Gemini分別分析。

### Prompt範本

> 你是一位市場策略顧問，專門為香港中小企提供競品分析。
> 我的業務：[一句話描述]
> 主要競爭對手：[列出3至5家，附上基本資料或官網]
> 請提供：
> 1. 競品定位矩陣（用文字描述各家的市場位置）
> 2. 各競品的核心優勢與弱點（表格格式）
> 3. 我們最有機會切入的差異化方向（3個建議）

### 本節重點

✅ 提供你自己收集的競品資料給Gemini分析，比讓它憑空生成更準確

✅ 競品研究最有價值的產出是「我們的差異化機會」，記得在Prompt中明確要求這一點

✅ 即時的競品定價和推廣資訊，需要用搜尋補充，不能只靠Gemini`},{id:"3.4",title:"3.4 問卷與客戶回饋分析：從意見中找出行動方向",content:`### 應用場景

很多公司花了時間收集客戶回饋，但收到一百份問卷之後，卻不知道怎麼從中提煉出有用的洞察。逐份閱讀太費時，簡單計算評分又太表面。

Gemini可以幫你從大量的文字回饋中，快速找出反覆出現的主題、情緒傾向和具體改善建議。

### 操作步驟

**第一步：整理回饋為可分析的格式**

把客戶的文字回饋（開放式問題的答案、評論留言、電郵投訴等）整理成清單格式，一條一條貼入Gemini。數量建議不超過50至80條（文字量太大可能超出輸入限制），可以分批處理。

**第二步：說明你的分析目標**

> 以下是我們最近收到的客戶回饋（共[X]條）：
> [貼上回饋清單]
> 請幫我：
> 1. 找出最常被提及的正面評價（前3項）
> 2. 找出最常被提及的投訴或問題（前3項）
> 3. 找出任何出乎意料或值得特別關注的意見
> 4. 給出3個具體的改善建議，有直接對應的客戶原話支撐

**第三步：情感分析**

如果你想了解整體客戶情緒：

> 請對以上回饋做情感分析：
> - 正面意見的比例約是多少？
> - 負面意見最集中在哪個方面？
> - 整體客戶滿意度的關鍵驅動因素是什麼？

### 進階用法：競品評價分析

把競爭對手在Google Maps、Facebook、OpenRice等平台的用戶評論收集起來，貼給Gemini分析：

> 以下是競爭對手的用戶評論，
> 請找出他們最常被投訴的問題，
> 這些正是我們可以改善並作為差異化賣點的機會。
> [貼上評論]

### Prompt範本

> 你是一位客戶體驗分析師。
> 以下是我們最近一個月收到的客戶回饋：
> [貼上回饋]
> 請輸出：
> - 3個客戶最欣賞的地方（附原話引用）
> - 3個最需要改善的問題（附原話引用）
> - 1個我們可能忽略但值得關注的洞察
> - 給管理層的行動建議（3點，可立即執行）

### 本節重點

✅ 回饋分析要求Gemini「附原話引用」，讓建議有說服力，而非只是AI的概括

✅ 分析競品的用戶評論，是找到自身差異化機會的低成本方法

✅ 文字回饋太多時分批處理，最後要求Gemini做跨批次的整體總結`},{id:"3.5",title:"3.5 財務報告解讀：看懂年報、季報不再是難事",content:`### 應用場景

對於沒有財務背景的香港商務人士，閱讀上市公司年報或競爭對手的財務公告，往往感覺像在看天書。Gemini能夠把財務數據和術語，翻譯成普通人能理解的商業語言。

**重要聲明**：Gemini提供的財務解讀僅供參考和學習，不構成任何投資建議。涉及重大投資或商業決策的財務分析，必須諮詢持牌財務顧問。

### 操作步驟

**第一步：提取你想分析的財務數據**

從年報或季報中複製你想分析的表格或段落，貼入Gemini。可以是損益表、資產負債表、現金流量表，或管理層討論部分。

**第二步：說明你的背景和目的**

> 我沒有財務專業背景。以下是[公司名稱]的[年報/季報]中的[損益表/某段管理層討論]：
> [貼上內容]
> 請用簡單語言解釋：
> 1. 這份報告的整體健康狀況如何？
> 2. 最值得關注的3個數字是什麼？為什麼重要？
> 3. 有沒有任何「紅燈」需要特別警惕？
> 4. 這家公司相比行業一般水平，表現如何？

**第三步：理解財務術語**

遇到不懂的術語，直接問：

> 年報中提到「EBITDA」和「資本開支（Capex）」，
> 請用簡單例子解釋這兩個概念，
> 並說明它們對於評估這家公司的重要性。

### 實用場景：分析供應商或合作夥伴的財務狀況

除了分析上市公司，香港商務人士也可以用Gemini評估業務夥伴的公開財務資料：

> 我正在考慮與一家供應商建立長期合作。
> 以下是他們公開的財務摘要：[貼上資料]
> 請幫我評估：
> 1. 這家公司的財務穩健程度如何？
> 2. 有沒有跡象顯示他們可能面臨流動資金問題？
> 3. 作為長期供應商，我需要特別注意哪些財務風險？

### Prompt範本

> 你是一位財務分析師，擅長向非財務人員解釋報表。
> 以下是一份財務報告的摘要：
> [貼上內容]
> 請用非專業語言解釋：
> - 公司的盈利能力（好不好？為什麼？）
> - 現金狀況（有沒有流動資金壓力？）
> - 最大的財務風險是什麼？
> - 用一句話總結這份報告的整體印象

### 本節重點

✅ 說明「沒有財務背景」，Gemini的解釋會更平易近人，不堆砌術語

✅ 要求Gemini指出「紅燈」，比只要求摘要更有實際決策價值

✅ 財務解讀僅供參考，重大決策前必須諮詢持牌財務顧問`},{id:"3.6",title:"3.6 合約與法律文件初審：省時省錢的第一道把關",content:`### 應用場景

在香港，商業合約、租約、服務協議、僱傭合約，是商務人士最常需要閱讀但最難讀懂的文件類型。聘請律師逐份審閱費用不菲，但直接簽署未讀懂的合約風險更大。

Gemini可以作為你的「第一道把關」——幫你用普通語言理解合約的核心條款，找出可能存在的問題條款，讓你帶著清晰的問題再去諮詢律師，節省法律費用。

**重要聲明**：Gemini的分析不能替代法律意見。任何重要合約在簽署前，必須諮詢持牌律師。Gemini的作用是幫你「看懂」，不是替你「確認合法性」。

### 操作步驟

**第一步：分段貼入合約內容**

合約通常篇幅較長，建議分段處理，每次貼入相關條款：

> 以下是一份[服務協議/租約/僱傭合約]的[第X條至第Y條]，
> 請用簡單語言解釋這些條款的實際含義：
> [貼上條款]

**第二步：要求找出不利條款**

這是最有價值的用法：

> 以下是合約的全文（或相關部分）：
> [貼上內容]
> 我是[買家/租客/僱員]。
> 請找出：
> 1. 對我不利或風險較高的條款
> 2. 任何含糊不清、可能引起爭議的措辭
> 3. 通常在同類合約中應有但此份合約缺少的保障條款
> 4. 我在簽署前應該向對方提出的問題

**第三步：比較兩份合約的差異**

如果你有兩個版本的合約（例如對方的初稿和你修改後的版本），可以要求Gemini比較差異：

> 以下是同一份合約的兩個版本，
> 請找出所有差異，並說明每項差異對我的實際影響：
> 版本A：[貼上]
> 版本B：[貼上]

### 香港常見合約類型的特別提示

**租約**：重點關注租期、按金條款、裝修限制、提前終止條款、業主進入權利。

**服務協議**：重點關注付款條件、知識產權歸屬、保密條款、服務範圍定義、終止條款。

**僱傭合約**：重點關注試用期條款、競業禁止條款、保密義務、裁員補償計算方式。

在Prompt中說明合約類型，Gemini會更聚焦在相關風險點上。

### Prompt範本

> 你是一位熟悉香港商業法律的顧問（但你的分析不構成法律意見）。
> 以下是一份[合約類型]，我是[甲方/乙方/租客/僱員]：
> [貼上合約內容]
> 請：
> 1. 用普通話解釋每個主要條款的實際含義
> 2. 標出任何對我可能不利的條款，並說明為什麼
> 3. 列出我在簽署前應向律師確認的問題清單

### 本節重點

✅ 合約審閱最有價值的用法：要求Gemini找出「對我不利的條款」和「我應該問律師的問題」

✅ Gemini幫你「看懂」，律師幫你「確認」，兩者分工合作可以節省法律費用

✅ 輸入合約前，先匿名化所有個人識別資料（姓名改為甲乙方、地址改為「香港某處」）`}]}],dv=[{id:"chapter4",number:"第四章",title:"商業應用實戰",subtitle:"Gemini在辦公室的日常",introduction:"前三章處理的是具體的文字和分析任務。這一章要講的，是更宏觀的商業應用場景——從項目規劃到求職準備，從客服回覆到產品文件，這些都是香港職場每天真實發生的工作。Gemini在這些場景中的角色，不只是「幫你寫文字」，而是幫你「把模糊的想法變成可執行的計劃」、「把複雜的情況整理成清晰的決策」。這一章的每一節，都有可以立即帶回工作中使用的Prompt模板。",sections:[{id:"4.1",title:"4.1 項目規劃與任務拆解：把大計劃變成可執行的步驟",content:`### 應用場景

有一個大目標，但不知道怎麼拆解成具體行動步驟——這是很多香港打工仔和老闆共同的困境。「我們要在三個月內推出新產品線」、「我要在半年內把公司的社交媒體做起來」——這些目標聽起來清晰，但一旦要落實到每週的工作安排，往往不知道從哪裡開始。

Gemini是一個非常好的項目規劃助手，它能幫你把大目標拆解成具體任務、估算時間、識別依賴關係，並生成可以直接使用的工作計劃。

### 操作步驟

**第一步：描述你的目標和限制條件**

清晰的項目計劃需要清晰的起點。在Prompt中說明：

• 最終目標是什麼（具體、可衡量）
• 截止日期
• 可用資源（人手、預算）
• 已知的限制或風險

**第二步：要求Gemini做任務拆解**

> 你是一位項目管理顧問。
> 目標：[描述你的最終目標]
> 截止日期：[日期]
> 團隊：[人數和角色]
> 主要限制：[資源、技術或時間限制]
> 請：
> 1. 將目標拆解為主要階段（3至5個）
> 2. 每個階段列出具體任務
> 3. 估算每項任務所需時間
> 4. 識別哪些任務必須先完成才能開始下一步（依賴關係）
> 5. 指出最高風險的環節

**第三步：生成工作計劃表**

> 請將以上任務整理成一份按週排列的工作計劃表，
> 格式：第X週 | 主要任務 | 負責人 | 預期完成標準

**第四步：識別潛在問題**

> 如果你是這個項目的顧問，
> 你認為最可能導致延誤或失敗的三個風險是什麼？
> 每個風險附上一個應對方案。

### 實用技巧：用Gemini做「反向規劃」

從截止日期倒推，比從今天開始規劃更有效：

> 我的項目必須在[日期]完成。
> 今天是[日期]。
> 以下是所有需要完成的任務：[列出清單]
> 請從截止日期倒推，制定每個任務的最遲開始日期，
> 並標出哪些任務目前已經「來不及」按理想節奏進行。

### Prompt範本

> 你是一位擅長香港中小企項目管理的顧問。
> 項目：[一句話描述]
> 目標完成日期：[日期]
> 現有資源：[人手／預算／工具]
> 已完成的準備工作：[如有]
> 請輸出：
> - 項目分階段計劃（表格格式）
> - 每週工作重點（首四週）
> - 前三大風險及應對建議

### 本節重點

✅ 給Gemini的項目資訊越具體（截止日、人手、限制），計劃越實用

✅ 「反向規劃」——從截止日倒推——是發現時間壓力的最快方法

✅ 要求Gemini識別最高風險環節，比只要求列任務更有決策價值`},{id:"4.2",title:"4.2 求職與面試準備：CV優化、面試問答一條龍",content:`### 應用場景

香港的就業市場競爭激烈，一份CV往往要在幾秒內吸引招聘人員的注意。面試準備更是許多人的弱項——明明有實力，一旦面對面試官就說不清楚。Gemini可以成為你的求職備戰夥伴，從CV到面試，全程輔助。

### 操作步驟

**CV優化**

> 以下是我目前的CV內容：
> [貼上CV文字]
> 目標職位：[職位名稱和公司]
> 職位描述：[貼上招聘廣告的JD]
> 請：
> 1. 指出CV中哪些部分最弱，需要改善
> 2. 建議如何調整措辭，讓我的經驗更貼近這個職位的要求
> 3. 找出JD中的關鍵詞，確認這些詞有沒有在我的CV中出現
> 4. 重寫我的個人簡介（Personal Statement），突出與這個職位最相關的優勢

**面試問題準備**

> 我即將面試[職位]，公司是[行業]。
> 職位描述：[貼上JD]
> 請列出：
> 1. 這個職位最可能被問到的10條面試問題
> 2. 針對每條問題，建議一個使用STAR框架（情況Situation、任務Task、行動Action、結果Result）的回答結構
> 3. 兩至三條我應該反問面試官的好問題

**模擬面試**

> 請扮演一位[行業]公司的[職位]面試官，
> 對我進行模擬面試。
> 每次只問一條問題，等我回答後，
> 給我具體的回饋（哪裡說得好、哪裡需要改善），
> 然後問下一條。
> 我面試的職位是：[職位描述]

### 香港求職的特別考量

**中英雙語CV**：香港很多公司要求中英雙語CV，可以要求Gemini分別優化，並確保兩個版本的重點一致但語言風格適合各自的讀者。

**廣東話面試**：如果面試以廣東話進行，可以要求Gemini用廣東話書面語起草回答，再練習口語表達。

**薪酬談判**：求職過程中的薪酬談判也可以讓Gemini協助準備，說明你的期望薪酬和理由，讓它幫你整理成有說服力的表達方式。

### Prompt範本（面試問答準備）

> 你是一位香港資深獵頭顧問。
> 我正在申請[公司名稱]的[職位]。
> 我的背景：[簡述工作經驗]
> 職位描述：[貼上JD]
> 請幫我準備：
> 1. 這間公司和職位最可能問的5條難題
> 2. 每條的建議回答方向（用STAR框架）
> 3. 如何回答「你為什麼離開現在的工作？」這類敏感問題

### 本節重點

✅ CV優化時，把目標JD一同貼給Gemini，讓它對齊職位關鍵詞

✅ 模擬面試是Gemini最被低估的求職用途，可以練習到真正面試前都有信心

✅ 薪酬談判的措辭也可以讓Gemini協助準備，避免在緊張時說錯話`},{id:"4.3",title:"4.3 提案與Pitch撰寫：讓老闆或客戶說Yes",content:`### 應用場景

無論是向老闆申請預算、向客戶提出方案，還是向投資者介紹生意，說服別人的能力是職場最核心的技能之一。好的提案不只是資訊傳遞，而是引導讀者從「不確定」走向「同意」的敘事過程。

Gemini在提案寫作上的優勢，是它能夠幫你把零散的想法，組織成有說服力的論述結構。

### 操作步驟

**第一步：確定提案的核心主張**

一份好提案只有一個核心主張：「你應該批准這件事，因為……」在給Gemini指令之前，先用一句話說清楚你的核心主張。

**第二步：提供說服對方所需的所有素材**

> 我需要撰寫一份[類型]提案，說服[對象]。
> 我的核心主張：[一句話]
> 我的優勢論據：[列出你認為最有力的理由]
> 可能的反對意見：[對方最可能提出的疑慮]
> 關鍵數字：[支撐你主張的具體數據]
> 希望對方採取的行動：[具體、明確]
> 請幫我組織成一份有說服力的提案，
> 結構：問題→解決方案→效益→行動呼籲

**第三步：預設反對意見**

最強的提案，是主動回應讀者的疑慮：

> 請站在[對方]的立場，
> 列出他們看完這份提案後最可能提出的5個質疑，
> 並為每個質疑提供一個有說服力的回應。

### 向香港老闆提案的文化考量

香港商業文化有幾個特點值得在提案中考慮：

**數字優先**：香港管理層普遍重視ROI和具體數字，提案中的「預期效益」必須盡量量化，避免停留在「提升效率」等模糊表述。

**風險敏感**：在提案中主動提出風險和應對方案，比讓對方自己發現問題更能建立信任。

**執行可行性**：香港職場重視「即時落地」，提案除了說明「為什麼做」，也要清楚說明「怎麼做」和「誰來做」。

### Prompt範本

> 你是一位擅長商業提案的顧問。
> 提案對象：[老闆／客戶／董事會，附上背景]
> 提案目的：[你希望對方批准或同意什麼]
> 核心論據：[你最有力的理由，附具體數字]
> 預算或資源需求：[如有]
> 潛在疑慮：[對方最可能擔心的問題]
> 請撰寫一份500字以內的提案摘要，
> 語氣：自信但不強硬，數字清晰，結尾有明確行動呼籲。

### 本節重點

✅ 提案前先想清楚「核心主張一句話」，這是整份提案的骨幹

✅ 主動預設反對意見並回應，是提高提案成功率最有效的技巧之一

✅ 香港管理層重視ROI和具體數字，提案中所有效益必須盡量量化`},{id:"4.4",title:"4.4 客服回覆模板庫：快速建立專業回應系統",content:`### 應用場景

香港的客服工作壓力很大：客戶期望快速回應、問題類型重複但細節各異、語氣拿捏稍有不當就可能激化投訴。用Gemini建立一套標準化的客服回覆模板庫，可以大幅提升回應速度和質量一致性。

### 操作步驟

**第一步：盤點你最常遇到的客服場景**

在給Gemini任何指令之前，先列出你的業務中最常見的10至15種客戶情況（投訴、退款要求、查詢、預約更改、延誤通知等）。

**第二步：批量生成模板**

> 你是一位香港[行業]公司的客服主任，
> 擅長用專業友善的語氣處理客戶問題。
> 請為以下場景各生成一個回覆模板：
> 1. 客戶投訴產品有缺陷，要求退款
> 2. 客戶查詢訂單狀態，但系統顯示延誤
> 3. 客戶對服務不滿，要求見負責人
> 4. 客戶要求超出服務範圍的特殊要求，需要婉拒
> 每個模板：
> - 繁體中文
> - 開場先感謝或理解客戶感受
> - 清晰說明下一步
> - 結尾提供進一步聯繫方式
> - 字數150至200字

**第三步：針對特定情況定制**

模板生成後，遇到特別複雜或情緒激動的客戶，可以即時向Gemini求助：

> 一位客戶非常憤怒，在Facebook公開投訴我們的送貨延誤，
> 言辭激烈。以下是他的留言：[貼上客戶留言]
> 請幫我起草一個公開回覆，
> 要求：承認問題、真誠道歉、提出解決方案、
> 避免引發更多爭議、語氣要讓旁觀者看到我們的誠意。

### 建立可重複使用的模板庫

把Gemini生成的優質模板，整理到一個Google Docs文件中，建立屬於你公司的客服回覆庫。格式建議：

• 場景分類（投訴類、查詢類、特殊要求類）
• 每個場景：標準模板＋使用說明＋修改提示
• 定期更新：遇到新的客服場景，及時補充

這個模板庫一旦建立，新入職的客服人員也能快速上手，確保回覆質量的一致性。

### Prompt範本

> 你是香港一家[行業]公司的資深客服主任。
> 情境：[描述客戶的具體情況和訴求]
> 客戶情緒：[平靜／不滿／激動]
> 我們的立場：[我們能做到什麼、不能做到什麼]
> 請起草一個回覆，要求：
> - 先表示理解客戶的感受
> - 清楚說明我們的處理方式
> - 結尾有明確的下一步
> - 語氣專業但有人情味
> - 繁體中文，150字以內

### 本節重點

✅ 批量生成模板比逐個生成更有效率，一次過列出所有常見場景

✅ 公開投訴（如社交媒體留言）的回覆，需要特別注意旁觀者觀感，不只是回應投訴者

✅ 把優質模板整理成Google Docs模板庫，讓整個團隊受益`},{id:"4.5",title:"4.5 產品需求文件（PRD）：初創公司的實戰範例",content:`### 應用場景

對於香港的初創公司和產品團隊，撰寫產品需求文件（Product Requirements Document，PRD）是從「想法」走向「開發」的關鍵步驟。一份清晰的PRD，能讓開發人員、設計師和業務團隊對產品方向達成共識，避免後期的方向混亂和返工。

### 操作步驟

**第一步：整理產品想法**

在給Gemini指令之前，把你的產品想法用最粗略的方式寫出來，不需要有結構，只要把腦袋裡的東西倒出來。

**第二步：讓Gemini生成PRD框架**

> 你是一位有豐富香港科技初創經驗的產品經理。
> 我有以下產品想法（粗略筆記）：
> [貼上你的原始想法]
> 請幫我整理成一份基本的產品需求文件，包含：
> 1. 產品概述（一段話）
> 2. 目標用戶（Persona描述）
> 3. 核心用戶需求（按優先級排列）
> 4. 主要功能列表（MVP版本）
> 5. 非功能性需求（速度、安全、語言支援等）
> 6. 成功指標（如何衡量這個產品是否成功）
> 7. 已知風險和限制

**第三步：細化用戶故事**

> 請將以上PRD中的[某個功能]，
> 拆解為具體的用戶故事，格式：
> 「作為一個[用戶類型]，我希望能[做某件事]，以便[達到某個目標]。」
> 每個用戶故事附上驗收標準（Acceptance Criteria）：
> 「當[條件]時，系統應該[行為]。」

### 香港初創的PRD特別考量

**多語言需求**：香港產品通常需要支援繁體中文、英文，有時還需要簡體中文，在PRD中需要明確說明語言支援範圍。

**法規合規**：涉及金融、醫療、個人資料的產品，PRD需要包含香港相關法規的合規要求（如《個人資料（私隱）條例》）。

**本地支付整合**：香港用戶習慣的支付方式（如八達通、PayMe、微信支付香港版、AlipayHK）需要在技術需求中明確列出。

### Prompt範本

> 你是一位香港科技初創的資深產品經理。
> 產品想法：[描述你的產品]
> 目標市場：香港用戶，[進一步描述目標群體]
> 主要競爭對手：[如有]
> 開發資源：[團隊規模和技術棧，如知道]
> 請生成一份MVP版本的PRD，
> 重點突出最核心的三個功能，
> 並說明每個功能對用戶的具體價值。

### 本節重點

✅ 把粗略的產品想法直接貼給Gemini，它能幫你整理成有結構的PRD框架

✅ 用戶故事的格式（「作為…我希望…以便…」）能幫助團隊對齊理解，減少歧義

✅ 香港產品的PRD要特別注意多語言支援、本地支付方式和相關法規合規要求`},{id:"4.6",title:"4.6 決策框架與方案評估：用Gemini輔助重要商業決定",content:`### 應用場景

面對重要的商業決策——是否進入新市場、是否聘請某位候選人、是否更換供應商、是否推出某個新產品——往往感覺資訊太多、考慮因素太複雜、不知道怎麼系統地做決定。

Gemini可以幫你把複雜的決策場景，整理成清晰的框架，確保你考慮了所有重要因素，而不是靠直覺或情緒做決定。

### 操作步驟

**方法一：優缺點分析（適合相對簡單的決策）**

> 我正在考慮[決策]。
> 以下是我掌握的相關資訊：[描述情況]
> 請幫我做一個全面的優缺點分析，
> 並特別指出：
> 1. 我可能忽略的重要考慮因素
> 2. 這個決策的最大風險是什麼
> 3. 有沒有我沒有考慮過的第三個選項

**方法二：加權評分矩陣（適合多方案比較）**

> 我有三個方案需要比較：
> 方案A：[描述]
> 方案B：[描述]
> 方案C：[描述]
> 最重要的評估標準是：
> 1. 成本（權重：30%）
> 2. 執行難度（權重：25%）
> 3. 預期效益（權重：30%）
> 4. 風險程度（權重：15%）
> 請建立一個加權評分矩陣，
> 為每個方案在每個標準上評分（1至10分），
> 計算加權總分，並給出推薦意見。

**方法三：第二意見測試**

> 我傾向於選擇[某個決策]。
> 請扮演一個持相反意見的資深顧問，
> 告訴我為什麼這個決定可能是錯的，
> 以及我應該考慮哪些我可能忽略的風險。

### 決策輔助的使用邊界

Gemini能夠幫你整理思路、提供框架、指出盲點，但最終的決策必須由你做出。幾個重要的使用邊界：

**Gemini不了解你的完整情況**：它只知道你告訴它的資訊。如果有重要的背景資訊（人際關係、行業潛規則、過去的失敗經歷），要主動告訴它。

**Gemini沒有情感和直覺**：有些決策涉及價值觀和長期願景，這些不能完全依賴邏輯框架。Gemini能幫你看清楚利弊，但「你最終想要什麼」這個問題，只有你自己能回答。

**數字是估算，不是預測**：Gemini在加權評分中給出的分數，是基於你提供的描述做出的判斷，不是客觀測量。把它當作思考工具，而非最終答案。

### Prompt範本

> 你是一位香港資深商業顧問，擅長幫助中小企做複雜的商業決策。
> 決策情境：[描述你面對的決策]
> 目前傾向：[你傾向哪個選項，如有]
> 最重要的考慮因素：[列出你認為最重要的2至3個因素]
> 時間壓力：[需要在什麼時候做決定]
> 請：
> 1. 整理這個決策的核心考慮框架
> 2. 指出我可能忽略的重要因素
> 3. 給出你的推薦意見，並說明理由
> 4. 如果你推薦的方案出現哪些情況，建議重新考慮

### 本節重點

✅ 三種決策工具各有適用場景：優缺點分析（簡單決策）、加權矩陣（多方案比較）、第二意見測試（避免偏見）

✅ 「第二意見測試」——讓Gemini扮演反對者——是最能幫你發現盲點的方法

✅ Gemini幫你整理思路，但最終決策責任在你，特別是涉及人和價值觀的決定`}]},{id:"chapter5",number:"第五章",title:"進階技巧",subtitle:"解鎖Gemini的隱藏能力",introduction:"前四章介紹的，是Gemini最常見的商務應用場景。這一章要講的，是大多數用戶從未探索過的進階功能。學會這些技巧，你使用Gemini的方式會發生質的改變——從「有問題才用一下」，進化到「把Gemini真正嵌入日常工作流程」。這一章的每一節，都是一個能夠持續為你創造效率優勢的技能。",sections:[{id:"5.1",title:"5.1 Prompt Engineering進階：角色扮演、思維鏈與結構化輸出",content:`### 應用場景

第一章介紹了RSIA框架，奠定了寫好Prompt的基礎。這一節進入下一個層次：三種讓Gemini輸出品質大幅提升的進階Prompt技巧。掌握這三種技巧，你能處理的任務複雜程度會完全不同。

### 技巧一：角色扮演（Role-playing）——讓Gemini成為你需要的專家

第一章已介紹基本的角色設定。進階用法是給予更豐富、更具體的角色身份，讓Gemini的回應具備真正的專業深度。

**基礎角色設定（初階）：**
> 你是一位行銷顧問。

**進階角色設定：**
> 你是一位有十五年經驗的香港本地行銷顧問，
> 專門服務中小企，熟悉香港消費者心理和本地媒體生態。
> 你的風格是直接、務實，給的建議都能在有限預算內執行。
> 你說話不用行業術語，因為你的客戶大多數不是行銷專業出身。

角色描述越具體，Gemini回應的針對性就越強。可以描述的維度包括：工作年資、專業背景、服務對象、溝通風格、地區經驗。

### 技巧二：思維鏈（Chain of Thought）——讓Gemini一步步思考

對於複雜問題，直接要求Gemini給答案，往往得到一個跳過推理過程的草率回應。加入「逐步思考」的指令，能顯著提升分析深度。

**沒有思維鏈：**
> 我應該把新店開在銅鑼灣還是旺角？

**加入思維鏈：**
> 我應該把新店開在銅鑼灣還是旺角？
> 在給出建議之前，請先逐步分析：
> 1. 兩個地區的目標客群特徵有何不同？
> 2. 兩個地區的租金水平和人流質素如何比較？
> 3. 我的業務類型（[說明業務]）更適合哪種消費場景？
> 4. 競爭對手在兩個地區的佈局如何？
> 分析完以上四點後，再給出你的建議和理由。

思維鏈特別適合用於：商業決策分析、複雜問題診斷、多因素評估場景。

### 技巧三：結構化輸出——要求Gemini以你需要的格式回應

結構化輸出讓Gemini的回應可以直接用於工作，不需要再重新整理格式。

**常用的結構化輸出格式：**

**表格格式：**
> 請以表格格式輸出，欄位為：[欄位名稱]，每行代表一個[項目]。

**JSON格式（適合需要導入系統的資料）：**
> 請以JSON格式輸出以下資料，欄位包括：name、description、priority、deadline。

**Markdown格式（適合直接放入文件）：**
> 請以Markdown格式輸出，使用二級標題（##）區分各部分，重點用粗體標注，條列用連字號（-）。

**固定結構格式：**
> 請以以下固定格式輸出，不要偏離這個結構：
> 【問題】：
> 【分析】：
> 【建議】：
> 【風險】：
> 【下一步】：

### 組合使用：三技巧合一的終極Prompt

> [角色] 你是一位有十年香港零售業經驗的商業顧問，熟悉本地消費趨勢，說話直接務實。
> [思維鏈] 在給出建議之前，請先分析：
> 1. 問題的根本原因
> 2. 三個可能的解決方向
> 3. 每個方向的利弊
> [結構化輸出] 最後以以下格式輸出你的建議：
> 【核心問題】：
> 【推薦方案】：
> 【執行步驟】：
> 【潛在風險】：
> 【成功指標】：
> 我的情況：[描述你的問題]

### 本節重點

✅ 進階角色設定要包含：年資、地區經驗、服務對象、溝通風格

✅ 思維鏈指令（「先分析…再給建議」）能顯著提升複雜問題的回應質量

✅ 固定結構輸出格式讓Gemini的回應可以直接使用，省去整理時間`},{id:"5.2",title:"5.2 Gemini Gems：建立你的專屬AI助理",content:`### 應用場景

你有沒有試過每次打開Gemini，都要重新解釋「我是香港一家XX公司的XX職位，我的寫作風格是……我的客戶是……」這段背景？這個重複工作讓人疲倦，也讓效率大打折扣。

Gemini Gems是解決這個問題的功能——它讓你建立一個「預設了特定角色和背景」的專屬AI助理，每次開啟就自動記得你的設定，不需要重複解釋。

**注意：Gems功能需要Gemini Advanced。**

### 什麼是Gem？

Gem是一個定制化的Gemini對話環境。你可以預設：

• Gemini的角色和專業背景
• 它應該了解的關於你的重要背景資訊
• 它的回應風格和語言偏好
• 它在每次對話中應該遵循的特定規則

建立Gem後，每次點擊進入，Gemini就自動以這個設定運作，不需要每次重新說明。

### 操作步驟

**第一步：進入Gems管理頁面**

在Gemini介面左側欄，找到「Gems」選項，點擊「建立新Gem」（Create a new Gem）。

**第二步：填寫Gem的設定**

Gem設定頁面包含兩個主要部分：名稱和指示（Instructions）。

在「指示」欄中，輸入你希望這個Gem記住的所有背景資訊。以下是一個香港商務用途的Gem指示範本：

> 你是我的商務寫作助理，專門服務香港的中小企業。
> 關於我：
> - 我是[職位]，公司是[業務描述]
> - 我的主要工作語言是繁體中文，偶爾需要英文輸出
> - 我的客戶主要是[客群描述]
> 你的工作風格：
> - 回應使用繁體中文，語氣專業但不過分正式
> - 所有建議必須考慮香港本地的商業環境
> - 如果我的指令不夠清晰，主動問我補充資訊
> - 生成電郵或文件時，字數要精簡，香港商務人士沒時間讀長文
> 我常用的輸出格式：
> - 電郵：主旨行＋正文＋結尾行動呼籲
> - 報告：執行摘要＋核心發現＋建議行動

**第三步：測試和優化**

建立Gem後，用幾個真實的工作任務測試它，看看回應是否符合你的期望。如有不足，回到設定頁面調整指示。Gem的指示是可以隨時更新的。

### 幾個實用的Gem建立方向

**客服回覆Gem** 預設你公司的業務背景、常見問題清單、回覆語氣規範，讓客服人員每次處理投訴都有一致的輔助工具。

**內容創作Gem** 預設你的品牌語氣、目標受眾、禁用詞彙、常用平台的字數要求，生成社交媒體內容時不需要每次重新設定。

**分析報告Gem** 預設你的行業背景、常用分析框架、報告格式要求，讓每次生成的分析報告都符合你的標準。

**求職備戰Gem** 預設你的完整工作經歷、技能和成就，之後任何求職相關任務（CV調整、面試準備）都能快速調用你的完整背景。

### 本節重點

✅ Gems讓你免除每次重複輸入背景資訊的工夫，是重度Gemini用戶必用的功能

✅ Gem指示越詳細，它的表現越符合你的期望，值得花15分鐘好好設定

✅ 針對不同用途建立不同的Gem（客服、內容、分析），比一個萬用Gem更有效`},{id:"5.3",title:"5.3 上傳文件、圖片與PDF：多模態能力全攻略",content:`### 應用場景

Gemini不只能讀文字，它還能「看」——分析圖片、讀取PDF、解讀試算表。這個「多模態」能力，讓它能夠處理的任務範圍大幅擴展，超出很多用戶的想像。

### 圖片分析

**可以上傳圖片讓Gemini做的事：**

**分析產品或設計：**
> [上傳產品圖片]
> 請分析這個產品的設計，
> 從香港消費者的角度評估：
> 外觀吸引力、功能清晰度、包裝資訊是否足夠，
> 以及與同類產品相比有什麼差異化。

**分析競品的社交媒體貼文：**
> [上傳競品Instagram截圖]
> 請分析這個品牌的社交媒體風格：
> 視覺設計語言、文案語氣、hashtag策略，
> 以及他們的目標受眾定位。

**解讀圖表和數據視覺化：**
> [上傳報告中的圖表截圖]
> 請解釋這個圖表顯示的趨勢，
> 以及對我的業務有什麼啟示。

**分析名片或文件截圖：** 上傳名片圖片，讓Gemini提取聯絡資訊；上傳白板照片，讓它整理成結構化文字記錄。

### PDF文件分析

使用Gemini Advanced，可以直接上傳PDF文件：

> [上傳PDF]
> 這是一份供應商的服務建議書。
> 請：
> 1. 總結核心服務內容和報價
> 2. 找出任何模糊或需要澄清的條款
> 3. 列出我在簽署前應該確認的問題清單

**PDF分析的實用場景：**

• 年報和財務報告解讀
• 合約和協議的條款理解
• 行業研究報告摘要
• 政府諮詢文件分析

### 試算表和數據文件

上傳CSV或Excel文件（Gemini Advanced支援），讓Gemini直接分析：

> [上傳Excel/CSV文件]
> 這是我們過去一年的銷售數據。
> 請：
> 1. 找出銷售最高的前五個產品類別
> 2. 識別任何季節性趨勢
> 3. 計算每個銷售渠道的貢獻比例
> 4. 指出任何異常數據點

### 文件上傳的注意事項

**隱私保護**：上傳文件前，確認文件中沒有不應分享給第三方的敏感個人資料。如有需要，先將敏感資訊遮蓋或匿名化。

**文件大小限制**：Gemini對上傳文件的大小有限制，超大型文件可能需要分段處理。

**格式支援**：支援的格式包括PDF、圖片（JPG、PNG）、文字文件、CSV，具體支援格式以Google官方說明為準。

### 本節重點

✅ 圖片分析是Gemini最被低估的功能，分析競品社媒、解讀圖表都非常實用

✅ PDF上傳（Gemini Advanced）讓長篇報告的處理效率大幅提升

✅ 上傳任何文件前，先確認沒有敏感個人資料`},{id:"5.4",title:"5.4 Gemini + Google搜尋：即時資訊與AI分析的結合",content:`### 應用場景

大多數AI工具的知識有截止日期，對於昨天發生的事情一無所知。Gemini的一個重要優勢，是它可以連接Google搜尋，在對話中獲取即時資訊，再用AI能力進行分析和整理。

這個「即時搜尋＋AI分析」的組合，讓Gemini能夠處理需要最新資訊的任務。

### 如何確認搜尋功能已啟用

在Gemini輸入框旁邊，有一個地球儀或Google圖標，確認它已啟用（通常預設開啟）。Gemini在回應中會標注哪些資訊來自網絡搜尋，並附上來源連結。

### 搜尋整合的實用場景

**場景一：研究最新行業動態**
> 請搜尋並整理香港零售業在過去三個月的最新趨勢，
> 重點關注：消費者行為變化、主要零售商的策略調整、
> 以及任何影響行業的政策變化。

**場景二：即時競品監察**
> 請搜尋[競品名稱]最近的新聞和公告，
> 找出他們在過去兩個月有什麼新動作，
> 包括：新產品、新合作、新推廣活動。

**場景三：查詢最新法規和政策**
> 請搜尋香港最新的[相關法規範圍]法規更新，
> 特別是在過去六個月有沒有任何影響[你的行業]的新規定。

**場景四：研究市場定價**
> 請搜尋香港市場上[產品類別]的現行市場定價範圍，
> 找出主要競爭者的售價，幫我評估我的定價策略。

### 使用搜尋整合的注意事項

**核實重要資訊**：雖然Gemini會附上來源連結，但搜尋結果的準確性仍需自行核實，特別是涉及數字、法規條文、官方政策的資訊。

**搜尋結果有時效性**：要求搜尋「最新」資訊時，在Prompt中明確說明時間範圍（「過去三個月」、「2024年至今」），讓結果更聚焦。

**敏感市場資訊**：投資相關的市場資訊（股價、基金表現等），Gemini搜尋到的資料僅供參考，不構成投資建議。

### 本節重點

✅ 在Prompt中說明具體的時間範圍（「過去三個月」），搜尋結果會更聚焦

✅ 搜尋整合最適合：行業動態研究、競品監察、法規查詢、市場定價參考

✅ 搜尋結果附有來源連結，重要資訊應點擊原文核實`},{id:"5.5",title:"5.5 用Gemini建立可重複使用的Prompt模板庫",content:`### 應用場景

使用Gemini一段時間後，你會發現有些Prompt特別好用——每次用都能得到高質量的輸出，而且可以套用到類似的任務上。這些優質Prompt，值得系統地整理和保存，形成屬於你的個人Prompt模板庫。

一個好的模板庫，能讓你把每次工作的「Prompt摸索時間」從10分鐘壓縮到1分鐘。

### 建立模板庫的步驟

**第一步：識別你的高頻任務**

花10分鐘想一想：你每週用Gemini最多的任務是什麼？每月重複出現的工作場景有哪些？把這些高頻任務列出來，每一個都值得有一個標準Prompt模板。

常見的香港職場高頻任務：

• 客戶跟進電郵
• 會議記錄整理
• 社交媒體貼文（各平台）
• 週報和月報撰寫
• 新員工入職文件
• 供應商詢價電郵

**第二步：設計模板格式**

好的Prompt模板有固定的佔位符，讓你每次只需填入變動的資訊：

📧 客戶跟進電郵模板
> 你是一位香港[行業]公司的[職位]。
> 收件人：[對方姓名和職位]
> 關係：[你們的關係和過去互動記錄]
> 跟進目的：[這次跟進想達成什麼]
> 上次接觸：[時間和場合]
> 需要包含的資訊：[具體內容]
> 語氣：[正式／友好／輕鬆]
> 字數：[限制]
> 請起草跟進電郵，並建議主旨行。

方括號「[ ]」內的部分，是每次需要填入的變動資訊，其餘部分是固定的模板框架。

**第三步：建立Google Docs模板庫**

在Google Drive建立一個名為「Gemini Prompt庫」的資料夾，裡面按類別整理模板文件：

📁 Gemini Prompt庫
📄 電郵類Prompt（客戶跟進、冷郵件、道歉信……）
📄 報告類Prompt（週報、月報、分析報告……）
📄 內容類Prompt（IG貼文、LinkedIn文章、博客……）
📄 分析類Prompt（數據解讀、競品分析、回饋整理……）
📄 會議類Prompt（記錄整理、議程準備、摘要……）

### 模板庫的維護習慣

**每週更新**：每週花5分鐘，把本週用過的好Prompt加入庫中。

**標注效果評級**：在每個模板旁邊用簡單符號標注（⭐最好用、👍不錯、📝待改進），方便日後快速找到最佳模板。

**團隊共享**：如果你的團隊也在使用Gemini，把Prompt庫文件設為共享，讓整個團隊都能受益，並共同完善。

### 本節重點

✅ 模板庫最大的價值是把「每次摸索」變成「直接填入」，高頻任務效率提升最明顯

✅ 好的模板設計有清晰的佔位符「[ ]」，讓使用者知道哪裡需要填入個人資訊

✅ Google Docs是存放Prompt庫的最佳工具，可以隨時更新和與團隊共享`},{id:"5.6",title:"5.6 自動化工作流：Gemini搭配Google Apps Script入門",content:`### 應用場景

這一節是本書技術程度最高的一節，但目標仍然是讓非技術用戶能夠理解和應用。Google Apps Script是Google提供的輕量級自動化工具，結合Gemini API，可以讓你建立真正的自動化工作流，把重複性的AI任務完全自動化。

**適合對象**：對自動化有興趣、願意嘗試簡單代碼的進階用戶。完全不懂代碼的讀者，可以先跳過這一節，等熟悉其他功能後再回來。

### 什麼是Google Apps Script？

Google Apps Script是Google提供的腳本工具，內建在Google Docs、Sheets、Gmail等產品中，讓你用簡單的JavaScript代碼，自動執行重複性任務。

最常見的用途：

• 自動整理Gmail中特定類型的郵件
• 定時從Google Sheets讀取數據，生成報告
• 自動回覆特定關鍵詞的客戶查詢
• 批量生成文件（如合約、通知書）

結合Gemini API後，這些自動化任務可以加入AI生成的內容。

### 一個入門例子：自動週報生成器

以下是一個概念層面的工作流說明，讓你了解可以實現什麼：

**工作流設計：**
每週五下午4點
→ Apps Script自動讀取Google Sheets中本週的銷售數據
→ 將數據發送給Gemini API，要求生成週報摘要
→ Gemini返回分析文字
→ Apps Script將文字自動填入Google Docs週報模板
→ 自動發送電郵給管理團隊

這個工作流一旦設定完成，每週的週報生成完全自動，你只需要確保Sheets的數據是最新的。

### 不懂代碼也能開始的方法

如果你對代碼完全陌生，但對自動化感興趣，有兩個入門路徑：

**路徑一：讓Gemini幫你寫代碼**

把你想要的自動化工作流描述給Gemini，要求它生成Apps Script代碼：

> 我想建立一個Google Apps Script，
> 功能是：每週一早上9點，
> 自動讀取一個名為「週報數據」的Google Sheets，
> 把數據整理成一段200字的週報文字，
> 並發送電郵給[電郵地址]。
> 請幫我寫這個Apps Script的代碼，
> 並說明如何在Google Sheets中安裝和啟動它。

Gemini能夠生成可以直接使用的Apps Script代碼，並附上安裝說明。

**路徑二：使用Make或Zapier等無代碼工具**

如果連代碼都不想碰，可以考慮Make（原名Integromat）或Zapier等無代碼自動化平台，它們提供Gemini的連接器，讓你用拖拉界面建立工作流。

### 本節重點

✅ Google Apps Script結合Gemini API，能夠實現真正的重複性任務自動化

✅ 不懂代碼可以請Gemini直接生成Apps Script代碼，描述你的需求即可

✅ 完全不想碰代碼的用戶，可以考慮Make或Zapier等無代碼工具作為替代方案`}]},{id:"chapter6",number:"第六章",title:"行業應用地圖",subtitle:"找到你的Gemini使用場景",introduction:"前五章建立了使用Gemini的通用能力。這一章要做的，是把這些能力落地到香港最主要的幾個行業，讓你看到Gemini在你的具體工作環境中能夠做什麼。每一節都針對一個特定行業，列出最相關的使用場景、需要注意的行業特殊限制，以及可以立即使用的Prompt範本。找到你的行業，直接跳到那一節開始。",sections:[{id:"6.1",title:"6.1 金融與保險業：合規環境下的AI輔助工具",content:`### 應用場景

香港是亞洲最重要的金融中心之一，金融和保險業的從業人員對效率和準確性的要求極高。同時，這個行業受到嚴格的監管，任何對外溝通都必須符合證監會、金管局或保監局的合規要求。

Gemini在金融和保險業的角色，是輔助內部工作流程，而不是替代需要持牌才能提供的專業意見。

### 主要使用場景

**客戶溝通文件起草**

金融顧問和保險代理人每天需要起草大量的客戶溝通文件：會議摘要、產品說明跟進信、服務更新通知。這些文件需要專業、準確，同時要讓非專業背景的客戶能夠理解。

> 你是一位香港持牌財務策劃師的行政助理，
> 負責起草客戶溝通文件（不涉及投資建議）。
> 任務：起草一封會議跟進信，
> 總結今天與客戶[X先生]的會議要點，
> 列出雙方同意的下一步行動，
> 語氣：專業、清晰，適合年齡55歲的退休規劃客戶。
> 會議重點筆記：[貼上筆記]

**內部研究報告整理**

把分析師的原始研究筆記，整理成結構化的內部簡報：

> 以下是一份關於[市場/行業]的原始研究筆記，
> 請整理成一份供內部使用的簡報，
> 結構：市場概況→主要趨勢→風險因素→結論
> 字數：800字以內，使用繁體中文
> [貼上原始筆記]

**合規文件理解輔助**

幫助理解監管文件和合規要求（但不替代合規部門的正式意見）：

> 以下是證監會最新發布的[XX指引]節錄，
> 請用簡單語言解釋這段內容對
> [零售基金銷售/強積金顧問/保險代理]的實際影響。
> [貼上原文]

### 行業特別注意事項

**嚴禁用於**：任何形式的投資建議、基金推介、保險產品比較推薦。這些內容需要持牌人士提供，AI生成的內容不符合監管要求，可能涉及違規。

**謹慎使用**：客戶個人財務資料、帳戶信息、交易記錄，絕對不應輸入任何外部AI工具。

**合規審核**：任何對外發出的文件，仍需經過合規部門審核，AI只是起草工具，不是最終審核者。

### Prompt範本

> 你是一位香港金融機構的資深行政人員。
> 任務：[描述文件類型和用途]
> 讀者：[客戶背景或內部受眾]
> 必須包含：[關鍵資訊點]
> 必須避免：任何投資建議或回報預測
> 語氣：[專業／友好／正式]
> 請起草文件，並標注任何可能需要合規審核的部分。

### 本節重點

✅ 金融業Gemini最安全的用途：內部文件整理、會議記錄、客戶溝通跟進信

✅ 任何涉及投資建議或產品推薦的內容，必須由持牌人士撰寫，不能依賴AI

✅ 客戶財務資料絕不輸入外部AI工具，這是監管和道德的底線`},{id:"6.2",title:"6.2 零售與電商：產品文案、客服、選品分析",content:`### 應用場景

香港零售業競爭激烈，無論是實體店還是電商，每天都有大量的文字工作：產品描述、促銷文案、客服回覆、市場分析。Gemini在這個行業的應用空間非常廣泛，而且見效最快。

### 主要使用場景

**產品文案批量生成**

有50個新產品要上架，每個都需要中英文描述？這是Gemini最能節省時間的場景之一：

> 你是一位香港電商平台的資深文案。
> 以下是一個產品的基本資料：
> 產品名稱：[名稱]
> 類別：[類別]
> 主要規格：[規格清單]
> 目標客群：[香港25至40歲女性]
> 售價：[HK$XXX]
> 請生成：
> 1. 繁體中文產品標題（30字以內，包含主要關鍵詞）
> 2. 繁體中文產品描述（150字，突出三個核心賣點）
> 3. 英文產品標題（適合香港英文購物者）
> 4. 五個適合這個產品的中文hashtag

**促銷文案生成**

> 即將舉行[活動名稱]促銷，
> 折扣：[折扣幅度]
> 時間：[日期]
> 主推產品：[產品清單]
> 目標：吸引香港本地消費者，特別是[目標群體]
> 請生成：
> - WhatsApp廣播訊息（100字以內，有urgency感）
> - Instagram貼文（150字，配上emoji，附hashtag）
> - 電郵主旨行（三個備選）

**選品數據分析**

> 以下是我們上個季度的銷售數據，
> 按產品類別分類：[貼上數據]
> 請分析：
> 1. 哪些類別有增長潛力，應該加大採購？
> 2. 哪些類別表現疲弱，應該考慮減少？
> 3. 根據數據，下一季的選品優先順序建議

### 香港零售業特別提示

**雙語必要性**：香港電商平台（如HKTVmall、官方網店）通常需要中英雙文產品資料，可以在一個Prompt中同時要求兩種語言版本。

**節日行銷**：香港有獨特的節日行銷節奏（農曆新年、中秋、聖誕、黑色星期五等），可以建立各節日的專屬文案Prompt模板。

### 本節重點

✅ 批量產品文案生成是零售電商最省時的Gemini應用，一個模板可以套用到所有產品

✅ 香港電商需要中英雙語，在Prompt中同時要求兩個語言版本效率最高

✅ 建立各節日促銷的Prompt模板庫，每次活動直接填入變動資訊即可`},{id:"6.3",title:"6.3 地產與物業：樓盤文案、市場分析、客戶溝通",content:`### 應用場景

香港地產行業的從業人員每天面對大量的文字工作：樓盤介紹、市場分析報告、客戶跟進電郵、租賃合約溝通。Gemini能夠大幅減輕這些工作的負擔，讓代理人把更多時間放在真正的客戶關係建立上。

### 主要使用場景

**樓盤介紹文案**

> 你是一位香港資深地產代理，
> 擅長撰寫吸引目標買家的樓盤介紹。
> 樓盤資料：
> - 屋苑：[名稱]，[地區]
> - 單位：[樓層]，[面積]呎，[間隔]
> - 售價：[價格]
> - 主要特點：[景觀、裝修、設施等]
> - 目標買家：[首置客/換樓客/投資者]
> 請生成：
> 1. 吸引眼球的樓盤標題（20字以內）
> 2. 樓盤介紹正文（200字，突出賣點，語氣專業）
> 3. 適合WhatsApp發送的短版本（80字）

**市場行情報告**

地產代理每月需要向客戶發送市場更新，Gemini可以幫助把原始數據整理成易讀的報告：

> 以下是本月香港[地區]住宅市場的成交數據：
> [貼上數據]
> 請整理成一份給客戶的月度市場簡報：
> - 市場整體走勢（兩句話）
> - 本月成交亮點
> - 對買家和賣家各有什麼啟示
> 語氣：專業但易讀，適合非業內客戶
> 字數：300字以內

**客戶查詢回覆**

> 一位客戶查詢：「[客戶查詢內容]」
> 我的物業資料：[樓盤資料]
> 我目前能提供的：[可提供的資訊和安排]
> 請幫我起草一個專業友好的回覆，
> 結尾提出看樓安排的邀請。

### 地產業特別注意事項

**監管要求**：香港地產代理受地產代理監管局（EAA）監管，所有對外宣傳材料需要符合相關守則。Gemini生成的文案需要由持牌代理審核，確保符合EAA廣告指引。

**樓盤數據準確性**：面積、價格、設施等資料必須以實際情況為準，Gemini的輸出是文案框架，具體數字必須人工核實。

### 本節重點

✅ 樓盤文案批量生成是地產代理最實際的Gemini應用，一個模板套用到所有盤源

✅ 市場報告整理幫助代理人定期向客戶展示專業度，建立長期信任關係

✅ 所有對外文案需符合EAA廣告指引，Gemini生成後必須由持牌代理審核`},{id:"6.4",title:"6.4 教育與培訓：備課、教材設計、學生評估",content:`### 應用場景

香港的教師、補習導師、企業培訓師，每天都在做大量的教學準備工作：備課、設計練習題、撰寫評語、製作教材。這些工作重複性高，卻又需要一定的創意和個人化。Gemini在教育場景的應用，能夠大幅減輕這些準備工作的負擔。

### 主要使用場景

**備課與課程大綱設計**

> 你是一位香港中學的[科目]老師，
> 教授[年級]學生。
> 請為以下課題設計一節45分鐘的課堂計劃：
> 課題：[主題]
> 學生程度：[描述]
> 課堂目標：學生完成課堂後能夠[具體能力]
> 課堂計劃格式：
> - 導入活動（5分鐘）：
> - 主要教學內容（25分鐘）：
> - 小組活動或練習（10分鐘）：
> - 總結和佈置功課（5分鐘）：

**練習題和測驗設計**

> 請為香港[年級]學生設計一份關於[主題]的練習題：
> - 多項選擇題：5條（附答案及解釋）
> - 短答題：3條（附參考答案）
> - 延伸思考題：1條（適合資優學生）
> 難度：符合[DSE/IGCSE/小學]程度
> 語言：[中文/英文]

**學生評語生成**

這是Gemini在教育領域最節省時間的應用之一。老師只需輸入學生的基本表現描述，Gemini能生成個人化的評語：

> 請根據以下學生表現，生成一段150字的學期評語：
> 學生：[性別]，[年級]
> 學業表現：[描述，如優秀/中等/需要改善]
> 強項：[具體表現]
> 需要改善的地方：[具體描述]
> 整體態度：[積極/被動/有進步]
> 語氣：正面鼓勵，同時提出具體改善建議
> 語言：[繁體中文]

### 企業培訓應用

企業培訓師可以用Gemini設計培訓材料：

> 你是一位企業培訓顧問，
> 為香港中小企員工設計[主題]培訓課程。
> 培訓對象：[職級和背景]
> 培訓時長：[X小時]
> 核心學習目標：[列出3個]
> 請設計課程大綱，包含：
> - 各模塊的時間分配
> - 每個模塊的主要內容
> - 互動活動設計
> - 評估方式

### 本節重點

✅ 學生評語生成是教師最省時的Gemini應用，輸入表現描述，輸出個人化評語

✅ 練習題設計要說明程度（DSE/IGCSE等），確保難度符合目標學生

✅ 企業培訓師可以用Gemini快速設計課程大綱和活動，再根據實際需要調整`},{id:"6.5",title:"6.5 媒體與公關：新聞稿、危機應對、品牌傳播",content:`### 應用場景

香港的媒體和公關從業人員面對的工作環境節奏極快：突發事件需要在一小時內回應、新聞稿要在截止前完成、品牌危機需要在最短時間內制定應對策略。Gemini在這個行業是一個高速的起草工具，能夠讓公關人員把更多精力放在策略層面，而非文字層面。

### 主要使用場景

**新聞稿起草**

> 你是一位香港公關公司的資深文案，
> 擅長為香港媒體撰寫新聞稿。
> 客戶：[公司名稱和業務]
> 新聞稿主題：[事件或公告]
> 核心信息：[最重要的一句話]
> 重要資訊：[日期、地點、相關人物、數字]
> 引述：[高層的話，用引號標注]
> 目標媒體：[香港中文媒體/英文媒體/兩者]
> 請起草一份香港標準格式的新聞稿，
> 字數：繁體中文版500字，英文版400字

**危機聲明起草**

危機發生時，公關人員需要在極短時間內起草聲明。Gemini可以在幾秒內提供多個版本的初稿供選擇：

> 緊急情況：[描述危機事件]
> 我方立場：[說明事實和我方的回應]
> 不能說的內容：[任何法律或策略限制]
> 目標：[維護品牌聲譽/向公眾道歉/澄清事實]
> 請起草三個不同語氣的聲明版本：
> 版本A：強硬澄清型
> 版本B：真誠道歉型
> 版本C：中性事實陳述型
> 每個版本200字以內，繁體中文。

**媒體監察報告整理**

把收集到的媒體報道，整理成品牌監察報告：

> 以下是本週關於[品牌/事件]的媒體報道清單：
> [貼上報道標題和摘要]
> 請整理成媒體監察週報：
> - 正面報道摘要
> - 負面報道摘要及潛在影響評估
> - 需要跟進回應的事項
> - 下週媒體關係建議

### 媒體公關業特別提示

**速度是關鍵**：危機公關的第一原則是快速回應。用Gemini起草初稿，然後由資深公關人員審核修改，比從零開始寫快得多。

**香港媒體文化**：香港中文媒體和英文媒體的報道風格、新聞價值判斷有所不同，在Prompt中說明目標媒體，讓新聞稿語言更貼近相應媒體的風格。

### 本節重點

✅ 危機聲明要求多個語氣版本，讓公關團隊根據實際判斷選擇或混合使用

✅ 媒體監察報告整理是一個高重複性工作，非常適合建立固定的Prompt模板

✅ 所有對外發出的公關文件，必須由資深公關人員審核，AI只是起草工具`},{id:"6.6",title:"6.6 自由工作者與Solopreneur：一人公司的AI戰略",content:`### 應用場景

香港有大量的自由工作者（Freelancer）和一人公司（Solopreneur）——自由插畫師、獨立顧問、個人教練、獨立攝影師、Youtuber……他們面對的最大挑戰，是一個人要做所有事：接洽客戶、完成工作、處理行政、經營品牌。

Gemini對於一人公司來說，是一個成本最低的「全能助理」，能夠在以下幾個最耗時的非核心工作上，大幅減輕負擔。

### 主要使用場景

**客戶提案和報價文件**

> 你是一位香港獨立[職業]的業務助理。
> 客戶：[客戶背景和需求描述]
> 我的服務：[描述你能提供的]
> 報價：[費用和服務範圍]
> 時間線：[預計時間]
> 請起草一份專業的服務提案，包含：
> - 對客戶需求的理解
> - 我的解決方案
> - 服務範圍和交付物
> - 費用明細
> - 下一步行動
> 語氣：專業但有個人特色，不要太像大公司的制式文件

**社交媒體個人品牌內容**

自由工作者的個人品牌幾乎完全依賴社交媒體，持續輸出內容是最重要也最費時的工作：

> 我是一位香港的[職業]，
> 主要在[LinkedIn/Instagram]建立個人品牌。
> 我的目標受眾：[描述]
> 我的獨特觀點：[描述你對行業的看法]
> 請根據以下想法，生成一週（五篇）的內容計劃：
> [描述你最近想分享的幾個想法]
> 每篇：標題＋150字正文＋3個hashtag

**客戶跟進和關係管理**

> 我需要向一位三個月前合作過的客戶重新聯繫，
> 希望探索新的合作機會。
> 客戶背景：[描述]
> 上次合作：[項目和結果]
> 我有的新服務或想法：[描述]
> 請起草一封溫暖但專業的重新聯繫電郵，
> 不要顯得太像在推銷，更像是在維繫關係。

**行政文件生成**

自由工作者最討厭的往往是行政工作：合約、發票、服務條款。Gemini可以快速生成這些文件的初稿：

> 請幫我起草一份香港自由工作者的
> 標準服務協議範本，包含：
> - 服務範圍定義
> - 付款條款（含訂金）
> - 知識產權歸屬
> - 修改次數限制
> - 終止條款
> 語言：繁體中文，附英文對照
> （注意：這只是草稿，正式使用前需諮詢律師）

### 一人公司的AI戰略原則

**時間分配原則**：自由工作者的收入直接來自「核心工作時間」（攝影、諮詢、設計……），任何能夠用AI縮短的非核心工作，都應該外包給AI。目標是讓你每天有更多時間做真正創造收入的工作。

**個人品牌一致性**：AI生成的內容容易顯得千篇一律。使用Gemini生成內容後，一定要加入你個人的語言習慣、獨特觀點和具體經歷，確保所有對外內容都帶有你的個人印記。

**客戶關係的人情味**：再好的AI，都無法替代真實的人際互動。對於重要客戶的關鍵溝通（重大決定、危機處理、關係修復），應該親自撰寫，或至少花更多時間個人化AI起草的版本。

### Prompt範本（提案文件）

> 你是我的業務助理，幫助我這位香港獨立[職業]起草提案。
> 潛在客戶：[背景]
> 他們的需求：[描述]
> 我提議的解決方案：[描述]
> 費用：[HK$XXX]
> 時間：[週期]
> 請起草一份三頁以內的服務提案，
> 語氣要讓客戶感受到我理解他們的問題，
> 而不只是在推銷我的服務。

### 本節重點

✅ 一人公司最值得投資的Gemini使用場景：客戶提案、個人品牌內容、行政文件

✅ 把AI節省下來的時間，重新投入核心創收工作，才是一人公司的AI戰略本質

✅ 關鍵客戶溝通必須加入足夠的個人化，AI起草只是效率工具，人情味需要你來加`}]}],Vo={title:"《Gemini AI商用All-in-1》",subtitle:"前言：為什麼是Gemini？",sections:[{title:"當AI變成日常工具，香港人的選擇困局",content:`2024年，全球掀起了一場AI工具的大爆發。ChatGPT、Claude、Copilot、Gemini……光是主流的對話式AI，已經多到令人眼花繚亂。對於香港的打工仔、老闆、自由工作者來說，面對這一片AI工具的汪洋，第一個問題往往不是「怎麼用」，而是「用哪一個」。

這個問題，本書已經替你回答了：**Google Gemini**。

理由很簡單，也很實際。

香港人用Google。這不是品牌偏好的問題，而是生態系統的現實。Gmail、Google Drive、Google Docs、Google Sheets、Google Meet——這些工具早已深入大多數香港公司的日常運作，無論是初創公司還是跨國企業的香港辦公室，Google Workspace幾乎是標準配備。當Gemini能夠直接嵌入這套你每天都在用的工具，它就不只是一個「AI助理」，而是你整個工作流程的智能升級。

這是Claude、ChatGPT無法複製的優勢。`},{title:"Gemini是什麼？一個對普通人友善的答案",content:`如果你是第一次聽到Gemini這個名字，以下是最直白的解釋：

Gemini是Google開發的AI助理，你可以用自然語言（廣東話、普通話、英文都可以）跟它對話，請它幫你寫文章、分析數據、整理資料、規劃項目、起草電郵，幾乎任何需要用大腦處理文字和信息的工作，Gemini都能在幾秒至幾分鐘內給你一個有用的起點。

它不是搜尋引擎，不是計算器，也不是聊天機器人。它更像一個24小時待命、永遠不會累、不會請假的智識助理——只要你給它正確的指令，它就能交出你需要的成果。`},{title:"本書的誕生背景",content:`市面上關於AI工具的書籍，大多有兩個問題。

第一，它們面向的是技術人員，充滿了普通商務用戶看不懂的術語。第二，即使是面向普通人的書，內容也往往停留在「你可以用AI做很多事情」的表面描述，缺乏具體、可以立即複製的操作指引。

本書的出發點，是填補這個空缺。

全書六章，涵蓋**寫作溝通、研究分析、商業應用、進階技巧、行業應用**五大核心領域，每一節都遵循同一套結構：說清楚這個功能的應用場景、給出分步驟的操作指引、提供可以直接複製使用的Prompt模板，並針對香港本地的工作環境給出定制化建議。

你不需要有技術背景。你不需要懂編程。你需要的只是一個Google帳號、願意嘗試的心態，以及這本書。`},{title:"這本書的使用方法",content:`本書並不需要從第一頁讀到最後一頁。它的設計更像一本工具手冊：你今天需要寫一封難開口的電郵，就翻到第二章；你下週要做一份競品分析，就看第三章；你想了解Gemini有哪些你不知道的進階功能，第五章是你的目的地。

每一節約800至1,000字，閱讀時間大約10至15分鐘。每節附有：

📋 **Prompt模板**：可直接複製、填入資料即用
🛠️ **操作步驟**：分步說明，附實際截圖指引建議
🗺️ **圖解說明**：流程圖、對照表或概念圖，幫助視覺化理解
💡 **香港本地化提示**：結合本地職場文化、語言習慣、行業特性`},{title:"關於Prompt這件事",content:`本書會反覆出現「Prompt」這個詞。Prompt的中文直譯是「提示詞」或「指令」，指的是你輸入給Gemini的那段文字。

Prompt的質量，決定了Gemini輸出的質量。這是本書最核心的信息之一。同樣一個任務，一個寫得好的Prompt可以讓Gemini交出接近完美的成果，一個寫得模糊的Prompt只會換來一個廢話連篇的回應。

學會寫好Prompt，是學會用好AI的第一步。本書每一章都包含大量Prompt範例，你可以直接複製，也可以根據自己的需要修改。隨著你使用得越來越熟練，你會開始發展出屬於自己的Prompt風格。`},{title:"給猶豫者的最後一句話",content:`每一次技術革命，都會有人早一步學會新工具，也會有人因為猶豫而錯過。

打字機普及時，最先學會打字的秘書，工作機會倍增。電腦普及時，最先學會用試算表的財務人員，成為不可取代的資產。互聯網普及時，最先學會建網站和做SEO的商家，搶到了第一波紅利。

現在，輪到AI了。

Gemini是你進入這場革命最低門檻的入口。它免費、它用Google帳號登入、它說中文。你今天就可以開始。

翻到第一章，讓我們從零開始。

*本書內容以Google Gemini 2.0為基礎撰寫，部分功能因版本更新可能有所變化，建議讀者以Google官方說明為準。書中所有Prompt範例均可在Gemini免費版使用，部分進階功能需要Gemini Advanced（即Google One AI Premium方案）。*`}]},mv=[{id:"chapter1",number:"第一章",title:"認識Gemini",subtitle:"從零開始的商用入門",introduction:"很多人第一次接觸AI工具，都有同一個感覺：「這東西好像很厲害，但我不知道從哪裡開始。」第一章的目的，就是消除這個感覺。我們會從最基礎的問題開始：Gemini到底是什麼？它有哪些版本？怎麼打開？介面長什麼樣？怎麼給指令才有效？跟Google其他工具有什麼關係？初學者常犯哪些錯誤？",sections:[{id:"1.1",title:"1.1 Gemini是什麼？免費版、Advanced版與Workspace版比較",content:`### 應用場景

在你花時間學習任何工具之前，最值得弄清楚的問題是：這個工具到底是什麼？它能做什麼？它有什麼限制？更實際的問題是：我需要付錢嗎？

這一節會把這些問題一次回答清楚。

### Gemini的本質：Google的AI大腦

Gemini是Google開發的大型語言模型（Large Language Model，簡稱LLM），也是Google旗下所有AI功能的核心引擎。簡單來說，它是一個能夠理解和生成人類語言的AI系統，可以讀懂你的問題、分析你提供的資料，並以自然語言回應。

從用戶的角度看，Gemini有兩種存在形式：

**一是獨立應用**，即你在 gemini.google.com 打開的對話介面，直接跟Gemini聊天、下指令。

**二是嵌入式功能**，即Google將Gemini整合進Gmail、Docs、Sheets等產品，讓你在使用這些工具的過程中，直接調用AI能力，不需要切換到另一個介面。

這兩種形式，覆蓋了你大部分的工作場景。

### 三個版本，三種用戶

Gemini目前主要分為三個版本，適合不同需求和預算的用戶。

**版本一：Gemini免費版**

入口：gemini.google.com（用Google帳號登入即可）

免費版是絕大多數人的起點，也是本書大部分章節的預設使用環境。它能做的事比你想像中多得多：

• 對話式問答與指令執行
• 起草文章、電郵、報告
• 分析和總結你提供的文字資料
• 基本的數據解讀（你貼上數字，它幫你解讀含義）
• 支援繁體中文、廣東話口語、英文輸入
• 連接Google搜尋，獲取最新資訊

免費版的主要限制是：使用量有上限（每天可進行的長對話有限制，但對一般商務用途已相當足夠），以及部分高階功能（如分析超長文件、執行複雜多步驟任務）需要升級。

**版本二：Gemini Advanced**

訂閱方案：Google One AI Premium，月費約港幣150元左右（價格可能因時而異，建議以Google官網為準）

Gemini Advanced使用的是Google最強版本的模型，適合有更高需求的專業用戶：

• 處理更長的文件和對話（上下文視窗更大，即它能「記住」更多背景資訊）
• 分析PDF、試算表、圖片等複雜文件
• 執行多步驟、需要持續追蹤的複雜任務
• 使用Gemini Gems（即建立專屬的定制AI助理，第五章會詳細介紹）
• 優先獲得新功能的早期使用權

對於需要每天大量使用AI輔助工作的商務用戶，Gemini Advanced的月費相當於一個高效助手的零頭，投資回報率極高。

**版本三：Gemini for Google Workspace**

適用對象：使用Google Workspace（即G Suite企業版）的公司

這個版本是直接嵌入在Workspace產品組合中的Gemini功能，員工無需離開Gmail或Docs，就能在工作介面中調用AI。對於已經使用Workspace的公司，IT部門可以統一開通，員工集體受益。

主要功能包括：

• Gmail中的「幫我撰寫」和「摘要」功能
• Google Docs中的起草和修改建議
• Google Sheets中的數據分析和公式建議
• Google Meet的即時字幕和會議摘要

### Gemini vs. 其他AI：為什麼在香港選Gemini更實際

ChatGPT、Claude等AI在國際市場很受歡迎，它們各有優點。但在香港的實際使用環境中，Gemini有幾個難以忽視的優勢：

**Google帳號通用**——幾乎每個香港人都有Google帳號，不需要另外註冊。

**中文表現穩定**——Gemini對繁體中文的支援相當完善，廣東話口語輸入也能理解，非常適合香港的雙語工作環境。

**與工作工具直接整合**——Gmail和Google Docs的AI功能可以在工作中無縫使用，不需要「複製到另一個地方再貼回來」的多餘步驟。

**Google搜尋整合**——Gemini可以即時連接Google搜尋，獲取最新資訊，這在需要查詢時事、市場數據或近期新聞時，比其他AI更有優勢。

**無需VPN**——相比主流的ChatGPT和Claude，Gemini目前已開放予香港市民，不用VPN也能直接使用。

### 本節重點

✅ Gemini有三個版本：免費版（日常使用已足夠）、Advanced版（適合重度用戶，月費約港幣150元）、Workspace版（企業整合用）

✅ 對大多數香港商務用戶，從免費版開始是最務實的選擇，感受到限制再升級

✅ Gemini最大的優勢是與Google生態系統的深度整合，這在香港的工作環境中是實際的效率優勢`},{id:"1.2",title:"1.2 第一次打開Gemini：介面導覽與基本操作",content:`### 應用場景

很多人裝好App或開了帳號之後，面對空白的介面就不知道從哪裡開始。這一節會帶你完整走過第一次使用Gemini的流程，從登入到送出第一個有效指令，每個步驟都有說明。

### 第一步：登入與進入介面

打開瀏覽器，前往 **gemini.google.com**。

如果你已經登入Google帳號（例如你的Gmail），頁面會自動識別你的身份，直接進入Gemini主介面。如果沒有，點擊右上角的「登入」，用你的Google帳號登入即可。

手機用戶也可以下載「Google Gemini」App（iOS及Android均有），操作邏輯與網頁版相同，本書截圖以網頁版為主，但所有功能在App上同樣適用。

### 第二步：認識主介面的五個區域

Gemini的主介面分為以下五個主要區域：

**區域①：左側側欄——對話記錄**

Gemini會自動保存你所有的對話記錄，按時間排列在左側欄。點擊任何一個舊對話，可以繼續之前的討論。你也可以將常用的對話「置頂」，方便快速存取。

實用提示：每次開始一個全新的任務，建議點擊左上角的「新對話」（New Chat）按鈕，避免舊對話的背景資訊干擾新任務的輸出。

**區域②：頂部模型選擇——選擇Gemini版本**

如果你使用的是Gemini Advanced，頂部會有一個下拉選單，讓你選擇使用哪個版本的模型（如Gemini 2.0 Flash、Gemini 2.0 Pro等）。一般情況下，使用預設模型即可，只有在處理特別複雜的任務時才需要手動選擇。

免費版用戶無需理會這個選項，系統會自動分配合適的模型。

**區域③：主對話區——Gemini的回應**

這是最大的中央區域，顯示你與Gemini的對話內容。你的輸入會以氣泡形式出現在右側，Gemini的回應則以較長的格式出現在左側，通常包含標題、段落、條列清單等結構化格式。

每個Gemini回應的底部，有幾個操作按鈕：

• 👍 / 👎：給回應評分（幫助Google改進模型）
• 🔄 重新生成：如果對答案不滿意，要求Gemini重新回答
• 📋 複製：一鍵複製整個回應的文字
• 分享按鈕：將對話分享給他人

**區域④：輸入框——你給指令的地方**

頁面底部的長條形輸入框，是你輸入Prompt（指令）的地方。點擊輸入框，直接打字。按Enter鍵送出，或者點擊右側的送出按鈕。

輸入框右側還有幾個圖標：

• 📎 附件：上傳圖片、PDF或其他文件（Gemini Advanced可上傳更多格式）
• 🎙️ 語音輸入：用說話代替打字（廣東話也能識別）
• Google搜尋圖標：確認Gemini連接搜尋功能

**區域⑤：快速指令建議**

首次進入空白對話時，頁面中央會顯示幾個預設的指令建議（如「幫我寫一封電郵」、「解釋一個概念」等）。這些只是示範，可以直接忽略，輸入自己的指令即可。

### 第三步：送出你的第一個指令

現在試試送出一個簡單的商務指令：

> 我是香港一間中型貿易公司的採購經理。
> 幫我寫一封向內地供應商詢價的電郵，
> 產品是電子零件，需要詢問MOQ（最低訂購量）、
> 交期和付款條件。語氣要專業但友好。

送出後，Gemini通常在幾秒內完成回應。

### 第四步：與回應互動——三種常用操作

收到Gemini的回應後，你有三種主要的跟進方式：

**操作A：繼續追問** 如果回應大致不錯，但某個部分需要調整，直接在輸入框繼續說明：「電郵太長了，幫我縮短至200字以內」或「語氣再正式一點，這個供應商是新客戶」。

**操作B：要求重新生成** 如果整個回應都不符合預期，點擊「重新生成」按鈕，Gemini會提供一個不同的版本。你也可以先說明為什麼不滿意，再要求重新生成，成效會更好。

**操作C：複製並使用** 如果回應已經符合需求，點擊複製按鈕，貼到Gmail、Google Docs或任何你需要的地方。

### 語言使用提示：香港的雙語場景

Gemini能夠理解繁體中文、粵語口語表達和英文，也能混合使用。幾個實用的語言技巧：

• 如果你希望輸出繁體中文，在指令中明確說「請用繁體中文回答」
• 廣東話詞彙（如「搞掂」、「搞咁耐」、「而家」）Gemini大致能理解，但輸出仍會以書面中文為主
• 如果任務需要中英雙語輸出（如翻譯或雙語文件），直接在指令中說明

### 本節重點

✅ Gemini的介面非常直觀，登入Google帳號後即可使用，無需任何設定

✅ 每次新任務建議開「新對話」，避免舊背景資訊干擾

✅ 收到回應後可以持續追問和調整，不需要一次過寫出完美指令`},{id:"1.3",title:"1.3 Prompt是什麼？寫出好指令的四個核心元素",content:`### 應用場景

用了Gemini幾次之後，很多人會遇到同一個問題：「它給的答案好像不太對，或者太籠統、太廢話。」

這個問題，九成情況下出在Prompt本身，而不是Gemini的能力。

Prompt（提示詞）是你輸入給AI的指令。它決定了AI理解你的需求的準確程度，也直接決定了輸出的質量。學會寫好Prompt，是用好Gemini這件事最值得投資的技能。

### 什麼是Prompt？一個比喻

想像你在管理一個剛入職的實習生。這個實習生非常勤奮、聰明，但對你的公司、你的工作方式、你的客戶完全一無所知。

如果你跟他說：「幫我寫份報告。」他會交給你一份廢物——因為他不知道報告的對象是誰、目的是什麼、要多長、要什麼格式。

但如果你說：「幫我寫一份500字的月度銷售摘要，讀者是我們的董事會，重點突出三個數字：月銷售額（港幣230萬）、增長率（比上月升12%）、主要原因（新客戶開拓），語氣要簡潔專業。」——他就能交出一份像樣的草稿。

Gemini就是這個實習生。你給的背景越充分，它的輸出就越精準。

### 四個核心元素：RSIA框架

寫出好Prompt，不需要記住複雜的技巧，只需要掌握四個核心元素。本書以「RSIA框架」來記憶：

**R — Role（角色）：告訴Gemini它應該扮演什麼身份**

角色設定幫助Gemini調整它的知識庫重心和回應風格。同一個問題，「你是一位香港的HR顧問」和「你是一位法律助理」會給出截然不同的答案。

例子：
• 「你是一位有十年經驗的香港財務顧問……」
• 「你是一位熟悉香港勞工法例的HR專員……」
• 「你是一位負責管理中小企社交媒體的內容策劃……」

沒有角色設定時，Gemini會以通才身份回應，答案可能正確但缺乏行業針對性。

**S — Situation（情境）：說清楚你的背景和現況**

情境說明是Prompt中最常被省略、但影響最大的部分。它回答的是：「我是誰？我的情況是什麼？」

例子：
• 「我是一家香港中型零售連鎖店的市場主任，我們有12間分店，主要客群是25至45歲的中產女性……」
• 「我需要向一位已合作三年的客戶解釋一個延誤問題，我們雙方關係良好，但這次確實是我方的失誤……」

情境越具體，Gemini的回應就越貼近你的實際需要，而不是一個通用模板。

**I — Instruction（指令）：說清楚你要它做什麼**

這是Prompt最核心的部分——你的具體要求。好的指令有以下特點：

• **動詞要明確**：「寫」、「分析」、「比較」、「列出」、「翻譯」比「幫我做一個關於XX的東西」清晰得多
• **指定格式**：「用條列清單」、「分三段」、「以表格呈現」、「200字以內」
• **說明目的**：「這份文件的目的是說服董事會批准預算」

常見指令動詞：

| 目的 | 指令動詞 |
|------|----------|
| 產生內容 | 撰寫、起草、創作、設計 |
| 處理資料 | 分析、總結、比較、分類 |
| 改善內容 | 修改、潤色、縮短、擴充 |
| 解釋概念 | 解釋、說明、舉例、類比 |

**A — Audience（讀者）：告訴它輸出給誰看**

很多人忘記說明讀者是誰。Gemini寫給CEO的報告和寫給前線員工的通知，應該是完全不同的語氣和深度。

例子：
• 「這份文件的讀者是公司的非財務背景高管，請避免使用過多術語」
• 「這封電郵的收件人是我的直屬上司，語氣要尊重但直接」
• 「這篇社交媒體貼文的目標受眾是香港30至45歲的職場女性」

### RSIA框架實戰示範

**沒有框架的弱Prompt：**
> 幫我寫一個關於員工福利的通知

**套用RSIA框架的強Prompt：**
> [R] 你是一位香港中型科技公司的HR經理
> [S] 公司剛決定增加員工的年假天數，由12天增至15天，由下個財政年度起生效（即4月1日）
> [I] 幫我起草一份內部公告，用輕鬆但專業的語氣，以條列式說明：新政策詳情、生效日期、適用對象、如何查詢餘下年假。字數控制在300字以內
> [A] 讀者是公司全體員工，學歷和背景各異，請用簡單清晰的語言，避免人力資源術語

兩個Prompt的輸出質量，差距可以是天壤之別。

### 三個讓Prompt更好的實用習慣

**習慣一：先說結果，再說過程** 不要說「幫我想想如何改善客服」，而是說「我希望客戶在投訴後，仍然有至少70%願意繼續使用我們的服務，請給我三個可以立即執行的客服改善建議」。

**習慣二：給Gemini參考樣本** 如果你有一個希望模仿的風格或格式，直接貼給Gemini看：「以下是我們公司過去的公告風格，請參考這個格式起草新公告：[貼上舊公告]」

**習慣三：允許Gemini問你問題** 在Prompt結尾加上一句：「如果你需要更多資訊才能完成這個任務，請先問我。」這會讓Gemini在資訊不足時主動釐清，而不是自行填補空白、製造不準確的內容。

### 本節重點

✅ Prompt的質量直接決定Gemini輸出的質量，學好RSIA框架是最值得的投資

✅ RSIA四元素：Role（角色）、Situation（情境）、Instruction（指令）、Audience（讀者）

✅ 不需要一次寫出完美Prompt，先送出，再根據回應追問修改，這才是正確的工作流程`},{id:"1.4",title:"1.4 Gemini與Google Workspace的深度整合（Gmail、Docs、Sheets）",content:`### 應用場景

對很多香港上班族來說，一天的工作就是在Gmail、Google Docs和Google Sheets之間來回切換。寫電郵、起草報告、整理數據——這三件事佔據了大量的工作時間，也是最容易被AI減輕負擔的地方。

Gemini最聰明的地方之一，是它不強迫你離開這些熟悉的工具，而是直接在裡面出現。這一節介紹Gemini如何嵌入你每天使用的Google工具，讓AI輔助變成工作流程的一部分，而不是額外的步驟。

### 前提：開通Workspace中的Gemini功能

如果你使用的是個人Google帳號，部分Workspace整合功能需要Gemini Advanced才能啟用。如果你的公司使用的是Google Workspace企業版，IT管理員需要先在後台開通「Gemini for Workspace」功能，員工才能在自己的帳號中看到相關選項。

確認方式：打開你的Gmail，看看撰寫郵件的視窗右下角，有沒有一個星形或魔杖圖標——有的話，表示Gemini功能已啟用。

### Gmail：讓AI替你起草和整理郵件

**功能一：「幫我撰寫」（Help me write）**

打開Gmail，點擊「撰寫」新郵件。在郵件撰寫視窗的底部，點擊鉛筆加星星的圖標（「幫我撰寫」按鈕）。

一個輸入框會出現，讓你描述這封郵件的需求。例如：

> 向一位已見面三次的潛在客戶跟進，
> 詢問他們是否有機會在本月底前完成採購決定，
> 語氣友好但帶有一定的urgency

Gemini會在幾秒內生成完整的郵件草稿，直接填入撰寫視窗。你可以：

• 點擊「插入」接受草稿，再手動微調
• 點擊「重新整理」要求Gemini給出不同版本
• 在描述框中修改要求，重新生成

**功能二：「摘要這封郵件」（Summarize this email）**

打開任何一封長郵件（例如客戶發來的長篇需求說明，或內部的政策更新），右側面板會出現Gemini的摘要功能。點擊後，Gemini會把郵件的核心內容整理成幾個要點，讓你在30秒內掌握重點，不需要逐字閱讀。

**功能三：建議回覆**

Gemini有時會在郵件底部主動建議幾個回覆選項（如「我會跟進」、「讓我查詢後回覆」等），點擊即可快速生成回覆草稿。

### Google Docs：讓AI幫你從零起草到潤色修改

**功能一：「幫我撰寫」**

在任何Google Docs文件中，把游標放到一個空白段落，你會看到左側出現一個小圖標（筆加星星），點擊後輸入你的需求，Gemini就會在文件中直接生成內容。

實用場景：

• 你已有文件大綱，需要逐節填入內容：在每個空白節下方點擊，描述這一節要寫什麼
• 你需要一份新文件：在空白文件中點擊按鈕，描述整份文件的需求

**功能二：選取文字後的AI選項**

在Google Docs中，選取一段你已寫好（或Gemini生成）的文字，頂部工具列會出現Gemini相關選項：

• **潤色（Refine）**：改善語氣、消除冗詞、讓文字更流暢
• **摘要（Summarize）**：把長段落壓縮成要點
• **擴展（Elaborate）**：把一個簡短的要點展開成完整段落
• **換個語氣（Change tone）**：將正式文字改成親切語氣，或反之

**功能三：在側邊欄與Gemini對話**

Google Docs右側有一個Gemini側邊欄（需要啟用），你可以在這裡與Gemini對話，討論文件內容，並將Gemini的建議直接插入文件，無需複製貼上。

### Google Sheets：讓AI解讀數據和建議公式

**功能一：解讀數據含義**

將你的試算表數據選取，點擊右側的Gemini面板，問它：「這組數據有什麼值得注意的趨勢？」或「哪些月份的銷售表現異常？」Gemini會用自然語言解讀數字背後的含義。

這個功能特別適合沒有數據分析背景的管理層——你不需要懂統計，Gemini會替你把數字翻譯成商業語言。

**功能二：建議和解釋公式**

在空白格子旁邊描述你需要的計算，例如：「計算B2到B12所有數值的平均數，並排除零值」，Gemini會生成對應的Google Sheets公式，並解釋公式的邏輯。

**功能三：從自然語言建立圖表**

選取數據後，在Gemini面板中說：「用這個數據畫一個按月份分類的柱狀圖，X軸是月份，Y軸是銷售額」，Gemini會自動生成圖表，省去手動設定的步驟。

### 整合使用的最大優勢：減少工具切換

在沒有Gemini整合之前，典型的工作流程是：在Gemini網頁版起草文字 → 複製 → 貼到Gmail或Docs → 再修改格式 → 再調整用語。

有了Workspace整合之後，整個過程在同一個視窗完成，大幅減少來回切換的時間和精力損耗。對於每天需要處理大量文字工作的商務用戶，這個差異可以節省每天30分鐘至1小時的工作時間。

### 本節重點

✅ Gemini已深度整合進Gmail（起草、摘要、建議回覆）、Google Docs（撰寫、潤色、擴展）和Google Sheets（數據解讀、公式建議、圖表生成）

✅ 在Workspace中使用Gemini的最大優勢是無需切換工具，直接在工作環境中獲得AI輔助

✅ 部分功能需要Gemini Advanced或企業版Workspace，使用前先確認帳號的功能開通狀態`},{id:"1.5",title:"1.5 常見錯誤與新手避坑指南",content:`### 應用場景

每一個開始使用Gemini的人，幾乎都會踩到同樣的坑。這些錯誤不是因為用戶不夠聰明，而是因為AI工具的使用邏輯，跟我們習慣的軟件操作方式很不一樣。

這一節把最常見的七個新手錯誤整理出來，讓你提早避開，少走彎路。

### 錯誤一：Prompt太模糊，期望太高

**錯誤示範：**「幫我寫一個行銷計劃。」

**為什麼有問題：** Gemini不知道你的公司是做什麼的、目標市場在哪裡、預算是多少、時間範圍有多長、讀者是誰。它只能給你一個最通用、最沒有針對性的框架，對你的實際工作幾乎沒有幫助。

**正確做法：** 套用RSIA框架（見1.3節），把背景資訊、指令和讀者對象都說清楚。

### 錯誤二：第一次回應不滿意就放棄

**常見情況：** 用戶送出一個指令，看到回應後覺得「唔係咁」，然後就關掉視窗，認為Gemini「冇用」。

**為什麼有問題：** 使用AI的正確心態，是把它當成一個可以持續溝通的協作過程，而不是「一次過出結果」的機器。第一次回應往往只是一個起點，通過追問和調整，才能得到真正有用的輸出。

**正確做法：** 收到不滿意的回應後，具體說明哪裡不對：「這個太正式了，請改成更輕鬆的語氣」、「第二段的論點不夠有說服力，請加入數據支撐」、「整篇太長，請刪減至500字」。

### 錯誤三：把Gemini當百科全書

**常見情況：** 問Gemini「香港最新的最低工資是多少？」或「某公司今天的股價是？」

**為什麼有問題：** 雖然Gemini可以連接Google搜尋獲取部分即時資訊，但它的知識有訓練截止日期，對於需要高度準確性的法規數字、財務數據或即時新聞，不應完全依賴Gemini的回答，它有時會「自信地答錯」，亦即所謂的「AI幻覺」。

**正確做法：** 重要的事實和數字，永遠要通過官方來源核實。可以用Gemini分析和整理你已確認的資訊，但不要把它當作最終的事實依據。

### 錯誤四：忘記說明輸出格式

**錯誤示範：** 「分析以下客戶回饋的主要問題。」（沒有說要什麼格式）

**結果：** Gemini可能給你一段長篇文字，或者一份過長的條列清單，都不適合直接放入你的報告。

**正確做法：** 在指令中明確說明格式：「用三個要點列出主要問題，每個要點不超過兩句話」或「以表格形式呈現，第一欄是問題類別，第二欄是具體例子，第三欄是建議改善方向」。

### 錯誤五：輸入敏感資料

**嚴重程度：⚠️ 重要**

**常見情況：** 把客戶的個人資料（姓名、電話、地址）、公司的未公開財務數據、員工的私人資訊，或任何受保密協議保護的文件，直接貼入Gemini輸入框。

**為什麼有問題：** 你在Gemini中輸入的內容，可能會被Google用於模型改善。即使有隱私保護措施，將機密資料輸入第三方AI工具，也可能違反公司的資料保護政策或客戶的保密協議。

**正確做法：** 處理敏感資料時，先將具體的識別資訊匿名化（例如將客戶姓名改為「客戶A」），再輸入Gemini。如果公司有AI使用政策，先確認是否允許在Gemini中處理公司資料。

### 錯誤六：不善用「繼續對話」功能

**常見情況：** 每次使用Gemini，都開一個新對話，重新解釋所有背景資訊。

**為什麼有問題：** 在同一個對話中，Gemini能記住之前的所有交流內容。如果你在同一個對話中持續工作，它會越來越了解你的需求，輸出也會越來越準確。每次都重新開始，等於白費了這個優勢。

**正確做法：** 同一個項目或任務，在同一個對話中進行。可以在對話開始時，先給Gemini一個「背景簡介」，讓它記住整個任務的框架，後續的每個具體指令就不需要重複解釋背景。

### 錯誤七：直接複製輸出，不做人工審核

**常見情況：** 把Gemini生成的電郵或報告，一個字都不改地直接發出去。

**為什麼有問題：**

• Gemini可能生成聽起來自信但實際錯誤的事實或數字
• 它不了解你個人的說話風格和你與收件人的具體關係
• 在商務情境中，一封完全由AI生成的電郵，有時在語氣和措辭上會有微妙的不自然感

**正確做法：** 把Gemini的輸出視為「高質量草稿」而非「最終稿」。花30秒至2分鐘做以下檢查：核實所有具體數字和事實、加入個人化細節（你與對方的共同記憶、內部用語）、調整任何讀起來不像你說話方式的句子。

### 避坑後的正確心態

學習使用Gemini（或任何AI工具），最重要的心態轉變是：**從「工具」思維轉向「協作者」思維**。

你不是在操作一個按鈕，你是在跟一個很有能力但需要你給方向的助理工作。你給的方向越清晰，它交出的成果就越好。而當成果不夠好的時候，不是AI的問題，往往是對話還沒有完成。

這個思維轉變，是從「Gemini初學者」進化到「Gemini熟練用戶」最重要的一步。

### 本節重點

✅ 七大常見錯誤：Prompt太模糊、不迭代、誤信所有答案、忘記說格式、輸入敏感資料、不善用對話記憶、直接使用未審核的輸出

✅ 最重要的一條：永遠對Gemini的輸出做人工審核，尤其是涉及具體事實、數字和對外溝通的內容

✅ 把Gemini當協作者，而非工具，是用好AI的根本心態`}]}],_m=[...mv,...fv,...dv],hv=c=>_m.find(r=>r.id===c);function vm(c,r){if(typeof c=="function")return c(r);c!=null&&(c.current=r)}function $o(...c){return r=>{let f=!1;const o=c.map(d=>{const h=vm(d,r);return!f&&typeof h=="function"&&(f=!0),h});if(f)return()=>{for(let d=0;d<o.length;d++){const h=o[d];typeof h=="function"?h():vm(c[d],null)}}}}function an(...c){return D.useCallback($o(...c),c)}var pv=Symbol.for("react.lazy"),mu=Up[" use ".trim().toString()];function vv(c){return typeof c=="object"&&c!==null&&"then"in c}function Nm(c){return c!=null&&typeof c=="object"&&"$$typeof"in c&&c.$$typeof===pv&&"_payload"in c&&vv(c._payload)}function gv(c){const r=yv(c),f=D.forwardRef((o,d)=>{let{children:h,...x}=o;Nm(h)&&typeof mu=="function"&&(h=mu(h._payload));const E=D.Children.toArray(h),y=E.find(Sv);if(y){const p=y.props.children,M=E.map(T=>T===y?D.Children.count(p)>1?D.Children.only(null):D.isValidElement(p)?p.props.children:null:T);return S.jsx(r,{...x,ref:d,children:D.isValidElement(p)?D.cloneElement(p,void 0,M):null})}return S.jsx(r,{...x,ref:d,children:h})});return f.displayName=`${c}.Slot`,f}var Mm=gv("Slot");function yv(c){const r=D.forwardRef((f,o)=>{let{children:d,...h}=f;if(Nm(d)&&typeof mu=="function"&&(d=mu(d._payload)),D.isValidElement(d)){const x=Av(d),E=xv(h,d.props);return d.type!==D.Fragment&&(E.ref=o?$o(o,x):x),D.cloneElement(d,E)}return D.Children.count(d)>1?D.Children.only(null):null});return r.displayName=`${c}.SlotClone`,r}var bv=Symbol("radix.slottable");function Sv(c){return D.isValidElement(c)&&typeof c.type=="function"&&"__radixId"in c.type&&c.type.__radixId===bv}function xv(c,r){const f={...r};for(const o in r){const d=c[o],h=r[o];/^on[A-Z]/.test(o)?d&&h?f[o]=(...E)=>{const y=h(...E);return d(...E),y}:d&&(f[o]=d):o==="style"?f[o]={...d,...h}:o==="className"&&(f[o]=[d,h].filter(Boolean).join(" "))}return{...c,...f}}function Av(c){let r=Object.getOwnPropertyDescriptor(c.props,"ref")?.get,f=r&&"isReactWarning"in r&&r.isReactWarning;return f?c.ref:(r=Object.getOwnPropertyDescriptor(c,"ref")?.get,f=r&&"isReactWarning"in r&&r.isReactWarning,f?c.props.ref:c.props.ref||c.ref)}function Om(c){var r,f,o="";if(typeof c=="string"||typeof c=="number")o+=c;else if(typeof c=="object")if(Array.isArray(c)){var d=c.length;for(r=0;r<d;r++)c[r]&&(f=Om(c[r]))&&(o&&(o+=" "),o+=f)}else for(f in c)c[f]&&(o&&(o+=" "),o+=f);return o}function Dm(){for(var c,r,f=0,o="",d=arguments.length;f<d;f++)(c=arguments[f])&&(r=Om(c))&&(o&&(o+=" "),o+=r);return o}const gm=c=>typeof c=="boolean"?`${c}`:c===0?"0":c,ym=Dm,Rm=(c,r)=>f=>{var o;if(r?.variants==null)return ym(c,f?.class,f?.className);const{variants:d,defaultVariants:h}=r,x=Object.keys(d).map(p=>{const M=f?.[p],T=h?.[p];if(M===null)return null;const U=gm(M)||gm(T);return d[p][U]}),E=f&&Object.entries(f).reduce((p,M)=>{let[T,U]=M;return U===void 0||(p[T]=U),p},{}),y=r==null||(o=r.compoundVariants)===null||o===void 0?void 0:o.reduce((p,M)=>{let{class:T,className:U,...Y}=M;return Object.entries(Y).every(J=>{let[et,st]=J;return Array.isArray(st)?st.includes({...h,...E}[et]):{...h,...E}[et]===st})?[...p,T,U]:p},[]);return ym(c,x,y,f?.class,f?.className)},Gv=(c,r)=>{const f=new Array(c.length+r.length);for(let o=0;o<c.length;o++)f[o]=c[o];for(let o=0;o<r.length;o++)f[c.length+o]=r[o];return f},Ev=(c,r)=>({classGroupId:c,validator:r}),jm=(c=new Map,r=null,f)=>({nextPart:c,validators:r,classGroupId:f}),hu="-",bm=[],zv="arbitrary..",Tv=c=>{const r=_v(c),{conflictingClassGroups:f,conflictingClassGroupModifiers:o}=c;return{getClassGroupId:x=>{if(x.startsWith("[")&&x.endsWith("]"))return Cv(x);const E=x.split(hu),y=E[0]===""&&E.length>1?1:0;return Um(E,y,r)},getConflictingClassGroupIds:(x,E)=>{if(E){const y=o[x],p=f[x];return y?p?Gv(p,y):y:p||bm}return f[x]||bm}}},Um=(c,r,f)=>{if(c.length-r===0)return f.classGroupId;const d=c[r],h=f.nextPart.get(d);if(h){const p=Um(c,r+1,h);if(p)return p}const x=f.validators;if(x===null)return;const E=r===0?c.join(hu):c.slice(r).join(hu),y=x.length;for(let p=0;p<y;p++){const M=x[p];if(M.validator(E))return M.classGroupId}},Cv=c=>c.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const r=c.slice(1,-1),f=r.indexOf(":"),o=r.slice(0,f);return o?zv+o:void 0})(),_v=c=>{const{theme:r,classGroups:f}=c;return Nv(f,r)},Nv=(c,r)=>{const f=jm();for(const o in c){const d=c[o];Fo(d,f,o,r)}return f},Fo=(c,r,f,o)=>{const d=c.length;for(let h=0;h<d;h++){const x=c[h];Mv(x,r,f,o)}},Mv=(c,r,f,o)=>{if(typeof c=="string"){Ov(c,r,f);return}if(typeof c=="function"){Dv(c,r,f,o);return}Rv(c,r,f,o)},Ov=(c,r,f)=>{const o=c===""?r:wm(r,c);o.classGroupId=f},Dv=(c,r,f,o)=>{if(jv(c)){Fo(c(o),r,f,o);return}r.validators===null&&(r.validators=[]),r.validators.push(Ev(f,c))},Rv=(c,r,f,o)=>{const d=Object.entries(c),h=d.length;for(let x=0;x<h;x++){const[E,y]=d[x];Fo(y,wm(r,E),f,o)}},wm=(c,r)=>{let f=c;const o=r.split(hu),d=o.length;for(let h=0;h<d;h++){const x=o[h];let E=f.nextPart.get(x);E||(E=jm(),f.nextPart.set(x,E)),f=E}return f},jv=c=>"isThemeGetter"in c&&c.isThemeGetter===!0,Uv=c=>{if(c<1)return{get:()=>{},set:()=>{}};let r=0,f=Object.create(null),o=Object.create(null);const d=(h,x)=>{f[h]=x,r++,r>c&&(r=0,o=f,f=Object.create(null))};return{get(h){let x=f[h];if(x!==void 0)return x;if((x=o[h])!==void 0)return d(h,x),x},set(h,x){h in f?f[h]=x:d(h,x)}}},Ko="!",Sm=":",wv=[],xm=(c,r,f,o,d)=>({modifiers:c,hasImportantModifier:r,baseClassName:f,maybePostfixModifierPosition:o,isExternal:d}),Hv=c=>{const{prefix:r,experimentalParseClassName:f}=c;let o=d=>{const h=[];let x=0,E=0,y=0,p;const M=d.length;for(let et=0;et<M;et++){const st=d[et];if(x===0&&E===0){if(st===Sm){h.push(d.slice(y,et)),y=et+1;continue}if(st==="/"){p=et;continue}}st==="["?x++:st==="]"?x--:st==="("?E++:st===")"&&E--}const T=h.length===0?d:d.slice(y);let U=T,Y=!1;T.endsWith(Ko)?(U=T.slice(0,-1),Y=!0):T.startsWith(Ko)&&(U=T.slice(1),Y=!0);const J=p&&p>y?p-y:void 0;return xm(h,Y,U,J)};if(r){const d=r+Sm,h=o;o=x=>x.startsWith(d)?h(x.slice(d.length)):xm(wv,!1,x,void 0,!0)}if(f){const d=o;o=h=>f({className:h,parseClassName:d})}return o},Bv=c=>{const r=new Map;return c.orderSensitiveModifiers.forEach((f,o)=>{r.set(f,1e6+o)}),f=>{const o=[];let d=[];for(let h=0;h<f.length;h++){const x=f[h],E=x[0]==="[",y=r.has(x);E||y?(d.length>0&&(d.sort(),o.push(...d),d=[]),o.push(x)):d.push(x)}return d.length>0&&(d.sort(),o.push(...d)),o}},Yv=c=>({cache:Uv(c.cacheSize),parseClassName:Hv(c),sortModifiers:Bv(c),...Tv(c)}),qv=/\s+/,Xv=(c,r)=>{const{parseClassName:f,getClassGroupId:o,getConflictingClassGroupIds:d,sortModifiers:h}=r,x=[],E=c.trim().split(qv);let y="";for(let p=E.length-1;p>=0;p-=1){const M=E[p],{isExternal:T,modifiers:U,hasImportantModifier:Y,baseClassName:J,maybePostfixModifierPosition:et}=f(M);if(T){y=M+(y.length>0?" "+y:y);continue}let st=!!et,vt=o(st?J.substring(0,et):J);if(!vt){if(!st){y=M+(y.length>0?" "+y:y);continue}if(vt=o(J),!vt){y=M+(y.length>0?" "+y:y);continue}st=!1}const Qt=U.length===0?"":U.length===1?U[0]:h(U).join(":"),Et=Y?Qt+Ko:Qt,_t=Et+vt;if(x.indexOf(_t)>-1)continue;x.push(_t);const Mt=d(vt,st);for(let bt=0;bt<Mt.length;++bt){const F=Mt[bt];x.push(Et+F)}y=M+(y.length>0?" "+y:y)}return y},Lv=(...c)=>{let r=0,f,o,d="";for(;r<c.length;)(f=c[r++])&&(o=Hm(f))&&(d&&(d+=" "),d+=o);return d},Hm=c=>{if(typeof c=="string")return c;let r,f="";for(let o=0;o<c.length;o++)c[o]&&(r=Hm(c[o]))&&(f&&(f+=" "),f+=r);return f},Vv=(c,...r)=>{let f,o,d,h;const x=y=>{const p=r.reduce((M,T)=>T(M),c());return f=Yv(p),o=f.cache.get,d=f.cache.set,h=E,E(y)},E=y=>{const p=o(y);if(p)return p;const M=Xv(y,f);return d(y,M),M};return h=x,(...y)=>h(Lv(...y))},Qv=[],Vt=c=>{const r=f=>f[c]||Qv;return r.isThemeGetter=!0,r},Bm=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Ym=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Zv=/^\d+\/\d+$/,Kv=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,kv=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Jv=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Wv=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,$v=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Qn=c=>Zv.test(c),at=c=>!!c&&!Number.isNaN(Number(c)),Ul=c=>!!c&&Number.isInteger(Number(c)),Qo=c=>c.endsWith("%")&&at(c.slice(0,-1)),cl=c=>Kv.test(c),Fv=()=>!0,Pv=c=>kv.test(c)&&!Jv.test(c),qm=()=>!1,Iv=c=>Wv.test(c),tg=c=>$v.test(c),eg=c=>!L(c)&&!V(c),lg=c=>Kn(c,Vm,qm),L=c=>Bm.test(c),en=c=>Kn(c,Qm,Pv),Zo=c=>Kn(c,cg,at),Am=c=>Kn(c,Xm,qm),ng=c=>Kn(c,Lm,tg),ou=c=>Kn(c,Zm,Iv),V=c=>Ym.test(c),La=c=>kn(c,Qm),ag=c=>kn(c,og),Gm=c=>kn(c,Xm),ig=c=>kn(c,Vm),ug=c=>kn(c,Lm),su=c=>kn(c,Zm,!0),Kn=(c,r,f)=>{const o=Bm.exec(c);return o?o[1]?r(o[1]):f(o[2]):!1},kn=(c,r,f=!1)=>{const o=Ym.exec(c);return o?o[1]?r(o[1]):f:!1},Xm=c=>c==="position"||c==="percentage",Lm=c=>c==="image"||c==="url",Vm=c=>c==="length"||c==="size"||c==="bg-size",Qm=c=>c==="length",cg=c=>c==="number",og=c=>c==="family-name",Zm=c=>c==="shadow",sg=()=>{const c=Vt("color"),r=Vt("font"),f=Vt("text"),o=Vt("font-weight"),d=Vt("tracking"),h=Vt("leading"),x=Vt("breakpoint"),E=Vt("container"),y=Vt("spacing"),p=Vt("radius"),M=Vt("shadow"),T=Vt("inset-shadow"),U=Vt("text-shadow"),Y=Vt("drop-shadow"),J=Vt("blur"),et=Vt("perspective"),st=Vt("aspect"),vt=Vt("ease"),Qt=Vt("animate"),Et=()=>["auto","avoid","all","avoid-page","page","left","right","column"],_t=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],Mt=()=>[..._t(),V,L],bt=()=>["auto","hidden","clip","visible","scroll"],F=()=>["auto","contain","none"],Q=()=>[V,L,y],nt=()=>[Qn,"full","auto",...Q()],Rt=()=>[Ul,"none","subgrid",V,L],wt=()=>["auto",{span:["full",Ul,V,L]},Ul,V,L],Ht=()=>[Ul,"auto",V,L],we=()=>["auto","min","max","fr",V,L],se=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Zt=()=>["start","end","center","stretch","center-safe","end-safe"],_=()=>["auto",...Q()],B=()=>[Qn,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...Q()],w=()=>[c,V,L],mt=()=>[..._t(),Gm,Am,{position:[V,L]}],pt=()=>["no-repeat",{repeat:["","x","y","space","round"]}],g=()=>["auto","cover","contain",ig,lg,{size:[V,L]}],R=()=>[Qo,La,en],H=()=>["","none","full",p,V,L],q=()=>["",at,La,en],$=()=>["solid","dashed","dotted","double"],lt=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],W=()=>[at,Qo,Gm,Am],Kt=()=>["","none",J,V,L],zt=()=>["none",at,V,L],He=()=>["none",at,V,L],ol=()=>[at,V,L],sl=()=>[Qn,"full",...Q()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[cl],breakpoint:[cl],color:[Fv],container:[cl],"drop-shadow":[cl],ease:["in","out","in-out"],font:[eg],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[cl],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[cl],shadow:[cl],spacing:["px",at],text:[cl],"text-shadow":[cl],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Qn,L,V,st]}],container:["container"],columns:[{columns:[at,L,V,E]}],"break-after":[{"break-after":Et()}],"break-before":[{"break-before":Et()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:Mt()}],overflow:[{overflow:bt()}],"overflow-x":[{"overflow-x":bt()}],"overflow-y":[{"overflow-y":bt()}],overscroll:[{overscroll:F()}],"overscroll-x":[{"overscroll-x":F()}],"overscroll-y":[{"overscroll-y":F()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:nt()}],"inset-x":[{"inset-x":nt()}],"inset-y":[{"inset-y":nt()}],start:[{start:nt()}],end:[{end:nt()}],top:[{top:nt()}],right:[{right:nt()}],bottom:[{bottom:nt()}],left:[{left:nt()}],visibility:["visible","invisible","collapse"],z:[{z:[Ul,"auto",V,L]}],basis:[{basis:[Qn,"full","auto",E,...Q()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[at,Qn,"auto","initial","none",L]}],grow:[{grow:["",at,V,L]}],shrink:[{shrink:["",at,V,L]}],order:[{order:[Ul,"first","last","none",V,L]}],"grid-cols":[{"grid-cols":Rt()}],"col-start-end":[{col:wt()}],"col-start":[{"col-start":Ht()}],"col-end":[{"col-end":Ht()}],"grid-rows":[{"grid-rows":Rt()}],"row-start-end":[{row:wt()}],"row-start":[{"row-start":Ht()}],"row-end":[{"row-end":Ht()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":we()}],"auto-rows":[{"auto-rows":we()}],gap:[{gap:Q()}],"gap-x":[{"gap-x":Q()}],"gap-y":[{"gap-y":Q()}],"justify-content":[{justify:[...se(),"normal"]}],"justify-items":[{"justify-items":[...Zt(),"normal"]}],"justify-self":[{"justify-self":["auto",...Zt()]}],"align-content":[{content:["normal",...se()]}],"align-items":[{items:[...Zt(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Zt(),{baseline:["","last"]}]}],"place-content":[{"place-content":se()}],"place-items":[{"place-items":[...Zt(),"baseline"]}],"place-self":[{"place-self":["auto",...Zt()]}],p:[{p:Q()}],px:[{px:Q()}],py:[{py:Q()}],ps:[{ps:Q()}],pe:[{pe:Q()}],pt:[{pt:Q()}],pr:[{pr:Q()}],pb:[{pb:Q()}],pl:[{pl:Q()}],m:[{m:_()}],mx:[{mx:_()}],my:[{my:_()}],ms:[{ms:_()}],me:[{me:_()}],mt:[{mt:_()}],mr:[{mr:_()}],mb:[{mb:_()}],ml:[{ml:_()}],"space-x":[{"space-x":Q()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":Q()}],"space-y-reverse":["space-y-reverse"],size:[{size:B()}],w:[{w:[E,"screen",...B()]}],"min-w":[{"min-w":[E,"screen","none",...B()]}],"max-w":[{"max-w":[E,"screen","none","prose",{screen:[x]},...B()]}],h:[{h:["screen","lh",...B()]}],"min-h":[{"min-h":["screen","lh","none",...B()]}],"max-h":[{"max-h":["screen","lh",...B()]}],"font-size":[{text:["base",f,La,en]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[o,V,Zo]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Qo,L]}],"font-family":[{font:[ag,L,r]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[d,V,L]}],"line-clamp":[{"line-clamp":[at,"none",V,Zo]}],leading:[{leading:[h,...Q()]}],"list-image":[{"list-image":["none",V,L]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",V,L]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:w()}],"text-color":[{text:w()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...$(),"wavy"]}],"text-decoration-thickness":[{decoration:[at,"from-font","auto",V,en]}],"text-decoration-color":[{decoration:w()}],"underline-offset":[{"underline-offset":[at,"auto",V,L]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:Q()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",V,L]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",V,L]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:mt()}],"bg-repeat":[{bg:pt()}],"bg-size":[{bg:g()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Ul,V,L],radial:["",V,L],conic:[Ul,V,L]},ug,ng]}],"bg-color":[{bg:w()}],"gradient-from-pos":[{from:R()}],"gradient-via-pos":[{via:R()}],"gradient-to-pos":[{to:R()}],"gradient-from":[{from:w()}],"gradient-via":[{via:w()}],"gradient-to":[{to:w()}],rounded:[{rounded:H()}],"rounded-s":[{"rounded-s":H()}],"rounded-e":[{"rounded-e":H()}],"rounded-t":[{"rounded-t":H()}],"rounded-r":[{"rounded-r":H()}],"rounded-b":[{"rounded-b":H()}],"rounded-l":[{"rounded-l":H()}],"rounded-ss":[{"rounded-ss":H()}],"rounded-se":[{"rounded-se":H()}],"rounded-ee":[{"rounded-ee":H()}],"rounded-es":[{"rounded-es":H()}],"rounded-tl":[{"rounded-tl":H()}],"rounded-tr":[{"rounded-tr":H()}],"rounded-br":[{"rounded-br":H()}],"rounded-bl":[{"rounded-bl":H()}],"border-w":[{border:q()}],"border-w-x":[{"border-x":q()}],"border-w-y":[{"border-y":q()}],"border-w-s":[{"border-s":q()}],"border-w-e":[{"border-e":q()}],"border-w-t":[{"border-t":q()}],"border-w-r":[{"border-r":q()}],"border-w-b":[{"border-b":q()}],"border-w-l":[{"border-l":q()}],"divide-x":[{"divide-x":q()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":q()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...$(),"hidden","none"]}],"divide-style":[{divide:[...$(),"hidden","none"]}],"border-color":[{border:w()}],"border-color-x":[{"border-x":w()}],"border-color-y":[{"border-y":w()}],"border-color-s":[{"border-s":w()}],"border-color-e":[{"border-e":w()}],"border-color-t":[{"border-t":w()}],"border-color-r":[{"border-r":w()}],"border-color-b":[{"border-b":w()}],"border-color-l":[{"border-l":w()}],"divide-color":[{divide:w()}],"outline-style":[{outline:[...$(),"none","hidden"]}],"outline-offset":[{"outline-offset":[at,V,L]}],"outline-w":[{outline:["",at,La,en]}],"outline-color":[{outline:w()}],shadow:[{shadow:["","none",M,su,ou]}],"shadow-color":[{shadow:w()}],"inset-shadow":[{"inset-shadow":["none",T,su,ou]}],"inset-shadow-color":[{"inset-shadow":w()}],"ring-w":[{ring:q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:w()}],"ring-offset-w":[{"ring-offset":[at,en]}],"ring-offset-color":[{"ring-offset":w()}],"inset-ring-w":[{"inset-ring":q()}],"inset-ring-color":[{"inset-ring":w()}],"text-shadow":[{"text-shadow":["none",U,su,ou]}],"text-shadow-color":[{"text-shadow":w()}],opacity:[{opacity:[at,V,L]}],"mix-blend":[{"mix-blend":[...lt(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":lt()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[at]}],"mask-image-linear-from-pos":[{"mask-linear-from":W()}],"mask-image-linear-to-pos":[{"mask-linear-to":W()}],"mask-image-linear-from-color":[{"mask-linear-from":w()}],"mask-image-linear-to-color":[{"mask-linear-to":w()}],"mask-image-t-from-pos":[{"mask-t-from":W()}],"mask-image-t-to-pos":[{"mask-t-to":W()}],"mask-image-t-from-color":[{"mask-t-from":w()}],"mask-image-t-to-color":[{"mask-t-to":w()}],"mask-image-r-from-pos":[{"mask-r-from":W()}],"mask-image-r-to-pos":[{"mask-r-to":W()}],"mask-image-r-from-color":[{"mask-r-from":w()}],"mask-image-r-to-color":[{"mask-r-to":w()}],"mask-image-b-from-pos":[{"mask-b-from":W()}],"mask-image-b-to-pos":[{"mask-b-to":W()}],"mask-image-b-from-color":[{"mask-b-from":w()}],"mask-image-b-to-color":[{"mask-b-to":w()}],"mask-image-l-from-pos":[{"mask-l-from":W()}],"mask-image-l-to-pos":[{"mask-l-to":W()}],"mask-image-l-from-color":[{"mask-l-from":w()}],"mask-image-l-to-color":[{"mask-l-to":w()}],"mask-image-x-from-pos":[{"mask-x-from":W()}],"mask-image-x-to-pos":[{"mask-x-to":W()}],"mask-image-x-from-color":[{"mask-x-from":w()}],"mask-image-x-to-color":[{"mask-x-to":w()}],"mask-image-y-from-pos":[{"mask-y-from":W()}],"mask-image-y-to-pos":[{"mask-y-to":W()}],"mask-image-y-from-color":[{"mask-y-from":w()}],"mask-image-y-to-color":[{"mask-y-to":w()}],"mask-image-radial":[{"mask-radial":[V,L]}],"mask-image-radial-from-pos":[{"mask-radial-from":W()}],"mask-image-radial-to-pos":[{"mask-radial-to":W()}],"mask-image-radial-from-color":[{"mask-radial-from":w()}],"mask-image-radial-to-color":[{"mask-radial-to":w()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":_t()}],"mask-image-conic-pos":[{"mask-conic":[at]}],"mask-image-conic-from-pos":[{"mask-conic-from":W()}],"mask-image-conic-to-pos":[{"mask-conic-to":W()}],"mask-image-conic-from-color":[{"mask-conic-from":w()}],"mask-image-conic-to-color":[{"mask-conic-to":w()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:mt()}],"mask-repeat":[{mask:pt()}],"mask-size":[{mask:g()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",V,L]}],filter:[{filter:["","none",V,L]}],blur:[{blur:Kt()}],brightness:[{brightness:[at,V,L]}],contrast:[{contrast:[at,V,L]}],"drop-shadow":[{"drop-shadow":["","none",Y,su,ou]}],"drop-shadow-color":[{"drop-shadow":w()}],grayscale:[{grayscale:["",at,V,L]}],"hue-rotate":[{"hue-rotate":[at,V,L]}],invert:[{invert:["",at,V,L]}],saturate:[{saturate:[at,V,L]}],sepia:[{sepia:["",at,V,L]}],"backdrop-filter":[{"backdrop-filter":["","none",V,L]}],"backdrop-blur":[{"backdrop-blur":Kt()}],"backdrop-brightness":[{"backdrop-brightness":[at,V,L]}],"backdrop-contrast":[{"backdrop-contrast":[at,V,L]}],"backdrop-grayscale":[{"backdrop-grayscale":["",at,V,L]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[at,V,L]}],"backdrop-invert":[{"backdrop-invert":["",at,V,L]}],"backdrop-opacity":[{"backdrop-opacity":[at,V,L]}],"backdrop-saturate":[{"backdrop-saturate":[at,V,L]}],"backdrop-sepia":[{"backdrop-sepia":["",at,V,L]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":Q()}],"border-spacing-x":[{"border-spacing-x":Q()}],"border-spacing-y":[{"border-spacing-y":Q()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",V,L]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[at,"initial",V,L]}],ease:[{ease:["linear","initial",vt,V,L]}],delay:[{delay:[at,V,L]}],animate:[{animate:["none",Qt,V,L]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[et,V,L]}],"perspective-origin":[{"perspective-origin":Mt()}],rotate:[{rotate:zt()}],"rotate-x":[{"rotate-x":zt()}],"rotate-y":[{"rotate-y":zt()}],"rotate-z":[{"rotate-z":zt()}],scale:[{scale:He()}],"scale-x":[{"scale-x":He()}],"scale-y":[{"scale-y":He()}],"scale-z":[{"scale-z":He()}],"scale-3d":["scale-3d"],skew:[{skew:ol()}],"skew-x":[{"skew-x":ol()}],"skew-y":[{"skew-y":ol()}],transform:[{transform:[V,L,"","none","gpu","cpu"]}],"transform-origin":[{origin:Mt()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:sl()}],"translate-x":[{"translate-x":sl()}],"translate-y":[{"translate-y":sl()}],"translate-z":[{"translate-z":sl()}],"translate-none":["translate-none"],accent:[{accent:w()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:w()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",V,L]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":Q()}],"scroll-mx":[{"scroll-mx":Q()}],"scroll-my":[{"scroll-my":Q()}],"scroll-ms":[{"scroll-ms":Q()}],"scroll-me":[{"scroll-me":Q()}],"scroll-mt":[{"scroll-mt":Q()}],"scroll-mr":[{"scroll-mr":Q()}],"scroll-mb":[{"scroll-mb":Q()}],"scroll-ml":[{"scroll-ml":Q()}],"scroll-p":[{"scroll-p":Q()}],"scroll-px":[{"scroll-px":Q()}],"scroll-py":[{"scroll-py":Q()}],"scroll-ps":[{"scroll-ps":Q()}],"scroll-pe":[{"scroll-pe":Q()}],"scroll-pt":[{"scroll-pt":Q()}],"scroll-pr":[{"scroll-pr":Q()}],"scroll-pb":[{"scroll-pb":Q()}],"scroll-pl":[{"scroll-pl":Q()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",V,L]}],fill:[{fill:["none",...w()]}],"stroke-w":[{stroke:[at,La,en,Zo]}],stroke:[{stroke:["none",...w()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},rg=Vv(sg);function Me(...c){return rg(Dm(c))}const fg=Rm("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}});function dg({className:c,variant:r="default",size:f="default",asChild:o=!1,...d}){const h=o?Mm:"button";return S.jsx(h,{"code-path":"src/components/ui/button.tsx:52:5","data-slot":"button","data-variant":r,"data-size":f,className:Me(fg({variant:r,size:f,className:c})),...d})}zm();function mg(c){const r=hg(c),f=D.forwardRef((o,d)=>{const{children:h,...x}=o,E=D.Children.toArray(h),y=E.find(vg);if(y){const p=y.props.children,M=E.map(T=>T===y?D.Children.count(p)>1?D.Children.only(null):D.isValidElement(p)?p.props.children:null:T);return S.jsx(r,{...x,ref:d,children:D.isValidElement(p)?D.cloneElement(p,void 0,M):null})}return S.jsx(r,{...x,ref:d,children:h})});return f.displayName=`${c}.Slot`,f}function hg(c){const r=D.forwardRef((f,o)=>{const{children:d,...h}=f;if(D.isValidElement(d)){const x=yg(d),E=gg(h,d.props);return d.type!==D.Fragment&&(E.ref=o?$o(o,x):x),D.cloneElement(d,E)}return D.Children.count(d)>1?D.Children.only(null):null});return r.displayName=`${c}.SlotClone`,r}var pg=Symbol("radix.slottable");function vg(c){return D.isValidElement(c)&&typeof c.type=="function"&&"__radixId"in c.type&&c.type.__radixId===pg}function gg(c,r){const f={...r};for(const o in r){const d=c[o],h=r[o];/^on[A-Z]/.test(o)?d&&h?f[o]=(...E)=>{const y=h(...E);return d(...E),y}:d&&(f[o]=d):o==="style"?f[o]={...d,...h}:o==="className"&&(f[o]=[d,h].filter(Boolean).join(" "))}return{...c,...f}}function yg(c){let r=Object.getOwnPropertyDescriptor(c.props,"ref")?.get,f=r&&"isReactWarning"in r&&r.isReactWarning;return f?c.ref:(r=Object.getOwnPropertyDescriptor(c,"ref")?.get,f=r&&"isReactWarning"in r&&r.isReactWarning,f?c.props.ref:c.props.ref||c.ref)}var bg=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Va=bg.reduce((c,r)=>{const f=mg(`Primitive.${r}`),o=D.forwardRef((d,h)=>{const{asChild:x,...E}=d,y=x?f:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),S.jsx(y,{...E,ref:h})});return o.displayName=`Primitive.${r}`,{...c,[r]:o}},{}),ko=globalThis?.document?D.useLayoutEffect:()=>{};function Sg(c,r){return D.useReducer((f,o)=>r[f][o]??f,c)}var Qa=c=>{const{present:r,children:f}=c,o=xg(r),d=typeof f=="function"?f({present:o.isPresent}):D.Children.only(f),h=an(o.ref,Ag(d));return typeof f=="function"||o.isPresent?D.cloneElement(d,{ref:h}):null};Qa.displayName="Presence";function xg(c){const[r,f]=D.useState(),o=D.useRef(null),d=D.useRef(c),h=D.useRef("none"),x=c?"mounted":"unmounted",[E,y]=Sg(x,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return D.useEffect(()=>{const p=ru(o.current);h.current=E==="mounted"?p:"none"},[E]),ko(()=>{const p=o.current,M=d.current;if(M!==c){const U=h.current,Y=ru(p);c?y("MOUNT"):Y==="none"||p?.display==="none"?y("UNMOUNT"):y(M&&U!==Y?"ANIMATION_OUT":"UNMOUNT"),d.current=c}},[c,y]),ko(()=>{if(r){let p;const M=r.ownerDocument.defaultView??window,T=Y=>{const et=ru(o.current).includes(CSS.escape(Y.animationName));if(Y.target===r&&et&&(y("ANIMATION_END"),!d.current)){const st=r.style.animationFillMode;r.style.animationFillMode="forwards",p=M.setTimeout(()=>{r.style.animationFillMode==="forwards"&&(r.style.animationFillMode=st)})}},U=Y=>{Y.target===r&&(h.current=ru(o.current))};return r.addEventListener("animationstart",U),r.addEventListener("animationcancel",T),r.addEventListener("animationend",T),()=>{M.clearTimeout(p),r.removeEventListener("animationstart",U),r.removeEventListener("animationcancel",T),r.removeEventListener("animationend",T)}}else y("ANIMATION_END")},[r,y]),{isPresent:["mounted","unmountSuspended"].includes(E),ref:D.useCallback(p=>{o.current=p?getComputedStyle(p):null,f(p)},[])}}function ru(c){return c?.animationName||"none"}function Ag(c){let r=Object.getOwnPropertyDescriptor(c.props,"ref")?.get,f=r&&"isReactWarning"in r&&r.isReactWarning;return f?c.ref:(r=Object.getOwnPropertyDescriptor(c,"ref")?.get,f=r&&"isReactWarning"in r&&r.isReactWarning,f?c.props.ref:c.props.ref||c.ref)}function Gg(c,r=[]){let f=[];function o(h,x){const E=D.createContext(x),y=f.length;f=[...f,x];const p=T=>{const{scope:U,children:Y,...J}=T,et=U?.[c]?.[y]||E,st=D.useMemo(()=>J,Object.values(J));return S.jsx(et.Provider,{value:st,children:Y})};p.displayName=h+"Provider";function M(T,U){const Y=U?.[c]?.[y]||E,J=D.useContext(Y);if(J)return J;if(x!==void 0)return x;throw new Error(`\`${T}\` must be used within \`${h}\``)}return[p,M]}const d=()=>{const h=f.map(x=>D.createContext(x));return function(E){const y=E?.[c]||h;return D.useMemo(()=>({[`__scope${c}`]:{...E,[c]:y}}),[E,y])}};return d.scopeName=c,[o,Eg(d,...r)]}function Eg(...c){const r=c[0];if(c.length===1)return r;const f=()=>{const o=c.map(d=>({useScope:d(),scopeName:d.scopeName}));return function(h){const x=o.reduce((E,{useScope:y,scopeName:p})=>{const T=y(h)[`__scope${p}`];return{...E,...T}},{});return D.useMemo(()=>({[`__scope${r.scopeName}`]:x}),[x])}};return f.scopeName=r.scopeName,f}function ln(c){const r=D.useRef(c);return D.useEffect(()=>{r.current=c}),D.useMemo(()=>(...f)=>r.current?.(...f),[])}var zg=D.createContext(void 0);function Tg(c){const r=D.useContext(zg);return c||r||"ltr"}function Cg(c,[r,f]){return Math.min(f,Math.max(r,c))}function nn(c,r,{checkForDefaultPrevented:f=!0}={}){return function(d){if(c?.(d),f===!1||!d.defaultPrevented)return r?.(d)}}function _g(c,r){return D.useReducer((f,o)=>r[f][o]??f,c)}var Po="ScrollArea",[Km]=Gg(Po),[Ng,Oe]=Km(Po),km=D.forwardRef((c,r)=>{const{__scopeScrollArea:f,type:o="hover",dir:d,scrollHideDelay:h=600,...x}=c,[E,y]=D.useState(null),[p,M]=D.useState(null),[T,U]=D.useState(null),[Y,J]=D.useState(null),[et,st]=D.useState(null),[vt,Qt]=D.useState(0),[Et,_t]=D.useState(0),[Mt,bt]=D.useState(!1),[F,Q]=D.useState(!1),nt=an(r,wt=>y(wt)),Rt=Tg(d);return S.jsx(Ng,{scope:f,type:o,dir:Rt,scrollHideDelay:h,scrollArea:E,viewport:p,onViewportChange:M,content:T,onContentChange:U,scrollbarX:Y,onScrollbarXChange:J,scrollbarXEnabled:Mt,onScrollbarXEnabledChange:bt,scrollbarY:et,onScrollbarYChange:st,scrollbarYEnabled:F,onScrollbarYEnabledChange:Q,onCornerWidthChange:Qt,onCornerHeightChange:_t,children:S.jsx(Va.div,{dir:Rt,...x,ref:nt,style:{position:"relative","--radix-scroll-area-corner-width":vt+"px","--radix-scroll-area-corner-height":Et+"px",...c.style}})})});km.displayName=Po;var Jm="ScrollAreaViewport",Wm=D.forwardRef((c,r)=>{const{__scopeScrollArea:f,children:o,nonce:d,...h}=c,x=Oe(Jm,f),E=D.useRef(null),y=an(r,E,x.onViewportChange);return S.jsxs(S.Fragment,{children:[S.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:d}),S.jsx(Va.div,{"data-radix-scroll-area-viewport":"",...h,ref:y,style:{overflowX:x.scrollbarXEnabled?"scroll":"hidden",overflowY:x.scrollbarYEnabled?"scroll":"hidden",...c.style},children:S.jsx("div",{ref:x.onContentChange,style:{minWidth:"100%",display:"table"},children:o})})]})});Wm.displayName=Jm;var Le="ScrollAreaScrollbar",$m=D.forwardRef((c,r)=>{const{forceMount:f,...o}=c,d=Oe(Le,c.__scopeScrollArea),{onScrollbarXEnabledChange:h,onScrollbarYEnabledChange:x}=d,E=c.orientation==="horizontal";return D.useEffect(()=>(E?h(!0):x(!0),()=>{E?h(!1):x(!1)}),[E,h,x]),d.type==="hover"?S.jsx(Mg,{...o,ref:r,forceMount:f}):d.type==="scroll"?S.jsx(Og,{...o,ref:r,forceMount:f}):d.type==="auto"?S.jsx(Fm,{...o,ref:r,forceMount:f}):d.type==="always"?S.jsx(Io,{...o,ref:r}):null});$m.displayName=Le;var Mg=D.forwardRef((c,r)=>{const{forceMount:f,...o}=c,d=Oe(Le,c.__scopeScrollArea),[h,x]=D.useState(!1);return D.useEffect(()=>{const E=d.scrollArea;let y=0;if(E){const p=()=>{window.clearTimeout(y),x(!0)},M=()=>{y=window.setTimeout(()=>x(!1),d.scrollHideDelay)};return E.addEventListener("pointerenter",p),E.addEventListener("pointerleave",M),()=>{window.clearTimeout(y),E.removeEventListener("pointerenter",p),E.removeEventListener("pointerleave",M)}}},[d.scrollArea,d.scrollHideDelay]),S.jsx(Qa,{present:f||h,children:S.jsx(Fm,{"data-state":h?"visible":"hidden",...o,ref:r})})}),Og=D.forwardRef((c,r)=>{const{forceMount:f,...o}=c,d=Oe(Le,c.__scopeScrollArea),h=c.orientation==="horizontal",x=yu(()=>y("SCROLL_END"),100),[E,y]=_g("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return D.useEffect(()=>{if(E==="idle"){const p=window.setTimeout(()=>y("HIDE"),d.scrollHideDelay);return()=>window.clearTimeout(p)}},[E,d.scrollHideDelay,y]),D.useEffect(()=>{const p=d.viewport,M=h?"scrollLeft":"scrollTop";if(p){let T=p[M];const U=()=>{const Y=p[M];T!==Y&&(y("SCROLL"),x()),T=Y};return p.addEventListener("scroll",U),()=>p.removeEventListener("scroll",U)}},[d.viewport,h,y,x]),S.jsx(Qa,{present:f||E!=="hidden",children:S.jsx(Io,{"data-state":E==="hidden"?"hidden":"visible",...o,ref:r,onPointerEnter:nn(c.onPointerEnter,()=>y("POINTER_ENTER")),onPointerLeave:nn(c.onPointerLeave,()=>y("POINTER_LEAVE"))})})}),Fm=D.forwardRef((c,r)=>{const f=Oe(Le,c.__scopeScrollArea),{forceMount:o,...d}=c,[h,x]=D.useState(!1),E=c.orientation==="horizontal",y=yu(()=>{if(f.viewport){const p=f.viewport.offsetWidth<f.viewport.scrollWidth,M=f.viewport.offsetHeight<f.viewport.scrollHeight;x(E?p:M)}},10);return Zn(f.viewport,y),Zn(f.content,y),S.jsx(Qa,{present:o||h,children:S.jsx(Io,{"data-state":h?"visible":"hidden",...d,ref:r})})}),Io=D.forwardRef((c,r)=>{const{orientation:f="vertical",...o}=c,d=Oe(Le,c.__scopeScrollArea),h=D.useRef(null),x=D.useRef(0),[E,y]=D.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),p=lh(E.viewport,E.content),M={...o,sizes:E,onSizesChange:y,hasThumb:p>0&&p<1,onThumbChange:U=>h.current=U,onThumbPointerUp:()=>x.current=0,onThumbPointerDown:U=>x.current=U};function T(U,Y){return Hg(U,x.current,E,Y)}return f==="horizontal"?S.jsx(Dg,{...M,ref:r,onThumbPositionChange:()=>{if(d.viewport&&h.current){const U=d.viewport.scrollLeft,Y=Em(U,E,d.dir);h.current.style.transform=`translate3d(${Y}px, 0, 0)`}},onWheelScroll:U=>{d.viewport&&(d.viewport.scrollLeft=U)},onDragScroll:U=>{d.viewport&&(d.viewport.scrollLeft=T(U,d.dir))}}):f==="vertical"?S.jsx(Rg,{...M,ref:r,onThumbPositionChange:()=>{if(d.viewport&&h.current){const U=d.viewport.scrollTop,Y=Em(U,E);h.current.style.transform=`translate3d(0, ${Y}px, 0)`}},onWheelScroll:U=>{d.viewport&&(d.viewport.scrollTop=U)},onDragScroll:U=>{d.viewport&&(d.viewport.scrollTop=T(U))}}):null}),Dg=D.forwardRef((c,r)=>{const{sizes:f,onSizesChange:o,...d}=c,h=Oe(Le,c.__scopeScrollArea),[x,E]=D.useState(),y=D.useRef(null),p=an(r,y,h.onScrollbarXChange);return D.useEffect(()=>{y.current&&E(getComputedStyle(y.current))},[y]),S.jsx(Im,{"data-orientation":"horizontal",...d,ref:p,sizes:f,style:{bottom:0,left:h.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:h.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":gu(f)+"px",...c.style},onThumbPointerDown:M=>c.onThumbPointerDown(M.x),onDragScroll:M=>c.onDragScroll(M.x),onWheelScroll:(M,T)=>{if(h.viewport){const U=h.viewport.scrollLeft+M.deltaX;c.onWheelScroll(U),ah(U,T)&&M.preventDefault()}},onResize:()=>{y.current&&h.viewport&&x&&o({content:h.viewport.scrollWidth,viewport:h.viewport.offsetWidth,scrollbar:{size:y.current.clientWidth,paddingStart:vu(x.paddingLeft),paddingEnd:vu(x.paddingRight)}})}})}),Rg=D.forwardRef((c,r)=>{const{sizes:f,onSizesChange:o,...d}=c,h=Oe(Le,c.__scopeScrollArea),[x,E]=D.useState(),y=D.useRef(null),p=an(r,y,h.onScrollbarYChange);return D.useEffect(()=>{y.current&&E(getComputedStyle(y.current))},[y]),S.jsx(Im,{"data-orientation":"vertical",...d,ref:p,sizes:f,style:{top:0,right:h.dir==="ltr"?0:void 0,left:h.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":gu(f)+"px",...c.style},onThumbPointerDown:M=>c.onThumbPointerDown(M.y),onDragScroll:M=>c.onDragScroll(M.y),onWheelScroll:(M,T)=>{if(h.viewport){const U=h.viewport.scrollTop+M.deltaY;c.onWheelScroll(U),ah(U,T)&&M.preventDefault()}},onResize:()=>{y.current&&h.viewport&&x&&o({content:h.viewport.scrollHeight,viewport:h.viewport.offsetHeight,scrollbar:{size:y.current.clientHeight,paddingStart:vu(x.paddingTop),paddingEnd:vu(x.paddingBottom)}})}})}),[jg,Pm]=Km(Le),Im=D.forwardRef((c,r)=>{const{__scopeScrollArea:f,sizes:o,hasThumb:d,onThumbChange:h,onThumbPointerUp:x,onThumbPointerDown:E,onThumbPositionChange:y,onDragScroll:p,onWheelScroll:M,onResize:T,...U}=c,Y=Oe(Le,f),[J,et]=D.useState(null),st=an(r,nt=>et(nt)),vt=D.useRef(null),Qt=D.useRef(""),Et=Y.viewport,_t=o.content-o.viewport,Mt=ln(M),bt=ln(y),F=yu(T,10);function Q(nt){if(vt.current){const Rt=nt.clientX-vt.current.left,wt=nt.clientY-vt.current.top;p({x:Rt,y:wt})}}return D.useEffect(()=>{const nt=Rt=>{const wt=Rt.target;J?.contains(wt)&&Mt(Rt,_t)};return document.addEventListener("wheel",nt,{passive:!1}),()=>document.removeEventListener("wheel",nt,{passive:!1})},[Et,J,_t,Mt]),D.useEffect(bt,[o,bt]),Zn(J,F),Zn(Y.content,F),S.jsx(jg,{scope:f,scrollbar:J,hasThumb:d,onThumbChange:ln(h),onThumbPointerUp:ln(x),onThumbPositionChange:bt,onThumbPointerDown:ln(E),children:S.jsx(Va.div,{...U,ref:st,style:{position:"absolute",...U.style},onPointerDown:nn(c.onPointerDown,nt=>{nt.button===0&&(nt.target.setPointerCapture(nt.pointerId),vt.current=J.getBoundingClientRect(),Qt.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",Y.viewport&&(Y.viewport.style.scrollBehavior="auto"),Q(nt))}),onPointerMove:nn(c.onPointerMove,Q),onPointerUp:nn(c.onPointerUp,nt=>{const Rt=nt.target;Rt.hasPointerCapture(nt.pointerId)&&Rt.releasePointerCapture(nt.pointerId),document.body.style.webkitUserSelect=Qt.current,Y.viewport&&(Y.viewport.style.scrollBehavior=""),vt.current=null})})})}),pu="ScrollAreaThumb",th=D.forwardRef((c,r)=>{const{forceMount:f,...o}=c,d=Pm(pu,c.__scopeScrollArea);return S.jsx(Qa,{present:f||d.hasThumb,children:S.jsx(Ug,{ref:r,...o})})}),Ug=D.forwardRef((c,r)=>{const{__scopeScrollArea:f,style:o,...d}=c,h=Oe(pu,f),x=Pm(pu,f),{onThumbPositionChange:E}=x,y=an(r,T=>x.onThumbChange(T)),p=D.useRef(void 0),M=yu(()=>{p.current&&(p.current(),p.current=void 0)},100);return D.useEffect(()=>{const T=h.viewport;if(T){const U=()=>{if(M(),!p.current){const Y=Bg(T,E);p.current=Y,E()}};return E(),T.addEventListener("scroll",U),()=>T.removeEventListener("scroll",U)}},[h.viewport,M,E]),S.jsx(Va.div,{"data-state":x.hasThumb?"visible":"hidden",...d,ref:y,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...o},onPointerDownCapture:nn(c.onPointerDownCapture,T=>{const Y=T.target.getBoundingClientRect(),J=T.clientX-Y.left,et=T.clientY-Y.top;x.onThumbPointerDown({x:J,y:et})}),onPointerUp:nn(c.onPointerUp,x.onThumbPointerUp)})});th.displayName=pu;var ts="ScrollAreaCorner",eh=D.forwardRef((c,r)=>{const f=Oe(ts,c.__scopeScrollArea),o=!!(f.scrollbarX&&f.scrollbarY);return f.type!=="scroll"&&o?S.jsx(wg,{...c,ref:r}):null});eh.displayName=ts;var wg=D.forwardRef((c,r)=>{const{__scopeScrollArea:f,...o}=c,d=Oe(ts,f),[h,x]=D.useState(0),[E,y]=D.useState(0),p=!!(h&&E);return Zn(d.scrollbarX,()=>{const M=d.scrollbarX?.offsetHeight||0;d.onCornerHeightChange(M),y(M)}),Zn(d.scrollbarY,()=>{const M=d.scrollbarY?.offsetWidth||0;d.onCornerWidthChange(M),x(M)}),p?S.jsx(Va.div,{...o,ref:r,style:{width:h,height:E,position:"absolute",right:d.dir==="ltr"?0:void 0,left:d.dir==="rtl"?0:void 0,bottom:0,...c.style}}):null});function vu(c){return c?parseInt(c,10):0}function lh(c,r){const f=c/r;return isNaN(f)?0:f}function gu(c){const r=lh(c.viewport,c.content),f=c.scrollbar.paddingStart+c.scrollbar.paddingEnd,o=(c.scrollbar.size-f)*r;return Math.max(o,18)}function Hg(c,r,f,o="ltr"){const d=gu(f),h=d/2,x=r||h,E=d-x,y=f.scrollbar.paddingStart+x,p=f.scrollbar.size-f.scrollbar.paddingEnd-E,M=f.content-f.viewport,T=o==="ltr"?[0,M]:[M*-1,0];return nh([y,p],T)(c)}function Em(c,r,f="ltr"){const o=gu(r),d=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,h=r.scrollbar.size-d,x=r.content-r.viewport,E=h-o,y=f==="ltr"?[0,x]:[x*-1,0],p=Cg(c,y);return nh([0,x],[0,E])(p)}function nh(c,r){return f=>{if(c[0]===c[1]||r[0]===r[1])return r[0];const o=(r[1]-r[0])/(c[1]-c[0]);return r[0]+o*(f-c[0])}}function ah(c,r){return c>0&&c<r}var Bg=(c,r=()=>{})=>{let f={left:c.scrollLeft,top:c.scrollTop},o=0;return(function d(){const h={left:c.scrollLeft,top:c.scrollTop},x=f.left!==h.left,E=f.top!==h.top;(x||E)&&r(),f=h,o=window.requestAnimationFrame(d)})(),()=>window.cancelAnimationFrame(o)};function yu(c,r){const f=ln(c),o=D.useRef(0);return D.useEffect(()=>()=>window.clearTimeout(o.current),[]),D.useCallback(()=>{window.clearTimeout(o.current),o.current=window.setTimeout(f,r)},[f,r])}function Zn(c,r){const f=ln(r);ko(()=>{let o=0;if(c){const d=new ResizeObserver(()=>{cancelAnimationFrame(o),o=window.requestAnimationFrame(f)});return d.observe(c),()=>{window.cancelAnimationFrame(o),d.unobserve(c)}}},[c,f])}var Yg=km,qg=Wm,Xg=eh;function ih({className:c,children:r,...f}){return S.jsxs(Yg,{"code-path":"src/components/ui/scroll-area.tsx:14:5","data-slot":"scroll-area",className:Me("relative",c),...f,children:[S.jsx(qg,{"code-path":"src/components/ui/scroll-area.tsx:19:7","data-slot":"scroll-area-viewport",className:"focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",children:r}),S.jsx(Lg,{"code-path":"src/components/ui/scroll-area.tsx:25:7"}),S.jsx(Xg,{"code-path":"src/components/ui/scroll-area.tsx:26:7"})]})}function Lg({className:c,orientation:r="vertical",...f}){return S.jsx($m,{"code-path":"src/components/ui/scroll-area.tsx:37:5","data-slot":"scroll-area-scrollbar",orientation:r,className:Me("flex touch-none p-px transition-colors select-none",r==="vertical"&&"h-full w-2.5 border-l border-l-transparent",r==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent",c),...f,children:S.jsx(th,{"code-path":"src/components/ui/scroll-area.tsx:50:7","data-slot":"scroll-area-thumb",className:"bg-border relative flex-1 rounded-full"})})}function Vg({currentChapter:c,currentSection:r,onChapterSelect:f,onSectionSelect:o,isOpen:d,onToggle:h}){const[x,E]=D.useState([]);D.useEffect(()=>{c&&!x.includes(c)&&E(T=>[...T,c])},[c]);const y=T=>{E(U=>U.includes(T)?U.filter(J=>J!==T):[...U,T])},p=T=>{x.includes(T)?y(T):(y(T),f(T))},M=T=>x.includes(T);return S.jsxs(S.Fragment,{children:[S.jsx(dg,{"code-path":"src/components/Sidebar.tsx:66:7",variant:"ghost",size:"icon",className:"fixed top-4 left-4 z-50 lg:hidden",onClick:h,children:d?S.jsx(rv,{"code-path":"src/components/Sidebar.tsx:72:19",className:"h-6 w-6"}):S.jsx(nv,{"code-path":"src/components/Sidebar.tsx:72:47",className:"h-6 w-6"})}),S.jsx("aside",{"code-path":"src/components/Sidebar.tsx:76:7",className:Me("fixed left-0 top-0 z-40 h-full w-80 bg-slate-50 border-r border-slate-200 transition-transform duration-300 ease-in-out lg:translate-x-0",d?"translate-x-0":"-translate-x-full"),children:S.jsxs("div",{"code-path":"src/components/Sidebar.tsx:82:9",className:"flex flex-col h-full overflow-hidden",children:[S.jsx("div",{"code-path":"src/components/Sidebar.tsx:84:11",className:"p-6 border-b border-slate-200 bg-gradient-to-r from-blue-600 to-indigo-600 flex-shrink-0",children:S.jsxs("button",{"code-path":"src/components/Sidebar.tsx:85:13",onClick:()=>f(null),className:"flex items-center gap-3 w-full text-left",children:[S.jsx("div",{"code-path":"src/components/Sidebar.tsx:89:15",className:"p-2 bg-white/20 rounded-lg",children:S.jsx(Wo,{"code-path":"src/components/Sidebar.tsx:90:17",className:"h-6 w-6 text-white"})}),S.jsxs("div",{"code-path":"src/components/Sidebar.tsx:92:15",children:[S.jsx("h1",{"code-path":"src/components/Sidebar.tsx:93:17",className:"font-bold text-white text-lg leading-tight",children:"Gemini AI"}),S.jsx("p",{"code-path":"src/components/Sidebar.tsx:96:17",className:"text-blue-100 text-sm",children:"商用All-in-1指南"})]})]})}),S.jsx("div",{"code-path":"src/components/Sidebar.tsx:102:11",className:"flex-1 overflow-hidden",children:S.jsx(ih,{"code-path":"src/components/Sidebar.tsx:103:13",className:"h-full",children:S.jsxs("nav",{"code-path":"src/components/Sidebar.tsx:104:15",className:"p-4 pb-20",children:[S.jsxs("button",{"code-path":"src/components/Sidebar.tsx:106:17",onClick:()=>f(null),className:Me("w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors",c===null?"bg-blue-100 text-blue-700 font-medium":"hover:bg-slate-100 text-slate-700"),children:[S.jsx(Ip,{"code-path":"src/components/Sidebar.tsx:115:19",className:"h-5 w-5"}),S.jsx("span",{"code-path":"src/components/Sidebar.tsx:116:19",children:"前言"})]}),S.jsxs("div",{"code-path":"src/components/Sidebar.tsx:120:17",className:"mt-4 space-y-1",children:[S.jsx("p",{"code-path":"src/components/Sidebar.tsx:121:19",className:"px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider",children:"章節內容"}),_m.map(T=>S.jsxs("div",{"code-path":"src/components/Sidebar.tsx:125:21",children:[S.jsx("div",{"code-path":"src/components/Sidebar.tsx:127:23",className:"relative group",children:S.jsxs("button",{"code-path":"src/components/Sidebar.tsx:128:25",onClick:()=>p(T.id),className:Me("w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-colors",c===T.id?"bg-blue-50 text-blue-700":"hover:bg-slate-100 text-slate-700"),children:[S.jsxs("div",{"code-path":"src/components/Sidebar.tsx:137:27",className:"flex items-center gap-2 overflow-x-auto",style:{scrollbarWidth:"thin",msOverflowStyle:"auto"},children:[S.jsx("span",{"code-path":"src/components/Sidebar.tsx:144:29",className:"text-sm font-medium flex-shrink-0",children:T.number}),S.jsx("span",{"code-path":"src/components/Sidebar.tsx:147:29",className:"text-sm whitespace-nowrap",children:T.title})]}),M(T.id)?S.jsx(Wp,{"code-path":"src/components/Sidebar.tsx:152:29",className:"h-4 w-4 flex-shrink-0 ml-2"}):S.jsx(Cm,{"code-path":"src/components/Sidebar.tsx:154:29",className:"h-4 w-4 flex-shrink-0 ml-2"})]})}),M(T.id)&&S.jsx("div",{"code-path":"src/components/Sidebar.tsx:161:25",className:"ml-4 mt-1 space-y-1 border-l-2 border-slate-200 pl-4",children:T.sections.map(U=>S.jsx("button",{"code-path":"src/components/Sidebar.tsx:163:29",onClick:()=>o(T.id,U.id),className:Me("w-full px-3 py-2 rounded text-left text-sm transition-colors block",c===T.id&&r===U.id?"bg-blue-100 text-blue-700 font-medium":"hover:bg-slate-100 text-slate-600"),children:S.jsx("span",{"code-path":"src/components/Sidebar.tsx:176:31",className:"block truncate",title:U.title,children:U.title})},U.id))})]},T.id))]})]})})}),S.jsx("div",{"code-path":"src/components/Sidebar.tsx:191:11",className:"p-4 border-t border-slate-200 bg-slate-100 flex-shrink-0",children:S.jsx("p",{"code-path":"src/components/Sidebar.tsx:192:13",className:"text-xs text-slate-500 text-center",children:"基於 Google Gemini 2.0"})})]})}),d&&S.jsx("div",{"code-path":"src/components/Sidebar.tsx:201:9",className:"fixed inset-0 bg-black/50 z-30 lg:hidden",onClick:h})]})}function fu({className:c,...r}){return S.jsx("div",{"code-path":"src/components/ui/card.tsx:7:5","data-slot":"card",className:Me("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",c),...r})}function du({className:c,...r}){return S.jsx("div",{"code-path":"src/components/ui/card.tsx:66:5","data-slot":"card-content",className:Me("px-6",c),...r})}function Qg(){return S.jsxs("div",{"code-path":"src/components/Preface.tsx:7:5",className:"max-w-4xl mx-auto",children:[S.jsxs("div",{"code-path":"src/components/Preface.tsx:9:7",className:"relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white p-8 md:p-12 mb-10",children:[S.jsx("div",{"code-path":"src/components/Preface.tsx:10:9",className:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"}),S.jsxs("div",{"code-path":"src/components/Preface.tsx:11:9",className:"relative",children:[S.jsxs("div",{"code-path":"src/components/Preface.tsx:12:11",className:"flex items-center gap-3 mb-4",children:[S.jsx(pm,{"code-path":"src/components/Preface.tsx:13:13",className:"h-8 w-8 text-yellow-300"}),S.jsx("span",{"code-path":"src/components/Preface.tsx:14:13",className:"text-blue-100 font-medium",children:"AI 商用指南"})]}),S.jsx("h1",{"code-path":"src/components/Preface.tsx:16:11",className:"text-3xl md:text-4xl lg:text-5xl font-bold mb-4",children:Vo.title}),S.jsx("h2",{"code-path":"src/components/Preface.tsx:19:11",className:"text-xl md:text-2xl text-blue-100 mb-4",children:Vo.subtitle}),S.jsxs("div",{"code-path":"src/components/Preface.tsx:22:11",className:"flex items-center gap-2 text-blue-100/90",children:[S.jsx(ov,{"code-path":"src/components/Preface.tsx:23:13",className:"h-4 w-4"}),S.jsx("span",{"code-path":"src/components/Preface.tsx:24:13",className:"text-sm",children:"作者：陳卓賢（《股票投資All-in-1》作者）"})]}),S.jsxs("div",{"code-path":"src/components/Preface.tsx:26:11",className:"flex items-center gap-2 text-blue-100/80 mt-2",children:[S.jsx(hm,{"code-path":"src/components/Preface.tsx:27:13",className:"h-4 w-4"}),S.jsx("a",{"code-path":"src/components/Preface.tsx:28:13",href:"https://www.threads.com/@destiny.solver",target:"_blank",rel:"noopener noreferrer",className:"text-sm hover:text-white hover:underline transition-colors",children:"個人Threads平台：https://www.threads.com/@destiny.solver"})]}),S.jsxs("div",{"code-path":"src/components/Preface.tsx:37:11",className:"flex items-center gap-2 text-blue-100/80 mt-2",children:[S.jsx(hm,{"code-path":"src/components/Preface.tsx:38:13",className:"h-4 w-4"}),S.jsx("a",{"code-path":"src/components/Preface.tsx:39:13",href:"https://www.linkedin.com/in/cheuk-yin-michael-chan-24125112b/",target:"_blank",rel:"noopener noreferrer",className:"text-sm hover:text-white hover:underline transition-colors",children:"個人LinkedIn平台：https://www.linkedin.com/in/cheuk-yin-michael-chan-24125112b/"})]})]})]}),S.jsxs("div",{"code-path":"src/components/Preface.tsx:52:7",className:"grid md:grid-cols-3 gap-4 mb-10",children:[S.jsx(fu,{"code-path":"src/components/Preface.tsx:53:9",className:"bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100",children:S.jsxs(du,{"code-path":"src/components/Preface.tsx:54:11",className:"p-6",children:[S.jsx(Wo,{"code-path":"src/components/Preface.tsx:55:13",className:"h-8 w-8 text-blue-600 mb-3"}),S.jsx("h3",{"code-path":"src/components/Preface.tsx:56:13",className:"font-semibold text-slate-800 mb-2",children:"六章完整內容"}),S.jsx("p",{"code-path":"src/components/Preface.tsx:57:13",className:"text-sm text-slate-600",children:"從入門到進階，涵蓋寫作、分析、商業應用等五大核心領域"})]})}),S.jsx(fu,{"code-path":"src/components/Preface.tsx:62:9",className:"bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100",children:S.jsxs(du,{"code-path":"src/components/Preface.tsx:63:11",className:"p-6",children:[S.jsx(iv,{"code-path":"src/components/Preface.tsx:64:13",className:"h-8 w-8 text-purple-600 mb-3"}),S.jsx("h3",{"code-path":"src/components/Preface.tsx:65:13",className:"font-semibold text-slate-800 mb-2",children:"Prompt 模板"}),S.jsx("p",{"code-path":"src/components/Preface.tsx:66:13",className:"text-sm text-slate-600",children:"每節附可直接複製使用的 Prompt 模板，填入資料即可使用"})]})}),S.jsx(fu,{"code-path":"src/components/Preface.tsx:71:9",className:"bg-gradient-to-br from-amber-50 to-orange-50 border-amber-100",children:S.jsxs(du,{"code-path":"src/components/Preface.tsx:72:11",className:"p-6",children:[S.jsx(ev,{"code-path":"src/components/Preface.tsx:73:13",className:"h-8 w-8 text-amber-600 mb-3"}),S.jsx("h3",{"code-path":"src/components/Preface.tsx:74:13",className:"font-semibold text-slate-800 mb-2",children:"香港本地化"}),S.jsx("p",{"code-path":"src/components/Preface.tsx:75:13",className:"text-sm text-slate-600",children:"結合香港職場文化、語言習慣和行業特性的定制化建議"})]})})]}),S.jsx("div",{"code-path":"src/components/Preface.tsx:83:7",className:"space-y-8",children:Vo.sections.map((c,r)=>S.jsxs("article",{"code-path":"src/components/Preface.tsx:85:11",className:"bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden",children:[S.jsx("div",{"code-path":"src/components/Preface.tsx:89:13",className:"bg-slate-50 px-6 py-4 border-b border-slate-100",children:S.jsx("h3",{"code-path":"src/components/Preface.tsx:90:15",className:"text-lg font-semibold text-slate-800",children:c.title})}),S.jsx("div",{"code-path":"src/components/Preface.tsx:94:13",className:"p-6",children:S.jsx("div",{"code-path":"src/components/Preface.tsx:95:15",className:"prose prose-slate max-w-none",children:c.content.split(`

`).map((f,o)=>f.startsWith("•")?S.jsx("ul",{"code-path":"src/components/Preface.tsx:99:23",className:"list-disc list-inside space-y-2 my-4",children:f.split(`
`).map((d,h)=>S.jsx("li",{"code-path":"src/components/Preface.tsx:101:27",className:"text-slate-700",children:d.replace("• ","")},h))},o):f.includes("**")?S.jsx("p",{"code-path":"src/components/Preface.tsx:110:23",className:"text-slate-700 leading-relaxed mb-4",dangerouslySetInnerHTML:{__html:f.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\n/g,"<br />")}},o):S.jsx("p",{"code-path":"src/components/Preface.tsx:122:21",className:"text-slate-700 leading-relaxed mb-4",children:f},o))})})]},r))}),S.jsx("div",{"code-path":"src/components/Preface.tsx:137:7",className:"mt-10 text-center",children:S.jsxs("div",{"code-path":"src/components/Preface.tsx:138:9",className:"inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium shadow-lg shadow-blue-200",children:[S.jsx(pm,{"code-path":"src/components/Preface.tsx:139:11",className:"h-5 w-5"}),S.jsx("span",{"code-path":"src/components/Preface.tsx:140:11",children:"從左側選單開始探索各章節"})]})})]})}const Zg=Rm("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function Kg({className:c,variant:r,asChild:f=!1,...o}){const d=f?Mm:"span";return S.jsx(d,{"code-path":"src/components/ui/badge.tsx:38:5","data-slot":"badge",className:Me(Zg({variant:r}),c),...o})}function kg({chapter:c,currentSection:r,onSectionSelect:f}){const o=D.useRef({});D.useEffect(()=>{r&&o.current[r]&&o.current[r]?.scrollIntoView({behavior:"smooth",block:"start"})},[r]);const d=h=>{const x=h.split(`
`),E=[];let y=[],p=!1,M="";const T=()=>{y.length>0&&(E.push(S.jsx("ul",{"code-path":"src/components/ChapterContent.tsx:41:11",className:"list-disc list-inside space-y-2 my-4 ml-4",children:y.map((Y,J)=>S.jsx("li",{"code-path":"src/components/ChapterContent.tsx:43:15",className:"text-slate-700 break-words",children:Y},J))},E.length)),y=[])},U=()=>{M&&(E.push(S.jsx("pre",{"code-path":"src/components/ChapterContent.tsx:54:11",className:"bg-slate-800 text-slate-100 p-4 rounded-lg overflow-x-auto my-4 text-sm",children:S.jsx("code",{"code-path":"src/components/ChapterContent.tsx:58:13",children:M.trim()})},E.length)),M="")};return x.forEach(Y=>{if(Y.startsWith("```")){p?(U(),p=!1):(T(),p=!0);return}if(p){M+=Y+`
`;return}if(Y.startsWith("### ")){T(),E.push(S.jsx("h3",{"code-path":"src/components/ChapterContent.tsx:87:11",className:"text-xl font-semibold text-slate-800 mt-8 mb-4",children:Y.replace("### ","")},E.length));return}if(Y.startsWith("## ")){T(),E.push(S.jsx("h2",{"code-path":"src/components/ChapterContent.tsx:100:11",className:"text-2xl font-bold text-slate-800 mt-10 mb-5",children:Y.replace("## ","")},E.length));return}if(Y.startsWith("# ")){T(),E.push(S.jsx("h1",{"code-path":"src/components/ChapterContent.tsx:113:11",className:"text-3xl font-bold text-slate-800 mt-8 mb-6",children:Y.replace("# ","")},E.length));return}if(Y.startsWith("> ")){T(),E.push(S.jsx("blockquote",{"code-path":"src/components/ChapterContent.tsx:127:11",className:"border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-50 rounded-r-lg",children:S.jsx("p",{"code-path":"src/components/ChapterContent.tsx:131:13",className:"text-slate-700 italic break-words",children:Y.replace("> ","")})},E.length));return}if(Y.startsWith("• ")||Y.startsWith("- ")){y.push(Y.substring(2));return}if(Y.trim()===""){T();return}T();let J=Y.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>").replace(/`(.*?)`/g,'<code class="bg-slate-100 px-1 py-0.5 rounded text-sm">$1</code>');E.push(S.jsx("p",{"code-path":"src/components/ChapterContent.tsx:159:9",className:"text-slate-700 leading-relaxed mb-4 break-words",dangerouslySetInnerHTML:{__html:J}},E.length))}),T(),U(),E};return S.jsxs("div",{"code-path":"src/components/ChapterContent.tsx:174:5",className:"max-w-4xl mx-auto overflow-x-hidden",children:[S.jsxs("div",{"code-path":"src/components/ChapterContent.tsx:176:7",className:"mb-8",children:[S.jsxs("div",{"code-path":"src/components/ChapterContent.tsx:177:9",className:"flex items-center gap-3 mb-4",children:[S.jsx(Kg,{"code-path":"src/components/ChapterContent.tsx:178:11",variant:"secondary",className:"bg-blue-100 text-blue-700 hover:bg-blue-100",children:c.number}),S.jsx("span",{"code-path":"src/components/ChapterContent.tsx:184:11",className:"text-slate-400",children:"|"}),S.jsx("span",{"code-path":"src/components/ChapterContent.tsx:185:11",className:"text-slate-500 text-sm",children:c.subtitle})]}),S.jsx("h1",{"code-path":"src/components/ChapterContent.tsx:187:9",className:"text-3xl md:text-4xl font-bold text-slate-800 mb-4 break-words",children:c.title}),S.jsx("p",{"code-path":"src/components/ChapterContent.tsx:190:9",className:"text-lg text-slate-600 leading-relaxed break-words",children:c.introduction})]}),S.jsx(fu,{"code-path":"src/components/ChapterContent.tsx:196:7",className:"mb-8 bg-gradient-to-r from-slate-50 to-blue-50 border-slate-200",children:S.jsxs(du,{"code-path":"src/components/ChapterContent.tsx:197:9",className:"p-6",children:[S.jsxs("h3",{"code-path":"src/components/ChapterContent.tsx:198:11",className:"font-semibold text-slate-800 mb-4 flex items-center gap-2",children:[S.jsx(Wo,{"code-path":"src/components/ChapterContent.tsx:199:13",className:"h-5 w-5 text-blue-600"}),"本章節目錄"]}),S.jsx("div",{"code-path":"src/components/ChapterContent.tsx:202:11",className:"grid md:grid-cols-2 gap-2",children:c.sections.map(h=>S.jsxs("button",{"code-path":"src/components/ChapterContent.tsx:204:15",onClick:()=>f(h.id),className:Me("flex items-center gap-2 px-4 py-3 rounded-lg text-left transition-colors text-sm overflow-x-auto scrollbar-hide",r===h.id?"bg-blue-100 text-blue-700 font-medium":"hover:bg-white hover:shadow-sm text-slate-700"),children:[S.jsx(Cm,{"code-path":"src/components/ChapterContent.tsx:214:17",className:"h-4 w-4 flex-shrink-0"}),S.jsx("span",{"code-path":"src/components/ChapterContent.tsx:215:17",className:"whitespace-nowrap",children:h.title})]},h.id))})]})}),S.jsx("div",{"code-path":"src/components/ChapterContent.tsx:223:7",className:"space-y-8",children:c.sections.map(h=>S.jsxs("div",{"code-path":"src/components/ChapterContent.tsx:225:11",ref:x=>{o.current[h.id]=x},id:h.id,className:Me("scroll-mt-8 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all",r===h.id&&"ring-2 ring-blue-500 ring-offset-2"),children:[S.jsx("div",{"code-path":"src/components/ChapterContent.tsx:236:13",className:"bg-gradient-to-r from-slate-50 to-blue-50 px-4 md:px-6 py-4 border-b border-slate-100",children:S.jsx("h2",{"code-path":"src/components/ChapterContent.tsx:237:15",className:"text-lg md:text-xl font-semibold text-slate-800 break-words",children:h.title})}),S.jsx("div",{"code-path":"src/components/ChapterContent.tsx:241:13",className:"p-4 md:p-6",children:S.jsx("div",{"code-path":"src/components/ChapterContent.tsx:242:15",className:"prose prose-slate max-w-none overflow-x-hidden",children:d(h.content)})})]},h.id))}),S.jsxs("div",{"code-path":"src/components/ChapterContent.tsx:251:7",className:"mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100",children:[S.jsxs("p",{"code-path":"src/components/ChapterContent.tsx:252:9",className:"text-center text-slate-600",children:["完成 ",c.number,"：",c.title]}),S.jsx("p",{"code-path":"src/components/ChapterContent.tsx:255:9",className:"text-center text-sm text-slate-500 mt-2",children:"繼續探索其他章節，發掘更多 Gemini 的應用技巧"})]})]})}function Jg(){const[c,r]=D.useState(null),[f,o]=D.useState(null),[d,h]=D.useState(!1),x=c?hv(c):null,E=p=>{r(p),o(null),h(!1),window.scrollTo({top:0,behavior:"smooth"})},y=(p,M)=>{r(p),o(M),h(!1)};return S.jsxs("div",{"code-path":"src/App.tsx:32:5",className:"min-h-screen bg-slate-50",children:[S.jsx(Vg,{"code-path":"src/App.tsx:34:7",currentChapter:c,currentSection:f,onChapterSelect:E,onSectionSelect:y,isOpen:d,onToggle:()=>h(!d)}),S.jsx("main",{"code-path":"src/App.tsx:44:7",className:"lg:ml-80 min-h-screen overflow-x-hidden",children:S.jsx(ih,{"code-path":"src/App.tsx:45:9",className:"h-screen",children:S.jsx("div",{"code-path":"src/App.tsx:46:11",className:"px-4 py-6 md:px-10 md:py-10",children:x?S.jsx(kg,{"code-path":"src/App.tsx:48:15",chapter:x,currentSection:f,onSectionSelect:p=>y(c,p)}):S.jsx(Qg,{"code-path":"src/App.tsx:54:15"})})})})]})}Xp.createRoot(document.getElementById("root")).render(S.jsx(D.StrictMode,{"code-path":"src/main.tsx:7:3",children:S.jsx(Jg,{"code-path":"src/main.tsx:8:5"})}));
