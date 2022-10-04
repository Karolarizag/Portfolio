import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="sticky -top-1 bg-base text-primary z-10 justify-center py-10">
      <div class="flex flex-wrap justify-center">
        <Link to="/" class="header-btn mx-5 my-2">
          Home
        </Link>
        <Link to="/aboutme" class="header-btn mx-5 my-2">
          About me
        </Link>
        <Link to="/technologies" class="header-btn mx-5 my-2">
          Technologies
        </Link>
        <Link to="/projects" class="header-btn mx-5 my-2">
          Projects
        </Link>
        <Link to="/findme" class="header-btn mx-5 my-2">
          Find me
        </Link>
      </div>  
    </div>
  )
}

export default Navbar;