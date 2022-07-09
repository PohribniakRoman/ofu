import nova_hvulya_logo from "../../images/nova_hvulya_logo.jpg"
import SocialLink from "../SocialLink";

export default function NovaHvulya() {
  return (
    <section className="organizations__container" id="nh">
    <div className="organizations__logo" style={{backgroundImage:`url(${nova_hvulya_logo})`}}></div>
      <div className="organizations__content">
        <h1 className="organizations__title">ГО «Нова Хвиля»</h1>
        <p className="organizations__description">
        Олександрійська громадська міська організація «Нова Хвиля» була створена у 2010 році і активно діє до сьогоднішнього дня.
        </p>
      <div className="organizations__links">
        <SocialLink link={"https://www.facebook.com/groups/559315201398369"} icon={"https://icons-for-free.com/download-icon-facebook+logo+logo+website+icon-1320190502625926346_256.ico"}/>
        <SocialLink link={"https://www.instagram.com/nova_hvula/"} icon={"https://avatanplus.com/files/resources/original/5bd97752a4b2e166c97a1af3.png"}/>
      </div>
      </div>
    </section>
  );
}
