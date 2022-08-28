import React from "react";
import { Link } from "react-scroll";

const BarsMenu = () => {
  return (
    <div className="dropdown dropdown-end">
      <label
        tabIndex="0"
        className="md:hidden lg:hidden xl:hidden 2xl:hidden btn btn-circle swap swap-rotate text-primary bg-background border-primary hover:bg-primary hover:border-primary hover:text-background"
      >
        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>
      </label>
      <ul
        tabIndex="0"
        className="dropdown-content menu p-2 shadow bg-detailGrey rounded-box w-52"
      >
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
  );
};

export default BarsMenu;
