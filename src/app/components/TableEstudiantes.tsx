// components/TableEstudiantes.tsx
import { type Student } from '../types/student';

type TableEstudiantesProps = {
  data: Student[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TableEstudiantes({ 
  data, 
  onEdit, 
  onDelete 
}: TableEstudiantesProps) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Estudiante
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nota
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((estudiante) => (
            <tr key={estudiante.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {estudiante.nombre}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {estudiante.nota}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                <button 
                  onClick={() => onEdit(estudiante.id)}
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  Editar
                </button>
                <button 
                  onClick={() => onDelete(estudiante.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}