import React from "react";
import agendaBgImg from "../../../../public/imgs/agendaBgImg.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import close from "../../../public/svgs/close.svg";
import edit from "../../../public/svgs/edit.svg";

const Statistics = () => {
  return (
    <div className=" bg-black/5 p-[20px] h-screen">
      <div className="rounded-2xl overflow-hidden w-full h-[150px] relative">
        <Image
          className="w-full h-full absolute top-0 left-0"
          src={agendaBgImg}
          alt=""
        />
        <h2 className="absolute text-[32px] left-[180px] bottom-[26px] text-white font-bold">
          Control your statistics from here
        </h2>
      </div>
      <div className="mt-[120px] flex justify-center">
        <h1>Comming soon..</h1>
      </div>
    </div>
  );
};

export default Statistics;
