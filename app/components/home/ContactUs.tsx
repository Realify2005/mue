import React from 'react'
import Image from 'next/image'
const ContactForm: React.FC = () => {
    return (
        <div className="p-40 flex flex-col justify-center items-center bg-black text-white">
            <h2 className="my-12 text-4xl font-extrabold">Get In Touch</h2>
            <h6 className="my-4 text-2xl font-extrabold">Address:</h6>
            <p className="my-2 text-base text-white">Mailbox 122, First Floor Union House</p>
            <p className="my-2 text-base text-white">The University of Melbourne 3010, VIC</p>
            <h6 className="my-4 text-2xl font-extrabold">For enquiries, please email us at</h6>
            <a href="mailto:melbuniesports@gmail.com" className="my-2 text-base text-white">melbuniesports@gmail.com</a>
            <h6 className="my-4 text-2xl font-extrabold">Alternatively, feel free to chat to us on</h6>
            <a href="https://discord.gg/unimelb">
                <Image 
                    src="/logos/discord.png"
                    alt="Discord logo"
                    width={250}
                    height={200}
                />
            </a>
        </div>
    );
};

export default ContactForm;
