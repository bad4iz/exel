/**
 * C
 */
let group = [
   {
     id: 1,
     groupQuestions: 'первая группа'
   },
  {
     id: 2,
     groupQuestions: 'вторая группа'
   },
  {
     id: 3,
     groupQuestions: 'третья группа'
   },
   ];
let item = {
    id: 4,
    groupQuestions: '4 группа'
};
import {Tab} from "./components/tabs/tab";
import { TabGroupQuestions } from "./views/tabs/tabGroupQuestions";
import {httpPost} from "../../../dist/link/js/audit/lib";

httpPost("app", 'getGroupQuestionsAll')
.then(
   response => {
     let resp = JSON.parse(response);
     console.log(resp);
   },
   error => console.log(`Rejected: ${error}`)
);


let a = document.getElementById('tabsGroup');
let tab = new TabGroupQuestions(group);

a.appendChild(tab.getThe());
