import { BsFillTelephoneFill } from "react-icons/bs";

export default function Call({ numb }) {
  return (
    <p
      className="organizations__call"
      onClick={() => {
        navigator.clipboard.writeText(numb);
        alert(`Скопійовано:${numb}`);
      }}
    >
      <i>
        <BsFillTelephoneFill />
      </i>
      <span>{numb}</span>
    </p>
  );
}
