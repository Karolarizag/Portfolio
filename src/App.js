import React, {useState} from "react";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./Pages/AboutMe";
import ContactMe from "./Pages/ContactMe"
import Home from "./Pages/Home";
import Footer from './Components/Footer/Footer'
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Pages/Projects"
import Technologies from "./Pages/Technologies"

const App = () => {

  let [ theme, setTheme ] = useState('myLightTheme')

  const themeChanger = () => {
    theme === 'myLightTheme' ? setTheme('myDarkTheme') : setTheme('myLightTheme')
  }

  return (
    <div className="App min-h-screen" data-theme={theme}>

      <Navbar />

      <button onClick={themeChanger} title="Contact Sale" className="fixed z-20 bottom-12 right-8 bg-primary p-2 m-0 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:drop-shadow-2xl hover:animate-bounce duration-200">
        
        {
          theme === 'myLightTheme'
          ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>

          : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
          }

      </button>

      <Footer />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contactme" element={<ContactMe />} />
        </Routes>

    </div>
  );
}

export default App;
