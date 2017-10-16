import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './app.service';
// import { Data ,Data2 } from './data';
// import { DATA,DATA2 } from './mock-data';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]
})
export class AppComponent implements OnInit{
  test = 'test ng4';
  location = window.location;
  hide = false;
  hide2 = false
  data = [];
  counts = [];

  constructor(private dataService: DataService) { }

 ngOnInit(){
   this.dataService.getData()
   .subscribe(
     data => {this.data = data}
   );
   this.dataService.getNumbers()
   .subscribe(
     counts => {this.counts = counts}
   );
 }

  onHeart(event) {
    console.log("heart ");
    this.counts[0].hearts = parseInt(this.counts[0].hearts)+1;
 }

 onFollow(event) {
   console.log("follow ");
   this.counts[0].followers = parseInt(this.counts[0].followers)+1;

 }
 onSort(event) {
   console.log("sort ");
   event.preventDefault();
   if(this.data[0].day != "1d"){
     this.data.sort((a,b)=>{
       return parseInt(a.day) - parseInt(b.day)
     });
   }else{
     this.data.sort((a,b)=>{
       return parseInt(b.day) - parseInt(a.day)
     });
   }

}

onHide(event) {
  console.log("hide");
  event.preventDefault();

}

onHidePopup(event){
  console.log("hide popup");
  this.hide = false
}

onComment(event) {
      console.log("comment ",event.target.value);
      var ran = Math.floor(Math.random()*10).toString()+"d";
      var ran2 = Math.floor(Math.random()*100).toString();
      var value= {
        "avatar": "assets/images/avatar.jpg",
        "name": "Robert L " + ran2,
        "day":  ran,
        "message": event.target.value
      };
      this.data.push(value);
}

onShare(event) {
  console.log("popup");
  this.hide = true
}



}
