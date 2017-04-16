/**
 * Created by bad4iz on 04.04.2017.
 */
/**
 * Created by bad4iz on 03.04.2017.
 */
import {Header} from "./header";
import {AddButton} from "../buttons/addButton";
export class Tab {
  constructor(id, groupQuestions) {
    this.id = id;
    this.groupQuestions = groupQuestions;
    this.section = document.createElement('section');
    this.body = document.createElement('div');
    
    this.div = document.createElement('div');
    this.div.id = "myTabContent";
    this.div.className = "tab-content";
    
    this.button = new AddButton();
    this.section.className = 'widget';
    this.header = 'Заголовок';
    this.view();
    this.section.appendChild(this.header);
    this.section.appendChild(this.body);
  }
  
  getThe() {
    return this.section
  }
  
  /**
   * создаем элемент li шапка таба
   * @param id
   * @param name
   * @returns {Element}
   */
  createLi(id, name) {
    let li = document.createElement('li'),
       a = document.createElement('a');
    a.href = '#tab' + id;
    a.textContent = name;
    a.setAttribute('data-toggle', 'tab');
    li.appendChild(a);
    return li;
  }
  
  /**
   * создаем тело таба
   * @param id
   * @param name
   * @returns {Element}
   */
  createDiv(el) {
    let div = document.createElement('div');
  
    div.className = "tab-pane fade";
    div.id = 'tab' + this.id;
  
    div.appendChild(el);
    this.div.appendChild(div);
    this.body.appendChild(div);
  }
  
  /**
   * устанавливаем заголовок
   * @param title
   */
  set header(title) {
    if (this._header) {
      let old = this.header;
      this._header = new Header(title);
      this.section.replaceChild(this.header, old);
    } else {
      this._header = new Header(title);
    }
    
  }
  
  /**
   * получаем элемент виртуалдом заголовка
   * @returns {*}
   */
  get header() {
    return this._header.getThe();
  }
  
  /**
   * прорисовка тела таба
   */
  view() {
    
    while (this.body.lastChild) {
      this.body.removeChild(this.body.lastChild);
    }
    
    console.log(this.group);
    let ul = document.createElement('ul');
    
    this.body.className = 'body';
    
    ul.id = "myTab";
    ul.className = "nav nav-tabs";
    
    ul.appendChild(this.createLi(this.id, this.groupQuestions));
    
    ul.appendChild(this.button.view());
    this.body.appendChild(ul);
    
  }
}