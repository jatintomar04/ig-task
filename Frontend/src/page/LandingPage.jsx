import React from 'react'
import Header from '../components/Header';

const LandingPage = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Content Section */}
      <div className="bg-gradient-to-r from-[#d9f0ff] to-[#f9f8e7] rounded-br-[80px] md:rounded-br-[200px] w-full md:w-[65%] flex flex-col px-6 md:px-16 py-10">
        <main className="flex flex-col justify-between flex-1">
          <section className="max-w-xl w-full">
            <div className="flex items-center space-x-1 mb-3">
              <i className="fas fa-star text-[#0a1a3a] text-sm"></i>
              <i className="fas fa-star text-[#0a1a3a] text-sm"></i>
              <i className="fas fa-star text-[#0a1a3a] text-sm"></i>
              <i className="fas fa-star text-[#0a1a3a] text-sm"></i>
              <i className="fas fa-star-half-alt text-gray-300 text-sm"></i>
              <span className="text-xs text-[#0a1a3a] ml-2 select-none">Trused by over 4,332 students</span>
            </div>

            <h1 className="text-[#0a1a3a] font-extrabold text-3xl md:text-5xl leading-tight mb-4">
              Learn Design
              <br />
              with{' '}
              <span className="border-b-4 border-[#f7b24a] pb-1">
                Nia Matos
              </span>
            </h1>

            <p className="text-[#0a1a3a] text-sm md:text-base mb-8 leading-relaxed max-w-md">
              Get your blood tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever.
            </p>

            <form className="mb-8 max-w-md">
              <label className="sr-only" htmlFor="search">
                Search Course Name
              </label>
              <div className="relative">
                <input
                  className="w-full rounded-md py-3 px-4 pr-12 text-xs md:text-sm text-[#9ca3af] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#f7b24a] focus:border-transparent shadow-sm bg-white"
                  id="search"
                  placeholder="Search Course Name"
                  type="text"
                />
                <button
                  aria-label="Search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-[#f7b24a] focus:outline-none"
                  type="submit"
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </form>

            <div className="flex items-center space-x-2 text-xs text-[#0a1a3a] select-none">
              <span>Sponsored by:</span>
              <img
                alt="Paypal logo"
                className="opacity-40"
                src="https://storage.googleapis.com/a1aa/image/66a97e63-f31a-49eb-c159-f8016c3e6580.jpg"
                width="40"
                height="14"
              />
              <img
                alt="Google logo"
                className="opacity-40"
                src="https://storage.googleapis.com/a1aa/image/f3863194-17bc-45cf-0619-20b251fefa4c.jpg"
                width="40"
                height="14"
              />
              <img
                alt="Dropbox logo"
                className="opacity-40"
                src="https://storage.googleapis.com/a1aa/image/42630363-27fa-49ef-8f49-955a0a069cc8.jpg"
                width="40"
                height="14"
              />
            </div>
          </section>
        </main>
      </div>

      {/* Right Video Section - hidden on small screens */}
      <div className="hidden md:flex w-full md:w-[35%] items-center justify-center p-6">
        <div className="p-2 border-2 rounded-2xl relative border-[#f7b24a]">
          <div className="relative -mt-10 -ml-12 mx-auto w-fit">
            <video
              width="220"
              height="300"
              autoPlay
              muted
              loop
              className="rounded-md shadow-lg"
            >
              <source src="/book.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
