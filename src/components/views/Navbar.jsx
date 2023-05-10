import React from "react";
import { useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  const [selectedPage, setSelectedPage] = React.useState("Home");

  const [homeColor, setHomeColor] = React.useState("#1f3fde");
  const [aboutColor, setAboutColor] = React.useState("#ffffff");

  function navToHome(params) {
    setSelectedPage("Home")
  }

  function navToAbout(params) {
    setSelectedPage("About")
  }

  useEffect(() => {
    if (selectedPage === "Home") {
      setHomeColor("#1f3fde")
      setAboutColor("#ffffff")
    } else if (selectedPage === "About") {
      setHomeColor("#ffffff")
      setAboutColor("#1f3fde")
    }
  }, [selectedPage])


  return (
    <nav>
      <div className='PageHeaderBar'>
      <ul className="NavBar">
          <div className='PageHeader'>WasteTrack</div>
          <div className="NavBarDivider"></div>
          <Link className="NavBarButton" style={{ textDecoration: "none", color: homeColor }} onClick={navToHome} to="/">Home</Link>
          <Link className="NavBarButton" style={{ textDecoration: "none", color: aboutColor }} onClick={navToAbout} to="/about">About</Link>
          {/* <Link className="NavBarButton" style={{ textDecoration: "none" }} to="/links">Links</Link> */}
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;