import React from "react";
import "../../styles/LandingPage/NavBar.scss";
import logo from "../../assets/logo-docred.png";

const NavBar = () => {
  return (
    <nav className="menu">
      <div className="menu__content">
        <div className="menu__title">
          <img src={logo} alt="logo" className="logo" />
          <div className="menu__title">
            doc <b>red</b>
          </div>
        </div>
        <div className="menu__title">
          <i className="pi pi-search input-icon"/>
          <input className="inputSearch" />

          <input
            type="text"
            placeholder="¿Qué estas buscando?"
            className="inputText"
          ></input>
        </div>

        <div className="menu__home">
          <i className="pi pi-home"/>
            <p>inicio</p>
            <i className="pi pi-angle-down"/>
        </div>
        <div className="menu__profile">
        <hr align="left" className="lineaVertical" noshade="noshade"/>
          <i className="pi pi-bell"/>
          <div className="meta-author-avatar"> 
          <img src="https://cdn.roelmagdaleno.com/assets/uploads/2019/08/ZHFS36po_400x400.jpg" loading="lazy" alt="Roel Magdaleno" />

          </div>
          <i className="pi pi-angle-down"/>
            <i className="pi pi-cog"/>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
