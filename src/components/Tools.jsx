import React from "react";
import nest from "../assets/tech/nest.svg";
import meta from "../assets/tech/meta.svg";
import gemini from "../assets/tech/gemini.svg";
import postgres from "../assets/tech/postgres.svg";

const tools = [
  {
    name: "Nestjs",
    icon: nest,
  },
  {
    name: "Meta API",
    icon: meta,
  },
  {
    name: "Gemini AI",
    icon: gemini,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
];

export const Tools = () => {
  return (
    <div className="bg-zinc-800 py-12 sm:py-24">
      <div className="flex flex-col sm:flex-row  justify-around items-center sm:mx-40">
        {tools.map((n) => {
          return (
            <div key={n.name}>
              <p
                className="font-pp-italic my-6 text-3xl lg:text-4xl text-zinc-700 letter"
                style={{ WebkitTextStroke: "0.5px #a1a1aa" }}
              >
                {n.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
