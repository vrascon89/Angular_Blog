import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from './interface/post.interace';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  peliculas : Post[];

  constructor(private httpClient: HttpClient) { 
  
    this.peliculas =  [
    {
      titulo: 'El señor de los Anillos. La comunidad del anillo',
      texto: 'En la Tierra Media, el Señor Oscuro Sauron ordenó a los Elfos que forjaran los Grandes Anillos de Poder. Tres para los reyes Elfos, siete para los Señores Enanos, y nueve para los Hombres Mortales. Pero Saurón también forjó, en secreto, el Anillo Único, que tiene el poder de esclavizar toda la Tierra Media.',
      autor:'Peter Jackson',
      imagen:'http://static-1.ivoox.com/audios/9/3/6/8/641501138639_XXL.jpg',
      fecha: new Date ('2001'),
      categoria: 'Fantastico',
    },


  {
    titulo: 'El señor de los Anillos. Las dos torres',
    texto: 'Tras la disolución de la Compañía del Anillo, Frodo y su fiel amigo Sam se dirigen hacia Mordor para destruir el Anillo Único y acabar con el poder de Sauron, pero les sigue un siniestro personaje llamado Gollum. Mientras, y tras la dura batalla contra los orcos donde cayó Boromir, el hombre Aragorn, el elfo Legolas y el enano Gimli intentan rescatar a los medianos Merry y Pipin, secuestrados por los orcos de Mordor.',
    autor:'Peter Jackson',
    imagen: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/05/senor-anillos-dos-torres-2330211.jpg?itok=Ispftv7D',
    fecha: new Date ('2002'),
    categoria: 'Fantastico',
  },
  {
  titulo: 'El señor de los Anillos. El retorno del rey',
  texto: 'Las fuerzas de Saruman han sido destruidas, y su fortaleza sitiada. Ha llegado el momento de decidir el destino de la Tierra Media, y, por primera vez, parece que hay una pequeña esperanza. El interés del señor oscuro Sauron se centra ahora en Gondor, el último reducto de los hombres, cuyo trono será reclamado por Aragorn. Sauron se dispone a lanzar un ataque decisivo contra Gondor. Mientras tanto, Frodo y Sam continuan su camino hacia Mordor, con la esperanza de llegar al Monte del Destino.',
  autor:'Peter Jackson',
  imagen: 'https://www.tupuntodelatecnologia.com/wp-content/uploads/2019/10/lord-of-the-rings-the-return-of-the-king.png',
  fecha: new Date ('2003'),
  categoria: 'Fantastico',
},
{
  titulo: 'Indiana Jones .En busca del arca perdida',
  texto: 'Año 1936. Indiana Jones es un profesor de arqueología, dispuesto a correr peligrosas aventuras con tal de conseguir valiosas reliquias históricas. Después de una infructuosa misión en Sudamérica, el gobierno estadounidense le encarga la búsqueda del Arca de la Alianza, donde se conservan las Tablas de la Ley que Dios entregó a Moisés',
  autor:'George Lucas, Philip Kaufman',
  imagen: 'https://comicstores.es/imagenes/9789200/978920054728.JPG',
  fecha: new Date ('1981'),
  categoria: 'Aventura',
},
{
  titulo: 'Origen',
  texto: 'Dom Cobb (DiCaprio) es un experto en el arte de apropiarse, durante el sueño, de los secretos del subconsciente ajeno. La extraña habilidad de Cobb le ha convertido en un hombre muy cotizado en el mundo del espionaje, pero también lo ha condenado a ser un fugitivo y, por consiguiente, a renunciar a llevar una vida normal. Su única oportunidad para cambiar de vida será hacer exactamente lo contrario de lo que ha hecho siempre: la incepción, que consiste en implantar una idea en el subconsciente en lugar de sustraerla. Sin embargo, su plan se complica debido a la intervención de alguien que parece predecir cada uno de sus movimientos, alguien a quien sólo Cobb podrá descubrir' ,
  autor:'Christopher Nolan',
  imagen: 'https://www.aceprensa.com/wp-content/uploads/elementor/thumbs/27205-0-ov0x6ryw74xl6qlw6wq3r8yai1jb1gq80bq9hggu0w.jpg',
  fecha: new Date ('2010'),
  categoria: 'Thriller',
},
{
  titulo: 'Shutter Island',
  texto: 'En el verano de 1954, los agentes judiciales Teddy Daniels (DiCaprio) y Chuck Aule (Ruffalo) son destinados a una remota isla del puerto de Boston para investigar la desaparición de una peligrosa asesina (Mortimer) que estaba recluida en el hospital psiquiátrico Ashecliffe, un centro penitenciario para criminales perturbados dirigido por el siniestro doctor John Cawley (Kingsley). Pronto descubrirán que el centro guarda muchos secretos y que la isla esconde algo más peligroso que los pacientes. ',
  autor:'Christopher Nolan',
  imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeyeKN2mz3RqJQYMcRaUbaeC1ju_UtDOdZrw&usqp=CAU',
  fecha: new Date('2010'),
  categoria: 'Thriller',
},
{
  titulo: 'Gladiator',
  texto: 'En el año 180, el Imperio Romano domina todo el mundo conocido. Tras una gran victoria sobre los bárbaros del norte, el anciano emperador Marco Aurelio (Richard Harris) decide transferir el poder a Máximo (Russell Crowe), bravo general de sus ejércitos y hombre de inquebrantable lealtad al imperio. Pero su hijo Cómodo (Joaquin Phoenix), que aspiraba al trono, no lo acepta y trata de asesinar a Máximo ',
  autor: 'Ridley Scott',
  imagen: 'https://r3.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic2.abc.es%2Fmedia%2Fpeliculas%2F000%2F000%2F247%2Fgladiator-el-gladiador-1.jpg&nuevoancho=690&medio=abc',
  fecha: new Date ('2000'),
  categoria: 'Historia',
},
{
  titulo: 'La vida es Bella',
  texto: 'En 1939, a punto de estallar la Segunda Guerra Mundial (1939-1945), el extravagante Guido llega a Arezzo, en la Toscana, con la intención de abrir una librería. Allí conoce a la encantadora Dora y, a pesar de que es la prometida del fascista Rodolfo, se casa con ella y tiene un hijo. Al estallar la guerra, los tres son internados en un campo de exterminio, donde Guido hará lo imposible para hacer creer a su hijo que la terrible situación que están padeciendo es tan sólo un juego ',
  autor:'Roberto Benigni',
  imagen: 'https://es.web.img3.acsta.net/medias/nmedia/18/67/61/66/20098979.jpg',
  fecha: new Date('1997'),
  categoria: 'Drama',
},
{
  titulo: 'Salvar al Soldado Ryan',
  texto: 'Segunda Guerra Mundial, 1944. Tras el desembarco de los Aliados en Normandía, a un grupo de soldados americanos se le encomienda una peligrosa misión: poner a salvo al soldado James Ryan. Los hombres de la patrulla del capitán John Miller deben arriesgar sus vidas para encontrar a este soldado, cuyos tres hermanos han muerto en la guerra. Lo único que se sabe del soldado Ryan es que se lanzó con su escuadrón de paracaidistas detrás de las líneas enemigas.  ',
  autor:'Steven Speilberg',
  imagen: 'https://es.web.img3.acsta.net/pictures/14/03/05/09/42/163621.jpg',
  fecha: new Date('1998'),
  categoria: 'Bélica',
},
{
  titulo: 'Lilo & Stitch ',
  texto: 'Lilo, una niña hawaiana que se siente sola, decide adoptar un "perro" muy feo al que llama Stitch, que podría ser la compañía perfecta si no fuera en realidad el fruto de un experimento genético que se ha escapado de un planeta alienígena y que ha aterrizado en la tierra por casualidad. Con su amor y su inquebrantable fe en el "ohana" (el concepto hawaiano de la familia), Lilo termina conquistando el corazón de Stitch y le ofrece algo que el original perro nunca pensó tener: un hogar.',
  autor:'Chris Sanders',
  imagen: 'https://images-na.ssl-images-amazon.com/images/I/91ZI8SZYt5L._SL1500_.jpg',
  fecha: new Date('2002'),
  categoria: 'Animación',
},

]
  }

  getAllPost() : Promise<Post[]>{
    return new Promise<Post[]>((resolve, reject)=>{
      resolve(this.peliculas);
      console.log(this.peliculas)
    })
  };

  agregarPost(pPost){
    pPost.categoria = pPost.categoria.toUpperCase();
    
    this.peliculas.push(pPost);
    //uso de localStorage, prueba numero 3
    localStorage.setItem('arrPeliculas', JSON.stringify(this.peliculas));
  }

  getPostsByCategoria(pCategoria: string) : Promise<Post[]>{
    return new Promise <Post[]>((resolve, reject)=>{
      const arrFilmCat = []; //se guardan las categorías en el array
      //guardamos las categorias en un array a través de un for que recorra todas las categorías de nuestros POST's de peliculas
      for(let pelicula of this.peliculas){
        if(pelicula.categoria === pCategoria){
          arrFilmCat.push(pelicula)
        }
      }
      resolve(arrFilmCat);
    })
  }

  getCategorias(): string[]{ 
    const arrCat = this.peliculas.map(arrCategorias => arrCategorias.categoria);
    return [...new Set(arrCat)];

    //ar nuevo_array = arr.map(function callback(currentValue, index, array) {
    // Elemento devuelto de nuevo_array
  //}[, thisArg]
  }



}
