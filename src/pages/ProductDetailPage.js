import React from "react";
import { useParams } from "react-router-dom";
import ProductSidebar from "../components/ProductSidebar";
import { products } from "../data/ProductsData";

const ProductDetailPage = () => {
  const { slug } = useParams();
  const data = products[slug];

  if (!data) return <h2>Product Not Found</h2>;

  return (
    <div className="product-detail-container">
      <ProductSidebar active={data.title} />

      <div className="product-detail-content">
        <h1>{data.title}</h1>

        <img src={data.heroImg} alt={data.title} className="product-hero-img" />

        {data.sections.map((section, i) => (
          <div key={i} className="product-section">
            <h2>{section.heading}</h2>
            <p>{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailPage;
