import { Component, ViewChild, } from '@angular/core';
import { FilterViewService } from '../services/filter-view.service';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-filter-and-view-row',
  templateUrl: './filter-and-view-row.component.html',
  styleUrls: ['./filter-and-view-row.component.css']
})
export class FilterAndViewRowComponent {
 

  constructor(private filterViewService: FilterViewService,) { 
    console.log("inside filter view constructor")
    this.getAllCategory();
  }
  // @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  filterViewArrs:any[]=[];
  sortByList:any[]=["Popularity","Newest First","Price - Low to High","Price - High to Low"];
  sortSelected:any;

  

  getAllCategory() {
    this.filterViewService.getAllCategory().subscribe({ 
      next: (data) => {
        console.log("categories got from backend are")
         //console.log(data) 
         this.filterViewArrs=data;
         //console.log(this.filterViewArrs);
        }, 
    error: (err) => { 
      console.log(err) 
    } });
  }

  sortHandle(elem:any){
    console.log("inside sort handle")
   console.log(elem);
   
  }

  handleFilter(elem:any){
    console.log("inside handle filter")
  console.log(elem);
  }
  changeToListView(){
  console.log(" to list view")
  }
  changeToGridView(){
  console.log("to grid view")
  }

 

}
