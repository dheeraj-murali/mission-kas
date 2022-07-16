import type { NextPage } from "next";
import { Feature } from "../components/Feature";
import { Hero } from "../components/Hero/Hero";
import { Navbar } from "../components/Header/Navbar";
import { Highlight } from "../components/Highlight/Highlight";

const Home: NextPage = () => {
  return (
    <div className="text-gray-600">
      <main>
        <div className="relative overflow-hidden bg-fixed bg-teal-900 bg-[left_1rem_top_20rem] xl:bg-[right_-45rem_top_-10rem] bg-repeat-space bg-cover bg-hero">
          <Navbar />
          <Hero />
        </div>
        <Highlight />
        <Feature />
      </main>
    </div>
  );
};

export default Home;
