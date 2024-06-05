'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
// import { useLoginPosition } from "../../store/loginPositionSlice"; // Adjust the path accordingly

const LoginSwitching = () => {
  const [visibleLogin, setVisibleLogin] = useState('hr');
  // const { position, setPosition } = useLoginPosition();

  const switchLogin = (loginType: string) => {
    setVisibleLogin(loginType);
    // setPosition(position === "left-0" ? "right-0" : "left-0");
  };

  return (
    <div className={`flex gap-[50px] justify-center items-center h-full`}>
      {visibleLogin !== 'teams' && (
        <Link onClick={() => switchLogin('teams')} href="/teams-login">
          <Button>Teams login</Button>
        </Link>
      )}
      {visibleLogin !== 'judge' && (
        <Link onClick={() => switchLogin('judge')} href="/judge-login">
          <Button>Judge login</Button>
        </Link>
      )}
      {visibleLogin !== 'hr' && (
        <Link onClick={() => switchLogin('hr')} href="/">
          <Button>HR login</Button>
        </Link>
      )}
    </div>
  );
};

export default LoginSwitching;
