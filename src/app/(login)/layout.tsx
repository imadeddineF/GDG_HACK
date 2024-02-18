import Navbar from "@/components/layouts/dashboardNavbar";
import "../../styles/globals.css";
import { Cairo } from "next/font/google";
import { Cairo as FontSans } from "next/font/google";
const cairo = Cairo({ subsets: ["latin"] });
import GDG from "../../../public/imgs/gdgMainLogo.png";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Login",
  description: "Generated by Next.js",
};

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}