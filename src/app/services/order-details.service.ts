import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  serviceDetails = [
    {
      id:1,
      serviceName:"alpha",
      servicePrice: 69.42,
      serviceImg:"https://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Nick-Fury-icon.png"
    },
    {
      id:2,
      serviceName:"bread",
      servicePrice: 3.50,
      serviceImg:"https://icons.iconarchive.com/icons/hopstarter/bioman/512/Bioman-Avatar-4-Yellow-icon.png"
    },
    {
      id:3,
      serviceName:"firm handshake",
      servicePrice: 5.55,
      serviceImg:"https://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Emotes-face-angel-icon.png"
    },
    {
      id:4,
      serviceName:"two piece and a soda",
      servicePrice: 2.50,
      serviceImg:"https://icons.iconarchive.com/icons/inipagi/job-seeker/64/bag-icon.png"
    },
    {
      id:5,
      serviceName:"edmacation",
      servicePrice: 0.01,
      serviceImg:"https://icons.iconarchive.com/icons/vitorjapah/anime-dvd-cases/256/devil-may-cry-icon.png"
    },
  ]
}
