import github from "../assets/github.svg";

export const Footer = () => {
  return (
    <div className="bg-home flex items-center  justify-center lg:justify-between px-12 py-14 border-b border-slate-300 border-opacity-20">
      <h1 className="text-white text-5xl font-knewave cursor-pointer">zale</h1>
      <div className="hidden lg:flex lg:items-center lg:justify-between">
        <a
          href="https://github.com/Mateo-Alvarez1/PruebaTecnicaCSE/blob/main/README.md"
          target="blank"
        >
          <button className="buttons bg-buttons">Documentación</button>
        </a>
        <a
          href="https://github.com/Mateo-Alvarez1/PruebaTecnicaCSE"
          className="bg-buttons"
          target="blank"
        >
          <img className="w-6" src={github} alt="github" />
        </a>
      </div>
    </div>
  );
};
5;
