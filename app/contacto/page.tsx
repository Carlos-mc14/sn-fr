import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactoPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-display text-sanarte-green-dark mb-4 text-center">Contacto</h1>
        <p className="text-center text-stone-600 mb-16 max-w-2xl mx-auto">
          Estamos aquí para responder tus preguntas y ayudarte a programar tu próxima visita a nuestro centro de
          bienestar.
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-display text-sanarte-green-dark mb-8">Horario de Atención</h2>
            <div className="bg-white p-8 shadow-sm">
              <div className="space-y-4">
                <div className="flex justify-between border-b border-sanarte-beige-dark/30 pb-3">
                  <span className="font-medium">Lunes a Viernes</span>
                  <span>08:00 - 20:00</span>
                </div>
                <div className="flex justify-between border-b border-sanarte-beige-dark/30 pb-3">
                  <span className="font-medium">Sábados</span>
                  <span>09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Domingos</span>
                  <span>Cerrado</span>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-display text-sanarte-green-dark mb-8">Información de Contacto</h2>

              <div className="space-y-8">
                <div className="bg-white p-8 shadow-sm flex items-start space-x-6 hover:shadow-md transition-shadow duration-300 border-l-4 border-sanarte-green">
                  <MapPin className="h-6 w-6 text-sanarte-green mt-1" />
                  <div>
                    <h3 className="font-display text-lg mb-2">Dirección</h3>
                    <p className="text-stone-600">Calle Chinchón 855, San Isidro</p>
                    <p className="text-stone-600">Lima, Perú</p>
                  </div>
                </div>

                <div className="bg-white p-8 shadow-sm flex items-start space-x-6 hover:shadow-md transition-shadow duration-300 border-l-4 border-sanarte-green">
                  <Phone className="h-6 w-6 text-sanarte-green mt-1" />
                  <div>
                    <h3 className="font-display text-lg mb-2">Teléfono</h3>
                    <p className="text-stone-600">+51 955 329 677</p>
                  </div>
                </div>

                <div className="bg-white p-8 shadow-sm flex items-start space-x-6 hover:shadow-md transition-shadow duration-300 border-l-4 border-sanarte-green">
                  <Mail className="h-6 w-6 text-sanarte-green mt-1" />
                  <div>
                    <h3 className="font-display text-lg mb-2">Email</h3>
                    <p className="text-stone-600">recepcion@sanarte.com.pe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-display text-sanarte-green-dark mb-8">Envíanos un Mensaje</h2>

            <div className="bg-white p-8 shadow-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nombre" className="text-sm font-medium">
                      Nombre
                    </Label>
                    <Input
                      id="nombre"
                      placeholder="Tu nombre"
                      className="border-sanarte-beige-dark/30 focus:border-sanarte-green focus:ring-sanarte-green transition-colors duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="apellido" className="text-sm font-medium">
                      Apellido
                    </Label>
                    <Input
                      id="apellido"
                      placeholder="Tu apellido"
                      className="border-sanarte-beige-dark/30 focus:border-sanarte-green focus:ring-sanarte-green transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="border-sanarte-beige-dark/30 focus:border-sanarte-green focus:ring-sanarte-green transition-colors duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefono" className="text-sm font-medium">
                    Teléfono
                  </Label>
                  <Input
                    id="telefono"
                    placeholder="+51 955 329 677"
                    className="border-sanarte-beige-dark/30 focus:border-sanarte-green focus:ring-sanarte-green transition-colors duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje" className="text-sm font-medium">
                    Mensaje
                  </Label>
                  <Textarea
                    id="mensaje"
                    placeholder="Escribe tu mensaje aquí..."
                    rows={5}
                    className="border-sanarte-beige-dark/30 focus:border-sanarte-green focus:ring-sanarte-green transition-colors duration-300"
                  />
                </div>

                <Button className="w-full bg-sanarte-green hover:bg-sanarte-green/90 text-white py-3 transition-all duration-300 hover:shadow-md">
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

