!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=37)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"j",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return p})),n.d(t,"g",(function(){return d})),n.d(t,"i",(function(){return f})),n.d(t,"h",(function(){return m}));var r=n(5);var o=process.env,a=o.PORT,i=o.SESSION_SECRET,c=o.CSRF_EXCEPTION,l=o.FB_APP_KEY,u=o.FB_APP_SECRET,s=o.FB_REDIRECT_URL,p="https://graph.facebook.com/v3.3",d="".concat(r.c,"/"),f="./".concat("dist","/server"),m=["/robots.txt","/sitemap.xml","/favicon.ico"];c||console.log("No CSRF exception defined"),a||console.log("No port defined.")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("immutable")},function(e,t){e.exports=require("lodash.get")},function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return i}));var r=!0,o="//dkny.oss-cn-hangzhou.aliyuncs.com/2",a="canvas",i="lang"},function(e,t){e.exports=require("graphql")},function(e,t){e.exports=require("redux-actions")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("uuid")},function(e,t){e.exports={selected:"_3Vq2K",translationText:"_3Lcio",rotate:"_2Mrpm",iconWrapper:"_1uSJY"}},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("express-session")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("child_process")},function(e,t){e.exports=require("helmet")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("cookie-parser")},function(e,t){e.exports=require("redis")},function(e,t){e.exports=require("connect-redis")},function(e,t){e.exports=require("csurf")},function(e,t){e.exports=require("express-graphql")},function(e,t){e.exports=require("mysql")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("serialize-javascript")},function(e,t){e.exports={container:"_32jyT"}},function(e,t){e.exports=require("regenerator-runtime/runtime")},function(e,t){e.exports={spinContainer:"_3Vbkh",spinLoader:"_3Kppt","spinLoader-spin":"_3CdIW","spinLoader-normal-opacity":"j3l7M"}},function(e,t,n){var r={"./admin.js":33,"./color.js":34,"./user.js":35};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=32},function(e,t,n){"use strict";n.r(t);var r,o=n(7),a=n(3),i=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=i.a.fromJS({list:[],loading:!1}),u=Object(o.handleActions)((c(r={},"admin/getList",(function(e){return e.set("loading",!0)})),c(r,"admin/getList/success",(function(e,t){return e.merge({loading:!1,list:i.a.fromJS(t.payload)})})),c(r,"admin/getList/fail",(function(e){return e.merge({list:i.a.fromJS([]),loading:!1})})),c(r,"admin/decideColor/success",(function(e,t){return e.updateIn(["list"],(function(e){return e.filter((function(e){return e.get("id")!==t.payload}))})).set("loading",!1)})),r),l);t.default=u},function(e,t,n){"use strict";n.r(t);var r,o=n(7),a=n(3);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=Object(a.fromJS)({loading:!1,showVertical:!0,colorDef:{},liked:{},colorIdAllByDate:[],colorIdAllByLike:[],colorIdByMyOwn:[]}),l=Object(o.handleActions)((i(r={},"color/get",(function(e){return e.set("loading",!0)})),i(r,"color/get/success",(function(e,t){var n=t.payload,r=Object(a.List)(),o=Object(a.Map)();n.forEach((function(e){r=r.push(e.id),o=o.set(e.id,Object(a.fromJS)(e))}));var i=n.sort((function(e,t){return t.like-e.like})).map((function(e){return e.id}));return e.merge({colorIdAllByDate:r,colorIdAllByLike:Object(a.fromJS)(i),colorDef:o,loading:!1})})),i(r,"color/get/fail",(function(e){return e.merge({colorIdAllByDate:Object(a.List)(),colorIdAllByLike:Object(a.List)(),loading:!1})})),i(r,"color/toggleLike",(function(e,t){var n=t.payload,r=n.willLike,o=n.id;return(r?e.setIn(["liked",o],!0):e.deleteIn(["liked",o])).updateIn(["colorDef",o,"like"],(function(e){return e+(r?1:-1)}))})),i(r,"color/addNew/success",(function(e,t){var n=t.payload,r=n.id,o=e.setIn(["colorDef",r],Object(a.fromJS)(n));return(o=o.update("colorIdAllByDate",(function(e){return e.unshift(r)}))).update("colorIdAllByLike",(function(e){return e.push(r)}))})),i(r,"color/set/likes",(function(e,t){var n=t.payload.reduce((function(e,t){return e.set(t,!0)}),Object(a.Map)());return e.set("liked",n)})),i(r,"color/set/owns",(function(e,t){var n=t.payload;return e.set("colorIdByMyOwn",Object(a.List)(n))})),i(r,"color/setDirection",(function(e,t){var n=t.payload;return e.set("showVertical",n)})),r),c);t.default=l},function(e,t,n){"use strict";n.r(t);var r,o=n(7),a=n(3);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=Object(a.fromJS)({detail:null,facebookUrl:null,lang:null,loading:!1}),l=Object(o.handleActions)((i(r={},"user/auth",(function(e){return e.merge({loading:!0})})),i(r,"user/auth/success",(function(e,t){var n=t.payload;return e.merge({detail:Object(a.fromJS)(n),loading:!1})})),i(r,"user/auth/fail",(function(e){return e.merge({detail:null,loading:!1})})),i(r,"user/logoff",(function(e){return e.merge({detail:null})})),i(r,"user/logoff/success",(function(e,t){var n=t.payload;return e.merge({facebookUrl:n})})),i(r,"user/setLanguage",(function(e,t){var n=t.payload;return e.set("lang",n)})),r),c);t.default=l},function(e,t,n){"use strict";n.r(t);var r=n(12),o=n.n(r),a=n(1),i=process.env.PWD,c=a.h.reduce((function(e,t){return e[t]=!0,e}),{});t.default=function(e,t,n){var r=e.url;if(Object.prototype.hasOwnProperty.call(c,r)){var l=o.a.resolve(i,"".concat(a.i).concat(r));t.sendFile(l)}else n(404)}},function(e,t,n){"use strict";n.r(t);var r=n(18),o=(n(30),n(19)),a=n.n(o),i=n(20),c=n.n(i),l=n(13),u=n.n(l),s=n(21),p=n.n(s),d=n(22),f=n.n(d),m=n(14),g=n.n(m),b=n(23),v=n.n(b),h=n(1),y=process.env,E=y.REDIS_HOST,k=y.REDIS_PORT,w=y.REDIS_PASSWORD;E&&k&&w||(console.error("missing redis connection info"),process.exit(1));var O=v()(g.a),S=f.a.createClient({host:E,port:k,password:w,prefix:"vp:"});S.on("error",(function(e){console.error(e),process.exit(1)})),S.on("reconnecting",(function(e,t){console.log("reconnecting, attempt: ".concat(t))})),S.on("connect",(function(){console.log("Redis connect successfully.")}));var L=g()({store:new O({client:S}),secret:h.j,resave:!1,saveUninitialized:!1}),C=n(4),j=n.n(C),x=n(10),R=n(15),_=n.n(R),T=function(e){return"https://www.facebook.com/v3.3/dialog/oauth?client_id=".concat(h.c,"&response_type=code&state=").concat(e,"&redirect_uri=").concat(h.e)},I=function(e,t){return Boolean(j()(e,"session.app.isAuth",!1)&&(t||j()(e,"session.app.dbInfo.id",null)))},N=function(e){var t=j()(e,"session.app.tokenInfo.access_token",null);return"string"==typeof t&&t.length>0?t:null},P=function(e){return I(e)&&j()(e,"session.app.dbInfo.isAdmin",!1)};function D(e,t,n,r,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}var A=function(e,t){var n=t.code;return{client_id:h.c,client_secret:h.d,code:n,redirect_uri:h.e}},q=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,n){var r,o,a,i,c,l,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=j()(t,"query.code",null),o=j()(t,"query.state",null),a=j()(t,"params.oauth",null),i=j()(t,"session.app.oauthState",null),!r||!o||o!==i){e.next=14;break}return console.log("redirected by ".concat(a," auth...")),c=A(0,t.query),e.next=9,s=c,_()({baseURL:h.b,method:"get",url:"/oauth/access_token",params:s});case 9:l=e.sent,(u=l.data).access_token?t.session.app={oauth:a,isAuth:!0,tokenInfo:u}:t.session.app={isAuth:!1,authError:"get token failed."},e.next=16;break;case 14:console.log("inconsistant session, error msg in session"),t.session.app={isAuth:!1,authError:"Sorry, something error, please try again."};case 16:n.redirect("/");case 17:case"end":return e.stop()}var s}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){D(a,r,o,i,c,"next",e)}function c(e){D(a,r,o,i,c,"throw",e)}i(void 0)}))});return function(e,n){return t.apply(this,arguments)}}(),M=n(12),B=n.n(M),U=process.env.PWD,F=B.a.resolve(U,"".concat(h.i,"/error.html")),W=n(24),H=n.n(W)()(),Q=n(25),V=n.n(Q),J=n(6),G=n(26),K=n.n(G),z=process.env,Y=z.SQL_HOST,X=z.SQL_PORT,$=z.SQL_USERNAME,Z=z.SQL_PASSWORD,ee=z.SQL_DATABASE,te=K.a.createPool({connectionLimit:4,multipleStatements:!1,host:Y,port:X,user:$,password:Z,database:ee});te.query("SELECT 1 + 1 AS solution",(function(e,t){(e||2!==t[0].solution)&&(console.error(e),process.exit(1)),console.log("MySQL connect successfully.")}));var ne=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return new Promise((function(n,r){te.query(e,t,(function(e,t){e?(console.error(e),r(e)):n(t)}))}))};function re(e,t,n,r,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}function oe(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){re(a,r,o,i,c,"next",e)}function c(e){re(a,r,o,i,c,"throw",e)}i(void 0)}))}}var ae={user:function(e,t){return oe(regeneratorRuntime.mark((function e(){var n,r,o,a,i,c,l,u,s,p,d,f,m,g;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=N(t),!I(t,!0)||!n){e.next=36;break}return r={access_token:n,fields:"id,name,picture"},e.prev=3,e.next=6,b=r,_()({baseURL:h.b,method:"get",url:"/me",params:b});case 6:return o=e.sent,a=o.data,i=a.name,c=a.id,e.next=11,ne("SELECT * FROM colorpk_user WHERE oauth = 'fb' AND oauthid = ?",[c]);case 11:if(1!==(l=e.sent).length){e.next=23;break}return u=l[0],s=u.isadmin,p=u.id,t.session.app.dbInfo={id:p,name:i,isAdmin:s||!1},e.next=17,ne("SELECT color_id FROM colorpk_userlike WHERE user_id= ?",[p]);case 17:return d=e.sent,e.next=20,ne("SELECT a.id FROM colorpk_color a WHERE a.userid=?",[p]);case 20:return f=e.sent,ne("UPDATE colorpk_user SET lastlogin=NOW() WHERE id=?",[p]),e.abrupt("return",{name:i,isadmin:s,img:j()(a,"picture.data.url",null),likes:d.map((function(e){return e.color_id})),owns:f.map((function(e){return e.id}))});case 23:return e.next=25,ne("INSERT INTO colorpk_user (oauth, name, oauthid, lastlogin) VALUES ('fb', ?, ?, NOW())",[i,c]);case 25:return m=e.sent,g=m.insertId,t.session.app.dbInfo={id:g,name:i,isAdmin:!1},e.abrupt("return",{name:i,isadmin:!1,img:j()(a,"picture.data.url",null),likes:[],owns:[]});case 31:return e.prev=31,e.t0=e.catch(3),e.abrupt("return",new J.GraphQLError(e.t0.toString()));case 34:e.next=37;break;case 36:return e.abrupt("return",null);case 37:case"end":return e.stop()}var b}),e,null,[[3,31]])})))()},color:function(e,t){return oe(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e.category,P(t)||"ANONYMOUS"!==r){n.next=3;break}return n.abrupt("return",new J.GraphQLError("color error: no admin access"));case 3:o=null,n.t0=r,n.next="PUBLIC"===n.t0?7:"ANONYMOUS"===n.t0?11:15;break;case 7:return n.next=9,ne("SELECT a.* FROM colorpk_color a WHERE a.display=0 ORDER BY `id` DESC");case 9:return o=n.sent,n.abrupt("break",16);case 11:return n.next=13,ne("SELECT * FROM colorpk_color a WHERE a.display = 1");case 13:return o=n.sent,n.abrupt("break",16);case 15:return n.abrupt("break",16);case 16:return n.prev=16,n.abrupt("return",o.map((function(e){return{id:e.id,like:e.like,color:e.color,userid:e.userid,username:e.username,createdate:e.createdate}})));case 20:return n.prev=20,n.t1=n.catch(16),n.abrupt("return",new J.GraphQLError(n.t1.toString()));case 23:case"end":return n.stop()}}),n,null,[[16,20]])})))()},likeColor:function(e,t){return oe(regeneratorRuntime.mark((function n(){var r,o,a,i,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e.input,o=r.id,a=r.willLike){n.next=3;break}return n.abrupt("return",new J.GraphQLError("you have to like it"));case 3:return n.prev=3,I(t)&&(i=j()(t,"session.app.dbInfo.id",null),ne(a?"INSERT INTO colorpk_userlike (user_id, color_id) VALUES (?, ?)":"DELETE FROM colorpk_userlike WHERE user_id= ? AND color_id = ?",[i,o])),n.next=7,ne("UPDATE colorpk_color SET `like` = `like` ".concat(a?"+":"-","  1 WHERE id = ?"),[o]);case 7:return c=n.sent,n.abrupt("return",{status:1===c.affectedRows?0:1});case 11:return n.prev=11,n.t0=n.catch(3),n.abrupt("return",new J.GraphQLError(n.t0.toString()));case 14:case"end":return n.stop()}}),n,null,[[3,11]])})))()},createColor:function(e,t){return oe(regeneratorRuntime.mark((function n(){var r,o,a,i,c,l,u,s,p;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e.input.color,o=I(t),a=j()(t,"session.app.dbInfo.name",null),i=j()(t,"session.app.dbInfo.id",null),l=(c=o&&a)?a:null,u=c?i:null,s=(10*Math.random()).toFixed(),27!==r.length){n.next=21;break}return n.prev=9,n.next=12,ne("INSERT INTO colorpk_color (`like`, color, userid, username, colortype, display, createdate) VALUES (?, ?, ?, ?, NULL, ?, NOW())",[s,r,u,l,c?0:1]);case 12:return p=n.sent,n.abrupt("return",{status:0,data:p.insertId});case 16:return n.prev=16,n.t0=n.catch(9),n.abrupt("return",new J.GraphQLError(n.t0.toString()));case 19:n.next=22;break;case 21:return n.abrupt("return",new J.GraphQLError("create error: invalid color input"));case 22:case"end":return n.stop()}}),n,null,[[9,16]])})))()},adjudicateColor:function(e,t){return oe(regeneratorRuntime.mark((function n(){var r,o,a,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(P(t)){n.next=2;break}return n.abrupt("return",new J.GraphQLError("adjudicate error: no admin access"));case 2:return r=e.input,o=r.id,a=r.willLike,n.prev=3,n.next=6,ne(a?"UPDATE colorpk_color SET `display` = 0 WHERE id = ?":"DELETE FROM colorpk_color WHERE id = ?",[o]);case 6:return i=n.sent,n.abrupt("return",{status:1===i.affectedRows?0:1});case 10:return n.prev=10,n.t0=n.catch(3),n.abrupt("return",new J.GraphQLError(n.t0.toString()));case 13:case"end":return n.stop()}}),n,null,[[3,10]])})))()}},ie=Object(J.buildSchema)("\n  enum ColorCategory {\n    PUBLIC\n    ANONYMOUS\n  }\n\n  interface MutationResponse {\n    status: Int!\n  }\n\n  type Color {\n    id: ID!\n    like: Int!\n    color: String!\n    userid: ID\n    username: String\n    createdate: String\n  }\n\n  type User {\n    img: String\n    isadmin: Boolean\n    name: String\n    likes: [ID!]\n    owns: [ID!]\n  }\n\n  input LikeColorInputType {\n    id: ID!\n    willLike: Boolean!\n  }\n  \n  input CreateColorInputType {\n    color: String!\n  }\n\n  type LikeColorOutputType implements MutationResponse {\n    status: Int!\n  }\n\n  type AdjudicateColorOutputType implements MutationResponse {\n    status: Int!\n  }\n\n  type CreateColorOutputType implements MutationResponse {\n    status: Int!\n    data: ID!\n  }\n\n  type Mutation {\n    likeColor(input: LikeColorInputType!): LikeColorOutputType\n    createColor(input: CreateColorInputType!): CreateColorOutputType\n    adjudicateColor(input: LikeColorInputType!): AdjudicateColorOutputType\n  }\n  \n  type Query {\n    color(category: ColorCategory!): [Color]\n    user: User\n  }\n\n  schema {\n    query: Query\n    mutation: Mutation\n  } \n"),ce=V()({schema:ie,rootValue:ae,graphiql:!1,pretty:!1}),le=n(0),ue=n.n(le),se=n(3),pe=n(9),de=n(27),fe=n(16),me=n(17),ge=n(5),be=n(2),ve=n.n(be),he=function(){return ue.a.createElement(le.Fragment,null,ue.a.createElement("meta",{property:"og:url",content:"https://react.colorpk.com"}),ue.a.createElement("meta",{property:"og:site_name",content:"ColorPK v1"}),ue.a.createElement("meta",{property:"og:title",content:"Your Best Color Picker"}),ue.a.createElement("meta",{property:"og:description",content:"ColorPK - Faster lighter and nicer color palette | 全球最大色彩搭配网站 | 颜色搭配 | 艺术设计"}),ue.a.createElement("meta",{property:"og:image",content:"".concat(ge.c,"/icon.png")}),ue.a.createElement("meta",{property:"og:image:type",content:"image/png"}),ue.a.createElement("meta",{property:"og:image:width",content:"1200"}),ue.a.createElement("meta",{property:"og:image:height",content:"620"}),ue.a.createElement("meta",{property:"twitter:site",content:"colorpk"}),ue.a.createElement("meta",{property:"twitter:creator",content:"colorpk"}),ue.a.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),ue.a.createElement("meta",{property:"twitter:title",content:"ColorPK"}),ue.a.createElement("meta",{property:"twitter:description",content:"ColorPK - Faster lighter and nicer color palette | 全球最大色彩搭配网站 | 颜色搭配 | 艺术设计"}),ue.a.createElement("meta",{property:"twitter:image:src",content:"".concat(ge.c,"/icon.png")}),ue.a.createElement("meta",{property:"twitter:image:width",content:"1200"}),ue.a.createElement("meta",{property:"twitter:image:height",content:"1200"}))},ye=n(28),Ee=n.n(ye),ke=function(e){var t=e.title,n=e.style,r=e.script,o=e.children,a=e.version,i=e.csrfToken,c=e.lastBuildDate,l=e.initState;return ue.a.createElement("html",{lang:"en"},ue.a.createElement("head",null,ue.a.createElement("meta",{charSet:"utf-8"}),ue.a.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),ue.a.createElement(he,null),ue.a.createElement("title",null,t),ue.a.createElement("meta",{name:"description",content:"ColorPK | Faster lighter and nicer than colorhunt | 全球最大色彩搭配网站 | 颜色搭配 | 艺术设计"}),ue.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"}),ue.a.createElement("meta",{name:"robots",content:"INDEX,FOLLOW"}),ue.a.createElement("meta",{name:"keywords",content:"colorpk, colorpicker, color picker, palette, color combination"}),ue.a.createElement("link",{rel:"shortcut icon",href:"//dkny.oss-cn-hangzhou.aliyuncs.com/3/fav.ico"}),ue.a.createElement("link",{href:"".concat(n,"?").concat(a),rel:"stylesheet"}),ue.a.createElement("script",{dangerouslySetInnerHTML:{__html:"if(window.location.hostname.indexOf('colorpk.com') > -1){(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5LX6LV3');} var initLoadTime = Date.now();window.addEventListener('_COLORPK_SCRIPT_READY', function(){window.dataLayer.push({'scriptLoadingTime': Date.now() - initLoadTime});console.log('server last build: ".concat(c,"');});\n          ")}})),ue.a.createElement("body",null,ue.a.createElement("noscript",null,ue.a.createElement("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-5LX6LV3",height:"0",width:"0",style:{display:"none",visibility:"hidden"}})),ue.a.createElement("div",{id:"app",dangerouslySetInnerHTML:{__html:o}}),ue.a.createElement("div",{id:"csrf","data-token":i}),ue.a.createElement("script",{dangerouslySetInnerHTML:{__html:"window.".concat("_REDUXSTATE_","=").concat(Ee()(l))}}),ue.a.createElement("script",{src:"".concat(r,"?").concat(a),type:"text/javascript",crossorigin:"anonymous"})))};ke.propTypes={title:ve.a.string.isRequired,lastBuildDate:ve.a.string.isRequired,version:ve.a.string.isRequired,style:ve.a.string.isRequired,script:ve.a.string.isRequired,children:ve.a.string.isRequired,csrfToken:ve.a.string.isRequired,initState:ve.a.object.isRequired};var we=ke,Oe=n(29),Se=n.n(Oe),Le=n(7),Ce=n(8),je=n(11),xe=n.n(je),Re=function(){return ue.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},ue.a.createElement("title",null,"translation"),ue.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),ue.a.createElement("path",{d:" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "}))},_e=function(e){var t=e.languages,n=e.onChange;return ue.a.createElement("div",{className:"navbar-dropdown"},t.map((function(e){return ue.a.createElement("a",{className:"navbar-item",key:e.code,onClick:function(){n(e.code)}},e.name)})))};_e.propTypes={onChange:ve.a.func.isRequired,languages:ve.a.array.isRequired};var Te=_e,Ie=[{code:"en",name:"English",data:{language:"Language",popular:"Popular",latest:"Latest",more:"More",about:"About",newColor:"New Color",fbLogin:"Facebook Login",reportIssue:"Report an issue",download:"Download",submit:"Submit",reset:"Reset",return:"Return",profile:"Profile",like:"Like",admin:"Admin",logOut:"Log Out",facebook:"FaceBook",twitter:"Twitter",email:"E-Mail",noColorsToShow:"No colors to display"}},{code:"zh",name:"简体中文",data:{language:"多语言",popular:"最热",latest:"最新",more:"更多",about:"关于",newColor:"创建新颜色",fbLogin:"脸书账号登陆",reportIssue:"报告错误",download:"下载",submit:"添加",reset:"重置",return:"返回",profile:"我的颜色",like:"我的收藏",admin:"管理员",logOut:"注销",facebook:"脸书",twitter:"推特",email:"电邮",noColorsToShow:"没有可以显示的颜色"}},{code:"ja",name:"日本語",data:{language:"言語",popular:"人気のある",latest:"最新",more:"もっと",about:"約",newColor:"色をつくる",fbLogin:"Facebookでログイン",reportIssue:"問題を報告する",download:"ダウンロード",submit:"提出する",reset:"リセット",return:"戻る",profile:"プロフィール",like:"好む",admin:"管理者",logOut:"サインアウト",facebook:"FaceBook",twitter:"さえずり",email:"Eメール",noColorsToShow:"表示する色がありません"}},{code:"ko",name:"한국어",data:{language:"언어",popular:"인기 있는",latest:"최근",more:"더",about:"약",newColor:"몹시 떠들어 대다",fbLogin:"페이스 북 로그인",reportIssue:"보고 문제",download:"다운로드",submit:"제출하다",reset:"다시 놓기",return:"반환",profile:"윤곽",like:"인기 있는 말",admin:"관리자",logOut:"로그 아웃하다",facebook:"페이스 북",twitter:"지저귀다",email:"이메일",noColorsToShow:"표시 할 색상이 없습니다"}},{code:"es",name:"Español",data:{language:"idioma",popular:"popular",latest:"más reciente",more:"Más",about:"acerca de",newColor:"crear nuevo",fbLogin:"cuenta de Facebook",reportIssue:"informe de problema",download:"descargar",submit:"enviar",reset:"Reiniciar",return:"regreso",profile:"perfil",like:"favorita",admin:"administración",logOut:"cerrar sesión",facebook:"Facebook",twitter:"gorjeo",email:"correo electrónico",noColorsToShow:"No hay color para mostrar"}},{code:"ru",name:"Русский",data:{language:"Переводы",popular:"популярный",latest:"недавно",more:"Больше",about:"около",newColor:"Создайте",fbLogin:"Логин в фейсбук",reportIssue:"сообщить о проблемах",download:"скачать",submit:"Отправить",reset:"сброс",return:"вернуть",profile:"профиль",like:"любимый",admin:"админ",logOut:"выйти",facebook:"Facebook",twitter:"щебет",email:"Эл. адрес",noColorsToShow:"Нет цвета для отображения"}}],Ne=Ie.map((function(e){return{code:e.code,name:e.name}})),Pe=Ie.reduce((function(e,t){return e[t.code]=t.data,e}),{}),De=ue.a.createContext();function Ae(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return qe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return qe(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function qe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Me=xe.a.selected,Be=function(e){var t=e.url,n=e.detail,r=e.likeNum,o=e.showVertical,a=e.facebookUrl,i=e.languages,c=e.onLogout,l=e.onRedirect,u=e.onChangeLang,s=e.onChangeCanvasDirection,p=Ae(Object(le.useState)(!1),2),d=p[0],f=p[1],m=Object(le.useContext)(De),g=Boolean(n),b="/popular"===t,v=t in{"/latest":!0,"/":!0},h="/like"===t,y="/new"===t,E=g&&n.get("img"),k=E||"".concat(ge.c,"/icon.png"),w=function(){f(!1)},O=function(){f(!1),window.scrollTo(0,0)};return ue.a.createElement("nav",{className:"navbar is-fixed-top",role:"navigation","aria-label":"main navigation"},ue.a.createElement("div",{className:"navbar-brand"},ue.a.createElement("div",{title:"click to rotate","aria-label":"click to rotate",className:"navbar-item ".concat(xe.a.iconWrapper),onClick:function(){f(!1),s(!o)}},ue.a.createElement("img",{src:k,className:"".concat(E||o?"":xe.a.rotate),alt:"colorpk icon"})),ue.a.createElement("a",{role:"nav toggle btn",className:"navbar-burger burger","aria-label":"nav menu","aria-expanded":"false",onClick:function(){return f((function(e){return!e}))}},ue.a.createElement("span",{"aria-hidden":"true"}),ue.a.createElement("span",{"aria-hidden":"true"}),ue.a.createElement("span",{"aria-hidden":"true"}))),ue.a.createElement("div",{className:"navbar-menu ".concat(d?"is-active":"")},ue.a.createElement("div",{className:"navbar-start"},g?ue.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},ue.a.createElement("a",{className:"navbar-link ".concat(["/like","/portfolio"].includes(t)?Me:"")},n.get("name")),ue.a.createElement("div",{className:"navbar-dropdown"},ue.a.createElement(Ce.Link,{className:"navbar-item",to:"/portfolio",onClick:O},m.profile),ue.a.createElement(Ce.Link,{to:"/like",className:"navbar-item",onClick:O},m.like),n.get("isadmin")&&ue.a.createElement(Ce.Link,{to:"/adminpanel",className:"navbar-item",onClick:O},m.admin))):ue.a.createElement(Ce.Link,{to:"/like",className:"navbar-item ".concat(h?Me:""),onClick:O},m.like,r>0&&" (".concat(r,")")),ue.a.createElement(Ce.Link,{to:"/popular",className:"navbar-item ".concat(b?Me:""),onClick:w},m.popular),ue.a.createElement(Ce.Link,{to:"/latest",className:"navbar-item ".concat(v?Me:""),onClick:w},m.latest),ue.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},ue.a.createElement("a",{className:"navbar-link"},m.more),ue.a.createElement("div",{className:"navbar-dropdown"},ue.a.createElement("a",{className:"navbar-item",href:"//www.colorpk.com"},"ColorPK v2.0"),ue.a.createElement("a",{className:"navbar-item",href:"//www.colorpk.com/about"},m.about),ue.a.createElement("hr",{className:"navbar-divider"}),ue.a.createElement("a",{className:"navbar-item",href:"//github.com/im6/vp/issues"},m.reportIssue))),ue.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},ue.a.createElement("a",{className:"navbar-link"},ue.a.createElement(Re,null),ue.a.createElement("span",{className:xe.a.translationText},m.language)),ue.a.createElement(Te,{languages:i,onChange:u}))),ue.a.createElement("div",{className:"navbar-end"},ue.a.createElement("div",{className:"navbar-item"},ue.a.createElement("div",{className:"buttons"},!y&&ue.a.createElement(Ce.Link,{to:"/new",className:"button is-primary",onClick:O},m.newColor),"  ",g?ue.a.createElement("button",{className:"button is-danger",onClick:function(e){e.preventDefault(),c(),l("/"),w()}},m.logOut):ue.a.createElement("a",{className:"button is-info",href:a},m.fbLogin))))))};Be.propTypes={url:ve.a.string,detail:ve.a.object,facebookUrl:ve.a.string,likeNum:ve.a.number,showVertical:ve.a.bool,languages:ve.a.array.isRequired,onLogout:ve.a.func.isRequired,onRedirect:ve.a.func.isRequired,onChangeLang:ve.a.func.isRequired,onChangeCanvasDirection:ve.a.func.isRequired};var Ue=Be,Fe=Object(Ce.withRouter)(Object(pe.connect)((function(e,t){var n=e.user,r=e.color,o=t.location,a=t.history,i=o.pathname,c=n.get("detail"),l=n.get("facebookUrl"),u=r.get("liked").size,s=r.get("showVertical");return{url:i,detail:c,likeNum:u,languages:Ne,facebookUrl:l,showVertical:s,onRedirect:a.push}}),(function(e){return{onLogout:function(){var t=Object(Le.createAction)("user/logoff");e(t())},onChangeLang:function(t){var n=Object(Le.createAction)("user/setLanguage");e(n(t))},onChangeCanvasDirection:function(t){var n=Object(Le.createAction)("color/setDirection");e(n(t))}}}))(Ue)),We=(n(31),ue.a.memo((function(){return ue.a.createElement("div",{className:"spinContainer"},ue.a.createElement("div",{className:"spinLoader"}))})));function He(e){return(He="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Qe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ve(e,t){return(Ve=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Je(e,t){return!t||"object"!==He(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Ge(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function Ke(e){return(Ke=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ze=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ve(e,t)}(i,e);var t,n,r,o,a=(t=i,function(){var e,n=Ke(t);if(Ge()){var r=Ke(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return Je(this,e)});function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=a.call(this,e)).state={loading:!0},t}return n=i,(r=[{key:"componentDidMount",value:function(){this.setState({loading:!1})}},{key:"render",value:function(){var e=this.state.loading,t=this.props.children;return ue.a.createElement("div",{className:Se.a.container},ue.a.createElement(Fe,null),e?ue.a.createElement(We,null):t)}}])&&Qe(n.prototype,r),o&&Qe(n,o),i}(ue.a.Component);ze.propTypes={children:ve.a.node};var Ye=ze,Xe=Object(pe.connect)((function(e){return{lang:e.user.get("lang")}}))((function(e){var t=e.lang,n=e.children,r=Pe[t]||Pe.en;return ue.a.createElement(De.Provider,{value:r},n)})),$e=n(32),Ze=$e.keys().reduce((function(e,t){return e[t.replace(/\.js$/,"").replace(/^.\//,"")]=$e(t).default,e}),{});function et(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function tt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?et(Object(n),!0).forEach((function(t){nt(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):et(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function nt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var rt=Object(x.v1)().substring(0,8),ot=function(e,t){var n=I(e,!0),r={lang:e.cookies[ge.d],loading:!0};if(n)r=tt({},r,{detail:{name:"loading",isadmin:P(e)}});else{var o=Object(x.v1)();e.session.app={oauthState:o},r=tt({},r,{detail:null,facebookUrl:T(o)})}var a=void 0===e.cookies[ge.b]?ge.a:"1"===e.cookies[ge.b],i=Object(fe.createStore)(Object(fe.combineReducers)(Ze),{user:Object(se.fromJS)(r),color:Object(se.fromJS)({loading:!0,showVertical:a,colorDef:{},liked:{},colorIdAllByDate:[],colorIdAllByLike:[],colorIdByMyOwn:[]})}),c=ue.a.createElement(de.StaticRouter,{location:e.url},ue.a.createElement(pe.Provider,{store:i},ue.a.createElement(Xe,null,ue.a.createElement(Ye,null)))),l=Object(me.renderToString)(c),u=ue.a.createElement(we,{title:"".concat("ColorPK | Your Best Color Picker"),version:rt,style:"".concat(h.g,"main.css"),script:"".concat(h.g,"main.js"),csrfToken:e.csrfToken(),lastBuildDate:"4/19/2020, 8:39:43 PM EST",initState:i.getState()},l),s=Object(me.renderToStaticMarkup)(u);t.status(200),t.header("Access-Control-Allow-Origin","*"),t.send("<!DOCTYPE html>".concat(s))},at=c()();at.set("trust proxy",!0),at.use(a()()),at.use(u.a.json()),at.use(u.a.urlencoded({extended:!1})),at.use(p()()),at.use(L);var it=n(36).default;h.h.forEach((function(e){at.get(e,it)})),at.get("/_ah/:action",(function(e,t){var n=e.params.action;t.json({status:"".concat(n," - ok")})})),at.use((function(){for(var e=void 0,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];j()(n[0],"body._csrf",null)===h.a?(console.log("csrf exception"),n[2]()):H.apply(e,n)})),at.post("/graphql",ce),at.get("/auth/logout",(function(e,t){var n=j()(e,"session.app.dbInfo.name","unknown");console.log("logoff (".concat(n,"), delete session")),delete e.session.app;var r=Object(x.v1)();e.session.app={oauthState:r},t.json({url:T(r)})})),at.get("/auth/:oauth",q),["/","/latest","/popular","/color/:id","/new","/like"].forEach((function(e){at.get(e,ot)})),at.get("/portfolio",(function(e,t,n){I(e)?n():n(401)}),ot),at.get("/adminpanel",(function(e,t,n){P(e)?n():n(403)}),ot),at.use((function(e,t){console.error("Error: 404, ".concat(e.url," not found")),t.status(400).sendFile(F)})),at.use((function(e,t,n,r){console.error("Error: ".concat(e.toString(),", ").concat(t.url)),"POST"===t.method?n.status(400).json({errors:!0}):n.status(400).sendFile(F)})),at.listen(h.f,(function(){return console.log("app (mode: ".concat("production",") is running on: http://localhost:").concat(h.f))})).timeout=5e3,Object(r.exec)("curl ifconfig.me",(function(e,t,n){e?console.error(n):console.log("public IP addr: ".concat(t))}))}]);