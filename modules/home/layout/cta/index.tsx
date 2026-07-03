"use client";

import { useRef } from "react";
import { FaCircleCheck, FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

type CtaData = {
  tag: string;
  heading: string;
  description: string;
  bullets: string[];
  image: string;
};

const sections: CtaData[] = [
  {
    tag: "Built For Speed",
    heading: "We bring structure, visibility, and control",
    description:
      "We bring structure, visibility, and control to your business operations so nothing falls through the cracks.",
    bullets: [
      "End-to-End Process Visibility — Clear timelines and status tracking.",
      "Accurate filings and paperwork handled with zero guesswork.",
      "Your business isn’t passed around — it’s owned and managed.",
    ],
    image: "/cta/cta1.webp",
  },
  {
    tag: "Built For Speed",
    heading: "Why Smart Founders Choose SwiftForm",
    description:
      "Built for speed, structured for growth, and trusted for SwiftForm removes the friction from business formation so you can.",
    bullets: [
      "LLC & LTD setups executed correctly the first time.",
      "Streamlined workflows that move your business forward fast.",
      "Real experts guiding you at every critical step.",
    ],
    image: "/cta/cta2.webp",
  },
  {
    tag: "Built For Speed",
    heading: "We grow with you, from day one to IPO",
    description:
      "As your business scales, our systems and support scale with it — no re-platforming, no surprises.",
    bullets: [
      "Flexible structures that support fundraising and expansion.",
      "Dedicated growth advisor for every stage of the journey.",
      "One platform that adapts as your needs change.",
    ],
    image: "/cta/cta3.webp",
  },
];

function CtaSection({ data, opacity }: { data: CtaData; opacity: MotionValue<number> }) {
  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 flex flex-row justify-between items-center gap-6 px-12 bg-white"
    >
      <div className="flex flex-col gap-4 max-w-2xl">
        <div className="text-black bg-[#e5eded] px-6 py-2 rounded-full flex w-fit">
          {data.tag}
        </div>
        <h1 className="text-6xl">{data.heading}</h1>
        <p className="text-xl">{data.description}</p>
        <ul className="py-4">
          {data.bullets.map((bullet, i) => (
            <li key={i} className="flex text-lg items-center gap-2">
              <FaCircleCheck />
              {bullet}
            </li>
          ))}
        </ul>
        <Link
          href=""
          className="w-fit flex items-center justify-center gap-2 hover:scale-110 duration-300 pl-6 py-2 pr-2 rounded-full text-lg bg-[#97ff9f]"
        >
          Talk To Me
          <div className="text-white bg-black p-2 rounded-full">
            <FaArrowRight />
          </div>
        </Link>
      </div>
      <div>
        <Image
          className="rounded-2xl"
          alt={data.heading}
          width={800}
          height={800}
          src={data.image}
        />
      </div>
    </motion.div>
  );
}

const SECTION_COUNT = sections.length;

export default function Cta() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const step = 1 / SECTION_COUNT;
  const fade = 0.05;

  const opacity0 = useTransform(
    scrollYProgress,
    [0, step - fade, step],
    [1, 1, 0]
  );
  const opacity1 = useTransform(
    scrollYProgress,
    [step, step + fade, 2 * step - fade, 2 * step],
    [0, 1, 1, 0]
  );
  const opacity2 = useTransform(
    scrollYProgress,
    [2 * step, 2 * step + fade, 3 * step],
    [0, 1, 1]
  );

  const opacities = [opacity0, opacity1, opacity2];

  return (
    <main ref={containerRef} className="bg-white relative" style={{ height: `${SECTION_COUNT * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {sections.map((data, i) => (
          <CtaSection key={i} data={data} opacity={opacities[i]} />
        ))}
      </div>
    </main>
  );
}
