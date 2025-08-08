"use client"
//import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeatureSection";



export default function Home() {

  const router = useRouter() 
  
  const [text, setText] = useState("")

  
  const createTree = () => { 
    
    router.push(`/generate?handle=${text}`)
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="min-h-[100vh] grid grid-cols-2 bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 ">
          <div className=" flex items-center justify-center flex-col ml-[10vw] gap-4">
            <p className="text-white font-bold text-5xl leading-tight transition duration-300 hover:scale-102 hover:text-orange-400">
              Share your story and connect fans to your world with one powerful,
              shareable link.
            </p>
            <p className="text-md text-slate-300">
              Transform your online presence with one link, connecting
              Instagram, TikTok, X, and YouTube to share your art, ventures, and
              products, inspiring your audience with a global creative network.
            </p>

         {/* input nd button */}
            <div className="input flex gap-5 mr-65 rounded-lg mt-3 ">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                className=" text-black px-2 py-2 bg-slate-200 focus:outline-violet-500"
                type="text"
                placeholder="Enter Your Handel"
              />
              <button
                onClick={() => createTree()}
                className="text-white font-bold bg-pink-500 rounded-3xl px-3 py-2 hover:cursor-pointer hover:bg-pink-600"
              > Get started
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col mr-[10vw]">
            <img
              src="/home.png"
              height={750}
              width={450}
              className="rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-indigo-500/50"
              alt="homepage image"
            />
          </div>
        </section>
      </main>
      <HeroSection/>
      <FeaturesSection />
      <Footer />
    </>
  );
}
