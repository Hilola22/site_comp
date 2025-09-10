import React, { Component } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../api";

class ProductsHero extends Component {
  state = {
    products: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    api
      .get("/products")
      .then((res) =>
        this.setState({ products: res.data.products, loading: false })
      )
      .catch((err) => this.setState({ error: err, loading: false }));
  }

  render() {
    const { products, loading, error } = this.state;

    if (loading) return <p className="text-center py-10">Loading...</p>;
    if (error)
      return <p className="text-center py-10 text-red-500">{error.message}</p>;

    return (
      <div className="container mx-auto mt-10">
        <div className="text-center text-2xl font-bold mb-6 text-blue-500">
          Products
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden p-4 flex flex-col items-center text-center"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-32 h-32 object-cover rounded-xl shadow-md mb-4"
              />
              <h3 className="font-bold text-gray-800 mb-1">{product.title}</h3>
              <p className="text-gray-500 text-sm mb-2 truncate max-w-[180px]">
                {product.description}
              </p>
              <p className="text-indigo-600 font-semibold mb-1">
                ${product.price}
              </p>
              <p className="text-[12px] text-red-600 font-semibold mb-4">
                ${product.discountPercentage}% OFF
              </p>
              <Link
                to={`/products/${product.id}`}
                className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductsHero;
