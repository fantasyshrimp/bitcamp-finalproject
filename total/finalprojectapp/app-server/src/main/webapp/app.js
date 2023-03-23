"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Header, null),
        React.createElement(Main, null),
        React.createElement(Footer, null)
      );
    }
  }]);

  return Layout;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "header",
        null,
        React.createElement(
          "nav",
          { className: "nav navbar-dark bg-dark navbar-expand-lg" },
          React.createElement(
            "a",
            { className: "nav-link text-light", "aria-current": "page", href: "#" },
            "Artify"
          ),
          React.createElement(
            "a",
            { className: "nav-link text-light", href: "#" },
            "Link"
          ),
          React.createElement(
            "a",
            { className: "nav-link text-light", href: "#" },
            "Link"
          ),
          React.createElement(
            "a",
            { className: "nav-link text-light", href: "#" },
            "log in"
          )
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Main = function (_React$Component3) {
  _inherits(Main, _React$Component3);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "main",
        null,
        React.createElement(
          "div",
          { className: "grid", style: { "--bs-columns": 12 } },
          React.createElement(
            "div",
            null,
            "1"
          ),
          React.createElement(
            "div",
            null,
            "1"
          ),
          React.createElement(
            "div",
            null,
            "1"
          ),
          React.createElement(
            "div",
            null,
            "1"
          ),
          React.createElement(
            "div",
            null,
            "1"
          ),
          React.createElement(
            "div",
            null,
            "1"
          ),
          React.createElement(
            "div",
            null,
            "1"
          ),
          React.createElement(
            "div",
            null,
            "1"
          ),
          React.createElement(
            "div",
            null,
            "1"
          ),
          React.createElement(
            "div",
            null,
            "1"
          ),
          React.createElement(
            "div",
            null,
            "1"
          ),
          React.createElement(
            "div",
            null,
            "1"
          )
        )
      );
    }
  }]);

  return Main;
}(React.Component);

var Footer = function (_React$Component4) {
  _inherits(Footer, _React$Component4);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "footer",
        { className: "bg-dark text-light d-flex justify-content-center" },
        React.createElement(
          "div",
          { className: "d-flex align-items-center" },
          "created by Someone"
        )
      );
    }
  }]);

  return Footer;
}(React.Component);

var root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(React.createElement(Layout));