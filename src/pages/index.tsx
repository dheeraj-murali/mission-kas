import type { NextPage } from "next";
import { Features } from "../components/Features";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Highlight } from "../components/Highlight";
import { Programs } from "../components/Programs";
import { Register } from "../components/Register";
import { Footer } from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home: NextPage = () => {
  return (
    <>
      <div className="text-gray-600">
        <main
          id="home"
          className="bg-fixed bg-teal-900 bg-[left_1rem_top_20rem] xl:bg-[right_-45rem_top_-10rem] bg-repeat-space bg-cover bg-hero"
        >
          <Navbar />
          <Hero />
        </main>
        <Highlight />
        <Features />
        <Programs />
        <Register />
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
