import { Component, OnInit } from '@angular/core';
import { CrudHttpService } from 'src/app/crud-http.service';
import { ActivatedRoute } from "@angular/router";
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
  }





  actuusuario(){

    let data={
        nombre:`Juanito`,
        salaId: parseInt(this.id)
    }
    this.crudHttpService.createuser(data).subscribe((response)=>{
      this.listsalas();
    },(error=>{
    }));
  }
}
