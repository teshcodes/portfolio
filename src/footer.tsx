export default function Footer() {
  return (
    <footer className="px-6 md:px-20 py-10 mt-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Blog link */}
        <div className="text-[#D9ECFF] font-medium text-md">
          Visit my blog
        </div>

        {/* Middle: Social Icons */}
        <div className="flex gap-4">
          {/* Instagram */}
          <div className="w-12 h-12 flex items-center justify-center">
            <img
              src="/instagram.png"
              alt="Instagram"
              className="w-10 h-10 object-contain"
            />
          </div>

          {/* Facebook */}
          <div className="w-[47px] h-[48px] flex items-center justify-center">
            <img
              src="/facebook.png"
              alt="Facebook"
              className="w-10 h-10 object-contain"
            />
          </div>

          {/* X (Twitter) */}
          <div className="w-10 h-10 flex items-center justify-center text-[#FFFFFF] font-bold text-lg">
            X
          </div>

          {/* LinkedIn */}
          <div className="w-12 h-12 flex items-center justify-center">
            <img
              src="/linkdin.png"
              alt="LinkedIn"
              className="w-10 h-10 object-contain"
            />
          </div>
        </div>

        {/* Right: Copyright */}
        <div className="text-[#D9ECFF] text-sm text-center md:text-right">
          © 2025 Teslim Akano. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
