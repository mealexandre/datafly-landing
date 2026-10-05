import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/80 transition-all">
      {/* h-24 შევცვალეთ py-4 sm:py-6-ით, რომ ჰედერმა ლოგოს ზომასთან ერთად მოიმატოს */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center justify-between">
        
        {/* ლოგო - მკვეთრად გაზრდილი ზომით */}
        <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
          <Image
            src="/logo.png"
            alt="DataFly Logo"
            width={400}
            height={120}
            /* ზომას ახლა სიგანით ვაკონტროლებთ: მობილურზე w-48, დიდ ეკრანზე w-72 */
            className="w-48 sm:w-56 lg:w-72 h-auto object-contain"
            priority
          />
        </Link>

        {/* მენიუს ლინკები */}
        <nav className="hidden md:flex items-center gap-8 text-base font-semibold text-text-muted">
          <Link 
            href="#services" 
            className="hover:text-tech-blue transition-colors duration-200"
          >
            Services
          </Link>
          <Link 
            href="#use-cases" 
            className="hover:text-agro-green transition-colors duration-200"
          >
            Use Cases
          </Link>
          <Link 
            href="#about" 
            className="hover:text-tech-blue transition-colors duration-200"
          >
            About
          </Link>
          <Link 
            href="#contact" 
            className="hover:text-agro-green transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>

        {/* Get in Touch ღილაკი */}
        <div className="flex items-center">
          <Link
            href="#contact"
            className="bg-tech-blue hover:bg-tech-blue-hover text-white px-6 py-2.5 rounded-lg font-semibold shadow-sm hover:shadow transition-all duration-200"
          >
            Get in Touch
          </Link>
        </div>

      </div>
    </header>
  );
}