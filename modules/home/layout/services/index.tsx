import {
  RiShieldFlashFill,
  RiGeminiLine,
  RiSupabaseLine,
} from "react-icons/ri";
import { MdOutlineSchema } from "react-icons/md";
import { LuTicketMinus } from "react-icons/lu";
import { PiInfinityBold } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const data = [
  {
    icon: <RiShieldFlashFill size={24} className="text-black" />,
    title: "Strategic Structuring",
    description:
      "Establish the right legal and operational foundation to support long-term stability, scalability, and compliance.",
  },
  {
    icon: <RiGeminiLine size={24} className="text-black" />,
    title: "Business Formation",
    description:
      "End-to-end guidance to launch your company correctly, efficiently, and fully aligned with regulatory requirements.",
  },
  {
    icon: <MdOutlineSchema size={24} className="text-black" />,
    title: "Tax Filing & Compliance",
    description:
      "Stay fully compliant with accurate, timely tax preparation and structured filing support.",
  },
  {
    icon: <LuTicketMinus size={24} className="text-black" />,
    title: "Growth Acceleration",
    description:
      "Unlock new revenue opportunities with data-driven strategies designed to expand your market reach and performance.",
  },
  {
    icon: <PiInfinityBold size={24} className="text-black" />,
    title: "Operational Excellence",
    description:
      "Streamline workflows, remove inefficiencies, and implement systems that improve day-to-day business performance.",
  },
  {
    icon: <RiSupabaseLine size={24} className="text-black" />,
    title: "Executive Advisory",
    description:
      "Work directly with experienced consultants to navigate critical business decisions with confidence and clarity.",
  },
];

export default function Services() {
  return (
    <main className="p-12 flex flex-col justify-center gap-6 items-center bg-[#e2edea]">
      <div className="text-black flex w-fit px-6 py-2 rounded-full bg-white">
        Services
      </div>
      <h1 className="text-black w-xl text-6xl text-center">
        Business Services That Power Growth
      </h1>
      <div className="grid grid-cols-3 gap-6 py-12">
        {data.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl">
            <div className="w-fit p-4 rounded-xl bg-[#96ffa0]">{item.icon}</div>
            <h1 className="pt-8 text-2xl">{item.title}</h1>
            <p className="py-2">{item.description}</p>
          </div>
        ))}
      </div>

      <Link
        className="w-fit hover:scale-110 duration-300 gap-2 text-white rounded-full bg-black py-2 pl-6 pr-2 flex items-center justify-center"
        href=""
      >
        Talk To Me
        <span className="rounded-full bg-[#95ff9e] p-2">
          <FaArrowRight className="text-black" />
        </span>
      </Link>
    </main>
  );
}
