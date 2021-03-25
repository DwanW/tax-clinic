import { Link, PageProps } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import SectionContainer from "../components/sectionContainer"
import SEO from "../components/seo"

const NotFoundPage: React.FC<PageProps> = () => (
  <Layout>
    <SEO title="404: Not found" />
    <SectionContainer title="404: Not Found" center={true}>
      <div className="text-center">
        You just hit a route that doesn&#39;t exist. Click{" "}
        <Link to="/">
          <span className="text-indigo-600 font-bold hover:text-indigo-800">Here</span>
        </Link>{" "}
        to return to the main page
      </div>
    </SectionContainer>
  </Layout>
)

export default NotFoundPage
