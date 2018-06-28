webpackJsonp([0],{

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.state = {
      name: 'Joe',
      health: '100',
      level: 1,
      lowLevelClass: 'danger-red'
    };
    _this.clickedGirl = _this.clickedGirl.bind(_this);
    return _this;
  }

  _createClass(Layout, [{
    key: 'clickedGirl',
    value: function clickedGirl() {
      this.setState({
        health: this.state.health - 25
      }, function () {
        console.log('CLICKED GIRL HEALTH IS NOW' + this.state.health);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'parent' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Header, null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'blue-bg ' + (this.state.health < 55 ? this.state.lowLevelClass : '') },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'user-info' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h3',
              null,
              'Name: ',
              this.state.name
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h3',
              null,
              'Health: ',
              this.state.health
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h3',
              null,
              'Level: ',
              this.state.level
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(GirlImage, null)
        )
      );
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var GirlImage = function (_Component2) {
  _inherits(GirlImage, _Component2);

  function GirlImage() {
    _classCallCheck(this, GirlImage);

    var _this2 = _possibleConstructorReturn(this, (GirlImage.__proto__ || Object.getPrototypeOf(GirlImage)).call(this));

    _this2.state = {};
    return _this2;
  }

  _createClass(GirlImage, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'GirlImageComp' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/img/bape.png', alt: 'girl wearing bape', onClick: this.clickedGirl })
      );
    }
  }]);

  return GirlImage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'header',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'ul',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        null,
        'Home'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        null,
        'About'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        null,
        'Contact'
      )
    )
  );
};

var app = document.getElementById('app');

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Layout, null), app);

/***/ })

},[98]);