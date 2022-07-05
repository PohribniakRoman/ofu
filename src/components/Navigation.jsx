export default function Navigation() {
    return <section className="navigation">
        <div className="navigation__container">
            <div className="navigation__logo">ОДУ</div>
            <div className="navigation__list">
                <div className="navigation__list--item active" onClick={()=>{
                    document.querySelector("#ev").scrollIntoView({behavior:"smooth",block:"center"})
                }}>Єдина Воля</div>
                <div className="navigation__list--item active" onClick={()=>{
                    document.querySelector("#kcvo").scrollIntoView({behavior:"smooth",block:"center"})
                }}>КЦВО</div>
            </div>
        </div>
    </section>
}