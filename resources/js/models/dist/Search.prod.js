"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _axios=_interopRequireDefault(require("axios"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var a=r[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}var Search=function(){function r(e){_classCallCheck(this,r),this.query=e}return _createClass(r,[{key:"getResults",value:function(){var r,t;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat("https://cors-anywhere.herokuapp.com/","https://forkify-api.herokuapp.com/api/search?q=").concat(this.query),e.prev=2,e.next=5,regeneratorRuntime.awrap((0,_axios.default)("".concat(r)));case 5:t=e.sent,this.result=t.data.recipes,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}},null,this,[[2,9]])}}]),r}();exports.default=Search;