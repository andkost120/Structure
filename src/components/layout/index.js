import * as React from "react"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
