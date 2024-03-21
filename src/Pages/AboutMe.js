import content from "../data/content.json"

export const AboutMe = () => {

  const { aboutme } = content

  return (
    <div class="flex justify-center flex-wrap lg:pt-20 sm:pt-10 px-5">
      <div class="sm:w-3/5 lg:w-[600px] mx-10">
        <h1 class="text-6xl text-primary">{aboutme.title}</h1>
        {
          aboutme.content.map((c, idx) => {
            return <p class="mb-3" key={idx}>{c}</p>
          })
        }
      </div>
      <img src="https://media.discordapp.net/attachments/754119455151358103/1026916274661494834/projects.PNG?ex=660c474f&is=65f9d24f&hm=08e2520c17e4782d23f1319d67cb5fc4d87674912a68d62e5c861c81467f50b4&=&format=webp&quality=lossless&width=699&height=560" alt="aboutme" class="mb-10" />
    </div>  
    )
}
