"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Layout() {
  return React.createElement(
    "div",
    null,
    React.createElement(Header, null),
    React.createElement(Main, null),
    React.createElement(Footer, null)
  );
}

function Header() {
  return React.createElement(
    "header",
    null,
    React.createElement(
      "nav",
      { className: "nav bg-secondary navbar-expand-lg" },
      React.createElement(
        "div",
        { className: "container-fluid px-3" },
        React.createElement(
          "div",
          {
            className: "row gx-3 bg-secondary align-items-center",
            style: { height: "60px" }
          },
          React.createElement(
            "div",
            { className: "col-2" },
            React.createElement(
              "a",
              { className: "nav-link text-light", "aria-current": "page", href: "#" },
              "Artify"
            )
          ),
          React.createElement(
            "div",
            { className: "col" },
            React.createElement(
              "a",
              { className: "nav-link text-light", href: "#" },
              "\uAC24\uB7EC\uB9AC"
            )
          ),
          React.createElement(
            "div",
            { className: "col" },
            React.createElement(
              "a",
              { className: "nav-link text-light", href: "#" },
              "\uAE00\uC4F0\uAE30"
            )
          ),
          React.createElement(
            "div",
            { className: "col" },
            " ",
            React.createElement(
              "a",
              { className: "nav-link text-light", href: "#" },
              "\uACE0\uAC1D\uC13C\uD130"
            )
          ),
          React.createElement("div", { className: "col" }),
          React.createElement("div", { className: "col" }),
          React.createElement("div", { className: "col" }),
          React.createElement("div", { className: "col" }),
          React.createElement("div", { className: "col" }),
          React.createElement("div", { className: "col" }),
          React.createElement(
            "div",
            { className: "col" },
            React.createElement(LoginControl, null)
          )
        )
      )
    )
  );
}

function Main() {
  return React.createElement(
    "main",
    null,
    React.createElement(
      "div",
      { className: "container-fluid px-3 bg-dark" },
      React.createElement(
        "div",
        {
          className: "row gx-3 bg-dark align-items-end",
          style: { height: "400px" }
        },
        React.createElement("div", { className: "col-2" }),
        React.createElement(
          "div",
          { className: "col-4" },
          React.createElement(
            "div",
            { className: "text-light", style: { fontSize: "180px" } },
            "Artify"
          )
        ),
        React.createElement("div", { className: "col-6" })
      ),
      React.createElement(
        "div",
        { className: "row gx-3", style: { height: "400px" } },
        React.createElement(
          "div",
          { className: "col" },
          React.createElement("div", { className: "" })
        ),
        React.createElement(
          "div",
          { className: "col" },
          React.createElement("div", { className: "" })
        ),
        React.createElement(
          "div",
          { className: "col" },
          React.createElement(
            "div",
            { className: "" },
            React.createElement(
              "a",
              { className: "border text-light p-1", href: "#" },
              "Try Artify ",
              React.createElement("i", { className: "bi-box" })
            )
          )
        ),
        React.createElement(
          "div",
          { className: "col" },
          React.createElement("div", { className: "" })
        ),
        React.createElement(
          "div",
          { className: "col" },
          React.createElement("div", { className: "" })
        ),
        React.createElement(
          "div",
          { className: "col" },
          React.createElement("div", { className: "" })
        ),
        React.createElement(
          "div",
          { className: "col" },
          React.createElement("div", { className: "" })
        ),
        React.createElement(
          "div",
          { className: "col" },
          React.createElement("div", { className: "" })
        ),
        React.createElement(
          "div",
          { className: "col" },
          React.createElement("div", { className: "" })
        ),
        React.createElement(
          "div",
          { className: "col" },
          React.createElement("div", { className: "" })
        ),
        React.createElement(
          "div",
          { className: "col" },
          React.createElement("div", { className: "" })
        ),
        React.createElement(
          "div",
          { className: "col" },
          React.createElement("div", { className: "" })
        )
      )
    )
  );
}

function Footer() {
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

function LoginButton(props) {
  return React.createElement(
    "a",
    {
      onClick: props.onClick,
      className: "nav-link text-light text-end",
      "data-bs-toggle": "modal",
      href: "#exampleModalToggle",
      role: "button"
    },
    "\uB85C\uADF8\uC778"
  );
}

function LogoutButton(props) {
  return React.createElement(
    "a",
    {
      onClick: props.onClick,
      className: "nav-link text-light text-end",
      href: "#"
    },
    "\uB85C\uADF8\uC544\uC6C3"
  );
}

var LoginControl = function (_React$Component) {
  _inherits(LoginControl, _React$Component);

  function LoginControl(props) {
    _classCallCheck(this, LoginControl);

    var _this = _possibleConstructorReturn(this, (LoginControl.__proto__ || Object.getPrototypeOf(LoginControl)).call(this, props));

    _this.state = { isLoggedIn: false };
    _this.handleLoginClick = _this.handleLoginClick.bind(_this);
    _this.handleLogoutClick = _this.handleLogoutClick.bind(_this);
    return _this;
  }

  _createClass(LoginControl, [{
    key: "handleLoginClick",
    value: function handleLoginClick() {
      // this.setState({ isLoggedIn: true });
      return React.createElement(
        "div",
        {
          className: "modal fade",
          id: "exampleModalToggle",
          "aria-hidden": "true",
          "aria-labelledby": "exampleModalToggleLabel",
          tabindex: "-1"
        },
        React.createElement(
          "div",
          { className: "modal-dialog modal-dialog-centered" },
          React.createElement(
            "div",
            { className: "modal-content" },
            React.createElement(
              "div",
              { className: "modal-header" },
              React.createElement(
                "h1",
                { className: "modal-title fs-5", id: "exampleModalToggleLabel" },
                "Modal 1"
              ),
              React.createElement("button", {
                type: "button",
                className: "btn-close",
                "data-bs-dismiss": "modal",
                "aria-label": "Close"
              })
            ),
            React.createElement(
              "div",
              { className: "modal-body" },
              "Show a second modal and hide this one with the button below."
            ),
            React.createElement(
              "div",
              { className: "modal-footer" },
              React.createElement(
                "button",
                {
                  className: "btn btn-primary",
                  "data-bs-target": "#exampleModalToggle2",
                  "data-bs-toggle": "modal"
                },
                "Open second modal"
              )
            )
          )
        )
      );
    }
  }, {
    key: "handleLogoutClick",
    value: function handleLogoutClick() {
      this.setState({ isLoggedIn: false });
    }
  }, {
    key: "render",
    value: function render() {
      var isLoggedIn = this.state.isLoggedIn;
      return React.createElement(
        "div",
        null,
        isLoggedIn ? React.createElement(LogoutButton, { onClick: this.handleLogoutClick }) : React.createElement(LoginButton, { onClick: this.handleLoginClick })
      );
    }
  }]);

  return LoginControl;
}(React.Component);

var root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(React.createElement(Layout));