"use strict";

function Layout() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

function Header() {
  return (
    <header>
      <nav className="nav bg-secondary navbar-expand-lg">
        <div className="container-fluid px-3">
          <div
            className="row gx-3 bg-secondary align-items-center"
            style={{ height: "60px" }}
          >
            <div className="col-2">
              <a className="nav-link text-light" aria-current="page" href="#">
                Artify
              </a>
            </div>
            <div className="col">
              <a className="nav-link text-light" href="#">
                갤러리
              </a>
            </div>
            <div className="col">
              <a className="nav-link text-light" href="#">
                글쓰기
              </a>
            </div>
            <div className="col">
              {" "}
              <a className="nav-link text-light" href="#">
                고객센터
              </a>
            </div>
            <div className="col"></div>

            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col">
              <a className="nav-link text-light text-end" href="#">
                로그인
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

function Main() {
  return (
    <main>
      <div className="container-fluid px-3 bg-dark">
        <div
          className="row gx-3 bg-dark align-items-end"
          style={{ height: "400px" }}
        >
          <div className="col-2"></div>
          <div className="col-4">
            <div className="text-light" style={{ fontSize: "180px" }}>
              Artify
            </div>
          </div>
          <div className="col-6"></div>
        </div>

        <div className="row gx-3" style={{ height: "400px" }}>
          <div className="col">
            <div className=""></div>
          </div>
          <div className="col">
            <div className=""></div>
          </div>
          <div className="col">
            <div className="">
              <a className="border text-light p-1" href="#">
                Try Artify <i class="bi-box"></i>
              </a>
            </div>
          </div>
          <div className="col">
            <div className=""></div>
          </div>
          <div className="col">
            <div className=""></div>
          </div>
          <div className="col">
            <div className=""></div>
          </div>
          <div className="col">
            <div className=""></div>
          </div>
          <div className="col">
            <div className=""></div>
          </div>
          <div className="col">
            <div className=""></div>
          </div>
          <div className="col">
            <div className=""></div>
          </div>
          <div className="col">
            <div className=""></div>
          </div>
          <div className="col">
            <div className=""></div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer className="bg-dark text-light d-flex justify-content-center">
      <div className="d-flex align-items-center">created by Someone</div>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(React.createElement(Layout));
