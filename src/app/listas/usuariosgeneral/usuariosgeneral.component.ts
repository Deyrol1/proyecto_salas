import { Component, OnInit } from '@angular/core';
import { CrudHttpService } from 'src/app/crud-http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuariosgeneral',
  templateUrl: './usuariosgeneral.component.html',
  styleUrls: ['./usuariosgeneral.component.sass']
})
export class UsuariosgeneralComponent implements OnInit {


  todoList:any = [];

  listsalas(){
    this.crudHttpService.ususariosgeneral().subscribe((response)=>{
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
    this.crudHttpService.deleteusuario(id).subscribe((response)=>{
      this.listsalas();
    },(error=>{
    }));
  }
 


  constructor(private crudHttpService: CrudHttpService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listsalas();
  }

}
