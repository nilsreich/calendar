import { Topbar } from "@/components/Topbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="  flex h-[100dvh] flex-col overflow-auto">
        <Topbar />
        {children}
      </body>
    </html>
  );
}
