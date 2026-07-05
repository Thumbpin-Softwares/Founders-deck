import Image from "next/image";
import { FaCircleCheck, FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

export default function BuildCta() {
  return (
    <main className="p-12 flex items-center justify-between gap-6 bg-white">
      <div className="flex flex-col gap-2 w-xl">
        <div className="text-black bg-[#e5eded] px-6 py-2 rounded-full flex w-fit">
          Built For Speed
        </div>
        <h1 className="text-6xl">How SwiftForm Supports Growth</h1>
        <p className="pt-4">
          Get a clear overview of how our consulting approach helps founders and
          growing companies structure smarter and scale with confidence.
        </p>
        <ul className="space-y-2 py-6">
          <li className="flex items-center gap-2">
            <FaCircleCheck className="shrink-0" />
            Expert-led guidance that simplifies complex business.
          </li>
          <li className="flex items-center gap-2">
            <FaCircleCheck className="shrink-0" />
            Proven consulting frameworks designed to improve.
          </li>
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
          width={520}
          height={520}
          alt="person setting"
          src="/cta-cards/ctaCards.webp"
        />
      </div>
    </main>
  );
}
