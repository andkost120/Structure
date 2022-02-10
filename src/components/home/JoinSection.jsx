import React, { useState } from "react"
import PhoneInput from "react-phone-number-input"

const JoinSection = ({ data, type }) => {
  const [phone, setPhone] = useState()
  return (
    <section className={`join-section ${type === "hero" ? " hero" : ""}`}>
      <div className="left-part">
        <h1>{data.title}</h1>
        <p className="body1">{data.body}</p>
        <p className="kicker-text">Ready to start trading?</p>
        <div className="send-link">
          <PhoneInput
            international
            value={phone}
            onChange={setPhone}
            placeholder="Enter your phone number"
          />
          <button className="btn-primary">Send link</button>
        </div>
      </div>
      <img className="phone-img" src={data.img} alt="phone" />
    </section>
  )
}

export default JoinSection
