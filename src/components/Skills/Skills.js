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
          <li key={uniqid()} className="skills__list-item btns btn--plain">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
