import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Google Clone",
  description:
    "This is a google clone app create with Next 13 and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-9s00">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
