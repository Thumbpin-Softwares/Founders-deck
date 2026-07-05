"use client";
import { useRef } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

const data = [
  {
    title: "Business Formation",
    subtitle: "From Operational Chaos to Scalable Structure",
    image: "/case-study/case1.webp",
    link: "",
  },
  {
    title: "Business Formation",
    subtitle: "Strengthening Compliance and Reducing Risk",
    image: "/case-study/case2.webp",
    link: "",
  },
  {
    title: "Business Formation",
    subtitle: "Unlocking Growth Vision Strategic Reallignment",
    image: "/case-study/case3.webp",
    link: "",
  },
];

const CARD_COUNT = data.length;
const SECTION_HEIGHT_VH = 100;

export default function CaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", `-${(CARD_COUNT - 1) * 100}vw`]
  );

  return (
    <main
      ref={containerRef}
      className="bg-white relative"
      style={{ height: `${CARD_COUNT * SECTION_HEIGHT_VH}vh` }}
    >
      <div
        className="sticky top-0 flex flex-col px-12 gap-4 py-12 overflow-hidden"
        style={{ height: `${SECTION_HEIGHT_VH}vh` }}
      >
        <div className="text-black bg-[#e5eded] px-6 py-2 rounded-full flex w-fit">
          Case Study
        </div>
        <div className="flex items-end justify-between">
          <h1 className="text-6xl max-w-2xl">
            Measurable Wins for Growing Businesses
          </h1>
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

        <div className="flex-1 min-h-0 flex overflow-hidden">
          <motion.div className="h-full flex" style={{ x }}>
            {data.map((item, index) => (
              <div
                key={index}
                className="w-screen shrink-0 h-full flex items-center p-8"
              >
                <div className="w-full h-full flex items-center justify-between bg-[#e2edea] rounded-2xl p-4 gap-8">
                  <div className="relative h-full aspect-square shrink-0">
                    <Image
                      src={item.image}
                      className="rounded-2xl hover:scale-110 duration-300 object-cover"
                      alt="case image"
                      fill
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center gap-6">
                    <div className="max-w-xl flex gap-4 flex-col">
                      <span className="text-lg uppercase">{item.title}</span>
                      <h1 className="text-4xl">{item.subtitle}</h1>
                    </div>
                    <Link
                      className="w-fit hover:scale-110 duration-300 gap-2 text-white rounded-full bg-black py-2 pl-6 pr-2 flex items-center justify-center"
                      href={item.link}
                    >
                      Learn More
                      <span className="rounded-full bg-[#95ff9e] p-2">
                        <FaArrowRight className="text-black" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
