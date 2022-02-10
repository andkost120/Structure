import { Link } from "gatsby"
import React from "react"

const ContentBox = ({ data, type }) => {
  return (
    <div
      className={`content-wrapper ${
        type === "interaction" ? "interaction" : ""
      } ${type === "world-assets" ? "world" : ""}`}
    >
      <h2>{data.title}</h2>
      <p className="body1">{data.content}</p>
      <Link to={`/${data.uid}`} className="btn-primary">
        {data.btn}
      </Link>
    </div>
  )
}

export default ContentBox
