import "./globals.css";

export const metadata = {
  title: "Google Clone",
  description:
    "This is a google clone app create with Next 13 and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">{children}</body>
    </html>
  );
}
