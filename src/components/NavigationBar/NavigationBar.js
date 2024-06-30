import "./NavigationBar.css";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import playstore from "../../assets/icons/playstore.svg";
import twitter from "../../assets/icons/twitter.svg";
import medium from "../../assets/icons/medium.svg";
import leetcode from "../../assets/icons/leetcode.svg";

import { UserSocialUrl } from "../../utils/constants/nav_bar_data";
import { useEffect, useState } from "react";

function NavigationBar() {
  const [activeSection, setActiveSection] = useState("");

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  return (
    <section className={scrolling ? "navbar-onscroll" : "navbar"}>
      <div className="Nav-container">
        <div className="row-container">
          <h1>OSUDEV</h1>
          <div className="Nav-links">
            <a
              href="#home"
              className={
                activeSection === "home"
                  ? "active-nav-link-item"
                  : "nav-link-item"
              }
              onClick={() => {
                setActiveSection("home");
              }}
            >
              Home
            </a>
            <a
              href="#skill"
              className={
                activeSection === "skill"
                  ? "active-nav-link-item"
                  : "nav-link-item"
              }
              onClick={() => {
                setActiveSection("skill");
              }}
            >
              Skills
            </a>
            <a
              href="#project"
              className={
                activeSection === "project"
                  ? "active-nav-link-item"
                  : "nav-link-item"
              }
              onClick={() => {
                setActiveSection("project");
              }}
            >
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
              href={UserSocialUrl.LINKEDIN_URL}
            >
              <img height={20} width={20} alt="linkedIn" src={linkedin} />
            </a>

            <a
              className="Nav-social-icon"
              target="_blank"
              rel="noopener noreferrer"
              href={UserSocialUrl.GITHUB_URL}
            >
              <img height={20} width={20} alt="github" src={github} />
            </a>

            <a
              className="Nav-social-icon"
              target="_blank"
              rel="noopener noreferrer"
              href={UserSocialUrl.PLAYSTORE_URL}
            >
              <img height={20} width={20} alt="playstore" src={playstore} />
            </a>

            <a
              className="Nav-social-icon"
              target="_blank"
              rel="noopener noreferrer"
              href={UserSocialUrl.TWITTER_URL}
            >
              <img height={20} width={20} alt="twitter" src={twitter} />
            </a>
            <a
              className="Nav-social-icon"
              target="_blank"
              rel="noopener noreferrer"
              href={UserSocialUrl.MEDIUM_URL}
            >
              <img height={20} width={20} alt="twitter" src={medium} />
            </a>
            <a
              className="Nav-social-icon"
              target="_blank"
              rel="noopener noreferrer"
              href={UserSocialUrl.LEETCODE_URL}
            >
              <img height={20} width={20} alt="twitter" src={leetcode} />
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
    </section>
  );
}

export default NavigationBar;
