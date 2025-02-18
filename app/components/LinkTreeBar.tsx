import React from 'react';
import Image from 'next/image';

const LinkTreeBar: React.FC<{ title: string, link: string, image: string }> = ({ title, link, image }) => {
  return (
    <a href={link}>
      <div className="bg-white border border-black rounded-lg px-2 py-8 flex items-center shadow-solid w-adjust md:w-[600px] h-10 mt-6 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-hidden">
        {
          image ? (<Image src={image} alt='link-image' width={40} height={20} />) : null
        }
        <div className="flex justify-center items-center w-full mr-8">
          <p className="text-sm md:text-base">{title}</p>
        </div>
      </div>
    </a>
  );
};

export default LinkTreeBar;
