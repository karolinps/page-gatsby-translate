/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { BackTop } from "antd"
import { UpCircleOutlined } from "@ant-design/icons"
import Header from "./header"
import "./layout.css"
import { useTranslation } from "gatsby-plugin-react-i18next"

const style = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "gray",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
}
const Layout = ({ children }) => {
  const { t } = useTranslation()
  return (
    <>
      <Header siteTitle={t("TitlePage") || `Title`} />
      <div>
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()},&nbsp;
          <a
            href="https://karolinps.github.io/my-portfolio"
            style={{ color: "white" }}
          >
            {" "}
            By Karolin
          </a>
        </footer>
        <BackTop>
          <div style={style}>
            <UpCircleOutlined />
          </div>
        </BackTop>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
