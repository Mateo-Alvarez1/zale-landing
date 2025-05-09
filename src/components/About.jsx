import React from "react";

export const About = () => {
  const items = [
    {
      id: Math.random() * 2,
      title: "Atención al cliente rápida y personalizada",
      description:
        "El chatbot puede ayudar a tus clientes a obtener respuestas a sus preguntas o solucionar problemas de manera rápida y sencilla, sin tener que esperar horas o incluso días por una respuesta.",
    },
    {
      id: Math.random() * 2,
      title: "Automatización de tareas repetitiva",
      description:
        "Se pueden automatizar tareas repetitivas y ahorrar tiempo y esfuerzo en tareas administrativas, como enviar recordatorios a tus clientes sobre pagos pendientes o para confirmar citas o reservas.",
    },
    {
      id: Math.random() * 2,
      title: "Experiencia personalizada",
      description:
        "Podrás enviar mensajes automatizados con ofertas especiales o recomendaciones as, lo que significa que tus clientes pueden recibir una experiencia más personalizada.",
    },
  ];

  return (
    <div className="bg-zinc-800 flex flex-col items-center justify-center pt-10 pb-0 lg:pb-16">
      <div className="flex flex-col justify-center items-center">
        <h2 className="leading-normal font-pp-italic text-zale text-center text-4xl px-4 lg:px-0 lg:text-6xl mt-10 py-2 lg:leading-normal">
          Principales Funciones
        </h2>
        <p className="font-pp text-xl text-gray-400 w-10/12  text-center">
          El secreto es mantener los procesos repetitivos en procesos
          automatizados simples, por eso te mostramos en que destacamos.
        </p>
      </div>
      <div className="mt-10 mx-10 flex flex-col justify-center items-center ">
        {items.map((i) => (
          <div
            className="w-auto  flex flex-col justify-center text-center lg:text-start bg-zinc-700 bg-opacity-20 py-8 px-6 rounded-xl lg:w-2/4 my-6 border border-zinc-500 hover:scale-105 transition-all hover:border-zale hover:bg-zale hover:bg-opacity-10"
            key={i.id}
          >
            <h3 className="leading-normal font-pp-italic mb-2 text-white text-2xl lg:leading-normal">
              {i.title}
            </h3>
            <p className="font-pp text-xl pt-4 lg:pt-0 text-gray-400">
              {i.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
