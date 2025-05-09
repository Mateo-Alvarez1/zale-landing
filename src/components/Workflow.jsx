import React from "react";
import video from "../../public/workflow.mp4";
export const Workflow = () => {
  return (
    <div className="bg-zinc-800 flex flex-col items-center justify-center h-auto pb-20">
      <h3 className="leading-normal font-pp-italic text-white text-center text-4xl px-4 lg:px-0 lg:text-6xl pt-20 pb-8">
        <span className="font-knewave text-zale"> Zale</span> Workflow
      </h3>
      <video
        className="rounded-3xl px-2 lg:w-1/5 mt-12"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>
    </div>
  );
};
