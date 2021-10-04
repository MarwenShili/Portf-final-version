import { Component, OnInit } from '@angular/core';
import { faConnectdevelop } from '@fortawesome/free-brands-svg-icons';
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-myservices',
  templateUrl: './myservices.component.html',
  styleUrls: ['./myservices.component.css']
})
export class MyservicesComponent implements OnInit {
  faPaintBrush = faPaintBrush
  faConnectdevelop = faConnectdevelop
  faCode=faCode
  faMobile=faMobile
  constructor() { }

  ngOnInit(): void {
  }

}
