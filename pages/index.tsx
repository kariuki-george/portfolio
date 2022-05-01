import { NextPage } from "next";
import Head from "next/head";
import About from "../components/about";
import Contacts from "../components/Contacts";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer"

const Home: NextPage = () => {
  return (
    <div className="relative w-full z-0">
      <Header />
      <Hero />
      <About />
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
};

export default Home;
