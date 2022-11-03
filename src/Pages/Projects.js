import ProjectCard from "../Components/ProjectCard/ProjectCard";
import { projects } from "../Services/ProjectsService";

const Projects = () => {
  return (
     <div class="md:px-20 px-3 pb-10">

      <h1 class="text-6xl text-primary text-center">Projects</h1>
      <div class="flex flex-wrap justify-center space-between md:px-10 lg:px-20 px-5 mt-10">

        {
          projects.map(project => {
            return <ProjectCard props={project} />
          })
        }

      </div>

     </div>  
    )
}

export default Projects;