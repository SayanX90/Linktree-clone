'use client';
import React from 'react';

const profiles = [
  '/p1.jpg',
  '/p2.jpg',
  '/p3.jpg',
  '/hbo.png',
  '/money.png',
  '/p4.jpg',
  '/p6.png',
  '/ai.jpg',
];

export default function FeatureSection() {
  return (
    <section className="py-12 md:py-16 bg-amber-50 overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 md:mb-12 max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          Trusted by <span className="text-blue-600">70M+</span> monetizers
        </h2>
        <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Never update your link in bio again. Use one link to share everything you create,
          curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
        </p>
      </div>

      {/* Scrolling Image Row */}
      <div className="w-full overflow-hidden">
        <div className="flex gap-4 sm:gap-6 md:gap-8 animate-scroll whitespace-nowrap">
          {profiles.map((src, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 rounded-2xl sm:rounded-[2rem] overflow-hidden w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-black"
            >
              <img
                src={src}
                alt={`Profile ${index + 1}`}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          ))}
          {/* Duplicate for seamless looping */}
          {profiles.map((src, index) => (
            <div 
              key={`dup-${index}`} 
              className="flex-shrink-0 rounded-2xl sm:rounded-[2rem] overflow-hidden w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-black"
              aria-hidden="true"
            >
              <img
                src={src}
                alt=""
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}