"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5075],{5075:(k,d,a)=>{a.r(d),a.d(d,{HomePageModule:()=>b});var c=a(177),r=a(1075),m=a(4341),u=a(9858),p=a(467),g=a(7310),e=a(4438),f=a(355);function h(t,s){1&t&&e.nrm(0,"ion-icon",17)}function v(t,s){if(1&t){const o=e.RV6();e.j41(0,"div",9)(1,"div",10)(2,"div",11)(3,"h2"),e.EFF(4),e.k0s(),e.j41(5,"h2"),e.EFF(6),e.k0s(),e.j41(7,"h2"),e.EFF(8),e.k0s(),e.j41(9,"h2"),e.EFF(10),e.k0s(),e.j41(11,"h2"),e.EFF(12),e.k0s(),e.j41(13,"h2"),e.EFF(14),e.k0s()(),e.j41(15,"div",12)(16,"ion-button",13),e.bIt("click",function(){const i=e.eBV(o).$implicit,l=e.XpG();return e.Njj(l.update(i))}),e.nrm(17,"ion-icon",14),e.k0s(),e.j41(18,"ion-button",15),e.bIt("click",function(){const i=e.eBV(o).$implicit,l=e.XpG();return e.Njj(l.delete(i))}),e.DNE(19,h,1,0,"ion-icon",16),e.k0s()()()()}if(2&t){const o=s.$implicit;e.R7$(4),e.SpI("Title: ",o.title," "),e.R7$(2),e.SpI("Artist: ",o.artist," "),e.R7$(2),e.SpI("Genre: ",o.genres," "),e.R7$(2),e.SpI("Released Date: ",o.releaseDate," "),e.R7$(2),e.SpI("Explicit: ",o.isExplicit," "),e.R7$(2),e.SpI("Stream Count: ",o.streams," "),e.R7$(5),e.Y8G("ngIf",o.id)}}const y=[{path:"",component:(()=>{var t;class s{constructor(n,i){this.auth=n,this.router=i,this.userList=[],this.users=new g.K}ionViewWillEnter(){this.user()}logOut(){this.router.navigate(["login"]),this.auth.setAuthentication(!1)}update(n){this.router.navigate(["update",n.id]),this.auth.newUserList=this.userList,this.auth.edit(n),console.log(this.userList)}addUser(){this.router.navigate(["create"])}user(){var n=this;return(0,p.A)(function*(){n.auth.isLoading=!0,n.userList=yield n.auth.getUsers(),n.auth.newUserList=n.userList,n.auth.isLoading=!1})()}delete(n){var i=this;return(0,p.A)(function*(){confirm("Are you sure you want to delete this song?")&&(i.auth.isLoading=!0,yield i.auth.deleteUser(n),i.auth.presentAlert("Success","Song deleted successfully!"),i.user(),i.users=new g.K,i.auth.isLoading=!1)})()}}return(t=s).\u0275fac=function(n){return new(n||t)(e.rXU(f.k),e.rXU(u.Ix))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-home"]],decls:15,vars:2,consts:[[3,"fullscreen"],["collapse","condense"],["size","large"],["id","container"],["class","display",4,"ngFor","ngForOf"],[1,"button2"],[3,"click"],["name","person-add-sharp",1,"buttonz"],["name","log-out-sharp",1,"buttonz"],[1,"display"],[1,"display1"],[1,"list"],[1,"button1"],["color","success",3,"click"],["name","create-sharp"],["color","danger",3,"click"],["name","close-circle-sharp",4,"ngIf"],["name","close-circle-sharp"]],template:function(n,i){1&n&&(e.j41(0,"ion-content",0)(1,"ion-header",1)(2,"ion-toolbar")(3,"ion-title",2),e.EFF(4,"Dashboard"),e.k0s()()(),e.j41(5,"div",3)(6,"h1")(7,"strong"),e.EFF(8,"Spotify Top Songs"),e.k0s()(),e.DNE(9,v,20,7,"div",4),e.j41(10,"div",5)(11,"ion-button",6),e.bIt("click",function(){return i.addUser()}),e.nrm(12,"ion-icon",7),e.k0s(),e.j41(13,"ion-button",6),e.bIt("click",function(){return i.logOut()}),e.nrm(14,"ion-icon",8),e.k0s()()()()),2&n&&(e.Y8G("fullscreen",!0),e.R7$(9),e.Y8G("ngForOf",i.userList))},dependencies:[c.Sq,c.bT,r.Jm,r.W9,r.eU,r.iq,r.BC,r.ai],styles:["#container[_ngcontent-%COMP%]{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;background-image:url(https://4kwallpapers.com/images/wallpapers/ipados-stock-green-white-background-ipad-ios-13-hd-1920x1080-1549.jpg);background-size:cover;background-repeat:no-repeat;width:100vw;height:100vh;overflow:scroll;display:flex;flex-direction:column;align-items:center;justify-content:center}h1[_ngcontent-%COMP%]{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-size:80px;text-shadow:2px 2px 15px rgba(0,0,0,.2);text-align:center;color:#f0f0f0;position:relative;top:20px;left:23%;transform:translate(-50%);z-index:1}.display[_ngcontent-%COMP%]{margin-top:30px;width:50%}.display1[_ngcontent-%COMP%]{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;width:100%;display:flex;flex-direction:row;justify-content:space-between;position:relative;background-color:#00000080;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);border-radius:20px;padding:20px}.display1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;margin:0;color:#fff;font-size:1rem}.list[_ngcontent-%COMP%]{font-size:200x}.button[_ngcontent-%COMP%]{--ion-color-primary: #00d856}.buttonz[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;padding:0 20px}"]}),s})()}];let P=(()=>{var t;class s{}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[u.iI.forChild(y),u.iI]}),s})(),b=(()=>{var t;class s{}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[c.MD,m.YN,r.bv,P]}),s})()}}]);