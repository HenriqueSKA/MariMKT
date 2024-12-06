import React from 'react';
import { Megaphone } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white py-4 px-6 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Megaphone className="w-8 h-8 text-pink-600" />
          <span className="text-2xl font-bold text-pink-600">MarimKT</span>
        </div>
        <nav>
          <ul className="flex gap-8">
            <li><a href="#home" className="text-gray-700 hover:text-pink-600">Home</a></li>
            <li><a href="#services" className="text-gray-700 hover:text-pink-600">Serviços</a></li>
            <li><a href="#plans" className="text-gray-700 hover:text-pink-600">Planos</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-pink-600">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}