import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import * as $ from 'jquery';
//import { faFilm } from '@fortawesome/free-solid-svg-icons';
faBars


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  faBars = faBars

  constructor() {
    

   }
  ngOnInit(): void {
    $(document).ready(() =>{
      $(window).scroll(function(){
        if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
        }else{
          $('.navbar').removeClass("sticky");
    
        }
      });
      //toggle menu/navbar script 
      $('.menu-btn').click(function(){
          $('.navbar .menu').toggleClass("active"); 
          $('.menu-btn i').toggleClass("active"); 

        })
    });
  }

}

