import ultras_logo from "../../images/ultras_logo.jpg"
import SocialLink from "../SocialLink";

export default function Ultras() {
  return (
    <section className="organizations__container" id="ult">
    <div className="organizations__logo" style={{backgroundImage:`url(${ultras_logo})`}}></div>
      <div className="organizations__content">
        <h1 className="organizations__title">Ультрас</h1>
        <p className="organizations__description">
        Заснована в 2007-му році, спільнота олександрійських ультрас боронить Україну на передовій з 2014-го року
        </p>
      <div className="organizations__links">
        <SocialLink link={"https://www.privat24.ua/rd/transfer_to_card/?hash=rd%2Ftransfer_to_card/%7B%22to%22:%225169360006177673%22,%22ccy%22:%22UAH%22%7D"} icon={"https://upload.wikimedia.org/wikipedia/commons/e/e0/Privat24_Logo.png"}/>
        <SocialLink link={"https://send.monobank.ua/2TF4jUoNPQ"} icon={"https://miro.medium.com/max/3150/1*PxKUZIus4lJELdfYKYJuyA.png"}/>
        <SocialLink link={"https://www.instagram.com/ultras.oleksandriya/"} icon={"https://avatanplus.com/files/resources/original/5bd97752a4b2e166c97a1af3.png"}/>
        <SocialLink link={"https://t.me/ultras_oleksandriya"} icon={"https://brandlogos.net/wp-content/uploads/2021/11/telegram-logo.png"}/>
        <SocialLink link={"https://www.facebook.com/ultras.oleksandriya"} icon={"https://icons-for-free.com/download-icon-facebook+logo+logo+website+icon-1320190502625926346_256.ico"}/>
      </div>
      </div>
    </section>
  );
}
