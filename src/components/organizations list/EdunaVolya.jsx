import SocialLink from "../SocialLink";
import Call from "../Call";
import Post from "../Post"
import eduna_volya_logo from "../../images/eduna_volya_logo.jpg"


export default function EdunaVolya(){
    return <div className="organizations__container" id="ev">
    <div className="organizations__logo"style={{ backgroundImage:`url(${eduna_volya_logo})`,}}></div>
    <div className="organizations__content">
      <h1 className="organizations__title">Єдина Воля</h1>
      <p className="organizations__description">
        Благодійна організація «Благодійний фонд «Єдина Воля»
      </p>
      <Call numb={"+380 666 258 609"}/>
      <Post email={"volunteers.yedyna.volya@gmail.com"} />
      <div className="organizations__links">
        <SocialLink link={"https://send.monobank.ua/6dozXvnLNo"} icon={"https://miro.medium.com/max/3150/1*PxKUZIus4lJELdfYKYJuyA.png"}/>
        <SocialLink link={"https://www.facebook.com/Volunteers-VOLYA-110138914973522"} icon={"https://icons-for-free.com/download-icon-facebook+logo+logo+website+icon-1320190502625926346_256.ico"}/>
        <SocialLink link={"https://www.instagram.com/_volunteers_ua/"} icon={"https://avatanplus.com/files/resources/original/5bd97752a4b2e166c97a1af3.png"}/>
        <SocialLink link={"https://t.me/VOlYOLEKSANDRIY"} icon={"https://brandlogos.net/wp-content/uploads/2021/11/telegram-logo.png"}/>
        <SocialLink link={"https://www.tiktok.com/@v_o_l_y_a_?_d=secCgYIASAHKAESPgo8nV3c9rDNkaDACXF1pveej7X3oBqpK9CwISRth5wXSzuLRwZfluFQqWHiTVLQAvX1sN%2FLqG43rdpLd7Y7GgA%3D&_r=1&checksum=b13c18d5a4189c48ffdb38a674b5229a927987ec3785f78439abbeb7199a733d&language=ru&sec_uid=MS4wLjABAA"} icon={"https://cliply.co/wp-content/uploads/2021/02/372102780_TIKTOK_ICON_1080.png"}/>
      </div> 
    </div>
  </div>
}