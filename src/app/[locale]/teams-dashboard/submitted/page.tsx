import React from 'react';
import bg from '../../../../../public/imgs/eventsBackground.png';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import redCodeverify from '../../../../../public/svgs/anythingRedTimer.svg';

const SubmittedForm = () => {
  return (
    <div className="flex justify-center mb-[80px] mt-[60px] items-center flex-col">
      <Image className="fixed -z-20 top-0 left-0" src={bg} alt="" />
      <div className="absolute -z-10 top-0 left-0 w-full h-full bg-black/40" />
      <div className="w-[80%]">
        <h2 className="text-[22px] text-white mb-[30px] font-bold">
          Welcome <span className="text-[#EA4334]">YONKOS</span> team . . .
        </h2>
      </div>
      <div className="mt-[5px] font-bold text-[22px] bg-black/50 w-[80%] p-[60px] rounded-lg flex flex-col items-center justify-center text-white">
        <Image className="w-[200px]" src={redCodeverify} alt="" />
        <h2 className="mt-[30px]">
          <span className="text-[#EA4334]">Congratulations</span> for your
          submission
        </h2>
        <h2 className="mt-[10px]">
          <span className="text-[#EA4334]">YONKOS</span> team
        </h2>
        <h2 className="mt-[10px]">
          we proud of you wish u will be
          <span className="text-[#EA4334]">winers !</span>
        </h2>
      </div>
    </div>
  );
};

export default SubmittedForm;
