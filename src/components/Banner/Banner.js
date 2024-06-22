import "./Banner.css";
import headerImage from "../../assets/images/header-img.svg";
import { useState, useEffect } from "react";
import { UserSocialUrl } from "../NavigationBar/constants";
import rightArrow from "../../assets/icons/right-arrow.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const toRotate = [
    "Web  Developer",
    "Software Developer",
    "Mobile App Developer",
  ];
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
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
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
    <section className="banner">
      <div className="header-container">
        <div className="header-child-1">
          <span className="welcome-text"> Welcome To My Portfolio</span>
          <div className="heading-intro">
            Hi!👋 I'm Sailesh{" "}
            <span>
              {text} <span className="caret">|</span>
            </span>
          </div>
          <p>
            Enthusiastic and innovative Software Developer with a passion for
            crafting seamless and user-friendly mobile applications and robust
            backend systems. I am passionate about creating innovative solutions
            that make a meaningful impact.
          </p>

          <a className="let-connect" href={UserSocialUrl.GMAIL}>
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
