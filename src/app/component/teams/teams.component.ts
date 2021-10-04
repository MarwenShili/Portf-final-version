import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as $ from 'jquery';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';





@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  faSortDown=faSortDown
  constructor() { 
  }

  ngOnInit(): void {}

}
$(document).ready(() =>{
 //$('.carousel').owlCarousel({
    
    });
   //});
    
   