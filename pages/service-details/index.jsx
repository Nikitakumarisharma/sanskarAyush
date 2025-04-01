import Layout from "@/src/layouts/Layout";
import { BsBuildingFillGear } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import LeadForm from "@/src/components/LeadForm";


import Link from "next/link";
const serviceDetails = () => {
  return ( 
    <Layout>
      {/* <PageBanner pageName={"service Details"} /> */}
      {/*====== Start service Details section ======*/}
      <section className="service-details-section pt-50">
        <div className="container">
          <div className="row">

          <div className="col-xl-8 col-lg-7">
              {/*====== service Details Wrapper ======*/}
              <div className="service-info-wrapper pr-lg-40 wow fadeInDown">
                <h2 className="title">Liquid orals</h2>
                <p>
                Liquid orals are pharmaceutical preparations in liquid form, including solutions, suspensions, emulsions, and syrups, designed for oral intake. They provide ease of administration, especially for children and elderly patients, ensuring faster absorption and precise dosing. These formulations contain active ingredients, sweeteners, preservatives, stabilizers, and flavoring agents to enhance taste and stability. Common examples include cough syrups, antacids, and antibiotic suspensions. Liquid orals are widely used due to their effectiveness, patient compliance, and versatility in delivering various medicinal compounds.

                </p>
                <div className="row gap-3 px-3">
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Syrups
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Suspensions
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Drops
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Medicated{" "}
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Candies
                  </p>
                <p className="bg-[#7EA63F] text-white p-2 rounded-xl  mb-4">Note: We offer customized solutions tailored to specific requirements</p>
                </div>
                
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/home-service/liqi-sv.png"
                    alt="service Image"
                    className="h-96"
                  />
                </div>
                <h3>Benefits of Liquid Orals</h3>
               
                <ul className="check-style-one mb-60">
                  <li>
                    <i className="far fa-check" />
                    Liquid dosage forms (for oral use) are the most suitable dosage form for patients who have difficulty taking tablets or  capsules, as might be the case with pediatric or geriatric patients.
                  </li>
                  <li>
                    <i className="far fa-check" />
                    They are attractive in appearance and gives beneficial psychological effects.Drugs with bitter and unpleasant taste can be given in sweetened, coloured and flavoured vehicles.
                  </li>
                  <li>
                    <i className="far fa-check" />
                    There is higher flexibility in dosing when compared to solid dosage forms like tablet and capsules.
                  </li>
                  <li>
                    <i className="far fa-check" />
                    The dose of the drug substance can be easily and conveniently adjusted by measuring a different volume.
                  </li>
                </ul>


                <h3>Manufacturing Process</h3>
                <div className="row">

                  <div className="col-md-12">
                    <div className="block-image wow fadeInLeft">
                      <img
                        src="assets/images/home-service/liquid-sv-1.png"
                        alt="service Image"
                        // className="h-48"
                      />
                    </div>
                  </div>
                  {/* <div className="col-md-6">
                    <div className="block-image wow fadeInRight">
                      <img
                        src="assets/images/home-service/liquid-sv-2.png"
                        alt="service Image"
                      />
                    </div>
                  </div> */}
                </div>
                <p>
                The manufacturing process of Ayurvedic liquid orals involves selecting natural ingredients, extraction, blending, filtration, sterilization, quality testing, and packaging, ensuring purity, potency, and effective absorption for holistic health and wellness.
                </p>
                <div className="process-wrapper p-r z-1 wow fadeInUp">
                  <div className="shape line-shape">
                    <span>
                      <img
                        src="assets/images/shape/process-line.png"
                        alt="line"
                      />
                    </span>
                  </div>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="process-step-item text-center mb-50">
                        <div className="icon">
                        <BsBuildingFillGear />

                        </div>
                        <div className="text">
                          <h6>Manufactured Products</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="process-step-item text-center mb-50">
                        <div className="icon">
                          <i className="flaticon-industry" />
                        </div>
                        <div className="text">
                          <h6>Testing of <br />Products</h6>
                          
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="process-step-item text-center mb-50">
                        <div className="icon">
                        <TbTruckDelivery />
                        </div>
                        <div className="text">
                          <h6>Best Quality Product Delivery</h6>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3>Additionally, we offer testing for:</h3>
                <ul>
                  <li> ● Expertise in Ayurvedic Category
                  </li>
                  <li> ● Assay
                  </li>
                  <li> ● Cleaning Validations
                  </li>
                  <li> ● API (Active Pharmaceutical Ingredients)
                  </li>
                  <li> ● RM (Raw Materials)
                  </li>
                  <li> ● Intermediates
                  </li>
                  <li> ● FG (Finished Goods) Testing services
                  </li>
                </ul>
                <br />
                <p>
                Beyond Ayurvedic and pharmaceutical services, we also specialize in food and nutraceuticals, offering nutritional profiling, vitamins and minerals analysis, and cosmetics testing in our NABL-certified lab for superior quality and accuracy.
                </p>
              </div>
              
            </div>
            
          <div className="col-xl-4 col-lg-5 ">
              {/*====== Sidebar Widget Area ======*/}
              <div className="sidebar-widget-area position-sticky" style={{ top: "100px" }}>
              <div className="sidebar-widget widget-service-nav gray-bg mb-30 wow fadeInUp">
                  <h4 className="widget-title">Services List</h4>
                  <ul>
                    <li>
                      <Link legacyBehavior href="/service-details">
                        <a>
                        Liquid Orals
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service2">
                        <a>
                        Cosmetic Topicals
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service3">
                        <a>
                        Paste
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service4">
                        <a>
                        Drops
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service5">
                        <a>
                        Solid Orals
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service6">
                        <a>
                        Juices/Ras
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <LeadForm></LeadForm>
                <div className="sidebar-widget widget-banner mb-30 wow fadeInUp " style={{marginTop:"50px"}}>
                  <div className="banner-content text-white">
                    <h3 className="title">Looking for the best third-party manufacturer
</h3>
                    <p>You’re in right place</p>
                    <Link legacyBehavior href="/contact">
                      <a className="main-btn secondary-btn opacity-75"style={{background:"darkgreen"}}>Contact Us</a>
                    </Link>
                    <img
                      src="assets/images/home-service/service.png"
                      alt="Banner Image"
                      className="w-96"
                    />
                  </div>
                </div>
              </div>

            </div>

            
            
          </div>
        </div>
      </section>
      {/*====== End service Details section ======*/}
      
    </Layout>
  );
};
export default serviceDetails;
