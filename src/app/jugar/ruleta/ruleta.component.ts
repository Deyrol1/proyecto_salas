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
  ganadorfinal:any = [];



    
  
  numero:any=''
  codigo:any=''
  ush:any
  listusers(){
    this.crudHttpService.listusers(this.id).subscribe((response)=>{
      this.todoList =(response)
        this.codigo= Math.floor(Math.random() * this.todoList.length);
        this.numero = this.todoList[this.codigo].id;
        this.ganadorfinal= this.todoList[this.codigo];

    },(error=>{
     
    }));
  }

  constructor(private crudHttpService: CrudHttpService, private route: ActivatedRoute) { }


  ganador:any=''
  timer:any=null
  stopTimer() {
      clearInterval(this.timer);
      clearInterval(this.ush);
      this.ganador="Es el ganador"
 
  }

  resultado(){
    
    console.log("ush1",this.ganadorfinal)
    console.log("numero",this.numero)
    console.log("ush2",this.ganadorfinal.usuario)
    console.log("ush2",this.ganadorfinal.usuario.nombre)

  
    let data={
      nombre:this.ganadorfinal.usuario.nombre,
      salaId: parseInt(this.ganadorfinal.usuario.salaId),
      email:this.ganadorfinal.usuario.email,
      contrasena:this.ganadorfinal.usuario.contrasena,
      cedula:this.ganadorfinal.usuario.cedula
  }
  console.log("hey",data)
  this.crudHttpService.createwinner(data).subscribe((response)=>{
    
  },(error=>{
  }));
  }


  id:any =""
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get("id");
   
    this.startTimer();

   
  }

  esperar(){
    this.ush = setInterval(() => {  this.stopTimer();  }, 1000);
  }


  startTimer() {
    
    this.esperar()
    this.timer = setInterval(() => {  this.listusers();  }, 90);
  }
}
