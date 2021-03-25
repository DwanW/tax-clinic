import { Link } from "gatsby"
import React from "react"
import { navigate } from "@reach/router"
import { StaticImage } from "gatsby-plugin-image"

interface DesktopMenuProps {
  openMenu: () => void
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ openMenu }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link to="/">
            <span className="sr-only">Logo Icon</span>
            <StaticImage
              imgClassName="h-8 w-auto sm:h-10"
              src="../../images/logo.png"
              alt="Hero Image"
              layout="constrained"
              height={32}
              formats={["png"]}
              aspectRatio={2 / 1}
            />
          </Link>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <button
            type="button"
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded="false"
            onClick={openMenu}
          >
            <span className="sr-only">Open menu</span>
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <nav className="hidden md:flex space-x-4">
          <button
            onClick={() => navigate("/#eligibility")}
            className="p-2 text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring focus:ring-offset-gray-100"
          >
            Eligibility
          </button>
          <button
            onClick={() => navigate("/#documents")}
            className="p-2 text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring focus:ring-offset-gray-100"
          >
            Documents
          </button>
          <a
            className="p-2 text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring focus:ring-offset-gray-100"
            href="https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax.html"
            target="__blank"
          >
            Resource
          </a>
          <Link
            to="/contact"
            className="p-2 text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring focus:ring-offset-gray-100"
          >
            Volunteer
          </Link>
        </nav>
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <button
            onClick={() => navigate("/#hours")}
            className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring focus:ring-offset-gray-100"
          >
            Hours of operation
          </button>
          <Link
            to="/contact"
            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-700 hover:bg-indigo-800"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DesktopMenu
