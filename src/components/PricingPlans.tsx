import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Essencial',
    price: 'R$ 997',
    features: [
      'Gestão de 2 redes sociais',
      '15 posts por mês',
      'Relatório mensal',
      'Suporte por email'
    ]
  },
  {
    name: 'Profissional',
    price: 'R$ 1.997',
    features: [
      'Gestão de 4 redes sociais',
      '30 posts por mês',
      'Relatório quinzenal',
      'Suporte prioritário',
      'Estratégia de anúncios'
    ]
  },
  {
    name: 'Enterprise',
    price: 'R$ 3.997',
    features: [
      'Gestão de 6 redes sociais',
      '45 posts por mês',
      'Relatório semanal',
      'Suporte 24/7',
      'Estratégia completa de marketing',
      'Consultoria personalizada'
    ]
  }
];

export function PricingPlans() {
  return (
    <section id="plans" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Escolha o plano ideal para você
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white rounded-xl shadow-lg p-8 border-2 border-pink-100 hover:border-pink-400 transition-colors">
              <h3 className="text-2xl font-bold text-pink-600 mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold text-gray-800 mb-6">{plan.price}<span className="text-sm text-gray-500">/mês</span></p>
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-pink-600" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-8 bg-pink-600 text-white py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors">
                Começar agora
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}