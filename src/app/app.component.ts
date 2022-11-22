import { Component } from '@angular/core';
import { CrudHttpService } from './crud-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-service-app';

  todoList:any = [];

  constructor(private crudHttpService: CrudHttpService){}

  ngOnInit(): void {
    this.listsalas();
  }

  listsalas(){
    this.crudHttpService.list().subscribe((response)=>{
      this.todoList = response;
    },(error=>{

    }));
  }

  createTodo(){
    let todo = {
      id: new Date().getTime(),
      title:`Some Todo`
    }
    this.crudHttpService.create(todo).subscribe((response)=>{
      this.listsalas();
    },(error=>{

    }));
  }

  editTodo(todo: any){
    let data = {
      id: '123454',
      title:`Some Todo`
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