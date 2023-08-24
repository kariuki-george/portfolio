import { NextPage } from "next";
import About from "../components/about";
import Contacts from "../components/Contacts";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import HeroLayout from "../components/HeroLayout";
import Black from "../layouts/Black";
import White from "../layouts/White";

const Home: NextPage = () => {
  return (
    <div className="relative w-full z-0 flex flex-col">
      <Header />

      <Black>
        <Hero />
      </Black>
      <HeroLayout />
      <White>
        <About />
      </White>
      {/* <TalkLayout /> */}
      <Black>
        <Projects />
        <Contacts />
        <Footer />
      </Black>
    </div>
  );
};

export default Home;
