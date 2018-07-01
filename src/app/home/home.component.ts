import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //properties
  itemCount = 0;
  additem:string = "เพิ่มรายการ"; 
  listText:string;  
  listall = [];
  constructor() { }

  ngOnInit() {
    this.itemCount = this.listall.length;
  }

  additem1(){
  if(this.listText  != ''){
    this.listall.push(this.listText);
    this.listText = ''; 
    this.itemCount = this.listall.length;

  }
 
}

}
