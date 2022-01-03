import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {} // Melhor manter o construtor somente para injeção de dependência

  ngOnInit(): void {} // Qualquer inicialização/configuração faz no OnInit

}
