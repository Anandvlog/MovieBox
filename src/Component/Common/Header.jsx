import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Assets/img/logo.png";
import settingIcon from "../../Assets/icon/ph_gear-bold.png";
import bellIcon from "../../Assets/icon/ph_bell-bold.png";
import userImg from "../../Assets/img/Avatar.png";

const Header = () => {
  const [show, setShow] = useState(false);
  const navName = [
    {
      id: 0,
      Link: "/",
      menuName: "Overview",
    },
    {
      id: 1,
      Link: "/movies",
      menuName: "Movies",
    },
    {
      id: 2,
      Link: "/reporting",
      menuName: "Reporting",
    },
    {
      id: 3,
      Link: "/users",
      menuName: "Users",
    },
  ];
  return (
    <header>
      <nav className="navbar navbar-expand-lg custom-header">
        <div className="container">
          <Link className="navbar-brand user-logo" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShow(!show)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={show ? { display: "block" } : { display: "none" }}
          >
            <ul className="navbar-nav custom-navbar-menu me-auto  mb-lg-0">
              {navName.map((item, index) => {
                return (
                  <NavLink
                    className="nav-item navItem"
                    to={item.Link}
                    key={index}
                  >
                    <span>{item.menuName}</span>
                  </NavLink>
                );
              })}
            </ul>
            <div className="user-dropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link>
                    <img src={settingIcon} alt="setting-icon" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link>
                    <img src={bellIcon} alt="bell-icon" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link>
                    <img src={userImg} alt="user-img" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
