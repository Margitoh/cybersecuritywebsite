import { React, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { IconContext } from "react-icons";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavIcon,
} from "./NavbarStyles.js";
import { useLocation, useHistory } from "react-router-dom";
import { data } from "../../data/Navbardata";

const Navbar = () => {
  // eslint-disable-next-line no-undef
  const [show, setShow] = useState(false);

  let history = useHistory();
  let location = useLocation();

  const handleClick = () => {
    setShow(!show);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleMobileMenuClose = (to, id) => {
    if (id && location.pathname === "/") {
      scrollTo(id);
    }

    history.push(to);
    setShow(false);
  };

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon src="./assets/logo.png" alt="logo" />
            Worst Cyber Security Eu
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {show ? <FaTimes /> : <CgMenuRight />}
          </MobileIcon>
          <NavMenu show={show}>
            {data.map((el, index) => (
              <NavItem key={index}>
                <NavLinks onClick={() => handleMobileMenuClose(el.to, el.id)}>
                  {el.text}
                </NavLinks>
              </NavItem>
            ))}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
