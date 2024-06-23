import "./SkillSection.css";
import { TechCarousel } from "./TechCarousel";

export const Skills = () => {
  return (
    <section className="section-container">
      <div className="skills-body">
        <h1 className="header">Skills</h1>
        <span className="subheading-styles">
          Here, you will find a detailed overview of my diverse skill set. My
          expertise spans across multiple domains, ensuring a well-rounded
          approach to any challenge. Explore my proficiency in technical
          development, creative design, strategic planning, and more. Whether
          you need advanced programming skills, innovative design thinking, or
          insightful analysis, this section highlights the core competencies
          that define my professional capabilities.
        </span>

        <TechCarousel />
      </div>
    </section>
  );
};
