import Layout from "../components/layout";
import Navbar from "../components/navbar";
// import AuthProducts from "../components/AuthPruduct";
import Styles from "../styles/Home.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import config from "../config/config";
import Image from "next/image";
import Router from "next/router";

const URL = `${config.URL}/products`;
const Products = ({ token }) => {
  const [products, setProducts] = useState({
    list: [{ id: 1, name: "Foo", numberproduct: 20 }],
  });
  const [name, setname] = useState("");
  const [numberproduct, setnumberproduct] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let product = await axios.get(`${config.URL}/products`);
    setProducts(product.data);
  };

  const updateProducts = async (id) => {
    let product = await axios.put(`${URL}/${id}`, {
      name,
      numberproduct,
    });
    setProducts(product.data);
  };

  const deleteProducts = async (id) => {
    let product = await axios.delete(`${URL}/${id}`);
    setProducts(product.data);
  };

  const addProducts = async (name, numberproduct) => {
    let product = await axios.post(
      `${config.URL}/products`,

      { name, numberproduct }
    );
    setProducts(product.data);
  };

  const printProducts = () => {
    if (products.list && products.list.length)
      return products.list.map((item, index) => (
        <div key={index}>
          <br></br>
          <div className={Styles.image}>
            {/* <img src="https://backend.tops.co.th/media/catalog/product/8/8/8850127004908_14-03-2022.jpg" class=" object-center object-cover group-hover:opacity-75" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." /> */}
            <br></br>
            <br></br>
          </div>
          <div class="text-center">
            สินค้า: {item.name} <br></br>
            จำนวน: {item.numberproduct}
          </div>
          <br></br> <br></br>
          <div class="text-center ">
            <button
              class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-3"
              onClick={() => updateProducts(item.id)}
            >
              Update
            </button>
            <button
              class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-3"
              onClick={() => deleteProducts(item.id)}
            >
              Delete
            </button>
            <button
              class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              onClick={() => handleClickIndex()}
            >
              Place an order
            </button>
          </div>
        </div>
      ));
  };
  const handleClickIndex = () =>
    Router.push({
      pathname: "/payment",
    });

  return (
    <Layout>
      <Navbar />

      <div class="flex justify-center ... mt-10">
        <div class="H-20 w-30 rounded overflow-hidden shadow-lg">
          <div class="px-6 py-4">
            <div class="px-6 pt-4 pb-2">
              <div class="w-42 H-20 ">
                <p class="text-gray-700 text-base font-bold text-center mb-2">
                  Add Product
                </p>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="product name"
                  type="text"
                  placeholder="product name"
                  onChange={(e) => setname(e.target.value)}
                ></input>

                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="number"
                  type="text"
                  placeholder="number"
                  onChange={(e) => setnumberproduct(e.target.value)}
                ></input>
                <div class="text-center">
                  <button
                    class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-3"
                    onClick={() => addProducts(name, numberproduct)}
                  >
                    add to cart
                  </button>
                </div>
                <br></br>

                <ul>{printProducts()}</ul>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
