import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg"
import {MdEmail} from "react-icons/md"
import {BsMessenger} from "react-icons/bs"
import {IoLogoWhatsapp} from "react-icons/io"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolor atque quidem rem earum? Dolorem voluptatem optio corrupti saepe!
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:kant@mani.com" target="_blank" rel="noreferrar noopener"><MdEmail /></a>
            <a href="https://m.me/ernest_achiever" target="_blank" rel="noreferrar noopener"><BsMessenger /></a>
            <a href="https://wa.me/917004336713" target="_blank" rel="noreferrar noopener"><IoLogoWhatsapp /></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
