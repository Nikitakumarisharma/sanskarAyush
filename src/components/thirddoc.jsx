"use client";
import { Tab } from "react-bootstrap";

const ThirdPartyManufacturing = () => {
  return (
   < section className="shop-details-section  py-5">
        <div className="container">
          <div className="product-details-wrapper">
          <div className="row align-items-xl-center">
              <div className="col-lg-5">
                {/*=== Product Gallery ===*/}
                <img src="assets/images/bg/third.png" alt="Product"  className="rounded-2xl h-110"/>
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
