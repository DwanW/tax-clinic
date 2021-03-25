import { PageProps, navigate } from "gatsby"
import React, { useState } from "react"
import Layout from "../../components/layout"
import SectionContainer from "../../components/sectionContainer"
import SEO from "../../components/seo"
import { encode } from "../../util/util"

const ContactPage: React.FC<PageProps> = () => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage({ ...message, [e.target.name]: e.target.value })
  }

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage({ ...message, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...message,
      }),
    })
      .then(() => navigate("/contact/submitted"))
      .catch(error => alert(error))
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <SectionContainer title="Contact Us" center={true}>
        <div className="max-w-xl mx-auto">
          <div className="p-4">
            Do you need help with your tax return? If you have a modest income
            and a simple tax situation, volunteers at a free tax clinic may be
            able to complete your tax return for you. Fill out the form below to
            get started
          </div>
          <form
            name="contact"
            method="post"
            action="/contact/submitted/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="shadow-xl p-4"
          >
            <div className="px-4 py-2">
              <label className="text-lg font-semibold" htmlFor={"name"}>
                Name
              </label>
              <div className="pt-2">
                <input
                  className="text-base w-full border border-gray-400 p-2 rounded focus:outline-none focus:ring focus:border-indigo-200"
                  type={"text"}
                  name={"name"}
                  onChange={handleInputChange}
                  id={"name"}
                  required={true}
                />
              </div>
            </div>
            <div className="px-4 py-2">
              <label className="text-lg font-semibold" htmlFor={"email"}>
                Email
              </label>
              <div className="pt-2">
                <input
                  className="text-base w-full border border-gray-400 p-2 rounded focus:outline-none focus:ring focus:border-indigo-200"
                  type={"email"}
                  name={"email"}
                  onChange={handleInputChange}
                  id={"email"}
                  required={true}
                />
              </div>
            </div>
            <div className="px-4 py-2">
              <label className="text-lg font-semibold" htmlFor={"message"}>
                Message
              </label>
              <div className="pt-2">
                <textarea
                  className="text-base w-full border border-gray-400 p-2 rounded focus:outline-none focus:ring focus:border-indigo-200 h-48"
                  name={"message"}
                  onChange={handleTextAreaChange}
                  id={"message"}
                  required={true}
                />
              </div>
            </div>
            <div className="px-4 py-2">
              <button
                className="block ml-auto text-xl font-semibold bg-indigo-400 text-white py-3 px-8 rounded-xl hover:bg-indigo-600"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </SectionContainer>
    </Layout>
  )
}

export default ContactPage
