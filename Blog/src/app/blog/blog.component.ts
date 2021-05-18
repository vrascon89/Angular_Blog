import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../backend-api.service';
import { Post } from '../interface/post.interace';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  listaPeliculas: Post[];
  categPeliculas: string[];// solo nos interesa que sea de tipo string, ya que solo vamos a querer la categoría.

  constructor(private backendApiService: BackendApiService) { 
    this.listaPeliculas = [];
    this.categPeliculas = [];

  }

  ngOnInit(){  




  }
  onChange($event){
      
  }
}
