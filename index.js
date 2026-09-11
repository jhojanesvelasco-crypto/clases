class Animal {
    nombre
    raza
    especie
    edad
    constructor(nombre, raza, especie, edad) {
        this.nombre = nombre
        this.raza = raza
        this.especie = especie
        this.edad = edad
    }
    registrarNombre(nuevonombre){
        this.nombre = nuevonombre
    }
    registrarRaza(nuevaraza){
        this.raza = nuevaraza
    }
    registrarEspecie(nuevaespecie){
        this.especie = nuevaespecie
    }
    registrarEdad(nuevaedad){
        this.edad = nuevaedad
    }
    mostrarInformacion(){
        console.log(this.nombre, this.raza, this.especie, this.edad)
    }
}
class Propietario{
    nombrePropietario
    direccion
    telefono
    constructor(nombre, direccion, telefono){
        this.nombrePropietario = nombre
        this.direccion = direccion
        this.telefono = telefono
        this.mascota=[]
    }
    registrarNombre(nuevonombre){
        this.nombrePropietario = nuevonombre
    }
    registrarDireccion(nuevadireccion){
        this.direccion = nuevadireccion
    }
    registrarTelefono(nuevotelefono){
        this.telefono = nuevotelefono
    }
    registrarMascota(nuevamascota){
        this.mascota.push(nuevamascota)
    }
    mostrarInformacion(){
        console.log("mascota"+this.mascota+"Propietario"+this.nombrePropietario)
    }
}
let colmillo = new Animal("Colmillo", "Labrador", "Perro", 12)
colmillo.mostraeinformacion()
let Yojanes=new Propietario("Yojanes", "Calle 123", "555-1234")
Yojanes.registrarMascota(colmillo)
Yojanes.mostrarInformacion()