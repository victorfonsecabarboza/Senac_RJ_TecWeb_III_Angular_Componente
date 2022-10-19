import { Component } from '@angular/core';
import { FuncinarioModel } from './funcionario/funcionario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetoFuncionario';

  funcionario1: FuncinarioModel = { nome: 'Gabriel', isMasculino: true, idade: 30 }

}