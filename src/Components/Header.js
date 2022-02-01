import '../style.css'
import logo from "../Images/troll-face.png" 

export default function Header() {
    return (
        <header className="header">
            <img 
                src={logo}
                alt=''
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}