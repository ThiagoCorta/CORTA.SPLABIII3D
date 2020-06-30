export class Anuncio {
  public id: number | null;
  public titulo: string;
  public transaccion: string;
  public descripcion: string;
  public precio: string;

  constructor(object: Anuncio) {
    this.id = object.id ? object.id : null;
    this.titulo = object.titulo;
    this.transaccion = "Venta";
    this.descripcion = object.descripcion;
    this.precio = object.precio;
  }
}

export class Mascota extends Anuncio {
  public animal: string;
  public raza: string;
  public fecha_nacimiento: string;
  public vacuna: string;

  constructor(object: Mascota) {
    super(object);
    this.animal = object.animal;
    this.raza = object.raza;
    this.fecha_nacimiento = object.fecha_nacimiento;
    this.vacuna = object.vacuna;
  }
}

export enum EAnimal {
  Todo = "Todo",
  Perro = "Perro",
  Gato = "Gato",
}
