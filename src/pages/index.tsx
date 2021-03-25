import * as React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/IndexPageSubComponents/Hero"
import SectionContainer from "../components/sectionContainer"

import EligibilityData from "../content/eligibility.json"
import Slips from "../content/slips.json"
import Deduction from "../content/deduction-receipt.json"
import Hours from "../content/hours.json"

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <SectionContainer title="Eligibility Criteria" id="eligibility">
      {EligibilityData.map((e, idx) => (
        <div className="py-4 flex items-center" key={idx}>
          <span className="mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="green"
              width="36px"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </span>
          <span>{e}</span>
        </div>
      ))}
    </SectionContainer>
    <SectionContainer title="Tax Slips and Deduction Receipt" id="documents">
      <div className="text-indigo-400 font-medium mt-4">
        Important Slips and Documents To Collect - Income information slips
      </div>
      {Slips.map((slip, idx) => (
        <div
          className={`py-4 flex items-center ${
            idx % 2 ? "bg-blue-50" : "bg-white"
          }`}
          key={idx}
        >
          <span className="mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="36px"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span>{slip}</span>
        </div>
      ))}
      <div className="text-indigo-400 font-medium mt-4">
        Tax deduction receipts
      </div>
      {Deduction.map((d, idx) => (
        <div
          className={`py-4 flex items-center ${
            idx % 2 ? "bg-blue-50" : "bg-white"
          }`}
          key={idx}
        >
          <span className="mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="36px"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span>{d}</span>
        </div>
      ))}
    </SectionContainer>
    <SectionContainer title="Hours of Operation" center={true} id="hours">
      <div className="grid grid-cols-2 max-w-full mx-auto sm:max-w-lg shadow-2xl">
        <span className="text-center py-2 rounded-tl-lg text-lg font-bold bg-indigo-400 text-white">
          Date
        </span>
        <span className="text-center py-2 rounded-tr-lg text-lg font-bold bg-indigo-400 text-white">
          Hours
        </span>
        {Hours.map((hour, idx) => (
          <React.Fragment key={idx}>
            <span
              className={`text-center p-2 rounded-tl text-sm sm:text-base font-normal ${
                idx % 2 && "bg-blue-50"
              }`}
            >
              {hour.date}
            </span>
            <span
              className={`text-center p-2 rounded-tr text-sm sm:text-base font-normal ${
                idx % 2 && "bg-blue-50"
              }`}
            >
              {hour.hours}
            </span>
          </React.Fragment>
        ))}
      </div>
    </SectionContainer>
  </Layout>
)

export default IndexPage
