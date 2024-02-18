"use client";
import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState } from "react";
import logo from "../../../public/imgs/gdglogo.png";
import Image from "next/image";
import { Button } from "../ui/button";
import logoutIcon from "../../../public/svgs/logout.svg";
import Link from "next/link";
import { VscSettings } from "react-icons/vsc";
import { IoIosPeople } from "react-icons/io";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaPuzzlePiece } from "react-icons/fa6";
import { SlUserFollowing } from "react-icons/sl";
import { GiTakeMyMoney } from "react-icons/gi";
import { LuLineChart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { VscFeedback } from "react-icons/vsc";
import whiteLogo from "../../../public/imgs/gdg_logo_3 (1).png";
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
import { useHeaderTitle } from "@/store/headerTitle";

const SidebarContext = createContext({ expanded: false });

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const [activeLink, setActiveLink] = useState("/");
  const { setTitle } = useHeaderTitle((state) => state);

  const handleLinkClick = (link: string, title: string) => {
    setActiveLink(link);
    setTitle(title);
  };

  return (
    <aside className="h-screen">
      <nav className="h-full bg-[#1976D2] flex flex-col border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <Image
            src={whiteLogo}
            className={`overflow-hidden transition-all ${
              expanded ? "w-[180px] mr-[10px]" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? (
              <ChevronFirst className="w-[20px] h-[20px]" />
            ) : (
              <ChevronLast className="w-[20px] h-[20px]" />
            )}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="mt-[70px] flex flex-1 flex-col ">
            {/* Agenda */}
            <Link
              href="/agenda"
              className={`flex hover:bg-white/80 hover:text-[#1976D2] items-center gap-[10px] font-medium  cursor-pointer duration-300 transition-all w-full px-[20px] py-[8px] ${
                activeLink === "/agenda"
                  ? "bg-white text-[#1976D2] font-semibold"
                  : "bg-[#1976D2] text-white"
              }`}
              onClick={() => handleLinkClick("/agenda", "Agenda")}
            >
              <VscSettings style={{ fontSize: "24px" }} />
              {expanded ? "Agenda" : ""}
            </Link>
            {/* Participants */}
            <Link
              href="/participants"
              className={`flex hover:bg-white/80 hover:text-[#1976D2] items-center gap-[10px] font-medium  cursor-pointer duration-300 transition-all w-full px-[20px] py-[8px] ${
                activeLink === "/participants"
                  ? "bg-white text-[#1976D2] font-semibold"
                  : "bg-[#1976D2] text-white"
              }`}
              onClick={() => handleLinkClick("/participants", "Participants")}
            >
              <IoIosPeople style={{ fontSize: "24px" }} />
              {expanded ? "Participants" : ""}
            </Link>
            {/* Mentors */}
            <Link
              href="/mentors"
              className={`flex hover:bg-white/80 hover:text-[#1976D2] items-center gap-[10px] font-medium  cursor-pointer duration-300 transition-all w-full px-[20px] py-[8px] ${
                activeLink === "/mentors"
                  ? "bg-white text-[#1976D2] font-semibold"
                  : "bg-[#1976D2] text-white"
              }`}
              onClick={() => handleLinkClick("/mentors", "Mentors")}
            >
              <LiaChalkboardTeacherSolid style={{ fontSize: "24px" }} />
              {expanded ? "Mentors" : ""}
            </Link>
            {/* Judges */}
            <Link
              href="/judges"
              className={`flex hover:bg-white/80 hover:text-[#1976D2] items-center gap-[10px] font-medium  cursor-pointer duration-300 transition-all w-full px-[20px] py-[8px] ${
                activeLink === "/judges"
                  ? "bg-white text-[#1976D2] font-semibold"
                  : "bg-[#1976D2] text-white"
              }`}
              onClick={() => handleLinkClick("/judges", "Judges")}
            >
              <SlUserFollowing style={{ fontSize: "24px" }} />
              {expanded ? "Judges" : ""}
            </Link>
            {/* Challenges */}
            <Link
              href="/challenges"
              className={`flex hover:bg-white/80 hover:text-[#1976D2] items-center gap-[10px] font-medium  cursor-pointer duration-300 transition-all w-full px-[20px] py-[8px] ${
                activeLink === "/challenges"
                  ? "bg-white text-[#1976D2] font-semibold"
                  : "bg-[#1976D2] text-white"
              }`}
              onClick={() => handleLinkClick("/challenges", "Challenges")}
            >
              <FaPuzzlePiece style={{ fontSize: "24px" }} />
              {expanded ? "Challenges" : ""}
            </Link>
            {/* Feedbacks */}
            <Link
              href="/feedbacks"
              className={`flex hover:bg-white/80 hover:text-[#1976D2] items-center gap-[10px] font-medium  cursor-pointer duration-300 transition-all w-full px-[20px] py-[8px] ${
                activeLink === "/feedbacks"
                  ? "bg-white text-[#1976D2] font-semibold"
                  : "bg-[#1976D2] text-white"
              }`}
              onClick={() => handleLinkClick("/feedbacks", "Feedbacks")}
            >
              <VscFeedback style={{ fontSize: "24px" }} />
              {expanded ? "Feedbacks" : ""}
            </Link>
            {/* Statistics */}
            <Link
              href="/statistics"
              className={`flex hover:bg-white/80 hover:text-[#1976D2] items-center gap-[10px] font-medium  cursor-pointer duration-300 transition-all w-full px-[20px] py-[8px] ${
                activeLink === "/statistics"
                  ? "bg-white text-[#1976D2] font-semibold"
                  : "bg-[#1976D2] text-white"
              }`}
              onClick={() => handleLinkClick("/statistics", "Statistics")}
            >
              <LuLineChart style={{ fontSize: "24px" }} />
              {expanded ? "Statistics" : ""}
            </Link>
            {/* Sponsors */}
            <Link
              href="/sponsors"
              className={`flex hover:bg-white/80 hover:text-[#1976D2] items-center gap-[10px] font-medium  cursor-pointer duration-300 transition-all w-full px-[20px] py-[8px] ${
                activeLink === "/sponsors"
                  ? "bg-white text-[#1976D2] font-semibold"
                  : "bg-[#1976D2] text-white"
              }`}
              onClick={() => handleLinkClick("/sponsors", "Sponsors")}
            >
              <GiTakeMyMoney style={{ fontSize: "24px" }} />
              {expanded ? "Sponsors" : ""}
            </Link>
          </ul>
        </SidebarContext.Provider>

        <div className="flex flex-col items-center gap-[20px] pb-[40px] justify-center">
          <Link
            href={`/${1}`}
            onClick={() => setTitle("Profile")}
            className={`${
              expanded ? "px-[25px]" : "px-[10px]"
            }  flex items-center gap-[15px] hover:bg-white/80 duration-300 transition-all py-[8px] bg-white rounded-[15px]`}
          >
            <CgProfile style={{ fontSize: "24px" }} />
            {expanded ? "Profile" : ""}
          </Link>
          <AlertDialog>
            <AlertDialogTrigger>
              <Button
                className={`${
                  expanded ? "px-[25px]" : "px-[10px]"
                }  flex items-center gap-[15px] hover:bg-white/80 duration-300 transition-all py-0 bg-white text-[#EA4334] rounded-[15px]`}
              >
                <Image src={logoutIcon} alt="" />
                {expanded ? "Logout" : ""}
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you absolutely sure to logout ?
                </AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-[#d23219] hover:bg-[#a6200b]">
                  Logout
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
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
