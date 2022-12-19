import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { CrudHttpService } from 'src/app/crud-http.service';
import { usuarios } from 'src/app/clases/usuarios';
@Component({
  selector: 'app-editusuario',
  templateUrl: './editusuario.component.html',
  styleUrls: ['./editusuario.component.sass']
})
export class EditusuarioComponent implements OnInit {
  todoList:any = [];

  listsalas(){
    this.crudHttpService.list().subscribe((response)=>{
      this.todoList = response;
    },(error=>{

    }));
    this.router.navigate(['usuariosgeneral']);
  }




  createTodo(){
    let todo:usuarios = {
      cedula:this.datos[0].cedula,
      nombre:this.datos[0].nombre,
      email:this.datos[0].email,
      contrasena:this.datos[0].contrasena,
      salaId: this.datos[0].salaId
    }
    this.crudHttpService.updateuser(this.idsala,todo).subscribe((response)=>{
      this.listsalas();
    },(error=>{

    }));

  

  }

  datos:any=[];

  sala(){
    this.crudHttpService.datosuser(this.idsala).subscribe((response)=>{
      this.datos=response
    },(error=>{

    }));
  }


  constructor(private crudHttpService: CrudHttpService, private route: ActivatedRoute, private router:Router) { }

  idsala:any=''
  ngOnInit(): void {
    this.idsala=this.route.snapshot.paramMap.get("id");
    this.sala();
    
  }
}
