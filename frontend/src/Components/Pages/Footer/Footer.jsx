import React from 'react'
import footerStyle from "./Footer.module.scss";
import { BsTwitter, BsLinkedin, BsFacebook, BsYoutube } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'
import { MdCall, MdFax, MdOutlineMail } from 'react-icons/md'
import { Link } from 'react-router-dom';
import theme from '../../../JSON/theme_css.json'


const Footer = () => {
    const { imageSection } = theme

    return (
        <div className={footerStyle.footerMainSection}>

            <div className={footerStyle.footerSection}>
                <div className={footerStyle.footerContent}>
                    <div className={footerStyle.footerLogo}>
                        <Link to='/' className={footerStyle.footerHeader}>
                            <img
                                src={require(`../../../Assets/Icons/${imageSection.mainlogo}`)}
                                alt="cosmiclogo"
                            //   className={headerStyle.responsiveimg}
                            />
                        </Link>
                    </div>
                    <div className={footerStyle.footerInfo}>
                        <span className={footerStyle.icon}>
                            <ImLocation />
                        </span>
                        <p className={footerStyle.textContent}> Lorem ipsum dolor sit amet, consectey. </p>
                    </div>
                    {/* <div className={footerStyle.footerInfo}>
                        <span className={footerStyle.icon}>
                            <MdCall />
                        </span>
                        <p className={footerStyle.textContent}>+230 4640889/ +230 4649088</p>
                    </div> */}
                    {/* <div className={footerStyle.footerInfo}>
                        <span className={footerStyle.icon}>
                            <MdFax />
                        </span>
                        <p className={footerStyle.textContent}>+230 4678858</p>
                    </div> */}
                    <div className={footerStyle.footerInfo}>
                        <span className={footerStyle.icon}>
                            <MdOutlineMail />
                        </span>
                        <p className={footerStyle.textContent}>enquiry@spectraglobal.com</p>
                    </div>

                </div>
                <div className={footerStyle.footerContent}>
                    <p className={footerStyle.quicklinksHeading}>Quick Links</p>
                    <Link to='/' className={footerStyle.textContent}>
                        <p>Home</p>
                    </Link>
                    <Link to='about-us' className={footerStyle.textContent}>
                        <p>About Us</p>
                    </Link>
                    <Link to='our-services' className={footerStyle.textContent}>
                        <p>Our Services</p>
                    </Link>
                    {/* <Link to='our-team' className={footerStyle.textContent}>
                        <p>Our Team</p>
                    </Link> */}
                    {/* <Link to='contact-us' className={footerStyle.textContent}>
                        <p>Contact Us</p>
                    </Link> */}
                </div>
                <div className={footerStyle.footerContent}>
                    <p className={footerStyle.connectWithUs}>Connect With Us</p>
                        <Link
                            to='contact-us'
                            className={footerStyle.ContectCircle}
                        >
                            <h4 className={footerStyle.wouldcircle}>Contact</h4>
                        </Link>

                    {/* <div>
                        <span className={footerStyle.socialIcon}>
                            <BsTwitter />
                        </span>
                        <span className={footerStyle.socialIcon}>
                            <BsLinkedin />
                        </span>
                        <span className={footerStyle.socialIcon}>
                            <BsFacebook />
                        </span>
                        <span className={footerStyle.socialIcon}>
                            <BsYoutube />
                        </span>
                    </div> */}
                </div>

            </div>
            <div className={footerStyle.footerCopyright}>
                <span>© Copyright-2023 Spectra Global Pvt Ltd All Rights Reserved.</span>
            </div>
        </div>
    )
}

export default Footer