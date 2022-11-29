import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudHttpService } from 'src/app/crud-http.service';

@Component({
  selector: 'app-ruleta',
  templateUrl: './ruleta.component.html',
  styleUrls: ['./ruleta.component.sass']
})
export class RuletaComponent implements OnInit {

  

  aleatorio:any=[]
  todoList:any = [];

  listusers(){
    this.crudHttpService.listusers(this.id).subscribe((response)=>{
      this.todoList =(response)
      console.log(this.todoList)
      this.aleatorio.push(this.todoList[Math.floor(Math.random() * this.todoList.length)]) ;
      console.log("ganador",this.aleatorio)
    },(error=>{
    }));
  }

  constructor(private crudHttpService: CrudHttpService, private route: ActivatedRoute) { }

  id:any =""
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get("id");
    this.listusers();

  }

}
