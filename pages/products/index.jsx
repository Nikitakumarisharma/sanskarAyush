"use client";
import React, { useState, useEffect } from "react";
import Layout from "@/src/layouts/Layout";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/src/firebase/config";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    "ALL",
    "SWADESHI",
    "DABUR",
    "LEEFORD",
    "MOONFORD",
    "VISTRA",
    "EVOSTAN",
    "HERBOLAB",
    "NATURALCARE",
    "DIVISA",
    "EMAMI",
    "OTHERS",
  ];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const q = query(collection(db, "products"), orderBy("createdAt", "asc"));
      const querySnapshot = await getDocs(q);
      const productsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(productsData);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts =
    selectedCategory === "ALL"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Category-based styles
  const categoryStyles = {
    SWADESHI: "bg-yellow-100 text-yellow-700",
    DABUR: "bg-red-100 text-red-700",
    LEEFORD: "bg-blue-100 text-blue-700",
    MOONFORD: "bg-purple-100 text-purple-700",
    VISTRA: "bg-green-100 text-green-700",
    EVOSTAN: "bg-orange-100 text-orange-700",
    HERBOLAB: "bg-gray-100 text-gray-700",
    NATURALCARE: "bg-teal-100 text-teal-700",
    DIVISA: "bg-indigo-100 text-indigo-700",
    EMAMI: "bg-pink-100 text-pink-700",
    OTHERS: "bg-gray-200 text-gray-900",
  };

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="hidden lg:block w-72 bg-white shadow-md">
          <div className="bg-[#7EA63F] text-white font-bold text-xl p-4">Categories</div>
          <nav className="mt-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-left px-5 py-3 text-sm transition-colors duration-200 ${
                  selectedCategory === category
                    ? "bg-[#7EA63F] text-white font-semibold"
                    : "hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Scrollable Categories */}
        <div className="lg:hidden w-full bg-white overflow-x-auto">
          <div className="flex space-x-3 p-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap px-4 py-2 rounded-md text-sm transition ${
                  selectedCategory === category ? "bg-[#7EA63F] text-white" : "bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Category Header */}
          <div
            className={`text-xl font-bold p-4 mb-4 rounded-md ${
              categoryStyles[selectedCategory] || "bg-gray-200 text-gray-900"
            }`}
          >
            {selectedCategory === "ALL" ? "All Products" : selectedCategory} PRODUCTS
          </div>

          {/* Product Grid */}
          {/* Product Table */}
{/* Product Table with Scroll */}
<div className="w-full overflow-x-auto">
  <div className="max-h-[800px] overflow-y-auto">
    <table className="min-w-[200px] lg:min-w-[1200px] bg-white border border-gray-200">
      <thead className=" bg-gray-100">
        <tr className="border-b">
          <th className="px-4 py-2 border text-left">Sr No.</th>
          <th className="px-4 py-2 border text-left">Name</th>
          <th className="px-4 py-2 border text-left">Image</th>
          <th className="px-4 py-2 border text-left">Packing</th>
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <tr>
            <td colSpan="5" className="text-center py-4">Loading...</td>
          </tr>
        ) : filteredProducts.length === 0 ? (
          <tr>
            <td colSpan="5" className="text-center py-4">No products found</td>
          </tr>
        ) : (
          filteredProducts.map((product, index) => (
            <tr key={product.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 border">{index + 1}</td>
              <td className="px-4 py-2 border">{product.name}</td>
              <td className="px-4 py-2 border">
                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-md" />
              </td>
              <td className="px-4 py-2 border">{product.packing}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
</div>


        </div>
      </div>
    </Layout>
  );
};

export default Products;
