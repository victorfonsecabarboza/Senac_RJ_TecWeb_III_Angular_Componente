import { Component, Input, OnInit } from '@angular/core';
import { FuncinarioModel } from './funcionario.model';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  funcionarioUnico: FuncinarioModel = { nome: 'Victor', isMasculino: true, idade: 34 }

  funcionarios: FuncinarioModel[] = [
    { nome: 'João', isMasculino: true, idade: 45 },
    { nome: 'Flavia', isMasculino: false, idade: 25 }
  ]

  @Input() funcionario!: FuncinarioModel;

}
