(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[609],{9008:function(e,n,t){e.exports=t(5443)},2746:function(e,n,t){e.exports.jsxRuntime=t(5893)},3305:function(e,n,t){"use strict";t.d(n,{R:function(){return l}});var r={};t.r(r),t.d(r,{MDXContext:function(){return u},MDXProvider:function(){return f},useMDXComponents:function(){return c},withMDXComponents:function(){return a}});var o=t(7294),i=t(2746);const u=o.createContext({});function a(e){return function(n){const t=c(n.components);return o.createElement(e,{...n,allComponents:t})}}function c(e){const n=o.useContext(u);return o.useMemo((()=>"function"===typeof e?e(n):{...n,...e}),[n,e])}const s={};function f({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"===typeof e?e({}):e||s:c(e),o.createElement(u.Provider,{value:r},n)}function l({compiledSource:e,frontmatter:n,scope:t,components:u={},lazy:a}){const[c,s]=(0,o.useState)(!a||"undefined"===typeof window);(0,o.useEffect)((()=>{if(a){const e=window.requestIdleCallback((()=>{s(!0)}));return()=>window.cancelIdleCallback(e)}}),[]);const l=(0,o.useMemo)((()=>{const o=Object.assign({opts:{...r,...i.jsxRuntime}},{frontmatter:n},t),u=Object.keys(o),a=Object.values(o),c=Reflect.construct(Function,u.concat(`${e}`));return c.apply(c,a).default}),[t,e]);if(!c)return o.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});const d=o.createElement(f,{components:u},o.createElement(l,null));return a?o.createElement("div",null,d):d}"undefined"!==typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var n=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-n))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)})},8100:function(e,n,t){"use strict";t.d(n,{J$:function(){return B},ZP:function(){return K},kY:function(){return G}});var r=t(7294);function o(e,n,t,r){return new(t||(t=Promise))((function(o,i){function u(e){try{c(r.next(e))}catch(n){i(n)}}function a(e){try{c(r.throw(e))}catch(n){i(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(u,a)}c((r=r.apply(e,n||[])).next())}))}function i(e,n){var t,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(e,u)}catch(a){i=[6,a],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}var u,a=function(){},c=a(),s=Object,f=function(e){return e===c},l=function(e){return"function"==typeof e},d=function(e,n){return s.assign({},e,n)},v="undefined",p=function(){return typeof window!=v},h=new WeakMap,g=0,w=function(e){var n,t,r=typeof e,o=e&&e.constructor,i=o==Date;if(s(e)!==e||i||o==RegExp)n=i?e.toJSON():"symbol"==r?e.toString():"string"==r?JSON.stringify(e):""+e;else{if(n=h.get(e))return n;if(n=++g+"~",h.set(e,n),o==Array){for(n="@",t=0;t<e.length;t++)n+=w(e[t])+",";h.set(e,n)}if(o==s){n="#";for(var u=s.keys(e).sort();!f(t=u.pop());)f(e[t])||(n+=t+":"+w(e[t])+",");h.set(e,n)}}return n},m=!0,b=p(),y=typeof document!=v,E=b&&window.addEventListener?window.addEventListener.bind(window):a,k=y?document.addEventListener.bind(document):a,C=b&&window.removeEventListener?window.removeEventListener.bind(window):a,R=y?document.removeEventListener.bind(document):a,O={isOnline:function(){return m},isVisible:function(){var e=y&&document.visibilityState;return f(e)||"hidden"!==e}},x={initFocus:function(e){return k("visibilitychange",e),E("focus",e),function(){R("visibilitychange",e),C("focus",e)}},initReconnect:function(e){var n=function(){m=!0,e()},t=function(){m=!1};return E("online",n),E("offline",t),function(){C("online",n),C("offline",t)}}},T=!p()||"Deno"in window,S=function(e){return p()&&typeof window.requestAnimationFrame!=v?window.requestAnimationFrame(e):setTimeout(e,1)},I=T?r.useEffect:r.useLayoutEffect,D="undefined"!==typeof navigator&&navigator.connection,V=!T&&D&&(["slow-2g","2g"].includes(D.effectiveType)||D.saveData),M=function(e){if(l(e))try{e=e()}catch(t){e=""}var n=[].concat(e);return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?w(e):"",n,e?"$swr$"+e:""]},P=new WeakMap,L=function(e,n,t,r,o,i,u){void 0===u&&(u=!0);var a=P.get(e),c=a[0],s=a[1],f=a[3],l=c[n],d=s[n];if(u&&d)for(var v=0;v<d.length;++v)d[v](t,r,o);return i&&(delete f[n],l&&l[0])?l[0](2).then((function(){return e.get(n)})):e.get(n)},F=0,j=function(){return++F},_=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return o(void 0,void 0,void 0,(function(){var n,t,r,o,u,a,s,v,p,h,g,w,m,b,y,E,k,C,R,O,x;return i(this,(function(i){switch(i.label){case 0:if(n=e[0],t=e[1],r=e[2],o=e[3],a=!!f((u="boolean"===typeof o?{revalidate:o}:o||{}).populateCache)||u.populateCache,s=!1!==u.revalidate,v=!1!==u.rollbackOnError,p=u.optimisticData,h=M(t),g=h[0],w=h[2],!g)return[2];if(m=P.get(n),b=m[2],e.length<3)return[2,L(n,g,n.get(g),c,c,s,!0)];if(y=r,k=j(),b[g]=[k,0],C=!f(p),R=n.get(g),C&&(O=l(p)?p(R):p,n.set(g,O),L(n,g,O)),l(y))try{y=y(n.get(g))}catch(T){E=T}return y&&l(y.then)?[4,y.catch((function(e){E=e}))]:[3,2];case 1:if(y=i.sent(),k!==b[g][0]){if(E)throw E;return[2,y]}E&&C&&v&&(a=!0,y=R,n.set(g,R)),i.label=2;case 2:return a&&(E||(l(a)&&(y=a(y,R)),n.set(g,y)),n.set(w,d(n.get(w),{error:E}))),b[g][1]=j(),[4,L(n,g,y,E,c,s,!!a)];case 3:if(x=i.sent(),E)throw E;return[2,a?x:y]}}))}))},q=function(e,n){for(var t in e)e[t][0]&&e[t][0](n)},A=function(e,n){if(!P.has(e)){var t=d(x,n),r={},o=_.bind(c,e),i=a;if(P.set(e,[r,{},{},{},o]),!T){var u=t.initFocus(setTimeout.bind(c,q.bind(c,r,0))),s=t.initReconnect(setTimeout.bind(c,q.bind(c,r,1)));i=function(){u&&u(),s&&s(),P.delete(e)}}return[e,o,i]}return[e,P.get(e)[4]]},W=A(new Map),N=W[0],X=W[1],$=d({onLoadingSlow:a,onSuccess:a,onError:a,onErrorRetry:function(e,n,t,r,o){var i=t.errorRetryCount,u=o.retryCount,a=~~((Math.random()+.5)*(1<<(u<8?u:8)))*t.errorRetryInterval;!f(i)&&u>i||setTimeout(r,a,o)},onDiscarded:a,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:V?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:V?5e3:3e3,compare:function(e,n){return w(e)==w(n)},isPaused:function(){return!1},cache:N,mutate:X,fallback:{}},O),H=function(e,n){var t=d(e,n);if(n){var r=e.use,o=e.fallback,i=n.use,u=n.fallback;r&&i&&(t.use=r.concat(i)),o&&u&&(t.fallback=d(o,u))}return t},J=(0,r.createContext)({}),z=function(e){return l(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]},G=function(){return d($,(0,r.useContext)(J))},Y=function(e,n,t){var r=n[e]||(n[e]=[]);return r.push(t),function(){var e=r.indexOf(t);e>=0&&(r[e]=r[r.length-1],r.pop())}},Z={dedupe:!0},B=s.defineProperty((function(e){var n=e.value,t=H((0,r.useContext)(J),n),o=n&&n.provider,i=(0,r.useState)((function(){return o?A(o(t.cache||N),n):c}))[0];return i&&(t.cache=i[0],t.mutate=i[1]),I((function(){return i?i[2]:c}),[]),(0,r.createElement)(J.Provider,d(e,{value:t}))}),"default",{value:$}),K=(u=function(e,n,t){var u=t.cache,a=t.compare,s=t.fallbackData,v=t.suspense,p=t.revalidateOnMount,h=t.refreshInterval,g=t.refreshWhenHidden,w=t.refreshWhenOffline,m=P.get(u),b=m[0],y=m[1],E=m[2],k=m[3],C=M(e),R=C[0],O=C[1],x=C[2],D=(0,r.useRef)(!1),V=(0,r.useRef)(!1),F=(0,r.useRef)(R),q=(0,r.useRef)(n),A=(0,r.useRef)(t),W=function(){return A.current},N=function(){return W().isVisible()&&W().isOnline()},X=function(e){return u.set(x,d(u.get(x),e))},$=u.get(R),H=f(s)?t.fallback[R]:s,J=f($)?H:$,z=u.get(x)||{},G=z.error,B=!D.current,K=function(){return B&&!f(p)?p:!W().isPaused()&&(v?!f(J)&&t.revalidateIfStale:f(J)||t.revalidateIfStale)},Q=!(!R||!n)&&(!!z.isValidating||B&&K()),U=function(e,n){var t=(0,r.useState)({})[1],o=(0,r.useRef)(e),i=(0,r.useRef)({data:!1,error:!1,isValidating:!1}),u=(0,r.useCallback)((function(e){var r=!1,u=o.current;for(var a in e){var c=a;u[c]!==e[c]&&(u[c]=e[c],i.current[c]&&(r=!0))}r&&!n.current&&t({})}),[]);return I((function(){o.current=e})),[o,i.current,u]}({data:J,error:G,isValidating:Q},V),ee=U[0],ne=U[1],te=U[2],re=(0,r.useCallback)((function(e){return o(void 0,void 0,void 0,(function(){var n,r,o,s,d,v,p,h,g,w,m,b,y;return i(this,(function(i){switch(i.label){case 0:if(n=q.current,!R||!n||V.current||W().isPaused())return[2,!1];s=!0,d=e||{},v=!k[R]||!d.dedupe,p=function(){return!V.current&&R===F.current&&D.current},h=function(){var e=k[R];e&&e[1]===o&&delete k[R]},g={isValidating:!1},w=function(){X({isValidating:!1}),p()&&te(g)},X({isValidating:!0}),te({isValidating:!0}),i.label=1;case 1:return i.trys.push([1,3,,4]),v&&(L(u,R,ee.current.data,ee.current.error,!0),t.loadingTimeout&&!u.get(R)&&setTimeout((function(){s&&p()&&W().onLoadingSlow(R,t)}),t.loadingTimeout),k[R]=[n.apply(void 0,O),j()]),y=k[R],r=y[0],o=y[1],[4,r];case 2:return r=i.sent(),v&&setTimeout(h,t.dedupingInterval),k[R]&&k[R][1]===o?(X({error:c}),g.error=c,m=E[R],!f(m)&&(o<=m[0]||o<=m[1]||0===m[1])?(w(),v&&p()&&W().onDiscarded(R),[2,!1]):(a(ee.current.data,r)?g.data=ee.current.data:g.data=r,a(u.get(R),r)||u.set(R,r),v&&p()&&W().onSuccess(r,R,t),[3,4])):(v&&p()&&W().onDiscarded(R),[2,!1]);case 3:return b=i.sent(),h(),W().isPaused()||(X({error:b}),g.error=b,v&&p()&&(W().onError(b,R,t),("boolean"===typeof t.shouldRetryOnError&&t.shouldRetryOnError||l(t.shouldRetryOnError)&&t.shouldRetryOnError(b))&&N()&&W().onErrorRetry(b,R,t,re,{retryCount:(d.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return s=!1,w(),p()&&v&&L(u,R,g.data,g.error,!1),[2,!0]}}))}))}),[R]),oe=(0,r.useCallback)(_.bind(c,u,(function(){return F.current})),[]);if(I((function(){q.current=n,A.current=t})),I((function(){if(R){var e=R!==F.current,n=re.bind(c,Z),t=0,r=Y(R,y,(function(e,n,t){te(d({error:n,isValidating:t},a(ee.current.data,e)?c:{data:e}))})),o=Y(R,b,(function(e){if(0==e){var r=Date.now();W().revalidateOnFocus&&r>t&&N()&&(t=r+W().focusThrottleInterval,n())}else if(1==e)W().revalidateOnReconnect&&N()&&n();else if(2==e)return re()}));return V.current=!1,F.current=R,D.current=!0,e&&te({data:J,error:G,isValidating:Q}),K()&&(f(J)||T?n():S(n)),function(){V.current=!0,r(),o()}}}),[R,re]),I((function(){var e;function n(){var n=l(h)?h(J):h;n&&-1!==e&&(e=setTimeout(t,n))}function t(){ee.current.error||!g&&!W().isVisible()||!w&&!W().isOnline()?n():re(Z).then(n)}return n(),function(){e&&(clearTimeout(e),e=-1)}}),[h,g,w,re]),(0,r.useDebugValue)(J),v&&f(J)&&R)throw q.current=n,A.current=t,V.current=!1,f(G)?re(Z):G;return{mutate:oe,get data(){return ne.data=!0,J},get error(){return ne.error=!0,G},get isValidating(){return ne.isValidating=!0,Q}}},function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=G(),r=z(e),o=r[0],i=r[1],a=r[2],c=H(t,a),s=u,f=c.use;if(f)for(var l=f.length;l-- >0;)s=f[l](s);return s(o,i||c.fetcher,c)})}}]);