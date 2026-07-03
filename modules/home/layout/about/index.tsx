import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function About(){
    return(
        <main className="bg-white p-12 flex flex-col gap-4">
            <div className="bg-neutral-200 py-2 px-6 w-fit rounded-full">About Us</div>
            <div className="w-4xl">
                <h1 className="text-4xl">SwiftForm is a modern business formation and growth partner built for founders who value speed, clarity, and compliance.</h1>
            </div>

            <div className="grid grid-cols-4 gap-4 py-12">
                <div className="bg-[#ffc6c7] rounded-2xl p-6 h-38 flex flex-col items-start justify-between">
                    <h1 className="text-6xl">5K+</h1>
                    <span className="text-lg">Businesses Formed</span>
                </div>
                <div className="bg-[#e2edea] rounded-2xl p-6 h-38 flex flex-col items-start justify-between">
                    <h1 className="text-6xl">48hrs</h1>
                    <span className="text-lg">Average Setup Time</span>
                </div>
                <div className="bg-[#e8d1ff] rounded-2xl p-6 h-64 flex flex-col items-start justify-between">
                    <div>
                        <h1 className="text-6xl">99%</h1>
                        <span className="text-lg">Client Satisfaction Rate</span>
                    </div>
                    <Link href="" className="bg-black text-white flex items-center hover:scale-110 duration-300 justify-center gap-4 rounded-full pl-6 pr-2 py-2">Talk to me<div className="p-2 bg-[#9affa1] rounded-full"><FaArrowRight size={18} className="text-black" /></div></Link>
                </div>
                <div className="bg-[#ffedd4] rounded-2xl p-6 h-38 flex flex-col items-start justify-between">
                    <h1 className="text-6xl">5K+</h1>
                    <span className="text-lg">Businesses Formed</span>
                </div>
            </div>
        </main>
    );
}