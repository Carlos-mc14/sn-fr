import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="w-full bg-sanarte-green-dark text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center mb-12">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-display mb-6 relative inline-block">
              <span className="relative z-10">Ubicación</span>
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-sanarte-beige/30 -mb-1"></span>
            </h3>
            <p className="text-sanarte-beige font-light">Calle Chinchón 855, San Isidro, Lima, Provincia De Lima</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-lg font-display mb-6 relative inline-block">
              <span className="relative z-10">Contacto</span>
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-sanarte-beige/30 -mb-1"></span>
            </h3>
            <p className="text-sanarte-beige flex items-center justify-center mb-3 font-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 opacity-80"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              955 329 677
            </p>
            <p className="text-sanarte-beige flex items-center justify-center font-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 opacity-80"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              recepcion@sanarte.com.pe
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-lg font-display mb-6 relative inline-block">
              <span className="relative z-10">Horarios de Atención</span>
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-sanarte-beige/30 -mb-1"></span>
            </h3>
            <p className="text-sanarte-beige font-light">Lun a Vie: 08:00 am - 08:00 pm</p>
            <p className="text-sanarte-beige font-light">Sab: 09:00 am - 06:00 pm</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-lg font-display mb-6 relative inline-block">
              <span className="relative z-10">Nuestras redes sociales</span>
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-sanarte-beige/30 -mb-1"></span>
            </h3>
            <div className="flex justify-center space-x-6">
              <Link
                href="#"
                className="hover:text-sanarte-beige transition-colors duration-300 transform hover:scale-110"
              >
                <Image
                  src="/redes/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="brightness-0 invert"
                />
              </Link>
              <Link
                href="#"
                className="hover:text-sanarte-beige transition-colors duration-300 transform hover:scale-110"
              >
                <Image
                  src="/redes/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="brightness-0 invert"
                />
              </Link>
              <Link
                href="#"
                className="hover:text-sanarte-beige transition-colors duration-300 transform hover:scale-110"
              >
                <Image
                  src="/redes/whatsapp.svg"
                  alt="Whatsapp"
                  width={24}
                  height={24}
                  className="brightness-0 invert"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center text-sanarte-beige/60 border-t border-white/10 pt-6 text-xs tracking-wide">
          <p>Copyright © {new Date().getFullYear()} | Sanarte</p>
        </div>
      </div>
    </footer>
  )
}

