"use strict";

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
            React.createElement(
              "a",
              { className: "nav-link text-light text-end", href: "#" },
              "\uB85C\uADF8\uC778"
            )
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
              React.createElement("i", { "class": "bi-box" })
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

var root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(React.createElement(Layout));