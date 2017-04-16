/**
 * Created by bad4iz on 03.04.2017.
 
 <header>
 <h5>
 <i class="fa fa-arrow-down"></i>
 Tabs inside of the body
 </h5>
 </header>
 
 */
import {Icon} from "../label";
export class Header {
  constructor(title){
    this.header = document.createElement('header');
    let h5 = document.createElement('h5');
    h5.appendChild(new Icon(' fa-puzzle-piece').view());
    h5.appendChild(document.createTextNode(' ' + title));
    this.header.appendChild(h5);
  }
 getThe(){
    return this.header;
 }
}