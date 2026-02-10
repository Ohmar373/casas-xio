import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Approach from "@/components/Approach";

export default function Home() {
  return (
    <div className="bg-cream">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Approach />
    </div>
  );
}
