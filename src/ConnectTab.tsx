import { FaArrowRight } from "react-icons/fa";

export default function ConnectTab() {
  return (
    <section className="mt-16 md:mt-24 px-6 md:px-20">
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
            <form className="flex flex-col gap-5 h-full">
              {/* Name */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="What's your good name?"
                  className="w-full px-4 py-3 bg-[#2D2D38] text-white rounded-t-2xl rounded-b-2xl focus:outline-none focus:ring-2 focus:ring-[#62E0FF]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="What's your email address?"
                  className="w-full px-4 py-3 bg-[#2D2D38] text-white rounded-t-2xl rounded-b-2xl focus:outline-none focus:ring-2 focus:ring-[#62E0FF]"
                />
              </div>

              {/* Message */}
              <div className="flex-1">
                <label className="block text-sm text-gray-400 mb-2">
                  Your Message
                </label>
                <textarea
                  placeholder="How can i help you?"
                  rows={5}
                  className="w-full px-4 py-3 bg-[#2D2D38] text-white h-full min-h-[160px] rounded-t-2xl rounded-b-2xl focus:outline-none focus:ring-2 focus:ring-[#62E0FF]"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="mt-10 flex items-center justify-center gap-2 bg-gradient-to-r from-[#62E0FF] via-[#52AEFF] to-[#FD5C79] text-white font-semibold py-3 px-6 rounded-full hover:opacity-90 transition"
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
              className="w-full h-full object-cover rounded-t-[20px] rounded-b-[20px] shadow-lg border border-[#1C1C21]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
