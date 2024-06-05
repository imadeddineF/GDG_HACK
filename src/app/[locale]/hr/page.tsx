import React from 'react';
import { Button } from '@/components/ui/button';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import EventCard from '@/components/hr/shared/eventCard';

const Hr = () => {
  return (
    <div className="flex justify-center mb-[80px] mt-[60px] items-center flex-col">
      <div className="w-[80%]">
        <h2 className="text-[22px] mb-[30px] font-bold">GDG Events</h2>

        <div className="flex justify-between">
          <div className="flex shadow-md text-[13px] rounded-lg px-[50px] text-center py-[5px] flex-col bg-[#1976D2] font-semibold justify-center text-white">
            <span>Total Events</span>
            <span>4 events</span>
          </div>

          <input
            className="rounded-2xl shadow-md border-[1px] border-gray-200 h-fit py-[12px] outline-none pl-[30px] w-[50%] px-[10px]"
            type="text"
            placeholder="search"
          />
        </div>
      </div>

      <div className="flex w-[80%] flex-col gap-[15px] mt-[30px]">
        <div className="flex justify-between w-full gap-[15px]">
          <div className="h-[180px] w-full">
            <Dialog>
              <DialogTrigger className="w-full">
                <div className="text-[#1976D2] shadow-md duration-300 transition-all text-[20px] font-bold rounded-lg cursor-pointer  h-[180px] bg-white hover:bg-gray-300 flex flex-col justify-center items-center">
                  <h1>Add New Event</h1>
                  <span>+</span>
                </div>
              </DialogTrigger>

              <DialogContent className="px-[30px] pb-[20px] pt-[30px]">
                <DialogHeader>
                  <DialogTitle className="text-[#1976D2] mb-[40px] text-center font-bold text-[24px]">
                    Add Event
                  </DialogTitle>
                  <form action="" className="w-full flex flex-col gap-[15px]">
                    <input
                      type="text"
                      placeholder="Activity"
                      className="border borde-[1px] border-[#1976D2] py-[8px] px-[15px] outline-none rounded-md shadow-lg"
                    />
                    <textarea
                      placeholder="Sapce"
                      className="w-full h-[120px] border borde-[1px] border-[#1976D2] py-[8px] px-[15px] outline-none rounded-md shadow-lg"
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
                        Add Event
                      </Button>
                    </div>
                  </form>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          <div className="h-[180px] w-full">
            <EventCard
              name="Challenge name"
              description="Lorem ipsum dolor sit"
              participants={1800}
              place="Esi alger , Oued smar , Alger"
            />
          </div>
          <div className="h-[180px] w-full">
            <EventCard
              name="Challenge name"
              description="Lxercitati"
              participants={1800}
              place="Esi alger , Oued smar , Alger"
            />
          </div>
        </div>

        <div className="flex w-full justify-between gap-[15px]">
          <div className=" h-[180px] w-full">
            <EventCard
              name="Challenge name"
              description="Lud exercitati"
              participants={1800}
              place="Esi alger , Oued smar , Alger"
            />
          </div>
          <div className=" h-[180px] w-full">
            <EventCard
              name="Challenge name"
              description="Lorem ipsum dolor sit"
              participants={1800}
              place="Esi alger , Oued smar , Alger"
            />
          </div>
          <div className=" h-[180px] w-full">
            <EventCard
              name="Challenge name"
              description="Lxercitati"
              participants={1800}
              place="Esi alger , Oued smar , Alger"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hr;
