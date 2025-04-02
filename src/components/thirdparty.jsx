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
            
          
          </div>
          
        </div>
        


        
      </section>
  );
};

export default ThirdPartyManufacturing;
