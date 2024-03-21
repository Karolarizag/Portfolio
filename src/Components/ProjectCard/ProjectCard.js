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
            <img src="https://media.discordapp.net/attachments/754119455151358103/1026915410756513792/link-findme.png?ex=660c4681&is=65f9d181&hm=7126748eb8b279457cdaf63b87deb8ce6b91b5592d66fdd175aeb006efb219c3&=&format=webp&quality=lossless&width=238&height=238" alt="link" class="w-8 brightness-75" />
          </a>
          <a href={props.repo} target="_blank" rel="noreferrer">
            <img src="https://media.discordapp.net/attachments/754119455151358103/1026915375671152700/github-findme.png?ex=660c4678&is=65f9d178&hm=c2b223388adc9de754af1bce686f038fc1a5791458f5be94bfd8e1a7799c00ee&=&format=webp&quality=lossless&width=238&height=238" alt="link" class="w-8 brightness-75" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;