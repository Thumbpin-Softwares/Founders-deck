import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function About(){
    return(
        <main className="bg-white px-6 py-10 md:p-12 flex flex-col gap-4">
            <div className="bg-[#e5eded] py-2 px-6 w-fit rounded-full text-sm sm:text-base">About Us</div>
            <div className="w-full md:w-4xl">
                <h1 className="text-2xl sm:text-3xl md:text-4xl">SwiftForm is a modern business formation and growth partner built for founders who value speed, clarity, and compliance.</h1>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 py-8 md:py-12">
                <div className="bg-[#ffc6c7] rounded-2xl p-4 sm:p-6 h-32 sm:h-38 flex flex-col items-start justify-between">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl">5K+</h1>
                    <span className="text-xs sm:text-base md:text-lg">Businesses Formed</span>
                </div>
                <div className="bg-[#e2edea] rounded-2xl p-4 sm:p-6 h-32 sm:h-38 flex flex-col items-start justify-between">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl">48hrs</h1>
                    <span className="text-xs sm:text-base md:text-lg">Average Setup Time</span>
                </div>
                <div className="bg-[#e8d1ff] rounded-2xl p-4 sm:p-6 h-32 sm:h-38 md:h-64 flex flex-col items-start justify-between">
                    <div>
                        <h1 className="text-3xl sm:text-5xl md:text-6xl">99%</h1>
                        <span className="text-xs sm:text-base md:text-lg">Client Satisfaction Rate</span>
                    </div>
                    <Link href="" className="hidden md:flex bg-black text-white items-center hover:scale-110 duration-300 justify-center gap-4 rounded-full pl-6 pr-2 py-2 text-sm sm:text-base">Talk to me<div className="p-2 bg-[#9affa1] rounded-full"><FaArrowRight size={18} className="text-black" /></div></Link>
                </div>
                <div className="bg-[#ffedd4] rounded-2xl p-4 sm:p-6 h-32 sm:h-38 flex flex-col items-start justify-between">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl">5K+</h1>
                    <span className="text-xs sm:text-base md:text-lg">Businesses Formed</span>
                </div>
            </div>
        </main>
    );
}