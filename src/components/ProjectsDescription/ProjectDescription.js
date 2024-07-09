import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./projectDescription.css";
import { projects } from "../../portfolio";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

function ProjectDescription() {
  const [project, setProject] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const project = projects.find((project) => project.id === Number(id));
    setProject(project);
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <section className="projectDescContainer">
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {Array.apply(null, Array(project.images_length)).map((_, index) => (
            <SwiperSlide key={index}>
              <img
                src={`${project.img_folder}/${index + 1}.${
                  project.img_folder === "quiz" ? "png" : "jpg"
                }`}
                alt="project_img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="projectDesc">
        <h5>
          <span className="headingFont">Project Name:</span> {project?.name}
        </h5>

        <div className="description">
          <h5 className="headingFont">Project Description:</h5>
          {project?.fullDescription?.map((point, index) => (
            <div className="pointContainer" key={index}>
              <i className="bi bi-caret-right-fill"></i>
              <p className="point">{point}</p>
            </div>
          ))}
        </div>

        <h5 className="techStack">
          <span className="headingFont">Tech Stack:</span> HTML5, CSS3,
          {project?.id !== 3 && " Bootstrap,"} React.js, Node.js,
          {project?.id !== 3 && " Redux, React Query,"} MongoDB
        </h5>

        <h5>
          <span className="headingFont">GitHub Link:</span> &nbsp;
          <a
            href={project?.sourceCode}
            aria-label="github"
            className="link link--icon"
          >
            <i className="bi bi-github"></i>
          </a>
        </h5>
      </div>
    </section>
  );
}

export default ProjectDescription;
