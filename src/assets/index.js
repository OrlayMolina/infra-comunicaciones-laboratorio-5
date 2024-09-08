let profesores = JSON.parse(localStorage.getItem("profesores")) || [];
let indexEditar = null;

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
    this.fondo = salario > (1300000 * 4) ? salario * 0.01 : 0;
  }
}

function guardarProfesor() {
  let cedula = document.getElementById("inputCedula").value;
  let nombre = document.getElementById("inputNombre").value;
  let fechaNacimiento = document.getElementById("inputFechaNacimiento").value;
  let direccion = document.getElementById("inputDireccion").value;
  let telefono = document.getElementById("inputTelefono").value;
  let salario = document.getElementById("inputSalario").value;

  // Validación para evitar guardar campos vacíos
  if (!cedula || !nombre || !fechaNacimiento || !direccion || !telefono || !salario) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  let profesor = new Profesor(cedula, nombre, fechaNacimiento, direccion, telefono, salario);

  if (indexEditar === null) {
    profesores.push(profesor);
  } else {
    profesores[indexEditar] = profesor;
    indexEditar = null;
  }

  // Guardar en localStorage
  localStorage.setItem("profesores", JSON.stringify(profesores));
  mostrarProfesores();
  limpiarFormulario();
}

function mostrarProfesores() {
  const cuerpoTabla = document.getElementById("cuerpoTablaProfesores");
  cuerpoTabla.innerHTML = ""; // Limpiar la tabla antes de mostrar los profesores

  profesores.forEach((profesor, index) => {
    const fila = `
      <tr>
        <td>${profesor.cedula}</td>
        <td>${profesor.nombre}</td>
        <td>${profesor.fechaNacimiento}</td>
        <td>${profesor.direccion}</td>
        <td>${profesor.telefono}</td>
        <td>${profesor.edad}</td>
        <td>${profesor.salario}</td>
        <td>${profesor.salud.toFixed(2)}</td>
        <td>${profesor.pension.toFixed(2)}</td>
        <td>${profesor.fondo.toFixed(2)}</td>
        <td>
          <button onclick="editarProfesor(${index})">Editar</button>
          <button onclick="eliminarProfesor(${index})">Eliminar</button>
        </td>
      </tr>
    `;
    cuerpoTabla.innerHTML += fila;
  });
}

function filtrarProfesores() {
  let filtroCedula = document.getElementById("inputCedula").value.toLowerCase();
  let filtroNombre = document.getElementById("inputNombre").value.toLowerCase();
  let filtroFechaNacimiento = document.getElementById("inputFechaNacimiento").value;
  let filtroDireccion = document.getElementById("inputDireccion").value.toLowerCase();
  let filtroTelefono = document.getElementById("inputTelefono").value;
  let filtroSalario = document.getElementById("inputSalario").value;

  // Filtra los profesores que coincidan con los filtros
  let profesoresFiltrados = profesores.filter(profesor => {
    return (
      (!filtroCedula || profesor.cedula.toLowerCase().includes(filtroCedula)) &&
      (!filtroNombre || profesor.nombre.toLowerCase().includes(filtroNombre)) &&
      (!filtroFechaNacimiento || profesor.fechaNacimiento === filtroFechaNacimiento) &&
      (!filtroDireccion || profesor.direccion.toLowerCase().includes(filtroDireccion)) &&
      (!filtroTelefono || profesor.telefono.includes(filtroTelefono)) &&
      (!filtroSalario || profesor.salario == parseFloat(filtroSalario))
    );
  });

  mostrarProfesoresFiltrados(profesoresFiltrados);
}

function mostrarProfesoresFiltrados(profesoresFiltrados) {
  const cuerpoTabla = document.getElementById("cuerpoTablaProfesores");
  cuerpoTabla.innerHTML = ""; // Limpiar la tabla antes de mostrar los profesores filtrados

  profesoresFiltrados.forEach((profesor) => {
    const fila = `
      <tr>
        <td>${profesor.cedula}</td>
        <td>${profesor.nombre}</td>
        <td>${profesor.fechaNacimiento}</td>
        <td>${profesor.direccion}</td>
        <td>${profesor.telefono}</td>
        <td>${profesor.edad}</td>
        <td>${profesor.salario}</td>
        <td>${profesor.salud.toFixed(2)}</td>
        <td>${profesor.pension.toFixed(2)}</td>
        <td>${profesor.fondo.toFixed(2)}</td>
      </tr>
    `;
    cuerpoTabla.innerHTML += fila;
  });
}

function editarProfesor(index) {
  let profesor = profesores[index];
  document.getElementById("inputCedula").value = profesor.cedula;
  document.getElementById("inputNombre").value = profesor.nombre;
  document.getElementById("inputFechaNacimiento").value = profesor.fechaNacimiento;
  document.getElementById("inputDireccion").value = profesor.direccion;
  document.getElementById("inputTelefono").value = profesor.telefono;
  document.getElementById("inputSalario").value = profesor.salario;
  indexEditar = index; // Guardamos el índice para saber qué elemento estamos editando
}

function eliminarProfesor(index) {
  profesores.splice(index, 1); // Elimina el profesor en la posición index
  localStorage.setItem("profesores", JSON.stringify(profesores)); // Actualiza el localStorage
  mostrarProfesores(); // Refresca la tabla
}

function    calcularEdad(fechaNacimiento) {
  const hoy = new Date();
  const nacimiento = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }
  return edad;
}

function limpiarFormulario() {
  document.getElementById("formProfesor").reset();
}

window.onload = function() {
  document.getElementById("btnAgregar").addEventListener("click", guardarProfesor);
  document.getElementById("btnCalcular").addEventListener("click", guardarProfesor);
  document.getElementById("btnConsultar").addEventListener("click", filtrarProfesores);
  mostrarProfesores();
};