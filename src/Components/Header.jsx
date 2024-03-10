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
        <svg onClick={()=>{navigate('/')}} className="home-Icon" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
          <div className="logo" />
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
            <li className="navitems navbarItems" onClick={(e) => {navigate("/newspaper"); handleNavbarClick(e)}}>Newspaper</li>
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
            {/* <li className="navitems sidebar-navItems" onClick={(e) => {
                navigate("/newspaper");
                setOpenSidebar(false);
                handleSidebarNavitemClick(e);
              }}>Newspaper</li> */}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
