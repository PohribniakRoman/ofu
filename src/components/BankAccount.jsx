import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

export default function BankAccount({ title, bold, account }) {
    const [isOpen,toOpen] = useState(false)
  return (
      <div className={isOpen?"organizations__pay--info visible":"organizations__pay--info"}>
      <AiOutlineRight onClick={()=>{
            toOpen(!isOpen)
        }}/>
        {title} <i className="organizations__pay--bold"> {bold}</i>
        <br />
        {typeof account === "string"
          ? <span className="organizations__pay--bankAccount" onClick={(e)=>{
            navigator.clipboard.writeText(e.target.innerText)
            alert(`Скопійовано:${e.target.innerText}`)
          }}>{account}</span>
          : account.map((e) => {
              const [bankAcc, typeOfCash] = e.split("|");
              return (
                <div key={bankAcc}>
                  <span className="organizations__pay--bankAccount" onClick={(e)=>{
                    navigator.clipboard.writeText(e.target.innerText)
                    alert(`Скопійовано:${e.target.innerText}`)
                  }}>{bankAcc}</span>
                  {typeOfCash}
                </div>
              );
            })}
      </div>
  );
}
