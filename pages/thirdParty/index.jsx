"use client";
import Layout from "@/src/layouts/Layout";
import Carasual from "@/src/components/carausal3"
import ThirdPartyManufacturing from "@/src/components/thirdparty";
import BenefitsCards from "@/src/components/thirdBenifit";
import WhySanskar from "@/src/components/thirdWhy";


const HeroSection = () => {
 

  return (
    <Layout>
     <Carasual></Carasual>
     <ThirdPartyManufacturing></ThirdPartyManufacturing>
     <BenefitsCards></BenefitsCards>
     <WhySanskar></WhySanskar>
    </Layout>
  );
};

export default HeroSection;
