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
              {/* <a  href="#" onClick={}>
                로그인
              </a> */}
              <LoginControl />
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
                Try Artify <i className="bi-box"></i>
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

function LoginButton(props) {
  return (
    <a
      onClick={props.onClick}
      className="nav-link text-light text-end"
      data-bs-toggle="modal"
      href="#exampleModalToggle"
      role="button"
    >
      로그인
    </a>
  );
}

function LogoutButton(props) {
  return (
    <a
      onClick={props.onClick}
      className="nav-link text-light text-end"
      href="#"
    >
      로그아웃
    </a>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    // this.setState({ isLoggedIn: true });
    return (
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                Modal 1
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Show a second modal and hide this one with the button below.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                Open second modal
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        {isLoggedIn ? (
          <LogoutButton onClick={this.handleLogoutClick} />
        ) : (
          <LoginButton onClick={this.handleLoginClick} />
        )}
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(React.createElement(Layout));
