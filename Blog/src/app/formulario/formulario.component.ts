import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../backend-api.service';
import { Post } from '../interface/post.interace';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
  formulario : FormGroup;
    
  constructor(private backendApiService: BackendApiService) { 
    this.formulario = new FormGroup({
      titulo: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      autor: new FormControl('',[
        Validators.required
      ]),
      texto: new FormControl('',[
        Validators.required
      ]),
      imagen: new FormControl('',[
        Validators.required
      ]),
      fecha: new FormControl('',[
        Validators.required
      ]),
      categoria: new FormControl('',[
        Validators.required
      ])
    });
  };

  ngOnInit(): void {
  }
  onSubmit(){
    this.backendApiService.agregarPost(this.formulario.value);
    console.log(this.formulario.value);

    this.formulario.reset();
  }
}
