import{b,c as h,d as M,e as w,f as C,g as I,h as F,i as _,k as N,l as T,o as D,p as A,q as R,r as P,s as se,t as me}from"./chunk-IL4VTW5P.js";import{a as V,b as O}from"./chunk-EPAS4LJI.js";import{a as de,b as ce}from"./chunk-UU6AMXT4.js";import{b as E}from"./chunk-ELN5LEFX.js";import{b as re,c as oe,e as ae,f as S,h as le}from"./chunk-EQ5KMMP3.js";import"./chunk-OXA5FVGO.js";import"./chunk-2J4O7ELU.js";import{$a as J,Cb as y,Ea as H,Eb as U,Mb as ee,Nb as n,Ob as v,Pb as j,Rb as u,Ta as d,Ub as te,Va as W,W as q,Xa as Y,Y as L,Za as Z,ab as Q,ca as p,ha as f,jb as B,jc as ie,ka as z,lb as g,pa as K,qa as X,qc as ne,tb as t,ub as i,vb as m,zb as $}from"./chunk-UMMRC35K.js";var pe=(()=>{let e=class e{constructor(){this.builder=p(_),this.router=p(S),this.form=this.builder.group({email:["",h.required],password:["",h.required]})}onFormSubmit(){console.log("Form submitted"),this.router.navigateByUrl("/dashboard")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f({type:e,selectors:[["app-login"]],standalone:!0,features:[u],decls:22,vars:1,consts:[[1,"section","flex"],[1,"overlay"],[1,"login","flex","flex-col","justify-center","items-center","relative"],[1,"flex","flex-col","items-center","relative","-top-8"],["width","150","src","/assets/images/logo.png"],[1,"flex","items-center","flex-col","my-8"],[1,"font-semibold"],[1,"w-full",3,"formGroup"],["appearance","outline",1,"w-full"],["formControlName","email","matInput","","placeholder","email@domain.com"],["matInput","","placeholder","password","type","password","formControlName","password"],["mat-flat-button","","color","primary",1,"mt-4",3,"click"],["width","150","src","/assets/images/powered.png",1,"poweredBy"]],template:function(r,s){r&1&&(t(0,"div",0),m(1,"div",1),t(2,"div",2)(3,"div",3),m(4,"img",4),t(5,"div",5)(6,"h1",6),n(7,"UMT Issuance Portal"),i(),t(8,"p"),n(9,"Enter administrator credentials to login"),i()(),t(10,"form",7)(11,"mat-form-field",8),m(12,"input",9),t(13,"mat-error"),n(14,"Email is required"),i()(),t(15,"mat-form-field",8),m(16,"input",10),t(17,"mat-error"),n(18,"Password is required"),i()()(),t(19,"button",11),y("click",function(){return s.onFormSubmit()}),n(20," Login to Issuance Portal "),i()(),m(21,"img",12),i()()),r&2&&(d(10),g("formGroup",s.form))},dependencies:[A,D,T,N,C,b,M,w,I,F,P,R,E,O,V],styles:[".section[_ngcontent-%COMP%]{background:url(/assets/images/UMT-bg-login.jpg);height:100%;width:100%}.overlay[_ngcontent-%COMP%]{background-color:#000c;flex:1.5}.login[_ngcontent-%COMP%]{flex:2;background-color:#fff}.poweredBy[_ngcontent-%COMP%]{position:absolute;bottom:5rem;left:calc(50% - 75px)}"]});let l=e;return l})();function we(l,e){if(l&1){let o=$();t(0,"div",6),m(1,"img",7),t(2,"div",8)(3,"h1",9),n(4,"UMT Universal Verification"),i(),t(5,"p"),n(6," Enter the certificate ID to verify your degree credentials from blockchain "),i()(),t(7,"form",10)(8,"mat-form-field",11),m(9,"input",12),t(10,"mat-error"),n(11,"Certificate ID is required"),i()()(),t(12,"button",13),y("click",function(){K(o);let r=U();return X(r.navigateTo("/verification-result"))}),n(13," Verify Credentials "),i(),t(14,"p",14),n(15," Note: Kindly contact your university administrator if you haven\u2019t received certificate ID "),i()()}if(l&2){let o=U();d(7),g("formGroup",o.form)}}function Ce(l,e){l&1&&m(0,"img",15)}function Ie(l,e){l&1&&(t(0,"div"),m(1,"mat-spinner"),i())}var fe=(()=>{let e=class e{constructor(){this.builder=p(_),this.router=p(S),this.form=this.builder.group({email:["",h.required],password:["",h.required]}),this.showSpinner=!1}navigateTo(a){this.showSpinner=!0,setTimeout(()=>this.router.navigateByUrl(a),2e3)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f({type:e,selectors:[["app-verification"]],standalone:!0,features:[u],decls:7,vars:3,consts:[["loader",""],[1,"section","flex"],[1,"overlay"],[1,"login","flex","flex-col","justify-center","items-center","relative"],["class","flex flex-col items-center relative -top-8",4,"ngIf","ngIfElse"],["class","poweredBy","width","150","src","/assets/images/powered.png",4,"ngIf"],[1,"flex","flex-col","items-center","relative","-top-8"],["width","150","src","/assets/images/logo.png"],[1,"flex","items-center","flex-col","my-8"],[1,"font-semibold"],[1,"w-full",3,"formGroup"],["appearance","outline",1,"w-full"],["formControlName","email","matInput","","placeholder","Certificate ID"],["mat-flat-button","",1,"mt-4",3,"click"],[1,"mt-24","italic","text-xs"],["width","150","src","/assets/images/powered.png",1,"poweredBy"]],template:function(r,s){if(r&1&&(t(0,"div",1),m(1,"div",2),t(2,"div",3),B(3,we,16,1,"div",4)(4,Ce,1,0,"img",5),i()(),B(5,Ie,2,0,"ng-template",null,0,te)),r&2){let c=ee(6);d(3),g("ngIf",!s.showSpinner)("ngIfElse",c),d(),g("ngIf",!s.showSpinner)}},dependencies:[A,D,T,N,C,b,M,w,I,F,P,R,E,O,V,me,se,ne],styles:[".section[_ngcontent-%COMP%]{background:url(/assets/images/UMT-bg-login.jpg);height:100%;width:100%}.overlay[_ngcontent-%COMP%]{background-color:#000c;flex:1.5}.login[_ngcontent-%COMP%]{flex:2;background-color:#fff}.poweredBy[_ngcontent-%COMP%]{position:absolute;bottom:5rem;left:calc(50% - 75px)}"]});let l=e;return l})();var ue=(()=>{let e=class e{constructor(){this.data={date:"28-05-24",student:"Khurram Adhami",enrollment:"NED/0719/13-14",department:"Software Engineering",batch:"2013-14",blockchainProof:"sdfsdfxxf23dsf",certificateId:"1bX1239",certificateUrl:"https://donwload.url"}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f({type:e,selectors:[["app-verification-result"]],standalone:!0,features:[u],decls:103,vars:6,consts:[[1,"flex","justify-between","m-8","mx-16","mb-4","items-center"],[1,"mb-0","font-semibold"],["src","/assets/images/powered.png"],[1,"flex","m-8"],[1,"w-1/5","flex","flex-col","p-8"],[1,"flex","gap-x-4","items-center","py-4","verified","mb-12","justify-center"],["width","50","height","50","src","/assets/images/guard.png",1,"guard-img"],[1,"flex","flex-col","justify-center"],[1,"font-semibold","mb-0"],[1,"mb-0"],[1,"mb-8"],[1,"mb-8","mb-0"],[1,"flex","gap-x-4","items-center","py-4","px-1","sign-verified","mb-12","justify-center"],["width","50","height","50","src","/assets/images/verified.png",1,"guard-img"],[1,"w-4/5","p-8"],[1,"border","py-8"],[1,"p-4"],[1,"flex"],[1,"w-full","flex","justify-center","items-center","text-lg"],[1,"font-semibold"],[1,"w-full","flex","justify-center"],["height","150","width","150","src","/assets/images/logo.png"],[1,"w-full","flex","justify-center","items-center"],["src","/assets/images/powered.png",1,"poweredBy"],[1,"mt-6"],[1,"text-4xl","text-center"],[1,"text-3xl","text-center","font-light","mt-6"],[1,"px-24","mt-6"],[1,"text-lg"],[1,"font-semibold","underline"],[1,"mt-6","text-lg"],[1,"flex","px-24","mt-12","items-center"],[1,"text-lg","w-full"],["height","150","width","150","src","/assets/images/stamp.png"]],template:function(r,s){r&1&&(t(0,"div")(1,"div",0)(2,"h1",1),n(3),i(),m(4,"img",2),i(),m(5,"mat-divider"),t(6,"div",3)(7,"div",4)(8,"div",5),m(9,"img",6),t(10,"div",7)(11,"h2",8),n(12,"Verified"),i(),t(13,"p",9),n(14,"This is a valid degree"),i()()(),t(15,"div",10)(16,"h2",8),n(17,"ISSUE DATE"),i(),t(18,"p",11),n(19,"May 28, 2024"),i()(),t(20,"div",10)(21,"h2",8),n(22,"ISSUER"),i(),t(23,"p",11),n(24,"University of Management & Technology"),i()(),t(25,"div",10)(26,"h2",8),n(27,"TRANSACTION ID"),i(),t(28,"p",11),n(29,"d1412309as-d09km12398123asd"),i()(),t(30,"div",10)(31,"h2",8),n(32,"ISSUER INFORMATION"),i(),t(33,"p",11),n(34,"12398asdk21308asd"),i(),t(35,"p",11),n(36,"Smart Contract Address"),i()(),t(37,"div",10)(38,"h2",8),n(39,"ISSUER DATA VERIFIED"),i()(),t(40,"div",12),m(41,"img",13),t(42,"div")(43,"h2",8),n(44,"Sign Verified"),i(),t(45,"p",9),n(46,"Issuer sign is valid"),i()()()(),t(47,"div",14)(48,"div",15)(49,"div",16)(50,"div",17)(51,"div",18),n(52," Enrollment No: "),t(53,"span",19),n(54),i()(),t(55,"div",20),m(56,"img",21),i(),t(57,"div",22),m(58,"img",23),i()()(),t(59,"div",24)(60,"div",25),n(61," University of Management & Technology "),i(),t(62,"div",26),n(63," BACHELOR OF ENGINEERING "),i()(),t(64,"div",27)(65,"div",28),n(66," This is to certify that "),t(67,"span",29),n(68),i(),n(69," has completed the prescribed course of study for the Degree of Bachelor of Engineering in "),t(70,"span",29),n(71),i(),n(72," and has successfully passed the requisite examinations held in "),t(73,"span",29),n(74,"2018"),i(),n(75,". "),i(),t(76,"div",30),n(77," The University hereby confers upon him/her the Degree of Bachelor of Engineering in "),t(78,"span",29),n(79),i(),n(80," at the Convocation of "),t(81,"span",29),n(82),i()(),t(83,"div",30),n(84," This degree is cryptographically secured and verifiable via blockchain technology "),i()(),t(85,"div",31)(86,"div",32)(87,"div",19),n(88,"Verified Certificate"),i(),t(89,"div"),n(90,"Issued May 28, 2024"),i()(),t(91,"div",32)(92,"div",19),n(93,"Verified Certificate"),i(),t(94,"div"),n(95,"Issued May 28, 2024"),i()(),t(96,"div",32)(97,"div",19),n(98,"Verified Certificate"),i(),t(99,"div"),n(100,"Issued May 28, 2024"),i()(),t(101,"div",32),m(102,"img",33),i()()()()()()),r&2&&(d(3),v(s.data.student),d(51),j(" \xA0",s.data.enrollment,""),d(14),j("",s.data.student," "),d(3),v(s.data.department),d(8),v(s.data.department),d(3),v(s.data.batch))},dependencies:[ce,de],styles:[".guard-img[_ngcontent-%COMP%]{width:50px;height:50px}.verified[_ngcontent-%COMP%]{background-color:#e9f7f2;border-left:.5rem solid #2ab27b}.sign-verified[_ngcontent-%COMP%]{background-color:#57a4ff33;border-left:.5rem solid #57a4ff}.poweredBy[_ngcontent-%COMP%]{height:50px}"]});let l=e;return l})();var ge=[{path:"login",component:pe},{path:"dashboard",loadChildren:()=>import("./chunk-7YVZKE4S.js").then(l=>l.dashboardRoutes)},{path:"verification",component:fe},{path:"verification-result",component:ue},{path:"**",redirectTo:"login"}];var Fe="@",_e=(()=>{let e=class e{constructor(a,r,s,c,x){this.doc=a,this.delegate=r,this.zone=s,this.animationType=c,this.moduleImpl=x,this._rendererFactoryPromise=null,this.scheduler=p(Y,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-5NDYRCH5.js")).catch(r=>{throw new q(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:s})=>{this._engine=r(this.animationType,this.doc,this.scheduler);let c=new s(this.delegate,this._engine,this.zone);return this.delegate=c,c})}createRenderer(a,r){let s=this.delegate.createRenderer(a,r);if(s.\u0275type===0)return s;typeof s.throwOnSyntheticProps=="boolean"&&(s.throwOnSyntheticProps=!1);let c=new G(s);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(x=>{let ye=x.createRenderer(a,r);c.use(ye)}).catch(x=>{c.use(s)}),c}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(r){W()},e.\u0275prov=L({token:e,factory:e.\u0275fac});let l=e;return l})(),G=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let o of this.replay)o(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,o){return this.delegate.createElement(e,o)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,o){this.delegate.appendChild(e,o)}insertBefore(e,o,a,r){this.delegate.insertBefore(e,o,a,r)}removeChild(e,o,a){this.delegate.removeChild(e,o,a)}selectRootElement(e,o){return this.delegate.selectRootElement(e,o)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,o,a,r){this.delegate.setAttribute(e,o,a,r)}removeAttribute(e,o,a){this.delegate.removeAttribute(e,o,a)}addClass(e,o){this.delegate.addClass(e,o)}removeClass(e,o){this.delegate.removeClass(e,o)}setStyle(e,o,a,r){this.delegate.setStyle(e,o,a,r)}removeStyle(e,o,a){this.delegate.removeStyle(e,o,a)}setProperty(e,o,a){this.shouldReplay(o)&&this.replay.push(r=>r.setProperty(e,o,a)),this.delegate.setProperty(e,o,a)}setValue(e,o){this.delegate.setValue(e,o)}listen(e,o,a){return this.shouldReplay(o)&&this.replay.push(r=>r.listen(e,o,a)),this.delegate.listen(e,o,a)}shouldReplay(e){return this.replay!==null&&e.startsWith(Fe)}};function he(l="animations"){return J("NgAsyncAnimations"),z([{provide:Z,useFactory:(e,o,a)=>new _e(e,o,a,l),deps:[ie,re,Q]},{provide:H,useValue:l==="noop"?"NoopAnimations":"BrowserAnimations"}])}var ve={providers:[le(ge),he()]};var xe=(()=>{let e=class e{constructor(){this.title="UMT"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f({type:e,selectors:[["app-root"]],standalone:!0,features:[u],decls:1,vars:0,template:function(r,s){r&1&&m(0,"router-outlet")},dependencies:[ae]});let l=e;return l})();oe(xe,ve).catch(l=>console.error(l));
