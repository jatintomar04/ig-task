import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

const LastFooter = () => {
  return (
    <main className="bg-white text-[#0B1437] font-['Inter'] max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-16">
      <section className="text-center mb-20">
        <h1 className="font-semibold text-[24px] leading-[32px] max-w-md mx-auto">
          Ready to learn design
          <br />
          with Nia Matos
        </h1>
        <button
          className="mt-6 bg-[#FFD6B2] text-[#F9A66D] text-[12px] font-semibold px-4 py-1 rounded"
          type="button"
        >
          Start Learning Today
        </button>
      </section>

      <hr className="border-t border-gray-200 mb-16" />

      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto text-sm">
  {/* About Us Column */}
  <div className="col-span-1">
    <h2 className="font-semibold mb-4 text-base">About Us</h2>
    <ul className="space-y-3 text-gray-700">
      {['Support Center', 'Customer Support', 'About Us', 'Copyright', 'Popular Campaign'].map((item) => (
        <li key={item} className="hover:text-blue-600 cursor-pointer transition-colors">
          {item}
        </li>
      ))}
    </ul>
  </div>

  {/* Our Information Column */}
  <div className="col-span-1">
    <h2 className="font-semibold mb-4 text-base">Our Information</h2>
    <ul className="space-y-3 text-gray-700">
      {['Return Policy', 'Privacy Policy', 'Terms & Conditions', 'Site Map', 'Store Hours'].map((item) => (
        <li key={item} className="hover:text-blue-600 cursor-pointer transition-colors">
          {item}
        </li>
      ))}
    </ul>
  </div>

  {/* My Account Column */}
  <div className="col-span-1">
    <h2 className="font-semibold mb-4 text-base">My Account</h2>
    <ul className="space-y-3 text-gray-700">
      {['Press inquiries', 'Social media', 'Directories', 'Images & B-roll', 'Permissions'].map((item) => (
        <li key={item} className="hover:text-blue-600 cursor-pointer transition-colors">
          {item}
        </li>
      ))}
    </ul>
  </div>

  {/* Policy Column */}
  <div className="col-span-1">
    <h2 className="font-semibold mb-4 text-base">Policy</h2>
    <ul className="space-y-3 text-gray-700">
      {['Application security', 'Software principles', 'Unwanted software policy', 'Responsible supply chain'].map((item) => (
        <li key={item} className="hover:text-blue-600 cursor-pointer transition-colors">
          {item}
        </li>
      ))}
    </ul>
  </div>
</section>
    </main>
  )
}

export default LastFooter