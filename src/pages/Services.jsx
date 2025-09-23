import React from 'react';
import { MdOutlineFamilyRestroom } from "react-icons/md"
import { GiBrain } from "react-icons/gi";
import { GiLovers } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { GiMeditation } from 'react-icons/gi';
import { FaRibbon } from 'react-icons/fa';
import Footer  from '../components/Footer';

const Services = () => {
  const services = [
    {
      title: "Thérapie Individuelle",
      description: "Accompagnement personnalisé pour surmonter les difficultés personnelles et émotionnelles.",
      icon: <GiBrain className="text-4xl" />,
      features: ["Gestion du stress et de l'anxiété", "Traitement de la dépression", "Développement personnel", "Gestion des traumatismes"]
    },
    {
      title: "Thérapie de Couple",
      description: "Améliorer la communication et résoudre les conflits dans votre relation.",
      icon: <GiLovers className="text-4xl" />,
      features: ["Amélioration de la communication", "Résolution des conflits", "Rétablissement de l'intimité", "Préparation au mariage"]
    },
    {
      title: "Thérapie Familiale",
      description: "Accompagnement pour améliorer les relations familiales et résoudre les tensions.",
      icon: <MdOutlineFamilyRestroom className="text-4xl" />,
      features: ["Résolution des conflits familiaux", "Amélioration de la communication", "Gestion des crises familiales", "Soutien parental"]
    },
    {
      title: "Thérapie pour Adolescents",
      description: "Accompagnement spécialisé pour les jeunes en difficulté.",
      icon: <FaRegUser className="text-4xl" />,
      features: ["Gestion de l'anxiété scolaire", "Problèmes d'estime de soi", "Gestion des émotions", "Orientation et motivation"]
    },
    {
      title: "Gestion du Stress",
      description: "Techniques et outils pour mieux gérer le stress quotidien.",
      icon: <GiMeditation className="text-4xl" />,
      features: ["Techniques de relaxation", "Méditation guidée", "Gestion du temps", "Équilibre vie pro/perso"]
    },
    {
      title: "Accompagnement au Deuil",
      description: "Soutien psychologique pour traverser les périodes de deuil et de perte.",
      icon: <FaRibbon className="text-4xl" />,
      features: ["Travail de deuil", "Gestion des émotions", "Reconstruction personnelle", "Soutien émotionnel"]
    }
  ];

  return (
    <>
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 pt-4">
              Nos Services
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Découvrez notre gamme complète de services de psychologie 
              pour répondre à tous vos besoins de bien-être mental et émotionnel.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="text-purple-600 mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-600 text-white py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin d'un accompagnement ?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Nous sommes là pour vous accompagner dans votre parcours de bien-être
          </p>
          <div className="space-x-4">
            <a
              href="tel:+33123456789"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-block"
            >
              Appeler maintenant
            </a>
            <a
              href="mailto:djibybadiaga971@gmail.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-block"
            >
              Envoyer un email
            </a>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default Services; 