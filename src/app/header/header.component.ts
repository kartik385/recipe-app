import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selectOption=new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeClick(){
    this.selectOption.emit(`recipe`);
  }
  onShoppingClick(){
    this.selectOption.emit(`shopping`);
  }

}
