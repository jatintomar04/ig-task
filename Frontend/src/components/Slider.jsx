import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Add Autoplay
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
  const tutorials = [
    {
      id: 1,
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/c1e83519-1f64-4cb9-fc3b-8fd3491c5077.jpg",
      imgAlt: "Person working on laptop",
      rating: 5.0,
      reviews: 392,
      title: "How to work with prototype design with adobe xd featuring tools",
      students: 2538,
    },
    {
      id: 2,
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/f33795bf-456b-4432-5469-6aa926665beb.jpg",
      imgAlt: "Top view of hands working on laptop",
      rating: 4.5,
      reviews: 524,
      title: "Create multiple artboard by using figma prototyping tools",
      students: 3532,
    },
    {
      id: 3,
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/ef68ed81-74dd-4f36-a43a-79a7b2a8b33c.jpg",
      imgAlt: "Hands typing on laptop",
      rating: 5.0,
      reviews: 392,
      title: "Convert your web layout with sketch zeplin extension",
      students: 1037,
    },
     {
      id: 4,
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/c1e83519-1f64-4cb9-fc3b-8fd3491c5077.jpg",
      imgAlt: "Hands typing on laptop",
      rating: 5.0,
      reviews: 392,
      title: "Convert your web layout with sketch zeplin extension",
      students: 1037,
    },
     {
      id: 5,
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/f33795bf-456b-4432-5469-6aa926665beb.jpg",
      imgAlt: "Hands typing on laptop",
      rating: 5.0,
      reviews: 392,
      title: "Convert your web layout with sketch zeplin extension",
      students: 1037,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto sm:px-6 lg:px-20 py-12 font-[Inter]">
      <div className="text-center mb-10">
        <p className="text-[10px] text-[#d6a96a] font-semibold tracking-widest uppercase">
          QUALITY FEATURES
        </p>
        <h2 className="mt-1 text-[18px] font-semibold leading-tight">
          Tutorials that people love most
        </h2>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]} 
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {tutorials.map((tut) => (
          <SwiperSlide key={tut.id}>
            <div className="bg-white rounded-md shadow-md overflow-hidden">
              <div className="relative">
                <img
                  src={tut.imgSrc}
                  alt={tut.imgAlt}
                  className="w-full h-48 object-cover"
                />
                <button
                  aria-label="Play video"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    bg-white bg-opacity-90 hover:bg-opacity-100 
                    w-14 h-14 flex items-center justify-center 
                    rounded-full shadow-md transition duration-200"
                >
                  <i className="fas fa-play text-gray-700 text-xl"></i>
                </button>
              </div>
              <div className="px-4 py-4">
                <div className="flex items-center space-x-1 mb-1">
                  <div className="flex text-yellow-400 text-[12px]">
                    {Array.from({ length: 5 }).map((_, i) => {
                      if (tut.rating === 5 || i < Math.floor(tut.rating)) {
                        return <i key={i} className="fas fa-star"></i>;
                      } else if (
                        tut.rating % 1 !== 0 &&
                        i === Math.floor(tut.rating)
                      ) {
                        return <i key={i} className="fas fa-star-half-alt"></i>;
                      } else {
                        return <i key={i} className="far fa-star"></i>;
                      }
                    })}
                  </div>
                  <span className="text-[12px] text-gray-600 font-normal">
                    {tut.rating.toFixed(1)} ({tut.reviews} reviews)
                  </span>
                </div>
                <h3 className="text-[14px] font-semibold leading-snug mb-2">
                  {tut.title}
                </h3>
                <p className="text-[11px] text-gray-400 flex items-center">
                  <i className="far fa-eye text-[10px] mr-1"></i>
                  <span>{tut.students.toLocaleString()} students watched</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
