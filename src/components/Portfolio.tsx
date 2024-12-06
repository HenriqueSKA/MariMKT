import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const portfolioItems = [
  {
    company: 'Beauty Care',
    description: 'Aumento de 150% em vendas online',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80',
    logo: 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?auto=format&fit=crop&q=80'
  },
  {
    company: 'Tech Solutions',
    description: '200% mais leads qualificados',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80',
    logo: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80'
  },
  {
    company: 'Fitness Pro',
    description: '300% de crescimento em seguidores',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80',
    logo: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80'
  },
  {
    company: 'Green Foods',
    description: 'ROI de 400% em campanhas',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80',
    logo: 'https://images.unsplash.com/photo-1470784790053-6c2f15489967?auto=format&fit=crop&q=80'
  }
];

export function Portfolio() {
  return (
    <section className="py-20 bg-white" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Cases de Sucesso
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="portfolio-swiper"
        >
          {portfolioItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 gap-8 items-center bg-pink-50 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <img 
                      src={item.logo} 
                      alt={`${item.company} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-pink-600">{item.company}</h3>
                  <p className="text-xl text-gray-700">{item.description}</p>
                  <button className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors">
                    Ver case completo
                  </button>
                </div>
                <div className="h-[400px] rounded-xl overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={`${item.company} case study`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}