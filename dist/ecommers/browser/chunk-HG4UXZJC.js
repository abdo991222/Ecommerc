import{$ as Le,D as Se,K as Re,M as Ie,N as b,O as Me,Pa as xe,Q as y,Qa as oe,R as ne,Sb as je,T as E,Ta as Y,Tb as ze,Ua as w,V as m,Va as Z,W as h,X as Oe,Za as ae,_ as Pe,_a as L,aa as Ne,c as te,f as be,fb as Ue,gb as $e,i as ve,j as G,ja as Be,la as ke,n as B,oa as W,pa as re,ua as ie,w as Te,xa as se,z as _e}from"./chunk-CPR7NIO3.js";import{a as z,c as Ae,d as V}from"./chunk-4CLCTAJ7.js";var Xe=null;function ue(){return Xe}function Yn(t){Xe??=t}var Ve=class{};var X=new E(""),He=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:()=>h(yt),providedIn:"platform"})}return t})();var yt=(()=>{class t extends He{_location;_history;_doc=h(X);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ue().getBaseHref(this._doc)}onPopState(e){let n=ue().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=ue().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,i){this._history.pushState(e,n,i)}replaceState(e,n,i){this._history.replaceState(e,n,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function Je(t,r){return t?r?t.endsWith("/")?r.startsWith("/")?t+r.slice(1):t+r:r.startsWith("/")?t+r:`${t}/${r}`:t:r}function Ge(t){let r=t.match(/#|\?|$/),e=r&&r.index||t.length,n=e-(t[e-1]==="/"?1:0);return t.slice(0,n)+t.slice(e)}function O(t){return t&&t[0]!=="?"?"?"+t:t}var fe=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:()=>h(wt),providedIn:"root"})}return t})(),Et=new E(""),wt=(()=>{class t extends fe{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??h(X).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Je(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+O(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${n}${i}`:n}pushState(e,n,i,o){let s=this.prepareExternalUrl(i+O(o));this._platformLocation.pushState(e,n,s)}replaceState(e,n,i,o){let s=this.prepareExternalUrl(i+O(o));this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(m(He),m(Et,8))};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ft=(()=>{class t{_subject=new be;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=bt(Ge(We(n))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+O(n))}normalize(e){return t.stripTrailingSlash(At(this._basePath,We(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",i=null){this._locationStrategy.pushState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+O(n)),i)}replaceState(e,n="",i=null){this._locationStrategy.replaceState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+O(n)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(i=>i(e,n))}subscribe(e,n,i){return this._subject.subscribe({next:e,error:n??void 0,complete:i??void 0})}static normalizeQueryParams=O;static joinWithSlash=Je;static stripTrailingSlash=Ge;static \u0275fac=function(n){return new(n||t)(m(fe))};static \u0275prov=y({token:t,factory:()=>Ct(),providedIn:"root"})}return t})();function Ct(){return new Ft(m(fe))}function At(t,r){if(!t||!r.startsWith(t))return r;let e=r.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:r}function We(t){return t.replace(/\/index.html$/,"")}function bt(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}function qe(t,r){r=encodeURIComponent(r);for(let e of t.split(";")){let n=e.indexOf("="),[i,o]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(i.trim()===r)return decodeURIComponent(o)}return null}var ce=/\s+/,Ye=[],Zn=(()=>{class t{_ngEl;_renderer;initialClasses=Ye;rawClass;stateMap=new Map;constructor(e,n){this._ngEl=e,this._renderer=n}set klass(e){this.initialClasses=e!=null?e.trim().split(ce):Ye}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(ce):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let i=this.stateMap.get(e);i!==void 0?(i.enabled!==n&&(i.changed=!0,i.enabled=n),i.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],i=e[1];i.changed?(this._toggleClass(n,i.enabled),i.changed=!1):i.touched||(i.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),i.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(ce).forEach(i=>{n?this._renderer.addClass(this._ngEl.nativeElement,i):this._renderer.removeClass(this._ngEl.nativeElement,i)})}static \u0275fac=function(n){return new(n||t)(w(W),w(Y))};static \u0275dir=L({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var de=class{$implicit;ngForOf;index;count;constructor(r,e,n,i){this.$implicit=r,this.ngForOf=e,this.index=n,this.count=i}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Kn=(()=>{class t{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,n,i){this._viewContainer=e,this._template=n,this._differs=i}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let n=this._viewContainer;e.forEachOperation((i,o,s)=>{if(i.previousIndex==null)n.createEmbeddedView(this._template,new de(i.item,this._ngForOf,-1,-1),s===null?void 0:s);else if(s==null)n.remove(o===null?void 0:o);else if(o!==null){let u=n.get(o);n.move(u,s),Ze(u,i)}});for(let i=0,o=n.length;i<o;i++){let u=n.get(i).context;u.index=i,u.count=o,u.ngForOf=this._ngForOf}e.forEachIdentityChange(i=>{let o=n.get(i.currentIndex);Ze(o,i)})}static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(w(Z),w(oe),w(je))};static \u0275dir=L({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return t})();function Ze(t,r){t.context.$implicit=r.item}var Xn=(()=>{class t{_viewContainer;_context=new le;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,n){this._viewContainer=e,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){Ke("ngIfThen",e),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){Ke("ngIfElse",e),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(w(Z),w(oe))};static \u0275dir=L({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),le=class{$implicit=null;ngIf=null};function Ke(t,r){if(!!!(!r||r.createEmbeddedView))throw new Error(`${t} must be a TemplateRef, but received '${Me(r)}'.`)}var Hn=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,n,i){this._ngEl=e,this._differs=n,this._renderer=i}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,n){let[i,o]=e.split("."),s=i.indexOf("-")===-1?void 0:xe.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,i,o?`${n}${o}`:n,s):this._renderer.removeStyle(this._ngEl.nativeElement,i,s)}_applyChanges(e){e.forEachRemovedItem(n=>this._setStyle(n.key,null)),e.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),e.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static \u0275fac=function(n){return new(n||t)(w(W),w(ze),w(Y))};static \u0275dir=L({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),Jn=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,i):!1,get:(e,n,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,i)}})}static \u0275fac=function(n){return new(n||t)(w(Z))};static \u0275dir=L({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Ne]})}return t})();var qn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ae({type:t});static \u0275inj=ne({})}return t})(),vt="browser",Tt="server";function Qn(t){return t===vt}function er(t){return t===Tt}var K=class{};var U=class{},$=class{},A=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(r){r?typeof r=="string"?this.lazyInit=()=>{this.headers=new Map,r.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let i=e.slice(0,n),o=e.slice(n+1).trim();this.addHeaderEntry(i,o)}})}:typeof Headers<"u"&&r instanceof Headers?(this.headers=new Map,r.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(r).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(r){return this.init(),this.headers.has(r.toLowerCase())}get(r){this.init();let e=this.headers.get(r.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(r){return this.init(),this.headers.get(r.toLowerCase())||null}append(r,e){return this.clone({name:r,value:e,op:"a"})}set(r,e){return this.clone({name:r,value:e,op:"s"})}delete(r,e){return this.clone({name:r,value:e,op:"d"})}maybeSetNormalizedName(r,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,r)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(r=>this.applyUpdate(r)),this.lazyUpdate=null))}copyFrom(r){r.init(),Array.from(r.headers.keys()).forEach(e=>{this.headers.set(e,r.headers.get(e)),this.normalizedNames.set(e,r.normalizedNames.get(e))})}clone(r){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([r]),e}applyUpdate(r){let e=r.name.toLowerCase();switch(r.op){case"a":case"s":let n=r.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(r.name,e);let i=(r.op==="a"?this.headers.get(e):void 0)||[];i.push(...n),this.headers.set(e,i);break;case"d":let o=r.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(u=>o.indexOf(u)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(r,e){let n=r.toLowerCase();this.maybeSetNormalizedName(r,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(r,e){let n=(Array.isArray(e)?e:[e]).map(o=>o.toString()),i=r.toLowerCase();this.headers.set(i,n),this.maybeSetNormalizedName(r,i)}forEach(r){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>r(this.normalizedNames.get(e),this.headers.get(e)))}};var pe=class{encodeKey(r){return Qe(r)}encodeValue(r){return Qe(r)}decodeKey(r){return decodeURIComponent(r)}decodeValue(r){return decodeURIComponent(r)}};function St(t,r){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(i=>{let o=i.indexOf("="),[s,u]=o==-1?[r.decodeKey(i),""]:[r.decodeKey(i.slice(0,o)),r.decodeValue(i.slice(o+1))],a=e.get(s)||[];a.push(u),e.set(s,a)}),e}var Rt=/%(\d[a-f0-9])/gi,It={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Qe(t){return encodeURIComponent(t).replace(Rt,(r,e)=>It[e]??r)}function H(t){return`${t}`}var _=class t{map;encoder;updates=null;cloneFrom=null;constructor(r={}){if(this.encoder=r.encoder||new pe,r.fromString){if(r.fromObject)throw new b(2805,!1);this.map=St(r.fromString,this.encoder)}else r.fromObject?(this.map=new Map,Object.keys(r.fromObject).forEach(e=>{let n=r.fromObject[e],i=Array.isArray(n)?n.map(H):[H(n)];this.map.set(e,i)})):this.map=null}has(r){return this.init(),this.map.has(r)}get(r){this.init();let e=this.map.get(r);return e?e[0]:null}getAll(r){return this.init(),this.map.get(r)||null}keys(){return this.init(),Array.from(this.map.keys())}append(r,e){return this.clone({param:r,value:e,op:"a"})}appendAll(r){let e=[];return Object.keys(r).forEach(n=>{let i=r[n];Array.isArray(i)?i.forEach(o=>{e.push({param:n,value:o,op:"a"})}):e.push({param:n,value:i,op:"a"})}),this.clone(e)}set(r,e){return this.clone({param:r,value:e,op:"s"})}delete(r,e){return this.clone({param:r,value:e,op:"d"})}toString(){return this.init(),this.keys().map(r=>{let e=this.encoder.encodeKey(r);return this.map.get(r).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(r=>r!=="").join("&")}clone(r){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(r),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(r=>this.map.set(r,this.cloneFrom.map.get(r))),this.updates.forEach(r=>{switch(r.op){case"a":case"s":let e=(r.op==="a"?this.map.get(r.param):void 0)||[];e.push(H(r.value)),this.map.set(r.param,e);break;case"d":if(r.value!==void 0){let n=this.map.get(r.param)||[],i=n.indexOf(H(r.value));i!==-1&&n.splice(i,1),n.length>0?this.map.set(r.param,n):this.map.delete(r.param)}else{this.map.delete(r.param);break}}}),this.cloneFrom=this.updates=null)}};var De=class{map=new Map;set(r,e){return this.map.set(r,e),this}get(r){return this.map.has(r)||this.map.set(r,r.defaultValue()),this.map.get(r)}delete(r){return this.map.delete(r),this}has(r){return this.map.has(r)}keys(){return this.map.keys()}};function Mt(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function et(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function tt(t){return typeof Blob<"u"&&t instanceof Blob}function nt(t){return typeof FormData<"u"&&t instanceof FormData}function Ot(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var k="Content-Type",q="Accept",Ee="X-Request-URL",at="text/plain",ut="application/json",ct=`${ut}, ${at}, */*`,x=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(r,e,n,i){this.url=e,this.method=r.toUpperCase();let o;if(Mt(this.method)||i?(this.body=n!==void 0?n:null,o=i):o=n,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers??=new A,this.context??=new De,!this.params)this.params=new _,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let u=e.indexOf("?"),a=u===-1?"?":u<e.length-1?"&":"";this.urlWithParams=e+a+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||et(this.body)||tt(this.body)||nt(this.body)||Ot(this.body)?this.body:this.body instanceof _?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||nt(this.body)?null:tt(this.body)?this.body.type||null:et(this.body)?null:typeof this.body=="string"?at:this.body instanceof _?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?ut:null}clone(r={}){let e=r.method||this.method,n=r.url||this.url,i=r.responseType||this.responseType,o=r.transferCache??this.transferCache,s=r.body!==void 0?r.body:this.body,u=r.withCredentials??this.withCredentials,a=r.reportProgress??this.reportProgress,g=r.headers||this.headers,p=r.params||this.params,D=r.context??this.context;return r.setHeaders!==void 0&&(g=Object.keys(r.setHeaders).reduce((F,l)=>F.set(l,r.setHeaders[l]),g)),r.setParams&&(p=Object.keys(r.setParams).reduce((F,l)=>F.set(l,r.setParams[l]),p)),new t(e,n,s,{params:p,headers:g,context:D,reportProgress:a,responseType:i,withCredentials:u,transferCache:o})}},S=function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t}(S||{}),j=class{headers;status;statusText;url;ok;type;constructor(r,e=200,n="OK"){this.headers=r.headers||new A,this.status=r.status!==void 0?r.status:e,this.statusText=r.statusText||n,this.url=r.url||null,this.ok=this.status>=200&&this.status<300}},Q=class t extends j{constructor(r={}){super(r)}type=S.ResponseHeader;clone(r={}){return new t({headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0})}},P=class t extends j{body;constructor(r={}){super(r),this.body=r.body!==void 0?r.body:null}type=S.Response;clone(r={}){return new t({body:r.body!==void 0?r.body:this.body,headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0})}},T=class extends j{name="HttpErrorResponse";message;error;ok=!1;constructor(r){super(r,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${r.url||"(unknown url)"}`:this.message=`Http failure response for ${r.url||"(unknown url)"}: ${r.status} ${r.statusText}`,this.error=r.error||null}},dt=200,Pt=204;function he(t,r){return{body:r,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,transferCache:t.transferCache}}var Lt=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,i={}){let o;if(e instanceof x)o=e;else{let a;i.headers instanceof A?a=i.headers:a=new A(i.headers);let g;i.params&&(i.params instanceof _?g=i.params:g=new _({fromObject:i.params})),o=new x(e,n,i.body!==void 0?i.body:null,{headers:a,context:i.context,params:g,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache})}let s=G(o).pipe(_e(a=>this.handler.handle(a)));if(e instanceof x||i.observe==="events")return s;let u=s.pipe(Te(a=>a instanceof P));switch(i.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return u.pipe(B(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new b(2806,!1);return a.body}));case"blob":return u.pipe(B(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new b(2807,!1);return a.body}));case"text":return u.pipe(B(a=>{if(a.body!==null&&typeof a.body!="string")throw new b(2808,!1);return a.body}));case"json":default:return u.pipe(B(a=>a.body))}case"response":return u;default:throw new b(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new _().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,i={}){return this.request("PATCH",e,he(i,n))}post(e,n,i={}){return this.request("POST",e,he(i,n))}put(e,n,i={}){return this.request("PUT",e,he(i,n))}static \u0275fac=function(n){return new(n||t)(m(U))};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})(),Nt=/^\)\]\}',?\n/;function rt(t){if(t.url)return t.url;let r=Ee.toLocaleLowerCase();return t.headers.get(r)}var lt=new E(""),ge=(()=>{class t{fetchImpl=h(me,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=h(ke);handle(e){return new te(n=>{let i=new AbortController;return this.doRequest(e,i.signal,n).then(ye,o=>n.error(new T({error:o}))),()=>i.abort()})}doRequest(e,n,i){return V(this,null,function*(){let o=this.createRequestInit(e),s;try{let l=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,z({signal:n},o)));Bt(l),i.next({type:S.Sent}),s=yield l}catch(l){i.error(new T({error:l,status:l.status??0,statusText:l.statusText,url:e.urlWithParams,headers:l.headers}));return}let u=new A(s.headers),a=s.statusText,g=rt(s)??e.urlWithParams,p=s.status,D=null;if(e.reportProgress&&i.next(new Q({headers:u,status:p,statusText:a,url:g})),s.body){let l=s.headers.get("content-length"),R=[],c=s.body.getReader(),d=0,C,v,f=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>V(this,null,function*(){for(;;){let{done:M,value:N}=yield c.read();if(M)break;if(R.push(N),d+=N.length,e.reportProgress){v=e.responseType==="text"?(v??"")+(C??=new TextDecoder).decode(N,{stream:!0}):void 0;let Ce=()=>i.next({type:S.DownloadProgress,total:l?+l:void 0,loaded:d,partialText:v});f?f.run(Ce):Ce()}}}));let I=this.concatChunks(R,d);try{let M=s.headers.get(k)??"";D=this.parseBody(e,I,M)}catch(M){i.error(new T({error:M,headers:new A(s.headers),status:s.status,statusText:s.statusText,url:rt(s)??e.urlWithParams}));return}}p===0&&(p=D?dt:0),p>=200&&p<300?(i.next(new P({body:D,headers:u,status:p,statusText:a,url:g})),i.complete()):i.error(new T({error:D,headers:u,status:p,statusText:a,url:g}))})}parseBody(e,n,i){switch(e.responseType){case"json":let o=new TextDecoder().decode(n).replace(Nt,"");return o===""?null:JSON.parse(o);case"text":return new TextDecoder().decode(n);case"blob":return new Blob([n],{type:i});case"arraybuffer":return n.buffer}}createRequestInit(e){let n={},i=e.withCredentials?"include":void 0;if(e.headers.forEach((o,s)=>n[o]=s.join(",")),e.headers.has(q)||(n[q]=ct),!e.headers.has(k)){let o=e.detectContentTypeHeader();o!==null&&(n[k]=o)}return{body:e.serializeBody(),method:e.method,headers:n,credentials:i}}concatChunks(e,n){let i=new Uint8Array(n),o=0;for(let s of e)i.set(s,o),o+=s.length;return i}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})(),me=class{};function ye(){}function Bt(t){t.then(ye,ye)}function kt(t,r){return r(t)}function xt(t,r,e){return(n,i)=>Le(e,()=>r(n,o=>t(o,i)))}var we=new E(""),ft=new E(""),Ut=new E("",{providedIn:"root",factory:()=>!0});var it=(()=>{class t extends U{backend;injector;chain=null;pendingTasks=h(Be);contributeToStability=h(Ut);constructor(e,n){super(),this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(we),...this.injector.get(ft,[])]));this.chain=n.reduceRight((i,o)=>xt(i,o,this.injector),kt)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,i=>this.backend.handle(i)).pipe(Se(()=>this.pendingTasks.remove(n)))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(m($),m(Pe))};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})();var $t=/^\)\]\}',?\n/,jt=RegExp(`^${Ee}:`,"m");function zt(t){return"responseURL"in t&&t.responseURL?t.responseURL:jt.test(t.getAllResponseHeaders())?t.getResponseHeader(Ee):null}var st=(()=>{class t{xhrFactory;constructor(e){this.xhrFactory=e}handle(e){if(e.method==="JSONP")throw new b(-2800,!1);let n=this.xhrFactory;return(n.\u0275loadImpl?ve(n.\u0275loadImpl()):G(null)).pipe(Re(()=>new te(o=>{let s=n.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((c,d)=>s.setRequestHeader(c,d.join(","))),e.headers.has(q)||s.setRequestHeader(q,ct),!e.headers.has(k)){let c=e.detectContentTypeHeader();c!==null&&s.setRequestHeader(k,c)}if(e.responseType){let c=e.responseType.toLowerCase();s.responseType=c!=="json"?c:"text"}let u=e.serializeBody(),a=null,g=()=>{if(a!==null)return a;let c=s.statusText||"OK",d=new A(s.getAllResponseHeaders()),C=zt(s)||e.url;return a=new Q({headers:d,status:s.status,statusText:c,url:C}),a},p=()=>{let{headers:c,status:d,statusText:C,url:v}=g(),f=null;d!==Pt&&(f=typeof s.response>"u"?s.responseText:s.response),d===0&&(d=f?dt:0);let I=d>=200&&d<300;if(e.responseType==="json"&&typeof f=="string"){let M=f;f=f.replace($t,"");try{f=f!==""?JSON.parse(f):null}catch(N){f=M,I&&(I=!1,f={error:N,text:f})}}I?(o.next(new P({body:f,headers:c,status:d,statusText:C,url:v||void 0})),o.complete()):o.error(new T({error:f,headers:c,status:d,statusText:C,url:v||void 0}))},D=c=>{let{url:d}=g(),C=new T({error:c,status:s.status||0,statusText:s.statusText||"Unknown Error",url:d||void 0});o.error(C)},F=!1,l=c=>{F||(o.next(g()),F=!0);let d={type:S.DownloadProgress,loaded:c.loaded};c.lengthComputable&&(d.total=c.total),e.responseType==="text"&&s.responseText&&(d.partialText=s.responseText),o.next(d)},R=c=>{let d={type:S.UploadProgress,loaded:c.loaded};c.lengthComputable&&(d.total=c.total),o.next(d)};return s.addEventListener("load",p),s.addEventListener("error",D),s.addEventListener("timeout",D),s.addEventListener("abort",D),e.reportProgress&&(s.addEventListener("progress",l),u!==null&&s.upload&&s.upload.addEventListener("progress",R)),s.send(u),o.next({type:S.Sent}),()=>{s.removeEventListener("error",D),s.removeEventListener("abort",D),s.removeEventListener("load",p),s.removeEventListener("timeout",D),e.reportProgress&&(s.removeEventListener("progress",l),u!==null&&s.upload&&s.upload.removeEventListener("progress",R)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(n){return new(n||t)(m(K))};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})(),ht=new E(""),Vt="XSRF-TOKEN",Gt=new E("",{providedIn:"root",factory:()=>Vt}),Wt="X-XSRF-TOKEN",Yt=new E("",{providedIn:"root",factory:()=>Wt}),ee=class{},Zt=(()=>{class t{doc;platform;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(e,n,i){this.doc=e,this.platform=n,this.cookieName=i}getToken(){if(this.platform==="server")return null;let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=qe(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||t)(m(X),m(ie),m(Gt))};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})();function Kt(t,r){let e=t.url.toLowerCase();if(!h(ht)||t.method==="GET"||t.method==="HEAD"||e.startsWith("http://")||e.startsWith("https://"))return r(t);let n=h(ee).getToken(),i=h(Yt);return n!=null&&!t.headers.has(i)&&(t=t.clone({headers:t.headers.set(i,n)})),r(t)}var Fe=function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t}(Fe||{});function gt(t,r){return{\u0275kind:t,\u0275providers:r}}function hr(...t){let r=[Lt,st,it,{provide:U,useExisting:it},{provide:$,useFactory:()=>h(lt,{optional:!0})??h(st)},{provide:we,useValue:Kt,multi:!0},{provide:ht,useValue:!0},{provide:ee,useClass:Zt}];for(let e of t)r.push(...e.\u0275providers);return Oe(r)}function gr(t){return gt(Fe.Interceptors,t.map(r=>({provide:we,useValue:r,multi:!0})))}function pr(){return gt(Fe.Fetch,[ge,{provide:lt,useExisting:ge},{provide:$,useExisting:ge}])}var Xt=new E(""),Ht="b",Jt="h",qt="s",Qt="st",en="u",tn="rt",J=new E(""),nn=["GET","HEAD"];function rn(t,r){let F=h(J),{isCacheActive:e}=F,n=Ae(F,["isCacheActive"]),{transferCache:i,method:o}=t;if(!e||i===!1||o==="POST"&&!n.includePostRequests&&!i||o!=="POST"&&!nn.includes(o)||!n.includeRequestsWithAuthHeaders&&sn(t)||n.filter?.(t)===!1)return r(t);let s=h(se);if(h(Xt,{optional:!0}))throw new b(2803,!1);let a=t.url,g=on(t,a),p=s.get(g,null),D=n.includeHeaders;if(typeof i=="object"&&i.includeHeaders&&(D=i.includeHeaders),p){let{[Ht]:l,[tn]:R,[Jt]:c,[qt]:d,[Qt]:C,[en]:v}=p,f=l;switch(R){case"arraybuffer":f=new TextEncoder().encode(l).buffer;break;case"blob":f=new Blob([l]);break}let I=new A(c);return G(new P({body:f,headers:I,status:d,statusText:C,url:v}))}return r(t).pipe(Ie(l=>{l instanceof P}))}function sn(t){return t.headers.has("authorization")||t.headers.has("proxy-authorization")}function ot(t){return[...t.keys()].sort().map(r=>`${r}=${t.getAll(r)}`).join("&")}function on(t,r){let{params:e,method:n,responseType:i}=t,o=ot(e),s=t.serializeBody();s instanceof URLSearchParams?s=ot(s):typeof s!="string"&&(s="");let u=[n,i,r,s,o].join("|"),a=an(u);return a}function an(t){let r=0;for(let e of t)r=Math.imul(31,r)+e.charCodeAt(0)<<0;return r+=2147483648,r.toString()}function Dr(t){return[{provide:J,useFactory:()=>(re("NgHttpTransferCache"),z({isCacheActive:!0},t))},{provide:ft,useValue:rn,multi:!0,deps:[se,J]},{provide:Ue,multi:!0,useFactory:()=>{let r=h($e),e=h(J);return()=>{r.whenStable().then(()=>{e.isCacheActive=!1})}}}]}export{ue as a,Yn as b,Ve as c,X as d,fe as e,Ft as f,qe as g,Zn as h,Kn as i,Xn as j,Hn as k,Jn as l,qn as m,vt as n,Qn as o,er as p,K as q,Lt as r,hr as s,gr as t,pr as u,Dr as v};
