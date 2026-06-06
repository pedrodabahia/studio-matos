import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { LoadingScreen } from "./app/components/LoadingScreen.tsx";
import { AnimatedBackground } from "./app/components/AnimatedBackground";
import { CustomCursor } from "./app/components/CustomCursor";
import { Navbar } from "./app/components/Navbar";
import { ScrollToTop } from "./app/components/ScrollToTop";
import { Hero } from "./app/components/Hero";
import { Stats } from "./app/components/Stats";
import { InteractiveSimulator } from "./app/components/InteractiveSimulator";
import { Services } from "./app/components/Services";
import { Technologies } from "./app/components/Technologies";
import { Projects } from "./app/components/Projects";
import { About } from "./app/components/About";
import { Testimonials } from "./app/components/Testimonials";
import { Process } from "./app/components/Process";
import { FAQ } from "./app/components/FAQ";
import { CTA } from "./app/components/CTA";
import { Contact } from "./app/components/Contact";
import { Footer } from "./app/components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative min-h-screen bg-black text-white">
          <CustomCursor />
          <AnimatedBackground />
          <Navbar />
          <ScrollToTop />

          <main>
            <Hero />
            <Stats />
            <InteractiveSimulator />
            <Services />
            <Technologies />
            <Projects />
            <About />
            <Testimonials />
            <Process />
            <FAQ />
            <CTA />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}