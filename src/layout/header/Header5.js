import Link from "next/link";
import Nav from "./Nav";
import NavSearch from "./NavSearch";

const Header5 = ({ singleMenu }) => {
  return (
    <header className="main-header menu-absolute header-two">
      <div className="header-top">
        <div className="container container-1620">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <ul className="top-left">
                <Link href="tel:+971585443090"><li>
                  <i className="far fa-phone-alt" /> +971 585443090
                </li>
                </Link>
              </ul>
            </div>
            <div className="col-lg-5">
              <div className="top-right">
                
                <div className="social-style-two">
                  <a href="https://www.facebook.com/agarabgate/" target="_blank">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="https://www.instagram.com/ag_arabgate" target="_blank">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="https://www.youtube.com/channel/UCvwyj0zLeK3IlQ407MEvWuw" target="_blank">
                    <i className="fab fa-youtube" />
                  </a>
                  <a href="https://www.tiktok.com/@arabgate" target="_blank">
                    <i className="fab fa-tiktok" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container container-1620 clearfix">
          <div className="header-inner rpy-10 rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link legacyBehavior href="/">
                  <a>
                    <img
                      src="assets/images/arab/tech3.png"
                      alt="Logo"
                      title="Logo"
                      className="main-logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer ms-lg-auto clearfix">
              {/* Main Menu */}
              <Nav singleMenu={singleMenu} />
              {/* Main Menu End*/}
            </div>
           
            <div className="menu-btns">
              {/* menu sidbar */}
              <div className="menu-sidebar">
                <button>
                  <img
                    src="assets/images/arab/chat.png"
                    alt="Toggler"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};
export default Header5;
