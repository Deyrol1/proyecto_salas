import { Component, OnInit } from '@angular/core';
import { CrudHttpService } from 'src/app/crud-http.service';
import { ActivatedRoute } from "@angular/router";
import  {usuarios}  from 'src/app/clases/usuarios';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.sass']
})
export class UsuarioComponent implements OnInit {

  id:any =""

  myVal=''

  cedula:string=""
  nombre:string=""

  email:string=""
  contrasena:string=""
  constructor(private crudHttpService: CrudHttpService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get("id");
  
  }

  todoList:any = [];

  listsalas(){
    this.crudHttpService.list().subscribe((response)=>{
      this.todoList = response;
    },(error=>{

    }));
    this.registrojugador();
  }
  jugadores:any = [];

  registrojugador(){
  
      this.crudHttpService.ususariosgeneral().subscribe((response)=>{
        this.jugadores = response;
        console.log("los jugadores son:",this.jugadores[this.jugadores.length-1])
        let data={
          usuarioId:this.jugadores[this.jugadores.length-1].id,
          salaId: this.jugadores[this.jugadores.length-1].salaId,
      }
      this.crudHttpService.createjugador(data).subscribe((response)=>{
      },(error=>{
  
  
      }));
      },(error=>{
  
  
      }));
    
  }




  actuusuario(){

    let data:usuarios={
        nombre:this.nombre,
        salaId: parseInt(this.id),
        email:this.email,
        contrasena:this.contrasena,
        cedula:this.cedula
    }
    this.crudHttpService.createuser(data).subscribe((response)=>{
      this.listsalas();
    },(error=>{
    }));

    
   
  }
}
