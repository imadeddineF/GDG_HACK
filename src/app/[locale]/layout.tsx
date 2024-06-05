import { type Metadata } from 'next';
import '../../styles/globals.css';
import { Roboto } from 'next/font/google';
import { cn } from '../../lib/utils';
import { ThemeProvider } from '@/context/theme-provider';
// i18n
import { type Locale } from '@/lib/locales';
import { getMessages, getTranslations } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import useTextDirection from '@/hooks/useTextDirection';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

type Props = {
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
};

const RootLayout: React.FC<Props> = async ({ children, params }) => {
  const messages = await getMessages();
  const direction = useTextDirection(params.locale);

  return (
    <html lang={params.locale} dir={direction}>
      <body className={cn('font-sans', roboto.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale });
  // const t = await getTranslations({ locale, namespace: "root" });

  return {
    title: 'GDG',
    description: 'GDG HACK',
    // icons: '../favicon.ico',
  };
}

export default RootLayout;
