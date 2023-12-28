import React, { useCallback, useEffect, useState } from 'react';
import { Button, Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { SetMenuItemAction } from '../../Redux/SpectraAction';
import { useDispatch } from 'react-redux';
import { BiSearch } from 'react-icons/bi';
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';
import headerStyle from './Header.module.scss';
import theme from '../../../JSON/theme_css.json';

const Header = () => {
  const { imageSection } = theme;
  const [dataitems, setdataitems] = useState([]);
  const dispatch = useDispatch();
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
    ];
    setdataitems(temp);
    dispatch(SetMenuItemAction(temp));
  }, []);

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
          <Navbar.Toggle
            aria-controls="offcanvasNavbar-expand-lg"
            className={headerStyle.menubtn}
            onClick={() => setShowOffcanvas((prevShow) => !prevShow)} // Toggle the offcanvas menu
          />
          <Offcanvas
            show={showOffcanvas}
            onHide={() => setShowOffcanvas(false)} // Close the offcanvas menu when clicked outside
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className={headerStyle.bodySection}>
              <Nav className="justify-content-end flex-grow-1">
                {dataitems.map((item, index) => {
                  return (
                    <div key={index} className={`header-nav-link ${headerStyle.headerNavLink}`}>
                      <NavLink
                        to={item.href}
                        className={`nav-link ${headerStyle.navLink}`}
                        onClick={handleNavLinkClick} // Close the offcanvas menu
                      >
                        {item.title}
                      </NavLink>
                    </div>
                  );
                })}
              </Nav>
              {/* Rest of the code */}
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
