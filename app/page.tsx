import { ScrollArea } from "@/components/ui/scroll-area";
import About from "../components/About";
import BackgroundDoodles from "../components/BackgroundDoodles";
import Contacts from "../components/Contacts";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";
import ParallaxContainer from "../components/ParallaxContainer";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <ScrollArea className="relative w-full h-screen bg-dark-900 text-white">
      <Header />

      {/* Centered container with glass effect and parallax */}
      <ParallaxContainer className=" relative z-20 w-full max-w-[900px] mx-auto backdrop-blur-md bg-dark-200/15 border-x-0 sm:border-x border-dark-700/50  overflow-hidden">
        {/* Background doodles - only visible within container */}
        <BackgroundDoodles />

        <div className="border-b border-dark-700">
          <Intro />
        </div>
        <div className="border-b border-dark-700">
          <About />
        </div>
        <div className="border-b border-dark-700">
          <Experience />
        </div>
        <div className="border-b border-dark-700">
          <Projects />
        </div>
        <div>
          <Contacts />
        </div>
      </ParallaxContainer>

      <Footer />
      
    </ScrollArea>
  );
}
