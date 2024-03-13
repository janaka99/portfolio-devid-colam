import { PROJECTS } from "../../../../data";
import Title from "../../UI/Title/Title";
import Container from "../Container/Container";
import Project from "./Project/Project";

const Projects = () => {
  return (
    <div className="py-20 md:py-40 bg-background-1">
      <Container>
        <Title color="text-primary-1">My Projects</Title>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-5 md:gap-10 ">
          {PROJECTS.map((project, i) => (
            <Project key={i} project={project} i={i} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Projects;
