import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent  {

//component constructor is used to create an instance of the Service and specify a dependency 

  constructor(private _dataService: DataService) { 
  }
  

//get accessor returns the colourPreference variable value from Service 
  get colour(){
    return this._dataService.colourPreference; 
  }

//set accessor sets a value to colourPreference variable from Service 

  set colour(value:string){
    this._dataService.colourPreference = value; 
  }


  
 	msg:string = "Hello World"; 

 	@Output() msgEvent = new EventEmitter(); 

 	sendMsgEvent(){
 		this.msgEvent.emit(this.msg); 
 	}



 	@Input() parentMsg:string ; 


}
