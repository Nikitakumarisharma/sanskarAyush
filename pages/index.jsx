'use client';

import Head from 'next/head';

const MaintenancePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white">
      <Head>
        <title>Maintenance | Sanskar Ayush</title>
        <meta name="description" content="We're upgrading your experience" />
      </Head>

      <div className="text-center p-8 max-w-2xl mx-auto">
        <div className="w-24 h-24 mx-auto mb-8">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            className="text-green-600"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>

        <h1 className="text-4xl font-bold text-green-800 mb-4">
          We're Upgrading Your Experience
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Sanskar Ayush is currently undergoing maintenance to bring you an enhanced experience
        </p>

        <div className="bg-green-50 p-6 rounded-lg border border-green-100">
          <p className="text-green-700 mb-4">
            We're working hard to improve our services with:
          </p>
          <ul className="space-y-2 text-left text-gray-700">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span> Enhanced user interface
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span> Improved performance
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span> New features
            </li>
          </ul>
        </div>

        <p className="mt-8 text-gray-500">
          We'll be back soon with something amazing!
        </p>
      </div>
    </div>
  );
};

export default MaintenancePage;