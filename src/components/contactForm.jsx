import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-gray-900 py-16 text-slate-200">
      <div className="mx-auto max-w-xl px-6">
        <h2 className="text-center text-3xl font-bold">Get in Touch</h2>

        {submitted ? (
          <p className="mt-8 rounded-lg bg-cyan-500 p-4 text-center font-semibold text-gray-900">
            Thanks, {formData.name}! We'll get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-cyan-500 focus:outline-none focus:ring focus:ring-cyan-200"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-cyan-500 focus:outline-none focus:ring focus:ring-cyan-200"
            />
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-cyan-500 focus:outline-none focus:ring focus:ring-cyan-200 sm:col-span-2"
            />
            <button
              type="submit"
              className="rounded-lg bg-cyan-500 py-2 font-semibold text-gray-900 hover:bg-cyan-400 sm:col-span-2"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default ContactForm;