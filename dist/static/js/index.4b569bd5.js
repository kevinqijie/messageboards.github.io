(function(t){function e(e){for(var a,o,r=e[0],l=e[1],c=e[2],u=0,d=[];u<r.length;u++)o=r[u],i[o]&&d.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);m&&m(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,r=1;r<s.length;r++){var l=s[r];0!==i[l]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},i={index:0},n=[];function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var m=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0630":function(t,e,s){"use strict";var a=s("f2ba"),i=s.n(a);i.a},"2b70":function(t,e,s){"use strict";var a=s("aae3"),i=s.n(a);i.a},"3e30":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],o={},r=o,l=(s("5c0b"),s("2877")),c=Object(l["a"])(r,i,n,!1,null,null,null),m=c.exports,u=s("8c4f"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("nav",[s("span",{staticClass:"tip"},[t._v("欢迎您~")]),s("span",[t._v(t._s(t.from.Nickname))]),s("router-link",{staticClass:"btn",attrs:{to:"/mylist"}},[t._v("我的留言")]),s("div",{staticClass:"title"},[t._v("首页")])],1),s("div",{staticClass:"iptbox box"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.from.val.value,expression:"from.val.value"}],attrs:{placeholder:"留下你的足迹"},domProps:{value:t.from.val.value},on:{input:function(e){e.target.composing||t.$set(t.from.val,"value",e.target.value)}}}),s("div",{staticClass:"sbubtn",on:{click:t.pushdata}},[t._v("发表")])]),s("div",{staticClass:"list"},t._l(t.detailsdatas,function(e,a){return s("div",{key:a,staticClass:"box listbox"},[s("div",{staticClass:"user"},[t._v(t._s(e.Nickname)+":")]),s("div",{staticClass:"valbox",on:{click:function(s){return t.pushdetails(e.id)}}},[t._v(t._s(e.val.value))]),s("div",{staticClass:"btnbox"},[s("span",{staticClass:"btn comment",on:{click:function(s){return t.pushdetails(e.id)}}},[t._v("评论"+t._s(Object.keys(e.Point).length-1))]),s("span",{staticClass:"btn Fabulous",on:{click:t.postcomment}},[t._v("点赞"+t._s(Object.keys(e.comment).length-1))])])])}),0)])},v=[],p={name:"home",data:function(){return{detailsdatas:[],from:{Nickname:"",username:"",val:{value:""},Point:{0:{Nickname:"评论",point:""}},comment:{0:{Nickname:"点赞"}},date:""}}},components:{},methods:{postcomment:function(){var t=this;this.key?(this.axios.post("https://messageboards-5c29b.firebaseio.com/server/"+this.id.id+"/comment.json",this.comment).then(function(){t.getdetailslist()}).catch(function(t){console.log(t)}),this.key=!1):alert("你已经点过赞了")},pushdetails:function(t){this.$store.commit("receivedetails",t),this.$router.push({path:"/detailslist"})},getlist:function(){var t=this;this.detailsdatas=[],this.axios.get("https://messageboards-5c29b.firebaseio.com/server.json").then(function(e){for(var s in e.data)e.data[s].id=s,t.detailsdatas.push(e.data[s])})},pushdata:function(){var t=this;if(this.from.val.value){var e=new Date,s=e.getFullYear(),a=e.getMonth(),i=e.getDate();this.from.date=s+"年"+(a+1)+"月"+i+"日",this.axios.post("https://messageboards-5c29b.firebaseio.com/server.json",this.from).then(function(){alert("添加成功"),t.from.val.value="",t.getlist()}).catch(function(t){console.log(t)})}else alert("留言不能为空")}},created:function(){localStorage.getItem("username")?(this.from.Nickname=localStorage.getItem("Nickname"),this.from.username=localStorage.getItem("username"),this.getlist()):this.$router.push({path:"/login"})}},f=p,h=(s("9acb"),Object(l["a"])(f,d,v,!1,null,"56259939",null)),g=h.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("nav",[s("router-link",{staticClass:"btn",attrs:{to:"/"}},[t._v("返回")]),s("div",{staticClass:"title"},[t._v("我的留言")])],1),t._l(t.msgs,function(e){return s("div",{staticClass:"list"},[s("div",{staticClass:"box listbox"},[s("div",{staticClass:"user"},[t._v(t._s(e.Nickname)+":")]),s("div",{staticClass:"valbox",on:{click:function(s){return t.pushmodify(e.id)}}},[t._v(t._s(e.val.value))]),s("div",{staticClass:"btnbox"},[s("span",{staticClass:"btn comment",attrs:{to:"/modifylist"},on:{click:function(s){return t.pushmodify(e.id)}}},[t._v("修改")]),s("span",{staticClass:"btn Fabulous",on:{click:function(s){return t.delmylist(e.id)}}},[t._v("删除")])])])])})],2)},_=[],y={name:"home",data:function(){return{Nickname:"",msgs:[]}},components:{},methods:{delmylist:function(t){var e=this;this.axios.delete("https://messageboards-5c29b.firebaseio.com/server/"+t+".json").then(function(){alert("删除成功"),e.getmylist()})},pushmodify:function(t){this.$store.commit("receivemodify",t),this.$router.push({path:"/modifylist"})},getmylist:function(){var t=this;this.msgs=[],this.axios.get("https://messageboards-5c29b.firebaseio.com/server.json").then(function(e){for(var s in e.data)e.data[s].id=s,e.data[s].Nickname==t.Nickname&&t.msgs.push(e.data[s])})}},created:function(){this.Nickname=localStorage.getItem("Nickname"),this.getmylist()}},C=y,x=(s("da10"),Object(l["a"])(C,b,_,!1,null,"52ac300f",null)),k=x.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("nav",[s("router-link",{staticClass:"btn",attrs:{to:"/mylist"}},[t._v("返回")]),s("div",{staticClass:"title"},[t._v("修改留言")])],1),s("div",{staticClass:"list"},[s("div",{staticClass:"box listbox"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.val.value,expression:"val.value"}],staticClass:"valbox",attrs:{placeholder:t.msgs.val.value},domProps:{value:t.val.value},on:{input:function(e){e.target.composing||t.$set(t.val,"value",e.target.value)}}}),s("div",{staticClass:"btnbox"},[s("span",{staticClass:"btn comment",on:{click:t.postmodifylist}},[t._v("确认修改")]),s("router-link",{staticClass:"btn Fabulous",attrs:{to:"/mylist"}},[t._v("取消")])],1)])])])},w=[],j={name:"home",data:function(){return{id:"",msgs:"",val:{value:""}}},components:{},created:function(){this.id=this.$store.state,this.getmodifylist()},methods:{getmodifylist:function(){var t=this;this.axios.get("https://messageboards-5c29b.firebaseio.com/server/"+this.id.modifyid+".json").then(function(e){t.msgs=e.data})},postmodifylist:function(){var t=this;this.axios.patch("https://messageboards-5c29b.firebaseio.com/server/"+this.id.modifyid+"/val.json",this.val).then(function(){alert("修改成功"),t.val.value="",t.getmodifylist()})}}},$=j,P=(s("9b2d"),Object(l["a"])($,N,w,!1,null,"4b7eb898",null)),O=P.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("nav",[s("router-link",{staticClass:"btn",attrs:{to:"/"}},[t._v("返回")]),s("div",{staticClass:"title"},[t._v("详细信息")])],1),s("div",{staticClass:"box"},[s("div",{staticClass:"usertitle"},[t._v(t._s(t.msgs.Nickname)+":")]),s("div",{staticClass:"listbox"},[s("div",{staticClass:"list"},[s("div",{staticClass:"val"},[t._v(t._s(t.msgs.val.value))]),s("div",{staticClass:"date"},[t._v(t._s(t.msgs.date))])]),s("div",{staticClass:"btnbox"},[s("span",{staticClass:"btn listbtn"},[t._v("评论("+t._s(Object.keys(t.msgs.Point).length-1)+")")]),s("span",{staticClass:"btn listbtn",on:{click:t.postcomment}},[t._v("点赞("+t._s(Object.keys(t.msgs.comment).length-1)+")")])])]),s("div",{staticClass:"plistbox"},t._l(t.msgs.Point,function(e,a){return s("div",{key:a,staticClass:"plist"},[s("span",{staticClass:"username"},[t._v(t._s(e.Nickname)+"：")]),s("span",{staticClass:"pval"},[t._v(t._s(e.point))])])}),0),s("div",{staticClass:"iptbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.point.point,expression:"point.point"}],attrs:{type:"text"},domProps:{value:t.point.point},on:{input:function(e){e.target.composing||t.$set(t.point,"point",e.target.value)}}}),s("span",{staticClass:"sbtn",on:{click:t.postpoint}},[t._v("发表")])])])])},T=[],S={data:function(){return{msgs:"",id:"",point:{Nickname:"",point:""},comment:{Nickname:""},key:!0}},name:"home",components:{},methods:{getdetailslist:function(){var t=this;this.axios.get("https://messageboards-5c29b.firebaseio.com/server/"+this.id.id+".json").then(function(e){t.msgs=e.data})},postpoint:function(){var t=this;this.axios.post("https://messageboards-5c29b.firebaseio.com/server/"+this.id.id+"/Point.json",this.point).then(function(){alert("评论成功"),t.point.point="",t.getdetailslist()})},postcomment:function(){var t=this;this.key?(this.axios.post("https://messageboards-5c29b.firebaseio.com/server/"+this.id.id+"/comment.json",this.comment).then(function(){t.getdetailslist()}).catch(function(t){console.log(t)}),this.key=!1):alert("你已经点过赞了")}},created:function(){this.id=this.$store.state,this.point.Nickname=localStorage.getItem("Nickname"),this.comment.Nickname=localStorage.getItem("Nickname"),this.getdetailslist()}},B=S,I=(s("0630"),Object(l["a"])(B,E,T,!1,null,"c8440c34",null)),M=I.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[t._m(0),s("div",{staticClass:"box"},[s("h2",[t._v("用户登陆")]),s("div",{staticClass:"lab"},[s("label",[t._v("用户名：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.from.username,expression:"from.username"}],attrs:{type:"text"},domProps:{value:t.from.username},on:{input:function(e){e.target.composing||t.$set(t.from,"username",e.target.value)}}})]),s("div",{staticClass:"lab"},[s("label",[t._v("密码：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.from.password,expression:"from.password"}],attrs:{type:"Password"},domProps:{value:t.from.password},on:{input:function(e){e.target.composing||t.$set(t.from,"password",e.target.value)}}})]),s("div",{staticClass:"btnbox"},[s("p",[t._v("未有账号?请注册")]),s("button",{staticClass:"login",on:{click:t.login}},[t._v("登陆")]),s("button",{staticClass:"register",on:{click:t.toregister}},[t._v("注册")])])])])},D=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",[s("div",{staticClass:"title"},[t._v("登陆")])])}],J={name:"home",data:function(){return{from:{username:"",password:""},msg:""}},methods:{toregister:function(){this.$router.push({path:"/register"})},login:function(){var t=this;this.axios.get("https://messageboards-5c29b.firebaseio.com/registry.json").then(function(e){for(var s in e.data){if(e.data[s].username===t.from.username){e.data[s].password===t.from.password?(localStorage.setItem("username",e.data[s].username),localStorage.setItem("Nickname",e.data[s].Nickname),t.msg="登陆成功！",t.$router.push({path:"/"})):t.msg="密码错误！";break}t.msg="用户名错误！"}alert(t.msg)})}},components:{},created:function(){}},Y=J,q=(s("eba2"),Object(l["a"])(Y,F,D,!1,null,"46633128",null)),z=q.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[t._m(0),s("div",{staticClass:"box"},[s("h2",[t._v("用户注册")]),s("div",{staticClass:"lab"},[s("label",[t._v("用户名：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.from.username,expression:"from.username"}],attrs:{type:"text"},domProps:{value:t.from.username},on:{blur:t.Testingusername,input:function(e){e.target.composing||t.$set(t.from,"username",e.target.value)}}})]),s("div",{staticClass:"lab"},[s("label",[t._v("昵称：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.from.Nickname,expression:"from.Nickname"}],attrs:{type:"text"},domProps:{value:t.from.Nickname},on:{blur:t.TestingNickname,input:function(e){e.target.composing||t.$set(t.from,"Nickname",e.target.value)}}})]),s("div",{staticClass:"lab"},[s("label",[t._v("密码：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.from.password,expression:"from.password"}],attrs:{type:"Password"},domProps:{value:t.from.password},on:{blur:t.getpasswordleg,input:function(e){e.target.composing||t.$set(t.from,"password",e.target.value)}}})]),s("div",{staticClass:"lab pstip"},[s("label",{staticClass:"tip"},[t._v("密码强度：")]),s("span"),s("span"),s("span"),s("i",[t._v(t._s(this.tip))])]),s("div",{staticClass:"lab"},[s("label",[t._v("确认密码：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.testingp,expression:"testingp"}],attrs:{type:"Password"},domProps:{value:t.testingp},on:{blur:t.TestingPassword,input:function(e){e.target.composing||(t.testingp=e.target.value)}}})]),s("div",{staticClass:"lab"},[s("label",[t._v("邮箱：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.from.email,expression:"from.email"}],attrs:{type:"email"},domProps:{value:t.from.email},on:{input:function(e){e.target.composing||t.$set(t.from,"email",e.target.value)}}})]),s("div",{staticClass:"lab"},[s("label",[t._v("联系电话：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.from.tel,expression:"from.tel"}],attrs:{type:"text"},domProps:{value:t.from.tel},on:{input:function(e){e.target.composing||t.$set(t.from,"tel",e.target.value)}}})]),s("div",{staticClass:"btnbox"},[s("p",[t._v("已有账号请登录")]),s("button",{staticClass:"login",on:{click:t.tologin}},[t._v("登陆")]),s("button",{staticClass:"register",on:{click:t.register}},[t._v("注册")])])])])},G=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",[s("div",{staticClass:"title"},[t._v("注册")])])}],H=(s("3e8f"),{name:"home",data:function(){return{tip:"弱",from:{username:"",Nickname:"",password:"",email:"",tel:""},timer:!1,testingp:""}},methods:{tologin:function(){this.$router.push({path:"/login"})},Testingusername:function(){var t=this;this.axios.get("https://messageboards-5c29b.firebaseio.com/registry.json").then(function(e){for(var s in e.data)e.data[s].username==t.from.username&&(alert("用户名已存在"),t.from.username="")})},TestingNickname:function(){var t=this;this.axios.get("https://messageboards-5c29b.firebaseio.com/registry.json").then(function(e){for(var s in e.data)e.data[s].Nickname==t.from.Nickname&&(alert("昵称已存在"),t.from.Nickname="")})},TestingPassword:function(){this.testingp==this.from.password||alert("两次密码不一样")},getpasswordleg:function(){document.getElementsByClassName("pstip")[0];document.getElementsByTagName("span")[0].className="w",document.getElementsByTagName("span")[1].className="w",document.getElementsByTagName("span")[2].className="w",this.from.password.length<6?(this.tip="弱",document.getElementsByTagName("span")[0].className="red"):this.from.password.length>=6&&this.from.password.length<16?(this.tip="中",document.getElementsByTagName("span")[0].className="y",document.getElementsByTagName("span")[1].className="y"):(this.tip="强",document.getElementsByTagName("span")[0].className="gre",document.getElementsByTagName("span")[1].className="gre",document.getElementsByTagName("span")[2].className="gre")},register:function(){var t=this;for(var e in this.timer=!1,this.from)""===this.from[e]&&(this.timer=!0);this.timer?alert("以上信息均不能为空"):this.axios.post("https://messageboards-5c29b.firebaseio.com/registry.json",this.from).then(function(){alert("注册成功,请去登陆"),t.from={username:"",Nickname:"",password:"",email:"",tel:""},t.testingp=""})}},components:{},created:function(){}}),K=H,L=(s("2b70"),Object(l["a"])(K,A,G,!1,null,"2cd7fe7a",null)),Q=L.exports;a["a"].use(u["a"]);var R=new u["a"]({mode:"hash",base:"",routes:[{path:"/",name:"home",component:g},{path:"/mylist",component:k},{path:"/modifylist",component:O},{path:"/detailslist",component:M},{path:"/login",component:z},{path:"/register",component:Q}]}),U=s("2f62");a["a"].use(U["a"]);var V=new U["a"].Store({state:{id:"",modifyid:""},mutations:{receivedetails:function(t,e){t.id=e},receivemodify:function(t,e){t.modifyid=e}},actions:{}}),W=s("bc3a"),X=s.n(W);a["a"].prototype.axios=X.a,a["a"].config.productionTip=!1,new a["a"]({router:R,store:V,render:function(t){return t(m)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var a=s("5e27"),i=s.n(a);i.a},"5e27":function(t,e,s){},7494:function(t,e,s){},8064:function(t,e,s){},"9acb":function(t,e,s){"use strict";var a=s("3e30"),i=s.n(a);i.a},"9b2d":function(t,e,s){"use strict";var a=s("d219"),i=s.n(a);i.a},aae3:function(t,e,s){},d219:function(t,e,s){},da10:function(t,e,s){"use strict";var a=s("8064"),i=s.n(a);i.a},eba2:function(t,e,s){"use strict";var a=s("7494"),i=s.n(a);i.a},f2ba:function(t,e,s){}});