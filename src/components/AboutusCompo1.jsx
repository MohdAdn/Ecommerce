import { assets } from "../assets/frontend_assets/assets";

const FirstSection = () => {
  return (
    <div className="about-us-section1">
      <div className="about-us-desc">
        <img src={assets.about_img} alt="" />
        <p>
          Shopcart was born out of a passion for innovation and a desire to
          revolutionize the way people shop online. Our journey began with a
          simple idea: to provide a platform where customers can easily
          discover, explore, and purchase a wide range of products from the
          comfort of their homes.
          <br />
          <br />
          Since our inception, we've worked tirelessly to curate a diverse
          selection of high-quality products that cater to every taste and
          preference. From fashion and beauty to electronics and home
          essentials, we offer an extensive collection sourced from trusted
          brands and suppliers.
          <h2>Our Mission</h2>
          <p>
            Our mission at Shopcart is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </p>
      </div>
    </div>
  );
};
export default FirstSection;
