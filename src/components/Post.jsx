import { useState } from "react";
import { SiGmail } from "react-icons/si";

export default function Call({ email }) {
  const [copied,copy] = useState(false);
  return (
    <p className="organizations__call">
      <i>
      <SiGmail />
      </i>
      <span className={!copied?"organizations__call--numb":"organizations__call--numb copied"} onClick={() => {
        navigator.clipboard.writeText(email);
        copy(true)
        setTimeout(()=>{
          copy(false)
        },2000)
      }}>{email}</span>
    </p>
  );
}
