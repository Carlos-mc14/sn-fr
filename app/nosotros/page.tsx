import Image from "next/image"

export default function NosotrosPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-display text-sanarte-green-dark mb-16 text-center">Nosotros</h1>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Sanarte Wellness Center"
              width={600}
              height={500}
              className="rounded-sm shadow-md"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-display text-sanarte-green-dark">Nuestra Historia</h2>
            <p className="text-stone-700 leading-relaxed">
              Sanarte nació con la visión de crear un espacio donde el bienestar integral sea la prioridad. Fundado en
              2015 por un equipo de profesionales apasionados por la salud y el bienestar, nuestro centro ha
              evolucionado para convertirse en un referente en terapias holísticas y tratamientos de belleza en Lima.
            </p>
            <p className="text-stone-700 leading-relaxed">
              Nuestra filosofía se basa en la creencia de que el verdadero bienestar surge cuando cuerpo, mente y
              espíritu están en equilibrio. Por eso, cada uno de nuestros tratamientos está diseñado para nutrir estos
              tres aspectos fundamentales del ser humano.
            </p>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-display text-sanarte-green-dark mb-12 text-center">Nuestros Valores</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-10 shadow-sm text-center">
              <div className="w-16 h-16 bg-sanarte-beige rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-sanarte-green"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-display mb-4 text-sanarte-green-dark">Cuidado</h3>
              <p className="text-stone-600 leading-relaxed">
                Nos preocupamos genuinamente por el bienestar de cada cliente, ofreciendo atención personalizada y
                tratamientos adaptados a sus necesidades específicas.
              </p>
            </div>

            <div className="bg-white p-10 shadow-sm text-center">
              <div className="w-16 h-16 bg-sanarte-beige rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-sanarte-green"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-display mb-4 text-sanarte-green-dark">Integridad</h3>
              <p className="text-stone-600 leading-relaxed">
                Trabajamos con honestidad y transparencia, utilizando productos de alta calidad y técnicas respaldadas
                por la ciencia y la tradición.
              </p>
            </div>

            <div className="bg-white p-10 shadow-sm text-center">
              <div className="w-16 h-16 bg-sanarte-beige rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-sanarte-green"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-display mb-4 text-sanarte-green-dark">Armonía</h3>
              <p className="text-stone-600 leading-relaxed">
                Buscamos crear un equilibrio perfecto entre las técnicas tradicionales y las innovaciones modernas,
                ofreciendo lo mejor de ambos mundos para una experiencia de bienestar integral.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-display text-sanarte-green-dark mb-12 text-center">Nuestro Equipo</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white overflow-hidden shadow-sm">
                <div className="relative h-80">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-display text-lg mb-1">{member.name}</h3>
                  <p className="text-sanarte-green text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

const team = [
  {
    name: "María Rodríguez",
    role: "Directora & Terapeuta Senior",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Carlos Mendoza",
    role: "Masajista Terapéutico",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Ana Gómez",
    role: "Especialista Facial",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Javier Torres",
    role: "Terapeuta Holístico",
    image: "/placeholder.svg?height=400&width=300",
  },
]

