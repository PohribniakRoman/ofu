import EV from "./organizations list/EV";
import KCVO from "./organizations list/KCVO";
import Ult from "./organizations list/Ult";
import GO from "./organizations list/GO";

export default function Organizations() {
  return (
    <section className="organizations" id="org">
        <EV/>
        <KCVO/>
        <Ult/>
        <GO/>
    </section>
  );
}
