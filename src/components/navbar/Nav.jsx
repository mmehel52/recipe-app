import { Link } from "react-router-dom";
import NavStyled, {
  NavbarLink,
  NavImg,
  NavbarLinka,
  HamburgerMenu,
  MenuDiv,
} from "./NavStyled.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <NavStyled>
      <div>
        <NavImg
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/2397px-Recipe-575434.svg.png"
          alt=""
          onClick={() => navigate("/home")}
        />
        <NavbarLink to="/home">Recipe App</NavbarLink>
      </div>
      <HamburgerMenu onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu style={{ fontSize: "45px" }} />
      </HamburgerMenu>
      <MenuDiv isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <NavbarLink to="/about">About</NavbarLink>
        <NavbarLink to="/register">Register</NavbarLink>

        <NavbarLink to="/">Logout</NavbarLink>
      </MenuDiv>
    </NavStyled>
  );
}

export default Nav;
