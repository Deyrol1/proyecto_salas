import { Component, OnInit } from '@angular/core';
import { CrudHttpService } from 'src/app/crud-http.service';

@Component({
  selector: 'app-ganadores',
  templateUrl: './ganadores.component.html',
  styleUrls: ['./ganadores.component.sass']
})
export class GanadoresComponent implements OnInit {
  todoList:any = [];

  listusers(){
    this.crudHttpService.ganadoresgeneral().subscribe((response)=>{
      this.todoList =(response)
      console.log(this.todoList)
    },(error=>{
    }));
  }

  constructor(private crudHttpService: CrudHttpService) { }


  ngOnInit(): void {
    this.listusers();
  }


}
