import type { NextPage } from "next";
import { Feature } from "../components/Feature";
import { Hero } from "../components/Hero/Hero";
import { Navbar } from "../components/Header/Navbar";
import Image from "next/image";
import blob from "../../public/images/blob.svg";
import { Highlight } from "../components/Highlight/Highlight";

const Home: NextPage = () => {
  return (
    <div className="text-gray-600">
      <main>
        <div className="relative overflow-hidden bg-teal-900">
          <Navbar />
          <Hero />

          <div className="absolute z-0 w-min -bottom-1/2 lg:-top-1/4 -left-40 lg:left-2/4">
            <Image
              src={blob}
              layout="fixed"
              alt="a blob"
              className="w-full opacity-70"
            />
          </div>
        </div>
        <Highlight />
        <Feature />
      </main>
    </div>
  );
};

export default Home;
