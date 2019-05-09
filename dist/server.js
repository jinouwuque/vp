!function(n){var t={};function r(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=n,r.c=t,r.d=function(e,o,n){r.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(o,e){if(1&e&&(o=r(o)),8&e)return o;if(4&e&&"object"==typeof o&&o&&o.__esModule)return o;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:o}),2&e&&"string"!=typeof o)for(var t in o)r.d(n,t,function(e){return o[e]}.bind(null,t));return n},r.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(o,"a",o),o},r.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},r.p="/",r(r.s=14)}([function(e,o,n){"use strict";n.d(o,"c",function(){return i}),n.d(o,"b",function(){return s}),n.d(o,"g",function(){return c}),n.d(o,"d",function(){return a}),n.d(o,"a",function(){return u}),n.d(o,"f",function(){return l}),n.d(o,"h",function(){return d}),n.d(o,"e",function(){return p}),n.d(o,"i",function(){return f});var t=process.env,r=t.oauthRedirectDomin,i=t.fbAppSecret,s=t.fbAppKey,c=t.PORT,a=!1,u="https://graph.facebook.com/v3.3",l="localhost",d=t.sessionSecret||"bigAndHUgeSecret",p="".concat(a?"http://localhost:".concat(c):r,"/api/login/fb"),f=a?"local":"dist"},function(e,o,n){"use strict";n.d(o,"b",function(){return t}),n.d(o,"a",function(){return r});var t=function(e){return{error:!1,result:e}},r=function(e){return{error:!0,result:e}}},function(e,o,n){"use strict";n.d(o,"a",function(){return c});var t=n(3),r=n.n(t),i=process.env,s=r.a.createPool({connectionLimit:8,multipleStatements:!1,host:i.SQL_HOST,port:i.SQL_PORT,user:i.SQL_USERNAME,password:i.SQL_PASSWORD,database:i.SQL_DATABASE}),c=function(e){return new Promise(function(t,r){s.query(e,function(e,o,n){e?(console.error(e),r(e)):t(o)})})}},function(e,o){e.exports=require("mysql")},function(e,o){e.exports=require("path")},function(e,o){e.exports=require("express")},function(e,o){e.exports=require("body-parser")},function(e,o){e.exports=require("express-session")},function(e,o){e.exports=require("uuid")},function(e,o){e.exports=require("axios")},function(e,o){e.exports=require("cookie-parser")},function(e,o){e.exports=require("csurf")},function(e,o){e.exports=require("helmet")},function(e,o){e.exports=require("express-mysql-session")},function(e,o,n){e.exports=n(17)},function(e,o,n){"use strict";n.r(o),n.d(o,"isAuth",function(){return t}),n.d(o,"isAdmin",function(){return r});var t=function(e,o,n){try{e.session.app.isAuth?n():n(401)}catch(e){n(401)}},r=function(e,o,n){try{e.session.app.dbInfo.isAdmin?n():n(403)}catch(e){n(403)}}},function(e,o,n){"use strict";n.r(o),n.d(o,"getAnonymousColor",function(){return t}),n.d(o,"postDecideColor",function(){return r});var s=n(2),c=n(1),t=function(e,o,n){Object(s.a)("SELECT * FROM colorpk_color a WHERE a.display = 1").then(function(e){o.json(Object(c.b)(e))},function(e){o.json(Object(c.a)(e))})},r=function(e,o,n){var t=e.body.display,r=e.body.id,i=null;"number"==typeof r?(i=t?"DELETE FROM colorpk_color WHERE id = '".concat(r,"'"):"UPDATE colorpk_color SET `display` = 0 WHERE id = ".concat(r),Object(s.a)(i).then(function(e){o.json(Object(c.b)(e))},function(e){o.json(Object(c.a)(e))})):o.json({error:!0})}},function(e,o,n){"use strict";n.r(o);var t=n(5),r=n.n(t),i=n(6),s=n.n(i),c=n(10),a=n.n(c),u=n(7),l=n.n(u),d=n(11),p=n.n(d),f=n(12),b=n.n(f),h=n(13),j=n.n(h),O=n(5).Router(),g=n(15),m=n(18),E=n(16);O.get("/login/:oauth",m.oauthLogin),O.post("/getUserInfo",m.getUserInfo),O.post("/getInitAuth",m.getInitAuth),O.post("/logoff",m.logoff),O.post("/initColorList",m.initColorList),O.post("/initColorPortfolio",g.isAuth,m.initColorPortfolio),O.post("/initColorLike",g.isAuth,m.initColorLike),O.post("/getColorType",m.getColorType),O.post("/toggleLike",m.toggleLike),O.post("/addNewColor",m.addNewColor),O.post("/getAnonymousColor",g.isAuth,g.isAdmin,E.getAnonymousColor),O.post("/postDecideColor",g.isAuth,g.isAdmin,E.postDecideColor);var k=O,v=n(4),A=n.n(v),_=n(0),L=["","auth","portfolio","popular","latest","like","about","color","new","extract","adminpanel"],y=["main.js","newColor.js","adminPanel.js"],S=process.env.PWD,R=process.env.PWD,T=r()(),I={secret:_.h,resave:!1,saveUninitialized:!0,cookie:{secure:!1}};if(!_.d){var U=j()(l.a);I.store=new U({host:process.env.SQL_HOST,port:process.env.SQL_PORT,user:process.env.SQL_USERNAME,password:process.env.SQL_PASSWORD,database:process.env.SQL_DATABASE,checkExpirationInterval:144e5,expiration:432e5,schema:{tableName:"old_sessions",columnNames:{session_id:"session_id",expires:"expires",data:"data"}}}),console.log("session is now using mysql")}T.set("x-powered-by",!1),T.use(b()()),T.use(s.a.json()),T.use(s.a.urlencoded({extended:!1})),T.use(a()()),T.use(l()(I)),_.d||T.use(p()()),T.use("/api",k),T.get("/*",function(e,o,n){var t=e.url.split("/");if(-1<L.indexOf(t[1])){_.d?console.log("".concat(e.method,": ").concat(e.originalUrl)):o.cookie("_csrf",e.csrfToken());var r=A.a.join(S,"./".concat(_.i,"/public/index.html"));o.sendFile(r)}else n()},function(e,o,n){var t=e.url.split("/"),r=A.a.resolve(S,"./".concat(_.i,"/public/").concat(t[1]));y.includes(t[1])?o.sendFile(r):n()}),T.use(function(e,o,n,t){403===e?(console.error("=====  Deny Admin  ====="),n.status(403).json(403)):404===e?(console.error("=====  Auth Failed  ====="),n.status(404).json(404)):(console.error("=====  Internal Error  ====="),console.error(e),n.status(500).json(500))}),T.use(function(e,o,n){console.error("NOT FOUND! url: ",e.url),o.status(404).sendFile(A.a.resolve(R,"./dist/public/404.html"))}),T.listen(_.g,_.f,function(){console.log("".concat("production"," is running: http://").concat(_.f,":").concat(_.g))}).timeout=6e4},function(e,o,n){"use strict";n.r(o);var t=n(3),r=n(8),s=n.n(r),u=n(2),l=n(1),i=n(0),c=n(9),a=n.n(c);n.d(o,"getInitAuth",function(){return p}),n.d(o,"getUserInfo",function(){return f}),n.d(o,"oauthLogin",function(){return b}),n.d(o,"logoff",function(){return h}),n.d(o,"initColorList",function(){return j}),n.d(o,"initColorPortfolio",function(){return O}),n.d(o,"initColorLike",function(){return g}),n.d(o,"getColorType",function(){return m}),n.d(o,"toggleLike",function(){return E}),n.d(o,"addNewColor",function(){return k});var d={createFacebookLink:function(e){return"https://www.facebook.com/v2.8/dialog/oauth?client_id="+i.b+"&response_type=code&state="+e+"&redirect_uri="+i.e},getOauthQsObj:function(e,o){return{client_id:i.b,client_secret:i.c,code:o.code,redirect_uri:i.e}},checkUserInfo:function(e,o){var n="SELECT * FROM colorpk_user WHERE oauth = '".concat(e,"' AND oauthid = ").concat(o);return Object(u.a)(n)},createNewUser:function(e,o,n){var t="INSERT INTO colorpk_user (oauth, name, oauthid, lastlogin) VALUES ('".concat(e,"', '").concat(o,"', '").concat(n,"', NOW())");return Object(u.a)(t)},addUserLike:function(e,o){var n="INSERT INTO colorpk_userlike (user_id, color_id) VALUES ('".concat(e,"', '").concat(Object(t.escape)(o),"')");return Object(u.a)(n)},removeUserLike:function(e,o){var n="DELETE FROM colorpk_userlike WHERE user_id= '".concat(e,"' AND color_id = '").concat(Object(t.escape)(o),"'");return Object(u.a)(n)},getUserLike:function(e){var o="SELECT color_id FROM colorpk_userlike WHERE user_id= '".concat(e,"'");return Object(u.a)(o)},updateUserLoginDate:function(e){var o="UPDATE colorpk_user SET lastlogin=NOW() WHERE id=".concat(e);return Object(u.a)(o)},convertOauthIntoLocalDB:function(e,n,t,r){var i=[],s=null,c=null;switch(e){case"wb":s=t.profile_image_url,c=t.name;break;case"fb":s=t.picture.data.url,c=t.name;break;case"gg":s=t.image.url,c=t.displayName}d.checkUserInfo(e,t.id).then(function(o){o.length<1?d.createNewUser(e,c,t.id).then(function(e){n.app.dbInfo={id:e.insertId,name:c,isAdmin:!1},r.json({isAuth:!0,like:i,profile:{id:t.id,name:c,img:s,isAdmin:!1}})},function(){console.error("create user error")}):(n.app.dbInfo={id:o[0].id,name:c,isAdmin:o[0].isadmin||!1},d.updateUserLoginDate(o[0].id),d.getUserLike(o[0].id).then(function(e){i=e.map(function(e){return e.color_id}),r.json({isAuth:!0,like:i,profile:{id:o[0].id,name:c,img:s,isAdmin:n.app.dbInfo.isAdmin}})}))})}},p=function(e,o,n){var t=e.session;if(t.app&&t.app.isAuth)o.json({isAuth:!0});else{var r=s.a.v1(),i={isAuth:!1,facebookUrl:d.createFacebookLink(r)};e.session.app&&e.session.app.alert&&(i.alert=e.session.app.alert),e.session.app={isAuth:!1,oauthState:r},o.json(i)}},f=function(e,o,n){var t=e.session;if(t.app&&t.app.isAuth){console.log("already signing in..."),function(e){return a()({baseURL:i.a,method:"get",url:"/me",params:e})}({access_token:t.app.tokenInfo.access_token,fields:"id,name,picture"}).then(function(e){d.convertOauthIntoLocalDB(t.app.oauth,t,e.data,o)},function(){o.json({isAuth:!1})})}else{var r=s.a.v1();e.session.app={isAuth:!1,oauthState:r},o.json({isAuth:!1})}},b=function(o,n,e){var t=o.query,r=o.params.oauth;t.code&&t.state&&o.session.app&&t.state===o.session.app.oauthState?(console.log("redirected by ".concat(r," auth...")),function(e){return a()({baseURL:i.a,method:"get",url:"/oauth/access_token",params:e})}(d.getOauthQsObj(r,t)).then(function(e){(e=e.data).access_token?(o.session.app={oauth:r,isAuth:!0,tokenInfo:e},n.redirect("/")):n.redirect("/auth")})):(console.log("inconsistant session : redirect fail:"),o.session.app={isAuth:!1,alert:{type:0,detail:"Sorry, something error, please try again."}},n.redirect("/auth"))},h=function(e,o,n){console.log("logoff and delete session"),delete e.session.app,o.json({error:!1})},j=function(e,o,n){Object(u.a)("SELECT a.* FROM colorpk_color a WHERE a.display=0 ORDER BY `id` DESC").then(function(e){o.json(Object(l.b)(e))},function(e){o.json(Object(l.a)(e))})},O=function(e,o,n){var t="SELECT a.*, false as `liked` FROM colorpk_color a WHERE userid = '".concat(e.session.app.dbInfo.id,"' ");Object(u.a)(t).then(function(e){o.json(Object(l.b)(e))},function(e){o.json(Object(l.a)(e))})},g=function(e,t,o){var n="SELECT a.color_id FROM colorpk_userlike a WHERE a.user_id = '".concat(e.session.app.dbInfo.id,"' ");Object(u.a)(n).then(function(e){if(e.length<1)t.json(Object(l.b)([]));else{var o=e.map(function(e,o){return e.color_id}),n="SELECT a.*, false as `liked` FROM colorpk_color a WHERE a.id IN (".concat(o.join(","),") ");Object(u.a)(n).then(function(e){t.json(Object(l.b)(e))},function(e){t.json(Object(l.a)(e))})}},function(e){t.json(Object(l.a)(e))})},m=function(e,o,n){Object(u.a)("SELECT a.id AS `key`, a.name AS `value` FROM colorpk_colortype a").then(function(e){o.json(Object(l.b)(e))},function(e){o.json(Object(l.a)(e))})},E=function(e,o,n){var t="UPDATE colorpk_color SET `like` = `like` ".concat(e.body.willLike?"+":"-","  1 WHERE id = ").concat(e.body.id);Object(u.a)(t).then(function(){o.json(Object(l.b)(1))},function(){o.json(Object(l.a)(0))}),e.session.app&&e.session.app.isAuth&&(e.body.willLike?d.addUserLike(e.session.app.dbInfo.id,e.body.id):d.removeUserLike(e.session.app.dbInfo.id,e.body.id))},k=function(o,n,e){var t=o.session.app&&o.session.app.isAuth,r=t&&o.session.app.dbInfo.name?"'".concat(o.session.app.dbInfo.name,"'"):"NULL",i=t&&o.session.app.dbInfo.id?"".concat(o.session.app.dbInfo.id):"NULL",s="NULL"==i?1:0,c=(10*Math.random()).toFixed();if(27===o.body.color.length){var a="INSERT INTO colorpk_color (`like`, color, userid, username, colortype, display, createdate) VALUES (".concat(c,", '").concat(o.body.color,"', ").concat(i,", ").concat(r,", '").concat(o.body.colorType,"', ").concat(s,", NOW())");Object(u.a)(a).then(function(e){n.json(Object(l.b)({id:e.insertId,name:t?o.session.app.dbInfo.name:null}))},function(e){n.json(Object(l.a)(e))})}else n.json(Object(l.a)("invalid json"))}}]);