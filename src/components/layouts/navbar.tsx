import React from "react";
import Sidebar from "./sidebar";
import { ModeToggle } from "../ui/mode-toggle";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-[10px] px-[20px] bg-slate-800">
      <Sidebar />
      <div className="flex items-center gap-4">
        <ModeToggle />
        <h1>User</h1>
      </div>
    </nav>
  );
};

export default Navbar;
