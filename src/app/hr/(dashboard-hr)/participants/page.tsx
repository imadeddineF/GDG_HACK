import Image from "next/image";
import React from "react";
import agendaBgImg from "../../../../public/imgs/agendaBgImg.png";
import qrCode from "../../../../public/svgs/qrCode.svg";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Participants = () => {
  return (
    <div>
      <div className="mt-[40px]">
        <Table className="bg-white shadow-md rounded-lg">
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-[#1976D2]">No</TableHead>
              <TableHead className="text-[#1976D2]">Name</TableHead>
              <TableHead className="text-[#1976D2]">Phone number</TableHead>
              <TableHead className="text-[#1976D2]">Team Name</TableHead>
              <TableHead className="text-[#1976D2]">Status</TableHead>
              <TableHead className="text-[#1976D2]">Check In</TableHead>
              <TableHead className="text-[#1976D2]">Check Out</TableHead>
              <TableHead className="text-[#1976D2]">Qr code</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>Frank Murlo</TableCell>
              <TableCell>07 67564578</TableCell>
              <TableCell>YonKos</TableCell>
              <TableCell>
                <div className="bg-red-500/15 border-[1px] gap-2 border-red-500 flex items-center rounded-lg px-[10px] ">
                  <div className="w-[8px] h-[8px] rounded-full bg-red-500" />
                  <span className="text-red-500">Present</span>
                </div>
              </TableCell>
              <TableCell>09:00 AM</TableCell>
              <TableCell>05:00 PM</TableCell>
              <TableCell className="text-right flex items-center gap-3 justify-center">
                <Dialog>
                  <DialogTrigger>
                    <Image className="w-[30px]" src={qrCode} alt="" />
                  </DialogTrigger>
                  <DialogContent className="px-[15px] flex flex-col items-center py-[30px] w-[350px]">
                    <DialogTitle className="text-[#1976D2] mb-[40px] text-center font-bold text-[24px]">
                      Please scan the QR code to checkin
                    </DialogTitle>

                    <div>qr code</div>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Participants;
