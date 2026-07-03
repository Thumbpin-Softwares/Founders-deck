import NotificationStrip from "../../components/notification-strip";
import Navbar from "@/modules/common/layout/navbar";
import { FaStar, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import BentoGrid from "../../components/bento-grid";

export default function Hero() {
  return (
    <main className="bg-black text-white">
      <div>
        <NotificationStrip />
        <Navbar />
      </div>

      <div className="h-screen px-12 max-w-7xl mx-auto">
        <div className="flex gap-6 items-center justify-center h-[85vh]">
          <div className="flex flex-col gap-4 items-start justify-start">
            <div className="bg-[#112522] flex items-center gap-2 justify-center rounded-full p-2">
              <div className="p-2 bg-black rounded-full">
                <FaStar size={12} className="text-[#9cfd9e]" />
              </div>
              <h1 className="text-sm pr-4">5 Star, Rated by People</h1>
            </div>
            <h1 className="text-6xl w-xl">
              Making Business complexity Simple and actionable
            </h1>
            <p className="text-[#e2edea] text-md w-xl">
              SwiftForm delivers expert business consulting that brings
              structure to complexity, sharpens operations, and positions your
              company for sustainable growth.
            </p>
            <div className="py-8 flex items-center justify-start gap-6">
              <Link
                href=""
                className="bg-[#9affa1] hover:scale-110 duration-300 py-1 pr-1 pl-6 rounded-full gap-2 flex items-center justify-between"
              >
                <span className="text-black text-lg">Talk To Me</span>
                <div className="bg-black p-2 flex items-center rounded-full">
                  <FaArrowRight className="text-white text-xl" />
                </div>
              </Link>

              <Link
                href=""
                className="bg-[#112522] hover:scale-110 duration-300 py-2 px-6 rounded-full gap-2 flex items-center justify-between"
              >
                <span className="text-[#95aaa6] text-lg">Learn More</span>
              </Link>
            </div>

            <div>
                <h1 className="uppercase">Our Business Partners</h1>
            </div>
          </div>
          <div className="flex">
            <BentoGrid />
          </div>
        </div>
      </div>
    </main>
  );
}
