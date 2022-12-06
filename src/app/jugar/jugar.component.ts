import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CrudHttpService } from '../crud-http.service';

import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-jugar',
  templateUrl: './jugar.component.html',
  styleUrls: ['./jugar.component.sass']
})
export class JugarComponent implements OnInit {




  todoList:any = [];

  constructor(private crudHttpService: CrudHttpService, private route: ActivatedRoute){}


  id:any =""
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get("id");
   this.listsalas()
   
    
  }







  index:any = [];
  users:any = [];


listsalas(){
    this.crudHttpService.list().subscribe((response)=>{
      this.todoList = response;
      for(let i = 0 ; i < Object.entries(response).length ; i++){
        let valor={
          "id":this.todoList[i].id,
          "valor":this.todoList[i].precio
        }
        this.index.push(valor);

        console.log("idex",this.index[i].id)
        this.crudHttpService.listusers(this.index[i].id).subscribe((response)=>{
          console.log("este es el response",Object.entries(response).length)
          let cantidad={
            "cantidad":Object.entries(response).length,
            "ganancia":(this.index[i].valor*Object.entries(response).length)
          }
          this.users.push(cantidad)
        },(error=>{
        }));

    }

      
    },(error=>{

    }));

  
  }






}
