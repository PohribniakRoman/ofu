import { useState } from "react";

function ScrollToElement(elementId){
    document.querySelector(elementId).scrollIntoView({ behavior: "smooth", block: "center" });
}

export default function Navigation() {
    const [isOpen,toOpen] = useState(false)
  return (
    <>
      <div className={isOpen?"navigation__modal":"navigation__modal hidden"}>
        <div className={isOpen?"navigation__modal--toggle":"navigation__modal--toggle hidden"} onClick={()=>{toOpen(!isOpen)}}></div>
        <ul className={isOpen?"navigation__modal--menu":"navigation__modal--menu hidden"}>
            <li className={isOpen?"navigation__modal--menu-item":"navigation__modal--menu-item hidden"} onClick={() => {
                toOpen(!isOpen)
                ScrollToElement("#ev");
            }}>
                Єдина Воля
            </li>
            <li  className={isOpen?"navigation__modal--menu-item":"navigation__modal--menu-item hidden"} onClick={() => {
                toOpen(!isOpen)
                ScrollToElement("#kcvo");
            }}>
                КЦВО
            </li>
            <li  className={isOpen?"navigation__modal--menu-item":"navigation__modal--menu-item hidden"} onClick={() => {
                toOpen(!isOpen)
                ScrollToElement("#ult");
            }}>
                Ультрас
            </li>
            <li  className={isOpen?"navigation__modal--menu-item":"navigation__modal--menu-item hidden"} onClick={() => {
                toOpen(!isOpen)
                ScrollToElement("#go");
            }}>
                ГО Культура
            </li>
            <li  className={isOpen?"navigation__modal--menu-item":"navigation__modal--menu-item hidden"} onClick={() => {
                toOpen(!isOpen)
                ScrollToElement("#chd");
            }}>
                Час Добра
            </li>
            <li  className={isOpen?"navigation__modal--menu-item":"navigation__modal--menu-item hidden"} onClick={() => {
                toOpen(!isOpen)
                ScrollToElement("#nh");
            }}>
                Нова Хвиля
            </li>
            <li  className={isOpen?"navigation__modal--menu-item":"navigation__modal--menu-item hidden"} onClick={() => {
                toOpen(!isOpen)
                ScrollToElement("#yvs");
            }}>
                УВС
            </li>
        </ul>
      </div>
      <section className="navigation">
        <div className="navigation__container">
          <div className="navigation__logo">ОДУ</div>
          <div className="navigation__list">
          <div className="navigation__toggle" onClick={()=>{toOpen(!isOpen)}}><span></span></div>
            <div className="navigation__list--item active" onClick={() => {
                ScrollToElement("#ev")
            }}>Єдина Воля</div>
            <div className="navigation__list--item active" onClick={() => {
                ScrollToElement("#kcvo")
            }}>КЦВО</div>
            <div className="navigation__list--item active" onClick={() => {
                ScrollToElement("#ult")
            }}>Ультрас</div>
            <div className="navigation__list--item active" onClick={() => {
                ScrollToElement("#go")
            }}>ГО Культура</div>
            <div className="navigation__list--item active" onClick={() => {
                ScrollToElement("#chd")
            }}>Час Добра</div>
            <div className="navigation__list--item active" onClick={() => {
                ScrollToElement("#nh")
            }}>Нова Хвиля</div>
            <div className="navigation__list--item active" onClick={() => {
                ScrollToElement("#yvs")
            }}>УВС</div>
          </div>
        </div>
      </section>
    </>
  );
}
