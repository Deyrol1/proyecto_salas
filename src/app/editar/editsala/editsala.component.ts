import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { CrudHttpService } from 'src/app/crud-http.service';
import { salas } from 'src/app/clases/salas';

@Component({
  selector: 'app-editsala',
  templateUrl: './editsala.component.html',
  styleUrls: ['./editsala.component.sass']
})
export class EditsalaComponent implements OnInit {

  todoList:any = [];

  listsalas(){
    this.crudHttpService.list().subscribe((response)=>{
      this.todoList = response;
    },(error=>{

    }));
    this.router.navigate(['salas']);
  }




  createTodo(){
    let todo:salas = {
    
      
      title:this.datos[0].title,
      capacidad:parseInt(this.datos[0].capacidad),
      precio:parseInt(this.datos[0].precio)
    }
    this.crudHttpService.update(this.idsala,todo).subscribe((response)=>{
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


  constructor(private crudHttpService: CrudHttpService, private route: ActivatedRoute, private router:Router) { }

  idsala:any=''
  ngOnInit(): void {
    this.idsala=this.route.snapshot.paramMap.get("id");
    this.sala();
    
  }
}
