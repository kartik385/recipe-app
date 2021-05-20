import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  typeHeader:string="recipe";
  onHeaderClick(event:string){
      this.typeHeader=event;
  }
  loadCondition():boolean{
    return this.typeHeader==="recipe"?true:false;
  }
  
}
