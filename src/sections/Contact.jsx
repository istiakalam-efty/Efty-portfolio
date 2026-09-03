import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, MessageSquare } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import Button from "../components/Button";
import SocialLinks from "../components/SocialLinks";

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Full name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      errors.message = "Message cannot be empty";
    } else if (formData.message.trim().length < 15) {
      errors.message = "Message must be at least 15 characters long";
    }
    return errors;
  };

  const errors = validate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    });

    const currentErrors = validate();
    if (Object.keys(currentErrors).length > 0) {
      setErrorMessage("Please correct the highlighted fields before submitting.");
      return;
    }

    setErrorMessage("");
    // Fully client-side interaction: shows verified confirmation without fake backend claim
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-sky-600 dark:text-sky-400 text-xs font-mono mb-2 border border-sky-500/20 shadow-xs">
            <MessageSquare size={13} />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Let's Connect
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Have a project, opportunity, or collaboration in mind? Feel free to reach out via the form below or connect through official social profiles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl glass-card p-6 sm:p-7 shadow-xl space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                You can reach me directly through my academic and personal channels or connect on professional networks.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                    <Mail size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500">Email</div>
                    <a href={`mailto:${personal.email}`} className="font-mono font-semibold hover:text-sky-500 transition-colors">
                      {personal.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                    <Phone size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500">Phone</div>
                    <a href={`tel:${personal.phone}`} className="font-mono font-semibold hover:text-indigo-500 transition-colors">
                      {personal.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500">Location</div>
                    <span className="font-mono font-semibold">{personal.location}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/70">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                  Verified Social Channels
                </div>
                <SocialLinks iconSize={18} showLabels={true} />
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-card p-6 sm:p-8 shadow-xl">
              
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-500 mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Message Prepared
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-sky-600 dark:text-sky-400">{formData.name}</span>. Your message regarding <span className="font-semibold">"{formData.subject}"</span> has been formatted.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                    <Button
                      variant="primary"
                      size="sm"
                      href={`mailto:${personal.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message + "\n\nFrom: " + formData.name + " (" + formData.email + ")")}`}
                    >
                      <Mail size={15} />
                      <span>Open in Mail Client</span>
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                        setTouched({ name: false, email: false, subject: false, message: false });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="John Doe"
                        aria-invalid={touched.name && Boolean(errors.name)}
                        aria-describedby={touched.name && errors.name ? "name-error" : undefined}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white/70 dark:bg-slate-900/60 backdrop-blur-xs text-slate-900 dark:text-white transition-all focus:outline-hidden focus:ring-2 focus:ring-sky-500/50 ${
                          touched.name && errors.name
                            ? "border-rose-500 dark:border-rose-500 focus:border-rose-500"
                            : "border-slate-300/80 dark:border-slate-700/80 focus:border-sky-500"
                        }`}
                      />
                      {touched.name && errors.name && (
                        <p id="name-error" className="text-rose-600 dark:text-rose-400 text-xs mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="john@example.com"
                        aria-invalid={touched.email && Boolean(errors.email)}
                        aria-describedby={touched.email && errors.email ? "email-error" : undefined}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white/70 dark:bg-slate-900/60 backdrop-blur-xs text-slate-900 dark:text-white transition-all focus:outline-hidden focus:ring-2 focus:ring-sky-500/50 ${
                          touched.email && errors.email
                            ? "border-rose-500 dark:border-rose-500 focus:border-rose-500"
                            : "border-slate-300/80 dark:border-slate-700/80 focus:border-sky-500"
                        }`}
                      />
                      {touched.email && errors.email && (
                        <p id="email-error" className="text-rose-600 dark:text-rose-400 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Project Inquiry / Academic Collaboration"
                      aria-invalid={touched.subject && Boolean(errors.subject)}
                      aria-describedby={touched.subject && errors.subject ? "subject-error" : undefined}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white/70 dark:bg-slate-900/60 backdrop-blur-xs text-slate-900 dark:text-white transition-all focus:outline-hidden focus:ring-2 focus:ring-sky-500/50 ${
                        touched.subject && errors.subject
                          ? "border-rose-500 dark:border-rose-500 focus:border-rose-500"
                          : "border-slate-300/80 dark:border-slate-700/80 focus:border-sky-500"
                      }`}
                    />
                    {touched.subject && errors.subject && (
                      <p id="subject-error" className="text-rose-600 dark:text-rose-400 text-xs mt-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Message * (minimum 15 characters)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Write your message or inquiry here..."
                      aria-invalid={touched.message && Boolean(errors.message)}
                      aria-describedby={touched.message && errors.message ? "message-error" : undefined}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white/70 dark:bg-slate-900/60 backdrop-blur-xs text-slate-900 dark:text-white transition-all focus:outline-hidden focus:ring-2 focus:ring-sky-500/50 resize-y ${
                        touched.message && errors.message
                          ? "border-rose-500 dark:border-rose-500 focus:border-rose-500"
                          : "border-slate-300/80 dark:border-slate-700/80 focus:border-sky-500"
                      }`}
                    />
                    {touched.message && errors.message && (
                      <p id="message-error" className="text-rose-600 dark:text-rose-400 text-xs mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Form Error Banner */}
                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-400 text-xs flex items-center gap-2">
                      <AlertCircle size={15} />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      className="w-full sm:w-auto"
                    >
                      <Send size={15} />
                      <span>Send Message</span>
                    </Button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
