import Image from "next/image";
import { FaCircleCheck, FaHeart } from "react-icons/fa6";

export default function BentoGrid() {
  return (
    <main className="flex gap-4">
      <div className="relative">
        <Image className="rounded-xl" height={320} width={320} alt="stats" src="/bento-grid/profile.webp" />
        <div className="absolute top-4 left-4 bg-[#a0fba3] rounded-full p-2">
          <FaHeart size={18} className="text-black" />
        </div>
        <div className="absolute bottom-12 left-1/2 w-64 -translate-x-1/2">
            <div className="bg-[#e8d1ff] text-black flex rounded-xl items-center justify-center gap-2 p-4">
                <FaCircleCheck size={22} />
                <h1 className="text-black">I am Brajesh Pathak</h1>
            </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-64">
        <div className="bg-white flex flex-col justify-between items-start rounded-xl p-4 h-83">
            <span className="text-black text-2xl">Formation & Growth</span>

            <ul className="text-black">
                <li className="flex items-center gap-2"><FaCircleCheck size={18} /><span>Marketing Consultancy</span></li>
                <li className="flex items-center gap-2"><FaCircleCheck size={18} /><span>Business Scalability</span></li>
                <li className="flex items-center gap-2"><FaCircleCheck size={18} /><span>Compliance Support</span></li>
            </ul>
        </div>
        <div>
            <Image className="rounded-xl" height={320} width={320} alt="stats" src="/bento-grid/stats.svg" />
        </div>
      </div>
    </main>
  );
}
