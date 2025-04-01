import React from "react";

const BenefitsCards = () => {
  const benefits = [
    {
      title: "Cost Savings",
      description:
        "Third party manufacturing can be a cost-effective option for your company, as they do not have to invest in infrastructure, equipment, and personnel necessary for in-house manufacturing.",
    },
    {
      title: "Scalability",
      description:
        "We have the capacity to handle large-scale production runs, which can be beneficial for your company that experiences fluctuations in demand.",
    },
    {
      title: "Access to Specialized Expertise",
      description:
        "We have specialized expertise in a particular type of manufacturing, which can be beneficial for your company that needs to produce a specific type of product.",
    },
    {
      title: "Flexibility",
      description:
        "Third party manufacturing allows your company to outsource non-core activities and focus on their core competencies.",
    },
    {
      title: "Quality Control",
      description:
        "We have strict quality control processes in place, which can ensure that the products produced meet the required quality standards.",
    },
    {
      title: "Faster time to market",
      description:
        "We can help your company bring their products to market faster, as they have the experience and resources to handle the manufacturing process efficiently.",
    },
    {
      title: "Risk Management",
      description:
        "By outsourcing production, you can reduce the risks associated with manufacturing, such as supply chain disruptions, and regulatory compliance.",
    },
    {
      title: "Focus on core competencies",
      description:
        "Third party manufacturing allows you to focus on their core competencies rather than worrying about the manufacturing process, which can help them to grow their business faster.",
    },
  ];

  return (
    <div className="container py-5">
      <h3 className="text-center  mb-5 fw-bold">
        Benefits of Third Party Manufacturing
      </h3>

      <div className="row g-4">
        {benefits.map((item, index) => (
          <div className="col-12 col-sm-6 col-lg-3 pb-5" key={index}>
            <div className="card h-100 shadow-md border-0">
              <div className="card-body">
                <h5 className="card-title  fw-semibold">
                  {index + 1}. {item.title}
                </h5>
                <p className="card-text text-muted small">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsCards;
