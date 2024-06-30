import "./Banner.css";
import headerImage from "../../assets/images/header-img.svg";
import { useState, useEffect } from "react";
import rightArrow from "../../assets/icons/right-arrow.svg";
import { UserSocialUrl } from "../../utils/constants/nav_bar_data";
import { UserProfileData } from "../../utils/constants/banner_data";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % UserProfileData.ROLE.length;
    let fullText = UserProfileData.ROLE[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(120);
    }
  };

  return (
    <section id="home" className="banner">
      <div className="header-container">
        <div className="header-child-1">
          <span className="welcome-text"> Welcome To My Portfolio</span>
          <div className="heading-intro">
            Hi!👋 I'm {UserProfileData.NAME}, A{" "}
            <span>
              {text} <span className="caret">|</span>
            </span>
          </div>
          <p>{UserProfileData.BIO}</p>

          <a className="let-connect" href={UserSocialUrl.LETS_CONNECT_GMAIL}>
            <span>Let's Connect</span>
            <img className="arrow-image" alt="gmail" src={rightArrow} />
          </a>
        </div>

        <div className="header-child-2">
          <img
            className="header-child-2-image"
            src={headerImage}
            alt="header"
          />
        </div>
      </div>
    </section>
  );
};
