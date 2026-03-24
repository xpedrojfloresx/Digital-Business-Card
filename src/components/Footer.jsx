import { FaInstagram, FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export default function Footer() {

    function handleLink(url) {
        window.open(url, "_blank")
    }

    return (
        <main className="main-footer">
            <button onClick={() => handleLink("https://www.instagram.com/pedrojflores_/")}><FaInstagram size={20} /></button>
            <button onClick={() => handleLink("https://x.com/pedrojflores_")}><FaXTwitter size={20} /></button>
            <button onClick={() => handleLink("https://github.com/xpedrojfloresx")}><FaGithub size={20} /></button>
        </main>
    )
} 