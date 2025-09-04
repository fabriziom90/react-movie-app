import Logo from "./Logo";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center">
              <Logo>
                <h2 className="text-white">Boolean Videoteca</h2>
              </Logo>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
