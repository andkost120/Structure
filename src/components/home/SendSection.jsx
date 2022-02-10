import React, { useState } from "react"
import PhoneInput from "react-phone-number-input"

const SendSection = ({ data }) => {
  const [phone, setPhone] = useState()
  return (
    <section className="send-section">
      <div className="send-link">
        <h1>{data.title}</h1>
        <p className="body">{data.body}</p>
        <PhoneInput international value={phone} onChange={setPhone} />
      </div>
      <img className="phone-img" src={data.img} alt="phone" />
    </section>
  )
}

export default SendSection
