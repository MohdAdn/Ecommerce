import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Badge } from "@mui/material";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { useProduct } from "../Context/ProductContext";
const Navbar = () => {
  const { cartCount } = useProduct();
  return (
    <>
      <div className="Nav-container">
        <img src={assets.logo} alt="" className="logo-img" />
        <div className="nav-content ">
          <NavLink to={"/"} className="navbar-link">
            <p>HOME</p>
          </NavLink>
          <NavLink to={"/collection"} className="navbar-link">
            <p>COLLECTION</p>
          </NavLink>

          <NavLink to={"/about"} className="navbar-link">
            <p>ABOUT US</p>
          </NavLink>
          <NavLink to={"/contact"} className="navbar-link">
            <p>CONTACT US</p>
          </NavLink>
          <NavLink to={"/admin"} className="navbar-link">
            <button>Admin Panel</button>
          </NavLink>
        </div>
        <div className="icons">
          <IconButton style={{ color: "black" }} className="person">
            <PersonIcon sx={{ marginRight: 1 }} fontSize="large" />
            <div className="user-data">
              <NavLink id="link" to={"/order"}>
                <p>Orders</p>
              </NavLink>
              <p>Profile</p>
              <p>Logout</p>
            </div>
          </IconButton>
          <NavLink to={"/cart"}>
            <IconButton style={{ color: "black" }}>
              <Badge badgeContent={cartCount} color="secondary">
                <ShoppingBagIcon fontSize="large" />
              </Badge>
            </IconButton>
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Navbar;
