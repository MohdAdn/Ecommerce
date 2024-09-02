import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero">
          <div className="hero-text">
            <p className="best-seller">OUR BEST SELLER</p>
            <p className="arrival">Latest Arrival</p>
            <NavLink to={"/collection"}>
              <button className="shop-btn">Shop Now</button>
            </NavLink>
          </div>
          <img
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
export default Hero;
