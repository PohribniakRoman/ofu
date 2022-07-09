import EdunaVolya from "./organizations list/EdunaVolya";
import Kcvo from "./organizations list/Kcvo";
import Ultras from "./organizations list/Ultras";
import GoKultura from "./organizations list/GoKultura";
import ChasDobra from "./organizations list/ChasDobra";
import NovaHvulya from "./organizations list/NovaHvula";
import Yvs from "./organizations list/Yvs";

export default function Organizations() {
  return (
    <section className="organizations" id="org">
        <EdunaVolya/>
        <Kcvo/>
        <Ultras/>
        <GoKultura/>
        <ChasDobra/>
        <NovaHvulya/>
        <Yvs/>
    </section>
  );
}
