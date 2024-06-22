import "./NavigationBar.css";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import playstore from "../../assets/icons/playstore.svg";

function NavigationBar() {
  return (
    <div className="Nav-container">
      <div className="row-container">
        <h1>Logo</h1>
        <div className="Nav-links">
          <div className="nav-link-item">Home</div>
          <div className="nav-link-item">Skills</div>
          <div className="nav-link-item">Projects</div>
        </div>
      </div>

      <div>
        <div className="Nav-social-links">
          <div className="Nav-social-icon">
            <a href="">
              <img height={20} width={20} alt="linkedIn" src={linkedin} />
            </a>
          </div>
          <div className="Nav-social-icon">
            <a href="">
              <img height={20} width={20} alt="github" src={github} />
            </a>
          </div>
          <div className="Nav-social-icon">
            <a href="">
              <img height={20} width={20} alt="playstore" src={playstore} />
            </a>
          </div>
        </div>
      </div>

      <div className="nav-button">Let's Connect</div>
    </div>
  );
}

export default NavigationBar;
