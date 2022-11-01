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
          src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"
          alt=""
          onClick={() => navigate("/home")}
        />
        <NavbarLink to="/home">Recipe</NavbarLink>
      </div>
      <HamburgerMenu onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </HamburgerMenu>
      <MenuDiv isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <NavbarLink to="/about">About</NavbarLink>

        <NavbarLinka href="https://github.com/mmehel52" target="_blank">
          GitHub
        </NavbarLinka>

        <NavbarLink to="/">Logout</NavbarLink>
      </MenuDiv>
    </NavStyled>
  );
}

export default Nav;
