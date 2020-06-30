export class Anuncio {
    constructor(object) {
        this.id = object.id ? object.id : null;
        this.titulo = object.titulo;
        this.transaccion = "Venta";
        this.descripcion = object.descripcion;
        this.precio = object.precio;
    }
}
export class Mascota extends Anuncio {
    constructor(object) {
        super(object);
        this.animal = object.animal;
        this.raza = object.raza;
        this.fecha_nacimiento = object.fecha_nacimiento;
        this.vacuna = object.vacuna;
    }
}
export var EAnimal;
(function (EAnimal) {
    EAnimal["Todo"] = "Todo";
    EAnimal["Perro"] = "Perro";
    EAnimal["Gato"] = "Gato";
})(EAnimal || (EAnimal = {}));
