import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        
        {/* მარცხნივ: ლოგო */}
        <Link href="/" className="flex items-center hover:opacity-90 transition-opacity shrink-0">
          <Image
            src="/logo.png"
            alt="DataFly Logo"
            width={160}
            height={48}
            className="h-10 sm:h-11 w-auto object-contain"
            priority
          />
        </Link>

        {/* მარჯვნივ: მენიუს ლინკები და ღილაკი ერთად */}
        <div className="flex items-center gap-8 lg:gap-10">
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-slate-600">
            <Link 
              href="#services" 
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Services
            </Link>
            <Link 
              href="#use-cases" 
              className="hover:text-emerald-600 transition-colors duration-200"
            >
              Use Cases
            </Link>
            <Link 
              href="#about" 
              className="hover:text-blue-600 transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              href="#contact" 
              className="hover:text-emerald-600 transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          <Link
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-sm hover:shadow transition-all duration-200 shrink-0"
          >
            Get in Touch
          </Link>
        </div>

      </div>
    </header>
  );
}