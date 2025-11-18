import { Component, Input } from '@angular/core';
import { Clinica } from '../../../model/Clinica';

@Component({
  selector: 'app-listado',
  imports: [],
  templateUrl: './listado.html',
  styleUrl: './listado.css',
})
export class Listado {
  @Input() clinicas: Clinica[] = [];
}
