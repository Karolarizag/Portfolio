const ProjectCard = ({props}) => {

  const statusClass = props.status === 'Finished' ? "badge badge-secondary" : "badge badge-primary"

  return (
    <div class="w-96 mx-5">
      <img src={props.img} alt={props.name} class="rounded-lg shadow-lg" />
      <div class="card-body">
        <h2 class="card-title">
          {props.name}
          <div class={statusClass}>
            {props.status}
          </div>
        </h2>
        <div class="card-actions justify-start">
          <a href={props.link} target="_blank" rel="noreferrer">
            <img src="https://media.discordapp.net/attachments/754119455151358103/1026915410756513792/link-findme.png" alt="link" class="w-8 brightness-75" />
          </a>
          <a href={props.repo} target="_blank" rel="noreferrer">
            <img src="https://media.discordapp.net/attachments/754119455151358103/1026915375671152700/github-findme.png" alt="link" class="w-8 brightness-75" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;