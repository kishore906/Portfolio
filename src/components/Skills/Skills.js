import uniqid from "uniqid";
import { skills } from "../../portfolio";
import "./Skills.css";

const Skills = ({ refProp }) => {
  if (!skills.length) return null;

  return (
    <section className="section skills" id="skills" ref={refProp}>
      <h2 className="section__title">Skills</h2>
      <ul className="skills__list">
        {skills.map((skill) => (
          <li key={uniqid()} className="btns btn--plain">
            <div className="skills__list-item">
              <img
                src={skill.icon}
                alt="skill_img"
                width="80px"
                height="80px"
              />
              <p>{skill.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
