exports.ids=[0],exports.modules={44:function(e,t){e.exports={container:"_1gCIK",oneRow:"_2zqqN"}},45:function(e,t){e.exports={oneBar:"k3ZvQ"}},50:function(e,t,n){"use strict";n.r(t);var o=n(5),r=n(7),i=n(0),a=n.n(i),c=n(1),u=n.n(c),l=n(44),s=n.n(l),p=n(45),f=n.n(p),d=function(e){var t=e.value;return a.a.createElement("div",null,t.split("#").map((function(e,t){return a.a.createElement("div",{key:t,className:f.a.oneBar,style:{backgroundColor:"#"+e}})})))};d.propTypes={value:u.a.string.isRequired};var b=d;function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=function(e){function t(){return y(this,t),h(this,g(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.props.onInit()}},{key:"onApprove",value:function(e){this.props.onApprove(e.id)}},{key:"onDelete",value:function(e){this.props.onDelete(e.id)}},{key:"render",value:function(){var e=this,t=this.props.loading,n=this.props.list.toJS();return a.a.createElement("div",{className:s.a.container},a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null),!t&&0===n.length&&a.a.createElement("h1",null,"No colors to decide."),n.map((function(t){return a.a.createElement("div",{key:t.id,className:s.a.oneRow},a.a.createElement(b,{value:t.color}),"    ",a.a.createElement("button",{className:"button is-success is-small",onClick:e.onApprove.bind(e,t)},"Approve"),"  ",a.a.createElement("button",{className:"button is-danger is-small",onClick:e.onDelete.bind(e,t)},"Delete"))})))}}])&&v(n.prototype,o),r&&v(n,r),t}(a.a.PureComponent);O.propTypes={list:u.a.object.isRequired,loading:u.a.bool,onInit:u.a.func.isRequired,onDelete:u.a.func.isRequired,onApprove:u.a.func.isRequired};var k=O;t.default=Object(r.connect)((function(e){var t=e.admin;return{list:t.get("list"),loading:t.get("loading")}}),(function(e){return{onInit:function(){var t=Object(o.createAction)("admin/getList");e(t())},onApprove:function(t){var n=Object(o.createAction)("admin/decideColor");e(n({id:t,willLike:!0}))},onDelete:function(t){var n=Object(o.createAction)("admin/decideColor");e(n({id:t,willLike:!1}))}}}))(k)}};