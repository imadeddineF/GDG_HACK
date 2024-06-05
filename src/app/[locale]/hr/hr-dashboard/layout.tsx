import '../../../../styles/globals.css';
import { cn } from '../../../../lib/utils';
import React from 'react';
import HRSidebar from '@/components/hr/layouts/sidebar';
import HRNavbar from '@/components/hr/layouts/navbar';

export default function HrDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="min-h-screen flex font-sans">
        <HRSidebar />
        <div className="flex flex-col w-full min-h-screen">
          <HRNavbar />
          {children}
        </div>
      </body>
    </html>
  );
}
