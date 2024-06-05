'use client';
import React from 'react';
import { ModeToggle } from '../../ui/mode-toggle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import notifications from '../../../public/svgs/notifications.svg';
import whiteGdgLogo from '../../../public/imgs/gdg_logo_3 (1).png';
import Image from 'next/image';
import GDG from '../../../public/imgs/gdgMainLogo.png';

const TeamsNavbar = () => {
  return (
    <nav className="flex dark:bg-black z-50 w-full items-center justify-between shadow-md py-[10px] px-[20px] bg-white">
      <Image src={GDG} alt="gdg logo" className="cursor-pointer w-[180px]" />

      <div className="flex items-center gap-[10px]">
        <ModeToggle />

        <Image
          className="cursor-pointer"
          src={notifications}
          alt="notifications"
        />

        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

export default TeamsNavbar;
