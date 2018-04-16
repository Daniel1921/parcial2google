import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Curso } from '../../models/curso/curso';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
  }
  curso: Curso = {

    titulo: "",
    descricao: "",
    url: ""
  };


  onSubmit() {
    this.db.list('/cursos').push(this.curso);
    this.curso = {
      titulo: "",
      descricao: "",
      url: ""
    };

  }
 

}
