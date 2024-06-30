import "./ProjectStyle.css";
import visitIcon from "../../assets/icons/share.svg";
import Tilt from "../../utils/common/TiltBox";
import { ProjectData } from "../../utils/constants/projects_data";

export const ProjectSection = () => {
  return (
    <section id="project" className="project-container">
      <h1 className="header">Projects</h1>
      <span className="subheading-styles">
        Over the course of my professional journey, I have had the opportunity
        to work on a diverse array of projects. Each project has allowed me to
        hone my skills, tackle unique challenges, and contribute to various
        innovative solutions. Below is a selection of these projects, showcasing
        the breadth and depth of my experience in the field.
      </span>
      <div className="grid-container">
        {ProjectData.map((item, index) => {
          return (
            <GridItem
              key={index}
              title={item.title}
              desc={item.desc}
              techs={item.techUsed}
              url={item.projectLink}
            />
          );
        })}
      </div>
    </section>
  );
};

const GridItem = ({ title, desc, url, techs }) => {
  const options = {
    speed: 1000,
    max: 30,
  };

  return (
    <Tilt options={options} className="glass-card">
      {/* <div> */}
      <div className="row-container-heading">
        <h1>{title}</h1>
        <a target="_blank" rel="noopener noreferrer" href={url}>
          <img className="share-img" src={visitIcon} alt="visit" />
        </a>
      </div>
      <span>{desc}</span>
      <p>{techs}</p>
    </Tilt>
  );
};
