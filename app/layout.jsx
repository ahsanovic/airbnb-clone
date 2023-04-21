import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";

export const metadata = {
  title: 'Air BNB Clone',
  description: 'This is Air BNB clone',
};

const font = Nunito({
    subsets: ["latin"]
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}