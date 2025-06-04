import { useState } from "react";
import { Send, Mail, User, Target, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { motion } from "@/lib/motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Template parameters for EmailJS
    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        // console.log("Email sent successfully:", response);
        setSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            fullName: "",
            email: "",
            subject: "",
            message: "",
          });
        }, 3000);
      })
      .catch((error) => {
        // console.error("Error sending email:", error);
        alert("Failed to send message. Please try again later.");
      });
  };

  const inputs = [
    {
      icon: User,
      name: "fullName",
      placeholder: "Full Name",
      required: true,
      value: formData.fullName,
      onChange: handleChange,
    },
    {
      icon: Mail,
      name: "email",
      type: "email",
      placeholder: "Email Address",
      required: true,
      value: formData.email,
      onChange: handleChange,
    },
    {
      icon: Target,
      name: "subject",
      placeholder: "Email Subject",
      required: true,
      value: formData.subject,
      onChange: handleChange,
    },
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
        <div className="bg-white p-12 rounded-2xl shadow-2xl text-center max-w-md">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="text-green-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h2>
          <p className="text-gray-600">We'll get back to you within 24 hours.</p>
        </div>
      </div>
    );
  }

  return (
    <section
      id="contact-us"
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 py-12"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.25 + 0.25 }}
        variants={{
          hidden: { y: "20%", opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        viewport={{ once: true }}
        className=" w-full max-w-2xl"
      >
        <div className="bg-white/90 backdrop-blur-sm px-4 py-8 md:p-8 rounded-2xl shadow-2xl border border-white/20">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Ask Us A Question
            </div>
            <h1 className="text-2xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary/70 to-secondary/70 bg-clip-text text-transparent">
              We're Here To Help You
            </h1>
            <p className="text-gray-600 text-lg">Share your thoughts and Help us improve Muslifie</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {inputs.map((input, index) => (
              <div key={input.name} className="relative group">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors z-10">
                  <input.icon size={18} />
                </div>
                <Input
                  type={input.type || "text"}
                  name={input.name}
                  placeholder={input.placeholder}
                  value={input.value}
                  onChange={input.onChange}
                  required={input.required}
                  className="pl-12 pr-8 py-6 text-base bg-gray-50 border-2 border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 hover:border-gray-300"
                />
                {input.required && (
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-400 text-lg">*</span>
                )}
              </div>
            ))}
            {/* Message */}
            <div className="relative group">
              <div className="absolute left-3 top-4 text-gray-400 group-focus-within:text-blue-500 transition-colors z-10">
                <MessageSquare size={18} />
              </div>
              <Textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                maxLength={500}
                required
                rows={5}
                className="pl-12 pr-16 py-3 text-base bg-gray-50 border-2 border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 hover:border-gray-300 resize-none"
              />
              <span className="absolute right-3 top-4 text-red-400 text-lg">*</span>
              <div className="absolute bottom-3 right-3 text-sm text-gray-400 bg-white px-1 rounded">
                {formData.message.length}/500
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary/70 to-secondary/70 hover:from-primary/80 hover:to-secondary/80 text-white font-semibold py-6 px-6 text-base rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Send className="w-5 h-5 mr-3" />
              Send Message
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>We typically respond within 24 hours • Your information is secure and confidential</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
