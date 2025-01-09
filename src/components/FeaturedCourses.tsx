"use client";
import React from "react";
import courseData from "../data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}
const FeaturedCourses = () => {
  const featuredCourseData = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900">
      <div className="container">
        <div className="text-center">
          <h3 className="text-base text-teal-600 font-semibold uppercase">
            Featured Courses
          </h3>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {featuredCourseData.map((course: Course) => (
              <div key={course.id} className="flex justify-center">
                <BackgroundGradient className="flex lfex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                  <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow text-black dark:text-white">
                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                      {course.title}
                    </p>
                    <p>{course.description}</p>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="bg-white px-4 py-2 text-sm text-black mt-3"
                    >
                      Learn More
                    </Link>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 text-center">
          <Link
            href={"/courses"}
            className="bg-white px-4 py-3 text-sm text-black"
          >
            View All Couses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
