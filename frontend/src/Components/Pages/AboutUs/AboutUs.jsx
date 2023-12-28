import React from 'react'
import abStyle from './AboutUs.module.scss'
import theme from '../../../JSON/theme_css.json'

const AboutUs = () => {
    const { aboutImgSection } = theme
    return (
        <div className={abStyle.aboutMainSection}>
            <div>

                <h1 className={abStyle.aboutUsMainHeading}
                    data-aos="fade-down"
                    data-aos-delay="50"
                    data-aos-duration="500"

                >
                    About Us</h1>
            </div>
            <div className={`row ${abStyle.welcomeToSpectra}`}>
                <div className={`col-md-7 ${abStyle.welcmContent}`}>

                    <div
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        data-aos-delay="50"
                    >
                        <p>Welcome to Spectra Global pvt Ltd, where our primary goal is to help clients grow and preserve their wealth while effectively managing their financial affairs.</p>
                        <p>Our financial prosperity is the cornerstone of your future success. With years of experience in the financial industry, our team of experts is dedicated to providing tailored financial solutions that align with your individual/institutional needs and goals.</p>
                        <p>At Spectra Global, our primary objective is to preserve and grow the wealth. we understand that each financial journey is unique, which is why we offer a range of investment options designed to help you achieve what you aspire. The long-term investment horizons and can allocate funds across a wide range of asset classes, including stocks, bonds, real estate, private equity, infrastructure projects, and alternative investments.</p>
                        <p>Whatever your goals, be it investment holding company, private equity, public market funds, debt investments or anything more, our portfolio is designed to provide you with the flexibility to choose from the best options for your convenience and feasibility. </p>

                    </div>
                </div>
                <div
                    className={`col-md-5 ${abStyle.welcmImg}`}
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-delay="50"
                >
                    <img
                        src={require(`../../../Assets/Img/${aboutImgSection.about_spectra_img}`)}
                        alt="welcomeimg"
                    />
                </div>
            </div>
            <div className={abStyle.whySpectraWealth}>
                <h3
                    className={abStyle.whySpectraHeading}
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="50"

                >
                    Why Spectra Global?
                </h3>
                <div className={abStyle.whySpectraWealthItems}>
                    <div className={`row ${abStyle.whySpectraItemsSection}`}>
                        <div
                            className={`col-md-3 ${abStyle.whySpectraSingleItem}`}
                            // style={{ borderRadius: " 2rem 2rem 0" }}
                            data-aos="fade-down"
                            data-aos-delay="0"
                        >
                            <img
                                src={require(`../../../Assets/Icons/${aboutImgSection.about_cust_img}`)}
                                alt=""
                            />
                            <p className={abStyle.whySpectraItemContent}>Bespoke and customisable fund structure</p>
                        </div>
                        <div
                            className={`col-md-3 ${abStyle.whySpectraSingleItem}`}
                            // style={{ borderRadius: "2rem 0 2rem 2rem" }}
                            data-aos="fade-down"
                            data-aos-delay="100"
                        >
                            <img
                                src={require(`../../../Assets/Icons/${aboutImgSection.about_browser_img}`)}
                                alt=""
                            />
                            <p className={abStyle.whySpectraItemContent}>Segregated Investment platform</p>
                        </div>
                        <div
                            className={`col-md-3 ${abStyle.whySpectraSingleItem}`}
                            data-aos="fade-down"
                            data-aos-delay="200"
                        //  style={{ borderRadius: "2rem  2rem  2rem 0" }}
                        >
                            <img
                                src={require(`../../../Assets/Icons/${aboutImgSection.about_risk_img}`)}
                                alt=""
                            />
                            <p className={abStyle.whySpectraItemContent}>Robust risk management and absolute compliance</p>
                        </div>
                        <div
                            className={`col-md-3 ${abStyle.whySpectraSingleItem}`}
                            data-aos="fade-down"
                            data-aos-delay="300"
                        // style={{ borderRadius: " 2rem 2rem 0" }}
                        >
                            <img
                                src={require(`../../../Assets/Icons/${aboutImgSection.about_teamWork_img}`)}
                                alt=""
                            />
                            <p className={abStyle.whySpectraItemContent}>A board and a team with a vast experience and subject matter expertise</p>
                        </div>
                        <div
                            className={`col-md-3 ${abStyle.whySpectraSingleItem}`}
                            data-aos="fade-down"
                            data-aos-delay="400"
                        // style={{ borderRadius: "2rem 0 2rem 2rem" }}
                        >
                            <img
                                src={require(`../../../Assets/Icons/${aboutImgSection.about_monitor_img}`)}
                                alt=""
                            />
                            <p className={abStyle.whySpectraItemContent}>Detailed reporting and monitoring of investments through proprietary tools</p>
                        </div>
                        <div
                            className={`col-md-3 ${abStyle.whySpectraSingleItem}`}
                            data-aos="fade-down"
                            data-aos-delay="500"
                        //  style={{ borderRadius: "2rem  2rem  2rem 0" }}
                        >
                            <img
                                src={require(`../../../Assets/Icons/${aboutImgSection.about_publicService_img}`)}
                                alt=""
                            />
                            <p className={abStyle.whySpectraItemContent}>Access to a network of world class service providers, dedicated local Investment Advisor for all deal sourcing requirements</p>
                        </div>
                        <div
                            className={`col-md-3 ${abStyle.whySpectraSingleItem}`}
                            // style={{ borderRadius: " 2rem 2rem 0" }}
                            data-aos="fade-down"
                            data-aos-delay="600"
                        >
                            <img
                                src={require(`../../../Assets/Icons/${aboutImgSection.about_advisor_img}`)}
                                alt=""
                            />
                            <p className={abStyle.whySpectraItemContent}>Flexibility in appointing intermediaries of choice</p>
                        </div>
                        <div className={`col-md-3  ${abStyle.whySpectraSingleItem}`}
                            data-aos="fade-down"
                            data-aos-delay="700"
                        //  style={{ borderRadius: "2rem  2rem  2rem 0" }}
                        >
                            <img
                                src={require(`../../../Assets/Icons/${aboutImgSection.about_hassleFree_img}`)}
                                alt=""
                            />
                            <p className={abStyle.whySpectraItemContent}>Hassle free client on-boarding</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs