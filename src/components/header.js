import * as React from "react"
import PropTypes from "prop-types"
import { Link, useI18next } from "gatsby-plugin-react-i18next"

export default function Header(props) {
  const { siteTitle } = props
  const { languages, changeLanguage } = useI18next()
  return (
    <header
      style={{
        background: `rgb(20, 64, 121)`,
      }}
    >
      <div
        style={{
          padding: `1.45rem 1.0875rem`,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <ul style={{ listStyleType: "none" }}>
          {languages.map(lng => (
            <li
              key={lng}
              style={{ listStyle: "none", display: "inline", margin: "0 5px" }}
            >
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="#"
                onClick={e => {
                  e.preventDefault()
                  changeLanguage(lng)
                }}
              >
                {lng}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
