import React from "react";

import Carausal from "@/src/components/carausal"
import CownDown from "@/src/components/Coundown"
import About from "@/src/components/About"
import Service from "@/src/components/Service";
import GallerySlider from "@/src/components/GallerySlider";
import WhyChooseUs from "@/src/components/WhyChooseUs";
import AnotherAbout from "@/src/components/About_2";
import Client from "@/src/components/Client";
import Layout from "@/src/layouts/Layout";


const Index = () => {
  // #f7931e orange
  // #7EA63F green
  return (
    <Layout header={1} footer={1}>
      
    <Carausal /> 
    <CownDown />
    <About />
    <Client />
    <Service />
    <GallerySlider />
    <WhyChooseUs />
    <AnotherAbout />
    </Layout>
  );
};
export default Index;
