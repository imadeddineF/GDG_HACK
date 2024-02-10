import React from "react";
import bg from "../../../../public/imgs/eventsBackground.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import redCodeverify from "../../../../public/svgs/redVerification.svg";
import plus from "../../../../public/svgs/plus.svg";
import Link from "next/link";

interface ICurrentEventProps {
  YONKOS: string;
}

const SubmitForm = ({ YONKOS }: ICurrentEventProps) => {
  return (
    <div className="flex justify-center mb-[80px] mt-[60px] items-center flex-col">
      <Image className="fixed -z-20 top-0 left-0" src={bg} alt="" />
      <div className="fixed -z-10 top-0 left-0 w-full h-full bg-black/40" />
      <div className="w-[80%]">
        <h2 className="text-[22px] text-white mb-[30px] font-bold">
          Welcome <span className="text-[#EA4334]">YONKOS</span> team . . .
        </h2>
      </div>
      <div className="flex flex-col mt-[40px] items-center">
        <h2 className="text-[#EA4334] font-bold text-[22px] mb-[30px]">
          Dont forget . . .
        </h2>
        <Image className="w-[300px] mb-[50px]" src={redCodeverify} alt="" />
      </div>
      <form
        action=""
        className="flex text-white w-[50%] flex-col gap-[100px] items-center"
      >
        <div className="flex items-start  justify-between w-full">
          <h3 className="font-bold">Project title</h3>
          <input
            className="text-[#1976D2] w-[350px] outline-none rounded-lg shadow-md py-[10px] px-[20px]"
            type="text"
            placeholder="Project's title"
          />
        </div>
        <div className="flex items-start justify-between w-full">
          <h3 className="font-bold">Project description</h3>
          <textarea
            className="h-[100px] w-[350px] shadow-md outline-none rounded-lg py-[10px] px-[20px] text-[#1976D2]"
            placeholder="Project's description"
          />
        </div>
        <div className="flex items-start  justify-between w-full">
          <h3 className="font-bold">Presentation link</h3>
          <input
            className="text-[#1976D2] w-[350px] outline-none rounded-lg shadow-md py-[10px] px-[20px]"
            type="text"
            placeholder="Presentation link"
          />
        </div>
        <div className="flex items-start  justify-between w-full">
          <h3 className="font-bold">Code link</h3>
          <input
            className="text-[#1976D2] w-[350px] outline-none rounded-lg shadow-md py-[10px] px-[20px]"
            type="text"
            placeholder="Code link"
          />
        </div>
        <div className="flex items-start  justify-between w-full">
          <h3 className="font-bold">Video link</h3>
          <input
            className="text-[#1976D2] w-[350px] outline-none rounded-lg shadow-md py-[10px] px-[20px]"
            type="text"
            placeholder="Video link"
          />
        </div>
        <div className="flex items-start  justify-between w-full">
          <h3 className="font-bold">Photos linkse</h3>
          <input
            className="text-[#1976D2] w-[350px] outline-none rounded-lg shadow-md py-[10px] px-[20px]"
            type="text"
            placeholder="Photos links"
          />
        </div>
        <div className="flex w-full justify-end">
          <Link
            href="/current-event/submitted"
            className="bg-[#1976D2] py-[8px] mt-[20px] hover:bg-[#1976D2]/80 duration-300 transition-all rounded-lg px-[20px]"
          >
            Submit now
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SubmitForm;
