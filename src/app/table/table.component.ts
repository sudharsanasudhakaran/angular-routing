import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  dataList= [];
  temp;
  constructor() { 
   // this.temp = shared.getOption()
    this.dataList = []
    for(let ts in this.temp){
      console.log({name:ts, price:this.temp[ts].price, stock: this.temp[ts].stock})
      this.dataList.push({name:ts, price:this.temp[ts].price, stock: this.temp[ts].stock})
    }
    // for(let i= 0; i< ; i++){
    //   this.dataList.push(JSON.parse(localStorage.getItem(i.toString())))
    // }
  }



  ngOnInit(): void {
  }

}