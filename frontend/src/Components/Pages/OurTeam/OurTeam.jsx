import React from 'react'
import ourTeam from './OurTeam.module.scss'
import abStyle from '../AboutUs/AboutUs.module.scss'

import theme from '../../../JSON/theme_css.json'
const OurTeam = () => {
    const { ourTeamSection } = theme
    return (
        <div className={ourTeam.ourTeamMainSection}>
            <div className={ourTeam.ourTeamBanner}>
                <div className={ourTeam.ourTeamBanner1}></div>
                <div className={ourTeam.ourTeamMainHeading}>
                    <h1 data-aos="fade-down">Our Team</h1>
                </div>
            </div>
            <div className={`row ${ourTeam.ourTeamMemberSection}`}>
                <div className={`col-3 ${ourTeam.ourTeamMemberItem}`}>
                    <img
                        src={require(`../../../Assets/Img/${ourTeamSection.ourteamMemeber1_img}`)}
                        alt=""
                    />
                    <div>
                        <h5 className={ourTeam.teamMemberPerson}>RITESH ABBI</h5>
                        <p className={ourTeam.teamMemberPosition}>
                            <strong>
                                Chief Executive Officer and Executive Director
                            </strong>
                        </p>
                        <div>
                            <p>Ritesh is the Chief Executive Officer and Executive Director at Kingsman. Ritesh is a Senior Banker & Fund Advisor with more than 20 years of experience as a business leader and innovator.</p>
                            <p>Over the course of his career in India, The Middle East & Mauritius, Ritesh has worked across various aspects of Fund Management that include Fund Administration & Advisory, Banking & Trade Operations and Investment Management especially focusing on Corporate & Institutional investors. Ritesh has served as a Director for various funds focusing on India as well as global investments. He is a qualified Master Financial Planner (MFP) from AAFM, USA, an Associate in Insurance (A.I.I) and also holds an MBA from India.</p>
                        </div>
                    </div>
                </div>
                <div className={`col-3 ${ourTeam.ourTeamMemberItem}`}>
                    <img
                        src={require(`../../../Assets/Img/${ourTeamSection.ourteamMemeber2_img}`)}
                        alt=""
                    />
                    <div>
                        <h5 className={ourTeam.teamMemberPerson}>DEVENDRA SEEBALUCK (DAVE)</h5>
                        <p className={ourTeam.teamMemberPosition}><strong>Director</strong></p>
                        <div>
                            <p>Dave is an Independent Director on the board of Kingsman. Dave is an experienced investment and finance professional with over 15 years of experience in the financial services industry.</p>
                            <p>He is skilled in equity, trading, asset management, wealth management and portfolio construction. Dave is a Fund Manager for funds investing primarily in India and Africa. He holds a Master of Business Administration (MBA) and MSc in Investment and finance from Middlesex University, London. </p>
                        </div>
                    </div>
                </div>
                <div className={`col-3 ${ourTeam.ourTeamMemberItem}`}>
                    <img
                        src={require(`../../../Assets/Img/${ourTeamSection.ourteamMemeber3_img}`)}
                        alt=""
                    />
                    <div>
                        <h5 className={ourTeam.teamMemberPerson}>MITHILESH SOOBARAH</h5>
                        <p className={ourTeam.teamMemberPosition}><strong>Director</strong></p>
                        <div>
                            <p>Mithilesh has 14 years of working experience including 13 years in the Investment Management field. He has a track record of investment into Emerging Markets.</p>
                            <p>His experience includes the setting up of Investment Funds, Portfolio Construction and Investment Advisory for Institutional clients. Mithilesh holds a master’s degree in Investment and Finance from Middlesex University, London. He also holds a bachelor’s degree in Banking and International Finance from University of Technology, Mauritius. Mithilesh acts also as independent director on several offshore investment funds and investment advisory firm.</p>
                        </div>
                    </div>
                </div>
                <div className={`col-3 ${ourTeam.ourTeamMemberItem}`}>
                    <img
                        src={require(`../../../Assets/Img/${ourTeamSection.ourteamMemeber4_img}`)}
                        alt=""
                    />
                    <div>
                        <h5 className={ourTeam.teamMemberPerson}>ANKIT SINGH</h5>
                        <p className={ourTeam.teamMemberPosition}><strong>Head of Risk Management and Operations</strong></p>
                        <div>
                            <p>Ankit is in-charge of operations and risk management at Kingsman where his manages operations and trading risk across various geographies and asset classes for all funds advised or managed by the Kingsman group. An avid financial market enthusiast, Ankit holds a bachelor degree in Financial Market and a masters in Finance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeam