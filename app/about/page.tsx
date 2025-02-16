'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import AboutCommittee from '../components/about/AboutCommittee';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const committee = [
  { name: "Kevin Nguyen", role: "President", image: "/photos/gic2024_photo_1.jpg" },
  { name: "Kevin Nguyen", role: "Vice President", image: "/photos/gic2024_photo_1.jpg" },
  { name: "Kevin Nguyen", role: "Secretary", image: "/photos/gic2024_photo_1.jpg" },
  { name: "Kevin Nguyen", role: "Treasurer", image: "/photos/gic2024_photo_1.jpg" },
  { name: "Kevin Nguyen", role: "President", image: "/photos/gic2024_photo_1.jpg" },
  { name: "Kevin Nguyen", role: "President", image: "/photos/gic2024_photo_1.jpg" },
  { name: "Kevin Nguyen", role: "President", image: "/photos/gic2024_photo_1.jpg" },
  { name: "Kevin Nguyen", role: "President", image: "/photos/gic2024_photo_1.jpg" },
];

const AboutPage: React.FC = () => {
  return (
    <>
      <Navbar />

      <div className="relative bg-MUE-dark-blue text-MUE-white py-36 mb-40 px-12 w-full grid grid-cols-8 gap-16">
        <div className="col-span-5 flex flex-col justify-center ml-28">
          <h5 className="text-xl uppercase font-semibold">What We Do</h5>
          <h1 className="text-[84px] py-4 font-extrabold leading-tight">
            Uniting Gamers, <br /> Elevating Esports<span className="text-MUE-sky-blue">.</span>
          </h1>
          <h3 className="text-5xl mt-12 font-bold">How Two Communities Came Together</h3>
        </div>
        <div className="relative col-span-3 flex flex-col space-y-4">
          <div className="relative w-[400px] h-[400px]">
            <div className="absolute top-0 -left-40 -rotate-15 hover:z-10">
              <Image
                src="/photos/agm2024_photo_3.jpg"
                alt="Blue Sticky Note"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute top-40 right-0 rotate-15 hover:z-10">
              <Image
                src="/photos/agm2024_photo_5.jpg"
                alt="Yellow Sticky Note"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute top-80 -left-40 -rotate-15 hover:z-10">
              <Image
                src="/photos/agm2024_photo_4.jpg"
                alt="Pink Sticky Note"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full py-10 bg-MUE-dark-blue">
        <h2 className="text-4xl font-bold text-white mb-12">Our Journey</h2>

        <VerticalTimeline animate={true} lineColor="var(--MUE-white)">
          {/* 2018 */}
          <VerticalTimelineElement 
            date="2018" 
            dateClassName="timeline-date-style-MUE-sky-blue" 
            iconStyle={{ background: "var(--MUE-sky-blue)" }}
            contentStyle={{ background: "var(--MUE-dark-blue)", border: "2px solid white" }}
            intersectionObserverProps={{
              rootMargin: "0px 0px -100px 0px",
              threshold: 0.5,
            }}
          >
            <div className="max-w-lg">
              <h3 className="text-2xl text-MUE-white font-bold mb-2">The Journey</h3>
              <span className="block h-1 w-40 bg-blue-400 mb-2"></span>
              <p className="text-MUE-white">
                Since affiliating with UMSU in 2018, Melbourne University Esports
                (MUE) has become the heart of Unimelb&apos;s gaming scene. What began
                as a small group of friends has grown into a thriving hub for
                students through competitions, online events, and in-person
                gatherings.
              </p>
              <Image
                src="/photos/committee2021_photo_1.jpg"
                alt="timeline_photo_1"
                width={400}
                height={300}
                className="rounded-lg shadow-lg mt-4"
              />
            </div>
          </VerticalTimelineElement>

          {/* 2020 */}
          <VerticalTimelineElement 
            date="2020" 
            dateClassName="timeline-date-style-MUE-yellow" 
            iconStyle={{ background: "var(--MUE-yellow)" }}
            contentStyle={{ background: "var(--MUE-dark-blue)", border: "2px solid white" }}
            intersectionObserverProps={{
              rootMargin: "0px 0px -100px 0px",
              threshold: 0.5,
            }}
          >
            <div className="max-w-lg">
              <h3 className="text-2xl text-MUE-white font-bold mb-2">Adapting Through Change</h3>
              <span className="block h-1 w-[320px] bg-yellow-500 mb-2"></span>
              <p className="text-MUE-white">
                During the pandemic (2020&#45;2023), MUE pivoted to online engagement, 
                making its Discord server the community&apos;s core. Virtual tournaments 
                and game nights kept players connected. With campus life back, MUE continues 
                to unite all gamers—whether casual, competitive, or social.
              </p>
              <Image
                src="/photos/gic2024_photo_4.jpg"
                alt="timeline_photo_1"
                width={400}
                height={300}
                className="rounded-lg shadow-lg mt-4"
              />
            </div>
          </VerticalTimelineElement>

          {/* Today */}
          <VerticalTimelineElement 
            date="Today" 
            dateClassName="timeline-date-style-MUE-pink" 
            iconStyle={{ background: "var(--MUE-pink)" }}
            contentStyle={{ background: "var(--MUE-dark-blue)", border: "2px solid white" }}
            intersectionObserverProps={{
              rootMargin: "0px 0px -100px 0px",
              threshold: 0.5,
            }}
          >
            <div className="max-w-lg">
              <h3 className="text-2xl text-MUE-white font-bold mb-2">Our Mission</h3>
              <span className="block h-1 w-36 bg-pink-500 mb-2"></span>
              <p className="text-MUE-white">
                More than just a club, MUE is a global community where students connect, compete, 
                and grow. We foster inclusivity, competition, and the UniMelb spirit, welcoming 
                everyone from casual players to aspiring pros.
              </p>
              <Image
                src="/photos/agm2024_photo_1.jpg"
                alt="timeline_photo_1"
                width={400}
                height={300}
                className="rounded-lg shadow-lg mt-4"
              />
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>

      <AboutCommittee />
      

      <Footer />
    </>
  );
};

export default AboutPage;