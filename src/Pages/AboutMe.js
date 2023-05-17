import content from "../data/content.json"

export const AboutMe = () => {

  const { aboutme } = content

  return (
    <div class="flex justify-center flex-wrap lg:pt-20 sm:pt-10 px-5">
      <div class="sm:w-3/5 lg:w-[600px] mx-10">
        <h1 class="text-6xl text-primary">{aboutme.title}</h1>
        {
          aboutme.content.map((c, idx) => {
            return <p class="mt-3" key={idx}>{c}</p>
          })
        }
      </div>
      <img src="https://media.discordapp.net/attachments/754119455151358103/1026915372022120539/aboutme-page.PNG?width=482&height=604" alt="aboutme" class="mb-10" />
    </div>  
    )
}
