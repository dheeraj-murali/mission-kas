import type { NextPage } from "next";
import { Feature } from "../components/Feature";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="text-gray-600">
      <main>
        <Navbar />
        <Hero />
        <Feature />
      </main>
    </div>
  );
};

export default Home;
