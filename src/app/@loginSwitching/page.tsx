"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLoginPosition } from "../../store/loginPositionSlice"; // Adjust the path accordingly

const LoginSwitching = () => {
  const [visibleLogin, setVisibleLogin] = useState("hr");
  const { position, setPosition } = useLoginPosition();

  const switchLogin = (loginType: string) => {
    setVisibleLogin(loginType);
    setPosition(position === "left-0" ? "right-0" : "left-0");
  };

  return (
    <div
      className={`w-[45%] flex gap-[30px] absolute ${position} transition-all duration-300 top-0 z-50 min-h-screen bg-slate-500`}
    >
      {visibleLogin !== "teams" && (
        <Link onClick={() => switchLogin("teams")} href="/teams-login">
          Teams login
        </Link>
      )}
      {visibleLogin !== "judge" && (
        <Link onClick={() => switchLogin("judge")} href="/judge-login">
          Judge login
        </Link>
      )}
      {visibleLogin !== "hr" && (
        <Link onClick={() => switchLogin("hr")} href="/">
          HR login
        </Link>
      )}
    </div>
  );
};

export default LoginSwitching;
