import React from "react";

export const Zale = () => {
  return (
    <div className="pb-20 bg-home">
      <div className="flex flex-col justify-center items-center">
        <h3 className="leading-normal font-pp-italic text-white text-center text-4xl px-4 lg:px-0 lg:text-6xl pt-20 pb-8">
          Más Sobre <span className="font-knewave text-zale"> Zale</span>
        </h3>
        <div className="w-auto mx-4 text-center bg-zinc-700 bg-odivacity-60 border border-zinc-600 hover:bg-opacity-40 transition-all hover:scale-95 hover:border-zinc-400 px-6 py-8 mt-6 font-pp text-xl text-gray-400 hover:text-gray-300 lg:w-1/2 lg:text-start leading-relaxed rounded-2xl">
          <p className="lg:border-l-2 lg:pl-4 border-zinc-500 hover:border-zinc-400">
            Zale nació como parte de una prueba técnica: Desarrollar un agente
            de ventas B2B escalable. Lo construí con NestJS, integré la API de
            WhatsApp Business , ademas de incorporar Gemini AI para desarrollar
            un modelo mas perceptivo e inteligente.Además, sumé una
            documentación para facilitar la implementación en otros proyectos.
          </p>
        </div>
      </div>
    </div>
  );
};
