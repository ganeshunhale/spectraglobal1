import React, { useCallback, useEffect, useState } from 'react'
import { Button, Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import headerStyle from './Header.module.scss'
import theme from '../../../JSON/theme_css.json'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { SetMenuItemAction } from '../../Redux/SpectraAction';
import { useDispatch } from 'react-redux';
import { BiSearch } from 'react-icons/bi'
import { SlSocialTwitter } from "react-icons/sl";
import { CiLinkedin } from "react-icons/ci";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';


const Header = () => {
  const { imageSection } = theme
  const [dataitems, setdataitems] = useState([])
  const dispatch = useDispatch()
  const [showOffcanvas, setShowOffcanvas] = useState(false);



  useEffect(() => {
    let temp = [
      {
        title: 'Home',
        href: '/',
      },
      {
        title: 'About Us',
        href: 'about-us',
      },
      {
        title: 'Our Services',
        href: 'our-services',
      },
      // {
      //   title: 'Our Team',
      //   href: 'our-team',
      // },
      {
        title: 'Contact Us',
        href: 'contact-us',
      },
    ]
    setdataitems(temp)
    dispatch(SetMenuItemAction(temp))
  }, [])
  const handleNavLinkClick = useCallback(() => {
    setShowOffcanvas(false); // Close the offcanvas menu
  }, []);
  return (
    <div className={headerStyle.navBarSection}>

      <Navbar expand="lg" collapseOnSelect className={headerStyle.headerMainSection}>
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className={headerStyle.brandSection}>
            <img
              src={require(`../../../Assets/Icons/${imageSection.mainlogo}`)}
              alt="cosmiclogo"
              className={headerStyle.responsiveimg}
            />
          </Navbar.Brand>
          <Navbar.Toggle onClick={() => setShowOffcanvas((prevShow) => !prevShow)} aria-controls="offcanvasNavbar-expand-lg" className={headerStyle.menubtn}/>
          <Navbar.Offcanvas
          show={showOffcanvas}
          onClick={() => setShowOffcanvas(false)}
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton >
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
               
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className={headerStyle.bodySection}>
              <Nav className="justify-content-end flex-grow-1">
                {dataitems.map((item, index) => {
                  return (
                    <div key={index} className={`header-nav-link ${headerStyle.headerNavLink}`}>
                      {
                        <NavLink to={item.href} onClick={handleNavLinkClick} className={`nav-link ${headerStyle.navLink}`}>{item.title}</NavLink>
                      }
                    </div>
                  )
                })}
              </Nav>
              {/* <Nav className={`justify-content-end flex-grow-1 pe-3 ${headerStyle.iconSection}`}>
                <div className={`nav-link ${headerStyle.navLink}`}>
                  <span>
                    <BiSearch />
                  </span>
                </div>
                <NavLink to="#" className={`nav-link ${headerStyle.navLink}`}>
                  <span>
                  <BsTwitter />
                  </span>
                </NavLink>
                <NavLink to="#" className={`nav-link ${headerStyle.navLink}`}>
                  <span>
                  <BsLinkedin />
                  </span>
                </NavLink>
                <NavLink to="#" className={`nav-link ${headerStyle.navLink}`}>
                  <span>
                  <BsFacebook />
                  </span>
                </NavLink>
                <NavLink to="#" className={`nav-link ${headerStyle.navLink}`}>
                  <span>
                  <BsYoutube />
                  </span>
                </NavLink>

              </Nav> */}
              {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header