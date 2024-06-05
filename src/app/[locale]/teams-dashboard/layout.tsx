import '../../../styles/globals.css';
import { cn } from '../../../lib/utils';
import React from 'react';

export default function TeamsDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
