import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-detalle-product',
  templateUrl: './detalle-product.component.html',
  styleUrls: ['./detalle-product.component.scss']
})
export class DetalleProductComponent implements OnInit {
  imagesBasic = [
    { img: 'https://http2.mlstatic.com/D_NQ_NP_717592-MCO44199348832_112020-O.webp', thumb:
    'https://http2.mlstatic.com/D_NQ_NP_717592-MCO44199348832_112020-O.webp', description: 'Image 1' },
    { img: 'https://http2.mlstatic.com/D_NQ_NP_963536-MCO44199352688_112020-O.webp', thumb:
    'https://http2.mlstatic.com/D_NQ_NP_963536-MCO44199352688_112020-O.webp', description: 'Image 2' },
    { img: 'https://http2.mlstatic.com/D_NQ_NP_813524-MCO44199348852_112020-O.webp', thumb:
    'https://http2.mlstatic.com/D_NQ_NP_813524-MCO44199348852_112020-O.webp', description: 'Image 3' },
    { img: 'https://http2.mlstatic.com/D_NQ_NP_617809-MCO44199357458_112020-O.webp', thumb:
    'https://http2.mlstatic.com/D_NQ_NP_617809-MCO44199357458_112020-O.webp', description: 'Image 4' }
    ]

    lista:Array<any> = [];
  config: any;
  fullpage_api: any;

  constructor( ) {
    

    // for more details on config options please visit fullPage.js docs
    this.config = {

      // fullpage options
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      menu: '#menu',

      // fullpage callbacks
      afterResize: () => {
        console.log("After resize");
      },
      afterLoad: (origin, destination, direction) => {
        console.log(origin.index);
      }
    };
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }


  ngOnInit(): void {
    this.lista = Array.from({length:100},(v,k)=>k+1);
        
      }
}
