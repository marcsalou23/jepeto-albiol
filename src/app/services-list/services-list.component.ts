import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css'],
})
export class ServicesListComponent implements OnInit {
  services: any[] = [
    [
      {
        name: 'Transporte y exquisita cata de vinos en el Priorat (ida y vuelta)',
        price: '50€ por persona',
        image: '../../assets/images/wine.jpg',
        description:
          'Disfrute de un día de transporte privado y degustación de vinos en el Priorat.',
      },
      {
        name: 'Transporte a Montserrat (ida y vuelta)',
        price: '40€ por persona',
        image: '../../assets/images/montserrat.jpg',
        description:
          'Excursión de día completo a la impresionante montaña de Montserrat.',
      },
      {
        name: 'Transporte a Barcelona (ida y vuelta)',
        price: '50€ por persona',
        image: '../../assets/images/barcelona.jpg',
        description: 'Viaje de ida y vuelta a la vibrante ciudad de Barcelona.',
      },
    ],
    [
      {
        name: 'Transporte a Salou (ida y vuelta)',
        price: '25€ por persona',
        image: '../../assets/images/salou.jpg',
        description: 'Traslado de ida y vuelta a las hermosas playas de Salou.',
      },
      {
        name: 'Visita Tarragona (ida y vuelta)',
        price: '30€ por persona',
        image: '../../assets/images/tarragona.jpg',
        description: 'Descubre la historia y la belleza de Tarragona.',
      },
      {
        name: 'Excursión guiada por las montañas de Prades (ida y vuelta)',
        price: '50€ por persona',
        image: '../../assets/images/prades.jpg',
        description:
          'Disfruta de la naturaleza y la aventura en las montañas de Prades.',
      },
    ],
    [
      {
        name: 'Personaliza tu viaje!',
        price: 'Variable',
        image: '../../assets/images/custom.jpg',
        description:
          'Dinos donde quieres ir y te haremos un presupuesto personalizado.',
      },
    ],
  ];

  constructor() {}

  ngOnInit(): void {}
}
