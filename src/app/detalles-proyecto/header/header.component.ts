import { Component, OnInit } from '@angular/core';

import { ProyectosNewStartapService } from 'src/app/services/proyectos-new-startap.service';
import { DataProyects } from '../../model/data-proyects';
import { map } from 'rxjs/operators';

import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public secciones: Array<string> = ['primera', 'segunda', 'tercera', 'cuarta', 'quinta'];


  
  id: any;
  key: any = {};

  //Variables Participantes NAME
  var1: any = {}; var2: any = {}; var3: any = {}; var4: any = {}; var5: any = {};
  var6: any = {}; var7: any = {}; var8: any = {}; var9: any = {}; var10: any = {};
  var11: any = {}; var12: any = {}; var13: any = {}; var14: any = {}; var15: any = {};
  var16: any = {}; var17: any = {}; var18: any = {}; var19: any = {}; var20: any = {};
  var21: any = {};

  //Variables fotos participantes
  var22: any = {};
  var23: any = {};


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
      console.log(this.key);
      this.var1 = data[this.id];
      this.var2 = data[this.id];
      this.var3 = data[this.id];
      this.var4 = data[this.id];
      this.var5 = data[this.id];
      this.var6 = data[this.id];
      this.var7 = data[this.id];
      this.var8 = data[this.id];
      this.var9 = data[this.id];
      this.var10 = data[this.id];
      this.var11 = data[this.id];
      this.var12 = data[this.id];
      this.var13 = data[this.id];
      this.var14 = data[this.id];
      this.var15 = data[this.id];
      this.var16 = data[this.id];
      this.var17 = data[this.id];
      this.var18 = data[this.id];
      this.var19 = data[this.id];
      this.var20 = data[this.id];
      
      this.var21 = [{name: this.var1.PARTICIPANTE1NAME, imagen: this.var1.PARTICIPANTE1IMAGEN, link: this.var1.PARTICIPANTE1LINK},
                    {name: this.var2.PARTICIPANTE2NAME, imagen: this.var2.PARTICIPANTE2IMAGEN, link: this.var2.PARTICIPANTE2LINK},
                    {name: this.var3.PARTICIPANTE3NAME, imagen: this.var3.PARTICIPANTE3IMAGEN, link: this.var3.PARTICIPANTE3LINK},];

      

      

      console.log(this.var21);

      
    });

  }
  
}



