import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CrudHttpService } from '../crud-http.service';
import { NgxWheelComponent, TextAlignment, TextOrientation } from 'ngx-wheel'

@Component({
  selector: 'app-jugar',
  templateUrl: './jugar.component.html',
  styleUrls: ['./jugar.component.sass']
})
export class JugarComponent implements OnInit {

  @ViewChild(NgxWheelComponent, { static: false }) wheel:any;

  seed = [...Array(12).keys()]
  idToLandOn: any;
  items!: any[];
  textOrientation: TextOrientation = TextOrientation.HORIZONTAL
  textAlignment: TextAlignment = TextAlignment.OUTER









  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  todoList:any = [];

  constructor(private crudHttpService: CrudHttpService){}

  ngOnInit(): void {
    this.listsalas();
    this.idToLandOn = this.seed[Math.floor(Math.random() * this.seed.length)];
    const colors = ['#FF0000', '#000000']
    this.items = this.seed.map((value) => ({
      fillStyle: colors[value % 2],
      text: `Prize ${value}`,
      id: value,
      textFillStyle: 'white',
      textFontSize: '16',
      width:'600',
      height:'600'
    }))




  }

  reset() {
    this.wheel.reset()
  }
  before() {
    alert('Your wheel is about to spin')
  }

  async spin(prize:any) {
    this.idToLandOn = prize
    await new Promise(resolve => setTimeout(resolve, 0));
    this.wheel.spin()
  }

  after() {
    alert('You have been bamboozled')
  }











  listsalas(){
    this.crudHttpService.list().subscribe((response)=>{
      this.todoList = response;
    },(error=>{

    }));
  }






}
