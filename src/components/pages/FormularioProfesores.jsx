function FormularioProfesores() {
  return (
    <>
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold">Profesores de la UQ</h1>
      </div>

      <div className="text-center my-6">
        <p className="text-lg">
          La siguiente tabla corresponde a datos hipotéticos:
        </p>
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
              />
            </div>
          </div>
        </form>
      </div>

      {/* Botones de acciones */}
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between gap-4">
        <button
          id="btnCalcular"
          className="bg-blue-500 text-white px-4 py-2 rounded-md w-full sm:w-auto"
        >
          Calcular
        </button>
        <button
          id="btnAgregar"
          className="bg-green-500 text-white px-4 py-2 rounded-md w-full sm:w-auto"
        >
          Agregar
        </button>
        <button
          id="btnConsultar"
          className="bg-green-500 text-white px-4 py-2 rounded-md w-full sm:w-auto"
        >
          Consultar
        </button>
        <button
          id="btnEditar"
          className="bg-green-500 text-white px-4 py-2 rounded-md w-full sm:w-auto"
        >
          Editar
        </button>
        <button
          id="btnEliminar"
          className="bg-red-500 text-white px-4 py-2 rounded-md w-full sm:w-auto"
        >
          Eliminar
        </button>
      </div>

      {/* Tabla de profesores */}
      <div className="max-w-4xl mx-auto mt-8 overflow-x-auto">
        <table
          className="w-full border border-gray-600 bg-gray-300 table-auto"
          id="tablaProfesores"
        >
          <thead>
            <tr>
              <th className="border border-gray-600 py-4 px-2 bg-gray-400 text-left text-lg">
                CÉDULA
              </th>
              <th className="border border-gray-600 py-4 px-2 bg-gray-400 text-left text-lg">
                NOMBRE
              </th>
              <th className="border border-gray-600 py-4 px-2 bg-gray-400 text-left text-lg">
                FECHA DE NACIMIENTO
              </th>
              <th className="border border-gray-600 py-4 px-2 bg-gray-400 text-left text-lg">
                DIRECCIÓN
              </th>
              <th className="border border-gray-600 py-4 px-2 bg-gray-400 text-left text-lg">
                TELÉFONO
              </th>
              <th className="border border-gray-600 py-4 px-2 bg-gray-400 text-left text-lg">
                EDAD
              </th>
              <th className="border border-gray-600 py-4 px-2 bg-gray-400 text-left text-lg">
                SALARIO
              </th>
              <th className="border border-gray-600 py-4 px-2 bg-gray-400 text-left text-lg">
                SALUD
              </th>
              <th className="border border-gray-600 py-4 px-2 bg-gray-400 text-left text-lg">
                PENSIÓN
              </th>
              <th className="border border-gray-600 py-4 px-2 bg-gray-400 text-left text-lg">
                FONDO DE SOLIDARIDAD
              </th>
              <th className="border border-gray-600 py-4 px-2 bg-gray-400 text-left text-lg">
                ACCIÓN
              </th>
            </tr>
          </thead>
          <tbody id="cuerpoTablaProfesores"></tbody>
        </table>
      </div>

      <div className="text-center mt-8 m-6">
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
