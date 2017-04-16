/**
 * Created by bad4iz on 03.04.2017.
 */
export class Icon{
  constructor(className){
    this.i = document.createElement('i');
    this.i.className = 'fa ' + className;
  }
  view(){
    return this.i;
  }
  
}