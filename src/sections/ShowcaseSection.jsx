import { useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((project, index) => {
      gsap.fromTo(
        project,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: project,
            start: "top bottom-=100",
          },
        }
      );
    });
  });

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img
                src="/images/project/project1.png"
                alt="Project 1"
                className="object-top"
              />
            </div>
            <div className="text-content">
              <h2
                className="cursor-pointer underline"
                onClick={() => window.open("https://investmentexperts.in/")}
              >
                Investment Experts
              </h2>
              <p className="text-white-50 md:text-xl">
                Comprehensive Real Estate Website Solution featuring an
                integrated Admin Panel for efficient content management,
                property listings, and updates.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="xl:h-[37vh] md:h-52 lg:h-72 h-64 rounded-xl">
                <img
                  src="/images/project/project2.png"
                  alt="Project 2"
                  className="w-full h-full object-top"
                />
              </div>
              <h2
                className="cursor-pointer underline"
                onClick={() => window.open("https://hirrd-gamma.vercel.app/")}
              >
                Hirrd
              </h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="xl:h-[37vh] md:h-52 lg:h-72 h-64 rounded-xl">
                <img
                  src="/images/project/project3.png"
                  alt="Project 3"
                  className="w-full h-full object-top"
                />
              </div>
              <h2
                className="cursor-pointer underline"
                onClick={() => window.open("https://kreobeta.iqsetters.com/")}
              >
                KREO World
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
