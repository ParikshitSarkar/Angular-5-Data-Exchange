import { Component} from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.scss']
})
export class SiblingComponent {

  myMsg:string;

//component constructor is used to create an instance of the Service and specify a dependency 
  constructor(private _dataService : DataService) { 

  }

//get accessor returns the colourPreference variable value from Service 

  get colour(){
    return this._dataService.colourPreference; 
  }

//set accessor sets a value to colourPreference variable from Service 

  set colour(value:string){
    this._dataService.colourPreference = value; 
  }

}
