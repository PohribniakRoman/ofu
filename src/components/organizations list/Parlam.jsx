import parlament_logo from "../../images/Parlament_logo.png"
import Call from "../Call";
import SocialLink from "../SocialLink";

export default function Parlam() {
  return (
    <section className="organizations__container" id="parl">
    <div className="organizations__logo" style={{backgroundImage:`url(${parlament_logo})`}}></div>
      <div className="organizations__content">
        <h1 className="organizations__title">Молодіжний парламент</h1>
        <p className="organizations__description">
        Активна, амбіційна молодь нашого міста, що хоче змінити життя. Якщо тобі не байдуже майбутнє Олександрії, тоді долучайся до нас!
        </p>
      <div className="organizations__links">
        <SocialLink link={"https://instagram.com/mp_oleksandriya?igshid=YmMyMTA2M2Y="} icon={"https://avatanplus.com/files/resources/original/5bd97752a4b2e166c97a1af3.png"}/>
      </div>
      <div className="organizations__call--container">
      <h3 className="organizations__call--title" style={{marginTop:"15px"}}>
        Контактна особа:
      </h3>
        <Call numb={"+380 668 449 273"}/>
      </div>
      </div>
    </section>
  );
}
