import React from "react";
import bg from "../../../public/imgs/eventsBackground.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import codeverify from "../../../public/svgs/codeVerification.svg";
import Link from "next/link";

interface ICurrentEventProps {
  YONKOS: string;
}

const CurrentEvent = ({ YONKOS }: ICurrentEventProps) => {
  return (
    <div className="flex justify-center mb-[80px] mt-[60px] items-center flex-col">
      <Image className="fixed -z-20 top-0 left-0" src={bg} alt="" />
      <div className="absolute -z-10 top-0 left-0 w-full h-full bg-black/40" />
      <div className="w-[80%]">
        <h2 className="text-[22px] text-white mb-[30px] font-bold">
          Welcome <span className="text-[#EA4334]">YONKOS</span> team . . .
        </h2>
      </div>
      <div className="flex flex-col mt-[40px] items-center">
        <Image className="w-[300px]" src={codeverify} alt="" />
        <p className="text-[#EA4334] mt-[10px] font-semibold text-center">
          What you are waiting for !
        </p>
        <Link
          href="/current-event/submit-form"
          className="bg-[#1976D2] text-white mt-[20px] hover:bg-[#1976D2]/80 duration-300 transition-all rounded-lg px-[20px] py-[8px]"
        >
          Submit now
        </Link>
      </div>
    </div>
  );
};

export default CurrentEvent;
