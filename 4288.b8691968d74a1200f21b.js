(self.webpackChunkpresent_ionic_react=self.webpackChunkpresent_ionic_react||[]).push([[4288],{6755:(e,t,n)=>{"use strict";n.d(t,{g:()=>i});var i=function(e,t,n,i,s){return o(e[1],t[1],n[1],i[1],s).map((function(o){return r(e[0],t[0],n[0],i[0],o)}))},r=function(e,t,n,i,r){return r*(3*t*Math.pow(r-1,2)+r*(-3*n*r+3*n+i*r))-e*Math.pow(r-1,3)},o=function(e,t,n,i,r){return s((i-=r)-3*(n-=r)+3*(t-=r)-(e-=r),3*n-6*t+3*e,3*t-3*e,e).filter((function(e){return e>=0&&e<=1}))},s=function(e,t,n,i){if(0===e)return function(e,t,n){var i=t*t-4*e*n;return i<0?[]:[(-t+Math.sqrt(i))/(2*e),(-t-Math.sqrt(i))/(2*e)]}(t,n,i);var r=(3*(n/=e)-(t/=e)*t)/3,o=(2*t*t*t-9*t*n+27*(i/=e))/27;if(0===r)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-r),-Math.sqrt(-r)];var s=Math.pow(o/2,2)+Math.pow(r/3,3);if(0===s)return[Math.pow(o/2,.5)-t/3];if(s>0)return[Math.pow(-o/2+Math.sqrt(s),1/3)-Math.pow(o/2+Math.sqrt(s),1/3)-t/3];var a=Math.sqrt(Math.pow(-r/3,3)),u=Math.acos(-o/(2*Math.sqrt(Math.pow(-r/3,3)))),c=2*Math.pow(a,1/3);return[c*Math.cos(u/3)-t/3,c*Math.cos((u+2*Math.PI)/3)-t/3,c*Math.cos((u+4*Math.PI)/3)-t/3]}},723:(e,t,n)=>{"use strict";n.d(t,{a:()=>r,d:()=>o});var i=n(655),r=function(e,t,n,r,o){return(0,i.mG)(void 0,void 0,void 0,(function(){var s;return(0,i.Jh)(this,(function(i){switch(i.label){case 0:if(e)return[2,e.attachViewToDom(t,n,o,r)];if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return s="string"==typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n,r&&r.forEach((function(e){return s.classList.add(e)})),o&&Object.assign(s,o),t.appendChild(s),s.componentOnReady?[4,s.componentOnReady()]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2,s]}}))}))},o=function(e,t){if(t){if(e){var n=t.parentElement;return e.removeViewFromDom(n,t)}t.remove()}return Promise.resolve()}},8873:(e,t,n)=>{"use strict";n.d(t,{a:()=>r,b:()=>o,c:()=>l,d:()=>m,e:()=>h,f:()=>c,g:()=>s,h:()=>u,i:()=>v,j:()=>f,k:()=>g,n:()=>d,p:()=>p,r:()=>a});var i=n(655),r=function(e,t,n,i){if("undefined"!=typeof window){var r=window,o=r&&r.Ionic&&r.Ionic.config;if(o){var s=o.get("_ael");if(s)return s(e,t,n,i);if(o._ael)return o._ael(e,t,n,i)}}return e.addEventListener(t,n,i)},o=function(e,t,n,i){if("undefined"!=typeof window){var r=window,o=r&&r.Ionic&&r.Ionic.config;if(o){var s=o.get("_rel");if(s)return s(e,t,n,i);if(o._rel)return o._rel(e,t,n,i)}}return e.removeEventListener(t,n,i)},s=function(e,t){return void 0===t&&(t=e),e.shadowRoot||t},a=function(e){return"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(e):"function"==typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e)},u=function(e){return!!e.shadowRoot&&!!e.attachShadow},c=function(e){var t=e.closest("ion-item");return t?t.querySelector("ion-label"):null},l=function(e,t,n,i,r){if(e||u(t)){var o=t.querySelector("input.aux-input");o||((o=t.ownerDocument.createElement("input")).type="hidden",o.classList.add("aux-input"),t.appendChild(o)),o.disabled=r,o.name=n,o.value=i||""}},h=function(e,t,n){return Math.max(e,Math.min(t,n))},v=function(e,t){if(!e){var n="ASSERT: "+t;throw console.error(n),new Error(n)}},d=function(e){return e.timeStamp||Date.now()},p=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY}}return{x:0,y:0}},f=function(e){var t="rtl"===document.dir;switch(e){case"start":return t;case"end":return!t;default:throw new Error('"'+e+'" is not a valid value for [side]. Use "start" or "end" instead.')}},m=function(e,t){var n=e._original||e;return{_original:e,emit:g(n.emit.bind(n),t)}},g=function(e,t){var n;return void 0===t&&(t=0),function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];clearTimeout(n),n=setTimeout.apply(void 0,(0,i.pr)([e,t],r))}}},946:(e,t,n)=>{"use strict";n.d(t,{b:()=>o,c:()=>s,d:()=>a,e:()=>E,g:()=>T,l:()=>b,s:()=>C,t:()=>u});var i=n(655),r=n(3495),o="ionViewWillLeave",s="ionViewDidLeave",a="ionViewWillUnload",u=function(e){return new Promise((function(t,n){(0,r.c)((function(){c(e),l(e).then((function(n){n.animation&&n.animation.destroy(),h(e),t(n)}),(function(t){h(e),n(t)}))}))}))},c=function(e){var t=e.enteringEl,n=e.leavingEl;k(t,n,e.direction),e.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),C(t,!1),n&&C(n,!1)},l=function(e){return(0,i.mG)(void 0,void 0,void 0,(function(){var t;return(0,i.Jh)(this,(function(n){switch(n.label){case 0:return[4,v(e)];case 1:return[2,(t=n.sent())&&r.B.isBrowser?d(t,e):p(e)]}}))}))},h=function(e){var t=e.enteringEl,n=e.leavingEl;t.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")},v=function(e){return(0,i.mG)(void 0,void 0,void 0,(function(){var t;return(0,i.Jh)(this,(function(i){switch(i.label){case 0:return e.leavingEl&&e.animated&&0!==e.duration?e.animationBuilder?[2,e.animationBuilder]:"ios"!==e.mode?[3,2]:[4,n.e(2811).then(n.bind(n,2811))]:[2,void 0];case 1:return t=i.sent().iosTransitionAnimation,[3,4];case 2:return[4,n.e(1887).then(n.bind(n,1887))];case 3:t=i.sent().mdTransitionAnimation,i.label=4;case 4:return[2,t]}}))}))},d=function(e,t){return(0,i.mG)(void 0,void 0,void 0,(function(){var n,r;return(0,i.Jh)(this,(function(i){switch(i.label){case 0:return[4,f(t,!0)];case 1:return i.sent(),n=e(t.baseEl,t),w(t.enteringEl,t.leavingEl),[4,g(n,t)];case 2:return r=i.sent(),t.progressCallback&&t.progressCallback(void 0),r&&y(t.enteringEl,t.leavingEl),[2,{hasCompleted:r,animation:n}]}}))}))},p=function(e){return(0,i.mG)(void 0,void 0,void 0,(function(){var t,n;return(0,i.Jh)(this,(function(i){switch(i.label){case 0:return t=e.enteringEl,n=e.leavingEl,[4,f(e,!1)];case 1:return i.sent(),w(t,n),y(t,n),[2,{hasCompleted:!0}]}}))}))},f=function(e,t){return(0,i.mG)(void 0,void 0,void 0,(function(){var n,r;return(0,i.Jh)(this,(function(i){switch(i.label){case 0:return n=void 0!==e.deepWait?e.deepWait:t,r=n?[E(e.enteringEl),E(e.leavingEl)]:[S(e.enteringEl),S(e.leavingEl)],[4,Promise.all(r)];case 1:return i.sent(),[4,m(e.viewIsReady,e.enteringEl)];case 2:return i.sent(),[2]}}))}))},m=function(e,t){return(0,i.mG)(void 0,void 0,void 0,(function(){return(0,i.Jh)(this,(function(n){switch(n.label){case 0:return e?[4,e(t)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}}))}))},g=function(e,t){var n=t.progressCallback,i=new Promise((function(t){e.onFinish((function(e){return t(1===e)}))}));return n?(e.progressStart(!0),n(e)):e.play(),i},w=function(e,t){b(t,o),b(e,"ionViewWillEnter")},y=function(e,t){b(e,"ionViewDidEnter"),b(t,s)},b=function(e,t){if(e){var n=new CustomEvent(t,{bubbles:!1,cancelable:!1});e.dispatchEvent(n)}},S=function(e){return e&&e.componentOnReady?e.componentOnReady():Promise.resolve()},E=function(e){return(0,i.mG)(void 0,void 0,void 0,(function(){var t;return(0,i.Jh)(this,(function(n){switch(n.label){case 0:return(t=e)?null==t.componentOnReady?[3,2]:[4,t.componentOnReady()]:[3,4];case 1:if(null!=n.sent())return[2];n.label=2;case 2:return[4,Promise.all(Array.from(t.children).map(E))];case 3:n.sent(),n.label=4;case 4:return[2]}}))}))},C=function(e,t){t?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))},k=function(e,t,n){void 0!==e&&(e.style.zIndex="back"===n?"99":"101"),void 0!==t&&(t.style.zIndex="100")},T=function(e){return e.classList.contains("ion-page")?e:e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||e}},4288:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ion_nav:()=>d,ion_nav_link:()=>p});var i=n(655),r=n(3495),o=n(5751),s=n(8873),a=n(946),u=n(6755),c=n(723),l=function(){function e(e,t){this.component=e,this.params=t,this.state=1}return e.prototype.init=function(e){return(0,i.mG)(this,void 0,void 0,(function(){var t,n;return(0,i.Jh)(this,(function(i){switch(i.label){case 0:return this.state=2,this.element?[3,2]:(t=this.component,n=this,[4,(0,c.a)(this.delegate,e,t,["ion-page","ion-page-invisible"],this.params)]);case 1:n.element=i.sent(),i.label=2;case 2:return[2]}}))}))},e.prototype._destroy=function(){(0,s.i)(3!==this.state,"view state must be ATTACHED");var e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=3},e}(),h=function(e,t,n){if(!e)return!1;if(e.component!==t)return!1;var i=e.params;if(i===n)return!0;if(!i&&!n)return!0;if(!i||!n)return!1;var r=Object.keys(i),o=Object.keys(n);if(r.length!==o.length)return!1;for(var s=0,a=r;s<a.length;s++){var u=a[s];if(i[u]!==n[u])return!1}return!0},v=function(e,t){return e?e instanceof l?e:new l(e,t):null},d=function(){function e(e){(0,r.r)(this,e),this.ionNavWillLoad=(0,r.e)(this,"ionNavWillLoad",7),this.ionNavWillChange=(0,r.e)(this,"ionNavWillChange",3),this.ionNavDidChange=(0,r.e)(this,"ionNavDidChange",3),this.transInstr=[],this.animationEnabled=!0,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0}return e.prototype.swipeGestureChanged=function(){this.gesture&&this.gesture.enable(!0===this.swipeGesture)},e.prototype.rootChanged=function(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))},e.prototype.componentWillLoad=function(){if(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture){var e=(0,o.b)(this);this.swipeGesture=o.c.getBoolean("swipeBackEnabled","ios"===e)}this.ionNavWillLoad.emit()},e.prototype.componentDidLoad=function(){return(0,i.mG)(this,void 0,void 0,(function(){var e;return(0,i.Jh)(this,(function(t){switch(t.label){case 0:return this.rootChanged(),e=this,[4,n.e(9279).then(n.bind(n,9279))];case 1:return e.gesture=t.sent().createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged(),[2]}}))}))},e.prototype.disconnectedCallback=function(){for(var e=0,t=this.views;e<t.length;e++){var n=t[e];(0,a.l)(n.element,a.d),n._destroy()}this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=this.views.length=0,this.destroyed=!0},e.prototype.push=function(e,t,n,i){return this.queueTrns({insertStart:-1,insertViews:[{component:e,componentProps:t}],opts:n},i)},e.prototype.insert=function(e,t,n,i,r){return this.queueTrns({insertStart:e,insertViews:[{component:t,componentProps:n}],opts:i},r)},e.prototype.insertPages=function(e,t,n,i){return this.queueTrns({insertStart:e,insertViews:t,opts:n},i)},e.prototype.pop=function(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)},e.prototype.popTo=function(e,t,n){var i={removeStart:-1,removeCount:-1,opts:t};return"object"==typeof e&&e.component?(i.removeView=e,i.removeStart=1):"number"==typeof e&&(i.removeStart=e+1),this.queueTrns(i,n)},e.prototype.popToRoot=function(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)},e.prototype.removeIndex=function(e,t,n,i){return void 0===t&&(t=1),this.queueTrns({removeStart:e,removeCount:t,opts:n},i)},e.prototype.setRoot=function(e,t,n,i){return this.setPages([{component:e,componentProps:t}],n,i)},e.prototype.setPages=function(e,t,n){return null==t&&(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)},e.prototype.setRouteId=function(e,t,n,r){var o,s=this,a=this.getActiveSync();if(h(a,e,t))return Promise.resolve({changed:!1,element:a.element});var u,c=new Promise((function(e){return o=e})),l={updateURL:!1,viewIsReady:function(e){var t,n=new Promise((function(e){return t=e}));return o({changed:!0,element:e,markVisible:function(){return(0,i.mG)(s,void 0,void 0,(function(){return(0,i.Jh)(this,(function(e){switch(e.label){case 0:return t(),[4,u];case 1:return e.sent(),[2]}}))}))}}),n}};if("root"===n)u=this.setRoot(e,t,l);else{var v=this.views.find((function(n){return h(n,e,t)}));v?u=this.popTo(v,Object.assign(Object.assign({},l),{direction:"back",animationBuilder:r})):"forward"===n?u=this.push(e,t,Object.assign(Object.assign({},l),{animationBuilder:r})):"back"===n&&(u=this.setRoot(e,t,Object.assign(Object.assign({},l),{direction:"back",animated:!0,animationBuilder:r})))}return c},e.prototype.getRouteId=function(){return(0,i.mG)(this,void 0,void 0,(function(){var e;return(0,i.Jh)(this,(function(t){return[2,(e=this.getActiveSync())?{id:e.element.tagName,params:e.params,element:e.element}:void 0]}))}))},e.prototype.getActive=function(){return Promise.resolve(this.getActiveSync())},e.prototype.getByIndex=function(e){return Promise.resolve(this.views[e])},e.prototype.canGoBack=function(e){return Promise.resolve(this.canGoBackSync(e))},e.prototype.getPrevious=function(e){return Promise.resolve(this.getPreviousSync(e))},e.prototype.getLength=function(){return this.views.length},e.prototype.getActiveSync=function(){return this.views[this.views.length-1]},e.prototype.canGoBackSync=function(e){return void 0===e&&(e=this.getActiveSync()),!(!e||!this.getPreviousSync(e))},e.prototype.getPreviousSync=function(e){if(void 0===e&&(e=this.getActiveSync()),e){var t=this.views,n=t.indexOf(e);return n>0?t[n-1]:void 0}},e.prototype.queueTrns=function(e,t){return(0,i.mG)(this,void 0,void 0,(function(){var n,r,o;return(0,i.Jh)(this,(function(i){switch(i.label){case 0:return this.isTransitioning&&null!=e.opts&&e.opts.skipIfBusy?[2,Promise.resolve(!1)]:(n=new Promise((function(t,n){e.resolve=t,e.reject=n})),e.done=t,e.opts&&!1!==e.opts.updateURL&&this.useRouter&&(r=document.querySelector("ion-router"))?[4,r.canTransition()]:[3,2]);case 1:if(!1===(o=i.sent()))return[2,Promise.resolve(!1)];if("string"==typeof o)return r.push(o,e.opts.direction||"back"),[2,Promise.resolve(!1)];i.label=2;case 2:return e.insertViews&&0===e.insertViews.length&&(e.insertViews=void 0),this.transInstr.push(e),this.nextTrns(),[2,n]}}))}))},e.prototype.success=function(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){var n=document.querySelector("ion-router");if(n){var i="back"===e.direction?"back":"forward";n.navChanged(i)}}},e.prototype.failed=function(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))},e.prototype.fireError=function(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)},e.prototype.nextTrns=function(){if(this.isTransitioning)return!1;var e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)},e.prototype.runTransition=function(e){return(0,i.mG)(this,void 0,void 0,(function(){var t,n,r,o,s,a;return(0,i.Jh)(this,(function(i){switch(i.label){case 0:if(i.trys.push([0,6,,7]),this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(e),t=this.getActiveSync(),n=this.getEnteringView(e,t),!t&&!n)throw new Error("no views in the stack to be removed");return n&&1===n.state?[4,n.init(this.el)]:[3,2];case 1:i.sent(),i.label=2;case 2:return this.postViewInit(n,t,e),(r=(e.enteringRequiresTransition||e.leavingRequiresTransition)&&n!==t)&&e.opts&&t&&("back"===e.opts.direction&&(e.opts.animationBuilder=e.opts.animationBuilder||n&&n.animationBuilder),t.animationBuilder=e.opts.animationBuilder),r?[4,this.transition(n,t,e)]:[3,4];case 3:return s=i.sent(),[3,5];case 4:s={hasCompleted:!0,requiresTransition:!1},i.label=5;case 5:return o=s,this.success(o,e),this.ionNavDidChange.emit(),[3,7];case 6:return a=i.sent(),this.failed(a,e),[3,7];case 7:return this.isTransitioning=!1,this.nextTrns(),[2]}}))}))},e.prototype.prepareTI=function(e){var t=this.views.length;if(e.opts=e.opts||{},void 0===e.opts.delegate&&(e.opts.delegate=this.delegate),void 0!==e.removeView){(0,s.i)(void 0!==e.removeStart,"removeView needs removeStart"),(0,s.i)(void 0!==e.removeCount,"removeView needs removeCount");var n=this.views.indexOf(e.removeView);if(n<0)throw new Error("removeView was not found");e.removeStart+=n}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=t-1),e.removeCount<0&&(e.removeCount=t-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t),e.insertViews&&((e.insertStart<0||e.insertStart>t)&&(e.insertStart=t),e.enteringRequiresTransition=e.insertStart===t);var i=e.insertViews;if(i){(0,s.i)(i.length>0,"length can not be zero");var r=function(e){return e.map((function(e){return e instanceof l?e:"component"in e?v(e.component,null===e.componentProps?void 0:e.componentProps):v(e,void 0)})).filter((function(e){return null!==e}))}(i);if(0===r.length)throw new Error("invalid views to insert");for(var o=0,a=r;o<a.length;o++){var u=a[o];u.delegate=e.opts.delegate;var c=u.nav;if(c&&c!==this)throw new Error("inserted view was already inserted");if(3===u.state)throw new Error("inserted view was already destroyed")}e.insertViews=r}},e.prototype.getEnteringView=function(e,t){var n=e.insertViews;if(void 0!==n)return n[n.length-1];var i=e.removeStart;if(void 0!==i)for(var r=this.views,o=i+e.removeCount,s=r.length-1;s>=0;s--){var a=r[s];if((s<i||s>=o)&&a!==t)return a}},e.prototype.postViewInit=function(e,t,n){(0,s.i)(t||e,"Both leavingView and enteringView are null"),(0,s.i)(n.resolve,"resolve must be valid"),(0,s.i)(n.reject,"reject must be valid");var i,r=n.opts,o=n.insertViews,u=n.removeStart,c=n.removeCount;if(void 0!==u&&void 0!==c){(0,s.i)(u>=0,"removeStart can not be negative"),(0,s.i)(c>=0,"removeCount can not be negative"),i=[];for(var l=0;l<c;l++)(f=this.views[l+u])&&f!==e&&f!==t&&i.push(f);r.direction=r.direction||"back"}var h=this.views.length+(void 0!==o?o.length:0)-(void 0!==c?c:0);if((0,s.i)(h>=0,"final balance can not be negative"),0===h)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(o){for(var v=n.insertStart,d=0,p=o;d<p.length;d++){var f=p[d];this.insertViewAt(f,v),v++}n.enteringRequiresTransition&&(r.direction=r.direction||"forward")}if(i&&i.length>0){for(var m=0,g=i;m<g.length;m++)f=g[m],(0,a.l)(f.element,a.b),(0,a.l)(f.element,a.c),(0,a.l)(f.element,a.d);for(var w=0,y=i;w<y.length;w++)f=y[w],this.destroyView(f)}},e.prototype.transition=function(e,t,n){return(0,i.mG)(this,void 0,void 0,(function(){var r,s,u,c,l,h,v,d=this;return(0,i.Jh)(this,(function(i){switch(i.label){case 0:return r=n.opts,s=r.progressAnimation?function(e){return d.sbAni=e}:void 0,u=(0,o.b)(this),c=e.element,l=t&&t.element,h=Object.assign({mode:u,showGoBack:this.canGoBackSync(e),baseEl:this.el,animationBuilder:this.animation||r.animationBuilder||o.c.get("navAnimation"),progressCallback:s,animated:this.animated&&o.c.getBoolean("animated",!0),enteringEl:c,leavingEl:l},r),[4,(0,a.t)(h)];case 1:return v=i.sent().hasCompleted,[2,this.transitionFinish(v,e,t,r)]}}))}))},e.prototype.transitionFinish=function(e,t,n,i){var r=e?t:n;return r&&this.cleanup(r),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:n,direction:i.direction}},e.prototype.insertViewAt=function(e,t){var n=this.views,i=n.indexOf(e);i>-1?((0,s.i)(e.nav===this,"view is not part of the nav"),n.splice(t,0,n.splice(i,1)[0])):((0,s.i)(!e.nav,"nav is used"),e.nav=this,n.splice(t,0,e))},e.prototype.removeView=function(e){(0,s.i)(2===e.state||3===e.state,"view state should be loaded or destroyed");var t=this.views,n=t.indexOf(e);(0,s.i)(n>-1,"view must be part of the stack"),n>=0&&t.splice(n,1)},e.prototype.destroyView=function(e){e._destroy(),this.removeView(e)},e.prototype.cleanup=function(e){if(!this.destroyed)for(var t=this.views,n=t.indexOf(e),i=t.length-1;i>=0;i--){var r=t[i],o=r.element;o&&(i>n?((0,a.l)(o,a.d),this.destroyView(r)):i<n&&(0,a.s)(o,!0))}},e.prototype.canStart=function(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.animationEnabled&&this.canGoBackSync()},e.prototype.onStart=function(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)},e.prototype.onMove=function(e){this.sbAni&&this.sbAni.progressStep(e)},e.prototype.onEnd=function(e,t,n){var i=this;if(this.sbAni){this.animationEnabled=!1,this.sbAni.onFinish((function(){i.animationEnabled=!0}),{oneTimeCallback:!0});var r=e?-.001:.001;e?r+=(0,u.g)([0,0],[.32,.72],[0,1],[1,1],t)[0]:(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),r+=(0,u.g)([0,0],[1,0],[.68,.28],[1,1],t)[0]),this.sbAni.progressEnd(e?1:0,r,n)}},e.prototype.render=function(){return(0,r.h)("slot",null)},Object.defineProperty(e.prototype,"el",{get:function(){return(0,r.i)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}},enumerable:!1,configurable:!0}),e}();d.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";var p=function(){function e(e){var t=this;(0,r.r)(this,e),this.routerDirection="forward",this.onClick=function(){return function(e,t,n,i,r){var o=e.closest("ion-nav");if(o)if("forward"===t){if(void 0!==n)return o.push(n,i,{skipIfBusy:!0,animationBuilder:r})}else if("root"===t){if(void 0!==n)return o.setRoot(n,i,{skipIfBusy:!0,animationBuilder:r})}else if("back"===t)return o.pop({skipIfBusy:!0,animationBuilder:r});return Promise.resolve(!1)}(t.el,t.routerDirection,t.component,t.componentProps,t.routerAnimation)}}return e.prototype.render=function(){return(0,r.h)(r.H,{onClick:this.onClick})},Object.defineProperty(e.prototype,"el",{get:function(){return(0,r.i)(this)},enumerable:!1,configurable:!0}),e}()}}]);