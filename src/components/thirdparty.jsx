"use client";
import { Tab } from "react-bootstrap";

const ThirdPartyManufacturing = () => {
  return (
   < section className="shop-details-section  py-5">
        <div className="container">
          <div className="product-details-wrapper">
          <div className="row">
              <div className="col-xl-12 col-lg-9">
                <div className="description-wrapper mt-30">
                  <Tab.Container defaultActiveKey={"descrptions"}>
                    <div className="description-tabs mb-30 wow fadeInUp">
                    <h3 className="title text-center">
                    Ayurveda Third Party Manufacturing
                  </h3>
                    </div>
                    <Tab.Content className="tab-content wow fadeInUp">
                      <Tab.Pane
                        className="tab-pane fade"
                        eventKey="descrptions"
                      >
                        <div className="content-box">
                          <p>
                          Ayurveda Third party manufacturing (TPM) is a business model in which you outsource the production of its goods to an external manufacturer. This manufacturer, known as a third-party manufacturer or contract manufacturer, is responsible for the design, development, and production of the product, as well as for meeting the quality and delivery requirements set by you
                          </p>
                          <p>
                          
The third party manufacturing model is often used by you that do not have their own manufacturing facilities or the expertise to produce their own goods. It allows you to focus on their core competencies, such as product development, marketing, and sales while outsourcing the manufacturing process to a specialized manufacturer. This can save you time and money, as they do not have to invest in expensive equipment and facilities, or hire and train their own –manufacturing staff.

                          </p>
                          <p>
                          Additionally, Third Party Manufacturing can also be beneficial for small and medium-sized businesses, as it allows them to access the economies of scale and resources of larger manufacturers. It can also provide access to new technologies and capabilities that would otherwise be unavailable or cost-prohibitive for smaller you.
                          </p>
                          
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
              {/* <div className="col-xl-4 col-lg-5"> */}
                {/* <div className="sidebar-widget-area mt-30"> */}
                  {/*=== Banner Widget ===*/}
                  {/* <div className="sidebar-widget widget-banner mb-40 wow fadeInUp"> */}
                    {/* <div className="banner-content text-white">
                      <h3 className="title">Looking For Special Gardener!</h3>
                      <p>You’re in right place</p>
                      <Link legacyBehavior href="/contact">
                        <a className="main-btn secondary-btn">Contact Us</a>
                      </Link>
                      <img
                        src="assets/images/sidebar/b-w-1.png"
                        alt="Banner Image"
                      />
                    </div> */}
                  {/* </div> */}
                {/* </div> */}
              {/* </div> */}
            </div>
            <div className="row align-items-xl-center">
              <div className="col-lg-5">
                {/*=== Product Gallery ===*/}
                <img src="assets/images/gallery-sankar/gl-15.png" alt="Product"  className="rounded-2xl h-80 w-196"/>
                </div>
              <div className="col-lg-7">
              <div className="product-info mb-12 md:pl-16 wow fadeInRight">
  <h4 className="text-2xl font-bold text-green-800 mb-6">
  Document required for third party Manufacturing
  </h4>

  <ul >
    {/* Step 1 */}
    <li>
      
      <h6 className="font-semibold text-base mb-1">
       1. Manufacturing Agreement
      </h6>
      <p className="text-sm text-gray-600 pl-3">
        This document outlines the terms and conditions of the manufacturing agreement between you and us, including the scope of work, timelines, and pricing.
      </p>
    </li>

    {/* Step 2 */}
    <li>
      <h6 className="font-semibold text-base mb-1">
       2.	Product Specification Sheet
      </h6>
      <p className="text-sm text-gray-600 pl-3">
      This document outlines the specifications of the product, including the ingredients, packaging requirements, and labelling information.
      </p>
    </li>

    {/* Step 3 */}
    <li>
      
      <h6 className="font-semibold text-base mb-1">
      3.	Quality Agreement
      </h6>
      <p className="text-sm text-gray-600 pl-3">
      This document outlines the quality standards and expectations for the product and the manufacturing process, including testing protocols and quality control measures.
      </p>
    </li>
    <li>
      <h6 className="font-semibold text-base mb-1">
      4.	Certificates of Analysis (COA): 
      </h6>
      <p className="text-sm text-gray-600 pl-3">
      These documents provide detailed information about the quality and composition of the raw materials and finished products.
      </p>
    </li>
    <li>
      <h6 className="font-semibold text-base mb-1">
      5.	Good Manufacturing Practices (GMP) Certificates: 
      </h6>
      <p className="text-sm text-gray-600 pl-3">
      These documents certify that we follow the regulations and guidelines for good manufacturing practices.
      </p>
    </li>
    <li>
      <h6 className="font-semibold text-base mb-1">
      6.	Regulatory compliance documents
      </h6>
      <p className="text-sm text-gray-600 pl-3">
      These documents are required to comply with the regulations of the country and the country where the product is distributed.
      </p>
    </li>
   
  </ul>
</div>


              </div>
            </div>
            
          </div>
        </div>


        
      </section>
  );
};

export default ThirdPartyManufacturing;
