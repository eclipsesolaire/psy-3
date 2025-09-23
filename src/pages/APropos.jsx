import React from 'react';
import { FaUserFriends } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import Footer from '../components/Footer'



const APropos = () => {
  const allprix = [
    {
      name: "Therapie individuelle",
      role: "Nous vous accompagnons dans votre parcours de bien-être mental",
      prix: "[] Euro l'heure ",
      image: <FaUser size={40} color="gray" />      
    },
    {
      name: "Therapie de couple",
      role: "Nous accompagnon les jeunes couples et les plus anciens",
      prix: "[] euro l'heure",
      image: <FaUserFriends size={40} color="hotpink" />
      

    },
    {
      name: "Therapie Jeunesse",
      role: "Psychologie de l'enfant et de l'adolescent",
      prix: "[] euro l'heure",
      image: <FaRegUser size={40} color="gray" />
    }
  ];

  const values = [
    {
      title: "Confidentialité",
      description: "Nous garantissons une confidentialité absolue dans un cadre de confiance et de respect.",
      icon: "🔒"
    },
    {
      title: "Empathie",
      description: "Chaque personne est unique. Nous adaptons notre approche à vos besoins spécifiques.",
      icon: "🤝"
    },
    {
      title: "Professionnalisme",
      description: "Nous utilisons des méthodes validées scientifiquement pour vous accompagner efficacement.",
      icon: "💡"
    },
    {
      title: "Accompagnement",
      description: "Nous vous accompagnons tout au long de votre parcours vers le bien-être mental.",
      icon: "🎯"
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
              À Propos de Psy2
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Découvrez notre équipe passionnée et notre approche bienveillante 
              pour votre bien-être mental et émotionnel.
            </p>
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Notre Histoire
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Fondé en 2010, Psy2 est né de la passion d'une équipe de psychologues 
                déterminés à offrir un accompagnement de qualité dans un environnement bienveillant et professionnel.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Notre mission est d'accompagner chaque personne dans son parcours de développement personnel 
                avec des méthodes validées et une approche personnalisée.
              </p>
              <p className="text-lg text-gray-600">
                Aujourd'hui, nous sommes fiers d'avoir aidé des milliers de personnes 
                à retrouver leur équilibre mental et leur bien-être émotionnel.
              </p>
            </div>
            <div className="bg-purple-50 p-8 rounded-lg">
              <div className="text-center">
                <div className="text-6xl mb-4">🧠</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Plus de 10 ans d'expertise
                </h3>
                <p className="text-gray-600">
                  Une équipe expérimentée au service de votre santé mentale
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre pratique quotidienne
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center shadow-lg">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos prix
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nous donnons des prix pour un accompagnement de qualité
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {allprix.map((member, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-6xl mb-4 px-[45%]">{member.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-purple-600 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-500">
                  {member.prix}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approche Thérapeutique */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Notre Approche
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Des méthodes validées scientifiquement pour des résultats durables
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🧘‍♀️</div>
              <h3 className="text-xl font-semibold mb-2">Thérapie cognitive et comportementale</h3>
              <p className="text-purple-100">Méthodes validées pour traiter l'anxiété, la dépression et les troubles du comportement</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💭</div>
              <h3 className="text-xl font-semibold mb-2">Approche humaniste</h3>
              <p className="text-purple-100">Accompagnement centré sur la personne et son développement personnel</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🛋️</div>
              <h3 className="text-xl font-semibold mb-2">Environnement bienveillant</h3>
              <p className="text-purple-100">Cabinet chaleureux et accueillant pour votre confort et votre bien-être</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default APropos; 