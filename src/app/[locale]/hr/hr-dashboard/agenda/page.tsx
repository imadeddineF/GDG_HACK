import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import close from '../../../../../../public/svgs/close.svg';
import edit from '../../../../../../public/svgs/edit.svg';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

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
} from '@/components/ui/alert-dialog';

const Agenda = () => {
  return (
    <>
      {/* Main */}
      <main>
        <div className="flex justify-end my-[30px]">
          <Dialog>
            <DialogTrigger>
              <Button className="bg-[#1976D2] hover:bg-[#1976D2]/85">
                Add Activity
              </Button>
            </DialogTrigger>
            <DialogContent className="px-[15px] py-[30px] w-full">
              <DialogHeader>
                <DialogTitle className="text-[#1976D2] mb-[40px] text-center font-bold text-[24px]">
                  Add Activity
                </DialogTitle>
                <form action="" className="w-full flex flex-col gap-[15px]">
                  <input
                    type="text"
                    placeholder="Activity"
                    className="border-[1px] border-[#1976D2] py-[8px] px-[15px] outline-none rounded-md shadow-lg "
                  />
                  <div className="flex justify-between gap-[15px]">
                    <input
                      type="text"
                      placeholder="Starting Time"
                      className="border-[1px] border-[#1976D2] py-[8px] px-[15px] outline-none rounded-md shadow-lg"
                    />
                    <input
                      type="text"
                      placeholder="Ending Time"
                      className="border-[1px] border-[#1976D2] py-[8px] px-[15px] outline-none rounded-md shadow-lg"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Sapce"
                    className="w-full border borde-[1px] border-[#1976D2] py-[8px] px-[15px] outline-none rounded-md shadow-lg"
                  />

                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      className="mt-[50px] w-fit bg-[#1976D2] hover:bg-[#1976D2]/85 duration-300 transition-all"
                    >
                      Add Activity
                    </Button>
                  </div>
                </form>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <Table className="bg-white shadow-md rounded-lg">
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Status</TableHead>
              <TableHead>Activity</TableHead>
              <TableHead>Starting Time</TableHead>
              <TableHead>Ending Time</TableHead>
              <TableHead>Space</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                <Checkbox />
              </TableCell>
              <TableCell>Checkin</TableCell>
              <TableCell>17:00 01/12/2023</TableCell>
              <TableCell>17:30 01/12/2023</TableCell>
              <TableCell>Doors 1, 2</TableCell>
              <TableCell className="text-right flex items-center gap-3 justify-center">
                <Dialog>
                  <DialogTrigger>
                    <Image className="cursor-pointer" src={edit} alt="edit" />
                  </DialogTrigger>
                  <DialogContent className="px-[15px] py-[30px] w-[90%]">
                    <DialogHeader>
                      <DialogTitle className="text-[#1976D2] mb-[40px] text-center font-bold text-[24px]">
                        Edit Activity
                      </DialogTitle>
                      <form
                        action=""
                        className="w-full flex flex-col gap-[15px]"
                      >
                        <input
                          type="text"
                          placeholder="Activity"
                          className="border borde-[1px] border-[#1976D2] py-[8px] px-[15px] outline-none rounded-md shadow-lg"
                        />
                        <div className="flex justify-between gap-[15px]">
                          <input
                            type="text"
                            placeholder="Starting Time"
                            className="border borde-[1px] border-[#1976D2] py-[8px] px-[15px] outline-none rounded-md shadow-lg"
                          />
                          <input
                            type="text"
                            placeholder="Ending Time"
                            className="border borde-[1px] border-[#1976D2] py-[8px] px-[15px] outline-none rounded-md shadow-lg"
                          />
                        </div>
                        <input
                          type="text"
                          placeholder="Sapce"
                          className="w-full border borde-[1px] border-[#1976D2] py-[8px] px-[15px] outline-none rounded-md shadow-lg"
                        />

                        <div className="flex justify-center">
                          <Button
                            type="submit"
                            className="mt-[50px] w-fit bg-[#1976D2] hover:bg-[#1976D2]/85 duration-300 transition-all"
                          >
                            Edit Activity
                          </Button>
                        </div>
                      </form>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

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
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </main>
    </>
  );
};

export default Agenda;
