import { Component, OnInit } from '@angular/core';
import { ProyectosNewStartapService } from 'src/app/services/proyectos-new-startap.service';
import { DataProyects } from '../../model/data-proyects';
import { map } from 'rxjs/operators';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {
  proyectos?: DataProyects[];
  currentTutorial?: DataProyects;
  currentIndex = -1;
  title = '';


  constructor(private proyectosService: ProyectosNewStartapService, private ruta: ActivatedRoute, private router: Router) { 
    
  }


  ngOnInit(): void {
    this.retrieveTutorials();
  }


  retrieveTutorials(): void {
    this.proyectosService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.proyectos = data;
    });
  }
}


