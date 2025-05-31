import React from "react";

const HowItWorks = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-[#f8fbff]">
      <div className="text-center mb-12">
        <p className="text-[10px] font-semibold text-[#d18e3f] tracking-widest uppercase mb-2">
          WHATS THE FUNCTION
        </p>
        <h2 className="text-[22px] font-semibold text-[#111827]">
          Let’s see how it works
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row  sm:justify-between sm:items-start  sm:gap-2 justify-between px-10">
        {/* Step 1 */}
        <div className="relative flex flex-col items-center sm:items-start text-center sm:text-left sm:w-1/4 ">
          <div className="relative z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center font-semibold text-[#111827] shadow">
            01
          </div>
        
          <h3 className="mt-4 font-semibold text-[14px] text-[#111827] leading-snug max-w-[160px]">
            Set disbursement Instructions
          </h3>
          <p className="mt-1 text-[11px] text-[#6b7280] max-w-[160px] leading-tight">
            Get your blood tests delivered at home collect a sample from the
            your blood tests.
          </p>
        </div>

        {/* Step 2 */}
        <div className="relative flex flex-col items-center sm:items-start text-center sm:text-left sm:w-1/4">
          <div className="relative z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center font-semibold text-[#111827] shadow">
            02
          </div>
          
          <h3 className="mt-4 font-semibold text-[14px] text-[#111827] leading-snug max-w-[160px]">
            Assembly retrieves funds from your account
          </h3>
          <p className="mt-1 text-[11px] text-[#6b7280] max-w-[160px] leading-tight">
            Get your blood tests delivered at home collect a sample from the
            your blood tests.
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative flex flex-col items-center sm:items-start text-center sm:text-left sm:w-1/4">
          <div className="relative z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center font-semibold text-[#111827] shadow">
            03
          </div>
          
          <h3 className="mt-4 font-semibold text-[14px] text-[#111827] leading-snug max-w-[160px]">
            Assembly initiates disbursement
          </h3>
          <p className="mt-1 text-[11px] text-[#6b7280] max-w-[160px] leading-tight">
            Get your blood tests delivered at home collect a sample from the
            your blood tests.
          </p>
        </div>

        {/* Step 4 */}
        <div className="relative flex flex-col items-center sm:items-start text-center sm:text-left sm:w-1/4">
          <div className="relative z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center font-semibold text-[#111827] shadow">
            04
          </div>
          <h3 className="mt-4 font-semibold text-[14px] text-[#111827] leading-snug max-w-[160px]">
            Customer receives funds payment
          </h3>
          <p className="mt-1 text-[11px] text-[#6b7280] max-w-[160px] leading-tight">
            Get your blood tests delivered at home collect a sample from the
            your blood tests.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
