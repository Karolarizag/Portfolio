const contact = [
  {
    name: "github",
    link: "https://github.com/Karolarizag",
    img: "https://media.discordapp.net/attachments/754119455151358103/1026915375201402941/github.png"
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/karolarizag/",
    img: "https://media.discordapp.net/attachments/754119455151358103/1026915420768313454/linkedin.png"
  },
  // {
  //   name: "mail",
  //   link: "mailto:karolarizadev@gmail.com",
  //   img: "https://media.discordapp.net/attachments/754119455151358103/1026915406725775381/mail.png"
  // },
  {
    name: "cv",
    link: "https://drive.google.com/file/d/1RRjzKRRS2aPG55wq065k13Rwmxeu6OoJ/view?usp=sharing",
    img: "https://media.discordapp.net/attachments/754119455151358103/1026940680368574504/cv.png"
  },
]

const FindMe = () => {
  return (
     <div class="md:px-20 px-3 pb-10">

      <h1 class="text-6xl text-secondary text-center">Find me</h1>
      <div class="flex flex-wrap justify-center space-around md:px-10 lg:px-20 px-5 mt-10">

        <div class="flex flex-wrap justify-center items-center">
          {
            contact.map(item => {
              return <a href={item.link} target="_blank" rel="noreferrer"><img src={item.img} alt={item.name} class="md:h-24 h-20 mb-10 mx-2 brightness-75" /></a>
            })
          }
        </div>

        <img src="https://media.discordapp.net/attachments/754119455151358103/1026916274661494834/projects.PNG?width=754&height=605" alt="findme" />

      </div>

     </div>  
    )
}

export default FindMe;