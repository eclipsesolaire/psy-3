// src/navigation/Navigation.jsx
import React from 'react';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <header className="fixed w-full top-0 z-50">
      {/* Bar supérieure contact */}
      <div className="bg-gray-100 text-gray-600 text-sm flex justify-center items-center py-1 space-x-6">
        <span>📞 06 xx xx xx xx</span>
        <span>📍 3 rue Galléan, 06000 Nice</span>
      </div>
      {/* Menu principal */}
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-xl font-bold text-blue-900">Mon Cabinet Psy</div>
          <ul className="hidden md:flex space-x-6 font-bold">
            <li>
              <Link to="questions" smooth offset={-120} duration={500} className="cursor-pointer text-blue-900 hover:text-blue-700">
                Questions
              </Link>
            </li>
            <li>
              <Link to="tarifs" smooth offset={-120} duration={500} className="cursor-pointer text-blue-900 hover:text-blue-700">
                Tarifs
              </Link>
            </li>
            <li>
              <NavLink to="/contact" className="text-blue-900 hover:text-blue-700">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
