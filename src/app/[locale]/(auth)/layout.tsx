import '../../../styles/globals.css';
import { cn } from '../../../lib/utils';
import React from 'react';

export default function AuthLayout({
  children,
  loginSwitching,
}: {
  children: React.ReactNode;
  loginSwitching: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid grid-cols-12 font-sans">
      <div className=" col-span-6 h-full">{children}</div>
      <div className="bg-black/50 h-full col-span-6">{loginSwitching}</div>
    </div>
  );
}
