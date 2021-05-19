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
    this.listaPeliculas = []; //listado de peliculas
    this.categPeliculas = []; //categorias de peliculas

  }

  async ngOnInit(){  
    if(localStorage.getItem('arrPeliculas')){
      //llevamos la pelicula a una variable para transformarlo en un formatoJson
      const strJson = localStorage.getItem('arrPeliculas');
      this.listaPeliculas = JSON.parse(strJson);
      //console.log(strJson)
    }else{
      this.listaPeliculas = [];
    };

    try {
      this.listaPeliculas = await this.backendApiService.getAllPost(); //async está en ngOnInit
    }catch (error){

    }
    this.categPeliculas = this.backendApiService.getCategorias();
  }

  
  async onChange($event){
      if($event.target.value === 'todasCat'){
        this.listaPeliculas = await this.backendApiService.getAllPost();
      }else{
        this.listaPeliculas = await this.backendApiService.getPostsByCategoria($event.target.value);
      }
    }catch(error){

  }
}

