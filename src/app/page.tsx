import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-6">Bienvenido a la App de Estudiantes</h1>
            <Link href="/docente/students" className="bg-blue-500 text-white px-4 py-2 rounded">
              Ver Estudiantes
            </Link>
          </div>
        );
      }