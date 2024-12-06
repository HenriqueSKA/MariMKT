import React from 'react';
import { Mail, Phone, Instagram } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Entre em contato
        </h2>
        <div className="flex justify-center space-x-12">
          <a href="mailto:contato@marimkt.com" className="flex items-center gap-3 text-gray-700 hover:text-pink-600">
            <Mail className="w-6 h-6" />
            <span>contato@marimkt.com</span>
          </a>
          <a href="tel:+5511999999999" className="flex items-center gap-3 text-gray-700 hover:text-pink-600">
            <Phone className="w-6 h-6" />
            <span>(11) 99999-9999</span>
          </a>
          <a href="https://instagram.com/marimkt" className="flex items-center gap-3 text-gray-700 hover:text-pink-600">
            <Instagram className="w-6 h-6" />
            <span>@marimkt</span>
          </a>
        </div>
      </div>
    </section>
  );
}