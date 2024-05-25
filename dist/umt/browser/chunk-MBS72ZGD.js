import{a as m,d as a,e as M,f as c,m as B,u as L,v as k}from"./chunk-OXA5FVGO.js";import{$ as T,A as V,B as E,U as O,Ua as u,Y as y,Z as b,ab as p,ba as l,g as S,i as z,ia as D,j as d,ja as I,jc as x,n as C,xa as F,y as R}from"./chunk-UMMRC35K.js";function $(r){return r&&typeof r.connect=="function"&&!(r instanceof z)}var v=function(r){return r[r.REPLACED=0]="REPLACED",r[r.INSERTED=1]="INSERTED",r[r.MOVED=2]="MOVED",r[r.REMOVED=3]="REMOVED",r}(v||{}),Q=new T("_ViewRepeater"),j=class{applyChanges(i,f,e,t,s){i.forEachOperation((n,o,h)=>{let g,_;if(n.previousIndex==null){let w=e(n,o,h);g=f.createEmbeddedView(w.templateRef,w.context,w.index),_=v.INSERTED}else h==null?(f.remove(o),_=v.REMOVED):(g=f.get(o),f.move(g,h),_=v.MOVED);s&&s({context:g?.context,operation:_,record:n})})}detach(){}};var N=20,W=(()=>{let i=class i{constructor(e,t,s){this._ngZone=e,this._platform=t,this._scrolled=new d,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=s}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=N){return this._platform.isBrowser?new S(t=>{this._globalSubscription||this._addGlobalListener();let s=e>0?this._scrolled.pipe(E(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{s.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):C()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let s=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(V(n=>!n||s.indexOf(n)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((s,n)=>{this._scrollableContainsElement(n,e)&&t.push(n)}),t}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,t){let s=B(t),n=e.getElementRef().nativeElement;do if(s==n)return!0;while(s=s.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{let e=this._getWindow();return R(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}};i.\u0275fac=function(t){return new(t||i)(l(p),l(m),l(x,8))},i.\u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"});let r=i;return r})(),Be=(()=>{let i=class i{constructor(e,t,s,n){this.elementRef=e,this.scrollDispatcher=t,this.ngZone=s,this.dir=n,this._destroyed=new d,this._elementScrolled=new S(o=>this.ngZone.runOutsideAngular(()=>R(this.elementRef.nativeElement,"scroll").pipe(O(this._destroyed)).subscribe(o)))}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,s=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=s?e.end:e.start),e.right==null&&(e.right=s?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),s&&c()!=a.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),c()==a.INVERTED?e.left=e.right:c()==a.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;M()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",s="right",n=this.elementRef.nativeElement;if(e=="top")return n.scrollTop;if(e=="bottom")return n.scrollHeight-n.clientHeight-n.scrollTop;let o=this.dir&&this.dir.value=="rtl";return e=="start"?e=o?s:t:e=="end"&&(e=o?t:s),o&&c()==a.INVERTED?e==t?n.scrollWidth-n.clientWidth-n.scrollLeft:n.scrollLeft:o&&c()==a.NEGATED?e==t?n.scrollLeft+n.scrollWidth-n.clientWidth:-n.scrollLeft:e==t?n.scrollLeft:n.scrollWidth-n.clientWidth-n.scrollLeft}};i.\u0275fac=function(t){return new(t||i)(u(F),u(W),u(p),u(L,8))},i.\u0275dir=I({type:i,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]],standalone:!0});let r=i;return r})(),Z=20,Le=(()=>{let i=class i{constructor(e,t,s){this._platform=e,this._change=new d,this._changeListener=n=>{this._change.next(n)},this._document=s,t.runOutsideAngular(()=>{if(e.isBrowser){let n=this._getWindow();n.addEventListener("resize",this._changeListener),n.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){let e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:s}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+s,right:e.left+t,height:s,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),s=e.documentElement,n=s.getBoundingClientRect(),o=-n.top||e.body.scrollTop||t.scrollY||s.scrollTop||0,h=-n.left||e.body.scrollLeft||t.scrollX||s.scrollLeft||0;return{top:o,left:h}}change(e=Z){return e>0?this._change.pipe(E(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}};i.\u0275fac=function(t){return new(t||i)(l(m),l(p),l(x,8))},i.\u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"});let r=i;return r})();var A=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=D({type:i}),i.\u0275inj=b({});let r=i;return r})(),je=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=D({type:i}),i.\u0275inj=b({imports:[k,A,k,A]});let r=i;return r})();export{$ as a,v as b,Q as c,j as d,W as e,Be as f,Le as g,A as h,je as i};