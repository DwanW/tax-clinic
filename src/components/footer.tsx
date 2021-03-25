import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { navigate } from "@reach/router"

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => (
  <div className="px-4 pt-4 sm:px-6 flex flex-col border-t-2 border-gray-100 bg-white">
    <div className="flex justify-between sm:flex-col">
      <div className="flex-1 sm:mb-8">
        <div className="flex justify-center lg:flex-1">
          <Link to="/">
            <StaticImage
              src="../images/people-logo.jpg"
              width={80}
              height={80}
              alt=""
            />
          </Link>
        </div>
        <div className="text-sm text-left py-2 max-w-md mx-auto text-gray-600">
          DW Tax Clinic is a CRA recognized community organization that host
          free virtual tax clinics
        </div>
      </div>
      <nav className="flex flex-2 space-y-4 ml-4 flex-col sm:flex-row sm:m-auto sm:space-x-8 sm:space-y-0">
        <button
          onClick={() => navigate("/#eligibility")}
          className="text-sm font-medium text-left text-gray-500 hover:text-gray-900"
        >
          Eligibility
        </button>
        <button
          onClick={() => navigate("/#documents")}
          className="text-sm font-medium text-left text-gray-500 hover:text-gray-900"
        >
          Documents
        </button>
        <Link
          to="/contact"
          className="text-sm font-medium text-left text-gray-500 hover:text-gray-900"
        >
          Contact
        </Link>
        <button
          onClick={() => navigate("/#hours")}
          className="text-sm font-medium text-left text-gray-500 hover:text-gray-900"
        >
          Hours
        </button>
      </nav>
    </div>
    <div className="text-gray-500 font-normal text-sm py-4 text-center">
      Copyright © {new Date().getFullYear()} DW Tax Clinic{" "}
    </div>
  </div>
)

export default Footer
