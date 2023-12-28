import React from 'react'
import ourStyle from './OurServices.module.scss'

import theme from '../../../JSON/theme_css.json'

const OurServices = () => {
  const { ourServicesImg } = theme

  return (
    <div className={ourStyle.ourServicesMainSection}>
      <div className={ourStyle.ourServicesInfoSection}>
        <div>
          <h1
            className={ourStyle.ourServcesMainHeading}
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="500"
          >
            Services Offered
          </h1>
        </div>
        <div className={`row ${ourStyle.fundAdvisory}`}>
          <div className={`col-md-7 ${ourStyle.fundAdvisoryContent}`}>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="50"
            >
              <h2 className={ourStyle.fundAdvisoryHeading}>Fund Advisory</h2>
              <p>At Spectra Global, our team of subject matter experts provide multi-jurisdictional advisory solutions that helps our clients make informed decisions for their investment structure.</p>
              <p>We are your one stop shop to navigate the regulatory framework and make the most of opportunities. We work with intermediaries from multiple disciplines to help our clients execute their deals seamlessly.</p>
              <p>We provide a comprehensive and a granular level review of the transaction, with respect to the financial structure, tasks, timeline, challenges and solutions with a knack for a relatively low turnaround time.</p>
            </div>
          </div>
          <div
            className={`col-md-5 ${ourStyle.fundAdvisoryImg}`}
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="50"
          >
            <img
              src={require(`../../../Assets/Img/${ourServicesImg.ourserv_fundadvisory_img}`)}
              alt="welcomeimg"
            />
          </div>
        </div>

      </div>

      <div className={ourStyle.assetsManagementSection}>

        <div className={ourStyle.assetsManagement}>
          <div className={ourStyle.assetsManagementContent}>
            <h2
              className={ourStyle.assetsManagtHeading}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="50"
            >
              Asset Management
            </h2>
            <p
              className={ourStyle.spectraGlobaloffer}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Spectra Global offer a comprehensive range of services designed to help our wide mix of sophisticated clients optimize their investment portfolios and achieve their financial goals. Our services include:
            </p>
          </div>
        </div>

        <div
          className={ourStyle.fundManagementMainSection}
          data-aos="fade-right"
          data-aos-delay="0"
        >
          <div className={`row ${ourStyle.fundManagementSection}`}>
            <div className={`col-md-6 ${ourStyle.fundManagementContentSection}`}>
              <h2 className={ourStyle.fundManagementHeading}>Investment Planning</h2>
              <p className={ourStyle.fundManagementContent}>
                Investment planning is the process of setting financial goals, assessing your risk tolerance, creating a strategy, and implementing a plan to achieve those goals and We regularly review and revise your plan to ensure it remains aligned with your changing financial situation and objectives.
              </p>
            </div>
            <div className={`col-md-6 ${ourStyle.fundManagementImg}`}>
              <img
                src={require(`../../../Assets/Img/${ourServicesImg.ourserv_investment_img}`)}
                alt="investment"
              />
            </div>
          </div>
        </div>

        <div
          className={`${ourStyle.fundManagementMainSection} ${ourStyle.fundManagement}`}
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <div className={`row ${ourStyle.fundManagementSection}`}>
            <div className={`col-md-6 ${ourStyle.fundManagementImg}`}>
              <img
                src={require(`../../../Assets/Img/${ourServicesImg.ourserv_portfolio_img}`)}
                alt="portfolio"
              />
            </div>
            <div className={`col-md-6 ${ourStyle.fundManagementContentSection}`}>
              <h2 className={ourStyle.fundManagementHeading}>Portfolio Management</h2>
              <p className={ourStyle.fundManagementContent}>
                It's important to align your portfolio with your investment objectives, regularly monitor its performance, and make adjustments as needed to stay on track towards your financial goals.
              </p>
            </div>
          </div>
        </div>
        <div
          className={ourStyle.fundManagementMainSection}
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className={`row ${ourStyle.fundManagementSection}`}>
            <div className={`col-md-6 ${ourStyle.fundManagementContentSection}`}>
              <h2 className={ourStyle.fundManagementHeading}>Asset Allocation</h2>
              <p className={ourStyle.fundManagementContent}>
                Asset allocation is the strategic process of dividing an investment portfolio among different asset classes, such as stocks, bonds, cash, and alternative investments.
              </p>
            </div>
            <div className={`col-md-6 ${ourStyle.fundManagementImg}`}>
              <img
                src={require(`../../../Assets/Img/${ourServicesImg.ourserv_payChart_img}`)}
                alt="payChart"
              />
            </div>

          </div>
        </div>
        <div
          className={`${ourStyle.fundManagementMainSection} ${ourStyle.fundManagement}`}
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <div className={`row ${ourStyle.fundManagementSection}`}>
            <div className={`col-md-6 ${ourStyle.fundManagementImg}`}>
              <img
                src={require(`../../../Assets/Img/${ourServicesImg.ourserv_riskmanagement_img}`)}
                alt="riskmanagement"
              />
            </div>
            <div className={`col-md-6 ${ourStyle.fundManagementContentSection}`}>
              <h2 className={ourStyle.fundManagementHeading}>Risk Management</h2>
              <p className={ourStyle.fundManagementContent}>
                It involves understanding and managing both systematic risks (market-wide risks that affect all investments) and specific risks (risks specific to individual investments).
              </p>
            </div>
          </div>
        </div>
        <div
          className={ourStyle.fundManagementMainSection}
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <div className={`row ${ourStyle.fundManagementSection}`}>
            <div className={`col-md-6 ${ourStyle.fundManagementContentSection}`}>
              <h2 className={ourStyle.fundManagementHeading}>Performance Reporting</h2>
              <p className={ourStyle.fundManagementContent}>
                Performance reporting in investment refers to the process of evaluating and communicating the performance of an investment portfolio over a specific period.
              </p>
            </div>
            <div className={`col-md-6 ${ourStyle.fundManagementImg}`}>
              <img
                src={require(`../../../Assets/Img/${ourServicesImg.ourserv_performancerep_img}`)}
                alt="performancerep"
              />
            </div>

          </div>
        </div>
        <div
          className={`${ourStyle.fundManagementMainSection} ${ourStyle.fundManagement}`}
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <div className={`row ${ourStyle.fundManagementSection}`}>
            <div className={`col-md-6 ${ourStyle.fundManagementImg}`}>
              <img
                src={require(`../../../Assets/Img/${ourServicesImg.ourserv_balancing_img}`)}
                alt="balancing"
              />
            </div>
            <div className={`col-md-6 ${ourStyle.fundManagementContentSection}`}>
              <h2 className={ourStyle.fundManagementHeading}>Ongoing Monitoring and Rebalancing</h2>
              <p className={ourStyle.fundManagementContent}>
                Ongoing monitoring and rebalancing are important components of portfolio management to ensure that the investment portfolio remains aligned with the desired asset allocation and investment objectives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices