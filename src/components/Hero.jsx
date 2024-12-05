import hero from "../assets/hero.avif";
import heroine from "../assets/heroine.avif";
import ShopButton from "./Shopbutton";
const Hero = function () {
  return (
    <>
      <div className="herotext">
        <div className="heading">Welcome to Store!</div>
        <div className="subheading">(A very unique name, I know)</div>
        <div className="description">
          A place for Exceptional quality fake products.
          <br /> I assure you, none of these are real.
        </div>
      </div>
      <div className="heroimg">
        <img src={hero} alt="hero" />
        <img src={heroine} alt="heroine" />
      </div>
      {/* <button className="shop-button">Shop Now!</button>
       */}
       <ShopButton />
      <footer>
        {" "}
        Built by
        <a href="https://github.com/Licarsmeth"> ©Licarsmeth</a>
        -2024
      </footer>
    </>
  );
};

export default Hero;
