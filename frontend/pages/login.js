import Head from "next/head";
import Layout from "../components/layout";
import { useState } from "react";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import axios from "axios";
import config from "../config/config";
import Router from "next/router";

export default function Login({ token }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [ischeck, setRemember] = useState("");

  const login = async (req, res) => {
    try {
      let result = await axios.post(
        `${config.URL}/login`,
        { username, password, ischeck },
        { withCredentials: true }
      );

      console.log("result: ", result);
      console.log("result.data:  ", result.data);
      console.log("token:  ", token);
      setStatus("login success");
    } catch (e) {
      console.log("error: ", JSON.stringify(e.response));
      setStatus(JSON.stringify(e.response).substring(0, 80) + "...");
    }
  };
  const rergisform = () =>
    Router.push({
      pathname: "/register",
    });

  const loginForm = () => (
    <div>
      <div>
        <div>
          <label
            class="block text-slate-200  text-sm font-sold mb-2 pt-4"
            for="username"
          >
            Username
          </label>

          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div>
          <label
            class="block text-slate-200 text-sm font-sold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
            placeholder="******************"
          ></input>
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      <Navbar />

      <div class=" flex justify-center mt-20">
        <div class="H-20 w-30 rounded overflow-hidden shadow-lg">
          <form class="dark:bg-gray-800 shadow-md rounded px-10 pt-15 pb-8 mb-15 ">
            <div class="mb-4">{loginForm()}</div>
            <div class="mb-6">
              <p class="text-slate-200">
                check: {ischeck}
                <br></br>
              </p>
              {status}

              <div>
                <input
                  type="checkbox"
                  name="IsRememberMe"
                  onChange={(e) => setRemember(e.target.value)}
                />
                <p class="text-slate-200">Remember me!</p>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-white  text-black-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={login}
              >
                Sign In
              </button>
              <button
                class="bg-white  text-black-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => rergisform()}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
