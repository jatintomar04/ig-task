import React from "react";
import {
  FaStar,
  FaPlay,
  FaChevronDown,
  FaCheckCircle,
} from "react-icons/fa";

const CourceCard = () => {
  return (
    <div className="bg-white text-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="text-center mb-12">
          <p className="text-[10px] font-semibold text-[#f7b25f] uppercase tracking-widest mb-2">
            Quality Features
          </p>
          <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#0f172a]">
            Popular Designing Course
          </h2>
        </div>

        <div className="space-y-8">

          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-[0_0_20px_rgba(15,23,42,0.05)] p-6 flex flex-col sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start space-x-5 sm:flex-1">
              <div className="flex justify-center items-center w-12 h-12 rounded-full bg-[#fff3e6] shrink-0 text-[#f7b25f] text-lg">
                <FaPlay />
              </div>
              <div>
                <div className="flex items-center space-x-2 text-[12px] text-[#f7b25f] font-semibold">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  <span className="text-[#475569] font-normal">
                    (392 reviews)
                  </span>
                </div>
                <div className="text-[12px] text-[#475569] mt-1 mb-1">
                  5.0 · 2,538 students watched
                </div>
                <p className="text-[14px] font-semibold text-[#0f172a] leading-tight">
                  Professional graphic design tutorial full course with exercise file
                </p>
                <p className="text-[9px] text-[#94a3b8] mt-1 max-w-[320px]">
                  Get your tutorials delivered at let home collect sample from the victory of the managments.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-4 sm:mt-0">
              <span className="bg-[#2acfcf] text-white text-[11px] font-semibold rounded-md px-3 py-1.5">
                7 Video Classes
              </span>
              <span className="bg-[#3bd47d] text-white text-[11px] font-semibold rounded-md px-3 py-1.5">
                4 hrs
              </span>
              <span className="text-[#94a3b8] text-xs ml-1">
                <FaChevronDown />
              </span>
            </div>
          </div>

          {/* Card 2 (with checklist) */}
          <div className="bg-white rounded-lg shadow-[0_0_20px_rgba(15,23,42,0.05)] p-6 flex flex-col sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start space-x-5 sm:flex-1">
              <div className="flex justify-center items-center w-12 h-12 rounded-full bg-[#fff3e6] shrink-0 text-[#f7b25f] text-lg">
                <FaPlay />
              </div>
              <div>
                <div className="flex items-center space-x-2 text-[12px] text-[#f7b25f] font-semibold">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  <span className="text-[#475569] font-normal">
                    (392 reviews)
                  </span>
                </div>
                <div className="text-[12px] text-[#475569] mt-1 mb-1">
                  5.0 · 2,538 students watched
                </div>
                <p className="text-[14px] font-semibold text-[#0f172a] leading-tight">
                  Become ultimate photoshop expert within 30 days
                </p>
                <p className="text-[9px] text-[#94a3b8] mt-1 max-w-[320px]">
                  Get your tutorials delivered at let home collect sample from the victory of the managments.
                </p>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-[10px] text-[#64748b]">
                  <div className="flex items-center space-x-2">
                    <FaCheckCircle className="text-[#94a3b8]" />
                    <span>How to reduce file pixel dimensions without losing quality</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaCheckCircle className="text-[#94a3b8]" />
                    <span>Create vector file from rasterized layer styles</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaCheckCircle className="text-[#94a3b8]" />
                    <span>How to make logo pixel perfect with different extensions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaCheckCircle className="text-[#94a3b8]" />
                    <span>Make color gradient with Photoshop built-in tools</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-4 sm:mt-0">
              <span className="bg-[#2acfcf] text-white text-[11px] font-semibold rounded-md px-3 py-1.5">
                7 Video Classes
              </span>
              <span className="bg-[#3bd47d] text-white text-[11px] font-semibold rounded-md px-3 py-1.5">
                4 hrs
              </span>
              <span className="text-[#94a3b8] text-xs ml-1">
                <FaChevronDown />
              </span>
            </div>
          </div>

          {/* You can duplicate the above cards and replace the content for more cards */}
          <div className="bg-white rounded-lg shadow-[0_0_20px_rgba(15,23,42,0.05)] p-6 flex flex-col sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start space-x-5 sm:flex-1">
              <div className="flex justify-center items-center w-12 h-12 rounded-full bg-[#fff3e6] shrink-0 text-[#f7b25f] text-lg">
                <FaPlay />
              </div>
              <div>
                <div className="flex items-center space-x-2 text-[12px] text-[#f7b25f] font-semibold">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  <span className="text-[#475569] font-normal">
                    (392 reviews)
                  </span>
                </div>
                <div className="text-[12px] text-[#475569] mt-1 mb-1">
                  5.0 · 2,538 students watched
                </div>
                <p className="text-[14px] font-semibold text-[#0f172a] leading-tight">
                  Professional graphic design tutorial full course with exercise file
                </p>
                <p className="text-[9px] text-[#94a3b8] mt-1 max-w-[320px]">
                  Get your tutorials delivered at let home collect sample from the victory of the managments.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-4 sm:mt-0">
              <span className="bg-[#2acfcf] text-white text-[11px] font-semibold rounded-md px-3 py-1.5">
                7 Video Classes
              </span>
              <span className="bg-[#3bd47d] text-white text-[11px] font-semibold rounded-md px-3 py-1.5">
                4 hrs
              </span>
              <span className="text-[#94a3b8] text-xs ml-1">
                <FaChevronDown />
              </span>
            </div>
          </div>
          {/* 4th */}
          <div className="bg-white rounded-lg shadow-[0_0_20px_rgba(15,23,42,0.05)] p-6 flex flex-col sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start space-x-5 sm:flex-1">
              <div className="flex justify-center items-center w-12 h-12 rounded-full bg-[#fff3e6] shrink-0 text-[#f7b25f] text-lg">
                <FaPlay />
              </div>
              <div>
                <div className="flex items-center space-x-2 text-[12px] text-[#f7b25f] font-semibold">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  <span className="text-[#475569] font-normal">
                    (392 reviews)
                  </span>
                </div>
                <div className="text-[12px] text-[#475569] mt-1 mb-1">
                  5.0 · 2,538 students watched
                </div>
                <p className="text-[14px] font-semibold text-[#0f172a] leading-tight">
                  Professional graphic design tutorial full course with exercise file
                </p>
                <p className="text-[9px] text-[#94a3b8] mt-1 max-w-[320px]">
                  Get your tutorials delivered at let home collect sample from the victory of the managments.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-4 sm:mt-0">
              <span className="bg-[#2acfcf] text-white text-[11px] font-semibold rounded-md px-3 py-1.5">
                7 Video Classes
              </span>
              <span className="bg-[#3bd47d] text-white text-[11px] font-semibold rounded-md px-3 py-1.5">
                4 hrs
              </span>
              <span className="text-[#94a3b8] text-xs ml-1">
                <FaChevronDown />
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CourceCard;
