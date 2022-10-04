import ProjectCard from "../Components/ProjectCard/ProjectCard";

const projects = [
  {
    id: 1,
    name: 'Rick & Morty',
    img: 'https://media.discordapp.net/attachments/754119455151358103/1026928524424130641/unknown.png?width=428&height=604',
    link: 'https://rick-and-morty-karolariza.netlify.app/',
    repo: 'https://github.com/Karolarizag/Rick-Morty',
    status: 'Finished'
  },
  {
    id: 2,
    name: 'Giphyy',
    img: 'https://media.discordapp.net/attachments/754119455151358103/1026928962179440814/unknown.png?width=428&height=604',
    link: 'https://giphyy.netlify.app/',
    repo: 'https://github.com/Karolarizag/Giphyy',
    status: 'Finished'
  },
  {
    id: 3,
    name: 'Mapache\'s memory',
    img: 'https://media.discordapp.net/attachments/754119455151358103/1026928389967335585/unknown.png?width=427&height=604',
    link: 'https://arixka.github.io/Mapache-s-Memory-Games/',
    repo: 'https://github.com/Karolarizag/Mapache-s-Memory-Games',
    status: 'Finished'
  },
]

const Projects = () => {
  return (
     <div class="md:px-20 pb-10">

      <h1 class="text-6xl text-primary text-center">Projects</h1>
      <div class="flex flex-wrap justify-center space-around md:px-10 lg:px-20 mt-10">

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