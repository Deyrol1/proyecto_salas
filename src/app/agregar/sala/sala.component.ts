import { Component, OnInit } from '@angular/core';
import { CrudHttpService } from 'src/app/crud-http.service';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.sass']
})
export class SalaComponent implements OnInit {

  id:string='';
  nombre:string='';

  todoList:any = [];

  listsalas(){
    this.crudHttpService.list().subscribe((response)=>{
      this.todoList = response;
    },(error=>{

    }));
  }


  createTodo(){
    let todo = {
      id: this.id,
      title:this.nombre
    }
    this.crudHttpService.create(todo).subscribe((response)=>{
      this.listsalas();
    },(error=>{

    }));
  }

  constructor(private crudHttpService: CrudHttpService) { }

  ngOnInit(): void {
  }

}
