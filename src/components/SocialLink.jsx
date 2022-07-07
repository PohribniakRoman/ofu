export default function SocialLink({icon,link}){
    return <a href={link} className="organizations__links--icon" rel="noreferrer" target="_blank" style={{backgroundImage:`url(${icon})`,}}>w</a>
}