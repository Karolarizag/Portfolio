import content from "../data/content.json"
import ProjectCard from "../Components/ProjectCard/ProjectCard";

export const Projects = () => {

  const { projects } = content

  return (
    <div class="md:px-20 px-3 pb-10">
      <h1 class="text-6xl text-primary text-center">
        { projects.title }
      </h1>
      <div class="flex flex-wrap justify-center space-between md:px-10 lg:px-20 px-5 mt-10">
        {
          projects.content.map(project => {
            return <ProjectCard props={project} />
          })
        }
      </div>
    </div>  
    )
}
