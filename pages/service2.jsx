import PageBanner from "@/src/components/PageBanner";
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
            <div className="col-xl-8 col-lg-8 col-md-12">
              {/*====== service Details Wrapper ======*/}
              <div className="service-info-wrapper pr-lg-40 wow fadeInDown">
                <h2 className="title">Cosmetic Topicals</h2>
                <p>
                Cosmetic topicals are externally applied formulations designed to enhance and maintain the appearance of skin, hair, and nails. These include creams, lotions, gels, serums, balms, and ointments, formulated with active ingredients, emollients, humectants, and preservatives. They provide hydration, nourishment, and protection against environmental damage, improving skin texture, elasticity, and tone. Common examples include moisturizers, sunscreens, anti-aging creams, acne treatments, and hair serums. Cosmetic topicals help in brightening, firming, and rejuvenating skin, while also addressing concerns like dryness, pigmentation, and fine lines. Regular use enhances overall skin health, promoting a youthful and radiant look while ensuring effective personal care.

                   
                </p>
                <div className="row gap-3 px-3">
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Creams
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Ointments
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Gels
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Balm
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Paste
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Shampoo
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Conditioner
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Lotion
                  </p>
                  <p className="bg-[#7EA63F] text-white p-2 rounded-xl mb-4">
                    Note: We offer customized solutions tailored to specific
                    requirements
                  </p>
                </div>
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/home-service/sv-2.jpg"
                    alt="service Image"
                    className="h-96"
                  />
                </div>
                <h3>Benefits of Cosmetic Topicals</h3>
               
                <ul className="check-style-one mb-60">
                  <li>
                    <i className="far fa-check" />
                    Intense Hydration: Tropical ingredients like coconut oil, shea
                  butter, and mango butter are known for their rich textures and
                  ability to provide deep hydration, making skin feel soft and
                  supple.
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Antioxidant Protection: Many tropical fruits and
                  plants are rich in antioxidants, which help protect the skin
                  from damage caused by free radicals and environmental
                  stressors.
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Benefits
                  of Cosmetics Soothing and Calming: Certain tropical extracts,
                  like aloe vera, can help soothe irritated or inflamed skin
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Anti-Aging Properties: Some tropical ingredients,
                  like certain plant extracts, have been shown to reduce the
                  appearance of wrinkles and improve skin elasticity.
                  </li>
                </ul>

                <h3>Manufacturing Process</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="block-image wow fadeInLeft">
                      <img
                        src="assets/images/home-service/cosm-sv-1.png"
                        alt="service Image"
                        className="h-52"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="block-image wow fadeInRight">
                      <img
                        src="assets/images/home-service/cosm-sv-2.png"
                        alt="service Image"
                      />
                    </div>
                  </div>
                </div>
                <p>
                  The Manufacturing Process of cosmetic topicals and ayurvedic
                  formulations involves ingredient selection, mixing, heating,
                  homogenization, cooling, pH adjustment, active ingredient
                  infusion, filtration, quality testing, filling, packaging,
                  inspection, and dispatch, ensuring safe, effective, and
                  high-quality skincare and wellness products.
                </p>
                <div className="col-md-12">
                    <div className="block-image wow fadeInRight">
                      <img
                        src="assets/images/home-service/cosm-sv-3.png"
                        alt="service Image"
                      />
                    </div>
                  </div>
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
                          <h6>
                            Testing of <br />
                            Products
                          </h6>
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
                  <li> ● Expertise in Ayurvedic Category</li>
                  <li> ● Assay</li>
                  <li> ● Cleaning Validations</li>
                  <li> ● API (Active Pharmaceutical Ingredients)</li>
                  <li> ● RM (Raw Materials)</li>
                  <li> ● Intermediates</li>
                  <li> ● FG (Finished Goods) Testing services</li>
                </ul>
                <br />
                <p>
                  Beyond Ayurvedic and pharmaceutical services, we also
                  specialize in food and nutraceuticals, offering nutritional
                  profiling, vitamins and minerals analysis, and cosmetics
                  testing in our NABL-certified lab for superior quality and
                  accuracy.
                </p>
              </div>
            </div>
            {/* right side */}
            <div className="col-xl-4 col-lg-4 col-md-12" >
              {/*====== Sidebar Widget Area ======*/}
              <div className="sidebar-widget-area position-sticky" style={{ top: "100px" }}>
                <div className="sidebar-widget widget-service-nav gray-bg mb-30 wow fadeInUp">
                  <h4 className="widget-title">Services List</h4>
                  <ul>
                    <li>
                      <Link legacyBehavior href="/service-details">
                        <a className="flex justify-between items-center">
                          Liquid Orals
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service2">
                        <a className="flex justify-between items-center">
                          Cosmetic Topicals
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service3">
                        <a className="flex justify-between items-center">
                          Paste
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service4">
                        <a className="flex justify-between items-center">
                          Drops
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service5">
                        <a className="flex justify-between items-center">
                          Solid Orals
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service6">
                        <a className="flex justify-between items-center">
                          Juices/Ras
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <LeadForm></LeadForm>
                <div className="sidebar-widget widget-banner mb-30 wow fadeInUp" style={{marginTop:"50px"}}>
                  <div className="banner-content text-white">
                    <h3 className="title">
                      Looking for the best third-party manufacturer
                    </h3>
                    <p>You're in right place</p>
                    <Link legacyBehavior href="/contact">
                      <a
                        className="main-btn secondary-btn opacity-75"
                        style={{ background: "darkgreen" }}
                      >
                        Contact Us
                      </a>
                    </Link>
                    <img
                      src="assets/images/home-service/service.png"
                      alt="Banner Image"
                      className="w-full max-w-md mx-auto"
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
