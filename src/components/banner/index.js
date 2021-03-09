import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"

export default function Banner() {
  const { t } = useTranslation()

  return (
    <div style={{ position: "relative" }}>
      <img
        style={{ width: "100%", opacity: ".9", height: 600 }}
        alt="banner"
        src={
          "https://cliquestudios.com/wp-content/uploads/2019/11/website-mockup-vs-wireframe.png"
        }
      />
      <h1
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          color: "white",
          fontWeight: "bold",
          border: "3px solid #f1f1f1",
          zIndex: 2,
          width: "80%",
          padding: "20px",
          textAlign: "center",
        }}
      >
        {" "}
        {t("Welcome")}
      </h1>
    </div>
  )
}
