import { Component, OnInit } from '@angular/core';
import { ClinicaService } from '../../service/ClinicaService';
import { Clinica } from '../../model/Clinica';
import { Formulario } from "./formulario/formulario";

@Component({
  selector: 'app-clinica-page',
  templateUrl: './clinica-page.html',
  styleUrls: ['./clinica-page.css'],
  imports: [Formulario]
})
export class ClinicaPageComponent implements OnInit {
  clinicas: Clinica[] = [];

  constructor(private clinicaService: ClinicaService) { }

  ngOnInit(): void {
    this.cargarClinicas();
  }

  cargarClinicas(): void {
    this.clinicaService.getAll().subscribe(data => {
      this.clinicas = data;
    });
  }
}