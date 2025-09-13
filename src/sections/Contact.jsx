import { useRef, useState } from "react";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [emailjsResponse, setEmailjsResponse] = useState({
    type: null,
    msg: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    await emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then((res) => {
        if (res?.text && res?.text?.toLowerCase() === "ok") {
          setEmailjsResponse({
            type: "success",
            msg: "Your message has been sent successfully!",
          });
          formRef.current.reset();
          setFormData({});
        }
      })
      .catch((err) => {
        if (err) {
          setEmailjsResponse({
            type: "error",
            msg: "There was an error sending your message. Please try again later.",
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get In Touch With Me"
          sub="📩 Contact Information"
        />

        <div className="mt-16 grid-12-cols">
          {/* Contact Us Form */}
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
                ref={formRef}
              >
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData?.name || ""}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData?.email || ""}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    value={formData?.message || ""}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {emailjsResponse.type &&
                  (emailjsResponse.type === "success" ? (
                    <p className="text-green-500 text-center">
                      ✅ {emailjsResponse.msg}
                    </p>
                  ) : (
                    emailjsResponse.type === "error" && (
                      <p className="text-red-500 text-center">
                        ❗{emailjsResponse.msg}
                      </p>
                    )
                  ))}

                <button type="submit" disabled={loading}>
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          <div className="xl:col-span-7 min-h-96">
            <div className="w-full h-full bg-[#cd7c26] hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
