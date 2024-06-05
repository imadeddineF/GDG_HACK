'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import Chart1 from '@/components/hr/pages/analytics/chart1';
import Chart2 from '@/components/hr/pages/analytics/chart2';
import Chart3 from '@/components/hr/pages/analytics/chart3';

export default function Analytics() {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-8">
      <h1>Analytics</h1>
      <div className="w-[500px] h-[300px]">
        <Chart1 />
      </div>
      <div className="w-[500px] h-[300px]">
        <Chart2 />
      </div>
      <div className="w-[500px] h-[300px]">
        <Chart3 />
      </div>
    </div>
  );
}
