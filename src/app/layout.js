import "./globals.css";
import 'aos/dist/aos.css'; // Import the CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';


import { NavigationbarWithDropdownMultilevelMenu } from "@/components/Navbar";
import { ToastContainer } from "react-toastify";
import CookieConsent from "@/components/CookieConsent";
import FooterGlobal from "@/components/FooterGlobal";




export const metadata = {
  title: "Home || Web-briks",
  description: "Welcome to Web-briks, your creative solution provider.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="icon" type="image/png" href="https://iili.io/dj5tSSf.png" />
      </head>

      <body>
        <ToastContainer position="bottom-right" />
        <header className="lg:sticky lg:-top-2 z-50 shadow-md">
          <NavigationbarWithDropdownMultilevelMenu />
        </header>

        <main className="z-0">{children}</main>

        <footer>
          <FooterGlobal />
        </footer>
        <CookieConsent />
      </body>
    </html>
  );
}
