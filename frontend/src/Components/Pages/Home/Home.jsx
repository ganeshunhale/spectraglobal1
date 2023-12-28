import React, { useCallback, useState } from 'react'
import { loadFull } from 'tsparticles'
import Particles from 'react-particles'
import aboutimg from '../../../Assets/Img/AboutusSection.png'
import GlobeAnimaton from './GlobalAnimation/GlobalAnimation'
import { OurTeamCarousel } from './OurTeamCarousel'
import particlesConfig from '../../../JSON/particlesConfig.json'
import homeStyle from './Home.module.scss'
import { Link } from 'react-router-dom'
import theme from '../../../JSON/theme_css.json'


const Home = () => {
  const { homeIcons } = theme

  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    await loadFull(engine);
  }, []);


  return (
    <div>
      <div className={homeStyle.homeSection}>
        <div className={homeStyle.homeTopSection}>
          <Particles
            id="tsparticles"
            className={homeStyle.tsParticles}
            init={particlesInit}
            // loaded={particlesLoaded}
            options={particlesConfig}
          />
          <GlobeAnimaton />

          <div className={homeStyle.globalContent}>
            <div>
              <p className={homeStyle.globalInvestment}>GLOBAL INVESTMENT <br />PLATFORM</p>
              <p className={homeStyle.repetitive}>100+ MAN YEARS OF <br />ASSET MANAGEMENT <br />EXPERIENCE</p>
              {/* <p className={homeStyle.bespokeAndCurates}>BESPOKE AND CURATED INVESTMENT SOLUTION</p>
                <p className={homeStyle.robustCompliance}>ROBUST COMPLIANCE AND GOVERNANCE STATNDARDS</p>  */}

            </div>
          </div>
        </div>
        {/* <div className={homeStyle.gradient1}></div> */}
        <div className={homeStyle.spectraInfo}>
          <div
            className={homeStyle.cardSection}>
            <div
              className={`${homeStyle.card} ${homeStyle.card1}`}
              data-aos="fade-up"
            >
              <p className={homeStyle.cardtext}>Segregated Investment Structure</p>
            </div>
            <div
              className={`${homeStyle.card} ${homeStyle.card2}`}
              data-aos="fade-down"
            >
              <p className={homeStyle.cardtext}>Trusted Service Partners</p>
            </div>
            <div
              className={`${homeStyle.card} ${homeStyle.card3}`}
              data-aos="fade-up"
            >
              <p className={homeStyle.cardtext}>Suitable for Sophisticated Investors Worldwide</p>
            </div>
          </div>
          <div className={homeStyle.aboutSection}>
            <div className={homeStyle.aboutSectionBg}>
              <img
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                src={require(`../../../Assets/Img/${homeIcons.home_aboutBg_img}`)}
                alt="aboutimg"
              />
              <div className={homeStyle.aboutContent}>
                <h1
                  className={homeStyle.aboutHeading}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >About Us</h1>
                <div
                  data-aos="zoom-in-up"
                  data-aos-duration="2000"
                >
                  <p className={homeStyle.aboutContentInfo}>
                    Welcome to Spectra Global pvt Ltd, where our primary goal is to help clients grow and preserve their wealth while effectively managing their financial affairs.
                  </p>
                  <p className={homeStyle.aboutContentInfo}>
                    Our financial prosperity is the cornerstone of your future success. With experience in the financial industry, our team of experts is dedicated to providing tailored financial solutions that align with your individual/institutional needs and goals.
                  </p>
                  <p className={homeStyle.aboutContentInfo}>
                    At Spectra Global, our primary objective is to preserve and grow the wealth. we understand that each financial journey is unique, which is why we offer a range of investment options designed to help you achieve what you aspire. The long-term investment horizons and can allocate funds across a wide range of asset classes, including stocks, bonds, real estate, private equity, infrastructure projects, and alternative investments.
                    <Link to='about-us'>
                      <span style={{ color: '#FFB13E' }}>Read More</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={homeStyle.whoweAreSection}>
            <p
              className={homeStyle.whoweAreHeader}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="50"
            >
              Who We Are
            </p>
            <div className={homeStyle.rowof3} >
              <div
                className={homeStyle.whoWeAreSqures}
                style={{ borderRadius: "35px 35px 0px 35px" }}
                data-aos="fade-right"
                data-aos-delay="0"
              >
                <div className={homeStyle.circle}>
                  <img
                    src={require(`../../../Assets/Icons/${homeIcons.home_gateway_icon}`)}
                    alt="gateway"
                  />
                </div>
                <p>Spectra Global is a gateway to your global investment needs</p>
              </div>
              <div
                className={` ${homeStyle.whoWeAreSqures} ${homeStyle.bluesqares}`}
                style={{ borderRadius: "35px 0px 35px 35px" }}
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <div className={homeStyle.circle}>
                  <img
                    src={require(`../../../Assets/Icons/${homeIcons.home_allow_icon}`)}
                    alt="gateway"
                  />
                </div>
                <p>Allow you to pick an asset class of choice: debt, listed & unlisted equities, derivatives</p>
              </div>
              <div
                className={homeStyle.whoWeAreSqures}
                style={{ borderRadius: "35px 35px 35px 0px" }}
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className={homeStyle.circle}>
                  <img
                    src={require(`../../../Assets/Icons/${homeIcons.home_identifying_icon}`)}
                    alt="gateway"
                  />
                </div>
                <p>Identifying and guiding for alternative investment opportunities</p>
              </div>
            </div>
            <div className={homeStyle.rowof3}>
              <div
                className={` ${homeStyle.whoWeAreSqures} ${homeStyle.bluesqares}`}
                style={{ borderRadius: "35px 0px 35px 35px" }}
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <div className={homeStyle.circle}>
                  <img
                    src={require(`../../../Assets/Icons/${homeIcons.home_cost_icon}`)}
                    alt="gateway"
                  />
                </div>
                <p>Cost efficient investment platform offering unbundled pricing and open architecture</p>
              </div>
              <div
                className={homeStyle.whoWeAreSqures}
                style={{ borderRadius: "35px 35px 0px 35px" }}
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <div className={homeStyle.circle}>
                  <img
                    src={require(`../../../Assets/Icons/${homeIcons.home_offiring_icon}`)}
                    alt="gateway"
                  />
                </div>
                <p>Offering flexibility to investors and fund managers within the defined regulations</p>
              </div>
              <div
                className={` ${homeStyle.whoWeAreSqures} ${homeStyle.bluesqares}`}
                style={{ borderRadius: "0px 35px 35px 35px" }}
                data-aos="fade-right"
                data-aos-delay="500"
              >
                <div className={homeStyle.circle}>
                  <img
                    src={require(`../../../Assets/Icons/${homeIcons.home_product_icon}`)}
                    alt="gateway"
                  />
                </div>
                <p>Creating a niche product for institutional investors to cater to their sophisticated needs</p>
              </div>
            </div>
            <div className={homeStyle.rowof1}>
              <div
                className={` ${homeStyle.whoWeAreSqures} ${homeStyle.bluesqares}`}
                style={{ borderRadius: "0px 35px 35px 35px" }}
                data-aos="fade-right"
                data-aos-delay="500"
              >
                <div className={homeStyle.circle}>
                  <img
                    src={require(`../../../Assets/Icons/${homeIcons.home_providing_icon}`)}
                    alt="gateway"
                  />
                </div>
                <p>Providing a robust infrastructure for all the operational needs of investors</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={homeStyle.ourTeamSection}>
          <div className={homeStyle.headerwrapper}>
            <p
              className={homeStyle.ourTeamHeading}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="50"
            >
              Our Team
            </p>
            <OurTeamCarousel />
          </div>
          <div className={homeStyle.wouldYouLinkSection}>
            <p
              className={homeStyle.wouldYouLinkContent}
              data-aos="fade-right"
              data-aos-duration="100"
              data-aos-delay="50"
            >
              Would you like to
              know more?
            </p>
            <Link
              to='contact-us'
              className={homeStyle.ContectCircle}
              data-aos="fade-left"
              data-aos-duration="100"
              data-aos-delay="50"
            >
              <h4 className={homeStyle.wouldcircle}>Contact</h4>
            </Link>
          </div>
        </div> */}
      </div>

    </div>

  )
}

export default Home