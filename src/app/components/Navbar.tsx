import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white px-6 py-4 flex items-center justify-between shadow">
      <div className="font-bold text-lg">Mi App de Estudiantes</div>
      <div className="space-x-4">
        <Link href="/" className="hover:underline">Inicio</Link>
        <Link href="/docente/students" className="hover:underline">Estudiantes</Link>
      </div>
    </nav>
  );
}