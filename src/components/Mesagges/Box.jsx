import React, { useEffect, useState } from "react";
import send from "../../assets/send.svg";

export const Box = () => {
  const fullConversation = [
    { text: "Hola", from: "user" },
    { text: "Hola ! ¿Cómo estás? ¿En qué puedo ayudarte hoy?", from: "bot" },
    { text: "Me gustaría acceder a la lista de productos 😊", from: "user" },
    {
      text: `📦Estos son los productos disponibles:\n
• Pantalón (Deportivo) 
- ID: 001
- PRECIO_50_U: $1058.00
- PRECIO_100_U: $1182.00
- PRECIO_200_U: $462.00
X unidad (pedido mínimo 50)\n
• Camiseta (Casual)
- ID: 003
- PRECIO_50_U: $1292.00
- PRECIO_100_U: $457.00
- PRECIO_200_U: $873.00
X unidad (pedido mínimo 50)\n
• Chaqueta (Deportivo)
- ID: 011
- PRECIO_50_U: $464.00
- PRECIO_100_U: $1109.00
- PRECIO_200_U: $555.00
X unidad (pedido mínimo 50)\n
• Sudadera (Casual)
- ID: 009
- PRECIO_50_U: $889.00
- PRECIO_100_U: $991.00
- PRECIO_200_U: $608.00
X unidad (pedido mínimo 50)\n
• Camiseta (Deportivo)
- ID: 002
- PRECIO_50_U: $510.00
- PRECIO_100_U: $975.00
- PRECIO_200_U: $739.00
X unidad (pedido mínimo 50)\n
• Pantalón (Formal) 
- ID: 010 
- PRECIO_50_U: $647.00 
- PRECIO_100_U: $1149.00 
- PRECIO_200_U: $542.00 
X unidad (pedido mínimo 50)\n
• Pantalón (Deportivo) 
- ID: 007 
- PRECIO_50_U: $1331.00 
- PRECIO_100_U: $1222.00 
- PRECIO_200_U: $516.00 
X unidad (pedido mínimo 50)\n 
• Chaqueta (Deportivo) 
- ID: 006 
- PRECIO_50_U: $961.00 
- PRECIO_100_U: $636.00 
- PRECIO_200_U: $1014.00 
X unidad (pedido mínimo 50)`,
      from: "bot",
    },
    {
      text: "Muchas Gracias ! Ahora me gustaría crear una orden",
      from: "user",
    },
    {
      text: `Por favor enviame los siguientes datos separados por coma
•Nombre del cliente
•Id del producto
•Cantidad`,
      from: "bot",
    },
    { text: "Mateo,001,200", from: "user" },
    {
      text: "✅ La orden se creó correctamente. El número de orden es 14",
      from: "bot",
    },
    { text: "Quiero ver el estado de mi orden", from: "user" },
    { text: "Perfecto, Compartime tu numero de orden", from: "bot" },
    { text: "14", from: "user" },
    {
      text: `El detalle de la misma es: 
• Número de orden: 14
• Nombre Cliente: Mateo
• Cantidad: 50
• Número Telefónico: 5492645109171
• Estado: confirmed
• Cantidad a Pagar: $636.00`,
      from: "bot",
    },
    { text: "Muchas Gracias!", from: "user" },
    {
      text: "Que tengas lindo día, cualquier consulta estoy a disposición",
      from: "bot",
    },
  ];

  const [messages, setMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullConversation.length) {
      const intervalId = setInterval(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { ...fullConversation[currentIndex], time: new Date() },
        ]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [currentIndex]);

  return (
    <div className="bg-zinc-700 p-3 mt-10 rounded-xl w-[270px] lg:w-max lg:min-w-[570px] h-[70vh] flex flex-col justify-between">
      <div className="overflow-y-auto pr-2 flex-1 scroll-container">
        {messages.map((msg, index) => (
          <p
            key={index}
            className={`${
              msg.from === "user"
                ? "bg-zinc-600 ml-auto lg:text-base font-medium"
                : "bg-zale"
            } w-max text-base max-w-52 text-start lg:max-w-full rounded-md px-2 lg:px-4 py-2 pr-3 my-4 font-medium flex text-white`}
          >
            {msg.text.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
            <small
              className={`hidden lg:inline-block ml-2 mt-0.5 text-sm ${
                msg.from === "user" ? "text-gray-400" : "text-gray-300"
              }`}
            >
              {msg.time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </p>
        ))}
      </div>

      <div className="min-w-full border border-zinc-600  min-w-96 p-3 pl-4 rounded-xl text-zinc-500 font-medium mt-4 flex justify-between items-center">
        Escribe un mensaje
        <img src={send} alt="send" />
      </div>
    </div>
  );
};
