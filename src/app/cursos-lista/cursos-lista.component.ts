import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'
import { Curso } from '../../models/curso/curso';
@Component({
  selector: 'cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css']
})
export class CursosListaComponent implements OnInit {

  cursosObservable: Observable<Curso[]>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.cursosObservable =
      this.getCursos('/cursos');
  }

  getCursos(listPath): Observable<Curso[]> {
    return this.db.list(listPath)
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }));
      });
  }

  deletarCurso(curso: Curso){
    this.db.list('/cursos').remove(curso.key);
  }
}
