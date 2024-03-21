import content from "../data/content.json"

export const FindMe = () => {

  const { findme } = content

  return (
    <div class="md:px-20 px-3 pb-10">
      <h1 class="text-6xl text-secondary text-center">{findme.title}</h1>
      <div class="flex flex-wrap justify-center space-around md:px-10 lg:px-20 px-5 mt-10">
        <div class="flex flex-wrap justify-center items-center">
          {
            findme.content.map(item => {
              return <a href={item.link} target="_blank" rel="noreferrer"><img src={item.img} alt={item.name} class="md:h-24 h-20 mb-10 mx-2 brightness-75" /></a>
            })
          }
        </div>
        <img src="https://media.discordapp.net/attachments/754119455151358103/1026915372022120539/aboutme-page.PNG?ex=660c4677&is=65f9d177&hm=1541b078627e3435b2d85e8d56925171ae5bea28cd8ced784e1eebfc9bbcb269&=&format=webp&quality=lossless&width=448&height=561" alt="findme" />
      </div>
    </div>  
    )
}
