"use client";
import { useLoginPosition } from "@/store/loginPositionSlice";

export default function TeamsLogin() {
  let { position } = useLoginPosition();
  if (position === "left-0") {
    position = "right-0";
  } else if (position === "right-0") {
    position = "left-0";
  }

  return (
    <div className={`absolute ${position} top-0 min-h-screen w-[55%]`}>
      <h1>login as team</h1>
    </div>
  );
}
