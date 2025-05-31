import React from 'react'

const StatusFeature = () => {
  return (
    <main className="bg-white font-[Inter] max-w-7xl mx-auto px-6 py-16 sm:py-20 md:py-24 flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-20">
      <section className="grid grid-cols-2 grid-rows-2 gap-8 md:gap-10 max-w-md">
        <div className="bg-white shadow-lg p-8 flex flex-col items-center justify-center text-center rounded-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
          <p className="text-[32px] font-extrabold text-[#F59E0B] leading-none">80K+</p>
          <p className="text-[12px] text-gray-600 mt-2">We have more than students</p>
        </div>
        <div className="bg-white shadow-lg p-8 flex flex-col items-center justify-center text-center rounded-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
          <p className="text-[32px] font-extrabold text-[#F97316] leading-none">150+</p>
          <p className="text-[10px] text-gray-600 mt-1">Free online tutorials videos available</p>
        </div>
        <div className="bg-white shadow-lg p-8 flex flex-col items-center justify-center text-center rounded-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
          <p className="text-[32px] font-extrabold text-[#EF4444] leading-none">90+</p>
          <p className="text-[10px] text-gray-600 mt-1">Daily updated blog post maintain</p>
        </div>
        <div className="bg-white shadow-lg p-8 flex flex-col items-center justify-center text-center rounded-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
          <p className="text-[32px] font-extrabold text-[#C084FC] leading-none">&amp; 3M</p>
          <p className="text-[10px] text-gray-600 mt-1">Job posted everydays with qualification</p>
        </div>
      </section>
      <section className="max-w-xl">
        <p className="text-[10px] font-semibold text-[#FBBF24] uppercase mb-2">Core Features</p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-snug mb-4">
          Smart Jackpots<br />
          that you may love this<br />
          anytime &amp; anywhere
        </h2>
        <p className="text-[10px] text-[#0F172A] mb-6 leading-relaxed">
          Get your tests delivered at let home collect sample<br />
          from the victory of the managments that supplies<br />
          best design system guidelines ever. Get your tests<br />
          delivered at let home collect sample.
        </p>
        <button className="text-[10px] font-semibold text-[#FBBF24] bg-[#FEF3C7] px-3 py-1 rounded-md">
          Explore details
        </button>
      </section>
    </main>
  )
}

export default StatusFeature
