import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="logo-wrapper">
        <img
          src="https://i.ibb.co/wyjwD16/video-logo.png"
          className="logo"
          alt="Logo"
        ></img>
      </div>

      <div className="title-wrapper">
        <h1 className="title">Video Recommendations</h1>
      </div>
    </header>
  );
}

export default Header;
