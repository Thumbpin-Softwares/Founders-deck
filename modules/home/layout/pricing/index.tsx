"use client";
import { useState } from "react";
import Link from "next/link";
import { FaCircleCheck, FaArrowRight } from "react-icons/fa6";

const plans = [
    {
        type : "monthly",
        name : "Pro",
        description : "Best for early-stage founders",
        price : "$12",
        unit : "hrs",
        features : [
            "Comprehensive Business Structuring Guidance",
            "End-to-End Formation Support",
            "Foundational Compliance Checklist & Alerts",
            "Standard Document Preparation Templates",
            "Email-Based Advisory Support"
        ],
        payment : "",
    },
    {
        type : "monthly",
        name : "Business",
        description : "Built for growing companies",
        price : "$23",
        unit : "hrs",
        features : [
            "Everything in Pro Plan",
            "Full-Service Tax Filing & Submission Support",
            "Advanced Compliance Monitoring & Reminders",
            "Operational Efficiency Review & Recommendations",
            "Priority Email and Live Chat Support"
        ],
        payment : "",
    },
    {
        type : "annually",
        name : "Pro",
        description : "Best for early-stage founders",
        price : "$08",
        unit : "hrs",
        features : [
            "Comprehensive Business Structuring Guidance",
            "End-to-End Formation Support",
            "Foundational Compliance Checklist & Alerts",
            "Standard Document Preparation Templates",
            "Email-Based Advisory Support"
        ],
        payment : "",
    },
    {
        type : "annually",
        name : "Business",
        description : "Built for growing companies",
        price : "$16",
        unit : "hrs",
        features : [
            "Everything in Pro Plan",
            "Full-Service Tax Filing & Submission Support",
            "Advanced Compliance Monitoring & Reminders",
            "Operational Efficiency Review & Recommendations",
            "Priority Email and Live Chat Support"
        ],
        payment : "",
    },
]

export default function Pricing(){
    const [billing, setBilling] = useState<"monthly" | "annually">("monthly");

    return(
        <main className="p-12 flex flex-col items-center justify-center bg-black">
            <div className="text-[#809390] flex w-fit px-6 py-2 rounded-full bg-[#112522]">Pricing</div>
            <h1 className="text-6xl text-center w-2xl text-white py-6">Why Smart Founders Choose SwiftForm</h1>

            <div className="flex items-center gap-4 px-6 py-2 rounded-full bg-[#112522]">
                <span
                    className={`text-sm font-medium transition-colors duration-300 ${
                        billing === "monthly" ? "text-white" : "text-[#809390]"
                    }`}
                >
                    Monthly
                </span>
                <button
                    type="button"
                    role="switch"
                    aria-checked={billing === "annually"}
                    onClick={() =>
                        setBilling((prev) => (prev === "monthly" ? "annually" : "monthly"))
                    }
                    className="relative w-14 h-8 rounded-full bg-white transition-colors duration-300 shrink-0"
                >
                    <span
                        className="absolute top-1 left-1 w-6 h-6 rounded-full bg-black transition-transform duration-300 ease-out"
                        style={{
                            transform: billing === "annually" ? "translateX(24px)" : "translateX(0px)",
                        }}
                    />
                </button>
                <span
                    className={`text-sm font-medium transition-colors duration-300 ${
                        billing === "annually" ? "text-white" : "text-[#809390]"
                    }`}
                >
                    Annually
                </span>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12 w-full max-w-4xl">
                {plans
                    .filter((plan) => plan.type === billing)
                    .map((plan, index) => {
                        const highlighted = plan.name === "Business";
                        return (
                            <div
                                key={index}
                                className={`flex flex-col gap-6 p-8 rounded-3xl ${
                                    highlighted
                                        ? "bg-[#112522] text-white"
                                        : "bg-white text-black"
                                }`}
                            >
                                <div className="flex flex-col gap-2">
                                    <span className="text-lg font-medium">{plan.name}</span>
                                    <span
                                        className={highlighted ? "text-white/70" : "text-black/60"}
                                    >
                                        {plan.description}
                                    </span>
                                </div>

                                <div className="flex items-end gap-1">
                                    <span className="text-5xl">{plan.price}</span>
                                    <span
                                        className={highlighted ? "text-white/70" : "text-black/60"}
                                    >
                                        /{plan.unit}
                                    </span>
                                </div>

                                <Link
                                    href={plan.payment}
                                    className={`w-fit flex items-center justify-center gap-2 hover:scale-110 duration-300 pl-6 py-2 pr-2 rounded-full text-lg ${
                                        highlighted
                                            ? "bg-[#97ff9f] text-black"
                                            : "bg-black text-white"
                                    }`}
                                >
                                    Get Started
                                    <div
                                        className={`p-2 rounded-full ${
                                            highlighted
                                                ? "bg-black text-white"
                                                : "bg-[#97ff9f] text-black"
                                        }`}
                                    >
                                        <FaArrowRight />
                                    </div>
                                </Link>

                                <ul className="flex flex-col gap-3">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li
                                            key={featureIndex}
                                            className="flex items-start gap-2 text-sm"
                                        >
                                            <FaCircleCheck className="mt-0.5 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
            </div>
        </main>
    );
}