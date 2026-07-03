import Link from "next/link";
import { SiShortcut } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa6";

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
  return (
    <main className="bg-black px-12 py-4 text-white">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center justify-center">
          <div className="text-black bg-[#9affa1] p-2 rounded-lg">
            <SiShortcut />
          </div>
          <h1 className="text-xl">SwiftForm</h1>
        </div>

        <ul className="flex gap-6">
          {navlinks.map((item, index) => (
            <li key={index}>
              <Link className="text-[#95aaa6] hover:text-white duration-300" href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>

        <Link href="" className="bg-[#112522] hover:scale-110 duration-300 pl-4 rounded-full gap-2 flex items-center justify-between">
            <span className="text-[#bbd7d3] text-lg">Talk To Me</span>
            <div className="bg-[#9cfda2] p-2 flex items-center rounded-full">
                <FaArrowRight className="text-black text-xl" />
            </div>
        </Link>
      </div>
    </main>
  );
}
