import React, { useState } from 'react';

const NewComponent = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nouveau Composant
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un composant React moderne avec Tailwind CSS
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Fonctionnalité 1</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Description de la première fonctionnalité avec des détails intéressants.
            </p>
            <button 
              onClick={() => setIsActive(!isActive)}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              {isActive ? 'Désactiver' : 'Activer'}
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Fonctionnalité 2</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Description de la deuxième fonctionnalité avec des détails intéressants.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              En savoir plus
            </button>
          </div>
        </div>

        {/* Interactive Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Section Interactive
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Objectif</h4>
              <p className="text-sm text-gray-600">Définir des objectifs clairs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Action</h4>
              <p className="text-sm text-gray-600">Passer à l'action</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Résultat</h4>
              <p className="text-sm text-gray-600">Obtenir des résultats</p>
            </div>
          </div>

          {/* Status Indicator */}
          <div className="mt-8 text-center">
            <div className={`inline-flex items-center px-4 py-2 rounded-full ${
              isActive 
                ? 'bg-green-100 text-green-800' 
                : 'bg-gray-100 text-gray-800'
            }`}>
              <div className={`w-2 h-2 rounded-full mr-2 ${
                isActive ? 'bg-green-500' : 'bg-gray-500'
              }`}></div>
              {isActive ? 'Actif' : 'Inactif'}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Prêt à commencer ?
          </h3>
          <p className="text-purple-100 mb-6">
            Découvrez toutes les fonctionnalités disponibles
          </p>
          <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
            Commencer maintenant
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewComponent; 