import React from 'react';

const header: React.FC = () => {
  return (
    /* z-50 ensures header is always displayed in front of other elements */
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-200 rounded-lg overflow-hidden mx-auto inline-block border border-gray-400">
      <div className="flex justify-center p-2.5">
        <ul className="flex gap-4">
          <li className="transition-colors duration-300 ease-in-out">
            <a href="#" className="text-black hover:text-white hover:bg-black px-2 py-1 rounded">
              Home
            </a>
          </li>
          <li className="transition-colors duration-300 ease-in-out">
            <a href="#" className="text-black hover:text-white hover:bg-black px-2 py-1 rounded">
              Events
            </a>
          </li>
          <li className="transition-colors duration-300 ease-in-out">
            <a href="#" className="text-black hover:text-white hover:bg-black px-2 py-1 rounded">
              Focused Games
            </a>
          </li>
          <li className="transition-colors duration-300 ease-in-out">
            <a href="#" className="text-black hover:text-white hover:bg-black px-2 py-1 rounded">
              Membership
            </a>
          </li>
          <li className="transition-colors duration-300 ease-in-out">
            <a href="#" className="text-black hover:text-white hover:bg-black px-2 py-1 rounded">
              Our Sponsors
            </a>
          </li>
          <li className="transition-colors duration-300 ease-in-out">
            <a href="#" className="text-black hover:text-white hover:bg-black px-2 py-1 rounded">
              Frequently Asked Questions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default header;
