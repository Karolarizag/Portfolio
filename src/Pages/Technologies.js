const techs = [
  {
    tech: 'npm',
    img: 'https://media.discordapp.net/attachments/754119455151358103/1026915407984074762/npm.png'
  },
  {
    tech: 'node',
    img: 'https://media.discordapp.net/attachments/754119455151358103/1026915407556247683/node.png'
  },
  {
    tech: 'git',
    img: 'https://media.discordapp.net/attachments/754119455151358103/1026915374614192259/git.png'
  },
  {
    tech: 'vue',
    img: 'https://media.discordapp.net/attachments/754119455151358103/1026915410295128135/vue.png'
  },
  {
    tech: 'nuxt',
    img: 'https://media.discordapp.net/attachments/754119455151358103/1026915408328007770/nuxt.png'
  },
  {
    tech: 'react',
    img: 'https://media.discordapp.net/attachments/754119455151358103/1026915408734846976/react.png'
  },
  {
    tech: 'css',
    img: 'https://media.discordapp.net/attachments/754119455151358103/1026915372961632275/css.png'
  },
  {
    tech: 'html',
    img: 'https://media.discordapp.net/attachments/754119455151358103/1026915371619455006/html.png'
  },
  {
    tech: 'javascript',
    img: 'https://media.discordapp.net/attachments/754119455151358103/1026915420411797534/js.png'
  },
  {
    tech: 'typescript',
    img: 'https://media.discordapp.net/attachments/754119455151358103/1026915409926029342/typescript.png'
  },
  {
    tech: 'bootstrap',
    img: 'https://media.discordapp.net/attachments/754119455151358103/1026915372584144956/bootstrap.png'
  },
  {
    tech: 'tailwind',
    img: 'https://media.discordapp.net/attachments/754119455151358103/1026915409296883752/tailwind.png'
  },
  {
    tech: 'vuetify',
    img: 'https://media.discordapp.net/attachments/754119455151358103/1026915421120639006/vuetify.png'
  },
  {
    tech: 'figma',
    img: 'https://media.discordapp.net/attachments/754119455151358103/1026915373464961035/figma.png'
  },
  {
    tech: 'mongodb',
    img: 'https://media.discordapp.net/attachments/754119455151358103/1026915407174578248/mongodb.png'
  },
]

const Technologies = () => {
  return (
     <div class="md:px-20 pb-10">

      <h1 class="text-6xl text-secondary text-center"> Technologies</h1>
      <div class="flex flex-wrap justify-center space-around md:px-10 lg:px-20">

        {
          techs.map(tech => {
            return <img src={tech.img} alt={tech.tech} class="lg:w-40 brightness-75 hover:brightness-90 w-24 m-7 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-200" />
            
          })
        }

      </div>

     </div>  
    )
}

export default Technologies;