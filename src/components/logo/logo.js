import background from  '../../assets/rotating-logo/fridgeful-background.png' ;
import fridge from '../../assets/rotating-logo/fridgeful-fridge.png';
import "./logo.scss";

function Logo() {
  return (
    <div className="logo">
      <div>
        <img src={background} className="logo-background" alt="logo" />
      </div>
      <img src={fridge} className="logo-fridge" alt="logo" />
    </div>
  );
}

export default Logo;
