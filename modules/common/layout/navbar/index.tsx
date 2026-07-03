"use client";

import { useState } from "react";
import Link from "next/link";
import { SiShortcut } from "react-icons/si";
import { FaArrowRight, FaBars, FaXmark } from "react-icons/fa6";

const navlinks = [
  {
    title: "Home",
    link: "",
  },
  {
    title: "About",
    link: "",
  },
  {
    title: "Case Study",
    link: "",
  },
  {
    title: "Pricing",
    link: "",
  },
  {
    title: "Blogs",
    link: "",
  },
  {
    title: "Reviews",
    link: "",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative bg-black px-6 md:px-12 py-4 text-white">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center justify-center">
          <div className="text-black bg-[#9affa1] p-2 rounded-lg">
            <SiShortcut />
          </div>
          <h1 className="text-xl">SwiftForm</h1>
        </div>

        <ul className="hidden md:flex gap-6">
          {navlinks.map((item, index) => (
            <li key={index}>
              <Link className="text-[#95aaa6] hover:text-white duration-300" href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>

        <Link href="" className="hidden md:flex bg-[#112522] hover:scale-110 duration-300 pl-4 rounded-full gap-2 items-center justify-between">
            <span className="text-[#bbd7d3] text-lg">Talk To Me</span>
            <div className="bg-[#9cfda2] p-2 flex items-center rounded-full">
                <FaArrowRight className="text-black text-xl" />
            </div>
        </Link>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden text-2xl"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute left-0 top-full w-full bg-black/60 backdrop-blur-lg z-50">
          <ul className="flex flex-col gap-4 px-6 py-6">
            {navlinks.map((item, index) => (
              <li key={index}>
                <Link
                  className="text-[#95aaa6] hover:text-white duration-300"
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href=""
                onClick={() => setIsOpen(false)}
                className="bg-[#112522] hover:scale-110 duration-300 pl-4 rounded-full gap-2 flex items-center justify-between w-fit"
              >
                <span className="text-[#bbd7d3] text-lg">Talk To Me</span>
                <div className="bg-[#9cfda2] p-2 flex items-center rounded-full">
                  <FaArrowRight className="text-black text-xl" />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </main>
  );
}
