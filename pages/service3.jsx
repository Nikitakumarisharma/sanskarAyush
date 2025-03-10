import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layouts/Layout";
import { BsBuildingFillGear } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";


import Link from "next/link";
const ServiceDetails = () => {
  return ( 
    <Layout>
      {/* <PageBanner pageName={"Service Details"} /> */}
      {/*====== Start Service Details section ======*/}
      <section className="service-details-section pt-100">
        <div className="container">
          <div className="row">

          <div className="col-xl-4 col-lg-5">
              {/*====== Sidebar Widget Area ======*/}
              <div className="sidebar-widget-area">
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
                    <h3 className="title">Looking For best Third Party manufacturer
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

            <div className="col-xl-8 col-lg-7">
              {/*====== Service Details Wrapper ======*/}
              <div className="service-info-wrapper pr-lg-40 wow fadeInDown">
                <h2 className="title">Paste</h2>
                <p>
                Paste-based ayurvedic formulations, such as Avaleha, Chyawanprash, and therapeutic resins, are potent immunity boosters that promote overall health, energy, and wellness. These traditional herbal blends are rich in natural ingredients like medicinal herbs, honey, ghee, and minerals, ensuring optimal absorption and effectiveness. Chyawanprash, a well-known formulation, strengthens immunity, enhances digestion, and revitalizes the body. Avaleha includes various herbal pastes used for respiratory, digestive, and rejuvenating benefits. Therapeutic resins provide healing properties for long-term well-being. These ayurvedic pastes are scientifically backed and trusted for their holistic approach to maintaining vitality, boosting immunity, and improving overall health naturally.
                </p>
                <p className="bg-[#7EA63F] text-white p-2 rounded-xl px-4">Note: We offer customized solutions tailored to specific requirements</p>
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/home-service/sv-3.jpg"
                    alt="Service Image"
                    className="h-96"
                  />
                </div>
                <h3>Benefit of Paste</h3>
                <p>
                Ayurvedic pastes like Chyawanprash and Avaleha boost immunity, enhance energy, improve digestion, support respiratory health, promote rejuvenation, and provide essential nutrients, ensuring overall wellness and vitality through natural and holistic healing.
                </p>
                <ul className="check-style-one mb-60">
                  <li>
                    <i className="far fa-check" />
                    14+ year of  Experience
                  </li>
                  <li>
                    <i className="far fa-check" />
                    NABL-certified lab
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Timely Delivery
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Cost-Effective Solutions
                  </li>
                </ul>


                <h3>Manufecturing Process</h3>
                <div className="row">

                  <div className="col-md-6">
                    <div className="block-image wow fadeInLeft">
                      <img
                        src="assets/images/home-service/paste-sv-1.png"
                        alt="Service Image"
                        className="h-48"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="block-image wow fadeInRight">
                      <img
                        src="assets/images/home-service/paste-sv-2.png"
                        alt="Service Image"
                        className="h-48"
                      />
                    </div>
                  </div>
                </div>
                <p>
                Liquid orals dissolve The manufacturing process of Ayurvedic pastes involves selecting herbal ingredients, mixing with ghee, honey, or oils, heating, homogenizing, cooling, filtering, quality testing, and packaging, ensuring potency, purity, and therapeutic benefits for holistic wellness.
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
                          <h6>Manufecturing Products</h6>
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
                
                <h3>Additionally we offer testing</h3>
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
                  <li> ● FG (Finished Goods) Testing Services
                  </li>
                </ul>
                <br />
                <p>
                Beyond ayurvedic and pharmaceutical services, we also specialize in food and nutraceuticals, offering nutritional profiling, vitamins and minerals analysis, and cosmetics testing in our NABL-certified lab for superior quality and accuracy.
                </p>
              </div>
              
            </div>
            
          </div>
        </div>
      </section>
      {/*====== End Service Details section ======*/}
      
    </Layout>
  );
};
export default ServiceDetails;
