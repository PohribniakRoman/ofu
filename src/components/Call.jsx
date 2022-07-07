import { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Call({ numb }) {
  const [copied,copy] = useState(false);
  return (
    <p className="organizations__call">
      <i>
        <BsFillTelephoneFill />
      </i>
      <span className={!copied?"organizations__call--numb":"organizations__call--numb copied"}       onClick={() => {
        navigator.clipboard.writeText(numb);
        copy(true)
        setTimeout(()=>{
          copy(false)
        },2000)
      }}>{numb}</span>
    </p>
  );
}
