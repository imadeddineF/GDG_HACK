import '../../../styles/globals.css';
import { cn } from '../../../lib/utils';
import React from 'react';
import JudgeSidebar from '@/components/judge/layouts/sidebar';
import JudgeNavbar from '@/components/judge/layouts/navbar';

export default function JudgeDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="min-h-screen flex font-sans">
        <JudgeSidebar />
        <div className="flex flex-col w-full min-h-screen">
          <JudgeNavbar />
          {children}
        </div>
      </body>
    </html>
  );
}
