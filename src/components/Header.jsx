import Logo from "./Logo";

const Header = () => {
  return (
    <header className="py-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center">
              <Logo />
              <nav>
                <ul className="list-unstyled d-flex">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Movies</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
