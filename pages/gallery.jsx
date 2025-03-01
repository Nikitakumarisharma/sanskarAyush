import PageBanner from "@/src/components/PageBanner";

import Layout from "@/src/layouts/Layout";
import dynamic from "next/dynamic";
import Client from "@/src/components/Client";

const ProjectGridIsotope = dynamic(
  () => import("@/src/components/isotope/ProjectGridIsotope"),
  {
    ssr: false,
  }
);
const ProjectGrid = () => {
  return (
    <Layout>
      {/*====== Start Gallery section ======*/}
      <ProjectGridIsotope />
      <Client />
      {/*====== End Gallery section ======*/}
      
    </Layout>
  );
};
export default ProjectGrid;
