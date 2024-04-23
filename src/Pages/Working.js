import content from "../data/content.json"

export const Working = () => {


  return (
    <div class="flex justify-center flex-wrap py-10 w-[550px]">
      <div class="relative z-10 mt-28">
        <div class="absolute top-0 -left-4 w-72 h-72 bg-warning rounded-full mix-blend-multiply filter blur-2xl opacity-80 animate-blob"></div>
        <div class="absolute top-0 -right-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-8 left-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
        <div class="mt-20 relative">
          <div class="p-3 bg-base rounded-lg">
            <h1 class="text-6xl text-primary">We are working on improvement</h1>
            <h1 class="text-4xl ">Please come back soon!</h1>
          </div>
        </div>
      </div>
    </div>
    )
}
