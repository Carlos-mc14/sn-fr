import Image from "next/image"
import Link from "next/link"
import { MapPin } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full">
        <Image
          src="https://www.sanarte.com.pe/img/masajes-1.webp?height=600&width=1200"
          alt="Tratamiento de spa"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-end p-8 md:p-16">
          <div className="bg-black/40 backdrop-blur-sm p-8 max-w-md text-white rounded-sm mr-0 md:mr-10 border border-white/10">
            <h1 className="text-3xl font-display mb-6">Descubre Nuestros Servicios</h1>
            <ul className="space-y-4 font-light mb-8">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-sanarte-beige-dark rounded-full"></span>
                <span>MASAJES relajantes, curativos y más</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-sanarte-beige-dark rounded-full"></span>
                <span>TRATAMIENTOS faciales y corporales</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-sanarte-beige-dark rounded-full"></span>
                <span>TERAPIAS alternativas para cuidar tu bienestar</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-sanarte-beige-dark rounded-full"></span>
                <span>RITUALES y programas de cuidados únicos</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/servicios"
                className="text-center px-6 py-3 bg-sanarte-green text-white hover:bg-sanarte-green/90 transition-colors duration-300 text-sm tracking-wide"
              >
                Ver Servicios
              </Link>
              <Link
                href="/contacto"
                className="text-center px-6 py-3 border border-white text-white hover:bg-white/10 transition-colors duration-300 text-sm tracking-wide"
              >
                Reservar Cita
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-sanarte-green opacity-50"></div>
            <Image
              src="/sanarte-sobre-nosotros.png?height=500&width=600"
              alt="Sanarte Wellness Center"
              width={600}
              height={500}
              className="rounded-sm shadow-md relative z-10"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-sanarte-green opacity-50"></div>
          </div>
          <div>
            <h2 className="text-3xl font-display text-sanarte-green-dark mb-6">Sanarte Wellness Center</h2>
            <p className="text-stone-700 mb-8 leading-relaxed">
              Somos un oasis de bienestar y belleza que te invita a nutrir el cuerpo, relajar la mente y elevar el
              espíritu. En Sanarte queremos que cada visita sea una experiencia sanadora y transformadora que te permita
              reconectar contigo mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/nosotros"
                className="text-center px-6 py-3 bg-sanarte-green text-white hover:bg-sanarte-green/90 transition-colors duration-300 text-sm tracking-wide"
              >
                Conocer más
              </Link>
              <Link
                href="/servicios"
                className="text-center px-6 py-3 border border-sanarte-green text-sanarte-green hover:bg-sanarte-green/10 transition-colors duration-300 text-sm tracking-wide"
              >
                Nuestros Servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Catalog */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display text-sanarte-green-dark mb-12 text-center">Catálogo de servicios</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} title={service.title} image={service.image} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/servicios"
              className="inline-block px-8 py-3 bg-sanarte-green text-white hover:bg-sanarte-green/90 transition-colors duration-300 text-sm tracking-wide"
            >
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="py-8 px-4 md:px-8 max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-10">
            <div className="inline-flex items-center">
              <div className="h-px w-8 bg-sanarte-green mr-4"></div>
              <MapPin className="text-sanarte-green mr-3" />
              <h2 className="text-2xl font-display text-sanarte-green-dark">Encuéntranos</h2>
              <div className="h-px w-8 bg-sanarte-green ml-4"></div>
            </div>
          </div>
          <div className="h-[400px] w-full bg-stone-200 overflow-hidden shadow-md rounded-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.6639927036647!2d-77.03690492394826!3d-12.09787914610701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c842d7adb7cd%3A0x1b5b57796410f1c0!2sCalle%20Chinch%C3%B3n%20855%2C%20San%20Isidro%2015073%2C%20Peru!5e0!3m2!1sen!2sus!4v1712431234567!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="Ubicación de Sanarte Wellness Center"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  )
}

const services = [
  {
    title: "Masajes",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    title: "Tratamientos Faciales",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    title: "Tratamientos corporales",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    title: "Terapias Holísticas",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    title: "Rituales",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    title: "Pestañas y Cejas",
    image: "/placeholder.svg?height=400&width=400",
  },
]

function ServiceCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="group overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg rounded-sm">
      <div className="relative h-80">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="bg-sanarte-beige-dark p-4 text-center">
        <h3 className="font-display text-lg">{title}</h3>
      </div>
      <Link href="#" className="btn-treatment block">
        Ver tratamientos
      </Link>
    </div>
  )
}

