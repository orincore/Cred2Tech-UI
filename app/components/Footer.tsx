import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-4 sm:py-6 border-t border-[#003f7d]/10 bg-[#fcf9f8]">
      <div className="w-full px-6 sm:px-10 lg:px-16 grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
        {/* Company Info */}
        <div className="col-span-2 sm:col-span-2">
          <span className="text-base font-bold text-[#003f7d] block">Cred2Tech</span>
          <span className="text-xs text-[#006d3f] font-(family-name:--font-jb-mono) block mb-1">Credit, Simplified.</span>
          <div className="space-y-0 text-xs text-[#443b54]/80 leading-snug">
            <p>Sunby Credtech Pvt. Ltd.</p>
            <p>A1103, AModa Valmark, Bengaluru, India</p>
          </div>
          <div className="mt-1 space-y-0 text-xs">
            <a href="mailto:contact@cred2tech.com" className="block text-[#003f7d] hover:underline">contact@cred2tech.com</a>
            <div className="flex items-center gap-1 text-[#443b54]/80">
              <a href="tel:+918867522242" className="hover:text-[#003f7d] transition-colors">8867522242</a>
              <span>/</span>
              <a href="tel:+919886401608" className="hover:text-[#003f7d] transition-colors">9886401608</a>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="space-y-1">
          <h4 className="font-bold text-[#003f7d] text-xs">Products</h4>
          <ul className="space-y-0.5 text-xs text-[#443b54]/70">
            <li><Link href="/dsa" className="hover:text-[#003f7d] transition-colors hover:underline decoration-[#1dff9b] underline-offset-4">For DSAs</Link></li>
            <li><Link href="/msme" className="hover:text-[#003f7d] transition-colors hover:underline decoration-[#1dff9b] underline-offset-4">For MSMEs</Link></li>
            <li><span className="text-[#443b54]/50">Business Loans (Soon)</span></li>
            <li><span className="text-[#443b54]/50">Govt Schemes (Soon)</span></li>
          </ul>
        </div>

        {/* Company */}
        <div className="space-y-1">
          <h4 className="font-bold text-[#003f7d] text-xs">Company</h4>
          <ul className="space-y-0.5 text-xs text-[#443b54]/70">
            <li><Link href="/about" className="hover:text-[#003f7d] transition-colors hover:underline decoration-[#1dff9b] underline-offset-4">About Us</Link></li>
            <li><Link href="/about#story" className="hover:text-[#003f7d] transition-colors hover:underline decoration-[#1dff9b] underline-offset-4">Our Story</Link></li>
            <li><span className="text-[#443b54]/50">Blog</span></li>
            <li><span className="text-[#443b54]/50">Careers</span></li>
            <li><Link href="/contact" className="hover:text-[#003f7d] transition-colors hover:underline decoration-[#1dff9b] underline-offset-4">Contact</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="space-y-1">
          <h4 className="font-bold text-[#003f7d] text-xs">Legal</h4>
          <ul className="space-y-0.5 text-xs text-[#443b54]/70">
            <li><a href="#" className="hover:text-[#003f7d] transition-colors hover:underline decoration-[#1dff9b] underline-offset-4">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#003f7d] transition-colors hover:underline decoration-[#1dff9b] underline-offset-4">Terms of Use</a></li>
            <li><a href="#" className="hover:text-[#003f7d] transition-colors hover:underline decoration-[#1dff9b] underline-offset-4">Data Processing</a></li>
            <li><a href="#" className="hover:text-[#003f7d] transition-colors hover:underline decoration-[#1dff9b] underline-offset-4">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="w-full px-6 sm:px-10 lg:px-16 mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-[#003f7d]/5">
        <p className="text-[11px] text-[#443b54] text-center">
          © {currentYear} Sunby Credtech Private Limited. All rights reserved. | CIN: [To be added] | Built in Bengaluru 🇮🇳
        </p>
      </div>
    </footer>
  );
}
