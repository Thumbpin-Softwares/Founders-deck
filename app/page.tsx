import Hero from "@/modules/home/layout/hero";
import About from "@/modules/home/layout/about";
import Cta from "@/modules/home/layout/cta";

export default function Home(){
  return(
    <main>
      <div>
        <Hero />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Cta />
      </div>
    </main>
  );
}