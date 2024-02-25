"use client";
import { useLoginPosition } from "@/store/loginPositionSlice";

const JudgeLogin = () => {
  let { position } = useLoginPosition();
  if (position === "left-0") {
    position = "right-0";
  } else if (position === "right-0") {
    position = "left-0";
  }

  return (
    <div className={`absolute ${position} top-0 min-h-screen w-[55%]`}>
      <h1>Judge sign in</h1>
    </div>
  );
};

export default JudgeLogin;
