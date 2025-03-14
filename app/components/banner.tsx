"use client"
import React from "react";

export default function Banner(){
    return(
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I&apos;m <span className="text-blue-500">Kiran</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            A Full Stack Developer passionate about creating an interactive applications which helps to solve real world problems and helps you to maintain standarized solutions!
          </p>
          <div
            className="bg-blue-500 w-max text-white px-8 py-3 rounded-full hover:bg-blue-600 transition cursor-pointer"
          >
            Get in Touch
          </div>
        </div>
        
        <div className="flex-1">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* //profile */}
          </div>
        </div>
      </div>
    </section>
    )
}