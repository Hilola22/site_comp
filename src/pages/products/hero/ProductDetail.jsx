import React, { Component } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../api";

class ProductDetail extends Component {
  state = {
    product: null,
    loading: true,
    error: null,
  };

  componentDidMount() {
    const { id } = this.props;
    api
      .get(`/products/${id}`)
      .then((res) => this.setState({ product: res.data, loading: false }))
      .catch((err) => this.setState({ error: err, loading: false }));
  }

  render() {
    const { product, loading, error } = this.state;

    if (loading) return <p className="text-center py-10">Loading...</p>;
    if (error)
      return <p className="text-center py-10 text-red-500">{error.message}</p>;

    return (
      <div className="container mx-auto mt-10 max-w-2xl bg-white shadow-lg rounded-2xl p-6">
        <div className="flex flex-col items-center text-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-48 h-48 object-cover rounded-xl shadow-md mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {product.title}
          </h2>
          <p className="text-gray-500 text-sm mb-3">{product.description}</p>
          <p className="text-lg mb-4">
            <span className="text-gray-500 line-through mr-2">
              ${product.price}
            </span>
            <span className="text-red-500 font-bold">
              $
              {(
                product.price -
                (product.price * product.discountPercentage) / 100
              ).toFixed(2)}
            </span>
            <span className="text-sm text-green-600 ml-2">
              ({product.discountPercentage}% OFF)
            </span>
          </p>
          <div className="text-left w-full space-y-2">
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <p>
              <strong>Brand:</strong> {product.brand}
            </p>
            <p>
              <strong>Stock:</strong> {product.stock}
            </p>
            <p>
              <strong>Rating:</strong> ⭐ {product.rating}
            </p>
            <p>
              <strong>Weight:</strong> {product.weight} g
            </p>
            <p>
              <strong>Minimum Order:</strong> {product.minimumOrderQuantity}
            </p>
          </div>
          <Link
            to="/products"
            className="inline-block mb-4  text-blue-500 hover:text-indigo-600"
          >
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
