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
                <h2 className="title">Jucice/Ras</h2>
                <p>
                Juices/Ras are herbal and medicated health beverages formulated with natural ingredients to promote overall wellness. These Ayurvedic drinks, including Adrakh (Ginger), Amla, Aloe Vera, Karela, Triphala, Neem, Giloy, and Jamun, offer numerous health benefits such as boosting immunity, aiding digestion, detoxifying the body, and improving skin and hair health. Rich in essential nutrients, antioxidants, and medicinal properties, they support holistic well-being. With flexible customization, these juices can be tailored to specific health needs, ensuring purity and effectiveness. Prepared using traditional Ayurvedic methods, they provide a natural way to maintain health, energy, and vitality in daily life.
                </p>
                <p className="bg-[#7EA63F] text-white p-2 rounded-xl px-4">Note: We offer customized solutions tailored to specific requirements</p>
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/home-service/sv-6.jpg"
                    alt="Service Image"
                    className="h-96"
                  />
                </div>
                <h3>Benefit of Juice/Ras</h3>
                <p>
                Herbal juices boost immunity, aid digestion, detoxify the body, improve skin health, regulate blood sugar, and enhance overall wellness. Made from natural ingredients, they provide essential nutrients and promote holistic Ayurvedic healing.
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
                        src="assets/images/home-service/juice-sv-1.png"
                        alt="Service Image"
                        className="h-48"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="block-image wow fadeInRight">
                      <img
                        src="assets/images/home-service/juice-sv-2.png"
                        alt="Service Image"
                      />
                    </div>
                  </div>
                </div>
                <p>
                The manufacturing process of Ayurvedic juices involves selecting fresh herbs, extracting juice, filtering, blending, pasteurizing, quality testing, and packaging, ensuring purity, potency, and natural health benefits for overall wellness.
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
