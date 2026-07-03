import Hero from "@/modules/home/layout/hero";
import About from "@/modules/home/layout/about";

export default function Home(){
  return(
    <main>
      <div>
        <Hero />
      </div>
      <div>
        <About />
      </div>
    </main>
  );
}