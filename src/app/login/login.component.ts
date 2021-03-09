import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mes:any;
  lista:any;
  constructor() { }

  ngOnInit(): void {
    this.mes = {
      lunes: [1, 8, 15, 22, 19],
      martes: [2, 9, 16, 23, 30],
      miercoles: [3, 10, 17, 24, 31],
      jueves: [4, 11, 18, 25],
      viernes: [5, 12, 19, 26],
      sabado: [6, 13, 20, 27],
      domingo: [7, 14 ,21, 28]
    };
    this.lista = [28, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 
                  16, 17 ,18 ,19 ,20 ,21, 22, 23, 24, 25 ,26 ,27, 28, 29,
                  30, 31];
  }


}
