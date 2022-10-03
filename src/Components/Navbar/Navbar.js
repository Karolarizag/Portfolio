import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="sticky -top-1 bg-base text-primary z-10 justify-center py-10">
      <div class="flex flex-wrap sm:justify-between justify-around ">
        <Link to="/" class="header-btn mx-3 my-2">
          Home
        </Link>
        <Link to="/aboutme" class="header-btn mx-3 my-2">
          About me
        </Link>
        <Link to="/technologies" class="header-btn mx-3 my-2">
          Technologies
        </Link>
        <Link to="/projects" class="header-btn mx-3 my-2">
          Projects
        </Link>
        <Link to="/contactme" class="header-btn mx-3 my-2">
          Contact
        </Link>
      </div>  
    </div>
  )
}

export default Navbar;