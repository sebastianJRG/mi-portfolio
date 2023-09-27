import './globals.css'

import NavBar from '@/components/NavBar'

export const metadata = {
  title: 'Sebastián Rodrigo',
  description: 'Portafolio personal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <div className="flex">
          <NavBar />
          <div className="flex-grow ml-24"> {/* Agregamos ml-24 para dejar espacio para el NavBar */}
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
