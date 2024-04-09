import "./FooterStyles.css";
import FLogo from "../assets/Footer_Logo.png";

const Footer = () =>{
    return(
        <div className="footer">
            <div className="top-f">
                <div>
                    <img
                    src={FLogo}
                    alt="Footer Logo"
                    className="footerlogo"
                    />
                </div>
                <div>
                    <a href="https://www.facebook.com/shehan.malinda.3139/">
                        <i className="fa-brands fa-facebook-square"/>
                    </a>

                    <a href="https://www.instagram.com/shehan_jx/">
                        <i className="fa-brands fa-instagram-square"/>
                    </a>

                    <a href="https://twitter.com/ShehanJay00">
                        <i className="fa-brands fa-twitter-square"/>
                    </a>

                    <a href="/">
                        <i className="fa-brands fa-youtube-square"/>
                    </a>

                    <a href="https://www.linkedin.com/in/shehan-jayasooriya-328414260/">
                        <i className="fa-brands fa-linkedin"/>
                    </a>

                    <a href="https://github.com/ShehanJay00">
                        <i className="fa-brands fa-github"/>
                    </a>
                </div>
            </div>

            <div className="bottom-f">
                <div>
                    <h4>PRIVACY POLICY</h4>
                    <a href="/">Personal Information Collection</a>
                    <a href="/">Usage of Collected Information</a>
                    <a href="/">Data Sharing and Protection</a>
                    <a href="/">Opt-Out and Data Retention</a>
                </div>

                <div>
                    <h4>TERMS OF SERVICE</h4>
                    <a href="/">Acceptance of Terms</a>
                    <a href="/">User Responsibilities</a>
                    <a href="/">Limitations of Liability</a>
                    <a href="/">Governing Law</a>
                </div>

                <div>
                    <h4>COPYRIGHT INFORMATION</h4>
                    <a href="/">Copyright Ownership</a>
                    <a href="/">Usage Restrictions</a>
                    <a href="/">License for User Content</a>
                    <a href="/">DMCA Compliance</a>
                </div>

                <div>
                    <h4>FAQs OR HELP CENTER</h4>
                    <a href="/">General Information</a>
                    <a href="/">Common Questions</a>
                    <a href="/">Troubleshooting Tips</a>
                    <a href="/">Contact Information</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;