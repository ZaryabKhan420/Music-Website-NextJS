"use client";
import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
const UpcomingWebinars = () => {
  const featuredWebinars = [
    {
      title: "Understanding Music Theory",
      description:
        "Dive deep into the fundamentals of music theory and enhance your musical skills.",
      link: "understanding-music-theory",
    },
    {
      title: "The Art of Songwriting",
      description:
        "Learn the craft of songwriting from experienced musicians and songwriters.",
      link: "the-art-of-songwriting",
    },
    {
      title: "Mastering Your Instrument",
      description:
        "Advanced techniques to master your musical instrument of choice.",
      link: "mastering-your-instrument",
    },
    {
      title: "Music Production Essentials",
      description:
        "Get started with music production with this comprehensive overview.",
      link: "music-production-essentials",
    },
    // Added two more webinars
    {
      title: "Live Performance Techniques",
      description:
        "Enhance your live performance skills with expert tips and strategies.",
      link: "live-performance-techniques",
    },
    {
      title: "Digital Music Marketing",
      description:
        "Learn how to promote your music effectively in the digital age.",
      link: "digital-music-marketing",
    },
  ];
  return (
    <div className="p-12 bg-gray-900">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-base text-teal-400 font-semibold tracking-wide uppercase">
              Featured Webinars
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Enhance Your Musical Journey
            </p>
          </div>
          <div className="mt-10">
            <HoverEffect items={featuredWebinars} />
          </div>
          <div className="mt-10 text-center">
            <Link href={"#"} className="bg-white text-black px-4 py-3">
              View All Webinars
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinars;
