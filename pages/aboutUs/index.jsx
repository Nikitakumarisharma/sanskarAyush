import CarausalTwo from "@/src/components/Carausal_2";
import About from "@/src/components/About"
import VisionMission from "@/src/components/Vision";
import Timeline from "@/src/components/timeline";
import Layout from "@/src/layouts/Layout";
import WhyChooseUs from "@/src/components/WhyChooseUs";
import ChallengesHighlights from "@/src/components/Challenges";
import Client from "@/src/components/Client";



const AboutUs = () => {
  return (
    <Layout>
        <CarausalTwo />
        <About />
        <VisionMission/>
        <ChallengesHighlights />
        <Timeline />
        <WhyChooseUs />
        <Client />
      
    </Layout>
  );
};
export default AboutUs;
