import { PageProps, navigate } from "gatsby"
import React, { useState } from "react"
import Layout from "../../components/layout"
import SectionContainer from "../../components/sectionContainer"
import SEO from "../../components/seo"
import { encode } from "../../util/util"

const VolunteerPage: React.FC<PageProps> = () => {
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
        "form-name": "volunteer",
        ...message,
      }),
    })
      .then(() => navigate("/volunteer/submitted"))
      .catch(error => alert(error))
  }

  return (
    <Layout>
      <SEO title="Volunteer" />
      <SectionContainer title="Volunteer With Us" center={true}>
        <div className="max-w-xl mx-auto">
          <div className="p-4">
            As a volunteer, you can file and complete taxes for free, by
            videoconference or by phone. If you’re interested in participating,
            please fill out the form below, and we will contact you about the
            next step.
          </div>
          <form
            name="volunteer"
            method="post"
            action="/volunteer/submitted/"
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
                Message (A little bit about you)
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

export default VolunteerPage
