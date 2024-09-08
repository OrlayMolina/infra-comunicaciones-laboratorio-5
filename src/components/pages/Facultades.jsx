function Facultades() {
    return (
      <>
        <div className="text-center my-8">
          <h1 className="text-4xl font-bold">Facultades de la UQ</h1>
        </div>
  
        <div className="text-center my-6">
          <p className="text-lg">
            La siguiente tabla corresponde a las Facultades de la Universidad:
          </p>
        </div>
  
        <div className="max-w-4xl mx-auto">
          <table className="w-full border border-gray-600 bg-gray-300 table-auto">
            <thead>
              <tr>
                <th className="border border-gray-600 py-4 px-2 bg-gray-400 text-left text-lg">
                  FACULTADES DE LA UQ
                </th>
                <th className="border border-gray-600 py-4 px-2 bg-gray-400 text-left text-lg">
                  PROGRAMAS POR FACULTAD
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-600 py-4 px-2">
                  Ciencias de la Salud
                </td>
                <td className="border border-gray-600 py-4 px-2">
                  - Enfermería <br />- Medicina <br />- Gerontología
                </td>
              </tr>
              <tr>
                <td className="border border-gray-600 py-4 px-2">
                  Ingeniería
                </td>
                <td className="border border-gray-600 py-4 px-2">
                  - Ingeniería de Sistemas <br />- Ingeniería Civil <br />-
                  Ingeniería de Petróleos
                </td>
              </tr>
              <tr>
                <td className="border border-gray-600 py-4 px-2">
                  Agroindustria
                </td>
                <td className="border border-gray-600 py-4 px-2">
                  - Ingeniería de Alimentos <br />- Zootecnia <br />- Ingeniería
                  Agroindustrial
                </td>
              </tr>
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
  
  export default Facultades;
  