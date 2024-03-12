import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchBtn, setSearchBtn] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const navigate = useNavigate();

  // SETTING UP THE FUNCTION TO HANDLE SIDEBAR ITEMS CLICK
  const handleSidebarNavitemClick = (e) => {
    e.preventDefault();
    const items = document.querySelectorAll(".sidebar-navItems");

    const activeBtn = e.target;
    items.forEach((current) => {
      if (current !== activeBtn) current.classList.remove("active");
      else current.classList.add("active");
    });
  };

  // SETTING UP THE FUNCTION TO HANDLE NAVBAR ITEMS CLICK
  const handleNavbarClick = (e) => {
    e.preventDefault();
    const items = document.querySelectorAll(".navbarItems");
    const searchIcon = document.querySelector(".search-icon");
    if (searchIcon.classList.contains("active")) {
      searchIcon.classList.remove("active");
      setSearchBtn(!searchBtn);
    }

    const activeBtn = e.target;
    items.forEach((current) => {
      if (current !== activeBtn) current.classList.remove("active");
      else current.classList.add("active");
    });
  };

  // SETTING UP THE SEARCH ICON CLICK
  const handleSearchIconClick = (e) => {
    e.preventDefault();
    const items = document.querySelectorAll(".navbarItems");

    items.forEach((current) => {
      current.classList.remove("active");
    });
  };

  return (
    <header className="header">
      <nav>
        <div className="navbar">
          <svg
            onClick={() => {
              navigate("/search");
            }}
            className="home-Icon"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
          <div
            className="logo"
            onClick={(e) => {
              navigate("/");
            }}
          />
          <ul className="navlist">
            <li
              className="navitems navbarItems active"
              onClick={(e) => {
                navigate("/");
                handleNavbarClick(e);
              }}
            >
              Home
            </li>
            <li
              className="navitems navbarItems"
              onClick={(e) => {
                navigate("/localnews");
                handleNavbarClick(e);
              }}
            >
              Local News
            </li>
            <li
              className="navitems navbarItems"
              onClick={(e) => {
                navigate("/nationalnews");
                handleNavbarClick(e);
              }}
            >
              National News
            </li>
            <li
              className="navitems navbarItems"
              onClick={(e) => {
                navigate("/worldnews");
                handleNavbarClick(e);
              }}
            >
              World News
            </li>
            <li
              className="navitems navbarItems"
              onClick={(e) => {
                navigate("/newspaper");
                handleNavbarClick(e);
              }}
            >
              Newspaper
            </li>
            <li>
              <i
                onClick={(e) => {
                  navigate("/search");
                  setSearchBtn(true);
                  handleSearchIconClick(e);
                }}
                className={`fa-solid search-icon fa-magnifying-glass ${
                  searchBtn ? "active" : "inactive"
                } `}
              />
            </li>
          </ul>

          <div
            className="hamburger"
            id="sidebarOpenBtn"
            onClick={() => setOpenSidebar(true)}
          >
            <i className="fa-solid fa-bars" />
          </div>
        </div>

        <div className={`sidebar ${openSidebar ? "active" : "inactive"}`}>
          <div className="close-btn" id="sidebarCloseBtn">
            <i
              className="fa-solid fa-xmark"
              onClick={() => setOpenSidebar(false)}
            />
          </div>
          <ul className="navlist">
            <li
              className="navitems sidebar-navItems active"
              onClick={(e) => {
                navigate("/");
                setOpenSidebar(false);
                handleSidebarNavitemClick(e);
              }}
            >
              Home
            </li>
            <li
              className="navitems sidebar-navItems"
              onClick={(e) => {
                navigate("/search");
                setOpenSidebar(false);
                handleSidebarNavitemClick(e);
              }}
            >
              Search News
            </li>
            <li
              className="navitems sidebar-navItems"
              onClick={(e) => {
                navigate("/localnews");
                setOpenSidebar(false);
                handleSidebarNavitemClick(e);
              }}
            >
              Local News
            </li>
            <li
              className="navitems sidebar-navItems"
              onClick={(e) => {
                navigate("/nationalnews");
                setOpenSidebar(false);
                handleSidebarNavitemClick(e);
              }}
            >
              National News
            </li>
            <li
              className="navitems sidebar-navItems"
              onClick={(e) => {
                navigate("/worldnews");
                setOpenSidebar(false);
                handleSidebarNavitemClick(e);
              }}
            >
              World News
            </li>
            <li
              className="navitems sidebar-navItems"
              onClick={(e) => {
                navigate("/newspaper");
                setOpenSidebar(false);
                handleSidebarNavitemClick(e);
              }}
            >
              Newspaper
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
