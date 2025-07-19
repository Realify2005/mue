import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import LinktreeBar from '../components/LinktreeBar';
import {fetchLinktreeLayout, fetchLinktreeData} from '../components/api/fetchLinktreeInfo';

export const metadata = {
  title: 'Linktree | MUE',
  description: 'Melbourne University Esports Linktree!',
  openGraph: {
    title: 'Linktree | MUE',
    description: 'Melbourne University Esports Linktree!',
    url: '/games',
    siteName: 'Melbourne University Esports',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Linktree | MUE",
    description: 'Melbourne University Esports Linktree!',
  },
}

const LinkPage = async () => {
  var layout = await fetchLinktreeLayout();
  var data = await fetchLinktreeData();
  return (
    <>
      <Navbar />
      <div className="px-2 py-8 lg:px-40 flex flex-col justify-center items-center bg-gradient-to-b from-teal-500 to-blue-500">
        {
          layout.map((item, index) => {
            if (item.type == "Icon") {
              return <div key={index}>
                {data.filter(image => image.section == item.section_id).sort((a, b) => a.position - b.position).map((image, link_index) => (
                    <Image className="rounded-full" src={image.icon} width={75} height={75} alt={image.name} key={link_index}/>
                  ))}
              </div>
            }
            else if (item.type == "Big Rectangle") {
              return <div key={index}>
                {item.display_name && <div className="mt-6 flex flex-col justify-center items-center"><p className="text-lg text-white">{item.name}</p></div>}
                {
                  data.filter(link => link.section == item.section_id).sort((a, b) => a.position - b.position).map((link, link_index) => (
                    <LinktreeBar title={link.name} link={link.link} image={link.icon} key={link_index}/>
                  ))
                }
              </div>
            }
            else if (item.type == "Text") {
               return <div key={index}>
                {
                  data.filter(text => text.section == item.section_id).sort((a, b) => a.position - b.position).map((text, link_index) => (
                    <h1 className="text-xl text-white text-center" key={link_index}>{text.name}</h1>
                  ))
                }
                </div>
            }

        })
        }
      </div>
      <Footer />
    </>
  );
};

export default LinkPage;
