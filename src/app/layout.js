import "../styles/globals.css";

export const metadata = {
  title: "Grocery Store",
  description: "Grocery Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
