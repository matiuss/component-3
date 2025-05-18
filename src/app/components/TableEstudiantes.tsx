import { useState } from 'react';
import { type Student } from '../types/student';

type TableEstudiantesProps = {
  data: Student[];
  onEdit: (id: string, newNota: number) => void;
  onDelete: (id: string) => void;
};

export default function TableEstudiantes({ 
  data, 
  onEdit, 
  onDelete 
}: TableEstudiantesProps) {
  // Estado para las notas editadas: { [id]: string }
  const [notasEditadas, setNotasEditadas] = useState<{ [id: string]: string }>({});

  // Maneja el cambio en el input de nota
  const handleNotaChange = (id: string, value: string) => {
    if (/^\d{0,1}(\.\d{0,1})?$|^5(\.0?)?$/.test(value)) {
      setNotasEditadas(prev => ({
        ...prev,
        [id]: value
      }));
    }
  };

  // Guardar todos los cambios
  const handleGuardarCambios = () => {
    let hayError = false;
    Object.entries(notasEditadas).forEach(([id, notaStr]) => {
      const notaNum = parseFloat(notaStr);
      if (isNaN(notaNum) || notaNum < 0 || notaNum > 5) {
        hayError = true;
      }
    });
    if (hayError) {
      alert('Todas las notas deben estar entre 0.0 y 5.0');
      return;
    }
    Object.entries(notasEditadas).forEach(([id, notaStr]) => {
      const notaNum = parseFloat(notaStr);
      onEdit(id, parseFloat(notaNum.toFixed(1)));
    });
    setNotasEditadas({});
  };

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
                <input
                  type="number"
                  step="0.1"
                  min={0}
                  max={5}
                  value={notasEditadas[estudiante.id] ?? estudiante.nota.toFixed(1)}
                  onChange={e => handleNotaChange(estudiante.id, e.target.value)}
                  className="border rounded px-2 py-1 w-20"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
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
      <div className="p-4">
        <button
          onClick={handleGuardarCambios}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          disabled={Object.keys(notasEditadas).length === 0}
        >
          Guardar cambios
        </button>
      </div>
    </div>
  );
}