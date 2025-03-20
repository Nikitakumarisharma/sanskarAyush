import { Fragment, useEffect } from "react";
import { Poppins } from "next/font/google";
// import { FaPhone, FaWhatsapp } from 'react-icons/fa';

import niceSelect from "react-nice-select";
import ImageView from "../components/ImageView";
import VideoPopup from "../components/VideoPopup";
import { animation } from "../utils";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const Layout = ({ header, children, footer }) => {
  useEffect(() => {
    niceSelect();
  }, []);

  useEffect(() => {
    animation();
  }, []);

  return (
    <div className={poppins.variable}>
     {/* <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
            <a href="tel:+91 9084715401" className="w-12 h-12 flex items-center justify-center hover:scale-110 transition">
                <FaPhone size={30} />
            </a>
            <a href="https://wa.me/9084715401" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center hover:scale-110 transition">
                <FaWhatsapp size={35} />
            </a>
        </div> */}
      <Header header={header} />
      <VideoPopup />
      <ImageView />
      {children}
      <Footer footer={footer} />
    </div>

  );
};
export default Layout;
