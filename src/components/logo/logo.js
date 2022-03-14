import background from "../../assets/rotating-logo/fridgeful-background.png";
import fridge from "../../assets/rotating-logo/fridgeful-fridge.png";
import "./logo.scss";

function Logo() {
  return (
    <div className="logo">
      <div>
        <img src={background} className="logo-background" alt="logo" />
      </div>
      <a href="https://be-fridgeful.netlify.app/">
        <img src={fridge} className="logo-fridge" alt="logo" />
      </a>
    </div>
  );
}

export default Logo;
