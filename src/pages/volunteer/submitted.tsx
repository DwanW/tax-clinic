import { Link, PageProps } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import SectionContainer from "../../components/sectionContainer"

const Submitted: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SectionContainer title="Thank you for Contacting Us" center={true}>
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="green"
            width="90px"
            className="m-auto mb-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          We have received your message! Thank you for your interest in helping
          the community, we will be in touch with you shortly.
          <div>
            To return to the main page, Click{" "}
            <Link to="/">
              <span className="text-indigo-600 font-bold hover:text-indigo-800">
                Here
              </span>
            </Link>{" "}
          </div>
        </div>
      </SectionContainer>
    </Layout>
  )
}

export default Submitted
