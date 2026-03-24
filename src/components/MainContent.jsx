import { MdEmail } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa"
import foto from "../assets/PedroFlores2.jpg"

export default function MainContent() {
    
    function handleLink(url) {
        window.open(url, "_blank")
    }

    return (
        <main>
            <img className="profile-image" src={foto} alt="PedroFlores" />
            <section className="info">

                <div className="info-name"> 
                    <h1 className="name">Pedro Flores</h1>
                    <h2 className="title">Frontend Developer</h2>
                </div>

                <div className="buttons">
                    <button onClick={() => handleLink("mailto:pflores0213@gmail.com")} className="email"><MdEmail size={18} />Email</button>
                    <button onClick={() => handleLink("https://www.linkedin.com/in/pedro-flores-dev/")} className="in"><FaLinkedin size={18} />LinkedIn</button>
                </div>

                <div className="about-skills">
                    <h2 className="about">About</h2>
                    <p>I am a frontend developer focused on crafting scalable, user-centric web applications. Combining technical expertise in virtual simulations with a strong foundation in Full Stack development to deliver innovative digital solutions..</p>

                    <h2>Skills</h2> 
                    <p>I specialize in bridging React development with immersive 3D experiences using Three.js. My toolkit combines high-performance frontend interfaces with a Full Stack foundation and a strong commitment to web accessibility and social inclusion.</p>
                </div>
            </section>
        </main>
    )
}