import Banner from "../Components/Banner/Banner";
// import Blur from "../Components/Blur/Blur";

const Home = () => {
  return (
    <div class="min-h-screen">

      <div class="grid grid-cols-2 gap-4">

        <div class="h-full flex items-center justify-center">
          {/* <Blur /> */}
          <Banner />
        </div>

        <div class="">
          <img src="https://media.discordapp.net/attachments/754119455151358103/1025119944112865391/aboutme.PNG?width=600&height=600" alt="home" class="" /> 
          {/* <div class="w-72 rounded-full bg-primary h-16 items-end"></div> */}
        </div>

      </div>
    </div>
    )
}

export default Home;