import Image from 'next/image';
import React from 'react';
import agendaBgImg from '../../../../../../public/imgs/agendaBgImg.png';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';
import ChallengeCard from '@/components/hr/pages/challenges/challengeCard';

const Challenges = () => {
  return (
    <div>
      <div className="flex mt-[40px] items-start px-[50px] justify-between flex-wrap gap-[25px]">
        <Dialog>
          <DialogTrigger className="w-[48%]">
            <div className="text-[#1976D2] shadow-md duration-300 transition-all text-[20px] font-bold rounded-lg cursor-pointer  h-[200px] bg-white hover:bg-gray-300 flex flex-col justify-center items-center">
              <h1>Add New Challenges</h1>
              <button>+</button>
            </div>
          </DialogTrigger>
          <DialogContent className="px-[15px] py-[30px] w-[100%]">
            <DialogHeader>
              <DialogTitle className="text-[#1976D2] mb-[40px] text-center font-bold text-[24px]">
                Add Challenge
              </DialogTitle>
              <form action="" className="w-full flex flex-col gap-[15px]">
                <input
                  type="text"
                  placeholder="Activity"
                  className="border borde-[1px] border-[#1976D2] py-[8px] px-[15px] outline-none rounded-md shadow-lg"
                />
                <textarea
                  placeholder="Sapce"
                  className="w-full h-[150px] border borde-[1px] border-[#1976D2] py-[8px] px-[15px] outline-none rounded-md shadow-lg"
                />
                <div className="flex gap-[15px]">
                  <input
                    type="text"
                    placeholder="Add criteria"
                    className="border w-full borde-[1px] border-[#1976D2] py-[8px] px-[15px] outline-none rounded-md shadow-lg"
                  />
                  <input
                    type="text"
                    placeholder="30%"
                    className="border w-[40%] borde-[1px] border-[#1976D2] py-[8px] px-[15px] outline-none rounded-md shadow-lg"
                  />
                </div>

                <div className="flex justify-center">
                  <Button
                    type="submit"
                    className="mt-[30px] w-fit bg-[#1976D2] hover:bg-[#1976D2]/85 duration-300 transition-all"
                  >
                    Add Challenge
                  </Button>
                </div>
              </form>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <div className="w-[48%]">
          <ChallengeCard
            name="Challenge name"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati"
          />
        </div>
        <div className="w-[48%]">
          <ChallengeCard
            name="Challenge name"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati"
          />
        </div>
        <div className="w-[48%]">
          <ChallengeCard
            name="Challenge name"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati"
          />
        </div>
      </div>
    </div>
  );
};

export default Challenges;
