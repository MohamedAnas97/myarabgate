import Link from "next/link";

import { Fragment, useState } from "react";
const Menu = ({ singleMenu }) => {
  return (
    <Fragment>
      {singleMenu ? (
        <SingleMenu />
      ) : (
        <Fragment>
          <DaskTopMenu />
          <MobileMenu />
        </Fragment>
      )}
    </Fragment>
  );
};
export default Menu;


const DaskTopMenu = () => {
  return (
    <ul className="navigation d-none d-lg-flex desktop-menu">
     
      <li className="dropdown">
        <Link href="/our-services">
          Our Services
        </Link>
        <ul>
          <li>
            <Link legacyBehavior href="/interior-fitout">
            Interior Fit-Out and Renovation
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/electrical-services">
            Electrical Services
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/plumbing-services">
            Plumbing Services
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/ac-maintenance-repair">
            AC Maintenance and Repair
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/painting-epoxy">
            Painting and Epoxy
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/cctv-security-system">
            CCTV Security Systems
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/digital-display-signages">
            Digital Displays & Signages
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/display-fixtures-retail-exhibitions">
            Display Fixtures for Retail & Exhibitions
            </Link>
          </li>
        </ul>
        <div className="dropdown-btn">
          <span className="far fa-plus" />
        </div>
      </li>
      <li>
        <Link legacyBehavior href="/about">
          About Us
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="/contact-us">
          Contact Us
        </Link>
      </li>
    </ul>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <ul className="navigation d-block d-lg-none mobile-menu">
      <li className="dropdown">
        <a href="/our-services" className="font-fam">Our Services</a>
        <ul style={activeLi("Services")}>
        <li className="font-fam">
            <Link legacyBehavior href="/interior-fitout">
            Interior Fit-Out and Renovation
            </Link>
          </li>
          <li className="font-fam">
            <Link legacyBehavior href="/electrical-services">
            Electrical Services
            </Link>
          </li>
          <li className="font-fam">
            <Link legacyBehavior href="/plumbing-services">
            Plumbing Services
            </Link>
          </li>
          <li className="font-fam">
            <Link legacyBehavior href="/ac-maintenance-repair">
            AC Maintenance and Repair
            </Link>
          </li>
          <li className="font-fam">
            <Link legacyBehavior href="/painting-epoxy">
            Painting and Epoxy
            </Link>
          </li>
          <li className="font-fam">
            <Link legacyBehavior href="/cctv-security-system">
            CCTV Security Systems
            </Link>
          </li>
          <li className="font-fam">
            <Link legacyBehavior href="/digital-display-signages">
            Digital Displays & Signages
            </Link>
          </li>
          <li className="font-fam">
            <Link legacyBehavior href="/display-fixtures-retail-exhibitions">
            Display Fixtures for Retail & Exhibitions
            </Link>
          </li>
        </ul>
        <div className="dropdown-btn" onClick={() => activeMenuSet("Services")}>
          <span className="far fa-plus" />
        </div>
      </li>
      <li className="font-fam">
        <Link legacyBehavior href="/about">
          About Us
        </Link>
      </li>
      <li className="dropdown font-fam">
        <a href="/contact-us">Contact Us</a>
      </li>
    </ul>
  );
};


