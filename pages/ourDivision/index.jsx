import React from "react";
import Layout from "@/src/layouts/Layout";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./ClientsSection.css";

const clients = [
  {
    name: "SWADESHI",
    logo: "assets/images/clients/partner4.png",
    description:
      "Established in 1972, produces Ayurvedic products combining traditional wisdom with modern science, promoting natural wellness, and sustainable living through herbal remedies.",
  },
  {
    name: "TATA 1MG",
    logo: "assets/images/clients/partner5.png",
    description:
      "Tata 1mg is a leading Indian online healthcare platform offering medicines, lab tests, doctor consultations, and health products, ensuring accessible, affordable, and reliable healthcare services.",
  },
  {
    name: "DABUR",
    logo: "assets/images/clients/partner2.png",
    description:
      "Founded in 1884, is a leading Indian Ayurvedic and natural healthcare company offering herbal medicines, personal care, food products, and wellness solutions globally with trust.",
  },
  {
    name: "EMAMI",
    logo: "assets/images/clients/partner1.png",
    description:
      "Emami, founded in 1974, is an Indian FMCG company offering Ayurvedic and personal care products, known for brands like BoroPlus, Navratna, Fair & Handsome, and Zandu Balm.",
  },
  
  {
    name: "WHO",
    logo: "assets/images/clients/partner15.png",
    description:
      "The World Health Organization (WHO), founded in 1948, is a UN agency dedicated to global health, disease control, research, policy-making, and promoting universal healthcare access.",
  },
  {
    name: "LEEFORD",
    logo: "assets/images/clients/partner10.png",
    description:
      "Established in 2006, is a leading Indian pharmaceutical company offering over 1,800 products across healthcare, personal care, and wellness sectors, emphasizing quality and affordability.",
  },
  {
    name: "DIVISA",
    logo: "assets/images/clients/partner3.png",
    description:
      "Established in 2000, is a leading Indian Ayurvedic firm offering personal and healthcare products, blending ancient Ayurveda with modern technology for holistic wellness. ",
  },
  {
    name: "MOONFORD",
    logo: "assets/images/clients/partner9.png",
    description:
      "Established in 2022 in Haridwar, India, specializes in manufacturing pharmaceutical products, emphasizing quality healthcare solutions with a focus on innovation and affordability.",
  },
  {
    name: "MOSAIC WELLNESS",
    logo: "assets/images/clients/partner8.png",
    description:
      "founded in 2019 by Revant Bhate and Dhyanesh Shah, is an Indian health-tech company offering personalized wellness solutions through digital platforms like Man Matters, Bodywise, and Little Joys. ",
  },
  {
    name: "DR. VAIDYA'S NEW AGE AYURVED",
    logo: "assets/images/clients/partner6.png",
    description:
      "Dr. Vaidya's New Age Ayurveda is a modern Ayurvedic brand offering herbal healthcare products, combining traditional Ayurvedic wisdom with innovation for holistic wellness, preventive care, and lifestyle solutions.",
  },
  {
    name: "NATURAL CARE LIFESCIENCES",
    logo: "assets/images/clients/partner7.png",
    description:
      "Nature Care Lifesciences is a renowned herbal and nutraceutical products marketing company, supplying high-quality herbal and nutraceutical products manufactured at WHO-GMP compliant facilities.",
  },
  {
    name: "JANGLI HERBAL & FOODS",
    logo: "assets/images/clients/partner11.png",
    description:
      "Jangli Herbal & Foods Private Limited, incorporated on July 30, 2019, is an Indian company specializing in manufacturing herbal and food products, emphasizing natural ingredients and quality.",
  },
 
  {
    name: "GURU PRASADAM",
    logo: "assets/images/clients/partner12.png",
    description:
      "Guru Prasadam, established in May 2017 by Sant Shri Trilochan Darshan Das Ji, is an Indian manufacturer of Ayurvedic and herbal products, offering remedies for various health concerns.",
  },
  {
    name: "FERON HEALTH CARE ",
    logo: "assets/images/clients/partner13.png",
    description:
      "Feron Healthcare, founded in 2008, is an Indian pharmaceutical company specializing in manufacturing and marketing products in oncology, nephrology, and orthopedics across India and SAARC countries.",
  },
  {
    name: "EVOSTAN ",
    logo: "assets/images/clients/partner14.png",
    description:
      "Evostan Healthcare Private Limited, established on January 22, 2021, in Bareilly, Uttar Pradesh, specializes in manufacturing Ayurvedic products, promoting balance through pure Ayurveda.",
  },
  
  
];

const ClientsSection = () => {
  return (
    <Layout>
    <div className="container text-center my-5">
      <h3 className="mb-4">Our Divisions</h3>
      <div className="row justify-content-center">
        {clients.map((client, index) => (
          <div className="col-md-4" key={index}>
            <div className="card shadow-sm p-1 mb-4 client-card">
              <img
                src={client.logo}
                alt={client.name}
                className="card-img-top mx-auto d-block client-logo" 
              />
              <div className="card-body">
                <h3 className="card-title"style={{color:"#006738"}}>{client.name}</h3>
                <p className="card-text">{client.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  );
};

export default ClientsSection;
