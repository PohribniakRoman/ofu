import GO_logo from "../../images/GO.jpg"
import SocialLink from "../SocialLink";

export default function Ult() {
  return (
    <section className="organizations__container" id="go">
    <div className="organizations__logo" style={{backgroundImage:`url(${GO_logo})`}}></div>
      <div className="organizations__content">
        <h1 className="organizations__title">ГО Культура</h1>
        <p className="organizations__description">
         У зв’язку з повномаштабним вторгненням ми радикалізуємось.
        </p>
      <div className="organizations__links">
        <SocialLink link={"https://www.facebook.com/profile.php?id=100069355122479"} icon={"https://icons-for-free.com/download-icon-facebook+logo+logo+website+icon-1320190502625926346_256.ico"}/>
        <SocialLink link={"https://www.instagram.com/g_o_culture/"} icon={"https://avatanplus.com/files/resources/original/5bd97752a4b2e166c97a1af3.png"}/>
      </div>
      </div>
    </section>
  );
}
