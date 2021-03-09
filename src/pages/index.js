import * as React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner/index"
import TechnologiesWeb from "../components/technologiesWeb/index"
import { graphql } from "gatsby"

export default function IndexPage() {
  return (
    <Layout>
      <Banner />
      <TechnologiesWeb />
    </Layout>
  )
}

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
