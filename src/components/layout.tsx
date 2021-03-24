import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

interface LayoutProp {}

const Layout: React.FC<LayoutProp> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="flex flex-col min-h-screen">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
