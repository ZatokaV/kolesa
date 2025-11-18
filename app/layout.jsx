import { Poppins, Mulish } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

const mulish = Mulish({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
  variable: "--font-mulish",
});



export const metadata = {
  title: "Шиномонтаж",
  description: "Виїзний шиновомнтаж, Київ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
