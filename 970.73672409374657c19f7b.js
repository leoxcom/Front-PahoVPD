"use strict";(self.webpackChunkimpodatos_front=self.webpackChunkimpodatos_front||[]).push([[970],{970:(it,C,i)=>{i.r(C),i.d(C,{DashboardModule:()=>rt});var m=i(8583),p=i(4655),t=i(7716),d=i(8958),T=i(2522),v=i(1095),y=i(6627);let b=(()=>{class o{constructor(e){this._loginService=e}ngOnInit(){}logout(){this._loginService.logout()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(d.r))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-navbar"]],decls:12,vars:0,consts:[["color","primary"],[1,"menu-spacer"],["mat-button","","routerLink","/dashboard"],["mat-button","","routerLink","/dashboard/history"],["mat-icon-button","","aria-label","Example icon-button with share icon",1,"example-icon",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"mat-toolbar",0),t.TgZ(1,"span"),t._uU(2,"App Impodatos"),t.qZA(),t._UZ(3,"span",1),t.TgZ(4,"button",2),t._uU(5,"Subir Archivo"),t.qZA(),t.TgZ(6,"button",3),t._uU(7,"Historial"),t.qZA(),t._UZ(8,"span",1),t.TgZ(9,"button",4),t.NdJ("click",function(){return a.logout()}),t.TgZ(10,"mat-icon"),t._uU(11,"logout"),t.qZA(),t.qZA(),t.qZA())},directives:[T.Ye,v.lW,p.rH,y.Hw],styles:[".menu-spacer[_ngcontent-%COMP%]{flex:1 1 auto}"]}),o})(),N=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-dashboard"]],decls:2,vars:0,template:function(e,a){1&e&&(t._UZ(0,"app-navbar"),t._UZ(1,"router-outlet"))},directives:[b,p.lC],styles:[""]}),o})();var A=i(9692),h=i(1494),s=i(2789),Z=i(4073),q=i(1841);let x=(()=>{class o{constructor(e,a){this._http=e,this._loginService=a}getSelectProgram(){let e=this._loginService.getToken();return this._http.get(Z.e.ENDPOINTBACK+"DhisIntegration/getAllProgram/"+e)}uploadFile(e){return this._http.post(Z.e.ENDPOINTBACK+"history",e)}getHistoryUser(e){return this._http.get(Z.e.ENDPOINTBACK+"history/user?user="+e)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(q.eN),t.LFG(d.r))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var u=i(8295),S=i(9983),D=i(1436);function H(o,n){1&o&&(t.TgZ(0,"th",19),t._uU(1," Id Registro "),t.qZA())}function F(o,n){if(1&o&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.hij(" ",e.id," ")}}function P(o,n){1&o&&(t.TgZ(0,"th",21),t._uU(1," Programa Id "),t.qZA())}function Y(o,n){if(1&o&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.hij(" ",e.programsid," ")}}function M(o,n){1&o&&(t.TgZ(0,"th",21),t._uU(1," Usuario "),t.qZA())}function I(o,n){if(1&o&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.hij(" ",e.userLogin," ")}}function O(o,n){1&o&&(t.TgZ(0,"th",19),t._uU(1," Fecha "),t.qZA())}function J(o,n){if(1&o&&(t.TgZ(0,"td",20),t._uU(1),t.ALo(2,"date"),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,e.fecha,"dd-MM-yyyy HH:mm:ss")," ")}}function w(o,n){1&o&&(t.TgZ(0,"th",21),t._uU(1," Estado "),t.qZA())}function Q(o,n){if(1&o&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.hij(" ",e.state," ")}}function B(o,n){1&o&&(t.TgZ(0,"th",21),t._uU(1," Descargar "),t.qZA())}function k(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"td",22),t.TgZ(1,"a",23),t.TgZ(2,"mat-icon",24,25),t.NdJ("click",function(){const l=t.CHM(e).index;return t.oxw().descargar(l)}),t._uU(4,"download"),t.qZA(),t.qZA(),t.qZA()}}function E(o,n){1&o&&t._UZ(0,"tr",26)}function j(o,n){1&o&&t._UZ(0,"tr",27)}const R=function(){return[5,10,25,100]};let $=(()=>{class o{constructor(e,a){this._uploaderService=e,this._login=a,this.displayedColumns=["idRegistro","programId","usuario","estado","fecha","acciones"],this.dataSource=new s.by(this.historyData)}ngOnInit(){const e=this._login.getToken();this.getHistory(e)}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}getHistory(e){this._uploaderService.getHistoryUser(e).subscribe(a=>{this.historyData=a,this.dataSource=new s.by(a),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort})}applyFilter(e){this.dataSource.filter=e.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}descargar(e){console.log("sedescargo "+this.historyData[e].file),this.downloadFile(this.historyData[e].file,this.historyData[e].programsid)}downloadFile(e,a){const r=`data:application/octet-stream;base64,${e}`,l=document.createElement("a");l.href=r,l.download=`${a}.csv`,l.click()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(x),t.Y36(d.r))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-history"]],viewQuery:function(e,a){if(1&e&&(t.Gf(A.NW,5),t.Gf(h.YE,5)),2&e){let r;t.iGM(r=t.CRH())&&(a.paginator=r.first),t.iGM(r=t.CRH())&&(a.sort=r.first)}},decls:32,vars:5,consts:[[1,"container"],["appearance","standard"],["matInput","","placeholder","Ex. ium","autocomplete","off",3,"keyup"],["input",""],[1,"mat-elevation-z8"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","idRegistro"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","programId"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","usuario"],["matColumnDef","fecha"],["matColumnDef","estado"],["matColumnDef","acciones"],["mat-cell","","style"," text-align:center",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["aria-label","Select page of users",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],["mat-cell","",2,"text-align","center"],[1,"pointer"],["matTooltip","Descargar Archivo",3,"click"],["tooltip","matTooltip"],["mat-header-row",""],["mat-row",""]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"mat-toolbar"),t.TgZ(2,"span"),t._uU(3,"Historial"),t.qZA(),t.qZA(),t.TgZ(4,"mat-form-field",1),t.TgZ(5,"mat-label"),t._uU(6,"Filter"),t.qZA(),t.TgZ(7,"input",2,3),t.NdJ("keyup",function(l){return a.applyFilter(l)}),t.qZA(),t.qZA(),t.TgZ(9,"div",4),t.TgZ(10,"table",5),t.ynx(11,6),t.YNc(12,H,2,0,"th",7),t.YNc(13,F,2,1,"td",8),t.BQk(),t.ynx(14,9),t.YNc(15,P,2,0,"th",10),t.YNc(16,Y,2,1,"td",8),t.BQk(),t.ynx(17,11),t.YNc(18,M,2,0,"th",10),t.YNc(19,I,2,1,"td",8),t.BQk(),t.ynx(20,12),t.YNc(21,O,2,0,"th",7),t.YNc(22,J,3,4,"td",8),t.BQk(),t.ynx(23,13),t.YNc(24,w,2,0,"th",10),t.YNc(25,Q,2,1,"td",8),t.BQk(),t.ynx(26,14),t.YNc(27,B,2,0,"th",10),t.YNc(28,k,5,0,"td",15),t.BQk(),t.YNc(29,E,1,0,"tr",16),t.YNc(30,j,1,0,"tr",17),t.qZA(),t._UZ(31,"mat-paginator",18),t.qZA(),t.qZA()),2&e&&(t.xp6(10),t.Q6J("dataSource",a.dataSource),t.xp6(19),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(4,R)))},directives:[T.Ye,u.KE,u.hX,S.Nt,s.BZ,h.YE,s.w1,s.fO,s.Dz,s.as,s.nj,A.NW,s.ge,h.nU,s.ev,y.Hw,D.gM,s.XQ,s.Gk],pipes:[m.uU],styles:["table[_ngcontent-%COMP%]{width:100%}th[_ngcontent-%COMP%]{width:20%}.container[_ngcontent-%COMP%]{margin:3%}.mat-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}.pointer[_ngcontent-%COMP%]{cursor:pointer}"]}),o})();var c=i(3679),z=i(8259),_=i.n(z),G=i(4885),g=i(7832),L=i(7441),X=i(2458);function V(o,n){1&o&&t._UZ(0,"mat-spinner",4)}function K(o,n){if(1&o&&(t.TgZ(0,"mat-option",20),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.Q6J("value",e.programid),t.xp6(1),t.hij(" ",e.programname," ")}}function W(o,n){if(1&o&&(t.TgZ(0,"mat-option",20),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.id," ")}}function tt(o,n){if(1&o&&(t.TgZ(0,"mat-option",20),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.id," ")}}function et(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"form",5),t.TgZ(1,"mat-horizontal-stepper"),t.TgZ(2,"mat-step",6),t.TgZ(3,"mat-form-field",7),t.TgZ(4,"mat-label"),t._uU(5,"Seleccione un programa"),t.qZA(),t.TgZ(6,"mat-select",8),t.YNc(7,K,2,2,"mat-option",9),t.qZA(),t.qZA(),t.TgZ(8,"div"),t.TgZ(9,"button",10),t._uU(10,"Next"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"mat-step",11),t.TgZ(12,"div"),t.TgZ(13,"mat-label"),t._uU(14,"Cargar CSV(Clinical and Vaccination / Investigation / Clasification)"),t.qZA(),t.qZA(),t.TgZ(15,"div"),t.TgZ(16,"input",12,13),t.NdJ("change",function(r){return t.CHM(e),t.oxw().onFileSelected(r)}),t.qZA(),t.qZA(),t.TgZ(18,"div"),t.TgZ(19,"button",14),t._uU(20,"Back"),t.qZA(),t.TgZ(21,"button",10),t._uU(22,"Next"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(23,"mat-step",15),t.TgZ(24,"div"),t.TgZ(25,"mat-form-field",7),t.TgZ(26,"mat-label"),t._uU(27,"Periodo Inicial"),t.qZA(),t.TgZ(28,"mat-select",16),t.NdJ("selectionChange",function(r){return t.CHM(e),t.oxw().selectdate(r.value)}),t.YNc(29,W,2,2,"mat-option",9),t.qZA(),t.qZA(),t.qZA(),t.TgZ(30,"div"),t.TgZ(31,"mat-form-field",7),t.TgZ(32,"mat-label"),t._uU(33,"Periodo Final"),t.qZA(),t.TgZ(34,"mat-select",17),t.NdJ("selectionChange",function(r){return t.CHM(e),t.oxw().selectdate(r.value)}),t.YNc(35,tt,2,2,"mat-option",9),t.qZA(),t.qZA(),t.qZA(),t.TgZ(36,"div"),t.TgZ(37,"button",14),t._uU(38,"Back"),t.qZA(),t.TgZ(39,"button",10),t._uU(40,"Next"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(41,"mat-step",18),t.TgZ(42,"button",19),t.NdJ("click",function(){return t.CHM(e),t.oxw().onUpload()}),t._uU(43,"Procesar"),t.qZA(),t.TgZ(44,"div"),t.TgZ(45,"button",14),t._uU(46,"Back"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("formGroup",e.form),t.xp6(7),t.Q6J("ngForOf",e.selectProgramsOptions),t.xp6(22),t.Q6J("ngForOf",e.selectPeriod),t.xp6(6),t.Q6J("ngForOf",e.selectPeriod),t.xp6(7),t.Q6J("disabled",e.form.invalid)}}let U=(()=>{class o{constructor(e,a,r){this._uploaderService=e,this.fb=a,this._login=r,this.loading=!1,this.form=this.fb.group({program:["",c.kI.required],attachment:["",c.kI.required],startdate:["",c.kI.required],enddate:["",c.kI.required]})}ngOnInit(){this.loadSelectPrograms(),this.loadSelectPeriod()}loadSelectPeriod(){const e=(new Date).getFullYear(),a=e-9,r=[];for(let l=e;l>=a;l--)r.push({id:l});this.selectPeriod=r}selectdate(e){console.log(e)}loadSelectPrograms(){this._uploaderService.getSelectProgram().subscribe(e=>{let{programs:a}=e;this.selectProgramsOptions=a})}onUpload(){this.loading=!0;const e=this.uploadFile[0];let a=new FormData;a.append("Programsid",this.form.value.program),a.append("CsvFile",e,e.name),a.append("UserLogin",this._login.getUsuario()),a.append("startdate",this.form.value.startdate),a.append("enddate",this.form.value.enddate),a.append("token",this._login.getToken()),this._uploaderService.uploadFile(a).subscribe(r=>{let l="";if(!r)return l="El archivo se proceso Exitosamente",this.loading=!1,_().fire(l);for(let f in r)l=l+r[f].errorMessage+"\n ";return this.loading=!1,_().fire("No se pudo procesar el archivo  por los siguientes motivos: \n"+l)},r=>(this.loading=!1,_().fire("Ocurrio un error Intente de nuevo")))}onFileSelected(e){"file"==e.target.id&&(this.uploadFile=e.target.files),"file01"==e.target.id&&(this.uploadFile01=e.target.files)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(x),t.Y36(c.qu),t.Y36(d.r))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-uploader"]],decls:4,vars:2,consts:[[1,"body"],[1,"card"],["class","spinner","diameter","50",4,"ngIf"],[3,"formGroup",4,"ngIf"],["diameter","50",1,"spinner"],[3,"formGroup"],["label","Seleccione un programa"],["appearance","fill"],["formControlName","program"],[3,"value",4,"ngFor","ngForOf"],["mat-button","","matStepperNext",""],["label","Cargar CSV"],["requiredFiel","","formControlName","attachment","type","file","id","file",1,"btn",3,"change"],["fileInput",""],["mat-button","","matStepperPrevious",""],["label","Periodo"],["formControlName","startdate",3,"selectionChange"],["formControlName","enddate",3,"selectionChange"],["label","Cargar"],["mat-raised-button","","color","primary","type","submit",1,"loginElement","button",3,"disabled","click"],[3,"value"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.YNc(2,V,1,0,"mat-spinner",2),t.YNc(3,et,47,5,"form",3),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngIf",a.loading),t.xp6(1),t.Q6J("ngIf",!a.loading))},directives:[m.O5,G.$g,c._Y,c.JL,c.sg,g.Vq,g.C0,u.KE,u.hX,L.gD,c.JJ,c.u,m.sg,v.lW,g.Ic,c.Fj,g.fd,X.ey],styles:[".option-card[_ngcontent-%COMP%]{max-width:100%}.body[_ngcontent-%COMP%]{display:flex;justify-content:left;height:100%;align-items:top;background-color:#f5f5f5;padding:2% 4%}.card[_ngcontent-%COMP%]{width:100%;text-align:left}.input_examinar[_ngcontent-%COMP%]{width:300%}.spinner[_ngcontent-%COMP%]{margin:0 auto}"]}),o})();const ot=[{path:"",component:N,children:[{path:"",component:U},{path:"upload",component:U},{path:"history",component:$}]}];let nt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[p.Bz.forChild(ot)],p.Bz]}),o})();var at=i(7841);let rt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[m.ez,nt,at.m]]}),o})()}}]);