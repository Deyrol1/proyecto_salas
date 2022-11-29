import { Component, OnInit } from '@angular/core';
import { CrudHttpService } from 'src/app/crud-http.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.sass']
})
export class SalasComponent implements OnInit {
  title = 'angular-service-app';

  todoList:any = [];
  todoUsers:any = [];

  constructor(private crudHttpService: CrudHttpService,  private route: ActivatedRoute){}

  id:any =''
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get("id");
    this.listsalas();
    this.listusers();
    console.log(this.todoUsers)
  }

  listusers(){
    this.crudHttpService.listusers(this.id).subscribe((response)=>{
      this.todoUsers =(response)
      console.log(this.todoList)
    },(error=>{
    }));
  }

  listsalas(){
    this.crudHttpService.list().subscribe((response)=>{
      this.todoList = response;
    },(error=>{


    }));
  }



  editTodo(todo: any){
    let data = {
      title:`Sala Nro 1`,
    }
    this.crudHttpService.update(todo.id,data).subscribe((response)=>{
      this.listsalas();
    },(error=>{

    }));
  }

  deleteTodo(id: any){
    this.crudHttpService.delete(id).subscribe((response)=>{
      this.listsalas();
    },(error=>{
    }));
  }

}
