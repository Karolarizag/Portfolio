const Blur = () => {

  return (

    <div class="w-96 h-96 flex justify-center">


      <div class="relative z-10">
        <div class="absolute top-0 -left-4 w-72 h-72 bg-warning rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
        <div class="absolute top-0 -right-4 w-72 h-72 bg-neutral rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-8 left-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
            
        <div class="mt-20 relative">
          <div class="p-3 bg-base rounded-lg">
            <h1 class="md:text-5xl sm:text-4xl text-primary">Karol Ariza</h1>
            <h1 class="md:text-3xl sm:text-xl text-secondary">Web developer</h1>
          </div>
        </div>

      </div>

    </div>
  )

}

export default Blur;