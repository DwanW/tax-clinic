import { StaticImage } from "gatsby-plugin-image"
import React from "react"

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <div className="relative bg-white overflow-hidden max-w-7xl mx-auto">
      <div className="z-10 relative">
        <main className="h-80 mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <StaticImage
                imgClassName=" h-8 w-auto sm:h-10"
                src="../../images/logo.png"
                alt="Hero Image"
                layout="constrained"
                height={100}
                formats={["png"]}
                aspectRatio={2 / 1}
              />
              <span className="text-2xl sm:text-3xl md:text-4xl block">
                File your return
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl block text-indigo-600">
                {" "}
                Digitally
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Through the Community Volunteer Income Tax Program, community
              organizations host free tax clinics where volunteers file tax
              returns for eligible people.
            </p>
          </div>
        </main>
      </div>
      <div className="flex justify-center lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 z-0">
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
