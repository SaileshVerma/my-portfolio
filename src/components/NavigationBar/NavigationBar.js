import "./NavigationBar.css";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import playstore from "../../assets/icons/playstore.svg";
import { UserSocialUrl } from "./constants";

function NavigationBar() {
  return (
    <div className="Nav-container">
      <div className="row-container">
        <h1>Logo</h1>
        <div className="Nav-links">
          <a href="/home" className="nav-link-item">
            Home
          </a>
          <a href="/home" className="nav-link-item">
            Skills
          </a>
          <a href="/home" className="nav-link-item">
            Projects
          </a>
        </div>
      </div>

      <div>
        <div className="Nav-social-links">
          <a
            className="Nav-social-icon"
            target="_blank"
            rel="noopener noreferrer"
            href={UserSocialUrl.LINKEDIN}
          >
            <img height={20} width={20} alt="linkedIn" src={linkedin} />
          </a>

          <a
            className="Nav-social-icon"
            target="_blank"
            rel="noopener noreferrer"
            href={UserSocialUrl.GITHUB}
          >
            <img height={20} width={20} alt="github" src={github} />
          </a>

          <a
            className="Nav-social-icon"
            target="_blank"
            rel="noopener noreferrer"
            href={UserSocialUrl.PLAYSTORE}
          >
            <img height={20} width={20} alt="playstore" src={playstore} />
          </a>
        </div>
      </div>

      <a
        rel="noopener noreferrer"
        target="_blank"
        className="nav-button"
        href={UserSocialUrl.GMAIL}
      >
        Let's Connect
      </a>
    </div>
  );
}

export default NavigationBar;
