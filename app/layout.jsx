import { Poppins, Mulish } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

const mulish = Mulish({
  subsets: ["cyrillic"],
  weight: ["700"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Шиномонтаж",
  description: "Виїзний шиновомнтаж, Київ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
