!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=34)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("prop-types")},function(e,t,n){"use strict";n.d(t,"f",(function(){return o})),n.d(t,"j",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return s})),n.d(t,"g",(function(){return p})),n.d(t,"i",(function(){return d})),n.d(t,"h",(function(){return m}));var r=process.env,o=r.PORT,a=r.SESSION_SECRET,i=r.CSRF_EXCEPTION,c=r.FB_APP_KEY,l=r.FB_APP_SECRET,u=r.FB_REDIRECT_URL,s="https://graph.facebook.com/v3.3",p="//dkny.oss-cn-hangzhou.aliyuncs.com/2/",d="./".concat("dist","/server"),m=["/robots.txt","/sitemap.xml","/favicon.ico"];i||console.log("No CSRF exception defined")},function(e,t){e.exports=require("immutable")},function(e,t){e.exports=require("lodash.get")},function(e,t){e.exports=require("redux-actions")},function(e,t){e.exports=require("graphql")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("uuid")},function(e,t){e.exports={selected:"_3Vq2K",translationText:"_3Lcio",rotate:"_2Mrpm",iconWrapper:"_1uSJY"}},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("child_process")},function(e,t){e.exports=require("helmet")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("cookie-parser")},function(e,t){e.exports=require("cookie-session")},function(e,t){e.exports=require("csurf")},function(e,t){e.exports=require("express-graphql")},function(e,t){e.exports=require("mysql")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("serialize-javascript")},function(e,t){e.exports={container:"_32jyT"}},function(e,t){e.exports=require("regenerator-runtime/runtime")},function(e,t){e.exports={spinContainer:"_3Vbkh",spinLoader:"_3Kppt","spinLoader-spin":"_3CdIW","spinLoader-normal-opacity":"j3l7M"}},function(e,t,n){var r={"./admin.js":30,"./color.js":31,"./user.js":32};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=29},function(e,t,n){"use strict";n.r(t);var r,o=n(5),a=n(3),i=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=i.a.fromJS({list:[],loading:!1}),u=Object(o.handleActions)((c(r={},"admin/getList",(function(e){return e.set("loading",!0)})),c(r,"admin/getList/success",(function(e,t){return e.merge({loading:!1,list:i.a.fromJS(t.payload)})})),c(r,"admin/getList/fail",(function(e){return e.merge({list:i.a.fromJS([]),loading:!1})})),c(r,"admin/decideColor/success",(function(e,t){return e.updateIn(["list"],(function(e){return e.filter((function(e){return e.get("id")!==t.payload}))})).set("loading",!1)})),r),l);t.default=u},function(e,t,n){"use strict";n.r(t);var r,o=n(5),a=n(3);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=Object(a.fromJS)({loading:!1,showVertical:!0,colorDef:{},liked:{},colorIdAllByDate:[],colorIdAllByLike:[],colorIdByMyOwn:[]}),l=Object(o.handleActions)((i(r={},"color/get",(function(e){return e.set("loading",!0)})),i(r,"color/get/success",(function(e,t){var n=t.payload,r=Object(a.List)(),o=Object(a.Map)();n.forEach((function(e){r=r.push(e.id),o=o.set(e.id,Object(a.fromJS)(e))}));var i=n.sort((function(e,t){return t.like-e.like})).map((function(e){return e.id}));return e.merge({colorIdAllByDate:r,colorIdAllByLike:Object(a.fromJS)(i),colorDef:o,loading:!1})})),i(r,"color/get/fail",(function(e){return e.merge({colorIdAllByDate:Object(a.List)(),colorIdAllByLike:Object(a.List)(),loading:!1})})),i(r,"color/toggleLike",(function(e,t){var n=t.payload,r=n.willLike,o=n.id;return(r?e.setIn(["liked",o],!0):e.deleteIn(["liked",o])).updateIn(["colorDef",o,"like"],(function(e){return e+(r?1:-1)}))})),i(r,"color/addNew/success",(function(e,t){var n=t.payload,r=n.id,o=e.setIn(["colorDef",r],Object(a.fromJS)(n));return(o=o.update("colorIdAllByDate",(function(e){return e.unshift(r)}))).update("colorIdAllByLike",(function(e){return e.push(r)}))})),i(r,"color/set/likes",(function(e,t){var n=t.payload.reduce((function(e,t){return e.set(t,!0)}),Object(a.Map)());return e.set("liked",n)})),i(r,"color/set/owns",(function(e,t){var n=t.payload;return e.set("colorIdByMyOwn",Object(a.List)(n))})),i(r,"color/setDirection",(function(e,t){var n=t.payload;return e.set("showVertical",n)})),r),c);t.default=l},function(e,t,n){"use strict";n.r(t);var r,o=n(5),a=n(3);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=Object(a.fromJS)({detail:null,facebookUrl:null,lang:null,loading:!1}),l=Object(o.handleActions)((i(r={},"user/auth",(function(e){return e.merge({loading:!0})})),i(r,"user/auth/success",(function(e,t){var n=t.payload;return e.merge({detail:Object(a.fromJS)(n),facebookUrl:null,loading:!1})})),i(r,"user/auth/fail",(function(e,t){var n=t.payload;return e.merge({detail:null,facebookUrl:n,loading:!1})})),i(r,"user/logoff",(function(e){return e.merge({detail:null,facebookUrl:null})})),i(r,"user/setLanguage",(function(e,t){var n=t.payload;return e.set("lang",n)})),r),c);t.default=l},function(e,t,n){"use strict";n.r(t);var r=n(11),o=n.n(r),a=n(2),i=process.env.PWD,c=a.h.reduce((function(e,t){return e[t]=!0,e}),{});t.default=function(e,t,n){var r=e.url;if(Object.prototype.hasOwnProperty.call(c,r)){var l=o.a.resolve(i,"".concat(a.i).concat(r));t.sendFile(l)}else n(404)}},function(e,t,n){"use strict";n.r(t);var r=n(16),o=(n(27),n(17)),a=n.n(o),i=n(18),c=n.n(i),l=n(12),u=n.n(l),s=n(19),p=n.n(s),d=n(20),m=n.n(d),f=n(2),g=n(4),h=n.n(g),b=n(13),v=n.n(b),y=function(e){return"https://www.facebook.com/v3.3/dialog/oauth?client_id=".concat(f.c,"&response_type=code&state=").concat(e,"&redirect_uri=").concat(f.e)},k=function(e,t){return Boolean(h()(e,"session.app.isAuth",!1)&&(t||h()(e,"session.app.dbInfo.id",null)))},E=function(e){var t=h()(e,"session.app.tokenInfo.access_token",null);return"string"==typeof t&&t.length>0?t:null},w=function(e){return k(e)&&h()(e,"session.app.dbInfo.isAdmin",!1)};function O(e,t,n,r,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}var C=function(e,t){var n=t.code;return{client_id:f.c,client_secret:f.d,code:n,redirect_uri:f.e}},L=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,n){var r,o,a,i,c,l,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=h()(t,"query.code",null),o=h()(t,"query.state",null),a=h()(t,"params.oauth",null),i=h()(t,"session.app.oauthState",null),!r||!o||o!==i){e.next=14;break}return console.log("redirected by ".concat(a," auth...")),c=C(0,t.query),e.next=9,s=c,v()({baseURL:f.b,method:"get",url:"/oauth/access_token",params:s});case 9:l=e.sent,(u=l.data).access_token?t.session.app={oauth:a,isAuth:!0,tokenInfo:u}:t.session.app={isAuth:!1,authError:"get token failed."},e.next=16;break;case 14:console.log("inconsistant session, error msg in session"),t.session.app={isAuth:!1,authError:"Sorry, something error, please try again."};case 16:n.redirect("/");case 17:case"end":return e.stop()}var s}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){O(a,r,o,i,c,"next",e)}function c(e){O(a,r,o,i,c,"throw",e)}i(void 0)}))});return function(e,n){return t.apply(this,arguments)}}(),S=n(11),_=n.n(S),x=process.env.PWD,R=_.a.resolve(x,"".concat(f.i,"/error.html")),j=n(21),N=n.n(j)()(),T=n(22),I=n.n(T),A=n(9),M=n.n(A),P=n(6),q=n(23),D=n.n(q),B=process.env,F=B.SQL_HOST,U=B.SQL_PORT,W=B.SQL_USERNAME,H=B.SQL_PASSWORD,V=B.SQL_DATABASE,Q=D.a.createPool({connectionLimit:4,multipleStatements:!1,host:F,port:U,user:W,password:H,database:V}),z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return new Promise((function(n,r){Q.query(e,t,(function(e,t){e?(console.error(e),r(e)):n(t)}))}))};function J(e,t,n,r,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}function K(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){J(a,r,o,i,c,"next",e)}function c(e){J(a,r,o,i,c,"throw",e)}i(void 0)}))}}var G={auth:function(e,t){return K(regeneratorRuntime.mark((function e(){var n,r,o,a,i,c,l,u,s,p,d,m,g,b,w;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=E(t),!k(t,!0)||!n){e.next=36;break}return r={access_token:n,fields:"id,name,picture"},e.prev=3,e.next=6,O=r,v()({baseURL:f.b,method:"get",url:"/me",params:O});case 6:return o=e.sent,a=o.data,i=a.name,c=a.id,e.next=11,z("SELECT * FROM colorpk_user WHERE oauth = 'fb' AND oauthid = ?",[c]);case 11:if(1!==(l=e.sent).length){e.next=23;break}return u=l[0],s=u.isadmin,p=u.id,t.session.app.dbInfo={id:p,name:i,isAdmin:s||!1},e.next=17,z("SELECT color_id FROM colorpk_userlike WHERE user_id= ?",[p]);case 17:return d=e.sent,e.next=20,z("SELECT a.id FROM colorpk_color a WHERE a.userid=?",[p]);case 20:return m=e.sent,z("UPDATE colorpk_user SET lastlogin=NOW() WHERE id=?",[p]),e.abrupt("return",{__typename:"User",name:i,isadmin:s,img:h()(a,"picture.data.url",null),likes:d.map((function(e){return e.color_id})),owns:m.map((function(e){return e.id}))});case 23:return e.next=25,z("INSERT INTO colorpk_user (oauth, name, oauthid, lastlogin) VALUES ('fb', ?, ?, NOW())",[i,c]);case 25:return g=e.sent,b=g.insertId,t.session.app.dbInfo={id:b,name:i,isAdmin:!1},e.abrupt("return",{__typename:"User",id:b,name:i,isadmin:!1,img:h()(a,"picture.data.url",null),likes:[],owns:[]});case 31:return e.prev=31,e.t0=e.catch(3),e.abrupt("return",new P.GraphQLError(e.t0.toString()));case 34:e.next=39;break;case 36:return w=M.a.v1(),t.session.app={oauthState:w},e.abrupt("return",{__typename:"AuthFailResponse",url:y(w),error:h()(t,"session.app.authError",null),status:0});case 39:case"end":return e.stop()}var O}),e,null,[[3,31]])})))()},color:function(e,t){return K(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e.category,w(t)||"ANONYMOUS"!==r){n.next=3;break}return n.abrupt("return",new P.GraphQLError("color error: no admin access"));case 3:o=null,n.t0=r,n.next="PUBLIC"===n.t0?7:"ANONYMOUS"===n.t0?11:15;break;case 7:return n.next=9,z("SELECT a.* FROM colorpk_color a WHERE a.display=0 ORDER BY `id` DESC");case 9:return o=n.sent,n.abrupt("break",16);case 11:return n.next=13,z("SELECT * FROM colorpk_color a WHERE a.display = 1");case 13:return o=n.sent,n.abrupt("break",16);case 15:return n.abrupt("break",16);case 16:return n.prev=16,n.abrupt("return",o.map((function(e){return{id:e.id,like:e.like,color:e.color,userid:e.userid,username:e.username,createdate:e.createdate}})));case 20:return n.prev=20,n.t1=n.catch(16),n.abrupt("return",new P.GraphQLError(n.t1.toString()));case 23:case"end":return n.stop()}}),n,null,[[16,20]])})))()},likeColor:function(e,t){return K(regeneratorRuntime.mark((function n(){var r,o,a,i,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.input,o=r.id,a=r.willLike,n.prev=1,k(t)&&(i=h()(t,"session.app.dbInfo.id",null),z(a?"INSERT INTO colorpk_userlike (user_id, color_id) VALUES (?, ?)":"DELETE FROM colorpk_userlike WHERE user_id= ? AND color_id = ?",[i,o])),n.next=5,z("UPDATE colorpk_color SET `like` = `like` ".concat(a?"+":"-","  1 WHERE id = ?"),[o]);case 5:return c=n.sent,n.abrupt("return",{status:1===c.affectedRows?0:1});case 9:return n.prev=9,n.t0=n.catch(1),n.abrupt("return",new P.GraphQLError(n.t0.toString()));case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()},createColor:function(e,t){return K(regeneratorRuntime.mark((function n(){var r,o,a,i,c,l,u,s,p;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e.input.color,o=k(t),a=h()(t,"session.app.dbInfo.name",null),i=h()(t,"session.app.dbInfo.id",null),l=(c=o&&a)?a:null,u=c?i:null,s=(10*Math.random()).toFixed(),27!==r.length){n.next=21;break}return n.prev=9,n.next=12,z("INSERT INTO colorpk_color (`like`, color, userid, username, colortype, display, createdate) VALUES (?, ?, ?, ?, NULL, ?, NOW())",[s,r,u,l,c?0:1]);case 12:return p=n.sent,n.abrupt("return",{status:0,data:p.insertId});case 16:return n.prev=16,n.t0=n.catch(9),n.abrupt("return",new P.GraphQLError(n.t0.toString()));case 19:n.next=22;break;case 21:return n.abrupt("return",new P.GraphQLError("create error: invalid color input"));case 22:case"end":return n.stop()}}),n,null,[[9,16]])})))()},adjudicateColor:function(e,t){return K(regeneratorRuntime.mark((function n(){var r,o,a,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(w(t)){n.next=2;break}return n.abrupt("return",new P.GraphQLError("adjudicate error: no admin access"));case 2:return r=e.input,o=r.id,a=r.willLike,n.prev=3,n.next=6,z(a?"UPDATE colorpk_color SET `display` = 0 WHERE id = ?":"DELETE FROM colorpk_color WHERE id = ?",[o]);case 6:return i=n.sent,n.abrupt("return",{status:1===i.affectedRows?0:1});case 10:return n.prev=10,n.t0=n.catch(3),n.abrupt("return",new P.GraphQLError(n.t0.toString()));case 13:case"end":return n.stop()}}),n,null,[[3,10]])})))()},logoff:function(e,t){var n=h()(t,"session.app.dbInfo.name","(unknown)");console.log("logoff ".concat(n,", delete session")),delete t.session.app;var r=M.a.v1();return t.session.app={oauthState:r},{url:y(r)}}},Y=Object(P.buildSchema)("\n  enum ColorCategory {\n    PUBLIC\n    ANONYMOUS\n  }\n\n  interface MutationResponse {\n    status: Int!\n  }\n\n  type Color {\n    id: ID!\n    like: Int!\n    color: String!\n    userid: ID\n    username: String\n    createdate: String\n  }\n\n  type User {\n    img: String\n    isadmin: Boolean\n    name: String\n    likes: [ID!]\n    owns: [ID!]\n  }\n\n  input LikeColorInputType {\n    id: ID!\n    willLike: Boolean!\n  }\n  \n  input CreateColorInputType {\n    color: String!\n  }\n\n  type LikeColorOutputType implements MutationResponse {\n    status: Int!\n  }\n\n  type AdjudicateColorOutputType implements MutationResponse {\n    status: Int!\n  }\n\n  type CreateColorOutputType implements MutationResponse {\n    status: Int!\n    data: ID!\n  }\n\n  type AuthFailResponse implements MutationResponse {\n    status: Int!\n    url: String!\n    error: String\n  }\n\n  union AuthOutputType = User | AuthFailResponse\n\n  type Mutation {\n    likeColor(input: LikeColorInputType!): LikeColorOutputType\n    createColor(input: CreateColorInputType!): CreateColorOutputType\n    adjudicateColor(input: LikeColorInputType!): AdjudicateColorOutputType\n    logoff: AuthFailResponse\n  }\n  \n  type Query {\n    color(category: ColorCategory!): [Color]\n    auth: AuthOutputType\n  }\n\n  schema {\n    query: Query\n    mutation: Mutation\n  } \n"),X=I()({schema:Y,rootValue:G,graphiql:!1,pretty:!1}),$=n(0),Z=n.n($),ee=n(3),te=n(8),ne=n(24),re=n(14),oe=n(15),ae=n(1),ie=n.n(ae),ce=function(){return Z.a.createElement($.Fragment,null,Z.a.createElement("meta",{property:"og:url",content:"https://react.colorpk.com"}),Z.a.createElement("meta",{property:"og:site_name",content:"ColorPK v1"}),Z.a.createElement("meta",{property:"og:title",content:"Your Best Color Picker"}),Z.a.createElement("meta",{property:"og:description",content:"ColorPK - Faster lighter and nicer color palette | 全球最大色彩搭配网站 | 颜色搭配 | 艺术设计"}),Z.a.createElement("meta",{property:"og:image",content:"http://dkny.oss-cn-hangzhou.aliyuncs.com/2/icon.png"}),Z.a.createElement("meta",{property:"og:image:type",content:"image/png"}),Z.a.createElement("meta",{property:"og:image:width",content:"1200"}),Z.a.createElement("meta",{property:"og:image:height",content:"620"}),Z.a.createElement("meta",{property:"twitter:site",content:"colorpk"}),Z.a.createElement("meta",{property:"twitter:creator",content:"colorpk"}),Z.a.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),Z.a.createElement("meta",{property:"twitter:title",content:"ColorPK"}),Z.a.createElement("meta",{property:"twitter:description",content:"ColorPK - Faster lighter and nicer color palette | 全球最大色彩搭配网站 | 颜色搭配 | 艺术设计"}),Z.a.createElement("meta",{property:"twitter:image:src",content:"http://dkny.oss-cn-hangzhou.aliyuncs.com/2/icon.png"}),Z.a.createElement("meta",{property:"twitter:image:width",content:"1200"}),Z.a.createElement("meta",{property:"twitter:image:height",content:"1200"}))},le=n(25),ue=n.n(le),se=function(e){var t=e.title,n=e.style,r=e.script,o=e.children,a=e.version,i=e.csrfToken,c=e.lastBuildDate,l=e.initState;return Z.a.createElement("html",{lang:"en"},Z.a.createElement("head",null,Z.a.createElement("meta",{charSet:"utf-8"}),Z.a.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),Z.a.createElement(ce,null),Z.a.createElement("title",null,t),Z.a.createElement("meta",{name:"description",content:"ColorPK | Faster lighter and nicer than colorhunt | 全球最大色彩搭配网站 | 颜色搭配 | 艺术设计"}),Z.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"}),Z.a.createElement("meta",{name:"robots",content:"INDEX,FOLLOW"}),Z.a.createElement("meta",{name:"keywords",content:"colorpk, colorpicker, color picker, palette, color combination"}),Z.a.createElement("link",{rel:"shortcut icon",href:"//dkny.oss-cn-hangzhou.aliyuncs.com/3/fav.ico"}),Z.a.createElement("link",{href:"".concat(n,"?").concat(a),rel:"stylesheet"}),Z.a.createElement("script",{dangerouslySetInnerHTML:{__html:"if(window.location.hostname.indexOf('colorpk.com') > -1){(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5LX6LV3');} var initLoadTime = Date.now();window.addEventListener('_COLORPK_SCRIPT_READY', function(){window.dataLayer.push({'scriptLoadingTime': Date.now() - initLoadTime});console.log('server last build: ".concat(c,"');});\n          ")}})),Z.a.createElement("body",null,Z.a.createElement("noscript",null,Z.a.createElement("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-5LX6LV3",height:"0",width:"0",style:{display:"none",visibility:"hidden"}})),Z.a.createElement("div",{id:"app",dangerouslySetInnerHTML:{__html:o}}),Z.a.createElement("div",{id:"csrf","data-token":i}),Z.a.createElement("script",{dangerouslySetInnerHTML:{__html:"window.".concat("_REDUXSTATE_","=").concat(ue()(l))}}),Z.a.createElement("script",{src:"".concat(r,"?").concat(a),type:"text/javascript"})))};se.propTypes={title:ie.a.string.isRequired,lastBuildDate:ie.a.string.isRequired,version:ie.a.string.isRequired,style:ie.a.string.isRequired,script:ie.a.string.isRequired,children:ie.a.string.isRequired,csrfToken:ie.a.string.isRequired,initState:ie.a.object.isRequired};var pe=se,de=n(26),me=n.n(de),fe=n(5),ge=n(7),he=n(10),be=n.n(he),ve=function(){return Z.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},Z.a.createElement("title",null,"translation"),Z.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),Z.a.createElement("path",{d:" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "}))},ye=function(e){var t=e.languages,n=e.onChange;return Z.a.createElement("div",{className:"navbar-dropdown"},t.map((function(e){return Z.a.createElement("a",{className:"navbar-item",key:e.code,onClick:function(){n(e.code)}},e.name)})))};ye.propTypes={onChange:ie.a.func.isRequired,languages:ie.a.array.isRequired};var ke=ye,Ee=[{code:"en",name:"English",data:{language:"Language",popular:"Popular",latest:"Latest",more:"More",about:"About",newColor:"New Color",fbLogin:"Facebook Login",reportIssue:"Report an issue",download:"Download",submit:"Submit",reset:"Reset",return:"Return",profile:"Profile",like:"Like",admin:"Admin",logOut:"Log Out",facebook:"FaceBook",twitter:"Twitter",email:"E-Mail"}},{code:"zh",name:"简体中文",data:{language:"多语言",popular:"最热",latest:"最新",more:"更多",about:"关于",newColor:"创建新颜色",fbLogin:"脸书账号登陆",reportIssue:"报告错误",download:"下载",submit:"添加",reset:"重置",return:"返回",profile:"我的颜色",like:"我的收藏",admin:"管理员",logOut:"注销",facebook:"脸书",twitter:"推特",email:"电邮"}},{code:"ja",name:"日本語",data:{language:"言語",popular:"人気のある",latest:"最新",more:"もっと",about:"約",newColor:"色をつくる",fbLogin:"Facebookでログイン",reportIssue:"問題を報告する",download:"ダウンロード",submit:"提出する",reset:"リセット",return:"戻る",profile:"プロフィール",like:"好む",admin:"管理者",logOut:"サインアウト",facebook:"FaceBook",twitter:"さえずり",email:"Eメール"}},{code:"ko",name:"한국어",data:{language:"언어",popular:"인기 있는",latest:"최근",more:"더",about:"약",newColor:"몹시 떠들어 대다",fbLogin:"페이스 북 로그인",reportIssue:"보고 문제",download:"다운로드",submit:"제출하다",reset:"다시 놓기",return:"반환",profile:"윤곽",like:"인기 있는 말",admin:"관리자",logOut:"로그 아웃하다",facebook:"페이스 북",twitter:"지저귀다",email:"이메일"}},{code:"es",name:"Español",data:{language:"idioma",popular:"popular",latest:"más reciente",more:"Más",about:"acerca de",newColor:"crear nuevo",fbLogin:"cuenta de Facebook",reportIssue:"informe de problema",download:"descargar",submit:"enviar",reset:"Reiniciar",return:"regreso",profile:"perfil",like:"favorita",admin:"administración",logOut:"cerrar sesión",facebook:"Facebook",twitter:"gorjeo",email:"correo electrónico"}},{code:"ru",name:"Русский",data:{language:"Переводы",popular:"популярный",latest:"недавно",more:"Больше",about:"около",newColor:"Создайте",fbLogin:"Логин в фейсбук",reportIssue:"сообщить о проблемах",download:"скачать",submit:"Отправить",reset:"сброс",return:"вернуть",profile:"профиль",like:"любимый",admin:"админ",logOut:"выйти",facebook:"Facebook",twitter:"щебет",email:"Эл. адрес"}}],we=Ee.map((function(e){return{code:e.code,name:e.name}})),Oe=Ee.reduce((function(e,t){return e[t.code]=t.data,e}),{}),Ce=Z.a.createContext();function Le(e){return(Le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Se(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _e(e){return(_e=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function xe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Re(e,t){return(Re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var je=be.a.selected,Ne=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=_e(t).call(this,e))||"object"!==Le(o)&&"function"!=typeof o?xe(r):o).state={showMenu:!1},n.onFBClick=n.onFBClick.bind(xe(n)),n.onLogout=n.onLogout.bind(xe(n)),n.toggleMobileMenu=n.toggleMobileMenu.bind(xe(n)),n.onClickNav=n.onClickNav.bind(xe(n)),n.onClickNavLike=n.onClickNavLike.bind(xe(n)),n.onClickTitleIcon=n.onClickTitleIcon.bind(xe(n)),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Re(e,t)}(t,e),n=t,(r=[{key:"toggleMobileMenu",value:function(){this.setState({showMenu:!this.state.showMenu})}},{key:"onClickNav",value:function(){this.state.showMenu&&this.setState({showMenu:!1})}},{key:"onClickNavLike",value:function(){this.onClickNav(),window.scrollTo(0,0)}},{key:"onFBClick",value:function(e){e.preventDefault(),this.props.onOAuth(this.props.facebookUrl)}},{key:"onClickTitleIcon",value:function(){var e=this.props,t=e.onChangeCanvasDirection,n=e.showVertical;this.onClickNav(),t(!n)}},{key:"onLogout",value:function(){this.props.onLogout()}},{key:"render",value:function(){var e=this,t=this.props,n=t.url,r=t.detail,o=t.likeNum,a=t.showVertical,i=t.facebookUrl,c=t.languages,l=Boolean(r),u=this.context,s="/popular"===n,p=n in{"/latest":!0,"/":!0},d="/like"===n,m=l&&r.get("img"),f=m||"//dkny.oss-cn-hangzhou.aliyuncs.com/2/icon.png";return Z.a.createElement("nav",{className:"navbar is-fixed-top",role:"navigation","aria-label":"main navigation"},Z.a.createElement("div",{className:"navbar-brand"},Z.a.createElement("div",{title:"click to rotate",className:"navbar-item ".concat(be.a.iconWrapper),onClick:this.onClickTitleIcon},Z.a.createElement("img",{src:f,className:"".concat(m||a?"":be.a.rotate),alt:"colorpk icon"})),Z.a.createElement("a",{role:"nav toggle btn",className:"navbar-burger burger","aria-label":"menu","aria-expanded":"false",onClick:this.toggleMobileMenu},Z.a.createElement("span",{"aria-hidden":"true"}),Z.a.createElement("span",{"aria-hidden":"true"}),Z.a.createElement("span",{"aria-hidden":"true"}))),Z.a.createElement("div",{className:"navbar-menu ".concat(this.state.showMenu?"is-active":"")},Z.a.createElement("div",{className:"navbar-start"},l?Z.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},Z.a.createElement("a",{className:"navbar-link ".concat(["/like","/portfolio"].includes(n)?je:"")},r.get("name")),Z.a.createElement("div",{className:"navbar-dropdown"},Z.a.createElement(ge.Link,{className:"navbar-item",to:"/portfolio",onClick:function(){e.onClickNav()}},u.profile),Z.a.createElement(ge.Link,{to:"/like",className:"navbar-item",onClick:function(){e.onClickNav()}},u.like),r.get("isadmin")&&Z.a.createElement(ge.Link,{to:"/adminpanel",className:"navbar-item",onClick:this.onClickNav},u.admin),Z.a.createElement("hr",{className:"navbar-divider"}),Z.a.createElement("a",{className:"navbar-item",onClick:function(t){t.preventDefault(),e.onLogout()}},u.logOut))):Z.a.createElement(ge.Link,{to:"/like",className:"navbar-item ".concat(d?je:""),onClick:this.onClickNavLike},u.like,o>0&&" (".concat(o,")")),Z.a.createElement(ge.Link,{to:"/popular",className:"navbar-item ".concat(s?je:""),onClick:this.onClickNav},u.popular),Z.a.createElement(ge.Link,{to:"/latest",className:"navbar-item ".concat(p?je:""),onClick:this.onClickNav},u.latest),Z.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},Z.a.createElement("a",{className:"navbar-link"},u.more),Z.a.createElement("div",{className:"navbar-dropdown"},Z.a.createElement("a",{className:"navbar-item",href:"//www.colorpk.com"},"ColorPK v2.0"),Z.a.createElement("a",{className:"navbar-item",href:"//www.colorpk.com/about"},u.about),Z.a.createElement("hr",{className:"navbar-divider"}),Z.a.createElement("a",{className:"navbar-item",href:"//github.com/im6/vp/issues"},u.reportIssue))),Z.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},Z.a.createElement("a",{className:"navbar-link"},Z.a.createElement(ve,null),Z.a.createElement("span",{className:be.a.translationText},u.language)),Z.a.createElement(ke,{languages:c,onChange:this.props.onChangeLang}))),Z.a.createElement("div",{className:"navbar-end"},Z.a.createElement("div",{className:"navbar-item"},Z.a.createElement("div",{className:"buttons"},Z.a.createElement(ge.Link,{to:"/new",className:"button is-primary",onClick:this.onClickNav},u.newColor),"  ",!l&&i&&Z.a.createElement("a",{className:"button is-info",onClick:this.onFBClick},u.fbLogin))))))}}])&&Se(n.prototype,r),o&&Se(n,o),t}(Z.a.Component);Ne.propTypes={url:ie.a.string,detail:ie.a.object,facebookUrl:ie.a.string,likeNum:ie.a.number,showVertical:ie.a.bool,languages:ie.a.array.isRequired,onLogout:ie.a.func.isRequired,onOAuth:ie.a.func.isRequired,onChangeLang:ie.a.func.isRequired,onChangeCanvasDirection:ie.a.func.isRequired},Ne.contextType=Ce;var Te=Ne,Ie={},Ae=Object(ge.withRouter)(Object(te.connect)((function(e,t){var n=e.user,r=e.color,o=t.location,a=t.history;Ie.history=a;var i=o.pathname,c=n.get("detail"),l=n.get("facebookUrl"),u=r.get("liked").size,s=r.get("showVertical");return{url:i,detail:c,likeNum:u,languages:we,facebookUrl:l,showVertical:s}}),(function(e){return{onOAuth:function(t){var n=Object(fe.createAction)("user/onOAuth");e(n(t))},onLogout:function(){var t=Object(fe.createAction)("user/logoff");e(t()),Ie.history.push("/")},onChangeLang:function(t){var n=Object(fe.createAction)("user/setLanguage");e(n(t))},onChangeCanvasDirection:function(t){var n=Object(fe.createAction)("color/setDirection");e(n(t))}}}))(Te)),Me=(n(28),Z.a.memo((function(){return Z.a.createElement("div",{className:"spinContainer"},Z.a.createElement("div",{className:"spinLoader"}))})));function Pe(e){return(Pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function qe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function De(e,t){return!t||"object"!==Pe(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Be(e){return(Be=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Fe(e,t){return(Fe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Ue=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=De(this,Be(t).call(this,e))).state={showLoading:!0},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Fe(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.setState({showLoading:!1})}},{key:"render",value:function(){var e=this.state.showLoading,t=this.props.children;return Z.a.createElement("div",{className:me.a.container},Z.a.createElement(Ae,null),e?Z.a.createElement(Me,null):t)}}])&&qe(n.prototype,r),o&&qe(n,o),t}(Z.a.Component);Ue.propTypes={children:ie.a.node};var We=Ue,He=Object(te.connect)((function(e){return{lang:e.user.get("lang")}}))((function(e){var t=e.lang,n=e.children,r=Oe[t]||Oe.en;return Z.a.createElement(Ce.Provider,{value:r},n)})),Ve=n(29),Qe=Ve.keys().reduce((function(e,t){return e[t.replace(/\.js$/,"").replace(/^.\//,"")]=Ve(t).default,e}),{}),ze=M.a.v1().substring(0,8),Je=function(e,t){var n=e.cookies,r=n.lang,o=n.canvas,a=Object(re.createStore)(Object(re.combineReducers)(Qe),{user:Object(ee.fromJS)({detail:k(e)?{name:"loading",isadmin:w(e)}:null,facebookUrl:null,lang:r,loading:!0}),color:Object(ee.fromJS)({loading:!0,showVertical:"1"===o,colorDef:{},liked:{},colorIdAllByDate:[],colorIdAllByLike:[],colorIdByMyOwn:[]})}),i=Z.a.createElement(ne.StaticRouter,{location:e.url},Z.a.createElement(te.Provider,{store:a},Z.a.createElement(He,null,Z.a.createElement(We,null)))),c=Object(oe.renderToString)(i),l=Z.a.createElement(pe,{title:"".concat("ColorPK | Your Best Color Picker"),version:ze,style:"".concat(f.g,"main.css"),script:"".concat(f.g,"main.js"),csrfToken:e.csrfToken(),lastBuildDate:"3/3/2020, 10:40:13 PM EST",initState:a.getState()},c),u=Object(oe.renderToStaticMarkup)(l);t.status(200),t.header("Access-Control-Allow-Origin","*"),t.send("<!DOCTYPE html>".concat(u))},Ke=c()();Ke.set("trust proxy",!0),Ke.use(a()()),Ke.use(u.a.json()),Ke.use(u.a.urlencoded({extended:!1})),Ke.use(p()()),Ke.use(m()({name:"session",keys:[f.j],maxAge:2592e5,httpOnly:!0,sameSite:"strict"}));var Ge=n(33).default;f.h.forEach((function(e){Ke.get(e,Ge)})),Ke.get("/_ah/:action",(function(e,t){var n=e.params.action;t.json({status:"".concat(n," - ok")})})),Ke.use((function(){for(var e=void 0,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];h()(n[0],"body._csrf",null)===f.a?(console.log("csrf exception"),n[2]()):N.apply(e,n)})),Ke.post("/graphql",X),Ke.get("/auth/:oauth",L),["/","/latest","/popular","/color/:id","/new","/like"].forEach((function(e){Ke.get(e,Je)})),Ke.get("/portfolio",(function(e,t,n){k(e)?n():n(401)}),Je),Ke.get("/adminpanel",(function(e,t,n){w(e)?n():n(403)}),Je),Ke.use((function(e,t){console.error("Error: 404, ".concat(e.url," not found")),t.status(400).sendFile(R)})),Ke.use((function(e,t,n,r){console.error("Error: ".concat(e.toString(),", ").concat(t.url)),"POST"===t.method?n.status(400).json({errors:!0}):n.status(400).sendFile(R)}));var Ye=Ke,Xe=f.f||8080;Ye.listen(Xe,(function(){return console.log("app (mode: ".concat("production",") is running on: http://localhost:").concat(Xe))})).timeout=5e3,Object(r.exec)("curl ifconfig.me",(function(e,t,n){e?console.error(n):console.log("public IP addr: ".concat(t))}))}]);