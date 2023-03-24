function ex() {
  return React.createElement(
    "div",
    { "class": "container text-center text-light" },
    React.createElement(
      "div",
      { "class": "row g-5" },
      React.createElement(
        "div",
        { "class": "col border" },
        "col"
      ),
      React.createElement(
        "div",
        { "class": "col border" },
        "col"
      ),
      React.createElement(
        "div",
        { "class": "col border" },
        "col"
      ),
      React.createElement(
        "div",
        { "class": "col border" },
        "col"
      )
    ),
    React.createElement(
      "div",
      { "class": "row" },
      React.createElement(
        "div",
        { "class": "col-8 border" },
        "col-8"
      ),
      React.createElement(
        "div",
        { "class": "col-4 border" },
        "col-4"
      )
    )
  );
}

var root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(React.createElement(ex));