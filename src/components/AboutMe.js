import React from "react";
import { Link } from "react-scroll";
import img from "../assets/imgPerfil/agustinCerca.jpg";

const AboutMe = () => {
  return (
    <div id="aboutme" className="min-h-screen flex place-content-center">
      <div className="text-center mt-28">
        <img
          src={img}
          className="rounded-full w-52 mb-4 mx-auto"
          alt="Avatar"
        />
        <h5 className="text-xl font-medium leading-tight mb-2 text-detailWhite">
          Agustin Valinoti
        </h5>
        <p className="text-detailWhite m-auto my-6 sm:text-sm">
          Me he {" "}
          <Link
            to="certification"
            className="text-primary hover:cursor-pointer hover:underline"
            spy={true}
            smooth={true}
            duration={500}
          >
            certificado
          </Link> {" "}
          en CoderHouse, en los cursos de Javascript y React Js.
        </p>
        <p className="text-detailWhite mx-10 my-4 text-center text-sm sm:text-base sm:mx-32">
          Luego de dejar la universidad por la pandemia y la dificultad virtual,
          encontre este rubro donde me he sentido mucho mas a gusto. Realice un
          curso sobre desarrollo Full Stack, el cual no termino de gustarme la
          parte BackEnd, pero pude encontrar mi gusto para el FrontEnd.
        </p>
        <p className="text-detailWhite mx-10 my-4 text-center text-sm sm:text-base sm:mx-32">
          Y asi comence mis estudios en CoderHouse, mientras trabajaba como
          encargado de mozos en un bar local, para pagarme los cursos y seguir
          con los estudios.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
