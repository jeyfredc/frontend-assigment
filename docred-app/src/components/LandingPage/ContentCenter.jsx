import React from "react";
import "../../styles/LandingPage/ContentCenter.scss";
import fontImage from "../../assets/fontImg.png";
import logoNotice from "../../assets/notice-docred.png";
import ContentAside from "./ContentAside";

const ContentCenter = () => {
  return (

      <div className="content__center">
        <div className="article__center">
          <div className="article_center__description">
            <button>Noticia</button>
            <img src={fontImage} alt="noticia" className="imageNotice" />
            <div className="article__button">
              <h3>Lorem ipsum dolor sit amet</h3>
              <button>Guardar</button>
            </div>
            <div className="section__notice">
              <img src={logoNotice} alt="noticas docred" className="item-a" />
              <h4 className="item-b">Noticias DocRed</h4>
              <p className="item-c">
                hace 12 h | Publicado: 17/01/18 | Lectura: 3 min
              </p>
            </div>
            <div className="article__links">
              <ul>
                <li>Medicina interna</li>
                <li>Pediatría</li>
                <li>Obstreticia</li>
              </ul>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              porro delectus id cupiditate voluptatem autem, deserunt distinctio
              expedita amet sunt unde non veniam excepturi est praesentium,
              quasi nemo fugit magni! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Ratione adipisci quod similique accusantium
              molestias perspiciatis impedit hic aliquid dolor, neque officia,
              cum eius doloremque eos vero consequuntur reprehenderit nulla.
              Quasi!
            </p>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              porro delectus id cupiditate voluptatem autem, deserunt distinctio
              expedita amet sunt unde non veniam excepturi est praesentium,
              quasi nemo fugit magni! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Ratione adipisci quod similique accusantium
              molestias perspiciatis impedit hic aliquid dolor, neque officia,
              cum eius doloremque eos vero consequuntur reprehenderit nulla.
              Quasi!
            </p>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              porro delectus id cupiditate voluptatem autem, deserunt distinctio
              expedita amet sunt unde non veniam excepturi est praesentium,
              quasi nemo fugit magni! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Ratione adipisci quod similique accusantium
              molestias perspiciatis impedit hic aliquid dolor, neque officia,
              cum eius doloremque eos vero consequuntur reprehenderit nulla.
              Quasi!
            </p>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              porro delectus id cupiditate voluptatem autem, deserunt distinctio
              expedita amet sunt unde non veniam excepturi est praesentium,
              quasi nemo fugit magni! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Ratione adipisci quod similique accusantium
              molestias perspiciatis impedit hic aliquid dolor, neque officia,
              cum eius doloremque eos vero consequuntur reprehenderit nulla.
              Quasi!
            </p>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              porro delectus id cupiditate voluptatem autem, deserunt distinctio
              expedita amet sunt unde non veniam excepturi est praesentium,
              quasi nemo fugit magni! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Ratione adipisci quod similique accusantium
              molestias perspiciatis impedit hic aliquid dolor, neque officia,
              cum eius doloremque eos vero consequuntur reprehenderit nulla.
              Quasi!
            </p>
            <div className="final__article">
              <ul className="final_article__send">
                <li>
                  <i className="pi pi-star"></i>Destacar
                </li>
                <li>
                  <i className="pi pi-comment" />
                  Comentar
                </li>
                <li>
                  <i className="pi pi-arrow-up-right" />
                  Compartir
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="article__center__aside">
          <ContentAside/>
      </div>
    </div>
  );
};

export default ContentCenter;
