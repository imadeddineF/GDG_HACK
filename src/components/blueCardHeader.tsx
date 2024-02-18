"use client";

import Image from "next/image";
import agendaBgImg from "../../public/imgs/agendaBgImg.png";
import { useHeaderTitle } from "@/store/headerTitle";

const BlueCardHeader = () => {
  const setTitle = useHeaderTitle((state) => state.title);
  const lowerCaseTitle = setTitle.toLowerCase();

  return (
    <div className="rounded-2xl overflow-hidden w-full h-[150px] relative">
      <Image
        className="w-full h-full absolute top-0 left-0"
        src={agendaBgImg}
        alt=""
      />
      <h2 className="absolute text-[32px] left-[180px] bottom-[26px] text-white font-bold">
        Control your {lowerCaseTitle} from here
      </h2>
    </div>
  );
};

export default BlueCardHeader;
