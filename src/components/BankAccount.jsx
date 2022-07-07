import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

export default function BankAccount({ title, bold, account }) {
    const [isOpen,toOpen] = useState(false)
    const [copied,copy] = useState(false);

  return (
      <div className={isOpen?"organizations__pay--info visible":"organizations__pay--info"}>
      <AiOutlineRight onClick={()=>{
            toOpen(!isOpen)
        }}/>
        {title} <i className="organizations__pay--bold"> {bold}</i>
        <br />
        {typeof account === "string"
          ? <span className={!copied?"organizations__pay--bankAccount":"organizations__pay--bankAccount copied"} onClick={(e)=>{
            navigator.clipboard.writeText(e.target.innerText)
            copy(true)
            setTimeout(()=>{
              copy(false)
            },2000)
          }}>{!copied?account:"Скопійовано!"}</span>
          : account.map((e) => {
              const [bankAcc, typeOfCash] = e.split("|");
              return (
                <div key={bankAcc}>
                  <span className={!copied?"organizations__pay--bankAccount":"organizations__pay--bankAccount copied"} onClick={(e)=>{
                    navigator.clipboard.writeText(e.target.innerText)
                    copy(true)
                    setTimeout(()=>{
                      copy(false)
                    },2000)
                  }}>{!copied?bankAcc:"Скопійовано!"}</span>
                  {typeOfCash}
                </div>
              );
            })}
      </div>
  );
}
