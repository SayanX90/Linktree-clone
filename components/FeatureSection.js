'use client';
import React from 'react';

const profiles = [
  ' /p1.jpg',
  ' /p2.jpg',
  ' /p3.jpg',
  ' /hbo.png',
  ' /money.png',
  ' /p4.jpg',
  ' /p6.png',
  ' /ai.jpg',
 
  
];

export default function FeatureSection() {
  return (
    <section className="py-16 bg-amber-50 overflow-hidden">
      <div className="text-center items-center mb-10">
        <h2 className=" text-black text-3xl md:text-4xl font-bold">
          Trusted by <span className="text-blue-600">70M+</span> monetizers
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Never update your link in bio again. Use one link to share everything you create,
          curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
        </p>
      </div>

      {/* Scrolling Image Row */}
      <div className="w-full overflow-hidden">
        <div className="flex gap-6 animate-scroll whitespace-nowrap">
          {profiles.map((src, index) => (
            <div key={index} className="flex-shrink-0 rounded-[2rem] overflow-hidden w-48 h-48 bg-black">
              <img
                src={src}
                alt={`Profile ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}