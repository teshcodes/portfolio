import HeroContent from "./HeroContent";
import Projectsection from "./ProjectSection.tsx";
import TimelineSection from "./TimelineSection.tsx";
import BringToTheTable from "./BringToTheTable.tsx";
import Testimonials from "./Testimonials.tsx";
import ConnectTab from "./ConnectTab.tsx";
import Footer from "./footer.tsx";
import StatsSection from "./StatsSection.tsx";

export default function Hero() {
  return (
    <section className="bg-[#000000] text-white relative">
      {/* Background accents */}
      <img
        src="/bg-top-left.png"
        className="absolute top-0 left-0 w-20 md:w-40 opacity-30"
        alt=""
      />
      <img
        src="/bg-bottom-right.png"
        className="absolute bottom-0 right-0 w-20 md:w-40 opacity-30"
        alt=""
      />

      {/* Navbar */}
      <nav className="p-4 md:p-15">
        <div className="bg-[#1D1C22] flex flex-row justify-between items-center mx-3 md:mx-5 px-6 md:px-10 py-4 mt-4 rounded-xl gap-4">
          <div className="flex items-center gap-2">
            <img src="/mylogo.png" className="w-10 h-10 rounded-full" alt="logo" />
            <span className="font-bold">Teslim THC</span>
          </div>

          <div className="hidden md:flex gap-6 lg:gap-8 items-center cursor-pointer">
            <a href="#projects" className="text-[#D9ECFF] hover:text-white transition">Work</a>
            <a href="#skills" className="text-[#D9ECFF] hover:text-white transition">Skills</a>
            <a href="#experience" className="text-[#D9ECFF] hover:text-white transition">Experience</a>
            <a href="#testimonials" className="text-[#D9ECFF] hover:text-white transition">Testimonials</a>
          </div>

          <a href="#contact">
            <button className="text-black px-4 py-2 rounded-lg font-medium bg-gradient-to-b from-[#EBF3FA] to-[#DFEDFA] cursor-pointer">
              Contact me
            </button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="hero">
        <HeroContent />
      </div>

      {/* Stats Section */}
       <StatsSection />

      {/* Projects Section */}
      <div id="projects">
        <Projectsection />
      </div>

      {/* Logos Marquee */}
      <div id="logos" className="relative max-w-[1200px] mx-auto overflow-hidden px-4">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 md:w-48 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 md:w-48 bg-gradient-to-l from-black via-black/80 to-transparent"></div>

        <div className="flex gap-[30px] md:gap-[50px] font-sans animate-marquee whitespace-nowrap">
          <img src="/nvidia-logo.png" className="w-[100px] md:w-[140px] h-[24px] md:h-[32px]" alt="Nvidia" />
          <img src="/appwrite.png" className="w-[100px] md:w-[140px] h-[24px] md:h-[32px]" alt="Appwrite" />
          <img src="/adobe.png" className="w-[100px] md:w-[140px] h-[24px] md:h-[32px]" alt="Adobe" />
          <img src="/hostinger.png" className="w-[100px] md:w-[140px] h-[24px] md:h-[32px]" alt="Hostinger" />
          <img src="/docker.png" className="w-[100px] md:w-[140px] h-[24px] md:h-[32px]" alt="Docker" />

          {/* duplicate logos for smooth loop */}
          <img src="/nvidia-logo.png" className="w-[140px] h-[32px]" alt="Nvidia" />
          <img src="/appwrite.png" className="w-[140px] h-[32px]" alt="Appwrite" />
          <img src="/adobe.png" className="w-[140px] h-[32px]" alt="Adobe" />
          <img src="/hostinger.png" className="w-[140px] h-[32px]" alt="Hostinger" />
          <img src="/docker.png" className="w-[140px] h-[32px]" alt="Docker" />
          <img src="/nvidia-logo.png" className="w-[140px] h-[32px]" alt="Nvidia" />
          <img src="/appwrite.png" className="w-[140px] h-[32px]" alt="Appwrite" />
        </div>
      </div>

      {/* Features */}
      <div id="features" className="px-6 md:px-12 lg:px-20 mt-12 md:mt-20 flex flex-col md:flex-row gap-6">
        <div className="bg-[#1C1C21] flex-1 p-[24px] rounded-xl">
          <img src="/quality-icon.png" className="mb-2" />
          <p className="text-[#FFFFFF] mb-2 font-semibold">Quality Focus</p>
          <p className="text-[#D9ECFF] opacity-75 text-sm">
            Delivering high-quality results while maintaining attention to every detail.
          </p>
        </div>

        <div className="bg-[#1C1C21] flex-1 p-[24px] rounded-xl">
          <img src="/message-icon.png" className="mb-2" />
          <p className="text-[#FFFFFF] mb-2 font-semibold">Reliable Communication</p>
          <p className="text-[#D9ECFF] opacity-75 text-sm">
            Keeping you updated at every step to ensure transparency and clarity.
          </p>
        </div>

        <div className="bg-[#1C1C21] flex-1 p-[24px] rounded-xl">
          <img src="/time-icon.png" className="mb-2" />
          <p className="text-[#FFFFFF] mb-2 font-semibold">On-Time Delivery</p>
          <p className="text-[#D9ECFF] opacity-75 text-sm">
            Making sure projects are completed on schedule, with quality & attention to detail.
          </p>
        </div>
      </div>

      {/* Career Section */}
      <div id="work-experience"></div>
      <div id="experience" className="mt-12 md:mt-20 flex flex-col items-center">
        <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#282732]">
          <img src="/career-image.png" alt="career" className="w-6 h-6" />
          <p className="text-white text-sm font-sans">My Career Overview</p>
        </div>

        <p className="text-[#FFFFFF] text-2xl md:text-4xl font-bold text-center mt-6 md:mt-7">
          Professional Work Experience
        </p>
      </div>

      <TimelineSection />

      {/* Skills */}
      <BringToTheTable />

      {/* Testimonials */}
      <div id="testimonials">
        <Testimonials />
      </div>

      {/* Contact */}
      <div id="contact">
        <ConnectTab />
      </div>

      {/* Footer */}
      <div id="footer">
        <Footer />
      </div>
    </section>
  );
}
