import logo from "../images/logo.png";
import "./Footer.css";
import instagram from "../Assets/instagram_icon.png";
import whatsapp from "../Assets/whatsapp_icon.png";
import pintester from "../Assets/pintester_icon.png";

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <img src={logo} alt="" />
            </div>
            <div className="list_div">
                <ul className="myul">
                    <li>Company</li>
                    <li>Product</li>
                    <li>Office</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="social">
                    <div>
                        <img className="image" src={instagram} alt="" />
                    </div>
                    <div>
                        <img className="image" src={whatsapp} alt="" />
                    </div>
                    <div>
                        <img className="image" src={pintester} alt="" />
                    </div>
                </div>
                <hr />
                <p className="copyright">
                    Copyright @ 2023- All Right Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
