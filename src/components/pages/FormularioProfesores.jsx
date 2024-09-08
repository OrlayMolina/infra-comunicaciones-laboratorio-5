import { useState, useEffect } from "react";

function FormularioProfesores() {
  // Estado para manejar los datos del formulario
  const [cedula, setCedula] = useState("");
  const [nombre, setNombre] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [salario, setSalario] = useState("");
  const [profesores, setProfesores] = useState(
    JSON.parse(localStorage.getItem("profesores")) || []
  );
  const [indexEditar, setIndexEditar] = useState(null);
  const [profesoresFiltrados, setProfesoresFiltrados] = useState(profesores);

  useEffect(() => {
    setProfesoresFiltrados(profesores);
  }, [profesores]);

  const limpiarFiltro = () => {
    // Restablece los campos del formulario
    setCedula("");
    setNombre("");
    setFechaNacimiento("");
    setDireccion("");
    setTelefono("");
    setSalario("");

    // Vuelve a mostrar todos los profesores
    setProfesoresFiltrados(profesores);
  };


  // Clase Profesor
  class Profesor {
    constructor(cedula, nombre, fechaNacimiento, direccion, telefono, salario) {
      this.cedula = cedula;
      this.nombre = nombre;
      this.fechaNacimiento = fechaNacimiento;
      this.direccion = direccion;
      this.telefono = telefono;
      this.salario = salario;
      this.edad = calcularEdad(fechaNacimiento);
      this.salud = salario * 0.04;
      this.pension = salario * 0.04;
      this.fondo = salario > 1300000 * 4 ? salario * 0.01 : 0;
    }
  }

  // Función para guardar profesor
  const guardarProfesor = () => {
    if (!cedula || !nombre || !fechaNacimiento || !direccion || !telefono || !salario) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    let profesor = new Profesor(
      cedula,
      nombre,
      fechaNacimiento,
      direccion,
      telefono,
      parseFloat(salario)
    );

    if (indexEditar === null) {
      setProfesores([...profesores, profesor]);
    } else {
      let nuevosProfesores = [...profesores];
      nuevosProfesores[indexEditar] = profesor;
      setProfesores(nuevosProfesores);
      setIndexEditar(null);
    }

    localStorage.setItem("profesores", JSON.stringify([...profesores, profesor]));
    limpiarFormulario();
  };

  // Función para calcular la edad
  const calcularEdad = (fechaNacimiento) => {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    return edad;
  };

  const consultarProfesores = () => {
    const profesoresFiltrados = profesores.filter((profesor) => {
      const filtroCedula = cedula ? profesor.cedula.includes(cedula) : true;
      const filtroNombre = nombre ? profesor.nombre.toLowerCase().includes(nombre.toLowerCase()) : true;
      const filtroFechaNacimiento = fechaNacimiento ? profesor.fechaNacimiento === fechaNacimiento : true;
      const filtroDireccion = direccion ? profesor.direccion.toLowerCase().includes(direccion.toLowerCase()) : true;
      const filtroTelefono = telefono ? profesor.telefono.includes(telefono) : true;
      const filtroSalario = salario ? profesor.salario.toString() === salario : true;
  
      return filtroCedula && filtroNombre && filtroFechaNacimiento && filtroDireccion && filtroTelefono && filtroSalario;
    });
  
    setProfesoresFiltrados(profesoresFiltrados);
  };

  // Función para limpiar el formulario
  const limpiarFormulario = () => {
    setCedula("");
    setNombre("");
    setFechaNacimiento("");
    setDireccion("");
    setTelefono("");
    setSalario("");
  };

  // Función para eliminar profesor
  const eliminarProfesor = (index) => {
    const nuevosProfesores = profesores.filter((_, i) => i !== index);
    setProfesores(nuevosProfesores);
    localStorage.setItem("profesores", JSON.stringify(nuevosProfesores));
  };

  // Función para editar profesor
  const editarProfesor = (index) => {
    let profesor = profesores[index];
    setCedula(profesor.cedula);
    setNombre(profesor.nombre);
    setFechaNacimiento(profesor.fechaNacimiento);
    setDireccion(profesor.direccion);
    setTelefono(profesor.telefono);
    setSalario(profesor.salario);
    setIndexEditar(index);
  };

  // Función para mostrar los profesores (no hace falta interactuar directamente con el DOM)
  useEffect(() => {
    localStorage.setItem("profesores", JSON.stringify(profesores));
  }, [profesores]);

  return (
    <>
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold">Profesores de la UQ</h1>
      </div>

      <div className="text-center my-6">
        <p className="text-lg">La siguiente tabla corresponde a datos hipotéticos:</p>
      </div>

      {/* Formulario para ingresar datos del profesor */}
      <div className="max-w-4xl mx-auto">
        <form id="formProfesor" className="mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="inputCedula" className="block text-left">
                Cédula
              </label>
              <input
                type="text"
                id="inputCedula"
                className="w-full border p-2"
                value={cedula}
                onChange={(e) => setCedula(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="inputNombre" className="block text-left">
                Nombre
              </label>
              <input
                type="text"
                id="inputNombre"
                className="w-full border p-2"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="inputFechaNacimiento" className="block text-left">
                Fecha de Nacimiento
              </label>
              <input
                type="date"
                id="inputFechaNacimiento"
                className="w-full border p-2"
                value={fechaNacimiento}
                onChange={(e) => setFechaNacimiento(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="inputDireccion" className="block text-left">
                Dirección
              </label>
              <input
                type="text"
                id="inputDireccion"
                className="w-full border p-2"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="inputTelefono" className="block text-left">
                Teléfono
              </label>
              <input
                type="text"
                id="inputTelefono"
                className="w-full border p-2"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="inputSalario" className="block text-left">
                Salario
              </label>
              <input
                type="number"
                id="inputSalario"
                className="w-full border p-2"
                value={salario}
                onChange={(e) => setSalario(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>

      {/* Botones de acciones */}
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between gap-4">
        <button onClick={guardarProfesor} className="bg-green-500 text-white px-4 py-2 rounded-md w-full sm:w-auto">
          Agregar / Actualizar
        </button>
        <button onClick={consultarProfesores} className="bg-blue-500 text-white px-4 py-2 rounded-md w-full sm:w-auto">
          Consultar
        </button>
        <button onClick={limpiarFiltro} className="bg-gray-500 text-white px-4 py-2 rounded-md w-full sm:w-auto">
          Limpiar Filtro
        </button>
      </div>

      {/* Tabla de profesores */}
      <div className="max-w-4xl mx-auto mt-8 overflow-x-auto">
        <table className="w-full border border-gray-600 bg-gray-300 table-auto">
          <thead>
            <tr>
              <th className="border border-gray-600 py-4 px-2 bg-gray-400 text-left text-lg">CÉDULA</th>
              <th className="border border-gray-600 py-4 px-2 bg-gray-400 text-left text-lg">NOMBRE</th>
              <th className="border border-gray-600 py-4 px-2 bg-gray-400 text-left text-lg">FECHA NACIMIENTO</th>
              <th className="border border-gray-600 py-4 px-2 bg-gray-400 text-left text-lg">DIRECCIÓN</th>
              <th className="border border-gray-600 py-4 px-2 bg-gray-400 text-left text-lg">TELÉFONO</th>
              <th className="border border-gray-600 py-4 px-2 bg-gray-400 text-left text-lg">EDAD</th>
              <th className="border border-gray-600 py-4 px-2 bg-gray-400 text-left text-lg">SALARIO</th>
              <th className="border border-gray-600 py-4 px-2 bg-gray-400 text-left text-lg">ACCIONES PERMITIDAS</th>
            </tr>
          </thead>
          <tbody>
            {profesoresFiltrados.map((profesor, index) => (
              <tr key={index}>
                <td>{profesor.cedula}</td>
                <td>{profesor.nombre}</td>
                <td>{profesor.fechaNacimiento}</td>
                <td>{profesor.direccion}</td>
                <td>{profesor.telefono}</td>
                <td>{profesor.edad}</td>
                <td>{profesor.salario}</td>
                <td>
                  <button 
                    onClick={() => editarProfesor(index)}
                    style={{ backgroundColor: 'blue', color: 'white', padding: '0.5rem', borderRadius: '0.5rem', display: 'inline-block', marginRight: '0.5rem' }}
                  >
                    Editar
                  </button>
                  <button 
                    onClick={() => eliminarProfesor(index)}
                    style={{ backgroundColor: 'red', color: 'white', padding: '0.5rem', borderRadius: '0.5rem', display: 'inline-block' }}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      <div className="text-center mt-8 m-4">
        <a
          href="index.html"
          className="text-white hover:underline text-lg bg-green-600 hover:bg-green-400 py-3 px-6 rounded-md"
        >
          Página Principal
        </a>
      </div>
    </>
  );
}

export default FormularioProfesores;
