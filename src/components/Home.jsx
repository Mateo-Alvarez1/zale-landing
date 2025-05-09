import { Box } from "./Mesagges/Box";

export const Home = () => {
  return (
    <div className=" text-center py-0 lg:pt-8 pb-20 h-full flex flex-col items-center justify-center bg-home">
      <h1 className="leading-normal font-pp-italic text-white text-center text-4xl px-4 lg:px-0 lg:text-6xl mt-10 py-8 lg:w-2/3 lg:leading-normal">
        Tu agente de ventas por <span className="text-zale">Whatsapp</span>
      </h1>

      <Box />

      <div className="flex flex-col justify-between items-center mt-12">
        <a
          href="https://github.com/Mateo-Alvarez1/PruebaTecnicaCSE/blob/main/README.md"
          target="blank"
        >
          <button className="home-buttons py-3 px-8 lg:px-20 mt-4">
            Ver Documentación
          </button>
        </a>
        <a
          href="https://github.com/Mateo-Alvarez1/PruebaTecnicaCSE"
          target="blank"
        >
          <button className="home-buttons py-3 px-6 lg:px-16 mt-6">
            Repositorio
          </button>
        </a>
      </div>
    </div>
  );
};
