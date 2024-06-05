import useTextDirection from '@/hooks/useTextDirection';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();
  const direction = useTextDirection();

  return (
    <main className="flex justify-between min-h-screen p-24">
      <h1>Welcome to GDG Algiers -Teams- </h1>
    </main>
  );
}
