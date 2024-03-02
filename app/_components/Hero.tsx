
import React from 'react'
import { SparklesCore } from './ui/sparkles'


function Hero() {
  return (
    <section className="bg-gray-900 text-white flex justify-center items-center gap-8">
          <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"

          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-screen"
          particleColor="#FFFFFF"
        />
       
  <div className="flex justify-center items-center absolute top-[200px] m-auto">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Understand User Flow.

        <span className="sm:block"> Increase Conversion. </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
      
   
        <a
          className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/dashboard"
        >
          Get Started
        </a>
      
        
      </div>
    </div>
  </div>
  
</section>
  )
}

export default Hero
