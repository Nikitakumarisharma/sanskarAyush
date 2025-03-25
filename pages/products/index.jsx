import React, { useState } from "react";
import Layout from "@/src/layouts/Layout";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const categories = [
    "ALL",
    "ANTIBIOTICS",
    "GYNAE PRODUCTS",
    "GASTRO & PPI RANGE",
    "ORTHO RANGE",
    "NSAID & ANALGESICS",
    "ANTI HISTAMINIC & COUGH / COLD",
    "PAEDIATRIC RANGE",
  ];

  const products = [
    { id: 1, name: "FOPTOP-CV", image: "/images/products/coming-soon.jpg", packing: "10x1x6 TAB.", category: "ANTIBIOTICS" },
    { id: 2, name: "FOPTOP-300", image: "/images/products/foptop-300.jpg", packing: "10x1x6 TAB.", category: "GYNAE PRODUCTS" },
    { id: 3, name: "FOPTOP-200", image: "/images/products/foptop-200.jpg", packing: "10x1x6 TAB.", category: "GYNAE PRODUCTS" },
    { id: 4, name: "LYVOX", image: "/images/products/lyvox.jpg", packing: "10x6 TAB", category: "ANTIBIOTICS" },
    { id: 5, name: "SOREXTIL-CV", image: "/images/products/sorextil.jpg", packing: "10x10 TAB.", category: "GASTRO & PPI RANGE" },
  ];

  const filteredProducts =
    selectedCategory === "ALL"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 productcontainer " >
        {/* Sidebar for Large Screens */}
        <div className="hidden lg:block w-72 bg-white ">
          <div className=" bg-green-600 text-white font-bold text-xl"style={{padding:"13px"}}>Categories</div>
          <nav className="mt-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-left px-5 py-3 text-sm transition-colors duration-200 ${
                  selectedCategory === category
                    ? "bg-green-500 text-white font-semibold"
                    : "hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>

        {/* Horizontal Scrollable Categories for Mobile */}
        <div className="lg:hidden w-full bg-white  overflow-x-auto">
          <div className="flex space-x-3 p-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap px-4 py-2 rounded-md text-sm transition ${
                  selectedCategory === category ? "bg-green-600 text-white" : "bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">

          <div className="overflow-auto bg-white rounded-lg">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-green-600 text-white text-sm">
                  <th className="py-3 px-4 border">Sr No.</th>
                  <th className="py-3 px-4 border">Image</th>
                  <th className="py-3 px-4 border">Name</th>
                  <th className="py-3 px-4 border">Packing</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50 text-sm text-center">
                    <td className="py-3 px-4 border">{product.id}</td>
                    <td className="py-3 px-4 border">
                      <div className="flex justify-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-20 h-20 object-cover rounded-md"
                        />
                      </div>
                    </td>
                    <td className="py-3 px-4 border font-medium">{product.name}</td>
                    <td className="py-3 px-4 border">{product.packing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
