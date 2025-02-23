import React from 'react';
import { Search, User, Calendar } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky border-b border-gray-200 py-4 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-800">ALX</span>
            </a>
          </div>

          {/* Search and Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-4 max-w-2xl mx-8">
            {/* Location Search */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search for destination"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400 h-5 w-5" />
            </div>

            {/* Check in */}
            <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Calendar className="h-5 w-5" />
              <span>Check in</span>
            </button>

            {/* Check out */}
            <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Calendar className="h-5 w-5" />
              <span>Check out</span>
            </button>

            {/* People */}
            <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <User className="h-5 w-5" />
              <span>Add guest</span>
            </button>
          </div>

          {/* Sign In Button */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block px-6 py-2 text-white bg-teal-600 rounded-lg hover:bg-teal-700">
              Sign in
            </button>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Search className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Accommodation Types */}
        {/* <div className="hidden md:flex items-center gap-6 mt-4">
          {['Rooms', 'Mansion', 'Countryside', 'Beach House', 'Cabin'].map((type) => (
            <button
              key={type}
              className="text-gray-600 hover:text-gray-900 hover:border-b-2 hover:border-gray-900 pb-1"
            >
              {type}
            </button>
          ))}
        </div> */}
      </div>

      {/* Mobile Search (Hidden on desktop) */}
      <div className="md:hidden mt-4">
        <input
          type="text"
          placeholder="Search for destination"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </header>
  );
};

export default Header;