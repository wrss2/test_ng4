import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './app.service';
// import { Data ,Data2 } from './data';
//
// import { DATA,DATA2 } from './mock-data';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]
})
export class AppComponent implements OnInit{
  test = 'test ng4';
  data: Observable<Array<any>>;
  counts: Observable<Array<any>>;
  constructor(private dataService: DataService) { }

 ngOnInit(){
   this.data = this.dataService.getData();
   this.counts = this.dataService.getNumbers();
 }
  onHeart(event) {

    console.log("heart ");

 }

 onFollow(event) {
   console.log("follow ");

 }
 onSort(event) {
   console.log("sort ");

}

onHide(event) {
  console.log("hide ");
}

onComment(event) {

  if(event.keyCode == 13) {
      console.log("comment ",event.target.value);
      var value= {
        "avatar": "assets/images/avatar.jpg",
        "name": "Mike Ross 0",
        "day": "0d",
        "message": event.target.value
      };


  }

}

onShare(event) {
  console.log("popup ");

}



}
