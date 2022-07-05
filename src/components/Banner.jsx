import {BsArrowDown} from "react-icons/bs"

export default function Banner() {
    return <section className="banner">
        <div className="banner__container">
            <p className="banner__subtitle">Волонтерський проєкт</p>
            <h1 className="banner__title">олександрія для українців</h1>
            <p className="banner__subtitle">Ласкаво просимо до нашого міста</p>
            <div className="banner__controll" onClick={()=>{
                document.querySelector("#org").scrollIntoView({behavior:"smooth",block:"start"})
            }}>
            <span>
                <BsArrowDown/>
            </span>
            </div>
        </div>
    </section>
}