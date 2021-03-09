import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Row, Col, Card, Tag } from "antd"
export default function About() {
  const { t } = useTranslation()

  const data = [
    {
      title: "HTML",
      body: t("HTML"),
      tag: t("basic"),
    },
    {
      title: "CSS",
      body: t("CSS"),
      tag: t("basic"),
    },
    {
      title: "JavaScript",
      body: t("JavaScript"),
      tag: t("code"),
    },
    {
      title: "Web APIs",
      body: t("Web APIs"),
      tag: t("code"),
    },
    {
      title: "SVG",
      body: t("SVG"),
      tag: t("graphics"),
    },
    {
      title: "WebGL",
      body: t("WebGL"),
      tag: t("graphics"),
    },
  ]
  return (
    <div style={{ margin: "3em auto" }}>
      <h1 style={{ textAlign: "center" }}>{t("titleTechnologiesWeb")}</h1>
      <p style={{ textAlign: "center" }}>{t("descriptionTechnologiesWeb")}</p>
      <Row style={{ padding: "25px" }} gutter={16}>
        {data.map((el, i) => {
          return (
            <Col sm={8} lg={6} xs={24} key={i}>
              <Card
                title={el.title}
                bordered={false}
                headStyle={{ background: "rgb(20, 64, 121) ", color: "white" }}
              >
                <Tag color="#108ee9">{el.tag}</Tag>
                <p style={{ margin: "5px auto" }}>{el.body}</p>
              </Card>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}
