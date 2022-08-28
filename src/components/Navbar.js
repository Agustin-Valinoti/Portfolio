import React from "react";
import BarsMenu from "./BarsMenu";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="sticky top-0 w-full shadow-md bg-background">
      <div className="relative flex justify-between items-center h-16 max-w-6xl w-11/12 m-auto font-extrabold text-primary">
        <div>
          <h1 className="hover:cursor-pointer">Agustin</h1>
        </div>
        <BarsMenu/>
        <ul className="hidden md:flex place-content-center ">
        <li
          className="p-6 transition ease-in-out delay-75 
            hover:bg-primary hover:text-background hover:scale-90 hover:cursor-pointer"
        >
          <Link to="aboutme" spy={true} smooth={true} duration={500}>
            Sobre Mi
          </Link>
        </li>
        <li
          className="p-6 transition ease-in-out delay-75 
            hover:bg-primary hover:text-background hover:scale-90 hover:cursor-pointer"
        >
          <Link to="projects" spy={true} smooth={true} duration={500}>
            Proyectos
          </Link>
        </li>
        <li
          className="p-6 transition ease-in-out delay-75 
            hover:bg-primary hover:text-background hover:scale-90 hover:cursor-pointer"
        >
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Contacto
          </Link>
        </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
