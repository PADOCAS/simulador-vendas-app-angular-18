import{a as qe}from"./chunk-67ESVYZZ.js";import{$ as Be,B,C as H,D as Ie,E as Ae,F as Te,G as De,W as Pe,X as Ne,Y as Oe,Z as ke,_ as Re,aa as He,b as ce,ba as Ve,c as ue,ca as Le,d as he,da as je,e as fe,ea as Ge,f as ge,fa as f,g as ve,ga as $e,h as Ce,i as T,j as D,k as be,l as P,m as ye,n as Me,o as Se,p as _e,r as Fe,s as xe,t as Ee,u as we,v as N,w as O,x as k,y as R}from"./chunk-TVFQMP3O.js";import{$ as z,$a as Q,$b as v,Ab as s,Ac as pe,Bb as u,Fb as re,Ha as X,Ib as S,Kb as ne,S as $,Ta as Y,Tb as I,Ub as m,Va as l,Vb as ae,Wa as M,Wb as se,Xa as J,Yb as h,Z as q,Za as K,_b as g,bb as ee,cb as te,d as j,fa as C,gc as me,ja as c,ma as U,ob as b,pb as ie,qb as p,ra as Z,sa as W,t as G,tc as le,u as x,vb as y,wb as oe,xb as E,xc as de,yb as w,zb as n,zc as A}from"./chunk-D4MAV7ZB.js";function it(o,e){if(o&1&&(n(0,"mat-grid-tile",4)(1,"mat-card",5)(2,"mat-card-header")(3,"mat-card-title"),m(4),n(5,"button",6)(6,"mat-icon"),m(7,"more_vert"),s()(),n(8,"mat-menu",7,0)(10,"button",8),m(11,"Expand"),s(),n(12,"button",8),m(13,"Remove"),s()()()(),n(14,"mat-card-content",9)(15,"div"),m(16,"Card Content Here"),s()()()()),o&2){let r=e.$implicit,t=I(9);p("colspan",r.cols)("rowspan",r.rows),l(4),se(" ",r.title," "),l(),p("matMenuTriggerFor",t)}}var Ue=(()=>{let e=class e{constructor(){this.breakpointObserver=C(T),this.cards=this.breakpointObserver.observe(D.Handset).pipe(x(({matches:t})=>t?[{title:"Card 1",cols:1,rows:1},{title:"Card 2",cols:1,rows:1},{title:"Card 3",cols:1,rows:1},{title:"Card 4",cols:1,rows:1}]:[{title:"Card 1",cols:2,rows:1},{title:"Card 2",cols:1,rows:1},{title:"Card 3",cols:1,rows:2},{title:"Card 4",cols:1,rows:1}]))}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["app-dashboard"]],standalone:!0,features:[h],decls:8,vars:2,consts:[["menu","matMenu"],[1,"grid-container"],[1,"mat-h1"],["cols","2","rowHeight","350px"],[3,"colspan","rowspan"],[1,"dashboard-card"],["mat-icon-button","","aria-label","Toggle menu",1,"more-button",3,"matMenuTriggerFor"],["xPosition","before"],["mat-menu-item",""],[1,"dashboard-card-content"]],template:function(i,a){i&1&&(n(0,"mat-card")(1,"div",1)(2,"h1",2),m(3,"Dashboard"),s(),n(4,"mat-grid-list",3),E(5,it,17,4,"mat-grid-tile",4,oe),g(7,"async"),s()()()),i&2&&(l(5),w(v(7,0,a.cards)))},dependencies:[A,f,N,H,O,R,B,k,Ne,Pe,ke,Oe,Re],styles:[".grid-container[_ngcontent-%COMP%]{margin:20px}.dashboard-card[_ngcontent-%COMP%]{position:absolute;inset:15px}.more-button[_ngcontent-%COMP%]{position:absolute;top:5px;right:10px}.dashboard-card-content[_ngcontent-%COMP%]{text-align:center}"]});let o=e;return o})();function ot(o,e){o&1&&(n(0,"div")(1,"mat-form-field",10)(2,"mat-label"),m(3,"Id"),s(),u(4,"input",11),s()())}function rt(o,e){o&1&&(n(0,"mat-error"),m(1,"Nome \xE9 "),n(2,"strong"),m(3,"requerido"),s()())}function nt(o,e){o&1&&(n(0,"mat-error"),m(1,"Nome deve ter no m\xEDnimo 3 caracteres"),s())}function at(o,e){o&1&&(n(0,"mat-error"),m(1,"Descri\xE7\xE3o \xE9 "),n(2,"strong"),m(3,"requerida"),s()())}var V=(()=>{let e=class e{constructor(t,i,a,d){this.categoriaService=t,this.form=i,this.router=a,this.routeActive=d,this.showLoading=!1,this.categoriaForm=this.form.group({id:[null],nome:["",[P.required,P.minLength(3)]],descricao:["",[P.required]]})}ngOnInit(){this.routeActive!==void 0&&this.routeActive!==null&&this.routeActive.snapshot!==void 0&&this.routeActive.snapshot!==null&&this.routeActive.snapshot.paramMap!==void 0&&this.routeActive.snapshot.paramMap!==null&&this.routeActive.snapshot.paramMap.get("id")!==void 0&&this.routeActive.snapshot.paramMap.get("id")!==null&&this.categoriaService.pegar(Number(this.routeActive.snapshot.paramMap.get("id"))).subscribe(t=>{if(t!=null){let i=t;this.categoriaForm.setValue({id:i.id,nome:i.nome,descricao:i.descricao}),this.categoriaForm.get("id")?.disable()}})}onSubmit(){console.log("Submit",this.categoriaForm.value),this.onSave(this.convertFormBuilderGroupToCategoria())}convertFormBuilderGroupToCategoria(){this.categoriaForm.get("id")?.enable();let t=this.categoriaForm.value;return this.categoriaForm.get("id")?.disable(),{id:t.id??0,nome:t.nome||"",descricao:t.descricao||""}}onSave(t){return j(this,null,function*(){this.showLoading=!0;let i=yield G(this.categoriaService.salvar(t));console.log("Categoria salva: ",i),this.showLoading=!1,this.router.navigate(["/categorias"])})}cancelar(){this.router.navigate(["/categorias"])}};e.\u0275fac=function(i){return new(i||e)(M(qe),M(xe),M(ve),M(fe))},e.\u0275cmp=c({type:e,selectors:[["app-cad-categoria"]],standalone:!0,features:[h],decls:25,vars:7,consts:[["novalidate","",3,"ngSubmit","formGroup"],[4,"ngIf"],[1,"container"],[1,"item-30"],["matInput","","formControlName","nome"],[1,"item-70"],["matInput","","formControlName","descricao"],["mat-raised-button","","color","primary","type","submit",2,"margin-right","8px !important","margin-bottom","16px !important",3,"disabled"],["type","button","mat-raised-button","","color","primary",2,"margin-bottom","16px !important",3,"click"],[3,"visible"],[1,"item-20"],["matInput","","formControlName","id"]],template:function(i,a){if(i&1&&(n(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),m(3,"Categoria"),s()(),n(4,"mat-card-content")(5,"form",0),S("ngSubmit",function(){return a.onSubmit()}),n(6,"div"),b(7,ot,5,0,"div",1),n(8,"div",2)(9,"mat-form-field",3)(10,"mat-label"),m(11,"Nome"),s(),u(12,"input",4),b(13,rt,4,0,"mat-error")(14,nt,2,0,"mat-error"),s(),n(15,"mat-form-field",5)(16,"mat-label"),m(17,"Descri\xE7\xE3o"),s(),u(18,"input",6),b(19,at,4,0,"mat-error"),s()()(),n(20,"button",7),m(21," Salvar "),s(),n(22,"button",8),S("click",function(){return a.cancelar()}),m(23," Cancelar "),s()()(),u(24,"app-loading-bar",9),s()),i&2){let d;l(5),p("formGroup",a.categoriaForm),l(2),p("ngIf",((d=a.categoriaForm.get("id"))==null?null:d.value)!==null),l(6),y(a.categoriaForm.controls.nome.hasError("required")?13:-1),l(),y(a.categoriaForm.controls.nome.hasError("minlength")?14:-1),l(5),y(a.categoriaForm.controls.descricao.hasError("required")?19:-1),l(),p("disabled",!a.categoriaForm.valid),l(4),p("visible",a.showLoading)}},dependencies:[Ee,Se,be,ye,Me,_e,Fe,f,we,De,Te,Ie,Ae,O,R,B,k,de,$e],styles:[".mat-mdc-card-title[_ngcontent-%COMP%]{margin-bottom:10px!important}"]});let o=e;return o})();var Ze=[{path:"categorias",loadComponent:()=>import("./chunk-W3IZ7JHK.js").then(o=>o.CategoriasComponent)},{path:"cad-categoria",component:V},{path:"cad-categoria-edit/:id",component:V},{path:"fornecedores",loadComponent:()=>import("./chunk-5WGV7OHG.js").then(o=>o.FornecedoresComponent)},{path:"cad-fornecedor",loadComponent:()=>import("./chunk-BAI2U2M4.js").then(o=>o.CadFornecedorComponent)},{path:"cad-fornecedor-edit/:id",loadComponent:()=>import("./chunk-BAI2U2M4.js").then(o=>o.CadFornecedorComponent)},{path:"",component:Ue}];var st="@",mt=(()=>{let e=class e{constructor(t,i,a,d,F){this.doc=t,this.delegate=i,this.zone=a,this.animationType=d,this.moduleImpl=F,this._rendererFactoryPromise=null,this.scheduler=C(K,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-B26DUXRQ.js").then(i=>i)).catch(i=>{throw new q(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:a})=>{this._engine=i(this.animationType,this.doc);let d=new a(this.delegate,this._engine,this.zone);return this.delegate=d,d})}createRenderer(t,i){let a=this.delegate.createRenderer(t,i);if(a.\u0275type===0)return a;typeof a.throwOnSyntheticProps=="boolean"&&(a.throwOnSyntheticProps=!1);let d=new L(a);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(F=>{let Qe=F.createRenderer(t,i);d.use(Qe),this.scheduler?.notify(9)}).catch(F=>{d.use(a)}),d}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(i){J()},e.\u0275prov=z({token:e,factory:e.\u0275fac});let o=e;return o})(),L=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let r of this.replay)r(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,r){return this.delegate.createElement(e,r)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,r){this.delegate.appendChild(e,r)}insertBefore(e,r,t,i){this.delegate.insertBefore(e,r,t,i)}removeChild(e,r,t){this.delegate.removeChild(e,r,t)}selectRootElement(e,r){return this.delegate.selectRootElement(e,r)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,r,t,i){this.delegate.setAttribute(e,r,t,i)}removeAttribute(e,r,t){this.delegate.removeAttribute(e,r,t)}addClass(e,r){this.delegate.addClass(e,r)}removeClass(e,r){this.delegate.removeClass(e,r)}setStyle(e,r,t,i){this.delegate.setStyle(e,r,t,i)}removeStyle(e,r,t){this.delegate.removeStyle(e,r,t)}setProperty(e,r,t){this.shouldReplay(r)&&this.replay.push(i=>i.setProperty(e,r,t)),this.delegate.setProperty(e,r,t)}setValue(e,r){this.delegate.setValue(e,r)}listen(e,r,t){return this.shouldReplay(r)&&this.replay.push(i=>i.listen(e,r,t)),this.delegate.listen(e,r,t)}shouldReplay(e){return this.replay!==null&&e.startsWith(st)}};function We(o="animations"){return ee("NgAsyncAnimations"),U([{provide:Q,useFactory:(e,r,t)=>new mt(e,r,t,o),deps:[le,ue,te]},{provide:X,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Xe={providers:[me({eventCoalescing:!0}),Ce(Ze),We(),ce()]};var dt=(o,e)=>e.path;function pt(o,e){if(o&1&&(n(0,"a",0),m(1),s()),o&2){let r=e.$implicit;p("href",r.path,Y),l(),ae(r.label)}}var Ye=(()=>{let e=class e{constructor(){this.menuItems=[{path:"",label:"In\xEDcio"},{path:"categorias",label:"Categorias"},{path:"fornecedores",label:"Fornecedores"}]}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["app-menu"]],standalone:!0,features:[h],decls:2,vars:0,consts:[["mat-list-item","",3,"href"]],template:function(i,a){i&1&&E(0,pt,2,2,"a",0,dt),i&2&&w(a.menuItems)},dependencies:[f,je]});let o=e;return o})();function ct(o,e){if(o&1){let r=re();n(0,"button",6),S("click",function(){Z(r),ne();let i=I(2);return W(i.toggle())}),n(1,"mat-icon",7),m(2,"menu"),s()()}}var Je=(()=>{let e=class e{constructor(){this.breakpointObserver=C(T),this.isHandset$=this.breakpointObserver.observe(D.Handset).pipe(x(t=>t.matches),$())}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["app-home"]],standalone:!0,features:[h],decls:18,vars:12,consts:[["drawer",""],[1,"sidenav-container"],["fixedInViewport","",1,"sidenav",3,"mode","opened"],["color","primary",2,"position","relative !important"],["type","button","aria-label","Toggle sidenav","mat-icon-button",""],[1,"m-10"],["type","button","aria-label","Toggle sidenav","mat-icon-button","",3,"click"],["aria-label","Side nav toggle icon"]],template:function(i,a){i&1&&(n(0,"mat-sidenav-container",1)(1,"mat-sidenav",2,0),g(3,"async"),g(4,"async"),g(5,"async"),n(6,"mat-toolbar"),m(7,"Menu"),s(),n(8,"mat-nav-list"),u(9,"app-menu"),s()(),n(10,"mat-sidenav-content")(11,"mat-toolbar",3),b(12,ct,3,0,"button",4),g(13,"async"),n(14,"span"),m(15,"Simulador Vendas App"),s()(),n(16,"div",5),u(17,"router-outlet"),s()()()),i&2&&(l(),p("mode",v(3,4,a.isHandset$)?"over":"side")("opened",v(4,6,a.isHandset$)===!1),ie("role",v(5,8,a.isHandset$)?"dialog":"navigation"),l(11),y(v(13,10,a.isHandset$)?12:-1))},dependencies:[f,N,H,Be,Ve,Le,He,Ge,A,Ye,ge],styles:[".sidenav-container[_ngcontent-%COMP%]{height:100%}.sidenav[_ngcontent-%COMP%]{width:200px}.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]{background:inherit}.mat-toolbar.mat-primary[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1}"]});let o=e;return o})();var Ke=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["app-root"]],standalone:!0,features:[h],decls:1,vars:0,template:function(i,a){i&1&&u(0,"app-home")},dependencies:[pe,f,Je]});let o=e;return o})();he(Ke,Xe).catch(o=>console.error(o));