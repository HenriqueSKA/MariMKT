import React from 'react';

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-pink-600 to-pink-400">
      <div className="max-w-7xl mx-auto px-6 flex items-center min-h-[80vh]">
        <div className="w-1/2 text-white">
          <h1 className="text-5xl font-bold mb-6">
            Transforme sua presença digital com estratégias que funcionam
          </h1>
          <p className="text-xl mb-8">
            Marketing digital personalizado para impulsionar seu negócio ao próximo nível
          </p>
          <a href="#plans" className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors">
            Conheça nossos planos
          </a>
        </div>
        <div className="w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
            alt="Marketing Strategy"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}