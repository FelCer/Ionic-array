import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public arreglo: Array<{ pais: string, capital: string, poblacion: number,imagen:string }> = [
    { pais: 'CANADA', capital: 'OTTAWA', poblacion: 37346000,imagen:'../assets/imagenes/canada.jpg' },
    { pais: 'ESTADOS UNIDOS DE AMERICA', capital: 'WASHINGTON', poblacion: 329071000 ,imagen:'../assets/imagenes/washington.jpg' },
    { pais: 'MEXICO', capital: 'CIUDAD DE MEXICO', poblacion: 125357000 ,imagen:'../assets/imagenes/mexico.jpg' },
    { pais: 'ANTIGUA Y BARBUDA ', capital: 'SAINT JOHN’S', poblacion: 104000 ,imagen:'../assets/imagenes/antiguaybarbuda.jpg' },
    { pais: 'BAHAMAS ', capital: 'NASSAU', poblacion: 383000 ,imagen:'../assets/imagenes/bahamas.jpg' },
    { pais: 'BARBADOS ', capital: 'BRIDGETOWN', poblacion: 287000 ,imagen:'../assets/imagenes/barbados.jpg' },
    { pais: 'BELICE ', capital: 'BELMOPAN', poblacion: 403000,imagen:'../assets/imagenes/belice.jpg' },
    { pais: 'COSTA RICA', capital: 'SAN JOSÉ', poblacion: 5032000,imagen:'../assets/imagenes/costarica.jpg' },
    { pais: 'CUBA', capital: 'LA HABANA', poblacion: 11212000,imagen:'../assets/imagenes/cuba.jpg' },
    { pais: 'DOMINICA', capital: 'ROSEAU', poblacion: 74000,imagen:'../assets/imagenes/dominicana.jpg' },
    { pais: 'EL SALVADOR', capital: 'SAN SALVADOR', poblacion: 6675000,imagen:'../assets/imagenes/salvador.jpg' },
    { pais: 'GUATEMALA', capital: 'CIUDAD DE GUATEMALA', poblacion: 17545000,imagen:'../assets/imagenes/guatemala.jpg' },
    { pais: 'HAITÍ', capital: 'PUERTO PRÍNCIPE', poblacion: 11220000,imagen:'../assets/imagenes/haiti.jpg' },
    { pais: 'HONDURAS', capital: 'TEGUCIGALPA', poblacion: 9087000,imagen:'../assets/imagenes/honduras.jpg' },
    { pais: 'JAMAICA', capital: 'KINGSTON', poblacion: 2729000,imagen:'../assets/imagenes/jamaica.jpg' },
    { pais: 'NICARAGUA', capital: 'MANAGUA', poblacion: 6494000,imagen:'../assets/imagenes/nicaragua.jpg' },
    { pais: 'PANAMÁ', capital: 'CIUDAD DE PANAMÁ', poblacion: 4058372,imagen:'../assets/imagenes/panama.jpg' },
    { pais: 'PUERTO RICO', capital: 'SAN JUAN', poblacion: 2980532,imagen:'../assets/imagenes/puertorico.jpg' },
    { pais: 'REPÚBLICA DOMINICANA', capital: 'SANTO DOMINGO', poblacion: 10315000,imagen:'../assets/imagenes/republicadominicana.jpg' },
    { pais: 'SAN CRISTÓBAL Y NEVIS', capital: 'BASSETERRE', poblacion: 56000,imagen:'../assets/imagenes/sancritobalynievesbasseterre.jpg' },
    { pais: 'SAN VICENTE Y GRANADINAS', capital: 'KINGSTOWN', poblacion: 110000 ,imagen:'../assets/imagenes/sanvicenteygranadinas.jpg' },
    { pais: 'SANTA LUCÍA', capital: 'CASTRIES', poblacion: 180000 ,imagen:'../assets/imagenes/santalucia.jpg' },
    { pais: 'TRINIDAD Y TOBAGO', capital: 'PUERTO ESPAÑA', poblacion: 1361000 ,imagen:'../assets/imagenes/trinidaytobago.jpg' },
    { pais: 'ARGENTINA', capital: 'BUENOS AIRES', poblacion: 42890368 ,imagen:'../assets/imagenes/argentina.jpg' },
    { pais: 'BOLIVIA', capital: 'LA PAZ', poblacion: 10888000 ,imagen:'../assets/imagenes/bolivia.jpg' },
    { pais: 'BRASIL', capital: 'BRASILIA', poblacion: 202450649 ,imagen:'../assets/imagenes/brazil.jpg' },
    { pais: 'CHILE', capital: 'SANTIAGO', poblacion: 18261884 ,imagen:'../assets/imagenes/chile.jpg' },
    { pais: 'COLOMBIA', capital: 'BOGOTÁ', poblacion: 45520000 ,imagen:'../assets/imagenes/colombia.jpg' },
    { pais: 'ECUADOR', capital: 'QUITO', poblacion: 16298217,imagen:'../assets/imagenes/ecuador.jpg' },
    { pais: 'GUYANA,', capital: 'GEORGETOWN', poblacion: 761000 ,imagen:'../assets/imagenes/guyana.jpg' },
    { pais: 'GUAYANA FRANCESA', capital: 'CAYENA', poblacion: 187000 ,imagen:'../assets/imagenes/guatemalafrancesa.jpg' },
    { pais: 'PARAGUAY', capital: 'ASUNCIÓN', poblacion: 6953646 ,imagen:'../assets/imagenes/paraguay.jpg' },
    { pais: 'PERÚ', capital: 'LIMA', poblacion: 32252018 ,imagen:'../assets/imagenes/peru.jpg' },
    { pais: 'SURINAM', capital: 'PARAMARIBO', poblacion: 524000 ,imagen:'../assets/imagenes/surinam.jpg' },
    { pais: 'URUGUAY', capital: 'MONTEVIDEO', poblacion: 3372000 ,imagen:'../assets/imagenes/uruguay.jpg' },
    { pais: 'VENEZUELA', capital: 'CARACAS', poblacion: 31028337 ,imagen:'../assets/imagenes/venezuela.jpg' },
  ];
  constructor() {
    //this.mostrarPais();
    /*for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }*/

  }
  /*mostrarPais() {
    for (let i = 0; i < this.arreglo.length; i++) {
      pais: this.arreglo[i].pais;
      capital: this.arreglo[i].capital;
      poblacion: this.arreglo[i].poblacion;
      console.log(this.arreglo[i].pais,this.arreglo[i].capital,this.arreglo[i].poblacion);
    }
  }*/

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}

/**
 * function al(){
		for(i=0;i<arreglo.length;i++)
		{
				console.log(arreglo[i].pais);console.log(arreglo[i].capital);console.log(arreglo[i].poblacion)
		}
}
 */
