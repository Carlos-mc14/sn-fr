import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  return (
    <header className="w-full bg-sanarte-green-dark sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/placeholder.svg?height=60&width=150"
            alt="Sanarte Logo"
            width={150}
            height={60}
            className="h-12 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-12">
          <Link
            href="/"
            className="text-white hover:text-sanarte-beige transition-colors duration-300 font-body tracking-wide text-sm uppercase relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-sanarte-beige after:transition-all hover:after:w-full"
          >
            Inicio
          </Link>
          <Link
            href="/servicios"
            className="text-white hover:text-sanarte-beige transition-colors duration-300 font-body tracking-wide text-sm uppercase relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-sanarte-beige after:transition-all hover:after:w-full"
          >
            Servicios
          </Link>
          <Link
            href="/nosotros"
            className="text-white hover:text-sanarte-beige transition-colors duration-300 font-body tracking-wide text-sm uppercase relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-sanarte-beige after:transition-all hover:after:w-full"
          >
            Nosotros
          </Link>
          <Link
            href="/contacto"
            className="text-white hover:text-sanarte-beige transition-colors duration-300 font-body tracking-wide text-sm uppercase relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-sanarte-beige after:transition-all hover:after:w-full"
          >
            Contacto
          </Link>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-sanarte-beige">
              <nav className="flex flex-col space-y-6 mt-12">
                <Link
                  href="/"
                  className="text-sanarte-green-dark hover:text-sanarte-green transition-colors duration-300 font-body tracking-wide text-sm uppercase"
                >
                  Inicio
                </Link>
                <Link
                  href="/nosotros"
                  className="text-sanarte-green-dark hover:text-sanarte-green transition-colors duration-300 font-body tracking-wide text-sm uppercase"
                >
                  Nosotros
                </Link>
                <Link
                  href="/servicios"
                  className="text-sanarte-green-dark hover:text-sanarte-green transition-colors duration-300 font-body tracking-wide text-sm uppercase"
                >
                  Servicios
                </Link>
                <Link
                  href="/contacto"
                  className="text-sanarte-green-dark hover:text-sanarte-green transition-colors duration-300 font-body tracking-wide text-sm uppercase"
                >
                  Contacto
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

