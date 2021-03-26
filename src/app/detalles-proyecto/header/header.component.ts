import { Component, OnInit } from '@angular/core';

import { ProyectosNewStartapService } from 'src/app/services/proyectos-new-startap.service';
import { DataProyects } from '../../model/data-proyects';
import { map } from 'rxjs/operators';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  id: any;
  key: any = {
    title: '',
    description: '',
    published: false
  };

  constructor(private proyectosService: ProyectosNewStartapService, private ruta:ActivatedRoute){ 
  }

  ngOnInit(): void {
    this.id = this.ruta.snapshot.paramMap.get('id');
    this.retrieveProyects();
  }

  retrieveProyects(): void {
    this.proyectosService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.key = data[this.id];
      console.log(this.key)
    });

  }
  
}