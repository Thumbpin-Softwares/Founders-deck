import Hero from "@/modules/home/layout/hero";
import About from "@/modules/home/layout/about";
import Cta from "@/modules/home/layout/cta";
import CaseStudy from "@/modules/home/layout/case-study";
import Pricing from "@/modules/home/layout/pricing";
import Services from "@/modules/home/layout/services";
import BuildCta from "@/modules/home/layout/build-cta";

export default function Home() {
  return (
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
      <div>
        <CaseStudy />
      </div>
      <div>
        <Pricing />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <BuildCta />
      </div>
    </main>
  );
}
