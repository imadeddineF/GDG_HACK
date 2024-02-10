"use client";
import React from "react";
import close from "../../public/svgs/close.svg";
import edit from "../../public/svgs/edit.svg";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface Props {
  name: string;
  description: string;
  participants: number;
  place: string;
}

const EventCard = ({ name, description, participants, place }: Props) => {
  return (
    <div className="p-[15px] cursor-pointer hover:bg-white/65 hover:-top-2 duration-300 transition-all h-full overflow-hidden relative shadow-md w-full bg-white rounded-lg">
      <h2 className="font-bold text-[20px]">{name}</h2>
      <p className="text-[#1976D2] font-light text-[13px] pt-[2px]">
        {description}
      </p>
      <h1 className="text-[#1976D2] text-[24px] text-center font-bold my-[20px]">
        {participants} participants
      </h1>
      <div className="flex justify-end">
        <span className="text-[13px]">{place}</span>
      </div>
    </div>
  );
};

export default EventCard;
