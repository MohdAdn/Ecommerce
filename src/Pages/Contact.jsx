import { assets } from "../assets/frontend_assets/assets";
import Subcribes from "../components/Subcribed";

const Contact = () => {
  return (
    <>
      <h2 className="about-us">Contact Us</h2>
      <div className="about-us-section1">
        <img id="contact-img" src={assets.contact_img} alt="" />
        <div className="contact-us">
          <h3>Our Store</h3>
          <span>
            54709 Willms Station
            <br /> Suite 350, Washington, USA
          </span>
          <span>Tel: (415) 555-0132</span>
          <span>Email: admin@shopcart.com</span>
          <h3>Careers at Shopcart</h3>
          <p>Learn more about our teams and job openings.</p>
          <button className="track">Explore Jobs</button>
        </div>
      </div>
      <Subcribes />
    </>
  );
};
export default Contact;
