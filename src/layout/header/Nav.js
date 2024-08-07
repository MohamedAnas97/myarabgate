import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import Menu from "./Menu";
const Nav = ({ singleMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="main-menu navbar-expand-lg">
      <Accordion>
        <div className="navbar-header ">
          <div className="mobile-logo ">
            <Link legacyBehavior href="/">
              <a>
                <img
                  src="assets/images/arab/brand.png"
                  alt="Logo"
                  title="Logo"
                  className="main-logo"
                />
              </a>
            </Link>
          </div>
          {/* Toggle Button */}
          <Accordion.Toggle
            as={"button"}
            className="navbar-toggle"
            eventKey="navbar-collapse"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <>
                <span className="icon-close">
                  <span className="bar"></span>
                  <span className="bar"></span>
                </span>
              </>
            ) : (
              <>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </>
            )}
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          eventKey="navbar-collapse"
          className="navbar-collapse clearfix"
        >
          <Menu singleMenu={singleMenu} />
        </Accordion.Collapse>
      </Accordion>
    </nav>
  );
};
export default Nav;
