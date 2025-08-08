"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();

  const createLink = () => {
    router.push("/generate");
  };

  return (
    <section className="bg-gradient-to-br from-indigo-200 via-purple-100 to-pink-100 text-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Text Section */}
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 hover:text-purple-600 transition-colors duration-300">
            Create your Link Page <br />
            and Share It Everywhere
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Make a beautiful link profile to connect all your social media,
            stores, or websites in one place. Perfect for creators, brands,
            and businesses.
          </p>
          <button
            onClick={createLink}
            className="mt-4 bg-purple-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-purple-700 hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Build Your Link Page
          </button>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/hero_image.png"
            alt="Link Sharing Preview"
            width={500}
            height={400}
            className="rounded-xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;