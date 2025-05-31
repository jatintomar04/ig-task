import React from 'react';


const PricingPlan = () => {
  return (
    <main className="bg-white text-gray-900 max-w-6xl mx-auto px-6 sm:px-10 md:px-16 py-16 font-['Inter']">
      {/* Heading */}
      <section className="text-center max-w-xl mx-auto">
        <p className="text-[10px] font-semibold text-[#F7A54A] uppercase tracking-widest mb-2">Pricing Plan</p>
        <h1 className="text-2xl sm:text-3xl font-semibold leading-tight mb-6">Choose your pricing policy</h1>
        <div className="inline-flex border border-gray-200 rounded-md overflow-hidden text-[13px] font-semibold text-gray-700">
          <button className="bg-white px-4 py-2 border-r border-gray-200">Monthly Plan</button>
          <button className="bg-gray-100 px-4 py-2">Annual Plan</button>
        </div>
      </section>

      {/* Plans */}
      <section className="mt-8 min-h-[450px] px-20  flex flex-col sm:flex-row gap-5 max-w-5xl mx-auto">
        {/* Free Plan */}
        <article className="flex-col flex justify-center bg-white border border-gray-100 p-9  rounded-md shadow-sm">
          <h2 className="font-semibold text-sm mb-1">Free Plan</h2>
          <p className="text-xs text-gray-500 mb-6">For Small teams or office</p>
          <ul className="text-[11px] space-y-3 mb-8">
            {[
              "Ultimate access to all course, exercises and assessments",
              "Free acess for all kind of exercise corrections with downloads.",
              "Total assessment corrections with free download access system"
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#3FC1A9] mt-[3px]"><i className="fas fa-check-circle"></i></span>
                <span>{text}</span>
              </li>
            ))}
            {[
              "Unlimited download of courses on the mobile app contents",
              "Download and print courses and exercises in PDF"
            ].map((text, i) => (
              <li key={i + 3} className="flex items-start gap-2">
                <span className="text-gray-300 mt-[3px]"><i className="fas fa-times-circle"></i></span>
                <span className="text-gray-300">{text}</span>
              </li>
            ))}
          </ul>
          <button className="w-full text-[13px] font-semibold text-[#F7A54A] bg-[#FCE9D9] rounded-md py-2">Start free trial</button>
        </article>

        {/* Premium Plan */}
        <article className="flex-col flex justify-center border border-[#3FC1A9] rounded-md p-8 relative">
          <div className="absolute top-4 left-4 bg-[#F7A54A] text-white text-[9px] font-semibold uppercase rounded px-2 py-[2px] select-none">#recommended</div>
          <div className="flex justify-between items-center mb-1">
            <h2 className="font-semibold text-sm">Premium</h2>
            <p className="text-[10px] text-gray-500">Starting from</p>
          </div>
          <p className="text-xs text-gray-500 mb-2">For startup enterprise</p>
          <p className="text-[#3FC1A9] font-semibold text-sm mb-6">49.99/<span className="text-xs font-normal">mo</span></p>
          <ul className="text-[11px] space-y-3 mb-8">
            {[
              "Ultimate access to all course; exercises and assessments",
              "Free acess for all kind of exercise corrections with downloads.",
              "Total assessment corrections with free download access system",
              "Unlimited download of courses on the mobile app contents",
              "Download and print courses and exercises in PDF"
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#3FC1A9] mt-[3px]"><i className="fas fa-check-circle"></i></span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <button className="w-full text-[13px] font-semibold text-[#F7A54A] bg-[#FCE9D9] rounded-md py-2">Subscribe Now</button>
        </article>
      </section>
    </main>
  );
};

export default PricingPlan;
