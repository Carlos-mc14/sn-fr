import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ServiciosPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <Link href="/" className="flex items-center text-sanarte-green mb-10 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a inicio
        </Link>

        <h1 className="text-4xl font-display text-sanarte-green-dark mb-16 text-center">Nuestros Servicios</h1>

        <Tabs defaultValue="masajes" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-12 bg-transparent">
            <TabsTrigger
              value="masajes"
              className="data-[state=active]:bg-sanarte-green data-[state=active]:text-white px-6 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-sanarte-green"
            >
              Masajes
            </TabsTrigger>
            <TabsTrigger
              value="faciales"
              className="data-[state=active]:bg-sanarte-green data-[state=active]:text-white px-6 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-sanarte-green"
            >
              Tratamientos Faciales
            </TabsTrigger>
            <TabsTrigger
              value="corporales"
              className="data-[state=active]:bg-sanarte-green data-[state=active]:text-white px-6 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-sanarte-green"
            >
              Tratamientos corporales
            </TabsTrigger>
            <TabsTrigger
              value="terapias"
              className="data-[state=active]:bg-sanarte-green data-[state=active]:text-white px-6 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-sanarte-green"
            >
              Terapias Holísticas
            </TabsTrigger>
            <TabsTrigger
              value="rituales"
              className="data-[state=active]:bg-sanarte-green data-[state=active]:text-white px-6 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-sanarte-green"
            >
              Rituales
            </TabsTrigger>
            <TabsTrigger
              value="pestanas"
              className="data-[state=active]:bg-sanarte-green data-[state=active]:text-white px-6 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-sanarte-green"
            >
              Pestañas y Cejas
            </TabsTrigger>
            <TabsTrigger
              value="depilacion"
              className="data-[state=active]:bg-sanarte-green data-[state=active]:text-white px-6 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-sanarte-green"
            >
              Depilación Láser
            </TabsTrigger>
          </TabsList>

          <TabsContent value="masajes" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {masajes.map((item) => (
                <TreatmentCard key={item.title} treatment={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="faciales" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {faciales.map((item) => (
                <TreatmentCard key={item.title} treatment={item} />
              ))}
            </div>
          </TabsContent>

          {/* Other tabs content would go here */}
          <TabsContent value="corporales">
            <p className="text-center py-16 text-stone-500 italic">Contenido de tratamientos corporales próximamente</p>
          </TabsContent>

          <TabsContent value="terapias">
            <p className="text-center py-16 text-stone-500 italic">Contenido de terapias holísticas próximamente</p>
          </TabsContent>

          <TabsContent value="rituales">
            <p className="text-center py-16 text-stone-500 italic">Contenido de rituales próximamente</p>
          </TabsContent>

          <TabsContent value="pestanas">
            <p className="text-center py-16 text-stone-500 italic">Contenido de pestañas y cejas próximamente</p>
          </TabsContent>

          <TabsContent value="depilacion">
            <p className="text-center py-16 text-stone-500 italic">Contenido de depilación láser próximamente</p>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

interface Treatment {
  title: string
  description: string
  duration: string
  price: string
  image: string
}

function TreatmentCard({ treatment }: { treatment: Treatment }) {
  return (
    <div className="bg-white shadow-sm overflow-hidden">
      <div className="grid md:grid-cols-2">
        <div className="relative h-64 md:h-auto">
          <Image src={treatment.image || "/placeholder.svg"} alt={treatment.title} fill className="object-cover" />
        </div>
        <div className="p-8">
          <h3 className="text-xl font-display mb-3 text-sanarte-green-dark">{treatment.title}</h3>
          <p className="text-stone-600 text-sm mb-6 leading-relaxed">{treatment.description}</p>
          <div className="flex justify-between text-sm text-stone-500 mb-6 border-t border-b border-sanarte-beige-dark/20 py-3">
            <span>{treatment.duration}</span>
            <span className="font-medium text-sanarte-green-dark">{treatment.price}</span>
          </div>
          <Link
            href="#"
            className="inline-block w-full text-center py-3 bg-sanarte-green text-white hover:bg-sanarte-green/90 transition-colors duration-300 text-sm tracking-wide"
          >
            Reservar
          </Link>
        </div>
      </div>
    </div>
  )
}

const masajes: Treatment[] = [
  {
    title: "Masaje Relajante",
    description:
      "Técnica suave que alivia tensiones y promueve la relajación profunda del cuerpo y la mente. Ideal para reducir el estrés y mejorar la calidad del sueño.",
    duration: "60 min",
    price: "S/. 180",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Masaje Descontracturante",
    description:
      "Enfocado en liberar contracturas musculares y aliviar dolores específicos con presión profunda. Perfecto para quienes sufren de tensión muscular crónica.",
    duration: "60 min",
    price: "S/. 200",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Masaje con Piedras Calientes",
    description:
      "Combina masaje tradicional con piedras volcánicas calientes para una experiencia terapéutica única que relaja profundamente los músculos y mejora la circulación.",
    duration: "75 min",
    price: "S/. 220",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Reflexología Podal",
    description:
      "Técnica de presión en puntos específicos de los pies para equilibrar la energía del cuerpo y estimular la capacidad natural de sanación.",
    duration: "45 min",
    price: "S/. 150",
    image: "/placeholder.svg?height=300&width=400",
  },
]

const faciales: Treatment[] = [
  {
    title: "Facial Hidratante",
    description:
      "Tratamiento que restaura la hidratación y luminosidad de la piel con productos naturales de alta gama. Ideal para pieles secas o deshidratadas.",
    duration: "60 min",
    price: "S/. 190",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Limpieza Facial Profunda",
    description:
      "Elimina impurezas y células muertas para una piel más limpia y radiante. Incluye extracción, tonificación y mascarilla personalizada.",
    duration: "75 min",
    price: "S/. 210",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Facial Anti-edad",
    description:
      "Combate los signos del envejecimiento con ingredientes activos y técnicas de masaje facial que estimulan la producción de colágeno y elastina.",
    duration: "90 min",
    price: "S/. 250",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Tratamiento para Piel Sensible",
    description:
      "Especialmente formulado para calmar y fortalecer pieles sensibles o con rosácea. Utiliza productos hipoalergénicos y técnicas suaves.",
    duration: "60 min",
    price: "S/. 200",
    image: "/placeholder.svg?height=300&width=400",
  },
]

