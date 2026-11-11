import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { Logo } from "@/components/Logo";
import { Loyalty } from "@/components/Loyalty";
import { Visit } from "@/components/Visit";
import { Wheel } from "@/components/Wheel";

export default function Home() {
  return (
    <>
      <Header logo={<Logo className="h-9 lg:h-11" />} />
      <main id="main">
        <Hero />
        <Highlights />
        <Gallery />
        <Loyalty logo={<Logo className="h-8 sm:h-11" />} />
        <Wheel />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
