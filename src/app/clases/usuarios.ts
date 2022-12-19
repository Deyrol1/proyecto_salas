export class usuarios {
  nombre: string
  email: string

  contrasena: string
  cedula: string
  salaId: number

  constructor(nombre: string,
    email: string,

    contrasena: string,
    cedula: string,
    salaId: number
    ){
      this.nombre=nombre
      this.email=email
      this.contrasena=contrasena
      this.cedula=cedula
      this.salaId=salaId

    }
}



