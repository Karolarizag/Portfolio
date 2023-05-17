import content from "../data/content.json"

const Technologies = () => {

  const { technologies } = content

  return (
    <div class="md:px-20 pb-10">
      <h1 class="text-6xl text-secondary text-center"> 
        { technologies.title }
      </h1>
      <div class="flex flex-wrap justify-center space-around md:px-10 lg:px-20">
        {
          technologies.content.map((tech, idx) => {
            return <img key={idx} src={tech.img} alt={tech.tech} class="lg:w-40 brightness-75 hover:brightness-90 w-24 m-7 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-200" />
            
          })
        }
      </div>
    </div>  
    )
}

export default Technologies;