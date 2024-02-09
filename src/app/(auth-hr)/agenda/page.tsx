import React from "react";
import agendaBgImg from "../../../../public/imgs/agendaBgImg.png";
import Image from "next/image";

const Agenda = () => {
  return (
    <div>
      <div className="rounded-2xl overflow-hidden w-full h-[150px] relative">
        <Image
          className="w-full h-full absolute top-0 left-0"
          src={agendaBgImg}
          alt=""
        />
        <h2 className="absolute bottom-[20px] text-white font-bold">
          Control your events from here
        </h2>
      </div>
    </div>
  );
};

export default Agenda;
