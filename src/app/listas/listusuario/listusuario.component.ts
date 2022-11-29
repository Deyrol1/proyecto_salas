import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudHttpService } from 'src/app/crud-http.service';

@Component({
  selector: 'app-listusuario',
  templateUrl: './listusuario.component.html',
  styleUrls: ['./listusuario.component.sass']
})
export class ListusuarioComponent implements OnInit {



  todoList:any = [];

  listusers(){
    this.crudHttpService.listusers(this.id).subscribe((response)=>{
      this.todoList =(response)
      console.log(this.todoList)
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
