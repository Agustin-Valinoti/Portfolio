import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="hero min-h-screen bg-detailGrey">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="py-8 text-5xl font-bold text-primary">Bienvenido!</h1>
          <h2 className="py-6 text-primary font-bold">
            Mi nombre es Agustin, desarrollador FrontEnd, y estas en mi portfolio.
          </h2>
          <h3 className=" text-primary font-bold">
            Podras ver informacion sobre mi, algunos proyectos personales, y mas...
          </h3>
          <Link to="aboutme" spy={true} smooth={true} duration={1000} className="m-16 btn bg-background rounded-full border-background hover:bg-detailBlack hover:border-detailBlack  animate-bounce">
            <label className="text-primary hover:cursor-pointer">
            <svg className="fill-current rotate-90" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
            </label>
          </Link>  
        </div>
      </div>
    </div>
  );
};

export default Home;
