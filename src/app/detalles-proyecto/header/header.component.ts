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
  var1: any = {};
  var2: any = {};
  var3: any = {};
  var4: any = {};
  var5: any = {};
  var6: any = {};
  var7: any = {};
  var8: any = {};
  var9: any = {};
  var10: any = {};
  var11: any = {};
  var12: any = {};
  var13: any = {};
  var14: any = {};
  var15: any = {};
  var16: any = {};
  var17: any = {};
  var18: any = {};
  var19: any = {};
  var20: any = {};
  var21: any = {};
  var22: any = {};
  var23: any = {};
  var24: any = {};
  var25: any = {};
  var26: any = {};
  var27: any = {};
  var28: any = {};
  var29: any = {};
  var30: any = {};
  var31: any = {};
  var32: any = {};
  var33: any = {};
  var34: any = {};
  var35: any = {};
  var36: any = {};
  var37: any = {};
  var38: any = {};
  var39: any = {};
  var40: any = {};
  var41: any = {};
  var42: any = {};
  var43: any = {};
  var44: any = {};
  var45: any = {};
  var46: any = {};
  var47: any = {};
  var48: any = {};
  var49: any = {};
  var50: any = {};
  var51: any = {};
  var52: any = {};
  var53: any = {};
  var54: any = {};
  var55: any = {};
  var56: any = {};
  var57: any = {};
  var58: any = {};
  var59: any = {};
  var60: any = {};
  var61: any = {};
  var62: any = {};
  var63: any = {};
  var64: any = {};
  var65: any = {};
  var66: any = {};
  var67: any = {};
  var68: any = {};
  var69: any = {};
  var70: any = {};
  var71: any = {};
  var72: any = {};
  var73: any = {};
  var74: any = {};
  var75: any = {};
  var76: any = {};
  var77: any = {};
  var78: any = {};
  var79: any = {};
  var80: any = {};
  var81: any = {};
  var82: any = {};
  var83: any = {};
  var84: any = {};
  var85: any = {};
  var86: any = {};
  var87: any = {};
  var88: any = {};
  var89: any = {};
  var90: any = {};
  var91: any = {};
  var92: any = {};
  var93: any = {};
  var94: any = {};
  var95: any = {};
  var96: any = {};
  var97: any = {};
  var98: any = {};
  var99: any = {};
  var100: any = {};
  //Variables fotos participantes
  var101: any = {};


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
      this.var21 = data[this.id];
      this.var22 = data[this.id];
      this.var23 = data[this.id];
      this.var24 = data[this.id];
      this.var25 = data[this.id];
      this.var26 = data[this.id];
      this.var27 = data[this.id];
      this.var28 = data[this.id];
      this.var29 = data[this.id];
      this.var30 = data[this.id];
      this.var31 = data[this.id];
      this.var32 = data[this.id];
      this.var33 = data[this.id];
      this.var34 = data[this.id];
      this.var35 = data[this.id];
      this.var36 = data[this.id];
      this.var37 = data[this.id];
      this.var38 = data[this.id];
      this.var39 = data[this.id];
      this.var40 = data[this.id];
      this.var41 = data[this.id];
      this.var42 = data[this.id];
      this.var43 = data[this.id];
      this.var44 = data[this.id];
      this.var45 = data[this.id];
      this.var46 = data[this.id];
      this.var47 = data[this.id];
      this.var48 = data[this.id];
      this.var49 = data[this.id];
      this.var50 = data[this.id];
      this.var51 = data[this.id];
      this.var52 = data[this.id];
      this.var53 = data[this.id];
      this.var54 = data[this.id];
      this.var55 = data[this.id];
      this.var56 = data[this.id];
      this.var57 = data[this.id];
      this.var58 = data[this.id];
      this.var59 = data[this.id];
      this.var60 = data[this.id];
      this.var61 = data[this.id];
      this.var62 = data[this.id];
      this.var63 = data[this.id];
      this.var64 = data[this.id];
      this.var65 = data[this.id];
      this.var66 = data[this.id];
      this.var67 = data[this.id];
      this.var68 = data[this.id];
      this.var69 = data[this.id];
      this.var70 = data[this.id];
      this.var71 = data[this.id];
      this.var72 = data[this.id];
      this.var73 = data[this.id];
      this.var74 = data[this.id];
      this.var75 = data[this.id];
      this.var76 = data[this.id];
      this.var77 = data[this.id];
      this.var78 = data[this.id];
      this.var79 = data[this.id];
      this.var80 = data[this.id];
      this.var81 = data[this.id];
      this.var82 = data[this.id];
      this.var83 = data[this.id];
      this.var84 = data[this.id];
      this.var85 = data[this.id];
      this.var86 = data[this.id];
      this.var87 = data[this.id];
      this.var88 = data[this.id];
      this.var89 = data[this.id];
      this.var90 = data[this.id];
      this.var91 = data[this.id];
      this.var92 = data[this.id];
      this.var93 = data[this.id];
      this.var94 = data[this.id];
      this.var95 = data[this.id];
      this.var96 = data[this.id];
      this.var97 = data[this.id];
      this.var98 = data[this.id];
      this.var99 = data[this.id];
      this.var100 = data[this.id];
      
      this.var101 = [{ name: this.var1.PARTICIPANTE1NAME, imagen: this.var1.PARTICIPANTE1IMAGEN, link: this.var1.PARTICIPANTE1LINK,},{name: this.var2.PARTICIPANTE2NAME, imagen: this.var2.PARTICIPANTE2IMAGEN, link: this.var2.PARTICIPANTE2LINK,},{name: this.var3.PARTICIPANTE3NAME, imagen: this.var3.PARTICIPANTE3IMAGEN, link: this.var3.PARTICIPANTE3LINK,},{name: this.var4.PARTICIPANTE4NAME, imagen: this.var4.PARTICIPANTE4IMAGEN, link: this.var4.PARTICIPANTE4LINK,},{name: this.var5.PARTICIPANTE5NAME, imagen: this.var5.PARTICIPANTE5IMAGEN, link: this.var5.PARTICIPANTE5LINK,},{name: this.var6.PARTICIPANTE6NAME, imagen: this.var6.PARTICIPANTE6IMAGEN, link: this.var6.PARTICIPANTE6LINK,},{name: this.var7.PARTICIPANTE7NAME, imagen: this.var7.PARTICIPANTE7IMAGEN, link: this.var7.PARTICIPANTE7LINK,},{name: this.var8.PARTICIPANTE8NAME, imagen: this.var8.PARTICIPANTE8IMAGEN, link: this.var8.PARTICIPANTE8LINK,},{name: this.var9.PARTICIPANTE9NAME, imagen: this.var9.PARTICIPANTE9IMAGEN, link: this.var9.PARTICIPANTE9LINK,},{name: this.var10.PARTICIPANTE10NAME, imagen: this.var10.PARTICIPANTE10IMAGEN, link: this.var10.PARTICIPANTE10LINK,},{name: this.var11.PARTICIPANTE11NAME, imagen: this.var11.PARTICIPANTE11IMAGEN, link: this.var11.PARTICIPANTE11LINK,},{name: this.var12.PARTICIPANTE12NAME, imagen: this.var12.PARTICIPANTE12IMAGEN, link: this.var12.PARTICIPANTE12LINK,},{name: this.var13.PARTICIPANTE13NAME, imagen: this.var13.PARTICIPANTE13IMAGEN, link: this.var13.PARTICIPANTE13LINK,},{name: this.var14.PARTICIPANTE14NAME, imagen: this.var14.PARTICIPANTE14IMAGEN, link: this.var14.PARTICIPANTE14LINK,},{name: this.var15.PARTICIPANTE15NAME, imagen: this.var15.PARTICIPANTE15IMAGEN, link: this.var15.PARTICIPANTE15LINK,},{name: this.var16.PARTICIPANTE16NAME, imagen: this.var16.PARTICIPANTE16IMAGEN, link: this.var16.PARTICIPANTE16LINK,},{name: this.var17.PARTICIPANTE17NAME, imagen: this.var17.PARTICIPANTE17IMAGEN, link: this.var17.PARTICIPANTE17LINK,},{name: this.var18.PARTICIPANTE18NAME, imagen: this.var18.PARTICIPANTE18IMAGEN, link: this.var18.PARTICIPANTE18LINK,},{name: this.var19.PARTICIPANTE19NAME, imagen: this.var19.PARTICIPANTE19IMAGEN, link: this.var19.PARTICIPANTE19LINK,},{name: this.var20.PARTICIPANTE20NAME, imagen: this.var20.PARTICIPANTE20IMAGEN, link: this.var20.PARTICIPANTE20LINK,},{name: this.var21.PARTICIPANTE21NAME, imagen: this.var21.PARTICIPANTE21IMAGEN, link: this.var21.PARTICIPANTE21LINK,},{name: this.var22.PARTICIPANTE22NAME, imagen: this.var22.PARTICIPANTE22IMAGEN, link: this.var22.PARTICIPANTE22LINK,},{name: this.var23.PARTICIPANTE23NAME, imagen: this.var23.PARTICIPANTE23IMAGEN, link: this.var23.PARTICIPANTE23LINK,},{name: this.var24.PARTICIPANTE24NAME, imagen: this.var24.PARTICIPANTE24IMAGEN, link: this.var24.PARTICIPANTE24LINK,},{name: this.var25.PARTICIPANTE25NAME, imagen: this.var25.PARTICIPANTE25IMAGEN, link: this.var25.PARTICIPANTE25LINK,},{name: this.var26.PARTICIPANTE26NAME, imagen: this.var26.PARTICIPANTE26IMAGEN, link: this.var26.PARTICIPANTE26LINK,},{name: this.var27.PARTICIPANTE27NAME, imagen: this.var27.PARTICIPANTE27IMAGEN, link: this.var27.PARTICIPANTE27LINK,},{name: this.var28.PARTICIPANTE28NAME, imagen: this.var28.PARTICIPANTE28IMAGEN, link: this.var28.PARTICIPANTE28LINK,},{name: this.var29.PARTICIPANTE29NAME, imagen: this.var29.PARTICIPANTE29IMAGEN, link: this.var29.PARTICIPANTE29LINK,},{name: this.var30.PARTICIPANTE30NAME, imagen: this.var30.PARTICIPANTE30IMAGEN, link: this.var30.PARTICIPANTE30LINK,},{name: this.var31.PARTICIPANTE31NAME, imagen: this.var31.PARTICIPANTE31IMAGEN, link: this.var31.PARTICIPANTE31LINK,},{name: this.var32.PARTICIPANTE32NAME, imagen: this.var32.PARTICIPANTE32IMAGEN, link: this.var32.PARTICIPANTE32LINK,},{name: this.var33.PARTICIPANTE33NAME, imagen: this.var33.PARTICIPANTE33IMAGEN, link: this.var33.PARTICIPANTE33LINK,},{name: this.var34.PARTICIPANTE34NAME, imagen: this.var34.PARTICIPANTE34IMAGEN, link: this.var34.PARTICIPANTE34LINK,},{name: this.var35.PARTICIPANTE35NAME, imagen: this.var35.PARTICIPANTE35IMAGEN, link: this.var35.PARTICIPANTE35LINK,},{name: this.var36.PARTICIPANTE36NAME, imagen: this.var36.PARTICIPANTE36IMAGEN, link: this.var36.PARTICIPANTE36LINK,},{name: this.var37.PARTICIPANTE37NAME, imagen: this.var37.PARTICIPANTE37IMAGEN, link: this.var37.PARTICIPANTE37LINK,},{name: this.var38.PARTICIPANTE38NAME, imagen: this.var38.PARTICIPANTE38IMAGEN, link: this.var38.PARTICIPANTE38LINK,},{name: this.var39.PARTICIPANTE39NAME, imagen: this.var39.PARTICIPANTE39IMAGEN, link: this.var39.PARTICIPANTE39LINK,},{name: this.var40.PARTICIPANTE40NAME, imagen: this.var40.PARTICIPANTE40IMAGEN, link: this.var40.PARTICIPANTE40LINK,},{name: this.var41.PARTICIPANTE41NAME, imagen: this.var41.PARTICIPANTE41IMAGEN, link: this.var41.PARTICIPANTE41LINK,},{name: this.var42.PARTICIPANTE42NAME, imagen: this.var42.PARTICIPANTE42IMAGEN, link: this.var42.PARTICIPANTE42LINK,},{name: this.var43.PARTICIPANTE43NAME, imagen: this.var43.PARTICIPANTE43IMAGEN, link: this.var43.PARTICIPANTE43LINK,},{name: this.var44.PARTICIPANTE44NAME, imagen: this.var44.PARTICIPANTE44IMAGEN, link: this.var44.PARTICIPANTE44LINK,},{name: this.var45.PARTICIPANTE45NAME, imagen: this.var45.PARTICIPANTE45IMAGEN, link: this.var45.PARTICIPANTE45LINK,},{name: this.var46.PARTICIPANTE46NAME, imagen: this.var46.PARTICIPANTE46IMAGEN, link: this.var46.PARTICIPANTE46LINK,},{name: this.var47.PARTICIPANTE47NAME, imagen: this.var47.PARTICIPANTE47IMAGEN, link: this.var47.PARTICIPANTE47LINK,},{name: this.var48.PARTICIPANTE48NAME, imagen: this.var48.PARTICIPANTE48IMAGEN, link: this.var48.PARTICIPANTE48LINK,},{name: this.var49.PARTICIPANTE49NAME, imagen: this.var49.PARTICIPANTE49IMAGEN, link: this.var49.PARTICIPANTE49LINK,},{name: this.var50.PARTICIPANTE50NAME, imagen: this.var50.PARTICIPANTE50IMAGEN, link: this.var50.PARTICIPANTE50LINK,},{name: this.var51.PARTICIPANTE51NAME, imagen: this.var51.PARTICIPANTE51IMAGEN, link: this.var51.PARTICIPANTE51LINK,},{name: this.var52.PARTICIPANTE52NAME, imagen: this.var52.PARTICIPANTE52IMAGEN, link: this.var52.PARTICIPANTE52LINK,},{name: this.var53.PARTICIPANTE53NAME, imagen: this.var53.PARTICIPANTE53IMAGEN, link: this.var53.PARTICIPANTE53LINK,},{name: this.var54.PARTICIPANTE54NAME, imagen: this.var54.PARTICIPANTE54IMAGEN, link: this.var54.PARTICIPANTE54LINK,},{name: this.var55.PARTICIPANTE55NAME, imagen: this.var55.PARTICIPANTE55IMAGEN, link: this.var55.PARTICIPANTE55LINK,},{name: this.var56.PARTICIPANTE56NAME, imagen: this.var56.PARTICIPANTE56IMAGEN, link: this.var56.PARTICIPANTE56LINK,},{name: this.var57.PARTICIPANTE57NAME, imagen: this.var57.PARTICIPANTE57IMAGEN, link: this.var57.PARTICIPANTE57LINK,},{name: this.var58.PARTICIPANTE58NAME, imagen: this.var58.PARTICIPANTE58IMAGEN, link: this.var58.PARTICIPANTE58LINK,},{name: this.var59.PARTICIPANTE59NAME, imagen: this.var59.PARTICIPANTE59IMAGEN, link: this.var59.PARTICIPANTE59LINK,},{name: this.var60.PARTICIPANTE60NAME, imagen: this.var60.PARTICIPANTE60IMAGEN, link: this.var60.PARTICIPANTE60LINK,},{name: this.var61.PARTICIPANTE61NAME, imagen: this.var61.PARTICIPANTE61IMAGEN, link: this.var61.PARTICIPANTE61LINK,},{name: this.var62.PARTICIPANTE62NAME, imagen: this.var62.PARTICIPANTE62IMAGEN, link: this.var62.PARTICIPANTE62LINK,},{name: this.var63.PARTICIPANTE63NAME, imagen: this.var63.PARTICIPANTE63IMAGEN, link: this.var63.PARTICIPANTE63LINK,},{name: this.var64.PARTICIPANTE64NAME, imagen: this.var64.PARTICIPANTE64IMAGEN, link: this.var64.PARTICIPANTE64LINK,},{name: this.var65.PARTICIPANTE65NAME, imagen: this.var65.PARTICIPANTE65IMAGEN, link: this.var65.PARTICIPANTE65LINK,},{name: this.var66.PARTICIPANTE66NAME, imagen: this.var66.PARTICIPANTE66IMAGEN, link: this.var66.PARTICIPANTE66LINK,},{name: this.var67.PARTICIPANTE67NAME, imagen: this.var67.PARTICIPANTE67IMAGEN, link: this.var67.PARTICIPANTE67LINK,},{name: this.var68.PARTICIPANTE68NAME, imagen: this.var68.PARTICIPANTE68IMAGEN, link: this.var68.PARTICIPANTE68LINK,},{name: this.var69.PARTICIPANTE69NAME, imagen: this.var69.PARTICIPANTE69IMAGEN, link: this.var69.PARTICIPANTE69LINK,},{name: this.var70.PARTICIPANTE70NAME, imagen: this.var70.PARTICIPANTE70IMAGEN, link: this.var70.PARTICIPANTE70LINK,},{name: this.var71.PARTICIPANTE71NAME, imagen: this.var71.PARTICIPANTE71IMAGEN, link: this.var71.PARTICIPANTE71LINK,},{name: this.var72.PARTICIPANTE72NAME, imagen: this.var72.PARTICIPANTE72IMAGEN, link: this.var72.PARTICIPANTE72LINK,},{name: this.var73.PARTICIPANTE73NAME, imagen: this.var73.PARTICIPANTE73IMAGEN, link: this.var73.PARTICIPANTE73LINK,},{name: this.var74.PARTICIPANTE74NAME, imagen: this.var74.PARTICIPANTE74IMAGEN, link: this.var74.PARTICIPANTE74LINK,},{name: this.var75.PARTICIPANTE75NAME, imagen: this.var75.PARTICIPANTE75IMAGEN, link: this.var75.PARTICIPANTE75LINK,},{name: this.var76.PARTICIPANTE76NAME, imagen: this.var76.PARTICIPANTE76IMAGEN, link: this.var76.PARTICIPANTE76LINK,},{name: this.var77.PARTICIPANTE77NAME, imagen: this.var77.PARTICIPANTE77IMAGEN, link: this.var77.PARTICIPANTE77LINK,},{name: this.var78.PARTICIPANTE78NAME, imagen: this.var78.PARTICIPANTE78IMAGEN, link: this.var78.PARTICIPANTE78LINK,},{name: this.var79.PARTICIPANTE79NAME, imagen: this.var79.PARTICIPANTE79IMAGEN, link: this.var79.PARTICIPANTE79LINK,},{name: this.var80.PARTICIPANTE80NAME, imagen: this.var80.PARTICIPANTE80IMAGEN, link: this.var80.PARTICIPANTE80LINK,},{name: this.var81.PARTICIPANTE81NAME, imagen: this.var81.PARTICIPANTE81IMAGEN, link: this.var81.PARTICIPANTE81LINK,},{name: this.var82.PARTICIPANTE82NAME, imagen: this.var82.PARTICIPANTE82IMAGEN, link: this.var82.PARTICIPANTE82LINK,},{name: this.var83.PARTICIPANTE83NAME, imagen: this.var83.PARTICIPANTE83IMAGEN, link: this.var83.PARTICIPANTE83LINK,},{name: this.var84.PARTICIPANTE84NAME, imagen: this.var84.PARTICIPANTE84IMAGEN, link: this.var84.PARTICIPANTE84LINK,},{name: this.var85.PARTICIPANTE85NAME, imagen: this.var85.PARTICIPANTE85IMAGEN, link: this.var85.PARTICIPANTE85LINK,},{name: this.var86.PARTICIPANTE86NAME, imagen: this.var86.PARTICIPANTE86IMAGEN, link: this.var86.PARTICIPANTE86LINK,},{name: this.var87.PARTICIPANTE87NAME, imagen: this.var87.PARTICIPANTE87IMAGEN, link: this.var87.PARTICIPANTE87LINK,},{name: this.var88.PARTICIPANTE88NAME, imagen: this.var88.PARTICIPANTE88IMAGEN, link: this.var88.PARTICIPANTE88LINK,},{name: this.var89.PARTICIPANTE89NAME, imagen: this.var89.PARTICIPANTE89IMAGEN, link: this.var89.PARTICIPANTE89LINK,},{name: this.var90.PARTICIPANTE90NAME, imagen: this.var90.PARTICIPANTE90IMAGEN, link: this.var90.PARTICIPANTE90LINK,},{name: this.var91.PARTICIPANTE91NAME, imagen: this.var91.PARTICIPANTE91IMAGEN, link: this.var91.PARTICIPANTE91LINK,},{name: this.var92.PARTICIPANTE92NAME, imagen: this.var92.PARTICIPANTE92IMAGEN, link: this.var92.PARTICIPANTE92LINK,},{name: this.var93.PARTICIPANTE93NAME, imagen: this.var93.PARTICIPANTE93IMAGEN, link: this.var93.PARTICIPANTE93LINK,},{name: this.var94.PARTICIPANTE94NAME, imagen: this.var94.PARTICIPANTE94IMAGEN, link: this.var94.PARTICIPANTE94LINK,},{name: this.var95.PARTICIPANTE95NAME, imagen: this.var95.PARTICIPANTE95IMAGEN, link: this.var95.PARTICIPANTE95LINK,},{name: this.var96.PARTICIPANTE96NAME, imagen: this.var96.PARTICIPANTE96IMAGEN, link: this.var96.PARTICIPANTE96LINK,},{name: this.var97.PARTICIPANTE97NAME, imagen: this.var97.PARTICIPANTE97IMAGEN, link: this.var97.PARTICIPANTE97LINK,},{name: this.var98.PARTICIPANTE98NAME, imagen: this.var98.PARTICIPANTE98IMAGEN, link: this.var98.PARTICIPANTE98LINK3,},{name: this.var99.PARTICIPANTE99NAME, imagen: this.var99.PARTICIPANTE99IMAGEN, link: this.var99.PARTICIPANTE99LINK,},{name: this.var100.PARTICIPANTE100NAME, imagen: this.var100.PARTICIPANTE100IMAGEN, link: this.var100.PARTICIPANTE100LINK,},];
      

      
    });

  }
  
}



