import { Component, EventEmitter, Output } from '@angular/core';
import { Clinica } from '../../../model/Clinica';
import { ClinicaService } from '../../../service/ClinicaService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clinica-form',
  templateUrl: './formulario.html',
  standalone: true,
  imports: [FormsModule],
  styleUrls: ['./formulario.css']
})
export class Formulario {
  @Output() clinicaGuardada = new EventEmitter<void>();

  nuevaClinica: Clinica = {
    nombre: '',
    direccion: '',
    cantidadCamas: 0,
    telefono: '',
    ciudad: '',
    fechaCreacion: ''
  };

  constructor(private clinicaService: ClinicaService) { }

  guardar(): void {
    this.clinicaService.create(this.nuevaClinica).subscribe(() => {
      this.clinicaGuardada.emit();
      this.limpiar();
    });
  }

  limpiar(): void {
    this.nuevaClinica = {
      nombre: '',
      direccion: '',
      cantidadCamas: 0,
      telefono: '',
      ciudad: '',
      fechaCreacion: ''
    };
  }
}