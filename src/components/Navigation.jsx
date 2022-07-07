import { useState } from "react";

function ScrollToElement(elementId){
    document.querySelector(elementId).scrollIntoView({ behavior: "smooth", block: "center" });
}

export default function Navigation() {
    const [isOpen,toOpen] = useState(false)
    window.addEventListener("scroll",()=>{
        document.querySelectorAll(".navigation__list--item").forEach((element,index)=>{
            element.classList.remove("active")
            if(window.pageYOffset < 1340 && index === 0){
                element.classList.add("active")
            }
            if(window.pageYOffset > 1340 && window.pageYOffset < 2228 && index === 1){
                element.classList.add("active")
            }
            if(window.pageYOffset > 2228 && window.pageYOffset < 2900 && index === 2){
                element.classList.add("active")
            }
            if(window.pageYOffset > 2900 && window.pageYOffset < 3628 && index === 3){
                element.classList.add("active")
            }
        })
    })
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
          </div>
        </div>
      </section>
    </>
  );
}
