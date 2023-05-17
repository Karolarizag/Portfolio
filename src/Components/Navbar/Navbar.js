import { Link } from "react-router-dom";
import content from "../../data/content.json"

const Navbar = () => {

  const { header } = content

  return (
    <div class="sticky -top-1 bg-base text-primary z-10 justify-center py-10">
      <div class="flex flex-wrap justify-center">
        { 
          header.map((item, idx) => {
            return <Link key={idx} to={item.link} class="header-btn mx-5 my-2">{item.title}</Link>
          })
        }
      </div>  
    </div>
  )
}

export default Navbar;