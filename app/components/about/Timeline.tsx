'use client';
import React from 'react';
import Image from 'next/image';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline: React.FC = () => {
  return (
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
            rootMargin: "10000px 0px -100px 0px",
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
            rootMargin: "10000px 0px -100px 0px",
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
            rootMargin: "10000px 0px -100px 0px",
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
  );
};

export default Timeline;