import {Link} from "react-router-dom"
import Logo from "../images/logo.png"
import {FaLinkedin} from "react-icons/fa"
import {FaFacebookF} from "react-icons/fa"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
const Footer = () => {
    return (
        <>
            <footer>
                <div className="container footer__container">
                    <article>
                        <Link to="/" className="logo">
                            <img src={Logo} alt="Footer logo" />
                        </Link>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tenetur at ducimus in dolor accusantium ea enim voluptatibus quas non.
                        </p>
                        <div className="footer__socials">
                            <a href="https://linkedin.com/" target="_blank" rel="noreferrar noopener"><FaLinkedin /></a>
                            <a href="https://facebook.com/" target="_blank" rel="noreferrar noopener"><FaFacebookF /></a>
                            <a href="https://twitter.com/" target="_blank" rel="noreferrar noopener"><AiOutlineTwitter /></a>
                            <a href="https://instagram.com/" target="_blank" rel="noreferrar noopener"><AiFillInstagram /></a>
                        </div>
                    </article>
                    <article>
                        <h4>Permalinks</h4>
                        <Link to='/about' className="link">About</Link>
                        <Link to='/plans' className="link">Plans</Link>
                        <Link to='/trainers' className="link">Trainers</Link>
                        <Link to='/gallery' className="link">Gallery</Link>
                        <Link to='/contact' className="link">Contact</Link>
                    </article>
                    <article>
                        <h4>Insights</h4>
                        <Link to='#'className="link">Blog</Link>
                        <Link to='#'className="link">Case</Link>
                        <Link to='#'className="link">Events</Link>
                        <Link to='#'className="link">Communities</Link>
                        <Link to='#'className="link">FAQs</Link>
                    </article>
                    <article>
                        <h4>Get In Touch</h4>
                        <Link to='/contact' className="link">Contact Us</Link>
                        <Link to='#' className="link">Support</Link>
                    </article>
                </div>
                <div className="footer__copyright">
                    <small>2022 MANIKANT MANI &copy; All Rights Reserved </small>
                </div>
            </footer>
        </>
    );
}

export default Footer;