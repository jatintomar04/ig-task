import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const cardData = [
  {
    backImg: 'https://storage.googleapis.com/a1aa/image/bff53eb3-889d-4b96-7935-cc223d1f0037.jpg',
    frontImg: 'https://storage.googleapis.com/a1aa/image/63044d05-36ab-4864-9e21-dcc6131b0823.jpg',
    title: 'Convert your web layout theming easily with sketch zeplin extension',
    views: '1,037 students watched',
    rating: 5,
    reviews: '5.0 (392 reviews)',
  },
  {
    backImg: 'https://storage.googleapis.com/a1aa/image/63044d05-36ab-4864-9e21-dcc6131b0823.jpg',
    frontImg: 'https://storage.googleapis.com/a1aa/image/bff53eb3-889d-4b96-7935-cc223d1f0037.jpg',
    title: 'Master responsive design with real-world projects',
    views: '2,115 students watched',
    rating: 4,
    reviews: '4.5 (280 reviews)',
  },
  // Add more items as needed
];

const TutorialSection = () => {
  return (
    <section className="bg-white font-['Inter'] max-w-7xl mx-auto px-6 sm:px-10 py-16 flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-24">
      {/* Slider Section */}
      <div className="w-full max-w-md md:max-w-lg">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          className="relative"
        >
          {cardData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative flex justify-center">
                {/* Back card */}
                <div
                  className="absolute top-12 left-0 w-72 sm:w-80 bg-white rounded-xl shadow-md p-5 text-center text-sm text-gray-600 select-none"
                  style={{ filter: 'drop-shadow(0 0 0.5px #d1d5db)' }}
                >
                  <img
                    src={item.backImg}
                    alt="Back Card"
                    className="rounded-lg mb-3"
                    width={288}
                    height={160}
                  />
                  <p className="font-semibold text-gray-700 truncate">Create multiple figma prototypes</p>
                  <div className="flex items-center justify-center gap-1 text-gray-400 mt-1">
                    <i className="far fa-eye" />
                    <span>3,532 students watched</span>
                  </div>
                </div>

                {/* Front card */}
                <div
                  className="relative z-10 w-80 sm:w-96 bg-white rounded-xl shadow-lg p-6"
                  style={{ filter: 'drop-shadow(0 0 3px rgb(0 0 0 / 0.1))' }}
                >
                  <img
                    src={item.frontImg}
                    alt="Front Card"
                    className="rounded-lg mb-4"
                    width={384}
                    height={216}
                  />
                  <div className="absolute top-16 left-16 w-16 h-16 bg-white bg-opacity-70 rounded-full flex items-center justify-center cursor-pointer">
                    <i className="fas fa-play text-white text-2xl drop-shadow-lg" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-yellow-400 text-sm">
                      {[...Array(item.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star" />
                      ))}
                    </div>
                    <span className="text-gray-600 text-xs font-medium">{item.reviews}</span>
                  </div>
                  <p className="font-semibold text-gray-800 mb-1 leading-snug text-sm">
                    {item.title}
                  </p>
                  <div className="flex items-center gap-1 text-gray-400 text-xs">
                    <i className="far fa-eye" />
                    <span>{item.views}</span>
                  </div>
                  <div
                    className="absolute top-10 right-4 bg-teal-400 text-white text-xs font-semibold rounded-full px-3 py-1 flex items-center gap-1 select-none"
                    style={{ boxShadow: '0 2px 6px rgb(45 212 191 / 0.5)' }}
                  >
                    <i className="fas fa-check-circle" />
                    Free tutorial
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Text Content Section */}
      <div className="max-w-xl flex flex-col gap-4">
        <p className="text-xs font-semibold text-amber-400 tracking-widest">FREE TUTORIAL</p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 leading-tight">
          More than thousand of free tutorial upload every weeks
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed max-w-md">
          Get your tests delivered at let home collect sample from the victory of the managments that supplies best
          design system guidelines ever. Get your tests delivered at let home collect sample.
        </p>
        <button
          type="button"
          className="w-max bg-amber-200 text-amber-500 text-xs font-semibold rounded px-3 py-1"
        >
          Explore details
        </button>
      </div>
    </section>
  );
};

export default TutorialSection;
