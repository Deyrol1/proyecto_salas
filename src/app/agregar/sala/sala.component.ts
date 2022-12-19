import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudHttpService } from 'src/app/crud-http.service';
import { salas } from 'src/app/clases/salas';
@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.sass']
})
export class SalaComponent implements OnInit {

  id:string='';
  nombre:string='';

  capacidad:string =''
  precio:string =''

  todoList:any = [];

  listsalas(){
    this.crudHttpService.list().subscribe((response)=>{
      this.todoList = response;
    },(error=>{

    }));
  }




  createTodo(){
    let todo:salas = {
      title:this.nombre,
      capacidad:parseInt(this.capacidad),
      precio:parseInt(this.precio)
    }
    this.crudHttpService.create(todo).subscribe((response)=>{
      this.listsalas();
    },(error=>{

    }));
  }

  datos:any=[];

  sala(){
    this.crudHttpService.datossala(this.idsala).subscribe((response)=>{
    
 
      this.datos=response
    },(error=>{

    }));
  }


  constructor(private crudHttpService: CrudHttpService, private route: ActivatedRoute) { }

  idsala:any=''
  ngOnInit(): void {
    this.idsala=this.route.snapshot.paramMap.get("id");
    this.sala();
    
  }

}
