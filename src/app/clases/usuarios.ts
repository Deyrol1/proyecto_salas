export class usuarios {
  nombre: string
  correo: string

  contrasena: string
  cedula: string
  salaId: number

  constructor(nombre: string,
    correo: string,

    contrasena: string,
    cedula: string,
    salaId: number
    ){
      this.nombre=nombre
      this.correo=correo
      this.contrasena=contrasena
      this.cedula=cedula
      this.salaId=salaId

    }
}



