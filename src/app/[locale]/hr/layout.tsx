import '../../../styles/globals.css';
import { cn } from '../../../lib/utils';
import React from 'react';
import HRNavbar from '@/components/hr/layouts/navbar';

export default function HrDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="min-h-screen flex flex-col font-sans">
        <HRNavbar />
        {children}
      </body>
    </html>
  );
}
