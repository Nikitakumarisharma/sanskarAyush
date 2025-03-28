import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layouts/Layout";
import { BsBuildingFillGear } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";


import Link from "next/link";
const serviceDetails = () => {
  return ( 
    <Layout>
      {/* <PageBanner pageName={"service Details"} /> */}
      {/*====== Start service Details section ======*/}
      <section className="service-details-section pt-100">
        <div className="container">
          <div className="row">

          <div className="col-xl-8 col-lg-7">
              {/*====== service Details Wrapper ======*/}
              <div className="service-info-wrapper pr-lg-40 wow fadeInDown">
                <h2 className="title">Drops</h2>
                <p>
                Drops are liquid pharmaceutical formulations designed for precise administration, commonly used for eyes, ears, nose, or oral consumption. They contain active ingredients dissolved or suspended in a suitable liquid base, ensuring targeted and effective delivery. Eye drops treat infections, dryness, and allergies, while ear drops address infections and wax buildup. Nasal drops help relieve congestion, and oral drops provide accurate dosing for infants and patients with swallowing difficulties. Drops offer rapid absorption, localized action, and ease of use, making them essential in medical treatments. Proper storage and administration are crucial to maintaining their efficacy and preventing contamination.


                </p>
                <div className="row gap-3 px-3">
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Herbal
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Nasal
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Ear
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Eye{" "}
                  </p>
                <p className="bg-[#7EA63F] text-white p-2 rounded-xl mb-4">Note: We offer customized solutions tailored to specific requirements</p>
                </div>
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/home-service/sv-4.jpg"
                    alt="service Image"
                    className="h-96"
                  />
                </div>
                <h3>Benefits of Drops</h3>
                
                <ul className="check-style-one mb-60">
                  <li>
                    <i className="far fa-check" />
                    Dry eyes 
Lubricate: Artificial tears replace natural moisture in the eyes, relieving burning and itching 
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Wash out irritants: Artificial tears can remove dust, hair, and other irritants
Redness
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Treat inflammation: Some eye drops can treat inflammation
Allergies
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Alleviate burning and stinging: Anti-allergic drops can help with the burning and stinging that is common with allergies
                  </li>
                </ul>


                <h3>Manufacturing Process</h3>
                <div className="row">

                  <div className="col-md-6">
                    <div className="block-image wow fadeInLeft">
                      <img
                        src="assets/images/home-service/drop-sv-1.png"
                        alt="service Image"
                        className="h-48"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="block-image wow fadeInRight">
                      <img
                        src="assets/images/home-service/drop-sv-2.png"
                        alt="service Image"
                      />
                    </div>
                  </div>
                </div>
                <p>
                The Manufacturing Process of drops involves selecting and purifying ingredients, dissolving or suspending them in a sterile liquid, filtration, sterilization, quality testing, filling in vials, sealing, labeling, and packaging for safe use.
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
          <div className="col-xl-4 col-lg-5">
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
                <div className="sidebar-widget widget-banner mb-30 wow fadeInUp">
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
