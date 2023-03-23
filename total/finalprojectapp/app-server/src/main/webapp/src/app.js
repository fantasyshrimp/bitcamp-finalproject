"use strict";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="nav navbar-dark bg-dark navbar-expand-lg">
          <a className="nav-link text-light" aria-current="page" href="#">
            Artify
          </a>
          <a className="nav-link text-light" href="#">
            Link
          </a>
          <a className="nav-link text-light" href="#">
            Link
          </a>
          <a className="nav-link text-light" href="#">
            log in
          </a>
        </nav>
      </header>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <main>
        <div className="grid" style={{ "--bs-columns": 12 }}>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </main>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-dark text-light d-flex justify-content-center">
        <div className="d-flex align-items-center">created by Someone</div>
      </footer>
    );
  }
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(React.createElement(Layout));
