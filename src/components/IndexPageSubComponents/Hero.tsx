import { StaticImage } from "gatsby-plugin-image"
import React from "react"

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <div className="flex flex-col sm:flex-row relative">
      <div className="z-10">
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">File your return</span>
              <span className="block text-indigo-600 xl:inline">
                {" "}
                Digitally
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Description
            </p>
          </div>
        </main>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 z-0">
        <StaticImage
          imgClassName="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="../../images/hero.jpg"
          alt="Hero Image"
          layout="constrained"
          height={500}
          formats={["webp"]}
        />
      </div>
    </div>
  )
}

export default Hero
