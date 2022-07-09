import SocialLink from "./SocialLink";

export default function Footer() {
    return <section className="footer">
        <div className="footer__img">
            <div className="footer__img--cont"></div>
            <div className="footer__img--info">
                <h1 className="footer__img--title">З'явились запитання?</h1>
                <p className="footer__img--descr">Адміністрація сайту оперативно може відопвісти на всі ваші запитання,також готові вислухати конструктивну критику на рахунок сайту.</p>
                <div className="organizations__links">
                    <SocialLink link={"https://t.me/Berserk514"} icon={"https://brandlogos.net/wp-content/uploads/2021/11/telegram-logo.png"}/>
                </div>
            </div>
        </div>
        <div className="footer__bar">
            <h3 className="footr__bar--info">
            The site was made in Ukraine by <br /> <a href="https://www.instagram.com/pohribniak.roman">Roman Pohribniak</a> & <a href="https://www.instagram.com/galact1c_d151nt3grat0r/">Nazarii Yahotin</a> 
            </h3>
        </div>
    </section>
}