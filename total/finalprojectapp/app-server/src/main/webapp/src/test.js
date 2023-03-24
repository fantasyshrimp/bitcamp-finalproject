function ex() {
  return (
    <div class="container text-center text-light">
      <div class="row g-5">
        <div class="col border">col</div>
        <div class="col border">col</div>
        <div class="col border">col</div>
        <div class="col border">col</div>
      </div>
      <div class="row">
        <div class="col-8 border">col-8</div>
        <div class="col-4 border">col-4</div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(React.createElement(ex));
