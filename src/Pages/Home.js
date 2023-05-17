import content from "../data/content.json"

export const Home = () => {

  const { home } = content

  return (
    <div class="flex justify-center flex-wrap py-10">
      <div class="relative z-10 my-auto">
        <div class="absolute top-0 -left-4 w-72 h-72 bg-warning rounded-full mix-blend-multiply filter blur-2xl opacity-80 animate-blob"></div>
        <div class="absolute top-0 -right-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-8 left-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
        <div class="mt-20 relative">
          <div class="p-3 bg-base rounded-lg">
            <h1 class="text-6xl text-primary">{ home.title }</h1>
            <h1 class="text-4xl text-secondary">{ home.subtitle }</h1>
          </div>
        </div>
      </div>
      <img src="https://media.discordapp.net/attachments/754119455151358103/1026593209960382514/aboutme-eee.png?width=621&height=671" alt="home" />
    </div>
    )
}
