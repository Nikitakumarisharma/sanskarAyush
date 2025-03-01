import { useState } from "react";
import { LuTarget } from "react-icons/lu";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GoCheckCircle } from "react-icons/go";



const faqs = [
  {
    question: " ✅ Quality Control",
    challenges: "Ensuring consistent product quality across batches.",
    solution: "Implement rigorous quality control measures, frequent audits, and adherence to strict regulatory standards.",
  },
  {
    question: "✅ Timely Delivery",
    challenges: " Meeting delivery deadlines consistently.",
    solution: "Optimize supply chain management, maintain efficient production schedules, and establish reliable logistics partners.",
  },
  {
    question: "✅ Cost Management",
    challenges: "Controlling production costs while maintaining quality",
    solution: "Utilize cost-effective manufacturing practices, bulk purchasing of raw materials, and continuous process improvements to enhance efficiency.",
  },
  {
    question: "✅ Communication",
    challenges: "Maintaining clear and transparent communication between parties.",
    solution: "Maintaining clear and transparent communication between parties.",
  },
  {
    question: "✅ Regulatory Compliance",
    challenges: "Keeping up with changing industry regulations and standards. ",
    solution: " Continuous training, regular compliance audits, and staying informed about industry updates to ensure adherence to all regulatory requirements.",
  },
  {
    question: "✅ Customization",
    challenges: "Meeting specific client requirements and customizations. ",
    solution: "Develop flexible manufacturing processes and maintain a versatile production line capable of handling various product specifications",
  },
  {
    question: "✅ Supply Chain Disruptions",
    challenges: "Handling disruptions in the supply of raw materials.",
    solution: "Establish a robust supply chain with multiple suppliers, maintain safety stock, and develop contingency plans for potential disruptions.",
  },
  {
    question: "✅ Sustainability",
    challenges: "Implementing sustainable and eco-friendly manufacturing practices. ",
    solution: "Invest in green technologies, reduce waste, and adopt sustainable practices throughout the manufacturing process.",
  },
  {
    question: "✅ Intellectual Property Protection",
    challenges: "Safeguarding client IP and proprietary information. ",
    solution: "mplement strict confidentiality agreements, secure data handling practices, and robust IP protection protocols.",
  },
  {
    question:"✅ Customer Support",
    challenges: " Providing effective post-production customer support.  ",
    solution: "Offer dedicated customer service teams, quick response times, and efficient resolution of issues to ensure client satisfaction.",
  },
];

 const FAQSection=()=> {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4  py-5">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center"> Challenges and Their Solutions</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img 
            src="assets/images/about/faq.png" 
            alt="FAQ Illustration"
            className="lg:h-[500px] h-[300px]"          />
        </div>

        {/* Right Side - FAQ */}
          
          <div className="">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  className="w-full flex justify-between items-center py-2 text-left text-gray-700 text-lg font-bold"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span className="text-gray-500">{openIndex === index ? "−" : "+"}</span>
                </button>
                {openIndex === index && (
                  <div className="mt-2 pb-3 space-y-2">
                    <p className="text-gray-600"><strong><span className="text-green-800"><LuTarget />
                    </span>
                      Challenges:</strong> {faq.challenges}</p>
                    <p className="text-gray-600"><strong><span className="text-green-800"><HiOutlineLightBulb />
                    </span>Solution:</strong> {faq.solution}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}
export default FAQSection;
