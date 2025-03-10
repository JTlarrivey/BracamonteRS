import { Link } from "react-router-dom";
import { Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1E2841] py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <div className="flex justify-center items-center gap-16">
            <Link
              to="/about"
              className="text-white hover:text-gray-300 transition-colors font-semibold"
            >
              Quienes Somos
            </Link>

            <a
              href="https://www.instagram.com/bracamontepropiedadeslp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors flex items-center gap-2"
            >
              <Instagram className="w-6 h-6" />
              <span className="hidden md:inline">Instagram</span>
            </a>

            <a
              href="https://wa.me/5492215908506"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>
          </div>

          <div className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Bracamonte Propiedades. Todos los
            derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
