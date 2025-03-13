import ProductDetailsSlider from "@/src/components/ProductDetailsSlider";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
const ProductDetails = () => {
  return (
    <Layout>
      {/*====== Start Shop Details Section ======*/}
      <section className="shop-details-section p-5 ">
        <div className="container">
          <div className="product-details-wrapper">
            <div className="row align-items-xl-center">
              <div className="col-lg-6">
                {/*=== Product Gallery ===*/}
                <img src="assets/images/gallery-sankar/gl-15.png" alt="Product"  className="rounded-2xl h-80 w-196"/>
                </div>
              <div className="col-lg-6">
                <div className="product-info mb-50 pl-lg-70 wow fadeInRight">
                  <h4 className="title">
                    Sanskar Ayush A govt. Approved Testing Laboratory
                  </h4>
                  
                  <p>
                  SANSKAR AYUSH MEDICARE PVT. LTD. was established in 2017 and was approved in 2020 for the testing of Ayurvedic, Unani, and Siddha Drugs by the Directorate of Ayurvedic & Unani services Dehradun (UK) under the Department of AYUSH, Ministry of Health and Family Welfare, Government of India. Additionally, renovation and upgradation of the laboratory to meet current regulatory requirements were completed in 2020.
                  </p>
                  
                  {/* <ul className="product-meta pb-35 mb-40">
                    <li>
                      <span>Categories</span>
                      <a href="#">Restaurant</a>
                    </li>
                    <li>
                      <span>Tags</span>
                      <a href="#">Pizza, Burger, Soup</a>
                    </li>
                  </ul> */}
                 
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-lg-9">
                <div className="description-wrapper mt-30">
                  <Tab.Container defaultActiveKey={"descrptions"}>
                    <div className="description-tabs mb-30 wow fadeInUp">
                    <h4 className="title">
                    CREDENTIALS
                  </h4>
                    </div>
                    <Tab.Content className="tab-content wow fadeInUp">
                      <Tab.Pane
                        className="tab-pane fade"
                        eventKey="descrptions"
                      >
                        <div className="content-box">
                          <p>
                          Approved Lab for the testing of Ayurvedic, Unani & Veterinary Drugs by the Directorate of Ayurvedic & Unani services Dehradun (UK) under the Department of AYUSH; Ministry of Health and Family Welfare, Government of India vide Approval No. UK.AY.DTL- 02/2010, Dated: 14/07/2010.
                          </p>
                          <p>
                          Approved for the testing of Drugs & Pharmaceuticals, Homeopathic Drugs and Cosmetics Products by Drug Controller & Licensing Authority, Directorate of Health services Dehradun (Uttarakhand) vide Approval No. 1/UA/CTL*/2021, dated: 02/09/2021.
                          </p>
                          <p>
                          ISO 9001:2008 Certified
                          NABL Accredited Laboratory since 3rd April 2022 for Chemical and Biological Testing Scope of Drugs & Pharmaceuticals, Cosmetics Products, Food Products and Veterinary Feeds.
                          </p>
                          <ul className="check-style-one">
                            <li>
                              <i className="far fa-check" />
                              GLP Compliant Lab
                            </li>
                            <li>
                              <i className="far fa-check" />
                              Globally Competent Laboratory
                            </li>
                            <li>
                              <i className="far fa-check" />
                              Supporting 50+ Products
                            </li>
                          </ul>
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

      <section className="shop-details-section p-5 bg-[#b7db7e]">
        <div className="container">
          <div className="product-details-wrapper">
            <div className="row align-items-xl-center">
              <div className="col-lg-6">
                {/*=== Product Gallery ===*/}
                <div className="product-img ">
          
          <img src="assets/images/gallery-sankar/gl-16.png" alt="Product"  className="rounded-2xl h-80 w-200"/>
      </div>              </div>
              <div className="col-lg-6">
                <div className="product-info mb-50 pl-lg-70 wow fadeInRight">
                  <h4 className="title">
                  SALIENT FEATURES
                  </h4>
                  
                  <p>
                  A team of Doctors (Ph.D., MD & BAMS), Academicians & Industrial experienced of several decades.
                  </p>
                  <p>
                  
One of the most Competitive Testing Laboratory designed in 4500 SF Area according to the required norms of Environment, Health and Safety.

                  </p>
                  <p>
                  Chemical, Instrumental and Microbiological Laboratories are well separated to avoid cross-Contaminations.

                  </p>
                  
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-lg-9">
                <div className="description-wrapper mt-30">
                  <Tab.Container defaultActiveKey={"descrptions"}>
                    <div className="description-tabs mb-30 wow fadeInUp">
                    <h4 className="title">
                    Well defined system in place to handle conflict of interest.
                  </h4>
                    </div>
                    <Tab.Content className="tab-content wow fadeInUp">
                      <Tab.Pane
                        className="tab-pane fade"
                        eventKey="descrptions"
                      >
                        <div className="content-box">
                          <p>
                          Analytical Research in Herbal (Ayurvedic, Unani, Siddha, Homeopathic & Veterinary) Drugs for active ingredients and contaminants.Testing of Pharmaceuticals, Cosmetics Products, Food products & Water according to recommended guidelines.
                          Stability Studies (Incubation & Testing).

                          </p>
                          <p>
                         Analytical Method Development and Validations. 
Contract Research in Public Private Partnership (PPP).
Training and Development for Researchers, Students and Industrial employees.

                          </p>
                          
                          <ul className="check-style-one">
                            <li>
                              <i className="far fa-check" />
                              High Performance Liquid Chromatography (HPLC)
                            </li>
                            <li>
                              <i className="far fa-check" />
                              Online Data management system through Multani LIMS.
                            </li>
                            
                          </ul>
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

      <section className="shop-details-section p-5 bg-[#b7db7e]">
        <div className="container">
          <div className="product-details-wrapper">
            
            <div className="row">
              <div className="col-xl-8 col-lg-9">
                <div className="description-wrapper mt-30">
                  <Tab.Container defaultActiveKey={"descrptions"}>
                    <div className="description-tabs mb-30 wow fadeInUp">
                    <h2>TECHNIQUES</h2>
                    <h4 className="title">
                    Atomic Absorption Spectroscopy (Fast Sequential with Graphite, Flame and HVGA)
                  </h4>
                    </div>
                    <Tab.Content className="tab-content wow fadeInUp">
                      <Tab.Pane
                        className="tab-pane fade"
                        eventKey="descrptions"
                      >
                        <div className="content-box">
                          <p>
                          Highly Sensitive and Confirmatory technique. Reproducible within acceptance criteria. Best technique for trace elements.

                          </p>
                          <p>
                          Analysis and standardization for Bhasma & Herbo- mineral, Nutraceuticals preparations.
                          Estimation of Residual Inorganic Elements in Active Pharmaceuticals Ingredients (API). Estimation of Inorganic Elements (Zn, Cr, Fe, Ca etc.) in Food Products/Nutraceuticals. 

                          </p>
                          
                          <ul className="check-style-one">
                            <li>
                              <i className="far fa-check" />
                              Referee technique in disputed cases.
                            </li>
                            <li>
                              <i className="far fa-check" />
                              Highly Sensitive and Confirmatory technique.
                            </li>
                            
                          </ul>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="sidebar-widget-area mt-30">
                  {/*=== Banner Widget ===*/}
                  <div className="sidebar-widget widget-banner mb-40 wow fadeInUp">    
                      <img src="assets/images/gallery-sankar/gl-17.png" alt="Product"  className="rounded-2xl h-80 w-200"/>

                    </div> 
                  </div>
                </div>
            </div>
          </div>
          <div className="product-details-wrapper pt-5">
            
            <div className="row">
            <div className="col-xl-4 col-lg-5">
                <div className="sidebar-widget-area mt-30">
                  {/*=== Banner Widget ===*/}
                  <div className="sidebar-widget widget-banner mb-40 wow fadeInUp">    
                      <img src="assets/images/gallery-sankar/gl-18.png" alt="Product"  className="rounded-2xl h-80 w-200"/>

                    </div> 
                  </div>
                </div>
              <div className="col-xl-8 col-lg-9">
                <div className="description-wrapper mt-30">
                  <Tab.Container defaultActiveKey={"descrptions"}>
                    <div className="description-tabs mb-30 wow fadeInUp">
                    <h2>HPLC
                    </h2>
                    <h4 className="title">
                    For Standardization and Quality Control of Drugs and Pharmaceutical product.
                  </h4>
                    </div>
                    <Tab.Content className="tab-content wow fadeInUp">
                      <Tab.Pane
                        className="tab-pane fade"
                        eventKey="descrptions"
                      >
                        <div className="content-box">
                          <p>
                          Best technique for Qualitative and Quantitative analysis.
                          Automated and FDA 21 CFR part 11 compliant software.
Detecting techniques UV/VIS, PDA, RI and Fluorescence available.

                          </p>
                          
                          
                          <ul className="check-style-one">
                            <li>
                              <i className="far fa-check" />
                              Quick & Accurate technique.

                            </li>
                            <li>
                              <i className="far fa-check" />
                              Quite sensitive and Reproducible.

                            </li>
                            
                          </ul>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
              
            </div>
          </div>
          <div className="product-details-wrapper pt-5">
            
            <div className="row">
              <div className="col-xl-8 col-lg-9">
                <div className="description-wrapper mt-30">
                  <Tab.Container defaultActiveKey={"descrptions"}>
                    <div className="description-tabs mb-30 wow fadeInUp">
                    <h3 className="title ">
                    Fourier Transform Infrared Spectroscopy (FT-IR)
                  </h3>
                    </div>
                    <Tab.Content className="tab-content wow fadeInUp">
                      <Tab.Pane
                        className="tab-pane fade"
                        eventKey="descrptions"
                      >
                        <div className="content-box">
                          <p>
                          Molecular Identification/ Finger Print profiling in Seconds & Quantitation in few seconds.
                          </p>
                       
                          
                          <ul className="check-style-one">
                            <li>
                              <i className="far fa-check" />
                              Simethicone testing & Mineral oil in water.
                            </li>
                            <li>
                              <i className="far fa-check" />
                              Characterization of Organic molecules.
                            </li>
                            
                          </ul>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="sidebar-widget-area mt-30">
                  {/*=== Banner Widget ===*/}
                  <div className="sidebar-widget widget-banner mb-40 wow fadeInUp">    
                      <img src="assets/images/gallery-sankar/gl-19.png" alt="Product"  className="rounded-2xl h-80 w-200"/>

                    </div> 
                  </div>
                </div>
            </div>
          </div>
        </div>


        
      </section>
      



      <section className="shop-details-section p-5">
        <div className="container">
          <div className="product-details-wrapper">
            <div className="row align-items-xl-center">
              <div className="col-lg-6">
                {/*=== Product Gallery ===*/}
                <img src="assets/images/gallery-sankar/gl-20.png" alt="Product"  className="rounded-2xl h-60 w-xl mb-5"/>
                </div>
              <div className="col-lg-6">
                <div className="product-info mb-50 pl-lg-70 wow fadeInRight">
                  <h4 className="title">
                  STABILITY STUDIES:
Shelf-Life Studies
(Accelerated and Real Time)
                  </h4>
                  
                  <p>
                  Incubation and testing as per preset protocols and pharmacopoeia requirements. Stability Studies as per ICH guidelines. Data compilation for Dossier submission. Online storage of data.
                  </p>
                 
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-9">
                <div className="description-wrapper mt-30">
                  <Tab.Container defaultActiveKey={"descrptions"}>
                    <div className="description-tabs mb-30 wow fadeInUp">
                    <h4 className="title">
                    Advanced Microbiology Laboratory

                  </h4>
                    </div>
                    <Tab.Content className="tab-content wow fadeInUp">
                      <Tab.Pane
                        className="tab-pane fade"
                        eventKey="descrptions"
                      >
                        <div className="content-box"> 
                          <ul className="check-style-one">
                            <li>
                              <i className="far fa-check" />
                              Man & Material movement well controlled. Separate AHU for different areas.
                            </li>
                            <li>
                              <i className="far fa-check" />
                              Dynamic pass
boxes for material movement between
different zones.

                            </li>
                            <li>
                              <i className="far fa-check" />
                              Well designed to handle all kind of the Microbiological analysis.
                            </li>
                          </ul>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                    
                  </Tab.Container>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5">
              <div className="description-wrapper mt-30">
                  <Tab.Container defaultActiveKey={"descrptions"}>
                    <div className="description-tabs mb-30 wow fadeInUp">
                    <h4 className="title">
                    Gas Chromatography


                  </h4>
                    </div>
                    <Tab.Content className="tab-content wow fadeInUp">
                      <Tab.Pane
                        className="tab-pane fade"
                        eventKey="descrptions"
                      >
                        <div className="content-box"> 
                          <ul className="check-style-one">
                            <li>
                              <i className="far fa-check" />
                              Estimation of residual solvents in drug products. Fatty acids in Oils/Fats.                            </li>
                            <li>
                              <i className="far fa-check" />
                              Quick & accurate estimation of volatile Organic ingredients.

                            </li>
                            <li>
                              <i className="far fa-check" />
                              Alcohol estimation in Asava/Arishta.                            </li>
                          </ul>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                    
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>


        
      </section>

      <section className="shop-details-section p-5 ">
        <div className="container">
          <div className="product-details-wrapper">
            <div className="row align-items-xl-center">
              <div className="col-lg-6">
                {/*=== Product Gallery ===*/}
                <img src="assets/images/gallery-sankar/gl-21.png" alt="Product"  className="rounded-2xl h-96 w-180"/>
                </div>
              <div className="col-lg-6">
                <div className="product-info mb-50 pl-lg-70 wow fadeInRight">
                  <h4 className="title">
                  SCOPE OF ANALYSIS - Chemistry
                  </h4>
                  
                  <p>
                  Identification by chemical reactions, FTIR, UV/VIS Spectrophotometer, HPTLC, HPLC, GC, AAS, HPTLC, Microbiologically, Microscope & Macroscopically. pH, Melting Point, Boiling Point, Boiling Range, Optical Rotation, Refractive Index, Disintegration Time, Bursting Strength, Water etc.
                  </p>
                  <p>
                  pH, Melting Point, Boiling Point, Boiling Range, Optical Rotation, Refractive Index, Disintegration Time, Bursting Strength, Water etc.
Dissolution Profile of Tablet/Capsules.
Loss of Drying with vacuum and without vacuum at different temperatures.
                  </p>
                  
                  {/* <ul className="product-meta pb-35 mb-40">
                    <li>
                      <span>Categories</span>
                      <a href="#">Restaurant</a>
                    </li>
                    <li>
                      <span>Tags</span>
                      <a href="#">Pizza, Burger, Soup</a>
                    </li>
                  </ul> */}
                 
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-lg-9">
                <div className="description-wrapper mt-30">
                  <Tab.Container defaultActiveKey={"descrptions"}>
                    <div className="description-tabs mb-30 wow fadeInUp">
                    
                    </div>
                    <Tab.Content className="tab-content wow fadeInUp">
                      <Tab.Pane
                        className="tab-pane fade"
                        eventKey="descrptions"
                      >
                        <div className="content-box">
                          <p>
                          Water content by Karl Fischer and by Dean and Stark apparatus.
Heavy metal analysis (Limit tests for Lead and Arsenic) and by AAS.
Soluble extractive (Water, Alcohol etc.)Sulphated ash, Total ash and Acid Insoluble ash. Alkaloids, Saponins and Flavonoids.
                          </p>
                          <p>
                          Tannins, Curcuminoids, Boswellic acids, Stevioside & Rebaudiosides etc.
Quantitative analysis of herbs and herbal preparation based on specific marker compounds by HPTLC /HPLC/GC/UV-VIS Spectrophotometric methods.
Stability Studies Method Development and Validations.

                          </p>
                          <p>
                          Standardization of Herb, Herbal Extract (Active Botanicals Ingredients) and Herbal Finished Products based on Bio-active or Non Bio-active marker compounds using HPLC/HPTLC/GC etc. Aflatoxins analysis.
Testing of Food Products for Protein, Carbo-hydrates, Fat, Vitamins, and Minerals & Energy Value.
                          </p>
                          <ul className="check-style-one">
                            <li>
                              <i className="far fa-check" />
                              Analysis of Water (Raw, Effluent & Purified).
                            </li>
                            <li>
                              <i className="far fa-check" />
                              Physicochemical Analysis.
                              </li>
                          </ul>
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
            <div className="row">
              <div className="col-xl-12 col-lg-9">
                <div className="description-wrapper mt-30">
                  <Tab.Container defaultActiveKey={"descrptions"}>
                    <div className="description-tabs mb-30 wow fadeInUp">
                    <h4 className="title">
                    Microbiology:

                  </h4>
                    </div>
                    <Tab.Content className="tab-content wow fadeInUp">
                      <Tab.Pane
                        className="tab-pane fade"
                        eventKey="descrptions"
                      >
                        <div className="content-box">
                          <p>
                          Preservative Efficacy Tests, Sterility, Bacterial Endotoxin Test (BET)
                          Rideal-Walker coefficient (RWC) in Disinfectants.
                          </p>
                          <p>
                          Environmental monitoring Swab tests and active air sampling & passive air sampling.

                          </p>
                          
                          <ul className="check-style-one">
                            <li>
                              <i className="far fa-check" />
                              Total Plate counts & Yeast and moulds.

                            </li>
                            <li>
                              <i className="far fa-check" />
                              Microbiological assay of Vitamins & Antibiotics.
                              </li>
                          </ul>
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
            <div className="row">
              <div className="col-xl-12 col-lg-9">
                <div className="description-wrapper mt-30">
                  <Tab.Container defaultActiveKey={"descrptions"}>
                    <div className="description-tabs mb-30 wow fadeInUp">
                    <h4 className="title">
                    Cultures Available & Training

                  </h4>
                    </div>
                    <Tab.Content className="tab-content wow fadeInUp">
                      <Tab.Pane
                        className="tab-pane fade"
                        eventKey="descrptions"
                      >
                        <div className="content-box">
                          <p>
                          Staphylococcus aureus, Kocuria rhizophila, Staphylococcus epidermidis, Saccharomyces cerevisiae, Bacillus subtilis, Escherichia coli, Pseudomonas aeruginosa, Escherichia coli, Bacillus pumilus, Aspergillus brasiliensis, Candida albicans, Pediococcus acidilactici, Lactobacillus leichmannii, Klebsiella pneumonia, Lactobacillus plantarum, and many more.
                          </p>
                          
                          <ul className="check-style-one">
                            <li>
                              <i className="far fa-check" />
                              Hands on High Performance Liquid Chromatograph, Hands on High Performance Thin Layer Chromatograph and Hands on High Performance Thin Layer Chromatograph.



                            </li>
                            <li>
                              <i className="far fa-check" />
                              Hands on Atomic Absorption Spectroscopy and Training in the Microbiology Laboratory

                              </li>
                            <li>
                              <i className="far fa-check" />
                              Hands on Chemical Analysis e.g., Potentiometric titrations, Limit tests, General titrations, extractions techniques. Training in Quality Assurance (Production and Quality Control).

                              </li>
                          </ul>
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
      
    </Layout>
  );
};
export default ProductDetails;
