import React from "react";
import "../styles/ProductsPage.css"; 
import { useNavigate } from "react-router-dom";

import { products } from "../data/ProductsData";  // <-- data file you'll create

const ProductsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="products-container">

      <div className="products-hero">
        <p className="products-subtitle">Our Products</p>
        <h1 className="products-title">Innovative Solutions, Built for Business Excellence</h1>
        <p className="products-description">
          Explore our end-to-end digital products designed to simplify business operations, 
          enhance efficiency, and accelerate digital transformation.
        </p>
      </div>

      {/* PRODUCT GRID */}
      <div className="products-grid">
        {products.map((group, index) => (
          <div key={index} className="product-category-section">
            
            <h2 className="product-category-title">{group.category}</h2>

            <div className="product-category-grid">
              {group.items.map((item, idx) => (
                <div key={idx} className="product-card">

                  <img src={item.logo} alt={item.name} className="product-card-logo" />

                  <h3 className="product-card-title">{item.name}</h3>

                  <p className="product-card-desc">{item.desc}</p>

                  <button 
                    className="product-card-btn"
                    onClick={() => navigate(item.route)}
                  >
                    Explore Now
                  </button>

                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
