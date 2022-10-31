import { Link } from "react-router-dom";
import NavStyled, { NavbarLink, NavImg, NavbarLinka } from "./NavStyled.js";
import { useNavigate } from "react-router-dom";

function Nav() {
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

      <div>
        <NavbarLink to="/about">About</NavbarLink>

        <NavbarLinka href="https://github.com/mmehel52" target="_blank">
          GitHub
        </NavbarLinka>

        <NavbarLink to="/">Logout</NavbarLink>
      </div>
    </NavStyled>
  );
}

export default Nav;
