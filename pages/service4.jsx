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

            <div className="col-xl-8 col-lg-7">
              {/*====== service Details Wrapper ======*/}
              <div className="service-info-wrapper pr-lg-40 wow fadeInDown">
                <h2 className="title">Drops</h2>
                <p>
                Drops are specialized liquid formulations designed for targeted relief, ensuring quick absorption and effectiveness. Ayurvedic and pharmaceutical drops cater to various needs, including herbal, nasal, ear, and eye drops. Herbal drops provide natural healing benefits, boosting immunity and overall wellness. Nasal drops help relieve congestion, sinus issues, and allergies by clearing nasal passages. Ear drops treat infections, reduce inflammation, and improve ear hygiene. Eye drops soothe irritation, hydrate dry eyes, and enhance vision care. These formulations are crafted with precision, ensuring safe and effective relief while maintaining high-quality standards for improved health and well-being.
                </p>
                <p className="bg-[#7EA63F] text-white p-2 rounded-xl px-4">Note: We offer customized solutions tailored to specific requirements</p>
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/home-service/sv-4.jpg"
                    alt="service Image"
                    className="h-96"
                  />
                </div>
                <h3>Benefits of Drops</h3>
                <p>
                Drops offer targeted relief with fast absorption, ease of application, and precise dosing. They effectively treat nasal congestion, ear infections, eye irritation, and provide herbal healing, ensuring quick relief and improved well-being.
                </p>
                <ul className="check-style-one mb-60">
                  <li>
                    <i className="far fa-check" />
                    14+Year of  Experience
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
            
          </div>
        </div>
      </section>
      {/*====== End service Details section ======*/}
      
    </Layout>
  );
};
export default serviceDetails;
