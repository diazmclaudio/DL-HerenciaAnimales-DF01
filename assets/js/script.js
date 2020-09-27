class Propietario {
     constructor(nombre, direccion, telefono) {
          this._nombre = nombre;
          this._direccion = direccion;
          this._telefono = telefono;
     }

     get nombre() {
          return this._nombre;
     }
     get direccion() {
          return this._direccion;
     }
     get telefono() {
          return this._telefono;
     }

     set nombre(nuevoNombre) {
          this._nombre = nuevoNombre;
     }
     set direccion(nuevoDireccion) {
          this._direccion = nuevoDireccion;
     }
     set telefono(nuevoTelefono) {
          this._telefono = nuevoTelefono;
     }

     datosPropietario() {
          return `El nombre del dueño es: ${this.nombre}. El domicilio es: ${this.direccion} y el número de telefono es: ${this.telefono}`;
     }
}

class Animal extends Propietario {
     constructor(nombre, direccion, telefono, nombreAnimal, tipo) {
          super(nombre, direccion, telefono);
          this._nombreAnimal = nombreAnimal;
          this._tipo = tipo;
     }

     get nombreAnimal() {
          return this._nombreAnimal;
     }
     get tipo() {
          return this._tipo;
     }

     set nombreAnimal(nuevoNombreAnimal) {
          this._nombreAnimal = nuevoNombreAnimal;
     }
     set tipo(nuevoTipo) {
          this._tipo = nuevoTipo;
     }

     datosAnimal() {
          return `El nombre del animal es: ${this.nombreAnimal}. Siendo este un: ${this.tipo}`;
     }
}

class Perro extends Animal {
     constructor(nombre, direccion, telefono, nombreAnimal, tipo, enfermedad) {
          super(nombre, direccion, telefono, nombreAnimal, tipo);
          this._enfermedad = enfermedad;
     }
     get enfermedad() {
          return this._enfermedad;
     }

     set enfermedad(nuevoEnfermedad) {
          this._enfermedad = nuevoEnfermedad;
     }
}

class Gato extends Animal {
     constructor(nombre, direccion, telefono, nombreAnimal, tipo, enfermedad) {
          super(nombre, direccion, telefono, nombreAnimal, tipo);
          this._enfermedad = enfermedad;
     }
     get enfermedad() {
          return this._enfermedad;
     }

     set enfermedad(nuevoEnfermedad) {
          this._enfermedad = nuevoEnfermedad;
     }
}

class Conejo extends Animal {
     constructor(nombre, direccion, telefono, nombreAnimal, tipo, enfermedad) {
          super(nombre, direccion, telefono, nombreAnimal, tipo);
          this._enfermedad = enfermedad;
     }
     get enfermedad() {
          return this._enfermedad;
     }

     set enfermedad(nuevoEnfermedad) {
          this._enfermedad = nuevoEnfermedad;
     }
}

// Funcion para obtener texto de Select Tipo
var selectTipoMascota = () => {
     var tipoSelect = document.getElementById("tipo");
     var options = document.getElementsByTagName("option");
     return options[tipoSelect.value - 1].textContent;
};

//obtencion de valores


// obtener propiedades del form
let form = document.querySelector("form");
form.addEventListener("submit", mostrarDatos);

// funcion para mostrar datos en pantalla segun seleccion de tipo de mascota
function mostrarDatos(event) {
     event.preventDefault();
     
     let propietario = document.getElementById("propietario").value;
     let telefono = document.getElementById("telefono").value;
     let direccion = document.getElementById("direccion").value;
     let nombreMascota = document.getElementById("nombreMascota").value;
     let select = document.getElementById("tipo").value;
     let enfermedad = document.getElementById("enfermedad").value;
     let resultado = document.getElementById("resultado");
     
     switch (select) {
          case "1":
               let perro = new Perro(
                    propietario,
                    direccion,
                    telefono,
                    nombreMascota,
                    selectTipoMascota(),
                    enfermedad
               );
               resultado.innerHTML = `<ul><li>${perro.datosPropietario()}</li><li>${perro.datosAnimal()} y la enfermedad es: ${
                    perro.enfermedad
               }</li></ul>`;
               break;

          case "2":
               let gato = new Gato(
                    propietario,
                    direccion,
                    telefono,
                    nombreMascota,
                    selectTipoMascota(),
                    enfermedad
               );
               resultado.innerHTML = `<ul><li>${gato.datosPropietario()}</li><li>${gato.datosAnimal()} y la enfermedad es: ${
                    gato.enfermedad
               }</li></ul>`;
               break;

          case "3":
               let conejo = new Conejo(
                    propietario,
                    direccion,
                    telefono,
                    nombreMascota,
                    selectTipoMascota(),
                    enfermedad
               );
               resultado.innerHTML = `<ul><li>${conejo.datosPropietario()}</li><li>${conejo.datosAnimal()} y la enfermedad es: ${
                    conejo.enfermedad
               }</li></ul>`;
               break;
     }
}
