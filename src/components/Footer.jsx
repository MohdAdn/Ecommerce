import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-left">
          <h1>SHOPCART</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            numquam consectetur itaque cum, doloribus quas quis est dolorem
            reprehenderit, sapiente facilis, sunt placeat accusantium officia
            quod!
          </p>
        </div>
        <div className="footer-mid">
          <h2>COMPANY</h2>
          <p>Home</p>
          <p>About us</p>
          <p>Delivery</p>
          <p>Privacy Policy</p>
        </div>
        <div className="footer-right">
          <h2>GET IN TOUCH</h2>

          <p>
            <IconButton style={{ color: "navy" }}>
              <PhoneAndroidIcon />
            </IconButton>

            <span>+91-8900020001</span>
          </p>
          <p>
            <IconButton style={{ color: "navy" }}>
              <EmailIcon />
            </IconButton>
            Shopcart.support@gamil.com
          </p>

          <p>
            <IconButton style={{ color: "navy" }}>
              <LinkedInIcon />
            </IconButton>

            <span>Shopcart@linkedin.in</span>
          </p>
        </div>
      </div>
      <hr />
      <h4>Copyright 2024@ Shopcart.com - All Right Reserved.</h4>
    </>
  );
};
export default Footer;
