"use client";
import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState } from "react";
import logo from "../../../public/imgs/gdglogo.png";
import Image from "next/image";
import { Button } from "../ui/button";
import logoutIcon from "../../../public/svgs/logout.svg";
import Link from "next/link";
import whiteAgenda from "../../../public/svgs/whiteAgenda.svg";
import blueAgenda from "../../../public/svgs/blueAgenda.svg";
import whiteMentors from "../../../public/svgs/whiteMentors.svg";
import blueMentors from "../../../public/svgs/blueMentors.svg";
import whiteJudges from "../../../public/svgs/whiteJudges.svg";
import blueJudges from "../../../public/svgs/blueJudges.svg";
import whiteParticipant from "../../../public/svgs/whiteParticipant.svg";
import blueParticipant from "../../../public/svgs/blueParticipant.svg";
import whiteChallenges from "../../../public/svgs/whiteChallenges.svg";
import blueChallenges from "../../../public/svgs/blueChallenges.svg";

const SidebarContext = createContext({ expanded: false });

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen">
      <nav className="h-full bg-[#1976D2] flex flex-col border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <Image
            src={logo}
            className={`overflow-hidden transition-all ${
              expanded ? "w-[180px]" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="mt-[70px] flex flex-1 flex-col ">
            <Link
              href="/agenda"
              className="bg-[#1976D2] flex items-center gap-[10px] text-white font-medium hover:text-[#1976D2] cursor-pointer duration-300 transition-all hover:bg-white w-full px-[20px] py-[8px]"
            >
              <Image src={whiteAgenda} alt="" />
              <Image src={blueAgenda} alt="" />
              {expanded ? "Agenda" : ""}
            </Link>
            <Link
              href="/participants"
              className="bg-[#1976D2] flex items-center gap-[10px] text-white font-medium hover:text-[#1976D2] cursor-pointer duration-300 transition-all hover:bg-white w-full px-[20px] py-[8px]"
            >
              <Image src={whiteParticipant} alt="" />
              <Image src={blueParticipant} alt="" />
              {expanded ? "Participants" : ""}
            </Link>
            <Link
              href="/mentors"
              className="bg-[#1976D2] flex items-center gap-[10px] text-white font-medium hover:text-[#1976D2] cursor-pointer duration-300 transition-all hover:bg-white w-full px-[20px] py-[8px]"
            >
              <Image src={whiteMentors} alt="" />
              <Image src={blueMentors} alt="" />
              {expanded ? "Mentors" : ""}
            </Link>
            <Link
              href="/judges"
              className="bg-[#1976D2] flex items-center gap-[10px] text-white font-medium hover:text-[#1976D2] cursor-pointer duration-300 transition-all hover:bg-white w-full px-[20px] py-[8px]"
            >
              <Image src={whiteJudges} alt="" />
              <Image src={blueJudges} alt="" />
              {expanded ? "Judges" : ""}
            </Link>
            <Link
              href="/challenges"
              className="bg-[#1976D2] flex items-center gap-[10px] text-white font-medium hover:text-[#1976D2] cursor-pointer duration-300 transition-all hover:bg-white w-full px-[20px] py-[8px]"
            >
              <Image src={whiteChallenges} alt="" />
              <Image src={blueChallenges} alt="" />
              {expanded ? "Challenges" : ""}
            </Link>
          </ul>
        </SidebarContext.Provider>

        <div className="flex pb-[40px] justify-center">
          <Button
            className={`${
              expanded ? "px-[25px]" : "px-[10px]"
            }  flex items-center gap-[15px] hover:bg-white/80 duration-300 transition-all py-0 bg-white text-[#EA4334] rounded-[15px]`}
          >
            <Image src={logoutIcon} alt="" />
            {expanded ? "Logout" : ""}
          </Button>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({
  icon,
  text,
  active,
  alert,
}: {
  icon: JSX.Element;
  text: string;
  active: boolean;
  alert: boolean;
}) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
