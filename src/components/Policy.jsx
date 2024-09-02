import { assets } from "../assets/frontend_assets/assets";
const Policy = () => {
  return (
    <>
      <div className="policy-container">
        <div className="policy">
          <img src={assets.exchange_icon} alt="" />
          <h3>Easy Exchange Policy</h3>
          <p>We offer hassle free exchange policy</p>
        </div>
        <div className="policy">
          <img src={assets.quality_icon} alt="" />
          <h3>7 Days Return Policy</h3>
          <p>We provide 7 days free return policy</p>
        </div>
        <div className="policy">
          <img src={assets.support_img} alt="" />
          <h3>Best customer support</h3>
          <p>we provide 24/7 customer support</p>
        </div>
      </div>
    </>
  );
};
export default Policy;
