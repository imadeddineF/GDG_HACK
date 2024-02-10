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
}

const ChallengeCard = ({ name, description }: Props) => {
  return (
    <div className="p-[20px] h-full relative shadow-md w-full bg-white rounded-lg">
      <div className="flex absolute right-[20px] top-[15px] items-center gap-[10px]">
        <Image className="cursor-pointer" src={edit} alt="" />
        <AlertDialog>
          <AlertDialogTrigger>
            <Image className="cursor-pointer" src={close} alt="close" />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you absolutely sure to delete this?
              </AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction className="bg-[#1976D2] hover:bg-[#1976D2]">
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <h2 className="font-bold text-[20px]">{name}</h2>
      <p className="text-[#757575] text-[13px] py-[10px] px-[20px]">
        {description}
      </p>
      <div className="flex justify-end mt-[20px]">
        <Button className="bg-[#1976D2] hover:bg-[#1976D2]/80">Details</Button>
      </div>
    </div>
  );
};

export default ChallengeCard;
