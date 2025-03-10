import React from "react";

export function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="mb-4">
            <h1 className="text-4xl font-bold text-white">Quienes Somos</h1>
          </div>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        <div className="space-y-8 text-white">
          <p className="text-lg leading-relaxed">
            Bracamonte Propiedades es una empresa inmobiliaria con más de 20
            años de experiencia en el mercado inmobiliario de La Plata y
            alrededores. Nos especializamos en la compra, venta y alquiler de
            propiedades residenciales y comerciales.
          </p>

          <div className="bg-[#232736] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Nuestra Misión</h2>
            <p className="leading-relaxed">
              Brindar un servicio inmobiliario integral y personalizado,
              garantizando la máxima satisfacción de nuestros clientes a través
              de la transparencia, profesionalismo y compromiso en cada
              operación.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Servicios</h3>
              <ul className="space-y-2">
                <li>• Tasaciones profesionales</li>
                <li>• Asesoramiento inmobiliario</li>
                <li>• Gestión de documentación</li>
                <li>• Marketing inmobiliario</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Valores</h3>
              <ul className="space-y-2">
                <li>• Honestidad y transparencia</li>
                <li>• Compromiso con el cliente</li>
                <li>• Profesionalismo</li>
                <li>• Innovación constante</li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
            <p className="leading-relaxed">
              Estamos ubicados en el corazón de La Plata. Nuestro equipo de
              profesionales está disponible para atender todas tus consultas y
              ayudarte a encontrar la propiedad que estás buscando.
            </p>
            <div className="mt-4">
              <p>Dirección: Calle 7 n° 1234 entre 54 y 55, La Plata</p>
              <p>Teléfono: (221) 123-4567</p>
              <p>Email: info@bracamontepropiedades.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
