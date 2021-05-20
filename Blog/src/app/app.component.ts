import { Component } from '@angular/core';
import { Post } from './interface/post.interace'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  disable : string;
  constructor(){}
  
    onClick(pComponent){
      this.disable = pComponent;
  }

}
