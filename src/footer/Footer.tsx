import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Doctor Directory</h3>
            <p className="text-gray-300">
              Encuentra el especialista médico que necesitas de manera rápida y sencilla.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Buscar Doctores
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Especialidades
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Sobre Nosotros
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="font-medium">Email:</span> info@doctordirectory.com
              </li>
              <li className="text-gray-300">
                <span className="font-medium">Teléfono:</span> +1 234 567 890
              </li>
              <li className="text-gray-300">
                <span className="font-medium">Dirección:</span> 123 Calle Principal, Ciudad
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Boletín Informativo</h3>
            <p className="text-gray-300 mb-4">
              Suscríbete para recibir las últimas actualizaciones y noticias.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Tu email"
                className="px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 w-full"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Suscribir
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Doctor Directory. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-white text-sm">
                Términos y Condiciones
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-sm">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
