import { Component, OnInit } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';
import Typed from 'typed.js';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  faDownload=faDownload
  constructor() { }

  ngOnInit(): void {

$(document).ready(() =>{
  var typed = new Typed(".typing-2",{
    strings: [/*"Front-end developer",*/"Full Stack Web Developer","Designer","Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop:true,
    showCursor: true,

  })
  });

  }

}
