import React from "react";
import { Meteors } from "@/components/ui/meteors";

const Page = () => {
  return (
    <div className="min-h-screen bg-slate-900 py-12 pt-36 text-gray-400">
      <Meteors number={20} />
      <div className="container flex justify-center items-center">
        <div className="flex flex-col justify-start items-start gap-4 max-w-[40rem]">
          <h1 className="text-3xl font-bold text-white text-center w-full">
            Contact Us
          </h1>
          <p className="mx-8 text-center text-sm">
            We&apos;re here to help with any questions about our courses,
            programs, or events. Reach out and let us know how we can assist you
            in your musical journey.
          </p>
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full bg-black text-gray-400 border border-gray-800 outline-none p-4 text-sm rounded-lg"
          />
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            className="w-full h-[15rem] text-gray-400 bg-black border border-gray-800 rounded-lg outline-none text-sm p-4"
          ></textarea>
          <button className="px-4 py-2 rounded-md bg-[#348686] text-white text-sm">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
