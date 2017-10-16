import { Component } from '@angular/core';
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
export class AppComponent {
  test = 'test ng4';
  data: Observable<Array<any>>;
  counts: Observable<Array<any>>;
  dd: Array<any>;

  constructor(private dataService: DataService) {
    this.data = dataService.getData();
    this.counts = dataService.getNumbers();
   }


  onHeart(event) {
    // var like = parseInt($(".likes:first-child h1").text())+1;
    // $(".likes:first-child h1").text(like);
    console.log("heart ");
  //  this.counts.subscribe( hearts => console.log('z: ', hearts[0].hearts))
  //  this.counts[0].hearts +=1;
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
  console.log("comment ");

}

onShare(event) {
  console.log("popup ");

}

}
