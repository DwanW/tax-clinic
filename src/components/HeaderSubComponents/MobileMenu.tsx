import React from "react"
import { Link } from "gatsby"
import { navigate } from "@reach/router"
import { StaticImage } from "gatsby-plugin-image"

interface MobileMenuProps {
  isFadeIn: Boolean
  isMobileMenuOpen: Boolean
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  setIsFadeIn: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isFadeIn,
  isMobileMenuOpen,
  setMobileMenuOpen,
  setIsFadeIn,
}) => {
  return (
    <div
      className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden ${
        isFadeIn ? "animate-menuFadeIn" : "animate-menuFadeOut"
      } ${isMobileMenuOpen ? "" : "hidden"}`}
      onAnimationEnd={() => (!isFadeIn ? setMobileMenuOpen(false) : null)}
    >
      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div className="pt-5 pb-6 px-5">
          <div className="flex items-center justify-between">
            <div>
              <StaticImage
                imgClassName="h-8 w-auto"
                src="../../images/logo.png"
                alt="Hero Image"
                layout="constrained"
                height={32}
                formats={["png"]}
                aspectRatio={2 / 1}
              />
            </div>
            <div className="-mr-2">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setIsFadeIn(!isFadeIn)}
              >
                <span className="sr-only">Close menu</span>
                {/* <!-- Heroicon name: outline/x --> */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="py-6 px-5 space-y-6">
          <div className="grid grid-cols-1 gap-y-4 gap-x-8">
            <button
              onClick={() => {
                navigate("/#eligibility")
                setIsFadeIn(!isFadeIn)
              }}
              className="text-left text-base font-medium text-gray-900 hover:text-gray-700"
            >
              Eligibility
            </button>

            <button
              onClick={() => {
                navigate("/#documents")
                setIsFadeIn(!isFadeIn)
              }}
              className="text-left text-base font-medium text-gray-900 hover:text-gray-700"
            >
              Documents
            </button>

            <a
              className="text-left text-base font-medium text-gray-900 hover:text-gray-700"
              href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax.html"
              target="__blank"
            >
              Resource
            </a>
            <button
              onClick={() => {
                navigate("/contact")
                setIsFadeIn(!isFadeIn)
              }}
              className="text-left text-base font-medium text-gray-900 hover:text-gray-700"
            >
              Volunteer
            </button>
          </div>
          <div>
            <Link
              to="/contact"
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Contact Us
            </Link>
            <p className="mt-6 text-center text-base font-medium text-gray-500">
              Check out our hours of Operation -
              <button
                onClick={() => {
                  navigate("/#hours")
                  setIsFadeIn(!isFadeIn)
                }}
                className="text-indigo-700 font-bold hover:text-indigo-600 ml-1"
              >
                Here
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
