import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function ConnectTab() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true);

    // Reset form
    setFormData({ name: "", email: "", message: "" });

    // Auto-close after 3s
    setTimeout(() => setShowPopup(false), 3000);
  };

  // Check if all inputs are filled
  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.message.trim() !== "";

  return (
    <section className="mt-16 md:mt-24 px-6 md:px-20 relative">
      {/* Header */}
      <div className="flex justify-center">
        <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-[#282732] text-xs md:text-sm text-[#FFFFFF]">
          💬 Have questions or ideas? Let’s talk! 🚀
        </div>
      </div>

      <p className="text-[#FFFFFF] text-2xl md:text-4xl font-bold text-center mt-6">
        Get in Touch – Let’s Connect
      </p>

      {/* Content */}
      <div className="bg-[#0E0E10] px-6 md:px-20 py-16 mt-10 rounded-2xl">
        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          {/* Left: Form */}
          <div className="flex-1 w-full flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 h-full">
              {/* Name */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  className="w-full px-4 py-3 bg-[#2D2D38] text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#62E0FF]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="What's your email address?"
                  className="w-full px-4 py-3 bg-[#2D2D38] text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#62E0FF]"
                />
              </div>

              {/* Message */}
              <div className="flex-1">
                <label className="block text-sm text-gray-400 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  rows={5}
                  className="w-full px-4 py-3 bg-[#2D2D38] text-white h-full min-h-[160px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#62E0FF]"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={!isFormValid}
                className={`cursor-pointer mt-10 flex items-center justify-center gap-2 font-semibold py-3 px-6 rounded-full transition 
                  ${
                    isFormValid
                      ? "bg-gradient-to-r from-[#62E0FF] via-[#52AEFF] to-[#FD5C79] text-white hover:opacity-90"
                      : "bg-gray-600 text-gray-400 cursor-not-allowed"
                  }`}
              >
                Send Message <FaArrowRight />
              </button>
            </form>
          </div>

          {/* Right: Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="./tableset.png"
              alt="Contact illustration"
              className="w-full h-full object-cover rounded-[20px] shadow-lg border border-[#1C1C21]"
            />
          </div>
        </div>
      </div>

      {/* ✅ Popup with Blur */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md z-50">
          <div className="bg-[#1C1C21]/90 text-white px-10 py-6 rounded-2xl shadow-xl border border-[#2D2D38] animate-popIn">
            <p className="text-lg font-semibold">🚀 Message Sent!</p>
            <p className="text-sm text-gray-400 mt-1">I’ll get back to you soon.</p>
          </div>
        </div>
      )}
    </section>
  );
}
