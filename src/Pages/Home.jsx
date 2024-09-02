import BestSeller from "../components/BestSeller";
import Hero from "../components/Hero";
import Herosub from "../components/Hero-subSection";
import Policy from "../components/Policy";
import Subcribes from "../components/Subcribed";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Hero />
        <Herosub />
        <BestSeller />
        <Policy />
        <Subcribes />
      </div>
    </>
  );
};
export default Home;
