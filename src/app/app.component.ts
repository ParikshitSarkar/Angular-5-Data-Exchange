import { Component, OnInit} from '@angular/core';
import { DataService } from './data.service'; 

@Component({
  selector: 'app-root ',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Data Exchange';

  constructor() { }

   

  // implement OnInit's `ngOnInit` method
  ngOnInit() { 
  	
   }

  message:string; 

  rcvMsgEvent($event){
  	this.message = $event; 
  }

  //Passing parent message to child 

  mainMsg:string = "Hola Mundo";


}
