import { NextPage } from "next";
import Head from "next/head";
import About from "../components/about";
import Contacts from "../components/Contacts";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import HeroLayout from "../components/HeroLayout";
import Black from "../layouts/Black";
import White from "../layouts/White";
import TalkLayout from "../components/TalkLayout";

const Home: NextPage = () => {
  return (
    <div className="relative w-full z-0">
      <Header />

      <Black>
        <Hero />
      </Black>
      <HeroLayout />
      <White>
        <About />
      </White>
      <TalkLayout />
      <Black>
        <Projects />
        <Contacts />
        <Footer />
      </Black>
    </div>
  );
};

export default Home;
