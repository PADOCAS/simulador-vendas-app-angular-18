import{a as s,la as r}from"./chunk-FGHOTYI5.js";import{$ as e,ea as o}from"./chunk-G5TRCL24.js";var c=(()=>{class i{constructor(t){this.http=t}getProdutos(){return this.http.get(r.api+"produtos")}salvar(t){return t.id!==null&&t.id!==0?this.http.put(r.api+"produtos/"+t.id,t):this.http.post(r.api+"produtos",t)}pegar(t){return this.http.get(r.api+"produtos/"+t)}deletar(t){return this.http.delete(r.api+"produtos/"+t)}static{this.\u0275fac=function(p){return new(p||i)(o(s))}}static{this.\u0275prov=e({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();export{c as a};
