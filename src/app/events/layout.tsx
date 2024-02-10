import Navbar from "@/components/layouts/navbar";
import "../../styles/globals.css";
import GDG from "../../../public/imgs/gdgMainLogo.png";

export const metadata = {
  title: "Events",
  description: "Generated by Next.js",
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar navbarLogo={GDG} />
        <div>{children}</div>
      </body>
    </html>
  );
}
