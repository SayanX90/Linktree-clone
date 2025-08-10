"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeatureSection";

export default function Home() {
  const router = useRouter();
  const [text, setText] = useState("");

  const createTree = () => {
    router.push(`/generate?handle=${text}`);
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 px-4 sm:px-8 lg:px-16 py-15 md:py-28 pt-20 sm:pt-28">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            {/* Text Content */}
            <div className="order-2 lg:order-1 w-full lg:w-1/2 text-center lg:text-left">
              <h1
                className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-snug sm:leading-tight mb-4
                transition-transform duration-300 md:hover:scale-[1.02] md:hover:text-pink-400 
                active:scale-[1.02] active:text-pink-500"
              >Share your story and connect fans to your world with one powerful, shareable link.
              </h1>

              <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 
                transition-opacity duration-300 md:hover:opacity-90 active:opacity-90"
              >Transform your online presence with one link, connecting Instagram, TikTok, Twitter, and YouTube to share your art, ventures, and products, inspiring your audience with a global creative network.
              </p>

              {/* Input & Button Inline Small Style */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mt-4">
                <input
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="px-3 py-3 text-sm w-40 sm:w-52 md:w-64 
                  bg-gray-100 text-gray-900 rounded-full 
                  focus:outline-none focus:ring-2 focus:ring-violet-500"
                  type="text"
                  placeholder="Enter Your Handle"
                />
                <button
                  onClick={createTree}
                  className="bg-pink-500 hover:bg-pink-700 active:bg-pink-700 
                  text-white font-semibold px-4 py-3 text-sm rounded-full"
                > Get started
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 w-full lg:w-1/2 flex justify-center">
              <img
                src="/home.png"
                alt="Linktree showcase"
                className="rounded-xl shadow-2xl w-70 sm:w-72 md:w-full max-w-md lg:max-w-none 
                transform transition-transform duration-300 md:hover:scale-105 md:hover:rotate-1 
                active:scale-105 active:rotate-2"
              />
            </div>
          </div>
        </section>

        <HeroSection />
        <FeaturesSection />
        <Footer />
      </main>
    </>
  );
}
