import React from "react";
import fontImage from "../../assets/fontImg.png";
import "../../styles/LandingPage/ContentAside.scss";

const ContentAside = () => {
  return (
    <div className="conten__aside_article">
      <div id="titulo">
        <p>
          <b> Noticias relacionadas</b>
        </p>
        <hr className="line" />
      </div>
      <div className="content__notice__article">
        <img src={fontImage} alt="noticia" className="imageNoticeMini imgMini" />
        <h5 className="titleMini">Lorem ipsum, dolor sit amet consectetur </h5>
        <p className="textMini">Por: Lorem ipsum dolor </p>
        <div className="view__article">
          <ul className="view__article__buttons">
            <li>
              <i className="pi pi-star"></i>50
            </li>
            <li>
              <i className="pi pi-comment"></i>40
            </li>
            <li>
              <i className="pi pi-eye"></i>75
            </li>
          </ul>
        </div>
      </div>
      <hr className="separation"/>
      <div className="content__notice__article">
        <img src={fontImage} alt="noticia" className="imageNoticeMini imgMini" />
        <h5 className="titleMini">Lorem ipsum, dolor sit amet consectetur </h5>
        <p className="textMini">Por: Lorem ipsum dolor </p>
        <div className="view__article">
          <ul className="view__article__buttons">
            <li>
              <i className="pi pi-star"></i>50
            </li>
            <li>
              <i className="pi pi-comment"></i>40
            </li>
            <li>
              <i className="pi pi-eye"></i>75
            </li>
          </ul>
        </div>
      </div>
      <hr className="separation"/>
      <div className="content__notice__article">
        <img src={fontImage} alt="noticia" className="imageNoticeMini imgMini" />
        <h5 className="titleMini">Lorem ipsum, dolor sit amet consectetur </h5>
        <p className="textMini">Por: Lorem ipsum dolor </p>
        <div className="view__article">
          <ul className="view__article__buttons">
            <li>
              <i className="pi pi-star"></i>50
            </li>
            <li>
              <i className="pi pi-comment"></i>40
            </li>
            <li>
              <i className="pi pi-eye"></i>75
            </li>
          </ul>
        </div>
      </div>
      <hr className="separation"/>
      <div className="content__notice__article">
        <img src={fontImage} alt="noticia" className="imageNoticeMini imgMini" />
        <h5 className="titleMini">Lorem ipsum, dolor sit amet consectetur </h5>
        <p className="textMini">Por: Lorem ipsum dolor </p>
        <div className="view__article">
          <ul className="view__article__buttons">
            <li>
              <i className="pi pi-star"></i>50
            </li>
            <li>
              <i className="pi pi-comment"></i>40
            </li>
            <li>
              <i className="pi pi-eye"></i>75
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContentAside;
