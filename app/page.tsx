import Hero from "./components/Hero";
import CaseStudy from "./components/CaseStudy";
import Optimal from "./components/Optimal";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <div className="mx-auto max-w-3xl px-6">
          <hr className="border-border" />
        </div>
        <CaseStudy />
        <div className="mx-auto max-w-3xl px-6">
          <hr className="border-border" />
        </div>
        <Optimal />
        <div className="mx-auto max-w-3xl px-6">
          <hr className="border-border" />
        </div>
        <Skills />
      </main>
      <Footer />
    </>
  );
}
