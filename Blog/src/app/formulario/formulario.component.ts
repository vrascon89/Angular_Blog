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
    
  constructor() { 
    this.formulario = new FormGroup({
      titulo: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ])
    })
  }

  ngOnInit(): void {
  }
  onSubmit(){

  }
}
