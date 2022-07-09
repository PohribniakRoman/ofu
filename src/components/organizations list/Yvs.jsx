import yvs_logo from "../../images/yvs_logo.jpg"
import Call from "../Call";
import SocialLink from "../SocialLink";

export default function Yvs() {
  return (
    <section className="organizations__container" id="yvs">
    <div className="organizations__logo" style={{backgroundImage:`url(${yvs_logo})`}}></div>
      <div className="organizations__content">
        <h1 className="organizations__title">Українська Волонтерська Служба</h1>
        <p className="organizations__description">
        Громадська неприбуткова організація, яка з 2017 року розвиває культуру волонтерства та взаємодопомоги в Україні.
        </p>
      <div className="organizations__links">
        <SocialLink link={"https://www.facebook.com/UkrainianVolunteerService"} icon={"https://icons-for-free.com/download-icon-facebook+logo+logo+website+icon-1320190502625926346_256.ico"}/>
        <SocialLink link={"https://t.me/VolunteerTalksOleksandriia/3999"} icon={"https://brandlogos.net/wp-content/uploads/2021/11/telegram-logo.png"}/>
        <SocialLink link={"https://www.instagram.com/ukrainian_volunteer_service"} icon={"https://avatanplus.com/files/resources/original/5bd97752a4b2e166c97a1af3.png"}/>
        <SocialLink link={"https://invite.viber.com/?g2=AQASOsMDWqm0Rk7mBG5xWjwf5kdxhJNZlx7Nq2Vuy3W17FssAViDIgrowgl1aGV9&lang=uk"} icon={"https://iland.ua/wp-content/uploads/2020/07/Viber-App-Logo.png"}/>
      </div>
      <div className="organizations__call--container" style={{marginTop:"20px"}}>
      <h3 className="organizations__call--title">
        Координатори УВС в Олександрії:
      </h3>
      <Call numb={"+380 970 582 126"}/>
      <Call numb={"+380 988 632 696"}/>
      </div>
      </div>
    </section>
  );
}
