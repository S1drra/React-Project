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

  const field =
    "w-full rounded-xl border border-white/25 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-cyan-500 focus:outline-none";

  return (
    <section id="contact" className="bg-gray-900 py-20 text-white md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 className="display text-5xl md:text-6xl">Get in touch</h2>
          <p className="mt-5 max-w-sm text-lg text-white/75">
            Questions about sizing, a pair you saw, or your order? Send us a
            message and we'll get back to you.
          </p>
        </div>

        {submitted ? (
          <p className="pop self-start rounded-2xl bg-cyan-500 p-6 text-lg font-bold text-gray-900">
            Thanks, {formData.name}! We'll get back to you soon.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            <input
              type="text"
              name="name"
              aria-label="Your name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className={field}
            />
            <input
              type="email"
              name="email"
              aria-label="Your email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
              className={field}
            />
            <textarea
              name="message"
              aria-label="Your message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className={`${field} sm:col-span-2`}
            />
            <button
              type="submit"
              className="rounded-full bg-cyan-500 py-3.5 font-bold text-gray-900 transition hover:bg-white sm:col-span-2"
            >
              Send message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default ContactForm;
